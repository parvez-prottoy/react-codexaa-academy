import { useState } from "react";
import { HiCalendar, HiClock, HiUser, HiArrowRight, HiXMark } from "react-icons/hi2";

export default function NewsCard({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="rounded-3xl bg-white border border-slate-200/80 shadow-lg shadow-slate-900/5 overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group">
        {/* Cover Image Container */}
        <div className="relative h-52 overflow-hidden bg-slate-900">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
          />
          <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors" />

          {/* Category Badge */}
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-extrabold text-[#2470A8] border border-white/60 shadow-sm">
            {item.category}
          </div>
        </div>

        {/* Text Info */}
        <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
          <div className="space-y-3">
            {/* Meta bar */}
            <div className="flex items-center gap-3 text-xs font-medium text-slate-500">
              <span className="flex items-center gap-1">
                <HiUser size={13} className="text-[#3695d0]" />
                {item.author}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <HiCalendar size={13} />
                {item.date}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <HiClock size={13} />
                {item.readTime}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug group-hover:text-[#2470A8] transition-colors duration-200">
              {item.title}
            </h3>

            {/* Description snippet */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
              {item.description}
            </p>
          </div>

          {/* Read More button */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2470A8] hover:text-blue-800 transition-colors cursor-pointer"
            >
              <span>Read More</span>
              <HiArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Article Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-slate-200 transition-colors"
            >
              <HiXMark size={20} />
            </button>

            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#2470A8] text-xs font-bold border border-blue-100">
              {item.category}
            </span>

            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              {item.title}
            </h3>

            <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
              <span>By {item.author}</span>
              <span>·</span>
              <span>{item.date}</span>
              <span>·</span>
              <span>{item.readTime}</span>
            </div>

            <img
              src={item.image}
              alt={item.title}
              className="w-full h-52 object-cover rounded-2xl border border-slate-100"
            />

            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              {item.description}
            </p>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-full py-3 rounded-xl bg-[#2470A8] text-white text-xs font-bold hover:bg-blue-800 transition-colors"
            >
              Close Article
            </button>
          </div>
        </div>
      )}
    </>
  );
}
