import { FaQuoteLeft, FaLinkedin } from "react-icons/fa6";
import { HiAcademicCap, HiCalendar } from "react-icons/hi2";
import RatingStars from "./RatingStars";
import VerifiedBadge from "./VerifiedBadge";

export default function TestimonialCard({ item }) {
  const {
    name,
    role,
    company,
    companyColor,
    companyBg,
    avatar,
    quote,
    rating,
    course,
    gradYear,
    verified,
    linkedinUrl,
    achievement,
  } = item;

  return (
    <div
      className="group relative flex flex-col justify-between h-full w-full
                 bg-white/90 backdrop-blur-xl border border-slate-200/80
                 rounded-3xl p-6 sm:p-8 md:p-9
                 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/15
                 hover:border-blue-300/80 hover:-translate-y-2
                 transition-all duration-300 ease-out select-none"
    >
      {/* Top subtle gradient accent line */}
      <div
        className="absolute top-0 left-8 right-8 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, transparent, ${companyColor || "#3b82f6"}, transparent)`,
        }}
      />

      {/* ── CARD CONTENT WRAPPER ── */}
      <div>
        {/* ── TOP ROW: Avatar, Info, Company & LinkedIn ── */}
        <div className="flex items-start justify-between gap-4 mb-6 pb-6 border-b border-slate-100/80">
          <div className="flex items-center gap-3.5 sm:gap-4">
            {/* Student Photo */}
            <div className="relative shrink-0">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden p-0.5 bg-linear-to-r from-[#5BAFE6] via-[#3695d0] to-[#2470A8] shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={avatar}
                  alt={name}
                  className="w-full h-full object-cover rounded-full bg-slate-100"
                  loading="lazy"
                />
              </div>
              <span
                className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full shadow-xs"
                title="Verified active alumnus"
              />
            </div>

            {/* Student Name & Title */}
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-slate-900 text-base sm:text-lg leading-snug group-hover:text-blue-600 transition-colors duration-200">
                  {name}
                </h3>
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                {role}
              </p>

              {/* Company pill */}
              <div
                className="inline-flex items-center gap-1.5 mt-1.5 px-2.5 py-0.5 rounded-md text-xs font-bold"
                style={{ backgroundColor: companyBg, color: companyColor }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: companyColor }}
                />
                <span>{company}</span>
              </div>
            </div>
          </div>

          {/* Right Top Actions: LinkedIn & Achievement tag */}
          <div className="flex flex-col items-end gap-2 shrink-0">
            {linkedinUrl && (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name}'s LinkedIn profile`}
                className="w-9 h-9 rounded-full bg-slate-100/80 hover:bg-blue-50 text-slate-400 hover:text-[#0A66C2]
                           flex items-center justify-center border border-slate-200/60 transition-all duration-200 hover:scale-110"
              >
                <FaLinkedin size={16} />
              </a>
            )}
            {achievement && (
              <span className="hidden sm:inline-block px-2.5 py-1 text-[11px] font-semibold text-blue-700 bg-blue-50/80 rounded-full border border-blue-200/60">
                ⚡ {achievement}
              </span>
            )}
          </div>
        </div>

        {/* ── MIDDLE ROW: Quote Icon, Star Rating & Testimonial Text ── */}
        <div className="relative mb-6">
          <div className="flex items-center justify-between gap-4 mb-4">
            <RatingStars rating={rating} size={18} />
            <FaQuoteLeft
              size={32}
              className="text-blue-500/20 group-hover:text-blue-500/40 transition-colors duration-300 shrink-0"
            />
          </div>

          {/* Testimonial text */}
          <blockquote className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal italic">
            "{quote}"
          </blockquote>
        </div>
      </div>

      {/* ── BOTTOM ROW: Course, Year & Verified Badge ── */}
      <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex flex-wrap items-center gap-2">
          {/* Course */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-medium">
            <HiAcademicCap className="text-blue-600 shrink-0 text-sm" />
            <span className="truncate max-w-42.5 sm:max-w-50">{course}</span>
          </span>

          {/* Graduation Year */}
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-500 font-medium">
            <HiCalendar className="text-slate-400 shrink-0 text-xs" />
            <span>Class of {gradYear}</span>
          </span>
        </div>

        {/* Verified Student Badge */}
        {verified && <VerifiedBadge text="Verified Graduate" />}
      </div>
    </div>
  );
}
