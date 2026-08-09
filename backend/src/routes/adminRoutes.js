import express from 'express';
import Course from '../models/Course.js';
import News from '../models/News.js';
import Blog from '../models/Blog.js';
import SuccessStory from '../models/SuccessStory.js';

const router = express.Router();

// GET /admin/courses
router.get('/courses', async (req, res) => {
  try {
    const courses = await Course.find().sort('-createdAt');
    res.render('courses', {
      title: 'Manage Courses',
      courses
    });
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

// GET /admin/news
router.get('/news', async (req, res) => {
  try {
    const news = await News.find().sort('-createdAt');
    res.render('news', {
      title: 'Manage News',
      news
    });
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

// GET /admin/blogs
router.get('/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find().sort('-createdAt');
    res.render('blogs', {
      title: 'Manage Blogs',
      blogs
    });
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

// GET /admin/success-stories
router.get('/success-stories', async (req, res) => {
  try {
    const stories = await SuccessStory.find().sort('-createdAt');
    res.render('success-stories', {
      title: 'Manage Success Stories',
      stories
    });
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

export default router;
