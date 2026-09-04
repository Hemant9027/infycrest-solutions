import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
});

const SITE_NAME = "Morris Motel";
const SITE_DESC =
  "Simple, comfortable and affordable accommodation on Davis Street in Nassau, New Providence, Bahamas. An independent, locally run motel — check availability by email and get a straight answer from a real person.";

export const metadata: Metadata = {
  metadataBase: new URL("https://morrismotel.example.com"),
  title: {
    default: "Morris Motel — Simple, Comfortable Accommodation in Nassau, Bahamas",
    template: "%s · Morris Motel",
  },
  description: SITE_DESC,
  keywords: [
    "Morris Motel",
    "motel Nassau",
    "affordable accommodation Nassau",
    "budget stay New Providence",
    "Davis Street Nassau",
    "Bahamas motel",
    "independent motel Bahamas",
  ],
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "Morris Motel — Simple, Comfortable Accommodation in Nassau",
    description: SITE_DESC,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Morris Motel — Simple, Comfortable Accommodation in Nassau",
    description: SITE_DESC,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0d2b26",
};

/* Verified public facts only — no ratings, prices or reviews. */
const lodgingJsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Morris Motel",
  description: SITE_DESC,
  email: "grmmbahamas@gmail.com",
  telephone: "+1-242-325-0195",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Davis Street",
    addressLocality: "Nassau",
    addressRegion: "New Providence",
    addressCountry: "BS",
  },
  amenityFeature: [], // intentionally empty — amenities are confirmed on enquiry
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="grain bg-sand font-sans text-ink antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingJsonLd) }}
        />
      </body>
    </html>
  );
}
