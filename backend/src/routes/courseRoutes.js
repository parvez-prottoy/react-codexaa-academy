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

router.route('/').get(getCourses).post(upload.single('image'), createCourse);

router.get('/:slug', getCourseBySlug);
router.put('/:id', upload.single('image'), updateCourse);
router.delete('/:id', deleteCourse);

export default router;
