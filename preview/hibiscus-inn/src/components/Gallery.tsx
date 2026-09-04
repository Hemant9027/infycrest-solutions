import Hibiscus from "@/components/Hibiscus";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { IMG } from "@/lib/images";

const ASPECTS = [
  "aspect-[4/3]",
  "aspect-[3/4]",
  "aspect-square",
  "aspect-[4/3]",
  "aspect-[4/3]",
  "aspect-[3/4]",
  "aspect-[16/11]",
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative scroll-mt-24 bg-sea-50 py-24 md:py-36"
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Gallery"
            title={
              <>
                Moments in <em className="italic text-sea-600">the sun</em>
              </>
            }
          />
          <Reveal
            delay={0.15}
            className="max-w-xs text-sm leading-relaxed text-ink/60"
          >
            A few frames from around the inn and the island — the light really
            does look like this.
          </Reveal>
        </div>

        <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {IMG.gallery.map((photo, i) => (
            <Reveal
              key={photo.src}
              delay={(i % 3) * 0.09}
              className="break-inside-avoid"
            >
              <figure className="group relative overflow-hidden rounded-3xl bg-sand-100">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className={`w-full object-cover ${ASPECTS[i % ASPECTS.length]} transition-transform duration-[1.4s] ease-out group-hover:scale-110`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sea-950/75 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <figcaption className="absolute inset-x-0 bottom-0 flex translate-y-3 items-center gap-2.5 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <Hibiscus className="h-4 w-4 shrink-0 text-hibiscus-300" />
                  <span className="font-display text-lg italic tracking-tight text-sand-50">
                    {photo.caption}
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
