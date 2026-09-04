import { Camera } from "lucide-react";
import Image from "next/image";
import { IMAGES } from "@/lib/site";
import { Eyebrow, PalmMark } from "../Brand";
import { Reveal } from "../Reveal";

const TILES = [
  { src: IMAGES.galleryAerial, alt: "Aerial view of a turquoise Bahamian shoreline", caption: "Shades of blue", ratio: "aspect-[4/3]" },
  { src: IMAGES.galleryBeach, alt: "White sand meeting turquoise water", caption: "Beach days", ratio: "aspect-[3/4]" },
  { src: IMAGES.galleryLighthouse, alt: "Lighthouse and boat near the harbour", caption: "Harbour light", ratio: "aspect-[4/3]" },
  { src: IMAGES.galleryPalmWall, alt: "Palm shadow on a warm beige wall", caption: "Palm shade", ratio: "aspect-[4/3]" },
  { src: IMAGES.galleryIsland, alt: "Palms lining a bright turquoise coast", caption: "Island green", ratio: "aspect-[3/4]" },
  { src: IMAGES.galleryWhiteWall, alt: "Palm leaves against a white wall and blue sky", caption: "White walls, blue sky", ratio: "aspect-[4/5]" },
];

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <Eyebrow index="05" label="Gallery" />
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display-tight mt-6 font-display text-4xl font-medium leading-[1.08] sm:text-5xl">
                Island <em className="font-light italic text-sea">scenes</em>.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className="flex max-w-xs items-start gap-3 text-sm leading-relaxed text-ink/55">
              <Camera className="mt-0.5 size-4 shrink-0 text-coral" />
              Moments from around Nassau & New Providence — the neighbourhood
              we're lucky to call home.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 columns-2 gap-3 sm:gap-4 md:columns-3">
          {TILES.slice(0, 3).map((tile, i) => (
            <GalleryTile key={tile.caption} tile={tile} delay={i * 80} />
          ))}

          {/* ornamental quote tile */}
          <Reveal className="mb-3 break-inside-avoid sm:mb-4" delay={120}>
            <div className="flex aspect-[4/3] flex-col justify-between rounded-3xl bg-sea p-6 text-cream sm:p-7">
              <PalmMark className="size-8 text-sun" />
              <p className="font-display text-xl italic leading-snug sm:text-2xl">
                Sun, sea & shade — the whole palette.
              </p>
            </div>
          </Reveal>

          {TILES.slice(3).map((tile, i) => (
            <GalleryTile key={tile.caption} tile={tile} delay={120 + i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryTile({
  tile,
  delay,
}: {
  tile: (typeof TILES)[number];
  delay: number;
}) {
  return (
    <Reveal className="mb-3 break-inside-avoid sm:mb-4" delay={delay}>
      <figure
        className={`group relative ${tile.ratio} overflow-hidden rounded-3xl ring-1 ring-ink/5`}
      >
        <Image
          src={tile.src}
          alt={tile.alt}
          fill
          sizes="(min-width: 768px) 33vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden="true"
        />
        <figcaption className="absolute bottom-3.5 left-3.5 translate-y-2 rounded-full bg-cream/90 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink opacity-0 backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          {tile.caption}
        </figcaption>
      </figure>
    </Reveal>
  );
}
