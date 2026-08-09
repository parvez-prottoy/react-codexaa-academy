import express from 'express';
import {
  getTestimonials,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
} from '../controllers/testimonialController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import upload from '../middleware/uploadMiddleware.js';

const router = express.Router();

router
  .route('/')
  .get(getTestimonials)
  .post(protect, admin, upload.single('avatar'), createTestimonial);

router
  .route('/:id')
  .put(protect, admin, upload.single('avatar'), updateTestimonial)
  .delete(protect, admin, deleteTestimonial);

export default router;
