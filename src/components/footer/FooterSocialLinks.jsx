import { useState } from "react";
import { footerSocialLinks } from "../../data/footerData";

/* ─── Single circular social button ─── */
function SocialButton({ link }) {
  const [hovered, setHovered] = useState(false);
  const { icon: Icon, label, href, gradient, hoverShadow } = link;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Follow us on ${label}`}
      className="relative flex items-center justify-center w-10 h-10 rounded-full
                 transition-all duration-300
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3695d0]"
      style={{
        background: hovered ? undefined : "#f1f5f9",
        border: hovered ? "1.5px solid transparent" : "1.5px solid #e2e8f0",
        transform: hovered
          ? "translateY(-4px) scale(1.15)"
          : "translateY(0) scale(1)",
        boxShadow: hovered
          ? `0 10px 28px ${hoverShadow}`
          : "0 2px 6px rgba(0,0,0,0.05)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Gradient fill (rendered via Tailwind className) */}
      {hovered && (
        <span
          className={`absolute inset-0 rounded-full bg-linear-to-br ${gradient}`}
          aria-hidden="true"
        />
      )}
      <span className="relative z-10">
        <Icon
          size={15}
          style={{ color: hovered ? "#ffffff" : "#64748b" }}
          className="transition-colors duration-200"
          aria-hidden="true"
        />
      </span>
    </a>
  );
}

/* ════════════════════════════════════
   FooterSocialLinks
════════════════════════════════════ */
export default function FooterSocialLinks() {
  return (
    <div
      className="flex items-center gap-2.5 flex-wrap"
      role="list"
      aria-label="Social media links"
    >
      {footerSocialLinks.map((link) => (
        <div key={link.id} role="listitem">
          <SocialButton link={link} />
        </div>
      ))}
    </div>
  );
}
