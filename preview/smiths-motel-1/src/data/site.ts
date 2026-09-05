// ————————————————————————————————————————————————
// Central content for Smith's Motel No. 1
// Copy is deliberately factual: no invented amenities,
// prices, room types, reviews or property features.
// ————————————————————————————————————————————————

export const BUSINESS = {
  name: "Smith's Motel No. 1",
  tagline: "Your Comfortable Nassau Stay",
  location: "Nassau, Bahamas",
  island: "Nassau, New Providence, The Bahamas",
  email: "aliceasmith38@gmail.com",
} as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Accommodation", href: "#accommodation" },
  { label: "Why Us", href: "#why-us" },
  { label: "Nassau", href: "#nassau" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
] as const;

function px(id: number, w = 1200, h = 800) {
  return `/images/villa-${(id % 28) + 1}.jpg`;
}

export const HERO_IMAGE = px(1062021, 2000, 1300); // evening pier, Nassau

export const ABOUT_IMAGES = {
  main: px(4810374, 1000, 1250), // palms against blue sky
  small: px(24196291, 700, 520), // coconut palm detail
};

export const NASSAU_SPOTS = [
  {
    image: px(2549024, 900, 640),
    alt: "White sand beach with turquoise water under a clear sky",
    icon: "umbrella",
    title: "Beaches of New Providence",
    text: "Turquoise water and soft white sand are part of everyday life on the island.",
  },
  {
    image: px(30798172, 900, 640),
    alt: "Colorful buildings lining a bright island street",
    icon: "store",
    title: "Bay Street & Downtown",
    text: "Browse the famous Straw Market and stroll Nassau's colorful, lively streets.",
  },
  {
    image: px(37492315, 900, 640),
    alt: "A plate of island-style fried seafood",
    icon: "utensils",
    title: "Arawak Cay Fish Fry",
    text: "Nassau's favorite stop for Bahamian classics like conch salad and fried fish.",
  },
  {
    image: px(37089767, 900, 640),
    alt: "Pristine stretch of beach with clear turquoise shallows",
    icon: "sun",
    title: "Island Coastline",
    text: "Long, bright shorelines and calm shallows — bring a hat and stay a while.",
  },
  {
    image: px(843633, 900, 640),
    alt: "A boat cruising over clear blue island water",
    icon: "anchor",
    title: "Harbour & Island Hopping",
    text: "Boats, ferries and day tours set out across the harbour, year-round.",
  },
] as const;

export const GALLERY = [
  {
    image: px(1062021, 1400, 1000),
    alt: "Evening light over the water and pier in Nassau",
    caption: "Evening light on the water, Nassau",
  },
  {
    image: px(26310072, 1100, 1300),
    alt: "Tall palms leaning over a quiet shoreline",
    caption: "Quiet shoreline walks",
  },
  {
    image: px(10490913, 1400, 950),
    alt: "Palm trees framing a bright tropical beach",
    caption: "Breezy palm days",
  },
  {
    image: px(843643, 1400, 950),
    alt: "A lighthouse on a small island on a clear day",
    caption: "Lighthouse point",
  },
  {
    image: px(31377612, 1100, 1300),
    alt: "Coconut palms along the edge of the sea",
    caption: "Coconut grove by the sea",
  },
  {
    image: px(877962, 1400, 950),
    alt: "Dusk settling over cottages on the water",
    caption: "Dusk over the water",
  },
  {
    image: px(4810374, 1100, 1300),
    alt: "Looking up at tall palms against a blue sky",
    caption: "Under the palm canopy",
  },
  {
    image: px(2549024, 1400, 950),
    alt: "Turquoise water meeting white sand",
    caption: "Turquoise shallows",
  },
] as const;
