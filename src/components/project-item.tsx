import Image from "next/image";
import Link from "next/link";
import React from "react";

import type { Project } from "@/features/profile/types/projects";
import { cn } from "@/lib/utils";

export function ProjectItem({
  project,
  shouldPreloadImage,
}: {
  project: Project;
  shouldPreloadImage?: boolean;
}) {
  return (
    <Link
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group/post flex flex-col gap-2 p-2",
        "max-sm:screen-line-before max-sm:screen-line-after",
        "sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after"
      )}
    >
      {project.logo && (
        <div className="relative select-none [&_img]:aspect-1200/630 [&_img]:rounded-xl">
          <Image
            src={project.logo}
            alt={project.title}
            width={1200}
            height={630}
            quality={100}
            priority={shouldPreloadImage}
            unoptimized
          />

          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/10" />

          <span className="absolute top-1.5 right-1.5 rounded-md bg-info px-1.5 font-mono text-sm font-medium text-white text-shadow-xs">
            Project
          </span>
        </div>
      )}

      <div className="flex flex-col gap-1 p-2">
        <h3 className="text-lg leading-snug font-medium text-balance underline-offset-4 group-hover/post:underline">
          {project.title}
        </h3>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>
            {project.period.start} - {project.period.end || "Présent"}
          </span>
          <span>•</span>
          <span>{project.skills.slice(0, 3).join(", ")}</span>
          {project.skills.length > 3 && (
            <span>+{project.skills.length - 3}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
