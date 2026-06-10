import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import LogoMarquee from "@/components/LogoMarquee";
import Ticker from "@/components/Ticker";
import {
  services,
  stats,
  processSteps,
  site,
  branchen,
  karriereWege,
  lehrjahrStart,
} from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* ---------------- HERO (Vollbild, cinematisch) ---------------- */}
      <section className="section-dark relative flex min-h-[100svh] flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/img/hero.jpg"
            alt="Fräskopf einer CNC-Maschine über einem Präzisionswerkstück"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ animation: "kenburns 26s ease-out infinite alternate" }}
          />
          {/* Lesbarkeits-Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)] via-[var(--color-dark)]/55 to-[var(--color-dark)]/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-dark)]/75 via-[var(--color-dark)]/25 to-transparent" />
        </div>

        <div className="container-x relative pb-10 pt-44">
          <Reveal>
            <p className="eyebrow is-light">
              Werkzeug-Präzisions-Montage · Vestenbergsgreuth, Mittelfranken
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="font-display h-hero mt-6 max-w-5xl text-white uppercase">
              Präzision auf den{" "}
              <span className="text-[var(--color-accent-bright)]">μm</span> genau
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/80">
              CNC-Drehen, Fräsen, Schleifen und Werkzeugbau seit über 40 Jahren –
              maßhaltig, termintreu und partnerschaftlich. Für Automobilindustrie,
              Bahntechnik und Maschinenbau.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/kontakt" className="btn btn-white">
                Projekt anfragen
              </Link>
              <Link href="/leistungen" className="btn btn-ghost-light">
                Leistungen entdecken
              </Link>
            </div>
          </Reveal>

          {/* Stat-Leiste */}
          <Reveal delay={480}>
            <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/14 bg-white/12 md:grid-cols-4">
              {[
                { v: "40+", l: "Jahre Erfahrung" },
                { v: "± 2 μm", l: "feinste Toleranz" },
                { v: "100 %", l: "Qualitätsprüfung" },
                { v: "1 – 1.000+", l: "Losgrößen" },
              ].map((s) => (
                <div key={s.l} className="bg-[var(--color-dark)]/70 px-6 py-5">
                  <p className="font-display text-2xl text-white sm:text-3xl">{s.v}</p>
                  <p className="mt-1 text-[0.7rem] uppercase tracking-[0.16em] text-white/55">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Scroll-Hinweis */}
        <div className="pointer-events-none absolute bottom-8 right-8 hidden lg:block">
          <svg
            width="22"
            height="34"
            viewBox="0 0 22 34"
            fill="none"
            stroke="rgba(255,255,255,.6)"
            strokeWidth="1.5"
            className="scroll-cue"
          >
            <rect x="1" y="1" width="20" height="32" rx="10" />
            <path d="M11 8v7" strokeLinecap="round" />
          </svg>
        </div>
      </section>

      {/* ---------------- TICKER ---------------- */}
      <Ticker />

      {/* ---------------- LOGO-MARQUEE ---------------- */}
      <LogoMarquee />

      {/* ---------------- LEISTUNGEN (asymmetrisches Grid) ---------------- */}
      <section className="section-y">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Reveal>
                <p className="eyebrow">Leistungen</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="font-display h-section mt-5 max-w-2xl text-[var(--color-fg)] uppercase">
                  Die ganze Kette der spanenden Fertigung
                </h2>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <Link href="/leistungen" className="btn btn-ghost">
                Alle Leistungen
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-12">
            {services.map((s, i) => {
              const wide = i === 0 || i === 3;
              return (
                <Reveal
                  key={s.slug}
                  delay={(i % 2) * 110}
                  className={wide ? "lg:col-span-7" : "lg:col-span-5"}
                >
                  <Link
                    href={`/leistungen/${s.slug}`}
                    className="group card-lift relative block h-full overflow-hidden rounded-3xl border border-[var(--color-line)] lg:min-h-[480px]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/10] lg:aspect-auto lg:h-full">
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        sizes="(max-width:1024px) 100vw, 58vw"
                        className="img-zoom object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)]/92 via-[var(--color-dark)]/35 to-transparent" />
                      {/* Index-Nummer */}
                      <span className="font-display absolute right-6 top-5 text-5xl text-white/25">
                        0{i + 1}
                      </span>
                      <div className="absolute inset-x-0 bottom-0 p-7">
                        <h3 className="font-display text-2xl text-white sm:text-3xl">
                          {s.title}
                        </h3>
                        <p className="mt-2 max-w-md text-sm leading-relaxed text-white/70">
                          {s.excerpt}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent-bright)]">
                          Mehr erfahren
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transition-transform group-hover:translate-x-1"
                          >
                            <path d="M5 12h14M13 6l6 6-6 6" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- ÜBER UNS + STATS (dunkel, Blueprint) ---------------- */}
      <section className="section-dark bg-blueprint relative overflow-hidden section-y">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(55% 80% at 85% 10%, rgba(47,90,160,.30), transparent 62%)",
          }}
        />
        <div className="container-x relative grid items-center gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="eyebrow is-light">Über uns</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display h-section mt-5 text-white uppercase">
                Kundenzufriedenheit ist unser oberster Grundsatz
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-lg leading-relaxed text-white/70">
                Wir erreichen sie durch hohe Qualität, Termintreue, Flexibilität,
                Zuverlässigkeit und partnerschaftliche Zusammenarbeit. Der Werkzeugbau ist
                die höchste Stufe der Metallbearbeitung – und seit über vier Jahrzehnten
                unsere Kernkompetenz.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <ul className="mt-8 space-y-3">
                {site.values.map((v) => (
                  <li key={v} className="flex items-center gap-3 text-white/85">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--color-accent-bright)"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {v}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={320}>
              <Link href="/unternehmen" className="btn btn-white mt-9">
                Mehr über uns
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {stats.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 90}
                className="rounded-3xl border border-white/12 bg-[var(--color-dark-2)] p-8"
              >
                <p className="font-display text-[clamp(2.4rem,5vw,3.6rem)] text-[var(--color-accent-bright)]">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm text-white/60">{s.label}</p>
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
                  <h3 className="mt-5 font-display text-lg text-[var(--color-fg)]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- BRANCHEN (dunkle Bild-Karten) ---------------- */}
      <section className="bg-[var(--color-ink-2)] section-y">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Reveal>
                <p className="eyebrow">Branchen</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="font-display h-section mt-5 max-w-2xl text-[var(--color-fg)] uppercase">
                  Gefertigt für Industrien, die keine Fehler verzeihen
                </h2>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <Link href="/referenzen" className="btn btn-ghost">
                Referenzen ansehen
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
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
        </div>
      </section>

      {/* ---------------- KARRIERE-TEASER (Amber-Akzent) ---------------- */}
      <section className="section-y">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="group relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-3xl shadow-xl shadow-[rgba(17,29,40,0.15)]">
              <Image
                src="/img/karriere.jpg"
                alt="Junger Techniker prüft ein gedrehtes Präzisionsteil mit dem Messschieber"
                width={800}
                height={534}
                className="img-zoom h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-[var(--color-amber)] px-7 py-5 shadow-xl sm:block">
              <p className="font-display text-2xl text-white">{lehrjahrStart}</p>
              <p className="text-xs uppercase tracking-[0.16em] text-white/80">
                Start neues Lehrjahr
              </p>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="eyebrow is-amber">Karriere &amp; Ausbildung</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display h-section mt-5 text-[var(--color-fg)] uppercase">
                Wir suchen <span className="text-[var(--color-amber)]">Dich</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-lg leading-relaxed text-[var(--color-muted)]">
                Ausbildung ist bei uns Chefsache: Vom Werkzeugmechaniker – der höchsten
                Stufe der Metallbearbeitung – bis zum Praktikum für Schüler und
                Maschinenbau-Studenten.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <ul className="mt-8 divide-y divide-[var(--color-line)]">
                {karriereWege.map((w) => (
                  <li key={w}>
                    <Link
                      href="/karriere"
                      className="group flex items-center justify-between gap-4 py-4 text-[var(--color-fg)] transition-colors hover:text-[var(--color-amber)]"
                    >
                      {w}
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="shrink-0 transition-transform group-hover:translate-x-1"
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={320}>
              <Link href="/karriere" className="btn btn-dark mt-8">
                Jetzt bewerben
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- CTA (dunkler Kontrast) ---------------- */}
      <section className="section-dark bg-blueprint relative overflow-hidden py-24">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 90% at 80% 0%, rgba(47,90,160,.35), transparent 60%)",
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
              Senden Sie uns Ihre Zeichnung oder rufen Sie direkt an – wir beraten Sie
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
          <Reveal delay={320}>
            <p className="text-sm text-white/50">
              Erreichbar {site.hours} · {site.contact.email}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
