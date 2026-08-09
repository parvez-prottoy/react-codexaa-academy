import mongoose from 'mongoose';

const companySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    abbr: { type: String },
    logo: { type: String, required: true }, // URL
    color: { type: String },
    lightBg: { type: String },
    country: { type: String },
    category: { type: String, enum: ['national', 'international'] },
    isPublished: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const Company = mongoose.model('Company', companySchema);

export default Company;
