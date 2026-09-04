import Image from "next/image";
import { Mail, Phone, Shell } from "lucide-react";
import { BUSINESS, IMG, NAV_LINKS } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-abyss-950">
      {/* Closing image band */}
      <div className="relative h-[26rem] overflow-hidden sm:h-[30rem]">
        <Image
          src={IMG.duskPier}
          alt="Dusk settling over a pier and calm harbour water"
          fill
          sizes="100vw"
          placeholder="blur"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-abyss-950/30 via-abyss-950/35 to-abyss-950" />
        <div className="grain absolute inset-0" />
        <div className="relative z-10 mx-auto flex h-full max-w-[88rem] flex-col items-center justify-center px-5 text-center">
          <p className="font-display max-w-3xl text-3xl leading-tight font-medium text-balance text-sand-50 italic sm:text-4xl lg:text-5xl">
            The harbour is waiting.
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-sand-50/75">
            Send your dates, pick up the phone, or just start dreaming —
            we&apos;ll handle the rest.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center rounded-full bg-coral-500 px-8 py-4 text-sm font-bold tracking-wide text-sand-50 shadow-[0_18px_50px_-12px_rgba(226,116,77,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral-600"
          >
            Contact Marshall&apos;s Guest House
          </a>
        </div>
      </div>

      {/* Footer body */}
      <div className="border-t border-sand-50/10">
        <div className="mx-auto grid max-w-[88rem] gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-full bg-sand-50/10 text-sand-50 ring-1 ring-sand-50/20">
                <Shell className="size-5" strokeWidth={1.6} />
              </span>
              <div className="leading-none">
                <p className="font-display text-2xl font-medium italic text-sand-50">
                  Marshall&apos;s
                </p>
                <p className="mt-1.5 text-[9px] font-bold tracking-[0.32em] text-lagoon-300 uppercase">
                  Guest House · Exuma
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-sand-50/60">
              A family-run guest house overlooking Elizabeth Harbour — eight
              air-conditioned, non-smoking guestrooms in the heart of George Town,
              hosted by {BUSINESS.host}.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="text-[11px] font-bold tracking-[0.28em] text-lagoon-300 uppercase">
              Explore
            </p>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-semibold text-sand-50/70 transition-colors hover:text-sand-50"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="text-sm font-semibold text-coral-400 transition-colors hover:text-coral-500">
                  Book / Check Availability
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <p className="text-[11px] font-bold tracking-[0.28em] text-lagoon-300 uppercase">
              Visit & Contact
            </p>
            <address className="mt-5 text-sm leading-relaxed text-sand-50/70 not-italic">
              {BUSINESS.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <div className="mt-6 space-y-3">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center gap-2.5 text-sm font-semibold text-sand-50/80 transition-colors hover:text-sand-50"
              >
                <Phone className="size-4 text-lagoon-300" strokeWidth={2} />
                {BUSINESS.phoneDisplay}
              </a>
              <a
                href={BUSINESS.emailHref}
                className="flex items-center gap-2.5 text-sm font-semibold break-all text-sand-50/80 transition-colors hover:text-sand-50"
              >
                <Mail className="size-4 shrink-0 text-lagoon-300" strokeWidth={2} />
                {BUSINESS.email}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-sand-50/10">
          <div className="mx-auto flex max-w-[88rem] flex-col items-center justify-between gap-3 px-5 py-6 text-[12px] text-sand-50/45 sm:flex-row sm:px-8">
            <p>© {year} Marshall&apos;s Guest House, George Town, Great Exuma.</p>
            <p>Look for the palms along Queen&apos;s Highway.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
