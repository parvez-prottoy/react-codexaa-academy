import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

// Models
import User from './models/User.js';
import Course from './models/Course.js';
import News from './models/News.js';
import Blog from './models/Blog.js';
import SuccessStory from './models/SuccessStory.js';
import Testimonial from './models/Testimonial.js';
import Company from './models/Company.js';

// Data from frontend (Since frontend also uses ES modules, we can try importing them directly)
import { courseData } from '../../src/data/courseData.js';
import { newsList, featuredNewsItem } from '../../src/data/newsData.js';
import { blogPosts } from '../../src/data/blogData.js';
import { featuredStories, successGrid } from '../../src/data/successStoriesData.js';
import { testimonials } from '../../src/data/testimonialData.js';
import { companies } from '../../src/data/companyData.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Course.deleteMany();
    await News.deleteMany();
    await Blog.deleteMany();
    await SuccessStory.deleteMany();
    await Testimonial.deleteMany();
    await Company.deleteMany();

    console.log('Old Data Destroyed!');

    // Import Admin User
    const createdUsers = await User.create([
      {
        name: 'Admin User',
        email: 'admin@codexaa.com',
        password: 'password123', // will be hashed by pre-save hook
        role: 'admin',
      },
    ]);

    // Import Courses
    const coursesToInsert = courseData.map((course) => {
      return {
        title: course.title,
        slug: course.slug,
        category: course.category,
        instructor: course.instructor,
        instructorRole: course.instructorRole,
        instructorExperience: course.instructorExperience,
        instructorImage: course.instructorImage,
        instructorBio: course.instructorBio,
        duration: course.duration,
        projects: course.projects,
        students: course.students,
        level: course.level,
        rating: course.rating,
        reviewsCount: course.reviewsCount,
        price: course.price,
        originalPrice: course.originalPrice,
        certificate: course.certificate,
        image: course.image,
        featured: course.featured,
        shortDescription: course.shortDescription,
        fullDescription: course.fullDescription,
        learningOutcomes: course.learningOutcomes,
        curriculum: course.curriculum,
        features: course.features,
        faq: course.faq,
      };
    });
    await Course.insertMany(coursesToInsert);

    // Import News
    const newsToInsert = [featuredNewsItem, ...newsList].map((news) => {
      // Need a simple slug fallback if not present
      const slug = news.slug || news.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
      return {
        title: news.title,
        slug,
        category: news.category,
        date: news.date,
        author: news.author,
        readTime: news.readTime || news.readTime, // readTime
        image: news.image,
        description: news.description,
        featured: news.id === 'featured-1',
      };
    });
    await News.insertMany(newsToInsert);

    // Import Blogs
    const blogsToInsert = blogPosts.map((blog) => {
      return {
        title: blog.title,
        slug: blog.slug,
        category: blog.category,
        excerpt: blog.excerpt,
        author: blog.author,
        authorRole: blog.authorRole,
        authorImage: blog.authorImage,
        publishDate: blog.publishDate,
        readingTime: blog.readingTime,
        coverImage: blog.coverImage,
        featured: blog.featured,
        tags: blog.tags,
        content: blog.content,
      };
    });
    await Blog.insertMany(blogsToInsert);

    // Import Success Stories (Mapping from featuredStories and successGrid for variety)
    const storiesToInsert = featuredStories.map((story) => {
      return {
        name: story.name,
        position: story.position || story.jobTitle,
        company: story.company,
        companyLogo: story.companyLogo,
        photo: story.photo,
        previousBackground: story.previousBackground,
        currentAchievement: story.currentAchievement,
        salaryGrowth: story.salaryGrowth,
        course: story.course,
        summary: story.summary || story.quote,
        badge: story.badge,
      };
    });
    await SuccessStory.insertMany(storiesToInsert);

    // Import Testimonials
    const testimonialsToInsert = testimonials.map((t) => {
      return {
        name: t.name,
        role: t.role,
        company: t.company,
        companyLogoText: t.companyLogoText,
        companyColor: t.companyColor,
        companyBg: t.companyBg,
        avatar: t.avatar,
        quote: t.quote,
        rating: t.rating,
        course: t.course,
        gradYear: t.gradYear,
        verified: t.verified,
        achievement: t.achievement,
      };
    });
    await Testimonial.insertMany(testimonialsToInsert);

    // Import Companies
    const companiesToInsert = companies.map((c) => {
      return {
        name: c.name,
        abbr: c.abbr,
        logo: typeof c.logo === 'string' ? c.logo : 'logo-placeholder.svg', // SVGs are imported via vite, might cause issues in Node
        color: c.color,
        lightBg: c.lightBg,
        country: c.country,
        category: c.category,
      };
    });
    await Company.insertMany(companiesToInsert);

    console.log('Data Imported successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error with import: ${error.message}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Course.deleteMany();
    await News.deleteMany();
    await Blog.deleteMany();
    await SuccessStory.deleteMany();
    await Testimonial.deleteMany();
    await Company.deleteMany();

    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
