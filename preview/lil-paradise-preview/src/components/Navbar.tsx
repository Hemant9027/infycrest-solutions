import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, Palmtree, X } from "lucide-react";
import { BUSINESS } from "../data/site";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Stay", href: "#stay" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-6"
      >
        <nav
          className={`flex w-full max-w-6xl items-center justify-between gap-3 rounded-full py-2.5 pl-4 pr-2.5 transition-all duration-500 ${
            scrolled
              ? "bg-cream/85 shadow-[0_12px_40px_-16px_rgba(11,58,56,0.35)] backdrop-blur-xl ring-1 ring-ink/5"
              : "bg-white/10 backdrop-blur-md ring-1 ring-white/25"
          }`}
        >
          <a href="#top" className="group flex items-center gap-2.5">
            <span
              className={`grid size-9 place-items-center rounded-full transition-colors ${
                scrolled ? "bg-deep text-cream" : "bg-cream text-deep"
              }`}
            >
              <Palmtree className="size-4.5" strokeWidth={2.2} />
            </span>
            <span
              className={`font-display text-[17px] font-semibold leading-tight tracking-tight transition-colors sm:text-lg ${
                scrolled ? "text-ink" : "text-white"
              }`}
            >
              Lil Paradise
              <span
                className={`block text-[10px] font-sans font-bold uppercase tracking-[0.3em] ${
                  scrolled ? "text-lagoon" : "text-white/80"
                }`}
              >
                Getaway · Nassau
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`rounded-full px-4 py-2 text-[13px] font-bold tracking-wide transition-colors ${
                  scrolled
                    ? "text-ink/70 hover:bg-foam hover:text-deep"
                    : "text-white/85 hover:bg-white/15 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="group hidden items-center gap-1.5 rounded-full bg-coral px-5 py-2.5 text-[13px] font-extrabold tracking-wide text-white shadow-[0_10px_24px_-10px_rgba(232,80,60,0.7)] transition-all hover:bg-coraldeep sm:inline-flex"
            >
              Plan Your Stay
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={`grid size-10 place-items-center rounded-full transition-colors lg:hidden ${
                scrolled ? "bg-ink/5 text-ink" : "bg-white/15 text-white"
              }`}
            >
              <Menu className="size-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] flex flex-col bg-deep text-cream lg:hidden"
          >
            <div className="flex items-center justify-between px-6 pt-6">
              <div className="flex items-center gap-2.5">
                <span className="grid size-9 place-items-center rounded-full bg-cream text-deep">
                  <Palmtree className="size-4.5" strokeWidth={2.2} />
                </span>
                <span className="font-display text-lg font-semibold">{BUSINESS.name}</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid size-11 place-items-center rounded-full bg-white/10"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="flex flex-1 flex-col justify-center gap-1 px-8">
              {[...LINKS, { label: "Contact", href: "#contact" }].map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -28 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex items-baseline gap-4 border-b border-white/10 py-4"
                >
                  <span className="text-xs font-bold text-aqua">0{i + 1}</span>
                  <span className="font-display text-4xl font-medium tracking-tight transition-colors group-hover:text-sun">
                    {l.label}
                  </span>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="px-8 pb-10"
            >
              <a
                href={BUSINESS.mailto}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-coral py-4 text-sm font-extrabold tracking-wide text-white"
              >
                Contact Lil Paradise Getaway <ArrowUpRight className="size-4" />
              </a>
              <p className="mt-4 text-center text-xs text-cream/60">{BUSINESS.email}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
