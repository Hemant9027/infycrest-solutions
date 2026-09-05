/**
 * Central brand, contact and URL configuration for InfyCrest Solutions.
 * Add real social/resource URLs here when available — components will pick
 * them up automatically.
 */

export const SITE = {
  name: "InfyCrest Solutions",
  shortName: "InfyCrest",
  tagline: "Digital experiences for ambitious businesses.",
  year: 2026,
  url: "https://infycrestsolutions.com",
  title: "InfyCrest Solutions — Websites Designed to Make Your Business Look Exceptional",
  description:
    "Explore ready-to-launch website concepts, live previews, automation solutions and custom digital experiences from InfyCrest Solutions.",
  email: "hemant@infycrestsolutions.com",
  emailHref: "mailto:hemant@infycrestsolutions.com",
  phoneDisplay: "+91 9027152962",
  phoneHref: "tel:+919027152962",
  whatsappNumber: "919027152962",
  defaultWhatsAppMessage:
    "Hi InfyCrest Solutions, I'm interested in building a website.",
} as const;

/** Build a wa.me deep link with a pre-filled, URL-encoded message. */
export function whatsappUrl(message: string = SITE.defaultWhatsAppMessage) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const WA_LAUNCHKIT = whatsappUrl(
  "Hi InfyCrest Solutions, I'd like to get the LaunchKit website package."
);

export const NAV_LINKS = [
  { label: "Demos", href: "/#demos" },
  { label: "Products", href: "/#products" },
  { label: "Categories", href: "/#products" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Process", href: "/#process" },
] as const;

export const QUICK_LINKS = [
  { label: "Demos", href: "/#demos" },
  { label: "Products", href: "/#products" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
] as const;

export interface ExternalLink {
  label: string;
  /** Empty string = placeholder, real URL not available yet. */
  url: string;
}

/** Social profiles — real URLs to be added when the handles go live. */
export const SOCIAL_LINKS: ExternalLink[] = [
  { label: "Facebook", url: "" },
  { label: "Instagram", url: "" },
  { label: "YouTube", url: "" },
];

/** Resource links — real URLs to be added when available. */
export const RESOURCE_LINKS: ExternalLink[] = [
  { label: "Check our work", url: "/#products" },
  {
    label: "Check our WhatsApp Bot",
    url: whatsappUrl("Hi InfyCrest Solutions, I'd like to try your WhatsApp bot."),
  },
  { label: "Check our CRM", url: "" },
];

/** Customization modes offered in the project-request flow. */
export const CUSTOMIZATION_OPTIONS = [
  {
    id: "as-is",
    label: "Use this design as-is",
    message: "use this design as-is",
  },
  {
    id: "minor",
    label: "Minor customization",
    message: "minor customization",
  },
  {
    id: "complete",
    label: "Complete customization",
    message: "complete customization",
  },
] as const;

export type CustomizationId = (typeof CUSTOMIZATION_OPTIONS)[number]["id"];
