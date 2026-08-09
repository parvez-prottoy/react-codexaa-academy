import express from 'express';
import {
  getSuccessStories,
  getSuccessStoryById,
  createSuccessStory,
  updateSuccessStory,
  deleteSuccessStory,
} from '../controllers/successStoryController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import upload from '../middleware/uploadMiddleware.js';

const router = express.Router();

router
  .route('/')
  .get(getSuccessStories)
  .post(upload.single('photo'), createSuccessStory);

router.route('/:id').get(getSuccessStoryById);

router
  .route('/:id')
  .put(upload.single('photo'), updateSuccessStory)
  .delete(deleteSuccessStory);

export default router;
