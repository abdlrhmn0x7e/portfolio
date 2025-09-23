import { getBlogsMetadata } from "~/app/blog/(index)/utils";
import { Terminal } from "./terminal";

export async function TerminalSections() {
  const blogs = await getBlogsMetadata();

  return (
    <section id="terminal">
      <Terminal blogs={blogs} />
    </section>
  );
}

export function TerminalSectionsSkeleton() {
  return (
    <section id="terminal">
      <Terminal blogs={[]} />
    </section>
  );
}
