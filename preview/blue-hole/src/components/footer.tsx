import { Mail, MapPin, Phone } from "lucide-react";
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

export default function Footer() {
  return (
    <footer className="border-t border-shell/10 bg-abyss text-shell">
      <div className="mx-auto max-w-[90rem] px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="#top" className="flex items-center gap-3">
              <LogoMark className="h-11 w-11 text-aqua" />
              <span className="leading-none">
                <span className="block font-display text-xl font-semibold">Blue Hole Villas</span>
                <span className="mt-1 block text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-aqua/80">
                  South Andros · Bahamas
                </span>
              </span>
            </a>
            <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-shell/60">
              Secluded villas on a private beach in Congo Town — turquoise
              water, blue holes across the street, and the wild, quiet beauty
              of South Andros.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-shell/50">
              Explore
            </h3>
            <ul className="mt-5 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="link-sweep text-[0.95rem] text-shell/85">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="link-sweep text-[0.95rem] text-shell/85">
                  Contact & Booking
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-shell/50">
              Say hello
            </h3>
            <ul className="mt-5 space-y-4 text-[0.95rem]">
              <li>
                <a href={CONTACT.phoneHref} className="group flex items-center gap-3 text-shell/85">
                  <Phone className="h-4 w-4 text-aqua" />
                  <span className="link-sweep">{CONTACT.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={CONTACT.emailHref} className="group flex items-center gap-3 text-shell/85">
                  <Mail className="h-4 w-4 text-aqua" />
                  <span className="link-sweep break-all">{CONTACT.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-shell/85">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-aqua" />
                <span>
                  {CONTACT.addressLines[0]}
                  <br />
                  <span className="text-shell/55">{CONTACT.addressLines[1]}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-shell/10 pt-8 text-[0.8rem] text-shell/45 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Blue Hole Villas · Hosted by {CONTACT.host}</p>
          <p className="tracking-wide">
            Queen’s Highway · Congo Town · South Andros · {CONTACT.coordinates}
          </p>
        </div>
      </div>
    </footer>
  );
}
