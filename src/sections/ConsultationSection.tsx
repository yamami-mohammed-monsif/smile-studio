import { CalendarClock, ClipboardCheck } from "lucide-react";
import { ConsultationForm } from "@/src/UI/ConsultationForm";
import { Reveal } from "@/src/UI/Reveal";

export function ConsultationSection() {
  return (
    <section
      id="consultation"
      aria-labelledby="form-h"
      className="bg-primary py-20 text-primary-foreground lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-5 sm:px-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow text-accent">Free initial consultation</p>
          <h2 id="form-h" className="mt-4 text-4xl leading-tight sm:text-5xl">
            Let&apos;s talk about your smile.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
            Share your details and request your free initial consultation.
          </p>
          <ul className="mt-8 space-y-3 text-primary-foreground/80">
            <li className="flex gap-3">
              <CalendarClock className="size-5 text-accent" aria-hidden />
              The clinic contacts you to arrange a time.
            </li>
            <li className="flex gap-3">
              <ClipboardCheck className="size-5 text-accent" aria-hidden />
              No treatment decision required.
            </li>
          </ul>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
          <ConsultationForm />
        </Reveal>
      </div>
    </section>
  );
}
