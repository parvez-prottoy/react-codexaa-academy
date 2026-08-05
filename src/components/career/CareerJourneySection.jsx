import { useState } from "react";
import {
  HiRocketLaunch,
  HiArrowRight,
  HiArrowDownTray,
  HiStar,
  HiCheckCircle,
  HiSparkles,
} from "react-icons/hi2";
import useInView from "../../hooks/useInView";
import {
  careerMilestones,
  careerFeatures,
  careerTrustMetrics,
} from "../../data/careerJourneyData";
import ProgressTimeline from "./ProgressTimeline";
import FeatureCard from "./FeatureCard";

/* ─── Background Layer ─── */
function SectionBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Soft Blue Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/30" />

      {/* Radial Glow Blobs */}
      <div
        className="absolute top-1/3 left-10 w-[500px] h-[500px] rounded-full opacity-25 animate-blob"
        style={{
          background: "radial-gradient(circle, #3695d0 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full opacity-20 animate-blob-alt"
        style={{
          background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      {/* Floating Geometric Element */}
      <div className="absolute top-20 right-20 w-16 h-16 rounded-2xl border-2 border-blue-200/40 rotate-12 animate-float pointer-events-none" />

      {/* Dot Grid Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="career-dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#3695d0" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#career-dots)" />
      </svg>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   CareerJourneySection — Main Component
═══════════════════════════════════════════════ */
export default function CareerJourneySection() {
  const [activeMilestoneId, setActiveMilestoneId] = useState(2);
  const [headerRef, headerInView] = useInView(0.15);
  const [timelineRef, timelineInView] = useInView(0.1);

  return (
    <section
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-28"
      aria-labelledby="career-heading"
      id="career"
    >
      <SectionBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── TWO-COLUMN MAIN GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* ── LEFT COLUMN: Interactive Career Timeline (6 cols on desktop) ── */}
          <div ref={timelineRef} className="lg:col-span-6 order-1 lg:order-1">
            <div className="mb-6 flex items-center justify-between flex-wrap gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2470A8] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Interactive Career Path
              </span>
              <span className="text-xs text-slate-400 font-medium">
                Click a level to view details
              </span>
            </div>

            <ProgressTimeline
              milestones={careerMilestones}
              activeMilestoneId={activeMilestoneId}
              onSelectMilestone={setActiveMilestoneId}
              inView={timelineInView}
            />
          </div>

          {/* ── RIGHT COLUMN: Header + 4 Feature Cards + CTAs + Trust Bar (6 cols on desktop) ── */}
          <div ref={headerRef} className="lg:col-span-6 order-2 lg:order-2 flex flex-col items-start lg:sticky lg:top-28">
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
                <HiRocketLaunch size={16} />
                Career Growth Path
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
                id="career-heading"
                className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-slate-900 leading-tight"
              >
                Upskill Today.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5BAFE6] via-[#3695d0] to-[#2470A8]">
                  Lead Tomorrow.
                </span>
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
              <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
                Our structured learning roadmap helps you gain practical skills, build real-world
                projects, earn industry-recognized certificates, and confidently advance from
                beginner to professional.
              </p>
            </div>

            {/* 4 Feature Cards Grid */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8 sm:mb-10 transition-all duration-700"
              style={{
                opacity: headerInView ? 1 : 0,
                transform: headerInView ? "translateY(0)" : "translateY(24px)",
                transitionDelay: "300ms",
              }}
            >
              {careerFeatures.map((feature) => (
                <FeatureCard key={feature.id} feature={feature} />
              ))}
            </div>

            {/* CTA Buttons */}
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
                           bg-gradient-to-r from-[#5BAFE6] via-[#3695d0] to-[#2470A8] text-white text-base font-bold
                           shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300
                           hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto text-center
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3695d0]"
              >
                Start Your Career
                <HiArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </a>

              <a
                href="/brochure"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full
                           border-2 border-slate-200 text-slate-700 text-base font-semibold
                           hover:border-blue-300 hover:text-[#2470A8] hover:bg-blue-50/50
                           transition-all duration-200 w-full sm:w-auto text-center
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3695d0]"
              >
                <HiArrowDownTray size={18} />
                Download Learning Roadmap
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
                <span>10,000+ Successful Learners</span>
              </div>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-1">
                <HiSparkles size={15} className="text-emerald-500" />
                <span>95% Career Growth Success</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
