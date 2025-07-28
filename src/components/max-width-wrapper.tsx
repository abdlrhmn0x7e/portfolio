import { cn } from "~/lib/utils";
import { Slot } from "@radix-ui/react-slot";

export function MaxWidthWrapper({
  children,
  className,
  asChild,
}: {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp className={cn("mx-auto max-w-4xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </Comp>
  );
}
