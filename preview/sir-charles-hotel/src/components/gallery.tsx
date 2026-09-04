import Image from "next/image";
import Reveal from "./reveal";
import { Eyebrow } from "./ui";
import { IMG } from "@/lib/images";

const aspect: Record<string, string> = {
  tall: "aspect-[3/4]",
  mid: "aspect-[4/3]",
  wide: "aspect-[16/10]",
};

export default function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 bg-ivory py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal className="flex justify-center">
            <Eyebrow index="05" label="Gallery" />
          </Reveal>
          <Reveal delay={90}>
            <h2 className="mt-7 font-display text-[2.6rem] font-light leading-[1.04] sm:text-6xl">
              Postcards from <span className="italic text-sea">the island.</span>
            </h2>
          </Reveal>
          <Reveal delay={170}>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-ink/60">
              A few frames from in and around Sir Charles — the light, the colour, the water and the
              wonderful slowness of it all.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 columns-2 gap-4 space-y-4 sm:mt-20 md:columns-3 lg:columns-4">
          {IMG.gallery.map((item, i) => (
            <Reveal key={item.src} delay={(i % 4) * 90} className="break-inside-avoid">
              <figure className="group relative overflow-hidden rounded-2xl">
                <div className={`relative overflow-hidden ${aspect[item.span] ?? "aspect-[4/3]"}`}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                    className="img-zoom object-cover"
                  />
                </div>
                <figcaption className="pointer-events-none absolute inset-0 flex translate-y-3 items-end bg-gradient-to-t from-ink/70 via-ink/10 to-transparent p-5 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="font-display text-base italic text-ivory">{item.caption}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
