import mongoose from 'mongoose';

const successStorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    position: { type: String },
    company: { type: String },
    companyColor: { type: String, default: '#3b82f6' },
    companyBg: { type: String, default: '#eff6ff' },
    photo: { type: String, required: true }, // URL
    previousBackground: { type: String },
    salaryGrowth: { type: String },
    course: { type: String },
    summary: { type: String },
    linkedin: { type: String },
    rating: { type: Number, default: 5, min: 1, max: 5 },
    gradYear: { type: String },
    verified: { type: Boolean, default: true },
    isPublished: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const SuccessStory = mongoose.model('SuccessStory', successStorySchema);

export default SuccessStory;
