import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.smithsmotelno1.com",
  ),
  title: "Smith's Motel No. 1 — Your Comfortable Nassau Stay",
  description:
    "Smith's Motel No. 1 is a small, independent motel in Nassau, Bahamas. Simple, affordable accommodation arranged directly with the property.",
  keywords: [
    "Smith's Motel No. 1",
    "motel Nassau",
    "Nassau Bahamas accommodation",
    "independent motel Bahamas",
    "affordable stay Nassau",
  ],
  openGraph: {
    title: "Smith's Motel No. 1 — Your Comfortable Nassau Stay",
    description:
      "A small, independent motel in Nassau, The Bahamas. Contact us directly for availability and rates.",
    type: "website",
    images: [
      {
        url: "https://images.pexels.com/photos/1062021/pexels-photo-1062021.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        width: 1200,
        height: 627,
        alt: "Evening light over the water in Nassau, The Bahamas",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="bg-sand font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
