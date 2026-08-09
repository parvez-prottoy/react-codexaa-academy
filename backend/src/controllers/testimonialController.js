import Testimonial from '../models/Testimonial.js';
import { uploadToCloudinary } from '../utils/cloudinary.js';

// @desc    Get all testimonials
// @route   GET /api/v1/testimonials
// @access  Public
export const getTestimonials = async (req, res, next) => {
  try {
    const testimonials = await Testimonial.find({ isPublished: true }).sort('-createdAt');
    res.json({ success: true, count: testimonials.length, data: testimonials });
  } catch (error) {
    next(error);
  }
};

// @desc    Create a testimonial
// @route   POST /api/v1/testimonials
// @access  Private/Admin
export const createTestimonial = async (req, res, next) => {
  try {
    const testimonialData = { ...req.body };

    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer, 'testimonials');
      testimonialData.avatar = result.secure_url;
    }

    const testimonial = await Testimonial.create(testimonialData);
    res.status(201).json({ success: true, data: testimonial });
  } catch (error) {
    next(error);
  }
};

// @desc    Update a testimonial
// @route   PUT /api/v1/testimonials/:id
// @access  Private/Admin
export const updateTestimonial = async (req, res, next) => {
  try {
    const testimonialData = { ...req.body };

    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer, 'testimonials');
      testimonialData.avatar = result.secure_url;
    }

    const testimonial = await Testimonial.findByIdAndUpdate(req.params.id, testimonialData, {
      new: true,
      runValidators: true,
    });

    if (!testimonial) {
      res.status(404);
      throw new Error('Testimonial not found');
    }
    res.json({ success: true, data: testimonial });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete a testimonial
// @route   DELETE /api/v1/testimonials/:id
// @access  Private/Admin
export const deleteTestimonial = async (req, res, next) => {
  try {
    const testimonial = await Testimonial.findByIdAndDelete(req.params.id);
    if (!testimonial) {
      res.status(404);
      throw new Error('Testimonial not found');
    }
    res.json({ success: true, data: {} });
  } catch (error) {
    next(error);
  }
};
