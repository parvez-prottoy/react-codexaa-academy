import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title, 
  description, 
  keywords, 
  image, 
  url = typeof window !== 'undefined' ? window.location.href : ''
}) {
  const defaultTitle = "Codexaa Academy - Master Real-World Tech Skills";
  const defaultDesc = "Transform your career with Codexaa Academy. We offer premium courses in MERN Stack, App Development, Cyber Security, and more.";
  const defaultKeywords = "coding, programming, web development, app development, codexaa academy, online courses";
  const defaultImage = "https://codexaa-academy.com/default-og-image.jpg"; // Replace with actual default image URL

  const seoTitle = title ? `${title} | Codexaa Academy` : defaultTitle;
  const seoDesc = description || defaultDesc;
  const seoKeywords = keywords || defaultKeywords;
  const seoImage = image || defaultImage;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDesc} />
      <meta name="keywords" content={seoKeywords} />

      {/* Open Graph (Facebook, LinkedIn, etc.) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDesc} />
      <meta property="og:image" content={seoImage} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDesc} />
      <meta name="twitter:image" content={seoImage} />
    </Helmet>
  );
}
