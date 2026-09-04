"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, Menu, X } from "lucide-react";
import Hibiscus from "@/components/Hibiscus";
import { EMAIL, LOCATION } from "@/lib/site";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Stay", href: "#accommodation" },
  { label: "Experience", href: "#experience" },
  { label: "Explore", href: "#explore" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
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

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,color,box-shadow,backdrop-filter] duration-500 ${
          scrolled
            ? "bg-sand-50/85 text-ink shadow-[0_1px_0_rgba(12,50,49,0.08)] backdrop-blur-xl"
            : "bg-transparent text-sand-50"
        }`}
      >
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 md:px-10">
          <a href="#top" className="group flex items-center gap-3" aria-label="Hibiscus Inn — back to top">
            <Hibiscus className="h-9 w-9 text-hibiscus-400 transition-transform duration-700 group-hover:rotate-[72deg]" />
            <span className="leading-none">
              <span className="block font-display text-[1.35rem] tracking-tight">
                Hibiscus Inn
              </span>
              <span
                className={`mt-1 block text-[0.55rem] font-semibold uppercase tracking-[0.32em] ${
                  scrolled ? "text-ink/50" : "text-sand-100/70"
                }`}
              >
                Guest House · Nassau
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="link-underline text-sm font-medium tracking-wide opacity-90 transition-opacity hover:opacity-100"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-full bg-hibiscus-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sea-950/10 transition-colors duration-300 hover:bg-hibiscus-600 lg:inline-flex"
            >
              <Calendar className="h-4 w-4" />
              Check Availability
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={`grid h-11 w-11 place-items-center rounded-full border transition-colors lg:hidden ${
                scrolled
                  ? "border-ink/15 text-ink hover:bg-ink/5"
                  : "border-sand-50/40 text-sand-50 hover:bg-sand-50/10"
              }`}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] flex flex-col bg-sea-950/95 text-sand-50 backdrop-blur-2xl"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex h-20 items-center justify-between px-6 md:px-10">
              <span className="flex items-center gap-3">
                <Hibiscus className="h-8 w-8 text-hibiscus-400" />
                <span className="font-display text-xl">Hibiscus Inn</span>
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-11 w-11 place-items-center rounded-full border border-sand-50/30 text-sand-50 transition-colors hover:bg-sand-50/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <motion.nav
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.07, delayChildren: 0.12 } },
              }}
              className="flex flex-1 flex-col items-start justify-center gap-1 px-8 md:px-14"
              aria-label="Mobile"
            >
              {NAV.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  variants={{
                    hidden: { opacity: 0, y: 26 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  className="group flex items-baseline gap-4 py-2"
                >
                  <span className="text-xs font-semibold tracking-[0.3em] text-hibiscus-300">
                    0{i + 1}
                  </span>
                  <span className="font-display text-4xl tracking-tight transition-colors group-hover:text-hibiscus-300 sm:text-5xl">
                    {item.label}
                  </span>
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                variants={{
                  hidden: { opacity: 0, y: 26 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-hibiscus-500 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-hibiscus-600"
              >
                <Calendar className="h-4 w-4" />
                Check Availability
              </motion.a>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.5 } }}
              className="flex flex-wrap items-center justify-between gap-3 px-8 pb-10 text-xs uppercase tracking-[0.25em] text-sand-100/60 md:px-14"
            >
              <a href={`mailto:${EMAIL}`} className="link-underline text-sand-100">
                {EMAIL}
              </a>
              <span>{LOCATION}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
