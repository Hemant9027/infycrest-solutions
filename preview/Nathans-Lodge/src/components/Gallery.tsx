import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const PHOTOS = [
  { src: "/images/gallery-aerial.jpg", caption: "Sandbar geometry", wide: true },
  { src: "/images/canoe-aerial.jpg", caption: "Paddle out", wide: false },
  { src: "/images/wade-fishing.jpg", caption: "Patient casting", wide: false },
  { src: "/images/beach-grill.jpg", caption: "Lunch, done right", wide: true },
  { src: "/images/boardwalk.jpg", caption: "Creek crossing", wide: false },
  { src: "/images/island-palms.jpg", caption: "Shore day", wide: true },
  { src: "/images/sea-fisherman.jpg", caption: "First light shift", wide: false },
  { src: "/images/hut.jpg", caption: "Island architecture", wide: false },
  { src: "/images/kayak.jpg", caption: "Blue on blue", wide: true },
];

export default function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 bg-shell py-24 sm:py-32">
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            index="07"
            eyebrow="Gallery"
            title={
              <>
                Postcards we <em className="font-light text-pine">never sent</em>
              </>
            }
          />
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-ink/60">
              Taken between tides — the island as it actually looks when you
              finally put the phone down.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {PHOTOS.map((photo, i) => (
            <Reveal
              key={photo.src + i}
              delay={(i % 3) * 90}
              className="mb-5 break-inside-avoid"
              y={36}
            >
              <figure className="group relative overflow-hidden rounded-[4px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.caption}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.06] ${
                    photo.wide ? "aspect-[3/2]" : "aspect-[4/5]"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <figcaption className="absolute bottom-0 left-0 flex w-full translate-y-3 items-center justify-between p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="font-display text-lg italic text-shell">
                    {photo.caption}
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-seafoam/80">
                    Andros
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
