import { HiStar } from "react-icons/hi2";

export default function RatingStars({ rating = 5, size = 16, className = "" }) {
  return (
    <div className={`flex items-center gap-1 text-amber-400 ${className}`}>
      {[...Array(rating)].map((_, i) => (
        <HiStar
          key={i}
          size={size}
          className="drop-shadow-[0_1px_4px_rgba(251,191,36,0.5)] transform hover:scale-110 transition-transform duration-200"
        />
      ))}
    </div>
  );
}
