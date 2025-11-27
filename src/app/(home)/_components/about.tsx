import { Button } from "~/components/ui/button";

export async function About() {
  return (
    <section id="about" className="grid grid-cols-1 gap-4 md:grid-cols-4">
      <a href="#about" className="size-fit">
        About
      </a>
      <div className="text-muted-foreground col-span-3 space-y-4 text-pretty">
        <p>
          Hey! I&apos;m Abdalrahman Mahmoud{" "}
          <Button variant="link" size="sm" className="p-0" asChild>
            <a
              href="https://x.com/abdlrhmn0x7e"
              target="_blank"
              rel="noopener noreferrer"
            >
              (@abdlrhmn0x7e)
            </a>
          </Button>{" "}
          — a Full Stack Developer based out of Alexandria, Egypt. I like to
          make cool projects when I&apos;m not working. Currently working on{" "}
          <Button variant="link" size="sm" className="p-0" asChild>
            <a
              href="https://github.com/abdlrhmn0x7e/better-cut"
              target="_blank"
              rel="noopener noreferrer"
            >
              Better Cut
            </a>
          </Button>{" "}
          a client first video editor.
        </p>

        <p>
          Outside of software, I enjoy editing videos (mostly anime edits
          checkout my instagram{" "}
          <Button variant="link" size="sm" className="p-0" asChild>
            <a
              href="https://instagram.com/abdlrhmn0x7e"
              target="_blank"
              rel="noopener noreferrer"
            >
              @abdlrhmn0x7e
            </a>
          </Button>
          ), ricing my linux setup (arch btw) and using neovim btw.{" "}
        </p>
      </div>
    </section>
  );
}
