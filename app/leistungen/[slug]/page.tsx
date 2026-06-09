import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { services, site } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return { title: s.title, description: s.excerpt };
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();

  const others = services.filter((x) => x.slug !== slug);

  return (
    <>
      {/* Hero mit Bild */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden pt-32">
        <div className="absolute inset-0">
          <Image src={s.image} alt={s.title} fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)] via-[var(--color-dark)]/75 to-[var(--color-dark)]/45" />
        </div>
        <div className="container-x relative pb-14">
          <Reveal>
            <Link href="/leistungen" className="eyebrow is-light">
              Leistungen
            </Link>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display h-section mt-5 max-w-3xl text-white uppercase">{s.title}</h1>
          </Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          {/* Text */}
          <div>
            <Reveal>
              <p className="text-xl leading-relaxed text-[var(--color-fg)]/90">{s.intro}</p>
            </Reveal>
            <Reveal delay={100}>
              <ul className="mt-10 space-y-4">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-4 text-[var(--color-muted)]">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Spec-Tabelle */}
          <div>
            <Reveal delay={120}>
              <div className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-ink-3)] p-7">
                <h2 className="font-display text-lg text-[var(--color-fg)]">Technische Daten</h2>
                <dl className="mt-5 divide-y divide-[var(--color-line)]">
                  {s.specs.map((spec) => (
                    <div key={spec.label} className="grid grid-cols-2 gap-4 py-3.5">
                      <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)]">
                        {spec.label}
                      </dt>
                      <dd className="text-sm text-[var(--color-fg)]">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
                <Link href="/kontakt" className="btn btn-primary mt-7 w-full justify-center">
                  Anfrage stellen
                </Link>
                <a href={`tel:${site.contact.phoneHref}`} className="mt-3 block text-center text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors">
                  oder anrufen: {site.contact.phone}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Weitere Leistungen */}
      <section className="border-t border-[var(--color-line)] section-y">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Weitere Leistungen</p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {others.map((o, i) => (
              <Reveal key={o.slug} delay={i * 90}>
                <Link
                  href={`/leistungen/${o.slug}`}
                  className="group card-lift block overflow-hidden rounded-3xl border border-[var(--color-line)] bg-[var(--color-ink-3)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={o.image} alt={o.title} fill sizes="33vw" className="img-zoom object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg text-[var(--color-fg)]">{o.title}</h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
