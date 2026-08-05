import { HiSparkles } from "react-icons/hi2";
import { academyJourney } from "../../data/aboutData";

export default function OurJourney() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-[#2470A8]">
            <HiSparkles size={16} className="text-[#3695d0]" />
            <span>Our Growth Story</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Journey So Far
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal max-w-xl mx-auto">
            How we grew from a software training workshop to an international tech academy.
          </p>
        </div>

        {/* Timeline Horizontal / Vertical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {academyJourney.map((milestone) => (
            <div
              key={milestone.year}
              className="relative p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3"
            >
              {/* Year Badge */}
              <div className="inline-block px-3.5 py-1 rounded-full bg-[#2470A8] text-white text-xs font-extrabold shadow-sm">
                {milestone.year}
              </div>

              <h3 className="text-lg font-bold text-slate-900 leading-snug">
                {milestone.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
