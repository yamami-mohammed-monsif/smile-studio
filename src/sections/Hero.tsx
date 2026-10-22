import Image from "next/image";
import { Star } from "lucide-react";
import { Cta } from "@/src/UI/Cta";

// PLACEHOLDER social proof: illustrative portraits and an unverified count.
// Replace with genuine patient photography (with consent) and a real figure before publishing.
const avatars = [
  { src: "/portrait-1.webp", name: "Illustrative portrait one" },
  { src: "/portrait-2.webp", name: "Illustrative portrait two" },
  { src: "/portrait-3.webp", name: "Illustrative portrait three" },
  { src: "/portrait-4.webp", name: "Illustrative portrait four" },
];

// PLACEHOLDER social proof figures: the rating, review count, years of experience
// and certification totals are unverified. Confirm against real clinic data before publishing.
const heroStats = [
  {
    value: "4.9",
    suffix: "/5",
    label: "Based on 280 Google reviews",
    stars: 5,
  },
  { value: "10+", suffix: "", label: "years of dental experience" },
  { value: "10+", suffix: "", label: "advanced certifications" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-4 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:pb-24 lg:pt-3"
    >
      <div className="lg:col-span-6">
        <div className="hero-enter flex flex-wrap items-center gap-x-4 gap-y-3">
          <div className="flex -space-x-3" aria-hidden>
            {avatars.map((a) => (
              <Image
                key={a.name}
                src={a.src}
                alt=""
                width={816}
                height={816}
                sizes="44px"
                loading="lazy"
                className="size-11 rounded-full object-cover ring-2 ring-background"
              />
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">
              500+ happy patients
            </span>
          </p>
        </div>
        <h1 className="hero-enter hero-delay-1 mt-3 text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl">
          A straighter smile could start with a{" "}
          <em className="text-sage-deep">conversation.</em>
        </h1>
        <p className="hero-enter hero-delay-2 mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
          Explore whether Invisalign clear aligners may be right for you with a
          free initial consultation.
        </p>
        <div className="hero-enter hero-delay-3 mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Cta location="hero" />
        </div>
        <ul className="hero-enter hero-delay-4 mt-6 flex flex-wrap items-start gap-x-10 gap-y-6 border-t border-border pt-5">
          {heroStats.map((s) => (
            <li key={s.label}>
              <p className="flex items-center gap-2 font-serif text-3xl leading-none">
                {s.value}
                {s.suffix && (
                  <span className="text-lg text-muted-foreground">
                    {s.suffix}
                  </span>
                )}
                {s.stars && (
                  <span className="flex gap-0.5" aria-hidden>
                    {Array.from({ length: s.stars }, (_, i) => (
                      <Star
                        key={i}
                        className="size-3.5 fill-accent text-accent"
                      />
                    ))}
                  </span>
                )}
              </p>
              <p className="mt-2 text-xs leading-snug text-muted-foreground">
                {s.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="hero-photo-enter relative lg:col-span-6">
        <div
          aria-hidden
          className="absolute -left-4 -top-4 hidden size-28 rounded-full bg-accent/25 lg:block"
        />
        <div className="relative overflow-hidden rounded-2xl bg-sage">
          <Image
            src="/hero.webp"
            alt="Adult woman smiling naturally, teeth showing, in a calm light-filled room"
            width={1024}
            height={1280}
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="aspect-4/3 w-full object-cover object-top sm:aspect-5/4 lg:aspect-4/5"
          />
        </div>
      </div>
    </section>
  );
}
