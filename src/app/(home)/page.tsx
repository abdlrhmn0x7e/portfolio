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
import { Projects } from "./_components/projects";
import { Experience } from "./_components/experience";
import { Education } from "./_components/education";
import { Interests } from "./_components/interests";
import { CTA } from "./_components/cta";

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

      <Projects />

      <Skills />

      <Interests />

      <CTA />
    </div>
  );
}
