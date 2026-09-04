export const CONTACT = {
  host: "Ms. Carolyn Stuart",
  phoneDisplay: "+1 (242) 471-2225",
  phoneHref: "tel:+12424712225",
  email: "blueholevillas@gmail.com",
  emailHref: "mailto:blueholevillas@gmail.com",
  addressLines: ["Queen’s Highway, Congo Town", "South Andros, The Bahamas"],
  coordinates: "24.15° N · 77.59° W",
  mapsUrl:
    "https://www.google.com/maps?q=Congo+Town,+South+Andros,+Bahamas",
};

export const BUSINESS = {
  name: "Blue Hole Villas",
  host: CONTACT.host,
  location: "South Andros, The Bahamas",
  phoneDisplay: CONTACT.phoneDisplay,
  phoneHref: CONTACT.phoneHref,
  email: CONTACT.email,
  emailHref: CONTACT.emailHref,
  addressLines: CONTACT.addressLines,
  addressOneLine: CONTACT.addressLines.join(", "),
};

export const AMENITIES = [
  "WiFi",
  "Air conditioning",
  "TV",
  "Bathroom",
  "Non-smoking",
];

export const IMG = {
  housePalms: "/images/villa-exterior.jpg",
  houseTropical: "/images/palms.jpg",
  duskPier: "/images/sunset.jpg",
  harbourSail: "/images/blue-hole.jpg",
  roomBright: "/images/villa-interior.jpg",
  roomWood: "/images/villa-exterior.jpg",
};

export const ROOMS = [
  {
    id: "villa",
    name: "Island villa",
    tagline: "Private and peaceful",
    description: "A comfortable base for slow days on South Andros.",
    image: IMG.roomWood,
    imageAlt: "Island villa surrounded by palms",
    features: AMENITIES,
  },
];

export const EXPLORE = [
  {
    index: "01",
    area: "South Andros",
    title: "Blue holes",
    copy: "Discover the clear inland pools that give the villas their name.",
    image: "/images/blue-hole.jpg",
    alt: "Aerial view of a blue hole in turquoise shallows",
  },
  {
    index: "02",
    area: "The flats",
    title: "Bonefishing",
    copy: "Spend a quiet morning on the flats with an experienced local guide.",
    image: "/images/fishing.jpg",
    alt: "Fly fisherman casting across the flats at golden hour",
  },
  {
    index: "03",
    area: "Offshore",
    title: "The reef",
    copy: "Swim, snorkel, and let the clear water set the pace for the day.",
    image: "/images/snorkel.jpg",
    alt: "Snorkeler above a coral reef in clear water",
  },
];

export const NAV_LINKS = [
  { label: "Villas", href: "#villas" },
  { label: "Beach", href: "#beach" },
  { label: "Blue Holes", href: "#blue-holes" },
  { label: "Activities", href: "#activities" },
  { label: "Location", href: "#location" },
  { label: "Gallery", href: "#gallery" },
];

export const GALLERY = [
  {
    src: "/images/hero.jpg",
    alt: "Aerial view of the secluded coastline and villas of Blue Hole Villas",
    caption: "Home, from the air",
  },
  {
    src: "/images/beach.jpg",
    alt: "Hammock between palms on the private beach",
    caption: "The private beach",
  },
  {
    src: "/images/blue-hole.jpg",
    alt: "Aerial view of a circular blue hole in turquoise shallows",
    caption: "Blue holes, across the street",
  },
  {
    src: "/images/villa-exterior.jpg",
    alt: "Uniquely shaped island villa tucked among coconut palms",
    caption: "No two villas alike",
  },
  {
    src: "/images/snorkel.jpg",
    alt: "Snorkeler above a coral reef in clear water",
    caption: "The reef, just offshore",
  },
  {
    src: "/images/fishing.jpg",
    alt: "Fly fisherman casting on the flats at golden hour",
    caption: "Bonefish on the flats",
  },
  {
    src: "/images/villa-interior.jpg",
    alt: "Bright villa kitchen and dining area with sea views",
    caption: "Inside your villa",
  },
  {
    src: "/images/kayak.jpg",
    alt: "Kayaks gliding through a clear mangrove creek",
    caption: "Creeks made for kayaks",
  },
  {
    src: "/images/palms.jpg",
    alt: "Sandy path through a palm grove towards the sea",
    caption: "The path to the sea",
  },
  {
    src: "/images/sunset.jpg",
    alt: "Golden sunset over calm water from the beach",
    caption: "How the day ends",
  },
];
