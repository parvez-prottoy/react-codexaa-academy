import {
  HiAcademicCap,
  HiArrowRight,
  HiBuildingOffice2,
  HiCheckCircle,
  HiSparkles,
  HiUserGroup,
} from 'react-icons/hi2';
import { Link } from 'react-router-dom';

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white via-blue-50/40 to-slate-50 border-b border-slate-100 py-14 sm:py-20 lg:py-24">
      {/* Background decorations matching Contact Hero */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <div
          className="absolute -top-32 -left-32 w-120 h-120 rounded-full opacity-40 animate-blob"
          style={{
            background: 'radial-gradient(circle, #5BAFE6 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-140 h-140 rounded-full opacity-30 animate-blob-alt"
          style={{
            background: 'radial-gradient(circle, #2470A8 0%, transparent 70%)',
            filter: 'blur(90px)',
          }}
        />
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="about-hero-dots"
              x="0"
              y="0"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.4" fill="#2563eb" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-hero-dots)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column — Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/90 border border-blue-200/80 text-xs sm:text-sm font-semibold text-[#2470A8] shadow-xs">
              <HiSparkles size={15} className="text-[#3695d0] animate-pulse" />
              <span>About Us</span>
            </div>

            {/* Large Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Empowering Future{' '}
              <span className="bg-linear-to-r from-[#2470A8] via-[#3695d0] to-[#5BAFE6] bg-clip-text text-transparent">
                Tech Professionals
              </span>
            </h1>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
              Codexaa Academy is a premier tech education institute dedicated to
              transforming ambitious learners into industry-ready software
              engineers, product designers, and cloud architects through
              practical learning and 1-on-1 mentorship.
            </p>

            {/* Hero CTAs */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-[#5BAFE6] via-[#3695d0] to-[#2470A8] text-white text-sm font-bold shadow-md shadow-blue-200 hover:shadow-lg hover:shadow-blue-300 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Explore Courses</span>
                <HiArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200"
              >
                <span>Contact Admissions</span>
              </Link>
            </div>

            {/* Quick trust points */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <HiCheckCircle size={18} className="text-[#3695d0]" />
                <span>15,000+ Alumni</span>
              </div>
              <div className="flex items-center gap-2">
                <HiCheckCircle size={18} className="text-[#3695d0]" />
                <span>98% Job Placement</span>
              </div>
              <div className="flex items-center gap-2">
                <HiCheckCircle size={18} className="text-[#3695d0]" />
                <span>200+ Hiring Partners</span>
              </div>
            </div>
          </div>

          {/* Right Column — Premium Illustration Card */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="relative rounded-3xl bg-linear-to-br from-white via-blue-50/60 to-white p-6 sm:p-8 border border-blue-100/80 shadow-xl shadow-blue-900/5 space-y-5 backdrop-blur-sm">
                {/* Header status bar */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-blue-600 animate-ping" />
                    <div className="w-3 h-3 rounded-full bg-[#2470A8] absolute" />
                    <span className="text-xs font-bold text-slate-800 ml-4">
                      Academy Overview
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-[#2470A8] border border-blue-200">
                    Est. 2026
                  </span>
                </div>

                {/* Card Item 1 */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-100 shadow-xs transform hover:scale-[1.02] transition-transform duration-200">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2470A8] flex items-center justify-center shrink-0">
                    <HiAcademicCap size={22} />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-xs font-bold text-slate-800">
                      Industry-Standard Curriculum
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Curriculum updated every cohort with latest tech stacks.
                    </p>
                  </div>
                </div>

                {/* Card Item 2 */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-100 shadow-xs transform hover:scale-[1.02] transition-transform duration-200">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <HiUserGroup size={22} />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-xs font-bold text-slate-800">
                      Active Software Engineer Mentors
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Learn directly from leaders at BJIT, Brain Station 23 &
                      NTT DATA.
                    </p>
                  </div>
                </div>

                {/* Quick stats row */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-700">
                    <HiBuildingOffice2 size={18} className="text-[#3695d0]" />
                    <span>200+ Partners</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-700">
                    <HiSparkles size={18} className="text-[#3695d0]" />
                    <span>98% Placed</span>
                  </div>
                </div>
              </div>

              {/* Floating Sparkles Badge */}
              <div className="absolute -top-4 right-0 p-3 rounded-2xl bg-white border border-blue-100 shadow-lg flex items-center gap-2 animate-bounce">
                <HiSparkles size={20} className="text-amber-500" />
                <span className="text-xs font-extrabold text-slate-800">
                  Top Tech Academy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
