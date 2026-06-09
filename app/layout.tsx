import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} – Präzisionszerspanung & Werkzeugbau | ${site.address.city}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Konrad Feder – Präzisionszerspanung aus Mittelfranken: CNC-Drehen, CNC-Fräsen, Schleiftechnik und Werkzeug-Präzisions-Montage. Höchste Qualität, Termintreue und Zuverlässigkeit.",
  keywords: [
    "Zerspanung",
    "CNC-Drehen",
    "CNC-Fräsen",
    "Schleiftechnik",
    "Werkzeugbau",
    "Präzisionstechnik",
    "Vestenbergsgreuth",
    "Mittelfranken",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: site.url,
    siteName: site.legalName,
    title: `${site.name} – Präzisionszerspanung & Werkzeugbau`,
    description:
      "CNC-Drehen, Fräsen, Schleifen und Werkzeug-Präzisions-Montage aus Mittelfranken.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: site.url },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MachineShop",
  name: site.legalName,
  url: site.url,
  telephone: site.contact.phone,
  email: site.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.zip,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    addressCountry: "DE",
  },
  openingHours: "Mo-Fr 08:00-17:00",
  areaServed: "DE",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
