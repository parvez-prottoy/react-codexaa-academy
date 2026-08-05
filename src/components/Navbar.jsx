import { useCallback, useEffect, useRef, useState } from 'react';
import { HiArrowRight, HiChevronDown } from 'react-icons/hi2';
import { Link, NavLink as RouterNavLink, useLocation } from 'react-router-dom';

import navLogo from '../assets/logo.png';
import { navLinks } from '../data/navigationData';
import DropdownMenu from './DropdownMenu';
import MobileMenu from './MobileMenu';

/* ─── Animated Hamburger Icon ─── */
function HamburgerIcon({ isOpen }) {
  return (
    <div
      className="w-5 h-4 flex flex-col justify-between cursor-pointer"
      aria-hidden="true"
    >
      <span
        className={`block h-0.5 bg-slate-700 rounded-full origin-left transition-all duration-300 ${
          isOpen ? 'rotate-45 w-5' : 'w-5'
        }`}
      />
      <span
        className={`block h-0.5 bg-slate-700 rounded-full transition-all duration-300 ${
          isOpen ? 'opacity-0 w-0' : 'w-4 opacity-100'
        }`}
      />
      <span
        className={`block h-0.5 bg-slate-700 rounded-full origin-left transition-all duration-300 ${
          isOpen ? '-rotate-45 w-5' : 'w-5'
        }`}
      />
    </div>
  );
}

/* ─── Desktop Nav Link ─── */
function DesktopNavItem({ link, isActive, onClick, isDropdownOpen }) {
  if (link.hasDropdown) {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-expanded={isDropdownOpen}
        aria-haspopup="true"
        className={`
          relative group flex items-center gap-1 px-1 py-1 text-sm font-medium
          transition-colors duration-200 select-none cursor-pointer outline-none
          focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:rounded-lg
          ${isActive ? 'text-[#2470A8]' : 'text-slate-600 hover:text-slate-900'}
        `}
      >
        {link.label}
        <HiChevronDown
          size={14}
          className={`mt-0.5 text-slate-400 group-hover:text-slate-600 transition-transform duration-300 ${
            isDropdownOpen ? 'rotate-180 text-[#2470A8]' : ''
          }`}
        />

        {/* Animated underline */}
        <span
          className={`
            absolute -bottom-1 left-0 h-0.5 rounded-full bg-[#2470A8]
            transition-all duration-300
            ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
          `}
        />
      </button>
    );
  }

  return (
    <RouterNavLink
      to={link.href}
      end={link.href === '/'}
      className={({ isActive: isLinkActive }) => `
        relative group flex items-center gap-1 px-1 py-1 text-sm font-medium
        transition-colors duration-200 select-none cursor-pointer outline-none
        focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:rounded-lg
        ${isLinkActive ? 'text-[#2470A8]' : 'text-slate-600 hover:text-slate-900'}
      `}
    >
      {({ isActive: isLinkActive }) => (
        <>
          {link.label}
          <span
            className={`
              absolute -bottom-1 left-0 h-0.5 rounded-full bg-[#2470A8]
              transition-all duration-300
              ${isLinkActive ? 'w-full' : 'w-0 group-hover:w-full'}
            `}
          />
        </>
      )}
    </RouterNavLink>
  );
}

/* ═══════════════════════════════════════
   Main Navbar Component
═══════════════════════════════════════ */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const dropdownTimeoutRef = useRef(null);

  /* ── Scroll listener ── */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── Close the mobile menu when the viewport reaches the desktop breakpoint ── */
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    const handleChange = (e) => {
      if (e.matches) setIsMobileMenuOpen(false);
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  /* ── Clean up the close-delay timer on unmount ── */
  useEffect(() => {
    return () => clearTimeout(dropdownTimeoutRef.current);
  }, []);

  /* ── Dropdown hover handlers with delay ── */
  const handleMouseEnter = useCallback(() => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setIsDropdownOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150);
  }, []);

  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen((prev) => !prev);
  }, []);

  const closeDropdown = useCallback(() => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setIsDropdownOpen(false);
  }, []);

  /* ── Close dropdown automatically on route change ── */
  useEffect(() => {
    closeDropdown();
  }, [location.pathname, closeDropdown]);

  /* ── Mobile: close the drawer (stable identity for a11y hooks) ── */
  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300 ease-out
        ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_24px_-4px_rgba(0,0,0,0.08),0_1px_4px_-2px_rgba(0,0,0,0.04)] border-b border-slate-100/80'
            : 'bg-white/80 backdrop-blur-sm border-b border-transparent'
        }
      `}
    >
      {/* ── Top announcement bar ── */}
      <div className="hidden md:flex items-center justify-center gap-2 bg-linear-to-r from-[#3795D2] via-[#292974] to-[#19264F] py-2 px-4 text-sm text-white font-medium">
        <span className="inline-flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
          Applications open for the September 2026
        </span>
        <span className="text-blue-200">·</span>
        <Link
          to="/contact"
          className="underline underline-offset-2 hover:text-blue-100 transition-colors duration-150 font-semibold"
        >
          Apply Now →
        </Link>
      </div>

      {/* ── Main nav bar ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* ── Logo area ── */}
          <Link
            to="/"
            aria-label="Codexaa Academy — Home"
            className="flex items-center gap-0.5 shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:rounded-lg"
          >
            <div className="relative">
              <img
                src={navLogo}
                alt="Codexaa Academy"
                className="h-10 md:h-13 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                loading="eager"
              />
            </div>
          </Link>

          {/* ── Desktop Navigation ── */}
          <nav
            aria-label="Main navigation"
            className="hidden lg:flex items-center gap-7"
          >
            {navLinks.map((link) => {
              const isLinkActive =
                link.href === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(link.href);

              return link.hasDropdown ? (
                <div
                  key={link.id}
                  className="relative py-3"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <DesktopNavItem
                    link={link}
                    isActive={isLinkActive}
                    onClick={toggleDropdown}
                    isDropdownOpen={isDropdownOpen}
                  />
                  <DropdownMenu
                    isOpen={isDropdownOpen}
                    onClose={closeDropdown}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  />
                </div>
              ) : (
                <DesktopNavItem
                  key={link.id}
                  link={link}
                  isActive={isLinkActive}
                />
              );
            })}
          </nav>

          {/* ── Desktop CTA Area ── */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Enroll CTA */}
            <Link
              to="/contact"
              className="
                group flex items-center gap-2 px-5 py-2.5 rounded-full
                bg-linear-to-r from-[#5BAFE6] via-[#3695d0] to-[#2470A8]
                text-white text-sm font-bold
                shadow-md shadow-blue-200
                hover:shadow-lg hover:shadow-blue-300 hover:-translate-y-0.5
                transition-all duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
              "
            >
              Contact Us
              <HiArrowRight
                size={15}
                className="group-hover:translate-x-0.5 transition-transform duration-200"
              />
            </Link>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl hover:bg-slate-100 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <HamburgerIcon isOpen={isMobileMenuOpen} />
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </header>
  );
}
