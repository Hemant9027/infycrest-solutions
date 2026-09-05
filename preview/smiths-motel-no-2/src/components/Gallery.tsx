import { Camera } from "lucide-react";
import Reveal from "./Reveal";

const SHOTS = [
  {
    src: "/images/hero-motel.jpg",
    alt: "Smith's Motel No. 2 beneath the palms",
    caption: "Home sweet No. 2",
  },
  {
    src: "/images/room-bright.jpg",
    alt: "A bright room with turquoise and coral accents",
    caption: "Fresh & simple",
  },
  {
    src: "/images/villa-16.jpg",
    alt: "Twilight over a beach pier in Nassau, The Bahamas",
    caption: "Nassau afterglow",
  },
  {
    src: "/images/veranda.jpg",
    alt: "Coral arched doorway with potted palms",
    caption: "Doorway days",
  },
  {
    src: "/images/villa-17.jpg",
    alt: "A conch shell on weathered wooden planks",
    caption: "The mighty conch",
  },
  {
    src: "/images/room-calm.jpg",
    alt: "A calm room with a teal accent wall",
    caption: "Slow mornings",
  },
  {
    src: "/images/villa-18.jpg",
    alt: "Aerial view of turquoise Caribbean water",
    caption: "Our kind of blue",
  },
  {
    src: "/images/detail.jpg",
    alt: "Palm shadow on a coral wall",
    caption: "Island shadows",
  },
  {
    src: "/images/courtyard.jpg",
    alt: "A sunny courtyard with palms",
    caption: "Sunny corners",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative z-10 -mt-8 scroll-mt-24 rounded-t-[2.5rem] bg-cream pt-20 pb-24 md:rounded-t-[3.5rem] md:pt-28 md:pb-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <p className="flex items-center gap-2 text-xs font-bold tracking-[0.22em] text-coral-deep uppercase">
              <Camera className="size-4" />
              Gallery
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] font-semibold tracking-tight text-ink md:text-5xl">
              Postcards from <em className="text-coral">No. 2.</em>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              A little look around the motel — and the island we&rsquo;re lucky
              to call home.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 columns-2 gap-4 space-y-4 md:columns-3 md:gap-5 md:space-y-5">
          {SHOTS.map((shot, i) => (
            <Reveal key={shot.src} delay={60 * (i % 3)}>
              <figure className="group relative break-inside-avoid overflow-hidden rounded-[1.5rem]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute bottom-3 left-3 rounded-full bg-ink/55 px-3.5 py-1.5 text-xs font-bold text-sand backdrop-blur-sm">
                  {shot.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
