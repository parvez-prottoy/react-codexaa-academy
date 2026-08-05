import { useState } from "react";
import { HiEnvelope, HiCheckCircle, HiSparkles } from "react-icons/hi2";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setError("");
    setIsSubmitted(true);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-linear-to-br from-slate-900 via-slate-800 to-[#19264F] p-8 sm:p-12 lg:p-16 text-white overflow-hidden shadow-2xl">
          {/* Subtle background glow */}
          <div
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-30 pointer-events-none"
            style={{
              background: "radial-gradient(circle, #5BAFE6 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />

          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-blue-200">
              <HiSparkles size={15} className="text-[#5BAFE6]" />
              <span>Academy Newsletter</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-white">
              Never Miss an Update
            </h2>

            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed font-normal">
              Subscribe to receive academy news, upcoming workshops, scholarship
              announcements, and career opportunities directly in your inbox.
            </p>

            {isSubmitted ? (
              <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center gap-3 text-emerald-300 font-semibold text-sm animate-fade-in">
                <HiCheckCircle size={22} />
                <span>Thank you for subscribing! You are now on our updates list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3" noValidate>
                <div className="flex flex-col sm:flex-row items-stretch gap-3 max-w-md mx-auto">
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <HiEnvelope size={18} />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full pl-10 pr-4 py-3.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-sm text-white placeholder:text-blue-200/70 focus:bg-white focus:text-slate-900 focus:outline-none transition-all duration-200"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-7 py-3.5 rounded-full bg-linear-to-r from-[#5BAFE6] via-[#3695d0] to-[#2470A8] text-white text-sm font-bold shadow-lg shadow-blue-900/30 hover:shadow-blue-500/20 hover:-translate-y-0.5 transition-all duration-200 shrink-0 cursor-pointer"
                  >
                    Subscribe
                  </button>
                </div>

                {error && (
                  <p className="text-xs text-rose-300 font-medium">{error}</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
