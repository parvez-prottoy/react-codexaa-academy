import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    date: { type: String }, // Storing as string to match existing data e.g. "August 2026", or could be Date
    author: { type: String },
    readTime: { type: String },
    image: { type: String, required: true },
    description: { type: String, required: true },
    featured: { type: Boolean, default: false },
    isPublished: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const News = mongoose.model('News', newsSchema);

export default News;
