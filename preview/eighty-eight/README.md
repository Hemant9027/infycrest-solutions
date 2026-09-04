# Eighty Eight — Chinese Restaurant, Moka · Mauritius

A premium, mobile-first one-page restaurant website built with **Next.js 14 · TypeScript · Tailwind CSS · Framer Motion · Lucide React**.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
```

## Everything lives in `data/`

All restaurant-specific content (and nothing else) is centralized in three
files so the owner can update the site without touching the components:

| File              | Contents                                                            |
| ----------------- | ------------------------------------------------------------------- |
| `data/restaurant.ts` | Name, phone, location, rating, price, promotion, nav, **email / reservation / menu / social placeholders** |
| `data/menu.ts`       | Menu categories + items, and the featured dish grid                  |
| `data/gallery.ts`    | Gallery images, labels and sizing                                    |

## Editable placeholders (no verified data yet)

These are intentionally left in `data/restaurant.ts` — **replace them, don't
invent values**:

- `openingHours` — hours not supplied
- `email` — not supplied (set to a plausible default, remove if unused)
- `reservationUrl` — `null`; connect a real booking system here when available
- `menuUrl` — `null`; connect a full-menu PDF / page here when available
- `reviewsUrl` — `null`; connect the Google reviews URL here
- `instagram` / `facebook` — `null` (social icons auto-hidden until set)
- `address` / `mapQuery` — area-level, driven by a name search (no invented coords)

## Promotion / offer banner

Open `data/restaurant.ts` → the `promotion` object. Change the title,
description, CTA and image at any time, or set `isActive: false` to hide the
whole section. No expiry is claimed until one is supplied.

## Reservation form

"Reserve a table" opens a request modal. There is **no booking backend
connected**, so the form is explicitly labelled a *reservation request* and
states that confirmation is by phone (`+230 468 8288`). Wire
`reservationUrl` to a real system to make it a live booking.

## Component structure

```
app/
  layout.tsx        fonts, metadata, JSON-LD Restaurant schema
  page.tsx
  globals.css
components/
  Navbar.tsx        sticky, transparent→blur, active-section highlight, mobile drawer
  Hero.tsx          cinematic full-screen, staggered micro-animations, scroll cue
  Intro.tsx         editorial intro + rating/review/price stats
  SignatureDishes.tsx  asymmetric editorial grid
  FeaturedDish.tsx  oversized "Crispy Chicken" feature
  Experience.tsx    all-you-can-eat · cocktails · live music panels
  Menu.tsx          category tabs (no reload)
  Promotion.tsx     editable offer banner
  Gallery.tsx       masonry grid + accessible lightbox (keyboard + swipe)
  Reviews.tsx       honest 3.4/5 rating, placeholder review cards
  Location.tsx      map + directions + call
  ReservationCTA.tsx  final conversion section
  ReservationProvider.tsx  reservation modal + floating call button
  Footer.tsx
  MobileActionBar.tsx  Call · Menu · Reserve (mobile)
  Button.tsx / SectionHeading.tsx / Reveal.tsx
data/  restaurant.ts · menu.ts · gallery.ts
public/images/
```

## Accessibility & performance

- Semantic HTML, heading hierarchy, alt text, `aria-label` on icon buttons
- `prefers-reduced-motion` disables large animation/parallax
- Lazy-loaded images, self-hosted fonts via `next/font`, CSS-first animation
- Static prerendered page (~146 kB first-load JS), JSON-LD structured data
