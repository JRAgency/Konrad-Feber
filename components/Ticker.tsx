import { ticker } from "@/lib/site";

// Großer Verfahren-Lauftext am Hero-Ende (dunkel, Display-Typo).
// Zwei identische Hälften → translateX(-50%) loopt nahtlos.
export default function Ticker() {
  const half = [...ticker];
  const loop = [...half, ...half];
  return (
    <div className="section-dark overflow-hidden border-y border-[var(--color-line-light)] py-6">
      <div className="ticker-track" aria-hidden="true">
        {loop.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className={`font-display mr-10 flex shrink-0 items-center gap-10 whitespace-nowrap text-[clamp(1.6rem,3.2vw,2.8rem)] uppercase ${
              i % 2 === 0 ? "text-white/85" : "text-outline"
            }`}
          >
            {t}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--color-accent-bright)"
              strokeWidth="2"
              strokeLinecap="round"
              className="shrink-0 opacity-70"
            >
              <path d="M12 2v20M2 12h20" />
            </svg>
          </span>
        ))}
      </div>
      <span className="sr-only">{ticker.join(", ")}</span>
    </div>
  );
}
