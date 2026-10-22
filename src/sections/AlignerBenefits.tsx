import { Brush, Eye, UserCheck, Utensils } from "lucide-react";
import { Cta } from "@/src/UI/Cta";

const alignerBenefits = [
  {
    icon: Eye,
    title: "Discreet appearance",
    text: "Clear trays are designed to be less noticeable than metal braces, so you feel at ease.",
  },
  {
    icon: Utensils,
    title: "Removable for meals",
    text: "Aligners can be removed for eating and drinking, following your dental team's advice.",
  },
  {
    icon: Brush,
    title: "Everyday oral hygiene",
    text: "Removable aligners let you brush and floss without a fixed appliance in the way.",
  },
  {
    icon: UserCheck,
    title: "A personalized approach",
    text: "A dental professional can assess your needs and explain which options may suit you.",
  },
];

export function AlignerBenefits() {
  return (
    <section
      aria-labelledby="treat-h"
      className="bg-background py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow">The benefits</p>
          <h2
            id="treat-h"
            className="mt-4 text-4xl leading-tight tracking-normal sm:text-5xl"
          >
            A more discreet way to work toward your smile goals.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Clear aligners offer an alternative to traditional braces for some
            patients. Explore their potential benefits and discover whether they
            may fit your needs.
          </p>
        </div>
        <div className="mt-10 grid auto-rows-fr grid-cols-1 gap-4 min-[560px]:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {alignerBenefits.map((benefit) => (
            <div key={benefit.title} className="h-full">
              <article className="h-full rounded-lg border border-border bg-card p-6 lg:p-7">
                <div className="flex size-12 items-center justify-center rounded-lg bg-sage/50">
                  <benefit.icon
                    className="size-6 text-primary"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-6 min-h-14 font-sans text-lg font-semibold leading-7 tracking-normal">
                  {benefit.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {benefit.text}
                </p>
              </article>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center border-t border-border pt-7">
          <Cta
            location="treatment"
            className="max-w-full whitespace-normal text-center"
          />
        </div>
      </div>
    </section>
  );
}
