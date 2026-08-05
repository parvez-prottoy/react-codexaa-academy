import { FaStar, FaUsers, FaChartLine } from "react-icons/fa6";
import { HiMapPin, HiCheckCircle } from "react-icons/hi2";
import { trustStats } from "../../data/testimonialData";

export default function TrustArea() {
  return (
    <div className="mt-14 sm:mt-16 pt-10 border-t border-slate-200/60 max-w-6xl mx-auto">
      <div className="bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Column: Avatar Stack + Rating Badge */}
          <div className="md:col-span-5 flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-4 text-center sm:text-left">
            {/* Avatar Stack */}
            <div className="flex items-center -space-x-3 overflow-hidden p-1">
              {trustStats.studentAvatars.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt="Enrolled Student"
                  className="inline-block h-11 w-11 rounded-full ring-2 ring-white object-cover shadow-sm hover:translate-y-1 hover:z-10 transition-transform duration-200"
                />
              ))}
              <div className="flex items-center justify-center h-11 w-11 rounded-full bg-linear-to-r from-[#5BAFE6] via-[#3695d0] to-[#2470A8] text-white text-xs font-bold ring-2 ring-white shadow-sm">
                +10k
              </div>
            </div>

            {/* Rating Summary */}
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-amber-400 text-base" />
                ))}
                <span className="ml-1.5 font-extrabold text-slate-900 text-lg">
                  {trustStats.rating}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  / 5.0
                </span>
              </div>
              <p className="text-xs font-medium text-slate-500 mt-1">
                Based on{" "}
                <span className="font-bold text-slate-700">
                  {trustStats.totalReviews}
                </span>{" "}
                verified student reviews
              </p>
            </div>
          </div>

          {/* Middle Column: Key Trust Metrics */}
          <div className="md:col-span-4 flex items-center justify-around py-4 md:py-0 border-y md:border-y-0 md:border-x border-slate-100">
            {/* Metric 1 */}
            <div className="text-center px-3">
              <div className="inline-flex items-center gap-1 text-[#3695d0] font-black text-xl sm:text-2xl">
                <FaUsers className="text-base text-[#3695d0]" />
                <span>{trustStats.happyStudents}</span>
              </div>
              <p className="text-xs font-semibold text-slate-600 mt-0.5">
                Happy Students
              </p>
            </div>

            {/* Metric 2 */}
            <div className="text-center px-3">
              <div className="inline-flex items-center gap-1 text-emerald-600 font-black text-xl sm:text-2xl">
                <FaChartLine className="text-base text-emerald-500" />
                <span>{trustStats.recommendationRate}</span>
              </div>
              <p className="text-xs font-semibold text-slate-600 mt-0.5">
                Recommendation Rate
              </p>
            </div>
          </div>

          {/* Right Column: Location & Trust Stamp */}
          <div className="md:col-span-3 text-center md:text-right flex flex-col items-center md:items-end justify-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-[#3695d0] border border-blue-200/70 text-xs font-bold mb-1.5">
              <HiMapPin className="text-[#3695d0] text-sm" />
              <span>Nationwide Trust</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug flex items-center gap-1">
              <HiCheckCircle className="text-emerald-500 shrink-0 text-base" />
              Trusted by professionals across Bangladesh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
