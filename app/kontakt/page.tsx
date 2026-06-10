import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie Konrad Feder – Präzisionszerspanung in Vestenbergsgreuth. Telefon, E-Mail und Anfrageformular.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Sprechen wir über Ihr"
        accent="Projekt"
        subtitle="Schildern Sie uns Ihre Anforderung – wir beraten Sie persönlich zu Verfahren, Werkstoff und Machbarkeit."
        image="/img/cnc-fraesen.jpg"
        imageAlt="CNC-Fräsbearbeitung mit Kühlmittel"
      />

      <section className="section-y">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          {/* Kontaktdaten */}
          <div>
            <Reveal>
              <p className="eyebrow">Direkter Draht</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display mt-5 text-2xl text-[var(--color-fg)]">{site.legalName}</h2>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-8 space-y-6">
                <Row label="Adresse">
                  {site.address.street}
                  <br />
                  {site.address.zip} {site.address.city}
                </Row>
                <Row label="Telefon">
                  <a href={`tel:${site.contact.phoneHref}`} className="hover:text-[var(--color-accent)] transition-colors">
                    {site.contact.phone}
                  </a>
                </Row>
                <Row label="Mobil">
                  <a href={`tel:${site.contact.mobileHref}`} className="hover:text-[var(--color-accent)] transition-colors">
                    {site.contact.mobile}
                  </a>
                </Row>
                <Row label="Fax">{site.contact.fax}</Row>
                <Row label="E-Mail">
                  <a href={`mailto:${site.contact.email}`} className="hover:text-[var(--color-accent)] transition-colors">
                    {site.contact.email}
                  </a>
                </Row>
                <Row label="Bürozeiten">{site.hours}</Row>
              </div>
            </Reveal>
          </div>

          {/* Formular */}
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* Karte (consent-gated) */}
      <section className="border-t border-[var(--color-line)] section-y">
        <div className="container-x">
          <Reveal>
            <MapEmbed />
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[120px_1fr] gap-4 border-b border-[var(--color-line)] pb-5">
      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
        {label}
      </span>
      <span className="text-[var(--color-fg)]">{children}</span>
    </div>
  );
}
