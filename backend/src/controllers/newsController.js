import News from '../models/News.js';
import slugify from 'slugify';
import { uploadToCloudinary } from '../utils/cloudinary.js';

// @desc    Get all news
// @route   GET /api/v1/news
// @access  Public
export const getNews = async (req, res, next) => {
  try {
    const filter = { isPublished: true };
    if (req.query.featured === 'true') {
      filter.featured = true;
    }

    const news = await News.find(filter).sort('-createdAt');
    res.json({ success: true, count: news.length, data: news });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single news by slug
// @route   GET /api/v1/news/:slug
// @access  Public
export const getNewsBySlug = async (req, res, next) => {
  try {
    const news = await News.findOne({ slug: req.params.slug });
    if (!news) {
      res.status(404);
      throw new Error('News not found');
    }
    res.json({ success: true, data: news });
  } catch (error) {
    next(error);
  }
};

// @desc    Create news
// @route   POST /api/v1/news
// @access  Private/Admin
export const createNews = async (req, res, next) => {
  try {
    const newsData = { ...req.body };

    if (!newsData.slug && newsData.title) {
      newsData.slug = slugify(newsData.title, { lower: true, strict: true });
    }

    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer, 'news');
      newsData.image = result.secure_url;
    }

    const news = await News.create(newsData);
    res.status(201).json({ success: true, data: news });
  } catch (error) {
    next(error);
  }
};

// @desc    Update news
// @route   PUT /api/v1/news/:id
// @access  Private/Admin
export const updateNews = async (req, res, next) => {
  try {
    const newsData = { ...req.body };
    
    if (newsData.title && !newsData.slug) {
      newsData.slug = slugify(newsData.title, { lower: true, strict: true });
    }

    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer, 'news');
      newsData.image = result.secure_url;
    }

    const news = await News.findByIdAndUpdate(req.params.id, newsData, {
      new: true,
      runValidators: true,
    });

    if (!news) {
      res.status(404);
      throw new Error('News not found');
    }
    res.json({ success: true, data: news });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete news
// @route   DELETE /api/v1/news/:id
// @access  Private/Admin
export const deleteNews = async (req, res, next) => {
  try {
    const news = await News.findByIdAndDelete(req.params.id);
    if (!news) {
      res.status(404);
      throw new Error('News not found');
    }
    res.json({ success: true, data: {} });
  } catch (error) {
    next(error);
  }
};
