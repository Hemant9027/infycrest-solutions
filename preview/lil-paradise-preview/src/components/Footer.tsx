import { ArrowUp, Mail, MapPin, Palmtree } from "lucide-react";
import { BUSINESS } from "../data/site";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Stay", href: "#stay" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-cream">
      <div className="dotwave pointer-events-none absolute right-10 top-8 h-20 w-40 text-aqua/40" />
      <div className="mx-auto max-w-6xl px-5 pb-10 pt-20 sm:px-8">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-start">
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-full bg-sun text-ink">
                <Palmtree className="size-5.5" strokeWidth={2.2} />
              </span>
              <span className="font-display text-2xl font-semibold tracking-tight">
                {BUSINESS.name}
              </span>
            </a>
            <p className="mt-5 text-sm leading-relaxed text-cream/65">
              A cozy, independent tropical getaway in Nassau — the personal way to do
              The Bahamas. Small on size, big on warmth.
            </p>
            <div className="mt-6 flex flex-col gap-2.5 text-sm text-cream/75">
              <span className="inline-flex items-center gap-2.5">
                <MapPin className="size-4 text-aqua" /> {BUSINESS.location}
              </span>
              <a
                href={BUSINESS.mailto}
                className="inline-flex items-center gap-2.5 transition-colors hover:text-sun"
              >
                <Mail className="size-4 text-aqua" /> {BUSINESS.email}
              </a>
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-x-14 gap-y-3.5 sm:grid-cols-3">
            {NAV.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-bold text-cream/70 transition-colors hover:text-sun"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#top"
            className="group inline-flex h-fit items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-xs font-extrabold uppercase tracking-[0.2em] text-cream/80 transition-colors hover:border-aqua hover:text-aqua"
          >
            Back to top
            <ArrowUp className="size-4 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="mt-16 select-none overflow-hidden" aria-hidden>
          <p className="whitespace-nowrap pb-[0.14em] text-center font-display text-[13.5vw] font-medium italic leading-[0.9] tracking-tight text-white/6 md:text-[9rem]">
            lil paradise
          </p>
        </div>

        <div className="mt-4 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-7 text-xs text-cream/45 sm:flex-row">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <p>
            Photography courtesy of{" "}
            <a
              href="https://www.pexels.com"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-aqua/60 underline-offset-2 transition-colors hover:text-aqua"
            >
              Pexels
            </a>{" "}
            contributors
          </p>
        </div>
      </div>
    </footer>
  );
}
