import useInView from "../../hooks/useInView";
import ContactForm from "./ContactForm";
import ContactInfoCard from "./ContactInfoCard";
import MapCard from "./MapCard";

/* ─────────────────────────────────────────
   Background — layered gradient + blobs + dots + geometry
───────────────────────────────────────── */
function SectionBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* Base soft blue gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(150deg, #f0f7ff 0%, #eaf3fb 30%, #f0f7ff 60%, #f8fafc 100%)",
        }}
      />

      {/* Radial glow — top-left */}
      <div
        className="absolute -top-32 -left-32 w-150 h-150 rounded-full opacity-40 animate-blob"
        // style={{
        //   background:
        //     "bg-linear-to-r from-[#5BAFE6] via-[#3695d0] to-[#2470A8]",
        //   filter: "blur(90px)",
        // }}
      />

      {/* Radial glow — bottom-right */}
      <div
        className="absolute -bottom-40 -right-40 w-175 h-175 rounded-full opacity-30 animate-blob-alt"
        // style={{
        //   background: "linear-gradient(90deg, #2563eb 0%, #4f46e5 100%)",
        //   filter: "blur(110px)",
        // }}
      />

      {/* Subtle top-center glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-60 opacity-20"
        style={{
          background: "radial-gradient(ellipse, #a5b4fc 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Dot grid */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.045]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="contact-dots"
            x="0"
            y="0"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.5" fill="#2563eb" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#contact-dots)" />
      </svg>

      {/* Geometric floating shapes */}
      <div className="absolute top-20 right-[15%] w-14 h-14 border-2 border-blue-400/20 rounded-2xl rotate-12 animate-float-slow" />
      <div className="absolute bottom-32 left-[10%] w-16 h-16 border border-indigo-400/20 rounded-full animate-float-alt" />
      <div className="absolute top-1/2 right-[8%] w-10 h-10 border border-purple-300/20 rounded-xl -rotate-6 animate-float" />

      {/* Cross / plus decoration */}
      <div
        className="absolute top-24 left-[20%] opacity-10"
        style={{ transform: "rotate(15deg)" }}
        aria-hidden="true"
      >
        <div className="w-6 h-0.5 bg-[#2563eb] mx-auto" />
        <div className="w-0.5 h-6 bg-[#2563eb] mx-auto -mt-3" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   SectionHeader
───────────────────────────────────────── */
function SectionHeader({ inView }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
      {/* Badge */}
      <div
        className="transition-all duration-700"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <span
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm
                     font-semibold mb-4 bg-blue-50 text-[#3695d0] border border-blue-200/80 shadow-xs"
        >
          {/* <span aria-hidden="true">📩</span> */}
          <span>Contact Us</span>
        </span>
      </div>

      {/* Main heading */}
      <div
        className="transition-all duration-700"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(20px)",
          transitionDelay: "80ms",
        }}
      >
        <h2
          id="contact-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]"
        >
          Let's Build{" "}
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#5BAFE6] via-[#3695d0] to-[#2470A8]">
              Your Future
            </span>
            {/* Underline accent */}
          </span>{" "}
          Together
        </h2>
      </div>

      {/* Description */}
      <div
        className="transition-all duration-700"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(20px)",
          transitionDelay: "160ms",
        }}
      >
        <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
          Whether you have questions about our courses, career guidance, or
          enrollment, our team is here to help you every step of the way.
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   ContactSection — Main export
═══════════════════════════════════════════════════ */
export default function ContactSection() {
  const [headerRef, headerInView] = useInView(0.15);
  const [leftRef, leftInView] = useInView(0.1);
  const [rightRef, rightInView] = useInView(0.1);

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-28"
    >
      <SectionBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <div ref={headerRef}>
          <SectionHeader inView={headerInView} />
        </div>

        {/* ── Two-column grid ── */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 xl:gap-12 items-start">
          {/* ── LEFT — Contact Form ── */}
          <div
            ref={leftRef}
            className="transition-all duration-700"
            style={{
              opacity: leftInView ? 1 : 0,
              transform: leftInView ? "translateY(0)" : "translateY(32px)",
            }}
          >
            <ContactForm />
          </div>

          {/* ── RIGHT — Info stack ── */}
          <div
            ref={rightRef}
            className="flex flex-col gap-5 transition-all duration-700"
            style={{
              opacity: rightInView ? 1 : 0,
              transform: rightInView ? "translateY(0)" : "translateY(32px)",
              transitionDelay: "120ms",
            }}
          >
            {/* Contact Info Card */}
            <ContactInfoCard />

            {/* Google Map */}
            <MapCard />
          </div>
        </div>
      </div>
    </section>
  );
}
