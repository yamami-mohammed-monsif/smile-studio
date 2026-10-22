"use client";

import { ArrowRight } from "lucide-react";
import { track } from "@/lib/consultation";
import { cn } from "@/lib/utils";

export function Cta({
  label = "Request Your Free Consultation Now",
  location,
  variant = "primary",
  className,
}: {
  label?: string;
  location: string;
  variant?: "primary" | "light";
  className?: string;
}) {
  return (
    <a
      href="#consultation"
      onClick={() => track("cta_click", { location })}
      className={cn(
        "group inline-flex shrink-0 whitespace-nowrap min-h-12 items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        variant === "primary"
          ? "bg-primary text-primary-foreground hover:shadow-soft"
          : "bg-background text-foreground hover:bg-sage",
        className,
      )}
    >
      {label}
      <ArrowRight
        className="size-4 transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden
      />
    </a>
  );
}
