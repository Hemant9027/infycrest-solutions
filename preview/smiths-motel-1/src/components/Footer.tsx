import { Mail, MapPin } from "lucide-react";
import Logo from "@/components/Logo";
import { BUSINESS, NAV_LINKS } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-sand">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="flex flex-col items-start gap-4">
          <Logo tone="dark" />
          <p className="max-w-xs text-sm leading-relaxed text-sand/65">
            {BUSINESS.name} — an independent motel in {BUSINESS.location}.
            Simple, comfortable, affordable. Arranged directly with us.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-2.5">
          <p className="mb-1 text-xs font-bold tracking-[0.25em] text-sun uppercase">
            Explore
          </p>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="u-link w-fit text-sm font-semibold text-sand/75 hover:text-sand"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#check-availability"
            className="u-link w-fit text-sm font-bold text-sun"
          >
            Check Availability
          </a>
        </nav>

        <div className="flex flex-col gap-4">
          <p className="mb-1 text-xs font-bold tracking-[0.25em] text-sun uppercase">
            Reach us
          </p>
          <a
            href={`mailto:${BUSINESS.email}`}
            className="flex items-start gap-3 text-sm font-semibold text-sand/75 transition-colors hover:text-sand"
          >
            <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sun" aria-hidden />
            <span className="break-all">{BUSINESS.email}</span>
          </a>
          <p className="flex items-start gap-3 text-sm font-semibold text-sand/75">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sun" aria-hidden />
            {BUSINESS.island}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-6 text-center sm:flex-row sm:px-8 sm:text-left">
          <p className="text-xs font-semibold text-sand/55">
            © {year} {BUSINESS.name} · {BUSINESS.location}
          </p>
          <p className="text-xs font-semibold text-sand/55">
            Independent motel · Every enquiry answered personally.
          </p>
        </div>
      </div>
    </footer>
  );
}
