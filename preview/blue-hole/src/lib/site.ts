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
  housePalms: "https://images.unsplash.com/photo-1571195226794-5e1a4a52b9b1?auto=format&fit=crop&w=1600&q=85",
  houseTropical: "https://images.unsplash.com/photo-1551632786-1f5b66f6d2f1?auto=format&fit=crop&w=1600&q=85",
  duskPier: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85",
  harbourSail: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1600&q=85",
  roomBright: "https://images.unsplash.com/photo-1618883996289-839f8e92f81e?auto=format&fit=crop&w=1600&q=85",
  roomWood: "https://images.unsplash.com/photo-1571195226794-5e1a4a52b9b1?auto=format&fit=crop&w=1600&q=85",
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
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1600&q=85",
    alt: "Aerial view of a circular deep blue hole ringed by turquoise shallows in the Bahamas",
  },
  {
    index: "02",
    area: "The flats",
    title: "Bonefishing",
    copy: "Spend a quiet morning on the flats with an experienced local guide.",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1600&q=85",
    alt: "Experienced fly fisherman casting on glassy turquoise flats at golden hour in the Bahamas",
  },
  {
    index: "03",
    area: "Offshore",
    title: "The reef",
    copy: "Swim, snorkel, and let the clear water set the pace for the day.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eebe?auto=format&fit=crop&w=1600&q=85",
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
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=85",
    alt: "Breathtaking aerial view of secluded turquoise coastline and luxury beachfront villas in the Bahamas",
    caption: "Home, from the air",
  },
  {
    src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1600&q=85",
    alt: "Relaxing hammock strung between palm trees on a pristine private beach with turquoise water",
    caption: "The private beach",
  },
  {
    src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1600&q=85",
    alt: "Stunning aerial view of a circular deep blue hole surrounded by turquoise shallows",
    caption: "Blue holes, across the street",
  },
  {
    src: "https://images.unsplash.com/photo-1571195226794-5e1a4a52b9b1?auto=format&fit=crop&w=1600&q=85",
    alt: "Uniquely designed luxury island villa tucked among swaying coconut palms with ocean views",
    caption: "No two villas alike",
  },
  {
    src: "https://images.unsplash.com/photo-1512621776951-a57141f2eebe?auto=format&fit=crop&w=1600&q=85",
    alt: "Snorkeler floating above a colorful coral reef with diverse tropical fish in crystal-clear Caribbean water",
    caption: "The reef, just offshore",
  },
  {
    src: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1600&q=85",
    alt: "Skilled fly fisherman casting on glassy turquoise flats at magical golden hour in the Bahamas",
    caption: "Bonefish on the flats",
  },
  {
    src: "https://images.unsplash.com/photo-1618883996289-839f8e92f81e?auto=format&fit=crop&w=1600&q=85",
    alt: "Luxurious beachfront villa interior with floor-to-ceiling windows and turquoise ocean views",
    caption: "Inside your villa",
  },
  {
    src: "https://images.unsplash.com/photo-1564349863905-5e1b8bdf5b8d?auto=format&fit=crop&w=1600&q=85",
    alt: "Two modern kayaks gliding peacefully through a clear mangrove creek surrounded by tropical vegetation",
    caption: "Creeks made for kayaks",
  },
  {
    src: "https://images.unsplash.com/photo-1551632786-1f5b66f6d2f1?auto=format&fit=crop&w=1600&q=85",
    alt: "Serene sandy footpath winding through a lush coconut palm grove leading to the turquoise sea",
    caption: "The path to the sea",
  },
  {
    src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=1600&q=85",
    alt: "Spectacular golden sunset reflecting across calm turquoise water viewed from a pristine private beach",
    caption: "How the day ends",
  },
];
