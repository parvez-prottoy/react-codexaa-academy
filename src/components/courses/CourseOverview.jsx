import { HiAcademicCap, HiCheckCircle, HiSparkles } from "react-icons/hi2";

const DEFAULT_OUTCOMES = [
  "Frontend Development",
  "Backend Development",
  "Database Management",
  "Security and Deployment",
];

export default function CourseOverview({ course }) {
  if (!course) return null;

  const outcomes =
    course.learningOutcomes && course.learningOutcomes.length > 0
      ? course.learningOutcomes
      : DEFAULT_OUTCOMES;

  return (
    <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 lg:p-10 shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        {/* LEFT SIDE — 8 COLUMNS: Course Overview & Highlights */}
        <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <HiSparkles size={18} className="text-[#3695d0]" />
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Course Overview
              </h2>
            </div>

            <div className="space-y-4 text-slate-700 leading-relaxed text-base font-normal">
              {(course.fullDescription || course.shortDescription || "")
                .split("\n\n")
                .map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
            </div>
          </div>

          {/* Highlights Box */}
          <div className="p-5 sm:p-6 rounded-2xl bg-blue-50/60 border border-blue-100/80 space-y-3">
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider">
              Why This Program Stands Out
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <HiCheckCircle size={18} className="text-[#3695d0] shrink-0" />
                <span>Structured 24-Week Practical Roadmap</span>
              </div>
              <div className="flex items-center gap-2">
                <HiCheckCircle size={18} className="text-[#3695d0] shrink-0" />
                <span>15+ Real-world Full-Stack Applications</span>
              </div>
              <div className="flex items-center gap-2">
                <HiCheckCircle size={18} className="text-[#3695d0] shrink-0" />
                <span>Direct Code Reviews from Senior Engineers</span>
              </div>
              <div className="flex items-center gap-2">
                <HiCheckCircle size={18} className="text-[#3695d0] shrink-0" />
                <span>Guaranteed Job Referral Pipeline</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — 4 COLUMNS: What You Will Learn */}
        <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-slate-200/80 pt-6 lg:pt-0 lg:pl-8 xl:pl-10 flex flex-col space-y-5">
          <div className="flex items-center gap-2">
            <HiAcademicCap size={22} className="text-[#3695d0]" />
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              What You Will Learn
            </h2>
          </div>

          <div className="flex flex-col gap-2.5">
            {outcomes.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 sm:p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100 hover:bg-blue-50/40 hover:border-blue-200/60 transition-colors duration-200"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <HiCheckCircle size={16} />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
