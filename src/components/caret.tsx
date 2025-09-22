import type { ComponentProps } from "react";
import { cn } from "~/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const variants = cva("dark:bg-foreground bg-chart-1 h-6 w-2.5 duration-200", {
  variants: {
    variant: {
      default: "-translate-y-[2.5px]",
      line: "h-5 w-[1.5px]",
      underline: "h-px w-3 mt-3",
    },
  },
});
export type CaretVariant = VariantProps<typeof variants>["variant"];

export function Caret({
  className,
  variant = "default",
  ...props
}: ComponentProps<"span"> & { variant?: CaretVariant }) {
  return <span className={cn(variants({ variant }), className)} {...props} />;
}
