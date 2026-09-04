"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Bird, Menu, Phone, X } from "lucide-react";
import { scrollToId } from "@/lib/scroll";
import { EASE } from "./Reveal";

const LINKS = [
  { id: "about", label: "About" },
  { id: "rooms", label: "Rooms & Suite" },
  { id: "comforts", label: "Comforts" },
  { id: "discover", label: "Inagua" },
  { id: "gallery", label: "Gallery" },
  { id: "location", label: "Location" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    // let the mobile menu close before scrolling
    setTimeout(() => scrollToId(id), open ? 60 : 0);
  };

  const dark = scrolled && !open;

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: EASE }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          dark
            ? "border-b border-ink/10 bg-bone/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 sm:px-8">
          {/* Brand */}
          <button
            onClick={() => go("home")}
            className="group flex items-center gap-3 text-left"
            aria-label="Back to top"
          >
            <span
              className={`grid h-10 w-10 place-items-center rounded-full transition-colors duration-500 ${
                dark ? "bg-coral text-cream" : "bg-cream/15 text-cream backdrop-blur-sm"
              }`}
            >
              <Bird className="h-5 w-5" strokeWidth={1.7} />
            </span>
            <span className="leading-tight">
              <span
                className={`block font-display text-lg font-semibold tracking-tight transition-colors duration-500 ${
                  dark ? "text-ink" : "text-cream"
                }`}
              >
                Gaga’s Nest
              </span>
              <span
                className={`block text-[10px] font-semibold uppercase tracking-[0.24em] transition-colors duration-500 ${
                  dark ? "text-ink/50" : "text-cream/60"
                }`}
              >
                Matthew Town · Inagua
              </span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 lg:flex">
            {LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className={`link-line text-[12px] font-semibold uppercase tracking-[0.16em] transition-colors duration-500 ${
                  dark ? "text-ink/70 hover:text-ink" : "text-cream/75 hover:text-cream"
                }`}
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => go("contact")}
              className="hidden items-center gap-2 rounded-full bg-coral px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.14em] text-cream shadow-[0_12px_30px_-10px_rgb(173_76_52/0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral-deep sm:inline-flex"
            >
              Plan Your Stay
              <ArrowUpRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              className={`grid h-10 w-10 place-items-center rounded-full transition-colors duration-500 lg:hidden ${
                dark ? "bg-ink/5 text-ink" : "bg-cream/15 text-cream backdrop-blur-sm"
              } ${open ? "!bg-transparent !text-cream" : ""}`}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-ink-deep px-6 pb-10 pt-28"
          >
            <nav className="flex flex-col gap-1">
              {[...LINKS, { id: "contact", label: "Contact" }].map((l, i) => (
                <motion.button
                  key={l.id}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.6, delay: 0.08 + i * 0.06, ease: EASE }}
                  onClick={() => go(l.id)}
                  className="group flex items-baseline gap-4 border-b border-cream/10 py-4 text-left"
                >
                  <span className="text-[11px] font-semibold tracking-widest text-flamingo">
                    0{i + 1}
                  </span>
                  <span className="font-display text-3xl text-cream transition-colors group-hover:text-flamingo">
                    {l.label}
                  </span>
                </motion.button>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-2 text-sm text-cream/70"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cream/40">
                Talk to your host, Kevin Hanchell
              </span>
              <a
                href="tel:+12423391666"
                className="flex items-center gap-2 text-cream"
              >
                <Phone className="h-4 w-4 text-flamingo" /> +1 (242) 339-1666
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
