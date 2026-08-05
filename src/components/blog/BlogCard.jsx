import { Link } from "react-router-dom";
import { HiArrowRight, HiCalendar, HiClock } from "react-icons/hi2";

export default function BlogCard({ blog }) {
  if (!blog) return null;

  return (
    <article className="group flex flex-col rounded-3xl bg-white border border-slate-200/80 shadow-lg shadow-slate-100 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden">
      {/* Cover Image Container */}
      <div className="relative h-52 sm:h-60 overflow-hidden bg-slate-100">
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        {/* Category Pill */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#2470A8] text-xs font-bold shadow-xs border border-blue-100">
            {blog.category}
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 flex flex-col justify-between grow space-y-4">
        <div className="space-y-3">
          {/* Metadata */}
          <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-1">
              <HiCalendar size={14} className="text-[#3695d0]" />
              <span>{blog.publishDate}</span>
            </div>
            <span className="text-slate-300">•</span>
            <div className="flex items-center gap-1">
              <HiClock size={14} className="text-[#3695d0]" />
              <span>{blog.readingTime}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-[#2470A8] transition-colors duration-200 line-clamp-2">
            <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
            {blog.excerpt}
          </p>
        </div>

        {/* Footer info: Author & CTA */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3 mt-auto">
          {/* Author */}
          <div className="flex items-center gap-2.5">
            <img
              src={blog.authorImage}
              alt={blog.author}
              className="w-8 h-8 rounded-full object-cover border border-slate-200"
            />
            <span className="text-xs font-semibold text-slate-700 truncate max-w-[120px]">
              {blog.author}
            </span>
          </div>

          {/* Read More Link */}
          <Link
            to={`/blog/${blog.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2470A8] hover:text-[#3695d0] transition-colors duration-150"
          >
            <span>Read More</span>
            <HiArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </article>
  );
}
