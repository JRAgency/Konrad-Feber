"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-ink-2)] p-10 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-accent)]/12">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="font-display text-2xl text-[var(--color-fg)]">Vielen Dank!</h3>
        <p className="mt-2 text-[var(--color-muted)]">
          Wir haben Ihre Anfrage erhalten und melden uns schnellstmöglich bei Ihnen.
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
      className="grid gap-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Name *" name="name" required />
        <Field label="Firma" name="firma" />
        <Field label="E-Mail *" name="email" type="email" required />
        <Field label="Telefon" name="telefon" type="tel" />
      </div>
      <label className="grid gap-2">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
          Ihre Nachricht *
        </span>
        <textarea
          name="nachricht"
          required
          rows={5}
          className="rounded-2xl border border-[var(--color-line)] bg-white px-4 py-3 text-[var(--color-fg)] outline-none transition-colors focus:border-[var(--color-accent)]"
          placeholder="Welches Bauteil, welche Stückzahl, welche Toleranzen?"
        />
      </label>
      <label className="flex items-start gap-3 text-sm text-[var(--color-muted)]">
        <input type="checkbox" required className="mt-1 accent-[var(--color-accent)]" />
        <span>
          Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner
          Daten zur Bearbeitung der Anfrage zu.
        </span>
      </label>
      <button type="submit" className="btn btn-primary w-fit">
        Anfrage senden
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
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
        className="rounded-2xl border border-[var(--color-line)] bg-white px-4 py-3 text-[var(--color-fg)] outline-none transition-colors focus:border-[var(--color-accent)]"
      />
    </label>
  );
}
