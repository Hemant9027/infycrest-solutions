export const HOTEL_EMAIL = "sircharleshotel@hotmail.com";

const px = (id: number, params: string) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?${params}`;

/** Wide landscape crop */
const wide = (id: number, w = 2000) =>
  px(id, `auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${Math.round(w * 0.66)}`);
/** Portrait crop */
const tall = (id: number, w = 1100) =>
  px(id, `auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${Math.round(w * 1.35)}`);
/** Square-ish crop */
const mid = (id: number, w = 1400, h = 1100) =>
  px(id, `auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`);

export const IMG = {
  hero: {
    src: px(4784435, "auto=compress&cs=tinysrgb&fit=crop&w=2200&h=1467"),
    alt: "Aerial view of a palm-fringed white sand beach and turquoise water",
  },
  aboutMain: {
    src: mid(16717004, 1400, 1050),
    alt: "Pastel blue colonial building under a clear Bahamian sky",
  },
  aboutAccent: {
    src: tall(33052441, 800),
    alt: "Palm leaves glowing in sunlight within a quiet courtyard",
  },
  rooms: [
    {
      src: tall(15717924, 900),
      alt: "Airy bedroom dressed in white linen with soft, natural light",
      title: "Island Light",
      copy: "Airy spaces in pale timber and white linen — made for slow mornings and open windows.",
    },
    {
      src: tall(30455215, 900),
      alt: "Quiet bedroom warmed by the glow of elegant wall sconces",
      title: "Palm Shade",
      copy: "Cool, calm corners to read, rest, and let the island afternoon drift by.",
    },
    {
      src: tall(32902660, 900),
      alt: "Canopy bed draped in soft fabric, framed by tropical greenery",
      title: "Golden Hour",
      copy: "Soft lamplight, slower evenings, and a tomorrow with no plans at all.",
    },
  ],
  experience: [
    {
      src: mid(34768070, 1200, 900),
      alt: "Coffee poured slowly into a cup in warm morning light",
      title: "Slow Mornings",
      copy: "The day starts when you do. First coffee in courtyard light, the schedule blissfully blank — that's the point.",
    },
    {
      src: tall(15822392, 1000),
      alt: "Rocking chairs resting on a shaded porch among lush greenery",
      title: "Island Afternoons",
      copy: "A porch chair, a breeze through the louvres, and nowhere to be at all. Shade the colour of sea glass.",
    },
    {
      src: mid(5232603, 1200, 900),
      alt: "Palm trees against a glowing pink and gold sunset over the beach",
      title: "Golden Evenings",
      copy: "The sky performs nightly in coral and gold. Watch from the sand, then wander out into the Nassau night.",
    },
  ],
  nassau: [
    {
      src: mid(7575039, 900, 700),
      alt: "Handwoven straw baskets displayed at a colourful island market",
      title: "Bay Street & the Straw Market",
      copy: "Handwoven straw craft, pastel storefronts, and the easy bustle of a working island capital.",
    },
    {
      src: mid(11897606, 900, 700),
      alt: "Sunlit street lined with colourful colonial buildings in Old Nassau",
      title: "Pastel Streets of Old Nassau",
      copy: "Colonial facades in mint, blush and butter yellow — and the hand-carved Queen's Staircase nearby.",
    },
    {
      src: mid(19894531, 900, 700),
      alt: "Fresh conch shells resting on bright white sand",
      title: "Arawak Cay & Island Flavour",
      copy: "Conch shacks and cookshops serve the islands' signature flavour the way locals love it.",
    },
    {
      src: mid(14270971, 900, 700),
      alt: "A lone sailboat drifting across clear turquoise water",
      title: "Out on the Blue",
      copy: "Charter a day sail and watch the sea shift through a hundred shades of turquoise and indigo.",
    },
  ],
  gallery: [
    { src: wide(4784391, 1600), alt: "Aerial sweep of turquoise shallows meeting lush green shoreline", caption: "A hundred shades of blue", span: "wide" },
    { src: tall(17870431, 900), alt: "A guest in a sun hat strolling along the water's edge", caption: "Morning walks, no agenda", span: "tall" },
    { src: tall(19593414, 900), alt: "Vivid painted facades with tall shutters catching the sun", caption: "Dressed in pastel", span: "tall" },
    { src: mid(9134550, 1200, 900), alt: "Palm fronds catching soft light in a glasshouse interior", caption: "Green light, slow time", span: "mid" },
    { src: tall(18699459, 900), alt: "A warm cup of coffee resting on a table in sunlight", caption: "First pour of the day", span: "tall" },
    { src: mid(36366679, 1200, 900), alt: "A yacht cutting a white line through glass-clear water", caption: "Set a course for turquoise", span: "mid" },
    { src: tall(13123237, 900), alt: "Palm leaf silhouetted against a deep orange sunset sky", caption: "The nightly performance", span: "tall" },
    { src: wide(15474944, 1600), alt: "Soft waves lapping a bright shoreline below a big sky", caption: "Toes in the sand", span: "wide" },
  ],
  cta: {
    src: px(6161222, "auto=compress&cs=tinysrgb&fit=crop&w=2200&h=1200"),
    alt: "Palm trees framing a luminous sunset sky over the sea",
  },
} as const;
