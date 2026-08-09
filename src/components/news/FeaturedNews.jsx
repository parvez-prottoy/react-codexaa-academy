import { useState } from "react";
import {
  HiCalendar,
  HiClock,
  HiUser,
  HiArrowRight,
  HiSparkles,
  HiXMark,
} from "react-icons/hi2";

export default function FeaturedNews({ featuredNewsItem }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="featured-news"
      className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-[#2470A8]">
            <HiSparkles size={15} className="text-[#3695d0]" />
            <span>Featured Spotlight</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Top Story of the Month
          </h2>
        </div>

        {/* Featured Card */}
        <div className="rounded-3xl bg-slate-50/70 border border-slate-200/80 shadow-xl shadow-slate-900/5 overflow-hidden grid lg:grid-cols-12 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
          {/* Cover Image */}
          <div className="lg:col-span-6 relative h-72 lg:h-auto overflow-hidden bg-slate-900">
            <img
              src={featuredNewsItem.image}
              alt={featuredNewsItem.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent" />

            {/* Category Badge */}
            <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#2470A8] text-white text-xs font-extrabold shadow-md border border-white/20">
              {featuredNewsItem.category}
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Meta information bar */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1.5 text-slate-700">
                  <HiUser size={15} className="text-[#3695d0]" />
                  {featuredNewsItem.author}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5">
                  <HiCalendar size={15} className="text-slate-400" />
                  {featuredNewsItem.date}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5">
                  <HiClock size={15} className="text-slate-400" />
                  {featuredNewsItem.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug group-hover:text-[#2470A8] transition-colors duration-200">
                {featuredNewsItem.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {featuredNewsItem.description}
              </p>
            </div>

            {/* Action Button */}
            <div className="pt-4 border-t border-slate-200/80">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2470A8] text-white text-xs sm:text-sm font-bold shadow-md hover:bg-blue-800 transition-all duration-200 cursor-pointer"
              >
                <span>Read Full Article</span>
                <HiArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full Article Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-slate-200 transition-colors"
            >
              <HiXMark size={20} />
            </button>

            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#2470A8] text-xs font-bold border border-blue-100">
              {featuredNewsItem.category}
            </span>

            <h3 className="text-2xl font-bold text-slate-900 leading-tight">
              {featuredNewsItem.title}
            </h3>

            <div className="flex items-center gap-4 text-xs text-slate-500 font-medium border-b border-slate-100 pb-3">
              <span>By {featuredNewsItem.author}</span>
              <span>·</span>
              <span>{featuredNewsItem.date}</span>
              <span>·</span>
              <span>{featuredNewsItem.readTime}</span>
            </div>

            <img
              src={featuredNewsItem.image}
              alt={featuredNewsItem.title}
              className="w-full h-64 object-cover rounded-2xl border border-slate-100"
            />

            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              {featuredNewsItem.description}
            </p>

            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Participants engaged in intensive group labs, receiving direct
              feedback on their pull requests and architecture decisions.
              Codexaa Academy remains committed to delivering career-focused
              software engineering education.
            </p>

            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="w-full py-3 rounded-xl bg-[#2470A8] text-white text-xs font-bold hover:bg-blue-800 transition-colors"
            >
              Close Article
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
