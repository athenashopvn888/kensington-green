export interface TierSeoData {
  seoTitle: string;
  seoIntro: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const TIER_SEO: Record<string, TierSeoData> = {
  EXOTIC: {
    seoTitle: "Exotic Weed & Cannabis Flower in Toronto | Kensington Green",
    seoIntro: "Kensington Green keeps Exotic as its own cannabis flower category for adults 19+ exploring weed and flower in Toronto. The Exotic tier stays narrow and distinct from Premium, AAA+, AA and Budget while the broader Weed experience remains on the main store owner page.",
    sections: [
      { heading: "Explore Exotic Weed & Flower", body: "Use the Exotic section when you want to focus on that specific Kensington Green flower category rather than browse the full tier lineup at once." },
      { heading: "Exotic Within the Kensington Green Flower Lineup", body: "Exotic is one of five named flower tiers at Kensington Green. The category label identifies this section only and does not make claims about products, stock, potency, pricing or availability." },
    ],
    faqs: [
      { q: "What is Exotic weed at Kensington Green?", a: "Exotic is one of Kensington Green's separate cannabis flower categories." },
      { q: "Is Exotic separate from Premium flower?", a: "Yes. Exotic and Premium are separate named flower tiers at Kensington Green." },
      { q: "Does the Exotic page confirm what is currently available?", a: "No. The page describes the Exotic flower category and does not confirm current stock or availability." },
    ],
  },
  PREMIUM: {
    seoTitle: "Premium Weed & Cannabis Flower in Toronto | Kensington Green",
    seoIntro: "Premium has its own place in the Kensington Green flower lineup for adults 19+ exploring weed and cannabis flower in Toronto. It remains a focused category alongside Exotic, AAA+, AA and Budget rather than competing with the broader Weed owner page.",
    sections: [
      { heading: "Browse Premium Weed & Flower", body: "The Premium section gives Kensington Green shoppers a dedicated place to explore that named flower tier without combining it with the rest of the lineup." },
      { heading: "Premium as a Separate Flower Category", body: "Kensington Green presents Premium as its own category beside Exotic, AAA+, AA and Budget. The label does not imply current product availability, potency, price or promotion." },
    ],
    faqs: [
      { q: "What is Premium weed at Kensington Green?", a: "Premium is one of Kensington Green's separate cannabis flower categories." },
      { q: "Is Premium different from Exotic?", a: "Yes. Premium and Exotic are separate named flower tiers." },
      { q: "Does Premium mean a specific product is currently available?", a: "No. Premium is the category name only and does not confirm current product availability." },
    ],
  },
  "AAA+": {
    seoTitle: "AAA+ Weed & Cannabis Flower in Toronto | Kensington Green",
    seoIntro: "AAA+ is a distinct Kensington Green flower category for adults 19+ who want to focus on that part of the weed and cannabis flower lineup. It stays complementary to the broader Weed owner and separate from Premium, AA, Exotic and Budget.",
    sections: [
      { heading: "Explore AAA+ Weed & Flower", body: "The AAA+ section keeps this flower category focused so shoppers can browse it independently from the surrounding Kensington Green tiers." },
      { heading: "AAA+ in the Kensington Green Tier Lineup", body: "AAA+ is one of the site's five named flower categories. The label identifies the tier only and does not establish potency, quality, current availability or product details." },
    ],
    faqs: [
      { q: "What is the AAA+ weed tier at Kensington Green?", a: "AAA+ is one of Kensington Green's separate cannabis flower categories." },
      { q: "Is AAA+ different from AA?", a: "Yes. AAA+ and AA are separate named flower tiers." },
      { q: "Does AAA+ make a potency or availability claim?", a: "No. AAA+ is the category label only." },
    ],
  },
  AA: {
    seoTitle: "AA Weed & Cannabis Flower in Toronto | Kensington Green",
    seoIntro: "AA is its own Kensington Green flower category for adults 19+ exploring weed and cannabis flower in Toronto. The section remains distinct from Budget, AAA+, Premium and Exotic and stays subordinate to the broader Weed owner page.",
    sections: [
      { heading: "Browse AA Weed & Flower", body: "Use the AA section when you want to stay focused on that specific Kensington Green flower category." },
      { heading: "AA as a Defined Flower Tier", body: "AA is presented as one of five named flower tiers at Kensington Green. The category label does not imply price, potency, stock, promotion or product availability." },
    ],
    faqs: [
      { q: "What does AA weed mean at Kensington Green?", a: "AA is one of Kensington Green's separate cannabis flower categories." },
      { q: "Is AA separate from Budget?", a: "Yes. AA and Budget are separate named flower tiers." },
      { q: "Does AA imply a current price or availability?", a: "No. AA is the tier label only." },
    ],
  },
  BUDGET: {
    seoTitle: "Budget Weed & Cannabis Flower in Toronto | Kensington Green",
    seoIntro: "Budget is a separate Kensington Green flower category for adults 19+ exploring weed and cannabis flower in Toronto. The Budget label identifies the tier without making a current price, promotion, stock or availability claim.",
    sections: [
      { heading: "Explore Budget Weed & Flower", body: "The Budget section gives Kensington Green shoppers a dedicated flower category that stays separate from AA, AAA+, Premium and Exotic." },
      { heading: "Budget as Its Own Flower Category", body: "Budget describes the category name only. It does not establish a current discount, promotion, price, product availability or other commercial claim." },
    ],
    faqs: [
      { q: "What is Budget weed at Kensington Green?", a: "Budget is one of Kensington Green's separate cannabis flower categories." },
      { q: "Does Budget mean there is a current sale or promotion?", a: "No. Budget is the category name only." },
      { q: "Can Budget be compared with the other Kensington Green tiers?", a: "Yes. Budget is separate from AA, AAA+, Premium and Exotic." },
    ],
  },
};

export const TIER_META_DESCRIPTION: Record<string, string> = {
  EXOTIC: "Explore the Exotic weed and cannabis flower category at Kensington Green in Toronto. Adults 19+ can browse this dedicated flower tier.",
  PREMIUM: "Explore the Premium weed and cannabis flower category at Kensington Green in Toronto through its dedicated flower tier.",
  "AAA+": "Explore the AAA+ weed and cannabis flower category at Kensington Green in Toronto through its dedicated AAA+ tier.",
  AA: "Explore the AA weed and cannabis flower category at Kensington Green in Toronto through its dedicated AA tier.",
  BUDGET: "Explore the Budget weed and cannabis flower category at Kensington Green in Toronto without current price, promotion or availability claims.",
};

export const TIER_H1: Record<string, string> = {
  EXOTIC: "Exotic Weed & Cannabis Flower in Toronto",
  PREMIUM: "Premium Weed & Cannabis Flower in Toronto",
  "AAA+": "AAA+ Weed & Cannabis Flower in Toronto",
  AA: "AA Weed & Cannabis Flower in Toronto",
  BUDGET: "Budget Weed & Cannabis Flower in Toronto",
};
