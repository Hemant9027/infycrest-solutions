"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, Shell, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BUSINESS, NAV_LINKS } from "@/lib/site";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
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

  const light = !scrolled && !open;

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-ink/8 bg-sand-50/85 shadow-[0_12px_40px_-18px_rgba(3,38,46,0.35)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[4.5rem] max-w-[88rem] items-center justify-between px-5 sm:px-8">
          {/* Brand */}
          <a href="#top" className="group flex items-center gap-3" aria-label="Marshall's Guest House — top of page">
            <span
              className={`grid size-10 place-items-center rounded-full transition-colors ${
                light ? "bg-sand-50/15 text-sand-50 ring-1 ring-sand-50/30" : "bg-abyss-900 text-sand-50"
              }`}
            >
              <Shell className="size-5" strokeWidth={1.6} />
            </span>
            <span className="leading-none">
              <span
                className={`font-display block text-[1.3rem] font-medium italic transition-colors ${
                  light ? "text-sand-50" : "text-ink"
                }`}
              >
                Marshall&apos;s
              </span>
              <span
                className={`mt-1 block text-[9px] font-bold uppercase tracking-[0.32em] transition-colors ${
                  light ? "text-lagoon-200" : "text-lagoon-600"
                }`}
              >
                Guest House · Exuma
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[13px] font-semibold tracking-wide transition-colors ${
                  light ? "text-sand-50/85 hover:text-sand-50" : "text-ink/70 hover:text-ink"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={BUSINESS.phoneHref}
              className={`hidden items-center gap-2 text-[13px] font-semibold xl:flex ${
                light ? "text-sand-50/85 hover:text-sand-50" : "text-ink/70 hover:text-ink"
              }`}
            >
              <Phone className="size-3.5" strokeWidth={2} />
              {BUSINESS.phoneDisplay}
            </a>
            <a
              href="#contact"
              className="hidden rounded-full bg-coral-500 px-5 py-2.5 text-[13px] font-bold tracking-wide text-sand-50 shadow-[0_10px_30px_-10px_rgba(226,116,77,0.8)] transition-all hover:-translate-y-0.5 hover:bg-coral-600 sm:inline-flex"
            >
              Contact Marshall&apos;s
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              className={`grid size-10 place-items-center rounded-full lg:hidden ${
                light ? "text-sand-50 ring-1 ring-sand-50/30" : "text-ink ring-1 ring-ink/15"
              }`}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 bg-abyss-950/60 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.nav
              initial={{ y: -24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mx-4 mt-24 rounded-3xl bg-sand-50 p-7 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              aria-label="Mobile"
            >
              <div className="flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 + i * 0.05 }}
                    onClick={() => setOpen(false)}
                    className="font-display rounded-xl px-4 py-3 text-2xl text-ink transition-colors hover:bg-lagoon-50"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3 border-t border-ink/10 pt-6">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-coral-500 px-6 py-3.5 text-center text-sm font-bold text-sand-50"
                >
                  Contact Marshall&apos;s Guest House
                </a>
                <a
                  href={BUSINESS.phoneHref}
                  className="rounded-full bg-abyss-900 px-6 py-3.5 text-center text-sm font-bold text-sand-50"
                >
                  Call {BUSINESS.phoneDisplay}
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
