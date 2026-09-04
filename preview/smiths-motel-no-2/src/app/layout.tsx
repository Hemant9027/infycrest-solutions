import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Smith's Motel No. 2 — Independent Motel in Nassau, Bahamas",
  description:
    "Welcome to Smith's Motel No. 2: an independent motel in Nassau, Bahamas. Simple, friendly, modern and affordable Caribbean stays — check availability or email us.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${outfit.variable} bg-sand font-sans text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
