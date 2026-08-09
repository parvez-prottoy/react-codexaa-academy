import mongoose from 'mongoose';

const successStorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    position: { type: String },
    company: { type: String },
    companyLogo: { type: String }, // URL
    photo: { type: String, required: true }, // URL
    previousBackground: { type: String },
    currentAchievement: { type: String },
    salaryGrowth: { type: String },
    course: { type: String },
    summary: { type: String },
    linkedin: { type: String },
    badge: { type: String },
    isPublished: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const SuccessStory = mongoose.model('SuccessStory', successStorySchema);

export default SuccessStory;
