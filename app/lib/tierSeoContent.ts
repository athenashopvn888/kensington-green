export interface TierSeoData {
  seoTitle: string;
  seoIntro: string;
  sections: { heading: string; body: string; links?: { title: string; href: string }[] }[];
  faqs: { q: string; a: string }[];
}

export const TIER_SEO: Record<string, TierSeoData> = {
  EXOTIC: {
    seoTitle: "Exotic Weed Dundas West & Roncesvalles | Kensington Green",
    seoIntro: "Explore the Exotic Weed collection at Kensington Green on Dundas West near Roncesvalles. This page keeps the tier focused while the local store guide and visit page cover the storefront, directions and the wider flower lineup.",
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
    seoTitle: "Premium Weed Dundas West & Roncesvalles | Kensington Green",
    seoIntro: "Browse the Premium Weed collection at Kensington Green on Dundas West near Roncesvalles. Use this tier for a focused flower browse, then return to the local store guide or visit page for storefront details.",
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
    seoTitle: "AAA+ Weed Dundas West & Roncesvalles | Kensington Green",
    seoIntro: "Browse the AAA+ Weed collection at Kensington Green on Dundas West near Roncesvalles. The tier remains separate from the wider local store guide, where adults 19+ can find visit information and links to every flower collection.",
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
    seoTitle: "AA Weed Dundas West & Roncesvalles | Kensington Green",
    seoIntro: "Explore the AA Weed collection at Kensington Green on Dundas West near Roncesvalles. This page is dedicated to the AA tier; use the local store guide and visit page for directions, hours and links across the full flower lineup.",
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
    seoTitle: "Budget Weed Dundas West & Roncesvalles | Kensington Green",
    seoIntro: "Explore the Budget Weed collection at Kensington Green on Dundas West near Roncesvalles. The label identifies this store tier without promising a promotion, price or availability; current listing details remain on the page.",
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
  EXOTIC: "Explore Exotic Weed at Kensington Green on Dundas West near Roncesvalles. Browse the dedicated flower tier and current page details.",
  PREMIUM: "Explore Premium Weed at Kensington Green on Dundas West near Roncesvalles through its dedicated flower tier.",
  "AAA+": "Explore AAA+ Weed at Kensington Green on Dundas West near Roncesvalles through its dedicated flower tier.",
  AA: "Explore AA Weed at Kensington Green on Dundas West near Roncesvalles through its dedicated flower tier.",
  BUDGET: "Explore Budget Weed at Kensington Green on Dundas West near Roncesvalles without a promotion or availability claim.",
};

export const TIER_H1: Record<string, string> = {
  EXOTIC: "Exotic Weed in Dundas West & Roncesvalles",
  PREMIUM: "Premium Weed in Dundas West & Roncesvalles",
  "AAA+": "AAA+ Weed in Dundas West & Roncesvalles",
  AA: "AA Weed in Dundas West & Roncesvalles",
  BUDGET: "Budget Weed in Dundas West & Roncesvalles",
};


const PINKY_KSC01_TIER_ADDITIONS = {
  "EXOTIC": {
    "heading": "What “Exotic Weed” Means at Kensington Green",
    "body": "Exotic is broad cannabis culture and retail language. It can point toward unusual genetics, distinctive aroma, rarity, strong bag appeal or high-end positioning. It is not a regulated government grade and it does not guarantee one THC range. At Kensington Green, Exotic Weed is a separate flower collection. Use the collection to narrow the browse, then read the current product information inside it. If a product is described as exotic, the useful question is what characteristic is being highlighted: cultivar; aroma; appearance; trichomes; rarity; presentation. The word is a starting point, not the whole grade.",
    "links": [
      {
        "title": "Kensington Green Weed & Flower Quality Guide",
        "href": "/resources/weed-flower-guide",
        "text": "Continue with Kensington Green Weed & Flower Quality Guide."
      },
      {
        "title": "What Does Good Weed Mean?",
        "href": "/resources/flower-guides/what-does-good-weed-mean",
        "text": "Continue with What Does Good Weed Mean?."
      },
      {
        "title": "Gas, Loud & Terpy",
        "href": "/resources/flower-guides/terpenes-gas-loud-aroma",
        "text": "Continue with Gas, Loud & Terpy."
      }
    ]
  },
  "PREMIUM": {
    "heading": "Premium Weed Is Positioning, Not One Formula",
    "body": "Premium usually means a product or collection is positioned above a standard or value starting point. In cannabis, that positioning can reflect a mix of: producer; genetics; aroma; trim; cure; freshness; presentation. There is no universal rule saying Premium Weed must have one exact THC percentage, bud size or growing method. At Kensington Green, Premium Weed is a separate flower collection. Use the current Premium page for current products and the Resource Centre for the quality language.",
    "links": [
      {
        "title": "Kensington Green Weed & Flower Quality Guide",
        "href": "/resources/weed-flower-guide",
        "text": "Continue with Kensington Green Weed & Flower Quality Guide."
      },
      {
        "title": "THC vs Weed Quality",
        "href": "/resources/flower-guides/thc-vs-weed-quality",
        "text": "Continue with THC vs Weed Quality."
      },
      {
        "title": "Drying, Curing & Freshness",
        "href": "/resources/flower-guides/drying-curing-freshness",
        "text": "Continue with Drying, Curing & Freshness."
      }
    ]
  },
  "AAA+": {
    "heading": "What AAA+ Weed Means at Kensington Green",
    "body": "AAA and AAA+ are familiar Canadian cannabis retail shorthand. They are not one regulated national grading system. AAA+ generally suggests positioning above a basic AAA label, but there is no universal formula requiring one potency, aroma or visual score. At Kensington Green, AAA+ Weed is its own flower collection. Use the category to narrow the browse, then compare the current product information.",
    "links": [
      {
        "title": "Top Shelf, Mids & Quads",
        "href": "/resources/flower-guides/top-shelf-mids-quads",
        "text": "Continue with Top Shelf, Mids & Quads."
      },
      {
        "title": "Kensington Green Weed & Flower Quality Guide",
        "href": "/resources/weed-flower-guide",
        "text": "Continue with Kensington Green Weed & Flower Quality Guide."
      },
      {
        "title": "Bag Appeal",
        "href": "/resources/flower-guides/bag-appeal",
        "text": "Continue with Bag Appeal."
      }
    ]
  },
  "AA": {
    "heading": "AA Weed as a Browsing Category",
    "body": "AA is familiar cannabis grade shorthand. It is not a government laboratory grade. At Kensington Green, AA Weed is a separate flower category. The label helps narrow the browse. It does not promise: one THC range; one aroma; one bud size; one cultivation method. Use the current AA page for current products and the Resource Centre for broader grade language.",
    "links": [
      {
        "title": "Top Shelf, Mids & Quads",
        "href": "/resources/flower-guides/top-shelf-mids-quads",
        "text": "Continue with Top Shelf, Mids & Quads."
      },
      {
        "title": "Kensington Green Weed & Flower Quality Guide",
        "href": "/resources/weed-flower-guide",
        "text": "Continue with Kensington Green Weed & Flower Quality Guide."
      },
      {
        "title": "What Does Good Weed Mean?",
        "href": "/resources/flower-guides/what-does-good-weed-mean",
        "text": "Continue with What Does Good Weed Mean?."
      }
    ]
  },
  "BUDGET": {
    "heading": "Budget Weed Means Value Positioning",
    "body": "Budget is a value-oriented browsing term. It should not be used as shorthand for: unsafe; automatically weak; automatically stale; automatically low quality. Kensington Green's Budget Weed collection is the value-oriented flower section for adults who want to begin with value. The products inside it still have their own labels, cultivars, producers and current menu details. Use the current listing for today's price. Use the Resource Centre for the broader quality language.",
    "links": [
      {
        "title": "Kensington Green Weed & Flower Quality Guide",
        "href": "/resources/weed-flower-guide",
        "text": "Continue with Kensington Green Weed & Flower Quality Guide."
      },
      {
        "title": "THC vs Weed Quality",
        "href": "/resources/flower-guides/thc-vs-weed-quality",
        "text": "Continue with THC vs Weed Quality."
      },
      {
        "title": "Kensington Green Value Shopping Guide",
        "href": "/resources/value-shopping-guide",
        "text": "Continue with Kensington Green Value Shopping Guide."
      }
    ]
  }
};
for (const [key, section] of Object.entries(PINKY_KSC01_TIER_ADDITIONS)) TIER_SEO[key].sections.push(section);
