// ============================================================================
// MENU DATA
// ----------------------------------------------------------------------------
// Dish names are taken from the supplied reference. No prices are shown
// because individual dish prices were not supplied. Descriptions are short,
// neutral and non-committal so they read as placeholders to be refined.
// ============================================================================

export type Dish = {
  name: string;
  description: string;
  image?: string;
  category?: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  note: string;
  items: Dish[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "starters",
    label: "Starters",
    note: "Small plates to begin the evening.",
    items: [
      { name: "Crispy Calamari", description: "Golden, crisp and made for sharing." },
      { name: "Shrimp Croquette", description: "Delicate, golden and full of flavour." },
      { name: "Stuffed Fried Pepper", description: "A comforting, savoury favourite." },
    ],
  },
  {
    id: "dim-sum",
    label: "Dim Sum",
    note: "Steamed and deep-fried delights.",
    items: [
      { name: "Dim Sum Chouchou", description: "A house favourite, steamed to order." },
      { name: "Steamed Dumplings", description: "Soft parcels, satisfying and light." },
    ],
  },
  {
    id: "soups",
    label: "Soups",
    note: "Warm bowls to open the appetite.",
    items: [
      { name: "Chicken & Corn Soup", description: "A smooth, comforting classic." },
      { name: "Seafood Soup", description: "Rich, delicate and full of depth." },
    ],
  },
  {
    id: "rice",
    label: "Rice",
    note: "Generous, fragrant and steamed to order.",
    items: [
      { name: "Vegetable Fried Rice", description: "A colourful, satisfying staple." },
      { name: "Egg Fried Rice", description: "Simple, warming and classic." },
    ],
  },
  {
    id: "noodles",
    label: "Noodles",
    note: "Wok-tossed and made for sharing.",
    items: [{ name: "Egg Fried Noodles", description: "Slippery, savoury and comforting." }],
  },
  {
    id: "chicken",
    label: "Chicken",
    note: "House favourites, big on flavour.",
    items: [
      { name: "Crispy Chicken", description: "Golden, crisp and made for sharing." },
      { name: "Chicken Black Bean Sauce", description: "Rich, glossy and savoury." },
      { name: "Sizzling Chicken & Mushrooms", description: "Piping hot and aromatic." },
    ],
  },
  {
    id: "seafood",
    label: "Seafood",
    note: "Fresh flavours from the wok.",
    items: [
      { name: "Sweet & Sour Fish Fillet", description: "Bright, glossy and moreish." },
      { name: "Crispy Calamari", description: "Golden, crisp and made for sharing." },
    ],
  },
  {
    id: "lamb",
    label: "Lamb",
    note: "Rich and deeply savoury.",
    items: [{ name: "Lamb Sizzling with Black Bean Sauce", description: "Aromatic and satisfying." }],
  },
  {
    id: "desserts",
    label: "Desserts",
    note: "A sweet finish to the meal.",
    items: [
      { name: "Fresh Fruit Cocktail", description: "Light, bright and refreshing." },
      { name: "Dessert Sagoo and Ice Cream", description: "A comforting, cool classic." },
      { name: "Grass Jelly and Chinese Traditional Dessert", description: "Traditional and soothing." },
    ],
  },
];

// Featured / signature dishes shown in the editorial grid.
export type Signature = {
  name: string;
  description: string;
  image: string;
  category: string;
  feature?: boolean;
};

export const signatureDishes: Signature[] = [
  {
    name: "Vegetable Fried Rice",
    description: "A colourful, satisfying staple for the table.",
    image: "/images/veg-fried-rice.jpg",
    category: "Rice",
  },
  {
    name: "Crispy Chicken",
    description: "Golden, crisp and made for sharing.",
    image: "/images/crispy-chicken.jpg",
    category: "Chicken",
    feature: true,
  },
  {
    name: "Crispy Calamari",
    description: "Golden, crisp and moreish to start.",
    image: "/images/crispy-calamari.jpg",
    category: "Seafood",
  },
  {
    name: "Sweet & Sour Fish Fillet",
    description: "Bright, glossy and full of flavour.",
    image: "/images/sweet-sour-fish.jpg",
    category: "Seafood",
  },
  {
    name: "Sizzling Chicken & Mushrooms",
    description: "Piping hot and aromatic at the table.",
    image: "/images/sizzling-chicken-mushrooms.jpg",
    category: "Chicken",
  },
  {
    name: "Chicken Black Bean Sauce",
    description: "Rich, glossy and deeply savoury.",
    image: "/images/chicken-black-bean.jpg",
    category: "Chicken",
  },
];
