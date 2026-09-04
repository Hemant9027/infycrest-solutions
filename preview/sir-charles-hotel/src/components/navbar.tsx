"use client";

import { useEffect, useState } from "react";
import { Mail, Menu, X } from "lucide-react";
import ReserveButton from "./reserve-button";
import { HOTEL_EMAIL } from "@/lib/images";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#accommodation", label: "Accommodation" },
  { href: "#experience", label: "Experience" },
  { href: "#nassau", label: "Nassau" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

function Diamond({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 10 10" aria-hidden className={className}>
      <rect x="1.9" y="1.9" width="6.2" height="6.2" transform="rotate(45 5 5)" fill="currentColor" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const dark = !scrolled && !menuOpen; // over the hero image

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[60] transition-all duration-700 ${
          scrolled && !menuOpen ? "border-b border-ink/10 bg-ivory/90 backdrop-blur-md" : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 w-full max-w-[1400px] items-center justify-between px-5 transition-all duration-700 sm:px-8">
          <a href="#top" className="group flex items-center gap-3" aria-label="Sir Charles Hotel — back to top" onClick={() => setMenuOpen(false)}>
            <span
              className={`grid size-9 place-items-center rounded-full border transition-colors duration-700 ${
                dark ? "border-ivory/50 text-goldlight" : "border-ink/20 text-gold"
              }`}
            >
              <Diamond className="size-2.5" />
            </span>
            <span className="leading-none">
              <span
                className={`block font-display text-[19px] font-medium tracking-[0.08em] transition-colors duration-700 ${
                  dark ? "text-ivory" : "text-ink"
                }`}
              >
                Sir Charles
              </span>
              <span
                className={`mt-1 block text-[9px] font-semibold uppercase tracking-[0.42em] transition-colors duration-700 ${
                  dark ? "text-ivory/70" : "text-ink/50"
                }`}
              >
                Hotel · Nassau
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`link-line text-[12px] font-semibold uppercase tracking-[0.2em] transition-colors duration-700 ${
                  dark ? "text-ivory/85 hover:text-ivory" : "text-ink/70 hover:text-ink"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <ReserveButton size="sm" variant={dark ? "light" : "solid"} />
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className={`grid size-11 place-items-center rounded-full border transition-colors duration-700 lg:hidden ${
                dark ? "border-ivory/40 text-ivory" : "border-ink/20 text-ink"
              }`}
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {menuOpen ? (
        <div className="grain fixed inset-0 z-[70] flex flex-col bg-palm" role="dialog" aria-modal="true">
          <div className="flex h-20 items-center justify-between px-5 sm:px-8">
            <span className="flex items-center gap-3 leading-none">
              <span className="grid size-9 place-items-center rounded-full border border-ivory/25 text-goldlight">
                <Diamond className="size-2.5" />
              </span>
              <span>
                <span className="block font-display text-[19px] font-medium tracking-[0.08em] text-ivory">Sir Charles</span>
                <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.42em] text-ivory/60">Hotel · Nassau</span>
              </span>
            </span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="grid size-11 place-items-center rounded-full border border-ivory/25 text-ivory transition hover:bg-ivory/10"
            >
              <X className="size-5" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-1 px-8 sm:px-14" aria-label="Menu">
            {LINKS.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{ animationDelay: `${80 + i * 70}ms` }}
                className="anim-rise group flex items-baseline gap-4 border-b border-ivory/10 py-4 sm:py-5"
              >
                <span className="font-display text-sm italic text-gold">0{i + 1}</span>
                <span className="font-display text-4xl font-light text-ivory transition-all duration-500 group-hover:translate-x-2 group-hover:text-aqua sm:text-5xl">
                  {l.label}
                </span>
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-5 px-8 pb-10 sm:flex-row sm:items-center sm:justify-between sm:px-14">
            <ReserveButton variant="gold" onOpen={() => setMenuOpen(false)} />
            <a
              href={`mailto:${HOTEL_EMAIL}`}
              className="link-line inline-flex items-center gap-2 text-sm text-ivory/70 hover:text-ivory"
            >
              <Mail className="size-4" />
              {HOTEL_EMAIL}
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
