import { use } from "react";

interface Props {
  params: Promise<{ project: string }>;
}

export default function ProjectPage({ params }: Props) {
  const { project } = use(params);
  return <div>Project: {project}</div>;
}
