import type { ComponentProps } from "react";
import { cn } from "~/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const variants = cva("bg-foreground h-6 w-2.5 duration-200", {
  variants: {
    variant: {
      default: "bg-foreground",
      line: "h-5 w-0.5 mt-0.5",
      underline: "h-px w-3 mt-6",
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
