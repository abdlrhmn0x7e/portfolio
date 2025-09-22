"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { Caret } from "./caret";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";
import { useLocalStorage } from "~/hooks/use-local-storage";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

const NAV_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Blog",
    href: "/blog",
  },
];

export function Header() {
  const pathname = usePathname();
  const [boringMode] = useLocalStorage("boring-mode", true);

  return (
    <header className="bg-background sticky top-0 z-50 flex items-center justify-between border-b py-3">
      <div className="flex w-full flex-col gap-1">
        <div className="flex w-full items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/images/purple-cat-running.gif"
              alt="Purple cat running"
              className={cn("w-12", boringMode && "hidden")}
              width={0}
              height={0}
              sizes="100vw"
              unoptimized
            />
            <div className="flex items-center gap-1">
              <p className="text-lg font-semibold">abdlrhmn0x7e</p>
              <Caret
                className={cn("animate-caret-blink", boringMode && "hidden")}
              />
            </div>
          </Link>

          <ModeToggle />
        </div>

        <div className="flex items-center justify-between gap-3">
          <div className="flex h-6 items-center gap-3">
            <nav>
              <ul className="flex items-center gap-6">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Button
                      variant="link"
                      size="sm"
                      className={cn(
                        "text-muted-foreground p-0",
                        pathname === link.href && "text-foreground",
                      )}
                      asChild
                    >
                      <Link href={link.href}>{link.label}</Link>
                    </Button>
                  </li>
                ))}
              </ul>
            </nav>

            <span className="bg-border h-4 w-px" />

            <div className="flex flex-row gap-3">
              <Button variant="link" className="p-0" size="sm" asChild>
                <a
                  href="https://github.com/abdlrhmn0x7e"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandGithub />
                  <span className="hidden md:block">GitHub</span>
                </a>
              </Button>

              <Button variant="link" className="p-0" size="sm" asChild>
                <a
                  href="https://www.linkedin.com/in/abdalrahmanf2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandLinkedin />
                  <span className="hidden md:block">LinkedIn</span>
                </a>
              </Button>

              <Button variant="link" className="p-0" size="sm" asChild>
                <a
                  href="https://x.com/abdlrhmn0x7e"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandX />
                  <span className="hidden md:block">abdlrhmn0x7e</span>
                </a>
              </Button>
            </div>
          </div>

          <p className="text-muted-foreground text-xs sm:text-sm">
            Alexandria / Egypt
          </p>
        </div>
      </div>
    </header>
  );
}
