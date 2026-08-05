import { useState } from "react";
import { HiArrowRight } from "react-icons/hi2";
import { MdOutlineEmail } from "react-icons/md";

/* ════════════════════════════════════
   Newsletter — premium subscribe box
════════════════════════════════════ */
export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [focused, setFocused] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [hovered, setHovered] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
    setTimeout(() => {
      setStatus("idle");
      setEmail("");
    }, 4000);
  }

  return (
    <div>
      <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-1.5">
        Stay Updated
      </h3>
      <p className="text-xs text-slate-500 leading-relaxed mb-4">
        Get the latest courses, tech insights, and career tips straight to your
        inbox.
      </p>

      {/* Success state */}
      {status === "success" ? (
        <div
          className="flex items-center gap-2.5 px-4 py-3.5 rounded-full text-sm font-semibold"
          style={{
            background: "linear-gradient(135deg, #d1fae5, #a7f3d0)",
            color: "#065f46",
            border: "1.5px solid #6ee7b7",
          }}
          role="status"
          aria-live="polite"
        >
          <span aria-hidden="true">✅</span>
          You're subscribed! Welcome aboard.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          noValidate
          aria-label="Newsletter subscription form"
          className="flex flex-col gap-2"
        >
          {/* Input + Button pill */}
          <div
            className="flex items-center rounded-full transition-all duration-300 overflow-hidden"
            style={{
              background: "white",
              border:
                status === "error"
                  ? "1.5px solid #fca5a5"
                  : focused
                    ? "1.5px solid #3695d0"
                    : "1.5px solid #e2e8f0",
              boxShadow: focused
                ? "0 0 0 4px rgba(54,149,208,0.12), 0 2px 8px rgba(0,0,0,0.06)"
                : status === "error"
                  ? "0 0 0 3px rgba(239,68,68,0.10)"
                  : "0 2px 8px rgba(0,0,0,0.04)",
            }}
          >
            {/* Email icon */}
            <span className="pl-4 shrink-0" aria-hidden="true">
              <MdOutlineEmail
                size={18}
                style={{ color: focused ? "#3695d0" : "#94a3b8" }}
                className="transition-colors duration-200"
              />
            </span>

            {/* Input */}
            <input
              type="email"
              id="newsletter-email"
              name="newsletter-email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="Enter your email address"
              aria-label="Email address for newsletter"
              aria-describedby={
                status === "error" ? "newsletter-error" : undefined
              }
              required
              className="flex-1 min-w-0 py-3 px-3 text-sm text-slate-800 font-medium bg-transparent
                         outline-none placeholder:text-slate-300"
            />

            {/* Subscribe button */}
            <button
              type="submit"
              disabled={status === "loading"}
              aria-label="Subscribe to newsletter"
              className="shrink-0 flex items-center gap-1.5 px-5 py-2.5 m-1 rounded-full
                         text-white text-xs font-bold transition-all duration-300 disabled:cursor-not-allowed"
              style={{
                background:
                  status === "loading"
                    ? "#94a3b8"
                    : "linear-gradient(135deg, #3695d0, #6366f1)",
                boxShadow:
                  hovered && status !== "loading"
                    ? "0 6px 20px rgba(54,149,208,0.4)"
                    : "none",
                transform:
                  hovered && status !== "loading" ? "scale(1.04)" : "scale(1)",
              }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {status === "loading" ? (
                <span
                  className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                  aria-hidden="true"
                />
              ) : (
                <>
                  Subscribe
                  <HiArrowRight size={13} aria-hidden="true" />
                </>
              )}
            </button>
          </div>

          {/* Error message */}
          {status === "error" && (
            <p
              id="newsletter-error"
              role="alert"
              className="text-xs text-rose-500 font-medium pl-4 flex items-center gap-1"
            >
              <span aria-hidden="true">⚠</span> Please enter a valid email
              address.
            </p>
          )}
        </form>
      )}

      <p className="mt-3 text-[11px] text-slate-400 leading-relaxed">
        🔒 No spam, ever. Unsubscribe anytime.
      </p>
    </div>
  );
}
