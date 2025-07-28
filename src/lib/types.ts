import type { ReactNode } from "react";

export interface TerminalCommand {
  description: string;
  output: () => ReactNode;
}
