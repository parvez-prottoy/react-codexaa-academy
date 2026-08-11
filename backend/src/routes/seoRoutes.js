import express from 'express';
import Course from '../models/Course.js';
import Blog from '../models/Blog.js';
import News from '../models/News.js';

const router = express.Router();
const BASE_URL = process.env.CLIENT_URL || 'https://codexaa-academy.com';

// Generate dynamic sitemap.xml
router.get('/sitemap.xml', async (req, res) => {
  try {
    const [courses, blogs, news] = await Promise.all([
      Course.find({ isPublished: true }).select('slug updatedAt'),
      Blog.find({ isPublished: true }).select('slug updatedAt'),
      News.find({ isPublished: true }).select('slug updatedAt')
    ]);

    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    // Static Pages
    const staticPages = ['', '/courses', '/blogs', '/news', '/success-stories', '/about', '/contact'];
    staticPages.forEach(page => {
      xml += `  <url>\n`;
      xml += `    <loc>${BASE_URL}${page}</loc>\n`;
      xml += `    <changefreq>weekly</changefreq>\n`;
      xml += `    <priority>${page === '' ? '1.0' : '0.8'}</priority>\n`;
      xml += `  </url>\n`;
    });

    // Dynamic Course Pages
    courses.forEach(course => {
      xml += `  <url>\n`;
      xml += `    <loc>${BASE_URL}/course/${course.slug}</loc>\n`;
      xml += `    <lastmod>${course.updatedAt.toISOString()}</lastmod>\n`;
      xml += `    <changefreq>monthly</changefreq>\n`;
      xml += `    <priority>0.9</priority>\n`;
      xml += `  </url>\n`;
    });

    // Dynamic Blog Pages
    blogs.forEach(blog => {
      xml += `  <url>\n`;
      xml += `    <loc>${BASE_URL}/blog/${blog.slug}</loc>\n`;
      xml += `    <lastmod>${blog.updatedAt.toISOString()}</lastmod>\n`;
      xml += `    <changefreq>monthly</changefreq>\n`;
      xml += `    <priority>0.7</priority>\n`;
      xml += `  </url>\n`;
    });

    // Dynamic News Pages
    news.forEach(item => {
      xml += `  <url>\n`;
      xml += `    <loc>${BASE_URL}/news/${item.slug}</loc>\n`;
      xml += `    <lastmod>${item.updatedAt.toISOString()}</lastmod>\n`;
      xml += `    <changefreq>monthly</changefreq>\n`;
      xml += `    <priority>0.7</priority>\n`;
      xml += `  </url>\n`;
    });

    xml += `</urlset>`;

    res.header('Content-Type', 'application/xml');
    res.send(xml);
  } catch (error) {
    console.error('Sitemap Generation Error:', error);
    res.status(500).end();
  }
});

// Generate dynamic robots.txt
router.get('/robots.txt', (req, res) => {
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/

Sitemap: ${BASE_URL}/api/v1/seo/sitemap.xml
`;
  res.header('Content-Type', 'text/plain');
  res.send(robotsTxt);
});

export default router;
