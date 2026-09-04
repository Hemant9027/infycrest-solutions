import Image from "next/image";
import Reveal from "@/components/reveal";
import { GALLERY } from "@/lib/site";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-shell py-24 md:py-36">
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <p className="kicker relative pl-[3.25rem] text-lagoon before:absolute before:left-0 before:top-1/2 before:h-px before:w-10 before:bg-current before:opacity-40">
                07 · Gallery
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 max-w-xl font-display text-[clamp(2.4rem,4.6vw,4.25rem)] font-medium leading-[1.04]">
                Postcards from{" "}
                <em className="font-light italic text-lagoon">the property</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className="max-w-sm text-[1.02rem] leading-relaxed text-abyss/70">
              Turquoise shallows, wild palms, quiet skies — the everyday view
              around the villas.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {GALLERY.map((img, i) => (
            <Reveal key={img.src} delay={(i % 3) * 90} className="mb-5 break-inside-avoid">
              <figure className="group relative overflow-hidden rounded-2xl border-[6px] border-white shadow-[0_24px_50px_-30px_rgba(6,38,46,0.35)]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={900}
                  height={i % 2 === 0 ? 1100 : 750}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-105"
                />
                <figcaption className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-abyss/70 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="font-display text-lg italic text-shell">
                    {img.caption}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
