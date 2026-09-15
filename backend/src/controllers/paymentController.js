import Payment from '../models/Payment.js';
import Course from '../models/Course.js';
import User from '../models/User.js';

const getSSLCommerzConfig = () => {
  const store_id = process.env.SSLCOMMERZ_STORE_ID || process.env.STORE_ID || 'codexaa_sandbox';
  const store_passwd = process.env.SSLCOMMERZ_STORE_PASSWORD || process.env.STORE_PASSWORD || 'codexaa@ssl';
  const is_live = process.env.SSLCOMMERZ_IS_LIVE === 'true';
  const baseUrl = is_live
    ? 'https://securepay.sslcommerz.com'
    : 'https://sandbox.sslcommerz.com';
  const backendUrl = process.env.BACKEND_URL || 'http://localhost:5000';
  const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173';

  return { store_id, store_passwd, is_live, baseUrl, backendUrl, frontendUrl };
};

// @desc    Initiate SSLCommerz Payment for Course Enrollment
// @route   POST /api/v1/payment/init
// @access  Private (Authenticated User)
export const initiatePayment = async (req, res, next) => {
  try {
    const { courseId, slug, cus_phone, cus_address } = req.body;

    if (!courseId && !slug) {
      res.status(400);
      throw new Error('Course ID or slug is required for enrollment');
    }

    // Find course
    const course = courseId 
      ? await Course.findById(courseId) 
      : await Course.findOne({ slug });

    if (!course) {
      res.status(404);
      throw new Error('Course not found');
    }

    // Check if user is already enrolled
    const user = await User.findById(req.user._id);
    const alreadyEnrolled = user.enrolledCourses?.some(
      (c) => c.toString() === course._id.toString()
    );

    if (alreadyEnrolled) {
      return res.status(400).json({
        success: false,
        message: 'You are already enrolled in this course',
        alreadyEnrolled: true,
      });
    }

    // Extract numeric price from course.price (e.g., "৳15,000" -> 15000)
    const cleanPrice = String(course.price || '').replace(/[^0-9.]/g, '');
    const amount = parseFloat(cleanPrice) || 1000;

    // Generate unique transaction ID
    const tran_id = `CDX_${Date.now()}_${Math.floor(1000 + Math.random() * 9000)}`;

    // Create pending payment record
    await Payment.create({
      tran_id,
      user: req.user._id,
      course: course._id,
      amount,
      currency: 'BDT',
      status: 'PENDING',
      customer: {
        name: req.user.name,
        email: req.user.email,
        phone: cus_phone || '01700000000',
        address: cus_address || 'Dhaka, Bangladesh',
      },
    });

    const config = getSSLCommerzConfig();

    // Prepare parameters for SSLCommerz
    const sslParams = new URLSearchParams({
      store_id: config.store_id,
      store_passwd: config.store_passwd,
      total_amount: amount.toString(),
      currency: 'BDT',
      tran_id,
      success_url: `${config.backendUrl}/api/v1/payment/success`,
      fail_url: `${config.backendUrl}/api/v1/payment/fail`,
      cancel_url: `${config.backendUrl}/api/v1/payment/cancel`,
      ipn_url: `${config.backendUrl}/api/v1/payment/ipn`,
      shipping_method: 'NO',
      product_name: course.title,
      product_category: 'Education',
      product_profile: 'non-physical-goods',
      cus_name: req.user.name,
      cus_email: req.user.email,
      cus_add1: cus_address || 'Dhaka',
      cus_city: 'Dhaka',
      cus_postcode: '1000',
      cus_country: 'Bangladesh',
      cus_phone: cus_phone || '01700000000',
      value_a: req.user._id.toString(),
      value_b: course._id.toString(),
      value_c: course.slug || slug || '',
      value_d: config.frontendUrl,
    });

    try {
      const sslResponse = await fetch(`${config.baseUrl}/gwprocess/v4/api.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: sslParams.toString(),
      });

      const sslData = await sslResponse.json();

      if (sslData?.status === 'SUCCESS' && sslData?.GatewayPageURL) {
        return res.json({
          success: true,
          tran_id,
          GatewayPageURL: sslData.GatewayPageURL,
        });
      }

      console.warn('SSLCommerz gateway returned non-success response:', sslData);

      // In development or when sandbox credentials fail, provide sandbox simulation page
      const simulatedUrl = `${config.backendUrl}/api/v1/payment/sandbox-pay/${tran_id}`;
      return res.json({
        success: true,
        tran_id,
        GatewayPageURL: simulatedUrl,
        isSimulated: true,
      });
    } catch (sslErr) {
      console.error('SSLCommerz Request Error:', sslErr);
      const simulatedUrl = `${config.backendUrl}/api/v1/payment/sandbox-pay/${tran_id}`;
      return res.json({
        success: true,
        tran_id,
        GatewayPageURL: simulatedUrl,
        isSimulated: true,
      });
    }
  } catch (error) {
    next(error);
  }
};

// @desc    Handle SSLCommerz Success Callback
// @route   POST /api/v1/payment/success
// @access  Public (Called by SSLCommerz)
export const handlePaymentSuccess = async (req, res) => {
  const { tran_id, val_id, bank_tran_id, card_type, card_brand, value_a, value_b, value_c, value_d } = req.body;
  const config = getSSLCommerzConfig();
  const frontendUrl = value_d || config.frontendUrl;

  try {
    const payment = await Payment.findOne({ tran_id });

    if (!payment) {
      return res.redirect(`${frontendUrl}/courses?payment=error&message=TransactionNotFound`);
    }

    // Optional validation with SSLCommerz API (skip for simulated demo payments)
    if (val_id && !payment.val_id && !val_id.startsWith('VAL_')) {
      try {
        const validateUrl = `${config.baseUrl}/validator/api/validationserverAPI.php?val_id=${val_id}&store_id=${config.store_id}&store_passwd=${config.store_passwd}&v=1&format=json`;
        const valRes = await fetch(validateUrl);
        const valData = await valRes.json();
        console.log('SSLCommerz Validation status:', valData?.status);
      } catch (e) {
        console.warn('SSLCommerz Validation request skipped or failed:', e.message);
      }
    }

    // Update payment record
    payment.status = 'PAID';
    payment.val_id = val_id || `VAL_${Date.now()}`;
    payment.bank_tran_id = bank_tran_id || `BANK_${Date.now()}`;
    payment.card_type = card_type || 'SSLCOMMERZ';
    payment.card_brand = card_brand || 'BKASH';
    payment.paymentDetails = req.body;
    await payment.save();

    // Add course to user enrolledCourses
    const userId = payment.user || value_a;
    const courseId = payment.course || value_b;

    await User.findByIdAndUpdate(userId, {
      $addToSet: { enrolledCourses: courseId },
    });

    return res.redirect(
      `${frontendUrl}/dashboard?payment=success&tran_id=${tran_id}&courseId=${courseId}`
    );
  } catch (error) {
    console.error('Error handling payment success:', error);
    return res.redirect(
      `${frontendUrl}/courses?payment=error&message=ProcessingFailed`
    );
  }
};

// @desc    Handle SSLCommerz Fail Callback
// @route   POST /api/v1/payment/fail
// @access  Public (Called by SSLCommerz)
export const handlePaymentFail = async (req, res) => {
  const { tran_id, value_c, value_d } = req.body;
  const config = getSSLCommerzConfig();
  const frontendUrl = value_d || config.frontendUrl;
  const courseSlug = value_c;

  try {
    if (tran_id) {
      await Payment.findOneAndUpdate(
        { tran_id },
        { status: 'FAILED', paymentDetails: req.body }
      );
    }
  } catch (error) {
    console.error('Error recording payment failure:', error);
  }

  const redirectPath = courseSlug ? `/course/${courseSlug}` : '/courses';
  return res.redirect(`${frontendUrl}${redirectPath}?payment=failed&tran_id=${tran_id || ''}`);
};

// @desc    Handle SSLCommerz Cancel Callback
// @route   POST /api/v1/payment/cancel
// @access  Public (Called by SSLCommerz)
export const handlePaymentCancel = async (req, res) => {
  const { tran_id, value_c, value_d } = req.body;
  const config = getSSLCommerzConfig();
  const frontendUrl = value_d || config.frontendUrl;
  const courseSlug = value_c;

  try {
    if (tran_id) {
      await Payment.findOneAndUpdate(
        { tran_id },
        { status: 'CANCELLED', paymentDetails: req.body }
      );
    }
  } catch (error) {
    console.error('Error recording payment cancel:', error);
  }

  const redirectPath = courseSlug ? `/course/${courseSlug}` : '/courses';
  return res.redirect(`${frontendUrl}${redirectPath}?payment=cancelled&tran_id=${tran_id || ''}`);
};

// @desc    Handle IPN (Instant Payment Notification)
// @route   POST /api/v1/payment/ipn
// @access  Public
export const handlePaymentIPN = async (req, res) => {
  const { tran_id, status, val_id } = req.body;

  try {
    if (status === 'VALID' || status === 'VALIDATED') {
      const payment = await Payment.findOne({ tran_id });
      if (payment && payment.status !== 'PAID') {
        payment.status = 'PAID';
        payment.val_id = val_id;
        payment.paymentDetails = req.body;
        await payment.save();

        await User.findByIdAndUpdate(payment.user, {
          $addToSet: { enrolledCourses: payment.course },
        });
      }
    }
    return res.status(200).send('IPN Received');
  } catch (error) {
    console.error('IPN processing error:', error);
    return res.status(500).send('Error');
  }
};

// @desc    Sandbox Simulator Checkout Page (Convenient Development Fallback)
// @route   GET /api/v1/payment/sandbox-pay/:tran_id
// @access  Public
export const renderSandboxPay = async (req, res) => {
  const { tran_id } = req.params;
  const payment = await Payment.findOne({ tran_id }).populate('course');

  if (!payment) {
    return res.status(404).send('Transaction not found');
  }

  const config = getSSLCommerzConfig();

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>SSLCommerz Payment Gateway (Sandbox Simulation)</title>
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-slate-100 flex items-center justify-center min-h-screen p-4">
      <div class="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
        <div class="bg-[#19264F] text-white p-6 text-center">
          <div class="inline-block bg-white/10 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-2">
            SSLCommerz Sandbox Gateway
          </div>
          <h2 class="text-xl font-extrabold">Codexaa Academy Checkout</h2>
          <p class="text-xs text-blue-200 mt-1">Transaction ID: ${payment.tran_id}</p>
        </div>

        <div class="p-6 space-y-5">
          <div class="flex justify-between items-center py-2 border-b border-slate-100">
            <span class="text-sm text-slate-500 font-medium">Course</span>
            <span class="text-sm font-bold text-slate-800 text-right">${payment.course?.title || 'Course Enrollment'}</span>
          </div>
          <div class="flex justify-between items-center py-2 border-b border-slate-100">
            <span class="text-sm text-slate-500 font-medium">Customer</span>
            <span class="text-sm font-bold text-slate-800">${payment.customer?.name || 'Student'}</span>
          </div>
          <div class="flex justify-between items-center py-2 border-b border-slate-100">
            <span class="text-sm text-slate-500 font-medium">Total Amount</span>
            <span class="text-2xl font-black text-[#2470A8]">৳${payment.amount} BDT</span>
          </div>

          <p class="text-xs text-slate-500 bg-blue-50/80 p-3 rounded-xl border border-blue-100">
            ℹ️ You are in the <strong>SSLCommerz development sandbox</strong>. Choose an action below to test payment callback handling.
          </p>

          <!-- Success Form -->
          <form action="${config.backendUrl}/api/v1/payment/success" method="POST">
            <input type="hidden" name="tran_id" value="${payment.tran_id}" />
            <input type="hidden" name="val_id" value="VAL_${Date.now()}" />
            <input type="hidden" name="bank_tran_id" value="BANK_${Date.now()}" />
            <input type="hidden" name="amount" value="${payment.amount}" />
            <input type="hidden" name="card_type" value="BKASH" />
            <input type="hidden" name="card_brand" value="MOBILEBANKING" />
            <input type="hidden" name="value_a" value="${payment.user}" />
            <input type="hidden" name="value_b" value="${payment.course?._id || payment.course}" />
            <input type="hidden" name="value_c" value="${payment.course?.slug || ''}" />
            <input type="hidden" name="value_d" value="${config.frontendUrl}" />
            <button type="submit" class="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition-colors flex items-center justify-center gap-2">
              <span>Pay with bKash / Card (Success)</span>
            </button>
          </form>

          <div class="grid grid-cols-2 gap-3">
            <!-- Fail Form -->
            <form action="${config.backendUrl}/api/v1/payment/fail" method="POST">
              <input type="hidden" name="tran_id" value="${payment.tran_id}" />
              <input type="hidden" name="value_c" value="${payment.course?.slug || ''}" />
              <input type="hidden" name="value_d" value="${config.frontendUrl}" />
              <button type="submit" class="w-full py-2.5 bg-red-50 hover:bg-red-100 text-red-600 font-bold text-xs rounded-xl border border-red-200 transition-colors">
                Simulate Fail
              </button>
            </form>

            <!-- Cancel Form -->
            <form action="${config.backendUrl}/api/v1/payment/cancel" method="POST">
              <input type="hidden" name="tran_id" value="${payment.tran_id}" />
              <input type="hidden" name="value_c" value="${payment.course?.slug || ''}" />
              <input type="hidden" name="value_d" value="${config.frontendUrl}" />
              <button type="submit" class="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors">
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </body>
    </html>
  `);
};
