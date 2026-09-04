import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Hibiscus Inn Guest House — Nassau, New Providence, Bahamas",
  description:
    "Hibiscus Inn is a small, welcoming guest house in Nassau, New Providence, Bahamas. Simple comforts, genuine Bahamian hospitality and island days at your pace. Write to us at jones@bmbahamas.com to plan your stay.",
  keywords: [
    "guest house Nassau",
    "Bahamas guest house",
    "New Providence accommodation",
    "Hibiscus Inn",
    "Bahamian hospitality",
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${outfit.variable}`}>
      <body className="bg-sand-50 font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
