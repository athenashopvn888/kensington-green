const NATIVE_HERO_DISCLOSURE = "These six cards are public cigarette names at the Kensington Green counter on Dundas West. The case changes, so open the cigarette category or call +1 (289) 514-9520 before you ride over for one carton.";
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
  links?: { href: string; label: string }[];
  suppressTierGrid?: boolean;
}

const visitFaqs = [
  { q: "Where is Kensington Green?", a: "Kensington Green is at 2257 Dundas St W, Toronto, ON." },
  { q: "How can I review the menu?", a: "Use the flower tier and category pages to compare the current public menu before visiting." },
];

export const SEO_PAGES: SeoPageData[] = [
  {
    slug: "24-hour-weed-dispensary-dundas-west",
    title: "24 Hour Weed Dispensary in Dundas West | Kensington Green",
    absoluteTitle: true,
    metaDescription: "Kensington Green is open 24 hours daily at 2257 Dundas St W in Toronto. Find visit information for our Dundas West / Roncesvalles location and explore our Weed guides.",
    h1: "24 Hour Weed Dispensary in Dundas West",
    icon: "24H",
    heroTagline: "Open 24 hours daily at the Dundas West / Roncesvalles storefront. Adults 19+.",
    suppressTierGrid: true,
    sections: [
      { heading: "Kensington Green Is Open 24 Hours Daily", body: "Kensington Green is open 24 hours daily at 2257 Dundas St W, Toronto, ON M6R 1X6. The door faces the Dundas West / Roncesvalles seam beside Howard Park, and it stays open after the village restaurants wind down. Adults 19+ can walk in for a planned afternoon stop or a late return from High Park South. This page is the hours guide for that storefront. It is not a city-wide Toronto dispensary directory." },
      { heading: "Who uses the late door", body: "The overnight walk-in is for people already on this corridor: Roncesvalles Village a short walk south, High Park South along Dundas, the Parkdale edge when the stop still faces Dundas, and neighbours coming off Sorauren or Howard Park. Shift changes and the last streetcars are ordinary reasons to come after dark. If the search started somewhere else in the city, begin with the pin — 2257 Dundas St W — rather than a generic Toronto open-now list." },
      { heading: "Late walk-in rules", body: "Listed storefront hours are 24 hours daily, every day. There is no evening close at this door. Government-issued photo ID is required on every visit, including after midnight, and you must be 19 or older. Debit and cash are the in-store payments named on the visit page. A name on the website is a browsing aid. If one flower listing or one carton is the reason you left home, call +1 (289) 514-9520 before you park." },
      { heading: "Transit after dark", body: "The last mile does not change at night. The 505 Dundas streetcar travels Dundas Street West past the shop. From Roncesvalles Village, walk north to Dundas and turn toward 2257. The 504 King car serves the village a few blocks south; finish on foot instead of assuming it stops at the door. Dundas West Station on Line 2, with GO and UP Express, sits farther north toward Bloor. Treat the station as a transfer, then stay on Dundas until the Roncesvalles / Howard Park pinch. Check current TTC service, night substitutions, and construction before you travel. The visit page holds the longer reach notes." },
      { heading: "Parking when the corridor is quiet or packed", body: "Late curb space on Dundas Street West is often easier than the dinner rush, but the posted sign still governs the block. Read it. Do not stop on the streetcar tracks or in a clearway. When Roncesvalles is busy — a weekend night, High Park spill, a packed village — loop Sorauren Avenue, Indian Road, or Howard Park instead of circling the same Dundas frontage. No dedicated parking lot is claimed." },
      { heading: "A Dundas West hours page, not a Toronto one", body: "A search for a dispensary that is open now only helps if it resolves to this Dundas West door. The walk-in is for Dundas West, Roncesvalles, High Park South, and the Parkdale edge. Flower is split into Exotic Weed, Premium Weed, AAA+ Weed, AA Weed, and Budget Weed, each on its own page, with the weights and prices that page posts. Native cigarettes and nicotine vapes have separate guides for adults 19+." },
      { heading: "Walk-in hours and delivery are separate", body: "The storefront is open 24 hours daily. Neighbourhood delivery from Kensington Green is a different service for Dundas West, Roncesvalles, High Park South, and the Parkdale edge, and the delivery page lists that window as 10:00 a.m. to 10:00 p.m. After that window, come to 2257 Dundas St W. Do not read this 24-hour walk-in page as overnight delivery. The dispatcher confirms whether an address is in range." },
    ],
    links: [
      { href: "/visit", label: "Visit Kensington Green" },
      { href: "/weed-delivery-toronto", label: "Weed Delivery" },
      { href: "/info/native-cigarettes-dundas-west", label: "Native Cigarettes in Dundas West" },
      { href: "/info/nicotine-vapes-dundas-west", label: "Nicotine Vapes in Dundas West" },
      { href: "/exotic-weed", label: "Exotic Weed" },
      { href: "/premium-weed", label: "Premium Weed" },
      { href: "/aaa-weed", label: "AAA+ Weed" },
      { href: "/aa-weed", label: "AA Weed" },
      { href: "/budget-weed", label: "Budget Weed" },
    ],
    faqs: [
      { q: "Is Kensington Green open 24 hours on Dundas West?", a: "Yes. The walk-in at 2257 Dundas St W, Toronto, ON M6R 1X6, is open 24 hours daily. This page is the hours guide for the Dundas West / Roncesvalles storefront, not a Toronto-wide hours list." },
      { q: "Can I walk in after Roncesvalles restaurants close?", a: "Yes. The door stays open when nearby dining winds down. Bring government-issued photo ID. The 19+ rule is the same after midnight as it is in the afternoon." },
      { q: "Is the Dundas West shop open if I arrive very late?", a: "The listed hours cover every clock hour. Call +1 (289) 514-9520 only when you need a landmark check or want staff to look for one specific product before you leave." },
      { q: "How do I reach 2257 Dundas St W late at night?", a: "Ride the 505 Dundas along Dundas Street West, or walk north from Roncesvalles Village. From Dundas West Station, continue along Dundas to the Roncesvalles / Howard Park pinch. The visit page has the street-by-street notes. Check TTC night service before you travel." },
      { q: "Is late parking easier near Roncesvalles?", a: "Often the curb loosens after dinner service, but posted signs still control Dundas Street West and the side streets. If the frontage is full, try Sorauren, Indian Road, or Howard Park. No dedicated lot is claimed, and the streetcar tracks are not a stopping place." },
      { q: "Which neighbourhoods is this 24-hour door meant for?", a: "Dundas West, Roncesvalles, High Park South, and the Parkdale edge. If you are already on that corridor, this is the open walk-in at 2257 Dundas St W. It is not a directory of every Toronto dispensary." },
      { q: "Where are the flower tiers and the other guides?", a: "Exotic Weed, Premium Weed, AAA+ Weed, AA Weed, and Budget Weed each have a page. Visit, Weed Delivery, Native Cigarettes, and Nicotine Vapes are separate links from this hours guide." },
      { q: "Does a 24-hour storefront mean delivery runs all night?", a: "No. Walk-in hours and delivery hours are different. The Weed Delivery page lists delivery as 10:00 a.m. to 10:00 p.m. for Dundas West, Roncesvalles, High Park South, and the Parkdale edge. Outside that window, walk in. The dispatcher still confirms the address." },
    ],
  },
  {
    slug: "dundas-west-weed-dispensary",
    title: "Dundas West Weed Dispensary | How to Reach Kensington Green",
    metaDescription: "How to reach Kensington Green at 2257 Dundas St W: Dundas West / Roncesvalles walk-in, TTC notes, evening parking, and 19+ ID. Open 24 Hours Daily.",
    h1: "Dundas West Walk-In Dispensary at 2257 Dundas St W",
    icon: "*",
    heroTagline: "How to reach Kensington Green on Dundas West / Roncesvalles",
    suppressTierGrid: true,
    sections: [
      { heading: "The door is on Dundas, not a city-wide SERP", body: "Kensington Green is the walk-in shop at 2257 Dundas St W, Toronto, ON M6R 1X6. Own this stretch — Dundas West, Roncesvalles, High Park South, Parkdale edge — rather than a generic Toronto dispensary query. Call +1 (289) 514-9520. Adults 19+." },
      { heading: "Transit and the Roncesvalles hop", body: "Ride the 505 Dundas streetcar along Dundas Street West, walk up from Roncesvalles Village, or treat Dundas West Station as a Line 2 / GO / UP Express transfer farther north toward Bloor. The 504 King car serves the village a few blocks south. Check current TTC conditions. The /visit page is the full reach guide." },
      { heading: "Parking without blocking the streetcar", body: "Evening street parking on Dundas West and nearby laterals is the usual pattern. Read posted signs. When the corridor is busy, loop Sorauren, Indian Road, or Howard Park. No dedicated lot is claimed here." },
      { heading: "Browse categories, then confirm at the counter", body: "Flower tiers and format pages (pre-rolls, edibles, vapes, concentrates, accessories, cigarettes) are for planning. They are not a live inventory feed. If one exact item is the reason for the trip, call during listed hours: Open 24 Hours Daily." },
    ],
    faqs: [
      { q: "Where is the Dundas West shop?", a: "2257 Dundas St W, Toronto, ON M6R 1X6, near Dundas and Roncesvalles / Howard Park." },
      { q: "Is this a walk-in or a delivery page?", a: "This page is for the walk-in pin. Delivery is a separate neighbourhood-scoped URL. Directions: /visit." },
    ],
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
    metaDescription: "Plan a Native cigarette stop at Kensington Green on Dundas West near Roncesvalles. Review the cigarette guide, menu and visit information before heading over.",
    h1: "Native Cigarettes on Dundas West",
    icon: "*",
    heroTagline: "Cigarette category and visit information",
    heroPreview: {
      eyebrow: "Kensington Green · 2257 Dundas St W, Toronto",
      intro: "Adults 19+ on the Roncesvalles side of Dundas can preview cigarette names for Kensington Green at 2257 Dundas St W, then confirm the live listing before the walk-in.",
      products: NATIVE_HERO_PRODUCTS,
      disclosure: NATIVE_HERO_DISCLOSURE,
    },
    sections: [
      { heading: "The counter on the Dundas / Roncesvalles seam", body: "Kensington Green is the walk-in at 2257 Dundas St W, Toronto, ON M6R 1X6, where Dundas Street West meets Roncesvalles Avenue and Howard Park. This note covers cigarettes at that door only. A pictured carton is not a promise that the case still holds it tonight." },
      { heading: "Name cards, then the shelf", body: "BB Lights, BB Full, Canadian Lights, Canadian Full, Canadian Classics Silver, and Canadian Menthol are the public name cards on this page. They help you tell a lights pack from a full or menthol style before you leave High Park South or Roncesvalles Village. If one of those names is the whole trip, open the cigarette category or ask staff at 2257 Dundas St W." },
      { heading: "Reach the door from the village or the 505", body: "The 505 Dundas streetcar runs the same street as the shop. From Roncesvalles Village, walk north to Dundas rather than expecting the 504 King car to stop at the door. Dundas West Station, with Line 2, GO, and UP Express, is a transfer farther toward Bloor. Evening curb space on Dundas and the laterals is the usual parking pattern; read the signs and stay off the streetcar tracks. When the corridor is busy, loop Sorauren, Indian Road, or Howard Park. No lot is claimed. The visit page is the longer reach guide. The storefront is open 24 hours daily. Adults 19+." },
      { heading: "What the menu decides", body: "Price and which cartons are actually out are set by the current cigarette listing and the counter, not by this write-up. Open the cigarette category when you want the public list for Kensington Green. Call +1 (289) 514-9520 if you are already on Dundas and need a yes or no before you park." },
    ],
    faqs: [
      { q: "Where do I buy cigarettes at Kensington Green?", a: "At the walk-in counter, 2257 Dundas St W, Toronto, ON M6R 1X6, on the Dundas West side of the Roncesvalles / Howard Park pinch. Adults 19+ with government photo ID. The storefront is open 24 hours daily." },
      { q: "Are the pictured cigarette names a stock list?", a: "No. The cards are a Dundas West name preview for this shop. Whether a carton is out, and what it costs, comes from the cigarette category and from staff on site." },
      { q: "Can I stop for cigarettes after midnight?", a: "The Kensington Green storefront is open 24 hours daily, so a late walk-in is allowed. Bring ID showing you are 19 or older. This page does not describe cigarette delivery of any kind." },
      { q: "Which transit stop is closest for a cigarette stop?", a: "Stay on the 505 Dundas if you can. Walking up from Roncesvalles Village also works. Dundas West Station is useful as a Line 2 transfer, then continue along Dundas to 2257. Parking notes and the map live on the visit page." },
      { q: "Do flower tiers and cigarettes share one page?", a: "No. Flower stays on the Exotic, Premium, AAA+, AA, and Budget pages. Cigarettes stay on this guide and the cigarette category so a Roncesvalles errand does not mix the two menus." },
    ],
    links: [
      { href: "/items/cigarettes", label: "Browse the current cigarette category" },
      { href: "/visit", label: "Plan a Dundas West visit" },
      { href: "/info/dundas-west-weed-dispensary", label: "Dundas West store guide" },
    ],
  },
  {
    slug: "weed-store-near-dundas-west",
    title: "Weed Store Near Dundas West | Kensington Green",
    metaDescription: "Find Kensington Green at 2257 Dundas Street West and browse current store menu categories.",
    h1: "Weed Store Near Dundas West",
    icon: "*",
    heroTagline: "Local store information for a Dundas West visit",
    sections: [
      { heading: "Dundas Street West location", body: "Kensington Green is at 2257 Dundas St W, Toronto, ON M6R 1X6, on the Dundas West / Roncesvalles corridor — not a Junction pin and not a Queen West counter. Adults 19+." },
      { heading: "How to actually get here", body: "Use /visit for streetcar, Dundas West Station walk notes, evening parking, and 19+ ID. Category pages help you plan a format; they do not reserve a jar." },
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
