import { useState } from "react";

/**
 * TechnologyCard — floating glass card for each technology
 */
export default function TechnologyCard({ tech, isCompact = false }) {
  const [hovered, setHovered] = useState(false);
  const { name, abbr, color, bg, borderColor } = tech;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative bg-white/95 backdrop-blur-md rounded-2xl border transition-all duration-300 ease-out select-none cursor-pointer"
      style={{
        padding: isCompact ? "8px 12px" : "10px 14px",
        borderColor: hovered ? color : borderColor,
        boxShadow: hovered
          ? `0 12px 28px -6px ${color}33, 0 4px 10px -2px rgba(0,0,0,0.06)`
          : "0 2px 10px -2px rgba(0,0,0,0.05)",
        transform: hovered ? "scale(1.08) translateY(-2px)" : "scale(1) translateY(0)",
      }}
    >
      {/* Glow effect */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(ellipse at center, ${color}15 0%, transparent 70%)`,
          opacity: hovered ? 1 : 0,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex items-center gap-2.5">
        {/* Icon container */}
        <div
          className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center text-sm font-bold shadow-xs transition-transform duration-300 group-hover:rotate-6"
          style={{ backgroundColor: bg, color: color }}
        >
          {abbr}
        </div>

        {/* Tech name */}
        <span className="text-xs sm:text-sm font-bold text-slate-800 whitespace-nowrap group-hover:text-slate-900">
          {name}
        </span>
      </div>
    </div>
  );
}
