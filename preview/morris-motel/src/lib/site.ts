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
    "https://images.pexels.com/photos/1062021/pexels-photo-1062021.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=1200",
  heroSmall:
    "https://images.pexels.com/photos/37089767/pexels-photo-37089767.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=700&h=900",
  about:
    "https://images.pexels.com/photos/24196291/pexels-photo-24196291.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=1150",
  stay:
    "https://images.pexels.com/photos/33710239/pexels-photo-33710239.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1250",
  explorePort:
    "https://images.pexels.com/photos/13589819/pexels-photo-13589819.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=700",
  exploreFishFry:
    "https://images.pexels.com/photos/5007331/pexels-photo-5007331.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=700",
  exploreBeach:
    "https://images.pexels.com/photos/10490913/pexels-photo-10490913.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=700",
  galleryAerial:
    "https://images.pexels.com/photos/4784391/pexels-photo-4784391.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1400&h=1400",
  galleryIsland:
    "https://images.pexels.com/photos/27649542/pexels-photo-27649542.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=700",
  galleryLighthouse:
    "https://images.pexels.com/photos/843643/pexels-photo-843643.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=700",
  galleryBeach:
    "https://images.pexels.com/photos/37089767/pexels-photo-37089767.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=800&h=1150",
  galleryPalmWall:
    "https://images.pexels.com/photos/6793893/pexels-photo-6793893.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=700",
  galleryWhiteWall:
    "https://images.pexels.com/photos/20737552/pexels-photo-20737552.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=800&h=1000",
} as const;
