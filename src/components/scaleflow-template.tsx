import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ScaleflowTemplate() {
  return (
    <main className="bg-[#edf6f4] text-[#183534]">
      <header className="flex h-20 items-center justify-between border-b border-[#183534]/10 px-6 lg:px-12">
        <span className="font-bold tracking-[-0.04em] text-2xl">ScaleFlow</span>
        <nav className="hidden gap-8 text-xs uppercase tracking-[0.2em] md:flex">
          <a href="#platform">Platform</a>
          <a href="#teams">Teams</a>
          <a href="#contact">Contact</a>
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-[#67a9a2] px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white"
        >
          See how it works
        </a>
      </header>
      <section className="relative flex min-h-[760px] items-end overflow-hidden px-6 py-24 text-white lg:px-12">
        <Image
          src="/Business-Tech/2.jpg"
          alt="ScaleFlow platform"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#183534]/90 to-transparent" />
        <div className="relative max-w-5xl">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#a9ded6]">
            Clarity at every scale
          </p>
          <h1 className="font-serif text-7xl font-light leading-[0.88] sm:text-9xl">
            Make growth
            <br />
            <em className="text-[#a9ded6]">feel simple.</em>
          </h1>
          <a
            href="#platform"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#67a9a2] px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em]"
          >
            Explore ScaleFlow <ArrowUpRight className="size-4" />
          </a>
        </div>
      </section>
      <section
        id="platform"
        className="mx-auto grid max-w-7xl gap-12 px-6 py-28 lg:grid-cols-2 lg:px-12"
      >
        <h2 className="font-serif text-6xl font-light leading-none">
          The operating layer for teams that are going somewhere.
        </h2>
        <p className="max-w-xl text-xl leading-relaxed text-[#183534]/65 lg:pt-16">
          ScaleFlow brings planning, visibility and momentum into one calm
          workspace so your team can focus on the work that matters.
        </p>
      </section>
      <section
        id="teams"
        className="bg-[#183534] px-6 py-28 text-[#edf6f4] lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.28em] text-[#a9ded6]">
            01 · One clear view
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              "Live dashboards",
              "Team workflows",
              "Smart reporting",
              "Integrations",
            ].map((item) => (
              <article key={item} className="border-t border-white/20 py-8">
                <h3 className="font-serif text-3xl font-light">{item}</h3>
                <p className="mt-3 text-sm text-white/55">
                  Less noise, better decisions and a system your whole team can
                  trust.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
        <h2 className="max-w-2xl font-serif text-6xl font-light leading-none">
          Your next stage starts with visibility.
        </h2>
        <a
          href="mailto:hello@scaleflow.example"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#183534] px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white"
        >
          Talk to our team <ArrowUpRight className="size-4" />
        </a>
      </section>
    </main>
  );
}
