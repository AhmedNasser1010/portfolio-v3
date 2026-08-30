"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

const DESKTOP_QUERY = "(min-width: 1024px)";

type ProjectsGridProps = {
  children: React.ReactNode[];
  heights: number[];
};

const ProjectsGrid = ({ children, heights }: ProjectsGridProps) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(DESKTOP_QUERY);
    const update = () => setIsDesktop(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const columns = useMemo(() => {
    if (!isDesktop) return [children];
    const cols: React.ReactNode[][] = [[], []];
    const sums = [0, 0];
    children.forEach((child, i) => {
      const target = sums[0] <= sums[1] ? 0 : 1;
      cols[target].push(child);
      sums[target] += heights[i % heights.length];
    });
    return cols;
  }, [children, heights, isDesktop]);

  return (
    <div className={cn("flex items-start", isDesktop && "gap-9")}>
      {columns.map((column, index) => (
        <div key={index} className="flex-1 min-w-0 space-y-9">
          {column}
        </div>
      ))}
    </div>
  );
};

export default ProjectsGrid;