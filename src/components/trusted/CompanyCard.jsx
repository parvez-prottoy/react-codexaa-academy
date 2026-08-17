import { useState } from 'react';

/**
 * CompanyCard — premium hiring partner card.
 * Shows only the company logo centered perfectly.
 */
export default function CompanyCard({ company, style }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative bg-white rounded-2xl border border-slate-100
                 flex items-center justify-center p-6 sm:p-8
                 cursor-default select-none aspect-square w-full
                 transition-all duration-300 ease-out
                 hover:-translate-y-1"
      style={{
        ...style,
        boxShadow: hovered
          ? '0 12px 24px -8px rgba(36, 112, 168, 0.12), 0 4px 12px -4px rgba(0,0,0,0.06)'
          : '0 2px 8px -2px rgba(0,0,0,0.04)',
        borderColor: hovered ? 'rgba(54, 149, 208, 0.3)' : undefined,
      }}
    >
      <img
        src={company.logo}
        alt={`${company.name} logo`}
        className="w-full h-full object-contain select-none pointer-events-none transition-transform duration-300"
        loading="lazy"
        draggable={false}
      />
    </article>
  );
}
