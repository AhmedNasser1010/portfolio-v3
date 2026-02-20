import { Link } from "@/i18n/navigation";
import Project from "./Project";
import { Container } from "@/components/ui";
import { titleToKebab } from "@/lib/utils";
import { PROJECTS } from "@/constants";

const Projects = () => {
  return (
    <section className="w-full bg-[#202020]" id="projects">
      <Container className="text-white py-28">
        <div className="columns-1 gap-9 lg:columns-2">
          {PROJECTS.map((project, index) => (
            <Link
              key={index}
              className="mb-9 inline-block w-full break-inside-avoid"
              href={`/projects/${titleToKebab(project.title)}`}
            >
              <Project project={project} index={index} />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
