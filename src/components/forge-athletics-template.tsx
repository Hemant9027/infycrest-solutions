import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ForgeAthleticsTemplate() {
  return (
    <main className="bg-[#202321] text-[#f3eee3]">
      <header className="flex h-20 items-center justify-between border-b border-white/10 px-6 lg:px-12">
        <span className="font-black tracking-[0.12em] text-2xl">FORGE</span>
        <nav className="hidden gap-8 text-xs uppercase tracking-[0.2em] md:flex">
          <a href="#training">Training</a>
          <a href="#club">Club</a>
          <a href="#join">Join</a>
        </nav>
        <a
          href="#join"
          className="rounded-full bg-[#d3a85e] px-5 py-3 text-xs font-bold uppercase tracking-[0.15em] text-[#202321]"
        >
          Try a session
        </a>
      </header>
      <section className="relative flex min-h-[760px] items-end overflow-hidden px-6 py-24 lg:px-12">
        <Image
          src="/gym/1.jpg"
          alt="Forge athletics club"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#202321] via-[#202321]/50 to-transparent" />
        <div className="relative max-w-5xl">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-[#d3a85e]">
            Earn your strength · Athletics club
          </p>
          <h1 className="text-7xl font-black leading-[0.82] tracking-[-0.06em] sm:text-9xl">
            Built for
            <br />
            <em className="text-[#d3a85e]">the work.</em>
          </h1>
          <a
            href="#join"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#d3a85e] px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#202321]"
          >
            Try a session <ArrowUpRight className="size-4" />
          </a>
        </div>
      </section>
      <section
        id="club"
        className="mx-auto grid max-w-7xl gap-12 px-6 py-28 lg:grid-cols-2 lg:px-12"
      >
        <h2 className="text-6xl font-black leading-[0.86] tracking-[-0.06em]">
          Training with intent, community and no shortcuts.
        </h2>
        <p className="max-w-xl text-xl leading-relaxed text-white/60 lg:pt-16">
          Forge is a focused training club for people who want to get stronger,
          move better and keep showing up.
        </p>
      </section>
      <section
        id="training"
        className="bg-[#d3a85e] px-6 py-28 text-[#202321] lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em]">
            01 · The floor
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              "Strength floor",
              "Group training",
              "Personal coaching",
              "Recovery",
            ].map((item) => (
              <article key={item} className="border-t border-[#202321]/25 py-8">
                <h3 className="text-3xl font-black tracking-[-0.04em]">
                  {item}
                </h3>
                <p className="mt-3 text-sm text-[#202321]/60">
                  Progressive programming, expert coaching and a room that keeps
                  you moving.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="join" className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
        <h2 className="max-w-2xl text-6xl font-black leading-[0.86] tracking-[-0.06em]">
          Do the work. Find your people.
        </h2>
        <a
          href="mailto:join@forge.example"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#d3a85e] px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#202321]"
        >
          Join Forge <ArrowUpRight className="size-4" />
        </a>
      </section>
    </main>
  );
}
