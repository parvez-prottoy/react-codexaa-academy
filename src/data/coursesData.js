/* ─── Tab definitions ─── */
export const tabs = [
  { id: "all", label: "All Courses", icon: "🎓" },
  { id: "programming", label: "Programming", icon: "💻" },
  { id: "design", label: "Design", icon: "🎨" },
  { id: "marketing", label: "Marketing", icon: "📣" },
  { id: "business", label: "Business", icon: "💼" },
  { id: "ai-data", label: "AI & Data", icon: "🤖" },
];

/* ─── Difficulty config ─── */
export const difficultyConfig = {
  Beginner: { color: "#059669", bg: "#f0fdf4", border: "#bbf7d0" },
  Intermediate: { color: "#d97706", bg: "#fffbeb", border: "#fde68a" },
  Advanced: { color: "#dc2626", bg: "#fff1f2", border: "#fecdd3" },
};

/* ─── Course list ─── */
export const courses = [
  /* ── Programming ──────────────────────── */
  {
    id: 1,
    title: "Full-Stack Web Development Bootcamp",
    description:
      "Master React, Node.js & MongoDB. Build 10+ real projects and launch your career as a full-stack web developer.",
    category: "Programming",
    categoryKey: "programming",
    difficulty: "Beginner",
    rating: 4.8,
    ratingCount: 3240,
    students: 12540,
    instructor: { name: "Tanvir Ahmed", initials: "TA", color: "#3695d0" },
    duration: "48h",
    lessons: 156,
    price: 79,
    originalPrice: 149,
    gradient: ["#1e3a8a", "#2563eb"],
    iconText: "</>",
    featured: true,
  },

  /* ── Design ────────────────────────────── */
  {
    id: 4,
    title: "UI/UX Design Mastery with Figma",
    description:
      "Learn user research, wireframing, prototyping, and design systems to create stunning digital products.",
    category: "Design",
    categoryKey: "design",
    difficulty: "Beginner",
    rating: 4.9,
    ratingCount: 4512,
    students: 15800,
    instructor: { name: "Nusrat Jahan", initials: "NJ", color: "#be185d" },
    duration: "42h",
    lessons: 134,
    price: 64,
    originalPrice: 119,
    gradient: ["#9d174d", "#ec4899"],
    iconText: "UX",
    featured: true,
  },

  /* ── Marketing ─────────────────────────── */
  {
    id: 6,
    title: "Digital Marketing Strategy 2026",
    description:
      "Master SEO, Google Ads, content strategy, and email marketing to drive real business growth online.",
    category: "Marketing",
    categoryKey: "marketing",
    difficulty: "Beginner",
    rating: 4.7,
    ratingCount: 2890,
    students: 11200,
    instructor: { name: "Mitu Akter", initials: "MA", color: "#0891b2" },
    duration: "38h",
    lessons: 122,
    price: 49,
    originalPrice: 89,
    gradient: ["#075985", "#0ea5e9"],
    iconText: "MKT",
    featured: false,
  },

  /* ── Business ──────────────────────────── */
  {
    id: 8,
    title: "Business Analytics with Excel & Power BI",
    description:
      "Transform raw data into business insights using Excel, Power BI dashboards, and data storytelling.",
    category: "Business",
    categoryKey: "business",
    difficulty: "Intermediate",
    rating: 4.8,
    ratingCount: 1980,
    students: 8640,
    instructor: { name: "Imran Khan", initials: "IK", color: "#334155" },
    duration: "34h",
    lessons: 108,
    price: 54,
    originalPrice: 99,
    gradient: ["#1e293b", "#475569"],
    iconText: "BIZ",
    featured: false,
  },

  /* ── AI & Data ─────────────────────────── */
  {
    id: 10,
    title: "Python for Data Science & Analytics",
    description:
      "Learn Python, NumPy, Pandas, Matplotlib & Scikit-learn for real-world data analysis and visualization.",
    category: "AI & Data",
    categoryKey: "ai-data",
    difficulty: "Beginner",
    rating: 4.8,
    ratingCount: 5640,
    students: 19800,
    instructor: { name: "Tahmid Chowdhury", initials: "TC", color: "#0d9488" },
    duration: "52h",
    lessons: 168,
    price: 79,
    originalPrice: 149,
    gradient: ["#134e4a", "#14b8a6"],
    iconText: "Py",
    featured: true,
  },
];
