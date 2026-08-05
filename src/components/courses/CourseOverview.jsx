import { HiCheckCircle, HiSparkles } from "react-icons/hi2";

export default function CourseOverview({ course }) {
  if (!course) return null;

  return (
    <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
      <div className="flex items-center gap-2">
        <HiSparkles size={18} className="text-[#3695d0]" />
        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
          Course Overview
        </h2>
      </div>

      <div className="space-y-4 text-slate-700 leading-relaxed text-base font-normal">
        {course.fullDescription
          .split("\n\n")
          .map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
      </div>

      {/* Highlights Box */}
      <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-100/80 space-y-3">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
          Why This Program Stands Out
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 font-medium">
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
  );
}
