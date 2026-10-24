import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

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
  icons: { icon: [{ url: "/favicon.ico", type: "image/x-icon" }] },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
