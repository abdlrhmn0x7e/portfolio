import { IconBookOff } from "@tabler/icons-react";

export function BlogsEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-24">
      <IconBookOff className="text-muted-foreground size-24" />
      <p className="text-muted-foreground text-lg">No blogs yet</p>
      <p className="text-muted-foreground text-sm">
        I&apos;m still working on my blogs, stay tuned!
      </p>
    </div>
  );
}
