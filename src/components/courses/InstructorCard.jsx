import { HiAcademicCap, HiSparkles } from "react-icons/hi2";

export default function InstructorCard({ course }) {
  if (!course) return null;

  return (
    <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
      <div className="flex items-center gap-2">
        <HiAcademicCap size={22} className="text-[#3695d0]" />
        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
          Your Instructor
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 rounded-2xl bg-linear-to-br from-slate-50 via-blue-50/30 to-white border border-slate-200/80">
        {/* Photo */}
        <div className="relative shrink-0">
          <img
            src={course.instructorImage}
            alt={course.instructor}
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-white shadow-md"
          />
          <div className="absolute -bottom-2 -right-2 p-1.5 rounded-full bg-[#2470A8] text-white shadow-xs">
            <HiSparkles size={14} />
          </div>
        </div>

        {/* Info */}
        <div className="space-y-2 text-center sm:text-left">
          <div>
            <h3 className="text-xl font-extrabold text-slate-900">
              {course.instructor}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-[#2470A8]">
              {course.instructorRole}
            </p>
          </div>

          <span className="inline-block px-3 py-1 rounded-full bg-blue-100/70 text-slate-700 text-xs font-semibold">
            ⭐ {course.instructorExperience || "Senior Software Mentor"}
          </span>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-1">
            {course.instructorBio}
          </p>
        </div>
      </div>
    </div>
  );
}
