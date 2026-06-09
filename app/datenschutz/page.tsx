import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von Konrad Feder Werkzeug-Präzisions-Montage.",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Datenschutz­erklärung" />
      <section className="section-y">
        <div className="container-x max-w-3xl space-y-10 text-[var(--color-muted)] leading-relaxed">
          <Block title="1. Datenschutz auf einen Blick">
            <p>
              Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Alle erhobenen
              personenbezogenen Daten werden vertraulich und gemäß den gesetzlichen
              Vorschriften (DSGVO, BDSG, TDDDG) sowie dieser Datenschutzerklärung behandelt.
              Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener
              Daten möglich.
            </p>
          </Block>

          <Block title="2. Verantwortliche Stelle">
            <p>
              {site.legalName}
              <br />
              {site.address.street}, {site.address.zip} {site.address.city}
              <br />
              Telefon: {site.contact.phone}
              <br />
              E-Mail: {site.contact.email}
            </p>
          </Block>

          <Block title="3. Erhebung und Verarbeitung von Daten">
            <p>
              Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 DSGVO, der die
              Verarbeitung von Daten zur Erfüllung eines Vertrages oder vorvertraglicher
              Maßnahmen gestattet. Sie haben die Möglichkeit, uns per E-Mail oder über das
              Kontaktformular zu kontaktieren. Die dabei an uns gesendeten persönlichen oder
              geschäftlichen Daten werden zum Zweck der Kontaktaufnahme und Bearbeitung Ihrer
              Anfrage gespeichert. Eine Weitergabe an Dritte ohne Ihre Einwilligung erfolgt
              nicht.
            </p>
          </Block>

          <Block title="4. Server-Logfiles">
            <p>
              Beim Aufruf dieser Internetseiten werden automatisch Daten an unseren
              Webserver übermittelt: Datum und Uhrzeit der Anforderung, Name der
              angeforderten Seite und Datei, Status, verwendeter Browser und Betriebssystem,
              übertragene Datenmenge sowie die IP-Adresse. Diese Daten sind nicht bestimmten
              Personen zuordenbar und dienen der technischen Sicherstellung des Betriebs
              (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
          </Block>

          <Block title="5. Cookies">
            <p>
              Unsere Website verwendet ausschließlich technisch notwendige Cookies, die für
              den Betrieb der Seite erforderlich sind. Diese werden auf Grundlage von § 25
              Abs. 2 TDDDG ohne gesonderte Einwilligung gespeichert. Externe Dienste werden
              erst nach Ihrer ausdrücklichen Zustimmung über das Cookie-Banner geladen. Sie
              können die Speicherung von Cookies in den Einstellungen Ihres Browsers
              deaktivieren.
            </p>
          </Block>

          <Block title="6. Schriftarten (Web Fonts)">
            <p>
              Diese Website nutzt zur einheitlichen Darstellung von Schriftarten lokal
              eingebundene (self-hosted) Schriften. Beim Aufruf der Seiten werden keine
              Verbindungen zu Servern Dritter (z. B. Google Fonts) hergestellt.
            </p>
          </Block>

          <Block title="7. Kartendienst">
            <p>
              Eine Karte zur Anfahrt wird erst nach Ihrer aktiven Zustimmung bzw. durch
              Klick auf den externen Link geladen. Es findet keine automatische Übertragung
              Ihrer Daten an Dritte statt.
            </p>
          </Block>

          <Block title="8. Ihre Rechte">
            <p>
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre
              gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger sowie den
              Zweck der Datenverarbeitung (Art. 15 DSGVO) und ggf. ein Recht auf
              Berichtigung, Sperrung, Löschung, Einschränkung der Verarbeitung,
              Datenübertragbarkeit oder Widerspruch (Art. 16–21 DSGVO). Hierzu sowie zu
              weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an die oben
              genannte Adresse wenden.
            </p>
          </Block>

          <Block title="9. Beschwerderecht bei der Aufsichtsbehörde">
            <p>
              Im Falle datenschutzrechtlicher Verstöße steht Ihnen ein Beschwerderecht bei
              der zuständigen Aufsichtsbehörde zu. Zuständig ist das Bayerische Landesamt für
              Datenschutzaufsicht (BayLDA), Promenade 18, 91522 Ansbach.
            </p>
          </Block>

          <Block title="10. SSL- bzw. TLS-Verschlüsselung">
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
              vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte
              Verbindung erkennen Sie an „https://" und dem Schloss-Symbol in Ihrer
              Browserzeile.
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
