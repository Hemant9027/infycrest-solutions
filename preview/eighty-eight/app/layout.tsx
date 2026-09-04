import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import { restaurant } from "@/data/restaurant";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eighty Eight Chinese Restaurant | Moka, Mauritius",
  description:
    "Discover Eighty Eight Chinese Restaurant in Moka, Mauritius — Chinese favourites, generous dining, cocktails, live music and an atmosphere made for sharing.",
  keywords: [
    "Chinese restaurant in Moka",
    "Chinese food Mauritius",
    "Bagatelle restaurant",
    "Moka restaurants",
    "Chinese dining Mauritius",
    "Eighty Eight Chinese Restaurant",
  ],
  openGraph: {
    title: "Eighty Eight Chinese Restaurant | Moka, Mauritius",
    description:
      "Chinese favourites, generous dining, cocktails, live music and an atmosphere made for sharing in Moka, Mauritius.",
    type: "website",
    images: ["/images/hero.jpg"],
  },
};

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Eighty Eight",
  servesCuisine: "Chinese",
  telephone: "+2304688288",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Moka",
    addressRegion: "Moka",
    addressCountry: "MU",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: restaurant.rating,
    ratingCount: restaurant.reviewCount,
    bestRating: 5,
    worstRating: 1,
  },
  priceRange: restaurant.priceRange,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans bg-ink text-ivory antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
