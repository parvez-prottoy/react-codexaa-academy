import express from 'express';
import {
  getNews,
  getNewsBySlug,
  createNews,
  updateNews,
  deleteNews,
} from '../controllers/newsController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import upload from '../middleware/uploadMiddleware.js';

const router = express.Router();

router
  .route('/')
  .get(getNews)
  .post(upload.single('image'), createNews);

router.route('/:slug').get(getNewsBySlug);

router
  .route('/:id')
  .put(upload.single('image'), updateNews)
  .delete(deleteNews);

export default router;
