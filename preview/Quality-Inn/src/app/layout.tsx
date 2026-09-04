import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
  variable: "--font-fraunces",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const description =
  "Quality Inn is a relaxed island hotel on the Queen's Highway in Staniard Creek — The Garden of Andros — North Andros, The Bahamas. Bar & Lounge on site, with easy access to beaches and outdoor activities.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"),
  title: {
    default: "Quality Inn — Staniard Creek, North Andros, The Bahamas",
    template: "%s · Quality Inn, North Andros",
  },
  description,
  keywords: [
    "Quality Inn",
    "North Andros hotel",
    "Staniard Creek",
    "Garden of Andros",
    "Bahamas hotel",
    "Andros Island",
    "Bar and Lounge",
  ],
  openGraph: {
    title: "Quality Inn — Discover The Garden of Andros",
    description,
    type: "website",
    images: [{ url: "/images/hero.jpg", width: 1600, height: 900, alt: "Aerial view of a winding creek through lush greenery in Andros, The Bahamas" }],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${outfit.variable}`}>
      <body className="grain bg-sand-50 font-sans text-pine-950 antialiased">{children}</body>
    </html>
  );
}
