import Link from "next/link";
import { getBlogsMetadata } from "./utils";
import { format } from "date-fns";
import { EyeIcon } from "lucide-react";
import { Button } from "~/components/ui/button";

export default async function BlogPage() {
  const blogs = await getBlogsMetadata();

  return (
    <section className="space-y-12 py-12">
      {blogs.map((blog) => (
        <div key={blog.slug} className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="text-muted-foreground text-sm">
            <p>{format(new Date(blog.date), "MMM d, yyyy")}</p>
            <p>{blog.readingTime} min read</p>
          </div>
          <Link href={`/blog/${blog.slug}`} className="col-span-3 w-full">
            <p className="hover:underline">{blog.title}</p>
            <p className="text-muted-foreground text-sm">{blog.description}</p>
            <div className="flex justify-end">
              <Button variant="link" className="p-0" size="sm">
                <EyeIcon />
                Read More
              </Button>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
}
