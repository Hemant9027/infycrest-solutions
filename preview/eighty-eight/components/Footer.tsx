"use client";

import { Phone } from "lucide-react";
import { restaurant, navLinks } from "@/data/restaurant";

export default function Footer() {
  return (
    <footer className="relative bg-[#0c0b0a] border-t border-ivory/10 pt-20 pb-10">
      <div className="mx-auto max-w-shell px-5 sm:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="circle-motif h-9 w-9 flex items-center justify-center text-[11px] font-semibold text-gold">
                88
              </span>
              <span className="font-display tracking-[0.22em] text-xl text-ivory">EIGHTY EIGHT</span>
            </div>
            <p className="mt-5 text-sm text-stonewarm leading-relaxed">
              Chinese Restaurant · Moka, Mauritius
              <br />
              {restaurant.area}
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <p className="eyebrow text-[10px] text-gold mb-5">Explore</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 max-w-xs">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-stonewarm hover:text-gold transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="eyebrow text-[10px] text-gold mb-5">Contact</p>
            <a
              href={restaurant.phoneTel}
              className="inline-flex items-center gap-2 text-ivory hover:text-gold transition-colors"
            >
              <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
              {restaurant.phoneDisplay}
            </a>
            <p className="mt-3 text-sm text-stonewarm">{restaurant.location}</p>
            <p className="mt-3 text-xs text-stonewarm/60">{restaurant.openingHours}</p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ivory/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stonewarm/70">
            © 2026 Eighty Eight Chinese Restaurant. All rights reserved.
          </p>
          <p className="eyebrow text-[10px] text-gold/70">Made with flavour.</p>
        </div>
      </div>
    </footer>
  );
}
