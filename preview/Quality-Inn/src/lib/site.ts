export const site = {
  name: "Quality Inn",
  tagline: "A relaxed island hotel in The Garden of Andros",
  heroTitle: "Discover The Garden of Andros",
  address: {
    street: "Queen's Highway",
    settlement: "Staniard Creek",
    island: "North Andros",
    country: "The Bahamas",
  },
  contact: {
    host: "Mr. Richard Riley",
    phoneDisplay: "+1 (242) 368-6217",
    phoneHref: "tel:+12423686217",
    email: "shanrisecurry@hotmail.com",
    emailHref: "mailto:shanrisecurry@hotmail.com",
  },
  coordinates: "24.83° N · 77.93° W",
  mapEmbed:
    "https://www.google.com/maps?q=Staniard%20Creek%2C%20North%20Andros%2C%20The%20Bahamas&z=11&output=embed",
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Stay", href: "#stay" },
  { label: "Bar & Lounge", href: "#bar-lounge" },
  { label: "Explore", href: "#explore" },
  { label: "Activities", href: "#activities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
] as const;

export const galleryImages = [
  {
    src: "/images/hero.jpg",
    alt: "A tidal creek winding through green mangroves to the shore in Andros",
    caption: "Where the creek meets the sea",
    span: "tall" as const,
  },
  {
    src: "/images/about.jpg",
    alt: "Palms and tropical garden surrounding the hotel at Quality Inn",
    caption: "Home, under the palms",
    span: "wide" as const,
  },
  {
    src: "/images/beach.jpg",
    alt: "A quiet North Andros beach with a kayak at the waterline",
    caption: "Beach days, no crowds",
    span: "regular" as const,
  },
  {
    src: "/images/bar.jpg",
    alt: "The warm glow of the Bar & Lounge at dusk",
    caption: "Golden hour at the Bar & Lounge",
    span: "regular" as const,
  },
  {
    src: "/images/andros.jpg",
    alt: "A deep blue hole ringed by pine forest in Andros",
    caption: "Blue holes, hidden in the pines",
    span: "tall" as const,
  },
  {
    src: "/images/gallery-flats.jpg",
    alt: "Shallow bonefish flats glowing at golden hour",
    caption: "The famous Andros flats",
    span: "wide" as const,
  },
  {
    src: "/images/stay.jpg",
    alt: "A bright, airy guest room with palm views",
    caption: "Rest easy, island style",
    span: "regular" as const,
  },
  {
    src: "/images/gallery-creek.jpg",
    alt: "A skiff drifting on a glassy creek at sunrise",
    caption: "Sunrise on the creek",
    span: "regular" as const,
  },
  {
    src: "/images/gallery-palms.jpg",
    alt: "A sandy garden path between tall coconut palms",
    caption: "Garden paths and hammock hours",
    span: "wide" as const,
  },
] as const;
