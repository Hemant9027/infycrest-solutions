import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function CrumbHearthTemplate() {
  return (
    <main className="bg-[#fbf2e7] text-[#402c23]">
      <header className="flex h-20 items-center justify-between border-b border-[#402c23]/10 px-6 lg:px-12">
        <span className="font-serif text-2xl">Crumb &amp; Hearth</span>
        <nav className="hidden gap-8 text-xs uppercase tracking-[0.2em] md:flex">
          <a href="#bakes">Bakes</a>
          <a href="#story">Story</a>
          <a href="#visit">Visit</a>
        </nav>
        <a
          href="#visit"
          className="rounded-full bg-[#ba7650] px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white"
        >
          Order something good
        </a>
      </header>
      <section className="relative flex min-h-[760px] items-end overflow-hidden px-6 py-24 text-white lg:px-12">
        <Image
          src="/Bakery/1.jpg"
          alt="Crumb and Hearth bakery"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#402c23]/90 to-transparent" />
        <div className="relative max-w-5xl">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#f0c39f]">
            Made warm every morning
          </p>
          <h1 className="font-serif text-7xl font-light leading-[0.88] sm:text-9xl">
            Good bread.
            <br />
            <em className="text-[#f0c39f]">Good company.</em>
          </h1>
          <a
            href="#bakes"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#ba7650] px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em]"
          >
            See today&apos;s bakes <ArrowUpRight className="size-4" />
          </a>
        </div>
      </section>
      <section
        id="story"
        className="mx-auto grid max-w-7xl gap-12 px-6 py-28 lg:grid-cols-2 lg:px-12"
      >
        <h2 className="font-serif text-6xl font-light leading-none">
          Small-batch bread, pastry and reasons to linger.
        </h2>
        <p className="max-w-xl text-xl leading-relaxed text-[#402c23]/65 lg:pt-16">
          Everything is mixed, shaped and baked in our kitchen with patient
          fermentation and ingredients we are proud to name.
        </p>
      </section>
      <section
        id="bakes"
        className="bg-[#402c23] px-6 py-28 text-[#fbf2e7] lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.28em] text-[#f0c39f]">
            01 · From the oven
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              "Morning bakes",
              "Sourdough",
              "Celebration cakes",
              "Catering",
            ].map((item) => (
              <article key={item} className="border-t border-white/20 py-8">
                <h3 className="font-serif text-3xl font-light">{item}</h3>
                <p className="mt-3 text-sm text-white/55">
                  Made slowly, served generously and best enjoyed fresh.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="visit" className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
        <p className="text-xs uppercase tracking-[0.28em] text-[#ba7650]">
          02 · Come by
        </p>
        <h2 className="mt-6 max-w-2xl font-serif text-6xl font-light leading-none">
          There&apos;s always room at the hearth.
        </h2>
        <a
          href="mailto:hello@crumbhearth.example"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#402c23] px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white"
        >
          Place an order <ArrowUpRight className="size-4" />
        </a>
      </section>
    </main>
  );
}
