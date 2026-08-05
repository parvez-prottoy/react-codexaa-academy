import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

export default function NavigationButtons({ prevRef, nextRef }) {
  return (
    <div className="flex items-center gap-3">
      {/* Previous Button */}
      <button
        ref={prevRef}
        type="button"
        aria-label="Previous testimonial slide"
        className="testimonials-prev-btn group flex items-center justify-center w-12 h-12 rounded-full
                   bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-lg shadow-slate-200/50
                   text-[#3695d0] hover:text-blue-700 hover:bg-white hover:border-blue-300
                   hover:-translate-y-0.5 hover:scale-110 hover:shadow-xl hover:shadow-blue-500/20
                   active:scale-95 transition-all duration-300 cursor-pointer
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      >
        <HiChevronLeft
          size={22}
          className="transition-transform duration-200 group-hover:-translate-x-0.5"
        />
      </button>

      {/* Next Button */}
      <button
        ref={nextRef}
        type="button"
        aria-label="Next testimonial slide"
        className="testimonials-next-btn group flex items-center justify-center w-12 h-12 rounded-full
                   bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-lg shadow-slate-200/50
                   text-[#3695d0] hover:text-blue-700 hover:bg-white hover:border-blue-300
                   hover:-translate-y-0.5 hover:scale-110 hover:shadow-xl hover:shadow-blue-500/20
                   active:scale-95 transition-all duration-300 cursor-pointer
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      >
        <HiChevronRight
          size={22}
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        />
      </button>
    </div>
  );
}
