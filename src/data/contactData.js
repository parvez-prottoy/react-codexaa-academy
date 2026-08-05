import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaClock,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { MdApartment } from "react-icons/md";

/* ─── Contact Info Items ─── */
export const contactInfoItems = [
  {
    id: "academy",
    icon: MdApartment,
    label: "Academy",
    value: "Codexaa Limited",
    href: null,
    color: "#3695d0",
    bgColor: "#eff8ff",
    borderColor: "#bfdbfe",
  },
  {
    id: "address",
    icon: FaMapMarkerAlt,
    label: "Address",
    value:
      "Lift-6, White House, TA-39/1, Gulshan-Badda Link Road, Gulshan, Dhaka, Bangladesh",
    href: "https://www.google.com/maps/search/Lift-6%2C%20White%20House%2C%20TA-39%2F1%2C%20Gulshan-Badda%20Link%20Road%2C%20Gulshan%2C%20Dhaka%2C%20Bangladesh",
    color: "#10b981",
    bgColor: "#f0fdf4",
    borderColor: "#bbf7d0",
  },
  {
    id: "email",
    icon: FaEnvelope,
    label: "Email",
    value: "info@codexaa.com",
    href: "mailto:info@codexaa.com",
    color: "#8b5cf6",
    bgColor: "#f5f3ff",
    borderColor: "#ddd6fe",
  },
  {
    id: "phone",
    icon: FaPhone,
    label: "Phone",
    value: "+880 1901-516270",
    href: "tel:+8801901516270",
    color: "#f59e0b",
    bgColor: "#fffbeb",
    borderColor: "#fde68a",
  },
  {
    id: "website",
    icon: FaGlobe,
    label: "Website",
    value: "www.codexaa.com",
    href: "https://www.codexaa.com/",
    color: "#3695d0",
    bgColor: "#eff8ff",
    borderColor: "#bfdbfe",
  },
  {
    id: "hours",
    icon: FaClock,
    label: "Office Hours",
    value: "Sun – Thu: 10:00 AM – 6:00 PM",
    href: null,
    color: "#ec4899",
    bgColor: "#fdf2f8",
    borderColor: "#fbcfe8",
  },
];

/* ─── Course Options for Dropdown ─── */
export const courseOptions = [
  "Full-Stack Web Development Bootcamp",
  "UI/UX Design Mastery with Figma",
  "Digital Marketing Strategy 2026",
  "Business Analytics with Excel & Power BI",
];

/* ─── Quick Info Cards ─── */
export const quickInfoCards = [
  {
    id: "response",
    emoji: "🚀",
    title: "Quick Response",
    description: "Average reply within 24 hours",
    gradient: "from-blue-500 to-cyan-400",
    shadowColor: "rgba(54, 149, 208, 0.25)",
  },
  {
    id: "consultation",
    emoji: "🎓",
    title: "Free Consultation",
    description: "Book a free career session",
    gradient: "from-purple-500 to-pink-400",
    shadowColor: "rgba(139, 92, 246, 0.25)",
  },
  {
    id: "corporate",
    emoji: "💼",
    title: "Corporate Training",
    description: "Custom solutions for companies",
    gradient: "from-emerald-500 to-teal-400",
    shadowColor: "rgba(16, 185, 129, 0.25)",
  },
];

/* ─── Social Links ─── */
export const socialLinks = [
  {
    id: "facebook",
    icon: FaFacebookF,
    label: "Facebook",
    href: "https://www.facebook.com",
    gradient: "from-blue-600 to-blue-500",
    hoverShadow: "rgba(37, 99, 235, 0.4)",
  },
  {
    id: "linkedin",
    icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    gradient: "from-sky-600 to-blue-500",
    hoverShadow: "rgba(14, 165, 233, 0.4)",
  },
  {
    id: "youtube",
    icon: FaYoutube,
    label: "YouTube",
    href: "https://www.youtube.com",
    gradient: "from-red-600 to-rose-500",
    hoverShadow: "rgba(220, 38, 38, 0.4)",
  },
  {
    id: "instagram",
    icon: FaInstagram,
    label: "Instagram",
    href: "https://www.instagram.com",
    gradient: "from-pink-600 via-rose-500 to-orange-400",
    hoverShadow: "rgba(236, 72, 153, 0.4)",
  },
  {
    id: "github",
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com",
    gradient: "from-slate-700 to-slate-600",
    hoverShadow: "rgba(51, 65, 85, 0.4)",
  },
];
