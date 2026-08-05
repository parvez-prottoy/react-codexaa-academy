import { HiCheckCircle, HiAcademicCap } from "react-icons/hi2";

export default function LearningOutcomes({ outcomes = [] }) {
  if (!outcomes || outcomes.length === 0) return null;

  return (
    <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
      <div className="flex items-center gap-2">
        <HiAcademicCap size={22} className="text-[#3695d0]" />
        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
          What You Will Learn
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {outcomes.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50/70 border border-slate-100 hover:bg-blue-50/40 hover:border-blue-200/60 transition-colors duration-200"
          >
            <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
              <HiCheckCircle size={18} />
            </div>
            <span className="text-sm font-bold text-slate-800 leading-snug">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
