import { useMemo, useState } from 'react';
import { HiInbox, HiSparkles } from 'react-icons/hi2';
import BlogCard from '../components/blog/BlogCard';
import BlogHero from '../components/blog/BlogHero';
import CategoryFilter from '../components/blog/CategoryFilter';
import CTASection from '../components/blog/CTASection';
import FeaturedBlog from '../components/blog/FeaturedBlog';
import { blogCategories } from '../data/blogData';
import useFetch from '../hooks/useFetch';
import SEO from '../components/common/SEO';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const { data: blogPosts, loading, error } = useFetch('/blogs');

  // Extract featured post
  const featuredPost = useMemo(() => {
    if (!blogPosts) return null;
    return blogPosts.find((post) => post.featured) || blogPosts[0];
  }, [blogPosts]);

  // Filter grid posts (excluding featured post if active, or based on category selection)
  const gridPosts = useMemo(() => {
    if (!blogPosts) return [];
    return blogPosts.filter((post) => {
      // If post is the main featured post, we exclude it from grid when "All" is active to prevent duplication
      if (post._id === featuredPost?._id && activeCategory === 'All') {
        return false;
      }

      if (activeCategory === 'All') {
        return true;
      }

      return (
        post.category.toLowerCase() === activeCategory.toLowerCase() ||
        post.tags?.some((t) => t.toLowerCase() === activeCategory.toLowerCase())
      );
    });
  }, [activeCategory, featuredPost, blogPosts]);

  return (
    <div className="pt-15 md:pt-27 min-h-screen bg-slate-50/50">
      <SEO 
        title="Engineering Blog"
        description="Insights, tutorials, and deep dives into software engineering, web development, and tech trends by Codexaa Academy."
      />
      {/* 1. Hero Section */}
      <BlogHero />

      {/* 2. Featured Article */}
      <FeaturedBlog blog={featuredPost} />

      {/* 3. Categories & Blog Grid */}
      <section className="py-12 sm:py-16 bg-slate-50/70 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Header & Categories */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#2470A8] text-xs font-bold border border-blue-200/60">
                  <HiSparkles size={14} />
                  <span>Articles & Guides</span>
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
                  Explore By Category
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-sm">
                Filter articles by topics and technologies to find exactly what
                you want to learn.
              </p>
            </div>

            {/* Category Filter Pills */}
            <CategoryFilter
              categories={blogCategories}
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
            />
          </div>

          {/* Grid View */}
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3695d0]"></div>
            </div>
          ) : error ? (
            <div className="text-center py-20 text-red-500">
              <p>Failed to load articles: {error}</p>
            </div>
          ) : gridPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {gridPosts.map((post) => (
                <BlogCard key={post._id || post.id} blog={post} />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center bg-white rounded-3xl border border-slate-200/80 p-8 space-y-3">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-[#2470A8] flex items-center justify-center mx-auto">
                <HiInbox size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-800">
                No articles found in "{activeCategory}"
              </h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto">
                We are currently crafting new deep-dive tutorials for this
                category. Check back soon or select "All" to browse all
                published posts.
              </p>
              <button
                type="button"
                onClick={() => setActiveCategory('All')}
                className="mt-2 inline-flex items-center px-4 py-2 rounded-full bg-[#2470A8] text-white text-xs font-bold hover:bg-[#3695d0] transition-colors"
              >
                Show All Articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 5. Call To Action */}
      <CTASection />
    </div>
  );
}
