import {} from 'react';
import { HiArrowRight, HiHandRaised } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { companies, sectionStats } from '../../data/companyData';
import useInView from '../../hooks/useInView';
import CompanyCard from './CompanyCard';
import StatsCard from './StatsCard';

/* ─── Decorative background layer ─── */
function SectionBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* Base gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-blue-50/60 to-indigo-50/40" />

      {/* Dot grid */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.035]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="trusted-dots"
            x="0"
            y="0"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.5" fill="#2470A8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#trusted-dots)" />
      </svg>

      {/* Blurred blob 1 — top right */}
      <div className="absolute -top-40 -right-40 w-140 h-140 rounded-full bg-blue-300/25 blur-[80px] animate-blob" />

      {/* Blurred blob 2 — bottom left */}
      <div className="absolute -bottom-32 -left-32 w-110 h-110 rounded-full bg-indigo-300/20 blur-[70px] animate-blob-alt" />

      {/* Blurred blob 3 — center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 rounded-full bg-cyan-200/15 blur-[60px]" />

      {/* Accent arc — decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-300/50 to-transparent" />
    </div>
  );
}

/* ─── Section header ─── */
function SectionHeader({ inView }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-14">
      {/* Badge */}
      <div
        className={`transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-100 text-[#2470A8] text-sm font-semibold shadow-sm mb-5">
          <HiHandRaised size={16} />
          Trusted By Industry Leaders
        </span>
      </div>

      {/* Heading */}
      <div
        className={`transition-all duration-700 delay-100 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-slate-900 leading-tight tracking-tight">
          Join{' '}
          <span className="relative inline-block">
            <span className="relative z-10 text-transparent bg-clip-text bg-linear-to-r from-[#5BAFE6] via-[#3695d0] to-[#2470A8]">
              450+ Happy Learners
            </span>
            {/* Underline decoration */}
            <svg
              className="absolute -bottom-1.5 left-0 w-full"
              viewBox="0 0 200 8"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0 6 Q50 0 100 5 Q150 10 200 4"
                stroke="url(#underline-grad)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="underline-grad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#3695d0" />
                  <stop offset="100%" stopColor="#2B7CAD" />
                </linearGradient>
              </defs>
            </svg>
          </span>{' '}
          <br className="hidden sm:block" />
          Building Successful Careers
        </h2>
      </div>

      {/* Description */}
      <div
        className={`transition-all duration-700 delay-200 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <p className="mt-5 text-base sm:text-lg text-slate-500 leading-relaxed">
          Our students are working, interning, and growing their careers with
          leading national and international companies.
        </p>
      </div>
    </div>
  );
}

/* ─── Divider with label ─── */
function Divider({ label }) {
  return (
    <div className="flex items-center gap-4 my-12">
      <div className="flex-1 h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
      <span className="shrink-0 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-widest shadow-sm">
        {label}
      </span>
      <div className="flex-1 h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
    </div>
  );
}

/* ═══════════════════════════════════════════════
   TrustedCompanies — Main Section
═══════════════════════════════════════════════ */
export default function TrustedCompanies() {
  const [headerRef, headerInView] = useInView(0.15);
  const [statsRef, statsInView] = useInView(0.15);
  const [gridRef, gridInView] = useInView(0.1);

  const international = companies.filter((c) => c.category === 'international');

  return (
    <section
      className="relative w-full overflow-hidden py-12 sm:py-16 lg:py-24"
      aria-labelledby="trusted-heading"
    >
      {/* Background */}
      <SectionBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section header ── */}
        <div ref={headerRef}>
          <SectionHeader inView={headerInView} />
        </div>

        {/* ── Stats cards ── */}
        <div
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-4"
        >
          {sectionStats.map((stat, i) => (
            <div
              key={stat.id}
              className={`transition-all duration-700 ${
                statsInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: statsInView ? `${i * 100}ms` : '0ms' }}
            >
              <StatsCard stat={stat} delay={i * 150} />
            </div>
          ))}
        </div>

        {/* ── Divider ── */}
        <Divider label="Our Hiring Partners" />

        {/* ── Company grids ── */}
        <div ref={gridRef}>
          {/* International companies */}
          {/* <CategoryLabel label="International Companies" color="#2B7CAD" /> */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-10">
            {international.map((company, i) => (
              <div
                key={company.id}
                className={`transition-all duration-500 ${
                  gridInView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: gridInView ? `${i * 60}ms` : '0ms' }}
              >
                <CompanyCard company={company} />
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom CTA strip ── */}
        <div
          className="mt-12 sm:mt-16 flex flex-col md:flex-row items-center justify-between gap-6
                        bg-white/70 backdrop-blur-sm border border-slate-200/80 rounded-3xl
                        p-6 sm:p-8 shadow-sm text-center md:text-left"
        >
          <div>
            <p className="text-base sm:text-lg font-bold text-slate-900">
              Ready to join these companies?
            </p>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Start your journey today — the next cohort is filling fast.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full
                         bg-linear-to-r from-[#5BAFE6] via-[#3695d0] to-[#2470A8] text-white text-sm font-bold
                         shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300
                         hover:-translate-y-0.5 transition-all duration-200
                         w-full sm:w-auto
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Apply Now
              <HiArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
            <Link
              to="/courses"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full
                         border-2 border-slate-200 text-slate-700 text-sm font-semibold
                         hover:border-blue-300 hover:text-[#2B7CAD] hover:bg-blue-50/50
                         transition-all duration-200
                         w-full sm:w-auto
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
