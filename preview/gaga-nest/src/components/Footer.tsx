"use client";

import { Bird, Mail, MapPin, Phone } from "lucide-react";
import { scrollToId } from "@/lib/scroll";

const LINKS = [
  { id: "about", label: "About" },
  { id: "rooms", label: "Rooms & Suite" },
  { id: "comforts", label: "Comforts" },
  { id: "discover", label: "Discover Inagua" },
  { id: "gallery", label: "Gallery" },
  { id: "location", label: "Location" },
];

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-ink-deep text-cream">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-coral text-cream">
                <Bird className="h-5 w-5" strokeWidth={1.7} />
              </span>
              <div>
                <p className="font-display text-2xl font-semibold leading-none">
                  Gaga’s Nest
                </p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-cream/50">
                  Feel at home in Inagua
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-cream/55">
              A five-unit, ranch-style guesthouse on the quiet northern side of
              Matthew Town — family-run by Mr. Kevin Hanchell.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-cream/40">
              Wander the site
            </p>
            <ul className="mt-5 space-y-2.5">
              {LINKS.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollToId(l.id)}
                    className="link-line text-[14px] font-medium text-cream/70 transition-colors hover:text-flamingo"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-cream/40">
              Find & reach us
            </p>
            <ul className="mt-5 space-y-4 text-[14px] text-cream/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-flamingo" />
                <span>
                  East Street South, Matthew Town
                  <br />
                  Inagua, The Bahamas
                </span>
              </li>
              <li>
                <a
                  href="tel:+12423391666"
                  className="flex items-center gap-3 transition-colors hover:text-flamingo"
                >
                  <Phone className="h-4 w-4 shrink-0 text-flamingo" />
                  +1 (242) 339-1666
                </a>
              </li>
              <li>
                <a
                  href="mailto:gagas.nest@outlook.com"
                  className="flex items-center gap-3 transition-colors hover:text-flamingo"
                >
                  <Mail className="h-4 w-4 shrink-0 text-flamingo" />
                  gagas.nest@outlook.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-cream/10 pt-7 text-[12px] text-cream/40 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Gaga’s Nest · Matthew Town, Inagua,
            The Bahamas
          </p>
          <p className="font-display italic text-cream/55">
            “The quiet island keeps its promises.”
          </p>
        </div>
      </div>
    </footer>
  );
}
