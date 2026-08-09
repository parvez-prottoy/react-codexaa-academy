import express from 'express';
import {
  getCourses,
  getCourseBySlug,
  createCourse,
  updateCourse,
  deleteCourse,
} from '../controllers/courseController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import upload from '../middleware/uploadMiddleware.js';

const router = express.Router();

router
  .route('/')
  .get(getCourses)
  .post(upload.single('image'), createCourse);

router.route('/:slug').get(getCourseBySlug);

router
  .route('/:id')
  .put(upload.single('image'), updateCourse)
  .delete(deleteCourse);

export default router;
