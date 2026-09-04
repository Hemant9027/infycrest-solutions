import { ArrowUp, Mail, MapPin } from "lucide-react";
import Hibiscus from "@/components/Hibiscus";
import { CONTACT_MAILTO, EMAIL, LOCATION } from "@/lib/site";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Accommodation", href: "#accommodation" },
  { label: "Guest Experience", href: "#experience" },
  { label: "Explore Nassau", href: "#explore" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-sand-50/10 bg-sea-950 text-sand-200">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-3">
              <Hibiscus className="h-10 w-10 text-hibiscus-400" />
              <span className="leading-none">
                <span className="block font-display text-2xl tracking-tight text-sand-50">
                  Hibiscus Inn
                </span>
                <span className="mt-1.5 block text-[0.58rem] font-semibold uppercase tracking-[0.3em] text-sand-100/50">
                  Guest House · Nassau · Bahamas
                </span>
              </span>
            </a>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-sand-100/60">
              A small, friendly guest house on the island of New Providence —
              simple comforts, warm welcomes and island days at your pace.
            </p>
          </div>

          <nav aria-label="Footer">
            <h4 className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-hibiscus-300">
              Wander
            </h4>
            <ul className="mt-5 space-y-2.5">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="inline-block text-sm text-sand-100/70 transition-all duration-300 hover:translate-x-1 hover:text-sand-50"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h4 className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-hibiscus-300">
              Say hello
            </h4>
            <a
              href={CONTACT_MAILTO}
              className="mt-5 flex items-start gap-3 text-sm text-sand-100/70 transition-colors hover:text-sand-50"
            >
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-hibiscus-300" />
              <span className="break-all">{EMAIL}</span>
            </a>
            <p className="mt-4 flex items-start gap-3 text-sm text-sand-100/70">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-hibiscus-300" />
              {LOCATION}
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-5 border-t border-sand-50/10 pt-7 text-xs text-sand-100/45">
          <p>
            © 2026 Hibiscus Inn Guest House · {LOCATION} · Island time, always.
          </p>
          <div className="flex items-center gap-5">
            <span>Photography via Pexels</span>
            <a
              href="#top"
              className="group inline-flex items-center gap-2 text-sand-100/70 transition-colors hover:text-sand-50"
            >
              Back to top
              <span className="grid h-8 w-8 place-items-center rounded-full border border-sand-50/20 transition-colors group-hover:border-hibiscus-400 group-hover:bg-hibiscus-500">
                <ArrowUp className="h-3.5 w-3.5" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
