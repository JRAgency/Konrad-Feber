"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const KEY = "feder-cookie-consent";
const query = `${site.address.street}, ${site.address.zip} ${site.address.city}`;
const embedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=15&output=embed`;
const externalSrc = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

// Lädt die Google-Maps-Karte erst nach Cookie-Zustimmung (Marketing/externe Medien)
// oder nach explizitem Klick auf „Karte laden".
export default function MapEmbed() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const check = () => {
      try {
        const raw = localStorage.getItem(KEY);
        if (raw && JSON.parse(raw)?.marketing) setLoaded(true);
      } catch {
        /* ignore */
      }
    };
    check();
    const onChange = (e: Event) => {
      const c = (e as CustomEvent).detail;
      if (c?.marketing) setLoaded(true);
    };
    window.addEventListener("cookie-consent-changed", onChange);
    return () => window.removeEventListener("cookie-consent-changed", onChange);
  }, []);

  if (loaded) {
    return (
      <div className="overflow-hidden rounded-3xl border border-[var(--color-line)]">
        <iframe
          title={`Standort ${site.name} – ${query}`}
          src={embedSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="aspect-[16/7] w-full"
          style={{ border: 0 }}
        />
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-[var(--color-line)] bg-[var(--color-ink-3)]">
      <div className="flex aspect-[16/7] flex-col items-center justify-center gap-4 p-8 text-center">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <p className="max-w-md text-sm text-[var(--color-muted)]">
          Die interaktive Karte wird aus Datenschutzgründen erst nach Ihrer Zustimmung
          geladen. Dabei werden Daten an Google übertragen.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button onClick={() => setLoaded(true)} className="btn btn-primary">
            Karte laden
          </button>
          <a href={externalSrc} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            In Google Maps öffnen
          </a>
        </div>
      </div>
    </div>
  );
}
