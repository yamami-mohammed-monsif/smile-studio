"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { track } from "@/lib/consultation";
import { cn } from "@/lib/utils";

const faqs = [
  { q: "Is the initial consultation free?", a: "The initial consultation is offered free of charge under this offer. Confirm the exact scope and any exclusions with the clinic before publishing." },
  { q: "Am I suitable for Invisalign?", a: "Suitability depends on your individual dental needs. A qualified dental professional can assess your circumstances and discuss appropriate options." },
  { q: "Will I find out how much treatment costs?", a: "You can ask about pricing during your consultation. The availability of an individual treatment estimate depends on the clinic's assessment and pricing process." },
  { q: "Am I committing to treatment by requesting a consultation?", a: "Requesting a consultation is an enquiry, not a treatment decision. The clinic's actual booking terms and any cancellation policies should be explained clearly." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const id = useId();
  return (
    <div className="divide-y divide-border border-y border-border">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <h3 className="font-sans">
              <button
                id={`${id}-b${i}`}
                aria-expanded={isOpen}
                aria-controls={`${id}-p${i}`}
                onClick={() => { setOpen(isOpen ? null : i); if (!isOpen) track("faq_open", { index: String(i) }); }}
                className="group flex w-full items-center justify-between gap-6 py-6 text-left text-base font-semibold transition-colors hover:text-sage-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:text-lg"
              >
                {f.q}
                <span className={cn("grid size-9 shrink-0 place-items-center rounded-full border border-border transition-all duration-300 group-hover:border-primary", isOpen && "rotate-45 bg-primary text-primary-foreground")}>
                  <Plus className="size-4" aria-hidden />
                </span>
              </button>
            </h3>
                <div
                  id={`${id}-p${i}`}
                  role="region"
                  aria-labelledby={`${id}-b${i}`}
                  aria-hidden={!isOpen}
                  inert={!isOpen}
                  data-open={isOpen}
                  className="faq-panel"
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="max-w-2xl pb-6 pr-12 leading-relaxed text-muted-foreground">{f.a}</p>
                  </div>
                </div>
          </div>
        );
      })}
    </div>
  );
}
