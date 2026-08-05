import { useEffect, useRef, useState } from "react";
import { HiStar } from "react-icons/hi2";
import HeroButtons from "./HeroButtons";
import FloatingCard from "./FloatingCard";

/* ─── Decorative background blobs ─── */
function BackgroundBlobs({ blob1, blob2 }) {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* Top-right large blob */}
      <div
        className={`
          absolute -top-32 -right-32 w-130 h-130 rounded-full
          ${blob1} opacity-30 blur-3xl animate-blob
        `}
      />
      {/* Bottom-left blob */}
      <div
        className={`
          absolute -bottom-24 -left-24 w-95 h-95 rounded-full
          ${blob2} opacity-25 blur-3xl animate-blob-alt
        `}
      />
      {/* Subtle dot grid */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="dot-grid"
            x="0"
            y="0"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.5" fill="#1e40af" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-grid)" />
      </svg>
    </div>
  );
}

/* ─── Stat strip below buttons ─── */
function StatStrip({ stats }) {
  return (
    <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 flex-wrap">
      {stats.map((stat, i) => (
        <div key={i} className="flex items-center gap-2">
          {i > 0 && <span className="hidden sm:block w-px h-6 bg-slate-200" />}
          <div>
            <p className="text-xl font-extrabold text-slate-900 leading-none">
              {stat.value}
            </p>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              {stat.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Trust strip (avatars + rating) ─── */
function TrustStrip() {
  const avatarColors = [
    "bg-blue-400",
    "bg-violet-400",
    "bg-emerald-400",
    "bg-amber-400",
    "bg-rose-400",
  ];
  return (
    <div className="flex items-center justify-center lg:justify-start gap-3">
      {/* Avatar stack */}
      <div className="flex -space-x-2">
        {avatarColors.map((color, i) => (
          <div
            key={i}
            className={`w-8 h-8 rounded-full ${color} border-2 border-white flex items-center justify-center text-white text-xs font-bold`}
          >
            {String.fromCharCode(65 + i)}
          </div>
        ))}
      </div>
      {/* Rating */}
      <div>
        <div className="flex items-center gap-0.5 justify-center lg:justify-start">
          {[...Array(5)].map((_, i) => (
            <HiStar
              key={i}
              size={13}
              className="text-amber-400 fill-amber-400"
            />
          ))}
        </div>
        <p className="text-xs text-slate-500 font-medium">
          Trusted by 10,000+ students
        </p>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   HeroSlide — Individual Slide Layout
══════════════════════════════════════════ */
export default function HeroSlide({ slide, isActive }) {
  /* Bump animKey when slide becomes active → forces CSS animation replay */
  const [animKey, setAnimKey] = useState(0);
  const wasActiveRef = useRef(false);

  useEffect(() => {
    if (isActive && !wasActiveRef.current) {
      setAnimKey((k) => k + 1);
    }
    wasActiveRef.current = isActive;
  }, [isActive]);

  const { Illustration } = slide;

  return (
    <section
      className="relative w-full min-h-170 lg:min-h-190 flex items-center overflow-hidden bg-white"
      aria-label={`${slide.title} ${slide.titleAccent}`}
    >
      {/* Background */}
      <BackgroundBlobs blob1={slide.blobColor1} blob2={slide.blobColor2} />

      {/* Very subtle top gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-50/80 via-white to-white pointer-events-none" />

      {/* ── Main content grid ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* ── LEFT: Text content (First on mobile, tablet & desktop) ── */}
          <div
            key={`content-${animKey}`}
            className="order-1 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Badge */}
            <div className="anim-fade-up anim-d0 mb-4 sm:mb-5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-50 border border-blue-100 text-[#2470A8] text-xs sm:text-sm font-semibold shadow-sm">
                {slide.badge}
              </span>
            </div>

            {/* Heading */}
            <div className="anim-fade-up anim-d1 mb-4 sm:mb-5">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-extrabold leading-tight tracking-tight text-slate-900">
                {slide.title}{" "}
                <span
                  className={`text-transparent bg-clip-text bg-linear-to-r from-[#5BAFE6] via-[#3695d0] to-[#2470A8]`}
                >
                  {slide.titleAccent}
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className="anim-fade-up anim-d2 mb-6 sm:mb-8">
              <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {slide.description}
              </p>
            </div>

            {/* CTA buttons */}
            <div className="anim-fade-up anim-d3 mb-6 sm:mb-8 w-full">
              <HeroButtons
                primary={slide.primaryCTA}
                secondary={slide.secondaryCTA}
              />
            </div>

            {/* Stats */}
            <div className="anim-fade-up anim-d4 mb-6 w-full">
              <StatStrip stats={slide.stats} />
            </div>

            {/* Trust strip */}
            <div className="anim-fade-up anim-d5 w-full">
              <TrustStrip />
            </div>
          </div>

          {/* ── RIGHT: Illustration + floating cards (Second on mobile & tablet, right on desktop) ── */}
          <div
            key={`illus-${animKey}`}
            className="order-2 lg:order-2 anim-fade-right relative w-full max-w-95 sm:max-w-110 lg:max-w-none mx-auto"
          >
            {/* Illustration glow backdrop */}
            <div
              className="absolute inset-8 rounded-3xl blur-2xl opacity-20"
              style={{
                background: `radial-gradient(circle, ${slide.accentHex}55, transparent 70%)`,
              }}
              aria-hidden="true"
            />

            {/* Illustration wrapper */}
            <div className="relative z-10 px-2 sm:px-4 lg:px-0">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/60 border border-slate-100/80 bg-white anim-scale-in">
                <Illustration />
              </div>

              {/* Floating cards */}
              <div className="absolute inset-0 pointer-events-none">
                {slide.floatingCards.map((card, i) => (
                  <FloatingCard key={i} {...card} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(255,255,255,0.8), transparent)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
