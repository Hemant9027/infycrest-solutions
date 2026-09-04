import { ArrowUp, Mail, Phone } from "lucide-react";
import { CONTACT } from "@/lib/media";

const NAV = [
  { label: "About", href: "#about" },
  { label: "The Stay", href: "#stay" },
  { label: "Waterfront", href: "#waterfront" },
  { label: "Explore", href: "#explore" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-abyss text-foam/70">
      <div className="mx-auto flex w-full max-w-[92rem] flex-wrap items-start justify-between gap-12 px-5 pb-12 pt-20 sm:px-8 lg:px-12">
        <div className="max-w-xs">
          <p className="font-serif text-3xl text-cream">Millie’s Guest House</p>
          <p className="mt-4 text-sm leading-relaxed text-foam/60">
            A spacious, modern guest house on the water’s edge — hosted
            personally by {CONTACT.host}.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-foam/45">
            The house
          </p>
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="w-fit text-sm transition-colors hover:text-cream"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-foam/45">
            Reach Judy
          </p>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex w-fit items-center gap-2.5 text-sm transition-colors hover:text-cream"
          >
            <Phone className="size-4 text-lagoon" />
            {CONTACT.phone}
          </a>
          <a
            href={CONTACT.emailHref}
            className="inline-flex w-fit items-center gap-2.5 text-sm transition-colors hover:text-cream"
          >
            <Mail className="size-4 text-lagoon" />
            {CONTACT.email}
          </a>
          <p className="text-sm text-foam/60">{CONTACT.location}</p>
        </div>

        <a
          href="#top"
          aria-label="Back to top"
          className="grid size-12 place-items-center rounded-full border border-cream/15 text-cream transition-colors duration-500 hover:bg-cream hover:text-sea"
        >
          <ArrowUp className="size-5" />
        </a>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex w-full max-w-[92rem] flex-wrap items-center justify-between gap-3 px-5 py-6 text-xs text-foam/45 sm:px-8 lg:px-12">
          <p>
            © {year} Millie’s Guest House — {CONTACT.location}
          </p>
          <p>26.54° N — 77.06° W · Photography courtesy of Pexels creators</p>
        </div>
      </div>
    </footer>
  );
}
