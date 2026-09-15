import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema(
  {
    tran_id: {
      type: String,
      required: true,
      unique: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      default: 'BDT',
    },
    status: {
      type: String,
      enum: ['PENDING', 'PAID', 'FAILED', 'CANCELLED'],
      default: 'PENDING',
    },
    val_id: {
      type: String,
    },
    bank_tran_id: {
      type: String,
    },
    card_type: {
      type: String,
    },
    card_brand: {
      type: String,
    },
    customer: {
      name: String,
      email: String,
      phone: String,
      address: String,
    },
    paymentDetails: {
      type: mongoose.Schema.Types.Mixed,
    },
  },
  {
    timestamps: true,
  }
);

const Payment = mongoose.model('Payment', paymentSchema);

export default Payment;
