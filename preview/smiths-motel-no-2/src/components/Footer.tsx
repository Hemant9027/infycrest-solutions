import { Mail, Sun } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden bg-ink-deep text-sand/70">
      <div className="mx-auto max-w-7xl px-5 pt-16 md:px-8">
        <div className="flex flex-wrap items-start justify-between gap-10">
          <div className="max-w-xs">
            <a href="#top" className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-full bg-coral text-cream">
                <Sun className="size-5" />
              </span>
              <span className="flex items-center gap-1.5">
                <span className="font-display text-xl font-bold text-sand">
                  {SITE.shortName}
                </span>
                <span className="rounded-full bg-sand px-2 py-0.5 text-[10px] font-bold tracking-[0.14em] text-ink uppercase">
                  {SITE.numberBadge}
                </span>
              </span>
            </a>
            <p className="mt-5 text-sm leading-relaxed text-sand/55">
              An independent motel in {SITE.location} — simple, friendly and
              refreshingly affordable. The second Smith&rsquo;s, with a spirit
              all its own.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-sand/60 transition-colors hover:text-coral"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-sand/40 uppercase">
              Say hello
            </p>
            <a
              href={SITE.mailto}
              className="mt-3 inline-flex items-center gap-2 font-display text-lg font-semibold break-all text-sand transition-colors hover:text-coral"
            >
              <Mail className="size-4.5 shrink-0 text-coral" />
              {SITE.email}
            </a>
            <p className="mt-2 text-sm text-sand/50">{SITE.location}</p>
          </div>
        </div>

        {/* ghost numeral */}
        <div
          aria-hidden
          className="text-stroke-sand pointer-events-none mt-10 -mb-[6vw] text-center font-display text-[34vw] leading-[0.8] font-black italic select-none md:text-[22vw]"
        >
          No. 2
        </div>

        <div className="relative border-t border-sand/10 py-6">
          <div className="flex flex-col items-center justify-between gap-3 text-xs text-sand/45 md:flex-row">
            <p>
              © {new Date().getFullYear()} {SITE.name} · {SITE.type} ·{" "}
              {SITE.location}
            </p>
            <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
              <span>Same welcome as No. 1 — brand-new breeze.</span>
              <span aria-hidden className="size-1 rounded-full bg-coral" />
              <span>Island scenery photos via Pexels.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
