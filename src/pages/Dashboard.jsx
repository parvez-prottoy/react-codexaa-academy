import { useEffect, useRef, useState } from 'react';
import {
  HiAcademicCap,
  HiArrowRight,
  HiBookOpen,
  HiCheckCircle,
  HiClock,
  HiSparkles,
  HiUser,
} from 'react-icons/hi2';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import SEO from '../components/common/SEO';
import { useAuth } from '../hooks/useAuth';
import { useToast } from '../hooks/useToast';
import { optimizeImage } from '../utils/optimizeImage';

export default function Dashboard() {
  const { user, loading, isAuthenticated, refreshUser } = useAuth();
  const [searchParams] = useSearchParams();
  const toast = useToast();
  const navigate = useNavigate();

  const isPaymentSuccess = searchParams.get('payment') === 'success';
  const [showSuccessBanner] = useState(isPaymentSuccess);
  const hasNotifiedPaymentRef = useRef(false);

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate('/login?callbackUrl=/dashboard', { replace: true });
    }
  }, [loading, isAuthenticated, navigate]);

  useEffect(() => {
    if (isPaymentSuccess && !hasNotifiedPaymentRef.current) {
      hasNotifiedPaymentRef.current = true;
      refreshUser();
      toast.success(
        '🎉 Congratulations! You have successfully enrolled in the course.'
      );
      navigate('/dashboard', { replace: true });
    }
  }, [isPaymentSuccess, refreshUser, toast, navigate]);

  if (loading || !user) {
    return (
      <div className="pt-24 min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="w-10 h-10 border-3 border-blue-200 border-t-[#2470A8] rounded-full animate-spin" />
      </div>
    );
  }

  const enrolledCourses = user.enrolledCourses || [];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <SEO
        title="Student Dashboard | Codexaa Academy"
        description="Access your enrolled courses, syllabus progress, and live student community."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Payment Success Banner */}
        {showSuccessBanner && (
          <div className="p-5 sm:p-6 rounded-3xl bg-linear-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-fadeIn">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
                <HiCheckCircle size={28} className="text-white" />
              </div>
              <div>
                <h2 className="text-lg font-extrabold leading-tight">
                  Payment Verified & Course Enrolled!
                </h2>
                <p className="text-xs sm:text-sm text-emerald-100 mt-0.5">
                  Your SSLCommerz transaction was completed. Your course
                  materials and curriculum are now unlocked.
                </p>
              </div>
            </div>
            <span className="px-4 py-1.5 rounded-full bg-white text-emerald-700 text-xs font-black shadow-xs self-start sm:self-auto">
              ENROLLED
            </span>
          </div>
        )}

        {/* Student Welcome Header Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 mt-12">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-linear-to-tr from-[#2470A8] to-[#5BAFE6] text-white flex items-center justify-center text-2xl font-black shadow-md shadow-blue-200 shrink-0">
              {user.name ? (
                user.name.charAt(0).toUpperCase()
              ) : (
                <HiUser size={28} />
              )}
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Welcome, {user.name}!
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                {user.email} • Track your progress, courses, and certifications.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            <Link
              to="/courses"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-bold transition-colors"
            >
              <HiBookOpen size={16} />
              <span>Explore More Courses</span>
            </Link>
          </div>
        </div>

        {/* Enrolled Courses Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <HiAcademicCap size={22} className="text-[#2470A8]" />
              <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
                My Enrolled Courses ({enrolledCourses.length})
              </h2>
            </div>
          </div>

          {enrolledCourses.length === 0 ? (
            <div className="bg-white rounded-3xl p-10 sm:p-14 border border-slate-200/80 text-center space-y-4 shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#2470A8] flex items-center justify-center mx-auto">
                <HiAcademicCap size={32} />
              </div>
              <div className="max-w-md mx-auto space-y-1">
                <h3 className="text-lg font-bold text-slate-800">
                  You have not enrolled in any courses yet
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Choose from our industry-standard courses and accelerate your
                  engineering career with hands-on projects.
                </p>
              </div>
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-[#5BAFE6] via-[#3695d0] to-[#2470A8] text-white text-sm font-bold shadow-md shadow-blue-200 hover:shadow-lg transition-all"
              >
                <span>Browse All Courses</span>
                <HiArrowRight size={16} />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enrolledCourses.map((course) => {
                const isObject = typeof course === 'object' && course !== null;
                const courseId = isObject ? course._id || course.id : course;
                const title = isObject
                  ? course.title
                  : 'Full-Stack Engineering Program';
                const slug = isObject
                  ? course.slug
                  : 'complete-mern-stack-development-bootcamp';
                const image = isObject ? course.image : null;
                const instructor = isObject
                  ? course.instructor
                  : 'Lead Mentors';
                const duration = isObject ? course.duration : '24 Weeks';
                const category = isObject ? course.category : 'Development';

                return (
                  <div
                    key={courseId}
                    className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col group"
                  >
                    {/* Course Thumbnail */}
                    <div className="relative h-44 bg-slate-100 overflow-hidden">
                      {image ? (
                        <img
                          src={optimizeImage(image)}
                          alt={title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full bg-linear-to-tr from-[#19264F] to-[#2470A8] flex items-center justify-center text-white">
                          <HiAcademicCap size={42} className="opacity-40" />
                        </div>
                      )}
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[11px] font-extrabold text-[#2470A8] uppercase tracking-wider shadow-xs">
                        {category}
                      </span>
                      <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-emerald-500 text-white text-[10px] font-black uppercase tracking-wider shadow-xs flex items-center gap-1">
                        <HiSparkles size={11} />
                        Active
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                          <HiClock size={14} className="text-[#3695d0]" />
                          <span>{duration}</span>
                          <span>•</span>
                          <span>{instructor}</span>
                        </div>
                        <h3 className="text-base font-bold text-slate-900 leading-snug line-clamp-2">
                          {title}
                        </h3>
                      </div>

                      <div className="pt-2 border-t border-slate-100">
                        <Link
                          to={`/course/${slug}`}
                          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-50 text-[#2470A8] hover:bg-[#2470A8] hover:text-white font-bold text-xs transition-colors"
                        >
                          <span>Go to Curriculum & Classes</span>
                          <HiArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
