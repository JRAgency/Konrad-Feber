import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von Konrad Feder Werkzeug-Präzisions-Montage.",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Impressum" />
      <section className="section-y">
        <div className="container-x max-w-3xl space-y-10 text-[var(--color-muted)] leading-relaxed">
          <Block title="Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)">
            <p className="text-[var(--color-fg)]">{site.legalName}</p>
            <p>
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city}
              <br />
              {site.address.country}
            </p>
          </Block>

          <Block title="Vertreten durch">
            <p>{site.owner}</p>
          </Block>

          <Block title="Kontakt">
            <p>
              Telefon: {site.contact.phone}
              <br />
              Mobil: {site.contact.mobile}
              <br />
              Fax: {site.contact.fax}
              <br />
              E-Mail: {site.contact.email}
            </p>
          </Block>

          <Block title="Umsatzsteuer-Identifikationsnummer">
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              <br />
              {/* TODO Kunde: USt-IdNr. eintragen */}
              <span className="text-[var(--color-muted)]/60">[USt-IdNr. wird ergänzt]</span>
            </p>
          </Block>

          <Block title="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
            <p>
              {site.owner}
              <br />
              {site.address.street}, {site.address.zip} {site.address.city}
            </p>
          </Block>

          <Block title="EU-Streitschlichtung">
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
              (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-accent)] underline underline-offset-2"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              . Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </Block>

          <Block title="Verbraucherstreitbeilegung / Universalschlichtungsstelle">
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </Block>

          <Block title="Haftung für Inhalte">
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind
              wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
              gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
              forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </Block>

          <Block title="Haftung für Links">
            <p>
              Unser Angebot enthält ggf. Links zu externen Websites Dritter, auf deren
              Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte
              auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets
              der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </Block>

          <Block title="Urheberrecht">
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche
              gekennzeichnet. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
              Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </Block>
        </div>
      </section>
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-3 font-display text-xl text-[var(--color-fg)]">{title}</h2>
      <div className="space-y-2">{children}</div>
    </div>
  );
}
