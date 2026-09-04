import type { Metadata } from "next";
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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "Gaga’s Nest — Guesthouse in Matthew Town, Inagua, The Bahamas",
  description:
    "Feel at home in Inagua. A family-run, ranch-style guesthouse on the quiet northern side of Matthew Town — three elegant rooms, a full suite, and the whole wild island at your doorstep.",
  openGraph: {
    title: "Gaga’s Nest — Feel at Home in Inagua",
    description:
      "A family-run, ranch-style guesthouse on East Street South, Matthew Town, Great Inagua, The Bahamas.",
    images: ["/img/hero.jpg"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="bg-bone text-ink antialiased">
        {children}
        <div className="noise-overlay" aria-hidden />
      </body>
    </html>
  );
}
