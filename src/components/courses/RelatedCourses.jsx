import { HiSparkles } from "react-icons/hi2";
import CourseCard from "./CourseCard";

export default function RelatedCourses({ courses = [] }) {
  if (!courses || courses.length === 0) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <HiSparkles size={20} className="text-[#3695d0]" />
        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
          Related Courses
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
