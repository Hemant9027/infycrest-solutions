import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function NorthlineTemplate() {
  return (
    <main className="bg-[#f2f0eb] text-[#242424]">
      <header className="flex h-20 items-center justify-between border-b border-[#242424]/10 px-6 lg:px-12">
        <span className="font-black tracking-[0.2em]">NORTHLINE</span>
        <nav className="hidden gap-8 text-xs uppercase tracking-[0.2em] md:flex">
          <a href="#collection">Collection</a>
          <a href="#story">Journal</a>
          <a href="#contact">Contact</a>
        </nav>
        <a
          href="#collection"
          className="rounded-full border border-[#242424] px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em]"
        >
          Shop now
        </a>
      </header>
      <section className="relative flex min-h-[760px] items-end overflow-hidden px-6 py-24 text-white lg:px-12">
        <Image
          src="/Business-Tech/1.jpg"
          alt="Northline fashion collection"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
        <div className="relative max-w-5xl">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#e5bf9e]">
            Form, function, feeling
          </p>
          <h1 className="font-serif text-7xl font-light leading-[0.88] sm:text-9xl">
            Wear the
            <br />
            <em className="text-[#e5bf9e]">future well.</em>
          </h1>
          <a
            href="#collection"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#e5bf9e] px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-black"
          >
            Explore collection <ArrowUpRight className="size-4" />
          </a>
        </div>
      </section>
      <section
        id="story"
        className="mx-auto grid max-w-7xl gap-12 px-6 py-28 lg:grid-cols-2 lg:px-12"
      >
        <h2 className="font-serif text-6xl font-light leading-none">
          Quietly confident pieces for a life in motion.
        </h2>
        <p className="max-w-xl text-xl leading-relaxed text-[#242424]/65 lg:pt-16">
          Northline makes considered essentials with clean lines, honest
          materials and a point of view that lasts beyond a season.
        </p>
      </section>
      <section
        id="collection"
        className="bg-[#242424] px-6 py-28 text-[#f2f0eb] lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.28em] text-[#e5bf9e]">
            01 · The edit
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              "New collection",
              "Tailored essentials",
              "Materials",
              "Journal",
            ].map((item) => (
              <article key={item} className="border-t border-white/20 py-8">
                <h3 className="font-serif text-3xl font-light">{item}</h3>
                <p className="mt-3 text-sm text-white/55">
                  A closer look at the pieces and ideas behind Northline.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
        <h2 className="max-w-2xl font-serif text-6xl font-light leading-none">
          A wardrobe with a point of view.
        </h2>
        <a
          href="mailto:hello@northline.example"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#242424] px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white"
        >
          Get in touch <ArrowUpRight className="size-4" />
        </a>
      </section>
    </main>
  );
}
