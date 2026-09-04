import type { HotelDemoConfig } from "./types";

const img = (file: string, alt: string) => ({
  src: `/demos/island-garden/${file}`,
  alt,
});

/**
 * The Island Garden Hotel — demo content.
 * Facts used here come from the supplied business brief only:
 * ~40 rooms · swimming pool · free WiFi · free parking · airport shuttle
 * available · tropical gardens · 24-hour front desk & security ·
 * near Cable Beach · 483 West Bay Street, Nassau, New Providence, Bahamas.
 */
export const islandGarden: HotelDemoConfig = {
  kind: "hotel",
  slug: "island-garden",
  referenceCode: "IGH",

  name: "The Island Garden Hotel",
  shortName: "Island Garden",
  positioning: "Affordable boutique hotel in Nassau",
  metaDescription:
    "The Island Garden Hotel is an affordable boutique hotel on West Bay Street, Nassau — around 40 rooms, a swimming pool and tropical gardens, free WiFi and parking, an airport shuttle, and Cable Beach close by.",

  address: {
    street: "483 West Bay Street",
    city: "Nassau",
    region: "New Providence",
    country: "Bahamas",
    mapQuery: "483 West Bay Street, Nassau, New Providence, Bahamas",
  },

  nav: [
    { id: "about", label: "About" },
    { id: "rooms", label: "Rooms" },
    { id: "amenities", label: "Amenities" },
    { id: "pool-gardens", label: "Pool & Gardens" },
    { id: "location", label: "Location" },
    { id: "gallery", label: "Gallery" },
    { id: "faq", label: "FAQ" },
  ],

  marquee: [
    "Swimming pool",
    "Free WiFi",
    "Free parking",
    "Airport shuttle available",
    "Tropical gardens",
    "24-hour front desk & security",
    "Near Cable Beach",
  ],

  hero: {
    eyebrow: "Nassau · New Providence · Bahamas",
    lines: [
      { text: "Your Home" },
      { text: "Away From Home", italic: true },
      { text: "in Nassau" },
    ],
    sub: "An affordable boutique hotel set in tropical gardens on West Bay Street — a swimming pool, an easy island welcome, and Cable Beach just along the road.",
    image: img(
      "hero.jpg",
      "The swimming pool at Island Garden, ringed by palm trees and soaked in Bahamian sun",
    ),
    facts: ["≈ 40 rooms", "Swimming pool", "Free WiFi & parking"],
  },

  about: {
    label: "About the hotel",
    title: "A small hotel with a big Bahamian heart",
    lead: "Forty rooms, a pool under the palms, and a front desk that never sleeps — Island Garden keeps Nassau simple, friendly and affordable.",
    paragraphs: [
      "The Island Garden Hotel is a boutique stay in the truest sense: small enough that the team learns your name, relaxed enough that sandy feet are always welcome. Around forty rooms are tucked among tropical gardens on West Bay Street, right on the way to Cable Beach.",
      "Days here move at island pace. Cool off in the pool, find a shaded corner of the garden, or wander toward the white sand of Cable Beach — then come home to cold drinks, free WiFi and a front desk team on duty around the clock.",
      "We keep things honest: comfortable rooms, fair prices, free parking and WiFi, and an airport shuttle when you need one. That’s the whole idea — everything you actually want from a Nassau base, without the resort price tag.",
    ],
    signature: "— The Island Garden family",
    stats: [
      { value: "≈40", label: "Boutique rooms" },
      { value: "24/7", label: "Front desk & security" },
      { value: "$0", label: "WiFi & parking" },
      { value: "Near", label: "Cable Beach" },
    ],
    images: [
      img("garden-path-wide.jpg", "A palm-lined path winding through the hotel’s tropical gardens"),
      img("garden-path.jpg", "Lush greenery along a quiet garden path"),
    ],
  },

  rooms: {
    title: "Easy rooms, island style",
    intro:
      "Around forty rooms across the property — bright, comfortable and unpretentious. Pick the outlook that suits your trip.",
    items: [
      {
        name: "Garden Room",
        tag: "The quiet one",
        blurb:
          "Wake up to birdsong and the green of the tropical gardens. Our most peaceful corners, made for slow mornings.",
        features: ["Tropical garden outlook", "Free WiFi", "Moments from the pool"],
        image: img("room-garden.jpg", "A bright, simply styled hotel room with crisp white bedding"),
      },
      {
        name: "Poolside Room",
        tag: "Guest favourite",
        blurb:
          "Roll out of bed and into the water. Rooms a few sandy steps from the swimming pool — afternoon dips encouraged.",
        features: ["Steps from the pool", "Free WiFi", "Easy, breezy comfort"],
        image: img("room-poolside.jpg", "An elegant hotel room with a queen bed and warm natural light"),
      },
      {
        name: "Family Room",
        tag: "Bring the crew",
        blurb:
          "Room to spread out after long beach days on Cable Beach — comfortable, practical and kind to the family budget.",
        features: ["Space for the family", "Free WiFi & parking", "Near pool and gardens"],
        image: img("room-family.jpg", "A cozy modern hotel bedroom with soft layered bedding"),
      },
    ],
    note: "Every stay includes free WiFi, free parking and around-the-clock front desk support. Travelling with a larger group? Ask us about rooms side by side.",
  },

  amenities: {
    title: "Everything you need, nothing you don’t",
    intro:
      "Affordable doesn’t mean doing without. Here’s what every stay at Island Garden comes with.",
    items: [
      {
        icon: "pool",
        title: "Swimming pool",
        blurb: "Cool off under the palms from sunrise to sundown.",
        feature: img("pool-palm.jpg", "The hotel swimming pool framed by palm trees"),
      },
      {
        icon: "wifi",
        title: "Free WiFi",
        blurb: "On the house, throughout the property.",
      },
      {
        icon: "parking",
        title: "Free parking",
        blurb: "Bring a car — parking is on us.",
      },
      {
        icon: "shuttle",
        title: "Airport shuttle",
        blurb: "Available on request — just tell us when you land.",
      },
      {
        icon: "garden",
        title: "Tropical gardens",
        blurb: "Palms, shade and quiet corners all around you.",
        feature: img("garden-hut.jpg", "Tropical garden greenery on the hotel grounds"),
      },
      {
        icon: "desk",
        title: "24-hour front desk",
        blurb: "A real person, day and night.",
      },
      {
        icon: "security",
        title: "24-hour security",
        blurb: "Sleep easy — the property is looked after.",
      },
      {
        icon: "beach",
        title: "Near Cable Beach",
        blurb: "Nassau’s famous white sand, just along the road.",
      },
    ],
  },

  pool: {
    title: "Slow days under the Nassau sun",
    lead: "The pool is the heart of the hotel — and the gardens wrap around everything.",
    paragraphs: [
      "Mornings start with a quiet swim while the gardens wake up. Afternoons are for lounging by the water with a book and something cold. And when the light turns golden, the palms throw long shadows across the pool deck — that’s Island Garden at its best.",
      "Step off the deck and you’re in the gardens: winding paths, dense tropical green and shaded spots to sit a while. It’s the kind of place that makes “doing nothing” feel like the entire point of the trip.",
    ],
    points: [
      { title: "Sunrise to sundown", blurb: "The pool is the day’s main event — swim early, swim late." },
      { title: "Shaded garden corners", blurb: "Find a seat under the palms when the sun gets serious." },
      { title: "Golden hour", blurb: "The best light in Nassau happens right here on the deck." },
    ],
    main: img("pool-main.jpg", "The swimming pool lined with loungers and leaning palms"),
    sideA: img("pool-gazebo.jpg", "The pool and gardens under a bright Bahamian sky"),
    sideB: img("garden-walk.jpg", "A shaded walkway through the tropical gardens"),
  },

  location: {
    title: "Cable Beach, just along the road",
    lead: "West Bay Street puts you exactly where you want to be — beach one way, town the other.",
    paragraphs: [
      "The Island Garden Hotel sits at 483 West Bay Street in Nassau, on the island of New Providence. Head one way and you’re on the white sand and clear shallows of Cable Beach; head the other and downtown Nassau is an easy ride.",
      "Driving? Parking is free at the hotel. Flying in? Our airport shuttle is available — send us your arrival time when you book and we’ll take it from there.",
    ],
    image: img("beach-turquoise.jpg", "Turquoise water and white sand at Cable Beach, near the hotel"),
    highlights: [
      { title: "Cable Beach", blurb: "Nassau’s famous stretch of white sand — near enough for daily swims." },
      { title: "Airport shuttle", blurb: "Available on request; share your flight details when booking." },
      { title: "Free parking", blurb: "On-site parking included with every stay." },
      { title: "24-hour front desk", blurb: "Late arrivals are never a problem — we’re always awake." },
    ],
  },

  gallery: {
    title: "A look around",
    intro: "Pool mornings, garden paths and the beach that brings everyone to Nassau.",
    items: [
      { ...img("pool-main.jpg", "Loungers along the swimming pool"), caption: "Poolside, mid-morning" },
      { ...img("garden-path.jpg", "Dense green foliage over a garden path"), caption: "The garden paths" },
      { ...img("beach-turquoise.jpg", "Clear turquoise shallows at the beach"), caption: "Cable Beach water" },
      { ...img("room-soft.jpg", "Soft afternoon light in a guest room"), caption: "Rest easy" },
      { ...img("garden-hut.jpg", "Tropical planting in the hotel gardens"), caption: "Tropical greens" },
      { ...img("pool-gazebo.jpg", "The pool below leaning palms"), caption: "Under the palms" },
      { ...img("pier-dusk.jpg", "Dusk light over the water in Nassau"), caption: "Nassau at dusk" },
      { ...img("room-poolside.jpg", "A welcoming guest room interior"), caption: "Your room awaits" },
      { ...img("beach-palms.jpg", "Palm trees above turquoise water"), caption: "Island blues" },
    ],
  },

  faq: {
    title: "Good to know",
    intro: "The questions we hear most at the front desk.",
    items: [
      {
        q: "Is there really free parking?",
        a: "Yes — parking at the hotel is free for guests. Rent a car and explore New Providence at your own pace.",
      },
      {
        q: "Do you have WiFi?",
        a: "Free WiFi is included with every stay, throughout the property.",
      },
      {
        q: "How do I get from the airport?",
        a: "An airport shuttle is available — just share your arrival details when you book direct, and we’ll arrange it.",
      },
      {
        q: "How close is Cable Beach?",
        a: "We’re right by it — the hotel sits on West Bay Street, near Cable Beach, so the white sand is an easy trip from your room.",
      },
      {
        q: "What time does the front desk close?",
        a: "It doesn’t. Our front desk is staffed 24 hours a day, with 24-hour security across the property.",
      },
      {
        q: "Is there a pool?",
        a: "Yes — a swimming pool set among the tropical gardens, open from sunrise to sundown.",
      },
      {
        q: "How big is the hotel?",
        a: "Around 40 rooms. Small by design — it keeps things personal, quiet and affordable.",
      },
      {
        q: "Why should I book direct?",
        a: "Booking direct gets you our best available rate, a personal confirmation from the front desk, and an easy way to arrange the airport shuttle.",
      },
    ],
  },

  book: {
    title: "Book direct, stay happier",
    lead: "Tell us when you’re coming — we’ll hold your room, line up the shuttle if you need it, and make sure you get our best available rate.",
    bullets: [
      "Best available rate, guaranteed when you book with us directly",
      "Personal confirmation from our 24-hour front desk team",
      "Airport shuttle arranged with one simple request",
      "Free WiFi and free parking always included",
    ],
    image: img("nassau-dusk.jpg", "Dusk settling over the water in Nassau, Bahamas"),
  },

  contact: {
    title: "Say hello",
    lead: "Questions, special requests, group stays — message the front desk team any time. We’re awake 24 hours a day.",
    blocks: [
      {
        label: "Find us",
        lines: ["483 West Bay Street", "Nassau, New Providence", "Bahamas"],
      },
      {
        label: "Front desk",
        lines: ["Open 24 hours", "with 24-hour security"],
      },
      {
        label: "Getting here",
        lines: ["Airport shuttle available", "Free parking on site"],
      },
    ],
  },

  footer: {
    note: "A website concept created as a demonstration by InfyCrest Solutions.",
  },
};
