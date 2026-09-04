import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { IMAGES } from "@/lib/media";

const FEATURES = [
  {
    index: "01",
    title: "Spacious & modern",
    text: "Generous rooms and open living spaces with a clean, contemporary feel — room to unpack, stretch out, and properly arrive.",
  },
  {
    index: "02",
    title: "Right on the water",
    text: "The sea is part of every day here — the first view at dawn, the constant through the afternoon, the last colour at dusk.",
  },
  {
    index: "03",
    title: "Peaceful & personal",
    text: "One private guest house and a host on hand when you need her. Island quiet, entirely undisturbed.",
  },
];

export default function Stay() {
  return (
    <section id="stay" className="scroll-mt-24 bg-cream py-24 sm:py-32 lg:py-40">
      <div className="mx-auto w-full max-w-[92rem] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <p className="flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-ocean">
              <span className="h-px w-10 bg-ocean/50" />
              02 — The Stay
            </p>
            <h2 className="mt-6 max-w-2xl font-serif text-4xl font-light leading-[1.05] tracking-tight text-sea sm:text-5xl lg:text-6xl">
              Space to breathe. Light that{" "}
              <em className="italic text-lagoon">moves with the water</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="max-w-md text-base leading-relaxed text-ink/65 sm:text-lg">
              Inside, the mood is easy and uncluttered — natural light, sea air,
              and the kind of quiet that only exists at the water’s edge.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <figure className="group relative h-full min-h-[26rem] overflow-hidden rounded-[1.75rem]">
              <Image
                src={IMAGES.stayTall}
                alt="A spacious bedroom in soft natural light with sliding glass doors facing the sea"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.05]"
              />
              <figcaption className="absolute bottom-5 left-5 rounded-full bg-abyss/45 px-4 py-2 text-xs font-medium tracking-wide text-cream backdrop-blur-md">
                Morning light, sea air
              </figcaption>
            </figure>
          </Reveal>
          <div className="grid gap-5 md:col-span-7">
            <Reveal delay={0.1}>
              <figure className="group relative aspect-[16/9] overflow-hidden rounded-[1.75rem]">
                <Image
                  src={IMAGES.stayWide}
                  alt="A bright modern room opening onto a balcony above the water"
                  fill
                  sizes="(min-width: 768px) 52vw, 100vw"
                  className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.05]"
                />
                <figcaption className="absolute bottom-5 left-5 rounded-full bg-abyss/45 px-4 py-2 text-xs font-medium tracking-wide text-cream backdrop-blur-md">
                  Open to the view
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={0.18}>
              <figure className="group relative aspect-[16/9] overflow-hidden rounded-[1.75rem]">
                <Image
                  src={IMAGES.stayBalcony}
                  alt="A quiet balcony shaded by palms, looking out over the shoreline"
                  fill
                  sizes="(min-width: 768px) 52vw, 100vw"
                  className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.05]"
                />
                <figcaption className="absolute bottom-5 left-5 rounded-full bg-abyss/45 px-4 py-2 text-xs font-medium tracking-wide text-cream backdrop-blur-md">
                  Nowhere to be, nothing to rush
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 border-t border-sea/10">
          {FEATURES.map((f, i) => (
            <Reveal key={f.index} delay={0.06 * i}>
              <div className="grid items-baseline gap-2 border-b border-sea/10 py-8 sm:py-10 md:grid-cols-12 md:gap-6">
                <span className="font-serif text-2xl italic text-lagoon md:col-span-2">
                  {f.index}
                </span>
                <h3 className="font-serif text-2xl text-sea sm:text-3xl md:col-span-4">
                  {f.title}
                </h3>
                <p className="max-w-xl text-base leading-relaxed text-ink/65 md:col-span-6">
                  {f.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
