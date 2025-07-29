"use client";

import type { Directory } from "~/lib/types";
import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

export const TerminalContext = createContext<{
  currentCwd: Directory;
  setCurrentCwd: Dispatch<SetStateAction<Directory>>;
  previousCwd: Directory;
  setPreviousCwd: Dispatch<SetStateAction<Directory>>;
  lastSubmittedCommand: string | null;
  setLastSubmittedCommand: Dispatch<SetStateAction<string | null>>;
} | null>(null);

export function TerminalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [previousCwd, setPreviousCwd] = useState<Directory>("~");
  const [currentCwd, setCurrentCwd] = useState<Directory>("~");
  const [lastSubmittedCommand, setLastSubmittedCommand] = useState<
    string | null
  >(null);

  return (
    <TerminalContext.Provider
      value={{
        currentCwd,
        setCurrentCwd,
        previousCwd,
        setPreviousCwd,
        lastSubmittedCommand,
        setLastSubmittedCommand,
      }}
    >
      {children}
    </TerminalContext.Provider>
  );
}

export function useTerminalContext() {
  const context = useContext(TerminalContext);
  if (!context) {
    throw new Error(
      "useTerminalContext must be used within a TerminalContextProvider",
    );
  }

  return context;
}
