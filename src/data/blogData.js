export const blogCategories = [
  "All",
  "React",
  "JavaScript",
  "Frontend",
  "Backend",
  "Career",
  "UI/UX",
  "AI",
];

export const blogPosts = [
  {
    id: "react-best-practices-2026",
    slug: "10-essential-react-best-practices-every-frontend-developer-should-know",
    category: "Web Development",
    title: "10 Essential React Best Practices Every Frontend Developer Should Know",
    excerpt:
      "Learn the most important React best practices, including component organization, state management, reusable UI patterns, performance optimization, and project structure. These techniques help developers write cleaner, more scalable, and maintainable applications.",
    author: "CodexAA Academy",
    authorRole: "Senior Engineering Mentors",
    authorImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    publishDate: "August 2026",
    readingTime: "8 min read",
    coverImage:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    tags: ["React", "JavaScript", "Frontend", "Web Development"],
    content: [
      {
        type: "paragraph",
        text: "Building modern frontend applications with React requires more than just knowing basic JSX syntax and useState. As applications scale in complexity and team size, adopting standardized patterns and best practices becomes essential for maintaining velocity, code cleanliness, and runtime efficiency.",
      },
      {
        type: "heading",
        text: "1. Keep Components Focused and Modular",
      },
      {
        type: "paragraph",
        text: "Single Responsibility Principle (SRP) applies heavily to React components. A component should ideally do one thing well. If a component grows beyond 200 lines or handles UI rendering, data fetching, and form validation simultaneously, consider breaking it into smaller presentation components and custom hooks.",
      },
      {
        type: "heading",
        text: "2. Leverage Custom Hooks for Business Logic",
      },
      {
        type: "paragraph",
        text: "Extracting state management, API requests, and event handlers into custom React hooks (e.g., useFetchData, useFormState) separates presentation from logic. This makes your UI components pure, highly readable, and easily testable.",
      },
      {
        type: "heading",
        text: "3. Optimize Re-renders with React.memo and useCallback",
      },
      {
        type: "paragraph",
        text: "Unnecessary re-renders are one of the primary culprits behind sluggish React applications. Use React.memo for heavy presentation trees and wrap handler functions passed to child components in useCallback to preserve reference equality across renders.",
      },
      {
        type: "heading",
        text: "4. Organize Project Directory by Feature, Not File Type",
      },
      {
        type: "paragraph",
        text: "Rather than separating files into generic /components, /styles, and /services folders, group code by domain feature (e.g., /features/courses, /features/auth). This localized approach simplifies navigation and scales effortlessly as your project grows.",
      },
      {
        type: "heading",
        text: "5. Master State Colocation",
      },
      {
        type: "paragraph",
        text: "Keep state as close to where it is consumed as possible. Avoid pushing global state into context or external stores when only a single sub-tree requires that data. State colocation improves performance and reduces unexpected side effects.",
      },
    ],
  },
  {
    id: "modern-css-grid-flexbox",
    slug: "mastering-modern-css-grid-flexbox-layouts-in-2026",
    category: "Frontend",
    title: "Mastering Modern CSS Grid & Flexbox Layouts in 2026",
    excerpt:
      "Discover how to build fluid, responsive layouts using CSS Grid, Flexbox, container queries, and modern Tailwind CSS patterns without layout shifts or bloated CSS.",
    author: "CodexAA Academy",
    authorRole: "Frontend Lead Instructor",
    authorImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    publishDate: "August 2026",
    readingTime: "6 min read",
    coverImage:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    tags: ["CSS", "Frontend", "Tailwind", "Responsive Design"],
    content: [
      {
        type: "paragraph",
        text: "Modern web layout techniques have evolved rapidly. With wide browser support for CSS Grid, Flexbox, and subgrid, front-end developers can create complex multi-column responsive interfaces with minimal utility classes.",
      },
      {
        type: "heading",
        text: "Grid vs. Flexbox: Knowing When to Use Which",
      },
      {
        type: "paragraph",
        text: "Flexbox excels at 1D layout flows—either a row or a column of items—making it ideal for navbars, button groups, and horizontal alignment. CSS Grid is designed for 2D layouts, providing absolute control over both rows and columns simultaneously.",
      },
    ],
  },
  {
    id: "nodejs-express-clean-architecture",
    slug: "building-scalable-nodejs-express-apis-clean-architecture",
    category: "Backend",
    title: "Building Scalable Node.js & Express APIs with Clean Architecture",
    excerpt:
      "Learn enterprise patterns for structuring Node.js applications, optimizing database queries, handling authentication, and implementing automated testing pipelines.",
    author: "CodexAA Academy",
    authorRole: "Backend & Cloud Lead",
    authorImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    publishDate: "July 2026",
    readingTime: "7 min read",
    coverImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    tags: ["Node.js", "Express", "Backend", "API"],
    content: [
      {
        type: "paragraph",
        text: "Node.js powers millions of microservices worldwide. Structuring your API controller layer, domain models, and service classes cleanly ensures your codebase remains readable and testable under high load.",
      },
    ],
  },
];
