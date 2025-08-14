import { PlusIcon } from "lucide-react";
import { getBlogsMetadata } from "../(index)/utils";
import { BlogHeader } from "./_components/blog-header";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { default: Post, frontmatter: metadata } = (await import(
    `~/content/blogs/${slug}.mdx`
  )) as {
    default: React.ComponentType;
    frontmatter: {
      title: string;
      description: string;
      thumbnail: string;
      date: string;
      readingTime: number;
    };
  };

  return (
    <div className="relative mx-auto max-w-3xl border px-4 py-8 md:px-8 md:py-12">
      <BlogHeader {...metadata} />

      <div className="prose prose-hr:border-accent prose-blockquote:border-primary prose-kbd:text-foreground prose-tr:border-border prose-tr:text-muted-foreground prose-base:text-muted-foreground marker:text-muted-foreground prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-a:text-primary prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-blockquote:text-muted-foreground prose-code:text-muted-foreground prose-pre:text-muted-foreground prose-pre:bg-muted prose-pre:p-4 prose-pre:rounded-md prose-pre:border prose-pre:border-border prose-pre:shadow-sm prose-table:border-border max-w-none">
        <Post />
      </div>

      <PlusIcon
        className="stroke-border absolute -top-4 -left-4 stroke-1"
        size={31}
      />

      <PlusIcon
        className="stroke-border absolute -right-4 -bottom-4 stroke-1"
        size={31}
      />
    </div>
  );
}

export async function generateStaticParams() {
  const blogs = await getBlogsMetadata();
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export const dynamicParams = false;
