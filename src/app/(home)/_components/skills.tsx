const SKILLS = [
  "TypeScript",
  "Go",
  "Next.js",
  "NestJS",
  "Express.js",
  "Hono",
  "Drizzle",
  "Prisma",
  "GraphQL",
  "REST",
  "Apollo",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Redis",
  "Docker",
  "AWS",
];

export function Skills() {
  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-4">
      <p>Skills</p>
      <div className="col-span-3 flex flex-wrap gap-2 text-pretty">
        {SKILLS.map((skill, index) => (
          <p key={skill} className="text-muted-foreground text-sm">
            {skill}
            <span className={index === SKILLS.length - 1 ? "hidden" : ""}>
              ;
            </span>
          </p>
        ))}
      </div>
    </section>
  );
}
