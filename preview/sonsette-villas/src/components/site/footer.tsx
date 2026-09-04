import { TreePalm } from "lucide-react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "The Villas", href: "#villas" },
  { label: "Ocean", href: "#ocean" },
  { label: "Island Life", href: "#island" },
  { label: "Location", href: "#location" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#booking" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-sand-50/10 bg-lagoon-950 pb-10 text-sand-50">
      <div className="mx-auto w-full max-w-[90rem] px-5 md:px-10">
        <div className="flex flex-col gap-10 py-14 md:flex-row md:items-center md:justify-between">
          <a href="#top" className="font-display text-3xl tracking-tight md:text-4xl">
            <span className="font-semibold">Sonsette</span>{" "}
            <span className="font-light italic text-coral-400">Villas</span>
          </a>
          <nav className="flex flex-wrap gap-x-7 gap-y-3">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] font-semibold tracking-[0.22em] uppercase text-sand-100/60 transition-colors hover:text-sand-50"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-4 border-t border-sand-50/10 pt-8 text-xs text-sand-100/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} Sonsette Villas · Major&apos;s Cay, Crooked Island, The
            Bahamas
          </p>
          <p className="flex items-center gap-2">
            <TreePalm className="h-4 w-4 text-coral-400" strokeWidth={1.5} />
            <span className="font-display italic">A little piece of heaven, kept quiet.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
