/* Reusable glassmorphism floating card for hero slides */
export default function FloatingCard({
  icon: Icon,
  label,
  sublabel,
  colorClass,
  bgClass,
  textClass,
  posClass,
  animClass,
}) {
  return (
    <div
      className={`
        absolute ${posClass} ${animClass}
        z-20 pointer-events-none select-none
        scale-90 sm:scale-100 origin-center
      `}
    >
      <div
        className="
          flex items-center gap-2.5 sm:gap-3
          bg-white/92 backdrop-blur-md
          border border-white/60
          rounded-2xl
          px-3 sm:px-4 py-2 sm:py-3
          shadow-[0_8px_32px_-4px_rgba(0,0,0,0.12),0_2px_8px_-2px_rgba(0,0,0,0.06)]
          min-w-36 sm:min-w-42
        "
      >
        {/* Icon container */}
        <div
          className={`shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-xl ${bgClass} flex items-center justify-center`}
        >
          <Icon className={colorClass} size={18} />
        </div>

        {/* Text */}
        <div className="min-w-0">
          <p
            className={`text-xs sm:text-sm font-bold leading-tight ${textClass} whitespace-nowrap`}
          >
            {label}
          </p>
          <p className="text-[10px] sm:text-xs text-slate-500 leading-tight mt-0.5 whitespace-nowrap">
            {sublabel}
          </p>
        </div>
      </div>
    </div>
  );
}
