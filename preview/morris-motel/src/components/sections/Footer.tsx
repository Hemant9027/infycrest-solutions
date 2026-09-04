import { ArrowUp, ArrowUpRight, CalendarCheck, Mail, MapPin, Phone } from "lucide-react";
import { ADDRESS, EMAIL, MAPS_URL, NAV_LINKS, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { PalmMark } from "../Brand";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0a231e] text-cream">
      <div className="stripes-dark absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-10 pt-20 sm:px-8 sm:pt-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3">
              <span className="grid size-12 place-items-center rounded-2xl bg-cream text-sea">
                <PalmMark className="size-7" />
              </span>
              <div className="leading-none">
                <p className="font-display text-xl font-semibold">Morris Motel</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-cream/60">
                  Nassau · Bahamas
                </p>
              </div>
            </div>
            <p className="display-tight mt-8 max-w-md font-display text-4xl font-medium leading-[1.1] sm:text-5xl">
              See you in{" "}
              <em className="font-light italic text-sun">Nassau</em>.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#book"
                className="inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3.5 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral-deep"
              >
                <CalendarCheck className="size-4" />
                Check Availability
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3.5 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream hover:text-ink"
              >
                <Mail className="size-4" />
                {EMAIL}
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cream/50">
              Explore
            </p>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/75 transition-colors hover:text-sun"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cream/50">
              Find us
            </p>
            <ul className="mt-5 space-y-4 text-sm text-cream/75">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-sun" />
                <span>
                  {ADDRESS}
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-cream/60 underline-offset-4 transition-colors hover:text-sun hover:underline"
                  >
                    Open in Google Maps <ArrowUpRight className="size-3" />
                  </a>
                </span>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 transition-colors hover:text-cream"
                >
                  <Mail className="size-4 shrink-0 text-sun" />
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="flex items-center gap-3 transition-colors hover:text-cream"
                >
                  <Phone className="size-4 shrink-0 text-sun" />
                  {PHONE_DISPLAY}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t hairline-light pt-7 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Morris Motel · Independent & locally run · Nassau, New
            Providence, Bahamas
          </p>
          <div className="flex items-center gap-5">
            <p>Room types, rates & availability are confirmed directly by email.</p>
            <a
              href="#top"
              aria-label="Back to top"
              className="grid size-10 shrink-0 place-items-center rounded-full border hairline-light text-cream transition-all duration-300 hover:-translate-y-1 hover:bg-cream hover:text-ink"
            >
              <ArrowUp className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
