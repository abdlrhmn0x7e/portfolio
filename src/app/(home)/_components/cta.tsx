import { ArrowUpRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export function CTA() {
  return (
    <section className="mb-24 pt-12">
      <Card>
        <CardHeader className="mx-auto w-full max-w-xl text-center">
          <CardTitle className="text-2xl font-bold">
            Have an idea? I can take it from “what if” to shipped.
            <br />
          </CardTitle>
          <CardDescription>
            (Hire me before I go back to tweaking my Arch rice.)
          </CardDescription>
        </CardHeader>
        <CardFooter className="justify-center">
          <Button className="w-full max-w-xs" asChild>
            <a href="mailto:abdalrahman.vim@gmail.com">
              Contact me
              <ArrowUpRight />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}
