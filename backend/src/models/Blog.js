import mongoose from 'mongoose';

const contentBlockSchema = new mongoose.Schema({
  type: { type: String, enum: ['paragraph', 'heading', 'image', 'list'], required: true },
  text: String,
  url: String, // For image blocks
});

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    excerpt: { type: String, required: true },
    author: { type: String },
    authorRole: { type: String },
    authorImage: { type: String },
    publishDate: { type: String },
    readingTime: { type: String },
    coverImage: { type: String, required: true },
    featured: { type: Boolean, default: false },
    tags: [String],
    content: [contentBlockSchema],
    isPublished: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;
