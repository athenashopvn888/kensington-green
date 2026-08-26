const NATIVE_HERO_DISCLOSURE = "Brand preview only. Selection varies by store; check the current cigarette menu before visiting.";
const NATIVE_HERO_PRODUCTS = [
  { name: "BB Lights", image: "/products/1001-BB-LIGHTS-CARTONS.webp" },
  { name: "BB Full", image: "/products/1003-BB-FULL-CARTON.webp" },
  { name: "Canadian Lights", image: "/products/1005-CANADIAN-LIGHTS.webp" },
  { name: "Canadian Full", image: "/products/1006-CANADIAN-FULL.webp" },
  { name: "Canadian Classics Silver", image: "/products/1015-CANADIAN-CLASSICS-SILVER.webp" },
  { name: "Canadian Menthol", image: "/products/1013-CANADIAN-MENTHOL.webp" },
] as const;

export interface SeoPageData {
  slug: string;
  title: string;
  absoluteTitle?: boolean;
  metaDescription: string;
  h1: string;
  icon: string;
  heroTagline: string;
  heroPreview?: {
    eyebrow: string;
    intro: string;
    products: readonly { name: string; image: string; sourceSlug?: string }[];
    disclosure: string;
    theme?: "cigarettes" | "nicotine";
    menuHref?: string;
    primaryLabel?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
    identityStrip?: string;
    featuredHeading?: string;
    featuredIntro?: string;
    warning?: string;
  };
  banner?: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

const visitFaqs = [
  { q: "Where is Kensington Green?", a: "Kensington Green is at 2257 Dundas St W, Toronto, ON." },
  { q: "How can I review the menu?", a: "Use the flower tier and category pages to compare the current public menu before visiting." },
];

export const SEO_PAGES: SeoPageData[] = [
  {
    slug: "dundas-west-weed-dispensary",
    title: "Dundas West Weed Dispensary | Kensington Green",
    metaDescription: "Plan a Kensington Green visit on Dundas Street West and browse current flower tiers and menu categories.",
    h1: "Dundas West Weed Dispensary",
    icon: "*",
    heroTagline: "A Dundas West menu and visit guide",
    sections: [
      { heading: "Plan A Dundas West Stop", body: "Kensington Green is located at 2257 Dundas St W near Roncesvalles. Review the current category pages before visiting." },
      { heading: "Browse By Menu Lane", body: "Start with flower tiers or open the dedicated pages for pre-rolls, edibles, vapes, concentrates, accessories, and cigarettes." },
    ],
    faqs: visitFaqs,
  },
  {
    slug: "cheap-weed-dundas-west",
    title: "Value Weed Dundas West | Kensington Green",
    metaDescription: "Compare Kensington Green flower tiers and posted menu prices before a Dundas West visit.",
    h1: "Value Weed Near Dundas West",
    icon: "$",
    heroTagline: "Compare posted flower tiers and menu prices",
    sections: [
      { heading: "Compare The Flower Tiers", body: "The Exotic, Premium, AAA+, AA, and Budget pages organize flower into separate menu lanes with posted weights and prices." },
      { heading: "Confirm Current Details", body: "Product names and menu details can change. Use the current tier page or ask staff when one exact item matters." },
    ],
    faqs: visitFaqs,
  },
  {
    slug: "native-cigarettes-dundas-west",
    title: "Native Cigarettes Dundas West | Kensington Green",
    metaDescription: "Browse the cigarette category at Kensington Green and confirm current brand and package details.",
    h1: "Native Cigarettes Near Dundas West",
    icon: "*",
    heroTagline: "Cigarette category and visit information",
    heroPreview: {
      eyebrow: "Kensington Green · 2257 Dundas St W, Toronto",
      intro: "Cigarette category and visit information",
      products: NATIVE_HERO_PRODUCTS,
      disclosure: NATIVE_HERO_DISCLOSURE,
    },
    sections: [
      { heading: "Browse The Cigarette Category", body: "Use the cigarette menu page to review the current public list before visiting Kensington Green." },
      { heading: "Confirm Brand Details", body: "Ask staff when a particular brand, package style, or price matters for your visit." },
    ],
    faqs: visitFaqs,
  },
  {
    slug: "weed-store-near-dundas-west",
    title: "Weed Store Near Dundas West | Kensington Green",
    metaDescription: "Find Kensington Green at 2257 Dundas Street West and browse current store menu categories.",
    h1: "Weed Store Near Dundas West",
    icon: "*",
    heroTagline: "Local store information for a Dundas West visit",
    sections: [
      { heading: "Dundas Street West Location", body: "Kensington Green is at 2257 Dundas St W in Toronto near Roncesvalles and the Dundas West corridor." },
      { heading: "Choose A Category First", body: "Use the menu categories to narrow the visit to flower, pre-rolls, edibles, vapes, concentrates, accessories, or cigarettes." },
    ],
    faqs: visitFaqs,
  },
  {
    slug: "dispensary-near-me-dundas-west",
    title: "Dispensary Near Me Dundas West | Kensington Green",
    metaDescription: "Kensington Green store information and current menu navigation for adults planning a Dundas West visit.",
    h1: "Dispensary Near Me In Dundas West",
    icon: "*",
    heroTagline: "Store details and current menu navigation",
    sections: [
      { heading: "Start With Store Details", body: "Check the address and posted store hours, then use the menu to plan which category you want to compare." },
      { heading: "Use Current Menu Pages", body: "Category and tier pages provide the public menu structure. Confirm an exact item through the current menu or with staff." },
    ],
    faqs: visitFaqs,
  },
  {
    slug: "nicotine-vapes-dundas-west",
    title: "Nicotine Vapes on Dundas West | Kensington Green",
    absoluteTitle: true,
    metaDescription: "Adults 19+: review six nicotine vape product pages from Kensington Green on Dundas West, then check /items/vapes for the current category. Nicotine is addictive.",
    h1: "Nicotine Vapes at Kensington Green on Dundas West",
    icon: "NV",
    heroTagline: "Adults 19+ · Nicotine is addictive.",
    heroPreview: {
      eyebrow: "KENSINGTON GREEN • DUNDAS WEST / RONCESVALLES / HIGH PARK • ADULTS 19+",
      intro: "Searching for nicotine vapes near me around Dundas West, Roncesvalles or High Park? This adult-only Kensington Green guide features six live-checked VAPE PENS product pages. Compare their supported names, then use /items/vapes for the current nicotine category. Product details can change. Nicotine is addictive.",
      products: [
        { name: "GEEK PROMAX – 5% | 30K PUFFS", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/GEEK-PROMAX.jpg", sourceSlug: "geek-promax-5-30k-puffs" },
        { name: "GEEK UNIVERSE 25k PUFFS", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/geek_universe_pulse_x_25k.webp", sourceSlug: "geek-universe-25k-puffs" },
        { name: "NEXA PIX | 30K PUFFS | MANY FLAVORS", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/nexa_showcase_600x600.webp", sourceSlug: "nexa-pix-30k-puffs-many-flavors" },
        { name: "OVNS 10000 – 5% | 10K PUFFS", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/1081OVNS10000.jpg", sourceSlug: "ovns-10000-5-10k-puffs" },
        { name: "OVNS DISPOSABLE – 5% | 8ML | MANY FLAVORS", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/OVNS500x500HQ.webp", sourceSlug: "ovns-disposable-5-8ml-many-flavors" },
        { name: "OVNS PIONEER – 5% | 22K PUFFS", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/OVNS_PIONEER_5_22K_PUFFS.webp", sourceSlug: "ovns-pioneer-5-22k-puffs" },
      ],
      disclosure: "Featured cards are live-checked starting points, not guarantees of current stock, price or availability.",
      theme: "nicotine",
      menuHref: "/items/vapes",
      primaryLabel: "Browse Nicotine Vapes",
      secondaryLabel: "Compare the Six Featured Items",
      secondaryHref: "#featured-vapes",
      identityStrip: "Kensington Green | Dundas West / Roncesvalles / High Park | Adults 19+ | Nicotine is addictive.",
      featuredHeading: "Six Live-Checked Kensington Green Vape Cards",
      featuredIntro: "This shortlist contains six live-checked Geek, NEXA and OVNS VAPE PENS product pages. Use each card for its supported display name, then rely on /items/vapes for the current Kensington Green category listing.",
      warning: "Adults 19+. Nicotine is addictive.",
    },
    sections: [
      { heading: "Read Each Product Format Carefully", body: "One featured page explicitly identifies an OVNS disposable. Keep that description attached only to that product and do not apply the disposable label to another featured item by assumption." },
      { heading: "Puff Counts Identify Listings", body: "Several featured names include puff counts. Use those numbers to distinguish the listings, not as guarantees of duration, performance or superiority." },
      { heading: "Keep Nicotine and Cannabis Vape Routes Separate", body: "This adult-only Kensington Green guide uses VAPE PENS products under /items/vapes. THC and cannabis vape products under /items/vape-disposables are excluded." },
      { heading: "Review the Current Dundas West Category", body: "Before choosing, open /items/vapes and the individual product page for current supported details. This guide does not claim prices, stock or guaranteed availability." },
    ],
    faqs: [
      { q: "Where should I check Kensington Green’s current nicotine selection?", a: "Use /items/vapes. The six featured cards are live-checked starting points while the current category listing controls selection information." },
      { q: "Does every featured item use the same format?", a: "No format should be assumed. One featured page explicitly identifies an OVNS disposable. Read each current product page for its supported format and details." },
      { q: "Does this page include cannabis vapes?", a: "No. It covers nicotine products from the VAPE PENS category for adults 19+. THC and cannabis vape products under /items/vape-disposables are excluded." },
    ],
  },
];

export function getSeoPageBySlug(slug: string): SeoPageData | undefined {
  return SEO_PAGES.find((p) => p.slug === slug);
}
