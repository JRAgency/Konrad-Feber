import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import LogoMarquee from "@/components/LogoMarquee";
import { services, stats, processSteps, site } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* ---------------- HERO (hell) ---------------- */}
      <section className="relative overflow-hidden bg-[var(--color-ink)] pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(50% 60% at 12% 18%, rgba(39,55,72,.07), transparent 60%)",
          }}
        />
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <p className="eyebrow">Werkzeug-Präzisions-Montage · seit {site.founded}</p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="font-display h-hero mt-6 text-[var(--color-fg)] uppercase">
                Präzision, die <span className="text-[var(--color-accent)]">Maßstäbe</span> setzt
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-[var(--color-muted)]">
                CNC-Drehen, Fräsen, Schleifen und Werkzeugbau aus Mittelfranken. Wir fertigen
                komplexe Bauteile für höchste Ansprüche – maßhaltig, termintreu und zuverlässig.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="/kontakt" className="btn btn-primary">
                  Angebot anfragen
                </Link>
                <Link href="/leistungen" className="btn btn-ghost">
                  Unsere Leistungen
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-[rgba(17,29,40,0.25)]">
              <Image
                src="/img/hero.jpg"
                alt="Präzisionsbearbeitung an einer CNC-Maschine"
                fill
                priority
                sizes="(max-width:1024px) 100vw, 48vw"
                className="object-cover"
                style={{ animation: "kenburns 24s ease-out infinite alternate" }}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-[var(--color-dark)] px-7 py-5 shadow-xl sm:block">
              <p className="font-display text-3xl text-white">± 6 μm</p>
              <p className="text-xs uppercase tracking-[0.16em] text-white/60">
                kleinste Toleranz
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- LOGO-MARQUEE ---------------- */}
      <LogoMarquee />

      {/* ---------------- EXPERTISE ---------------- */}
      <section className="bg-[var(--color-paper)] text-[var(--color-fg)] section-y">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="eyebrow">Die Expertise</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display h-section mt-5 text-[var(--color-fg)] uppercase">
                Kompromisslose Präzision in komplexen Anforderungen
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-lg leading-relaxed text-[var(--color-muted)]">
                Der Werkzeugbau ist die höchste Stufe der Metallbearbeitung. Von der
                Einzelanfertigung bis zur Serie liefern wir die technische Substanz, die
                anspruchsvollste Bauteile erfordern – mit Erfahrung aus über vier Jahrzehnten.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 grid grid-cols-2 gap-8">
                <Feature
                  title="Qualität zuerst"
                  text="100 % geprüfte Maßhaltigkeit und Oberflächengüte – dokumentiert."
                  icon={
                    <path d="M12 2 4 5v6c0 5 3.4 8.5 8 11 4.6-2.5 8-6 8-11V5l-8-3Z" />
                  }
                />
                <Feature
                  title="Integrierte Technik"
                  text="CAD/CAM, CNC-Programmierung und Fertigung aus einer Hand."
                  icon={
                    <>
                      <rect x="3" y="3" width="7" height="7" rx="1" />
                      <rect x="14" y="3" width="7" height="7" rx="1" />
                      <rect x="3" y="14" width="7" height="7" rx="1" />
                      <rect x="14" y="14" width="7" height="7" rx="1" />
                    </>
                  }
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="group relative">
            <div className="overflow-hidden rounded-3xl shadow-xl shadow-[rgba(17,29,40,0.15)]">
              <Image
                src="/img/expertise.jpg"
                alt="Präzisionsgefertigtes Metallbauteil"
                width={760}
                height={760}
                className="img-zoom h-full w-full object-cover aspect-square"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-[var(--color-dark)] px-7 py-5 sm:block">
              <p className="font-display text-3xl text-white">± 6 μm</p>
              <p className="text-xs uppercase tracking-[0.16em] text-white/60">
                kleinste Toleranz
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- LEISTUNGEN ---------------- */}
      <section className="section-y">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Reveal>
                <p className="eyebrow">Leistungen</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="font-display h-section mt-5 max-w-2xl text-[var(--color-fg)] uppercase">
                  Gefertigt für höchste Ansprüche
                </h2>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <Link href="/leistungen" className="btn btn-ghost">
                Alle Leistungen
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 90}>
                <Link
                  href={`/leistungen/${s.slug}`}
                  className="group card-lift block h-full overflow-hidden rounded-3xl border border-[var(--color-line)] bg-[var(--color-ink-3)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(max-width:768px) 100vw, 25vw"
                      className="img-zoom object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl text-[var(--color-fg)]">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                      {s.excerpt}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                      Mehr erfahren
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- STATS + ABOUT ---------------- */}
      <section className="relative overflow-hidden bg-[var(--color-ink-2)] section-y">
        <div className="container-x relative grid items-center gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="eyebrow">Über uns</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display h-section mt-5 text-[var(--color-fg)] uppercase">
                Das Fundament Ihres Erfolgs
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-lg leading-relaxed text-[var(--color-muted)]">
                Kundenzufriedenheit ist einer unserer obersten Unternehmensgrundsätze. Wir
                erreichen sie durch hohe Qualität, Termintreue, Flexibilität, Zuverlässigkeit
                und partnerschaftliche Zusammenarbeit mit unseren Kunden.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <Link href="/unternehmen" className="btn btn-primary mt-8">
                Mehr über uns
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 90} className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-ink-3)] p-8">
                <p className="font-display text-[clamp(2.4rem,5vw,3.6rem)] text-[var(--color-accent)]">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm text-[var(--color-muted)]">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- PROZESS ---------------- */}
      <section className="section-y">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Ablauf</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display h-section mt-5 max-w-2xl text-[var(--color-fg)] uppercase">
              Von der Anfrage zum fertigen Bauteil
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.n} delay={i * 90}>
                <div className="card-lift group h-full rounded-3xl border border-[var(--color-line)] bg-[var(--color-ink-3)] p-7">
                  <span className="font-display text-4xl text-[var(--color-line)] transition-colors group-hover:text-[var(--color-accent)]">
                    {step.n}
                  </span>
                  <h3 className="mt-5 font-display text-lg text-[var(--color-fg)]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA (dunkler Kontrast) ---------------- */}
      <section className="section-dark relative overflow-hidden py-24">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(50% 90% at 80% 0%, rgba(52,91,128,.35), transparent 60%)",
          }}
        />
        <div className="container-x relative flex flex-col items-center gap-8 text-center">
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,5vw,3.6rem)] text-white uppercase">
              Bereit für Ihr nächstes Projekt?
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xl text-lg text-white/75">
              Senden Sie uns Ihre Anfrage oder rufen Sie direkt an – wir beraten Sie
              persönlich zu Verfahren, Werkstoff und Machbarkeit.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/kontakt" className="btn btn-white">
                Anfrage senden
              </Link>
              <a href={`tel:${site.contact.phoneHref}`} className="btn btn-ghost-light">
                {site.contact.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Feature({
  title,
  text,
  icon,
}: {
  title: string;
  text: string;
  icon: React.ReactNode;
}) {
  return (
    <div>
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {icon}
      </svg>
      <h3 className="mt-4 font-display text-lg text-[var(--color-fg)]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{text}</p>
    </div>
  );
}
