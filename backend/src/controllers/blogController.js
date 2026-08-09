import Blog from '../models/Blog.js';
import slugify from 'slugify';
import { uploadToCloudinary } from '../utils/cloudinary.js';

// @desc    Get all blogs
// @route   GET /api/v1/blogs
// @access  Public
export const getBlogs = async (req, res, next) => {
  try {
    const filter = { isPublished: true };
    if (req.query.featured === 'true') {
      filter.featured = true;
    }
    if (req.query.category && req.query.category !== 'All') {
      filter.category = req.query.category;
    }

    const blogs = await Blog.find(filter).sort('-createdAt');
    res.json({ success: true, count: blogs.length, data: blogs });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single blog by slug
// @route   GET /api/v1/blogs/:slug
// @access  Public
export const getBlogBySlug = async (req, res, next) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    if (!blog) {
      res.status(404);
      throw new Error('Blog not found');
    }
    res.json({ success: true, data: blog });
  } catch (error) {
    next(error);
  }
};

// @desc    Create a blog
// @route   POST /api/v1/blogs
// @access  Private/Admin
export const createBlog = async (req, res, next) => {
  try {
    const blogData = { ...req.body };
    if (blogData.content && typeof blogData.content === 'string') {
      blogData.content = JSON.parse(blogData.content);
    }
    if (blogData.tags && typeof blogData.tags === 'string') {
      blogData.tags = JSON.parse(blogData.tags);
    }

    if (!blogData.slug && blogData.title) {
      blogData.slug = slugify(blogData.title, { lower: true, strict: true });
    }

    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer, 'blogs');
      blogData.coverImage = result.secure_url;
    }

    const blog = await Blog.create(blogData);
    res.status(201).json({ success: true, data: blog });
  } catch (error) {
    next(error);
  }
};

// @desc    Update a blog
// @route   PUT /api/v1/blogs/:id
// @access  Private/Admin
export const updateBlog = async (req, res, next) => {
  try {
    const blogData = { ...req.body };
    if (blogData.content && typeof blogData.content === 'string') {
      blogData.content = JSON.parse(blogData.content);
    }
    if (blogData.tags && typeof blogData.tags === 'string') {
      blogData.tags = JSON.parse(blogData.tags);
    }

    if (blogData.title && !blogData.slug) {
      blogData.slug = slugify(blogData.title, { lower: true, strict: true });
    }

    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer, 'blogs');
      blogData.coverImage = result.secure_url;
    }

    const blog = await Blog.findByIdAndUpdate(req.params.id, blogData, {
      new: true,
      runValidators: true,
    });

    if (!blog) {
      res.status(404);
      throw new Error('Blog not found');
    }
    res.json({ success: true, data: blog });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete a blog
// @route   DELETE /api/v1/blogs/:id
// @access  Private/Admin
export const deleteBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      res.status(404);
      throw new Error('Blog not found');
    }
    res.json({ success: true, data: {} });
  } catch (error) {
    next(error);
  }
};
