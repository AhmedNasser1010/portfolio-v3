import { Badge } from "@/components/ui";
import { ProjectProps } from "./Projects";
import { MdArrowOutward } from "react-icons/md";
import { styleEnAr } from "@/lib/utils/styleEnAr";
import { getLocale } from "next-intl/server";
import { titleToKebab } from "@/lib/utils";

const heights = [310, 400, 454];

const Project = async ({
  project,
  index,
}: {
  project: ProjectProps;
  index: number;
}) => {
  const locale = await getLocale();
  const height = heights[index % heights.length];

  return (
    <div
      className="relative overflow-hidden rounded-xl p-3 text-white flex flex-col justify-end cursor-pointer"
      style={{ height }}
      id={titleToKebab(project.title)}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover pointer-events-none"
      >
        <source src={project.video} type="video/webm" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/15" />

      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="mb-2 text-sm w-3/4">{project.summary}</p>
          </div>

          <MdArrowOutward
            className={`${styleEnAr(locale, "", "-scale-x-100")} w-8 mt-4`}
          />
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech, index) => (
            <Badge key={index}>{tech}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
