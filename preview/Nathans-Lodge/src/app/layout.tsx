import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
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
  title: "Nathan's Lodge — South Andros, The Bahamas",
  description:
    "A peaceful South Andros lodge for travelers seeking an authentic island escape. Slow island days, beautiful beaches and unforgettable Andros experiences.",
  keywords: [
    "South Andros",
    "Bahamas lodge",
    "fishing lodge",
    "bonefishing",
    "island escape",
    "Nathan's Lodge",
  ],
};

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E")`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="bg-shell font-sans text-ink antialiased">
        {/* Film-grain overlay that unifies photography across the page */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[90] opacity-[0.05] mix-blend-multiply"
          style={{ backgroundImage: GRAIN }}
        />
        {children}
      </body>
    </html>
  );
}
