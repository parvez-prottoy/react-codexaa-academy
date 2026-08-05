import { Link } from "react-router-dom";
import { HiArrowRight, HiCalendar, HiClock, HiUser, HiSparkles } from "react-icons/hi2";

export default function FeaturedBlog({ blog }) {
  if (!blog) return null;

  return (
    <section id="featured-blog" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="flex items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#2470A8] text-xs font-bold border border-blue-200/60">
            <HiSparkles size={14} className="animate-pulse" />
            <span>Featured Article</span>
          </span>
          <div className="h-px bg-slate-200 grow max-w-xs" />
        </div>

        {/* Featured Card */}
        <div className="group relative rounded-3xl bg-white border border-slate-200/80 shadow-xl shadow-slate-200/50 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300">
          <div className="grid lg:grid-cols-12 gap-0">
            {/* Image Container */}
            <div className="lg:col-span-7 relative min-h-[320px] sm:min-h-[400px] overflow-hidden bg-slate-100">
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="eager"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent lg:hidden" />
              
              {/* Floating Category Pill on Image (mobile/tablet view) */}
              <div className="absolute top-4 left-4 lg:hidden">
                <span className="px-3.5 py-1.5 rounded-full bg-[#2470A8] text-white text-xs font-bold shadow-md">
                  {blog.category}
                </span>
              </div>
            </div>

            {/* Content Container */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Meta details header */}
                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-500 font-medium">
                  {/* Category Pill (desktop view) */}
                  <span className="hidden lg:inline-flex px-3.5 py-1 rounded-full bg-blue-50 text-[#2470A8] text-xs font-bold border border-blue-200/70">
                    {blog.category}
                  </span>
                  <span className="hidden lg:inline text-slate-300">•</span>
                  <div className="flex items-center gap-1.5">
                    <HiCalendar size={15} className="text-[#3695d0]" />
                    <span>{blog.publishDate}</span>
                  </div>
                  <span className="text-slate-300">•</span>
                  <div className="flex items-center gap-1.5">
                    <HiClock size={15} className="text-[#3695d0]" />
                    <span>{blog.readingTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl lg:text-3xl font-extrabold text-slate-900 leading-snug group-hover:text-[#2470A8] transition-colors duration-200">
                  <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
                </h2>

                {/* Excerpt */}
                <p className="text-base text-slate-600 leading-relaxed line-clamp-4">
                  {blog.excerpt}
                </p>
              </div>

              {/* Author & Read More Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <img
                    src={blog.authorImage}
                    alt={blog.author}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200 shadow-xs"
                  />
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-slate-800">
                      {blog.author}
                    </p>
                    <p className="text-[11px] text-slate-500 font-medium">
                      {blog.authorRole || "Author"}
                    </p>
                  </div>
                </div>

                {/* Read More Button */}
                <Link
                  to={`/blog/${blog.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-[#5BAFE6] via-[#3695d0] to-[#2470A8] text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-200 hover:shadow-lg hover:shadow-blue-300 hover:-translate-y-0.5 transition-all duration-200 shrink-0"
                >
                  <span>Read More</span>
                  <HiArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
