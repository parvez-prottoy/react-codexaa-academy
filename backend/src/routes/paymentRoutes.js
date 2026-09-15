import express from 'express';
import {
  initiatePayment,
  handlePaymentSuccess,
  handlePaymentFail,
  handlePaymentCancel,
  handlePaymentIPN,
  renderSandboxPay,
} from '../controllers/paymentController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Protected route to initiate enrollment payment
router.post('/init', protect, initiatePayment);

// SSLCommerz callback routes (public POST endpoints called by SSLCommerz)
router.post('/success', handlePaymentSuccess);
router.post('/fail', handlePaymentFail);
router.post('/cancel', handlePaymentCancel);
router.post('/ipn', handlePaymentIPN);

// Development Sandbox Simulation Gateway
router.get('/sandbox-pay/:tran_id', renderSandboxPay);

export default router;
