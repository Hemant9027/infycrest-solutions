import { ArrowUp, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { IMG, navLinks, site, tel, wa, WHATSAPP_DEFAULT_MSG } from "../data/site";
import { CtaButton, InstagramIcon, Particles, Reveal } from "./ui";
import { useOpenStatus } from "../hooks/useFx";
import { cn } from "../utils/cn";

/* ------------------------------ Final CTA --------------------------- */

export function FinalCTA() {
  return (
    <section id="order" className="relative overflow-hidden bg-maroon-950 py-28 text-ivory-50 md:py-36">
      {/* layered backdrop */}
      <div className="absolute inset-0" aria-hidden>
        <img
          src={IMG.heroSpread}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full scale-105 object-cover opacity-22"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-950/85 via-maroon-950/70 to-maroon-950/95" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_35%,rgba(232,137,47,0.22),transparent_70%)]" />
      </div>
      <Particles count={12} />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.34em] text-gold-300 uppercase">
            <span className="h-px w-8 bg-gold-400/60" />
            Rishi Sweets · Muzaffarnagar
            <span className="h-px w-8 bg-gold-400/60" />
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display text-4xl leading-[1.05] font-semibold text-balance sm:text-6xl md:text-[4.4rem]">
            Good Food Is Just
            <span className="gold-grad-text italic"> Around the Corner.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-ivory-200/80 md:text-lg">
            Visit Rishi Sweets near Prakash Chowk, explore the menu or get in touch for orders and
            enquiries.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3.5">
            <CtaButton href="#menu" variant="gold">Explore Menu</CtaButton>
            <CtaButton href={site.googleMapsUrl} external variant="ghost">
              <MapPin size={15} /> Get Directions
            </CtaButton>
            <CtaButton href={tel} variant="ghost">
              <Phone size={15} /> Call Now
            </CtaButton>
            <CtaButton href={wa(WHATSAPP_DEFAULT_MSG)} external variant="ghost">
              <MessageCircle size={15} /> WhatsApp
            </CtaButton>
          </div>
        </Reveal>
        <Reveal delay={0.32}>
          <p className="mt-9 text-[12px] tracking-wide text-ivory-200/60">
            Open daily {site.hours.open} – {site.hours.close} · {site.addressLines[0]}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------- Footer ---------------------------- */

export function Footer() {
  const isOpen = useOpenStatus();
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-ink-950 text-ivory-200">
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-28 sm:px-8 md:pb-10">
        <div className="grid gap-12 md:grid-cols-12">
          {/* brand */}
          <div className="md:col-span-4">
            <p className="font-display text-3xl font-semibold text-ivory-50">
              Rishi <span className="text-gold-300">Sweets</span>
            </p>
            <p className="mt-1 text-[10px] font-bold tracking-[0.3em] text-ivory-200/50 uppercase">
              {site.tagline}
            </p>
            <p className="mt-5 max-w-xs text-[13.5px] leading-relaxed text-ivory-200/65">
              Sweets, bakery and a family restaurant under one roof near Prakash Chowk — serving
              Muzaffarnagar since {site.established}.
            </p>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-ivory-50/15 px-5 py-2.5 text-[11px] font-bold tracking-[0.16em] uppercase transition-colors hover:border-gold-400 hover:text-gold-300"
            >
              <InstagramIcon size={15} /> {site.instagramHandle}
            </a>
          </div>

          {/* explore */}
          <div className="md:col-span-2">
            <p className="text-[10.5px] font-bold tracking-[0.28em] text-gold-400/80 uppercase">Explore</p>
            <ul className="mt-5 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[13.5px] text-ivory-200/70 transition-colors hover:text-gold-300">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div className="md:col-span-3">
            <p className="text-[10.5px] font-bold tracking-[0.28em] text-gold-400/80 uppercase">Contact</p>
            <address className="mt-5 space-y-3.5 text-[13.5px] leading-relaxed text-ivory-200/70 not-italic">
              <p className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 shrink-0 text-gold-400" />
                <span>{site.addressLines.join(" ")}</span>
              </p>
              <p>
                <a href={tel} className="flex items-center gap-2.5 transition-colors hover:text-gold-300">
                  <Phone size={15} className="shrink-0 text-gold-400" /> {site.phone}
                </a>
              </p>
              <p>
                <a
                  href={wa(WHATSAPP_DEFAULT_MSG)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 transition-colors hover:text-gold-300"
                >
                  <MessageCircle size={15} className="shrink-0 text-gold-400" /> WhatsApp
                </a>
              </p>
              <p>
                <a
                  href={site.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 transition-colors hover:text-gold-300"
                >
                  <Navigation size={15} className="shrink-0 text-gold-400" /> Open in Google Maps
                </a>
              </p>
            </address>
          </div>

          {/* hours */}
          <div className="md:col-span-3">
            <p className="text-[10.5px] font-bold tracking-[0.28em] text-gold-400/80 uppercase">Hours</p>
            <div className="mt-5 rounded-2xl border border-ivory-50/10 p-5">
              <div className="flex items-center justify-between text-[13.5px]">
                <span className="text-ivory-200/70">Mon – Sun</span>
                <span className="font-bold text-ivory-50 tabular-nums">
                  {site.hours.open} – {site.hours.close}
                </span>
              </div>
              <p
                className={cn(
                  "mt-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold tracking-[0.16em] uppercase",
                  isOpen ? "bg-green-500/15 text-green-300" : "bg-maroon-500/25 text-rose-300"
                )}
              >
                <span className={cn("h-1.5 w-1.5 rounded-full", isOpen ? "bg-green-400" : "bg-rose-300")} />
                {isOpen ? "Open now" : "Closed"}
              </p>
            </div>
            <p className="mt-4 text-[12px] leading-relaxed text-ivory-200/50">
              Catering, bulk sweets and party-hall enquiries welcome — capacity listed at{" "}
              {site.cateringCapacity} people.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-ivory-50/10 pt-7 sm:flex-row">
          <p className="text-[11.5px] text-ivory-200/45">
            © {year} {site.name}, Muzaffarnagar. All rights reserved.
          </p>
          <p className="max-w-md text-center text-[10.5px] leading-relaxed text-ivory-200/40 sm:text-right">
            Dish images marked “sample” are placeholders pending the restaurant's own photography.
            Menu, prices and availability are confirmed at the counter.
          </p>
          <a
            href="#home"
            aria-label="Back to top"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-ivory-50/15 transition-colors hover:border-gold-400 hover:text-gold-300"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
