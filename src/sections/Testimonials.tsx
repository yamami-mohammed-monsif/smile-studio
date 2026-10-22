"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/src/UI/Reveal";
import { Cta } from "@/src/UI/Cta";

// ILLUSTRATIVE testimonials for a fictional portfolio concept — not verified reviews.
// Names are fictional and the portraits are AI-generated; replace with genuine,
// consented patient quotes and photographs before any real use.
const testimonials = [
  {
    quote:
      "I was nervous about starting treatment, but having the opportunity to ask questions and understand my options made the whole process feel less overwhelming.",
    name: "Elena Marsh",
    source: "Invisalign consultation",
    avatar: "/portrait-1.webp",
  },
  {
    quote:
      "I wanted something that would fit into my everyday life. Learning how clear aligners work and what to expect helped me feel more informed about my options.",
    name: "Daniel Okafor",
    source: "Clear aligner treatment",
    avatar: "/portrait-2.webp",
  },
  {
    quote:
      "What I appreciated most was being able to talk through my concerns without feeling rushed. I left with a much clearer understanding of the next steps.",
    name: "Priya Raman",
    source: "Invisalign consultation",
    avatar: "/portrait-3.webp",
  },
  {
    quote:
      "I had put off asking about my smile for years. The conversation was relaxed, and I never felt pressured to make a decision on the spot.",
    name: "Marcus Tan",
    source: "Invisalign consultation",
    avatar: "/portrait-4.webp",
  },
  {
    quote:
      "Being able to ask openly about costs and timings made a real difference. I came away knowing exactly what I wanted to think about next.",
    name: "Sophie Larkin",
    source: "Clear aligner consultation",
    avatar: "/portrait-5.webp",
  },
  {
    quote:
      "The team explained everything in plain language. It felt like a genuine conversation about my goals rather than a sales pitch.",
    name: "James Whitfield",
    source: "Invisalign consultation",
    avatar: "/portrait-6.webp",
  },
];

export function Testimonials() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const [maxIndex, setMaxIndex] = useState(testimonials.length - 1);
  const slides = () =>
    Array.from(trackRef.current?.children ?? []) as HTMLElement[];
  const go = (i: number) => {
    const el = trackRef.current;
    const target = slides()[Math.max(0, Math.min(i, testimonials.length - 1))];
    if (el && target)
      el.scrollTo({
        left: Math.min(
          target.offsetLeft - el.offsetLeft,
          el.scrollWidth - el.clientWidth,
        ),
      });
  };
  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const items = slides();
    const pos = (c: HTMLElement) =>
      Math.abs(c.offsetLeft - el.offsetLeft - el.scrollLeft);
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    const visible = Math.max(
      1,
      Math.round(el.clientWidth / (items[0]?.offsetWidth || 1)),
    );
    setMaxIndex(items.length - visible);
    setActive(
      atEnd
        ? items.length - visible
        : items.reduce((b, c, i) => (pos(c) < pos(items[b]!) ? i : b), 0),
    );
  };
  return (
    <section
      aria-labelledby="testimonials-h"
      className="bg-background py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">Patient experiences</p>
          <h2
            id="testimonials-h"
            className="mt-4 text-4xl leading-tight sm:text-5xl"
          >
            Real people. More confident{" "}
            <em className="text-sage-deep">smiles.</em>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Choosing orthodontic treatment is a personal decision. Hearing about
            other people&apos;s experiences can help you understand what the
            journey may feel like.
          </p>
        </Reveal>
        <div
          className="relative mt-12 lg:mt-14"
          role="region"
          aria-roledescription="carousel"
          aria-label="Patient testimonials"
        >
          <button
            type="button"
            onClick={() => go(active - 1)}
            disabled={active === 0}
            aria-label="Previous testimonial"
            className="absolute -left-3 top-1/2 z-10 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-soft transition-colors hover:bg-sage disabled:opacity-40 sm:flex lg:-left-5"
          >
            <ChevronLeft className="size-5" aria-hidden />
          </button>
          <ul
            ref={trackRef}
            onScroll={onScroll}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") go(active + 1);
              if (e.key === "ArrowLeft") go(active - 1);
            }}
            tabIndex={0}
            className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 focus-visible:outline-none lg:gap-6"
          >
            {testimonials.map((t, i) => (
              <li
                key={i}
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${testimonials.length}`}
                className="w-[85%] shrink-0 snap-start sm:w-[calc(50%-0.625rem)] lg:w-[calc(50%-0.75rem)]"
              >
                <figure className="testimonial-card flex h-full flex-col rounded-lg border border-border bg-card p-7 lg:p-10">
                  <span
                    aria-hidden
                    className="-mb-4 block font-serif text-6xl leading-[0.85] text-accent"
                  >
                    &ldquo;
                  </span>
                  <blockquote className="mt-3 flex-1 font-serif text-lg lg:text-2xl leading-snug text-foreground">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-4 border-t border-border pt-5 text-sm">
                    <Image
                      src={t.avatar}
                      alt=""
                      width={816}
                      height={816}
                      sizes="44px"
                      loading="lazy"
                      className="size-11 shrink-0 rounded-full object-cover ring-2 ring-background"
                    />
                    <span className="min-w-0">
                      <span className="block font-semibold text-foreground">
                        {t.name}
                      </span>
                      <span className="text-muted-foreground">{t.source}</span>
                    </span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => go(active + 1)}
            disabled={active >= maxIndex}
            aria-label="Next testimonial"
            className="absolute -right-3 top-1/2 z-10 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-soft transition-colors hover:bg-sage disabled:opacity-40 sm:flex lg:-right-5"
          >
            <ChevronRight className="size-5" aria-hidden />
          </button>
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => go(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === active}
                className={`h-2 rounded-full transition-all ${i === active ? "w-6 bg-primary" : "w-2 bg-border"}`}
              />
            ))}
          </div>
        </div>
        <div className="mt-10 flex justify-center border-t border-border pt-8">
          <Cta
            location="testimonials"
            label="Request Your Free Consultation"
            className="max-w-full whitespace-normal text-center"
          />
        </div>
      </div>
    </section>
  );
}
