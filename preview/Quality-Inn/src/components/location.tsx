import { Compass, Mail, MapPin, Phone, Plane } from "lucide-react";
import { Reveal, RevealScale } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

export function Location() {
  return (
    <section id="location" className="relative overflow-hidden bg-sand-100 py-24 sm:py-32">
      <div className="container-site grid items-start gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            index="07"
            eyebrow="Location"
            title={
              <>
                Find us on the <em className="text-lagoon-600">Queen&rsquo;s Highway</em>
              </>
            }
            description="No complicated directions, no hidden turns — Quality Inn sits right on the Queen’s Highway in Staniard Creek, the green heart of North Andros."
          />

          <div className="mt-10 space-y-4">
            <Reveal delay={0.1}>
              <div className="flex items-start gap-4 rounded-2xl border border-pine-950/8 bg-white/70 p-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-pine-900 text-sand-50">
                  <MapPin className="size-4.5" strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="text-[0.68rem] font-semibold tracking-[0.28em] text-pine-900/50 uppercase">Address</h3>
                  <p className="mt-1.5 font-display text-lg leading-snug font-normal text-pine-950">
                    {site.name}, {site.address.street}
                    <br />
                    {site.address.settlement}, {site.address.island}, {site.address.country}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.17}>
              <div className="flex items-start gap-4 rounded-2xl border border-pine-950/8 bg-white/70 p-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-pine-900 text-sand-50">
                  <Plane className="size-4.5" strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="text-[0.68rem] font-semibold tracking-[0.28em] text-pine-900/50 uppercase">Getting here</h3>
                  <p className="mt-1.5 max-w-md text-[0.95rem] leading-relaxed text-pine-900/70">
                    Most visitors fly into San Andros Airport (SAQ) on North Andros — from there it’s an easy drive
                    along the Queen’s Highway to Staniard Creek.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="flex items-start gap-4 rounded-2xl bg-pine-950 p-5 text-sand-50 shadow-card">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-lagoon-600 text-sand-50">
                  <Compass className="size-4.5" strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="text-[0.68rem] font-semibold tracking-[0.28em] text-tide-300 uppercase">Need a hand?</h3>
                  <p className="mt-1.5 max-w-md text-[0.95rem] leading-relaxed text-sand-50/75">
                    Call ahead and we’ll help you time your arrival perfectly.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-[0.85rem] font-medium">
                    <a href={site.contact.phoneHref} className="inline-flex items-center gap-1.5 text-copper-300 transition-colors hover:text-copper-400">
                      <Phone className="size-3.5" /> {site.contact.phoneDisplay}
                    </a>
                    <a href={site.contact.emailHref} className="inline-flex items-center gap-1.5 text-copper-300 transition-colors hover:text-copper-400">
                      <Mail className="size-3.5" /> Email us
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <RevealScale className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-[2rem] border border-pine-950/10 shadow-soft">
            <iframe
              title="Map showing Staniard Creek, North Andros, The Bahamas"
              src={site.mapEmbed}
              className="h-[24rem] w-full sm:h-[30rem] lg:h-[34rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-start p-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-pine-950/90 px-4 py-2 text-[0.68rem] font-semibold tracking-[0.22em] text-sand-50 uppercase shadow-card backdrop-blur-sm">
                <MapPin className="size-3.5 text-copper-300" />
                Staniard Creek · {site.coordinates}
              </span>
            </div>
          </div>
        </RevealScale>
      </div>
    </section>
  );
}
