import { useState } from "react";
import { HiCheck, HiClock, HiArrowTrendingUp } from "react-icons/hi2";

/**
 * CareerMilestone — individual career level milestone card
 */
export default function CareerMilestone({ milestone, isActive, onSelect }) {
  const [hovered, setHovered] = useState(false);
  const {
    badgeLabel,
    title,
    description,
    skills,
    duration,
    salary,
    avatarBg,
    avatarText,
    color,
    bg,
    borderColor,
    completed,
  } = milestone;

  const isHighlighted = isActive || hovered;

  return (
    <article
      onClick={onSelect}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative bg-white rounded-2xl p-5 sm:p-6 border cursor-pointer select-none
                 transition-all duration-300 ease-out"
      style={{
        borderColor: isHighlighted ? color : "rgba(226,232,240,0.8)",
        boxShadow: isHighlighted
          ? `0 18px 40px -8px ${color}28, 0 4px 14px -2px rgba(0,0,0,0.06)`
          : "0 2px 12px -2px rgba(0,0,0,0.04)",
        transform: isHighlighted ? "translateY(-4px) scale(1.01)" : "translateY(0) scale(1)",
      }}
    >
      {/* Radial Glow */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(ellipse at top left, ${color}0e 0%, transparent 70%)`,
          opacity: isHighlighted ? 1 : 0,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex items-start gap-4">
        {/* Large Circular Avatar Container */}
        <div className="relative shrink-0">
          <div
            className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-xl sm:text-2xl text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${avatarBg}`}
          >
            {avatarText}
          </div>

          {/* Completed Checkmark Indicator */}
          {completed && (
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 text-white border-2 border-white flex items-center justify-center shadow-xs">
              <HiCheck size={11} strokeWidth={3} />
            </div>
          )}
        </div>

        {/* Milestone Info */}
        <div className="flex-1 min-w-0">
          {/* Header Row: Level Badge + Salary Indicator */}
          <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
            <span
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold transition-colors duration-200"
              style={{
                backgroundColor: bg,
                color: color,
                border: `1px solid ${borderColor}`,
              }}
            >
              {badgeLabel}
            </span>

            {/* Salary Growth Indicator */}
            <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
              <HiArrowTrendingUp size={12} />
              {salary}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug group-hover:text-[#3695d0] transition-colors duration-200">
            {title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
            {description}
          </p>

          {/* Skills Badges */}
          <div className="flex flex-wrap items-center gap-1.5 mt-3">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded-md text-[10px] sm:text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200/60"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Duration Badge on Top Right */}
        <div className="shrink-0 hidden sm:flex items-center gap-1 text-xs font-semibold text-slate-400 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-100">
          <HiClock size={12} />
          {duration}
        </div>
      </div>
    </article>
  );
}
