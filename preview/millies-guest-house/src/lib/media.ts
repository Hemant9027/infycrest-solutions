const px = (id: number, w = 1600) =>
  `/villa/${(id % 28) + 1}.jpg`;

export const HERO_VIDEO =
  "/villa/28.jpg";

export const CONTACT = {
  host: "Judy Russell",
  phone: "+1 (242) 365-2056",
  phoneHref: "tel:+12423652056",
  email: "judymaerussell@hotmail.com",
  emailHref: "mailto:judymaerussell@hotmail.com",
  location: "The Abacos, The Bahamas",
};

export const IMAGES = {
  heroPoster: px(1456292, 1920),
  aboutMain: px(8574662, 1500),
  aboutDock: px(9399874, 1000),
  stayTall: px(28054888, 1400),
  stayWide: px(24807130, 1400),
  stayBalcony: px(2631613, 1200),
  waterfront: px(16403241, 2200),
  exploreLighthouse: px(36110280, 1200),
  exploreSail: px(36117831, 1200),
  exploreCays: px(31105917, 1200),
  cta: px(33732027, 2000),
};

export const GALLERY: { src: string; caption: string; alt: string; h: number }[] =
  [
    {
      src: px(14270971, 1100),
      caption: "Sailing the Sea of Abaco",
      alt: "Drone view of a sailboat crossing clear turquoise water",
      h: 1350,
    },
    {
      src: px(1456292, 1100),
      caption: "Shallows and sandbanks",
      alt: "Aerial view of a sandbank surrounded by turquoise shallows",
      h: 760,
    },
    {
      src: px(17233506, 1100),
      caption: "Treasures from the tide",
      alt: "A conch shell resting on bright sand above clear water",
      h: 1320,
    },
    {
      src: px(33732027, 1100),
      caption: "Sunsets that end the day",
      alt: "Golden sunset over calm water with a boat on the horizon",
      h: 720,
    },
    {
      src: px(35985282, 1100),
      caption: "Hammocks over the water",
      alt: "Hammocks strung above glassy water at dusk",
      h: 1300,
    },
    {
      src: px(8647546, 1100),
      caption: "Endlessly blue",
      alt: "Aerial textures of turquoise water and soft waves",
      h: 780,
    },
    {
      src: px(1450372, 1100),
      caption: "Island time",
      alt: "A hammock strung between palms beside clear water",
      h: 800,
    },
    {
      src: px(2132068, 1100),
      caption: "Conch on the shore",
      alt: "A conch shell at the shoreline with gentle waves",
      h: 740,
    },
    {
      src: px(30095790, 1100),
      caption: "Calm at the water’s edge",
      alt: "Still, clear shallows along a quiet shoreline",
      h: 780,
    },
  ];
