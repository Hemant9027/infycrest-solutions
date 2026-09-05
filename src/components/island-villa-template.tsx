import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function IslandVillaTemplate() {
  return (
    <main className="bg-[#edf6f4] text-[#203b3b]">
      <header className="flex h-20 items-center justify-between border-b border-[#203b3b]/10 px-6 lg:px-12">
        <span className="font-serif text-2xl tracking-[0.15em]">
          Island Villa
        </span>
        <nav className="hidden gap-8 text-xs uppercase tracking-[0.2em] md:flex">
          <a href="#villa">The villa</a>
          <a href="#island">The island</a>
          <a href="#stay">Your stay</a>
        </nav>
        <a
          href="#stay"
          className="rounded-full bg-[#83b6ae] px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white"
        >
          Enquire about a stay
        </a>
      </header>
      <section className="relative flex min-h-[760px] items-end overflow-hidden px-6 py-24 text-white lg:px-12">
        <Image
          src="/villa/1.jpg"
          alt="Island Villa retreat"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#203b3b]/90 to-transparent" />
        <div className="relative max-w-5xl">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#bde1d9]">
            Arrive somewhere else · Private retreat
          </p>
          <h1 className="font-serif text-7xl font-light leading-[0.88] sm:text-9xl">
            A slower kind
            <br />
            <em className="text-[#bde1d9]">of luxury.</em>
          </h1>
          <a
            href="#stay"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#83b6ae] px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em]"
          >
            Plan your stay <ArrowUpRight className="size-4" />
          </a>
        </div>
      </section>
      <section
        id="villa"
        className="mx-auto grid max-w-7xl gap-12 px-6 py-28 lg:grid-cols-2 lg:px-12"
      >
        <h2 className="font-serif text-6xl font-light leading-none">
          Space, salt air and time that belongs to you.
        </h2>
        <p className="max-w-xl text-xl leading-relaxed text-[#203b3b]/65 lg:pt-16">
          A private island retreat shaped around quiet mornings, open water and
          the small details that make a stay unforgettable.
        </p>
      </section>
      <section
        id="island"
        className="bg-[#203b3b] px-6 py-28 text-[#edf6f4] lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.28em] text-[#bde1d9]">
            01 · Make yourself at home
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              "The villa",
              "Island days",
              "Private dining",
              "Plan your stay",
            ].map((item) => (
              <article key={item} className="border-t border-white/20 py-8">
                <h3 className="font-serif text-3xl font-light">{item}</h3>
                <p className="mt-3 text-sm text-white/55">
                  A considered experience made for long days, open skies and
                  unhurried evenings.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="stay" className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
        <p className="text-xs uppercase tracking-[0.28em] text-[#83b6ae]">
          02 · Your island
        </p>
        <h2 className="mt-6 max-w-2xl font-serif text-6xl font-light leading-none">
          Leave with more time than you arrived with.
        </h2>
        <a
          href="mailto:stay@islandvilla.example"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#203b3b] px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white"
        >
          Enquire about a stay <ArrowUpRight className="size-4" />
        </a>
      </section>
    </main>
  );
}
