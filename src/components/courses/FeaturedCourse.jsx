import { Link } from "react-router-dom";
import {
  HiArrowRight,
  HiClock,
  HiBriefcase,
  HiUserGroup,
  HiAcademicCap,
  HiCheckBadge,
  HiSparkles,
  HiStar,
} from "react-icons/hi2";

export default function FeaturedCourse({ course }) {
  if (!course) return null;

  return (
    <section id="featured-course" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="flex items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#2470A8] text-xs font-bold border border-blue-200/60">
            <HiSparkles size={14} className="animate-pulse text-amber-500" />
            <span>Featured Program</span>
          </span>
          <div className="h-px bg-slate-200 grow max-w-xs" />
        </div>

        {/* Featured Course Card */}
        <div className="group relative rounded-3xl bg-white border border-slate-200/80 shadow-xl shadow-slate-200/50 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
          <div className="grid lg:grid-cols-12 gap-0 items-stretch">
            {/* Left Column — Large Image */}
            <div className="lg:col-span-6 relative min-h-[320px] sm:min-h-[420px] overflow-hidden bg-slate-100">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="eager"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/70 via-transparent to-transparent lg:hidden" />

              {/* Floating badges on image */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="px-3.5 py-1.5 rounded-full bg-[#2470A8] text-white text-xs font-bold shadow-md">
                  {course.category}
                </span>
                <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold shadow-md flex items-center gap-1">
                  <HiStar size={14} className="text-amber-400 fill-amber-400" />
                  <span>{course.rating}</span>
                </span>
              </div>
            </div>

            {/* Right Column — Details */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Header Meta */}
                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-500 font-medium">
                  <span className="hidden lg:inline-flex px-3.5 py-1 rounded-full bg-blue-50 text-[#2470A8] text-xs font-bold border border-blue-200/70">
                    {course.category}
                  </span>
                  <span className="hidden lg:inline text-slate-300">•</span>
                  <div className="flex items-center gap-1">
                    <HiStar size={16} className="text-amber-400 fill-amber-400" />
                    <span className="font-bold text-slate-800">{course.rating}</span>
                    <span className="text-slate-400">({course.reviewsCount} reviews)</span>
                  </div>
                </div>

                {/* Course Title */}
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug group-hover:text-[#2470A8] transition-colors duration-200">
                  <Link to={`/course/${course.slug}`}>{course.title}</Link>
                </h2>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed line-clamp-3">
                  {course.shortDescription}
                </p>

                {/* Key Course Specifications */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#2470A8] flex items-center justify-center shrink-0">
                      <HiClock size={16} />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-400 font-medium">Duration</p>
                      <p className="text-xs font-bold text-slate-800">{course.duration}</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                      <HiBriefcase size={16} />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-400 font-medium">Projects</p>
                      <p className="text-xs font-bold text-slate-800">{course.projects}</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center shrink-0">
                      <HiAcademicCap size={16} />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-400 font-medium">Level</p>
                      <p className="text-xs font-bold text-slate-800 truncate">{course.level}</p>
                    </div>
                  </div>
                </div>

                {/* Additional Spec Pills */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600 pt-1">
                  <div className="flex items-center gap-1.5">
                    <HiUserGroup size={16} className="text-[#3695d0]" />
                    <span>{course.students} Enrolled</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <HiCheckBadge size={16} className="text-emerald-500" />
                    <span>{course.certificate}</span>
                  </div>
                </div>
              </div>

              {/* Price & Action Buttons Footer */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
                {/* Price */}
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Tuition Fee</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-extrabold text-slate-900">{course.price}</span>
                    {course.originalPrice && (
                      <span className="text-sm font-semibold text-slate-400 line-through">
                        {course.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <Link
                    to={`/course/${course.slug}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-slate-200 bg-white text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all duration-200"
                  >
                    <span>View Details</span>
                    <HiArrowRight size={14} />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-[#5BAFE6] via-[#3695d0] to-[#2470A8] text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-200 hover:shadow-lg hover:shadow-blue-300 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <span>Enroll Now</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
