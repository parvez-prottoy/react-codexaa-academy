import { HiSparkles, HiArrowUpRight, HiAcademicCap, HiBriefcase, HiArrowTrendingUp } from "react-icons/hi2";
import { featuredStories } from "../../data/successStoriesData";

export default function FeaturedStory() {
  return (
    <section id="featured-stories" className="py-16 sm:py-20 lg:py-24 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-[#2470A8]">
            <HiSparkles size={16} className="text-[#3695d0]" />
            <span>Spotlight Graduates</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Featured Success Stories
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal max-w-xl mx-auto">
            From zero coding knowledge to leading engineering teams at top companies.
          </p>
        </div>

        {/* Featured Story Cards List */}
        <div className="space-y-10 lg:space-y-12">
          {featuredStories.map((story, index) => (
            <div
              key={story.id}
              className={`rounded-3xl bg-white border border-slate-200/80 shadow-xl shadow-slate-900/5 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/10 grid lg:grid-cols-12 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image & Company Overlay Column */}
              <div className="lg:col-span-5 relative h-72 lg:h-auto overflow-hidden bg-slate-100">
                <img
                  src={story.photo}
                  alt={story.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/70 via-transparent to-transparent" />

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-extrabold text-[#2470A8] shadow-md border border-white/50">
                  {story.badge}
                </div>

                {/* Company Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-white/60 shadow-lg">
                  <div className="flex items-center gap-3">
                    {story.companyLogo && (
                      <img
                        src={story.companyLogo}
                        alt={story.company}
                        className="h-7 w-auto object-contain"
                      />
                    )}
                    <div>
                      <div className="text-xs font-bold text-slate-900">
                        {story.company}
                      </div>
                      <div className="text-[10px] text-slate-500 font-medium">
                        Hiring Partner
                      </div>
                    </div>
                  </div>

                  <div className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-extrabold border border-emerald-200">
                    {story.salaryGrowth}
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Name & Position */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                      {story.name}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-[#2470A8] mt-0.5">
                      {story.position} at {story.company}
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                      <HiAcademicCap size={18} className="text-[#3695d0] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                          Course Completed
                        </span>
                        <span className="text-xs font-bold text-slate-800">
                          {story.course}
                        </span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                      <HiBriefcase size={18} className="text-indigo-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                          Previous Background
                        </span>
                        <span className="text-xs font-bold text-slate-800">
                          {story.previousBackground}
                        </span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl sm:col-span-2 bg-emerald-50/60 border border-emerald-100 flex items-start gap-2.5">
                      <HiArrowTrendingUp size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider block">
                          Current Achievement
                        </span>
                        <span className="text-xs font-bold text-slate-900">
                          {story.currentAchievement}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-2 italic">
                    "{story.summary}"
                  </p>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={story.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-[#2470A8] hover:text-white transition-all duration-200"
                  >
                    <span>Connect on LinkedIn</span>
                    <HiArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
