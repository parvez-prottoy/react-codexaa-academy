/**
 * CourseThumbnail — unique SVG gradient thumbnail per course.
 * Uses course ID in gradient IDs to prevent SVG <defs> conflicts on the same page.
 */
export default function CourseThumbnail({ id, gradient, iconText }) {
  const gId    = `cg-${id}`;
  const gShine = `cs-${id}`;
  const gFade  = `cf-${id}`;

  return (
    <svg
      viewBox="0 0 400 225"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      <defs>
        {/* Main gradient */}
        <linearGradient id={gId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor={gradient[0]} />
          <stop offset="100%" stopColor={gradient[1]} />
        </linearGradient>

        {/* Bottom overlay */}
        <linearGradient id={gFade} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor={gradient[1]} stopOpacity="0" />
          <stop offset="100%" stopColor={gradient[0]} stopOpacity="0.55" />
        </linearGradient>

        {/* Shine overlay */}
        <linearGradient id={gShine} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="white" stopOpacity="0.12" />
          <stop offset="50%"  stopColor="white" stopOpacity="0.04" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="400" height="225" fill={`url(#${gId})`} />

      {/* Decorative circles */}
      <circle cx="360" cy="-30" r="120" fill="white" fillOpacity="0.06" />
      <circle cx="-20"  cy="200"  r="100" fill="white" fillOpacity="0.05" />
      <circle cx="200" cy="112"  r="170" fill="white" fillOpacity="0.03" />

      {/* Geometric accent: top-right diamond cluster */}
      <rect x="340" y="20" width="18" height="18" rx="4" fill="white" fillOpacity="0.12" transform="rotate(45 349 29)" />
      <rect x="356" y="40" width="12" height="12" rx="3" fill="white" fillOpacity="0.09" transform="rotate(45 362 46)" />

      {/* Bottom-left accent dots */}
      <circle cx="30" cy="190" r="6" fill="white" fillOpacity="0.15" />
      <circle cx="48" cy="200" r="4" fill="white" fillOpacity="0.10" />
      <circle cx="62" cy="185" r="3" fill="white" fillOpacity="0.08" />

      {/* Center icon text */}
      <text
        x="200" y="122"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="white"
        fontSize="68"
        fontFamily="'Courier New', monospace"
        fontWeight="900"
        opacity="0.18"
        letterSpacing="-2"
      >
        {iconText}
      </text>

      {/* Bottom gradient fade */}
      <rect width="400" height="80" y="145" fill={`url(#${gFade})`} />

      {/* Shine overlay */}
      <rect width="400" height="225" fill={`url(#${gShine})`} />

      {/* Top highlight line */}
      <rect width="400" height="1.5" fill="white" fillOpacity="0.25" />
    </svg>
  );
}
