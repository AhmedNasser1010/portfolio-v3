import { Link } from "@/i18n/navigation";
import Project from "./Project";
import ProjectsGrid from "./ProjectsGrid";
import { Container } from "@/components/ui";
import { titleToKebab } from "@/lib/utils";
import { PROJECTS } from "@/constants";
import { getLocale, getTranslations } from "next-intl/server";
import { styleEnAr } from "@/lib/utils/styleEnAr";

const heights = [310, 400, 454];

const Projects = async () => {
  const locale = await getLocale();
  const t = await getTranslations("HomePage.projects");
  const cardHeights = PROJECTS.map((_, index) => heights[index % heights.length]);
  return (
    <section className="w-full bg-[#202020]" id="projects">
      <Container className="text-white py-28">
        <h2
          className={`${styleEnAr(locale, "font-dmSerif", "font-montserrat")} text-3xl font-bold mb-8 text-center`}
        >
          {t("title")}
        </h2>
        <ProjectsGrid heights={cardHeights}>
          {PROJECTS.map((project, index) => (
            <Link
              key={index}
              className="block w-full"
              href={`/projects/${titleToKebab(project.title)}`}
            >
              <Project project={project} height={cardHeights[index]} />
            </Link>
          ))}
        </ProjectsGrid>
      </Container>
    </section>
  );
};

export default Projects;