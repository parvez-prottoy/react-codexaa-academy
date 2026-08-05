import { HiSparkles, HiCheckCircle } from "react-icons/hi2";

export default function AboutStory() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column — Story Image & Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Codexaa Academy Students Collaborating"
                className="w-full h-80 sm:h-96 lg:h-112 object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/70 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/60 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2470A8] flex items-center justify-center font-bold text-lg">
                    💡
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Real-World Project Focus
                    </h4>
                    <p className="text-xs text-slate-500">
                      Building applications for global technology markets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column — Story Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-[#2470A8]">
              <HiSparkles size={15} className="text-[#3695d0]" />
              <span>Our Story & Origin</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Bridging the Gap Between Academia &{" "}
              <span className="bg-linear-to-r from-[#2470A8] via-[#3695d0] to-[#5BAFE6] bg-clip-text text-transparent">
                Tech Industry Demands
              </span>
            </h2>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Codexaa Academy was founded in 2020 by senior software architects
              who recognized a critical problem: traditional computer science
              degrees often leave graduates unprepared for the rapid demands of
              modern software engineering.
            </p>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              We set out to create an intensive, hands-on learning environment
              where students build production-grade web applications, design
              systems, and cloud architecture under the direct mentorship of
              practicing software leads.
            </p>

            {/* Key highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Active Software Engineer Mentors",
                "Hands-On Project Portfolio",
                "1-on-1 Mock Technical Interviews",
                "Direct Partner Hiring Referral",
              ].map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-2.5 text-sm font-semibold text-slate-800"
                >
                  <HiCheckCircle
                    size={18}
                    className="text-[#3695d0] shrink-0"
                  />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
