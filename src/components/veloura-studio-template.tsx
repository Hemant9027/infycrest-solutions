import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function VelouraStudioTemplate() {
  return (
    <main className="bg-[#f7efec] text-[#3a292a]">
      <header className="flex h-20 items-center justify-between border-b border-[#3a292a]/10 px-6 lg:px-12">
        <span className="font-serif text-2xl tracking-[0.16em]">Veloura</span>
        <nav className="hidden gap-8 text-xs uppercase tracking-[0.2em] md:flex">
          <a href="#story">Studio</a>
          <a href="#services">Services</a>
          <a href="#contact">Book</a>
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-[#b67f79] px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white"
        >
          Book your ritual
        </a>
      </header>
      <section className="relative flex min-h-[760px] items-end overflow-hidden px-6 py-24 lg:px-12">
        <Image
          src="/salon/1.jpg"
          alt="Veloura beauty studio"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3a292a]/85 to-transparent" />
        <div className="relative max-w-5xl text-white">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#f2c7c0]">
            The art of feeling like yourself
          </p>
          <h1 className="font-serif text-7xl font-light leading-[0.88] sm:text-9xl">
            Your most
            <br />
            <em className="text-[#f2c7c0]">beautiful ritual.</em>
          </h1>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#b67f79] px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em]"
          >
            Book your ritual <ArrowUpRight className="size-4" />
          </a>
        </div>
      </section>
      <section
        id="story"
        className="mx-auto grid max-w-7xl gap-12 px-6 py-28 lg:grid-cols-2 lg:px-12"
      >
        <h2 className="font-serif text-6xl font-light leading-none">
          A considered studio for hair, skin and self-expression.
        </h2>
        <p className="max-w-xl text-xl leading-relaxed text-[#3a292a]/65 lg:pt-16">
          Slow down, settle in and leave feeling entirely yourself. Every
          service is shaped around your features, your rhythm and your day.
        </p>
      </section>
      <section
        id="services"
        className="bg-[#3a292a] px-6 py-28 text-[#f7efec] lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.28em] text-[#f2c7c0]">
            01 · Services
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              "Hair design",
              "Skin rituals",
              "Bridal studio",
              "Private appointments",
            ].map((item) => (
              <article key={item} className="border-t border-white/20 py-8">
                <h3 className="font-serif text-3xl font-light">{item}</h3>
                <p className="mt-3 text-sm text-white/55">
                  A personal service, quietly luxurious and made for your
                  features.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
        <p className="text-xs uppercase tracking-[0.28em] text-[#b67f79]">
          02 · Your appointment
        </p>
        <h2 className="mt-6 max-w-2xl font-serif text-6xl font-light leading-none">
          Make space for feeling good.
        </h2>
        <a
          href="mailto:hello@veloura.example"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#3a292a] px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white"
        >
          Start a booking <ArrowUpRight className="size-4" />
        </a>
      </section>
    </main>
  );
}
