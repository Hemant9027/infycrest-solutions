"use client";

import { useEffect, useState } from "react";
import { CalendarCheck, Mail, Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import { BUSINESS, NAV_LINKS } from "@/data/site";

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

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 transition-all duration-500 sm:px-6 ${
          scrolled
            ? "mt-0 h-16 bg-parchment/90 shadow-card backdrop-blur-md md:mt-3 md:h-16 md:rounded-full md:px-5 md:ring-1 md:ring-line"
            : "h-20 bg-transparent"
        }`}
      >
        <Logo />

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="u-link text-sm font-semibold text-ink-2 transition-colors hover:text-sea"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#check-availability"
            className="hidden items-center gap-2 rounded-full bg-coral px-5 py-2.5 text-sm font-bold text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral-deep sm:inline-flex"
          >
            <CalendarCheck className="h-4 w-4" aria-hidden />
            Check Availability
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className={`grid h-11 w-11 place-items-center rounded-full transition-colors lg:hidden ${
              scrolled
                ? "bg-sea-soft text-sea-deep"
                : "bg-white/15 text-white backdrop-blur-sm"
            }`}
          >
            <Menu className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 flex flex-col bg-sea-dusk/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={close}
      >
        <div
          className={`flex h-full w-full max-w-sm flex-col gap-2 overflow-y-auto bg-parchment p-6 shadow-soft transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            open ? "translate-x-0" : "translate-x-full"
          } ml-auto`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mb-6 flex items-center justify-between">
            <Logo />
            <button
              type="button"
              onClick={close}
              aria-label="Close menu"
              className="grid h-11 w-11 place-items-center rounded-full bg-sea-soft text-sea-deep"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
          </div>

          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              className={`rounded-2xl px-4 py-3.5 font-display text-2xl font-medium text-ink transition-all duration-500 hover:bg-sea-soft hover:text-sea-deep ${
                open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
              }`}
              style={{ transitionDelay: `${80 + i * 50}ms` }}
            >
              {link.label}
            </a>
          ))}

          <div className="mt-auto space-y-3 pt-8">
            <a
              href="#check-availability"
              onClick={close}
              className="flex items-center justify-center gap-2 rounded-full bg-coral px-6 py-4 text-base font-bold text-white shadow-card transition-colors hover:bg-coral-deep"
            >
              <CalendarCheck className="h-5 w-5" aria-hidden />
              Check Availability
            </a>
            <a
              href={`mailto:${BUSINESS.email}`}
              className="flex items-center justify-center gap-2 rounded-full border-2 border-sea px-6 py-4 text-base font-bold text-sea-deep transition-colors hover:bg-sea-soft"
            >
              <Mail className="h-5 w-5" aria-hidden />
              Email Us Directly
            </a>
            <p className="pt-2 text-center text-xs font-semibold tracking-wide text-ink-3">
              {BUSINESS.location} · Independent motel
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
