import { HiCheckBadge } from "react-icons/hi2";

export default function VerifiedBadge({ text = "Verified Graduate" }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[11px] font-extrabold border border-emerald-200/80 shadow-2xs">
      <HiCheckBadge size={14} className="text-emerald-500 shrink-0" />
      <span>{text}</span>
    </span>
  );
}
