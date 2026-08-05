import { useState } from "react";
import { technologies } from "../../data/technologyData";
import TechnologyCard from "./TechnologyCard";

const CENTER = { cx: 260, cy: 210 };

/**
 * TechnologyHub — interactive ecosystem center hub with animated connecting lines & floating technology cards
 */
export default function TechnologyHub() {
  const [activeTechId, setActiveTechId] = useState(null);

  return (
    <div className="relative w-full max-w-140 lg:max-w-none mx-auto select-none">
      {/* Radial Glow behind hub */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-85 sm:w-110 h-85 sm:h-110 rounded-full opacity-35 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #3695d0 0%, #2470A8 45%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      {/* ── DESKTOP & TABLET: Interactive SVG Ecosystem Canvas ── */}
      <div className="relative w-full min-h-115 sm:min-h-125 flex items-center justify-center">
        {/* SVG Animated Connection Lines */}
        <svg
          viewBox="0 0 520 420"
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="core-glow-grad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#5BAFE6" />
              <stop offset="50%" stopColor="#3695d0" />
              <stop offset="100%" stopColor="#2470A8" />
            </linearGradient>

            <filter
              id="hub-shadow"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
            >
              <feDropShadow
                dx="0"
                dy="8"
                stdDeviation="16"
                floodColor="#3695d0"
                floodOpacity="0.25"
              />
            </filter>
          </defs>

          {/* Concentric Decorative Rings */}
          <circle
            cx={CENTER.cx}
            cy={CENTER.cy}
            r="185"
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="1"
            strokeDasharray="6 8"
            opacity="0.6"
          />
          <circle
            cx={CENTER.cx}
            cy={CENTER.cy}
            r="125"
            fill="none"
            stroke="#bae6fd"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            opacity="0.8"
          />
          <circle
            cx={CENTER.cx}
            cy={CENTER.cy}
            r="75"
            fill="none"
            stroke="#93c5fd"
            strokeWidth="1"
            opacity="0.5"
          />

          {/* Connection Lines from Center Hub to each Technology node */}
          {technologies.map((tech) => {
            const isHovered = activeTechId === tech.id;
            return (
              <g key={`line-group-${tech.id}`}>
                <line
                  x1={CENTER.cx}
                  y1={CENTER.cy}
                  x2={tech.cx}
                  y2={tech.cy}
                  stroke={isHovered ? tech.color : "#bfdbfe"}
                  strokeWidth={isHovered ? 2.5 : 1.5}
                  strokeDasharray={isHovered ? "none" : "5 5"}
                  opacity={isHovered ? 1 : 0.6}
                  className="transition-all duration-300"
                />

                {/* Flowing animated dot along line */}
                <circle r="3" fill={tech.color} opacity={0.85}>
                  <animateMotion
                    path={`M ${CENTER.cx} ${CENTER.cy} L ${tech.cx} ${tech.cy}`}
                    dur={`${3 + (tech.cx % 3) * 0.5}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })}
        </svg>

        {/* ── CENTER HUB: "Academy Core" ── */}
        <div className="relative z-20 flex flex-col items-center justify-center w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-linear-to-br from-[#5BAFE6] via-[#3695d0] to-[#2470A8] text-white text-center p-4 shadow-2xl shadow-blue-500/30 border-4 border-white/90">
          {/* Animated Pulse Rings */}
          <div className="absolute inset-0 rounded-full bg-[#3695d0] opacity-20 animate-ping pointer-events-none" />
          <div className="absolute -inset-3 rounded-full border border-blue-300/40 pointer-events-none" />

          <p className="text-xs sm:text-sm font-black leading-tight tracking-tight">
            Codexaa Academy
          </p>
          <p className="text-[10px] sm:text-xs font-semibold text-blue-100">
            Academy Core
          </p>
          <span className="mt-1 px-2 py-0.5 rounded-full bg-white/20 text-[9px] font-bold uppercase tracking-wider backdrop-blur-xs">
            12+ Skill Tracks
          </span>
        </div>

        {/* ── FLOATING TECHNOLOGY CARDS (POSITIONED AROUND HUB) ── */}
        <div className="absolute inset-0 pointer-events-auto">
          {technologies.map((tech, i) => {
            /* Position absolute percentages based on SVG coordinates */
            const leftPct = (tech.cx / 520) * 100;
            const topPct = (tech.cy / 420) * 100;

            return (
              <div
                key={tech.id}
                onMouseEnter={() => setActiveTechId(tech.id)}
                onMouseLeave={() => setActiveTechId(null)}
                className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 ${
                  i % 2 === 0 ? "animate-float" : "animate-float-alt"
                }`}
                style={{
                  left: `${leftPct}%`,
                  top: `${topPct}%`,
                  animationDelay: `${(i % 4) * 0.8}s`,
                }}
              >
                <TechnologyCard tech={tech} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
