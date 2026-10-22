import { Sparkle } from "lucide-react";

export function Wordmark() {
  return (
    <a href="#top" className="flex items-center gap-2 font-serif text-xl tracking-tight">
      <Sparkle className="size-4 text-accent" aria-hidden />
      Smile Studio
    </a>
  );
}
