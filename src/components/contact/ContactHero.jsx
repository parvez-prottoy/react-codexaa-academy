import {
  HiChatBubbleLeftRight,
  HiCheckCircle,
  HiClock,
  HiEnvelope,
  HiPhone,
  HiSparkles,
} from 'react-icons/hi2';

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white via-blue-50/40 to-slate-50 border-b border-slate-100 py-14 sm:py-20 lg:py-24">
      {/* Background decorations */}
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
          {/* Left Column — Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/90 border border-blue-200/80 text-xs sm:text-sm font-semibold text-[#2470A8] shadow-xs">
              <span className="text-base">📞</span>
              <span>Contact Us</span>
            </div>

            {/* Large Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Let's Talk About{' '}
              <span className="bg-linear-to-r from-[#2470A8] via-[#3695d0] to-[#5BAFE6] bg-clip-text text-transparent">
                Your Future
              </span>
            </h1>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
              Have questions about our courses, admissions, career support, or
              training? Our team is here to help you every step of the way.
            </p>

            {/* Quick trust points */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <HiCheckCircle size={18} className="text-[#3695d0]" />
                <span>Fast Response Time</span>
              </div>
              <div className="flex items-center gap-2">
                <HiCheckCircle size={18} className="text-[#3695d0]" />
                <span>1-on-1 Counseling</span>
              </div>
              <div className="flex items-center gap-2">
                <HiCheckCircle size={18} className="text-[#3695d0]" />
                <span>Campus Visits Welcome</span>
              </div>
            </div>
          </div>

          {/* Right Side — Premium Communication Graphic */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Outer decorative card container */}
              <div className="relative rounded-3xl bg-linear-to-br from-white via-blue-50/60 to-white p-6 sm:p-8 border border-blue-100/80 shadow-xl shadow-blue-900/5 space-y-5 backdrop-blur-sm">
                {/* Header status bar */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500 absolute" />
                    <span className="text-xs font-bold text-slate-800 ml-4">
                      Admissions Support
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
                    Online Now
                  </span>
                </div>

                {/* Message Bubble 1 */}
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-100 shadow-xs transform hover:scale-[1.02] transition-transform duration-200">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#2470A8] flex items-center justify-center shrink-0">
                    <HiChatBubbleLeftRight size={20} />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-xs font-bold text-slate-800">
                      Need course recommendations?
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Our advisors are ready to help you pick the right track.
                    </p>
                  </div>
                </div>

                {/* Message Bubble 2 */}
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-100 shadow-xs transform hover:scale-[1.02] transition-transform duration-200">
                  <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <HiClock size={20} />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-xs font-bold text-slate-800">
                      Average Response Time
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Under 2 hours during working hours.
                    </p>
                  </div>
                </div>

                {/* Quick contact icons row */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-700">
                    <HiPhone size={16} className="text-[#3695d0]" />
                    <span>+880 1901-516270</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-700 truncate">
                    <HiEnvelope size={16} className="text-[#3695d0] shrink-0" />
                    <span className="truncate">info@codexaa.com</span>
                  </div>
                </div>
              </div>

              {/* Floating Sparkles Badge */}
              <div className="absolute -top-4 right-0 p-3 rounded-2xl bg-white border border-blue-100 shadow-lg flex items-center gap-2 animate-bounce">
                <HiSparkles size={20} className="text-amber-500" />
                <span className="text-xs font-extrabold text-slate-800">
                  Expert Counseling
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
