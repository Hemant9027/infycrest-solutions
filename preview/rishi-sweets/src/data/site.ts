/* ------------------------------------------------------------------ */
/*  RISHI SWEETS — CENTRAL CONTENT CONFIG                              */
/*  Everything editable lives here. Update values without touching UI. */
/*                                                                     */
/*  LEGEND                                                             */
/*  [VERIFIED]  = confirmed from public business listings / brief      */
/*  [PUBLIC]    = publicly listed online, please re-verify             */
/*  [SAMPLE]    = template content — replace with verified data        */
/* ------------------------------------------------------------------ */

export const IMG = {
  heroSpread: "/images/restaurant-1.jpg",
  biryani: "/images/restaurant-2.jpg",
  sweets: "/images/restaurant-3.jpg",
  gulabJamun: "/images/restaurant-4.jpg",
  ambience: "/images/restaurant-5.jpg",
  thali: "/images/restaurant-6.jpg",
  dosa: "/images/restaurant-7.jpg",
  curryNaan: "/images/restaurant-8.jpg",
  cake: "/images/restaurant-9.jpg",
  jalebi: "/images/restaurant-10.jpg",
};

export const STOCK = {
  thaliTable: "/images/restaurant-11.jpg",
  mughlaiPan: "/images/restaurant-12.jpg",
  paneerBowl: "/images/restaurant-13.jpg",
  paratha: "/images/restaurant-14.jpg",
  tableSetting: "/images/restaurant-15.jpg",
  spread: "/images/restaurant-16.jpg",
  brassCurry: "/images/restaurant-17.jpg",
  naanDark: "/images/restaurant-18.jpg",
  sweetShop: "/images/restaurant-19.jpg",
  ladduBox: "/images/restaurant-20.jpg",
  festive: "/images/restaurant-21.jpg",
  diwaliPlatter: "/images/restaurant-22.jpg",
  sweetCraft: "/images/restaurant-23.jpg",
  samosa: "/images/restaurant-24.jpg",
  pakoraChai: "/images/restaurant-25.jpg",
  snackPlatter: "/images/restaurant-26.jpg",
  samosaTray: "/images/restaurant-27.jpg",
  bakeryDisplay: "/images/restaurant-28.jpg",
  croissant: "/images/restaurant-1.jpg",
  muffins: "/images/restaurant-2.jpg",
  pastryRack: "/images/restaurant-3.jpg",
  pastryPlate: "/images/restaurant-4.jpg",
  banquet: "/images/restaurant-5.jpg",
  appetizers: "/images/restaurant-6.jpg",
  weddingBuffet: "/images/restaurant-7.jpg",
};

export const site = {
  name: "Rishi Sweets", // [VERIFIED]
  tagline: "Sweets · Restaurant · Bakery", // [VERIFIED]
  established: 2017, // [VERIFIED]
  rating: 4.0, // [VERIFIED]
  ratingCount: 1425, // [VERIFIED – approximately, per listing]
  ratingLabel: "1,400+", // [VERIFIED – approximately]
  addressLines: [
    "Near Prakash Chowk, South Civil Lines,",
    "Industrial Estate, Muzaffarnagar – 251003,",
    "Uttar Pradesh, India",
  ], // [VERIFIED]
  landmark: "Near Prakash Chowk", // [VERIFIED]
  city: "Muzaffarnagar",
  hours: {
    days: "Open Daily",
    open: "7:30 AM",
    close: "10:30 PM",
    openMinutes: 7 * 60 + 30, // 07:30
    closeMinutes: 22 * 60 + 30, // 22:30
  }, // [VERIFIED]
  // Phone number is publicly listed on Google/top-rated.online. [PUBLIC]
  // Verify with the owner — replace here if it ever changes.
  phone: "+91 98971 00031",
  whatsapp: "919897100031", // [PUBLIC] — same number; confirm WhatsApp availability
  email: "EMAIL_HERE", // ⚠ placeholder — not publicly verified
  orderUrl: "ORDERING_LINK_HERE", // ⚠ placeholder — no verified online ordering partner
  website: "https://rishisweets.com", // [PUBLIC]
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Rishi%20Sweets%2C%20Prakash%20Chowk%2C%20Muzaffarnagar%2C%20Uttar%20Pradesh%20251003",
  mapEmbed:
    "https://www.google.com/maps?q=Rishi%20Sweets%2C%20Prakash%20Chowk%2C%20Muzaffarnagar%2C%20Uttar%20Pradesh%20251003&output=embed",
  instagramUrl: "https://www.instagram.com/rishisweets/",
  instagramHandle: "@rishisweets",
  cateringCapacity: "1,000+", // [VERIFIED – capacity information listed]
  priceNote: "Below ₹500", // [VERIFIED – per public listing]
  priceNoteLong:
    "Public listings describe Rishi Sweets as budget-friendly, with a typical spend below ₹500 per person.",
};

export const wa = (msg: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;

export const tel = `tel:${site.phone.replace(/\s/g, "")}`;

export const WHATSAPP_DEFAULT_MSG =
  "Hi Rishi Sweets, I would like to enquire about your menu/order.";

/* Public platforms where Rishi Sweets is listed & reviewed. [PUBLIC] */
export const reviewSources = [
  { label: "Google Maps", url: site.googleMapsUrl },
  {
    label: "Justdial",
    url: "https://www.justdial.com/Muzaffarnagar/Rishi-Sweets-Near-Prakash-Chowk-Muzaffarnagar-Industrial-Estate/9999PX131-X131-180730163219-I4Y4_BZDET",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Sweets", href: "#sweets" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Catering", href: "#catering" },
  { label: "Contact", href: "#contact" },
];

/* ----------------------------- MENU -------------------------------- */
/* SAMPLE — REPLACE WITH VERIFIED MENU DATA. No prices are shown        */
/* because verified prices are unavailable. `popular` is only set for   */
/* items explicitly praised in public reviews.                          */

export type MenuCatId =
  | "biryani"
  | "north-indian"
  | "mughlai"
  | "south-indian"
  | "thali"
  | "sweets"
  | "bakery"
  | "cakes"
  | "beverages"
  | "quick-bites";

export const menuCategories: { id: MenuCatId | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "biryani", label: "Biryani" },
  { id: "north-indian", label: "North Indian" },
  { id: "mughlai", label: "Mughlai" },
  { id: "south-indian", label: "South Indian" },
  { id: "thali", label: "Thali" },
  { id: "sweets", label: "Sweets" },
  { id: "bakery", label: "Bakery" },
  { id: "cakes", label: "Cakes" },
  { id: "beverages", label: "Beverages" },
  { id: "quick-bites", label: "Quick Bites" },
];

export interface MenuItem {
  id: string;
  cat: MenuCatId;
  name: string;
  desc: string;
  img: string;
  veg: boolean | null; // null = unverified — SAMPLE data, confirm with counter
  price: number | null; // always null until verified
  popular: boolean; // true only where public reviews mention the item
  available: boolean;
}

export const menu: MenuItem[] = [
  { id: "subz-biryani", cat: "biryani", name: "Subz Dum Biryani", desc: "Slow-cooked basmati layered with seasonal vegetables, saffron and whole spices.", img: IMG.biryani, veg: true, price: null, popular: false, available: true },
  { id: "paneer-biryani", cat: "biryani", name: "Paneer Handi Biryani", desc: "Fragrant handi biryani with marinated paneer, fried onions and mint.", img: STOCK.brassCurry, veg: true, price: null, popular: false, available: true },
  { id: "special-biryani", cat: "biryani", name: "Rishi Special Biryani", desc: "House-style dum biryani finished with ghee, nuts and fresh coriander.", img: STOCK.spread, veg: null, price: null, popular: false, available: true },
  { id: "pbm", cat: "north-indian", name: "Paneer Butter Masala", desc: "Silky tomato-cashew gravy with soft paneer and a swirl of cream.", img: STOCK.paneerBowl, veg: true, price: null, popular: false, available: true },
  { id: "dal-makhani", cat: "north-indian", name: "Dal Makhani", desc: "Black urad simmered overnight with butter and gentle smoke.", img: IMG.curryNaan, veg: true, price: null, popular: false, available: true },
  { id: "chole", cat: "north-indian", name: "Chole Bhature", desc: "Amritsari-style chickpeas with fluffy bhature, onion and pickle.", img: STOCK.naanDark, veg: true, price: null, popular: false, available: true },
  { id: "breads", cat: "north-indian", name: "Tandoori Roti & Paranthas", desc: "Fresh from the tandoor — reviewers note the paranthas made without maida.", img: STOCK.paratha, veg: true, price: null, popular: true, available: true },
  { id: "mix-veg", cat: "north-indian", name: "Shahi Mix Veg", desc: "Garden vegetables in a rich, mildly spiced cashew gravy.", img: STOCK.thaliTable, veg: true, price: null, popular: false, available: true },
  { id: "malai-kofta", cat: "mughlai", name: "Malai Kofta", desc: "Soft paneer-potato dumplings in a creamy Mughlai gravy.", img: STOCK.mughlaiPan, veg: true, price: null, popular: false, available: true },
  { id: "navratan", cat: "mughlai", name: "Navratan Korma", desc: "Nine-gem medley of vegetables, fruit and nuts in korma sauce.", img: STOCK.brassCurry, veg: true, price: null, popular: false, available: true },
  { id: "mughlai-paneer", cat: "mughlai", name: "Mughlai Paneer Korma", desc: "Paneer folded into a saffron-laced, aromatic korma.", img: IMG.curryNaan, veg: true, price: null, popular: false, available: true },
  { id: "masala-dosa", cat: "south-indian", name: "Masala Dosa", desc: "Crisp golden dosa with spiced potato — a dish reviewers call out by name.", img: IMG.dosa, veg: true, price: null, popular: true, available: true },
  { id: "idli", cat: "south-indian", name: "Idli Sambar", desc: "Steam-soft idlis with hot sambar and coconut chutney.", img: STOCK.snackPlatter, veg: true, price: null, popular: false, available: true },
  { id: "uttapam", cat: "south-indian", name: "Onion-Tomato Uttapam", desc: "Thick griddled uttapam topped with onion, tomato and coriander.", img: STOCK.paratha, veg: true, price: null, popular: false, available: true },
  { id: "special-thali", cat: "thali", name: "Rishi Special Thali", desc: "A full spread — dal, paneer, seasonal sabzi, breads, rice and a sweet.", img: IMG.thali, veg: true, price: null, popular: false, available: true },
  { id: "mini-thali", cat: "thali", name: "Mini Lunch Thali", desc: "A lighter midday plate with dal, sabzi, roti and rice.", img: STOCK.thaliTable, veg: true, price: null, popular: false, available: true },
  { id: "gulab-jamun", cat: "sweets", name: "Gulab Jamun", desc: "Khoya dumplings soaked in saffron syrup — the sweets win constant praise.", img: IMG.gulabJamun, veg: true, price: null, popular: true, available: true },
  { id: "kaju-katli", cat: "sweets", name: "Kaju Katli", desc: "Silky cashew fudge finished with edible silver varq.", img: IMG.sweets, veg: true, price: null, popular: false, available: true },
  { id: "motichoor", cat: "sweets", name: "Motichoor Laddu", desc: "Fine boondi pearls bound in ghee and cardamom.", img: STOCK.ladduBox, veg: true, price: null, popular: false, available: true },
  { id: "jalebi-rabri", cat: "sweets", name: "Jalebi with Rabri", desc: "Hot, crisp jalebi spirals served with chilled thickened rabri.", img: IMG.jalebi, veg: true, price: null, popular: true, available: true },
  { id: "rasgulla", cat: "sweets", name: "Rasgulla", desc: "Feather-light chhena balls in delicate sugar syrup.", img: STOCK.festive, veg: true, price: null, popular: false, available: true },
  { id: "milk-cake", cat: "sweets", name: "Desi Ghee Milk Cake", desc: "Slow-reduced milk cake with a caramel centre and nut dust.", img: STOCK.diwaliPlatter, veg: true, price: null, popular: false, available: true },
  { id: "truffle-pastry", cat: "bakery", name: "Choco Truffle Pastry", desc: "Rich chocolate sponge layered with glossy ganache.", img: STOCK.pastryPlate, veg: true, price: null, popular: false, available: true },
  { id: "croissant", cat: "bakery", name: "Butter Croissant", desc: "Flaky, laminated and baked through the day.", img: STOCK.croissant, veg: true, price: null, popular: false, available: true },
  { id: "muffins", cat: "bakery", name: "Fresh Muffins", desc: "Bakery-case muffins and tea cakes — reviewers praise the bakery counter.", img: STOCK.muffins, veg: true, price: null, popular: true, available: true },
  { id: "truffle-cake", cat: "cakes", name: "Chocolate Truffle Cake", desc: "Celebration favourite with dark ganache and chocolate curls.", img: IMG.cake, veg: true, price: null, popular: false, available: true },
  { id: "pineapple-cake", cat: "cakes", name: "Pineapple Celebration Cake", desc: "Light vanilla sponge, pineapple cream and glazed fruit.", img: STOCK.bakeryDisplay, veg: true, price: null, popular: false, available: true },
  { id: "cold-coffee", cat: "beverages", name: "Cold Coffee with Ice Cream", desc: "Blended cold coffee crowned with a scoop — a reviewer favourite.", img: STOCK.pakoraChai, veg: true, price: null, popular: true, available: true },
  { id: "masala-chai", cat: "beverages", name: "Masala Chai", desc: "Slow-brewed with crushed spices and fresh ginger.", img: STOCK.pakoraChai, veg: true, price: null, popular: false, available: true },
  { id: "lassi", cat: "beverages", name: "Sweet Punjabi Lassi", desc: "Thick churned curd, saffron and a malai top.", img: STOCK.brassCurry, veg: true, price: null, popular: false, available: true },
  { id: "samosa", cat: "quick-bites", name: "Samosa Plate", desc: "Crisp samosas with tamarind and mint chutneys.", img: STOCK.samosa, veg: true, price: null, popular: false, available: true },
  { id: "pav-bhaji", cat: "quick-bites", name: "Pav Bhaji", desc: "Buttery mashed bhaji with soft pav — specifically praised in reviews.", img: STOCK.snackPlatter, veg: true, price: null, popular: true, available: true },
  { id: "hcp", cat: "quick-bites", name: "Honey Chilli Potato", desc: "Crispy potato fingers glossed in honey-chilli — a dish reviewers mention.", img: STOCK.samosaTray, veg: true, price: null, popular: true, available: true },
];

export const MENU_IS_SAMPLE = true;

/* --------------------------- DISCOVERY ------------------------------ */

export const discovery: {
  id: MenuCatId;
  label: string;
  desc: string;
  img: string;
}[] = [
  { id: "biryani", label: "Biryani", desc: "Saffron-laced dum biryani, sealed and slow-cooked.", img: IMG.biryani },
  { id: "north-indian", label: "North Indian", desc: "Tandoor breads, paneer gravies and slow dals.", img: IMG.curryNaan },
  { id: "mughlai", label: "Mughlai", desc: "Rich kormas and royal, cream-finished gravies.", img: STOCK.mughlaiPan },
  { id: "south-indian", label: "South Indian", desc: "Crisp dosas and soft idlis, straight off the tawa.", img: IMG.dosa },
  { id: "thali", label: "Thali", desc: "Complete plates for a proper Indian meal.", img: IMG.thali },
  { id: "sweets", label: "Sweets", desc: "Fresh mithai made daily — the heart of Rishi.", img: IMG.sweets },
  { id: "bakery", label: "Bakery", desc: "Puffs, croissants and tea-time bakes.", img: STOCK.bakeryDisplay },
  { id: "cakes", label: "Cakes", desc: "Celebration cakes and indulgent pastries.", img: IMG.cake },
  { id: "quick-bites", label: "Quick Bites", desc: "Samosas, chaats and pav bhaji on the go.", img: STOCK.samosa },
  { id: "beverages", label: "Coffee & Beverages", desc: "Cold coffee, chai and thick Punjabi lassi.", img: STOCK.pakoraChai },
];

/* ---------------------------- SWEETS -------------------------------- */

export const sweetCategories = [
  { label: "Traditional Sweets", desc: "Jalebi, imarti and classics from the halwai kadhai.", img: IMG.jalebi },
  { label: "Milk Sweets", desc: "Gulab jamun, rasgulla and slow-reduced milk cake.", img: IMG.gulabJamun },
  { label: "Dry Fruit Sweets", desc: "Kaju katli and rich, nut-forward barfis.", img: IMG.sweets },
  { label: "Festival Specials", desc: "Seasonal mithai for Diwali, Rakhi and family pujas.", img: STOCK.festive },
  { label: "Cakes", desc: "Soft sponges and celebration centre-pieces.", img: IMG.cake },
  { label: "Pastries", desc: "Single-serve indulgence from the pastry counter.", img: STOCK.pastryPlate },
  { label: "Gift Boxes", desc: "Assorted mithai boxes, packed for gifting.", img: STOCK.ladduBox },
];

export const bakeryItems = [
  { label: "Cakes", desc: "Truffle, pineapple and celebration cakes — ask the counter for today's display.", img: IMG.cake },
  { label: "Pastries", desc: "Truffle, butterscotch and seasonal pastries.", img: STOCK.pastryRack },
  { label: "Bakery", desc: "Croissants, puffs, muffins and cookies baked through the day.", img: STOCK.muffins },
  { label: "Desserts", desc: "Cold coffee with ice cream and sweet endings.", img: STOCK.pakoraChai },
];

/* -------------------------- EXPERIENCE ------------------------------ */

export const experienceSlides = [
  { title: "Dine-In", desc: "A calm, family-friendly restaurant floor — reviewers call the atmosphere cool and relaxed.", img: IMG.ambience },
  { title: "Family Dining", desc: "Room to sit together, a kids' menu and food that arrives quick.", img: STOCK.tableSetting },
  { title: "Takeaway", desc: "Packed hot and fast for the road — right off Prakash Chowk.", img: IMG.thali },
  { title: "Home Delivery", desc: "Craving at home? Ask about delivery options on call or WhatsApp.", img: STOCK.samosaTray },
  { title: "Quick Bites", desc: "Samosa, pav bhaji and honey chilli potato when time is short.", img: STOCK.snackPlatter },
  { title: "Catering & Party Hall", desc: "Large-scale catering with a listed capacity of 1,000+, plus an in-house party hall.", img: STOCK.appetizers },
];

/* ---------------------------- WHY US -------------------------------- */

export const whyUs = [
  { icon: "calendar", title: "Serving Since 2017", desc: "Nine-plus years at the same address near Prakash Chowk." },
  { icon: "sparkles", title: "Wide Variety", desc: "North Indian, South Indian, Mughlai, biryani, Chinese-style bites and more." },
  { icon: "utensils", title: "Sweets + Restaurant", desc: "A fresh mithai counter and a full family restaurant under one roof." },
  { icon: "bag", title: "Dine-In & Takeaway", desc: "Sit down for a meal or grab something hot on the way." },
  { icon: "bike", title: "Home Delivery", desc: "Delivery available — call or message to check your area." },
  { icon: "party", title: "Large-Scale Catering", desc: "Catering for weddings and functions with a listed capacity of 1,000+." },
  { icon: "car", title: "Parking Available", desc: "On-site parking, drive-through and wheelchair-accessible access." },
];

/* --------------------------- CATERING ------------------------------- */

export const cateringEvents = [
  "Weddings",
  "Birthdays",
  "Family Functions",
  "Corporate Events",
  "Religious Gatherings",
  "Large Celebrations",
];

/* --------------------------- GALLERY -------------------------------- */

export type GalleryCat = "food" | "sweets" | "restaurant" | "cakes" | "ambience";

export const galleryFilters: { id: "all" | GalleryCat; label: string }[] = [
  { id: "all", label: "All" },
  { id: "food", label: "Food" },
  { id: "sweets", label: "Sweets" },
  { id: "restaurant", label: "Restaurant" },
  { id: "cakes", label: "Cakes" },
  { id: "ambience", label: "Ambience" },
];

export const galleryItems: {
  id: string;
  img: string;
  cat: GalleryCat;
  caption: string;
  tall?: boolean;
}[] = [
  { id: "g1", img: IMG.heroSpread, cat: "food", caption: "A full Rishi table — biryani, curries, breads and sweets", tall: true },
  { id: "g2", img: IMG.biryani, cat: "food", caption: "Dum biryani from the handi" },
  { id: "g3", img: IMG.sweets, cat: "sweets", caption: "Assorted mithai with silver varq", tall: true },
  { id: "g4", img: IMG.ambience, cat: "restaurant", caption: "The family dining floor" },
  { id: "g5", img: IMG.dosa, cat: "food", caption: "Masala dosa, crisp off the tawa" },
  { id: "g6", img: IMG.gulabJamun, cat: "sweets", caption: "Gulab jamun in saffron syrup" },
  { id: "g7", img: IMG.cake, cat: "cakes", caption: "Chocolate truffle celebration cake", tall: true },
  { id: "g8", img: IMG.thali, cat: "food", caption: "The special thali" },
  { id: "g9", img: IMG.jalebi, cat: "sweets", caption: "Jalebi with chilled rabri" },
  { id: "g10", img: IMG.curryNaan, cat: "food", caption: "Paneer butter masala with naan" },
  { id: "g11", img: STOCK.sweetShop, cat: "sweets", caption: "Fresh sweets at the counter", tall: true },
  { id: "g12", img: STOCK.sweetCraft, cat: "restaurant", caption: "Shaping the day's mithai by hand" },
  { id: "g13", img: STOCK.tableSetting, cat: "restaurant", caption: "Set for a family dinner" },
  { id: "g14", img: STOCK.bakeryDisplay, cat: "cakes", caption: "The bakery display counter", tall: true },
  { id: "g15", img: STOCK.pastryRack, cat: "cakes", caption: "Pastries fresh from the case" },
  { id: "g16", img: STOCK.festive, cat: "sweets", caption: "Festive mithai by candlelight" },
  { id: "g17", img: STOCK.tableSetting, cat: "ambience", caption: "Set for an evening dinner" },
  { id: "g18", img: STOCK.banquet, cat: "ambience", caption: "Celebration setup for a large gathering", tall: true },
];

/* -------------------------- INSTAGRAM ------------------------------- */
/* The feed below is a SAMPLE layout using placeholder imagery.         */
/* Replace each entry with real posts from instagram.com/rishisweets.   */

export const instaPosts: {
  id: string;
  img: string;
  cat: string;
  caption: string;
}[] = [
  { id: "i1", img: IMG.biryani, cat: "Biryani", caption: "SAMPLE — Dum biryani day at Rishi Sweets" },
  { id: "i2", img: IMG.sweets, cat: "Sweets", caption: "SAMPLE — Fresh kaju katli with silver varq" },
  { id: "i3", img: IMG.jalebi, cat: "Sweets", caption: "SAMPLE — Hot jalebi, cold rabri" },
  { id: "i4", img: IMG.dosa, cat: "Food", caption: "SAMPLE — Weekend masala dosa" },
  { id: "i5", img: IMG.cake, cat: "Cakes", caption: "SAMPLE — Truffle cake from the bakery" },
  { id: "i6", img: STOCK.festive, cat: "Festivals", caption: "SAMPLE — Festive mithai boxes" },
  { id: "i7", img: IMG.thali, cat: "Food", caption: "SAMPLE — The special thali" },
  { id: "i8", img: STOCK.samosaTray, cat: "Snacks", caption: "SAMPLE — Samosa hour" },
  { id: "i9", img: IMG.gulabJamun, cat: "Sweets", caption: "SAMPLE — Gulab jamun close-up" },
  { id: "i10", img: STOCK.pastryRack, cat: "Bakery", caption: "SAMPLE — Pastry counter" },
  { id: "i11", img: IMG.ambience, cat: "Restaurant", caption: "SAMPLE — Evening on the dining floor" },
  { id: "i12", img: STOCK.appetizers, cat: "Catering", caption: "SAMPLE — Catering service" },
];

/* ---------------------------- REVIEWS ------------------------------- */
/* Themes below reflect public review summaries on Justdial/Google.     */
/* Excerpts are genuine public review excerpts (lightly trimmed).       */

export const reviewThemes = {
  loved: [
    "Good taste, especially Indian cuisine",
    "Wide variety — dosa, pav bhaji and more",
    "Reasonable, budget-friendly prices",
    "Fresh, pure sweets",
    "Calm, cool dine-in atmosphere",
    "Bakery and party hall on-site",
    "Quick, well-behaved service",
  ],
  improve: [
    "Service consistency on busy days",
    "Cleanliness before some events",
    "Occasionally inconsistent food quality",
  ],
};

export const reviewExcerpts: {
  name: string;
  source: string;
  date: string;
  tone: "positive" | "mixed";
  text: string;
}[] = [
  {
    name: "Pankaj",
    source: "Justdial",
    date: "Feb 2023",
    tone: "positive",
    text: "Very good and very clean, and pocket friendly — I love the sweets here, very fresh and very pure. The service is quick and the staff is well behaved and cordial.",
  },
  {
    name: "Aryaman Tyagi",
    source: "Justdial",
    date: "Nov 2019",
    tone: "positive",
    text: "Best food.",
  },
  {
    name: "Google reviewer",
    source: "Google",
    date: "Public review",
    tone: "mixed",
    text: "Nice place with a variety of sweets. Restaurant environment was good and cleanliness was maintained — the masala dosa was good.",
  },
  {
    name: "Google reviewer",
    source: "Google",
    date: "Public review",
    tone: "mixed",
    text: "Good place for dinner with family; food quality is good.",
  },
  {
    name: "Google reviewer",
    source: "Google",
    date: "Public review",
    tone: "mixed",
    text: "Fast food is good; some reviews suggest room for improvement on premium pastries and service at peak hours.",
  },
];

/* ------------------------------ FAQ --------------------------------- */

export const faqs = [
  {
    q: "Where is Rishi Sweets located?",
    a: "Rishi Sweets is located near Prakash Chowk, South Civil Lines, Industrial Estate, Muzaffarnagar – 251003, Uttar Pradesh. It is easy to reach from the main chowk, and parking is available on-site.",
  },
  {
    q: "What are the opening hours?",
    a: "Rishi Sweets is open every day from 7:30 AM to 10:30 PM, seven days a week.",
  },
  {
    q: "Does Rishi Sweets offer dine-in?",
    a: "Yes. Rishi Sweets has a family-friendly dine-in restaurant, and public reviews describe the atmosphere as cool, calm and comfortable.",
  },
  {
    q: "Is takeaway available?",
    a: "Yes, takeaway is available, along with quick bites for customers on the go.",
  },
  {
    q: "Is home delivery available?",
    a: "Home delivery is listed among the services. For delivery areas and timing, please contact Rishi Sweets directly by phone or WhatsApp.",
  },
  {
    q: "Does Rishi Sweets provide catering?",
    a: "Yes. Catering is offered for weddings, birthdays, family functions, corporate events and religious gatherings, with capacity information listed for 1,000+ people.",
  },
  {
    q: "Can I enquire about bulk or bulk sweet orders?",
    a: "Yes — bulk food and mithai requirements can be discussed directly. Use the catering form on this page, or send a WhatsApp message with your date, guest count and requirements.",
  },
  {
    q: "Is parking available?",
    a: "Yes. Parking is available on-site, including wheelchair-accessible parking, and a drive-through option is listed among the amenities.",
  },
  {
    q: "What cuisines are available?",
    a: "The restaurant serves North Indian, South Indian, Mughlai and multicuisine dishes, including biryani, thalis and quick bites.",
  },
  {
    q: "Are sweets and bakery products available?",
    a: "Yes. Rishi Sweets runs a fresh sweets counter plus a bakery with cakes, pastries and other bakes. For today's selection and custom orders, please enquire at the counter or on WhatsApp.",
  },
];

/* --------------------------- SERVICES ------------------------------- */

export const serviceChips = [
  "Dine-in",
  "Takeaway",
  "Home Delivery",
  "Catering",
  "Kids Menu",
  "Quick Bites",
];
