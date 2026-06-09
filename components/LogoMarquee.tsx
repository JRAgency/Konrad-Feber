import { referenceLogos } from "@/lib/site";

// Durchlaufendes Referenz-Logo-Band (Automobil & Bahn).
// Echte Marken-Logos auf hellen Kacheln (Trusted-by-Look).
export default function LogoMarquee() {
  // Eine Hälfte breit genug, um auch große Viewports zu füllen ...
  const half = [...referenceLogos, ...referenceLogos, ...referenceLogos];
  // ... der Track besteht aus zwei IDENTISCHEN Hälften → translateX(-50%) loopt nahtlos.
  const loop = [...half, ...half];
  return (
    <section className="border-y border-[var(--color-line)] bg-[var(--color-ink-2)] py-12 overflow-hidden">{/* helle Sektion */}
      <div className="container-x mb-9">
        <p className="text-center eyebrow justify-center">
          Vertrauen aus Industrie &amp; Bahn
        </p>
      </div>
      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        {/* Abstand über margin-right (nicht gap) – sonst bricht der Loop am Hälften-Übergang */}
        <div className="marquee-track">
          {loop.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="mr-6 flex h-20 w-44 shrink-0 items-center justify-center rounded-2xl border border-[var(--color-line)] bg-white px-7 shadow-sm sm:mr-8"
              title={logo.name}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.file}
                alt={`${logo.name} Logo`}
                className="max-h-11 max-w-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
