"use client";

import {
  ArrowRight,
  ListRestart,
  TerminalIcon,
  TextCursor,
  XCircle,
} from "lucide-react";
import Image from "next/image";
import { memo, useCallback, useState } from "react";
import { Caret, type CaretVariant } from "~/components/caret";
import { Button } from "~/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { useCaret } from "~/hooks/use-caret";
import { ASCII_ART, HOUSE_ASCII_ART, NEOFETCH_INFO } from "~/lib/constants";
import { levenshtein } from "~/lib/utils";

const TERMINAL_COMMANDS = [
  {
    command: "rm -rf /",
    description: "Delete everything",
  },
  {
    command: "help",
    description: "Show this help",
  },
  {
    command: "flip",
    description: "Flip a coin",
  },
  {
    command: "exit",
    description: "Exit the terminal",
  },
  {
    command: "date",
    description: "Show the current date",
  },
  {
    command: "fastfetch",
    description: "Show system information",
  },
] as const;

type Command = (typeof TERMINAL_COMMANDS)[number]["command"];

export function Terminal() {
  const { position, ref, updatePosition } = useCaret();
  const [caretVariant, setCaretVariant] = useState<CaretVariant | undefined>(
    undefined,
  );
  const [submittedCommand, setSubmittedCommand] = useState<Command | undefined>(
    undefined,
  );
  const [outputKey, setOutputKey] = useState(0);

  const handleCommandSubmit = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Enter" && e.currentTarget.innerText) {
        const command = e.currentTarget.innerText;

        setSubmittedCommand(command.trimEnd() as Command);

        if (command === "clear") {
          setSubmittedCommand(undefined);
        }

        // Invalidate the output to force a re-render
        setOutputKey((prev) => prev + 1);
        e.currentTarget.innerText = "";
        updatePosition();
      }
    },
    [updatePosition],
  );

  return (
    <div
      className="bg-card min-h-[calc(100svh-28rem)] w-full space-y-2 overflow-y-auto rounded-lg border pb-8"
      onClick={() => ref.current?.focus()}
    >
      <MemoizedTerminalHeader
        caretVariant={caretVariant}
        setCaretVariant={setCaretVariant}
      />

      {submittedCommand && (
        <MemoizedCommandOutput key={outputKey} command={submittedCommand} />
      )}

      <div className="flex cursor-text items-center gap-2 px-4 pt-2">
        <div className="flex items-center gap-2">
          <ArrowRight className="h-4 w-4 stroke-2 dark:stroke-3" />
          <span className="text-chart-1 dark:text-primary text-xl font-bold">
            ~
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

      {!submittedCommand && <MemoizedDefaultOutputPlaceholder />}
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

function TerminalHeader({
  caretVariant,
  setCaretVariant,
}: {
  caretVariant: CaretVariant | undefined;
  setCaretVariant: (variant: CaretVariant | undefined) => void;
}) {
  return (
    <div className="flex items-center justify-center border-b px-2 py-2 md:justify-between">
      <div className="flex items-center justify-center gap-2 px-2 select-none">
        <TerminalIcon className="h-4 w-4" />
        <span className="text-sm font-semibold">Terminal</span>
      </div>

      <div className="hidden items-center gap-2 md:flex">
        <Select
          value={caretVariant ? String(caretVariant) : ""}
          onValueChange={(value) => setCaretVariant(value as CaretVariant)}
        >
          <SelectTrigger className="min-w-48">
            <TextCursor />
            <SelectValue placeholder="Change caret" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="default">Block</SelectItem>
            <SelectItem value="line">Line</SelectItem>
            <SelectItem value="underline">Underline</SelectItem>
          </SelectContent>
        </Select>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCaretVariant(undefined)}
              disabled={!caretVariant}
            >
              <ListRestart />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Reset caret</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}
const MemoizedTerminalHeader = memo(TerminalHeader);

function CommandOutput({ command }: { command: Command }) {
  function renderOutput(command: Command) {
    switch (command) {
      case "rm -rf /": {
        return (
          <Image
            src="/images/its-ok.png"
            alt="rm -rf"
            width={200}
            height={200}
          />
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
                <code className="bg-accent px-1 py-0.5">
                  {c.command}
                </code> - {c.description}
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
          const distance = levenshtein(c.command, command);
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
  return (
    <div>
      <div className="flex cursor-text items-start gap-2 px-4 pt-2">
        <div className="flex items-center gap-2">
          <ArrowRight className="h-4 w-4 stroke-2 dark:stroke-3" />
          <span className="text-chart-1 dark:text-primary text-xl font-bold">
            ~
          </span>
        </div>

        <div className="group relative w-full pr-12">
          <p
            className="text-chart-4 w-full font-semibold caret-transparent outline-none"
            spellCheck={false}
          >
            {command}
          </p>
        </div>
      </div>

      <div className="text-muted-foreground px-4 py-2 font-medium">
        {renderOutput(command)}
      </div>
    </div>
  );
}
const MemoizedCommandOutput = memo(CommandOutput);
