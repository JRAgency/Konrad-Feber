import { referenceLogos } from "@/lib/site";

// Durchlaufendes Referenz-Logo-Band (Automobil & Bahn).
// Echte Marken-Logos auf hellen Kacheln (Trusted-by-Look).
export default function LogoMarquee() {
  const loop = [...referenceLogos, ...referenceLogos, ...referenceLogos];
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
        <div className="marquee-track gap-6 sm:gap-8 px-4">
          {loop.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex h-20 w-44 shrink-0 items-center justify-center rounded-2xl border border-[var(--color-line)] bg-white px-7 shadow-sm"
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
