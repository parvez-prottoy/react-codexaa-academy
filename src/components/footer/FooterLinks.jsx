import { useState } from "react";
import { Link } from "react-router-dom";
import { quickLinks, popularCourses } from "../../data/footerData";

/* ─── Animated link item ─── */
function FooterLink({ href, children, badge }) {
  const [hovered, setHovered] = useState(false);
  const isInternal = href && href.startsWith("/");

  const content = (
    <>
      {/* Arrow indicator */}
      <span
        className="text-xs transition-all duration-200"
        aria-hidden="true"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateX(0)" : "translateX(-6px)",
          color: "#3695d0",
        }}
      >
        →
      </span>

      {/* Label with animated underline */}
      <span className="relative">
        {children}
        <span
          className="absolute -bottom-0.5 left-0 h-px rounded-full bg-[#3695d0] transition-all duration-300"
          style={{ width: hovered ? "100%" : "0%" }}
          aria-hidden="true"
        />
      </span>

      {/* Optional badge */}
      {badge && (
        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-blue-50 text-[#3695d0] border border-blue-100 leading-none">
          {badge}
        </span>
      )}
    </>
  );

  return (
    <li>
      {isInternal ? (
        <Link
          to={href}
          className="group inline-flex items-center gap-2 text-sm text-slate-500 font-medium
                     transition-all duration-200 py-0.5
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3695d0] focus-visible:rounded"
          style={{
            color: hovered ? "#3695d0" : "#64748b",
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {content}
        </Link>
      ) : (
        <a
          href={href}
          className="group inline-flex items-center gap-2 text-sm text-slate-500 font-medium
                     transition-all duration-200 py-0.5
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3695d0] focus-visible:rounded"
          style={{
            color: hovered ? "#3695d0" : "#64748b",
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {content}
        </a>
      )}
    </li>
  );
}

/* ─── Link column with heading ─── */
function LinkColumn({ heading, children }) {
  return (
    <div>
      <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-4">
        {heading}
      </h3>
      <ul className="flex flex-col gap-1.5">{children}</ul>
    </div>
  );
}

/* ════════════════════════════════════
   FooterLinks — Quick Links + Popular Courses
════════════════════════════════════ */
export default function FooterLinks() {
  return (
    <>
      {/* Quick Links */}
      <LinkColumn heading="Quick Links">
        {quickLinks.map((link) => (
          <FooterLink key={link.id} href={link.href}>
            {link.label}
          </FooterLink>
        ))}
      </LinkColumn>

      {/* Popular Courses */}
      <LinkColumn heading="Popular Courses">
        {popularCourses.map((course) => (
          <FooterLink key={course.id} href={course.href} badge={course.badge}>
            {course.label}
          </FooterLink>
        ))}
      </LinkColumn>
    </>
  );
}
