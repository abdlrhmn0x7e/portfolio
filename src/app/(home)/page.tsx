import { Suspense } from "react";
import { About } from "./_components/about";
import { Skills } from "./_components/skills";
import {
  TerminalSections,
  TerminalSectionsSkeleton,
} from "./_components/terminal-sections";
import { TerminalContextProvider } from "./_components/terminal/terminal-context";
import {
  GithubContributions,
  GithubContributionsSkeleton,
} from "./_components/github-contributions";
import { ProofOfWork } from "./_components/proof-of-work";
import { Experience } from "./_components/experience";
import { Education } from "./_components/education";
import { Interests } from "./_components/interests";

export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-24">
      <About />

      <TerminalContextProvider>
        <Suspense fallback={<TerminalSectionsSkeleton />}>
          <TerminalSections />
        </Suspense>
      </TerminalContextProvider>

      <Education />

      <Experience />

      <Suspense fallback={<GithubContributionsSkeleton />}>
        <GithubContributions />
      </Suspense>

      <ProofOfWork />

      <Skills />

      <Interests />
    </div>
  );
}
