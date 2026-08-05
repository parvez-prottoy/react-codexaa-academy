import { useRef } from "react";

/**
 * TabNav — original pill-style tab navigation.
 * Desktop: horizontal row. Tablet/mobile: horizontally scrollable.
 * Only responsiveness was added, preserving the original design.
 */
export default function TabNav({ tabs, activeTab, onTabChange }) {
  const tabRefs = useRef({});

  /* Select a tab and keep it visible on narrower screens */
  const handleSelect = (id) => {
    onTabChange(id);
    const el = tabRefs.current[id];
    if (el && typeof el.scrollIntoView === "function") {
      el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  };

  return (
    <div
      className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none"
      role="tablist"
      aria-label="Course categories"
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            ref={(el) => {
              tabRefs.current[tab.id] = el;
            }}
            role="tab"
            aria-selected={isActive}
            aria-controls={`tabpanel-${tab.id}`}
            onClick={() => handleSelect(tab.id)}
            className="shrink-0 flex items-center gap-2 px-5 py-2.5 whitespace-nowrap rounded-full text-sm font-semibold
                       border transition-all duration-300 ease-out outline-none
                       focus-visible:ring-2 focus-visible:ring-[#3695d0] focus-visible:ring-offset-2"
            style={{
              backgroundColor: isActive ? "#3695d0" : "#ffffff",
              color: isActive ? "#ffffff" : "#64748b",
              borderColor: isActive ? "#3695d0" : "#e2e8f0",
              transform: isActive ? "scale(1)" : "scale(1)",
            }}
          >
            {isActive && (
              <span
                className="w-1.5 h-1.5 rounded-full bg-white/70 ml-0.5"
                aria-hidden="true"
              />
            )}
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}