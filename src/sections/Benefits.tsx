import {
  MessageCircle,
  Route as RouteIcon,
  Stethoscope,
  Wallet,
} from "lucide-react";
import { Reveal } from "@/src/UI/Reveal";

const benefits = [
  {
    icon: MessageCircle,
    title: "Discuss Your Goals",
    text: "Talk about what you would like to change about your smile.",
  },
  {
    icon: Stethoscope,
    title: "Explore Suitability",
    text: "Learn whether clear aligner treatment may be appropriate for your needs.",
  },
  {
    icon: Wallet,
    title: "Ask About Costs",
    text: "Discuss pricing and the options available.",
  },
  {
    icon: RouteIcon,
    title: "Understand the Next Steps",
    text: "Find out what further assessment or treatment planning may involve.",
  },
];

export function Benefits() {
  return (
    <section aria-labelledby="benefits-h" className="bg-sage/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-xl">
          <p className="eyebrow">During your consultation</p>
          <h2
            id="benefits-h"
            className="mt-4 text-4xl leading-tight sm:text-5xl"
          >
            What you can explore.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08} className="h-full">
              <div className="group h-full bg-card p-7 transition-colors duration-300 hover:bg-background">
                <b.icon
                  className="size-6 text-sage-deep transition-transform duration-300 group-hover:-translate-y-0.5"
                  aria-hidden
                />
                <h3 className="mt-6 font-sans text-lg font-semibold tracking-normal">
                  {b.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {b.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
