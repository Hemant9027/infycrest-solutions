"use client";

import { ArrowUpRight, Mail, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { EMAIL, MAPS_URL, NAV_LINKS, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { PalmMark } from "./Brand";

function Logo({ onClick, light = false }: { onClick?: () => void; light?: boolean }) {
  return (
    <a
      href="#top"
      onClick={onClick}
      className="group flex items-center gap-3"
      aria-label="Morris Motel — back to top"
    >
      <span
        className={`grid size-11 place-items-center rounded-2xl transition-colors duration-300 ${
          light ? "bg-cream text-sea" : "bg-ink text-cream group-hover:bg-sea"
        }`}
      >
        <PalmMark className="size-6" />
      </span>
      <span className="leading-none">
        <span className="block font-display text-xl font-semibold tracking-tight">
          Morris Motel
        </span>
        <span
          className={`mt-1 block text-[10px] font-semibold uppercase tracking-[0.3em] ${
            light ? "text-cream/70" : "text-sea"
          }`}
        >
          Nassau · Bahamas
        </span>
      </span>
    </a>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
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
      <a
        href="#main"
        className="sr-only z-[80] rounded-full bg-ink px-5 py-3 text-sm font-semibold text-cream focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b hairline bg-sand/90 shadow-[0_12px_40px_-24px_rgba(13,43,38,0.35)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
          <Logo />

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative pb-1 text-sm font-medium text-ink/80 transition-colors hover:text-ink after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-coral after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#book"
              className="hidden items-center gap-2 rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-cream shadow-[0_10px_24px_-12px_rgba(228,87,46,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral-deep sm:inline-flex"
            >
              Check Availability
              <ArrowUpRight className="size-4" />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-label="Open menu"
              className="grid size-11 place-items-center rounded-full border hairline bg-cream/70 text-ink backdrop-blur transition-colors hover:bg-cream lg:hidden"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {/* ——— mobile menu ——— */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col bg-ink text-cream transition-all duration-500 ease-out lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none invisible opacity-0"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="stripes-dark absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
          <Logo light onClick={() => setOpen(false)} />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="grid size-11 place-items-center rounded-full border hairline-light text-cream transition-colors hover:bg-pine"
          >
            <X className="size-5" />
          </button>
        </div>

        <nav
          className="relative flex flex-1 flex-col justify-center gap-1 px-8"
          aria-label="Mobile"
        >
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`group flex items-baseline gap-4 border-b hairline-light py-4 transition-all duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
            >
              <span className="font-display text-sm italic text-sun">0{i + 1}</span>
              <span className="font-display text-4xl font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-2">
                {link.label}
              </span>
            </a>
          ))}
        </nav>

        <div className="relative space-y-3 px-8 pb-10 text-sm text-cream/80">
          <a href="#book" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 font-semibold text-cream transition-colors hover:bg-coral-deep">
            Check Availability
            <ArrowUpRight className="size-4" />
          </a>
          <div className="flex flex-col gap-2 pt-4">
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 hover:text-cream">
              <Mail className="size-4 text-sun" /> {EMAIL}
            </a>
            <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-3 hover:text-cream">
              <Phone className="size-4 text-sun" /> {PHONE_DISPLAY}
            </a>
            <a href={MAPS_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-cream">
              <ArrowUpRight className="size-4 text-sun" /> Directions on Google Maps
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
