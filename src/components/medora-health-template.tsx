import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function MedoraHealthTemplate() {
  return (
    <main className="bg-[#eef3f8] text-[#1f3042]">
      <header className="flex h-20 items-center justify-between border-b border-[#1f3042]/10 px-6 lg:px-12">
        <span className="font-serif text-2xl tracking-[0.12em]">Medora</span>
        <nav className="hidden gap-8 text-xs uppercase tracking-[0.2em] md:flex">
          <a href="#care">Care</a>
          <a href="#departments">Departments</a>
          <a href="#contact">Contact</a>
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-[#6b8eb5] px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white"
        >
          Find your care
        </a>
      </header>
      <section className="relative flex min-h-[760px] items-end overflow-hidden px-6 py-24 text-white lg:px-12">
        <Image
          src="/hospital/1.jpg"
          alt="Medora Health"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1f3042]/90 to-[#1f3042]/10" />
        <div className="relative max-w-5xl">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#bcd5ee]">
            Care, connected · Health system
          </p>
          <h1 className="font-serif text-7xl font-light leading-[0.88] sm:text-9xl">
            Better health.
            <br />
            <em className="text-[#bcd5ee]">Better together.</em>
          </h1>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#6b8eb5] px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em]"
          >
            Find your care <ArrowUpRight className="size-4" />
          </a>
        </div>
      </section>
      <section
        id="care"
        className="mx-auto grid max-w-7xl gap-12 px-6 py-28 lg:grid-cols-2 lg:px-12"
      >
        <h2 className="font-serif text-6xl font-light leading-none">
          Specialist care with a human centre.
        </h2>
        <p className="max-w-xl text-xl leading-relaxed text-[#1f3042]/65 lg:pt-16">
          Medora brings physicians, technology and compassionate support
          together around the people who need it most.
        </p>
      </section>
      <section
        id="departments"
        className="bg-[#1f3042] px-6 py-28 text-[#eef3f8] lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.28em] text-[#bcd5ee]">
            01 · Patient-first
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              "Find a specialist",
              "Departments",
              "Patient resources",
              "Emergency care",
            ].map((item) => (
              <article key={item} className="border-t border-white/20 py-8">
                <h3 className="font-serif text-3xl font-light">{item}</h3>
                <p className="mt-3 text-sm text-white/55">
                  Clear information and considered support at every step.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
        <p className="text-xs uppercase tracking-[0.28em] text-[#6b8eb5]">
          02 · Your care team
        </p>
        <h2 className="mt-6 max-w-2xl font-serif text-6xl font-light leading-none">
          Let&apos;s find the right next step.
        </h2>
        <a
          href="mailto:care@medora.example"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#1f3042] px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white"
        >
          Speak with Medora <ArrowUpRight className="size-4" />
        </a>
      </section>
    </main>
  );
}
