import {
  HiArrowRight,
  HiCheckCircle,
  HiSparkles,
  HiTrophy,
} from 'react-icons/hi2';
import { Link } from 'react-router-dom';

export default function SuccessHero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white via-blue-50/40 to-slate-50 border-b border-slate-100 py-14 sm:py-20 lg:py-24">
      {/* Ambient background glows */}
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
              id="hero-dots"
              x="0"
              y="0"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.4" fill="#2563eb" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-dots)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Area */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/90 border border-blue-200/80 text-xs sm:text-sm font-semibold text-[#2470A8] shadow-xs">
              <HiTrophy className="text-amber-500 text-base" />
              <span>Success Stories</span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Real Students. <br />
              Real Careers. <br />
              <span className="bg-linear-to-r from-[#2470A8] via-[#3695d0] to-[#5BAFE6] bg-clip-text text-transparent">
                Real Success.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
              Discover how our students transformed their careers through
              practical learning, 1-on-1 mentorship, and industry-focused
              software engineering training.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#featured-stories"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-[#5BAFE6] via-[#3695d0] to-[#2470A8] text-white text-sm font-bold shadow-md shadow-blue-200 hover:shadow-lg hover:shadow-blue-300 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Explore Stories</span>
                <HiArrowRight size={16} />
              </a>

              <Link
                to="/enroll"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200"
              >
                <span>Join Our Academy</span>
              </Link>
            </div>

            {/* Trust points */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <HiCheckCircle size={18} className="text-[#3695d0]" />
                <span>2,500+ Hired Graduates</span>
              </div>
              <div className="flex items-center gap-2">
                <HiCheckCircle size={18} className="text-[#3695d0]" />
                <span>150+ Hiring Partners</span>
              </div>
            </div>
          </div>

          {/* Right Collage / Graphic */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="relative rounded-3xl bg-linear-to-br from-white via-blue-50/60 to-white p-6 border border-blue-100/80 shadow-2xl shadow-blue-900/10 space-y-4 backdrop-blur-sm">
                {/* Header card */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-slate-800">
                      Recent Placements
                    </span>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-[#2470A8]">
                    This Month
                  </span>
                </div>

                {/* Collage items */}
                {[
                  {
                    name: 'Tanvir Ahmed',
                    role: 'Software Engineer @ BJIT',
                    avatar:
                      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
                    hike: '+220% Salary Growth',
                  },
                  {
                    name: 'Nusrat Jahan',
                    role: 'UI/UX Lead @ Brain Station 23',
                    avatar:
                      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
                    hike: '+180% Salary Hike',
                  },
                  {
                    name: 'Rahat Chowdhury',
                    role: 'DevOps @ NTT DATA',
                    avatar:
                      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
                    hike: '+250% Growth',
                  },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-100 shadow-xs transform hover:scale-[1.02] transition-transform duration-200"
                  >
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-10 h-10 rounded-full object-cover border border-slate-200"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-slate-900 truncate">
                        {item.name}
                      </p>
                      <p className="text-[11px] text-slate-500 truncate">
                        {item.role}
                      </p>
                    </div>
                    <span className="text-[10px] font-extrabold px-2 py-1 rounded-md bg-emerald-50 text-emerald-600 border border-emerald-100 shrink-0">
                      {item.hike}
                    </span>
                  </div>
                ))}
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 right-0 p-3.5 rounded-2xl bg-white border border-blue-100 shadow-xl flex items-center gap-2 animate-bounce">
                <HiSparkles size={20} className="text-amber-500" />
                <div>
                  <div className="text-xs font-extrabold text-slate-900">
                    98% Placement Rate
                  </div>
                  <div className="text-[10px] text-slate-500">
                    Within 90 days of graduation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
