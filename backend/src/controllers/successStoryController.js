import SuccessStory from '../models/SuccessStory.js';
import { uploadToCloudinary } from '../utils/cloudinary.js';

// @desc    Get all success stories
// @route   GET /api/v1/success-stories
// @access  Public
export const getSuccessStories = async (req, res, next) => {
  try {
    const stories = await SuccessStory.find({ isPublished: true }).sort('-createdAt');
    res.json({ success: true, count: stories.length, data: stories });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single success story
// @route   GET /api/v1/success-stories/:id
// @access  Public
export const getSuccessStoryById = async (req, res, next) => {
  try {
    const story = await SuccessStory.findById(req.params.id);
    if (!story) {
      res.status(404);
      throw new Error('Story not found');
    }
    res.json({ success: true, data: story });
  } catch (error) {
    next(error);
  }
};

// @desc    Create a success story
// @route   POST /api/v1/success-stories
// @access  Private/Admin
export const createSuccessStory = async (req, res, next) => {
  try {
    const storyData = { ...req.body };

    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer, 'success-stories');
      storyData.photo = result.secure_url;
    }

    const story = await SuccessStory.create(storyData);
    res.status(201).json({ success: true, data: story });
  } catch (error) {
    next(error);
  }
};

// @desc    Update a success story
// @route   PUT /api/v1/success-stories/:id
// @access  Private/Admin
export const updateSuccessStory = async (req, res, next) => {
  try {
    const storyData = { ...req.body };

    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer, 'success-stories');
      storyData.photo = result.secure_url;
    }

    const story = await SuccessStory.findByIdAndUpdate(req.params.id, storyData, {
      new: true,
      runValidators: true,
    });

    if (!story) {
      res.status(404);
      throw new Error('Story not found');
    }
    res.json({ success: true, data: story });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete a success story
// @route   DELETE /api/v1/success-stories/:id
// @access  Private/Admin
export const deleteSuccessStory = async (req, res, next) => {
  try {
    const story = await SuccessStory.findByIdAndDelete(req.params.id);
    if (!story) {
      res.status(404);
      throw new Error('Story not found');
    }
    res.json({ success: true, data: {} });
  } catch (error) {
    next(error);
  }
};
