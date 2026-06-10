import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import { site, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "Unternehmen",
  description:
    "Konrad Feder – ein modernes Familienunternehmen für Präzisionszerspanung und Werkzeugbau in Vestenbergsgreuth, Mittelfranken.",
};

export default function UnternehmenPage() {
  return (
    <>
      <PageHero
        eyebrow="Unternehmen"
        title="Präzision aus"
        accent="Mittelfranken"
        subtitle="Ein modernes Unternehmen mit Tradition – spezialisiert auf höchste Stufen der Metallbearbeitung."
        image="/img/about.jpg"
        imageAlt="CNC-Drehmaschine im Einsatz bei Konrad Feder"
      />

      <section className="section-y">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="group overflow-hidden rounded-3xl">
            <Image
              src="/img/cnc-fraesen.jpg"
              alt="CNC-Bearbeitung mit Kühlmittel in der Fertigung"
              width={760}
              height={620}
              className="img-zoom h-full w-full object-cover"
            />
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow">Wer wir sind</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display h-section mt-5 text-[var(--color-fg)] uppercase">
                Verantwortung &amp; Handwerk
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-[var(--color-muted)]">
                <p>
                  Als modernes Unternehmen sind wir uns unserer gesellschaftlichen
                  Verantwortung bewusst. Wir verbinden jahrzehntelange Erfahrung in der
                  Zerspanung mit modernster CNC-Technik – und liefern so Präzision auf
                  höchstem Niveau.
                </p>
                <p>
                  Kundenzufriedenheit ist einer unserer obersten Unternehmensgrundsätze. Wir
                  erreichen sie durch hohe Qualität, Termintreue, Flexibilität,
                  Zuverlässigkeit und partnerschaftliche Zusammenarbeit mit unseren Kunden.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Werte */}
      <section className="bg-[var(--color-ink-2)] section-y">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Unsere Grundsätze</p>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-5">
            {site.values.map((v, i) => (
              <Reveal key={v} delay={i * 80} className="bg-[var(--color-ink-3)] p-7">
                <span className="font-display text-2xl text-[var(--color-accent)]">
                  0{i + 1}
                </span>
                <p className="mt-4 font-display text-lg text-[var(--color-fg)]">{v}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-y">
        <div className="container-x grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-[var(--color-line)] bg-[var(--color-line)] lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="bg-[var(--color-ink-3)] p-8 text-center">
              <p className="font-display text-[clamp(2.4rem,5vw,3.6rem)] text-[var(--color-accent)]">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-[var(--color-muted)]">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Einblicke in die Fertigung */}
      <section className="bg-[var(--color-ink-2)] section-y">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Einblicke</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display h-section mt-5 max-w-2xl text-[var(--color-fg)] uppercase">
              Wo Präzision entsteht
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              { src: "/img/qualitaet.jpg", alt: "Messung eines Werkstücks mit dem digitalen Messschieber" },
              { src: "/img/detail-drehen.jpg", alt: "Drehteil zwischen Spitzen einer Drehmaschine" },
              { src: "/img/detail-funken.jpg", alt: "Funkenflug bei der Metallbearbeitung" },
            ].map((img, i) => (
              <Reveal key={img.src} delay={i * 90} className="group overflow-hidden rounded-3xl">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={750}
                  className="img-zoom aspect-[4/5] w-full object-cover"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark bg-blueprint py-16">
        <div className="container-x flex flex-col items-center gap-6 text-center">
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] text-white uppercase">
            Lernen Sie uns kennen
          </h2>
          <Link href="/kontakt" className="btn btn-white">
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  );
}
