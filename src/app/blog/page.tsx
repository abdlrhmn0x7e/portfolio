import { BlogsEmptyState } from "~/components/blogs-empty-state";
import { H1 } from "~/components/ui/h1";

export default function BlogPage() {
  return (
    <div className="space-y-4 py-24">
      <H1 className="text-center">
        Thoughts, tutorials, and insights from my development journey
      </H1>
      <BlogsEmptyState />
    </div>
  );
}
