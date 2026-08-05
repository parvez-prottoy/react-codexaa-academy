import { useState } from "react";
import { HiChevronDown, HiQuestionMarkCircle } from "react-icons/hi2";

export default function FAQSection({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
      <div className="flex items-center gap-2">
        <HiQuestionMarkCircle size={22} className="text-[#3695d0]" />
        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-3">
        {faqs.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={item.id || idx}
              className="rounded-2xl border border-slate-200/80 overflow-hidden transition-all duration-200"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(idx)}
                className={`w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left transition-colors cursor-pointer select-none ${
                  isOpen ? "bg-blue-50/60" : "bg-white hover:bg-slate-50"
                }`}
              >
                <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  {item.q || item.question}
                </span>
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-slate-400 shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-[#2470A8] bg-blue-100/60" : ""
                  }`}
                >
                  <HiChevronDown size={18} />
                </div>
              </button>

              {isOpen && (
                <div className="p-4 sm:p-5 bg-white border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal animate-fadeIn">
                  {item.a || item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
