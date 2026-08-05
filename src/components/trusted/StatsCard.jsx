import { useEffect, useState } from "react";
import useInView from "../../hooks/useInView";

/**
 * StatsCard — animated stat with count-up number, icon, label, and description.
 */
export default function StatsCard({ stat, delay = 0 }) {
  const {
    Icon,
    rawValue,
    displayValue,
    label,
    subtext,
    iconColor,
    iconBg,
    borderColor,
  } = stat;

  const [ref, inView] = useInView(0.2);
  const [count, setCount] = useState(0);
  const [hovered, setHovered] = useState(false);

  /* Count-up animation when card enters viewport */
  useEffect(() => {
    if (!inView) return;

    const duration = 1600;
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      /* Cubic ease-out */
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * rawValue));
      if (progress < 1) requestAnimationFrame(tick);
    };

    /* Delay the start so staggered cards feel natural */
    const timer = setTimeout(() => requestAnimationFrame(tick), delay);
    return () => clearTimeout(timer);
  }, [inView, rawValue, delay]);

  /* Build display string: prepend/append non-numeric from displayValue */
  const suffix = displayValue.replace(/[0-9]/g, ""); // "+", "%" etc.
  const formattedCount = `${count}${suffix}`;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative bg-white rounded-2xl p-6 flex items-start gap-5
                 border transition-all duration-300 ease-out cursor-default"
      style={{
        borderColor: hovered ? borderColor : "#f1f5f9",
        boxShadow: hovered
          ? `0 16px 40px -8px ${iconColor}22, 0 4px 16px -4px rgba(0,0,0,0.06)`
          : "0 2px 12px -2px rgba(0,0,0,0.06)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      {/* Glow layer */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(ellipse at top left, ${iconColor}0a 0%, transparent 60%)`,
          opacity: hovered ? 1 : 0,
        }}
        aria-hidden="true"
      />

      {/* Icon */}
      <div
        className="relative z-10 shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center
                   transition-all duration-300"
        style={{
          backgroundColor: iconBg,
          transform: hovered
            ? "scale(1.1) rotate(-3deg)"
            : "scale(1) rotate(0deg)",
        }}
      >
        <Icon size={26} style={{ color: iconColor }} />
      </div>

      {/* Text */}
      <div className="relative z-10 min-w-0">
        <p
          className="text-3xl font-extrabold tabular-nums leading-none transition-colors duration-200"
          style={{ color: hovered ? iconColor : "#0f172a" }}
          aria-label={`${displayValue} ${label}`}
        >
          {inView ? formattedCount : "0"}
        </p>
        <p className="text-sm font-bold text-slate-700 mt-1">{label}</p>
        <p className="text-xs text-slate-400 mt-0.5 leading-snug">{subtext}</p>
      </div>

      {/* Colored left accent bar */}
      <div
        className="absolute left-0 top-4 bottom-4 w-1 rounded-r-full transition-all duration-300"
        style={{
          backgroundColor: hovered ? iconColor : "transparent",
          opacity: hovered ? 1 : 0,
        }}
        aria-hidden="true"
      />
    </div>
  );
}
