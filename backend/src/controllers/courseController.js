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

    // Parse complex fields sent as JSON strings from FormData
    ['learningOutcomes', 'curriculum', 'features', 'faq'].forEach((field) => {
      if (courseData[field] && typeof courseData[field] === 'string') {
        try {
          courseData[field] = JSON.parse(courseData[field]);
        } catch (e) {
          console.error(`Error parsing ${field}:`, e);
        }
      }
    });

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
    const { id } = req.params;

    // 1. Validate ObjectId
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ success: false, error: 'Invalid course ID format.' });
    }

    // 2. Find existing course to verify it exists and check old values
    const existingCourse = await Course.findById(id);
    if (!existingCourse) {
      return res.status(404).json({ success: false, error: 'Course not found in database.' });
    }

    // 3. Extract body data
    const courseData = { ...req.body };

    // 4. Safely parse JSON stringified arrays from FormData
    const jsonFields = ['learningOutcomes', 'curriculum', 'features', 'faq'];
    jsonFields.forEach((field) => {
      if (courseData[field] && typeof courseData[field] === 'string') {
        try {
          courseData[field] = JSON.parse(courseData[field]);
        } catch (err) {
          console.error(`Failed to parse ${field}:`, err);
          // If parsing fails, remove it so we don't overwrite with corrupted data
          delete courseData[field];
        }
      }
    });

    // 5. Smart Slug Update: Only change slug if title actually changed
    if (courseData.title && courseData.title.trim() !== existingCourse.title) {
      courseData.slug = slugify(courseData.title, {
        lower: true,
        strict: true,
      });
    }

    // 6. Handle Image Upload via Cloudinary (if a new file was uploaded)
    if (req.file) {
      try {
        const result = await uploadToCloudinary(req.file.buffer, 'courses');
        courseData.image = result.secure_url;
      } catch (uploadError) {
        console.error("Cloudinary Upload Error:", uploadError);
        return res.status(500).json({ success: false, error: 'Image upload failed.' });
      }
    }

    // 7. Update Course using explicit $set to prevent document replacement bugs
    const updatedCourse = await Course.findByIdAndUpdate(
      id,
      { $set: courseData },
      { new: true, runValidators: true }
    );

    res.status(200).json({ success: true, data: updatedCourse });
  } catch (error) {
    console.error("Update Course Error:", error);
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
