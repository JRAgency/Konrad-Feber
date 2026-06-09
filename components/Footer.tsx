import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";
import CookieSettingsButton from "./CookieSettingsButton";
import { site, services } from "@/lib/site";

export default function Footer() {
  const year = 2026;
  return (
    <footer className="section-dark relative overflow-hidden pt-20">
      {/* Feder-Wasserzeichen */}
      <Image
        src="/logo-feder.png"
        alt=""
        width={300}
        height={582}
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 top-0 h-[420px] w-auto opacity-[0.06]"
        style={{ filter: "brightness(0) invert(1)" }}
      />
      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Logo tone="light" showFeather={false} />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/55">
              Präzisionszerspanung &amp; Werkzeugbau aus Mittelfranken. Höchste Qualität,
              Termintreue und partnerschaftliche Zusammenarbeit seit über 40 Jahren.
            </p>
          </div>

          {/* Leistungen */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Leistungen
            </h4>
            <ul className="space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/leistungen/${s.slug}`} className="text-white/55 hover:text-white transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Unternehmen */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Unternehmen
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: "/unternehmen", label: "Über uns" },
                { href: "/karriere", label: "Karriere & Ausbildung" },
                { href: "/referenzen", label: "Referenzen" },
                { href: "/kontakt", label: "Kontakt" },
                { href: "/impressum", label: "Impressum" },
                { href: "/datenschutz", label: "Datenschutz" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/55 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <CookieSettingsButton className="text-left text-white/55 hover:text-white transition-colors" />
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Kontakt
            </h4>
            <address className="not-italic space-y-2.5 text-sm text-white/55">
              <p>
                {site.address.street}
                <br />
                {site.address.zip} {site.address.city}
              </p>
              <p>
                <a href={`tel:${site.contact.phoneHref}`} className="hover:text-white transition-colors">
                  Tel. {site.contact.phone}
                </a>
                <br />
                <a href={`tel:${site.contact.mobileHref}`} className="hover:text-white transition-colors">
                  Mobil {site.contact.mobile}
                </a>
                <br />
                <a href={`mailto:${site.contact.email}`} className="hover:text-white transition-colors">
                  {site.contact.email}
                </a>
              </p>
              <p className="pt-1 text-white/40">{site.hours}</p>
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 py-7 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. Alle Rechte vorbehalten.
          </p>
          <p>
            Realisiert von{" "}
            <a href="https://jr-agency.de" className="hover:text-white transition-colors">
              JR Agency Services
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
