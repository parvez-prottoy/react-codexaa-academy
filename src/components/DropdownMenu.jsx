import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";
import { courseData } from "../data/courseData";
import CourseMenuItem from "./CourseMenuItem";

export default function DropdownMenu({
  isOpen,
  onClose,
  onMouseEnter,
  onMouseLeave,
}) {
  const ref = useRef(null);

  /* Close on outside click */
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    }
    if (isOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen, onClose]);

  /* Close on Escape */
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  return (
    <div
      ref={ref}
      role="menu"
      aria-label="Courses menu"
      inert={isOpen ? undefined : true}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`
        absolute top-full left-1/2 -translate-x-1/2 pt-2
        w-170 max-w-[calc(100vw-2rem)] z-50
        ${isOpen ? "pointer-events-auto" : "pointer-events-none"}
      `}
    >
      {/* Invisible static hover bridge anchored to top-0 — never shifts during animation */}
      <div
        className="absolute left-0 right-0 -top-6 h-6 bg-transparent"
        aria-hidden="true"
      />

      {/* Animated Inner Visual Panel */}
      <div
        className={`
          relative bg-white rounded-2xl border border-slate-100
          shadow-[0_20px_60px_-10px_rgba(30,64,175,0.15),0_4px_20px_-4px_rgba(0,0,0,0.08)]
          transition-all duration-300 ease-out origin-top overflow-hidden
          ${
            isOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 -translate-y-2"
          }
        `}
      >
        {/* Header */}
        <div className="px-6 pt-5 pb-3 border-b border-slate-50">
          <p className="text-xs font-bold uppercase tracking-widest text-[#2470A8] mb-0.5">
            Programs & Bootcamps
          </p>
          <p className="text-slate-500 text-xs sm:text-sm font-normal">
            Industry-aligned tracks designed with top software employers
          </p>
        </div>

        {/* Grid */}
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
          {courseData.slice(0, 6).map((course) => (
            <CourseMenuItem key={course.id} course={course} onClick={onClose} />
          ))}
        </div>

        {/* Footer CTA */}
        <div className="px-4 pb-4 border-t border-slate-50 pt-3">
          <Link
            to="/courses"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-linear-to-r from-[#5BAFE6] via-[#3695d0] to-[#2470A8] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 group"
          >
            <span>📚 View All Courses</span>
            <HiArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
