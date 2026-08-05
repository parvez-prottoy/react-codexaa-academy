import { aboutStats } from "../../data/aboutData";
import { HiSparkles } from "react-icons/hi2";

export default function AchievementSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-[#2470A8]">
            <HiSparkles size={16} className="text-[#3695d0]" />
            <span>Impact & Numbers</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Achievements in Numbers
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal max-w-xl mx-auto">
            Measurable results driving career transformation across thousands of students.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className={`p-6 sm:p-8 rounded-3xl bg-white border ${stat.border} shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={26} />
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {stat.value}
                </div>

                <div className="text-base font-bold text-slate-800 mt-1">
                  {stat.label}
                </div>

                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
