import { IconBrandGithub } from "@tabler/icons-react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  RefreshCw,
} from "lucide-react";
import Image from "next/image";
import type { ComponentProps } from "react";
import { AspectRatio } from "~/components/ui/aspect-ratio";
import { Button } from "~/components/ui/button";
import { H1 } from "~/components/ui/h1";
import { PROJECTS } from "~/lib/constants";
import type { Project } from "~/lib/types";
import { cn } from "~/lib/utils";

export function ProofOfWork() {
  return (
    <section className="space-y-4">
      <div className="">
        <H1>Proof of Work</H1>
        <p className="text-muted-foreground">
          Here are some of the projects I&apos;ve worked on. Hope you like them!
        </p>
      </div>

      <div className="relative flex flex-col gap-4">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.title + index}
            {...project}
            className="sticky"
            style={{ top: `${index * 40 + 100}px` }}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  description,
  image,
  links,
  className,
  ...props
}: Project & ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "bg-card grid grid-cols-1 items-center gap-6 overflow-hidden border p-2 md:grid-cols-2",
        className,
      )}
      {...props}
    >
      <div className="bg-accent flex h-fit shrink-0 flex-col gap-2 overflow-hidden">
        {/* Window Controls */}
        <div className="flex justify-end gap-3 px-2 pt-2">
          {/* Browser Controls */}
          <div className="flex items-center gap-2">
            <ChevronLeft
              size={16}
              className="hover:text-primary cursor-not-allowed"
            />
            <ChevronRight
              size={16}
              className="hover:text-primary cursor-not-allowed"
            />
            <RefreshCw
              size={12}
              className="hover:text-primary cursor-not-allowed"
            />
          </div>

          {/* URL Bar */}
          <div className="bg-card flex-1 overflow-hidden border px-2">
            {links.preview && (
              <a
                href={links.preview}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary line-clamp-1 text-xs"
              >
                {links.preview}
              </a>
            )}
          </div>

          {/* Window Controls */}
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 cursor-not-allowed rounded-full bg-red-500 hover:bg-red-600" />
            <div className="h-2 w-2 cursor-not-allowed rounded-full bg-yellow-500 hover:bg-yellow-600" />
            <div className="h-2 w-2 cursor-not-allowed rounded-full bg-green-500 hover:bg-green-600" />
          </div>
        </div>

        <AspectRatio ratio={16 / 9}>
          <Image
            src={image}
            alt={title}
            width={960}
            height={540}
            className="h-full object-cover"
            priority
          />
        </AspectRatio>
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>

        <div className="flex flex-col gap-2 md:flex-row">
          {links.github && (
            <Button className="w-full flex-1" variant="secondary" asChild>
              <a href={links.github} target="_blank" rel="noopener noreferrer">
                <IconBrandGithub />
                View Source Code
              </a>
            </Button>
          )}
          {links.preview && (
            <Button className="w-full flex-1" asChild>
              <a href={links.preview} target="_blank" rel="noopener noreferrer">
                <ArrowUpRight />
                Visit Live Site
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
