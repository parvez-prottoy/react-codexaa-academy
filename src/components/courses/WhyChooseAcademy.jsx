import {
  HiVideoCamera,
  HiCodeBracketSquare,
  HiBriefcase,
  HiAcademicCap,
  HiCheck,
} from "react-icons/hi2";

export default function WhyChooseAcademy() {
  const features = [
    {
      id: "live-classes",
      title: "Live Classes",
      description:
        "Interactive live coding sessions with instant Q&A, backed by HD recordings and dedicated Discord support.",
      icon: HiVideoCamera,
      badgeColor: "bg-blue-50 text-[#2470A8] border-blue-200/80",
    },
    {
      id: "real-projects",
      title: "Real Projects",
      description:
        "Build 15+ production-ready web applications from scratch following enterprise Git workflows and code reviews.",
      icon: HiCodeBracketSquare,
      badgeColor: "bg-indigo-50 text-indigo-600 border-indigo-200/80",
    },
    {
      id: "career-support",
      title: "Career Support",
      description:
        "1-on-1 resume reviews, technical mock interviews, and direct recruitment referrals to 200+ partner companies.",
      icon: HiBriefcase,
      badgeColor: "bg-violet-50 text-violet-600 border-violet-200/80",
    },
    {
      id: "industry-certificate",
      title: "Industry Certificate",
      description:
        "Earn a shareable, digitally verifiable certificate recognized by top tech employers and hiring managers.",
      icon: HiAcademicCap,
      badgeColor: "bg-emerald-50 text-emerald-600 border-emerald-200/80",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-[#2470A8] text-xs font-bold border border-blue-200/60">
            <span>🚀</span>
            <span>Why Choose Codexaa Academy</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Designed For Modern Tech Careers
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Everything you need to master practical development skills and launch your career in software engineering.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.id}
                className="group relative p-6 sm:p-7 rounded-3xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-xs ${feat.badgeColor} group-hover:scale-110 transition-transform duration-200`}
                  >
                    <Icon size={24} />
                  </div>

                  {/* Title */}
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <HiCheck size={14} className="stroke-[3]" />
                    </div>
                    <h3 className="text-lg font-extrabold text-slate-900">
                      {feat.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {feat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
