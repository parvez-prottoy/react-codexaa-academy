import { useState } from "react";
import { HiSparkles, HiArrowRight, HiXMark } from "react-icons/hi2";
import { successGrid } from "../../data/successStoriesData";

export default function SuccessGrid() {
  const [selectedStory, setSelectedStory] = useState(null);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-[#2470A8]">
            <HiSparkles size={16} className="text-[#3695d0]" />
            <span>Graduate Wall of Fame</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            More Success Stories
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal max-w-xl mx-auto">
            Meet the alumni transforming industries around the world.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {successGrid.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-slate-50/70 border border-slate-200/80 p-6 flex flex-col justify-between hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Header Profile */}
                <div className="flex items-center gap-3">
                  <img
                    src={item.photo}
                    alt={item.name}
                    className="w-14 h-14 rounded-2xl object-cover border border-slate-200 shadow-xs group-hover:scale-105 transition-transform duration-300"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#2470A8]">
                      {item.jobTitle}
                    </p>
                    <p className="text-[11px] text-slate-500 font-medium">
                      {item.company}
                    </p>
                  </div>
                </div>

                {/* Course Badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-100">
                  {item.course}
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Read Full Story Button */}
              <div className="pt-4 mt-4 border-t border-slate-100/80 flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                  {item.salaryGrowth} Hike
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedStory(item)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2470A8] hover:text-blue-800 transition-colors cursor-pointer"
                >
                  <span>Read Full Story</span>
                  <HiArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Story Detail Modal */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5">
            <button
              type="button"
              onClick={() => setSelectedStory(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-slate-200 transition-colors"
            >
              <HiXMark size={20} />
            </button>

            <div className="flex items-center gap-4">
              <img
                src={selectedStory.photo}
                alt={selectedStory.name}
                className="w-16 h-16 rounded-2xl object-cover border border-slate-200 shadow-sm"
              />
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {selectedStory.name}
                </h3>
                <p className="text-sm font-semibold text-[#2470A8]">
                  {selectedStory.jobTitle} @ {selectedStory.company}
                </p>
                <p className="text-xs text-slate-500">{selectedStory.course}</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 text-sm text-slate-700 leading-relaxed italic">
              "{selectedStory.quote}"
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Before enrolling at Codexaa Academy, {selectedStory.name} wanted
              to transition into professional tech roles. Through rigorous
              hands-on projects and continuous mentorship, {selectedStory.name}{" "}
              achieved a {selectedStory.salaryGrowth} salary increase upon
              joining {selectedStory.company}.
            </p>

            <button
              type="button"
              onClick={() => setSelectedStory(null)}
              className="w-full py-3 rounded-xl bg-[#2470A8] text-white text-xs font-bold hover:bg-blue-800 transition-colors"
            >
              Close Story
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
