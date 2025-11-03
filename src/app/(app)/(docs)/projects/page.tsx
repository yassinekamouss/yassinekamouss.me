import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PROJECTS } from "@/features/profile/data/projects";
import type { Project } from "@/features/profile/types/projects";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of web and mobile development projects.",
};

function ProjectItem({
  project,
  shouldPreloadImage,
  isExpanded = false,
}: {
  project: Project;
  shouldPreloadImage?: boolean;
  isExpanded?: boolean;
}) {
  return (
    <Link
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group/post flex flex-col gap-2 p-2",
        "max-sm:screen-line-before max-sm:screen-line-after",
        "sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after",
        isExpanded && "sm:col-span-2" // Make expanded project span 2 columns
      )}
    >
      {project.logo && (
        <div
          className={cn(
            "relative select-none [&_img]:rounded-xl",
            isExpanded ? "[&_img]:aspect-1200/400" : "[&_img]:aspect-1200/630"
          )}
        >
          <Image
            src={project.logo}
            alt={project.title}
            width={1200}
            height={isExpanded ? 400 : 630}
            quality={100}
            priority={shouldPreloadImage}
            unoptimized
          />

          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/10" />

          <span className="absolute top-1.5 right-1.5 rounded-md bg-info px-1.5 font-mono text-sm font-medium text-white text-shadow-xs">
            {isExpanded ? "Featured Project" : "Project"}
          </span>
        </div>
      )}

      <div className="flex flex-col gap-1 p-2">
        <h3
          className={cn(
            "leading-snug font-medium text-balance underline-offset-4 group-hover/post:underline",
            isExpanded ? "text-xl sm:text-2xl" : "text-lg"
          )}
        >
          {project.title}
        </h3>

        {isExpanded && project.description && (
          <p className="mt-2 mb-3 text-sm leading-relaxed text-balance text-muted-foreground sm:text-base">
            {project.description}
          </p>
        )}

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>
            {project.period.start} - {project.period.end || "Présent"}
          </span>
          <span>•</span>
          <span>
            {isExpanded
              ? project.skills.join(", ")
              : `${project.skills.slice(0, 3).join(", ")}${project.skills.length > 3 ? ` +${project.skills.length - 3}` : ""}`}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function Page() {
  return (
    <>
      <div className="screen-line-after px-4">
        <h1 className="text-3xl font-semibold">Projects</h1>
      </div>

      <div className="screen-line-after p-4">
        <p className="font-mono text-sm text-balance text-muted-foreground">
          {metadata.description}
        </p>
      </div>

      <div className="relative py-4">
        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-edge"></div>
          <div className="border-l border-edge"></div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <ProjectItem
              key={project.id}
              project={project}
              shouldPreloadImage={index < 2}
              isExpanded={index === 0}
            />
          ))}
        </div>
      </div>
    </>
  );
}
