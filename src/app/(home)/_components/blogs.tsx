import { BlogsEmptyState } from "~/components/blogs-empty-state";
import { H1 } from "~/components/ui/h1";
import { getBlogsMetadata } from "~/app/blog/(index)/utils";
import { BlogCard } from "~/components/blog-card";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Eye } from "lucide-react";

export async function Blogs() {
  const blogs = await getBlogsMetadata();
  const latestBlogs = blogs
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section className="flex flex-col gap-4">
      <H1>My Blogs</H1>
      {latestBlogs.length > 0 ? (
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col gap-4">
            {latestBlogs.map((blog, index) => (
              <BlogCard
                key={blog.slug}
                {...blog}
                className="sticky"
                style={{ top: `${index * 40 + 100}px` }}
              />
            ))}
          </div>

          <Button className="w-fit" asChild>
            <Link href="/blog">
              <Eye />
              View all blogs
            </Link>
          </Button>
        </div>
      ) : (
        <BlogsEmptyState />
      )}
    </section>
  );
}
