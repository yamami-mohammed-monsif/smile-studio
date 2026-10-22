import { Reveal } from "@/src/UI/Reveal";

const steps = [
  {
    title: "Request a Consultation",
    text: "Share your contact details using the short form.",
  },
  {
    title: "Arrange a Time",
    text: "The clinic will contact you to discuss availability and arrange a suitable time.",
  },
  {
    title: "Explore Your Options",
    text: "Discuss your goals, suitability, and potential next steps with the dental team.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-h"
      className="bg-primary py-20 text-primary-foreground lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <h2
            id="how-h"
            className="max-w-xl text-4xl leading-tight sm:text-5xl"
          >
            Your first steps, made <em className="text-accent">simple.</em>
          </h2>
        </Reveal>
        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.12}>
              <li className="flex gap-5 border-t border-primary-foreground/20 pt-6 md:block">
                <span className="font-serif text-5xl text-accent">
                  0{i + 1}
                </span>
                <div className="md:mt-6">
                  <h3 className="font-sans text-xl font-semibold tracking-normal">
                    {s.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-primary-foreground/75">
                    {s.text}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
