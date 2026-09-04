export interface ResourceCard {
  title: string;
  href: string;
  text: string;
}

export interface ResourceSection {
  heading: string;
  body: string | string[];
  bullets?: string[];
  afterBullets?: string[];
  link?: ResourceCard;
}

export interface ResourcePage {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  eyebrow: string;
  intro: string;
  banner: string;
  ownerLink?: ResourceCard;
  cards: ResourceCard[];
  sections: ResourceSection[];
  faqs?: { question: string; answer: string }[];
  faqHeading?: string;
}

const cigaretteLines = [
  "Canadian Lights - $25",
  "Canadian Full - $25",
  "Putters - $25",
  "Canadian Goose Full - $25",
  "Canadian Goose Lights - $25",
  "Canadian Menthol - $25",
  "Canadian Classics Original - $25",
  "Canadian Classics Silver - $25",
  "Rolled Gold Lights - $25",
  "Nexus Lights - $25",
  "Time Full - $25",
  "Nicotine pouches: Velo, Pablo, Killa - $20",
  "Grabba - $5",
  "Grabba Shaker: RedRose / Red Herring - $19",
  "Backwoods assorted flavors - $20-$25",
  "New Backwoods flavors - $25",
  "10 x Premium Mix Cigarettes - $3",
];

export const RESOURCE_PAGES: ResourcePage[] = [
  {
    slug: "",
    title: "Kensington Green Resources",
    seoTitle: "Kensington Green Resources | Dundas West Cannabis Guides",
    description:
      "Kensington Green resource hub for Dundas West, Roncesvalles, High Park, Bloor West, Parkdale, flower tiers, menu planning, TTC visits, and cigarette prices.",
    eyebrow: "Dundas West Resource Hub",
    intro:
      "Kensington Green sits at 2257 Dundas St W, right in the west-end flow between Roncesvalles, High Park, Bloor West, Parkdale, Sorauren, and Lansdowne. Use these resources to choose the right menu category, plan the TTC or walking route, compare flower tiers, and keep cigarette price checks separate from cannabis browsing.",
    banner: "/banners/welcome_banner.webp",
    cards: [
      {
        title: "Dundas West Visit Guide",
        href: "/resources/dundas-west-visit-guide",
        text: "The main local page for 2257 Dundas St W, daily 10 AM to 2 AM hours, nearby areas, and visit planning.",
      },
      {
        title: "Roncesvalles Menu Guide",
        href: "/resources/roncesvalles-menu-guide",
        text: "A customer-friendly menu choice for flower, pre-rolls, edibles, vapes, concentrates, accessories, and cigarettes.",
      },
      {
        title: "Weed Flower Guide",
        href: "/resources/weed-flower-guide",
        text: "Explore Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed in one flower guide.",
      },
      {
        title: "Value Shopping Guide",
        href: "/resources/value-shopping-guide",
        text: "A west-end value guide for Budget, AA, bundle math, and affordable flower decisions.",
      },
      {
        title: "TTC and Parking Guide",
        href: "/resources/ttc-and-parking-guide",
        text: "Plan the Dundas West stop around TTC access, local walking paths, and street parking notes.",
      },
      {
        title: "Native Smokes Prices",
        href: "/resources/native-smokes-prices",
        text: "Brand and price notes for cigarette shoppers, including Canadian, Putters, Nexus, Grabba, and Backwoods lines.",
      },
    ],
    sections: [
      {
        heading: "Plan A Kensington Green West-End Visit",
        body:
          "Use this guide to plan a Kensington Green visit from Dundas West, Roncesvalles, High Park, Parkdale, or Bloor West, then continue to the current menu and store visit page.",
        bullets: [
          "Locked visit guide: /weed-dispensary-toronto.",
          "Store address: 2257 Dundas St W, Toronto, ON M6R 1X6.",
          "Hours shown in the store data: Open Daily 10:00 AM to 02:00 AM.",
        ],
      },
      {
        heading: "Resource Pages Explain The Trip, Menu Pages Confirm The Item",
        body:
          "These pages are built to help adults 19+ choose the right next page. Product names, prices, strains, formats, and menu details can move, so the current menu categories remain the source for exact shopping details.",
      },
    ],
  },
  {
    slug: "dundas-west-visit-guide",
    title: "Dundas West Visit Guide",
    seoTitle: "Dundas West Cannabis Visit Guide | Kensington Green Toronto",
    description:
      "Plan a Kensington Green visit at 2257 Dundas St W near Roncesvalles, High Park, Bloor West, Parkdale, Sorauren, and Lansdowne.",
    eyebrow: "Visit Guide",
    intro:
      "This is the practical Kensington Green visit page for 2257 Dundas St W. Start here when the question is how to get there, what part of Toronto it serves, and which menu page to open before heading out.",
    banner: "/banners/homepage_hero.webp",
    cards: [
      {
        title: "Plan Your Visit",
        href: "/weed-dispensary-toronto",
        text: "Use the protected Toronto store page for locked store details and local search context.",
      },
      {
        title: "Menu Guide",
        href: "/resources/roncesvalles-menu-guide",
        text: "Pick a category lane before comparing products.",
      },
      {
        title: "TTC and Parking",
        href: "/resources/ttc-and-parking-guide",
        text: "Useful for Dundas West Station, Roncesvalles, High Park, and street parking planning.",
      },
    ],
    sections: [
      {
        heading: "Start With 2257 Dundas St W",
        body:
          "Kensington Green is listed at 2257 Dundas St W, Toronto, ON M6R 1X6. The store is positioned for west-end shoppers moving through Dundas West, Roncesvalles, High Park, Bloor West, Parkdale, Sorauren, Lansdowne, and nearby TTC routes.",
        bullets: [
          "Good fit for shoppers already moving along Dundas Street West.",
          "Useful bridge between Roncesvalles, Bloor West, High Park, and Parkdale.",
          "Open daily from 10:00 AM to 02:00 AM in the store data.",
        ],
      },
      {
        heading: "Choose The Menu Category Before The Visit",
        body:
          "If the stop is quick, open the category first: flower tiers, pre-rolls, edibles, THC vape, nicotine vape, concentrates, accessories, cigarettes, or Magic Stuff. That keeps the in-store decision sharper.",
      },
    ],
  },
  {
    slug: "roncesvalles-menu-guide",
    title: "Roncesvalles And Dundas West Menu Guide",
    seoTitle: "Kensington Green Menu Guide | Roncesvalles And Dundas West",
    description:
      "A Kensington Green menu guide for Dundas West and Roncesvalles shoppers comparing flower, pre-rolls, vapes, edibles, concentrates, accessories, and cigarettes.",
    eyebrow: "Menu Guide",
    intro:
      "The fastest way to shop Kensington Green is to choose one category first. Flower shoppers compare tiers. Quick-trip shoppers use pre-rolls. Format-first shoppers can jump to edibles, THC vapes, nic vapes, concentrates, accessories, or cigarettes.",
    banner: "/banners/edibles_prerolls_more_banner.webp",
    cards: [
      {
        title: "Weed Flower Guide",
        href: "/resources/weed-flower-guide",
        text: "Use the shelf ladder before choosing individual flower.",
      },
      {
        title: "Pre-Rolls",
        href: "/items/prerolls",
        text: "A direct lane for ready-to-smoke singles and packs.",
      },
      {
        title: "THC Vapes",
        href: "/items/vape-disposables",
        text: "Open the THC vape category when discreet format matters.",
      },
      {
        title: "Native Smokes Prices",
        href: "/resources/native-smokes-prices",
        text: "Keep cigarette brand and price checks out of the cannabis decision.",
      },
      {
        title: "Cannabis Dispensary and Weed Dispensary Guide",
        href: "/resources/cannabis-dispensary-vs-weed-dispensary",
        text: "Learn how common dispensary and near-me wording can describe related local searches.",
      },
    ],
    sections: [
      {
        heading: "Shop By Category, Not By Guessing",
        body:
          "Dundas West shoppers usually want a clean shortcut. Start with the category that matches the trip, then compare product names, prices, formats, and menu details inside the current menu.",
        bullets: [
          "Flower: Exotic, Premium, AAA+, AA, and Budget.",
          "Quick smoke: pre-rolls before loose flower.",
          "Format-first: edibles, THC vapes, nicotine vapes, concentrates, and accessories.",
          "Tobacco side trip: cigarettes and Native smokes prices.",
        ],
      },
      {
        heading: "Keep Local Intent On The Page",
        body:
          "This guide supports shoppers looking near Roncesvalles, High Park, Bloor West, Parkdale, Sorauren, and Lansdowne without changing the existing category slugs.",
      },
    ],
  },
  {
    slug: "cannabis-dispensary-vs-weed-dispensary",
    title: "Why People Search “Cannabis Dispensary” and “Weed Dispensary”",
    seoTitle: "Dispensary vs Weed Dispensary | Kensington Green Toronto",
    description:
      "Learn how cannabis dispensary, weed dispensary, cannabis store and near-me searches relate when people look for Kensington Green in Toronto.",
    eyebrow: "Kensington Green · Toronto",
    intro:
      "When someone searches locally, terminology can be more flexible than it looks. Cannabis is the formal term, weed is common conversational language, and dispensary identifies the business type people are trying to locate. That is why several different phrases can lead toward the same local-search goal.",
    banner: "/banners/welcome_banner.webp",
    cards: [],
    sections: [
      {
        heading: "Cannabis vs. Weed",
        body: [
          "“Cannabis” is the broader and more formal term. “Weed” is everyday language. Adding “dispensary” makes the business-search intent clearer.",
          "That creates a natural keyword family:",
        ],
        bullets: [
          "dispensary near me",
          "cannabis dispensary near me",
          "weed dispensary near me",
          "cannabis store near me",
          "cannabis near me",
          "weed near me",
        ],
        afterBullets: [
          "These are not identical keywords. They are different ways people may express related intent.",
        ],
      },
      {
        heading: "Why the Local Page Still Leads",
        body:
          "The purpose of this article is educational. It explains the relationship among dispensary, cannabis dispensary, weed dispensary and cannabis store.",
        link: {
          title: "For store details and visiting information, see Kensington Green’s Toronto dispensary page.",
          href: "/weed-dispensary-toronto",
          text: "Kensington Green Toronto dispensary information",
        },
      },
    ],
    faqHeading: "Frequently Asked Questions",
    faqs: [
      {
        question: "Is cannabis the same word as weed?",
        answer: "They overlap in everyday use, but cannabis is the formal term while weed is more conversational.",
      },
      {
        question: "What does dispensary mean in this context?",
        answer: "It identifies the local business type a searcher is trying to find.",
      },
      {
        question: "Can one page support several related searches?",
        answer: "Yes. A useful page can naturally explain the connected terminology without repeating every phrase unnaturally.",
      },
      {
        question: "What is the role of the local store page?",
        answer: "It remains the main page for location and visit information, while this guide provides supporting context.",
      },
    ],
  },
  {
    slug: "weed-flower-guide",
    title: "Kensington Green Weed & Flower Guide",
    seoTitle: "Weed & Cannabis Flower Guide Toronto | Kensington Green",
    description:
      "Explore Kensington Green’s Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed flower collections in one concise Toronto guide.",
    eyebrow: "Kensington Green · Dundas Street West",
    intro:
      "Kensington Green brings together five Weed flower collections for shoppers who want to compare different parts of the selection before choosing what to explore. Browse Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed, then continue with the collection that interests you. For broader local Weed browsing, start with Kensington Green’s established Toronto Weed selection.",
    banner: "/banners/exotics_banner.webp",
    ownerLink: {
      title: "Explore Kensington Green Weed in Toronto",
      href: "/weed-dispensary-toronto",
      text: "Start with Kensington Green’s broader Toronto Weed selection.",
    },
    cards: [
      {
        title: "Explore Exotic Weed",
        href: "/exotic-weed",
        text: "Explore Kensington Green’s Exotic Weed flower collection and the products presented within it.",
      },
      {
        title: "Explore Premium Weed",
        href: "/premium-weed",
        text: "Browse Kensington Green’s Premium Weed flower collection.",
      },
      {
        title: "Explore AAA+ Weed",
        href: "/aaa-weed",
        text: "Explore Kensington Green’s AAA+ Weed flower collection.",
      },
      {
        title: "Explore AA Weed",
        href: "/aa-weed",
        text: "Browse Kensington Green’s AA Weed flower collection.",
      },
      {
        title: "Explore Budget Weed",
        href: "/budget-weed",
        text: "Explore Kensington Green’s Budget Weed flower collection.",
      },
    ],
    sections: [
      {
        heading: "Explore Five Weed Flower Collections",
        body:
          "The five collections give shoppers different parts of the Kensington Green flower selection to explore. Start with one that interests you or compare several before narrowing your browsing.",
      },
      {
        heading: "Weed, Cannabis and Flower at Kensington Green",
        body:
          "Weed, cannabis, bud and flower are common terms shoppers use while browsing dispensary selections. Kensington Green uses those terms naturally while keeping the five flower collections easy to distinguish.",
      },
      {
        heading: "Compare the Collections That Interest You",
        body:
          "You can move between Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed and explore the information presented within each collection before deciding where to continue.",
      },
    ],
    faqs: [
      {
        question: "What Weed flower collections can I explore at Kensington Green?",
        answer: "Kensington Green organizes flower browsing across five collections: Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed.",
      },
      {
        question: "Where can I start if I am not looking for one specific flower collection?",
        answer: "Start with Kensington Green’s broader Weed in Toronto section, then move into a flower collection when one interests you.",
      },
      {
        question: "Can I compare more than one Weed flower collection?",
        answer: "Yes. You can explore the five collections individually and compare the information presented within each one.",
      },
    ],
  },
  {
    slug: "value-shopping-guide",
    title: "Kensington Green Value Shopping Guide",
    seoTitle: "Kensington Green Value Guide | Budget Weed Dundas West Toronto",
    description:
      "A Dundas West value guide for Kensington Green shoppers comparing Budget flower, AA flower, AAA+ bundle math, and affordable cannabis menu choices.",
    eyebrow: "Value Guide",
    intro:
      "Value shopping is not just the cheapest item on the page. At Kensington Green, it means starting with Budget and AA, then checking whether AAA+ bundle math makes the visit stronger.",
    banner: "/banners/budget_banner.webp",
    cards: [
      {
        title: "Budget Weed",
        href: "/budget-weed",
        text: "Start with the lowest flower lane and compare current options.",
      },
      {
        title: "AA Weed",
        href: "/aa-weed",
        text: "A clean daily-driver lane when you want simple value.",
      },
      {
        title: "AAA+ Weed",
        href: "/aaa-weed",
        text: "Check the 6g bundle path when you want more shelf without jumping too high.",
      },
      {
        title: "Menu Guide",
        href: "/resources/roncesvalles-menu-guide",
        text: "Use this when value depends on category, not just flower.",
      },
    ],
    sections: [
      {
        heading: "Start With The Value Tiers",
        body:
          "Budget and AA are the natural first stops for affordable weed near Dundas West, Roncesvalles, and Parkdale. If the current AAA+ list has the right strain and bundle, it can become the better value play.",
      },
      {
        heading: "Current Menu Still Wins",
        body:
          "A value guide can explain the path, but the current menu decides the actual product. Check the category before heading out so the visit does not depend on stale strain names or prices.",
      },
    ],
  },
  {
    slug: "ttc-and-parking-guide",
    title: "Kensington Green TTC And Parking Guide",
    seoTitle: "Kensington Green TTC And Parking Guide | 2257 Dundas St W",
    description:
      "Plan a Kensington Green visit by TTC, walking, or street parking near Dundas West, Roncesvalles, High Park, and Parkdale.",
    eyebrow: "Route Guide",
    intro:
      "Kensington Green works for people already moving across the west end. Use this page for a quick route check around Dundas West Station, Roncesvalles, High Park, Parkdale, Lansdowne, and nearby side streets.",
    banner: "/banners/08_Contact_Us.webp",
    cards: [
      {
        title: "Dundas West Visit Guide",
        href: "/resources/dundas-west-visit-guide",
        text: "Return to the store-specific visit planner.",
      },
      {
        title: "Plan Your Visit",
        href: "/weed-dispensary-toronto",
        text: "Use this for locked address and local store details.",
      },
      {
        title: "Contact",
        href: "/contact",
        text: "Use contact details if you need store-specific confirmation.",
      },
    ],
    sections: [
      {
        heading: "TTC And Walking Context",
        body:
          "The store data places Kensington Green near Dundas West Subway Station and local TTC routes. It is also positioned for walks or short rides from Roncesvalles, High Park, Bloor West, Parkdale, Sorauren, and Lansdowne.",
      },
      {
        heading: "Parking Context",
        body:
          "The store data notes street parking on Dundas Street West. Because street parking changes by time and signage, use this as planning context and follow posted parking rules when you arrive.",
      },
    ],
  },
  {
    slug: "native-smokes-prices",
    title: "Kensington Green Native Smokes Prices",
    seoTitle: "Kensington Green Native Smokes Prices | Cigarette Brands Toronto",
    description:
      "Kensington Green cigarette resource with listed brands and prices including Canadian, Canadian Goose, Putters, Nexus, Grabba, Backwoods, and nicotine pouches.",
    eyebrow: "Cigarette Prices",
    intro:
      "If cigarettes are part of the Kensington Green stop, keep that decision in its own lane. The current store source lists Canadian, Canadian Goose, Canadian Classics, Putters, Nexus, Time, Grabba, Backwoods, and nicotine pouch lines with prices.",
    banner: "/banners/06_Cigarettes.webp",
    cards: [
      {
        title: "Cigarette Category",
        href: "/items/cigarettes",
        text: "Open the current cigarette category before heading to the store.",
      },
      {
        title: "Visit Guide",
        href: "/resources/dundas-west-visit-guide",
        text: "Plan the 2257 Dundas St W stop around the cigarette lane.",
      },
      {
        title: "Accessories",
        href: "/items/add-ons",
        text: "Check papers, lighters, and add-ons separately.",
      },
    ],
    sections: [
      {
        heading: "Listed Brands And Prices",
        body:
          "The Kensington Green item source currently lists these cigarette, pouch, grabba, and Backwoods lines. Treat them as menu-page context and confirm current stock before relying on one exact brand.",
        bullets: cigaretteLines,
      },
      {
        heading: "Keep The Tobacco Stop Separate",
        body:
          "If you are also shopping flower, pre-rolls, edibles, vapes, or concentrates, finish the cigarette decision separately. That makes the Dundas West visit cleaner and keeps the category pages easier to use.",
      },
    ],
  },
];

export const RESOURCE_HOME = RESOURCE_PAGES[0];

export function getResourcePage(slug: string) {
  const cleanSlug = slug.replace(/^\/+|\/+$/g, "");
  return RESOURCE_PAGES.find((page) => page.slug === cleanSlug);
}
