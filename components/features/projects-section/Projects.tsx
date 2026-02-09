import Link from "next/link";
import Project from "./Project";
import { Container } from "@/components/ui";

export type ProjectProps = {
  title: string;
  video: string;
  gallery: string[];
  description: string;
  technologies: string[];
  github: string;
  view: string;
};

const ProjectsData: ProjectProps[] = [
  {
    title: "OrderSync",
    video: "/project-videos/portfolio-v2.webm",
    gallery: [
      "/images/projects/ordersync/ordersync-customer.png",
      "/images/projects/ordersync/ordersync-orders.png",
      "/images/projects/ordersync/ordersync-manager.png",
      "/images/projects/ordersync/ordersync-rider.png",
    ],
    description:
      "The OrderSync system app delivers a online ordering experience. ",
    technologies: ["Javascript", "TypeScript", "React", "Redux", "Firebase"],
    github: "https://github.com/AhmedNasser1010/ordering-system-admin#readme",
    view: "#",
  },
  {
    title: "Davon Online School",
    video: "/project-videos/portfolio-v2.webm",
    gallery: [
      "/images/projects/ordersync/ordersync-customer.png",
      "/images/projects/ordersync/ordersync-orders.png",
      "/images/projects/ordersync/ordersync-manager.png",
      "/images/projects/ordersync/ordersync-rider.png",
    ],
    description:
      "Welcome to the Davon Online School of Business Consulting! This repository contains the website landing page for our consulting school.",
    technologies: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/AhmedNasser1010/Davon-Online-School#readme",
    view: "https://ahmednasser1010.github.io/Davon-Online-School/",
  },
  {
    title: "UAE Adventure",
    video: "/project-videos/portfolio-v2.webm",
    gallery: [
      "/images/projects/ordersync/ordersync-customer.png",
      "/images/projects/ordersync/ordersync-orders.png",
      "/images/projects/ordersync/ordersync-manager.png",
      "/images/projects/ordersync/ordersync-rider.png",
    ],
    description:
      "UAE Adventure is a simple landing page for adventure agency with a creative design.",
    technologies: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/AhmedNasser1010/emirates-adventure#readme",
    view: "https://ahmednasser1010.github.io/Davon-Online-School/",
  },
  {
    title: "WebNexus",
    video: "/project-videos/portfolio-v2.webm",
    gallery: [
      "/images/projects/ordersync/ordersync-customer.png",
      "/images/projects/ordersync/ordersync-orders.png",
      "/images/projects/ordersync/ordersync-manager.png",
      "/images/projects/ordersync/ordersync-rider.png",
    ],
    description:
      "WebNexus Academy is a static website that offers a wide range of programming courses.",
    technologies: ["HTML", "CSS"],
    github: "https://github.com/AhmedNasser1010/WebNexus-Academy#readme",
    view: "https://ahmednasser1010.github.io/WebNexus-Academy/",
  },
  {
    title: "Code Ninjas",
    video: "/project-videos/portfolio-v2.webm",
    gallery: [
      "/images/projects/ordersync/ordersync-customer.png",
      "/images/projects/ordersync/ordersync-orders.png",
      "/images/projects/ordersync/ordersync-manager.png",
      "/images/projects/ordersync/ordersync-rider.png",
    ],
    description:
      "Code Ninjas is a portfolio website for a medium-sized web development team.",
    technologies: ["HTML", "CSS"],
    github: "https://github.com/AhmedNasser1010/Code-Ninjas#readme",
    view: "https://ahmednasser1010.github.io/Code-Ninjas/",
  },
  {
    title: "To-Do App",
    video: "/project-videos/portfolio-v2.webm",
    gallery: [
      "/images/projects/ordersync/ordersync-customer.png",
      "/images/projects/ordersync/ordersync-orders.png",
      "/images/projects/ordersync/ordersync-manager.png",
      "/images/projects/ordersync/ordersync-rider.png",
    ],
    description:
      "This is a comprehensive React app that allows users to create and manage their to-do lists.",
    technologies: ["Javascript", "React", "Redux", "Local Storage"],
    github: "https://github.com/AhmedNasser1010/react-todo-app#readme",
    view: "https://todo-ahmed.vercel.app/",
  },
  {
    title: "Leon",
    video: "/project-videos/portfolio-v2.webm",
    gallery: [
      "/images/projects/ordersync/ordersync-customer.png",
      "/images/projects/ordersync/ordersync-orders.png",
      "/images/projects/ordersync/ordersync-manager.png",
      "/images/projects/ordersync/ordersync-rider.png",
    ],
    description: "Leon is a portfolio website designed for a small team.",
    technologies: ["HTML", "CSS"],
    github: "https://github.com/AhmedNasser1010/Leon#readme",
    view: "https://ahmednasser1010.github.io/Leon/",
  },
];

const Projects = () => {
  return (
    <section className="w-full bg-[#202020]" id="projects">
      <Container className="text-white py-28">
        <main className="columns-1 gap-9 lg:columns-2">
          {ProjectsData.map((project, index) => (
            <Link
              key={index}
              className="mb-9 inline-block w-full break-inside-avoid"
              href={`/projects/${project.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <Project project={project} index={index} />
            </Link>
          ))}
        </main>
      </Container>
    </section>
  );
};

export default Projects;
