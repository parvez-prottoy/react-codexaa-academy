import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

export default function NavigationButtons({ onPrev, onNext, prevDisabled, nextDisabled }) {
  return (
    <div className="flex items-center gap-3">
      {/* Previous Button */}
      <button
        type="button"
        onClick={onPrev}
        disabled={prevDisabled}
        aria-label="Previous review"
        className="
          w-13 h-13 rounded-full flex items-center justify-center
          bg-white/95 backdrop-blur-md border border-slate-200/90
          text-[#2470A8] shadow-lg shadow-slate-900/10
          hover:bg-white hover:text-blue-700 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-0.5
          active:translate-y-0 transition-all duration-200
          disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
        "
      >
        <HiChevronLeft size={22} />
      </button>

      {/* Next Button */}
      <button
        type="button"
        onClick={onNext}
        disabled={nextDisabled}
        aria-label="Next review"
        className="
          w-13 h-13 rounded-full flex items-center justify-center
          bg-white/95 backdrop-blur-md border border-slate-200/90
          text-[#2470A8] shadow-lg shadow-slate-900/10
          hover:bg-white hover:text-blue-700 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-0.5
          active:translate-y-0 transition-all duration-200
          disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
        "
      >
        <HiChevronRight size={22} />
      </button>
    </div>
  );
}
