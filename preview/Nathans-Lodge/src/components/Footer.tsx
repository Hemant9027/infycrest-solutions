import { Waves, ArrowUpRight } from "lucide-react";

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

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-deep text-shell">
      <div className="border-t border-seafoam/12">
        <div className="mx-auto max-w-[90rem] px-5 pb-10 pt-16 sm:px-8 lg:px-12 lg:pt-20">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
            {/* Wordmark + CTAs */}
            <div>
              <a href="#top" className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full border border-seafoam/30 text-seafoam">
                  <Waves className="size-4" strokeWidth={1.5} />
                </span>
                <span className="font-display text-2xl font-light tracking-tight">
                  Nathan&rsquo;s Lodge
                </span>
              </a>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-shell/55">
                A peaceful fishing-and-island lodge on South Andros, The
                Bahamas — for travelers seeking an authentic escape and days
                measured in tides.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-shell px-6 py-3 text-[10px] font-bold uppercase tracking-[0.24em] text-deep transition-colors duration-300 hover:bg-brass"
                >
                  Plan Your Stay
                  <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-shell/30 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.24em] text-shell transition-all duration-300 hover:border-shell hover:bg-shell/10"
                >
                  Contact the Lodge
                </a>
              </div>
            </div>

            {/* Explore */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-seafoam/60">
                Explore
              </p>
              <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
                {LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="link-draw text-sm text-shell/70 transition-colors hover:text-shell"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visit */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-seafoam/60">
                Visit
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-shell/70">
                <li>South Andros</li>
                <li>The Bahamas</li>
                <li className="text-shell/45">24.00° N, 77.75° W</li>
                <li className="text-shell/45">
                  Arrive via Congo Town (TZN)
                </li>
              </ul>
            </div>
          </div>

          {/* Giant ghost wordmark */}
          <p
            aria-hidden
            className="pointer-events-none mt-16 select-none text-center font-display text-[clamp(3.4rem,12vw,11rem)] font-light italic leading-none text-seafoam/[0.07]"
          >
            South Andros
          </p>

          <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-seafoam/12 pt-6 text-[10px] uppercase tracking-[0.28em] text-shell/40 sm:flex-row">
            <span>© {year} Nathan&rsquo;s Lodge</span>
            <span>Slow island days — more soon</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
