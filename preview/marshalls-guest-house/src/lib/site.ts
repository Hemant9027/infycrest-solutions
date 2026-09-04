import type { StaticImageData } from "next/image";

import heroHarbour from "../../public/images/hero-harbour.jpg";
import aerialCay from "../../public/images/aerial-cay.jpg";
import harbourSail from "../../public/images/harbour-sail.jpg";
import harbourFleet from "../../public/images/harbour-fleet.jpg";
import boatSandbar from "../../public/images/boat-sandbar.jpg";
import housePalms from "../../public/images/house-palms.jpg";
import houseTropical from "../../public/images/house-tropical.jpg";
import roomOne from "../../public/images/room-one.jpg";
import roomTwo from "../../public/images/room-two.jpg";
import roomBright from "../../public/images/room-bright.jpg";
import roomWood from "../../public/images/room-wood.jpg";
import explorePigs from "../../public/images/explore-pigs.jpg";
import exploreLighthouse from "../../public/images/explore-lighthouse.jpg";
import exploreDriftwood from "../../public/images/explore-driftwood.jpg";
import exploreBeach from "../../public/images/explore-beach.jpg";
import exploreAerial from "../../public/images/explore-aerial.jpg";
import exploreReef from "../../public/images/explore-reef.jpg";
import exploreFish from "../../public/images/explore-fish.jpg";
import duskPier from "../../public/images/dusk-pier.jpg";
import townStreet from "../../public/images/town-street.jpg";
import yachtCoast from "../../public/images/yacht-coast.jpg";
import sereneBeach from "../../public/images/serene-beach.jpg";

export const IMG = {
  heroHarbour,
  aerialCay,
  harbourSail,
  harbourFleet,
  boatSandbar,
  housePalms,
  houseTropical,
  roomOne,
  roomTwo,
  roomBright,
  roomWood,
  explorePigs,
  exploreLighthouse,
  exploreDriftwood,
  exploreBeach,
  exploreAerial,
  exploreReef,
  exploreFish,
  duskPier,
  townStreet,
  yachtCoast,
  sereneBeach,
};

export const BUSINESS = {
  name: "Marshall's Guest House",
  host: "Phillipa Marshall",
  phoneDisplay: "+1 (242) 357-0504",
  phoneHref: "tel:+12423570504",
  email: "marshallsguesthouse@gmail.com",
  emailHref: "mailto:marshallsguesthouse@gmail.com",
  addressLines: ["Queen's Highway", "George Town, Great Exuma", "The Bahamas"],
  addressOneLine: "Queen's Highway, George Town, Great Exuma, The Bahamas",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Rooms", href: "#rooms" },
  { label: "Experience", href: "#experience" },
  { label: "The Harbour", href: "#harbour" },
  { label: "Explore Exuma", href: "#explore" },
  { label: "Gallery", href: "#gallery" },
];

export type Room = {
  id: "one-bedroom" | "two-bedroom";
  name: string;
  tagline: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
  features: string[];
};

export const ROOMS: Room[] = [
  {
    id: "one-bedroom",
    name: "One-Bedroom Room",
    tagline: "For two",
    description:
      "A calm, air-conditioned room made for slow island mornings — cool tile, soft light off the harbour, and everything you need and nothing you don't.",
    image: roomOne,
    imageAlt: "Bright one-bedroom guest room with sea view at Marshall's Guest House",
    features: ["Air conditioning", "TV", "WiFi", "Bathroom", "Non-smoking"],
  },
  {
    id: "two-bedroom",
    name: "Two-Bedroom Room",
    tagline: "For families & friends",
    description:
      "Extra room to stretch out after long days on the water. Two bedrooms, the same easy comfort, and space for the whole crew's conch-fritter stories.",
    image: roomTwo,
    imageAlt: "Comfortable two-bedroom guest room at Marshall's Guest House",
    features: ["Air conditioning", "TV", "WiFi", "Bathroom", "Non-smoking"],
  },
];

export type ExploreCard = {
  index: string;
  title: string;
  area: string;
  copy: string;
  image: StaticImageData;
  alt: string;
};

export const EXPLORE: ExploreCard[] = [
  {
    index: "01",
    title: "The Swimming Pigs",
    area: "Big Major Cay",
    copy: "Exuma's most famous residents paddle out to greet boats in water so clear it hardly looks real.",
    image: explorePigs,
    alt: "A pig wading the shoreline of a clear turquoise cay in the Exumas",
  },
  {
    index: "02",
    title: "Thunderball Grotto",
    area: "Near Staniel Cay",
    copy: "Snorkel into a vaulted sea cave lit from below — a James Bond filming location and an aquarium you can swim through.",
    image: exploreReef,
    alt: "Sunlit coral reef teeming with fish in clear Exuma waters",
  },
  {
    index: "03",
    title: "Tropic of Cancer Beach",
    area: "Little Exuma",
    copy: "A quiet ribbon of white sand crossed by the tropical line — often with no footprints but your own.",
    image: exploreBeach,
    alt: "Pristine white sand beach meeting turquoise shallows",
  },
  {
    index: "04",
    title: "Stocking Island",
    area: "Across the Harbour",
    copy: "The long, lazy island that shelters Elizabeth Harbour — beach bars, nature trails, and chat-and-chill sandbars.",
    image: sereneBeach,
    alt: "Calm turquoise shoreline across Elizabeth Harbour",
  },
  {
    index: "05",
    title: "The Sandbars",
    area: "The Exuma Cays",
    copy: "At low tide the cays grow porcelain-white sandbars that glow from a boat, a plane, or a very happy drone.",
    image: boatSandbar,
    alt: "Boat anchored beside a white sandbar in vivid turquoise water",
  },
  {
    index: "06",
    title: "George Town Days",
    area: "Right Outside",
    copy: "Straw baskets, harbour-front eateries, and the unhurried beat of the Family Island capital — all from our doorstep.",
    image: townStreet,
    alt: "Colourful island walkway between tropical houses",
  },
];

export type GalleryItem = {
  image: StaticImageData;
  alt: string;
  label: string;
  tall?: boolean;
};

export const GALLERY: GalleryItem[] = [
  { image: heroHarbour, alt: "Aerial view of islands and sandbars in turquoise water", label: "Sandbars, from above" },
  { image: roomOne, alt: "Guest room with sea view", label: "Morning light, Room with a view", tall: true },
  { image: harbourFleet, alt: "Sailboats at anchor on turquoise water", label: "The anchorage" },
  { image: exploreDriftwood, alt: "Driftwood on a quiet turquoise beach", label: "Driftwood mornings", tall: true },
  { image: exploreFish, alt: "School of tropical fish in clear water", label: "Just below the surface" },
  { image: roomTwo, alt: "Guest room with blue bedding and ocean artwork", label: "Room comforts" },
  { image: yachtCoast, alt: "Yacht cruising a green tropical coastline", label: "Cruising the Sound", tall: true },
  { image: exploreAerial, alt: "Aerial of lush shoreline and reef", label: "Where the island meets the sea" },
  { image: aerialCay, alt: "Aerial of a small cay ringed by turquoise", label: "A cay of one's own" },
  { image: duskPier, alt: "Pier at dusk over calm water", label: "Harbour, at dusk" },
];

export const AMENITIES = [
  "Eight guestrooms, one- and two-bedroom",
  "Air conditioning throughout",
  "TV and WiFi in every room",
  "Bathroom in every room",
  "Entirely non-smoking",
  "Overlooking Elizabeth Harbour",
  "Restaurant & café within walking distance",
  "On Queen's Highway, George Town",
];
