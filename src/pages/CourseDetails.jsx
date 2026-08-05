import { useMemo } from 'react';
import {
  HiAcademicCap,
  HiArrowLeft,
  HiArrowRight,
  HiBriefcase,
  HiCheckBadge,
  HiClock,
  HiStar,
  HiUserGroup,
} from 'react-icons/hi2';
import { Link, useParams } from 'react-router-dom';
import CourseFeatures from '../components/courses/CourseFeatures';
import CourseOverview from '../components/courses/CourseOverview';
import CTASection from '../components/courses/CTASection';
import CurriculumAccordion from '../components/courses/CurriculumAccordion';
import FAQSection from '../components/courses/FAQSection';
import InstructorCard from '../components/courses/InstructorCard';
import LearningOutcomes from '../components/courses/LearningOutcomes';
import { courseData } from '../data/courseData';

export default function CourseDetails() {
  const { slug } = useParams();

  const course = useMemo(() => {
    return (
      courseData.find((c) => c.slug === slug || c.id === slug) ||
      courseData.find((c) => c.featured) ||
      courseData[0]
    );
  }, [slug]);

  return (
    <div className="pt-15 md:pt-27 min-h-screen bg-slate-50/50">
      {/* 1. Course Detail Hero Section */}
      <section className="relative bg-linear-to-b from-slate-900 via-[#19264F] to-[#2470A8] text-white py-12 sm:py-16 overflow-hidden">
        {/* Ambient decorative blobs */}
        <div
          className="absolute -top-32 -right-32 w-120 h-120 rounded-full opacity-20 pointer-events-none animate-blob"
          style={{
            background: 'radial-gradient(circle, #5BAFE6 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Breadcrumb Back Link */}
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-200 hover:text-white transition-colors"
          >
            <HiArrowLeft size={16} />
            <span>Back to All Programs</span>
          </Link>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-5">
              {/* Category & Rating */}
              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
                <span className="px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 font-bold backdrop-blur-md">
                  {course.category}
                </span>
                <div className="flex items-center gap-1.5 text-amber-300 font-bold bg-white/10 px-3 py-1 rounded-full border border-white/10">
                  <HiStar size={16} className="fill-amber-400 text-amber-400" />
                  <span>{course.rating}</span>
                  <span className="text-blue-200 font-normal">
                    ({course.reviewsCount} reviews)
                  </span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
                {course.title}
              </h1>

              {/* Short Description */}
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                {course.shortDescription}
              </p>

              {/* Key Specs Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md">
                  <div className="flex items-center gap-1.5 text-blue-200 text-xs font-semibold">
                    <HiClock size={15} />
                    <span>Duration</span>
                  </div>
                  <p className="text-sm font-bold text-white mt-1">
                    {course.duration}
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md">
                  <div className="flex items-center gap-1.5 text-blue-200 text-xs font-semibold">
                    <HiUserGroup size={15} />
                    <span>Enrolled</span>
                  </div>
                  <p className="text-sm font-bold text-white mt-1">
                    {course.students}
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md">
                  <div className="flex items-center gap-1.5 text-blue-200 text-xs font-semibold">
                    <HiBriefcase size={15} />
                    <span>Projects</span>
                  </div>
                  <p className="text-sm font-bold text-white mt-1">
                    {course.projects}
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md">
                  <div className="flex items-center gap-1.5 text-blue-200 text-xs font-semibold">
                    <HiAcademicCap size={15} />
                    <span>Level</span>
                  </div>
                  <p className="text-sm font-bold text-white mt-1 truncate">
                    {course.level}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Card / CTA Column */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-white text-slate-900 p-6 sm:p-8 shadow-2xl space-y-5 border border-slate-100">
                {/* Course Cover Preview */}
                <div className="relative rounded-2xl overflow-hidden h-48 bg-slate-100">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/20" />
                </div>

                {/* Price Display */}
                <div className="flex items-baseline justify-between pt-2">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Tuition Fee
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-extrabold text-slate-900">
                        {course.price}
                      </span>
                      {course.originalPrice && (
                        <span className="text-base text-slate-400 line-through">
                          {course.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold border border-emerald-200">
                    Batch September 2026
                  </span>
                </div>

                {/* Enrollment Guarantee Pill */}
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <HiCheckBadge
                    size={18}
                    className="text-emerald-500 shrink-0"
                  />
                  <span>{course.certificate}</span>
                </div>

                {/* Primary CTA Buttons */}
                <div className="space-y-3 pt-2">
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-linear-to-r from-[#5BAFE6] via-[#3695d0] to-[#2470A8] text-white text-base font-bold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <span>Enroll Now</span>
                    <HiArrowRight size={18} />
                  </Link>
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    <span>Request Callback from Advisor</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* 2. Course Overview */}
          <CourseOverview course={course} />

          {/* 3. What You Will Learn */}
          <LearningOutcomes outcomes={course.learningOutcomes} />

          {/* 4. Course Curriculum Accordion */}
          <CurriculumAccordion curriculum={course.curriculum} />

          {/* 5. Instructor Section */}
          <InstructorCard course={course} />

          {/* 6. Course Features & Benefits */}
          <CourseFeatures features={course.features} />

          {/* 8. FAQ Accordion */}
          <FAQSection faqs={course.faq} />
        </div>
      </section>

      {/* 10. Call To Action Banner */}
      <CTASection
        title="Enroll Today & Become Job-Ready"
        buttonText="Enroll Now"
      />
    </div>
  );
}
