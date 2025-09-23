export async function About() {
  return (
    <section id="about" className="grid grid-cols-1 gap-4 md:grid-cols-4">
      <a href="#about" className="size-fit">
        About
      </a>
      <p className="text-muted-foreground col-span-3 text-pretty">
        {`Passionate about creating meaningful software & exploring new
        technologies. It's been 3 years since I started my journey as a software engineer/full-stack developer
        and I've been loving it ever since. Actively working on side projects and learning new things/technologies.`}
      </p>
    </section>
  );
}
