import CTASection from '../components/news/CTASection';
import FeaturedNews from '../components/news/FeaturedNews';
import NewsGrid from '../components/news/NewsGrid';
import NewsHero from '../components/news/NewsHero';

export default function News() {
  return (
    <div className="pt-15 md:pt-27 min-h-screen bg-slate-50/50">
      {/* 1. Hero Section */}
      <NewsHero />

      {/* 2. Featured News */}
      <FeaturedNews />

      {/* 3. Latest News Grid */}
      <NewsGrid />

      {/* 5. Call To Action */}
      <CTASection />
    </div>
  );
}
