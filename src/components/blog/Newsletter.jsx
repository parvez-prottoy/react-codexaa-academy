import { useState } from "react";
import { HiEnvelope, HiCheckCircle, HiSparkles } from "react-icons/hi2";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-slate-900 via-[#19264F] to-[#2470A8] p-8 sm:p-12 lg:p-16 text-white shadow-2xl shadow-slate-900/20">
          {/* Decorative ambient background blobs */}
          <div
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-30 pointer-events-none animate-blob"
            style={{
              background: "radial-gradient(circle, #5BAFE6 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          <div
            className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full opacity-25 pointer-events-none animate-blob-alt"
            style={{
              background: "radial-gradient(circle, #3695D0 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm font-semibold text-blue-200 backdrop-blur-md">
              <HiSparkles size={16} className="text-amber-400 animate-pulse" />
              <span>Newsletter Subscription</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight leading-tight">
              Stay Updated With{" "}
              <span className="bg-linear-to-r from-blue-200 via-sky-300 to-indigo-200 bg-clip-text text-transparent">
                New Articles
              </span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto font-normal">
              Subscribe to receive new tutorials, career advice, and programming resources directly in your inbox.
            </p>

            {/* Form */}
            {isSubmitted ? (
              <div className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-sm font-semibold animate-scale-in">
                <HiCheckCircle size={20} className="text-emerald-400" />
                <span>Thank you for subscribing! Check your inbox soon.</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto"
              >
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <HiEnvelope size={20} />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-11 pr-4 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#5BAFE6] focus:border-transparent backdrop-blur-md transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-linear-to-r from-[#5BAFE6] via-[#3695d0] to-[#2470A8] text-white text-sm font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all duration-200 shrink-0 cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}

            <p className="text-xs text-slate-400 font-medium">
              No spam ever. Unsubscribe at any time with one click.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
