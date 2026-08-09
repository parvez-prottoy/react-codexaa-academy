import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
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
app.use(cors());
app.use(helmet({
  contentSecurityPolicy: false,
}));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

import authRoutes from './routes/authRoutes.js';
import courseRoutes from './routes/courseRoutes.js';
import newsRoutes from './routes/newsRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import successStoryRoutes from './routes/successStoryRoutes.js';
import testimonialRoutes from './routes/testimonialRoutes.js';
import companyRoutes from './routes/companyRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

// Admin View Routes
app.use('/admin', adminRoutes);

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

// Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

export default app;
