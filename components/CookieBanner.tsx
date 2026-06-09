"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const KEY = "feder-cookie-consent";

type Consent = {
  necessary: true;
  preferences: boolean;
  statistics: boolean;
  marketing: boolean;
};

const categories = [
  {
    id: "necessary" as const,
    label: "Notwendig",
    text: "Technisch notwendige Cookies ermöglichen die Grundfunktionen der Website (z. B. Seitennavigation, Formulare). Ohne sie funktioniert die Seite nicht.",
    locked: true,
  },
  {
    id: "preferences" as const,
    label: "Präferenzen",
    text: "Speichern Einstellungen wie Sprache oder Region, damit die Website sich an Ihre Auswahl erinnert.",
    locked: false,
  },
  {
    id: "statistics" as const,
    label: "Statistik",
    text: "Helfen uns anonymisiert zu verstehen, wie Besucher die Website nutzen, um sie zu verbessern.",
    locked: false,
  },
  {
    id: "marketing" as const,
    label: "Marketing",
    text: "Werden eingesetzt, um Inhalte und Anzeigen relevanter zu gestalten. Aktuell nicht im Einsatz.",
    locked: false,
  },
];

const tabs = ["Zustimmung", "Details", "Über Cookies"] as const;

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  const [tab, setTab] = useState<(typeof tabs)[number]>("Zustimmung");
  const [consent, setConsent] = useState<Consent>({
    necessary: true,
    preferences: false,
    statistics: false,
    marketing: false,
  });

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      /* ignore */
    }

    // Erneutes Öffnen über Footer-Link (Widerruf/Anpassung der Einwilligung)
    const reopen = () => {
      try {
        const saved = localStorage.getItem(KEY);
        if (saved) {
          const c = JSON.parse(saved);
          setConsent({
            necessary: true,
            preferences: !!c.preferences,
            statistics: !!c.statistics,
            marketing: !!c.marketing,
          });
        }
      } catch {
        /* ignore */
      }
      setTab("Zustimmung");
      setShow(true);
    };
    window.addEventListener("open-cookie-settings", reopen);
    return () => window.removeEventListener("open-cookie-settings", reopen);
  }, []);

  const save = (c: Consent) => {
    try {
      localStorage.setItem(KEY, JSON.stringify(c));
    } catch {
      /* ignore */
    }
    // andere Komponenten (z. B. Karte) live über die neue Zustimmung informieren
    window.dispatchEvent(new CustomEvent("cookie-consent-changed", { detail: c }));
    setShow(false);
  };

  if (!show) return null;

  const denyAll = () =>
    save({ necessary: true, preferences: false, statistics: false, marketing: false });
  const allowSelection = () => save(consent);
  const allowAll = () =>
    save({ necessary: true, preferences: true, statistics: true, marketing: true });

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center bg-black/30 p-3 sm:items-center sm:p-6">
      <div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white shadow-2xl">
        {/* Kopf */}
        <div className="flex items-center justify-between border-b border-[var(--color-line)] px-6 py-4">
          <Logo tone="dark" showFeather={false} />
          <span className="text-xs text-[var(--color-muted)]">Cookie-Einstellungen</span>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[var(--color-line)] px-2">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`relative px-4 py-3 text-sm font-semibold transition-colors ${
                tab === t
                  ? "text-[var(--color-accent)]"
                  : "text-[var(--color-muted)] hover:text-[var(--color-fg)]"
              }`}
            >
              {t}
              {tab === t && (
                <span className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-[var(--color-accent)]" />
              )}
            </button>
          ))}
        </div>

        {/* Inhalt */}
        <div className="max-h-[46vh] overflow-y-auto px-6 py-5">
          {tab === "Zustimmung" && (
            <>
              <h2 className="font-display text-lg text-[var(--color-fg)]">
                Diese Website verwendet Cookies
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                Wir verwenden Cookies, um die Grundfunktionen der Website
                bereitzustellen und – nach Ihrer Zustimmung – die Nutzung anonymisiert
                auszuwerten. Externe Dienste (z. B. Karte) werden erst nach Ihrer
                Einwilligung geladen. Sie können Ihre Auswahl jederzeit anpassen. Mehr
                Informationen in unserer{" "}
                <Link href="/datenschutz" className="text-[var(--color-accent)] underline underline-offset-2">
                  Datenschutzerklärung
                </Link>
                .
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {categories.map((c) => (
                  <Toggle
                    key={c.id}
                    label={c.label}
                    checked={c.locked ? true : consent[c.id]}
                    locked={c.locked}
                    onChange={(v) => setConsent((prev) => ({ ...prev, [c.id]: v }))}
                  />
                ))}
              </div>
            </>
          )}

          {tab === "Details" && (
            <div className="space-y-5">
              {categories.map((c) => (
                <div key={c.id} className="flex items-start justify-between gap-4 border-b border-[var(--color-line)] pb-4 last:border-0">
                  <div>
                    <p className="font-semibold text-[var(--color-fg)]">{c.label}</p>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--color-muted)]">{c.text}</p>
                  </div>
                  <Switch
                    checked={c.locked ? true : consent[c.id]}
                    locked={c.locked}
                    onChange={(v) => setConsent((prev) => ({ ...prev, [c.id]: v }))}
                  />
                </div>
              ))}
            </div>
          )}

          {tab === "Über Cookies" && (
            <div className="space-y-3 text-sm leading-relaxed text-[var(--color-muted)]">
              <p>
                Cookies sind kleine Textdateien, die von Websites genutzt werden, um die
                Nutzererfahrung effizienter zu gestalten. Notwendige Cookies sind für den
                Betrieb der Seite erforderlich und werden gemäß § 25 Abs. 2 TDDDG ohne
                gesonderte Einwilligung gesetzt.
              </p>
              <p>
                Alle anderen Cookies werden nur mit Ihrer ausdrücklichen Zustimmung
                gesetzt. Sie können Ihre Einwilligung jederzeit widerrufen oder ändern.
                Verantwortlich ist Konrad Feder Werkzeug-Präzisions-Montage – Details
                finden Sie im{" "}
                <Link href="/impressum" className="text-[var(--color-accent)] underline underline-offset-2">
                  Impressum
                </Link>{" "}
                und in der{" "}
                <Link href="/datenschutz" className="text-[var(--color-accent)] underline underline-offset-2">
                  Datenschutzerklärung
                </Link>
                .
              </p>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="grid gap-3 border-t border-[var(--color-line)] px-6 py-4 sm:grid-cols-3">
          <button onClick={denyAll} className="btn btn-ghost justify-center">
            Ablehnen
          </button>
          <button onClick={allowSelection} className="btn btn-ghost justify-center">
            Notwendige erlauben
          </button>
          <button onClick={allowAll} className="btn btn-primary justify-center">
            Alle erlauben
          </button>
        </div>
      </div>
    </div>
  );
}

/* Toggle mit Label (Zustimmungs-Tab) */
function Toggle({
  label,
  checked,
  locked,
  onChange,
}: {
  label: string;
  checked: boolean;
  locked?: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl border border-[var(--color-line)] bg-[var(--color-ink-2)] px-2 py-3 text-center">
      <span className="text-xs font-semibold text-[var(--color-fg)]">{label}</span>
      <Switch checked={checked} locked={locked} onChange={onChange} />
    </div>
  );
}

/* Schalter */
function Switch({
  checked,
  locked,
  onChange,
}: {
  checked: boolean;
  locked?: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={locked}
      onClick={() => !locked && onChange(!checked)}
      className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full px-0.5 transition-colors ${
        checked ? "bg-[var(--color-accent)]" : "bg-[var(--color-muted)]/40"
      } ${locked ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
    >
      <span
        className={`h-5 w-5 rounded-full bg-white shadow transition-transform duration-200 ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}
