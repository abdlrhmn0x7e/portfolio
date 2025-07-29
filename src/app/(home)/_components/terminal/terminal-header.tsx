"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "~/components/ui/select";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "~/components/ui/tooltip";
import { Button } from "~/components/ui/button";
import { TerminalIcon, TextCursor, ListRestart } from "lucide-react";
import { type CaretVariant } from "~/components/caret";
import { memo } from "react";

function Comp({
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

export const TerminalHeader = memo(Comp);
