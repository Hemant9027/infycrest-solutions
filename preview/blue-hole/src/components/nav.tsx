"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { CONTACT, NAV_LINKS } from "@/lib/site";

function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="29" fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="2" />
      <path d="M14 36c4-5 8-5 12 0s8 5 12 0 8-5 12 0" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
      <path d="M18 26c3.5-4 7-4 10.5 0s7 4 10.5 0 7-4 10.5 0" fill="none" stroke="currentColor" strokeOpacity="0.65" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M22 46c2.5-3 5-3 7.5 0s5 3 7.5 0 5-3 7.5 0" fill="none" stroke="currentColor" strokeOpacity="0.45" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export default function Nav() {
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

  const dark = !scrolled || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          open
            ? "text-shell"
            : scrolled
              ? "bg-shell/90 text-abyss shadow-[0_1px_0_rgba(6,38,46,0.08)] backdrop-blur-md"
              : "text-shell"
        }`}
      >
        <div className="mx-auto flex h-[4.5rem] max-w-[90rem] items-center justify-between px-5 sm:px-8">
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="group flex items-center gap-3"
            aria-label="Blue Hole Villas — back to top"
          >
            <LogoMark
              className={`h-10 w-10 transition-colors duration-300 ${
                dark ? "text-aqua" : "text-lagoon"
              }`}
            />
            <span className="leading-none">
              <span className="block font-display text-lg font-semibold tracking-wide">
                Blue Hole Villas
              </span>
              <span
                className={`mt-1 block text-[0.6rem] font-semibold uppercase tracking-[0.3em] transition-colors duration-300 ${
                  dark ? "text-aqua/80" : "text-lagoon"
                }`}
              >
                South Andros · Bahamas
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-sweep text-[0.82rem] font-medium tracking-wide opacity-90 transition-opacity hover:opacity-100"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className={`group inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-[0.82rem] font-semibold transition-all duration-300 ${
                dark
                  ? "bg-sand text-abyss hover:bg-aqua"
                  : "bg-abyss text-shell hover:bg-lagoon"
              }`}
            >
              Book your stay
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-current/20 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-abyss text-shell transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex flex-1 flex-col justify-center px-8 pt-20">
          <nav aria-label="Mobile">
            <ul className="space-y-1">
              {NAV_LINKS.map((link, i) => (
                <li
                  key={link.href}
                  className={`overflow-hidden transition-all duration-700 ${
                    open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                  style={{ transitionDelay: `${120 + i * 60}ms` }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-4 py-2"
                  >
                    <span className="text-xs font-semibold text-lagoon">
                      0{i + 1}
                    </span>
                    <span className="font-display text-4xl font-light transition-colors group-hover:text-aqua">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-sand px-7 py-3.5 text-sm font-semibold text-abyss transition-colors hover:bg-aqua"
          >
            Book your stay
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <div
          className={`border-t border-shell/10 px-8 py-6 transition-all delay-300 duration-700 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        >
          <a href={CONTACT.phoneHref} className="flex items-center gap-3 text-sm text-shell/80">
            <Phone className="h-4 w-4 text-aqua" />
            {CONTACT.phoneDisplay} — {CONTACT.host}
          </a>
        </div>
      </div>
    </>
  );
}
