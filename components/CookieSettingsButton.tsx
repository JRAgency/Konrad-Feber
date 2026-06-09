"use client";

// Öffnet den Cookie-Banner erneut (DSGVO: Einwilligung muss widerrufbar sein).
export default function CookieSettingsButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
      className={className}
    >
      Cookie-Einstellungen
    </button>
  );
}
