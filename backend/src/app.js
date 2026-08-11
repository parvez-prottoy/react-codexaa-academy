import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import path from 'path';
import { fileURLToPath } from 'url';
import { errorHandler, notFound } from './middleware/errorHandler.js';

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// EJS View Engine Setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: true, // Allow all origins dynamically (important for Vercel preview deployments)
    credentials: true,
  })
);
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

import adminRoutes from './routes/adminRoutes.js';
import authRoutes from './routes/authRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import companyRoutes from './routes/companyRoutes.js';
import courseRoutes from './routes/courseRoutes.js';
import newsRoutes from './routes/newsRoutes.js';
import successStoryRoutes from './routes/successStoryRoutes.js';
import testimonialRoutes from './routes/testimonialRoutes.js';
import seoRoutes from './routes/seoRoutes.js';

// Admin View Routes
app.use('/admin', adminRoutes);

app.use('/api/v1/seo', seoRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/courses', courseRoutes);
app.use('/api/v1/news', newsRoutes);
app.use('/api/v1/blogs', blogRoutes);
app.use('/api/v1/success-stories', successStoryRoutes);
app.use('/api/v1/testimonials', testimonialRoutes);
app.use('/api/v1/companies', companyRoutes);

// Basic route
app.get('/api/v1', (req, res) => {
  res.json({ message: 'Welcome to Codexaa Academy API' });
});

// Temporary debug route
app.get('/api/v1/debug', (req, res) => {
  const secret = process.env.CLOUDINARY_API_SECRET || '';
  res.json({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    secret_length: secret.length,
    secret_starts_with: secret.substring(0, 4),
    secret_ends_with: secret.substring(secret.length - 4),
    has_spaces: secret !== secret.trim(),
    cloudinary_url_set: !!process.env.CLOUDINARY_URL
  });
});

// Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

export default app;
