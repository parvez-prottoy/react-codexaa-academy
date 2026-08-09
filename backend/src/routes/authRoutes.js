import express from 'express';
import {
  authUser,
  registerUser,
  getUserProfile,
} from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/login', authUser);
router.post('/register', registerUser);
router.get('/me', protect, getUserProfile);

export default router;
