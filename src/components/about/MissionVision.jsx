import { HiAcademicCap, HiGlobeAlt, HiCheckCircle } from "react-icons/hi2";

export default function MissionVision() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-xl shadow-slate-900/5 space-y-5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#2470A8] flex items-center justify-center border border-blue-100">
              <HiAcademicCap size={30} />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-slate-900">
                Our Mission
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                To transform ambitious learners into industry-ready software engineers by delivering high-impact, practical, and project-driven education that fosters technical excellence and career acceleration.
              </p>
            </div>

            <ul className="space-y-2.5 pt-2 border-t border-slate-100">
              {[
                "100% practical, project-first learning methodology",
                "Personalized 1-on-1 mentorship from tech leads",
                "Direct job placement opportunities with 200+ partners",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                  <HiCheckCircle size={18} className="text-[#3695d0] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Vision Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-xl shadow-slate-900/5 space-y-5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
              <HiGlobeAlt size={30} />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-slate-900">
                Our Vision
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                To become a globally recognized center of tech education excellence, building a worldwide talent pipeline of software professionals who drive digital transformation across global tech markets.
              </p>
            </div>

            <ul className="space-y-2.5 pt-2 border-t border-slate-100">
              {[
                "Global standards in technical software education",
                "Inclusive & supportive developer learning community",
                "Lifelong alumni career growth and mentorship ecosystem",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                  <HiCheckCircle size={18} className="text-[#3695d0] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
