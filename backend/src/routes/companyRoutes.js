import express from 'express';
import {
  getCompanies,
  createCompany,
  updateCompany,
  deleteCompany,
} from '../controllers/companyController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import upload from '../middleware/uploadMiddleware.js';

const router = express.Router();

router
  .route('/')
  .get(getCompanies)
  .post(protect, admin, upload.single('logo'), createCompany);

router
  .route('/:id')
  .put(protect, admin, upload.single('logo'), updateCompany)
  .delete(protect, admin, deleteCompany);

export default router;
