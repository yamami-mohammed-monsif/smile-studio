import type { Metadata } from "next";
import { Header } from "@/src/sections/Header";
import { Hero } from "@/src/sections/Hero";
import { Benefits } from "@/src/sections/Benefits";
import { AlignerBenefits } from "@/src/sections/AlignerBenefits";
import { HowItWorks } from "@/src/sections/HowItWorks";
import { Testimonials } from "@/src/sections/Testimonials";
import { Trust } from "@/src/sections/Trust";
import { FaqSection } from "@/src/sections/FaqSection";
import { ConsultationSection } from "@/src/sections/ConsultationSection";
import { FinalCta } from "@/src/sections/FinalCta";
import { Footer } from "@/src/sections/Footer";

export const metadata: Metadata = {
  title: "Smile Studio — Free Invisalign Consultation",
  description:
    "Explore whether Invisalign clear aligners may be right for you with a free initial consultation at Smile Studio.",
  openGraph: {
    title: "Smile Studio — Free Invisalign Consultation",
    description:
      "A straighter smile could start with a conversation. Request your free initial consultation.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function Home() {
  return (
    <div className="overflow-x-clip">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-card focus:p-3"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Benefits />
        <AlignerBenefits />
        <HowItWorks />
        <Testimonials />
        <Trust />
        <FaqSection />
        <ConsultationSection />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
