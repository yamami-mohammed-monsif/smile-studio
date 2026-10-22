import { Faq } from "@/src/UI/Faq";
import { Reveal } from "@/src/UI/Reveal";

export function FaqSection() {
  return (
    <section
      id="faqs"
      aria-labelledby="faq-h"
      className="bg-muted py-20 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <h2 id="faq-h" className="text-4xl leading-tight sm:text-5xl">
            Questions worth answering.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-8">
          <Faq />
        </Reveal>
      </div>
    </section>
  );
}
