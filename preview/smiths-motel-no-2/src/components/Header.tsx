"use client";

import { useEffect, useState } from "react";
import { CalendarCheck, Mail, Menu, Sun, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";

export default function Header() {
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
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-ink/5 bg-sand/85 shadow-[0_10px_40px_-18px_rgba(14,58,52,0.35)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-500 md:px-8 ${
            scrolled ? "py-3" : "py-5"
          }`}
        >
          {/* Logo */}
          <a href="#top" className="group flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-full bg-coral text-cream shadow-lg shadow-coral/30 transition-transform duration-500 group-hover:rotate-90">
              <Sun className="size-5" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="flex items-center gap-1.5">
                <span className="font-display text-xl font-bold text-ink">
                  {SITE.shortName}
                </span>
                <span className="rounded-full bg-ink px-2 py-0.5 text-[10px] font-bold tracking-[0.14em] text-sand uppercase">
                  {SITE.numberBadge}
                </span>
              </span>
              <span className="mt-1 hidden text-[10px] font-semibold tracking-[0.28em] text-ink/50 uppercase sm:block">
                Nassau · Bahamas
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-ink/70 transition-colors hover:text-coral-deep"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2.5">
            <a
              href={SITE.mailto}
              title="Email Us"
              aria-label="Email Us"
              className="hidden size-11 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:border-coral hover:text-coral-deep md:grid"
            >
              <Mail className="size-4.5" />
            </a>
            <a
              href="#booking"
              className="hidden items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-sand shadow-lg shadow-ink/20 transition-all hover:-translate-y-0.5 hover:bg-coral-deep sm:inline-flex"
            >
              <CalendarCheck className="size-4" />
              Check Availability
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid size-11 place-items-center rounded-full border border-ink/15 text-ink lg:hidden"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      {open && (
        <div className="menu-enter fixed inset-0 z-[70] flex flex-col bg-ink text-sand">
          <div className="flex items-center justify-between px-5 py-5 md:px-8">
            <span className="flex items-center gap-2">
              <span className="grid size-10 place-items-center rounded-full bg-coral text-cream">
                <Sun className="size-4.5" />
              </span>
              <span className="font-display text-lg font-bold">
                {SITE.name}
              </span>
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid size-11 place-items-center rounded-full border border-sand/25 text-sand"
            >
              <X className="size-5" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-5 px-8">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="group flex items-baseline gap-4 font-display text-4xl font-semibold transition-colors hover:text-coral"
              >
                <span className="text-sm font-bold text-coral/80 italic">
                  0{i + 1}
                </span>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="space-y-3 px-8 pb-10">
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-coral px-6 py-4 font-bold text-cream"
            >
              <CalendarCheck className="size-4.5" />
              Check Availability
            </a>
            <a
              href={SITE.mailto}
              className="flex items-center justify-center gap-2 rounded-full border border-sand/30 px-6 py-4 font-bold text-sand"
            >
              <Mail className="size-4.5" />
              Email Us
            </a>
            <p className="pt-2 text-center text-sm break-all text-sand/50">
              {SITE.email}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
