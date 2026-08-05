import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Keyboard,
  EffectCoverflow,
} from "swiper/modules";

import useInView from "../../hooks/useInView";
import { testimonials } from "../../data/testimonialData";
import TestimonialCard from "./TestimonialCard";
import NavigationButtons from "./NavigationButtons";
import TrustArea from "./TrustArea";

// Swiper core styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

/* ─── Decorative background component ─── */
function SectionBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* Base soft blue gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #f8fafc 0%, #edf5ff 45%, #f1f7fe 75%, #f8fafc 100%)",
        }}
      />

      {/* Blurred gradient circles */}
      <div
        className="absolute top-10 left-1/4 w-125 h-125 rounded-full opacity-35 animate-blob"
        style={{
          background: "radial-gradient(circle, ##3695d0 0%, transparent 65%)",
          filter: "blur(90px)",
        }}
      />
      <div
        className="absolute bottom-10 right-1/4 w-140 h-140 rounded-full opacity-30 animate-blob-alt"
        style={{
          background: "radial-gradient(circle, ##3695d0 0%, transparent 65%)",
          filter: "blur(100px)",
        }}
      />
      <div
        className="absolute top-1/2 left-10 w-96 h-96 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, #3695d0 0%, transparent 60%)",
          filter: "blur(70px)",
        }}
      />

      {/* Light dot grid pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="testimonials-grid"
            x="0"
            y="0"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.5" fill="#2563eb" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#testimonials-grid)" />
      </svg>

      {/* Floating geometric accent shapes */}
      <div className="absolute top-16 right-[12%] w-16 h-16 border-2 border-blue-400/20 rounded-2xl rotate-12 animate-float-slow" />
      <div className="absolute bottom-24 left-[8%] w-20 h-20 border border-indigo-400/20 rounded-full animate-float-alt" />
    </div>
  );
}

/* ─── Section Header component ─── */
function SectionHeader({ inView }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
      <div className="max-w-2xl">
        {/* Small Badge */}
        <div
          className="transition-all duration-700"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4
                         bg-blue-50 text-[#3695d0] border border-blue-200/80 shadow-xs"
          >
            <span>⭐</span>
            <span>Student Success Stories</span>
          </span>
        </div>

        {/* Main Heading */}
        <div
          className="transition-all duration-700"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "80ms",
          }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            Hear From Our{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#5BAFE6] via-[#3695d0] to-[#2470A8]">
              Successful Learners
            </span>
          </h2>
        </div>

        {/* Subtitle Description */}
        <div
          className="transition-all duration-700"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "160ms",
          }}
        >
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Thousands of students have transformed their careers through our
            practical learning approach, expert mentorship, and real-world
            projects.
          </p>
        </div>
      </div>

      {/* Navigation Buttons (Desktop view in header) */}
      {/* <div
        className="hidden md:flex items-center justify-end transition-all duration-700"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(20px)",
          transitionDelay: "240ms",
        }}
      >
        <NavigationButtons prevRef={prevRef} nextRef={nextRef} />
      </div> */}
    </div>
  );
}

/* ═══════════════════════════════════════════════
   TestimonialsSection Main Component
═══════════════════════════════════════════════ */
export default function TestimonialsSection() {
  const [headerRef, headerInView] = useInView(0.15);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-28"
    >
      <SectionBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div ref={headerRef}>
          <SectionHeader
            inView={headerInView}
            prevRef={prevRef}
            nextRef={nextRef}
          />
        </div>

        {/* ── Swiper Slider Container ── */}
        <div className="relative testimonials-slider-wrapper">
          <Swiper
            modules={[
              Autoplay,
              Navigation,
              Pagination,
              Keyboard,
              EffectCoverflow,
            ]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            speed={700}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            keyboard={{
              enabled: true,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 120,
              modifier: 1.8,
              slideShadows: false,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            pagination={{
              clickable: true,
              el: ".testimonials-pagination",
              bulletClass: "testimonials-bullet",
              bulletActiveClass: "testimonials-bullet-active",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 1.25,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 1.85,
                spaceBetween: 32,
              },
              1280: {
                slidesPerView: 2.1,
                spaceBetween: 40,
              },
            }}
            className="testimonials-swiper py-6! px-2! overflow-visible"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <TestimonialCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons (Mobile View — Centered below card) */}
          <div className="flex md:hidden items-center justify-center mt-6">
            <NavigationButtons prevRef={prevRef} nextRef={nextRef} />
          </div>

          {/* Custom Animated Pagination Pills */}
          <div className="testimonials-pagination flex items-center justify-center gap-2 mt-8 sm:mt-10" />
        </div>

        {/* ── Bottom Social Proof Trust Area ── */}
        <TrustArea />
      </div>
    </section>
  );
}
