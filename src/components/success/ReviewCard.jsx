import { FaLinkedin } from "react-icons/fa6";
import RatingStars from "./RatingStars";
import VerifiedBadge from "./VerifiedBadge";

export default function ReviewCard({ review, isActive = false }) {
  const {
    rating = 5,
    verified = true,
    summary,
    review: reviewText = summary,
    course,
    photo,
    image = photo,
    name,
    position,
    designation = position,
    company,
    companyLogo,
    linkedin,
  } = review;

  return (
    <div
      className={`
        h-full rounded-3xl bg-white border transition-all duration-500 flex flex-col justify-between p-6 sm:p-8 relative overflow-hidden select-none
        ${
          isActive
            ? "border-blue-300 shadow-2xl shadow-blue-900/15 scale-100 lg:scale-[1.02] bg-linear-to-b from-white via-blue-50/20 to-white"
            : "border-slate-200/80 shadow-lg shadow-slate-900/5 opacity-90 lg:opacity-75 scale-95 lg:scale-95 hover:opacity-100 hover:scale-100 hover:shadow-xl"
        }
      `}
    >
      {/* Top Accent Gradient Stripe */}
      <div className="absolute top-0 left-8 right-8 h-1 rounded-b-full bg-linear-to-r from-[#5BAFE6] via-[#3695d0] to-[#2470A8]" />

      <div className="space-y-5">
        {/* Header: Rating & Verified Badge */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <RatingStars rating={rating} size={18} />
          {verified && <VerifiedBadge />}
        </div>

        {/* Review Quote Text */}
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal italic pt-1 line-clamp-4">
          "{reviewText}"
        </p>

        {/* Completed Course Badge */}
        <div className="inline-block px-3 py-1 rounded-full bg-blue-50/80 text-[#2470A8] text-xs font-semibold border border-blue-100/80 truncate max-w-full">
          🎓 {course}
        </div>
      </div>

      {/* Footer Profile Block */}
      <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3.5 min-w-0">
          <img
            src={image}
            alt={name}
            className="w-13 h-13 rounded-2xl object-cover border border-slate-200 shadow-xs shrink-0 transform group-hover:scale-105 transition-transform duration-300 bg-slate-100"
          />
          <div className="min-w-0">
            <h4 className="text-base font-extrabold text-slate-900 leading-tight truncate">
              {name}
            </h4>
            <p className="text-xs font-semibold text-[#2470A8] truncate mt-0.5">
              {designation}
            </p>
            <p className="text-[11px] text-slate-500 font-medium truncate">
              {company}
            </p>
          </div>
        </div>

        {/* Right: Company Logo & LinkedIn */}
        <div className="flex flex-col items-end gap-2 shrink-0">
          {companyLogo && (
            <img
              src={companyLogo}
              alt={company}
              className="h-6 w-auto object-contain max-w-[90px]"
            />
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name}'s LinkedIn profile`}
              className="text-slate-400 hover:text-[#0A66C2] transition-colors duration-200"
            >
              <FaLinkedin size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
