import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { GALLERY } from "@/lib/media";

export default function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 bg-foam py-24 sm:py-32 lg:py-40">
      <div className="mx-auto w-full max-w-[92rem] px-5 sm:px-8 lg:px-12">
        <div className="text-center">
          <Reveal>
            <p className="inline-flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-ocean">
              <span className="h-px w-10 bg-ocean/50" />
              05 — Gallery
              <span className="h-px w-10 bg-ocean/50" />
            </p>
            <h2 className="mt-6 font-serif text-4xl font-light leading-[1.05] tracking-tight text-sea sm:text-5xl lg:text-6xl">
              The view <em className="italic text-lagoon">from here</em>.
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-ink/60 sm:text-lg">
              Moments from the water’s edge — the colours and textures of the
              Abacos, from first light to last.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 columns-2 gap-4 space-y-4 md:columns-3">
          {GALLERY.map((photo, i) => (
            <Reveal key={photo.src} delay={0.05 * (i % 3)} className="break-inside-avoid">
              <figure className="group relative overflow-hidden rounded-2xl">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={1100}
                  height={photo.h}
                  sizes="(min-width: 768px) 31vw, 48vw"
                  className="h-auto w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-abyss/55 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <figcaption className="absolute bottom-4 left-4 translate-y-3 font-serif text-sm italic text-cream opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100 sm:text-base">
                  {photo.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
