import CareerMilestone from "./CareerMilestone";

/**
 * ProgressTimeline — vertical career timeline with animated glowing progress line & connected nodes
 */
export default function ProgressTimeline({
  milestones,
  activeMilestoneId,
  onSelectMilestone,
  inView,
}) {
  return (
    <div className="relative pl-5 sm:pl-7 space-y-6">
      {/* Animated Glowing Vertical Progress Line */}
      <div
        className="absolute left-2.5 sm:left-3.5 top-6 bottom-6 w-1 bg-gradient-to-b from-emerald-500 via-[#3695d0] to-rose-500 rounded-full transition-all duration-1000 origin-top shadow-sm"
        style={{
          transform: inView ? "scaleY(1)" : "scaleY(0)",
          opacity: inView ? 0.9 : 0,
        }}
        aria-hidden="true"
      />

      {/* Milestone Cards List */}
      {milestones.map((milestone, i) => {
        const isSelected = activeMilestoneId === milestone.id;

        return (
          <div
            key={milestone.id}
            className="relative transition-all duration-500"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(28px)",
              transitionDelay: inView ? `${i * 120}ms` : "0ms",
            }}
          >
            {/* Connected Node Circle */}
            <div
              className="absolute -left-5 sm:-left-7 top-6 w-4 h-4 rounded-full border-2 border-white shadow-md z-10 transition-all duration-300"
              style={{
                backgroundColor: isSelected ? milestone.color : "#cbd5e1",
                boxShadow: isSelected ? `0 0 12px ${milestone.color}` : "none",
                transform: isSelected ? "scale(1.35)" : "scale(1)",
              }}
              aria-hidden="true"
            />

            <CareerMilestone
              milestone={milestone}
              isActive={isSelected}
              onSelect={() => onSelectMilestone(milestone.id)}
            />
          </div>
        );
      })}
    </div>
  );
}
