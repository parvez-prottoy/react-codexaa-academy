import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: { type: String },
    company: { type: String },
    companyLogoText: { type: String },
    companyColor: { type: String },
    companyBg: { type: String },
    avatar: { type: String, required: true },
    quote: { type: String, required: true },
    rating: { type: Number, default: 5 },
    course: { type: String },
    gradYear: { type: String },
    verified: { type: Boolean, default: true },
    linkedinUrl: { type: String },
    achievement: { type: String },
    isPublished: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

export default Testimonial;
