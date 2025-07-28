import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { Caret } from "./caret";

export function Header() {
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
            <li>
              <Button variant="link" asChild>
                <Link href="/">Home</Link>
              </Button>
            </li>

            <li>
              <Button variant="link" asChild>
                <Link href="/blog">Blog</Link>
              </Button>
            </li>
          </ul>
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
}
