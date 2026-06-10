// Zentrale Inhalts- und Stammdaten für Konrad Feder Präzisionszerspanung.
// Single source of truth — alle Komponenten/Seiten ziehen ihre Texte hier raus.

export const site = {
  name: "Konrad Feder",
  legalName: "Konrad Feder Werkzeug-Präzisions-Montage",
  tagline: "Werkzeug-Präzisions-Montage",
  claim: "Präzisionszerspanung & Werkzeugbau aus Mittelfranken",
  domain: "feder-zerspanung.de",
  url: "https://feder-zerspanung.de",
  founded: 1985,

  address: {
    street: "Kleinweisach 10a",
    zip: "91487",
    city: "Vestenbergsgreuth",
    region: "Bayern",
    country: "Deutschland",
  },

  contact: {
    phone: "+49 9552 7317",
    phoneHref: "+4995527317",
    mobile: "+49 171 9353323",
    mobileHref: "+491719353323",
    fax: "+49 9552 6682",
    email: "info@feder-zerspanung.de",
  },

  hours: "Mo–Fr 8:00–17:00 Uhr",

  // Verantwortlich / Impressum
  owner: "Konrad Feder",

  // Kernbotschaften (aus der bestehenden Seite übernommen + geschärft)
  values: [
    "Höchste Qualität",
    "Termintreue",
    "Flexibilität",
    "Zuverlässigkeit",
    "Partnerschaftliche Zusammenarbeit",
  ],
} as const;

export type Service = {
  slug: string;
  title: string;
  short: string;
  excerpt: string;
  image: string;
  intro: string;
  bullets: string[];
  specs: { label: string; value: string }[];
};

export const services: Service[] = [
  {
    slug: "cnc-drehen",
    title: "CNC-Drehen",
    short: "Drehteile",
    excerpt:
      "Hochpräzise Dreh­teile in Klein- und Serien­fertigung – von der Einzel­anfertigung bis zur reproduzierbaren Serie.",
    image: "/img/cnc-drehen.jpg",
    intro:
      "Auf modernen CNC-Drehmaschinen fertigen wir komplexe Rotationsteile mit engsten Toleranzen. Vom Prototyp bis zur Serie liefern wir maßhaltige Präzision – reproduzierbar und prozesssicher.",
    bullets: [
      "Komplexe Dreh­teile aus Stahl, Edelstahl, Aluminium und Buntmetallen",
      "Klein- bis Mittel­serien sowie Einzel­anfertigungen",
      "Enge Form- und Lage­toleranzen, hohe Oberflächengüte",
      "Komplettbearbeitung inkl. angetriebener Werkzeuge",
    ],
    specs: [
      { label: "Verfahren", value: "CNC-Drehen, Dreh-Fräs-Komplettbearbeitung" },
      { label: "Werkstoffe", value: "Stahl · Edelstahl · Aluminium · Buntmetalle · Kunststoff" },
      { label: "Toleranzen", value: "bis IT6 / ± 0,005 mm" },
      { label: "Losgrößen", value: "Einzelteil bis Serie" },
    ],
  },
  {
    slug: "cnc-fraesen",
    title: "CNC-Fräsen",
    short: "Frästeile",
    excerpt:
      "3- bis 5-Achs-Fräsbearbeitung komplexer Geometrien – maßhaltig, wiederholgenau und prozesssicher.",
    image: "/img/cnc-fraesen.jpg",
    intro:
      "Mit unserer CNC-Frästechnik realisieren wir anspruchsvolle Geometrien und Konturen. CAD/CAM-gestützte Programmierung sorgt für höchste Wiederholgenauigkeit – auch bei filigranen und komplexen Bauteilen.",
    bullets: [
      "3- bis 5-Achs-Bearbeitung komplexer Werkstücke",
      "CAD/CAM-gestützte Programmierung",
      "Vorrichtungs- und Werkzeugbau aus einer Hand",
      "Konventionelles und CNC-Fräsen kombiniert",
    ],
    specs: [
      { label: "Verfahren", value: "CNC-Fräsen 3- bis 5-Achs · konventionell" },
      { label: "Werkstoffe", value: "Werkzeugstahl · Edelstahl · Aluminium · Kunststoff" },
      { label: "Programmierung", value: "CAD / CAM / CNC" },
      { label: "Losgrößen", value: "Prototyp bis Klein­serie" },
    ],
  },
  {
    slug: "schleiftechnik",
    title: "Schleiftechnik",
    short: "Schleifen",
    excerpt:
      "Flach-, Rund- und Koordinatenschleifen für höchste Oberflächengüten und engste Maßtoleranzen.",
    image: "/img/schleiftechnik.jpg",
    intro:
      "Wo es auf μm ankommt, ist unsere Schleiftechnik zuhause. Flachschleifen, Rundschleifen und Koordinatenschleifen liefern höchste Maßhaltigkeit und Oberflächengüte für anspruchsvollste Anwendungen.",
    bullets: [
      "Flachschleifen ebener Funktions­flächen",
      "Rundschleifen rotations­symmetrischer Teile",
      "Koordinatenschleifen für höchste Präzision",
      "Oberflächengüten bis in den μm-Bereich",
    ],
    specs: [
      { label: "Verfahren", value: "Flach- · Rund- · Koordinatenschleifen" },
      { label: "Werkstoffe", value: "gehärteter Stahl · HSS · Hartmetall" },
      { label: "Toleranzen", value: "bis ± 0,002 mm" },
      { label: "Oberfläche", value: "bis Ra 0,2 μm" },
    ],
  },
  {
    slug: "werkzeug-praezisionsmontage",
    title: "Werkzeug-Präzisions-Montage",
    short: "Werkzeugbau & Montage",
    excerpt:
      "Werkzeugbau und Präzisionsmontage von Baugruppen – die Königsdisziplin der Metallbearbeitung.",
    image: "/img/werkzeugbau.jpg",
    intro:
      "Der Werkzeugbau ist die höchste Stufe der Metallbearbeitung – und unsere Kernkompetenz. Wir fertigen und montieren Präzisionswerkzeuge und komplexe Baugruppen mit fingerfertiger Sorgfalt und langjähriger Erfahrung.",
    bullets: [
      "Werkzeug- und Vorrichtungsbau",
      "Präzisionsmontage komplexer Baugruppen",
      "Einzelteilfertigung und Reparatur",
      "Komplettlösung von der Konstruktion bis zur Montage",
    ],
    specs: [
      { label: "Leistung", value: "Werkzeugbau · Vorrichtungsbau · Montage" },
      { label: "Fertigung", value: "Drehen · Fräsen · Schleifen · Montage" },
      { label: "Anspruch", value: "höchste Stufe der Metallbearbeitung" },
      { label: "Losgrößen", value: "Einzelteil bis Klein­serie" },
    ],
  },
];

// Referenz-/Vertrauens-Logos (Branchen: Automobil & Bahn).
// Hinweis: Für die Live-Seite Kundenbeziehung & Logo-Nutzungsrechte bestätigen lassen.
export const referenceLogos = [
  { name: "Deutsche Bahn", file: "/logos/db-real.svg" },
  { name: "Mercedes-Benz", file: "/logos/mb-real.svg" },
  { name: "BMW", file: "/logos/bmw-real.svg" },
  { name: "Volkswagen", file: "/logos/vw-real.svg" },
  { name: "MAN", file: "/logos/man-real.svg" },
];

export const stats = [
  { value: 40, suffix: "+", label: "Jahre Erfahrung" },
  { value: 2, suffix: " μm", label: "feinste Toleranz" },
  { value: 100, suffix: " %", label: "Qualitäts­prüfung" },
  { value: 4, suffix: "", label: "Kern­verfahren" },
];

// Lauftext-Begriffe (Ticker unter dem Hero)
export const ticker = [
  "CNC-Drehen",
  "CNC-Fräsen",
  "Flachschleifen",
  "Rundschleifen",
  "Koordinatenschleifen",
  "Werkzeugbau",
  "Präzisionsmontage",
];

// Branchen, für die gefertigt wird (Startseite + Referenzen)
export const branchen = [
  {
    title: "Automobilindustrie",
    text: "Präzisionsbauteile, Vorrichtungen und Werkzeuge für Hersteller und Zulieferer – maßhaltig und reproduzierbar in Serie.",
    image: "/img/detail-revolver.jpg",
  },
  {
    title: "Bahntechnik",
    text: "Zuverlässige, dokumentierte Komponenten für den anspruchsvollen Einsatz im Schienenverkehr – u. a. für die Deutsche Bahn.",
    image: "/img/detail-funken.jpg",
  },
  {
    title: "Maschinen- & Anlagenbau",
    text: "Einzelteile, Ersatzteile und komplette Baugruppen für Sondermaschinen und industrielle Anlagen.",
    image: "/img/detail-drehen.jpg",
  },
];

// Karriere-Einstiege (Teaser Startseite, Detail auf /karriere)
export const lehrjahrStart = "01.09.2026";
export const karriereWege = [
  "Ausbildung zum Werkzeugmechaniker",
  "Ausbildung Kaufmann/-frau für Büromanagement",
  "Schülerpraktikum",
  "Studentenpraktikum",
];

export const processSteps = [
  {
    n: "01",
    title: "Anfrage & Beratung",
    text: "Sie schildern uns Ihre Anforderung – wir beraten zu Verfahren, Werkstoff und Machbarkeit.",
  },
  {
    n: "02",
    title: "Konstruktion & Programmierung",
    text: "CAD/CAM-gestützte Arbeitsvorbereitung und CNC-Programmierung für maximale Prozesssicherheit.",
  },
  {
    n: "03",
    title: "Präzisionsfertigung",
    text: "Drehen, Fräsen und Schleifen auf modernen Maschinen – maßhaltig und reproduzierbar.",
  },
  {
    n: "04",
    title: "Prüfung & Lieferung",
    text: "100 % Qualitätskontrolle, Dokumentation und termintreue Lieferung an Ihre Adresse.",
  },
];
