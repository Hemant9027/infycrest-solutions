"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Mail, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ease } from "./motion";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "The Villas", href: "#villas" },
  { label: "Ocean", href: "#ocean" },
  { label: "Island Life", href: "#island" },
  { label: "Location", href: "#location" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#booking" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled && !open;

  return (
    <header className="fixed inset-x-0 top-0 z-[100]">
      <div
        className={`transition-all duration-500 ${
          solid
            ? "border-b border-lagoon-950/10 bg-sand-50/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 w-full max-w-[90rem] items-center justify-between px-5 md:px-10">
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className={`group flex items-baseline gap-2 font-display text-xl tracking-tight transition-colors duration-500 md:text-2xl ${
              solid ? "text-lagoon-950" : "text-sand-50"
            }`}
          >
            <span className="font-semibold">Sonsette</span>
            <span className="italic font-light text-coral-400">Villas</span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {LINKS.slice(0, 6).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[11px] font-semibold tracking-[0.22em] uppercase transition-colors duration-500 ${
                  solid
                    ? "text-lagoon-950/70 hover:text-lagoon-950"
                    : "text-sand-50/80 hover:text-sand-50"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              className={`rounded-full px-5 py-2.5 text-[11px] font-semibold tracking-[0.22em] uppercase transition-all duration-500 ${
                solid
                  ? "bg-lagoon-900 text-sand-50 hover:bg-lagoon-800"
                  : "bg-sand-50 text-lagoon-950 hover:bg-coral-400 hover:text-lagoon-950"
              }`}
            >
              Stay at Sonsette Villas
            </a>
          </nav>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-500 lg:hidden ${
              open || !solid
                ? "border-sand-50/30 text-sand-50"
                : "border-lagoon-950/20 text-lagoon-950"
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            className="fixed inset-0 -z-10 flex h-svh flex-col justify-between bg-lagoon-950 px-6 pt-28 pb-10"
          >
            <nav className="flex flex-col gap-1">
              {LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.6, ease }}
                  className="group flex items-baseline gap-4 border-b border-sand-50/10 py-4"
                >
                  <span className="font-display text-sm italic text-coral-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-4xl font-light text-sand-50 transition-colors group-hover:text-coral-300">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease }}
              className="flex flex-col gap-3 text-sm text-sand-100/70"
            >
              <a
                href="tel:+12423442041"
                className="flex items-center gap-3 transition-colors hover:text-sand-50"
              >
                <Phone className="h-4 w-4 text-coral-400" /> +1 (242) 344-2041
              </a>
              <a
                href="mailto:adeleveaux@yahoo.com"
                className="flex items-center gap-3 transition-colors hover:text-sand-50"
              >
                <Mail className="h-4 w-4 text-coral-400" /> adeleveaux@yahoo.com
              </a>
              <p className="mt-2 text-[11px] tracking-[0.28em] uppercase text-sand-100/40">
                Major&apos;s Cay · Crooked Island · The Bahamas
              </p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
