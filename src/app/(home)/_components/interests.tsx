const INTERESTS = ["Gym", "Anime", "Music", "Reading"];

export function Interests() {
  return (
    <section id="interests" className="grid grid-cols-1 gap-4 md:grid-cols-4">
      <a href="#interests" className="size-fit">
        Interests
      </a>
      <div className="col-span-3 flex flex-wrap gap-2 text-pretty">
        {INTERESTS.map((interest, index) => (
          <p key={interest} className="text-muted-foreground text-sm">
            {interest}
            <span className={index === INTERESTS.length - 1 ? "hidden" : ""}>
              ;
            </span>
          </p>
        ))}
      </div>
    </section>
  );
}
