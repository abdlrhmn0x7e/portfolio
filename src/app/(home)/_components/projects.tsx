import { IconBrandGithub, IconGlobe } from "@tabler/icons-react";
import type { ComponentProps } from "react";
import { Button } from "~/components/ui/button";
import { PROJECTS } from "~/lib/constants";
import type { Project } from "~/lib/types";
import { cn } from "~/lib/utils";

export function Projects() {
  return (
    <section id="projects" className="grid grid-cols-1 gap-4 md:grid-cols-4">
      <a href="#projects" className="size-fit">
        Projects
      </a>

      <div className="col-span-3 flex flex-col gap-6">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.title + index} {...project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  description,
  links,
  className,
  ...props
}: Project & ComponentProps<"div">) {
  return (
    <div className={cn(className, "flex flex-col gap-1")} {...props}>
      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
        <p>{title}</p>
        <div className="flex items-center">
          {links.github && (
            <Button variant="link" size="sm" asChild>
              <a href={links.github} target="_blank" rel="noopener noreferrer">
                <IconBrandGithub />
                View Source Code
              </a>
            </Button>
          )}
          {links.preview && (
            <Button variant="link" size="sm" asChild>
              <a href={links.preview} target="_blank" rel="noopener noreferrer">
                <IconGlobe />
                Visit Live Site
              </a>
            </Button>
          )}
        </div>
      </div>
      <p className="text-muted-foreground text-sm text-pretty">{description}</p>
    </div>
  );
}
