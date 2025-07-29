import { Calendar, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { BlogsEmptyState } from "~/components/blogs-empty-state";
import { Badge } from "~/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { H1 } from "~/components/ui/h1";
import { Button } from "~/components/ui/button";
import type { ComponentProps } from "react";
import { cn } from "~/lib/utils";

interface Blog {
  title: string;
  description: string;
  date: string;
  thumbnail: string;
  slug: string;
}

const blogs: Blog[] = [
  {
    title: "Hello, MDX!",
    description: "A simple hello world post in MDX.",
    date: "2025-07-28",
    thumbnail: "/images/blogs/hello.jpeg",
    slug: "hello",
  },
];

export default function BlogPage() {
  return (
    <div className="space-y-12">
      <H1 className="text-center">
        Thoughts, tutorials, and insights from my development journey
      </H1>
      <div className="flex flex-col gap-4">
        {blogs.length > 0 ? (
          blogs.map((blog, index) => (
            <BlogCard
              key={blog.slug}
              {...blog}
              className="sticky"
              style={{ top: `${index * 40 + 100}px` }}
            />
          ))
        ) : (
          <BlogsEmptyState />
        )}
      </div>
    </div>
  );
}

function BlogCard({
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
        <Image src={thumbnail} alt={title} width={512} height={512} />
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
