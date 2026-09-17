import express from 'express';
import {
  authUser,
  registerUser,
  getUserProfile,
  logoutUser,
} from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/login', authUser);
router.post('/register', registerUser);
router.post('/logout', logoutUser);
router.get('/logout', logoutUser);
router.get('/me', protect, getUserProfile);
router.get('/profile', protect, getUserProfile);

export default router;
