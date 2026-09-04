// ============================================================================
// GALLERY DATA
// ----------------------------------------------------------------------------
// Imagery drawn from the supplied reference / generated assets. Layout is
// masonry-like; `tall` / `wide` flags control the grid placement.
// Add a new item here and it appears in the gallery automatically.
// ============================================================================

export type GalleryItem = {
  src: string;
  alt: string;
  label: string;
  tall?: boolean;
  wide?: boolean;
};

export const galleryItems: GalleryItem[] = [
  {
    src: "/images/hero.jpg",
    alt: "Atmospheric interior of Eighty Eight Chinese Restaurant in Moka, Mauritius",
    label: "The room",
    tall: true,
  },
  {
    src: "/images/sizzling-chicken-mushrooms.jpg",
    alt: "Sizzling chicken and mushrooms served at the table",
    label: "Fresh from the wok",
  },
  {
    src: "/images/experience-cocktails.jpg",
    alt: "Signature cocktails at the Eighty Eight bar",
    label: "Cocktail hour",
  },
  {
    src: "/images/experience-buffet.jpg",
    alt: "A generous all-you-can-eat buffet spread",
    label: "The buffet",
  },
  {
    src: "/images/sweet-sour-fish.jpg",
    alt: "Sweet and sour fish fillet with peppers",
    label: "Bright & glossy",
    tall: true,
  },
  {
    src: "/images/crispy-calamari.jpg",
    alt: "Golden crispy calamari",
    label: "Crisp & golden",
  },
  {
    src: "/images/veg-fried-rice.jpg",
    alt: "Vegetable fried rice in a dark ceramic bowl",
    label: "A generous staple",
    wide: true,
  },
  {
    src: "/images/experience-live-music.jpg",
    alt: "Live music in the Eighty Eight dining room",
    label: "Live music",
  },
  {
    src: "/images/chicken-black-bean.jpg",
    alt: "Chicken with black bean sauce",
    label: "Rich & savoury",
    wide: true,
  },
  {
    src: "/images/crispy-chicken.jpg",
    alt: "Golden crispy chicken",
    label: "Crispy chicken",
    tall: true,
  },
];
