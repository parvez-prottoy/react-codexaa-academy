import {
  HiLightBulb,
  HiArrowRight,
  HiCheckCircle,
  HiSparkles,
} from "react-icons/hi2";
import useInView from "../../hooks/useInView";
import { crossFeatures } from "../../data/technologyData";
import FeatureCard from "./FeatureCard";
import TechnologyHub from "./TechnologyHub";

/* ─── Background Layer ─── */
function SectionBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* Soft Blue Gradient Base */}
      <div className="absolute inset-0 bg-linear-to-br from-white via-blue-50/50 to-slate-50" />

      {/* Blurred circles */}
      <div
        className="absolute -top-32 -left-32 w-130 h-130 rounded-full opacity-25 animate-blob"
        style={{
          background: "radial-gradient(circle, #bae6fd 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute -bottom-32 -right-32 w-120 h-120 rounded-full opacity-20 animate-blob-alt"
        style={{
          background: "radial-gradient(circle, #c7d2fe 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      {/* Dot Grid Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.035]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="cross-dots"
            x="0"
            y="0"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.5" fill="#3695d0" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cross-dots)" />
      </svg>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   CrossPlatformSection — Main Redesigned Component
═══════════════════════════════════════════════ */
export default function CrossPlatformSection() {
  const [headerRef, headerInView] = useInView(0.15);
  const [gridRef] = useInView(0.1);

  return (
    <section
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-28"
      aria-labelledby="cross-platform-heading"
      id="technologies"
    >
      <SectionBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* ── LEFT COLUMN: Text Content + 4 Feature Cards + CTAs (7 cols) ── */}
          <div
            ref={headerRef}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Badge */}
            <div
              className="transition-all duration-700 mb-4 sm:mb-5"
              style={{
                opacity: headerInView ? 1 : 0,
                transform: headerInView ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold
                           border border-blue-100 text-[#2470A8] shadow-xs"
                style={{ backgroundColor: "#f0f9ff" }}
              >
                <HiLightBulb size={16} />
                Learn Modern Technologies
              </span>
            </div>

            {/* Main Heading */}
            <div
              className="transition-all duration-700 mb-4 sm:mb-5"
              style={{
                opacity: headerInView ? 1 : 0,
                transform: headerInView ? "translateY(0)" : "translateY(20px)",
                transitionDelay: "100ms",
              }}
            >
              <h2
                id="cross-platform-heading"
                className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-slate-900 leading-tight"
              >
                Master{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#5BAFE6] via-[#3695d0] to-[#2470A8]">
                  Multiple Technologies
                </span>{" "}
                with One Learning Journey
              </h2>
            </div>

            {/* Description */}
            <div
              className="transition-all duration-700 mb-8 sm:mb-10"
              style={{
                opacity: headerInView ? 1 : 0,
                transform: headerInView ? "translateY(0)" : "translateY(20px)",
                transitionDelay: "200ms",
              }}
            >
              <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-2xl">
                Learn Web Development, Mobile Apps, AI, Cloud Computing, DevOps,
                UI/UX, and more through a structured, project-based curriculum
                designed by industry professionals.
              </p>
            </div>

            {/* 4 Feature Highlights Grid */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8 sm:mb-10 transition-all duration-700"
              style={{
                opacity: headerInView ? 1 : 0,
                transform: headerInView ? "translateY(0)" : "translateY(24px)",
                transitionDelay: "300ms",
              }}
            >
              {crossFeatures.map((feature) => (
                <FeatureCard key={feature.id} feature={feature} />
              ))}
            </div>

            {/* CTA Area */}
            <div
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full mb-6 transition-all duration-700"
              style={{
                opacity: headerInView ? 1 : 0,
                transform: headerInView ? "translateY(0)" : "translateY(24px)",
                transitionDelay: "400ms",
              }}
            >
              <a
                href="/enroll"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full
                           bg-linear-to-r from-[#5BAFE6] via-[#3695d0] to-[#2470A8] text-white text-base font-bold
                           shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300
                           hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto text-center
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3695d0]"
              >
                Start Learning
                <HiArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </a>
            </div>

            {/* Trust Metrics Bar */}
            <div
              className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 font-medium pt-2 transition-all duration-700"
              style={{
                opacity: headerInView ? 1 : 0,
                transform: headerInView ? "translateY(0)" : "translateY(24px)",
                transitionDelay: "480ms",
              }}
            >
              <div className="flex items-center gap-1">
                <span className="text-amber-400 font-bold">★★★★★</span>
                <span className="font-bold text-slate-800">4.9 Rating</span>
              </div>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-1">
                <HiCheckCircle size={15} className="text-[#3695d0]" />
                <span>10,000+ Happy Students</span>
              </div>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-1">
                <HiSparkles size={15} className="text-emerald-500" />
                <span>95% Completion Rate</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Interactive Technology Ecosystem Hub (5 cols) ── */}
          <div ref={gridRef} className="lg:col-span-5 w-full">
            <TechnologyHub />
          </div>
        </div>
      </div>
    </section>
  );
}
