import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { HiArrowRight, HiSparkles } from "react-icons/hi2";
import useInView from "../../hooks/useInView";
import { courseCategories, courseData } from "../../data/courseData";
import CategoryTabs from "./CategoryTabs";
import CourseCard from "./CourseCard";

/* ─── Decorative background ─── */
function SectionBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, #ffffff 0%, #f8fbff 45%, #eef7fd 100%)",
        }}
      />
      <div
        className="absolute -top-48 -right-48 w-150 h-150 rounded-full opacity-40 animate-blob"
        style={{
          background: "radial-gradient(circle, #bae6fd 0%, transparent 70%)",
          filter: "blur(64px)",
        }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-125 h-125 rounded-full opacity-30 animate-blob-alt"
        style={{
          background: "radial-gradient(circle, #c7d2fe 0%, transparent 70%)",
          filter: "blur(56px)",
        }}
      />
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="courses-dots"
            x="0"
            y="0"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.5" fill="#3695d0" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#courses-dots)" />
      </svg>
    </div>
  );
}

/* ─── Section heading ─── */
function SectionHeading({ inView }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
      <div
        className="transition-all duration-700"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-[#bae6fd] text-[#2470A8] bg-[#f0f9ff] shadow-xs">
          <HiSparkles size={15} />
          <span>Popular Programs in Demand</span>
        </span>
      </div>

      <div
        className="transition-all duration-700"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(20px)",
          transitionDelay: "80ms",
        }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold tracking-tight text-slate-900 leading-tight">
          Explore Our{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#2470A8] via-[#3695d0] to-[#5BAFE6]">
            Featured Courses
          </span>
        </h2>
      </div>

      <div
        className="transition-all duration-700"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(20px)",
          transitionDelay: "160ms",
        }}
      >
        <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          Explore practical, project-based courses designed by industry professionals to help you become job-ready.
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   CoursesSection — Main Section Component
═══════════════════════════════════════════════ */
export default function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [headerRef, headerInView] = useInView(0.15);

  const displayedCourses = useMemo(() => {
    if (activeCategory === "All") {
      return courseData;
    }
    return courseData.filter(
      (c) => c.category.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [activeCategory]);

  return (
    <section
      className="relative w-full overflow-hidden py-12 sm:py-16 lg:py-20 bg-slate-50/50 border-t border-slate-100"
      aria-labelledby="courses-heading"
      id="courses"
    >
      <SectionBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={headerRef}>
          <SectionHeading inView={headerInView} />
        </div>

        {/* Filter Categories */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <CategoryTabs
            categories={courseCategories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </div>

        {/* Dynamic Course Grid (1 col mobile, 2 tablet, 3 desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {displayedCourses.map((course) => (
            <div key={course.id} className="flex h-full">
              <CourseCard course={course} />
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="flex justify-center mt-10 sm:mt-12">
          <Link
            to="/courses"
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-white font-bold text-sm sm:text-base bg-linear-to-r from-[#5BAFE6] via-[#3695d0] to-[#2470A8] shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>View All Courses</span>
            <HiArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
