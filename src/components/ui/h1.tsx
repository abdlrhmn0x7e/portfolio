import { cn } from "~/lib/utils";

export function H1({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1 className={cn("text-2xl font-bold md:text-4xl", className)}>
      {children}
    </h1>
  );
}
