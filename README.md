# Smile Studio — Invisalign Consultation Landing Page

A responsive dental landing-page concept designed around one goal: helping visitors explore a free initial Invisalign consultation and request a conversation with the clinic.

**Live demo:** https://smile-studio-eta.vercel.app/  
**Repository:** https://github.com/yamami-mohammed-monsif/smile-studio

> **Portfolio demo:** Smile Studio is a fictional concept, not a real clinic. The patient stories, portraits, ratings, and practice statistics are illustrative placeholders—not verified claims. The form does not send or store submissions. This project is not medical advice.

## Project Overview

Smile Studio is a portfolio project combining frontend development with conversion-minded UI/UX. The page is structured to introduce the consultation offer, explain what visitors can explore, make the process feel clear, answer common questions, and guide interested visitors to a consultation request form.

The design treats conversion decisions as hypotheses to investigate—not as proven results. No conversion uplift or real-user behavior is claimed.

## CRO-Informed Design

The landing page focuses on a single primary action: requesting a free initial consultation.

The experience uses:

- A clear hero message and prominent consultation CTA.
- Repeated CTAs that take visitors to the consultation form.
- Benefits and a simple “how it works” section to explain what to expect.
- FAQs to address common questions about suitability, cost, and commitment.
- A short form with inline validation and clear error feedback.
- Reassurance that requesting a consultation does not require a treatment decision.

### Measurement and testing plan

The project includes a small analytics interface with event names for CTA clicks, form starts, validation errors, simulated form success, and FAQ opens. At present, these events only log to the browser console in development; GA4, Google Tag Manager, heatmaps, and session-recording tools are **not connected**.

On a real clinic website, I would first agree on a qualified consultation request as the conversion goal, then establish a baseline before evaluating changes. Possible experiments include testing different hero messages or comparing the current three-field form with a shorter version. Heatmaps and recordings could help identify usability friction, subject to appropriate consent and privacy safeguards.

Because dental inquiries can involve sensitive personal information, analytics events should not include names, email addresses, phone numbers, or health details.

## Performance

Mobile PageSpeed Insights report, run on **October 24, 2026**:

- Performance: **100**
- Accessibility: **93**
- Best Practices: **100**
- SEO: **100**
- First Contentful Paint: **0.9 s**
- Largest Contentful Paint: **1.0 s**
- Total Blocking Time: **10 ms**
- Cumulative Layout Shift: **0**
- Speed Index: **2.8 s**

These are results from a single lab test and may vary between runs. The report shows **no real-user field data**, so these scores should not be interpreted as evidence of conversion performance or real-world user experience.

To display the supplied screenshot in this README, add it to the repository as `docs/pagespeed-test-results.png`.

![Mobile PageSpeed Insights results](docs/pagespeed-test-results.png)

## Features

- Responsive consultation landing page.
- Reusable React sections and CTA component.
- Consultation form with client-side validation, field-level errors, and focus management.
- FAQ accordion with accessible expanded/collapsed state.
- Responsive testimonial carousel.
- Reduced-motion styling.
- Search and social-sharing metadata.
- Local WebP imagery and optimized images using Next.js Image.
- Development-only event logging for selected interactions.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Lucide React
- Fraunces and Manrope fonts via `next/font`

## Getting Started

Requires Node.js and npm.

```bash
git clone https://github.com/yamami-mohammed-monsif/smile-studio.git
cd smile-studio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the project.

Available scripts:

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Project Structure

```text
app/
  page.tsx              # Landing page composition
  layout.tsx            # Fonts and page metadata
  globals.css           # Theme, layout utilities, and motion styles
src/
  sections/             # Landing-page sections
  UI/                   # Reusable CTA, form, FAQ, and presentation components
lib/
  consultation.ts       # Validation, simulated submission, and analytics stub
public/                 # Local images and favicon
```

## Before Real-World Use

Before adapting this concept for a real clinic, replace all illustrative testimonials, portraits, ratings, and statistics with approved and verifiable content. Replace the placeholder privacy-policy link, connect the form to a secure clinic-approved endpoint, and configure analytics and consent controls appropriately. Clinical claims and offer terms should be reviewed and approved by the clinic before publication.
