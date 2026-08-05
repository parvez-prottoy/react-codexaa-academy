export default function CategoryFilter({
  categories = [],
  activeCategory = "All",
  onSelectCategory,
}) {
  return (
    <div className="w-full py-4 overflow-x-auto scrollbar-none">
      <div className="flex items-center gap-2 sm:gap-3 min-w-max pb-2">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => onSelectCategory && onSelectCategory(category)}
              className={`
                px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer outline-none select-none
                ${
                  isActive
                    ? "bg-linear-to-r from-[#2470A8] via-[#3695d0] to-[#5BAFE6] text-white shadow-md shadow-blue-300/50 scale-105"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900 border border-slate-200/60"
                }
              `}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
