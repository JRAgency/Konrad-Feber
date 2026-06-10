import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import BewerbungForm from "@/components/BewerbungForm";
import { site, lehrjahrStart } from "@/lib/site";

export const metadata: Metadata = {
  title: "Karriere & Ausbildung",
  description:
    "Ausbildung zum Werkzeugmechaniker und zur Kauffrau/zum Kaufmann für Büromanagement, Schüler- und Studentenpraktika bei Konrad Feder.",
};

const paths = [
  {
    title: "Ausbildung zum Werkzeugmechaniker",
    text: "Der Beruf des Werkzeugmechanikers stellt die höchste Stufe der Metallbearbeitung dar. Du lernst konventionelles und CNC-Drehen, Fräsen, Schleifen sowie CAD/CAM-Programmierung. Ausbildungszeit: 3,5 Jahre, Berufsfachschule Herzogenaurach, überbetrieblich bei der IHK Nürnberg.",
    img: "/img/cnc-drehen.jpg",
    tag: "Ausbildung · 3,5 Jahre",
  },
  {
    title: "Ausbildung Kaufmann/-frau für Büromanagement",
    text: "Du organisierst, koordinierst und kommunizierst – und lernst die kaufmännischen Abläufe eines modernen Fertigungsbetriebs von Grund auf kennen.",
    img: "/img/buero.jpg",
    tag: "Ausbildung",
  },
  {
    title: "Schülerpraktika",
    text: "Jedes Jahr heißen wir Praktikanten von den Schulen willkommen. Du erhältst einen weitläufigen Überblick zum Berufsbild des Werkzeugmechanikers oder des Kaufmanns für Büromanagement – ein Einblick in deine mögliche Zukunft.",
    img: "/img/schueler.jpg",
    tag: "Praktikum",
  },
  {
    title: "Studentenpraktika",
    text: "Maschinenbaustudenten ermöglichen wir die praktische Weiterbildung ihrer theoretischen Studieninhalte. Wir begleiten dich bei Bedarf während deiner gesamten Studienzeit an unseren Maschinen.",
    img: "/img/student.jpg",
    tag: "Praktikum",
  },
];

export default function KarrierePage() {
  return (
    <>
      <PageHero
        eyebrow="Karriere"
        title="Wir suchen"
        accent="Dich"
        subtitle="Wir bieten dem interessierten Nachwuchs Einblicke und Ausbildung – und sichern uns so optimal gebildete Mitarbeiter für die Zukunft."
        image="/img/karriere.jpg"
        imageAlt="Junger Techniker prüft ein Präzisionsteil mit dem Messschieber"
      />

      {/* Lehrjahr-Banner */}
      <div className="bg-[var(--color-amber)]">
        <div className="container-x flex flex-wrap items-center justify-between gap-4 py-4">
          <p className="font-display text-lg text-white">
            Das neue Lehrjahr beginnt am {lehrjahrStart}
          </p>
          <a href="#bewerbung" className="btn btn-white !text-[var(--color-amber)]">
            Jetzt bewerben
          </a>
        </div>
      </div>

      <section className="section-y">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          {paths.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <article className="group card-lift h-full overflow-hidden rounded-3xl border border-[var(--color-line)] bg-[var(--color-ink-3)]">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image src={p.img} alt={p.title} fill sizes="(max-width:768px) 100vw, 50vw" className="img-zoom object-cover" />
                  <span className="absolute left-4 top-4 rounded-full bg-[var(--color-accent)] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white">
                    {p.tag}
                  </span>
                </div>
                <div className="p-7">
                  <h2 className="font-display text-xl text-[var(--color-fg)]">{p.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{p.text}</p>
                  <a
                    href="#bewerbung"
                    className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]"
                  >
                    Jetzt bewerben
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Bewerbung */}
      <section id="bewerbung" className="scroll-mt-28 bg-[var(--color-ink-2)] section-y">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Intro + Ansprechpartner */}
          <div>
            <Reveal>
              <p className="eyebrow">Deine Bewerbung</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display mt-5 text-[clamp(1.6rem,3.5vw,2.4rem)] text-[var(--color-fg)] uppercase">
                Jetzt online bewerben
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 text-[var(--color-muted)] leading-relaxed">
                Fülle einfach das Formular aus und lade deine Unterlagen hoch – wir
                melden uns bei dir. Lieber per E-Mail oder telefonisch? Kein Problem.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 space-y-4">
                <Contact label="Ansprechpartner" value={site.owner} />
                <Contact
                  label="Telefon"
                  value={site.contact.phone}
                  href={`tel:${site.contact.phoneHref}`}
                />
                <Contact
                  label="E-Mail"
                  value={site.contact.email}
                  href={`mailto:${site.contact.email}`}
                />
                <Contact label="Bürozeiten" value={site.hours} />
              </div>
            </Reveal>
          </div>

          {/* Formular */}
          <Reveal delay={120}>
            <BewerbungForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Contact({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="grid grid-cols-[130px_1fr] gap-4 border-b border-[var(--color-line)] pb-4">
      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
        {label}
      </span>
      {href ? (
        <a href={href} className="text-[var(--color-fg)] hover:text-[var(--color-accent)] transition-colors">
          {value}
        </a>
      ) : (
        <span className="text-[var(--color-fg)]">{value}</span>
      )}
    </div>
  );
}
