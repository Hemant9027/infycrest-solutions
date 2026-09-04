import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sir Charles Hotel — Stay in Nassau. Experience The Bahamas.",
  description:
    "An independent boutique hotel in Nassau, The Bahamas — classic Bahamian hospitality with a modern Caribbean sensibility. Reserve your stay at Sir Charles Hotel.",
  keywords: ["Sir Charles Hotel", "Nassau hotel", "Bahamas boutique hotel", "independent hotel Nassau"],
  openGraph: {
    title: "Sir Charles Hotel — Nassau, The Bahamas",
    description:
      "Stay in Nassau. Experience The Bahamas. Classic Bahamian hospitality, reimagined with a modern boutique touch.",
    type: "website",
    images: [
      {
        url: "https://images.pexels.com/photos/4784435/pexels-photo-4784435.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
        width: 1600,
        height: 900,
        alt: "Turquoise shoreline and palms of Nassau, The Bahamas",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#1d392f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="bg-ivory font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
