"use client";

import React, {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type FormEvent,
  type CSSProperties,
} from "react";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock,
  MapPin,
  Menu as MenuIcon,
  Phone,
  UtensilsCrossed,
  X,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                TYPES & DATA                                */
/* -------------------------------------------------------------------------- */

export type CustomerHero = {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryCta?: string;
};
export type CustomerAbout = {
  title?: string;
  body?: string;
  image?: string;
};
export type CustomerStat = {
  value: string;
  label: string;
};
export type CustomerService = {
  title: string;
  description: string;
  price?: string;
  tag?: string;
  image?: string | null;
};
export type CustomerGalleryItem = {
  image: string;
  caption?: string;
};
export type CustomerContact = {
  address?: string;
  hours?: string;
  phone?: string;
  email?: string;
};
export type CustomerTheme = {
  accent?: string;
};
export type CustomerCTA = {
  label?: string;
  description?: string;
};
export type NewCustomer = {
  id?: string | number;
  slug?: string;
  businessName: string;
  hero: CustomerHero;
  about: CustomerAbout;
  CTA: CustomerCTA;
  theme: CustomerTheme;
  contact: CustomerContact;
  heroImages?: string[];
  stats?: CustomerStat[];
  services?: CustomerService[];
  gallery?: CustomerGalleryItem[];
};

export const restImg = (num: number) => `/restaurant/${num}.jpg`;

export const demoAureliaCustomer: NewCustomer = {
  slug: "aurelia-dining",
  businessName: "Aurelia",
  theme: { accent: "#d8ad69" },
  CTA: { label: "Reserve a table" },
  hero: {
    eyebrow: "Food with a point of view",
    title: "A table for the curious.",
    description:
      "A modern dining room built around fire, seasonality, and the pleasure of taking your time.",
    primaryCta: "Reserve a table",
  },
  heroImages: [restImg(1), restImg(5), restImg(12), restImg(18)],
  about: {
    title: "Dinner, drinks and a little magic.",
    body: "We believe that the best meals are the ones that linger. Our kitchen works closely with local foragers, farmers, and fishermen to bring the season's absolute best to your plate. Step inside, let us pour you a glass, and leave the rest to us.",
    image: restImg(4),
  },
  stats: [
    { value: "0km", label: "Local Sourcing" },
    { value: "12", label: "Seasonal Dishes" },
    { value: "150+", label: "Wine Pairings" },
  ],
  services: [
    {
      title: "Charred coast vegetables",
      description: "Whipped ricotta, fermented chili honey, toasted pine nuts.",
      price: "24",
    },
    {
      title: "Black garlic risotto",
      description:
        "Acquerello rice, aged parmesan, wild mushrooms, truffle oil.",
      price: "32",
    },
    {
      title: "Ember-roasted sea bass",
      description: "Saffron emulsion, braised fennel, charred lemon.",
      price: "45",
    },
    {
      title: "Dark chocolate torte",
      description: "Smoked sea salt, pistachio crumb, olive oil gelato.",
      price: "18",
    },
  ],
  gallery: [
    { image: restImg(7) },
    { image: restImg(9) },
    { image: restImg(14) },
    { image: restImg(21) },
    { image: restImg(25) },
    { image: restImg(28) },
  ],
  contact: {
    address: "123 Culinary Lane, New York, NY 10012",
    hours: "Tuesday — Sunday, 5:00 PM — 11:00 PM",
    phone: "+1 (555) 123-4567",
    email: "hello@aurelia.example",
  },
};

/* -------------------------------------------------------------------------- */
/*                                UTILS & HOOKS                               */
/* -------------------------------------------------------------------------- */

export const cx = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

export const text = (value: unknown, fallback = "") =>
  typeof value === "string" && value ? value : fallback;

export function useInView<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.1,
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" },
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}

/* -------------------------------------------------------------------------- */
/*                                SHARED ATOMS                                */
/* -------------------------------------------------------------------------- */

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}) {
  const [ref, inView] = useInView();
  const translate =
    direction === "up"
      ? "translate-y-10"
      : direction === "left"
        ? "-translate-x-10"
        : "translate-x-10";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cx(
        "transition-all duration-1000 ease-out",
        inView ? "opacity-100 transform-none" : `opacity-0 ${translate}`,
        className,
      )}
    >
      {children}
    </div>
  );
}

export function SectionHeader({
  index,
  title,
  subtitle,
  centered = false,
}: {
  index: string;
  title: string;
  subtitle: string;
  centered?: boolean;
}) {
  return (
    <div className={cx("mb-12 sm:mb-16", centered && "text-center")}>
      <Reveal>
        <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--brand-accent)] mb-4">
          {index} · {subtitle}
        </p>
      </Reveal>
      <Reveal delay={150}>
        <h2 className="font-serif text-5xl sm:text-6xl font-light text-[#24221e] leading-tight">
          {title}
        </h2>
      </Reveal>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              SECTION COMPONENTS                            */
/* -------------------------------------------------------------------------- */

const NAV_LINKS = [
  { href: "#story", label: "Story" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
];

export function Navbar({
  customer,
  scrolled,
}: {
  customer: NewCustomer;
  scrolled: boolean;
}) {
  const [open, setOpen] = useState(false);
  const brandName = text(customer.businessName, "Aurelia");

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cx(
          "fixed inset-x-0 top-0 z-50 transition-all duration-700",
          scrolled
            ? "bg-[#f4f0e8]/95 backdrop-blur-md border-b border-[#24221e]/10 py-3 shadow-sm"
            : "bg-transparent py-6 border-b border-transparent",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
          {/* Left Links (Desktop) */}
          <nav
            className={cx(
              "hidden flex-1 gap-8 text-[11px] uppercase tracking-[0.25em] md:flex transition-colors duration-500",
              scrolled ? "text-[#24221e]" : "text-white",
            )}
          >
            <a
              href="#story"
              className="hover:text-[var(--brand-accent)] transition-colors"
            >
              Story
            </a>
            <a
              href="#menu"
              className="hover:text-[var(--brand-accent)] transition-colors"
            >
              Menu
            </a>
          </nav>

          {/* Centered Logo (Classic Editorial Restaurant Style) */}
          <a
            href="#top"
            className={cx(
              "font-serif text-3xl tracking-[0.18em] uppercase text-center flex-1 md:flex-none transition-colors duration-500",
              scrolled ? "text-[#24221e]" : "text-white drop-shadow-md",
            )}
          >
            {brandName}
          </a>

          {/* Right Links & CTA (Desktop) */}
          <div className="hidden flex-1 justify-end items-center gap-8 md:flex">
            <nav
              className={cx(
                "flex gap-8 text-[11px] uppercase tracking-[0.25em] transition-colors duration-500",
                scrolled ? "text-[#24221e]" : "text-white",
              )}
            >
              <a
                href="#gallery"
                className="hover:text-[var(--brand-accent)] transition-colors"
              >
                Gallery
              </a>
            </nav>
            <a
              href="#reserve"
              className={cx(
                "px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 border",
                scrolled
                  ? "border-[#24221e] text-[#24221e] hover:bg-[#24221e] hover:text-[#f4f0e8]"
                  : "border-white text-white hover:bg-white hover:text-[#171916]",
              )}
            >
              {text(customer.CTA?.label, "Reserve")}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className={cx(
              "md:hidden transition-colors duration-500",
              scrolled || open ? "text-[#24221e]" : "text-white",
            )}
          >
            {open ? <X className="size-6" /> : <MenuIcon className="size-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cx(
          "fixed inset-0 z-40 flex flex-col justify-center items-center bg-[#f4f0e8] transition-all duration-500 ease-in-out md:hidden",
          open
            ? "pointer-events-auto opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-full",
        )}
      >
        <nav className="flex flex-col items-center gap-8 text-lg font-serif uppercase tracking-[0.2em] text-[#24221e]">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${150 + i * 100}ms` : "0ms" }}
              className={cx(
                "transition-all duration-700 ease-out hover:text-[var(--brand-accent)]",
                open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
              )}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reserve"
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? "450ms" : "0ms" }}
            className={cx(
              "mt-8 text-[var(--brand-accent)] font-bold transition-all duration-700 ease-out border-b border-[var(--brand-accent)] pb-1",
              open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
            )}
          >
            {text(customer.CTA?.label, "Reserve a table")}
          </a>
        </nav>
      </div>
    </>
  );
}

export function Hero({ customer }: { customer: NewCustomer }) {
  const slides =
    customer.heroImages && customer.heroImages.length >= 3
      ? customer.heroImages.slice(0, 3)
      : [restImg(1), restImg(5), restImg(12)];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Dynamic Title Splitting for aesthetic wrap
  const fullTitle = text(customer.hero?.title, "A table for the curious.");
  const words = fullTitle.split(" ");
  const firstPart =
    words.length > 2
      ? words.slice(0, -2).join(" ")
      : words.slice(0, -1).join(" ");
  const lastPart =
    words.length > 2 ? words.slice(-2).join(" ") : words.slice(-1).join(" ");

  return (
    <section
      id="top"
      className="relative flex h-[100svh] min-h-[720px] items-center justify-center overflow-hidden bg-[#24221e]"
    >
      {/* Background Slideshow */}
      {slides.map((img, idx) => (
        <div
          key={`${img}-${idx}`}
          className={cx(
            "absolute inset-0 transition-opacity ease-in-out duration-[2000ms]",
            idx === current ? "opacity-100" : "opacity-0",
          )}
        >
          <div className="absolute inset-0 bg-[#171916]/40 z-10 mix-blend-multiply" />
          <Image
            src={img}
            alt="Dining Room Atmosphere"
            fill
            priority={idx === 0}
            unoptimized
            sizes="100vw"
            className="object-cover animate-subtlePan"
          />
        </div>
      ))}

      {/* Centered Frosted Box Content */}
      <div className="relative z-20 mx-auto max-w-4xl px-6 text-center mt-20">
        <Reveal direction="up" delay={100}>
          <div className="border border-white/20 bg-[#171916]/30 backdrop-blur-md p-10 sm:p-20 shadow-2xl">
            <UtensilsCrossed className="size-6 text-[var(--brand-accent)] mx-auto mb-8 opacity-80" />

            <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-[var(--brand-accent)] drop-shadow-md">
              {text(customer.hero?.eyebrow, "Food with a point of view")}
            </p>

            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-light leading-[1.1] text-[#f4f0e8] mb-8">
              {firstPart} <br />
              <em className="italic text-[var(--brand-accent)] font-serif">
                {lastPart}
              </em>
            </h1>

            <p className="mx-auto max-w-xl text-sm sm:text-base text-[#f4f0e8]/80 font-sans tracking-wide leading-relaxed mb-10">
              {text(
                customer.hero?.description,
                "A modern dining room built around fire, seasonality, and the pleasure of taking your time.",
              )}
            </p>

            <a
              href="#reserve"
              className="inline-flex items-center gap-3 bg-[var(--brand-accent)] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#171916] hover:bg-white hover:text-[#171916] transition-colors duration-300"
            >
              {text(customer.hero?.primaryCta, "Reserve a table")}{" "}
              <ArrowRight className="size-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Story({ customer }: { customer: NewCustomer }) {
  const stats =
    customer.stats && customer.stats.length > 0
      ? customer.stats.slice(0, 3)
      : [
          { value: "0km", label: "Local Sourcing" },
          { value: "12", label: "Seasonal Dishes" },
          { value: "150+", label: "Wine Pairings" },
        ];

  return (
    <section
      id="story"
      className="bg-[#f4f0e8] px-6 py-28 lg:py-40 border-b border-[#24221e]/5"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content (Left Side) */}
          <div className="order-2 lg:order-1">
            <SectionHeader
              index="01"
              subtitle="The Philosophy"
              title={text(
                customer.about?.title,
                "Dinner, drinks and a little magic.",
              )}
            />

            <Reveal direction="up" delay={250}>
              <p className="text-lg leading-relaxed text-[#24221e]/70 font-sans font-light mb-12">
                {text(
                  customer.about?.body,
                  "We believe that the best meals are the ones that linger. Our kitchen works closely with local foragers, farmers, and fishermen to bring the season's absolute best to your plate. Step inside, let us pour you a glass, and leave the rest to us.",
                )}
              </p>
            </Reveal>

            <div className="grid grid-cols-3 gap-6 border-t border-[#24221e]/10 pt-10">
              {stats.map((stat, idx) => (
                <Reveal key={idx} direction="up" delay={idx * 150 + 300}>
                  <p className="font-serif text-3xl sm:text-4xl text-[#24221e] mb-2">
                    {stat.value}
                  </p>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[var(--brand-accent)]">
                    {stat.label}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Editorial Offset Image (Right Side) */}
          <div className="order-1 lg:order-2 relative h-[500px] lg:h-[700px] w-full">
            <Reveal
              direction="left"
              delay={200}
              className="h-full w-full relative"
            >
              {/* Decorative background block */}
              <div className="absolute inset-0 bg-[var(--brand-accent)]/10 translate-x-6 translate-y-6"></div>
              <Image
                unoptimized
                src={text(customer.about?.image, restImg(4))}
                alt="Chef plating food"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover absolute inset-0 shadow-xl"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

const FALLBACK_MENU: CustomerService[] = [
  {
    title: "Charred coast vegetables",
    description: "Whipped ricotta, fermented chili honey, toasted pine nuts.",
    price: "24",
  },
  {
    title: "Black garlic risotto",
    description: "Acquerello rice, aged parmesan, wild mushrooms, truffle oil.",
    price: "32",
  },
  {
    title: "Ember-roasted sea bass",
    description: "Saffron emulsion, braised fennel, charred lemon.",
    price: "45",
  },
  {
    title: "Dark chocolate torte",
    description: "Smoked sea salt, pistachio crumb, olive oil gelato.",
    price: "18",
  },
];

export function DiningMenu({ customer }: { customer: NewCustomer }) {
  const items =
    customer.services && customer.services.length > 0
      ? customer.services
      : FALLBACK_MENU;

  return (
    <section
      id="menu"
      className="bg-[#24221e] px-6 py-28 lg:py-40 text-[#f4f0e8]"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          index="02"
          subtitle="Tasting Menu"
          title="Chef's Selection"
          centered={true}
        />

        {/* Minimalist Fine-Dining List Layout */}
        <div className="space-y-8 sm:space-y-12">
          {items.map((item, index) => (
            <Reveal key={index} direction="up" delay={index * 150}>
              <article className="border-b border-[#f4f0e8]/10 pb-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 group">
                <div className="max-w-2xl">
                  <h3 className="font-serif text-2xl font-light tracking-wide transition-colors duration-300 group-hover:text-[var(--brand-accent)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#f4f0e8]/60 leading-relaxed font-sans font-light">
                    {item.description}
                  </p>
                </div>
                {item.price && (
                  <div className="font-serif text-xl text-[var(--brand-accent)] shrink-0 pt-2 sm:pt-0">
                    ${item.price}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal direction="up" delay={600}>
          <div className="mt-16 text-center text-xs text-[#f4f0e8]/40 uppercase tracking-[0.2em]">
            * Menu changes daily based on seasonal availability.
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Gallery({ customer }: { customer: NewCustomer }) {
  // A fine dining restaurant gallery needs structure and precision.
  // We use a tight grid to reflect culinary perfection.
  const images =
    customer.gallery && customer.gallery.length >= 6
      ? customer.gallery.map((g) => g.image)
      : [
          restImg(7),
          restImg(9),
          restImg(14),
          restImg(21),
          restImg(25),
          restImg(28),
        ];

  return (
    <section id="gallery" className="bg-[#f4f0e8] py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 mb-16 text-center">
        <SectionHeader
          index="03"
          subtitle="Visuals"
          title="The Experience"
          centered={true}
        />
      </div>

      {/* Precision 3-Column Grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
          {images.slice(0, 6).map((img, idx) => (
            <Reveal key={idx} delay={(idx % 3) * 150} direction="up">
              <div className="relative aspect-square overflow-hidden group bg-[#24221e]/5">
                <Image
                  unoptimized
                  src={img}
                  alt={`Dining Experience ${idx + 1}`}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#24221e]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Reservation({ customer }: { customer: NewCustomer }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [summary, setSummary] = useState<{ name: string } | null>(null);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "");

    setStatus("sending");

    // Simulate API network request
    setTimeout(() => {
      setSummary({ name: name.trim().split(" ")[0] || "Guest" });
      setStatus("sent");
      form.reset();
    }, 1500);
  }

  return (
    <section
      id="reserve"
      className="bg-[#24221e] px-6 py-28 lg:py-40 text-[#f4f0e8]"
    >
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-20 items-center">
        {/* Contact Info (Left Side) */}
        <div>
          <Reveal direction="up">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--brand-accent)] mb-6">
              04 · Reservations
            </p>
            <h2 className="font-serif text-5xl sm:text-6xl font-light leading-tight mb-12">
              Save a seat <br />
              <em className="italic text-[#f4f0e8]/50">for tonight.</em>
            </h2>
          </Reveal>

          <Reveal direction="up" delay={200}>
            <div className="space-y-10 font-sans font-light text-sm text-[#f4f0e8]/70 border-l border-[var(--brand-accent)]/30 pl-8">
              <div>
                <p className="text-[#f4f0e8] font-semibold uppercase tracking-[0.15em] text-[10px] mb-2 flex items-center gap-2">
                  <MapPin className="size-3 text-[var(--brand-accent)]" />{" "}
                  Address
                </p>
                <p className="text-base">
                  {text(customer.contact?.address, "123 Culinary Lane, NY")}
                </p>
              </div>
              <div>
                <p className="text-[#f4f0e8] font-semibold uppercase tracking-[0.15em] text-[10px] mb-2 flex items-center gap-2">
                  <Clock className="size-3 text-[var(--brand-accent)]" />{" "}
                  Service Hours
                </p>
                <p className="text-base">
                  {text(customer.contact?.hours, "Tue — Sun, 5pm - 11pm")}
                </p>
              </div>
              <div>
                <p className="text-[#f4f0e8] font-semibold uppercase tracking-[0.15em] text-[10px] mb-2 flex items-center gap-2">
                  <Phone className="size-3 text-[var(--brand-accent)]" />{" "}
                  Contact
                </p>
                <a
                  href={`tel:${text(customer.contact?.phone, "").replace(/\s+/g, "")}`}
                  className="text-base hover:text-[var(--brand-accent)] transition-colors block mb-1"
                >
                  {text(customer.contact?.phone, "+1 (555) 123-4567")}
                </a>
                {customer.contact?.email && (
                  <a
                    href={`mailto:${customer.contact.email}`}
                    className="text-base hover:text-[var(--brand-accent)] transition-colors block"
                  >
                    {customer.contact.email}
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Reservation Form (Right Side) */}
        <Reveal direction="left" delay={300}>
          <div className="bg-[#f4f0e8] p-10 sm:p-14 text-[#24221e] shadow-2xl relative overflow-hidden">
            {/* Subtle decorative corner accent */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-[var(--brand-accent)]/10 rounded-bl-full" />

            {status === "sent" && summary ? (
              <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center animate-in fade-in duration-500">
                <div className="grid size-16 place-items-center rounded-full border border-[var(--brand-accent)] bg-[var(--brand-accent)]/10 mb-6">
                  <Check className="size-6 text-[var(--brand-accent)]" />
                </div>
                <h3 className="font-serif text-3xl mb-4">
                  Request Received, {summary.name}
                </h3>
                <p className="text-sm text-[#24221e]/60 max-w-xs leading-relaxed">
                  Our Maitre D' will reach out shortly to confirm your table
                  details.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-[10px] uppercase tracking-[0.2em] text-[var(--brand-accent)] hover:text-[#24221e] font-bold transition-colors"
                >
                  Make another booking
                </button>
              </div>
            ) : (
              <form
                onSubmit={submit}
                className="grid gap-8 sm:grid-cols-2 relative z-10"
              >
                <div className="sm:col-span-2 mb-2">
                  <h3 className="font-serif text-2xl font-light">
                    Book your experience
                  </h3>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-[0.2em] text-[#24221e]/50 font-bold">
                    Full Name
                  </label>
                  <input
                    required
                    name="name"
                    className="w-full border-b border-[#24221e]/20 bg-transparent px-0 py-2 text-sm outline-none focus:border-[var(--brand-accent)] transition-colors text-[#24221e]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-[0.2em] text-[#24221e]/50 font-bold">
                    Email
                  </label>
                  <input
                    required
                    name="email"
                    type="email"
                    className="w-full border-b border-[#24221e]/20 bg-transparent px-0 py-2 text-sm outline-none focus:border-[var(--brand-accent)] transition-colors text-[#24221e]"
                  />
                </div>

                <div className="space-y-2 relative">
                  <label className="text-[9px] uppercase tracking-[0.2em] text-[#24221e]/50 font-bold block mb-1">
                    Date
                  </label>
                  <input
                    required
                    name="date"
                    type="date"
                    className="w-full border-b border-[#24221e]/20 bg-transparent px-0 py-2 text-sm outline-none focus:border-[var(--brand-accent)] transition-colors text-[#24221e]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-[0.2em] text-[#24221e]/50 font-bold">
                    Party Size
                  </label>
                  <select
                    required
                    name="guests"
                    className="w-full border-b border-[#24221e]/20 bg-transparent px-0 py-2 text-sm outline-none focus:border-[var(--brand-accent)] transition-colors text-[#24221e] appearance-none"
                  >
                    <option value="" className="bg-[#f4f0e8] text-[#24221e]/50">
                      Select...
                    </option>
                    <option value="1" className="bg-[#f4f0e8]">
                      1 Guest
                    </option>
                    <option value="2" className="bg-[#f4f0e8]">
                      2 Guests
                    </option>
                    <option value="3" className="bg-[#f4f0e8]">
                      3 Guests
                    </option>
                    <option value="4" className="bg-[#f4f0e8]">
                      4 Guests
                    </option>
                    <option value="5+" className="bg-[#f4f0e8]">
                      5+ (Private Dining)
                    </option>
                  </select>
                </div>

                <div className="sm:col-span-2 space-y-2">
                  <label className="text-[9px] uppercase tracking-[0.2em] text-[#24221e]/50 font-bold">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows={2}
                    placeholder="Dietary notes or special occasions..."
                    className="w-full resize-none border-b border-[#24221e]/20 bg-transparent px-0 py-2 text-sm outline-none focus:border-[var(--brand-accent)] transition-colors placeholder:text-[#24221e]/30 text-[#24221e]"
                  />
                </div>

                <button
                  disabled={status === "sending"}
                  className="mt-6 sm:col-span-2 flex justify-center items-center gap-3 bg-[#24221e] px-6 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f4f0e8] hover:bg-[var(--brand-accent)] hover:text-[#24221e] transition-colors duration-300 disabled:opacity-50"
                >
                  {status === "sending" ? "Processing..." : "Request Table"}{" "}
                  <ArrowUpRight className="size-4" />
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer({ customer }: { customer: NewCustomer }) {
  const brandName = text(customer.businessName, "Aurelia");

  return (
    <footer className="bg-[#171916] px-6 py-16 lg:px-12">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left text-[#f4f0e8]">
        <span className="font-serif text-3xl tracking-[0.15em] uppercase">
          {brandName}
        </span>
        <nav className="flex gap-8 text-[10px] uppercase tracking-[0.2em] text-white/50">
          <a
            href="#story"
            className="hover:text-[var(--brand-accent)] transition-colors"
          >
            Story
          </a>
          <a
            href="#menu"
            className="hover:text-[var(--brand-accent)] transition-colors"
          >
            Menu
          </a>
          <a
            href="#reserve"
            className="hover:text-[var(--brand-accent)] transition-colors"
          >
            Reserve
          </a>
        </nav>
        <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">
          © {new Date().getFullYear()} {brandName} · Designed by InfyCrest
        </span>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------------------------- */
/*                               MAIN TEMPLATE                                */
/* -------------------------------------------------------------------------- */

export default function PremiumRestaurantTemplate({
  customer = demoAureliaCustomer,
}: {
  customer?: NewCustomer;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const style = {
    "--brand-accent": text(customer.theme?.accent, "#d8ad69"),
  } as CSSProperties;

  return (
    <main
      style={style}
      className="bg-[#f4f0e8] font-sans text-[#24221e] selection:bg-[var(--brand-accent)] selection:text-white"
    >
      {/* 
        Custom Styles for subtle continuous panning animation in the hero 
        Using dangerouslySetInnerHTML so it stays perfectly encapsulated in this single file.
      */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes subtlePan {
          0% { transform: scale(1) translate(0, 0); }
          50% { transform: scale(1.06) translate(-1%, -1%); }
          100% { transform: scale(1) translate(0, 0); }
        }
        .animate-subtlePan {
          animation: subtlePan 30s ease-in-out infinite;
        }
      `,
        }}
      />

      <Navbar customer={customer} scrolled={scrolled} />
      <Hero customer={customer} />
      <Story customer={customer} />
      <DiningMenu customer={customer} />
      <Gallery customer={customer} />
      <Reservation customer={customer} />
      <Footer customer={customer} />
    </main>
  );
}

export const RestaurantTemplate = PremiumRestaurantTemplate;
