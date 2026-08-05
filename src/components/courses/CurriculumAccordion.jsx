import { useState } from "react";
import { HiChevronDown, HiBookOpen, HiClock, HiCheck } from "react-icons/hi2";

export default function CurriculumAccordion({ curriculum = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleModule = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  if (!curriculum || curriculum.length === 0) return null;

  return (
    <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <HiBookOpen size={22} className="text-[#3695d0]" />
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Course Curriculum
          </h2>
        </div>
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-[#2470A8] border border-blue-200/80 self-start sm:self-auto">
          {curriculum.length} Modules • Hands-on Project Focused
        </span>
      </div>

      <div className="space-y-3">
        {curriculum.map((module, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={module.id || idx}
              className="rounded-2xl border border-slate-200/80 overflow-hidden transition-all duration-200"
            >
              {/* Module Header Button */}
              <button
                type="button"
                onClick={() => toggleModule(idx)}
                className={`w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left transition-colors cursor-pointer select-none ${
                  isOpen ? "bg-blue-50/60" : "bg-white hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-extrabold shrink-0 ${
                      isOpen
                        ? "bg-[#2470A8] text-white"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {module.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mt-0.5">
                      <HiClock size={13} className="text-[#3695d0]" />
                      <span>{module.duration}</span>
                      <span>•</span>
                      <span>{module.topics?.length || 0} Lessons</span>
                    </div>
                  </div>
                </div>

                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-slate-400 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-[#2470A8] bg-blue-100/60" : ""
                  }`}
                >
                  <HiChevronDown size={18} />
                </div>
              </button>

              {/* Module Topics List */}
              {isOpen && module.topics && (
                <div className="p-4 sm:p-5 bg-white border-t border-slate-100 space-y-2.5 animate-fadeIn">
                  {module.topics.map((topic, topicIdx) => (
                    <div
                      key={topicIdx}
                      className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-50/60 text-xs sm:text-sm text-slate-700 font-medium"
                    >
                      <HiCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
