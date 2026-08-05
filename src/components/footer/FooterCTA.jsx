import { useState } from "react";
import { HiArrowRight, HiSparkles } from "react-icons/hi2";

/* ─── Floating decoration bubble ─── */
function Bubble({ className, style }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={style}
    />
  );
}

/* ═══════════════════════════════════════════════
   FooterCTA — premium pre-footer call-to-action
═══════════════════════════════════════════════ */
export default function FooterCTA() {
  const [primaryHover, setPrimaryHover] = useState(false);
  const [secondaryHover, setSecondaryHover] = useState(false);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-0">
      <div
        className="relative overflow-hidden rounded-3xl px-6 py-12 sm:px-12 sm:py-16 lg:px-16"
        style={{
          background:
            "linear-gradient(135deg, #5BAFE6 0%, #3695D0 40%, #2470A8 70%, #2470A8 100%)",
          boxShadow:
            "0 32px 80px rgba(37,99,235,0.35), 0 8px 32px rgba(37,99,235,0.2)",
        }}
      >
        {/* ── Decorative blurred blobs ── */}
        <Bubble
          className="w-72 h-72 animate-blob"
          style={{
            top: "-60px",
            right: "5%",
            background:
              "radial-gradient(circle, rgba(99,102,241,0.5) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <Bubble
          className="w-56 h-56 animate-blob-alt"
          style={{
            bottom: "-40px",
            left: "8%",
            background:
              "radial-gradient(circle, rgba(96,165,250,0.45) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
        <Bubble
          className="w-40 h-40"
          style={{
            top: "20%",
            left: "40%",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
            filter: "blur(30px)",
          }}
        />

        {/* ── Geometric ring accents ── */}
        <div
          aria-hidden="true"
          className="absolute top-6 left-6 w-16 h-16 rounded-full border border-white/10 animate-float-slow"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-8 right-[10%] w-10 h-10 rounded-xl border border-white/10 rotate-12 animate-float-alt"
        />

        {/* ── Dot grid overlay ── */}
        <svg
          aria-hidden="true"
          className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="cta-dots"
              x="0"
              y="0"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.2" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-dots)" />
        </svg>

        {/* ── Content ── */}
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Text block */}
          <div className="max-w-2xl">
            {/* Pill badge */}
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold mb-4
                             bg-white/15 text-white border border-white/20 backdrop-blur-sm"
            >
              <HiSparkles size={12} aria-hidden="true" />
              September 2026 Cohort — Applications Open
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-white leading-[1.15] tracking-tight">
              Ready to Start Your{" "}
              <span
                className="relative inline-block"
                style={{
                  WebkitTextStroke: "1px rgba(255,255,255,0.3)",
                  textShadow: "0 0 40px rgba(255,255,255,0.3)",
                }}
              >
                Tech Career?
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-blue-100 leading-relaxed font-normal max-w-xl">
              Join thousands of students learning industry-ready skills through
              live classes, real projects, and expert mentorship.
            </p>

            {/* Proof pills */}
            <div className="flex flex-wrap gap-3 mt-5">
              {[
                { emoji: "👩‍💻", text: "15,000+ Students" },
                { emoji: "🏆", text: "98% Satisfaction" },
                { emoji: "💼", text: "500+ Alumni Hired" },
              ].map((item) => (
                <span
                  key={item.text}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full
                             text-xs font-semibold text-white bg-white/10 border border-white/15"
                >
                  <span aria-hidden="true">{item.emoji}</span>
                  {item.text}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-3 shrink-0">
            {/* Primary */}
            <a
              href="/enroll"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5
                         rounded-full font-bold text-base transition-all duration-300
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-700"
              style={{
                background: "white",
                color: primaryHover ? "#1d4ed8" : "#1e3a6e",
                boxShadow: primaryHover
                  ? "0 16px 40px rgba(255,255,255,0.35)"
                  : "0 6px 20px rgba(255,255,255,0.2)",
                transform: primaryHover ? "translateY(-3px)" : "translateY(0)",
              }}
              onMouseEnter={() => setPrimaryHover(true)}
              onMouseLeave={() => setPrimaryHover(false)}
            >
              Enroll Now
              <HiArrowRight
                size={17}
                aria-hidden="true"
                className="transition-transform duration-300"
                style={{
                  transform: primaryHover ? "translateX(4px)" : "translateX(0)",
                }}
              />
            </a>

            {/* Secondary */}
            <a
              href="/courses"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5
                         rounded-full font-semibold text-base transition-all duration-300
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-700"
              style={{
                background: "rgba(255,255,255,0.12)",
                color: "white",
                border: "1.5px solid rgba(255,255,255,0.3)",
                backdropFilter: "blur(8px)",
                boxShadow: secondaryHover
                  ? "0 8px 24px rgba(255,255,255,0.15)"
                  : "none",
                transform: secondaryHover
                  ? "translateY(-3px)"
                  : "translateY(0)",
              }}
              onMouseEnter={() => setSecondaryHover(true)}
              onMouseLeave={() => setSecondaryHover(false)}
            >
              View Courses
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
