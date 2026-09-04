export default function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const nameCls = tone === "dark" ? "text-sand" : "text-ink";
  return (
    <a
      href="#top"
      className="group inline-flex items-center gap-2.5"
      aria-label="Smith's Motel No. 1 — back to top"
    >
      <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-2xl bg-sea shadow-card transition-transform duration-300 group-hover:rotate-6">
        <svg
          viewBox="0 0 40 40"
          className="h-6 w-6"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="20" cy="17" r="6.5" fill="#F4B23E" />
          <path
            d="M6 29c3-2.4 6-3.6 9-3.6 3.5 0 6 1.7 9.5 1.7 3 0 6.2-1.2 9.5-3.6"
            stroke="#FAF6EC"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
          <path
            d="M9 34c2.6-1.7 5-2.6 7.6-2.6 3 0 5.4 1.4 8.4 1.4 2.6 0 5.2-1 8-2.6"
            stroke="#FAF6EC"
            strokeWidth="2.6"
            strokeLinecap="round"
            opacity="0.65"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-lg font-semibold tracking-tight sm:text-xl ${nameCls}`}
        >
          Smith&rsquo;s Motel
        </span>
        <span className="text-[10px] font-bold tracking-[0.32em] text-coral uppercase">
          No. 1 · Nassau
        </span>
      </span>
    </a>
  );
}
