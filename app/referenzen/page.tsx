import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import LogoMarquee from "@/components/LogoMarquee";
import { referenceLogos, branchen } from "@/lib/site";

export const metadata: Metadata = {
  title: "Referenzen",
  description:
    "Zu unseren Kunden zählen Unternehmen aus der Automobilindustrie und die Deutsche Bahn. Vertrauen durch Qualität und Termintreue.",
};

export default function ReferenzenPage() {
  return (
    <>
      <PageHero
        eyebrow="Referenzen"
        title="Vertrauen aus Industrie &"
        accent="Bahn"
        subtitle="Zu unseren Kunden zählen Unternehmen aus der Automobilindustrie sowie die Deutsche Bahn – Branchen, die kompromisslose Präzision verlangen."
        image="/img/detail-revolver.jpg"
        imageAlt="Werkzeugrevolver einer CNC-Drehmaschine"
      />

      <LogoMarquee />

      {/* Logo-Grid */}
      <section className="section-y">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Eine Auswahl</p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {referenceLogos.map((logo, i) => (
              <Reveal key={logo.name} delay={i * 70} className="card-lift flex h-28 items-center justify-center rounded-2xl border border-[var(--color-line)] bg-white px-8 shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.file}
                  alt={`${logo.name} Logo`}
                  className="max-h-12 max-w-full w-auto object-contain"
                />
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-xs text-[var(--color-muted)]/70">
            Logos der genannten Marken dienen der branchenüblichen Referenzdarstellung. Die
            Nutzung erfolgt vorbehaltlich der Freigabe durch die jeweiligen Markeninhaber.
          </p>
        </div>
      </section>

      {/* Branchen (Bild-Karten) */}
      <section className="bg-[var(--color-ink-2)] section-y">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Branchen</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display h-section mt-5 max-w-2xl text-[var(--color-fg)] uppercase">
              Wo unsere Bauteile arbeiten
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {branchen.map((b, i) => (
              <Reveal key={b.title} delay={i * 90}>
                <div className="group card-lift relative h-full overflow-hidden rounded-3xl">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={b.image}
                      alt={b.title}
                      fill
                      sizes="(max-width:768px) 100vw, 33vw"
                      className="img-zoom object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)]/95 via-[var(--color-dark)]/40 to-[var(--color-dark)]/15" />
                    <div className="absolute inset-x-0 bottom-0 p-7">
                      <h3 className="font-display text-2xl text-white">{b.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-white/70">{b.text}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="mt-12 text-center">
              <Link href="/kontakt" className="btn btn-primary">
                Werden Sie unser nächster Kunde
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
