import {
  HiAcademicCap,
  HiClock,
  HiBriefcase,
  HiCheckBadge,
  HiUserGroup,
  HiDocumentText,
} from "react-icons/hi2";

export default function CourseFeatures({ features = [] }) {
  const defaultFeatures = [
    {
      id: "f-1",
      title: "Verified Certificate",
      desc: "Shareable digital certificate upon project completion.",
      icon: HiAcademicCap,
      color: "text-blue-600 bg-blue-50 border-blue-200/80",
    },
    {
      id: "f-2",
      title: "Lifetime Access",
      desc: "Unlimited access to recorded videos, slides & repos.",
      icon: HiClock,
      color: "text-indigo-600 bg-indigo-50 border-indigo-200/80",
    },
    {
      id: "f-3",
      title: "15+ Industry Projects",
      desc: "Build real-world apps from scratch to production.",
      icon: HiBriefcase,
      color: "text-violet-600 bg-violet-50 border-violet-200/80",
    },
    {
      id: "f-4",
      title: "Weekly Assignments",
      desc: "Receive 1-on-1 feedback on your pull requests.",
      icon: HiDocumentText,
      color: "text-amber-600 bg-amber-50 border-amber-200/80",
    },
    {
      id: "f-5",
      title: "Career & Placement",
      desc: "Resume reviews, mock interviews & hiring referrals.",
      icon: HiCheckBadge,
      color: "text-emerald-600 bg-emerald-50 border-emerald-200/80",
    },
    {
      id: "f-6",
      title: "Alumni Community",
      desc: "Connect with 1,200+ working software engineers.",
      icon: HiUserGroup,
      color: "text-sky-600 bg-sky-50 border-sky-200/80",
    },
  ];

  const displayList = features.length > 0 ? features : defaultFeatures;

  return (
    <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
      <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
        Course Features & Benefits
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayList.map((item, idx) => {
          const itemIcon = item.icon || defaultFeatures[idx % defaultFeatures.length].icon;
          const itemColor = item.color || defaultFeatures[idx % defaultFeatures.length].color;
          const Icon = itemIcon;

          return (
            <div
              key={item.id || idx}
              className="p-5 rounded-2xl bg-slate-50/70 border border-slate-100 space-y-2 hover:bg-white hover:shadow-md transition-all duration-200"
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center border ${itemColor}`}
              >
                <Icon size={20} />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                {item.desc || item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
