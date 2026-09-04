"use client";

import { useEffect, useState } from "react";
import { Menu, X, Waves } from "lucide-react";

const LINKS = [
  { label: "The Lodge", href: "#about" },
  { label: "Stay", href: "#stay" },
  { label: "Island Life", href: "#island-life" },
  { label: "Adventures", href: "#adventures" },
  { label: "Beach", href: "#beach" },
  { label: "Food", href: "#food" },
  { label: "Gallery", href: "#gallery" },
  { label: "Find Us", href: "#location" },
];

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

  const dark = !scrolled && !open; // over hero

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[80] transition-all duration-500 ${
          scrolled
            ? "border-b border-ink/10 bg-shell/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[90rem] items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a
            href="#top"
            className={`group flex items-center gap-3 transition-colors ${
              dark ? "text-shell" : "text-ink"
            }`}
            onClick={() => setOpen(false)}
          >
            <span
              className={`grid size-9 place-items-center rounded-full border transition-colors ${
                dark
                  ? "border-seafoam/40 text-seafoam"
                  : "border-ink/20 text-pine"
              }`}
            >
              <Waves className="size-4" strokeWidth={1.5} />
            </span>
            <span className="leading-none">
              <span className="block font-display text-lg font-medium tracking-tight">
                Nathan&rsquo;s Lodge
              </span>
              <span
                className={`mt-1 block text-[9px] font-semibold uppercase tracking-[0.4em] ${
                  dark ? "text-seafoam/80" : "text-drift"
                }`}
              >
                South Andros
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`link-draw text-[11px] font-semibold uppercase tracking-[0.22em] transition-colors ${
                  dark
                    ? "text-shell/85 hover:text-shell"
                    : "text-ink/70 hover:text-ink"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className={`hidden rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.22em] transition-all duration-300 sm:inline-block ${
                dark
                  ? "bg-shell text-deep hover:bg-brass hover:text-deep"
                  : "bg-deep text-shell hover:bg-brass hover:text-deep"
              }`}
            >
              Plan Your Stay
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className={`grid size-10 place-items-center rounded-full border transition-colors lg:hidden ${
                dark
                  ? "border-seafoam/40 text-shell"
                  : "border-ink/20 text-ink"
              }`}
            >
              {open ? (
                <X className="size-5" strokeWidth={1.5} />
              ) : (
                <Menu className="size-5" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[70] flex flex-col bg-deep transition-all duration-500 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex flex-1 flex-col justify-center gap-1 px-8">
          {LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="group flex items-baseline gap-4 border-b border-seafoam/10 py-4"
              style={{
                transition: "opacity 0.6s ease, transform 0.6s ease",
                transitionDelay: open ? `${120 + i * 50}ms` : "0ms",
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(18px)",
              }}
            >
              <span className="text-[10px] font-semibold tracking-[0.3em] text-brass">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-3xl font-light text-shell transition-colors group-hover:text-seafoam">
                {link.label}
              </span>
            </a>
          ))}
        </div>
        <div className="px-8 pb-10">
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block rounded-full bg-brass py-4 text-center text-xs font-bold uppercase tracking-[0.28em] text-deep"
          >
            Plan Your Stay
          </a>
          <p className="mt-5 text-center text-[10px] uppercase tracking-[0.3em] text-seafoam/50">
            South Andros — The Bahamas
          </p>
        </div>
      </div>
    </>
  );
}
