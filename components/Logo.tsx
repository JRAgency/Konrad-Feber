import Link from "next/link";

// Konrad-Feder-Logo, monochrom eingefärbt via CSS-Maske (Alpha der Original-Assets).
// tone="dark"  → Dunkelblau (Akzent) auf hellem Hintergrund (Header gescrollt).
// tone="light" → Weiß auf dunklem Hintergrund (Hero/Footer).
// size="md" Header · size="lg" Footer.
export default function Logo({
  className = "",
  tone = "light",
  showFeather = true,
  size = "md",
}: {
  className?: string;
  tone?: "light" | "dark";
  showFeather?: boolean;
  size?: "md" | "lg";
}) {
  const color = tone === "light" ? "#ffffff" : "var(--color-accent)";

  const mask = (url: string) => ({
    backgroundColor: color,
    WebkitMaskImage: `url(${url})`,
    maskImage: `url(${url})`,
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskSize: "contain",
    maskSize: "contain",
    WebkitMaskPosition: "center",
    maskPosition: "center",
  });

  // Höhen/Breiten aus den Original-Seitenverhältnissen (Feder 300×582, Schrift 199×40)
  const wordH = size === "lg" ? 40 : showFeather ? 32 : 36;
  const featherH = size === "lg" ? 72 : 56;
  const wordW = Math.round((wordH * 199) / 40);
  const featherW = Math.round((featherH * 300) / 582);

  return (
    <Link
      href="/"
      aria-label="Konrad Feder – Startseite"
      className={`inline-flex items-center gap-3 ${className}`}
    >
      {showFeather && (
        <span
          aria-hidden="true"
          style={{
            ...mask("/logo-feder.png"),
            width: `${featherW}px`,
            height: `${featherH}px`,
            display: "inline-block",
          }}
        />
      )}
      <span
        aria-hidden="true"
        style={{
          ...mask("/logo-schrift-mask.png"),
          width: `${wordW}px`,
          height: `${wordH}px`,
          display: "inline-block",
        }}
      />
      <span className="sr-only">Konrad Feder Werkzeug-Präzisions-Montage</span>
    </Link>
  );
}
