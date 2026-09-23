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
    whatsapp: "https://wa.me/923016767262",
    web3FormsAccessKey: "0709cad2-ca0d-49cf-b557-544fd38174b4", // Web3Forms Access Key for direct email delivery
    formspreeUrl: ""        // Optional: Paste your Formspree endpoint URL
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
            institution: "University of Engineering and Technology (UET), Lahore",
            year: "2025 – 2029",
            honors: "Undergraduate | BS Software Engineering"
          }
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
      categoryLabel: "Cross-Platform App",
      status: "live",
      statusLabel: "Live",
      featured: true,
      tagline: "Flutter-based electricity meter and bill management app with Firebase authentication and cloud sync.",
      description: "MeterPro is a Flutter application for electricity meter and bill management. It features Firebase Authentication with email/password, custom six-digit email OTP verification, Firestore-backed meter data, Google ML Kit and camera capabilities, and Firebase Cloud Functions for server-side OTP handling.",
      technologies: ["Dart", "Flutter", "Firebase", "Cloud Firestore", "Firebase Cloud Functions"],
      stats: {
        platform: "Mobile / Web App",
        hosting: "Firebase Hosting",
        status: "Live Production"
      },
      imageGradient: "linear-gradient(135deg, #ffb020 0%, #c17a42 50%, #14161a 100%)",
      icon: "activity",
      liveUrl: "https://meterpro-official.web.app/",
      githubUrl: "https://github.com/UmairSiddique-SE/MeterPro",
      highlights: [
        "Firebase Authentication with custom six-digit email OTP verification",
        "Firestore-backed meter data with real-time cloud sync",
        "Google ML Kit and camera capabilities for meter reading",
        "Firebase Cloud Functions for server-side OTP handling"
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
      tagline: "Production-focused personal finance tracker with analytics, PDF statements, and secure authentication.",
      description: "A production-focused personal finance tracker built with Flask, MongoDB, and server-rendered HTML/CSS/JavaScript. Features income and expense management, overall/weekly/monthly/daily and custom-range analytics, category breakdowns, six-month trend charts, PDF financial statements, secure password hashing, and PWA support.",
      technologies: ["Python", "Flask", "MongoDB", "HTML/CSS/JS", "ReportLab", "Vercel"],
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
        "Income and expense tracking with category-based analytics",
        "PDF financial statements and six-month dashboard trend charts",
        "Secure authentication with password hashing and account recovery",
        "PWA support — deployed and live on Vercel"
      ]
    },
    {
      id: "edusphere",
      title: "EduSphere – Multi-School Management SaaS",
      category: "fullstack",
      categoryLabel: "Full-Stack Web App",
      status: "inprogress",
      statusLabel: "In Progress",
      featured: true,
      tagline: "A multi-school SaaS school management system with administration, academics, finance, and subscription management.",
      description: "EduSphere is a multi-school school management platform currently under active development. It brings school administration, academics, communication, finance, and subscription management into one system — with role-based access control, attendance, fees, exams, timetable, and super-admin onboarding workflows.",
      technologies: ["React", "TypeScript", "NestJS", "PostgreSQL", "Prisma", "Tailwind CSS"],
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
        "Multi-school administration with role-based access control",
        "Modules for attendance, fees, exams, timetable, library, and transport",
        "Subscription and plan management with super-admin onboarding",
        "Currently under active development — not yet released"
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
