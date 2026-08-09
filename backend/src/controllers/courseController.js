import slugify from 'slugify';
import Course from '../models/Course.js';
import { uploadToCloudinary } from '../utils/cloudinary.js';

// @desc    Get all courses
// @route   GET /api/v1/courses
// @access  Public
export const getCourses = async (req, res, next) => {
  try {
    const filter = { isPublished: true };
    if (req.query.featured === 'true') {
      filter.featured = true;
    }
    if (req.query.category) {
      filter.category = req.query.category;
    }

    const courses = await Course.find(filter).sort('-createdAt');
    res.json({ success: true, count: courses.length, data: courses });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single course by slug
// @route   GET /api/v1/courses/:slug
// @access  Public
export const getCourseBySlug = async (req, res, next) => {
  try {
    const course = await Course.findOne({ slug: req.params.slug });
    if (!course) {
      res.status(404);
      throw new Error('Course not found');
    }
    res.json({ success: true, data: course });
  } catch (error) {
    next(error);
  }
};

// @desc    Create a course
// @route   POST /api/v1/courses
// @access  Private/Admin
export const createCourse = async (req, res, next) => {
  try {
    const courseData = { ...req.body };

    if (!courseData.slug && courseData.title) {
      courseData.slug = slugify(courseData.title, {
        lower: true,
        strict: true,
      });
    }

    // Handle Image Upload
    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer, 'courses');
      courseData.image = result.secure_url;
    }

    const course = await Course.create(courseData);
    res.status(201).json({ success: true, data: course });
  } catch (error) {
    next(error);
  }
};

// @desc    Update a course
// @route   PUT /api/v1/courses/:id
// @access  Private/Admin
export const updateCourse = async (req, res, next) => {
  try {
    const courseData = { ...req.body };

    if (courseData.title && !courseData.slug) {
      courseData.slug = slugify(courseData.title, {
        lower: true,
        strict: true,
      });
    }

    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer, 'courses');
      courseData.image = result.secure_url;
    }

    const course = await Course.findByIdAndUpdate(req.params.id, courseData, {
      new: true,
      runValidators: true,
    });

    if (!course) {
      res.status(404);
      throw new Error('Course not found');
    }
    res.json({ success: true, data: course });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete a course
// @route   DELETE /api/v1/courses/:id
// @access  Private/Admin
export const deleteCourse = async (req, res, next) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) {
      res.status(404);
      throw new Error('Course not found');
    }
    res.json({ success: true, data: {} });
  } catch (error) {
    next(error);
  }
};
