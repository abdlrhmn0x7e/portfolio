import Image from "next/image";
import {
  IconBrandAws,
  IconBrandGithub,
  IconBrandNextjs,
  IconBrandPrisma,
  IconBrandReact,
  IconBrandStripe,
  IconBrandTailwind,
  IconBrandTypescript,
  IconDatabase,
  IconGlobe,
} from "@tabler/icons-react";
import type { ComponentProps } from "react";
import { Badge } from "~/components/ui/badge";
import { Card } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { PROJECTS } from "~/lib/constants";
import type { Project, ProjectTag } from "~/lib/types";
import { cn } from "~/lib/utils";

const PROJECT_PREVIEW_PLACEHOLDER =
  "https://placehold.co/640x360/png?text=Project+Preview";

const TAG_ICON_MAP: Record<
  ProjectTag,
  { label: string; Icon: typeof IconBrandReact }
> = {
  nextjs: { label: "Next.js", Icon: IconBrandNextjs },
  react: { label: "React", Icon: IconBrandReact },
  typescript: { label: "TypeScript", Icon: IconBrandTypescript },
  tailwind: { label: "Tailwind CSS", Icon: IconBrandTailwind },
  postgresql: { label: "PostgreSQL", Icon: IconDatabase },
  stripe: { label: "Stripe", Icon: IconBrandStripe },
  aws: { label: "AWS", Icon: IconBrandAws },
  prisma: { label: "Prisma", Icon: IconBrandPrisma },
};

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

function ProjectCard(project: Project & ComponentProps<"div">) {
  const { title, description, links, tags, className, previewImage, ...props } =
    project;
  const projectTags: ProjectTag[] = tags ?? [];
  const previewSrc = previewImage ?? PROJECT_PREVIEW_PLACEHOLDER;

  return (
    <Card
      className={cn(
        "border-border/60 bg-card/80 hover:border-border flex flex-col overflow-hidden py-0",
        className,
      )}
      {...props}
    >
      <div className="border-border/60 bg-muted/20 border-b">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={previewSrc}
            alt={`${title} preview screenshot`}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 960px, 100vw"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-6 p-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <p className="text-lg font-semibold tracking-tight">{title}</p>
            <div className="flex flex-wrap gap-2 text-sm">
              {links.github && (
                <Button variant="ghost" size="sm" asChild>
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconBrandGithub />
                    Code
                  </a>
                </Button>
              )}
              {links.preview && (
                <Button variant="ghost" size="sm" asChild>
                  <a
                    href={links.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconGlobe />
                    Live
                  </a>
                </Button>
              )}
            </div>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {projectTags.length > 0 && (
          <div className="border-border/60 mt-auto flex flex-wrap gap-2 border-t pt-4">
            {projectTags.map((tag) => {
              const { label, Icon } = TAG_ICON_MAP[tag];
              return (
                <Badge key={tag} variant="outline" className="bg-muted/40">
                  <Icon className="size-3.5" aria-hidden="true" />
                  {label}
                </Badge>
              );
            })}
          </div>
        )}
      </div>
    </Card>
  );
}
