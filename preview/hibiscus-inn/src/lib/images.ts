/**
 * Centralised image library. All photography is natural, sun-lit stock
 * (Pexels) chosen to feel like an authentic Caribbean guest house —
 * never a corporate resort.
 */

const px = (id: number, w: number, h?: number): string =>
  `/images/villa-${(id % 28) + 1}.jpg`;

export interface Img {
  src: string;
  alt: string;
}

export const IMG = {
  hero: {
    src: px(10490913, 2100, 1400),
    alt: "Palm trees leaning over white sand and bright turquoise water in the Bahamas.",
  },
  cta: {
    src: px(4784391, 2100, 1100),
    alt: "Aerial view of a turquoise shoreline wrapping around soft sand.",
  },
  about: {
    src: px(20143799, 1000, 1400),
    alt: "A white island house tucked between tall palms and lush greenery.",
  },
  aboutInset: {
    src: px(32400687, 700, 900),
    alt: "A welcoming cottage door framed by dense tropical foliage.",
  },
  rooms: [
    {
      src: px(37323044, 900, 1200),
      alt: "A tranquil, sun-lit bedroom with soft white bedding.",
    },
    {
      src: px(37323045, 900, 1200),
      alt: "A cozy bedroom corner with tall vintage windows and morning light.",
    },
    {
      src: px(5853195, 900, 1200),
      alt: "A bright, airy bedroom with plants, books and soft daylight.",
    },
  ] as Img[],
  experience: {
    src: px(14011563, 1000, 1300),
    alt: "Hammocks strung between palm trees near the shore.",
  },
  experienceInset: {
    src: px(32655066, 700, 850),
    alt: "A slow island breakfast of fresh fruit and coffee.",
  },
  explore: [
    {
      src: px(27649542, 900, 1150),
      alt: "Palm-lined shore and calm turquoise water under a wide sky.",
      title: "Beaches & blue water",
      copy: "Soft sand and clear shallows — the kind of days that don't need a plan.",
    },
    {
      src: px(36677530, 900, 1150),
      alt: "A brightly painted turquoise and yellow beachside building.",
      title: "Colourful island streets",
      copy: "Pastel storefronts, old harbour corners and Nassau's easygoing rhythm.",
    },
    {
      src: px(33337885, 900, 1150),
      alt: "Hand-woven straw baskets and crafts at a market stall.",
      title: "Straw work & market finds",
      copy: "Woven hats, baskets and handmade pieces to carry the island home.",
    },
    {
      src: px(33930732, 900, 1150),
      alt: "Fresh coconuts with straws at a tropical market.",
      title: "Local flavours",
      copy: "From conch shacks to corner cafés — bring an appetite, we'll point the way.",
    },
  ],
  gallery: [
    {
      src: px(10490921, 1200, 900),
      alt: "A wide tropical beach under slow-moving clouds.",
      caption: "Endless horizon",
    },
    {
      src: px(14024994, 900, 1150),
      alt: "A hammock resting between coconut palms on a sunny day.",
      caption: "Hammock o'clock",
    },
    {
      src: px(6471706, 1000, 1000),
      alt: "A pink hibiscus flower in full bloom.",
      caption: "In bloom",
    },
    {
      src: px(16403289, 1200, 800),
      alt: "A single boat floating on clear turquoise water.",
      caption: "Out on the blue",
    },
    {
      src: px(6389020, 1200, 850),
      alt: "A sun hat resting on a neatly made bed with soft pillows.",
      caption: "Ready for a slow day",
    },
    {
      src: px(38197173, 900, 1150),
      alt: "A quiet courtyard garden filled with greenery and flowers.",
      caption: "The shady corner",
    },
    {
      src: px(14011570, 1200, 850),
      alt: "A wooden boardwalk leading over calm water beside palms.",
      caption: "Morning walks",
    },
  ],
} as const;
