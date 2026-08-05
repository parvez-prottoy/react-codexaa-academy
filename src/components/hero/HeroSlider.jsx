import { useCallback, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import {
  A11y,
  Autoplay,
  EffectFade,
  Keyboard,
  Pagination,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { slides } from '../../data/slideData';
import HeroSlide from './HeroSlide';

/* ─── Custom navigation button ─── */
function NavButton({ direction, onClick, disabled }) {
  const isNext = direction === 'next';
  const Icon = isNext ? HiChevronRight : HiChevronLeft;
  return (
    <button
      onClick={onClick}
      aria-label={isNext ? 'Next slide' : 'Previous slide'}
      disabled={disabled}
      className={`
        group relative z-30
        w-11 h-11 rounded-full
        bg-white/90 backdrop-blur-sm
        border border-slate-200/80
        flex items-center justify-center
        shadow-md shadow-slate-200
        hover:bg-white hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100
        hover:-translate-y-0.5
        transition-all duration-200
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
        disabled:opacity-40 disabled:cursor-not-allowed
      `}
    >
      <Icon
        size={20}
        className="text-slate-600 group-hover:text-blue-600 transition-colors duration-200"
      />
    </button>
  );
}

/* ─── Slide counter display (e.g. "01 / 03") ─── */
function SlideCounter({ current, total }) {
  return (
    <div
      className="flex items-center gap-1.5 select-none"
      aria-live="polite"
      aria-atomic="true"
    >
      <span className="text-sm font-bold text-blue-700 tabular-nums">
        {String(current + 1).padStart(2, '0')}
      </span>
      <span className="text-slate-300 text-sm">/</span>
      <span className="text-sm font-medium text-slate-400 tabular-nums">
        {String(total).padStart(2, '0')}
      </span>
    </div>
  );
}

/* ══════════════════════════════════════════
   HeroSlider — Swiper Wrapper
══════════════════════════════════════════ */
export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handlePrev = useCallback(() => {
    swiperRef.current?.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    swiperRef.current?.slideNext();
  }, []);

  const handleActiveIndexChange = useCallback((swiper) => {
    setActiveIndex(swiper.realIndex);
  }, []);

  return (
    <div className="relative w-full" role="region" aria-label="Hero Slider">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade, Keyboard, A11y]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={800}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        keyboard={{ enabled: true, onlyInViewport: true }}
        a11y={{
          prevSlideMessage: 'Previous slide',
          nextSlideMessage: 'Next slide',
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onActiveIndexChange={handleActiveIndexChange}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <HeroSlide slide={slide} isActive={activeIndex === index} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ── Bottom control bar ── */}
      <div
        className="
          absolute bottom-6 left-1/2 -translate-x-1/2 z-30
          flex items-center gap-5
          px-5 py-2.5
          bg-white/90 backdrop-blur-md
          border border-slate-200/80
          rounded-full
          shadow-lg shadow-slate-200/50
        "
      >
        {/* Prev button */}
        <NavButton direction="prev" onClick={handlePrev} />

        {/* Pagination dots (rendered by Swiper into this div) */}
        {/* <div className="hero-pagination flex items-center gap-0" /> */}

        {/* Slide counter */}
        <SlideCounter current={activeIndex} total={slides.length} />

        {/* Next button */}
        <NavButton direction="next" onClick={handleNext} />
      </div>
    </div>
  );
}
