import { HiCheckBadge } from "react-icons/hi2";

export default function VerifiedBadge({ text = "Verified Graduate", size = "sm" }) {
  const isSmall = size === "sm";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-semibold border backdrop-blur-md transition-all duration-300 ${
        isSmall
          ? "px-2.5 py-1 text-xs"
          : "px-3 py-1.5 text-xs sm:text-sm"
      } bg-emerald-500/10 text-emerald-700 border-emerald-300/60 shadow-xs shadow-emerald-500/10 hover:bg-emerald-500/15`}
    >
      <HiCheckBadge className="text-emerald-600 shrink-0 text-sm sm:text-base" />
      <span>{text}</span>
    </span>
  );
}
