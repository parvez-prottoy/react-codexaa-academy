import { useState } from "react";
import "swiper/css";
import { A11y, Autoplay, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { HiStar } from "react-icons/hi2";
import { trustAvatarStack } from "../../data/reviewData";
import ReviewCard from "./ReviewCard";
import useFetch from "../../hooks/useFetch";

import RatingStars from "./RatingStars";

export default function ReviewSlider() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { data: reviewData, loading, error } = useFetch("/success-stories");

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-28 bg-linear-to-b from-white via-blue-50/30 to-slate-50 border-b border-slate-100">
      {/* Background decorations (full-width) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <div
          className="absolute -top-32 -right-32 w-130 h-130 rounded-full opacity-35 animate-blob"
          style={{
            background: "radial-gradient(circle, #5BAFE6 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-140 h-140 rounded-full opacity-30 animate-blob-alt"
          style={{
            background: "radial-gradient(circle, #2470A8 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="review-dots"
              x="0"
              y="0"
              width="28"
              height="28"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.4" fill="#2563eb" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#review-dots)" />
        </svg>

        {/* Floating geometric shapes */}
        <div className="absolute top-16 left-[10%] w-12 h-12 border border-blue-300/20 rounded-2xl rotate-12 animate-float-slow" />
        <div className="absolute bottom-20 right-[12%] w-14 h-14 border border-indigo-300/20 rounded-full animate-float-alt" />
      </div>

      {/* Global Container Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header + Navigation Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 sm:mb-16 text-center md:text-left">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-[#2470A8] shadow-xs">
              <HiStar className="text-amber-400 text-sm" />
              <span>Student Reviews</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              What Our Students Say
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Hear directly from students who transformed their careers through
              our academy.
            </p>
          </div>

          {/* Floating Navigation Buttons */}
        </div>

        {/* Swiper Container (Strictly bounded inside max-w-7xl) */}
        <div className="relative w-full overflow-hidden py-4">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3695d0]"></div>
            </div>
          ) : error ? (
            <div className="text-center py-20 text-red-500">
              <p>Failed to load reviews: {error}</p>
            </div>
          ) : reviewData && reviewData.length > 0 ? (
            <>
              <Swiper
                modules={[Autoplay, Keyboard, A11y]}
                onSwiper={setSwiperInstance}
                onRealIndexChange={(swiper) => setActiveIndex(swiper.realIndex)}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                loop={true}
                centeredSlides={true}
                slidesPerView={1}
                spaceBetween={20}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                keyboard={{ enabled: true }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    centeredSlides: false,
                    spaceBetween: 24,
                  },
                  1024: {
                    slidesPerView: 3,
                    centeredSlides: true,
                    spaceBetween: 28,
                  },
                }}
                className="w-full overflow-hidden"
              >
                {reviewData.map((review) => (
                  <SwiperSlide
                    key={review._id || review.id}
                    className="h-auto transition-all duration-500 py-2"
                  >
                    {({ isActive }) => (
                      <ReviewCard review={review} isActive={isActive} />
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Animated Pill Pagination */}
              <div className="flex items-center justify-center gap-2 mt-10">
                {reviewData.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => swiperInstance?.slideToLoop(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`transition-all duration-300 cursor-pointer ${
                      activeIndex === idx
                        ? "w-8 h-2.5 rounded-full bg-linear-to-r from-[#5BAFE6] via-[#3695d0] to-[#2470A8] shadow-sm shadow-blue-500/30"
                        : "w-2.5 h-2.5 rounded-full bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>
            </>
          ) : null}
        </div>

        {/* Bottom Trust Section */}
        <div className="mt-16 pt-10 border-t grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center bg-white/70 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-slate-200/60 shadow-xs text-center sm:text-left">
          {/* Avatar Stack */}
          <div className="flex items-center justify-center sm:justify-start -space-x-3">
            {trustAvatarStack.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="Student graduate avatar"
                className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-xs hover:scale-110 hover:z-10 transition-transform duration-200"
              />
            ))}
          </div>

          {/* Rating Metric */}
          <div className="flex flex-col items-center sm:items-start">
            <RatingStars rating={5} size={16} />
            <div className="text-sm font-bold text-slate-900 mt-1">
              4.9 Average Rating
            </div>
            <div className="text-xs text-slate-500">
              From 5,000+ Verified Reviews
            </div>
          </div>

          {/* Student Metric */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="text-xl sm:text-2xl font-extrabold text-[#2470A8]">
              10,000+
            </div>
            <div className="text-xs font-bold text-slate-800">
              Happy Students
            </div>
            <div className="text-xs text-slate-500">
              Graduated across all cohorts
            </div>
          </div>

          {/* Recommendation Metric */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="text-xl sm:text-2xl font-extrabold text-emerald-600">
              95%
            </div>
            <div className="text-xs font-bold text-slate-800">
              Would Recommend
            </div>
            <div className="text-xs text-slate-500">
              To friends & colleagues
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
