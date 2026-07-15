export interface SeoPageData {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  icon: string;
  heroTagline: string;
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
];

export function getSeoPageBySlug(slug: string): SeoPageData | undefined {
  return SEO_PAGES.find((p) => p.slug === slug);
}
