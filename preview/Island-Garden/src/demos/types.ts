/**
 * Shared content contract for hospitality demo sites.
 *
 * Every demo under /demo/[slug] is powered by a plain data object that
 * satisfies this type. Components never hardcode content — add a new demo
 * by creating a new data file and registering it in `src/demos/index.ts`.
 */

export type DemoImage = {
  src: string;
  alt: string;
};

export type NavLink = {
  id: string;
  label: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type AmenityIcon =
  | "pool"
  | "wifi"
  | "parking"
  | "shuttle"
  | "garden"
  | "desk"
  | "security"
  | "beach";

export type Amenity = {
  icon: AmenityIcon;
  title: string;
  blurb: string;
  /** Spans two columns in the bento grid and shows an image instead of an icon. */
  feature?: DemoImage;
};

export type Room = {
  name: string;
  tag: string;
  blurb: string;
  features: string[];
  image: DemoImage;
};

export type PoolPoint = {
  title: string;
  blurb: string;
};

export type LocationHighlight = {
  title: string;
  blurb: string;
};

export type GalleryItem = DemoImage & {
  caption: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

export type ContactBlock = {
  label: string;
  lines: string[];
};

export type HotelDemoConfig = {
  kind: "hotel";
  slug: string;
  /** Code prefix used for booking references, e.g. "IGH" -> "IGH-00042". */
  referenceCode: string;

  name: string;
  shortName: string;
  positioning: string;
  metaDescription: string;

  address: {
    street: string;
    city: string;
    region: string;
    country: string;
    mapQuery: string;
  };

  nav: NavLink[];
  marquee: string[];

  hero: {
    eyebrow: string;
    /** Headline is rendered line by line; italic flags showcase words. */
    lines: { text: string; italic?: boolean }[];
    sub: string;
    image: DemoImage;
    facts: string[];
  };

  about: {
    label: string;
    title: string;
    lead: string;
    paragraphs: string[];
    signature: string;
    stats: Stat[];
    images: [DemoImage, DemoImage];
  };

  rooms: {
    title: string;
    intro: string;
    items: Room[];
    note: string;
  };

  amenities: {
    title: string;
    intro: string;
    items: Amenity[];
  };

  pool: {
    title: string;
    lead: string;
    paragraphs: string[];
    points: PoolPoint[];
    main: DemoImage;
    sideA: DemoImage;
    sideB: DemoImage;
  };

  location: {
    title: string;
    lead: string;
    paragraphs: string[];
    image: DemoImage;
    highlights: LocationHighlight[];
  };

  gallery: {
    title: string;
    intro: string;
    items: GalleryItem[];
  };

  faq: {
    title: string;
    intro: string;
    items: FaqItem[];
  };

  book: {
    title: string;
    lead: string;
    bullets: string[];
    image: DemoImage;
  };

  contact: {
    title: string;
    lead: string;
    blocks: ContactBlock[];
  };

  footer: {
    note: string;
  };
};

export type DemoConfig = HotelDemoConfig;

/** Payload accepted by POST /api/demo/[slug]/inquiries. */
export type InquiryPayload = {
  kind: "booking" | "message";
  name: string;
  email: string;
  checkIn?: string;
  checkOut?: string;
  guests?: number;
  roomType?: string;
  message?: string;
};

export type InquiryResponse =
  | { ok: true; reference: string }
  | { ok: false; error: string };
