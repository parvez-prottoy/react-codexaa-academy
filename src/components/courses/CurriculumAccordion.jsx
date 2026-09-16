import { Lock, Play, Unlock } from 'lucide-react';
import { useState } from 'react';
import { HiBookOpen, HiChevronDown, HiClock } from 'react-icons/hi2';
import { useAuth } from '../../hooks/useAuth';
import { useToast } from '../../hooks/useToast';

export default function CurriculumAccordion({
  curriculum = [],
  isEnrolled,
  isUnlocked,
  hasPurchased,
  courseId,
  onLessonClick,
}) {
  const { user } = useAuth();
  const toast = useToast();
  const [openIndex, setOpenIndex] = useState(0);

  // Determine enrollment / purchase access:
  // 1. Explicit boolean prop (isUnlocked / isEnrolled / hasPurchased)
  // 2. Or derived from logged-in user's enrolledCourses list
  const hasAccess = Boolean(
    isUnlocked ??
      isEnrolled ??
      hasPurchased ??
      (courseId &&
        user?.enrolledCourses?.some((c) => {
          const id = typeof c === 'object' && c !== null ? c._id || c.id : c;
          return id === courseId;
        }))
  );

  const toggleModule = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const handleLessonClick = (topic, moduleItem, topicIdx) => {
    if (hasAccess) {
      if (typeof onLessonClick === 'function') {
        onLessonClick(topic, moduleItem, topicIdx);
      } else {
        toast.success(`Opening lesson: "${topic}"`);
      }
    } else {
      toast.info(
        '🔒 This lesson is locked. Please enroll in the course to unlock full curriculum and video access.'
      );
    }
  };

  if (!curriculum || curriculum.length === 0) return null;

  return (
    <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <HiBookOpen size={22} className="text-[#3695d0]" />
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Course Curriculum
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
          {hasAccess && (
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 flex items-center gap-1.5 shadow-2xs">
              <Unlock size={12} className="text-emerald-600" />
              Full Access Unlocked
            </span>
          )}
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-[#2470A8] border border-blue-200/80">
            {curriculum.length} Modules • Hands-on Project Focused
          </span>
        </div>
      </div>

      <div className="space-y-3">
        {curriculum.map((module, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={module.id || idx}
              className="rounded-2xl border border-slate-200/80 overflow-hidden transition-all duration-200"
            >
              {/* Module Header Button */}
              <button
                type="button"
                onClick={() => toggleModule(idx)}
                className={`w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left transition-colors cursor-pointer select-none ${
                  isOpen ? 'bg-blue-50/60' : 'bg-white hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-extrabold shrink-0 ${
                      isOpen
                        ? 'bg-[#2470A8] text-white'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {module.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mt-0.5">
                      <HiClock size={13} className="text-[#3695d0]" />
                      <span>{module.duration}</span>
                      <span>•</span>
                      <span>{module.topics?.length || 0} Lessons</span>
                    </div>
                  </div>
                </div>

                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-slate-400 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-[#2470A8] bg-blue-100/60' : ''
                  }`}
                >
                  <HiChevronDown size={18} />
                </div>
              </button>

              {/* Module Topics List */}
              {isOpen && module.topics && (
                <div className="p-4 sm:p-5 bg-white border-t border-slate-100 space-y-2.5 animate-fadeIn">
                  {module.topics.map((topic, topicIdx) => (
                    <div
                      key={topicIdx}
                      role="button"
                      tabIndex={0}
                      onClick={() => handleLessonClick(topic, module, topicIdx)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleLessonClick(topic, module, topicIdx);
                        }
                      }}
                      className={`flex items-center justify-between gap-3 p-2.5 sm:p-3 rounded-xl border transition-all select-none ${
                        hasAccess
                          ? 'bg-slate-50/70 hover:bg-emerald-50/40 border-slate-100 hover:border-emerald-200/80 cursor-pointer group shadow-2xs hover:shadow-xs'
                          : 'bg-slate-50/40 hover:bg-slate-100/60 border-transparent hover:border-slate-200/60 cursor-not-allowed group opacity-90'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                            hasAccess
                              ? 'bg-emerald-100/70 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white'
                              : 'bg-slate-100 text-slate-400'
                          }`}
                        >
                          <Play
                            size={13}
                            className={`ml-0.5 ${
                              hasAccess
                                ? 'fill-current'
                                : 'fill-slate-400/20 text-slate-400'
                            }`}
                          />
                        </div>
                        <span
                          className={`text-xs sm:text-sm font-medium transition-colors line-clamp-1 ${
                            hasAccess
                              ? 'text-slate-800 group-hover:text-slate-950 font-semibold'
                              : 'text-slate-600 group-hover:text-slate-800'
                          }`}
                        >
                          {topic}
                        </span>
                      </div>

                      <div className="flex items-center shrink-0">
                        {hasAccess ? (
                          <div
                            className="w-7 h-7 rounded-lg flex items-center justify-center text-emerald-600 bg-emerald-50 border border-emerald-200/80 group-hover:bg-emerald-100 transition-colors"
                            aria-label="Unlocked lesson"
                            title="Lesson unlocked - Ready to play"
                          >
                            <Unlock size={14} />
                          </div>
                        ) : (
                          <div
                            className="w-7 h-7 rounded-lg flex items-center justify-center text-rose-500 bg-rose-50/80 border border-rose-200/60 transition-colors"
                            aria-label="Locked lesson"
                            title="Locked lesson - Enrollment required"
                          >
                            <Lock size={14} />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
