import Image from "next/image";
import Reveal from "./Reveal";

// Cinematischer Seiten-Hero: dunkles Vollbild mit Kunden-/Maschinenfoto.
// Ohne `image` fällt er auf das tiefe Industrie-Navy mit Blueprint-Raster zurück.
export default function PageHero({
  eyebrow,
  title,
  accent,
  subtitle,
  image,
  imageAlt = "",
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="section-dark relative flex min-h-[52vh] items-end overflow-hidden pt-40 pb-16">
      {image ? (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)] via-[var(--color-dark)]/55 to-[var(--color-dark)]/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-dark)]/55 via-transparent to-transparent" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-blueprint">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 90% at 80% 0%, rgba(47,90,160,.28), transparent 65%)",
            }}
          />
        </div>
      )}
      <div className="container-x relative">
        <Reveal>
          <p className="eyebrow is-light">{eyebrow}</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-display h-section mt-5 max-w-4xl text-white uppercase">
            {title}{" "}
            {accent && <span className="text-[var(--color-accent-bright)]">{accent}</span>}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">{subtitle}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
