import path from "path";
import { globby } from "globby";

export async function getBlogsMetadata() {
  const blogsDir = path.join(process.cwd(), "src/content/blogs");
  const entries = await globby("**/*.mdx", {
    cwd: blogsDir,
    onlyFiles: true,
  });

  return Promise.all(
    entries.map(async (entry) => {
      const { frontmatter: metadata } = (await import(
        `~/content/blogs/${entry}`
      )) as {
        frontmatter: Record<string, string>;
      };

      return {
        title: metadata.title ?? "",
        description: metadata.description ?? "",
        date: metadata.date ?? new Date().toISOString(),
        thumbnail: metadata.thumbnail ?? "",
        slug: entry.replace(".mdx", ""),
      };
    }),
  );
}
export type Blog = Awaited<ReturnType<typeof getBlogsMetadata>>[number];
