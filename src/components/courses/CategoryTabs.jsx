export default function CategoryTabs({
  categories = [],
  activeCategory = "All",
  onSelectCategory,
}) {
  return (
    <div className="w-full py-2">
      {/* Mobile: single-column vertical layout (1 per row, full-width, 48px touch height, gap-3)
          Desktop (md+): horizontal layout centered in a row */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-3 w-full max-w-md md:max-w-none mx-auto">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => onSelectCategory && onSelectCategory(cat)}
              className={`
                w-full md:w-auto min-h-[48px] md:min-h-0 px-5 py-3 md:py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer outline-none select-none flex items-center justify-center text-center
                ${
                  isActive
                    ? "bg-linear-to-r from-[#2470A8] via-[#3695d0] to-[#5BAFE6] text-white shadow-md shadow-blue-300/50 scale-[1.01] md:scale-105"
                    : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/70"
                }
              `}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}
