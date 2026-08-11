import { useMemo } from 'react';
import {
  HiArrowLeft,
  HiBookmark,
  HiCalendar,
  HiClock,
  HiShare,
  HiSparkles,
} from 'react-icons/hi2';
import { Link, useParams } from 'react-router-dom';
import BlogCard from '../components/blog/BlogCard';
import CTASection from '../components/blog/CTASection';
import useFetch from '../hooks/useFetch';
import SEO from '../components/common/SEO';
import { optimizeImage } from '../utils/optimizeImage';

export default function BlogDetails() {
  const { slug } = useParams();

  const { data: blogPosts, loading, error } = useFetch('/blogs');

  const blog = useMemo(() => {
    if (!blogPosts) return null;
    return (
      blogPosts.find((item) => item.slug === slug) ||
      blogPosts.find((item) => item.featured) ||
      blogPosts[0]
    );
  }, [slug, blogPosts]);

  const relatedPosts = useMemo(() => {
    if (!blogPosts || !blog) return [];
    return blogPosts.filter((item) => item.slug !== blog.slug).slice(0, 2);
  }, [blog, blogPosts]);

  if (loading) {
    return (
      <div className="pt-15 md:pt-27 min-h-screen bg-slate-50/50 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3695d0]"></div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="pt-15 md:pt-27 min-h-screen bg-slate-50/50 flex justify-center items-center text-red-500">
        <p>{error || 'Article not found'}</p>
      </div>
    );
  }

  return (
    <div className="pt-15 md:pt-27 min-h-screen bg-slate-50/50">
      <SEO 
        title={blog.title}
        description={blog.excerpt}
        image={blog.coverImage}
      />
      {/* 1. Header / Breadcrumbs */}
      <section className="bg-white border-b border-slate-200/80 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Back button */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#2470A8] transition-colors"
          >
            <HiArrowLeft size={16} />
            <span>Back to All Articles</span>
          </Link>

          {/* Category & Meta */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-500 font-medium">
              <span className="px-3.5 py-1 rounded-full bg-blue-50 text-[#2470A8] text-xs font-bold border border-blue-200/80">
                {blog.category}
              </span>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <HiCalendar size={15} className="text-[#3695d0]" />
                <span>{blog.publishDate}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <HiClock size={15} className="text-[#3695d0]" />
                <span>{blog.readingTime}</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18]">
              {blog.title}
            </h1>

            {/* Author Bar */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <img
                  src={blog.authorImage}
                  alt={blog.author}
                  className="w-11 h-11 rounded-full object-cover border border-slate-200 shadow-xs"
                />
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    {blog.author}
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    {blog.authorRole || 'Senior Mentors'}
                  </p>
                </div>
              </div>

              {/* Social / Bookmark actions */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Share article"
                  className="p-2.5 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-[#2470A8] text-slate-600 transition-colors cursor-pointer"
                >
                  <HiShare size={18} />
                </button>
                <button
                  type="button"
                  aria-label="Bookmark article"
                  className="p-2.5 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-[#2470A8] text-slate-600 transition-colors cursor-pointer"
                >
                  <HiBookmark size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Cover Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 max-h-[460px] bg-slate-100">
          <img
            src={optimizeImage(blog.coverImage)}
            alt={blog.title}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
      </div>

      {/* 3. Article Content */}
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        {/* Intro excerpt highlight box */}
        <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-100 text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
          <p>{blog.excerpt}</p>
        </div>

        {/* Dynamic section rendering */}
        <div className="space-y-6 text-slate-800 leading-relaxed text-base sm:text-lg font-normal">
          {blog.content?.map((item, idx) => {
            if (item.type === 'heading') {
              return (
                <h2
                  key={idx}
                  className="text-2xl sm:text-3xl font-extrabold text-slate-900 pt-4 tracking-tight"
                >
                  {item.text}
                </h2>
              );
            }
            return <p key={idx}>{item.text}</p>;
          })}
        </div>

        {/* Tags footer */}
        {blog.tags && (
          <div className="pt-6 border-t border-slate-200/80 flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2">
              Tags:
            </span>
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </article>

      {/* 4. Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-12 bg-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex items-center gap-2">
              <HiSparkles size={18} className="text-[#3695d0]" />
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Related Articles
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((post) => (
                <BlogCard key={post.id} blog={post} />
              ))}
            </div>
          </div>
        </section>
      )}
      <CTASection />
    </div>
  );
}
