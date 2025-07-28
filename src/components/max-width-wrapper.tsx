import { Slot } from "@radix-ui/react-slot";

export function MaxWidthWrapper({
  children,
  asChild,
}: {
  children: React.ReactNode;
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">{children}</Comp>
  );
}
