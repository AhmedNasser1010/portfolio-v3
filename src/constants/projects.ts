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
    video: "/project-videos/ordersync-vid.mp4",
    ogImage: "/images/projects/ordersync/customer-screen-1.jpg",
    gallery: [
      "/images/projects/ordersync/customer-screen-1.jpg",
      "/images/projects/ordersync/customer-screen-2.jpg",
      "/images/projects/ordersync/customer-screen-3.jpg",
      "/images/projects/ordersync/onboarding-screen-1.png",
      "/images/projects/ordersync/onboarding-screen-2.png",
      "/images/projects/ordersync/onboarding-screen-3.png",
      "/images/projects/ordersync/orders-screen-1.png",
      "/images/projects/ordersync/driver-screen-1.jpg",
      "/images/projects/ordersync/driver-screen-2.jpg",
      "/images/projects/ordersync/driver-screen-3.jpg",
      "/images/projects/ordersync/manager-screen-1.jpg",
      "/images/projects/ordersync/manager-screen-2.jpg",
    ],
    summary:
      "A cutting-edge online ordering system meticulously crafted for restaurants.",
    description:
      "OrderSync is a comprehensive online ordering system designed to streamline the ordering process for customers, managers, and riders. The system consists of multiple components: a customer-facing PWA, an orders management app, a manager dashboard, and a rider application. The customer app allows users to browse the menu, place orders, and track their deliveries in real-time. The manager dashboard provides tools for managing orders and analyzing sales data. The rider application offers features for accepting delivery assignments, navigating to delivery locations, and updating order statuses. Built with React, TypeScript, and Firebase.",
    technologies: ["React", "TypeScript", "Firebase", "PWA"],
    github: "https://github.com/AhmedNasser1010/OrderSync",
    view: "https://ordersync-page.vercel.app/ar",
  },
  {
    title: "Mind Space",
    video: "/project-videos/mindspace-vid.mp4",
    ogImage: "/images/projects/mindspace/mindspace-1.png",
    gallery: [
      "/images/projects/mindspace/mindspace-1.png",
      "/images/projects/mindspace/mindspace-2.png",
      "/images/projects/mindspace/mindspace-3.png",
      "/images/projects/mindspace/mindspace-4.png",
      "/images/projects/mindspace/mindspace-5.png",
    ],
    summary:
      "A freestyle dashboard where notes, todos, timers, habits, and links live together on an infinite canvas.",
    description:
      "Mind Space is a fully client-side productivity dashboard built on an infinite canvas. It supports multiple named sheets, widget types including rich text notes, todo lists, counters, timers, stopwheels, calendars, habit trackers, and quick links. Every widget can be dragged, resized, and collapsed with multi-select support. Features include 12 accent color themes, undo/redo, copy/paste across sheets, and light/dark/system theme toggle. All data is persisted to localStorage with no backend required. Built with Next.js, TypeScript, Tailwind CSS, and Zustand.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand", "Radix UI"],
    github: "https://github.com/AhmedNasser1010/mind-space",
    view: "https://mindspace-me.vercel.app",
  }
];
