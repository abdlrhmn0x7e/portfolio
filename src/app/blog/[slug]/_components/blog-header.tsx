import { format } from "date-fns";
import { ArrowLeft, ClockFadingIcon, PlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import type { BlogMetadata } from "~/lib/types";

export function BlogHeader({
  title,
  description,
  date,
  thumbnail,
  readingTime,
}: BlogMetadata) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 py-12 text-center">
      <Button variant="ghost" asChild>
        <Link href="/blog">
          <ArrowLeft />
          Back to all blogs
        </Link>
      </Button>
      <h1 className="max-w-[18ch] text-3xl font-bold md:text-5xl">{title}</h1>
      <p className="text-muted-foreground">{description}</p>

      <div className="flex w-full items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <ClockFadingIcon className="text-muted-foreground size-4" />
          <p className="text-muted-foreground">{readingTime} min read</p>
        </div>

        <p className="text-muted-foreground">
          {format(new Date(date), "MMM d, yyyy")}
        </p>
      </div>

      <div className="bg-card relative w-full border p-2">
        <Image
          src={thumbnail}
          alt={title}
          width={750}
          height={500}
          className="h-full w-full object-contain object-center"
        />

        <PlusIcon
          className="stroke-border absolute -top-4 -left-4 stroke-1"
          size={31}
        />

        <PlusIcon
          className="stroke-border absolute -right-4 -bottom-4 stroke-1"
          size={31}
        />
      </div>
    </div>
  );
}
