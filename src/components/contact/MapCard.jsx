import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

/* ════════════════════════════════════
   MapCard — Premium embedded Google Map
════════════════════════════════════ */
export default function MapCard() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative rounded-3xl overflow-hidden transition-all duration-500"
      style={{
        boxShadow: hovered
          ? "0 24px 60px rgba(54,149,208,0.2), 0 6px 24px rgba(0,0,0,0.1)"
          : "0 8px 32px rgba(0,0,0,0.08)",
        transform: hovered ? "scale(1.01)" : "scale(1)",
        border: "1.5px solid rgba(255,255,255,0.7)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Map showing Codexaa Academy location"
    >
      {/* Map iframe */}
      <div
        className="w-full transition-all duration-500"
        style={{
          height: "220px",
          transform: hovered ? "scale(1.04)" : "scale(1)",
        }}
      >
        <iframe
          title="Codexaa Academy Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.076335473209!2d90.4238998!3d23.7802959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7002c311e07%3A0x6d9cc41dc9b38f7b!2sCodexaa%20Ltd!5e0!3m2!1sen!2sbd!4v1785737128305!5m2!1sen!2sbd"
          width="600"
          height="450"
          style="border:0;"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          width="100%"
          height="100%"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label="Google Maps showing Codexaa Academy at Gulshan, Dhaka"
        />
      </div>

      {/* Floating "Visit Our Campus" badge */}
      <div className="absolute top-3 left-3">
        <div
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white text-xs font-semibold shadow-lg"
          style={{
            background: "linear-gradient(135deg, #5BAFE6, #2470A8)",
            boxShadow: "0 4px 16px rgba(54,149,208,0.4)",
            backdropFilter: "blur(8px)",
          }}
        >
          <FaMapMarkerAlt size={11} aria-hidden="true" />
          <span>Visit Our Campus</span>
        </div>
      </div>

      {/* Bottom overlay bar */}
      <div
        className="absolute bottom-0 left-0 right-0 px-4 py-2.5 flex items-center justify-between"
        style={{
          background:
            "linear-gradient(0deg, rgba(15,23,42,0.7) 0%, transparent 100%)",
        }}
      >
        <p className="text-white text-xs font-medium opacity-90">
          TA-39/1, (Lift 6 Flat- D1, Hasna Monjil, Gulshan Badda Link Rd, Dhaka
          1212, Bangladesh)
        </p>
        <a
          href="https://maps.google.com/?q=Codexaa+Academy+Gulshan+Dhaka"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Codexaa Academy in Google Maps"
          className="shrink-0 ml-2 text-[10px] font-semibold text-white/80 underline underline-offset-2
                     hover:text-white transition-colors duration-200"
        >
          Open Maps ↗
        </a>
      </div>
    </div>
  );
}
