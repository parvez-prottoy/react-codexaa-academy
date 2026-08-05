import { useState } from 'react';
import { HiGlobeAlt } from 'react-icons/hi2';

/**
 * CompanyCard — premium hiring partner card.
 * Shows company logo (falls back to brand monogram on error), company name, country badge.
 */
export default function CompanyCard({ company, style }) {
  const [hovered, setHovered] = useState(false);
  const [logoError, setLogoError] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative bg-white rounded-2xl border border-slate-100
                 flex flex-col items-center justify-center gap-3 p-6
                 cursor-default select-none
                 transition-all duration-300 ease-out
                 hover:-translate-y-2"
      style={{
        ...style,
        boxShadow: hovered
          ? `0 20px 48px -8px ${company.color}28, 0 8px 20px -4px rgba(0,0,0,0.08)`
          : '0 2px 12px -2px rgba(0,0,0,0.06)',
        borderColor: hovered ? `${company.color}40` : undefined,
      }}
    >
      {/* Glow effect behind logo on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, ${company.color}08 0%, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* Logo container */}
      <div
        className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center
                   overflow-hidden transition-all duration-300"
        style={{
          backgroundColor: hovered ? company.lightBg : '#f1f5f9',
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
        }}
      >
        {company.logo && !logoError ? (
          <img
            src={company.logo}
            alt={`${company.name} logo`}
            className="w-16 h-26 object-contain select-none pointer-events-none"
            loading="lazy"
            draggable={false}
            onError={() => setLogoError(true)}
          />
        ) : (
          /* Fallback: monogram abbreviation */
          <span
            className="text-sm font-black tracking-tight transition-colors duration-300"
            style={{ color: hovered ? company.color : '#94a3b8' }}
          >
            {company.abbr}
          </span>
        )}
      </div>

      {/* Company name */}
      <div className="relative z-10 text-center">
        <p
          className="text-sm font-semibold leading-tight transition-colors duration-300"
          style={{ color: hovered ? '#0f172a' : '#64748b' }}
        >
          {company.name}
        </p>

        {/* Country badge */}
        <span
          className="inline-flex items-center gap-1 mt-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium transition-all duration-300"
          style={{
            backgroundColor: hovered ? company.lightBg : '#f8fafc',
            color: hovered ? company.color : '#94a3b8',
          }}
        >
          <HiGlobeAlt size={9} />
          {company.country}
        </span>
      </div>

      {/* Active indicator dot (appears on hover) */}
      <div
        className="absolute top-3 right-3 w-2 h-2 rounded-full transition-all duration-300"
        style={{
          backgroundColor: hovered ? company.color : 'transparent',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'scale(1)' : 'scale(0)',
        }}
        aria-hidden="true"
      />
    </article>
  );
}
