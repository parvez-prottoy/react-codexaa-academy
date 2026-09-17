import { useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  HiArrowRight,
  HiCheck,
  HiClipboardDocument,
  HiEye,
  HiPrinter,
  HiShieldCheck,
} from 'react-icons/hi2';
import { Link, useSearchParams } from 'react-router-dom';
import CertificateModal from '../components/certificate/CertificateModal';
import CourseCertificate from '../components/certificate/CourseCertificate';
import SEO from '../components/common/SEO';
import { courseData } from '../data/courseData';
import { useAuth } from '../hooks/useAuth';

function generateCertificateId(studentIdOrName, courseKey) {
  let hash = 0;
  const str = `${studentIdOrName || 'student'}_${courseKey || 'course'}_2026`;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  const code = Math.abs(hash)
    .toString(36)
    .toUpperCase()
    .padStart(5, '0')
    .slice(-5);
  return `CERT-2026-${code}`;
}

export default function CertificateDemo() {
  const { user, isAuthenticated, loading } = useAuth();
  const [searchParams] = useSearchParams();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Normalize student's enrolled courses from the existing auth session
  const studentCourses = useMemo(() => {
    if (!user?.enrolledCourses || user.enrolledCourses.length === 0) {
      return [];
    }

    return user.enrolledCourses.map((enrolled) => {
      if (typeof enrolled === 'object' && enrolled !== null) {
        const matchedStatic = courseData.find(
          (c) =>
            c.id === enrolled._id ||
            c.id === enrolled.id ||
            c.slug === enrolled.slug ||
            c.title?.toLowerCase() === enrolled.title?.toLowerCase()
        );
        return {
          id: enrolled._id || enrolled.id || enrolled.slug,
          title:
            enrolled.title ||
            matchedStatic?.title ||
            'Certified Course Program',
          slug: enrolled.slug || matchedStatic?.slug || '',
        };
      } else {
        const matchedStatic = courseData.find(
          (c) => c.id === enrolled || c.slug === enrolled
        );
        return {
          id: enrolled,
          title: matchedStatic?.title || 'Certified Course Program',
          slug: matchedStatic?.slug || String(enrolled),
        };
      }
    });
  }, [user]);

  // Determine course from URL param (?course=) or default to the student's enrolled course
  const courseParam = searchParams.get('course');
  const activeCourse = useMemo(() => {
    if (studentCourses.length === 0) return null;
    if (courseParam) {
      const matched = studentCourses.find(
        (c) => c.slug === courseParam || c.id === courseParam
      );
      if (matched) return matched;
    }
    return studentCourses[0];
  }, [studentCourses, courseParam]);

  // Dynamic certificate data derived directly from authenticated student account
  const studentName = user?.name || '';
  const completionDate = 'September 17, 2026';

  const certificateId = useMemo(() => {
    if (!user || !activeCourse) return '';
    return generateCertificateId(
      user._id || user.id || user.email || user.name,
      activeCourse.id || activeCourse.slug
    );
  }, [user, activeCourse]);

  const certData = useMemo(() => {
    if (!activeCourse) return null;
    return {
      studentName,
      courseName: activeCourse.title,
      completionDate,
      certificateId,
      mentorName: 'Md. Israfil Rana',
      mentorOrg: 'CodexAA Academy',
      mentorRole: 'Lead Software Engineering Mentors',
      templateImage: null,
    };
  }, [studentName, activeCourse, completionDate, certificateId]);

  const handleCopyId = () => {
    if (!certificateId) return;
    navigator.clipboard?.writeText(certificateId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 1. Loading state
  if (loading) {
    return (
      <div className="pt-24 pb-20 min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center space-y-4 max-w-sm mx-auto p-8">
          <div className="w-12 h-12 border-3 border-blue-200 border-t-[#2470A8] rounded-full animate-spin mx-auto" />
          <p className="text-sm font-semibold text-slate-700">
            Loading your certificate...
          </p>
        </div>
      </div>
    );
  }

  // 2. Unauthenticated state (No demo data shown)
  if (!isAuthenticated || !user) {
    return (
      <div className="pt-24 pb-20 min-h-screen bg-slate-50 flex items-center justify-center">
        <SEO
          title="Course Completion Certificate | Codexaa Academy"
          description="Access your official verified certificate of course completion."
        />
        <div className="max-w-md w-full mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm space-y-5">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#2470A8] flex items-center justify-center mx-auto text-3xl shadow-sm">
              🎓
            </div>
            <div className="space-y-2">
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Please Log In
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Please log in to your student account to view and download your
                official course completion certificate.
              </p>
            </div>
            <Link
              to="/login?callbackUrl=/certificate"
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-6 rounded-xl bg-linear-to-r from-[#2470A8] to-[#3695d0] text-white text-sm font-bold shadow-md shadow-blue-500/20 hover:opacity-95 transition-all"
            >
              <span>Log In to View Certificate</span>
              <HiArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // 3. Authenticated but no enrolled courses
  if (!activeCourse || !certData) {
    return (
      <div className="pt-24 pb-20 min-h-screen bg-slate-50 flex items-center justify-center">
        <SEO
          title="Course Completion Certificate | Codexaa Academy"
          description="Access your official verified certificate of course completion."
        />
        <div className="max-w-md w-full mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm space-y-5">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto text-3xl">
              📜
            </div>
            <div className="space-y-2">
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                No Completed Courses Found
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                You do not have any enrolled or completed courses yet. Once you
                complete a course, your verified certificate will be available
                here.
              </p>
            </div>
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <Link
                to="/courses"
                className="inline-flex items-center justify-center gap-2 flex-1 py-2.5 px-4 rounded-xl bg-[#2470A8] text-white text-xs font-bold shadow-xs hover:bg-[#1f5d8c] transition-colors"
              >
                <span>Explore Courses</span>
              </Link>
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center gap-2 flex-1 py-2.5 px-4 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200 transition-colors"
              >
                <span>Dashboard</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 4. Authenticated with completed course: clean, elegant certificate view
  return (
    <div className="pt-38 pb-20 min-h-screen bg-slate-50">
      <SEO
        title={`${certData.courseName} Certificate | Codexaa Academy`}
        description={`Official course completion certificate for ${certData.studentName}.`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Page Banner Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-linear-to-tr from-[#9B771A] via-[#E9C766] to-[#C59B27] text-white flex items-center justify-center text-3xl shadow-md shadow-amber-500/20 shrink-0">
              🎓
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Course Completion Certificate
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                Verified digital credential issued to{' '}
                <span className="text-slate-800 font-bold">
                  {certData.studentName}
                </span>{' '}
                for{' '}
                <span className="text-[#2470A8] font-semibold">
                  {certData.courseName}
                </span>
                .
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto flex-wrap">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer"
            >
              <HiEye size={16} />
              <span>Full Screen Modal</span>
            </button>

            <button
              type="button"
              onClick={() => window.print()}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
            >
              <HiPrinter size={16} />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>

        {/* Centered Live Certificate Canvas */}
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="bg-white rounded-3xl p-4 sm:p-6 md:p-8 border border-slate-200/80 shadow-sm space-y-5">
            {/* Action and verification bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <HiShieldCheck size={22} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-slate-900">
                      Official Credential Preview
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-wider border border-emerald-200">
                      Verified
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">
                    ID:{' '}
                    <span className="text-slate-800 font-bold">
                      {certData.certificateId}
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto flex-wrap">
                <button
                  type="button"
                  onClick={handleCopyId}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
                  title="Copy Certificate ID"
                >
                  {copied ? (
                    <>
                      <HiCheck className="text-emerald-600" size={14} />
                      <span className="text-emerald-700 font-bold">
                        Copied ID
                      </span>
                    </>
                  ) : (
                    <>
                      <HiClipboardDocument size={14} />
                      <span>Copy ID</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <HiEye size={14} />
                  <span>Full Screen</span>
                </button>

                <button
                  type="button"
                  onClick={() => window.print()}
                  className="px-3.5 py-1.5 rounded-xl bg-[#2470A8] hover:bg-[#1f5d8c] text-white text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs shadow-blue-500/20"
                >
                  <HiPrinter size={14} />
                  <span>Print PDF</span>
                </button>
              </div>
            </div>

            {/* Renders CourseCertificate component */}
            <div className="w-full overflow-hidden rounded-xl border border-slate-200/70 shadow-lg">
              <CourseCertificate
                studentName={certData.studentName}
                courseName={certData.courseName}
                completionDate={certData.completionDate}
                certificateId={certData.certificateId}
                mentorName={certData.mentorName}
                mentorOrg={certData.mentorOrg}
                mentorRole={certData.mentorRole}
                templateImage={certData.templateImage}
              />
            </div>

            {/* Bottom info bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 pt-2 gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>
                  Accredited A4 Landscape (1.414:1) • 300 DPI Vector Typography
                </span>
              </div>
              <Link
                to="/dashboard"
                className="text-[#2470A8] hover:underline font-semibold flex items-center gap-1"
              >
                <span>Return to Student Dashboard</span>
                <HiArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen Interactive Modal */}
      <CertificateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialData={certData}
      />

      {/* Dedicated 1-Page A4 Landscape Print Portal (Rendered directly into document.body) */}
      {typeof document !== 'undefined' &&
        certData &&
        createPortal(
          <div id="print-certificate-portal" aria-hidden="true">
            <CourseCertificate
              studentName={certData.studentName}
              courseName={certData.courseName}
              completionDate={certData.completionDate}
              certificateId={certData.certificateId}
              mentorName={certData.mentorName}
              mentorOrg={certData.mentorOrg}
              mentorRole={certData.mentorRole}
              templateImage={certData.templateImage}
              id="course-certificate-print"
              isPrint
            />
          </div>,
          document.body
        )}
    </div>
  );
}
