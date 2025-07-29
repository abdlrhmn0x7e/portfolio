import type { Blog } from "~/app/blog/(index)/utils";
import type { ComponentProps } from "react";
import { cn } from "~/lib/utils";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Calendar, Eye } from "lucide-react";
import { format } from "date-fns";
import Link from "next/link";
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";

export function BlogCard({
  title,
  description,
  date,
  slug,
  thumbnail,
  className,
  ...props
}: Blog & ComponentProps<"div">) {
  return (
    <Link href={`/blog/${slug}`}>
      <div
        className={cn(
          "bg-card grid grid-cols-1 gap-6 border p-3 md:grid-cols-2",
          className,
        )}
        {...props}
      >
        <AspectRatio ratio={16 / 9}>
          <Image src={thumbnail} alt={title} fill className="object-cover" />
        </AspectRatio>
        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-lg md:text-xl">{title}</h3>

              <Badge>
                <Calendar /> {format(new Date(date), "MMM d, yyyy")}
              </Badge>
            </div>
            <p className="text-muted-foreground">{description}</p>
          </div>

          <div className="flex flex-1 items-end justify-end">
            <Button
              variant="secondary"
              size="sm"
              className="pointer-events-none"
            >
              <Eye />
              Read More
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}
