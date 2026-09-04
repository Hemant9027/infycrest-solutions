import { Compass } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { IMG } from "@/lib/images";

export default function Explore() {
  return (
    <section
      id="explore"
      className="relative scroll-mt-24 overflow-hidden bg-sand-50 py-24 md:py-36"
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Explore Nassau"
            title={
              <>
                Out and about in{" "}
                <em className="italic text-sea-600">Nassau</em>
              </>
            }
            lede="Powder-soft beaches, pastel streets, market chatter and harbour light — New Providence is made for wandering, and we love sharing the places we love."
          />
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {IMG.explore.map((spot, i) => (
            <Reveal
              key={spot.title}
              delay={i * 0.09}
              className={i % 2 === 1 ? "lg:mt-12" : ""}
            >
              <figure className="group relative aspect-[3/4] overflow-hidden rounded-[1.75rem]">
                <img
                  src={spot.src}
                  alt={spot.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.3s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sea-950/85 via-sea-950/15 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-6">
                  <span className="text-[0.65rem] font-semibold tracking-[0.32em] text-hibiscus-300">
                    0{i + 1}
                  </span>
                  <h3 className="mt-1.5 font-display text-xl tracking-tight text-sand-50">
                    {spot.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-sand-100/80">
                    {spot.copy}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-16 flex justify-center">
          <div className="inline-flex max-w-full items-center gap-3 rounded-full bg-sea-100/80 px-6 py-3.5 text-sm font-medium text-sea-800">
            <Compass className="h-4 w-4 shrink-0" />
            <span>
              When you get here, ask where <em className="italic">we&apos;d</em>{" "}
              go — we keep a little list.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
