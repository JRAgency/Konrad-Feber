"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { site, services } from "@/lib/site";

const nav = [
  { href: "/leistungen", label: "Leistungen", children: services },
  { href: "/unternehmen", label: "Unternehmen" },
  { href: "/karriere", label: "Karriere" },
  { href: "/referenzen", label: "Referenzen" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-white/90 backdrop-blur-md border-b border-[var(--color-line)]"
          : "bg-transparent"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(.16,1,.3,1)" }}
    >
      <div className="container-x flex items-center justify-between h-[76px]">
        <Logo tone="dark" />

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <div key={item.href} className="relative group">
              <Link
                href={item.href}
                className="text-sm font-medium text-[var(--color-fg)]/80 hover:text-[var(--color-accent)] transition-colors py-2"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="w-64 rounded-2xl border border-[var(--color-line)] bg-white p-2 shadow-xl">
                    {item.children.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/leistungen/${c.slug}`}
                        className="block rounded-xl px-4 py-3 text-sm text-[var(--color-muted)] hover:bg-[var(--color-ink-2)] hover:text-[var(--color-accent)] transition-colors"
                      >
                        {c.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href={`tel:${site.contact.phoneHref}`} className="text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors">
            {site.contact.phone}
          </a>
          <Link href="/kontakt" className="btn btn-primary">
            Anfrage
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex flex-col gap-[5px] p-2"
          aria-label="Menü"
          aria-expanded={open}
        >
          <span className={`h-[2px] w-6 bg-[var(--color-fg)] transition-all ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-[2px] w-6 bg-[var(--color-fg)] transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`h-[2px] w-6 bg-[var(--color-fg)] transition-all ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile-Drawer */}
      <div
        className={`lg:hidden fixed inset-0 top-[76px] bg-white transition-all duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="container-x flex flex-col gap-1 pt-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl py-3 border-b border-[var(--color-line)] text-[var(--color-fg)]"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-8 flex flex-col gap-3">
            <a href={`tel:${site.contact.phoneHref}`} className="btn btn-ghost justify-center">
              {site.contact.phone}
            </a>
            <Link href="/kontakt" onClick={() => setOpen(false)} className="btn btn-primary justify-center">
              Jetzt anfragen
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
