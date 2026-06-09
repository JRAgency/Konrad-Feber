import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import LogoMarquee from "@/components/LogoMarquee";
import { referenceLogos } from "@/lib/site";

export const metadata: Metadata = {
  title: "Referenzen",
  description:
    "Zu unseren Kunden zählen Unternehmen aus der Automobilindustrie und die Deutsche Bahn. Vertrauen durch Qualität und Termintreue.",
};

const branches = [
  {
    title: "Automobilindustrie",
    text: "Präzisionsbauteile, Vorrichtungen und Werkzeuge für Hersteller, Zulieferer und den Fachhandel.",
  },
  {
    title: "Bahntechnik",
    text: "Zuverlässige, maßhaltige Komponenten für den anspruchsvollen Einsatz im Schienenverkehr.",
  },
  {
    title: "Maschinen- & Anlagenbau",
    text: "Einzelteile, Ersatzteile und Baugruppen für Sondermaschinen und industrielle Anlagen.",
  },
];

export default function ReferenzenPage() {
  return (
    <>
      <PageHero
        eyebrow="Referenzen"
        title="Vertrauen aus Industrie &"
        accent="Bahn"
        subtitle="Zu unseren Kunden zählen Unternehmen aus der Automobilindustrie sowie die Deutsche Bahn – Branchen, die kompromisslose Präzision verlangen."
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
              <Reveal key={logo.name} delay={i * 70} className="card-lift flex h-28 items-center justify-center rounded-2xl bg-white px-8 shadow-lg shadow-black/20">
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

      {/* Branchen */}
      <section className="bg-[var(--color-ink-2)] section-y">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Branchen</p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {branches.map((b, i) => (
              <Reveal key={b.title} delay={i * 90}>
                <div className="card-lift h-full rounded-3xl border border-[var(--color-line)] bg-[var(--color-ink-3)] p-8">
                  <h2 className="font-display text-xl text-[var(--color-fg)]">{b.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{b.text}</p>
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
