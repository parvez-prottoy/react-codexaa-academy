import { Link } from "react-router-dom";
import { HiArrowRight, HiSparkles, HiArrowDownTray } from "react-icons/hi2";

export default function CTASection({ title = "Ready To Become A Professional Developer?", buttonText = "Enroll Now" }) {
  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-3xl px-6 py-12 sm:px-12 sm:py-16 lg:px-16"
          style={{
            background:
              "linear-gradient(135deg, #5BAFE6 0%, #3695D0 40%, #2470A8 70%, #2470A8 100%)",
            boxShadow:
              "0 32px 80px rgba(37,99,235,0.35), 0 8px 32px rgba(37,99,235,0.2)",
          }}
        >
          {/* Decorative blurred blobs */}
          <div
            className="absolute w-72 h-72 rounded-full pointer-events-none animate-blob -top-15 right-[5%]"
            style={{
              background:
                "radial-gradient(circle, rgba(99,102,241,0.5) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          <div
            className="absolute w-56 h-56 rounded-full pointer-events-none animate-blob-alt -bottom-10 left-[8%]"
            style={{
              background:
                "radial-gradient(circle, rgba(96,165,250,0.45) 0%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/15 text-white border border-white/20 backdrop-blur-sm">
                <HiSparkles size={14} />
                <span>Start Learning Today</span>
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-white leading-[1.15] tracking-tight">
                {title}
              </h2>

              <p className="text-base sm:text-lg text-blue-100 leading-relaxed font-normal max-w-xl">
                Start learning practical skills from experienced mentors and become job-ready.
              </p>

              {/* Proof pills */}
              <div className="flex flex-wrap gap-3 pt-1">
                {[
                  { emoji: "👩‍💻", text: "Live Interactive Batches" },
                  { emoji: "🏆", text: "Verified Certificates" },
                  { emoji: "💼", text: "Job Referral Support" },
                ].map((item) => (
                  <span
                    key={item.text}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-white/10 border border-white/15"
                  >
                    <span>{item.emoji}</span>
                    <span>{item.text}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-base bg-white text-[#1e3a6e] shadow-lg shadow-white/20 hover:shadow-white/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>{buttonText}</span>
                <HiArrowRight
                  size={17}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </Link>

              <a
                href="#download-syllabus"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Course Syllabus Downloaded Successfully!");
                }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-base bg-white/10 text-white border border-white/30 backdrop-blur-sm hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                <HiArrowDownTray size={17} />
                <span>Download Course Guide</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
