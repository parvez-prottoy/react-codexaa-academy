import { useState } from "react";
import { contactInfoItems } from "../../data/contactData";

/* ─── Single info row ─── */
function InfoRow({ item }) {
  const [hovered, setHovered] = useState(false);
  const { icon: Icon, label, value, href, color, bgColor, borderColor } = item;

  const inner = (
    <div
      className="flex items-start gap-3.5 p-3.5 rounded-2xl transition-all duration-300 cursor-pointer"
      style={{
        background: hovered ? bgColor : "transparent",
        border: `1.5px solid ${hovered ? borderColor : "transparent"}`,
        transform: hovered ? "translateX(6px)" : "translateX(0)",
        boxShadow: hovered ? `0 4px 16px ${color}22` : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon bubble */}
      <div
        className="shrink-0 flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300"
        style={{
          background: bgColor,
          border: `1.5px solid ${borderColor}`,
          transform: hovered
            ? "rotate(8deg) scale(1.08)"
            : "rotate(0deg) scale(1)",
          boxShadow: hovered ? `0 4px 12px ${color}33` : "none",
        }}
        aria-hidden="true"
      >
        <Icon size={17} style={{ color }} />
      </div>

      {/* Text */}
      <div className="min-w-0">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
          {label}
        </p>
        <p
          className="text-sm font-semibold leading-snug transition-colors duration-200"
          style={{ color: hovered ? color : "#1e293b" }}
        >
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        aria-label={`${label}: ${value}`}
        className="block no-underline"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {inner}
      </a>
    );
  }
  return inner;
}

/* ════════════════════════════════════
   ContactInfoCard
════════════════════════════════════ */
export default function ContactInfoCard() {
  return (
    <div
      className="rounded-3xl overflow-hidden transition-all duration-300"
      style={{
        background: "rgba(255,255,255,0.9)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1.5px solid rgba(255,255,255,0.75)",
        boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
      }}
    >
      {/* Header stripe */}
      <div
        className="px-6 pt-6 pb-5"
        style={{
          background:
            "linear-gradient(135deg, #5BAFE6 0%, #3695d0 60%, #2470A8 100%)",
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
            style={{
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
            }}
            aria-hidden="true"
          >
            🏢
          </div>
          <div>
            <h3 className="text-lg font-bold text-white leading-tight">
              Contact Information
            </h3>
            <p className="text-xs text-blue-200 mt-0.5">
              Reach us through any channel
            </p>
          </div>
        </div>
      </div>

      {/* Info rows */}
      <div className="px-4 py-4 flex flex-col gap-0.5">
        {contactInfoItems.map((item) => (
          <InfoRow key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
