/* Slide 1 — Analytics Dashboard Illustration */
export default function Slide1Illustration() {
  return (
    <svg
      viewBox="0 0 520 420"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="s1-win-header" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e40af" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id="s1-bar-a" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id="s1-bar-b" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="s1-bar-c" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="s1-area" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="s1-donut-track" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <filter id="s1-shadow" x="-5%" y="-5%" width="110%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="14" floodColor="#1e40af" floodOpacity="0.12" />
        </filter>
        <filter id="s1-card-shadow" x="-5%" y="-5%" width="115%" height="130%">
          <feDropShadow dx="0" dy="3" stdDeviation="6" floodColor="#0f172a" floodOpacity="0.07" />
        </filter>
      </defs>

      {/* ── Main window frame ── */}
      <rect x="16" y="16" width="488" height="388" rx="18" fill="white" filter="url(#s1-shadow)" />

      {/* ── Title bar ── */}
      <rect x="16" y="16" width="488" height="46" rx="18" fill="url(#s1-win-header)" />
      <rect x="16" y="44" width="488" height="18" fill="#1d4ed8" />

      {/* Traffic lights */}
      <circle cx="44" cy="39" r="6" fill="#ef4444" fillOpacity="0.85" />
      <circle cx="63" cy="39" r="6" fill="#f59e0b" fillOpacity="0.85" />
      <circle cx="82" cy="39" r="6" fill="#10b981" fillOpacity="0.85" />

      {/* Title */}
      <text x="260" y="43" textAnchor="middle" fill="white" fontSize="13" fontFamily="Inter, sans-serif" fontWeight="600" opacity="0.95">📊  Analytics Dashboard</text>

      {/* ── Top stat strip ── */}
      {/* Stat 1 */}
      <rect x="30" y="74" width="132" height="60" rx="12" fill="#eff6ff" filter="url(#s1-card-shadow)" />
      <text x="46" y="96" fill="#93c5fd" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600">TOTAL STUDENTS</text>
      <text x="46" y="116" fill="#1e40af" fontSize="20" fontFamily="Inter, sans-serif" fontWeight="800">12,540</text>
      <text x="130" y="98" fill="#10b981" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="700">↑ 14%</text>

      {/* Stat 2 */}
      <rect x="172" y="74" width="132" height="60" rx="12" fill="#f0fdf4" filter="url(#s1-card-shadow)" />
      <text x="188" y="96" fill="#6ee7b7" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600">JOB PLACEMENT</text>
      <text x="188" y="116" fill="#047857" fontSize="20" fontFamily="Inter, sans-serif" fontWeight="800">95%</text>
      <text x="272" y="98" fill="#10b981" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="700">↑ 3%</text>

      {/* Stat 3 */}
      <rect x="314" y="74" width="97" height="60" rx="12" fill="#fdf4ff" filter="url(#s1-card-shadow)" />
      <text x="330" y="96" fill="#d8b4fe" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600">AVG RATING</text>
      <text x="330" y="116" fill="#7e22ce" fontSize="20" fontFamily="Inter, sans-serif" fontWeight="800">4.9★</text>

      {/* Stat 4 */}
      <rect x="421" y="74" width="83" height="60" rx="12" fill="#fff7ed" filter="url(#s1-card-shadow)" />
      <text x="436" y="96" fill="#fed7aa" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600">COURSES</text>
      <text x="436" y="116" fill="#c2410c" fontSize="20" fontFamily="Inter, sans-serif" fontWeight="800">48+</text>

      {/* ── Bar chart card ── */}
      <rect x="30" y="148" width="270" height="148" rx="12" fill="#f8fafc" filter="url(#s1-card-shadow)" />
      <text x="46" y="167" fill="#64748b" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="600">MONTHLY ENROLLMENTS</text>

      {/* Chart area line */}
      <line x1="46" y1="276" x2="283" y2="276" stroke="#e2e8f0" strokeWidth="1" />

      {/* Bars */}
      <rect x="52"  y="226" width="22" height="50" rx="4" fill="url(#s1-bar-a)" opacity="0.7" />
      <rect x="84"  y="208" width="22" height="68" rx="4" fill="url(#s1-bar-a)" />
      <rect x="116" y="218" width="22" height="58" rx="4" fill="url(#s1-bar-b)" opacity="0.75" />
      <rect x="148" y="195" width="22" height="81" rx="4" fill="url(#s1-bar-a)" />
      <rect x="180" y="210" width="22" height="66" rx="4" fill="url(#s1-bar-c)" opacity="0.8" />
      <rect x="212" y="186" width="22" height="90" rx="4" fill="url(#s1-bar-b)" />
      <rect x="244" y="177" width="22" height="99" rx="4" fill="url(#s1-bar-a)" />

      {/* X-axis labels */}
      {["Jan","Feb","Mar","Apr","May","Jun","Jul"].map((m, i) => (
        <text key={m} x={63 + i * 32} y="290" textAnchor="middle" fill="#94a3b8" fontSize="8.5" fontFamily="Inter, sans-serif">{m}</text>
      ))}

      {/* ── Donut chart card ── */}
      <rect x="314" y="148" width="190" height="148" rx="12" fill="#f8fafc" filter="url(#s1-card-shadow)" />
      <text x="330" y="167" fill="#64748b" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="600">COMPLETION RATE</text>

      {/* Donut ring bg */}
      <circle cx="409" cy="228" r="40" fill="none" stroke="#e2e8f0" strokeWidth="14" />
      {/* Donut ring value (≈85% of circumference 251 ≈ 213) */}
      <circle cx="409" cy="228" r="40" fill="none" stroke="url(#s1-donut-track)" strokeWidth="14"
        strokeDasharray="213 251" strokeDashoffset="63" strokeLinecap="round"
        transform="rotate(-90 409 228)" />
      <text x="409" y="224" textAnchor="middle" fill="#1e40af" fontSize="16" fontFamily="Inter, sans-serif" fontWeight="800">85%</text>
      <text x="409" y="238" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="Inter, sans-serif">Completed</text>

      {/* Legend */}
      <circle cx="328" cy="280" r="4" fill="url(#s1-donut-track)" />
      <text x="338" y="284" fill="#64748b" fontSize="9" fontFamily="Inter, sans-serif">Completed</text>
      <circle cx="393" cy="280" r="4" fill="#e2e8f0" />
      <text x="403" y="284" fill="#94a3b8" fontSize="9" fontFamily="Inter, sans-serif">Remaining</text>

      {/* ── Line chart card ── */}
      <rect x="30" y="310" width="474" height="80" rx="12" fill="#f8fafc" filter="url(#s1-card-shadow)" />
      <text x="46" y="328" fill="#64748b" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="600">STUDENT GROWTH TREND</text>

      {/* Area fill */}
      <path
        d="M46 374 L109 364 L172 352 L235 340 L298 326 L361 310 L424 298 L487 286 L487 378 L46 378 Z"
        fill="url(#s1-area)"
      />
      {/* Line */}
      <path
        d="M46 374 L109 364 L172 352 L235 340 L298 326 L361 310 L424 298 L487 286"
        fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      />
      {/* Dots */}
      {[[109,364],[235,340],[361,310],[487,286]].map(([x,y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 3 ? 5 : 3.5}
          fill={i === 3 ? "white" : "#3b82f6"}
          stroke={i === 3 ? "#1d4ed8" : "none"}
          strokeWidth={i === 3 ? 2 : 0}
        />
      ))}

      {/* Tooltip on last point */}
      <rect x="457" y="268" width="48" height="22" rx="6" fill="#1d4ed8" />
      <text x="481" y="283" textAnchor="middle" fill="white" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="700">↑ 42%</text>
    </svg>
  );
}
