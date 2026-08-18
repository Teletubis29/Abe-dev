import {
  Project,
  TechFeature,
  TechCategory,
  Experience,
  ContactInfo,
  TechIcon,
  AboutInfo,
  SoftSkill,
} from "@/types";

// ─── Hero Tech Stack Icons ───────────────────────────────────────────────────
export const heroTechStack: TechIcon[] = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: "Node.js", icon: "🟢" },
  // { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Prisma", icon: "△" },
  { name: "Docker", icon: "🐳" },
  { name: "Git", icon: "📦" },
  { name: "GitHub", icon: "🐙" },
];

// ─── Featured Project ────────────────────────────────────────────────────────
export const featuredProject: Project = {
  id: "ecommerce-platform",
  title: "Production E-Commerce Platform",
  description:
    "A full-stack e-commerce platform used by a real company. Handles products, orders, payments, and admin operations.",
  image: "/images/maison-de-raux.png",
  mobileImage: "/images/maison-de-raux-mobile1.png",
  tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
  featured: true,
  details: [
    { label: "Role", value: "Fullstack Developer", icon: "👤" },
    { label: "Status", value: "Production", icon: "🚀" },
    { label: "Duration", value: "2025 - Present", icon: "📅" },
    { label: "Company", value: "Maison De Raux", icon: "🏢" },
  ],
  caseStudyUrl: "#",
  liveUrl: "https://maisonderaux.com/",
  screenshots: ["/images/maison-de-raux.png"],
};

// ─── Tech Features Bar ───────────────────────────────────────────────────────
export const techFeatures: TechFeature[] = [
  {
    icon: "🔐",
    title: "Authentication",
    subtitle: "JWT & Role Management",
  },
  {
    icon: "💳",
    title: "Payment",
    subtitle: "Midtrans Integration",
  },
  {
    icon: "📊",
    title: "Admin Dashboard",
    subtitle: "Manage Products & Orders",
  },
  {
    icon: "🔗",
    title: "REST API",
    subtitle: "Secure & Scalable API",
  },
  {
    icon: "🚀",
    title: "Deployment",
    subtitle: "Docker, Nginx, VPS",
  },
];

// ─── More Projects ───────────────────────────────────────────────────────────
export const moreProjects: Project[] = [
  {
    id: "invoice-saas",
    title: "Invoice & Business Management SaaS",
    category: "SaaS",
    description:
      "Multi-tenant SaaS for managing invoices, customers, and payments. Includes subscription, roles, and PDF generation.",
    image: "/images/project-invoice.jpg",
    tags: ["SaaS"],
  },
  {
    id: "logistics-system",
    title: "Logistics & Cargo Management System",
    category: "Web Application",
    description:
      "Real-time logistics tracking system for shipments, drivers, warehouses, and delivery management.",
    image: "/images/project-logistics.jpg",
    tags: ["Web Application"],
  },
];

// ─── All Projects (Projects Page) ────────────────────────────────────────────
export const projectCategories = [
  "All",
  "Web Application",
  "SaaS",
  "E-Commerce",
  "Dashboard",
] as const;

export const projectsData: Project[] = [
  {
    id: "ecommerce-platform",
    title: "Production E-Commerce Platform",
    category: "E-Commerce",
    description:
      "A full-stack e-commerce platform used by a real company. Handles products, orders, payments, customers and admin operations.",
    image: "/images/maison-de-raux.png",
    mobileImage: "/images/maison-de-raux-mobile1.png",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Docker", "GitHub"],
    techStackIcons: [
      { name: "Next.js", icon: "N" },
      { name: "Node.js", icon: "🟢" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Prisma", icon: "△" },
      { name: "Docker", icon: "🐳" },
      { name: "GitHub", icon: "🐙" },
    ],
    caseStudyUrl: "#",
    liveUrl: "https://maisonderaux.com/",
    featured: true,
  },
  {
    id: "invoice-saas",
    title: "Invoice & Business Management SaaS",
    category: "SaaS",
    description:
      "Multi-tenant SaaS for managing invoices, customers, payments, reports and team management.",
    image: "/images/project-invoice.jpg",
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    techStackIcons: [
      { name: "Next.js", icon: "N" },
      { name: "TypeScript", icon: "TS" },
      { name: "Node.js", icon: "🟢" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Tailwind CSS", icon: "🌊" },
    ],
    caseStudyUrl: "#",
    liveUrl: "#",
  },
  {
    id: "logistics-system",
    title: "Logistics & Cargo Management System",
    category: "Web Application",
    description:
      "Real-time logistics tracking system for shipments, drivers, warehouses and delivery management.",
    image: "/images/project-logistics.jpg",
    tags: ["Next.js", "Express", "Node.js", "PostgreSQL", "Docker", "GitHub"],
    techStackIcons: [
      { name: "Next.js", icon: "N" },
      { name: "Express", icon: "Ex" },
      { name: "Node.js", icon: "🟢" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Docker", icon: "🐳" },
      { name: "GitHub", icon: "🐙" },
    ],
    caseStudyUrl: "#",
    liveUrl: "#",
  },
  {
    id: "admin-dashboard",
    title: "Admin Dashboard Starter",
    category: "Dashboard",
    description:
      "A modern admin dashboard template with dark mode, roles & permissions, and analytics.",
    image: "/images/project-ecommerce.jpg",
    tags: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Analytics"],
    techStackIcons: [
      { name: "React", icon: "⚛️" },
      { name: "TypeScript", icon: "TS" },
      { name: "Tailwind CSS", icon: "🌊" },
      { name: "Next.js", icon: "▲" },
      { name: "Analytics", icon: "📊" },
    ],
    caseStudyUrl: "#",
    liveUrl: "#",
  },
];

// ─── Tech Stack ──────────────────────────────────────────────────────────────
export const techCategories: TechCategory[] = [
  {
    name: "Frontend",
    icon: "🖥️",
    skills: [
      { name: "Next.js", icon: "▲" },
      { name: "React", icon: "⚛️" },
      { name: "TypeScript", icon: "TS" },
      { name: "Tailwind CSS", icon: "🌊" },
      { name: "HTML5", icon: "📄" },
      { name: "CSS3", icon: "🎨" },
    ],
  },
  {
    name: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express", icon: "🚂" },
      { name: "REST API", icon: "🔗" },
    ],
  },
  {
    name: "Database",
    icon: "🗄️",
    skills: [
      { name: "MongoDB", icon: "🍃" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MySQL", icon: "🐬" },
      { name: "Redis", icon: "🔴" },
      { name: "Prisma", icon: "△" },
    ],
  },
  {
    name: "DevOps",
    icon: "🔧",
    skills: [
      { name: "Docker", icon: "🐳" },
      { name: "Nginx", icon: "🌐" },
      { name: "Linux", icon: "🐧" },
      { name: "CI/CD", icon: "🔄" },
      { name: "VPS", icon: "☁️" },
    ],
  },
  {
    name: "Tools",
    icon: "🛠️",
    skills: [
      { name: "Git", icon: "📦" },
      { name: "GitHub", icon: "🐙" },
      { name: "VS Code", icon: "💻" },
      { name: "Postman", icon: "📮" },
      { name: "Figma", icon: "🎨" },
    ],
  },
];

// ─── Skills Page Detailed Categories ─────────────────────────────────────────
export const skillFilterCategories = [
  "All Skills",
  "Frontend",
  "Backend",
  "Database",
  "DevOps & Tools",
  "Others",
] as const;

export const detailedSkillCategories = [
  {
    id: "frontend",
    name: "Frontend",
    skills: [
      { name: "Next.js", iconKey: "nextjs" },
      { name: "React", iconKey: "react" },
      { name: "TypeScript", iconKey: "typescript" },
      { name: "Tailwind CSS", iconKey: "tailwind" },
      { name: "HTML5", iconKey: "html5" },
      { name: "CSS3", iconKey: "css3" },
      { name: "Bootstrap", iconKey: "bootstrap" },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    skills: [
      { name: "Node.js", iconKey: "nodejs" },
      { name: "Express.js", iconKey: "express" },
      { name: "REST API", iconKey: "restapi" },
      { name: "JWT", iconKey: "jwt" },
      { name: "Socket.io", iconKey: "socketio" },
    ],
  },
  {
    id: "database",
    name: "Database",
    skills: [
      { name: "PostgreSQL", iconKey: "postgresql" },
      { name: "Prisma", iconKey: "prisma" },
      { name: "Redis", iconKey: "redis" },
      { name: "Database Design", iconKey: "database-design" },
      { name: "Migrations", iconKey: "migrations" },
    ],
  },
  {
    id: "devops-tools",
    name: "DevOps & Tools",
    skills: [
      { name: "Docker", iconKey: "docker" },
      { name: "Nginx", iconKey: "nginx" },
      { name: "Git", iconKey: "git" },
      { name: "GitHub", iconKey: "github" },
      { name: "Linux", iconKey: "linux" },
      { name: "PM2", iconKey: "pm2" },
    ],
  },
  {
    id: "others",
    name: "Others",
    skills: [
      { name: "Slack", iconKey: "slack" },
      { name: "VS Code", iconKey: "vscode" },
      { name: "CI/CD", iconKey: "cicd" },
      { name: "Postman", iconKey: "postman" },
      { name: "Jira", iconKey: "jira" },
      
      { name: "ESLint", iconKey: "eslint" },
      { name: "Prettier", iconKey: "prettier" },
      { name: "Figma", iconKey: "figma" },
    ],
  },
];

export const softSkills: SoftSkill[] = [
  {
    iconName: "problem-solving",
    title: "Problem Solving",
    description: "Strong analytical and problem-solving skills.",
  },
  {
    iconName: "clean-code",
    title: "Clean Code",
    description: "Write maintainable, scalable and efficient code.",
  },
  {
    iconName: "communication",
    title: "Communication",
    description: "Clear communication and team collaboration.",
  },
  {
    iconName: "fast-learner",
    title: "Fast Learner",
    description: "Quick to learn new technologies and adapt.",
  },
];

// ─── Experience ──────────────────────────────────────────────────────────────
export const experiences: Experience[] = [
  {
    id: "fullstack-dev",
    role: "Fullstack Developer",
    company: "Confidential Company",
    duration: "2024 – Present",
    description:
      "Building and maintaining the company's e-commerce platform. Responsible for frontend, backend, database, and deployment.",
  },
];

// ─── Contact Info ────────────────────────────────────────────────────────────
export const contactInfo: ContactInfo[] = [
  {
    icon: "✉️",
    label: "Email",
    value: "muhamadsyech46@gmail.com",
    href: "mailto:muhamadsyech46@gmail.com",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Indonesia",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+62 821-2341-0729",
    href: "tel:+6282123410729",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/muhamad-syech-abu-bakar-sidiq-ba61751b0/",
    href: "https://www.linkedin.com/in/muhamad-syech-abu-bakar-sidiq-ba61751b0/",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "github.com/Teletubis29",
    href: "https://github.com/Teletubis29",
  },
];

// ─── About Page Data ─────────────────────────────────────────────────────────
export const aboutData: AboutInfo = {
  name: "Abe",
  location: "Indonesia",
  email: "muhamadsyech46@gmail.com",
  freelanceStatus: "Available",
  role: "Fullstack Developer",
  headline: "I'm Abe, a Fullstack Developer who builds production-ready web applications.",
  bio: "I enjoy turning complex problems into simple, beautiful and efficient solutions. I have experience building and maintaining projects from frontend to backend, database design, deployment and server management.",
  image: "/images/hero1.png",
  cvUrl: "#",
  stats: [
    {
      iconName: "experience",
      value: "3+",
      label: "Years Experience",
    },
    {
      iconName: "projects",
      value: "15+",
      label: "Projects Completed",
    },
    {
      iconName: "technologies",
      value: "5+",
      label: "Technologies",
    },
    {
      iconName: "satisfaction",
      value: "99%",
      label: "Client Satisfaction",
    },
  ],
  journey: [
    {
      year: "2021",
      description:
        "Started my journey as a self-taught developer focusing on frontend development.",
    },
    {
      year: "2022",
      description:
        "Worked on various projects and learned backend development and databases.",
    },
    {
      year: "2023",
      description:
        "Joined a company as a Fullstack Developer and built several production systems.",
    },
    {
      year: "2024 - Present",
      description:
        "Building and maintaining production systems, focusing on performance, scalability and great user experience.",
    },
  ],
};
