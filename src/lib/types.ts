import type { ReactNode } from "react";
import type { DIRECTORIES, TERMINAL_COMMANDS } from "./constants";

export interface TerminalCommand {
  description: string;
  output: () => ReactNode;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  links: {
    github?: string;
    preview?: string;
  };
}

export type Command = (typeof TERMINAL_COMMANDS)[number]["command"];
export type Directory = (typeof DIRECTORIES)[number];
