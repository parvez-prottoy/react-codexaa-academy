import { useRef, useState } from 'react';
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa6';
import {
  HiAcademicCap,
  HiArrowRight,
  HiBookOpen,
  HiChevronDown,
  HiChevronRight,
  HiCodeBracket,
  HiCpuChip,
  HiHome,
  HiInformationCircle,
  HiNewspaper,
  HiPhone,
  HiServer,
  HiTrophy,
  HiXMark,
} from 'react-icons/hi2';
import { Link, NavLink as RouterNavLink } from 'react-router-dom';

import navLogo from '../assets/logo.png';
import useFocusTrap from '../hooks/useFocusTrap';
import useLockBodyScroll from '../hooks/useLockBodyScroll';

/* Social links list */
const socialLinks = [
  { label: 'Facebook', href: 'https://facebook.com', Icon: FaFacebookF },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: FaLinkedinIn },
  { label: 'YouTube', href: 'https://youtube.com', Icon: FaYoutube },
  { label: 'GitHub', href: 'https://github.com', Icon: FaGithub },
  { label: 'Instagram', href: 'https://instagram.com', Icon: FaInstagram },
];

/* Course items inside accordion */
const coursesList = [
  {
    id: 'fullstack',
    title: 'Full Stack Development',
    slug: 'complete-mern-stack-development-bootcamp',
    icon: HiCodeBracket,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    id: 'backend',
    title: 'Backend Development',
    slug: 'backend-development-with-nodejs',
    icon: HiServer,
    color: 'text-violet-600',
    bg: 'bg-violet-50',
  },
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    slug: 'ai-machine-learning-essentials',
    icon: HiCpuChip,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
];

/* Main nav items definition */
const mobileNavItems = [
  { id: 'home', label: 'Home', href: '/', icon: HiHome },
  { id: 'about', label: 'About', href: '/about', icon: HiInformationCircle },
  {
    id: 'courses',
    label: 'Courses',
    href: '/courses',
    icon: HiAcademicCap,
    isAccordion: true,
  },
  { id: 'news', label: 'News', href: '/news', icon: HiNewspaper },
  {
    id: 'success-stories',
    label: 'Success Stories',
    href: '/success-stories',
    icon: HiTrophy,
  },
  { id: 'blog', label: 'Blog', href: '/blog', icon: HiBookOpen },
  { id: 'contact', label: 'Contact', href: '/contact', icon: HiPhone },
];

export default function MobileMenu({ isOpen, onClose }) {
  const drawerRef = useRef(null);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  useLockBodyScroll(isOpen);
  useFocusTrap(isOpen, drawerRef, onClose);

  return (
    <div
      className={`fixed inset-0 z-50 ${isOpen ? '' : 'pointer-events-none'}`}
      inert={!isOpen}
    >
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`
          absolute inset-0 bg-slate-900/40 backdrop-blur-md
          transition-opacity duration-300
          ${isOpen ? 'opacity-100' : 'opacity-0'}
        `}
      />

      {/* Full-Screen Mobile Drawer (`w-full h-screen inset-0 fixed`) */}
      <aside
        ref={drawerRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`
          fixed inset-0 w-full h-screen
          bg-white flex flex-col justify-between z-50
          transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
          will-change-transform
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Header Area */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 shrink-0">
          <Link to="/" onClick={onClose} className="flex items-center gap-3">
            <img
              src={navLogo}
              alt="Codexaa Academy"
              className="h-10 md:h-13 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              loading="eager"
            />
          </Link>

          {/* Premium Close (X) Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="
              group flex items-center justify-center w-12 h-12 min-w-[48px] min-h-[48px] rounded-full
              bg-slate-50 hover:bg-slate-100 active:scale-95
              text-slate-600 transition-all duration-200 cursor-pointer
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
            "
          >
            <HiXMark
              size={22}
              className="group-hover:rotate-90 transition-transform duration-300 text-slate-700"
            />
          </button>
        </div>

        {/* Navigation Content */}
        <nav
          aria-label="Mobile navigation"
          className="flex-1 overflow-y-auto px-4 py-4 space-y-1.5 scrollbar-none"
        >
          <p className="px-3 mb-2 text-[11px] font-extrabold uppercase tracking-widest text-slate-400">
            Navigation Tracks
          </p>

          {mobileNavItems.map((item) => {
            const Icon = item.icon;

            if (item.isAccordion) {
              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-slate-100 bg-slate-50/50 transition-colors duration-200 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setIsCoursesOpen((prev) => !prev)}
                    aria-expanded={isCoursesOpen}
                    aria-controls="courses-mobile-accordion"
                    className="
                      w-full flex items-center justify-between gap-3 px-4 min-h-[50px] py-3
                      rounded-2xl text-sm font-bold text-left text-slate-800 hover:bg-slate-100/60
                      transition-all duration-200 cursor-pointer
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                    "
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 ${
                          isCoursesOpen
                            ? 'bg-[#2470A8] text-white'
                            : 'bg-white text-slate-600 border border-slate-200/60'
                        }`}
                      >
                        <Icon size={18} />
                      </span>
                      <span>{item.label}</span>
                    </span>
                    <HiChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        isCoursesOpen
                          ? 'rotate-180 text-[#2470A8]'
                          : 'text-slate-400'
                      }`}
                    />
                  </button>

                  {/* Courses Accordion Content */}
                  <div
                    id="courses-mobile-accordion"
                    className={`
                      grid transition-[grid-template-rows] duration-300 ease-out
                      ${isCoursesOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}
                    `}
                  >
                    <div className="overflow-hidden" inert={!isCoursesOpen}>
                      <div className="p-2 pt-0 space-y-1">
                        <div className="grid grid-cols-1 gap-1.5 bg-white rounded-xl p-2 border border-slate-100">
                          {coursesList.map((course) => {
                            const CourseIcon = course.icon;
                            return (
                              <Link
                                key={course.id}
                                to={`/course/${course.slug}`}
                                onClick={onClose}
                                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 transition-colors duration-200 group"
                              >
                                <div className="flex items-center gap-2.5 min-w-0">
                                  <div
                                    className={`w-7 h-7 rounded-md ${course.bg} flex items-center justify-center shrink-0`}
                                  >
                                    <CourseIcon
                                      className={course.color}
                                      size={15}
                                    />
                                  </div>
                                  <span className="text-xs font-bold text-slate-700 group-hover:text-[#2470A8] truncate">
                                    {course.title}
                                  </span>
                                </div>
                                <HiChevronRight
                                  size={14}
                                  className="text-slate-400 group-hover:translate-x-0.5 transition-transform duration-200 shrink-0"
                                />
                              </Link>
                            );
                          })}

                          {/* View All Courses CTA inside Accordion */}
                          <Link
                            to="/courses"
                            onClick={onClose}
                            className="flex items-center justify-center gap-1.5 w-full py-2.5 px-3 mt-1 rounded-lg bg-blue-50 text-[#2470A8] text-xs font-extrabold hover:bg-blue-100 transition-colors duration-200 border border-blue-100"
                          >
                            <span>📚 View All Courses</span>
                            <HiArrowRight size={13} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <RouterNavLink
                key={item.id}
                to={item.href}
                end={item.href === '/'}
                onClick={onClose}
                className={({ isActive }) => `
                  flex items-center justify-between min-h-[50px] px-4 py-3 rounded-2xl text-sm font-semibold
                  transition-all duration-200 cursor-pointer
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                  ${
                    isActive
                      ? 'bg-blue-50 text-[#2470A8] font-extrabold border border-blue-200/70 shadow-xs'
                      : 'text-slate-800 hover:bg-slate-100/70 active:bg-slate-200/50 border border-transparent'
                  }
                `}
              >
                {({ isActive }) => (
                  <>
                    <span className="flex items-center gap-3">
                      <span
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 ${
                          isActive
                            ? 'bg-[#2470A8] text-white'
                            : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        <Icon size={18} />
                      </span>
                      <span>{item.label}</span>
                    </span>
                    <HiChevronRight
                      size={16}
                      className={isActive ? 'text-[#2470A8]' : 'text-slate-400'}
                    />
                  </>
                )}
              </RouterNavLink>
            );
          })}
        </nav>

        {/* Sticky Bottom Actions & Social Links */}
        <div className="px-5 py-4 border-t border-slate-100 space-y-3 bg-slate-50/80 backdrop-blur-md shrink-0">
          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2.5">
            <Link
              to="/contact"
              onClick={onClose}
              className="
                flex items-center justify-center gap-1.5 min-h-[46px] py-2.5 px-3 rounded-xl
                bg-linear-to-r from-[#5BAFE6] via-[#3695d0] to-[#2470A8]
                text-white text-xs sm:text-sm font-bold
                shadow-md shadow-blue-200 hover:shadow-lg
                transition-all duration-200 active:scale-98
              "
            >
              <span>Enroll Now</span>
              <HiArrowRight size={14} />
            </Link>

            <Link
              to="/contact"
              onClick={onClose}
              className="
                flex items-center justify-center gap-1.5 min-h-[46px] py-2.5 px-3 rounded-xl
                border border-slate-200 bg-white text-xs sm:text-sm font-bold text-slate-700
                hover:bg-slate-50 hover:border-slate-300 active:scale-98
                transition-all duration-200
              "
            >
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Circular Social Links */}
          <div className="flex items-center justify-center gap-3 pt-1">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="
                  flex items-center justify-center w-10 h-10 rounded-full
                  bg-white border border-slate-200/80 text-slate-600
                  hover:text-[#2470A8] hover:border-blue-300 hover:bg-blue-50 hover:scale-110
                  active:scale-95 transition-all duration-200 shadow-xs
                "
              >
                <Icon size={15} />
              </a>
            ))}
          </div>

          <p className="text-center text-[11px] text-slate-400 font-medium">
            Next cohort begins{' '}
            <span className="font-bold text-[#2470A8]">September 2026</span>
          </p>
        </div>
      </aside>
    </div>
  );
}
