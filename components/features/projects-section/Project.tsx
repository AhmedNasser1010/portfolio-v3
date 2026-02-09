import { Badge } from "@/components/ui";
import { ProjectProps } from "./Projects";
import { MdArrowOutward } from "react-icons/md";

const Project = ({ project }: { project: ProjectProps }) => {
  return (
    <div className="relative overflow-hidden h-[400px] rounded-xl p-3 text-white flex flex-col justify-end cursor-pointer">
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
            <p className="mb-2 text-sm w-3/4">{project.description}</p>
          </div>

          <MdArrowOutward className="w-8 mt-4" />
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
