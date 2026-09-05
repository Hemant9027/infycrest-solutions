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
  housePalms: "/images/villa-1.jpg",
  houseTropical: "/images/villa-2.jpg",
  duskPier: "/images/villa-3.jpg",
  harbourSail: "/images/villa-4.jpg",
  roomBright: "/images/villa-5.jpg",
  roomWood: "/images/villa-6.jpg",
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
    image: "/images/villa-7.jpg",
    alt: "Aerial view of a circular deep blue hole ringed by turquoise shallows in the Bahamas",
  },
  {
    index: "02",
    area: "The flats",
    title: "Bonefishing",
    copy: "Spend a quiet morning on the flats with an experienced local guide.",
    image: "/images/villa-8.jpg",
    alt: "Experienced fly fisherman casting on glassy turquoise flats at golden hour in the Bahamas",
  },
  {
    index: "03",
    area: "Offshore",
    title: "The reef",
    copy: "Swim, snorkel, and let the clear water set the pace for the day.",
    image: "/images/villa-9.jpg",
    alt: "Snorkeler floating above a vibrant coral reef teeming with tropical fish in clear Caribbean water",
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
    src: "/images/villa-10.jpg",
    alt: "Breathtaking aerial view of secluded turquoise coastline and luxury beachfront villas in the Bahamas",
    caption: "Home, from the air",
  },
  {
    src: "/images/villa-11.jpg",
    alt: "Relaxing hammock strung between palm trees on a pristine private beach with turquoise water",
    caption: "The private beach",
  },
  {
    src: "/images/villa-12.jpg",
    alt: "Stunning aerial view of a circular deep blue hole surrounded by turquoise shallows",
    caption: "Blue holes, across the street",
  },
  {
    src: "/images/villa-13.jpg",
    alt: "Uniquely designed luxury island villa tucked among swaying coconut palms with ocean views",
    caption: "No two villas alike",
  },
  {
    src: "/images/villa-14.jpg",
    alt: "Snorkeler floating above a colorful coral reef with diverse tropical fish in crystal-clear Caribbean water",
    caption: "The reef, just offshore",
  },
  {
    src: "/images/villa-15.jpg",
    alt: "Skilled fly fisherman casting on glassy turquoise flats at magical golden hour in the Bahamas",
    caption: "Bonefish on the flats",
  },
  {
    src: "/images/villa-16.jpg",
    alt: "Luxurious beachfront villa interior with floor-to-ceiling windows and turquoise ocean views",
    caption: "Inside your villa",
  },
  {
    src: "/images/villa-17.jpg",
    alt: "Two modern kayaks gliding peacefully through a clear mangrove creek surrounded by tropical vegetation",
    caption: "Creeks made for kayaks",
  },
  {
    src: "/images/villa-18.jpg",
    alt: "Serene sandy footpath winding through a lush coconut palm grove leading to the turquoise sea",
    caption: "The path to the sea",
  },
  {
    src: "/images/villa-19.jpg",
    alt: "Spectacular golden sunset reflecting across calm turquoise water viewed from a pristine private beach",
    caption: "How the day ends",
  },
];
