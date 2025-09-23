import { DownloadIcon } from "lucide-react";
import { Button } from "~/components/ui/button";

const EXPERIENCES = [
  {
    title: "Frontend Developer (Freelance)",
    company: {
      name: "Shafei",
      link: "https://www.facebook.com/Shafei.Vehicles",
    },
    date: "Mar 2025 - Aug 2025",
    responsibilities: [
      "Built an admin dashboard with data tables, filtering, pagination, and reusable CRUD forms",
      "Developed a user dashboard for service requests with status tracking",
      "Designed a responsive landing page with animations and accessible UI for higher engagement",
      "Delivered Arabic and English localization with RTL support and custom fonts across both locales",
      "Implemented a typed API layer with schema-driven clients, query/mutation hooks, and cache revalidation",
    ],
  },

  {
    title: "Full Stack Developer",
    company: {
      name: "Sputnik Academy",
      link: "https://www.linkedin.com/company/sputnik-academy",
    },
    date: "Aug 2025 - Present",
    responsibilities: [
      "Led 4-person development team to build comprehensive learning platform, enabling Sputnik Academy to launch their first online course publishing and gamekit sales business",
      "Delivered admin dashboard that allowed staff to create and manage courses, lessons, and game kits",
      "Built dual ecommerce system for physical gamekit and digital course sales with paymob online payments",
      "Designed conversion-optimized landing page to drive customer acquisition for the new online business model",
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

      <ul className="text-muted-foreground list-disc pl-4 text-sm text-pretty">
        {responsibilities.map((responsibility) => (
          <li key={responsibility}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
}
