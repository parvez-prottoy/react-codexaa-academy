import {
  HiAcademicCap,
  HiArrowTrendingUp,
  HiBriefcase,
  HiChatBubbleLeftRight,
  HiFolderOpen,
  HiSparkles,
  HiUserGroup,
  HiUsers,
  HiVideoCamera,
} from 'react-icons/hi2';

import Slide1Illustration from '../components/hero/illustrations/Slide1Illustration';
import Slide2Illustration from '../components/hero/illustrations/Slide2Illustration';
import Slide3Illustration from '../components/hero/illustrations/Slide3Illustration';

export const slides = [
  /* ──────────────────────────────────────────
     SLIDE 1 — Build Your Career
  ────────────────────────────────────────── */
  {
    id: 1,
    badge: '🚀  Transform Your Career in Tech',
    title: 'Build Your Career',
    titleAccent: 'With Industry Experts',
    description:
      "Master in-demand skills through project-based learning, live classes, and career-focused mentorship — designed to prepare you for today's technology industry.",
    primaryCTA: { label: 'Explore Courses', href: '/courses' },
    secondaryCTA: { label: 'Watch Intro', href: '/intro', isVideo: true },
    stats: [
      { value: '10K+', label: 'Graduates' },
      { value: '95%', label: 'Job Placement' },
      { value: '4.9★', label: 'Student Rating' },
    ],
    floatingCards: [
      {
        icon: HiUsers,
        label: '10,000+ Students',
        sublabel: 'Active Learners',
        colorClass: 'bg-blue-600',
        bgClass: 'bg-blue-50',
        textClass: 'text-blue-700',
        animClass: 'animate-float',
        posClass: '-top-6 right-0',
      },
      {
        icon: HiArrowTrendingUp,
        label: '95% Job Placement',
        sublabel: 'Industry Success Rate',
        colorClass: 'bg-emerald-500',
        bgClass: 'bg-emerald-50',
        textClass: 'text-emerald-700',
        animClass: 'animate-float-alt animate-float-d2',
        posClass: '-bottom-6 left-0 lg:-left-4',
      },
      {
        icon: HiVideoCamera,
        label: 'Live Mentorship',
        sublabel: 'Every Weekend',
        colorClass: 'bg-violet-600',
        bgClass: 'bg-violet-50',
        textClass: 'text-violet-700',
        animClass: 'animate-float animate-float-d1',
        posClass: 'bottom-12 right-0',
      },
    ],
    Illustration: Slide1Illustration,
    /* Per-slide background accent color (for blobs and gradient) */
    accentHex: '#1d4ed8',
    blobColor1: 'bg-blue-200',
    blobColor2: 'bg-cyan-200',
    titleGradient: 'from-blue-700 via-blue-600 to-indigo-500',
  },

  /* ──────────────────────────────────────────
     SLIDE 2 — Real Skills. Real Projects.
  ────────────────────────────────────────── */
  {
    id: 2,
    badge: '🛠  Project-Based Learning',
    title: 'Learn Real Skills.',
    titleAccent: 'Build Real Projects.',
    description:
      'Work on real-world projects guided by experienced industry mentors and create a standout portfolio that puts you ahead in every interview.',
    primaryCTA: { label: 'View Programs', href: '/programs' },
    secondaryCTA: {
      label: 'See Student Projects',
      href: '/projects',
      isVideo: false,
    },
    stats: [
      { value: '200+', label: 'Projects Built' },
      { value: '50+', label: 'Industry Mentors' },
      { value: '100+', label: 'Hiring Partners' },
    ],
    floatingCards: [
      {
        icon: HiFolderOpen,
        label: 'Project Based',
        sublabel: 'Learn by Doing',
        colorClass: 'bg-indigo-600',
        bgClass: 'bg-indigo-50',
        textClass: 'text-indigo-700',
        animClass: 'animate-float',
        posClass: '-top-6 right-0',
      },
      {
        icon: HiUserGroup,
        label: 'Industry Mentors',
        sublabel: '50+ Experts',
        colorClass: 'bg-rose-500',
        bgClass: 'bg-rose-50',
        textClass: 'text-rose-700',
        animClass: 'animate-float-alt animate-float-d2',
        posClass: '-bottom-6 left-0 lg:-left-4',
      },
      {
        icon: HiAcademicCap,
        label: 'Certificate Included',
        sublabel: 'Industry Recognised',
        colorClass: 'bg-amber-500',
        bgClass: 'bg-amber-50',
        textClass: 'text-amber-700',
        animClass: 'animate-float animate-float-d1',
        posClass: 'bottom-12 right-0',
      },
    ],
    Illustration: Slide2Illustration,
    accentHex: '#4f46e5',
    blobColor1: 'bg-indigo-200',
    blobColor2: 'bg-purple-200',
    titleGradient: 'from-indigo-700 via-violet-600 to-purple-500',
  },

  /* ──────────────────────────────────────────
     SLIDE 3 — Job Ready With Modern Tech
  ────────────────────────────────────────── */
  {
    id: 3,
    badge: '💼  Industry-Standard Curriculum',
    title: 'Become Job Ready',
    titleAccent: 'With Modern Technology',
    description:
      'Learn Web Dev, Mobile Apps, AI, Cloud, DevOps, Cyber Security and more — with a curriculum shaped by what real employers demand today.',
    primaryCTA: { label: 'Start Learning', href: '/contact' },
    secondaryCTA: {
      label: 'Download Brochure',
      href: '/brochure',
      isVideo: false,
    },
    stats: [
      { value: '8+', label: 'Tech Tracks' },
      { value: '300+', label: 'Hours of Content' },
      { value: '24/7', label: 'Community Support' },
    ],
    floatingCards: [
      {
        icon: HiSparkles,
        label: 'Career Support',
        sublabel: 'Resume & Interviews',
        colorClass: 'bg-sky-600',
        bgClass: 'bg-sky-50',
        textClass: 'text-sky-700',
        animClass: 'animate-float',
        posClass: '-top-6 right-0',
      },
      {
        icon: HiBriefcase,
        label: 'Internship Opportunity',
        sublabel: 'Top Companies',
        colorClass: 'bg-teal-600',
        bgClass: 'bg-teal-50',
        textClass: 'text-teal-700',
        animClass: 'animate-float-alt animate-float-d2',
        posClass: '-bottom-6 left-0 lg:-left-4',
      },
      {
        icon: HiChatBubbleLeftRight,
        label: 'Lifetime Community',
        sublabel: 'Alumni Network',
        colorClass: 'bg-orange-500',
        bgClass: 'bg-orange-50',
        textClass: 'text-orange-700',
        animClass: 'animate-float animate-float-d1',
        posClass: 'bottom-12 right-0 lg:-right-4',
      },
    ],
    Illustration: Slide3Illustration,
    accentHex: '#0891b2',
    blobColor1: 'bg-cyan-200',
    blobColor2: 'bg-sky-200',
    titleGradient: 'from-cyan-600 via-sky-600 to-blue-600',
  },
];
