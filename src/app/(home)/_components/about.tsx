import Image from "next/image";
import { Terminal } from "./terminal";
import { H1 } from "~/components/ui/h1";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Mail, MapPin } from "lucide-react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconCertificate,
} from "@tabler/icons-react";
import { getBlogsMetadata } from "~/app/blog/(index)/utils";
import { TerminalContextProvider } from "./terminal/terminal-context";

export async function About() {
  const blogs = await getBlogsMetadata();

  return (
    <section className="items-center justify-center space-y-12">
      <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <div className="h-full shrink-0 overflow-hidden border-2 md:w-full">
            <Image
              src="/images/pfp.jpeg"
              alt="pfp"
              width={256}
              height={256}
              className="object-cover"
            />
          </div>

          <div className="flex flex-row gap-3 md:flex-col">
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://github.com/abdlrhmn0x7e"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandGithub />
                <span className="hidden md:block">GitHub</span>
              </a>
            </Button>

            <Button variant="outline" size="sm" asChild>
              <a
                href="https://www.linkedin.com/in/abdalrahmanf2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandLinkedin />
                <span className="hidden md:block">LinkedIn</span>
              </a>
            </Button>

            <Button variant="outline" size="sm" asChild>
              <a
                href="https://x.com/abdlrhmn0x7e"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandX />
                <span className="hidden md:block">abdlrhmn0x7e</span>
              </a>
            </Button>

            <Button variant="outline" size="sm" asChild>
              <a
                href="mailto:abdalrahman.vim@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail />
                <span className="hidden md:block">Email</span>
              </a>
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <H1>{"Hello, I'm Abdalrahman"}👋🏼</H1>
              <Button size="sm" asChild>
                <a
                  href="mailto:abdalrahman.vim@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hire me
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline">
                <MapPin />
                <span>Egypt</span>
              </Badge>

              <Badge variant="outline">
                <Mail />
                <span>abdalrahman.vim@gmail.com</span>
              </Badge>

              <Badge variant="outline">
                <IconCertificate />
                <span>Data Science student @ Alexandria University</span>
              </Badge>
            </div>
          </div>

          <p className="text-muted-foreground text-sm md:text-base">
            {`
              I'm a full-stack web developer specializing in Next.js and the modern
              JavaScript/TypeScript ecosystem. I build fast, scalable, and maintainable
              applications—end to end. With hands-on experience across a wide range of tools
              and frameworks (Next.js, React, Tailwind, Node.js, Bun, Hono, Drizzle, Postgres, and more),
              I move quickly without breaking things (too often). I'm a fast learner, deeply curious,
              and comfortable diving into unfamiliar stacks to solve real-world problems.
              oh and I use Arch btw.
            `}
          </p>
        </div>
      </div>

      <TerminalContextProvider>
        <Terminal blogs={blogs} />
      </TerminalContextProvider>
    </section>
  );
}
