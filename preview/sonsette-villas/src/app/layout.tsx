import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "Sonsette Villas — A Little Piece of Heaven on Crooked Island",
  description:
    "Boutique Caribbean-style villas on Major's Cay, Crooked Island, The Bahamas. One- and two-bedroom villas resting roughly 55 feet from the Atlantic Ocean.",
  keywords: [
    "Sonsette Villas",
    "Crooked Island",
    "Bahamas villas",
    "Major's Cay",
    "oceanfront villa",
    "Caribbean vacation rental",
  ],
  openGraph: {
    title: "Sonsette Villas — A Little Piece of Heaven on Crooked Island",
    description:
      "Boutique Caribbean-style villas on Major's Cay, Crooked Island, The Bahamas — about 55 feet from the Atlantic Ocean.",
    images: ["/images/hero.jpg"],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="min-h-svh bg-sand-50 font-sans text-lagoon-950 antialiased">
        {children}
      </body>
    </html>
  );
}
