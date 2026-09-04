import { TECHNOLOGIES, type Technology } from "@/data/technologies";

function TechBadge({ tech }: { tech: Technology }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-2.5 rounded-full border border-neutral-200 bg-white py-2.5 pl-2.5 pr-5 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
      <span className="grid size-7 place-items-center rounded-lg bg-neutral-900 text-[10px] font-bold tracking-tight text-white">
        {tech.mark}
      </span>
      <span className="whitespace-nowrap text-sm font-medium text-neutral-600">
        {tech.name}
      </span>
    </span>
  );
}

export default function TechMarquee() {
  return (
    <section
      aria-label="Technologies we build with"
      className="border-y border-neutral-100 bg-neutral-50/50 py-12 sm:py-14"
    >
      <p className="text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-neutral-400">
        The stack behind every launch
      </p>
      <div className="marquee-mask group relative mt-8 overflow-hidden">
        <div className="flex w-max animate-marquee gap-3 pr-3 group-hover:[animation-play-state:paused]">
          {TECHNOLOGIES.map((tech) => (
            <TechBadge key={tech.name} tech={tech} />
          ))}
          {TECHNOLOGIES.map((tech) => (
            <span key={`dup-${tech.name}`} aria-hidden="true">
              <TechBadge tech={tech} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
