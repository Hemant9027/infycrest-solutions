import { Mail, Phone, TreePalm } from "lucide-react";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-sand-50/10 bg-pine-950 pt-16 pb-8 text-sand-50">
      <div className="container-site">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="#top" className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-full bg-sand-50 text-pine-950">
                <TreePalm className="size-5" strokeWidth={1.6} />
              </span>
              <span className="leading-tight">
                <span className="block font-display text-xl font-normal">{site.name}</span>
                <span className="block text-[0.62rem] tracking-[0.26em] text-sand-50/55 uppercase">
                  Staniard Creek · North Andros
                </span>
              </span>
            </a>
            <p className="mt-6 max-w-sm text-[0.925rem] leading-relaxed text-sand-50/60">
              {site.tagline}. Relaxed rooms, an easygoing Bar&nbsp;&amp;&nbsp;Lounge, and beaches and outdoor
              adventure within easy reach — right on the {site.address.street}.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-[0.68rem] font-semibold tracking-[0.3em] text-tide-300 uppercase">Explore</h3>
            <ul className="mt-5 space-y-2.5">
              {[...navLinks, { label: "Contact", href: "#contact" }].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="link-slide text-[0.92rem] text-sand-50/65 transition-colors hover:text-sand-50">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-[0.68rem] font-semibold tracking-[0.3em] text-tide-300 uppercase">Contact</h3>
            <ul className="mt-5 space-y-3 text-[0.92rem] text-sand-50/65">
              <li className="leading-relaxed">
                {site.address.street}, {site.address.settlement}
                <br />
                {site.address.island}, {site.address.country}
              </li>
              <li>
                <a href={site.contact.phoneHref} className="inline-flex items-center gap-2 transition-colors hover:text-copper-300">
                  <Phone className="size-4 text-tide-300" strokeWidth={1.8} />
                  {site.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={site.contact.emailHref} className="inline-flex items-center gap-2 break-all transition-colors hover:text-copper-300">
                  <Mail className="size-4 shrink-0 text-tide-300" strokeWidth={1.8} />
                  {site.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-sand-50/10 pt-7 text-[0.78rem] text-sand-50/45 sm:flex-row">
          <p>
            © {year} {site.name} — {site.contact.host}. All rights reserved.
          </p>
          <p className="inline-flex items-center gap-2 tracking-[0.18em] uppercase">
            <TreePalm className="size-3.5 text-copper-300" strokeWidth={1.8} />
            The Garden of Andros
          </p>
        </div>
      </div>
    </footer>
  );
}
