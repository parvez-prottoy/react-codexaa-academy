import { Link } from "react-router-dom";
import {
  HiCodeBracket,
  HiGlobeAlt,
  HiCpuChip,
  HiSwatch,
  HiCloud,
  HiServer,
} from "react-icons/hi2";

const iconMap = {
  "web-development": { icon: HiGlobeAlt, color: "text-blue-600", bg: "bg-blue-50" },
  "frontend-react": { icon: HiCodeBracket, color: "text-indigo-600", bg: "bg-indigo-50" },
  "backend-nodejs": { icon: HiServer, color: "text-violet-600", bg: "bg-violet-50" },
  "ui-ux-design": { icon: HiSwatch, color: "text-pink-600", bg: "bg-pink-50" },
  "ai-machine-learning": { icon: HiCpuChip, color: "text-[#3695d0]", bg: "bg-sky-50" },
  "devops-essentials": { icon: HiCloud, color: "text-emerald-600", bg: "bg-emerald-50" },
};

export default function CourseMenuItem({ course, onClick, compact = false }) {
  if (!course) return null;

  const targetPath = course.slug ? `/course/${course.slug}` : `/courses`;
  const meta = iconMap[course.id] || {
    icon: HiCodeBracket,
    color: "text-blue-600",
    bg: "bg-blue-50",
  };
  const Icon = course.icon || meta.icon;
  const iconColor = course.color || meta.color;
  const iconBg = course.bg || meta.bg;

  return (
    <Link
      to={targetPath}
      onClick={onClick}
      role="menuitem"
      className="
        group flex items-center gap-3 rounded-xl p-2.5 sm:p-3
        transition-all duration-200
        hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
      "
    >
      <div
        className={`
          shrink-0 w-9 h-9 rounded-lg ${iconBg}
          flex items-center justify-center
          group-hover:scale-110 transition-transform duration-200
        `}
      >
        <Icon className={iconColor} size={18} />
      </div>

      <div className="min-w-0">
        <p className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#2470A8] transition-colors duration-200 leading-tight truncate">
          {course.title || course.label}
        </p>
        {!compact && (course.category || course.shortDescription) && (
          <p className="text-[11px] text-slate-500 mt-0.5 leading-snug truncate">
            {course.category} • {course.duration || "Self-Paced"}
          </p>
        )}
      </div>
    </Link>
  );
}