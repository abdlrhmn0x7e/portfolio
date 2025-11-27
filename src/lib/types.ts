import type { ReactNode } from "react";
import type { DIRECTORIES, TERMINAL_COMMANDS } from "./constants";
import { z } from "zod";

export interface TerminalCommand {
  description: string;
  output: () => ReactNode;
}

export type ProjectTag =
  | "nextjs"
  | "react"
  | "typescript"
  | "tailwind"
  | "postgresql"
  | "stripe"
  | "aws"
  | "prisma";

export interface Project {
  title: string;
  description: string;
  links: {
    github?: string;
    preview?: string;
  };
  tags?: ProjectTag[];
  previewImage?: string;
}

export type Command = (typeof TERMINAL_COMMANDS)[number]["command"];
export type Directory = (typeof DIRECTORIES)[number];

export const themeModeSchema = z.enum(["light", "dark"]);
export type ThemeMode = z.infer<typeof themeModeSchema>;

export interface BlogMetadata {
  title: string;
  description: string;
  date: string;
  thumbnail: string;
  readingTime: number;
}
