import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import { Button } from "./ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-10 flex flex-col items-center justify-center gap-4 border-t py-4 md:flex-row">
      <p className="text-muted-foreground text-sm">
        © {currentYear} Abdalrahman Mahmoud
      </p>
      <div className="flex items-center gap-2">
        <Button variant="link">
          <IconBrandGithub />
          GitHub
        </Button>
        <Button variant="link">
          <IconBrandX />X
        </Button>
        <Button variant="link">
          <IconBrandLinkedin />
          LinkedIn
        </Button>
      </div>
    </footer>
  );
}
