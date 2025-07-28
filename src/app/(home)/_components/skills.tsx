import {
  IconBrandMysql,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandPrisma,
  IconBrandReact,
  IconBrandSocketIo,
  IconBrandTailwind,
  IconBrandTypescript,
} from "@tabler/icons-react";
import Image from "next/image";
import { Badge } from "~/components/ui/badge";
import { H1 } from "~/components/ui/h1";

const SKILLS = [
  // Frontend
  {
    name: "Next.js",
    icon: <IconBrandNextjs />,
  },
  {
    name: "TypeScript",
    icon: <IconBrandTypescript />,
  },
  {
    name: "React",
    icon: <IconBrandReact />,
  },
  {
    name: "Tailwind",
    icon: <IconBrandTailwind />,
  },
  {
    name: "Shadcn/UI",
    icon: (
      <Image
        src="/images/icons/shadcnui.svg"
        className="size-4"
        alt="Shadcn/UI"
        width={24}
        height={24}
      />
    ),
  },
  {
    name: "React Query",
    icon: (
      <Image
        src="/images/icons/react-query.svg"
        className="size-4"
        alt="React Query"
        width={24}
        height={24}
      />
    ),
  },
  {
    name: "Tanstack Router",
    icon: (
      <Image
        src="/images/icons/tanstack-router.png"
        className="size-4"
        alt="Tanstack Router"
        width={24}
        height={24}
      />
    ),
  },
  {
    name: "Tanstack Table",
    icon: (
      <Image
        src="/images/icons/tanstack-router.png"
        className="size-4"
        alt="Tanstack Table"
        width={24}
        height={24}
      />
    ),
  },
  {
    name: "React Hook Form",
    icon: (
      <Image
        src="/images/icons/react-hook-form.png"
        className="size-4"
        alt="React Hook Form"
        width={24}
        height={24}
      />
    ),
  },
  {
    name: "Zod",
    icon: (
      <Image
        src="/images/icons/zod.png"
        className="size-4"
        alt="Zod"
        width={24}
        height={24}
      />
    ),
  },

  // Backend
  {
    name: "Prisma",
    icon: <IconBrandPrisma />,
  },
  {
    name: "Drizzle",
    icon: (
      <Image
        src="/images/icons/drizzle.svg"
        alt="Drizzle"
        className="size-3"
        width={24}
        height={24}
      />
    ),
  },
  {
    name: "PostgreSQL",
    icon: (
      <Image
        src="/images/icons/postgresql.svg"
        className="size-3"
        alt="PostgreSQL"
        width={24}
        height={24}
      />
    ),
  },
  {
    name: "MySql",
    icon: <IconBrandMysql />,
  },
  {
    name: "Node.js",
    icon: <IconBrandNodejs />,
  },
  {
    name: "Bun",
    icon: (
      <Image
        src="/images/icons/bun.svg"
        className="size-4"
        alt="Bun"
        width={24}
        height={24}
      />
    ),
  },
  {
    name: "Hono",
    icon: (
      <Image
        src="/images/icons/hono.svg"
        className="size-4"
        alt="Hono"
        width={24}
        height={24}
      />
    ),
  },
  {
    name: "Express.js",
    icon: (
      <Image
        src="/images/icons/express-js.svg"
        className="size-4"
        alt="Express.js"
        width={24}
        height={24}
      />
    ),
  },
  {
    name: "Socket.io",
    icon: <IconBrandSocketIo />,
  },
];

export function Skills() {
  return (
    <section className="space-y-4">
      <div className="">
        <H1>Skills</H1>
        <p className="text-muted-foreground">
          Explore the technologies I&apos;ve worked with professionally.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        {SKILLS.map((skill) => (
          <Badge key={skill.name} className="pointer-events-none select-none">
            {skill.icon}
            <span>{skill.name}</span>
          </Badge>
        ))}
      </div>
    </section>
  );
}
