import type { MetadataRoute } from "next";
import { site, services } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const routes = [
    "",
    "/leistungen",
    "/unternehmen",
    "/karriere",
    "/referenzen",
    "/kontakt",
    "/impressum",
    "/datenschutz",
  ];

  const staticPages = routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date("2026-06-09"),
    changeFrequency: "monthly" as const,
    priority: r === "" ? 1 : 0.7,
  }));

  const servicePages = services.map((s) => ({
    url: `${base}/leistungen/${s.slug}`,
    lastModified: new Date("2026-06-09"),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages];
}
