export const BUSINESS = {
  name: "Lil Paradise Getaway",
  location: "Nassau, The Bahamas",
  email: "pdixion2000@hotmail.com",
  mailto:
    "mailto:pdixion2000@hotmail.com?subject=Stay%20Enquiry%20%E2%80%94%20Lil%20Paradise%20Getaway",
};

const px = (id: number, w: number, h: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

export const IMG = {
  hero: {
    src: px(4784391, 2200, 1400),
    alt: "Aerial view of a vivid turquoise Bahamian shoreline with sand and palms",
    credit: "Jess Loiterton",
  },
  aboutMain: {
    src: px(14025000, 1200, 1500),
    alt: "Charming tropical house nestled in lush greenery and palms",
    credit: "Quang Nguyen Vinh",
  },
  aboutSecond: {
    src: px(37196188, 900, 1100),
    alt: "A cozy cottage glowing at tropical sunrise among palm trees",
    credit: "Nicolas Doyen",
  },
  stay: [
    {
      src: px(15717924, 1000, 1250),
      alt: "A cozy, light-filled bedroom with crisp white bedding",
      title: "Slow Mornings",
      body: "Wake up easy. Sunlight through the palms, coffee in hand, and nowhere you have to be — that's the pace we keep.",
    },
    {
      src: px(18071824, 1000, 1250),
      alt: "Breakfast tray resting on a freshly made bed",
      title: "Thoughtful Touches",
      body: "Small-scale means we can actually care. Expect a warm welcome, honest advice and the little details done right.",
    },
    {
      src: px(29086914, 1000, 1250),
      alt: "Calm, natural-toned bedroom interior with soft daylight",
      title: "Room to Unwind",
      body: "Comfortable, uncluttered spaces to come back to after a day in the sun — cool, calm and quietly tropical.",
    },
  ],
  experience: [
    {
      src: px(2575271, 1000, 1150),
      alt: "Clear turquoise waves rolling over a coral reef",
      title: "Impossibly Clear Water",
      body: "The Bahamas is famous for it — gin-clear shallows in every shade of blue, made for swimming, snorkeling and long beach days.",
    },
    {
      src: px(843633, 1000, 1150),
      alt: "A boat cruising a tropical coastline in clear blue water",
      title: "Days on the Water",
      body: "Hop between cays, drop anchor over sandbars, or simply watch the boats drift by. Island time is measured in tides.",
    },
    {
      src: px(28184030, 1000, 1150),
      alt: "Colourful Caribbean street festival with music and dance",
      title: "Colour & Culture",
      body: "From Junkanoo rhythms to straw markets and pastel streets, Nassau's vibrant Bahamian culture is always close by.",
    },
  ],
  gallery: [
    { src: px(1062021, 1100, 800), alt: "Twilight over a Nassau pier and calm sea", caption: "Dusk on the water" },
    { src: px(5008675, 900, 1200), alt: "Palm trees swaying against a clear blue sky", caption: "Trade-wind skies" },
    { src: px(16403241, 1100, 850), alt: "Wooden pier reaching into turquoise water", caption: "Out to the blue" },
    { src: px(34732395, 900, 1200), alt: "Snorkeling in bright, clear tropical water", caption: "Under the surface" },
    { src: px(12366649, 900, 1150), alt: "A single palm tree against pure blue sky", caption: "Simple pleasures" },
    { src: px(35858830, 1100, 850), alt: "Turquoise tide pools under a clear sky", caption: "Hidden shallows" },
  ],
  location: {
    src: px(9400985, 1400, 1000),
    alt: "Aerial view of the Bahamian coastline with palms and clear water",
    credit: "Mikhail Nilov",
  },
  contact: {
    src: px(877962, 1800, 1100),
    alt: "A pier glowing at dusk over Nassau's blue waters",
    credit: "Francisco Cornellana Castells",
  },
};
