// ============================================================================
// CENTRAL RESTAURANT CONFIGURATION
// ----------------------------------------------------------------------------
// Edit everything here to update the site. No content is hard-coded in
// components. Fields marked [EDITABLE PLACEHOLDER] hold no verified data yet
// and should be replaced by the owner when the real value is available.
// ============================================================================

export const restaurant = {
  name: "Eighty Eight",
  nameMark: "EIGHTY EIGHT",
  tagline: "Chinese Restaurant",
  cuisine: "Chinese",
  location: "Moka, Mauritius",
  area: "Bagatelle / Mall of Mauritius area",
  phoneDisplay: "+230 468 8288",
  phoneTel: "tel:+2304688288",

  // Verified from the source reference
  rating: 3.4,
  reviewCount: 817,
  priceRange: "Rs 500–1,000",
  pricePerPerson: "Approx. per person",

  // Restaurant characteristics (verified)
  characteristics: ["All-you-can-eat", "Great cocktails", "Live music"],

  // Descriptive copy
  introEyebrow: "The Eighty Eight Experience",
  introHeading: ["Chinese flavours.", "Shared moments."],
  introParagraph:
    "Step into Eighty Eight for a dining experience built around generous flavours, comforting favourites and dishes made to be shared.",

  // --- EDITABLE PLACEHOLDERS (not yet supplied, leave as-is until known) ----
  openingHours: "Open daily — hours to be confirmed", // [EDITABLE PLACEHOLDER]
  email: "hello@eighty-eight.mu", // [EDITABLE PLACEHOLDER — replace or remove]
  reservationUrl: null as string | null, // [EDITABLE PLACEHOLDER] booking-system URL
  menuUrl: null as string | null, // [EDITABLE PLACEHOLDER] full menu PDF / page URL
  reviewsUrl: null as string | null, // [EDITABLE PLACEHOLDER] Google reviews URL
  instagram: null as string | null, // [EDITABLE PLACEHOLDER]
  facebook: null as string | null, // [EDITABLE PLACEHOLDER]
  address: "Bagatelle / Mall of Mauritius area, Moka, Mauritius", // [EDITABLE PLACEHOLDER]
  // Map is driven by a place-query (name search) rather than invented coords.
  mapQuery: "Eighty Eight Chinese Restaurant, Moka, Mauritius",
} as const;

// ---------------------------------------------------------------------------
// EDITABLE PROMOTION / SPECIAL OFFER
// ---------------------------------------------------------------------------
// This banner is driven entirely by this object. To publish a new offer (or
// to retire one), change the fields below. Set `isActive: false` to hide the
// section entirely. No dates/expiry are claimed until supplied by the owner.
export type Promotion = {
  isActive: boolean;
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  image: string;
};

export const promotion: Promotion = {
  isActive: true, // set false to hide the offer section
  eyebrow: "This week at Eighty Eight",
  title: "Lunch Open Buffet",
  description:
    "An abundance of flavours, made for a long lunch. Help yourself to a generous spread of Chinese favourites.",
  cta: "Discover today's offer",
  image: "/images/experience-buffet.jpg",
};

export const navLinks = [
  { label: "Our Story", href: "#story" },
  { label: "Menu", href: "#menu" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit Us", href: "#visit" },
];
