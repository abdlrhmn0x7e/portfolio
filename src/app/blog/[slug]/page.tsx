export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { default: Post } = await import(`~/content/blogs/${slug}.mdx`);

  return (
    <div className="prose prose-hr:border-accent prose-blockquote:border-primary prose-kbd:text-foreground prose-tr:border-accent prose-tr:text-muted-foreground prose-base:text-muted-foreground marker:text-muted-foreground prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-a:text-primary prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-blockquote:text-muted-foreground prose-code:text-muted-foreground prose-pre:text-muted-foreground prose-pre:bg-muted prose-pre:p-4 prose-pre:rounded-md prose-pre:border prose-pre:border-border prose-pre:shadow-sm mx-3 max-w-none">
      <Post />
    </div>
  );
}

export function generateStaticParams() {
  return [{ slug: "hello" }];
}

export const dynamicParams = false;
