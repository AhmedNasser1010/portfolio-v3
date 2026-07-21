export type ProjectType = {
  title: string;
  video: string;
  ogImage: string;
  gallery: string[];
  summary: string;
  description: string;
  technologies: string[];
  github: string;
  view: string;
};

export const PROJECTS: ProjectType[] = [
  {
    title: "OrderSync",
    video: "/project-videos/portfolio-v2.webm",
    ogImage: "/images/projects/ordersync/ordersync-customer.png",
    gallery: [
      "/images/projects/ordersync/ordersync-customer.png",
      "/images/projects/ordersync/ordersync-orders.png",
      "/images/projects/ordersync/ordersync-manager.png",
      "/images/projects/ordersync/ordersync-rider.png",
    ],
    summary:
      "A cutting-edge online ordering system meticulously crafted for restaurants.",
    description:
      "OrderSync is a comprehensive online ordering system designed to streamline the ordering process for customers, managers, and riders. The system consists of multiple components: a customer-facing PWA, an orders management app, a manager dashboard, and a rider application. The customer app allows users to browse the menu, place orders, and track their deliveries in real-time. The manager dashboard provides tools for managing orders and analyzing sales data. The rider application offers features for accepting delivery assignments, navigating to delivery locations, and updating order statuses. Built with React, TypeScript, and Firebase.",
    technologies: ["React", "TypeScript", "Firebase", "PWA"],
    github: "https://github.com/AhmedNasser1010/OrderSync",
    view: "https://ordersync-customer.vercel.app",
  },
  {
    title: "Mind Space",
    video: "/project-videos/portfolio-v2.webm",
    ogImage: "/images/projects/ordersync/ordersync-customer.png",
    gallery: [
      "/images/projects/ordersync/ordersync-customer.png",
      "/images/projects/ordersync/ordersync-orders.png",
      "/images/projects/ordersync/ordersync-manager.png",
      "/images/projects/ordersync/ordersync-rider.png",
    ],
    summary:
      "A freestyle dashboard where notes, todos, timers, habits, and links live together on an infinite canvas.",
    description:
      "Mind Space is a fully client-side productivity dashboard built on an infinite canvas. It supports multiple named sheets, widget types including rich text notes, todo lists, counters, timers, stopwheels, calendars, habit trackers, and quick links. Every widget can be dragged, resized, and collapsed with multi-select support. Features include 12 accent color themes, undo/redo, copy/paste across sheets, and light/dark/system theme toggle. All data is persisted to localStorage with no backend required. Built with Next.js, TypeScript, Tailwind CSS, and Zustand.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand", "Radix UI"],
    github: "https://github.com/AhmedNasser1010/mind-space",
    view: "https://mindspace-me.vercel.app",
  },
  {
    title: "Train Tracking RAG Chatbot",
    video: "/project-videos/portfolio-v2.webm",
    ogImage: "/images/projects/ordersync/ordersync-customer.png",
    gallery: [
      "/images/projects/ordersync/ordersync-customer.png",
      "/images/projects/ordersync/ordersync-orders.png",
      "/images/projects/ordersync/ordersync-manager.png",
      "/images/projects/ordersync/ordersync-rider.png",
    ],
    summary:
      "An AI-powered Telegram chatbot that helps users find train schedules, check delays, and get station details.",
    description:
      "The Train Tracking RAG Chatbot is an AI-powered chatbot deployed on Cloudflare Workers that helps users find train schedules, check delays, and get station details via Telegram. It uses a Text-to-SQL model to convert natural language questions into database queries, retrieves results from a PostgreSQL database, and generates natural language responses using a Data-to-Text model. The system supports Arabic and English, automatically tracks most used trains, and shares location-based delay improvements.",
    technologies: ["TypeScript", "Python", "Cloudflare Workers", "PostgreSQL", "Telegram Bot API", "RAG"],
    github: "https://github.com/AhmedNasser1010/Train-Tracking-RAG-Chatbot",
    view: "",
  },
  {
    title: "Davon Online School",
    video: "/project-videos/portfolio-v2.webm",
    ogImage: "/images/projects/ordersync/ordersync-customer.png",
    gallery: [
      "/images/projects/ordersync/ordersync-customer.png",
      "/images/projects/ordersync/ordersync-orders.png",
      "/images/projects/ordersync/ordersync-manager.png",
      "/images/projects/ordersync/ordersync-rider.png",
    ],
    summary:
      "A multi-page landing website for a business consulting school with responsive design and smooth animations.",
    description:
      "Davon Online School of Business Consulting is a comprehensive multi-page landing website designed to provide high-quality business consulting education. The site features pages for Home, Who We Are, Learning Modules, Resources, Our Team, and Contact with an FAQ section. It includes a clean and modern design with intuitive navigation, responsive layouts for all devices, and smooth animations. Visitors can explore courses, meet instructors, and subscribe to the mailing list.",
    technologies: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/AhmedNasser1010/Davon-Online-School",
    view: "https://ahmednasser1010.github.io/Davon-Online-School/",
  },
];
