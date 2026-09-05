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
  Bike,
  Check,
  Clock,
  Flame,
  MapPin,
  Menu as MenuIcon,
  Package,
  Phone,
  Plus,
  ShoppingBag,
  Zap,
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
  id?: number;
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

export const ckImg = (num: number) => `/Cloud-Kitchen/${num}.jpg`;

export const demoDashBiteCustomer: NewCustomer = {
  slug: "dashbite-kitchen",
  businessName: "DashBite",
  theme: { accent: "#fa4b00" },
  CTA: { label: "Order Now" },
  hero: {
    eyebrow: "100% Digital · 100% Delicious",
    title: "CRAVE IT. CLICK IT. DEVOUR IT.",
    description:
      "Chef-crafted meals prepared in our state-of-the-art cloud kitchen and delivered lightning-fast to your door.",
    primaryCta: "Start Your Order",
  },
  heroImages: [ckImg(1), ckImg(4), ckImg(8)],
  about: {
    title: "No tables. Just incredible food.",
    body: "We stripped away the dining room to focus on what matters most: the food. DashBite is a delivery-first kitchen engineered for flavor and speed. From the wok to your door in minutes, ensuring every bite is as hot and fresh as if you were sitting at the chef's table.",
    image: ckImg(12),
  },
  stats: [
    { value: "30m", label: "Avg Delivery Time" },
    { value: "4.9★", label: "Customer Rating" },
    { value: "100%", label: "Fresh Ingredients" },
  ],
  services: [
    {
      title: "Spicy Honey Butter Chicken",
      description:
        "Crispy fried chicken tossed in our signature chili honey butter, served with house pickles.",
      price: "14",
      tag: "Bestseller",
      image: ckImg(3),
    },
    {
      title: "Truffle Smashburger",
      description:
        "Double wagyu patties, truffle aioli, caramelized onions, melted provolone on a brioche bun.",
      price: "16",
      tag: "Chef's Pick",
      image: ckImg(5),
    },
    {
      title: "Fire-Roasted Veggie Bowl",
      description:
        "Quinoa, charred broccoli, sweet potato, avocado, topped with tahini drizzle.",
      price: "12",
      tag: "Vegan",
      image: ckImg(9),
    },
    {
      title: "Loaded Kimchi Fries",
      description:
        "Crispy crinkle cuts loaded with spicy kimchi, bulgogi beef, scallions, and spicy mayo.",
      price: "10",
      tag: "Side",
      image: ckImg(15),
    },
  ],
  gallery: [
    { image: ckImg(18) },
    { image: ckImg(21) },
    { image: ckImg(24) },
    { image: ckImg(25) },
    { image: ckImg(27) },
    { image: ckImg(28) },
  ],
  contact: {
    address: "Ghost Kitchen Hub, Sector 4, Tech District",
    hours: "Everyday, 11:00 AM — 2:00 AM",
    phone: "+1 (555) 999-FAST",
    email: "hungry@dashbite.example",
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
  direction?: "up" | "left" | "right" | "scale";
}) {
  const [ref, inView] = useInView();

  let transform = "translate-y-8";
  if (direction === "left") transform = "-translate-x-8";
  if (direction === "right") transform = "translate-x-8";
  if (direction === "scale") transform = "scale-95";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cx(
        "transition-all duration-700 ease-out",
        inView ? "opacity-100 transform-none" : `opacity-0 ${transform}`,
        className,
      )}
    >
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              SECTION COMPONENTS                            */
/* -------------------------------------------------------------------------- */

const NAV_LINKS = [
  { href: "#how-it-works", label: "How It Works" },
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
  const brandName = text(customer.businessName, "DashBite");

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
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-black/5 py-4 shadow-sm"
            : "bg-transparent py-6",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Logo (App-style Left Aligned) */}
          <a
            href="#top"
            className={cx(
              "font-sans font-black text-2xl tracking-tighter uppercase flex items-center gap-2",
              scrolled ? "text-[#111111]" : "text-white drop-shadow-md",
            )}
          >
            <Zap className="size-6 text-[var(--brand-accent)] fill-[var(--brand-accent)]" />
            {brandName}
          </a>

          {/* Center Links (Desktop) */}
          <nav
            className={cx(
              "hidden gap-8 text-sm font-bold uppercase tracking-widest md:flex transition-colors duration-300",
              scrolled ? "text-[#111111]" : "text-white",
            )}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[var(--brand-accent)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right CTA (Desktop) */}
          <div className="hidden md:block">
            <a
              href="#order"
              className={cx(
                "flex items-center gap-2 px-6 py-3 text-xs font-black uppercase tracking-widest rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg",
                "bg-[var(--brand-accent)] text-white hover:bg-[#111111]",
              )}
            >
              <ShoppingBag className="size-4" />
              {text(customer.CTA?.label, "Order Now")}
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className={cx(
              "md:hidden p-2 rounded-full transition-colors duration-300",
              scrolled || open
                ? "bg-black/5 text-[#111111]"
                : "bg-white/10 text-white backdrop-blur-sm",
            )}
          >
            {open ? <X className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cx(
          "fixed inset-0 z-40 flex flex-col justify-center items-center bg-white transition-all duration-300 ease-in-out md:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        <nav className="flex flex-col items-center gap-8 text-2xl font-sans font-black uppercase tracking-tighter text-[#111111]">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${100 + i * 50}ms` : "0ms" }}
              className={cx(
                "transition-all duration-500 ease-out hover:text-[var(--brand-accent)]",
                open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
              )}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#order"
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? "300ms" : "0ms" }}
            className={cx(
              "mt-6 bg-[var(--brand-accent)] text-white px-10 py-4 rounded-full text-base tracking-widest shadow-xl flex items-center gap-2 transition-all duration-500 ease-out",
              open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
            )}
          >
            <ShoppingBag className="size-5" />
            {text(customer.CTA?.label, "Order Now")}
          </a>
        </nav>
      </div>
    </>
  );
}

export function Hero({ customer }: { customer: NewCustomer }) {
  const images =
    customer.heroImages && customer.heroImages.length > 0
      ? customer.heroImages
      : [ckImg(1), ckImg(4)];

  return (
    <section
      id="top"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#111111]"
    >
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src={images[0]}
          alt="Cloud Kitchen Food"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/80 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <Reveal direction="up" delay={100}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--brand-accent)]/20 border border-[var(--brand-accent)]/50 text-[var(--brand-accent)] text-[10px] font-black uppercase tracking-widest mb-8">
              <Zap className="size-3 fill-current" />
              {text(customer.hero?.eyebrow, "100% Digital · 100% Delicious")}
            </div>
          </Reveal>

          <Reveal direction="up" delay={200}>
            <h1 className="font-sans font-black text-6xl sm:text-7xl lg:text-[5.5rem] tracking-tighter leading-[0.9] text-white mb-6 uppercase">
              {text(customer.hero?.title, "CRAVE IT. CLICK IT. DEVOUR IT.")}
            </h1>
          </Reveal>

          <Reveal direction="up" delay={300}>
            <p className="text-base sm:text-lg text-white/70 font-medium mb-10 max-w-lg">
              {text(
                customer.hero?.description,
                "Chef-crafted meals prepared in our state-of-the-art cloud kitchen and delivered lightning-fast to your door.",
              )}
            </p>
          </Reveal>

          <Reveal direction="up" delay={400}>
            <a
              href="#order"
              className="inline-flex items-center gap-3 bg-[var(--brand-accent)] px-8 py-5 text-sm font-black uppercase tracking-widest text-white rounded-full hover:bg-white hover:text-[#111111] transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(250,75,0,0.4)]"
            >
              {text(customer.hero?.primaryCta, "Start Your Order")}
              <ArrowRight className="size-5" />
            </a>
          </Reveal>
        </div>
      </div>

      {/* Decorative Food Element overlapping */}
      {images[1] && (
        <div className="absolute -right-20 -bottom-20 lg:right-0 lg:top-1/2 lg:-translate-y-1/2 w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] rounded-full overflow-hidden border-8 border-[#111111] shadow-2xl z-20 hidden md:block animate-[float_6s_ease-in-out_infinite]">
          <Image
            src={images[1]}
            alt="Food Dish"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      )}
    </section>
  );
}

export function Marquee() {
  const words = [
    "Lightning Fast Delivery",
    "100% Fresh",
    "Chef Crafted",
    "Cloud Kitchen Concept",
    "Craving Satisfied",
  ];
  return (
    <div className="bg-[var(--brand-accent)] text-white py-4 overflow-hidden flex items-center shadow-lg border-y border-white/10 relative z-30">
      <div className="flex whitespace-nowrap animate-fastMarquee">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center">
            {words.map((word, idx) => (
              <React.Fragment key={idx}>
                <span className="text-sm font-black uppercase tracking-widest px-8">
                  {word}
                </span>
                <span className="text-black/30">✦</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function HowItWorks({ customer }: { customer: NewCustomer }) {
  const steps = [
    {
      icon: Flame,
      title: "Cooked Fresh",
      desc: "Prepared to order in our digital kitchen.",
    },
    {
      icon: Package,
      title: "Packed Tight",
      desc: "Sealed for ultimate temperature control.",
    },
    {
      icon: Bike,
      title: "Delivered Fast",
      desc: "Straight to your door in minutes.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-[#fafafa] px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[400px] lg:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
            <Reveal direction="scale" className="h-full w-full">
              <Image
                src={text(customer.about?.image, ckImg(12))}
                alt="Kitchen Action"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </Reveal>
          </div>

          <div>
            <Reveal direction="up">
              <h2 className="font-sans font-black text-4xl sm:text-5xl uppercase tracking-tighter text-[#111111] mb-6">
                {text(
                  customer.about?.title,
                  "No tables. Just incredible food.",
                )}
              </h2>
            </Reveal>
            <Reveal direction="up" delay={150}>
              <p className="text-[#111111]/70 font-medium leading-relaxed text-lg mb-12">
                {text(
                  customer.about?.body,
                  "We stripped away the dining room to focus on what matters most: the food. DashBite is a delivery-first kitchen engineered for flavor and speed.",
                )}
              </p>
            </Reveal>

            <div className="space-y-8">
              {steps.map((step, idx) => (
                <Reveal key={idx} direction="left" delay={idx * 150 + 200}>
                  <div className="flex items-start gap-6 bg-white p-6 rounded-3xl shadow-sm border border-black/5 hover:border-[var(--brand-accent)]/30 transition-colors">
                    <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-[var(--brand-accent)]/10 text-[var(--brand-accent)]">
                      <step.icon className="size-7" />
                    </div>
                    <div>
                      <h3 className="font-black uppercase tracking-wide text-[#111111] text-lg mb-1">
                        {step.title}
                      </h3>
                      <p className="text-[#111111]/60 font-medium text-sm">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const FALLBACK_MENU: CustomerService[] = [
  {
    title: "Spicy Honey Butter Chicken",
    description: "Crispy fried chicken tossed in signature chili honey butter.",
    price: "14",
    tag: "Bestseller",
    image: ckImg(3),
  },
  {
    title: "Truffle Smashburger",
    description:
      "Double wagyu patties, truffle aioli, caramelized onions on brioche.",
    price: "16",
    tag: "Chef's Pick",
    image: ckImg(5),
  },
  {
    title: "Fire-Roasted Veggie Bowl",
    description: "Quinoa, charred broccoli, sweet potato, topped with tahini.",
    price: "12",
    tag: "Vegan",
    image: ckImg(9),
  },
  {
    title: "Loaded Kimchi Fries",
    description:
      "Crispy cuts loaded with kimchi, bulgogi beef, and spicy mayo.",
    price: "10",
    tag: "Side",
    image: ckImg(15),
  },
];

export function AppMenu({ customer }: { customer: NewCustomer }) {
  const items =
    customer.services && customer.services.length > 0
      ? customer.services
      : FALLBACK_MENU;

  return (
    <section id="menu" className="bg-white px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal direction="up">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div>
              <p className="text-[var(--brand-accent)] font-black uppercase tracking-widest text-xs mb-3">
                02 · Digital Menu
              </p>
              <h2 className="font-black text-5xl tracking-tighter text-[#111111] uppercase">
                Popular Bites
              </h2>
            </div>
            <a
              href="#order"
              className="text-[#111111] font-bold text-sm tracking-widest uppercase border-b-2 border-black hover:text-[var(--brand-accent)] hover:border-[var(--brand-accent)] transition-colors pb-1"
            >
              View Full Menu
            </a>
          </div>
        </Reveal>

        {/* Card Grid (App-like UI) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <Reveal key={index} direction="up" delay={index * 100}>
              <div className="group relative bg-[#fafafa] rounded-[2rem] overflow-hidden border border-black/5 hover:shadow-2xl hover:shadow-[var(--brand-accent)]/10 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
                {/* Image Area */}
                <div className="relative aspect-[4/3] w-full bg-[#f0f0f0] overflow-hidden">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      unoptimized
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-black/10">
                      <ShoppingBag className="size-10" />
                    </div>
                  )}
                  {item.tag && (
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#111111] px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                      {item.tag}
                    </div>
                  )}
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-black text-xl text-[#111111] leading-tight mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[#111111]/60 text-sm font-medium leading-relaxed mb-6 flex-grow line-clamp-3">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="font-black text-2xl text-[var(--brand-accent)] tracking-tight">
                      ${item.price || "12"}
                    </span>
                    <button className="bg-[#111111] text-white grid size-10 place-items-center rounded-full group-hover:bg-[var(--brand-accent)] transition-colors duration-300">
                      <Plus className="size-5" />
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ImageFeed({ customer }: { customer: NewCustomer }) {
  const images =
    customer.gallery && customer.gallery.length >= 5
      ? customer.gallery.map((g) => g.image)
      : [ckImg(18), ckImg(21), ckImg(24), ckImg(25), ckImg(28)];

  return (
    <section id="gallery" className="bg-[#111111] py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 mb-12">
        <Reveal direction="up">
          <h2 className="font-black text-3xl tracking-tighter text-white uppercase text-center">
            Fresh off the line
          </h2>
        </Reveal>
      </div>

      {/* Scrolling Feed */}
      <div className="flex gap-4 px-6 overflow-x-auto hide-scrollbar snap-x pb-8">
        {images.map((img, idx) => (
          <Reveal key={idx} direction="left" delay={idx * 100}>
            <div className="relative w-[280px] h-[350px] shrink-0 snap-center rounded-[2rem] overflow-hidden">
              <Image
                src={img}
                alt="Food Gallery"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function DeliveryForm({ customer }: { customer: NewCustomer }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      event.currentTarget.reset();
    }, 1200);
  }

  const inputClass =
    "w-full bg-[#fafafa] border border-black/10 rounded-2xl px-5 py-4 text-sm font-medium text-[#111111] outline-none transition-colors focus:border-[var(--brand-accent)] focus:bg-white focus:ring-4 focus:ring-[var(--brand-accent)]/10";
  const labelClass =
    "block text-[10px] font-black uppercase tracking-widest text-[#111111]/50 mb-2 ml-2";

  return (
    <section id="order" className="bg-[#fafafa] px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
        {/* Contact / Delivery Zones */}
        <div>
          <Reveal direction="up">
            <h2 className="font-black text-5xl sm:text-6xl tracking-tighter text-[#111111] uppercase leading-[0.9] mb-8">
              Where to?
            </h2>
            <p className="text-[#111111]/70 font-medium text-lg mb-12">
              Drop your details below and our dispatch team will confirm your
              delivery ETA instantly.
            </p>
          </Reveal>

          <Reveal direction="up" delay={200}>
            <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-[var(--brand-accent)]/10 p-3 rounded-full text-[var(--brand-accent)]">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <p className="font-black uppercase tracking-widest text-[10px] text-black/50">
                    Kitchen Hub
                  </p>
                  <p className="font-bold text-[#111111]">
                    {text(customer.contact?.address, "Sector 4, Tech District")}
                  </p>
                </div>
              </div>
              <div className="w-full h-px bg-black/5"></div>
              <div className="flex items-center gap-4">
                <div className="bg-[var(--brand-accent)]/10 p-3 rounded-full text-[var(--brand-accent)]">
                  <Clock className="size-5" />
                </div>
                <div>
                  <p className="font-black uppercase tracking-widest text-[10px] text-black/50">
                    Delivery Hours
                  </p>
                  <p className="font-bold text-[#111111]">
                    {text(customer.contact?.hours, "Everyday, 11 AM — 2 AM")}
                  </p>
                </div>
              </div>
              <div className="w-full h-px bg-black/5"></div>
              <div className="flex items-center gap-4">
                <div className="bg-[var(--brand-accent)]/10 p-3 rounded-full text-[var(--brand-accent)]">
                  <Phone className="size-5" />
                </div>
                <div>
                  <p className="font-black uppercase tracking-widest text-[10px] text-black/50">
                    Support Line
                  </p>
                  <p className="font-bold text-[#111111]">
                    {text(customer.contact?.phone, "+1 (555) 999-FAST")}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Order Form */}
        <Reveal direction="left" delay={300}>
          <div className="bg-white p-8 sm:p-12 rounded-[2.5rem] shadow-xl shadow-black/5 border border-black/5">
            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center text-center py-20 animate-in fade-in zoom-in duration-500">
                <div className="grid size-20 place-items-center rounded-full bg-[var(--brand-accent)] text-white mb-6 shadow-lg shadow-[var(--brand-accent)]/30">
                  <Check className="size-10" />
                </div>
                <h3 className="font-black text-3xl uppercase tracking-tighter mb-4 text-[#111111]">
                  Order Received!
                </h3>
                <p className="text-[#111111]/60 font-medium mb-8">
                  Keep an eye on your phone. A rider is being assigned to your
                  order.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-[var(--brand-accent)] font-bold text-sm tracking-widest uppercase border-b-2 border-[var(--brand-accent)] pb-1"
                >
                  Place another order
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="grid sm:grid-cols-2 gap-6">
                <div className="sm:col-span-2">
                  <label className={labelClass}>Delivery Address *</label>
                  <input
                    required
                    name="address"
                    placeholder="123 Main St, Apt 4B"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Name *</label>
                  <input
                    required
                    name="name"
                    placeholder="John Doe"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Phone Number *</label>
                  <input
                    required
                    name="phone"
                    type="tel"
                    placeholder="(555) 000-0000"
                    className={inputClass}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass}>Order Details / Items *</label>
                  <textarea
                    required
                    name="order"
                    rows={3}
                    placeholder="e.g. 2x Truffle Smashburger, 1x Kimchi Fries..."
                    className={cx(inputClass, "resize-none")}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass}>
                    Delivery Instructions (Optional)
                  </label>
                  <input
                    name="instructions"
                    placeholder="Leave at door, ring bell..."
                    className={inputClass}
                  />
                </div>

                <button
                  disabled={status === "sending"}
                  className="sm:col-span-2 w-full flex justify-center items-center gap-3 bg-[var(--brand-accent)] text-white px-6 py-5 rounded-2xl text-sm font-black uppercase tracking-widest shadow-lg shadow-[var(--brand-accent)]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {status === "sending" ? "Processing..." : "Request Delivery"}{" "}
                  <ArrowRight className="size-5" />
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
  const brandName = text(customer.businessName, "DashBite");

  return (
    <footer className="bg-[#111111] pt-20 pb-10 px-6 lg:px-8 text-white">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left mb-16">
        <div>
          <a
            href="#top"
            className="font-sans font-black text-3xl tracking-tighter uppercase flex items-center justify-center md:justify-start gap-2 mb-4"
          >
            <Zap className="size-6 text-[var(--brand-accent)] fill-[var(--brand-accent)]" />
            {brandName}
          </a>
          <p className="text-white/50 text-sm font-medium max-w-sm">
            Premium cloud kitchen delivering chef-crafted meals straight to your
            door.
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-8 text-xs font-bold uppercase tracking-widest text-white/60">
          <a
            href="#how-it-works"
            className="hover:text-[var(--brand-accent)] transition-colors"
          >
            How It Works
          </a>
          <a
            href="#menu"
            className="hover:text-[var(--brand-accent)] transition-colors"
          >
            Menu
          </a>
          <a
            href="#order"
            className="hover:text-[var(--brand-accent)] transition-colors"
          >
            Order Now
          </a>
        </nav>
      </div>
      <div className="mx-auto max-w-7xl border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-white/30">
        <span>
          © {new Date().getFullYear()} {brandName}
        </span>
        <span>Engineered by InfyCrest</span>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------------------------- */
/*                               MAIN TEMPLATE                                */
/* -------------------------------------------------------------------------- */

export default function PremiumCloudKitchenTemplate({
  customer = demoDashBiteCustomer,
}: {
  customer?: NewCustomer;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const style = {
    "--brand-accent": text(customer.theme?.accent, "#fa4b00"),
  } as CSSProperties;

  return (
    <main
      style={style}
      className="bg-white font-sans text-[#111111] selection:bg-[var(--brand-accent)] selection:text-white"
    >
      {/* 
        Custom Styles for infinite marquee and floating animations. 
        dangerouslySetInnerHTML keeps it scoped to this single file without needing global CSS changes.
      */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fastMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-fastMarquee {
          animation: fastMarquee 15s linear infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `,
        }}
      />

      <Navbar customer={customer} scrolled={scrolled} />
      <Hero customer={customer} />
      <Marquee />
      <HowItWorks customer={customer} />
      <AppMenu customer={customer} />
      <ImageFeed customer={customer} />
      <DeliveryForm customer={customer} />
      <Footer customer={customer} />
    </main>
  );
}
