import Image from "next/image";
import { Asterisk, ArrowUp, CircleCheck, Palmtree } from "lucide-react";
import type { HotelDemoConfig } from "@/demos/types";
import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { About } from "./About";
import { Rooms } from "./Rooms";
import { Amenities } from "./Amenities";
import { PoolGardens } from "./PoolGardens";
import { LocationSection } from "./LocationSection";
import { Gallery } from "./Gallery";
import { Faq } from "./Faq";
import { BookingForm, ContactForm } from "./forms";
import { SectionHeading } from "./heading";
import { Reveal } from "./motion";

/* ---------------------------------- Marquee ---------------------------------- */

function Marquee({ items }: { items: string[] }) {
  return (
    <div className="overflow-hidden border-y border-pine-ink/25 bg-pine py-4 text-cream">
      <div className="flex w-max items-center gap-8 whitespace-nowrap motion-safe:animate-marquee">
        {[...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            aria-hidden={i >= items.length}
            className="flex items-center gap-8 text-[12px] font-bold uppercase tracking-[0.28em]"
          >
            {item}
            <Asterisk size={15} className="text-coral" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* --------------------------------- Book direct -------------------------------- */

function BookDirect({ demo }: { demo: HotelDemoConfig }) {
  const { book, rooms } = demo;
  return (
    <section id="book" className="border-t border-sandline bg-shell py-24 md:py-36">
      <div className="mx-auto grid w-full max-w-[1440px] items-start gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:px-14">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading index="08" label="Book direct" title={book.title} intro={book.lead} className="mb-10" />
          </Reveal>
          <Reveal delay={120}>
            <ul className="space-y-3.5">
              {book.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-[15px] font-semibold leading-relaxed text-ink">
                  <CircleCheck size={18} className="mt-0.5 shrink-0 text-pine" />
                  {bullet}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={200}>
            <div className="relative mt-10 h-48 overflow-hidden rounded-[2rem] md:h-60">
              <Image src={book.image.src} alt={book.image.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-pine-ink/45 to-transparent" />
              <span className="absolute bottom-4 left-4 text-[10px] font-bold uppercase tracking-[0.24em] text-cream/90">
                Nassau at dusk — see you soon
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={140} className="lg:col-span-7">
          <BookingForm slug={demo.slug} rooms={rooms.items.map((r) => r.name)} />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------- Contact ---------------------------------- */

function ContactSection({ demo }: { demo: HotelDemoConfig }) {
  const { contact } = demo;
  return (
    <section id="contact" className="bg-pine-ink py-24 text-cream md:py-36">
      <div className="mx-auto grid w-full max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:px-14">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading index="09" label="Contact" title={contact.title} intro={contact.lead} tone="dark" className="mb-10" />
          </Reveal>
          <div className="space-y-3">
            {contact.blocks.map((block, i) => (
              <Reveal key={block.label} delay={i * 90}>
                <div className="rounded-2xl border border-cream/15 p-6 transition-colors hover:border-cream/30">
                  <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-cream/50">{block.label}</p>
                  {block.lines.map((line) => (
                    <p key={line} className="mt-1.5 font-display text-lg leading-snug font-medium first:mt-2.5">
                      {line}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={140} className="lg:col-span-7">
          <ContactForm slug={demo.slug} />
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------- Footer ----------------------------------- */

function Footer({ demo }: { demo: HotelDemoConfig }) {
  return (
    <footer className="border-t border-cream/10 bg-pine-ink pt-14 pb-10 text-cream">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <div className="flex flex-wrap items-start justify-between gap-10">
          <div>
            <span className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-full bg-coral text-cream">
                <Palmtree size={17} />
              </span>
              <span className="font-display text-[1.35rem] italic">{demo.shortName}</span>
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/55">
              {demo.address.street}, {demo.address.city}, {demo.address.region}, {demo.address.country}
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-7 gap-y-3 pt-1">
            {demo.nav.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="u-link text-[11px] font-bold uppercase tracking-[0.2em] text-cream/65 transition-colors hover:text-cream"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#top"
            className="group inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-cream/65 transition-colors hover:text-cream"
          >
            Back to top
            <span className="grid size-9 place-items-center rounded-full border border-cream/20 transition-transform duration-300 group-hover:-translate-y-1">
              <ArrowUp size={15} />
            </span>
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-cream/10 pt-6 text-[10px] font-semibold uppercase tracking-[0.24em] text-cream/40">
          <p>{demo.footer.note}</p>
          <p>Demo · InfyCrest Solutions</p>
        </div>
      </div>
    </footer>
  );
}

/* ---------------------------------- JSON-LD ----------------------------------- */

function JsonLd({ demo }: { demo: HotelDemoConfig }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: demo.name,
    description: demo.metaDescription,
    address: {
      "@type": "PostalAddress",
      streetAddress: demo.address.street,
      addressLocality: demo.address.city,
      addressRegion: demo.address.region,
      addressCountry: "BS",
    },
    amenityFeature: [
      "Swimming Pool",
      "Free WiFi",
      "Free Parking",
      "Airport Shuttle",
      "Tropical Gardens",
      "24-Hour Front Desk",
      "24-Hour Security",
    ].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/* --------------------------------- Composition -------------------------------- */

export function HotelDemo({ demo }: { demo: HotelDemoConfig }) {
  return (
    <div className="site-shell">
      <Nav name={demo.name} shortName={demo.shortName} links={demo.nav} ctaLabel="Book direct" ctaId="book" />
      <main>
        <Hero demo={demo} />
        <Marquee items={demo.marquee} />
        <About demo={demo} />
        <Rooms demo={demo} />
        <Amenities demo={demo} />
        <PoolGardens demo={demo} />
        <LocationSection demo={demo} />
        <Gallery title={demo.gallery.title} intro={demo.gallery.intro} items={demo.gallery.items} />
        <Faq title={demo.faq.title} intro={demo.faq.intro} items={demo.faq.items} />
        <BookDirect demo={demo} />
        <ContactSection demo={demo} />
      </main>
      <Footer demo={demo} />
      <JsonLd demo={demo} />
    </div>
  );
}
