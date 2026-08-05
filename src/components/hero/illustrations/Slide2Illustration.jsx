/* Slide 2 — Developer Workspace Code Editor */
export default function Slide2Illustration() {
  /* Syntax-highlighted code lines as data */
  const codeLines = [
    { num: 1,  tokens: [{ c: "#93c5fd", t: "import " }, { c: "#e2e8f0", t: "React " }, { c: "#93c5fd", t: "from " }, { c: "#86efac", t: "'react'" }] },
    { num: 2,  tokens: [{ c: "#93c5fd", t: "import " }, { c: "#e2e8f0", t: "{ useState, useEffect } " }, { c: "#93c5fd", t: "from " }, { c: "#86efac", t: "'react'" }] },
    { num: 3,  tokens: [] },
    { num: 4,  tokens: [{ c: "#93c5fd", t: "const " }, { c: "#fde68a", t: "Academy " }, { c: "#e2e8f0", t: "= () => {" }] },
    { num: 5,  tokens: [{ c: "transparent", t: "  " }, { c: "#93c5fd", t: "  const " }, { c: "#e2e8f0", t: "[active, setActive] = " }, { c: "#fde68a", t: "useState" }, { c: "#e2e8f0", t: "(null)" }] },
    { num: 6,  tokens: [] },
    { num: 7,  tokens: [{ c: "#93c5fd", t: "  return" }, { c: "#e2e8f0", t: " (" }] },
    { num: 8,  tokens: [{ c: "#f87171", t: "    <section " }, { c: "#fde68a", t: "className" }, { c: "#e2e8f0", t: '=' }, { c: "#86efac", t: '"hero-banner"' }, { c: "#f87171", t: ">" }] },
    { num: 9,  tokens: [{ c: "#f87171", t: "      <h1 " }, { c: "#fde68a", t: "className" }, { c: "#e2e8f0", t: '=' }, { c: "#86efac", t: '"title"' }, { c: "#f87171", t: ">" }] },
    { num: 10, tokens: [{ c: "#e2e8f0", t: "        Build Your Future" }] },
    { num: 11, tokens: [{ c: "#f87171", t: "      </h1>" }] },
    { num: 12, tokens: [{ c: "#f87171", t: "      <CourseCatalog " }, { c: "#fde68a", t: "onSelect" }, { c: "#e2e8f0", t: "={setActive} />" }] },
    { num: 13, tokens: [{ c: "#f87171", t: "    </section>" }] },
    { num: 14, tokens: [{ c: "#e2e8f0", t: "  )" }] },
    { num: 15, tokens: [{ c: "#e2e8f0", t: "}" }] },
    { num: 16, tokens: [] },
    { num: 17, tokens: [{ c: "#93c5fd", t: "export default " }, { c: "#fde68a", t: "Academy" }] },
  ];

  return (
    <svg
      viewBox="0 0 520 420"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="s2-titlebar" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>
        <linearGradient id="s2-statusbar" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
        <filter id="s2-shadow" x="-5%" y="-5%" width="115%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="16" floodColor="#0f172a" floodOpacity="0.2" />
        </filter>
        <filter id="s2-float-shadow" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#1e40af" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* ── Main editor frame ── */}
      <rect x="12" y="12" width="496" height="396" rx="16" fill="#0d1929" filter="url(#s2-shadow)" />

      {/* ── Title bar ── */}
      <rect x="12" y="12" width="496" height="38" rx="16" fill="url(#s2-titlebar)" />
      <rect x="12" y="36" width="496" height="14" fill="#1e293b" />

      {/* Traffic lights */}
      <circle cx="36" cy="31" r="5.5" fill="#ef4444" />
      <circle cx="54" cy="31" r="5.5" fill="#f59e0b" />
      <circle cx="72" cy="31" r="5.5" fill="#10b981" />

      {/* File tabs */}
      <rect x="96" y="18" width="88" height="26" rx="5" fill="#0d1929" />
      <circle cx="106" cy="31" r="4" fill="#60a5fa" fillOpacity="0.6" />
      <text x="140" y="35" textAnchor="middle" fill="#93c5fd" fontSize="10.5" fontFamily="monospace, Courier New">App.jsx</text>

      <rect x="190" y="22" width="80" height="22" rx="5" fill="#334155" opacity="0.5" />
      <text x="230" y="36" textAnchor="middle" fill="#64748b" fontSize="10" fontFamily="monospace, Courier New">index.css</text>

      <rect x="276" y="22" width="90" height="22" rx="5" fill="#334155" opacity="0.4" />
      <text x="321" y="36" textAnchor="middle" fill="#64748b" fontSize="10" fontFamily="monospace, Courier New">Navbar.jsx</text>

      {/* ── File explorer sidebar ── */}
      <rect x="12" y="50" width="88" height="344" fill="#0b1524" />

      {/* Explorer title */}
      <text x="20" y="68" fill="#4b5563" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="700" letterSpacing="1">EXPLORER</text>
      <text x="20" y="84" fill="#60a5fa" fontSize="9.5" fontFamily="monospace">📁 src</text>
      <text x="28" y="99" fill="#93c5fd" fontSize="9" fontFamily="monospace">▸ App.jsx</text>
      <text x="28" y="113" fill="#4b5563" fontSize="9" fontFamily="monospace">  main.jsx</text>
      <text x="28" y="127" fill="#4b5563" fontSize="9" fontFamily="monospace">  index.css</text>
      <text x="20" y="142" fill="#4b5563" fontSize="9.5" fontFamily="monospace">📁 comp</text>
      <text x="28" y="157" fill="#4b5563" fontSize="9" fontFamily="monospace">  Navbar</text>
      <text x="28" y="171" fill="#4b5563" fontSize="9" fontFamily="monospace">  Hero</text>
      <text x="28" y="185" fill="#4b5563" fontSize="9" fontFamily="monospace">  Footer</text>
      <text x="20" y="200" fill="#4b5563" fontSize="9.5" fontFamily="monospace">📁 data</text>
      <text x="28" y="215" fill="#4b5563" fontSize="9" fontFamily="monospace">  slides.js</text>
      <text x="28" y="229" fill="#4b5563" fontSize="9" fontFamily="monospace">  nav.js</text>

      {/* ── Line numbers column ── */}
      <rect x="100" y="50" width="32" height="344" fill="#111827" />

      {codeLines.map((line, i) => (
        <text key={line.num} x="116" y={68 + i * 19} textAnchor="middle"
          fill="#374151" fontSize="9.5" fontFamily="monospace">{line.num}</text>
      ))}

      {/* ── Code area ── */}
      <rect x="132" y="50" width="376" height="344" fill="#0d1929" />

      {/* Current line highlight (line 9, index 8) */}
      <rect x="132" y={50 + 8 * 19} width="376" height="19" fill="#1d4ed8" fillOpacity="0.08" />

      {/* Cursor on line 9 */}
      <rect x="303" y={55 + 8 * 19} width="1.5" height="12" fill="#60a5fa" opacity="0.9" />

      {/* Render code tokens */}
      {codeLines.map((line, lineIdx) => {
        let xCursor = 142;
        const y = 64 + lineIdx * 19;
        return line.tokens.map((token, ti) => {
          const el = (
            <text key={`${lineIdx}-${ti}`} x={xCursor} y={y}
              fill={token.c} fontSize="9.5" fontFamily="monospace">{token.t}</text>
          );
          xCursor += token.t.length * 5.8;
          return el;
        });
      })}

      {/* ── Status bar ── */}
      <rect x="12" y="370" width="496" height="38" fill="url(#s2-statusbar)" />
      <rect x="12" y="370" width="496" height="4" fill="#1d4ed8" />
      <text x="26" y="393" fill="white" fontSize="9" fontFamily="monospace" opacity="0.9">⎇ main  ✓ ESLint  React 19  JavaScript</text>
      <text x="460" y="393" textAnchor="end" fill="white" fontSize="9" fontFamily="monospace" opacity="0.8">Ln 9, Col 22</text>

      {/* ── Floating browser preview ── */}
      <rect x="330" y="52" width="176" height="120" rx="10" fill="white" filter="url(#s2-float-shadow)" />
      <rect x="330" y="52" width="176" height="28" rx="10" fill="#f1f5f9" />
      <rect x="330" y="68" width="176" height="12" fill="#f1f5f9" />
      <circle cx="346" cy="66" r="4" fill="#ef4444" fillOpacity="0.7" />
      <circle cx="358" cy="66" r="4" fill="#f59e0b" fillOpacity="0.7" />
      <circle cx="370" cy="66" r="4" fill="#10b981" fillOpacity="0.7" />
      <rect x="382" y="59" width="112" height="14" rx="7" fill="#e2e8f0" />
      <text x="438" y="70" textAnchor="middle" fill="#94a3b8" fontSize="8">codexaa.com</text>
      {/* Browser content */}
      <rect x="340" y="86" width="156" height="8" rx="4" fill="#1d4ed8" opacity="0.15" />
      <rect x="340" y="100" width="120" height="6" rx="3" fill="#e2e8f0" />
      <rect x="340" y="112" width="140" height="6" rx="3" fill="#e2e8f0" />
      <rect x="340" y="124" width="60" height="16" rx="8" fill="#1d4ed8" />
      <text x="370" y="136" textAnchor="middle" fill="white" fontSize="8" fontFamily="Inter, sans-serif" fontWeight="700">Enroll →</text>
      <rect x="408" y="86" width="76" height="52" rx="8" fill="#eff6ff" />
      <rect x="416" y="94" width="12" height="36" rx="3" fill="#3b82f6" opacity="0.5" />
      <rect x="432" y="100" width="12" height="30" rx="3" fill="#1d4ed8" opacity="0.7" />
      <rect x="448" y="106" width="12" height="24" rx="3" fill="#3b82f6" opacity="0.5" />
      <rect x="464" y="96" width="12" height="34" rx="3" fill="#6366f1" opacity="0.6" />
    </svg>
  );
}
