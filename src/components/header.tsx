"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { Caret } from "./caret";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";

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

  return (
    <header className="bg-background/80 sticky top-2 z-50 flex items-center justify-between border-2 px-6 py-3 backdrop-blur">
      <Link href="/" className="flex items-center gap-4">
        <Image
          src="/images/purple-cat-running.gif"
          alt="Purple cat running"
          width={0}
          height={0}
          sizes="100vw"
          className="w-12"
          unoptimized
        />
        <div className="flex items-center gap-1">
          <p className="text-lg font-semibold">abdlrhmn</p>
          <Caret className="animate-caret-blink" />
        </div>
      </Link>

      <div className="flex items-center gap-3">
        <nav className="hidden md:block">
          <ul className="flex items-center">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Button
                  variant="link"
                  asChild
                  className={cn(pathname === link.href && "text-chart-4")}
                >
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
}
