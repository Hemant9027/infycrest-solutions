import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Marshall's Guest House — George Town, Great Exuma, The Bahamas",
    template: "%s · Marshall's Guest House",
  },
  description:
    "A family-run guest house overlooking Elizabeth Harbour in George Town, Great Exuma. Eight air-conditioned guestrooms with TV, WiFi and warm Bahamian hospitality — minutes from restaurants, beaches and the cays.",
  keywords: [
    "Marshall's Guest House",
    "George Town Exuma",
    "Great Exuma accommodation",
    "Elizabeth Harbour",
    "Bahamas guest house",
    "Exuma hotel",
    "Queen's Highway",
  ],
  authors: [{ name: "Marshall's Guest House" }],
  openGraph: {
    type: "website",
    title: "Marshall's Guest House — Wake Up to Elizabeth Harbour",
    description:
      "Eight guestrooms overlooking Elizabeth Harbour in George Town, Great Exuma. Air conditioning, TV, WiFi — hosted by Phillipa Marshall.",
    images: [{ url: "/images/hero-harbour.jpg", width: 2400, height: 1600 }],
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#06333e",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
