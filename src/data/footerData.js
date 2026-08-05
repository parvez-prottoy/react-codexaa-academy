import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaGithub,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

/* ─── Quick Navigation Links ─── */
export const quickLinks = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About Us", href: "/about" },
  { id: "courses", label: "All Courses", href: "/courses" },
  { id: "success-stories", label: "Success Stories", href: "/success-stories" },
  { id: "blog", label: "Blog", href: "/blog" },
  { id: "news", label: "News & Events", href: "/news" },
  { id: "contact", label: "Contact", href: "/contact" },
];

/* ─── Popular Courses ─── */
export const popularCourses = [
  {
    id: "mern",
    label: "MERN Stack Bootcamp",
    href: "/course/complete-mern-stack-development-bootcamp",
    badge: "🔥 Hot",
  },
  {
    id: "backend",
    label: "Backend Node.js & Express",
    href: "/course/backend-development-with-nodejs",
    badge: "⭐ Top",
  },
  {
    id: "ai-ml",
    label: "AI & Machine Learning",
    href: "/course/ai-machine-learning-essentials",
    badge: "🚀 New",
  },
  {
    id: "all-courses",
    label: "Browse All Programs",
    href: "/courses",
    badge: null,
  },
];

/* ─── Contact Information ─── */
export const footerContactItems = [
  {
    id: "address",
    icon: FaMapMarkerAlt,
    label:
      "TA-39/1, (Lift 6 Flat- D1), Hasna Monjil, Gulshan Badda Link Rd, Dhaka 1212",
    href: "https://www.google.com/maps/place/Codexaa+Ltd/@23.7802959,90.4238998,17z/data=!3m1!4b1!4m6!3m5!1s0x3755c7002c311e07:0x6d9cc41dc9b38f7b!8m2!3d23.7802959!4d90.4238998!16s%2Fg%2F11yc2rbxd4?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D",
    external: true,
    color: "#10b981",
    bgColor: "#f0fdf4",
  },
  {
    id: "phone",
    icon: FaPhone,
    label: "+880 1901-516270",
    href: "tel:+8801901516270",
    external: false,
    color: "#f59e0b",
    bgColor: "#fffbeb",
  },
  {
    id: "email",
    icon: FaEnvelope,
    label: "info@codexaa.com",
    href: "mailto:info@codexaa.com",
    external: false,
    color: "#8b5cf6",
    bgColor: "#f5f3ff",
  },
  {
    id: "hours",
    icon: FaClock,
    label: "Sun – Thu: 10:00 AM – 6:00 PM",
    href: null,
    external: false,
    color: "#3695d0",
    bgColor: "#eff8ff",
  },
];

/* ─── Social Links ─── */
export const footerSocialLinks = [
  {
    id: "facebook",
    icon: FaFacebookF,
    label: "Facebook",
    href: "https://www.facebook.com/codexaa",
    gradient: "from-blue-600 to-blue-500",
    hoverShadow: "rgba(37,99,235,0.45)",
  },
  {
    id: "linkedin",
    icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/codexaa",
    gradient: "from-sky-600 to-blue-500",
    hoverShadow: "rgba(14,165,233,0.45)",
  },
  {
    id: "youtube",
    icon: FaYoutube,
    label: "YouTube",
    href: "https://www.youtube.com/@codexaa",
    gradient: "from-red-600 to-rose-500",
    hoverShadow: "rgba(220,38,38,0.45)",
  },
  {
    id: "instagram",
    icon: FaInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/codexaa",
    gradient: "from-pink-600 via-rose-500 to-orange-400",
    hoverShadow: "rgba(236,72,153,0.45)",
  },
  {
    id: "github",
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/codexaa",
    gradient: "from-slate-700 to-slate-600",
    hoverShadow: "rgba(51,65,85,0.45)",
  },
];

/* ─── Legal Links ─── */
export const legalLinks = [
  { id: "privacy", label: "Privacy Policy", href: "/contact" },
  { id: "terms", label: "Terms & Conditions", href: "/contact" },
];

/* ─── Trust Stats (column 1 badge) ─── */
export const trustStats = [
  { value: "1,200+", label: "Students" },
  { value: "98%", label: "Satisfaction" },
  { value: "500+", label: "Alumni Hired" },
];
