import Reveal from "./Reveal";

export default function PageHero({
  eyebrow,
  title,
  accent,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative border-b border-[var(--color-line)] bg-[var(--color-ink-2)] pt-36 pb-16">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(55% 80% at 85% 0%, rgba(39,55,72,.08), transparent 60%)",
        }}
      />
      <div className="container-x relative">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-display h-section mt-5 max-w-4xl text-[var(--color-fg)]">
            {title} {accent && <span className="text-[var(--color-accent)]">{accent}</span>}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
