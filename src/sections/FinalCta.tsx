import { Cta } from "@/src/UI/Cta";
import { Reveal } from "@/src/UI/Reveal";

export function FinalCta() {
  return (
    <section
      aria-labelledby="final-h"
      className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8"
    >
      <Reveal>
        <h2 id="final-h" className="text-4xl leading-tight sm:text-6xl">
          Your next step starts with a{" "}
          <em className="text-sage-deep">conversation.</em>
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-lg text-muted-foreground">
          Request your free initial consultation and discover whether clear
          aligners may be right for you.
        </p>
        <Cta location="final" className="mt-8" />
      </Reveal>
    </section>
  );
}
