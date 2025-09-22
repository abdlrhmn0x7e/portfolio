"use client";

import { ArrowRight } from "lucide-react";
import { memo, useCallback, useState } from "react";
import type { Blog } from "~/app/blog/(index)/utils";
import { Caret, type CaretVariant } from "~/components/caret";
import { useCaret } from "~/hooks/use-caret";
import { TerminalOutput } from "./terminal-output";
import { TerminalHeader } from "./terminal-header";
import { useTerminalContext } from "./terminal-context";
import { cn } from "~/lib/utils";

export function Terminal({ blogs }: { blogs: Blog[] }) {
  const { position, ref, updatePosition } = useCaret();
  const [caretVariant, setCaretVariant] = useState<CaretVariant | undefined>(
    undefined,
  );
  const [outputKey, setOutputKey] = useState(0);

  const {
    currentCwd,
    setCurrentCwd,
    lastSubmittedCommand,
    setLastSubmittedCommand,
  } = useTerminalContext();

  const handleCommandSubmit = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Enter" && e.currentTarget.innerText) {
        e.preventDefault();
        const fullCommand = e.currentTarget.innerText;
        setLastSubmittedCommand(fullCommand);

        const [command, ...args] = fullCommand.trimEnd().split(" ");

        // Handle clear command
        if (command === "clear") {
          setLastSubmittedCommand(null);
        }

        // Handle cd command
        if (command === "cd") {
          switch (args[0]) {
            case undefined: {
              setCurrentCwd("~");
              break;
            }

            case "~": {
              setCurrentCwd("~");
              break;
            }

            case "projects": {
              setCurrentCwd("projects");
              break;
            }

            case "blog": {
              setCurrentCwd("blog");
              break;
            }

            case "..": {
              setCurrentCwd("~");
              break;
            }
          }
        }

        // Invalidate the output to force a re-render
        setOutputKey((prev) => prev + 1);

        // Reset the command input
        e.currentTarget.innerText = "";
        updatePosition();
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        e.currentTarget.innerText = lastSubmittedCommand ?? "";
        updatePosition();
      }

      if (e.key === "ArrowDown") {
        e.preventDefault();
        e.currentTarget.innerText = "";
        updatePosition();
      }
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [updatePosition],
  );

  return (
    <div
      className="bg-card h-[512px] w-full space-y-2 overflow-y-auto overscroll-contain rounded-lg border pb-8"
      style={{ overflowAnchor: "none" }}
      onClick={() => ref.current?.focus()}
    >
      <TerminalHeader
        caretVariant={caretVariant}
        setCaretVariant={setCaretVariant}
      />

      {!lastSubmittedCommand && <MemoizedDefaultOutputPlaceholder />}

      {lastSubmittedCommand && <TerminalOutput key={outputKey} blogs={blogs} />}

      <div className="flex cursor-text items-center gap-2 px-4 pt-2">
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "text-chart-3 dark:text-chart-2 font-semibold",
              currentCwd === "~" && "text-xl font-bold",
            )}
          >
            {currentCwd}
          </span>
          <span className="text-primary">$</span>
        </div>

        <div className="group relative w-full pr-12">
          <div
            className="peer dark:text-chart-4 text-chart-2 w-full font-semibold caret-transparent outline-none"
            spellCheck={false}
            autoCorrect="off"
            autoCapitalize="off"
            autoSave="off"
            contentEditable
            onKeyDown={handleCommandSubmit}
            ref={ref}
            style={{ overflowAnchor: "none" }}
          />

          <Caret
            variant={caretVariant}
            className="absolute top-0 mr-12 mix-blend-difference duration-75 not-peer-focus:bg-transparent not-peer-focus:opacity-0"
            style={{
              transform: `translateX(${position.x}px) translateY(${position.y}px)`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

function DefaultOutputPlaceholder() {
  return (
    <div className="text-muted-foreground text-center">
      <p className="text-sm">Welcome to Terminal v1.0</p>
      <p className="text-xs">Type &apos;help&apos; for available commands</p>
    </div>
  );
}
const MemoizedDefaultOutputPlaceholder = memo(DefaultOutputPlaceholder);
