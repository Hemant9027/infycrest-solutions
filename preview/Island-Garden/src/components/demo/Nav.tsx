"use client";

import { useEffect, useState } from "react";
import { Menu, Palmtree, X } from "lucide-react";
import type { NavLink } from "@/demos/types";

type NavProps = {
  name: string;
  shortName: string;
  links: NavLink[];
  ctaLabel: string;
  ctaId: string;
};

export function Nav({ name, shortName, links, ctaLabel, ctaId }: NavProps) {
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

  const solid = scrolled || open;

  return (
    <>
      <nav
        aria-label="Primary"
        className={`fixed inset-x-0 top-0 z-[80] transition-all duration-500 ${
          solid
            ? "bg-cream/90 text-ink shadow-[0_1px_0_rgba(22,34,27,0.08)] backdrop-blur-xl"
            : "bg-transparent text-cream"
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 md:h-[4.5rem] lg:px-14">
          <a href="#top" className="group flex items-center gap-3" aria-label={`${name} — back to top`}>
            <span className="grid size-9 place-items-center rounded-full bg-coral text-cream transition-transform duration-500 group-hover:rotate-12">
              <Palmtree size={17} strokeWidth={2.2} />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-[1.35rem] italic">{shortName}</span>
              <span className="text-[9px] font-bold uppercase tracking-[0.38em] opacity-70">Nassau · Bahamas</span>
            </span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="u-link text-[12px] font-bold uppercase tracking-[0.16em] opacity-90 transition-opacity hover:opacity-100"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`#${ctaId}`}
              className="hidden items-center rounded-full bg-coral px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.16em] text-cream transition-colors duration-300 hover:bg-coral-deep md:inline-flex"
            >
              {ctaLabel}
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={`grid size-10 place-items-center rounded-full border transition-colors lg:hidden ${
                solid ? "border-ink/15 hover:bg-ink/5" : "border-cream/30 hover:bg-cream/10"
              }`}
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-[95] flex flex-col bg-pine-ink text-cream transition-opacity duration-400 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="flex h-16 items-center justify-between px-5 sm:px-8">
          <span className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-full bg-coral text-cream">
              <Palmtree size={17} />
            </span>
            <span className="font-display text-[1.35rem] italic">{shortName}</span>
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="grid size-10 place-items-center rounded-full border border-cream/25 hover:bg-cream/10"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex flex-1 flex-col justify-center gap-1 px-6 sm:px-10">
          {links.map((link, i) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className={`group flex items-baseline gap-4 border-b border-cream/10 py-4 ${open ? "animate-fade-up" : ""}`}
              style={{ animationDelay: `${80 + i * 60}ms` }}
            >
              <span className="font-display text-sm italic text-coral">0{i + 1}</span>
              <span className="font-display text-4xl font-medium transition-transform duration-300 group-hover:translate-x-2 sm:text-5xl">
                {link.label}
              </span>
            </a>
          ))}
        </div>

        <div className="px-6 pb-10 sm:px-10">
          <a
            href={`#${ctaId}`}
            onClick={() => setOpen(false)}
            className="flex w-full items-center justify-center rounded-full bg-coral py-4 text-[13px] font-bold uppercase tracking-[0.18em] text-cream"
          >
            {ctaLabel}
          </a>
          <p className="mt-5 text-center text-[11px] uppercase tracking-[0.28em] text-cream/50">{name}</p>
        </div>
      </div>
    </>
  );
}
