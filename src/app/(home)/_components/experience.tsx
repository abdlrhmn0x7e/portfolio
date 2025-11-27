import { DownloadIcon } from "lucide-react";
import { Button } from "~/components/ui/button";

const EXPERIENCES = [
  {
    title: "Full Stack Developer (Freelance)",
    company: {
      name: "Gear Verse",
      link: "https://gear-verse.vercel.app",
    },
    date: "Sep 2025 – Nov 2025",
    responsibilities: [
      "Built a full-stack e-commerce platform using Next.js 16, React 19, TypeScript, tRPC, Drizzle ORM + PostgreSQL, and Zod—implementing a complete inventory system with real-time stock, pricing accuracy, category management, and a flexible product-attribute model.",
      "Delivered a fully type-safe backend for storefront and customer flows using tRPC, Drizzle ORM, PostgreSQL, TanStack Query, and Better Auth (sessions, Google OAuth, RBAC) with Sentry for end-to-end observability—reducing runtime issues and accelerating iteration.",
      "Built an operational admin dashboard with Next.js Server Components, TanStack React Table, dnd-kit, and AWS S3 presigned uploads—automating catalog, inventory, media, and order workflows so non-technical staff can manage products and content independently.",
    ],
  },

  {
    title: "Frontend Developer (Freelance)",
    company: {
      name: "Shafei",
      link: "https://shafei.vercel.app",
    },
    date: "Mar 2025 - Aug 2025",
    responsibilities: [
      "Architected a TypeScript monorepo with Turborepo, Next.js 15 (App Router, RSC), and TanStack Query while collaborating with backend developers to build a type-safe API layer using Zod and optimized query hooks—cutting data-fetching errors and enabling 50+ reusable CRUD operations.",
      "Engineered an admin portal using TanStack Table v8 and Radix UI, adding server-side pagination, sorting, filtering, and 20+ data tables for customers, requests, bills, and inventory—plus multi-step forms (React Hook Form + Zod) that streamlined workflows and supported 100+ daily transactions.",
      "Implemented internationalization with next-intl for Arabic (RTL) and English, integrating custom fonts, bidirectional layouts, and locale-aware formatting—paired with a responsive landing page.",
    ],
  },

  {
    title: "Full Stack Developer",
    company: {
      name: "Sputnik Academy",
      link: "https://www.linkedin.com/company/sputnik-academy",
    },
    date: "Nov 2024 – July 2025",
    responsibilities: [
      "Led a 4-person team to deliver a full-stack e-learning platform using React, TypeScript, Node.js, and Prisma, integrating Mux video streaming, Paymob payments, and scalable content workflows—enabling Sputnik Academy to launch its first digital course marketplace and physical game-kit sales channel.",
      "Engineered an admin dashboard with REST APIs for course, lesson, and quiz management plus S3 uploads and real-time inventory—cutting publishing time by enabling non-technical staff to manage 100+ course materials independently.",
      "Implemented a dual shopping cart with coupons, order management, and secure checkout using Kinde authentication, unifying digital enrollments and physical shipments through a single Paymob payment flow.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="grid grid-cols-1 gap-4 md:grid-cols-4">
      <div>
        <a href="#experience" className="size-fit">
          Experience
        </a>
        <Button
          variant="link"
          size="sm"
          className="text-muted-foreground -ml-3 p-0 text-sm"
          asChild
        >
          <a
            href="/assets/abdalrahman-mahmoud-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DownloadIcon />
            Download My Resume
          </a>
        </Button>
      </div>
      <div className="col-span-3 flex flex-col gap-4">
        {EXPERIENCES.map((experience) => (
          <ExperienceItem key={experience.title} {...experience} />
        ))}
      </div>
    </section>
  );
}

function ExperienceItem({
  title,
  company,
  date,
  responsibilities,
}: {
  title: string;
  company: {
    name: string;
    link: string;
  };
  date: string;
  responsibilities: string[];
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col">
        <p>{title}</p>

        <div className="flex items-center justify-between gap-1">
          <Button variant="link" size="sm" className="p-0" asChild>
            <a href={company.link} target="_blank" rel="noopener noreferrer">
              {company.name}
            </a>
          </Button>

          <p className="text-sm">{date}</p>
        </div>
      </div>

      <ul className="text-muted-foreground list-disc space-y-2 pl-4 text-sm text-pretty">
        {responsibilities.map((responsibility) => (
          <li key={responsibility}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
}
