import { BlogsEmptyState } from "~/components/blogs-empty-state";
import { BlogCard } from "~/components/blog-card";
import { getBlogsMetadata } from "./utils";
import { H1 } from "~/components/ui/h1";

export default async function BlogPage() {
  const blogs = await getBlogsMetadata();

  return (
    <section className="space-y-12 py-12">
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
    </section>
  );
}
