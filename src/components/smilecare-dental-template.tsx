import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function SmilecareDentalTemplate() {
  return (
    <main className="bg-[#edf5f1] text-[#203330]">
      <header className="fixed inset-x-0 top-0 z-30 flex h-20 items-center justify-between border-b border-[#203330]/10 bg-[#edf5f1]/85 px-6 backdrop-blur-md lg:px-12">
        <span className="font-serif text-2xl tracking-[0.12em]">SmileCare</span>
        <nav className="hidden gap-8 text-xs uppercase tracking-[0.2em] md:flex">
          <a href="#care">Care</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-[#6aa99f] px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white"
        >
          Book a visit
        </a>
      </header>
      <section className="relative flex min-h-screen items-end overflow-hidden px-6 pb-24 pt-32 lg:px-12">
        <Image
          src="/dental-clinic/1.jpg"
          alt="SmileCare dental clinic"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#203330]/80 to-transparent" />
        <div className="relative max-w-4xl text-white">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#b6e0d5]">
            Modern dentistry · Human care
          </p>
          <h1 className="font-serif text-7xl font-light leading-[0.88] sm:text-9xl">
            Confidence
            <br />
            <em className="text-[#b6e0d5]">starts with care.</em>
          </h1>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#6aa99f] px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em]"
          >
            Book an appointment <ArrowUpRight className="size-4" />
          </a>
        </div>
      </section>
      <section
        id="care"
        className="mx-auto grid max-w-7xl gap-12 px-6 py-28 lg:grid-cols-2 lg:px-12"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[#4c8a7e]">
            01 · A better visit
          </p>
          <h2 className="mt-6 max-w-lg font-serif text-6xl font-light leading-none">
            A calmer way to care for your smile.
          </h2>
        </div>
        <p className="max-w-xl text-xl leading-relaxed text-[#203330]/65 lg:pt-16">
          From your first visit to your brightest smile, our team makes modern
          dental care feel clear, comfortable and personal.
        </p>
      </section>
      <section
        id="services"
        className="bg-[#203330] px-6 py-28 text-[#edf5f1] lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.28em] text-[#b6e0d5]">
            02 · Services
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              "Preventive care",
              "Cosmetic dentistry",
              "Family appointments",
              "Emergency support",
            ].map((item) => (
              <article key={item} className="border-t border-white/20 py-8">
                <h3 className="font-serif text-3xl font-light">{item}</h3>
                <p className="mt-3 text-sm text-white/55">
                  Thoughtful treatment, explained clearly and built around you.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
        <p className="text-xs uppercase tracking-[0.28em] text-[#4c8a7e]">
          03 · Your next visit
        </p>
        <h2 className="mt-6 max-w-2xl font-serif text-6xl font-light leading-none">
          Let&apos;s make your next appointment feel different.
        </h2>
        <a
          href="mailto:hello@smilecare.example"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#203330] px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white"
        >
          Start a conversation <ArrowUpRight className="size-4" />
        </a>
      </section>
    </main>
  );
}
