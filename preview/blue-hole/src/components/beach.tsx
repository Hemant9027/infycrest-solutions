import ParallaxImage from "@/components/parallax-image";
import Reveal from "@/components/reveal";

export default function Beach() {
  return (
    <section id="beach" className="relative bg-abyss text-shell">
      <ParallaxImage
        src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1600&q=85"
        alt="Relaxing hammock suspended between palm trees on pristine private beach with turquoise Caribbean waters"
        className="h-[82vh] min-h-[34rem]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-abyss/75 via-abyss/10 to-abyss/45" />

      <div className="absolute inset-0 flex items-center justify-center px-5">
        <div className="max-w-3xl text-center">
          <Reveal>
            <p className="kicker inline-flex items-center gap-4 text-aqua">
              <span className="h-px w-8 bg-aqua/50" />
              03 · Private Beach
              <span className="h-px w-8 bg-aqua/50" />
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 font-display text-[clamp(2.6rem,6vw,5.5rem)] font-light leading-[1.02] tracking-[-0.01em]">
              Miles of sand. <em className="italic text-aqua">No one else</em>{" "}
              on it.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-shell/80 sm:text-lg">
              Our secluded beach slopes gently into calm, shallow turquoise —
              perfect for a first swim at sunrise, an afternoon in the hammock,
              and a sky full of stars to finish.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
