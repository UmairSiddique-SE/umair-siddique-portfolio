/**
 * Portfolio Data Source â€” Umair Siddique
 * Software Engineer & Full-Stack Developer
 * University of Engineering and Technology (UET) Lahore
 */

const portfolioData = {
  developer: {
    name: "Umair Siddique",
    title: "Software Engineer & Full-Stack Developer",
    education: "BS Software Engineering, UET Lahore (2025 â€“ 2029)",
    availability: "Open for Software Engineering Roles & Freelance",
    location: "Lahore, Pakistan (Available Worldwide / Remote)",
    email: "umairsiddiquese@gmail.com",
    github: "https://github.com/UmairSiddique-SE",
    linkedin: "https://www.linkedin.com/in/umair-siddique-6029bb375",
    upwork: "https://www.upwork.com/freelancers/~019ece93023d118804",
    whatsapp: "https://wa.me/923016767262",
    web3FormsAccessKey: "0709cad2-ca0d-49cf-b557-544fd38174b4",
    formspreeUrl: ""
  },

  about: {
    terminalCode: `interface SoftwareEngineer {
  name: string;
  degree: 'BS Software Engineering';
  institution: 'UET Lahore';
  status: 'Open for Engineering Roles & Freelance';
  coreLanguages: string[];
  architecture: {
    frontend: string[];
    backend: string[];
    databases: string[];
  };
  featuredSystems: string[];
}

const engineer: SoftwareEngineer = {
  name: 'Umair Siddique',
  degree: 'BS Software Engineering',
  institution: 'UET Lahore',
  status: 'Open for Engineering Roles & Freelance',
  coreLanguages: ['TypeScript', 'JavaScript', 'Python', 'C++', 'Dart', 'SQL'],
  architecture: {
    frontend: ['React', 'Next.js', 'Tailwind CSS', 'Flutter'],
    backend: ['Node.js', 'NestJS', 'Flask', 'REST APIs'],
    databases: ['PostgreSQL', 'MongoDB', 'Cloud Firestore', 'Prisma']
  },
  featuredSystems: [
    'MeterPro Electricity Utility (Flutter + Cloud Sync)',
    'HisabPro Finance Web App (Flask + MongoDB + PWA)',
    'EduSphere Multi-School SaaS (React + NestJS + Postgres)'
  ]
};

console.log('Building resilient software architectures that solve real problems.');`,

    summary: "Software Engineering undergraduate at the University of Engineering and Technology (UET), Lahore. Passionate about system design, full-stack web applications, clean code architecture, and high-performance APIs.",

    disciplines: [
      { name: "Data Structures & Algorithms", icon: "fa-solid fa-tree", desc: "Efficient algorithm design, complexity analysis, and problem-solving" },
      { name: "Object-Oriented Design (OOP)", icon: "fa-solid fa-cubes", desc: "Modular, extensible software design and SOLID architectural patterns" },
      { name: "Database Systems & Modeling", icon: "fa-solid fa-database", desc: "Normalized relational schemas (PostgreSQL) and flexible document stores (MongoDB)" },
      { name: "RESTful API Architecture", icon: "fa-solid fa-network-wired", desc: "Stateless, secure endpoints with JWT authentication and strict input validation" },
      { name: "Cloud & Serverless Systems", icon: "fa-solid fa-cloud", desc: "Continuous deployment with Vercel, Firebase Cloud Functions, and edge delivery" }
    ],

    education: {
      degree: "BS in Software Engineering",
      institution: "University of Engineering and Technology (UET), Lahore",
      duration: "2025 â€“ 2029",
      status: "Undergraduate Student",
      focus: "Computer Science Foundations, Software Architecture, Full-Stack Engineering"
    }
  },

  // Premium All-in-One Tech Matrix (No fake percentage bars)
  techMatrix: [
    {
      category: "languages",
      title: "Core Languages",
      icon: "fa-solid fa-code",
      badge: "Core Fundamentals",
      items: [
        { name: "TypeScript", role: "Primary", icon: "fa-solid fa-shield", desc: "Type-safe robust web and backend architectures" },
        { name: "JavaScript (ESNext)", role: "Expertise", icon: "fa-brands fa-js", desc: "Asynchronous I/O, DOM manipulation, modern runtimes" },
        { name: "Python", role: "Backend & ML", icon: "fa-brands fa-python", desc: "Flask services, data scripts & backend logic" },
        { name: "C / C++", role: "Academic Core", icon: "fa-solid fa-microchip", desc: "Data structures, memory pointers, algorithms & OOP" },
        { name: "Dart", role: "Cross-Platform", icon: "fa-solid fa-cube", desc: "Mobile & web application engineering with Flutter" },
        { name: "SQL", role: "Relational", icon: "fa-solid fa-database", desc: "Relational queries, ACID transactions, complex joins" }
      ]
    },
    {
      category: "frontend",
      title: "Frontend Engineering",
      icon: "fa-solid fa-layer-group",
      badge: "UI / UX Architecture",
      items: [
        { name: "React", role: "Primary", icon: "fa-brands fa-react", desc: "Component lifecycle, custom hooks, reactive state" },
        { name: "Next.js", role: "Production", icon: "fa-solid fa-globe", desc: "App router, SSR, static generation, API routes" },
        { name: "Tailwind CSS", role: "Modern Styling", icon: "fa-solid fa-wind", desc: "Custom design tokens, dark mode, responsive layouts" },
        { name: "HTML5 & CSS3", role: "Web Standards", icon: "fa-brands fa-html5", desc: "Semantic structure, modern CSS variables, glassmorphism" },
        { name: "Flutter", role: "Mobile / Web", icon: "fa-solid fa-mobile-screen-button", desc: "High-performance cross-platform client applications" }
      ]
    },
    {
      category: "backend",
      title: "Backend & Systems",
      icon: "fa-solid fa-server",
      badge: "Server-Side & APIs",
      items: [
        { name: "Node.js & Express", role: "Runtime", icon: "fa-brands fa-node-js", desc: "Scalable REST APIs, custom middleware, async operations" },
        { name: "NestJS", role: "Enterprise", icon: "fa-solid fa-network-wired", desc: "Modular architecture, dependency injection, TypeScript" },
        { name: "Python / Flask", role: "Lightweight", icon: "fa-solid fa-bolt", desc: "Microservices, session handling, PDF statement generation" },
        { name: "RESTful API Design", role: "Standard", icon: "fa-solid fa-route", desc: "Resource modeling, HTTP status conventions, pagination" },
        { name: "Cloud Functions", role: "Serverless", icon: "fa-solid fa-cloud-bolt", desc: "Event-driven background compute & OTP handling" }
      ]
    },
    {
      category: "database",
      title: "Databases & Cloud",
      icon: "fa-solid fa-database",
      badge: "Storage & Infrastructure",
      items: [
        { name: "PostgreSQL", role: "RDBMS", icon: "fa-solid fa-database", desc: "Relational modeling, indexing, foreign keys, schema migrations" },
        { name: "MongoDB", role: "NoSQL", icon: "fa-solid fa-leaf", desc: "Document storage, aggregation queries, schema validation" },
        { name: "Cloud Firestore", role: "Real-Time", icon: "fa-solid fa-fire", desc: "Live synchronization, offline cache, cloud security rules" },
        { name: "Prisma ORM", role: "Data Layer", icon: "fa-solid fa-link", desc: "Type-safe database client and declarative migrations" },
        { name: "Git & GitHub", role: "VCS", icon: "fa-brands fa-git-alt", desc: "Version control, branching workflows, pull requests" },
        { name: "Vercel & Firebase", role: "Deployment", icon: "fa-solid fa-cloud-arrow-up", desc: "Edge deployment, environment configuration, hosting" }
      ]
    }
  ],

  projects: [
    {
      id: "meterpro-official",
      title: "MeterPro — Electricity Utility System",
      category: "mobile",
      categories: ["all", "mobile", "fullstack"],
      categoryLabel: "Flutter & Firebase",
      status: "live",
      statusLabel: "Live Production",
      featured: true,
      tagline: "A production utility app for tracking electricity consumption, estimating tariff bills, and cloud synchronization.",
      description: "A production-grade mobile and web utility built with Flutter and Firebase. Features custom 6-digit email OTP verification, Cloud Firestore real-time synchronization, Google ML Kit OCR integration for camera-based meter readings, and Firebase Cloud Functions for server-side OTP dispatch and validation.",
      technologies: ["Dart", "Flutter", "Firebase Auth", "Cloud Firestore", "Cloud Functions", "Google ML Kit"],
      stats: { platform: "Cross-Platform Mobile/Web", hosting: "Firebase Hosting", status: "Live in Production" },
      imageGradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #1e1b4b 100%)",
      icon: "activity",
      liveUrl: "https://meterpro-official.web.app/",
      githubUrl: "https://github.com/UmairSiddique-SE/MeterPro",
      highlights: [
        "Secure Firebase Authentication with custom 6-digit server-verified email OTP",
        "Real-time Cloud Firestore synchronization with offline persistence",
        "Google ML Kit vision API integration for automated meter counter capture",
        "Serverless Firebase Cloud Functions for backend security and transaction logic"
      ]
    },
    {
      id: "personal-expense-tracker",
      title: "HisabPro — Personal Finance Web App",
      category: "web",
      categories: ["all", "web", "fullstack"],
      categoryLabel: "Full-Stack Web App",
      status: "live",
      statusLabel: "Live on Vercel",
      featured: true,
      tagline: "Full-stack personal finance application with dynamic category analytics, trend charts, and PDF statement generation.",
      description: "A robust full-stack personal finance and expense management platform built with Python (Flask) and MongoDB. Features secure password hashing with account recovery, dynamic date-range income and expense tracking, visual trend breakdowns, automated PDF report generation using ReportLab, and Progressive Web App (PWA) offline support.",
      technologies: ["Python", "Flask", "MongoDB", "JavaScript (ES6+)", "ReportLab PDF", "Vercel"],
      stats: { platform: "Full-Stack Web / PWA", hosting: "Vercel Serverless", status: "Active & Deployed" },
      imageGradient: "linear-gradient(135deg, #10b981 0%, #06b6d4 50%, #1e1b4b 100%)",
      icon: "shopping-bag",
      liveUrl: "https://hisabpro-app.vercel.app/",
      githubUrl: "https://github.com/UmairSiddique-SE",
      highlights: [
        "Dynamic multi-category income and expense tracking with interactive analytics",
        "Automated financial PDF statement generation engine using ReportLab",
        "Secure user authentication with salted password hashing and session guards",
        "Progressive Web App (PWA) architecture deployed to Vercel edge infrastructure"
      ]
    },
    {
      id: "edusphere",
      title: "EduSphere — Multi-School SaaS Platform",
      category: "web",
      categories: ["all", "web", "fullstack"],
      categoryLabel: "Enterprise SaaS Architecture",
      status: "inprogress",
      statusLabel: "Active Development",
      featured: true,
      tagline: "Multi-tenant school management software with Role-Based Access Control (RBAC), academic modules, and subscription billing.",
      description: "An enterprise-grade multi-school SaaS platform currently in active development. Designed with a modular architecture using React, TypeScript, NestJS, and PostgreSQL via Prisma ORM. Encompasses multi-tenant onboarding, hierarchical role permissions (Super Admin, School Admin, Teacher, Student), automated attendance tracking, fee management, examination grading, and scheduling.",
      technologies: ["React", "TypeScript", "NestJS", "PostgreSQL", "Prisma ORM", "Tailwind CSS"],
      stats: { platform: "Enterprise Web SaaS", stage: "Core Modules & DB Schema", status: "Active Development" },
      imageGradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #1e1b4b 100%)",
      icon: "layers",
      liveUrl: null,
      githubUrl: "https://github.com/UmairSiddique-SE/School-Project",
      highlights: [
        "Multi-tenant SaaS architecture supporting isolated school organizations",
        "Fine-grained Role-Based Access Control (RBAC) across multiple administrative tiers",
        "Type-safe data modeling and declarative migrations using Prisma ORM and PostgreSQL",
        "Modular backend implementation powered by NestJS dependency injection"
      ]
    },
    {
      id: "devdoc-ai",
      title: "DevDoc AI — Intelligent API Documentation Engine",
      category: "web",
      categories: ["all", "web", "fullstack"],
      categoryLabel: "AI & Developer Tooling",
      status: "live",
      statusLabel: "Featured System",
      featured: true,
      tagline: "Automated OpenAPI documentation generator with semantic vector search and real-time schema validation.",
      description: "An intelligent developer platform that ingests backend route definitions, validates JSON schema contracts, and produces interactive API documentation. Built with Next.js 14, TypeScript, Python FastAPI, and PostgreSQL with pgvector for semantic endpoint search and interactive troubleshooting.",
      technologies: ["Next.js 14", "TypeScript", "FastAPI", "PostgreSQL", "pgvector", "Tailwind CSS"],
      stats: { platform: "Full-Stack AI Web App", database: "PostgreSQL + pgvector", status: "Active Project" },
      imageGradient: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #1e1b4b 100%)",
      icon: "cpu",
      liveUrl: null,
      githubUrl: "https://github.com/UmairSiddique-SE",
      highlights: [
        "Automated endpoint extraction and interactive OpenAPI 3.0 specification synthesis",
        "Semantic vector search with pgvector for parameter and error code lookups",
        "Type-safe TypeScript frontend with dynamic request payload test bench",
        "High-performance async FastAPI ingestion pipeline with background workers"
      ]
    },
    {
      id: "nexus-commerce",
      title: "Nexus Commerce — Distributed E-Commerce Backend",
      category: "fullstack",
      categories: ["all", "web", "fullstack"],
      categoryLabel: "High-Concurrency Backend",
      status: "live",
      statusLabel: "Production Ready",
      featured: true,
      tagline: "Distributed e-commerce architecture with Redis cart caching, Stripe webhook reconciliation, and inventory lock guards.",
      description: "A production-grade e-commerce backend built to handle high-concurrency traffic without inventory overselling. Employs Redis for temporary cart session locks, PostgreSQL ACID transactions with row-level locks, and an idempotent webhook consumer for Stripe payment verification.",
      technologies: ["Node.js", "Express", "TypeScript", "PostgreSQL", "Redis", "Docker", "Stripe API"],
      stats: { architecture: "Microservices & Caching", database: "PostgreSQL & Redis", status: "Open Source" },
      imageGradient: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #0f172a 100%)",
      icon: "shield",
      liveUrl: null,
      githubUrl: "https://github.com/UmairSiddique-SE",
      highlights: [
        "Optimistic and row-level locking to eliminate inventory overselling during sales",
        "Distributed cart and rate-limiting cache layer powered by Redis",
        "Idempotent Stripe webhook receiver with automatic order state reconciliation",
        "Containerized microservice setup with Docker Compose for local and cloud runs"
      ]
    },
    {
      id: "tasksync-live",
      title: "TaskSync — Real-Time Collaborative Workspace",
      category: "web",
      categories: ["all", "web", "fullstack"],
      categoryLabel: "Real-Time Collaboration App",
      status: "live",
      statusLabel: "Interactive Demo",
      featured: true,
      tagline: "Multiplayer task management with WebSockets, optimistic UI updates, and drag-and-drop Kanban boards.",
      description: "A real-time Kanban and productivity workspace inspired by Linear. Built with React, Node.js, and Socket.io, supporting live cursor presence, instant cross-client board synchronization, markdown issue descriptions, and offline optimistic updates.",
      technologies: ["React", "TypeScript", "Node.js", "Socket.io", "MongoDB", "Tailwind CSS"],
      stats: { platform: "Real-Time Web Application", sync: "WebSocket Protocol", status: "Active Project" },
      imageGradient: "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 50%, #1e1b4b 100%)",
      icon: "users",
      liveUrl: null,
      githubUrl: "https://github.com/UmairSiddique-SE",
      highlights: [
        "Sub-50ms bidirectional state synchronization powered by Socket.io WebSockets",
        "Optimistic UI updates with instant rollback on network latency or drops",
        "Interactive drag-and-drop Kanban workflow with smooth CSS micro-interactions",
        "JWT-guarded team workspaces with granular permissions and activity audit logs"
      ]
    }
  ],

  engineeringProcess: [
    {
      step: "01",
      title: "Architecture & Data Modeling",
      description: "Defining normalized database schemas, entity relationships, and type-safe API contracts (OpenAPI/REST) before writing production code.",
      icon: "sitemap",
      tag: "Design Phase"
    },
    {
      step: "02",
      title: "Type-Safe & Modular Implementation",
      description: "Building decoupled, maintainable modules adhering to OOP and SOLID principles using TypeScript, React, Node.js, and Python.",
      icon: "code",
      tag: "Development"
    },
    {
      step: "03",
      title: "Security, Validation & Edge Cases",
      description: "Implementing strict input sanitization, JWT/OTP authentication, role guards, and comprehensive error handling across every endpoint.",
      icon: "shield-halved",
      tag: "Verification"
    },
    {
      step: "04",
      title: "Cloud Deployment & Optimization",
      description: "Packaging and deploying to production platforms (Vercel & Firebase) with automated build validation, asset optimization, and live monitoring.",
      icon: "rocket",
      tag: "Production"
    }
  ]
};

// Aliases for compatibility with any legacy hooks
portfolioData.howIWork = portfolioData.engineeringProcess;
