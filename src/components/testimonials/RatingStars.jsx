import { FaStar } from "react-icons/fa6";

export default function RatingStars({ rating = 5, size = 18, showScore = false, scoreText = "5.0" }) {
  return (
    <div className="inline-flex items-center gap-1.5" aria-label={`Rating: ${rating} out of 5 stars`}>
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            size={size}
            className={`transition-transform duration-300 hover:scale-125 ${
              i < rating
                ? "text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]"
                : "text-slate-200"
            }`}
          />
        ))}
      </div>
      {showScore && (
        <span className="text-sm font-bold text-slate-800 ml-1">
          {scoreText}
        </span>
      )}
    </div>
  );
}
