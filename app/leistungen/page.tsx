import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "CNC-Drehen, CNC-Fräsen, Schleiftechnik und Werkzeug-Präzisions-Montage – das Leistungsspektrum von Konrad Feder.",
};

export default function LeistungenPage() {
  return (
    <>
      <PageHero
        eyebrow="Leistungen"
        title="Unser"
        accent="Leistungsspektrum"
        subtitle="Von der konventionellen Bearbeitung bis zur 5-Achs-CNC-Fertigung – wir decken die gesamte Kette der spanenden Metallbearbeitung ab."
      />

      <section className="section-y">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 90}>
              <Link
                href={`/leistungen/${s.slug}`}
                className="group card-lift flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--color-line)] bg-[var(--color-ink-3)] sm:flex-row"
              >
                <div className="relative aspect-[4/3] sm:aspect-auto sm:w-2/5 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width:768px) 100vw, 40vw"
                    className="img-zoom object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h2 className="font-display text-2xl text-[var(--color-fg)]">{s.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
                    {s.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                    Details ansehen
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
