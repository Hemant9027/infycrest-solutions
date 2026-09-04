interface HibiscusProps {
  className?: string;
}

/** Hand-drawn stylised hibiscus bloom — the inn's namesake mark. */
export default function Hibiscus({ className }: HibiscusProps) {
  const petals = [0, 72, 144, 216, 288];
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" fill="none">
      <g fill="currentColor">
        {petals.map((angle) => (
          <path
            key={angle}
            transform={`rotate(${angle} 50 50)`}
            d="M50 53C40.5 43.5 36.2 29.8 39.6 17.4 41.4 11.9 45 7.7 50 6.2c5 1.5 8.6 5.7 10.4 11.2 3.4 12.4-.9 26.1-10.4 35.6Z"
          />
        ))}
      </g>
      <path
        d="M50 50C55.5 43.5 59.5 36.5 61.5 27.5"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <g fill="currentColor">
        <circle cx="61.5" cy="27.5" r="2.6" />
        <circle cx="65.5" cy="23.5" r="2.2" />
        <circle cx="57" cy="21.5" r="2.2" />
        <circle cx="63.5" cy="31.5" r="2" />
      </g>
      <circle cx="50" cy="50" r="4.4" fill="currentColor" />
    </svg>
  );
}
