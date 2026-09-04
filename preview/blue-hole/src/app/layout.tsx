import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000"),
  ),
  title:
    "Blue Hole Villas — Private Island Villas in South Andros, The Bahamas",
  description:
    "Secluded villas on a private beach in Congo Town, South Andros. Turquoise water, blue holes across the street, fly-fishing, kayaking and snorkeling — five minutes from Congo Town Airport.",
  openGraph: {
    title: "Blue Hole Villas — South Andros, The Bahamas",
    description:
      "Your private island escape: secluded villas, turquoise water and the natural beauty of Andros.",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=85",
    ],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-shell font-body text-abyss antialiased">
        {children}
      </body>
    </html>
  );
}
