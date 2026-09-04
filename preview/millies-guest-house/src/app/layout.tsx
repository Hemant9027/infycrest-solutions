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
  title: "Millie's Guest House — Your Waterfront Stay in The Abacos",
  description:
    "A spacious, modern guest house situated on the water's edge in The Abacos, The Bahamas. Hosted personally by Judy Russell.",
  keywords: [
    "Millie's Guest House",
    "The Abacos",
    "Bahamas guest house",
    "waterfront accommodation",
    "Sea of Abaco",
  ],
  openGraph: {
    title: "Millie's Guest House — Your Waterfront Stay in The Abacos",
    description:
      "A spacious, modern guest house situated on the water's edge in The Abacos, The Bahamas.",
    type: "website",
    images: [
      {
        url: "/villa/1.jpg",
        width: 1200,
        height: 630,
        alt: "Turquoise shallows and sandbanks of The Abacos from above",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="bg-sand font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
