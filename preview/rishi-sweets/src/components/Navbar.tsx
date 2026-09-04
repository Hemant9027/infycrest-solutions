import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu as MenuIcon, MessageCircle, Phone, ShoppingBag, X, MapPin, Clock } from "lucide-react";
import { navLinks, site, tel, wa, WHATSAPP_DEFAULT_MSG } from "../data/site";
import { cn } from "../utils/cn";
import { useOpenStatus } from "../hooks/useFx";

function Logo({ compact }: { compact: boolean }) {
  return (
    <a href="#home" className="group flex items-center gap-3" aria-label="Rishi Sweets — home">
      <span className="relative grid h-11 w-11 shrink-0 place-items-center">
        <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-maroon-700 via-maroon-800 to-maroon-950 shadow-[0_10px_24px_-8px_rgba(92,18,32,0.6)] transition-transform duration-500 group-hover:rotate-6" />
        <span className="absolute inset-[3px] rounded-[10px] border border-gold-300/40" />
        <span className="relative font-display text-lg font-bold text-gold-300">RS</span>
      </span>
      <span className="leading-tight">
        <span className={cn("block font-display font-semibold tracking-wide text-ink-900 transition-all", compact ? "text-lg" : "text-xl")}>
          Rishi <span className="text-maroon-700">Sweets</span>
        </span>
        <span className="block text-[9px] font-bold tracking-[0.3em] text-gold-600 uppercase">
          {site.tagline}
        </span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const isOpen = useOpenStatus();
  const { scrollY } = useScroll();

  useEffect(() => scrollY.on("change", (v) => setScrolled(v > 40)), [scrollY]);

  useEffect(() => {
    document.body.style.overflow = openMenu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openMenu]);

  return (
    <>
      <motion.header
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-[80] transition-all duration-500",
          scrolled
            ? "border-b border-gold-500/25 bg-ivory-50/90 shadow-[0_12px_40px_-20px_rgba(51,8,15,0.35)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-500 sm:px-6",
            scrolled ? "py-2.5" : "py-5"
          )}
        >
          <Logo compact={scrolled} />

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative rounded-full px-3 py-2 text-[12px] font-bold tracking-[0.12em] text-ink-700 uppercase transition-colors after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-gold-500 after:transition-transform after:duration-300 hover:text-maroon-700 hover:after:scale-x-100 xl:px-3.5"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <span
              className={cn(
                "mr-1 hidden items-center gap-1.5 rounded-full border px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase xl:inline-flex",
                isOpen
                  ? "border-green-700/25 bg-green-50 text-green-800"
                  : "border-maroon-700/25 bg-maroon-800/5 text-maroon-800"
              )}
            >
              <span className={cn("h-1.5 w-1.5 rounded-full", isOpen ? "bg-green-600" : "bg-maroon-600")} />
              {isOpen ? "Open Now" : "Closed"}
            </span>
            <a
              href={tel}
              aria-label="Call Rishi Sweets"
              className="hidden h-10 w-10 place-items-center rounded-full border border-maroon-800/25 text-maroon-800 transition-all hover:border-maroon-800 hover:bg-maroon-800 hover:text-ivory-50 sm:grid"
            >
              <Phone size={16} />
            </a>
            <a
              href={wa(WHATSAPP_DEFAULT_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="hidden h-10 w-10 place-items-center rounded-full border border-maroon-800/25 text-maroon-800 transition-all hover:border-maroon-800 hover:bg-maroon-800 hover:text-ivory-50 sm:grid"
            >
              <MessageCircle size={16} />
            </a>
            <a
              href="#contact"
              className="group relative hidden overflow-hidden rounded-full bg-maroon-800 px-5 py-2.5 text-[11px] font-bold tracking-[0.14em] text-ivory-50 uppercase shadow-[0_10px_24px_-10px_rgba(92,18,32,0.6)] transition-all hover:bg-maroon-700 md:inline-flex md:items-center md:gap-2"
            >
              <ShoppingBag size={14} />
              Order / Enquire
            </a>
            <button
              type="button"
              onClick={() => setOpenMenu(true)}
              aria-label="Open menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-ink-900/15 text-ink-900 lg:hidden"
            >
              <MenuIcon size={18} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[90] flex flex-col bg-maroon-950/98 backdrop-blur-md lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="arch-bg-faint absolute inset-0 opacity-60" aria-hidden />
            <div className="relative flex items-center justify-between px-5 py-5">
              <span className="font-display text-xl font-semibold text-ivory-50">
                Rishi <span className="text-gold-300">Sweets</span>
              </span>
              <button
                type="button"
                onClick={() => setOpenMenu(false)}
                aria-label="Close menu"
                className="grid h-11 w-11 place-items-center rounded-full border border-ivory-50/25 text-ivory-50"
              >
                <X size={18} />
              </button>
            </div>
            <nav aria-label="Mobile" className="relative flex-1 overflow-y-auto px-6 pt-4 pb-8">
              <ul className="divide-y divide-ivory-50/10">
                {navLinks.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpenMenu(false)}
                      className="flex items-baseline justify-between py-4 font-display text-3xl font-medium text-ivory-50 transition-colors active:text-gold-300"
                    >
                      {l.label}
                      <span className="text-[10px] font-bold tracking-[0.3em] text-gold-400/70 uppercase">
                        0{i + 1}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-6 flex items-center gap-2 text-[12px] font-semibold text-ivory-200/80">
                <Clock size={14} className="text-gold-300" />
                {isOpen ? "Open now" : "Closed"} · {site.hours.days}, {site.hours.open} – {site.hours.close}
              </div>
              <div className="mt-2 flex items-start gap-2 text-[12px] text-ivory-200/70">
                <MapPin size={14} className="mt-0.5 shrink-0 text-gold-300" />
                <span>{site.addressLines.join(" ")}</span>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <a
                  href={tel}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-ivory-50/10 py-4 text-[12px] font-bold tracking-widest text-ivory-50 uppercase"
                >
                  <Phone size={15} /> Call
                </a>
                <a
                  href={wa(WHATSAPP_DEFAULT_MSG)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-gold-400 py-4 text-[12px] font-bold tracking-widest text-maroon-950 uppercase"
                >
                  <MessageCircle size={15} /> WhatsApp
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
