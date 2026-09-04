"use client";

import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { restaurant, navLinks } from "@/data/restaurant";
import { useReservation } from "./ReservationProvider";

const sectionIds = ["story", "menu", "experience", "gallery", "reviews", "visit"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const { openReservation } = useReservation();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  }, [reduce]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 border-b ${
          scrolled
            ? "bg-ink/85 backdrop-blur-md border-ivory/10 py-3"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <nav className="mx-auto max-w-shell px-5 sm:px-8 flex items-center justify-between">
          {/* Wordmark */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" })}
            className="flex items-center gap-2 group"
            aria-label="Back to top"
          >
            <span className="circle-motif h-7 w-7 flex items-center justify-center text-[10px] font-semibold text-gold group-hover:rotate-45 transition-transform duration-500">
              88
            </span>
            <span className="font-display tracking-[0.25em] text-lg text-ivory">EIGHTY EIGHT</span>
          </button>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-9">
            {navLinks.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => scrollTo(l.href)}
                  className={`relative text-[12px] uppercase tracking-wide2 transition-colors duration-300 ${
                    active === l.href.slice(1) ? "text-gold" : "text-ivory/85 hover:text-ivory"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-300 ${
                      active === l.href.slice(1) ? "w-full" : "w-0"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              onClick={openReservation}
              className="hidden lg:inline-flex items-center gap-2 uppercase tracking-wide2 text-[11px] font-medium px-5 py-2.5 bg-crimson text-ivory hover:bg-vermilion hover:-translate-y-0.5 transition-all duration-300"
            >
              Reserve a table
            </button>
            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="lg:hidden text-ivory p-2 -mr-2"
            >
              <Menu className="h-7 w-7" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 top-0 h-full w-[82%] max-w-sm bg-ink border-l border-ivory/10 p-7 flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
            >
              <div className="flex items-center justify-between">
                <span className="font-display tracking-[0.2em] text-ivory">EIGHTY EIGHT</span>
                <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-ivory p-2 -mr-2">
                  <X className="h-7 w-7" />
                </button>
              </div>
              <nav className="mt-10 flex flex-col gap-1">
                {navLinks.map((l, i) => (
                  <motion.button
                    key={l.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * (i + 1), duration: 0.4 }}
                    onClick={() => scrollTo(l.href)}
                    className="text-left text-2xl font-display text-ivory/90 hover:text-gold py-3 border-b border-ivory/10 transition-colors"
                  >
                    {l.label}
                  </motion.button>
                ))}
              </nav>
              <div className="mt-auto pt-8">
                <p className="eyebrow text-[10px] text-stonewarm mb-3">Reservations</p>
                <button
                  onClick={() => {
                    setOpen(false);
                    openReservation();
                  }}
                  className="w-full inline-flex justify-center items-center uppercase tracking-wide2 text-[12px] font-medium py-4 bg-crimson text-ivory hover:bg-vermilion transition-colors"
                >
                  Reserve a table
                </button>
                <a
                  href={restaurant.phoneTel}
                  className="mt-4 block text-center text-sm text-stonewarm hover:text-gold"
                >
                  {restaurant.phoneDisplay}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
