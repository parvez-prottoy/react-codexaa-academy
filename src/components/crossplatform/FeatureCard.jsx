import { useState } from "react";

/**
 * FeatureCard — premium feature highlight card with hover lift & glow
 */
export default function FeatureCard({ feature }) {
  const [hovered, setHovered] = useState(false);
  const { icon, title, description, color, bg, borderColor } = feature;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative bg-white rounded-2xl p-4 sm:p-5 border transition-all duration-300 ease-out cursor-default"
      style={{
        borderColor: hovered ? borderColor : "rgba(226,232,240,0.8)",
        boxShadow: hovered
          ? `0 16px 36px -8px ${color}20, 0 4px 12px -2px rgba(0,0,0,0.05)`
          : "0 2px 12px -2px rgba(0,0,0,0.04)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      {/* Radial glow background */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(ellipse at top left, ${color}0d 0%, transparent 70%)`,
          opacity: hovered ? 1 : 0,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex items-start gap-3.5">
        {/* Icon */}
        <div
          className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-xl sm:text-2xl shadow-xs transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: bg }}
        >
          {icon}
        </div>

        {/* Text */}
        <div className="min-w-0">
          <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug group-hover:text-[#3695d0] transition-colors duration-200">
            {title}
          </h4>
          <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
