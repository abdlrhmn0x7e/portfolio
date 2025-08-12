import { About } from "./_components/about";
import { Blogs } from "./_components/blogs";
import { CTA } from "./_components/cta";
import { ProofOfWork } from "./_components/proof-of-work";
import { Skills } from "./_components/skills";

export default function HomePage() {
  return (
    <div className="space-y-24">
      <About />
      <Skills />
      <ProofOfWork />
      <Blogs />
      <CTA />
    </div>
  );
}
