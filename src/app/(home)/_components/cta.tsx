import { ArrowUpRight, PlusIcon } from "lucide-react";
import { Button } from "~/components/ui/button";

export function CTA() {
  return (
    <section id="cta" className="mb-24 pt-12">
      <div className="relative space-y-6 rounded-none border p-8">
        <div className="mx-auto w-full max-w-xl space-y-2 text-center">
          <h3 className="text-2xl font-bold text-pretty">
            Have an idea?
            <br />I can take it from “what if” to shipped.
          </h3>
          <p className="text-muted-foreground text-sm">
            (hire me before I go back to tweaking my arch rice)
          </p>
        </div>

        <div className="flex justify-center">
          <Button className="w-full max-w-xs" asChild>
            <a href="mailto:abdalrahman.vim@gmail.com">
              Contact me
              <ArrowUpRight />
            </a>
          </Button>
        </div>

        <PlusIcon
          className="stroke-border absolute -top-4 -left-4 stroke-1"
          size={31}
        />

        <PlusIcon
          className="stroke-border absolute -right-4 -bottom-10 stroke-1"
          size={31}
        />

        <PlusIcon
          className="stroke-border absolute -bottom-10 -left-4 stroke-1"
          size={31}
        />

        <PlusIcon
          className="stroke-border absolute -top-4 -right-4 stroke-1"
          size={31}
        />
      </div>
    </section>
  );
}
