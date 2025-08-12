"use client";

import { memo } from "react";

import Image from "next/image";
import Link from "next/link";

import { ArrowRight, XCircle } from "lucide-react";
import { IconBrandGithub, IconGlobe } from "@tabler/icons-react";

import { format } from "date-fns";

import type { Blog } from "~/app/blog/(index)/utils";
import type { Directory } from "~/lib/types";

import { useTerminalContext } from "./terminal-context";

import {
  DIRECTORIES,
  HOUSE_ASCII_ART,
  NEOFETCH_INFO,
  PROJECTS,
  TERMINAL_COMMANDS,
} from "~/lib/constants";
import { cn, levenshtein, removeSurroundingQuotes } from "~/lib/utils";
import { AiOutput } from "./ai-output";

function Comp({ blogs }: { blogs: Blog[] }) {
  const { lastSubmittedCommand, previousCwd } = useTerminalContext();
  const [command, ...args] = lastSubmittedCommand?.trimEnd().split(" ") ?? [
    "",
    "",
  ];

  return (
    <div>
      <div className="flex cursor-text items-start gap-2 px-4 pt-2">
        <div className="flex items-center gap-2">
          <ArrowRight className="h-4 w-4 stroke-2 dark:stroke-3" />

          <span
            className={cn(
              "text-chart-3 dark:text-primary font-semibold",
              previousCwd === "~" &&
                "text-chart-1 dark:text-chart-5 text-xl font-bold",
            )}
          >
            {previousCwd}
          </span>
        </div>

        <div className="group relative w-full pr-12">
          <p
            className="dark:text-chart-4 text-chart-2 w-full font-semibold caret-transparent outline-none"
            spellCheck={false}
          >
            {command}{" "}
            <span className="text-muted-foreground">{args.join(" ")}</span>
          </p>
        </div>
      </div>

      <div className="text-muted-foreground px-4 py-2 font-medium">
        <CommandOutput blogs={blogs} />
      </div>
    </div>
  );
}

function CommandOutput({ blogs }: { blogs: Blog[] }) {
  const { lastSubmittedCommand, currentCwd } = useTerminalContext();

  if (!lastSubmittedCommand) return <p>No command found</p>;

  const [command, ...args] = lastSubmittedCommand.trimEnd().split(" ");

  switch (command) {
    case "ai": {
      if (args.length === 0) {
        return <p>No prompt found</p>;
      }

      return (
        <AiOutput
          key={lastSubmittedCommand}
          prompt={removeSurroundingQuotes(args.join(" "))}
        />
      );
    }

    case "echo": {
      if (args.length === 0) {
        return <p>echo: no string specified</p>;
      }

      return <p>{args.join(" ")}</p>;
    }

    case "ls": {
      if (currentCwd === "~" && args.length === 0) {
        return (
          <ul className="flex list-none flex-wrap items-center gap-8">
            {DIRECTORIES.filter((d) => d !== currentCwd).map((d) => (
              <li
                className="text-chart-1 dark:text-primary font-semibold"
                key={d}
              >
                {d}
              </li>
            ))}
          </ul>
        );
      }

      if (currentCwd === "~" && args.length === 1) {
        switch (args[0]) {
          case "projects": {
            return <ProjectsDirectory />;
          }
          case "blog": {
            return <BlogDirectory blogs={blogs} />;
          }
          default: {
            return (
              <p className="text-chart-3 dark:text-chart-5">
                Directory not found, did you mean{" "}
                <code className="bg-accent px-1 py-0.5">projects</code> or{" "}
                <code className="bg-accent px-1 py-0.5">blog</code>?
              </p>
            );
          }
        }
      }

      if (currentCwd === "projects" && args.length === 0) {
        return <ProjectsDirectory />;
      }

      if (currentCwd === "blog" && args.length === 0) {
        return <BlogDirectory blogs={blogs} />;
      }

      return (
        <p className="text-chart-3 dark:text-chart-5">Directory not found</p>
      );
    }

    case "cd": {
      if (
        args[0] &&
        !DIRECTORIES.includes(args[0] as Directory) &&
        args[0] !== ".."
      ) {
        // if the directory is not found, find the closest directory
        let closestDirectory = "";
        let closestDistance = Infinity;

        for (const d of DIRECTORIES) {
          const distance = levenshtein(d, args[0]);
          if (distance < closestDistance) {
            closestDirectory = d;
            closestDistance = distance;
          }
        }

        return (
          <p className="text-chart-3 dark:text-chart-5">
            Directory not found, did you mean{" "}
            <code className="bg-accent px-1 py-0.5">{closestDirectory}</code>
          </p>
        );
      }

      return null;
    }

    case "rm": {
      if (args[0] === "-rf" && args[1] === "/") {
        return (
          <Image
            src="/images/its-ok.png"
            alt="rm -rf"
            width={200}
            height={200}
          />
        );
      }

      return (
        <p className="text-chart-3 dark:text-chart-5">
          You can only delete the root directory.
        </p>
      );
    }

    case "flip": {
      const isHeads = Math.random() < 0.5;
      if (isHeads) {
        return <p className="text-chart-2">Heads</p>;
      }

      return <p className="text-chart-3">Tails</p>;
    }

    case "fastfetch": {
      return (
        <div className="flex flex-col items-center gap-2 text-sm md:flex-row">
          <p className="text-chart-3 dark:text-chart-5 text-[4px] whitespace-pre-wrap">
            {HOUSE_ASCII_ART}
          </p>

          <p className="text-chart-3 dark:text-chart-5 -ml-12 whitespace-pre-wrap md:ml-0">
            {NEOFETCH_INFO}
          </p>
        </div>
      );
    }

    case "date": {
      const date = new Date();
      return (
        <p className="text-chart-3 dark:text-chart-5 whitespace-pre-wrap">
          {date.toLocaleDateString()} {date.toLocaleTimeString()}
        </p>
      );
    }

    case "help":
      return (
        <ul className="list-inside space-y-1 pl-2">
          {TERMINAL_COMMANDS.map((c) => (
            <li key={c.command}>
              <span className="text-chart-1 dark:text-chart-4 mr-2">-</span>
              <code className="bg-accent px-1 py-0.5">{c.command}</code> -{" "}
              {c.description}
            </li>
          ))}
        </ul>
      );

    case "exit":
      return (
        <p className="text-chart-3 dark:text-chart-5">
          Nice try nerd, but I&apos;m not going to let you exit the terminal.
        </p>
      );

    default: {
      let closestCommand = "";
      let closestDistance = Infinity;

      for (const c of TERMINAL_COMMANDS) {
        const distance = levenshtein(c.command, lastSubmittedCommand);
        if (distance < closestDistance) {
          closestCommand = c.command;
          closestDistance = distance;
        }
      }

      return (
        <p className="flex items-start gap-3">
          <XCircle className="mt-1 h-4 w-4" />

          <span>
            Command not found, did you mean{" "}
            <code className="bg-accent px-1 py-0.5">{closestCommand}</code>?
          </span>
        </p>
      );
    }
  }
}

function ProjectsDirectory() {
  return (
    <ul className="list-decimal space-y-1 pl-8">
      {PROJECTS.map((p) => (
        <li
          className="text-chart-1 dark:text-primary flex items-center gap-2 font-semibold"
          key={p.title}
        >
          {p.title} -{" "}
          <div className="flex items-center gap-6">
            {p.links.github && (
              <Link
                href={p.links.github}
                target="_blank"
                className="flex items-center gap-2 hover:underline"
              >
                <IconBrandGithub className="h-4 w-4" />
                GitHub
              </Link>
            )}
            {p.links.preview && (
              <Link
                href={p.links.preview}
                target="_blank"
                className="flex items-center gap-2 hover:underline"
              >
                <IconGlobe className="h-4 w-4" />
                Preview
              </Link>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

function BlogDirectory({ blogs }: { blogs: Blog[] }) {
  return (
    <ul className="list-decimal space-y-1 pl-8">
      {blogs.map((b) => (
        <li
          className="text-chart-1 dark:text-primary font-semibold"
          key={b.title}
        >
          <Link href={`/blog/${b.slug}`} className="hover:underline">
            {b.title} - {format(b.date, "MMM d, yyyy")}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export const TerminalOutput = memo(Comp);
