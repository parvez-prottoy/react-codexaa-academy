import CTASection from '../components/news/CTASection';
import FeaturedNews from '../components/news/FeaturedNews';
import NewsGrid from '../components/news/NewsGrid';
import NewsHero from '../components/news/NewsHero';
import useFetch from '../hooks/useFetch';
import { useMemo } from 'react';

export default function News() {
  const { data: news, loading, error } = useFetch('/news');

  const featuredNewsItem = useMemo(() => {
    if (!news) return null;
    return news.find((item) => item.featured) || news[0];
  }, [news]);

  const newsList = useMemo(() => {
    if (!news) return [];
    // If we have a featured item, we might want to exclude it from the grid
    return news.filter((item) => item._id !== featuredNewsItem?._id);
  }, [news, featuredNewsItem]);

  return (
    <div className="pt-15 md:pt-27 min-h-screen bg-slate-50/50">
      <NewsHero />

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3695d0]"></div>
        </div>
      ) : error ? (
        <div className="text-center py-20 text-red-500">
          <p>Failed to load news: {error}</p>
        </div>
      ) : (
        <>
          {featuredNewsItem && <FeaturedNews featuredNewsItem={featuredNewsItem} />}
          <NewsGrid newsList={newsList} />
        </>
      )}

      <CTASection />
    </div>
  );
}
