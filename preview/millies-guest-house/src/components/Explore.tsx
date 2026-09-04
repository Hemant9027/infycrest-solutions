import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { IMAGES } from "@/lib/media";

const PLACES = [
  {
    index: "01",
    title: "Hope Town, Elbow Cay",
    text: "The postcard of the Abacos — a candy-striped lighthouse above a harbour of pastel cottages.",
    image: IMAGES.exploreLighthouse,
    alt: "A red and white striped lighthouse rising against a clear blue sky",
  },
  {
    index: "02",
    title: "The Sea of Abaco",
    text: "Calm, protected, and impossibly blue — some of the finest small-boat water on earth.",
    image: IMAGES.exploreSail,
    alt: "A sailboat gliding across calm turquoise water under a bright sky",
  },
  {
    index: "03",
    title: "The Outer Cays",
    text: "Green Turtle Cay, Great Guana, Treasure Cay — settlements and beaches strung along the reef.",
    image: IMAGES.exploreCays,
    alt: "Palm trees leaning over a quiet beach beside clear shallow water",
  },
];

export default function Explore() {
  return (
    <section id="explore" className="scroll-mt-24 bg-sand py-24 sm:py-32 lg:py-40">
      <div className="mx-auto w-full max-w-[92rem] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <p className="flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-ocean">
              <span className="h-px w-10 bg-ocean/50" />
              04 — Explore The Abacos
            </p>
            <h2 className="mt-6 max-w-2xl font-serif text-4xl font-light leading-[1.05] tracking-tight text-sea sm:text-5xl lg:text-6xl">
              An island chain{" "}
              <em className="italic text-lagoon">made for the water</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="max-w-md text-base leading-relaxed text-ink/65 sm:text-lg">
              Boats are the roads of the Abacos. From here, harbours,
              lighthouse villages, and long white beaches are all part of the
              neighbourhood.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {PLACES.map((place, i) => (
            <Reveal key={place.title} delay={0.1 * i} className="h-full">
              <article className="group relative flex h-full flex-col">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem]">
                  <Image
                    src={place.image}
                    alt={place.alt}
                    fill
                    sizes="(min-width: 768px) 31vw, 100vw"
                    className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.07]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-abyss/55 via-transparent to-transparent opacity-80" />
                  <span className="absolute right-5 top-5 grid size-11 place-items-center rounded-full bg-cream/15 text-cream backdrop-blur-md transition-colors duration-500 group-hover:bg-coral">
                    <ArrowUpRight className="size-5" />
                  </span>
                  <span className="absolute bottom-5 left-5 font-serif text-lg italic text-cream/85">
                    {place.index}
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-2xl text-sea sm:text-[1.7rem]">
                  {place.title}
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink/60 sm:text-base">
                  {place.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
