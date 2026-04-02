export type ExperienceItem = {
  from: number;
  to: number;
  role: string;
  focus: string[];
  achievements?: string[];
};

export type Project = {
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
  year?: string;
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type TechItem = {
  label: string;
  short: string;
};

export const profile = {
  name: "Dhananjaya R B",
  title: "Tech Lead",
  location: "Bangalore, India",
  dob: "01-11-1992",
  tagline:
    "Building enterprise-grade mobile, web, and cloud products for Payroll, Attendance, CRM, and AI-integrated workflows.",
  company: "ResolveBiz Services And Apps Private Limited",
  aboutSummary:
    "10+ years as a Tech Lead delivering scalable SaaS solutions across mobile (Xamarin/Flutter), web (Laravel/ASP.NET/React), and cloud (Azure/AWS). I specialize in integrations (SMS/WhatsApp, KYC, Tally/Zoho/DarwinBox), microservices and messaging (RabbitMQ/Service Bus), and modern CI/CD delivery with Azure DevOps/Jenkins.",
};

export const socialLinks = {
  linkedin: "http://www.linkedin.com/in/dhananjaya-rb-a64890122",
  github: "https://github.com/DhananjayaRB",
  email: "dhananjayarb98@gmail.com",
  phonePrimary: "9071361273",
  phoneSecondary: "8105294450",
  /** Google Drive viewer (no forced login like uc?export=download). Opens in new tab from UI. */
  resumeViewUrl:
    "https://drive.google.com/file/d/1uJVmWlDYOp-40s-kULZ0mb_dSeb4-hkg/view",
  /** Same as view URL — used by “Resume” buttons site-wide. */
  resumeDownloadUrl:
    "https://drive.google.com/file/d/1uJVmWlDYOp-40s-kULZ0mb_dSeb4-hkg/view",
};

export const experience: ExperienceItem[] = [
  {
    from: 2016,
    to: 2017,
    role: "Trainee Software Engineer (Xamarin Mobile Apps)",
    focus: [
      "Xamarin (Android/iOS)",
      "Payroll, Attendance with GPS, Leave",
      "Early integration and product delivery",
    ],
    achievements: ["Built core app features end-to-end."],
  },
  {
    from: 2017,
    to: 2018,
    role: "Software Engineer (Xamarin + Laravel)",
    focus: [
      "Xamarin Mobile Apps",
      "Laravel Web App Development",
      "Expense, Attendance with Geofence, CRM, Firebase Notifications",
    ],
    achievements: ["Improved reliability for recurring payroll workflows."],
  },
  {
    from: 2018,
    to: 2019,
    role: "Software Engineer (ASP.NET + Biometric Integration)",
    focus: [
      "Xamarin + Laravel",
      "ASP.NET Web Forms and Windows Forms",
      "Biometric integration with schedulers, cron, and database support",
    ],
    achievements: ["Delivered stable attendance and biometric data pipelines."],
  },
  {
    from: 2019,
    to: 2020,
    role: "Software Engineer (Flutter + AWS + SMS Integration)",
    focus: [
      "Flutter Mobile App Development",
      "AWS S3 integration",
      "SMS integration for alerts on payslips",
      "Tax/PF/Payroll calculations and Tally integration",
    ],
    achievements: ["Owned major payroll customization and alert workflows."],
  },
  {
    from: 2020,
    to: 2021,
    role: "Senior Software Engineer (Azure + Team Handling)",
    focus: [
      "Azure VM/App Services/Functions",
      "Team coordination and delivery ownership",
      "Azure DevOps, OS ticketing integration",
      "WhatsApp integration and Azure infrastructure handling",
    ],
    achievements: ["Led payroll delivery and cloud infrastructure improvements."],
  },
  {
    from: 2021,
    to: 2023,
    role: "Team Lead (Cloud, DevOps, Integrations)",
    focus: [
      "CI/CD ownership (Azure DevOps, Jenkins)",
      "Containers and cloud operations",
      "Integrations: MFA/SSO, Payment Gateways, KYC",
      "Database migrations across multiple engines",
    ],
    achievements: ["Improved release velocity with dependable pipelines."],
  },
  {
    from: 2023,
    to: 2024,
    role: "Team Lead (CI/CD, Containers, Databases, Migration)",
    focus: [
      "Docker/Kubernetes and registry management",
      "Azure Functions and containers",
      "Databases: SQL Server/MySQL/PostgreSQL/MongoDB",
      "Migrations for existing customers and ongoing product support",
    ],
    achievements: ["Standardized build/deploy processes for multi-product delivery."],
  },
  {
    from: 2024,
    to: 2026,
    role: "Tech Lead (AI, Microservices, CRM, Azure Architecture)",
    focus: [
      "AI integrations: ChatGPT/LLMs/Agents/Cursor-style workflows",
      "Microservices architecture and messaging (RabbitMQ/Service Bus)",
      "CRM (Enterprise + NGO) and modern Azure architecture",
      "Azure cost optimization and marketplace deployment",
      "EziiSign document builder: Form 16, DSC Sign, e-signing workflows",
    ],
    achievements: ["Delivered AI-enabled enhancements and CRM platform evolution."],
  },
];

export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    skills: ["ReactJS", "NextJS", "NodeJS", "Modern UI patterns"],
  },
  {
    title: "Backend",
    skills: [
      "Laravel",
      "ASP.NET",
      "ASP.NET Core (.NET family)",
      "REST APIs",
      "GraphQL APIs",
      "Microservices",
      "APIs & integrations",
    ],
  },
  {
    title: "Mobile",
    skills: ["Xamarin", "Xamarin Forms", "Flutter", "React Native (experience)"],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "Microsoft Azure (VM, Functions, App Services)",
      "Kubernetes",
      "Docker",
      "Azure DevOps, Jenkins, CI/CD",
      "AWS S3, Email services",
    ],
  },
  {
    title: "Databases",
    skills: ["SQL Server", "MySQL", "PostgreSQL", "SQLite", "MongoDB"],
  },
  {
    title: "Integrations",
    skills: [
      "SMS, WhatsApp APIs",
      "DSC integration (document signing)",
      "Payment gateways (PayU, Cashee)",
      "KYC integrations",
      "Tally, Zoho, DarwinBox",
      "RabbitMQ, Azure Service Bus",
    ],
  },
  {
    title: "Security & Platform",
    skills: ["SSO, MFA", "SSL, Domains", "Networking basics"],
  },
  {
    title: "AI",
    skills: ["ChatGPT", "LLMs", "Agents","N8N","MCP", "Cursor-style workflows"],
  },
];

export const projects: Project[] = [
  {
    title: "Payroll Management System",
    year: "2016–2026",
    description:
      "Full lifecycle ownership of payroll modules including calculations, notifications, tax logic, and operational support across multiple customer setups.",
    highlights: [
      "Payroll customizations and new wage implementations",
      "Tax, PF, PT, ESI calculators and regime updates",
      "Payslip alerts via SMS/WhatsApp integrations",
      "Reliability improvements and safe migrations",
    ],
    tags: ["Payroll", "Web", "Mobile", "Integrations", "Cloud", "AI"],
  },
  {
    title: "Attendance & Leave Management",
    year: "2016–2026",
    description:
      "Attendance flows for GPS/geofence-based tracking plus biometric integrations, with leave approvals and operational tooling.",
    highlights: [
      "Attendance biometric integration support",
      "Schedulers/cron-based sync and schedulers",
      "Leave/attendance operational dashboards",
    ],
    tags: ["Attendance", "Leave", "Mobile", "Web", "Integrations"],
  },
  {
    title: "Expense Management Platform",
    year: "2017–2026",
    description:
      "Expense capture and workflow automation with CRM-ready outputs for enterprise reporting.",
    highlights: ["Expense workflows and reporting", "Mobile-first capture", "CRM alignment"],
    tags: ["Mobile", "Web", "CRM", "Integrations"],
  },
  {
    title: "Enterprise & NGO CRM Systems",
    year: "2018–2026",
    description:
      "CRM systems tailored for enterprise and NGO use, including customer management, workflows, and integrations.",
    highlights: [
      "Enterprise and NGO CRM support",
      "Modernization across product versions",
      "Integrations: Zoho, DarwinBox, Tally (as applicable)",
    ],
    tags: ["CRM", "Web", "Cloud"],
  },
  {
    title: "Azure Infrastructure & Cost Optimization",
    year: "2020–2026",
    description:
      "Azure architecture ownership focused on stability, deployment automation, and cost optimization across multiple environments.",
    highlights: [
      "Azure VM/App Services/Functions architecture",
      "Azure marketplace deployment support",
      "Cost analysis and optimization",
    ],
    tags: ["Cloud", "DevOps", "Azure", "CI/CD"],
  },
  {
    title: "AI Integrations (LLMs & Agents)",
    year: "2024–2026",
    description:
      "AI-enabled enhancements to operational flows using LLMs and agent-style workflows for product experiences.",
    highlights: [
      "LLM integrations (ChatGPT-style workflows)",
      "Agent orchestration patterns",
      "AI workflow integration into enterprise apps",
    ],
    tags: ["AI", "Microservices", "Cloud", "Web"],
  },
];

export const techStack: TechItem[] = [
  { label: "Next.js", short: "Next" },
  { label: "React", short: "React" },
  { label: "Node.js", short: "Node" },
  { label: "Laravel", short: "Laravel" },
  { label: "ASP.NET", short: "ASP.NET" },
  { label: "Azure", short: "Azure" },
  { label: "AWS", short: "AWS" },
  { label: "Docker", short: "Docker" },
  { label: "Kubernetes", short: "K8s" },
  { label: "RabbitMQ", short: "MQ" },
  { label: "Service Bus", short: "SB" },
  { label: "SQL Server", short: "MSSQL" },
  { label: "MySQL", short: "MySQL" },
  { label: "PostgreSQL", short: "PG" },
  { label: "MongoDB", short: "Mongo" },
  { label: "Xamarin", short: "Xam" },
  { label: "Flutter", short: "Flutter" },
  { label: "Tailwind CSS", short: "TW" },
];

