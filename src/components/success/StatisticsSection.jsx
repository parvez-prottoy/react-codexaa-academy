import { successStats } from "../../data/successStoriesData";

export default function StatisticsSection() {
  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {successStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className={`p-6 rounded-3xl bg-white border ${stat.border} shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group`}
              >
                {/* Top icon bubble */}
                <div
                  className={`w-12 h-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={26} />
                </div>

                {/* Counter value */}
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {stat.displayValue}
                </div>

                {/* Label */}
                <div className="text-base font-bold text-slate-800 mt-1">
                  {stat.label}
                </div>

                {/* Subtext */}
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
