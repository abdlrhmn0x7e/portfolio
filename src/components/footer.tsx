import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import { Button } from "./ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-10 flex flex-col items-center justify-center gap-4 border-t py-4 md:flex-row md:justify-between">
      <p className="text-muted-foreground text-sm">
        © {currentYear} Abdalrahman Mahmoud
      </p>
      <div className="flex items-center gap-2">
        <Button variant="link" asChild>
          <a
            href="https://github.com/abdlrhmn0x7e"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandGithub />
            GitHub
          </a>
        </Button>
        <Button variant="link" asChild>
          <a
            href="https://x.com/abdlrhmn0x7e"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandX />X
          </a>
        </Button>
        <Button variant="link" asChild>
          <a
            href="https://www.linkedin.com/in/abdalrahmanf2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandLinkedin />
            LinkedIn
          </a>
        </Button>
      </div>
    </footer>
  );
}
