export const courseCategories = [
  "All",
  "Full Stack Development",
  "Backend Development",
  "AI & Machine Learning",
];

export const courseData = [
  {
    id: "fullstack-mern",
    slug: "complete-mern-stack-development-bootcamp",
    category: "Full Stack Development",
    title: "Complete MERN Stack Development Bootcamp",
    instructor: "CodexAA Academy",
    instructorRole: "Lead Software Engineering Mentors",
    instructorExperience: "10+ Years Industry Experience",
    instructorImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    instructorBio:
      "CodexAA Academy's lead engineering mentors have built high-scale enterprise systems at top tech firms including BJIT, Brain Station 23, and global software consultancies. They specialize in React, Node.js, and cloud architecture.",
    duration: "24 Weeks",
    projects: "15+",
    students: "1,200+",
    level: "Beginner to Advanced",
    rating: 4.9,
    reviewsCount: "340+",
    price: "৳15,000",
    originalPrice: "৳25,000",
    certificate: "Verified Industry Certificate Included",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    shortDescription:
      "Master HTML, CSS, Tailwind CSS, JavaScript, React 19, Node.js, Express.js, MongoDB, Git, GitHub, REST APIs, authentication, deployment, and build real-world full-stack applications.",
    fullDescription:
      "The Complete MERN Stack Development Bootcamp is an intensive, hands-on engineering program designed to transform beginners into job-ready full-stack developers. Over 24 comprehensive weeks, you will build 15+ production-grade web applications from scratch, master modern frontend frameworks, design scalable RESTful APIs, manage NoSQL databases, implement secure authentication systems, and deploy apps to cloud platforms like Vercel and Render.",
    learningOutcomes: [
      "HTML5 Semantics & Accessible Web Architecture",
      "Modern CSS3, Flexbox, CSS Grid & Responsive Layouts",
      "Utility-First Styling with Tailwind CSS",
      "JavaScript ES6+ Concepts, Async/Await & Event Loop",
      "React 19, Component Architecture & Custom Hooks",
      "Client-Side Routing with React Router DOM",
      "Server-Side Development with Node.js & Express",
      "NoSQL Database Management with MongoDB & Mongoose",
    ],
    curriculum: [
      {
        id: "mod-1",
        title: "Module 1: Web Fundamentals & HTML5/CSS3",
        duration: "2 Weeks",
        topics: [
          "HTTP Protocol & Browser Rendering Cycle",
          "HTML5 Semantic Structures & Accessibility",
          "CSS Grid, Flexbox & Responsive Breakpoints",
        ],
      },
      {
        id: "mod-2",
        title: "Module 2: JavaScript ES6+ & Async Programming",
        duration: "4 Weeks",
        topics: [
          "ES6 Syntax, Scope & Closures",
          "Promises, Async/Await & Fetch API",
          "DOM Manipulation & Event Handlers",
        ],
      },
    ],
    features: [
      {
        id: "feat-1",
        title: "Verified Certificate",
        desc: "Shareable digital certificate recognized by tech recruiters.",
      },
    ],
    faq: [
      {
        id: "faq-1",
        q: "Who is this bootcamp designed for?",
        a: "This bootcamp is tailored for absolute beginners, university students, and career changers looking to become full-stack engineers.",
      },
    ],
  },
  {
    id: "backend-nodejs",
    slug: "backend-development-with-nodejs",
    category: "Backend Development",
    title: "Backend Development with Node.js & Express",
    instructor: "CodexAA Academy",
    instructorRole: "Backend Lead Engineer",
    instructorExperience: "9+ Years Backend Architecture",
    instructorImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    instructorBio:
      "Expert in distributed systems, REST API security, microservices, and database performance tuning.",
    duration: "14 Weeks",
    projects: "10+",
    students: "640+",
    level: "Intermediate to Advanced",
    rating: 4.9,
    reviewsCount: "145+",
    price: "৳12,000",
    originalPrice: "৳18,000",
    certificate: "Verified Backend Certificate Included",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    shortDescription:
      "Build robust, scalable REST APIs and backend microservices using Node.js, Express, MongoDB, JWT authentication, and Docker containers.",
    fullDescription:
      "Master backend software engineering. Learn to build production-grade REST APIs, structure database schemas, implement secure OAuth and JWT flows, and deploy containerized services to cloud infrastructure.",
    learningOutcomes: [
      "Node.js Event Loop & Microservices Architecture",
      "Express Middleware & Security Controls",
      "MongoDB Database Aggregations",
    ],
    curriculum: [
      {
        id: "b-mod-1",
        title: "Module 1: REST API Engineering",
        duration: "4 Weeks",
        topics: ["Express Routing", "Authentication & JWT"],
      },
    ],
    features: [
      {
        id: "b-feat-1",
        title: "Verified Certificate",
        desc: "Official Backend Engineer Certificate.",
      },
    ],
    faq: [
      {
        id: "b-faq-1",
        q: "What database technologies are covered?",
        a: "We cover MongoDB, Mongoose ODM, and PostgreSQL basics.",
      },
    ],
  },
  {
    id: "ai-machine-learning",
    slug: "ai-machine-learning-essentials",
    category: "AI & Machine Learning",
    title: "AI & Machine Learning Essentials",
    instructor: "CodexAA Academy",
    instructorRole: "AI Research Scientist",
    instructorExperience: "8+ Years Machine Learning",
    instructorImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    instructorBio:
      "Specializes in Computer Vision, Natural Language Processing, and LLM fine-tuning pipelines.",
    duration: "16 Weeks",
    projects: "8+",
    students: "510+",
    level: "Intermediate",
    rating: 4.8,
    reviewsCount: "115+",
    price: "৳14,000",
    originalPrice: "৳22,000",
    certificate: "Verified AI Certificate Included",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    shortDescription:
      "Build intelligent applications using Python, PyTorch, Scikit-learn, OpenAI APIs, Prompt Engineering, and Large Language Model fine-tuning.",
    fullDescription:
      "Explore practical Machine Learning and Generative AI. Learn data processing, neural networks, and integrating AI models into modern web apps.",
    learningOutcomes: [
      "Python Data Science Stack (NumPy, Pandas)",
      "Supervised & Unsupervised Machine Learning",
      "Generative AI & LLM Integration",
    ],
    curriculum: [
      {
        id: "a-mod-1",
        title: "Module 1: Machine Learning Foundations",
        duration: "4 Weeks",
        topics: ["Data Preprocessing", "Model Evaluation"],
      },
    ],
    features: [
      {
        id: "a-feat-1",
        title: "Verified Certificate",
        desc: "Official AI Specialist Certificate.",
      },
    ],
    faq: [
      {
        id: "a-faq-1",
        q: "Is Python required?",
        a: "Basic Python knowledge is helpful.",
      },
    ],
  },
];
