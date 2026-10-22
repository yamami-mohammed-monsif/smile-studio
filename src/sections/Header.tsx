"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { track } from "@/lib/consultation";
import { Wordmark } from "@/src/UI/Wordmark";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 16);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-all duration-300",
        scrolled
          ? "border-border bg-background/90 backdrop-blur-md"
          : "border-transparent bg-background/0",
      )}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Wordmark />
        <nav aria-label="Main" className="flex items-center gap-5 sm:gap-8">
          <a
            href="#how-it-works"
            className="link-underline hidden text-sm font-medium sm:inline"
          >
            How It Works
          </a>
          <a
            href="#faqs"
            className="link-underline hidden text-sm font-medium sm:inline"
          >
            FAQs
          </a>
          <a
            href="#consultation"
            onClick={() => track("cta_click", { location: "header" })}
            className="inline-flex min-h-10 items-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Free Consultation
          </a>
        </nav>
      </div>
    </header>
  );
}
