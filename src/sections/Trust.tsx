import Image from "next/image";
import { MessageCircle, Route as RouteIcon } from "lucide-react";

const credibilityPoints = [
  {
    icon: MessageCircle,
    title: "A conversation first",
    text: "Discuss your goals and ask questions during your consultation.",
  },
  {
    icon: RouteIcon,
    title: "Clear next steps",
    text: "Understand your options before deciding whether to proceed.",
  },
];

export function Trust() {
  return (
    <section
      aria-labelledby="trust-h"
      className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"
    >
      <div className="grid items-center gap-9 md:grid-cols-2 md:gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <p className="eyebrow">Get to know Smile Studio</p>
          <h2
            id="trust-h"
            className="mt-4 max-w-xl text-4xl leading-tight tracking-normal sm:text-5xl"
          >
            Feel Confident About Your Next Step
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
            Choosing a treatment starts with trust. Get comfortable with the
            environment, understand the consultation process, and know what to
            expect before taking the next step.
          </p>
          <div className="mt-8 grid gap-5 border-t border-border pt-6 lg:mt-10 lg:gap-6">
            {credibilityPoints.map((point) => (
              <div key={point.title} className="flex items-start gap-4">
                <point.icon
                  className="mt-1 size-5 shrink-0 text-accent"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-sans text-base font-semibold leading-6 tracking-normal">
                    {point.title}
                  </h3>
                  <p className="mt-1 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    {point.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Concept imagery, not actual Smile Studio staff or patients.
            Tima Miroshnichenko / Pexels, photo 5355703, Pexels License. */}
        <figure className="min-w-0 lg:col-span-6">
          <div className="overflow-hidden rounded-lg bg-sage/25">
            <Image
              src="/dental-consultation.webp"
              alt="Stock photograph of a dental professional discussing a treatment plan with an adult patient in a dental clinic"
              loading="lazy"
              width={900}
              height={600}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="aspect-4/3 w-full object-cover object-center md:aspect-4/5"
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
