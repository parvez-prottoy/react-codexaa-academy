import { useState } from "react";
import { Link } from "react-router-dom";
import navLogo from "../../assets/logo.png";
import FooterLinks from "./FooterLinks";
import FooterSocialLinks from "./FooterSocialLinks";
import {
  footerContactItems,
  legalLinks,
  trustStats,
} from "../../data/footerData";

/* ─────────────────────────────────────
   Footer Background
───────────────────────────────────── */
function FooterBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(150deg, #f0f7ff 0%, #eaf3fb 30%, #f0f7ff 60%, #f8fafc 100%)",
        }}
      />

      {/* Top-left blob */}
      <div className="absolute -top-40 -left-40 w-125 h-125 rounded-full opacity-35 animate-blob" />

      {/* Bottom-right blob */}
      <div className="absolute -bottom-32 -right-32 w-112.5 h-112.5 rounded-full opacity-25 animate-blob-alt" />

      {/* Dot grid */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="footer-dots"
            x="0"
            y="0"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.4" fill="#2563eb" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#footer-dots)" />
      </svg>

      {/* Floating shapes */}
      <div className="absolute top-16 right-[12%] w-12 h-12 border border-blue-300/20 rounded-2xl rotate-12 animate-float-slow" />
      <div className="absolute bottom-20 left-[8%] w-14 h-14 border border-indigo-300/15 rounded-full animate-float-alt" />
    </div>
  );
}

/* ─────────────────────────────────────
   Column 1 — Brand / About
───────────────────────────────────── */
function BrandColumn() {
  return (
    <div className="flex flex-col gap-5">
      {/* Logo + Academy badge (mirrors navbar) */}
      <Link
        to="/"
        aria-label="Codexaa Academy — Home"
        className="inline-flex items-start w-fit group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3695d0] focus-visible:rounded-lg"
      >
        <div className="relative">
          <img
            src={navLogo}
            alt="Codexaa Academy"
            className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </Link>

      {/* Short description */}
      <p className="text-sm text-slate-500 leading-relaxed max-w-88">
        Empowering the next generation of tech professionals through practical,
        industry-aligned education, expert mentors, and real-world projects.
      </p>

      {/* Trust stats */}
      <div className="flex items-center gap-4 flex-wrap">
        {trustStats.map((stat, i) => (
          <div key={stat.label} className="flex items-center gap-1.5">
            {i > 0 && (
              <span className="w-px h-7 bg-slate-200" aria-hidden="true" />
            )}
            <div className={i > 0 ? "pl-2" : ""}>
              <p
                className="text-base font-extrabold leading-none"
                style={{
                  background: "linear-gradient(135deg, #3695d0, #6366f1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {stat.value}
              </p>
              <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Social icons */}
      <FooterSocialLinks />
    </div>
  );
}

/* ─────────────────────────────────────
   Column 4 — Contact Info
───────────────────────────────────── */
function ContactColumn() {
  return (
    <div>
      <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-4">
        Get In Touch
      </h3>
      <ul className="flex flex-col">
        {footerContactItems.map((item) => (
          <ContactRow key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

function ContactRow({ item }) {
  const [hovered, setHovered] = useState(false);
  const { icon: Icon, label, href, external, color, bgColor } = item;

  const inner = (
    <div
      className="flex items-start gap-3 p-2.5 rounded-xl transition-all duration-250"
      style={{
        background: hovered ? bgColor : "transparent",
        transform: hovered ? "translateX(5px)" : "translateX(0)",
      }}
    >
      {/* Icon bubble */}
      <div
        className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-250"
        style={{
          background: bgColor,
          border: `1px solid ${color}33`,
          transform: hovered
            ? "rotate(6deg) scale(1.08)"
            : "rotate(0deg) scale(1)",
        }}
        aria-hidden="true"
      >
        <Icon size={13} style={{ color }} />
      </div>
      {/* Text */}
      <p
        className="text-xs text-slate-500 font-medium leading-relaxed pt-1 transition-colors duration-200"
        style={{
          color: hovered && href ? color : "#64748b",
          whiteSpace: "pre-line",
        }}
      >
        {label}
      </p>
    </div>
  );

  if (href) {
    return (
      <li
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          aria-label={label.replace("\n", " ")}
          className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3695d0] focus-visible:rounded-xl"
        >
          {inner}
        </a>
      </li>
    );
  }

  return (
    <li
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {inner}
    </li>
  );
}

/* ─────────────────────────────────────
   Bottom Bar
───────────────────────────────────── */
function BottomBar() {
  return (
    <div
      className="border-t border-slate-200/80 mt-12 pt-6 pb-8
                 flex flex-col sm:flex-row items-center justify-between gap-4"
    >
      {/* Left — copyright */}
      <p className="text-xs text-slate-400 font-medium text-center sm:text-left">
        © 2026 <span className="font-semibold text-slate-600">Codexaa™</span>.
        All rights reserved.{" "}
        <span className="hidden sm:inline text-slate-300 mx-1">·</span>
      </p>

      {/* Right — legal links */}
      <nav
        aria-label="Legal navigation"
        className="flex items-center gap-1 flex-wrap justify-center"
      >
        {legalLinks.map((link, i) => (
          <span key={link.id} className="flex items-center gap-1">
            {i > 0 && (
              <span className="text-slate-300 text-xs" aria-hidden="true">
                ·
              </span>
            )}
            <LegalLink href={link.href}>{link.label}</LegalLink>
          </span>
        ))}
      </nav>
    </div>
  );
}

function LegalLink({ href, children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      className="text-xs font-medium transition-colors duration-200 relative
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3695d0] focus-visible:rounded"
      style={{ color: hovered ? "#3695d0" : "#94a3b8" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  );
}

/* ═══════════════════════════════════════════════
   Footer — Main Export
═══════════════════════════════════════════════ */
export default function Footer() {
  return (
    <footer
      aria-label="Site footer"
      className="relative w-full overflow-hidden"
      style={{
        borderTop: "1.5px solid rgba(226,232,240,0.8)",
      }}
    >
      <FooterBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-0">
        {/* ── Main 4-column grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 xl:gap-14">
          {/* Col 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <BrandColumn />
          </div>

          {/* Col 2 — Quick Links */}
          {/* Col 3 — Popular Courses */}
          <FooterLinks />

          {/* Col 4 — Contact + Newsletter */}
          <div className="flex flex-col gap-4">
            <ContactColumn />
          </div>
        </div>

        {/* ── Bottom copyright bar ── */}
        <BottomBar />
      </div>
    </footer>
  );
}
