import { BlogsEmptyState } from "~/components/blogs-empty-state";
import { H1 } from "~/components/ui/h1";

export function Blogs() {
  return (
    <section className="flex flex-col gap-4">
      <H1>My Blogs</H1>
      <BlogsEmptyState />
    </section>
  );
}
