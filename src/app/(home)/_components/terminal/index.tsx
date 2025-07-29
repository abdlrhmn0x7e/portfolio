"use client";

import { ArrowRight } from "lucide-react";
import { memo, useCallback, useState } from "react";
import type { Blog } from "~/app/blog/(index)/utils";
import { Caret, type CaretVariant } from "~/components/caret";
import { useCaret } from "~/hooks/use-caret";
import { ASCII_ART } from "~/lib/constants";
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
          }
        }

        // Invalidate the output to force a re-render
        setOutputKey((prev) => prev + 1);

        // Reset the command input
        e.currentTarget.innerText = "";
        updatePosition();
      }
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [updatePosition],
  );

  return (
    <div
      className="bg-card min-h-[calc(100svh-28rem)] w-full space-y-2 overflow-y-auto rounded-lg border pb-8"
      onClick={() => ref.current?.focus()}
    >
      <TerminalHeader
        caretVariant={caretVariant}
        setCaretVariant={setCaretVariant}
      />

      {lastSubmittedCommand && <TerminalOutput key={outputKey} blogs={blogs} />}

      <div className="flex cursor-text items-center gap-2 px-4 pt-2">
        <div className="flex items-center gap-2">
          <ArrowRight className="h-4 w-4 stroke-2 dark:stroke-3" />
          <span
            className={cn(
              "text-chart-1 dark:text-chart-5 font-semibold",
              currentCwd === "~" && "text-xl font-bold",
            )}
          >
            {currentCwd}
          </span>
        </div>

        <div className="group relative w-full pr-12">
          <div
            className="peer text-chart-4 w-full font-semibold caret-transparent outline-none"
            spellCheck={false}
            autoCorrect="off"
            autoCapitalize="off"
            autoSave="off"
            contentEditable
            onKeyDown={handleCommandSubmit}
            ref={ref}
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

      {!lastSubmittedCommand && <MemoizedDefaultOutputPlaceholder />}
    </div>
  );
}

function DefaultOutputPlaceholder() {
  return (
    <div className="text-chart-1 dark:text-chart-4 pointer-events-none mx-auto h-fit w-fit space-y-2 text-center whitespace-pre-wrap select-none">
      <p className="text-sm sm:text-base">{ASCII_ART}</p>
      <p className="px-1 text-center text-sm">
        Try <code className="bg-accent px-1 py-0.5">rm -rf /</code> trust me or{" "}
        <code className="bg-accent px-1 py-0.5">help</code> to see what you can
        do...
      </p>
    </div>
  );
}
const MemoizedDefaultOutputPlaceholder = memo(DefaultOutputPlaceholder);
