import Company from '../models/Company.js';
import { uploadToCloudinary } from '../utils/cloudinary.js';

// @desc    Get all companies
// @route   GET /api/v1/companies
// @access  Public
export const getCompanies = async (req, res, next) => {
  try {
    const companies = await Company.find({ isPublished: true }).sort('-createdAt');
    res.json({ success: true, count: companies.length, data: companies });
  } catch (error) {
    next(error);
  }
};

// @desc    Create a company
// @route   POST /api/v1/companies
// @access  Private/Admin
export const createCompany = async (req, res, next) => {
  try {
    const companyData = { ...req.body };

    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer, 'companies');
      companyData.logo = result.secure_url;
    }

    const company = await Company.create(companyData);
    res.status(201).json({ success: true, data: company });
  } catch (error) {
    next(error);
  }
};

// @desc    Update a company
// @route   PUT /api/v1/companies/:id
// @access  Private/Admin
export const updateCompany = async (req, res, next) => {
  try {
    const companyData = { ...req.body };

    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer, 'companies');
      companyData.logo = result.secure_url;
    }

    const company = await Company.findByIdAndUpdate(req.params.id, companyData, {
      new: true,
      runValidators: true,
    });

    if (!company) {
      res.status(404);
      throw new Error('Company not found');
    }
    res.json({ success: true, data: company });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete a company
// @route   DELETE /api/v1/companies/:id
// @access  Private/Admin
export const deleteCompany = async (req, res, next) => {
  try {
    const company = await Company.findByIdAndDelete(req.params.id);
    if (!company) {
      res.status(404);
      throw new Error('Company not found');
    }
    res.json({ success: true, data: {} });
  } catch (error) {
    next(error);
  }
};
