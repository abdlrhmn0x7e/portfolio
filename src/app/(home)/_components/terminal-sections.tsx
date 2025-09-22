import { getBlogsMetadata } from "~/app/blog/(index)/utils";
import { Terminal } from "./terminal";

export async function TerminalSections() {
  const blogs = await getBlogsMetadata();

  return (
    <section>
      <Terminal blogs={blogs} />
    </section>
  );
}

export function TerminalSectionsSkeleton() {
  return (
    <section>
      <Terminal blogs={[]} />
    </section>
  );
}
