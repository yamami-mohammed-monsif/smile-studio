import { Wordmark } from "@/src/UI/Wordmark";

export function Footer() {
  return (
    <footer className="border-t border-border bg-sage/50">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-3">
        <div>
          <Wordmark />
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            A calm, modern approach to exploring clear aligner treatment.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-col gap-2 text-sm">
          <a href="#how-it-works" className="link-underline w-fit">
            How It Works
          </a>
          <a href="#faqs" className="link-underline w-fit">
            FAQs
          </a>
          <a href="#consultation" className="link-underline w-fit">
            Free Consultation
          </a>
        </nav>
        <div className="flex flex-col gap-2 text-sm">
          <a href="#" className="link-underline w-fit">
            Privacy Policy [placeholder]
          </a>
          <a href="#" className="link-underline w-fit">
            Terms [placeholder]
          </a>
          <p className="mt-2 text-xs text-muted-foreground">
            Smile Studio is a fictional portfolio concept. Not a real clinic.
          </p>
        </div>
      </div>
    </footer>
  );
}
