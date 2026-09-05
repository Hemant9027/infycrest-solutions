import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function LaunchlabTemplate() {
  return (
    <main className="bg-[#171a1c] text-[#f4f0e8]">
      <header className="flex h-20 items-center justify-between border-b border-white/10 px-6 lg:px-12">
        <span className="font-bold tracking-[-0.04em] text-2xl">
          LaunchLab<span className="text-[#f08b54]">.</span>
        </span>
        <nav className="hidden gap-8 text-xs uppercase tracking-[0.2em] md:flex">
          <a href="#work">Work</a>
          <a href="#approach">Approach</a>
          <a href="#contact">Start</a>
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-[#f08b54] px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#171a1c]"
        >
          Start a conversation
        </a>
      </header>
      <section className="relative flex min-h-[760px] items-end overflow-hidden px-6 py-24 lg:px-12">
        <Image
          src="/Business-Tech/3.jpg"
          alt="LaunchLab digital studio"
          fill
          priority
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171a1c] via-[#171a1c]/65 to-transparent" />
        <div className="relative max-w-5xl">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#f08b54]">
            Ideas into momentum · Digital studio
          </p>
          <h1 className="font-serif text-7xl font-light leading-[0.88] sm:text-9xl">
            Make your next
            <br />
            <em className="text-[#f08b54]">move visible.</em>
          </h1>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#f08b54] px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#171a1c]"
          >
            Build with us <ArrowUpRight className="size-4" />
          </a>
        </div>
      </section>
      <section
        id="approach"
        className="mx-auto grid max-w-7xl gap-12 px-6 py-28 lg:grid-cols-2 lg:px-12"
      >
        <h2 className="font-serif text-6xl font-light leading-none">
          Strategy, identity and digital products for ambitious teams.
        </h2>
        <p className="max-w-xl text-xl leading-relaxed text-white/65 lg:pt-16">
          We help founders turn a sharp idea into a brand people remember and a
          website that makes the next conversation easier.
        </p>
      </section>
      <section
        id="work"
        className="bg-[#f4f0e8] px-6 py-28 text-[#171a1c] lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.28em] text-[#c7673d]">
            01 · What we make
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              "Brand strategy",
              "Digital products",
              "Campaigns",
              "Launch support",
            ].map((item) => (
              <article key={item} className="border-t border-[#171a1c]/20 py-8">
                <h3 className="font-serif text-3xl font-light">{item}</h3>
                <p className="mt-3 text-sm text-[#171a1c]/55">
                  Sharp thinking, expressive craft and momentum you can measure.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
        <h2 className="max-w-2xl font-serif text-6xl font-light leading-none">
          Bring us the idea that keeps you up.
        </h2>
        <a
          href="mailto:hello@launchlab.example"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#f08b54] px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#171a1c]"
        >
          Let&apos;s talk <ArrowUpRight className="size-4" />
        </a>
      </section>
    </main>
  );
}
