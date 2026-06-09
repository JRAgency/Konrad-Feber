"use client";

import { useState } from "react";

const positionen = [
  "Ausbildung zum Werkzeugmechaniker",
  "Ausbildung Kaufmann/-frau für Büromanagement",
  "Schülerpraktikum",
  "Studentenpraktikum",
  "Initiativbewerbung",
];

export default function BewerbungForm() {
  const [sent, setSent] = useState(false);
  const [files, setFiles] = useState<string[]>([]);

  if (sent) {
    return (
      <div className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-ink-2)] p-10 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-accent)]/12">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="font-display text-2xl text-[var(--color-fg)]">Bewerbung erhalten!</h3>
        <p className="mt-2 text-[var(--color-muted)]">
          Vielen Dank für deine Bewerbung. Wir sichten deine Unterlagen und melden uns
          schnellstmöglich bei dir.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="grid gap-5 rounded-3xl border border-[var(--color-line)] bg-[var(--color-ink-3)] p-6 sm:p-9"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Vorname *" name="vorname" required />
        <Field label="Nachname *" name="nachname" required />
        <Field label="E-Mail *" name="email" type="email" required />
        <Field label="Telefon" name="telefon" type="tel" />
      </div>

      <label className="grid gap-2">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
          Position / Interesse *
        </span>
        <select
          name="position"
          required
          defaultValue=""
          className="rounded-2xl border border-[var(--color-line)] bg-white px-4 py-3 text-[var(--color-fg)] outline-none transition-colors focus:border-[var(--color-accent)]"
        >
          <option value="" disabled>
            Bitte auswählen …
          </option>
          {positionen.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </label>

      <Field label="Frühestmöglicher Eintritt" name="eintritt" placeholder="z. B. 01.09.2026" />

      <label className="grid gap-2">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
          Nachricht / Anschreiben
        </span>
        <textarea
          name="nachricht"
          rows={4}
          className="rounded-2xl border border-[var(--color-line)] bg-white px-4 py-3 text-[var(--color-fg)] outline-none transition-colors focus:border-[var(--color-accent)]"
          placeholder="Erzähl uns kurz etwas über dich und warum du zu uns passt."
        />
      </label>

      {/* Datei-Upload */}
      <div className="grid gap-2">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
          Unterlagen (Lebenslauf, Zeugnisse) – PDF/DOC
        </span>
        <label className="flex cursor-pointer items-center justify-center gap-3 rounded-2xl border border-dashed border-[var(--color-line)] bg-white px-4 py-6 text-sm text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
          </svg>
          {files.length > 0 ? files.join(", ") : "Dateien auswählen oder hierher ziehen"}
          <input
            type="file"
            name="unterlagen"
            multiple
            accept=".pdf,.doc,.docx,.jpg,.png"
            className="hidden"
            onChange={(e) =>
              setFiles(Array.from(e.target.files ?? []).map((f) => f.name))
            }
          />
        </label>
      </div>

      <label className="flex items-start gap-3 text-sm text-[var(--color-muted)]">
        <input type="checkbox" required className="mt-1 accent-[var(--color-accent)]" />
        <span>
          Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner
          Daten zur Bearbeitung meiner Bewerbung zu.
        </span>
      </label>

      <button type="submit" className="btn btn-primary w-fit">
        Bewerbung absenden
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
        {label}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="rounded-2xl border border-[var(--color-line)] bg-white px-4 py-3 text-[var(--color-fg)] outline-none transition-colors focus:border-[var(--color-accent)]"
      />
    </label>
  );
}
