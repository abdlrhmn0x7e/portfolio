export function Education() {
  return (
    <section id="education" className="grid grid-cols-1 gap-4 md:grid-cols-4">
      <a href="#education" className="size-fit">
        Education
      </a>
      <div className="col-span-3">
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <p>Alexandria University</p>

            <p className="text-muted-foreground text-sm">Expected 2026</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-muted-foreground text-sm">
              Bachelor in Computer and Data Science
            </p>

            <p className="text-muted-foreground text-sm">
              <span className="font-medium">CGPA</span> 3.77
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
