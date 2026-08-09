import mongoose from 'mongoose';

const curriculumSchema = new mongoose.Schema({
  id: String,
  title: String,
  duration: String,
  topics: [String],
});

const featureSchema = new mongoose.Schema({
  id: String,
  title: String,
  desc: String,
});

const faqSchema = new mongoose.Schema({
  id: String,
  q: String,
  a: String,
});

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    instructor: { type: String },
    instructorRole: { type: String },
    instructorExperience: { type: String },
    instructorImage: { type: String },
    instructorBio: { type: String },
    duration: { type: String },
    projects: { type: String },
    students: { type: String },
    level: { type: String },
    rating: { type: Number, default: 0 },
    reviewsCount: { type: String },
    price: { type: String },
    originalPrice: { type: String },
    certificate: { type: String },
    image: { type: String, required: true },
    featured: { type: Boolean, default: false },
    shortDescription: { type: String },
    fullDescription: { type: String },
    learningOutcomes: [String],
    curriculum: [curriculumSchema],
    features: [featureSchema],
    faq: [faqSchema],
    isPublished: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.model('Course', courseSchema);

export default Course;
