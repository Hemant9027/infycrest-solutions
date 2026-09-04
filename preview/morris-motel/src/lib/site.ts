/**
 * Single source of truth for verified business facts.
 * Listed only: details that appear consistently across public
 * directories and/or the owner's brief. No invented phone lines,
 * amenities, rates, room types or reviews.
 */
export const EMAIL = "grmmbahamas@gmail.com";
export const PHONE_DISPLAY = "+1 (242) 325-0195";
export const PHONE_TEL = "+12423250195";
export const ADDRESS = "Davis Street, Nassau, New Providence, Bahamas";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Morris+Motel,+Davis+Street,+Nassau,+New+Providence,+Bahamas";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Stay", href: "#stay" },
  { label: "Amenities", href: "#amenities" },
  { label: "Explore", href: "#explore" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
] as const;

export type InquiryDetails = {
  name: string;
  email: string;
  checkIn: string;
  checkOut: string;
  guests: number | string;
  message?: string;
};

/** Builds a pre-filled mailto so guests can confirm a request straight from their inbox. */
export function availabilityMailto(d: InquiryDetails): string {
  const subject = `Availability request · ${d.checkIn} → ${d.checkOut}`;
  const lines = [
    "Hello Morris Motel,",
    "",
    "I'd like to check availability for an upcoming stay.",
    "",
    `Name: ${d.name}`,
    `Email: ${d.email}`,
    `Check-in: ${d.checkIn}`,
    `Check-out: ${d.checkOut}`,
    `Guests: ${d.guests}`,
    d.message ? `Notes: ${d.message}` : "",
    "",
    "— sent from the Morris Motel website",
  ].filter(Boolean);
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    lines.join("\n"),
  )}`;
}

export const IMAGES = {
  heroMain:
    "/villa/1.jpg",
  heroSmall:
    "/villa/2.jpg",
  about:
    "/villa/3.jpg",
  stay:
    "/villa/4.jpg",
  explorePort:
    "/villa/5.jpg",
  exploreFishFry:
    "/villa/6.jpg",
  exploreBeach:
    "/villa/7.jpg",
  galleryAerial:
    "/villa/8.jpg",
  galleryIsland:
    "/villa/9.jpg",
  galleryLighthouse:
    "/villa/10.jpg",
  galleryBeach:
    "/villa/11.jpg",
  galleryPalmWall:
    "/villa/12.jpg",
  galleryWhiteWall:
    "/villa/13.jpg",
} as const;
