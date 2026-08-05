/* Slide 3 — Technology Ecosystem Network */

const NODES = [
  {
    id: "web",
    cx: 260,
    cy: 60,
    label: "Web Dev",
    abbr: "</>",
    color: "#1d4ed8",
    bg: "#dbeafe",
    border: "#93c5fd",
  },
  {
    id: "mobile",
    cx: 420,
    cy: 140,
    label: "Mobile App",
    abbr: "📱",
    color: "#7c3aed",
    bg: "#ede9fe",
    border: "#c4b5fd",
  },
  {
    id: "cloud",
    cx: 420,
    cy: 280,
    label: "Cloud/DevOps",
    abbr: "☁",
    color: "#0891b2",
    bg: "#cffafe",
    border: "#67e8f9",
  },
  {
    id: "security",
    cx: 260,
    cy: 360,
    label: "Cyber Security",
    abbr: "🛡",
    color: "#dc2626",
    bg: "#fee2e2",
    border: "#fca5a5",
  },
  {
    id: "ai",
    cx: 100,
    cy: 280,
    label: "AI & ML",
    abbr: "🤖",
    color: "#059669",
    bg: "#d1fae5",
    border: "#6ee7b7",
  },
  {
    id: "data",
    cx: 100,
    cy: 140,
    label: "Data Science",
    abbr: "📊",
    color: "#d97706",
    bg: "#fef3c7",
    border: "#fde68a",
  },
];

const CENTER = { cx: 260, cy: 210 };

export default function Slide3Illustration() {
  return (
    <svg
      viewBox="0 0 520 420"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="s3-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="s3-center-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e40af" />
          <stop offset="60%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="s3-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
        </linearGradient>
        <filter
          id="s3-node-shadow"
          x="-15%"
          y="-15%"
          width="130%"
          height="130%"
        >
          <feDropShadow
            dx="0"
            dy="4"
            stdDeviation="8"
            floodColor="#0f172a"
            floodOpacity="0.1"
          />
        </filter>
        <filter
          id="s3-center-shadow"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
        >
          <feDropShadow
            dx="0"
            dy="8"
            stdDeviation="16"
            floodColor="#1e40af"
            floodOpacity="0.3"
          />
        </filter>
        <filter id="s3-glow-filter">
          <feGaussianBlur stdDeviation="12" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background radial glow */}
      <ellipse cx="260" cy="210" rx="210" ry="200" fill="url(#s3-glow)" />

      {/* Orbital rings (decorative) */}
      <circle
        cx={CENTER.cx}
        cy={CENTER.cy}
        r="165"
        fill="none"
        stroke="#e2e8f0"
        strokeWidth="1"
        strokeDasharray="6 10"
        opacity="0.6"
      />
      <circle
        cx={CENTER.cx}
        cy={CENTER.cy}
        r="115"
        fill="none"
        stroke="#dbeafe"
        strokeWidth="1.5"
        strokeDasharray="3 8"
        opacity="0.8"
      />
      <circle
        cx={CENTER.cx}
        cy={CENTER.cy}
        r="70"
        fill="none"
        stroke="#bfdbfe"
        strokeWidth="1"
        opacity="0.5"
      />

      {/* Connection lines: center → each node */}
      {NODES.map((node) => (
        <line
          key={`line-${node.id}`}
          x1={CENTER.cx}
          y1={CENTER.cy}
          x2={node.cx}
          y2={node.cy}
          stroke="#bfdbfe"
          strokeWidth="1.5"
          strokeDasharray="5 6"
          opacity="0.7"
        />
      ))}

      {/* Animated dots traveling along each line */}
      {NODES.map((node, i) => (
        <circle key={`dot-${node.id}`} r="3" fill="#3b82f6" opacity="0.8">
          <animateMotion
            dur={`${2.5 + i * 0.4}s`}
            repeatCount="indefinite"
            calcMode="linear"
          >
            <mpath xlinkHref={`#path-${node.id}`} />
          </animateMotion>
        </circle>
      ))}

      {/* Hidden paths for animateMotion */}
      {NODES.map((node) => (
        <path
          key={`path-${node.id}`}
          id={`path-${node.id}`}
          d={`M ${CENTER.cx} ${CENTER.cy} L ${node.cx} ${node.cy}`}
          fill="none"
        />
      ))}

      {/* ── Satellite nodes ── */}
      {NODES.map((node) => (
        <g key={node.id} filter="url(#s3-node-shadow)">
          {/* Outer ring */}
          <circle
            cx={node.cx}
            cy={node.cy}
            r="42"
            fill={node.bg}
            stroke={node.border}
            strokeWidth="1.5"
          />
          {/* Inner icon circle */}
          <circle cx={node.cx} cy={node.cy} r="30" fill="white" />
          {/* Abbreviation / icon */}
          <text
            x={node.cx}
            y={node.cy - 4}
            textAnchor="middle"
            fill={node.color}
            fontSize="15"
            fontFamily="Inter, sans-serif"
            fontWeight="800"
          >
            {node.abbr}
          </text>
          {/* Label below icon */}
          <text
            x={node.cx}
            y={node.cy + 12}
            textAnchor="middle"
            fill={node.color}
            fontSize="8"
            fontFamily="Inter, sans-serif"
            fontWeight="700"
          >
            {node.label.length > 10 ? node.label.slice(0, 10) : node.label}
          </text>
          {/* Label line 2 if needed */}
          {node.label.length > 10 && (
            <text
              x={node.cx}
              y={node.cy + 22}
              textAnchor="middle"
              fill={node.color}
              fontSize="8"
              fontFamily="Inter, sans-serif"
              fontWeight="700"
            >
              {node.label.slice(10)}
            </text>
          )}
        </g>
      ))}

      {/* ── Center hub ── */}
      {/* Pulse rings */}
      <circle cx={CENTER.cx} cy={CENTER.cy} r="68" fill="#dbeafe" opacity="0.4">
        <animate
          attributeName="r"
          values="62;72;62"
          dur="3s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.4;0.1;0.4"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx={CENTER.cx} cy={CENTER.cy} r="58" fill="#bfdbfe" opacity="0.3">
        <animate
          attributeName="r"
          values="56;64;56"
          dur="3s"
          begin="0.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.3;0.08;0.3"
          dur="3s"
          begin="0.5s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Center circle */}
      <circle
        cx={CENTER.cx}
        cy={CENTER.cy}
        r="52"
        fill="url(#s3-center-grad)"
        filter="url(#s3-center-shadow)"
      />
      <circle
        cx={CENTER.cx}
        cy={CENTER.cy}
        r="52"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeOpacity="0.25"
      />

      {/* Center text */}
      <text
        x={CENTER.cx}
        y={CENTER.cy - 10}
        textAnchor="middle"
        fill="white"
        fontSize="13"
        fontFamily="Inter, sans-serif"
        fontWeight="800"
      >
        Codexaa
      </text>
      <text
        x={CENTER.cx}
        y={CENTER.cy + 6}
        textAnchor="middle"
        fill="white"
        fontSize="10"
        fontFamily="Inter, sans-serif"
        fontWeight="500"
        opacity="0.85"
      >
        Academy
      </text>
      <text
        x={CENTER.cx}
        y={CENTER.cy + 20}
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontFamily="Inter, sans-serif"
        opacity="0.7"
      >
        8+ Tech Tracks
      </text>

      {/* ── Decorative floating badges ── */}
      {/* Top right badge */}
      <g filter="url(#s3-node-shadow)">
        <rect
          x="382"
          y="20"
          width="120"
          height="30"
          rx="15"
          fill="white"
          stroke="#dbeafe"
          strokeWidth="1"
        />
        <circle cx="398" cy="35" r="8" fill="#eff6ff" />
        <text x="398" y="39" textAnchor="middle" fill="#1d4ed8" fontSize="10">
          🏆
        </text>
        <text
          x="448"
          y="39"
          textAnchor="middle"
          fill="#1e40af"
          fontSize="9"
          fontFamily="Inter, sans-serif"
          fontWeight="700"
        >
          #1 IT Academy
        </text>
      </g>

      {/* Bottom left badge */}
      <g filter="url(#s3-node-shadow)">
        <rect
          x="18"
          y="370"
          width="130"
          height="30"
          rx="15"
          fill="white"
          stroke="#d1fae5"
          strokeWidth="1"
        />
        <circle cx="34" cy="385" r="8" fill="#ecfdf5" />
        <text x="34" y="389" textAnchor="middle" fill="#059669" fontSize="10">
          ✓
        </text>
        <text
          x="90"
          y="389"
          textAnchor="middle"
          fill="#047857"
          fontSize="9"
          fontFamily="Inter, sans-serif"
          fontWeight="700"
        >
          ISO Certified
        </text>
      </g>
    </svg>
  );
}
