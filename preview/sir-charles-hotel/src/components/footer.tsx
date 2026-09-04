import { Mail, MapPin } from "lucide-react";
import ReserveButton from "./reserve-button";
import { Diamond } from "./ui";
import { HOTEL_EMAIL } from "@/lib/images";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#accommodation", label: "Accommodation" },
  { href: "#experience", label: "Experience" },
  { href: "#nassau", label: "Discover Nassau" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="grain relative bg-ink pb-10 pt-20 text-ivory/70">
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a href="#top" className="flex items-center gap-3" aria-label="Sir Charles Hotel — back to top">
              <span className="grid size-10 place-items-center rounded-full border border-ivory/25 text-goldlight">
                <Diamond className="size-2.5" />
              </span>
              <span className="leading-none">
                <span className="block font-display text-2xl font-medium tracking-[0.06em] text-ivory">
                  Sir Charles
                </span>
                <span className="mt-1.5 block text-[9px] font-semibold uppercase tracking-[0.42em] text-ivory/50">
                  Hotel · Nassau
                </span>
              </span>
            </a>
            <p className="mt-6 max-w-sm text-sm leading-relaxed">
              An independent boutique hotel in Nassau, The Bahamas — classic Bahamian hospitality with a
              modern Caribbean touch.
            </p>
            <div className="mt-8">
              <ReserveButton variant="outline" size="sm" />
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.34em] text-ivory/45">Explore</h3>
            <ul className="mt-6 space-y-3.5">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="link-line text-sm text-ivory/75 transition hover:text-ivory">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.34em] text-ivory/45">Contact</h3>
            <ul className="mt-6 space-y-5 text-sm">
              <li>
                <a href={`mailto:${HOTEL_EMAIL}`} className="group flex items-start gap-3.5">
                  <Mail className="mt-0.5 size-4 shrink-0 text-goldlight" />
                  <span className="link-line break-all text-ivory/75 group-hover:text-ivory">{HOTEL_EMAIL}</span>
                </a>
              </li>
              <li className="flex items-start gap-3.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-goldlight" />
                <span className="text-ivory/75">
                  Nassau, New Providence
                  <span className="block">The Bahamas</span>
                </span>
              </li>
            </ul>
            <p className="mt-8 font-display italic text-ivory/50">
              &ldquo;Stay in Nassau. Experience The Bahamas.&rdquo;
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-ivory/10 pt-8 text-[12px] text-ivory/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Sir Charles Hotel. An independent hotel in Nassau, The Bahamas.</p>
          <p>Photography via Pexels</p>
        </div>
      </div>
    </footer>
  );
}
