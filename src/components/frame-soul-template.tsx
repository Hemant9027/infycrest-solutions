import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function FrameSoulTemplate() {
  return (
    <main className="bg-[#f3eee9] text-[#2e2926]">
      <header className="flex h-20 items-center justify-between border-b border-[#2e2926]/10 px-6 lg:px-12">
        <span className="font-serif text-2xl tracking-[0.16em]">
          Frame &amp; Soul
        </span>
        <nav className="hidden gap-8 text-xs uppercase tracking-[0.2em] md:flex">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-[#2e2926] px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em]"
        >
          Enquire
        </a>
      </header>
      <section className="relative flex min-h-[760px] items-end overflow-hidden px-6 py-24 text-white lg:px-12">
        <Image
          src="/photographer/1.jpg"
          alt="Frame and Soul photography"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
        <div className="relative max-w-5xl">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#e2b9a7]">
            Light, held still · Photography studio
          </p>
          <h1 className="font-serif text-7xl font-light leading-[0.88] sm:text-9xl">
            Stories in the
            <br />
            <em className="text-[#e2b9a7]">quiet details.</em>
          </h1>
          <a
            href="#work"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#e2b9a7] px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#2e2926]"
          >
            View the work <ArrowUpRight className="size-4" />
          </a>
        </div>
      </section>
      <section
        id="about"
        className="mx-auto grid max-w-7xl gap-12 px-6 py-28 lg:grid-cols-2 lg:px-12"
      >
        <h2 className="font-serif text-6xl font-light leading-none">
          An editorial eye for people, places and in-between moments.
        </h2>
        <p className="max-w-xl text-xl leading-relaxed text-[#2e2926]/65 lg:pt-16">
          Frame &amp; Soul creates images with atmosphere and honesty for
          brands, couples and artists with something real to say.
        </p>
      </section>
      <section
        id="work"
        className="bg-[#2e2926] px-6 py-28 text-[#f3eee9] lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.28em] text-[#e2b9a7]">
            01 · The portfolio
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {["Brand stories", "Portraits", "Weddings", "Editorial"].map(
              (item) => (
                <article key={item} className="border-t border-white/20 py-8">
                  <h3 className="font-serif text-3xl font-light">{item}</h3>
                  <p className="mt-3 text-sm text-white/55">
                    Images that leave room for feeling, texture and the truth of
                    a moment.
                  </p>
                </article>
              ),
            )}
          </div>
        </div>
      </section>
      <section id="contact" className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
        <h2 className="max-w-2xl font-serif text-6xl font-light leading-none">
          Let&apos;s make something worth remembering.
        </h2>
        <a
          href="mailto:hello@framesoul.example"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#2e2926] px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white"
        >
          Start a project <ArrowUpRight className="size-4" />
        </a>
      </section>
    </main>
  );
}
