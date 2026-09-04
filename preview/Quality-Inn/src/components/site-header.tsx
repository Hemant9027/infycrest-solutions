"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Menu, Phone, TreePalm, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { navLinks, site } from "@/lib/site";

const hideUntilXl = new Set(["#activities", "#location"]);

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 26, mass: 0.4 });

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
        transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
          scrolled || open
            ? "border-b border-pine-950/8 bg-sand-50/85 text-pine-950 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent text-sand-50",
        )}
      >
        {/* scroll progress */}
        <motion.span
          style={{ scaleX: progress }}
          className="absolute inset-x-0 top-0 h-0.5 origin-left bg-gradient-to-r from-tide-400 via-lagoon-500 to-copper-400"
        />

        <div className="container-site flex h-17 items-center justify-between gap-6 sm:h-18">
          <a href="#top" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
            <span
              className={cn(
                "grid size-10 place-items-center rounded-full border transition-colors duration-500",
                scrolled || open
                  ? "border-pine-950/15 bg-pine-950 text-sand-50"
                  : "border-sand-50/30 bg-sand-50/10 text-sand-50 backdrop-blur-sm",
              )}
            >
              <TreePalm className="size-4.5" strokeWidth={1.6} />
            </span>
            <span className="leading-tight">
              <span className="block text-[0.95rem] font-semibold tracking-[0.08em] uppercase">{site.name}</span>
              <span className={cn("block text-[0.625rem] tracking-[0.24em] uppercase", scrolled || open ? "text-pine-950/55" : "text-sand-50/70")}>
                Staniard Creek · North Andros
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "link-slide text-[0.78rem] font-medium tracking-[0.14em] uppercase opacity-90 transition-opacity hover:opacity-100",
                  hideUntilXl.has(link.href) && "hidden xl:inline-flex",
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={site.contact.phoneHref}
              className={cn(
                "hidden items-center gap-2 text-[0.8rem] font-medium tracking-wide transition-opacity hover:opacity-80 md:flex",
                scrolled || open ? "text-pine-950/80" : "text-sand-50/85",
              )}
            >
              <Phone className="size-3.5" strokeWidth={2} />
              {site.contact.phoneDisplay}
            </a>
            <a
              href="#contact"
              className={cn(
                "group hidden items-center gap-1.5 rounded-full px-5 py-2.5 text-[0.78rem] font-semibold tracking-[0.12em] uppercase transition-all duration-300 lg:inline-flex",
                scrolled || open
                  ? "bg-pine-950 text-sand-50 hover:bg-lagoon-600"
                  : "bg-sand-50 text-pine-950 hover:bg-copper-300",
              )}
            >
              Plan Your Stay
              <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className={cn(
                "grid size-10 place-items-center rounded-full border transition-colors lg:hidden",
                scrolled || open ? "border-pine-950/15 hover:bg-pine-950/5" : "border-sand-50/30 hover:bg-sand-50/10",
              )}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-pine-950/[0.985] pt-24 pb-10 text-sand-50 backdrop-blur-sm lg:hidden"
          >
            <nav className="container-site flex flex-col" aria-label="Mobile">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 26 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.08 + i * 0.055, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex items-baseline justify-between border-b border-sand-50/10 py-4"
                >
                  <span className="font-display text-3xl font-light transition-colors group-active:text-tide-300 sm:text-4xl">
                    {link.label}
                  </span>
                  <span className="text-[0.65rem] tracking-[0.3em] text-sand-50/40 uppercase">
                    0{i + 1}
                  </span>
                </motion.a>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="container-site flex flex-col gap-4"
            >
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-copper-400 px-6 py-4 text-sm font-semibold tracking-[0.12em] text-pine-950 uppercase"
              >
                Plan Your Stay
                <ArrowUpRight className="size-4" />
              </a>
              <div className="flex flex-col gap-1 text-center text-sm text-sand-50/60">
                <a href={site.contact.phoneHref} className="hover:text-sand-50">
                  {site.contact.phoneDisplay}
                </a>
                <a href={site.contact.emailHref} className="hover:text-sand-50">
                  {site.contact.email}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
