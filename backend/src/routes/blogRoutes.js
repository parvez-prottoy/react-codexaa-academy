import express from 'express';
import {
  getBlogs,
  getBlogBySlug,
  createBlog,
  updateBlog,
  deleteBlog,
} from '../controllers/blogController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import upload from '../middleware/uploadMiddleware.js';

const router = express.Router();

router
  .route('/')
  .get(getBlogs)
  .post(upload.single('coverImage'), createBlog);

router.route('/:slug').get(getBlogBySlug);

router
  .route('/:id')
  .put(upload.single('coverImage'), updateBlog)
  .delete(deleteBlog);

export default router;
