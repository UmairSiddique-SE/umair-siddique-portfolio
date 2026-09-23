/**
 * Portfolio Data Source — Umair Siddique
 * Contains structured, honest content for projects, skills, services, and process.
 */

const portfolioData = {
  developer: {
    name: "Umair Siddique",
    title: "Software Engineer & Full-Stack Developer",
    availability: "Available for Freelance & Internship Roles",
    location: "Lahore, Pakistan (Remote Friendly)",
    email: "umairsiddiquese@gmail.com",
    github: "https://github.com/UmairSiddique-SE",
    linkedin: "https://www.linkedin.com/in/umair-siddique-6029bb375",
    upwork: "https://www.upwork.com/freelancers/~019ece93023d118804",
    whatsapp: "https://wa.me/923016767262"
  },

  about: {
    terminalCode: `const engineer = {
  name: 'Umair Siddique',
  role: 'Software Engineer & Full-Stack Developer',
  education: 'BS Software Engineering (2025 - 2029)',
  location: 'Lahore, Pakistan',
  coreStack: ['React', 'JavaScript', 'Node.js', 'Python', 'PostgreSQL'],
  focus: 'Building modern web applications & practical software solutions',
  status: '🟢 Available for freelance & internship roles'
};

console.log('Building software that solves real problems.');`,
    tabs: {
      story: {
        title: "My Story",
        content: `I'm Umair Siddique, a Software Engineer and Full-Stack Developer focused on building modern web applications and software solutions. I work across frontend, backend, databases, and APIs to turn ideas into functional, reliable products.

I enjoy building real-world projects, learning modern technologies, and continuously improving my skills through hands-on development.`
      },
      education: {
        title: "Education",
        items: [
          {
            degree: "BS in Software Engineering",
            institution: "University Level Education",
            year: "2025 – 2029",
            honors: "Undergraduate Degree • Currently Enrolled"
          }
        ]
      },
      certifications: {
        title: "Learning & Courses",
        items: [
          { name: "Full-Stack Web Development", issuer: "Self-directed & Online Learning", year: "2024" },
          { name: "React & Modern JavaScript", issuer: "Hands-on Project Experience", year: "2024" },
          { name: "Python & Flask Backend Development", issuer: "Project-based Learning", year: "2024" }
        ]
      },
      workflow: {
        title: "Tools & Workflow",
        tags: [
          "VS Code", "Git & GitHub", "Postman", "Figma",
          "Vercel", "Firebase", "Cloudinary", "npm / pip",
          "Chrome DevTools", "Linux Terminal"
        ]
      }
    }
  },

  skills: [
    {
      category: "Frontend Development",
      icon: "layout",
      items: [
        { name: "React / Next.js", level: 85 },
        { name: "JavaScript / TypeScript", level: 82 },
        { name: "HTML5 & CSS3", level: 90 },
        { name: "Tailwind CSS", level: 80 }
      ]
    },
    {
      category: "Backend & APIs",
      icon: "server",
      items: [
        { name: "Node.js / Express", level: 78 },
        { name: "NestJS", level: 65 },
        { name: "Python / Flask", level: 75 },
        { name: "REST API Design", level: 80 }
      ]
    },
    {
      category: "Database & Storage",
      icon: "database",
      items: [
        { name: "MongoDB", level: 78 },
        { name: "PostgreSQL", level: 70 },
        { name: "Prisma ORM", level: 68 },
        { name: "Firebase / Firestore", level: 82 }
      ]
    },
    {
      category: "Tools & Platforms",
      icon: "pen-tool",
      items: [
        { name: "Git & GitHub", level: 88 },
        { name: "Vercel / Firebase Hosting", level: 85 },
        { name: "Cloudinary", level: 75 },
        { name: "Figma (UI Design)", level: 70 }
      ]
    }
  ],

  projects: [
    {
      id: "meterpro-official",
      title: "MeterPro – Utility Bill Manager",
      category: "fullstack",
      categoryLabel: "Live Web App",
      status: "live",
      statusLabel: "Live",
      featured: true,
      tagline: "Smart electricity, gas & water meter tracker with instant unit consumption calculation.",
      description: "MeterPro is a smart meter reading and utility bill management web application. It lets users record meter readings, track unit consumption over time, estimate utility bills, and manage electricity, gas and water data from a clean, intuitive dashboard.",
      technologies: ["React", "JavaScript", "Firebase", "Cloud Firestore", "Tailwind CSS"],
      stats: {
        platform: "Web App",
        hosting: "Firebase Hosting",
        status: "Live Production"
      },
      imageGradient: "linear-gradient(135deg, #ffb020 0%, #c17a42 50%, #14161a 100%)",
      icon: "activity",
      liveUrl: "https://meterpro-official.web.app/",
      githubUrl: "https://github.com/UmairSiddique-SE/MeterPro",
      highlights: [
        "Smart meter reading logger for electricity, gas, and water utilities",
        "Automated unit consumption calculation per billing cycle",
        "Real-time data sync with Firebase Cloud Firestore",
        "Fully responsive, mobile-friendly utility dashboard"
      ]
    },
    {
      id: "personal-expense-tracker",
      title: "Personal Expense Tracker",
      category: "fullstack",
      categoryLabel: "Live Web App",
      status: "live",
      statusLabel: "Live",
      featured: true,
      tagline: "Full-stack personal finance app to track daily expenses and manage savings.",
      description: "A full-stack personal finance application built with React, Python, Flask, and MongoDB. Helps users log daily expenses, view spending by category, and track budget goals. Features a clean dashboard with visual summaries and a secure backend API.",
      technologies: ["React", "Python", "Flask", "MongoDB", "Jinja2", "Vercel"],
      stats: {
        platform: "Web App",
        hosting: "Vercel",
        status: "Live on Vercel"
      },
      imageGradient: "linear-gradient(135deg, #10b981 0%, #06b6d4 50%, #3b82f6 100%)",
      icon: "shopping-bag",
      liveUrl: "https://personal-expensive-tracker.vercel.app/",
      githubUrl: "https://github.com/UmairSiddique-SE/PersonaL-Expense-Tracker",
      highlights: [
        "Daily expense logging with category-based organization",
        "Visual spending summaries for budget awareness",
        "Full-stack: React frontend + Python/Flask backend + MongoDB",
        "Deployed and live on Vercel"
      ]
    },
    {
      id: "edusphere",
      title: "EduSphere – Learning Management Platform",
      category: "fullstack",
      categoryLabel: "Full-Stack Web App",
      status: "inprogress",
      statusLabel: "In Progress",
      featured: true,
      tagline: "A modern learning management system currently under active development.",
      description: "EduSphere is a full-stack Learning Management System (LMS) currently under development. It is designed to support course creation, student enrollment, progress tracking, and content delivery for educators and learners.",
      technologies: ["React", "Node.js", "NestJS", "PostgreSQL", "Prisma", "TypeScript"],
      stats: {
        platform: "Web App",
        stage: "In Development",
        status: "Currently Building"
      },
      imageGradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a78bfa 100%)",
      icon: "layers",
      liveUrl: null,
      githubUrl: "https://github.com/UmairSiddique-SE/School-Project",
      highlights: [
        "Course creation and management system for educators",
        "Student enrollment and progress tracking",
        "Built with React, NestJS, PostgreSQL and Prisma ORM",
        "Currently under active development — not yet released"
      ]
    }
  ],

  experience: [
    {
      role: "Full-Stack Developer (Freelance)",
      company: "Self-Employed",
      period: "2024 – Present",
      location: "Lahore, Pakistan",
      badge: "Active",
      highlights: [
        "Built and deployed MeterPro — a live utility bill management web application using React and Firebase.",
        "Built and deployed a Personal Expense Tracker with a full-stack React + Python/Flask + MongoDB architecture.",
        "Currently developing EduSphere, a full-stack Learning Management System using React, NestJS, and PostgreSQL."
      ]
    },
    {
      role: "Software Engineering (Academic & Practical Foundation)",
      company: "Software Engineering Studies",
      period: "2025 – 2029",
      location: "Lahore, Pakistan",
      badge: "In Progress",
      highlights: [
        "Core Software Engineering principles, software architecture, and system design.",
        "Building practical full-stack projects alongside coursework.",
        "Specializing in full-stack web development, databases, APIs, and modern JavaScript/TypeScript ecosystem."
      ]
    }
  ],

  services: [
    {
      icon: "code",
      title: "Full-Stack Web Development",
      description: "End-to-end web applications built with modern frontend and backend technologies, database integration, and cloud deployment.",
      features: [
        "React / Next.js Frontend",
        "Node.js / Python Backend",
        "Database Design & Integration",
        "Vercel / Firebase Deployment"
      ]
    },
    {
      icon: "layout",
      title: "Frontend Development",
      description: "Responsive, modern, and interactive user interfaces built with React, TypeScript, and Tailwind CSS.",
      features: [
        "React & Next.js Components",
        "Responsive & Mobile-First Design",
        "Tailwind CSS Styling",
        "Smooth Animations & UI Polish"
      ]
    },
    {
      icon: "zap",
      title: "Backend & API Development",
      description: "REST APIs, authentication systems, and backend logic built with Node.js, NestJS, or Python/Flask.",
      features: [
        "REST API Design & Development",
        "User Authentication & JWT",
        "Database Integration (SQL / NoSQL)",
        "Error Handling & Validation"
      ]
    },
    {
      icon: "cpu",
      title: "SaaS & Web Application Development",
      description: "Practical web-based products and management systems — from idea to live deployment.",
      features: [
        "SaaS Application Architecture",
        "Multi-user Systems & Dashboards",
        "Firebase / Vercel Hosting",
        "Iterative Feature Development"
      ]
    }
  ],

  howIWork: [
    {
      step: "01",
      title: "Understand the Problem",
      description: "I start by deeply understanding the project requirements, goals, and target users before writing any code.",
      icon: "magnifying-glass"
    },
    {
      step: "02",
      title: "Plan & Structure",
      description: "I plan the architecture, choose the right stack, and break the project into manageable milestones.",
      icon: "sitemap"
    },
    {
      step: "03",
      title: "Build & Iterate",
      description: "I build feature by feature, testing and refining along the way to ensure quality at every step.",
      icon: "code"
    },
    {
      step: "04",
      title: "Deploy & Deliver",
      description: "I deploy to production, verify everything works correctly, and hand over clean, documented code.",
      icon: "rocket"
    }
  ]
};
