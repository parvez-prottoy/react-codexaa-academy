import { Link } from "react-router-dom";
import { optimizeImage } from "../../utils/optimizeImage";
import {
  HiArrowRight,
  HiClock,
  HiUserGroup,
  HiStar,
  HiAcademicCap,
} from "react-icons/hi2";

export default function CourseCard({ course }) {
  if (!course) return null;

  const targetSlug = course.slug || "complete-mern-stack-development-bootcamp";
  const title = course.title || "Course Program";
  const category = course.category || "Web Development";
  const rating = course.rating || 4.8;
  const description = course.shortDescription || course.description || "";
  const duration = course.duration || "24 Weeks";
  const level = course.level || "Beginner";
  const studentsCount =
    typeof course.students === "number"
      ? course.students.toLocaleString()
      : course.students || "1200+";

  return (
    <article className="group flex flex-col w-full rounded-3xl bg-white border border-slate-200/80 shadow-md shadow-slate-100 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden">
      {/* 1. Course Image */}
      <Link
        to={`/course/${targetSlug}`}
        className="relative h-48 sm:h-52 overflow-hidden bg-slate-100 block shrink-0"
      >
        <img
          src={optimizeImage(course.image)}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        {/* 2. Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#2470A8] text-xs font-bold shadow-xs border border-blue-100">
            {category}
          </span>
        </div>
      </Link>

      {/* Card Content Body */}
      <div className="p-6 flex flex-col justify-between grow space-y-4">
        <div className="space-y-3">
          {/* Rating & Students */}
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-1 font-bold text-slate-800">
              <HiStar size={15} className="text-amber-400 fill-amber-400" />
              <span>{rating}</span>
            </div>
            <div className="flex items-center gap-1 text-slate-500 font-medium">
              <HiUserGroup size={15} className="text-[#3695d0]" />
              <span>{studentsCount} Students</span>
            </div>
          </div>

          {/* 3. Course Title */}
          <h3 className="text-lg font-extrabold text-slate-900 leading-snug group-hover:text-[#2470A8] transition-colors duration-200 line-clamp-2">
            <Link to={`/course/${targetSlug}`}>{title}</Link>
          </h3>

          {/* 4. Short Description (2 lines max) */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2 font-normal">
            {description}
          </p>

          {/* 5. Duration & Level */}
          <div className="flex items-center gap-2 pt-1 text-xs font-semibold text-slate-600">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-50 border border-slate-100">
              <HiClock size={14} className="text-[#3695d0]" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-50 border border-slate-100">
              <HiAcademicCap size={14} className="text-[#3695d0]" />
              <span className="truncate max-w-[120px]">{level}</span>
            </div>
          </div>
        </div>

        {/* 6. View Details Button */}
        <div className="pt-3 border-t border-slate-100 mt-auto">
          <Link
            to={`/course/${targetSlug}`}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-linear-to-r from-[#5BAFE6] via-[#3695d0] to-[#2470A8] text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-200 hover:shadow-lg hover:shadow-blue-300 hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>View Details</span>
            <HiArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
