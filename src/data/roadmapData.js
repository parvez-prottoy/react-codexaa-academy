import {
  HiMapPin,
  HiAcademicCap,
  HiCommandLine,
  HiTrophy,
  HiBriefcase,
} from "react-icons/hi2";

/* ─── Roadmap Step Data ─── */
export const roadmapSteps = [
  {
    id: 1,
    stepNumber: "Step 1",
    title: "Choose Your Career Path",
    description:
      "Select from Web Dev, AI, Cloud, or Mobile App tracks with 1-on-1 counseling from industry mentors.",
    duration: "Week 1",
    Icon: HiMapPin,
    iconColor: "#3695d0",
    iconBg: "#f0f9ff",
    borderColor: "#bae6fd",
    gradient: "from-[#3695d0] to-[#1e6fa0]",
  },
  {
    id: 2,
    stepNumber: "Step 2",
    title: "Master Industry Skills",
    description:
      "Learn with live interactive classes, assignments, and direct feedback from senior software engineers.",
    duration: "Weeks 2–12",
    Icon: HiAcademicCap,
    iconColor: "#7c3aed",
    iconBg: "#f5f3ff",
    borderColor: "#ddd6fe",
    gradient: "from-purple-600 to-indigo-600",
  },
  {
    id: 3,
    stepNumber: "Step 3",
    title: "Build Real Projects",
    description:
      "Develop 10+ production-ready portfolio projects following modern GitHub, CI/CD, and Agile practices.",
    duration: "Weeks 13–20",
    Icon: HiCommandLine,
    iconColor: "#059669",
    iconBg: "#ecfdf5",
    borderColor: "#a7f3d0",
    gradient: "from-emerald-600 to-teal-600",
  },
  {
    id: 4,
    stepNumber: "Step 4",
    title: "Get Certified",
    description:
      "Earn an ISO-standard, industry-recognized Codexaa Academy Certificate verifying your technical competence.",
    duration: "Week 21",
    Icon: HiTrophy,
    iconColor: "#d97706",
    iconBg: "#fffbeb",
    borderColor: "#fde68a",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    id: 5,
    stepNumber: "Step 5",
    title: "Career Support & Job Placement",
    description:
      "Access mock technical interviews, resume building, and direct interview calls from 30+ hiring partners.",
    duration: "Week 22+",
    Icon: HiBriefcase,
    iconColor: "#e11d48",
    iconBg: "#fff1f2",
    borderColor: "#fecdd3",
    gradient: "from-rose-600 to-pink-600",
  },
];

/* ─── Floating Badges around Illustration ─── */
export const floatingBadges = [
  {
    id: "internship",
    icon: "💼",
    title: "Internship",
    subtext: "Top IT Companies",
    posClass: "-top-4 -right-2 sm:-right-6",
    animClass: "animate-float",
    color: "#3695d0",
    bg: "#f0f9ff",
  },
  {
    id: "certificate",
    icon: "🏆",
    title: "Certificate",
    subtext: "ISO Recognized",
    posClass: "-top-2 -left-2 sm:-left-6",
    animClass: "animate-float-alt animate-float-d2",
    color: "#d97706",
    bg: "#fffbeb",
  },
  {
    id: "mentorship",
    icon: "🤝",
    title: "Mentorship",
    subtext: "1-on-1 Guidance",
    posClass: "top-1/3 -left-4 sm:-left-8",
    animClass: "animate-float animate-float-d1",
    color: "#7c3aed",
    bg: "#f5f3ff",
  },
  {
    id: "career",
    icon: "🎯",
    title: "Career Support",
    subtext: "95% Placement",
    posClass: "bottom-1/4 -right-4 sm:-right-8",
    animClass: "animate-float-alt animate-float-d3",
    color: "#e11d48",
    bg: "#fff1f2",
  },
  {
    id: "projects",
    icon: "💻",
    title: "Live Projects",
    subtext: "10+ Portfolio Apps",
    posClass: "-bottom-4 left-4 sm:left-12",
    animClass: "animate-float animate-float-d2",
    color: "#059669",
    bg: "#ecfdf5",
  },
];

/* ─── Student Statistics ─── */
export const roadmapStats = [
  { value: "450+", label: "Graduates Placed" },
  { value: "95%", label: "Success Rate" },
  { value: "22 Wks", label: "Avg Duration" },
];
