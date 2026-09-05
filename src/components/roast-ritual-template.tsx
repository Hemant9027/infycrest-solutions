import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function RoastRitualTemplate() {
  return (
    <main className="bg-[#f4eee5] text-[#33251e]">
      <header className="flex h-20 items-center justify-between border-b border-[#33251e]/10 px-6 lg:px-12">
        <span className="font-serif text-2xl tracking-[0.12em]">
          Roast &amp; Ritual
        </span>
        <nav className="hidden gap-8 text-xs uppercase tracking-[0.2em] md:flex">
          <a href="#coffee">Coffee</a>
          <a href="#story">Story</a>
          <a href="#visit">Visit</a>
        </nav>
        <a
          href="#visit"
          className="rounded-full bg-[#a87955] px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white"
        >
          Visit the cafe
        </a>
      </header>
      <section className="relative flex min-h-[760px] items-end overflow-hidden px-6 py-24 text-white lg:px-12">
        <Image
          src="/restaurant/2.jpg"
          alt="Roast and Ritual cafe"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#33251e]/90 to-transparent" />
        <div className="relative max-w-5xl">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#e2bd93]">
            Take your time · Specialty coffee
          </p>
          <h1 className="font-serif text-7xl font-light leading-[0.88] sm:text-9xl">
            Coffee worth
            <br />
            <em className="text-[#e2bd93]">slowing down for.</em>
          </h1>
          <a
            href="#coffee"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#a87955] px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em]"
          >
            Explore the menu <ArrowUpRight className="size-4" />
          </a>
        </div>
      </section>
      <section
        id="story"
        className="mx-auto grid max-w-7xl gap-12 px-6 py-28 lg:grid-cols-2 lg:px-12"
      >
        <h2 className="font-serif text-6xl font-light leading-none">
          A warm room for good coffee and better mornings.
        </h2>
        <p className="max-w-xl text-xl leading-relaxed text-[#33251e]/65 lg:pt-16">
          We source expressive coffees, bake small and leave space for the
          rituals that make a day feel like yours.
        </p>
      </section>
      <section
        id="coffee"
        className="bg-[#33251e] px-6 py-28 text-[#f4eee5] lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.28em] text-[#e2bd93]">
            01 · On the bar
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              "Single origin",
              "Slow bar",
              "Fresh pastries",
              "Coffee classes",
            ].map((item) => (
              <article key={item} className="border-t border-white/20 py-8">
                <h3 className="font-serif text-3xl font-light">{item}</h3>
                <p className="mt-3 text-sm text-white/55">
                  Carefully sourced, quietly prepared and ready when you are.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="visit" className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
        <p className="text-xs uppercase tracking-[0.28em] text-[#a87955]">
          02 · Your table
        </p>
        <h2 className="mt-6 max-w-2xl font-serif text-6xl font-light leading-none">
          Come for the coffee. Stay for the ritual.
        </h2>
        <a
          href="mailto:hello@roast-ritual.example"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#33251e] px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white"
        >
          Find us <ArrowUpRight className="size-4" />
        </a>
      </section>
    </main>
  );
}
