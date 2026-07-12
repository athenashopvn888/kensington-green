export interface ResourceCard {
  title: string;
  href: string;
  text: string;
}

export interface ResourceSection {
  heading: string;
  body: string;
  bullets?: string[];
}

export interface ResourcePage {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  eyebrow: string;
  intro: string;
  banner: string;
  cards: ResourceCard[];
  sections: ResourceSection[];
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
      "Kensington Green sits at 2257 Dundas St W, right in the west-end flow between Roncesvalles, High Park, Bloor West, Parkdale, Sorauren, and Lansdowne. Use these resources to choose the right menu lane, plan the TTC or walking route, compare flower tiers, and keep cigarette price checks separate from cannabis browsing.",
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
        text: "A shopper-first menu path for flower, pre-rolls, edibles, vapes, concentrates, accessories, and cigarettes.",
      },
      {
        title: "Flower Tier Map",
        href: "/resources/flower-tier-map",
        text: "Use Exotic, Premium, AAA+, AA, and Budget as clear shelf lanes before choosing a strain.",
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
        heading: "Give Kensington Green A West-End Job",
        body:
          "For Pod 3, Kensington Green should not sound like a generic Toronto store. It should own the Dundas West, Roncesvalles, High Park, Parkdale, and Bloor West planning lane while still sending shoppers to the existing menu and local landing page.",
        bullets: [
          "Locked local landing page: /weed-dispensary-toronto.",
          "Store address: 2257 Dundas St W, Toronto, ON M6R 1X6.",
          "Hours shown in the store data: Open Daily 10:00 AM to 02:00 AM.",
        ],
      },
      {
        heading: "Resource Pages Explain The Trip, Menu Pages Confirm The Item",
        body:
          "These pages are built to help adults 19+ choose the right next page. Product names, prices, strains, formats, and availability can move, so the current category pages remain the source for exact shopping details.",
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
        title: "Local Landing Page",
        href: "/weed-dispensary-toronto",
        text: "Use the protected Toronto landing page for locked store details and local search context.",
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
        heading: "Choose The Menu Lane Before The Visit",
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
      "The fastest way to shop Kensington Green is to pick a lane first. Flower shoppers compare tiers. Quick-trip shoppers use pre-rolls. Format-first shoppers can jump to edibles, THC vapes, nic vapes, concentrates, accessories, or cigarettes.",
    banner: "/banners/edibles_prerolls_more_banner.webp",
    cards: [
      {
        title: "Flower Tier Map",
        href: "/resources/flower-tier-map",
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
    ],
    sections: [
      {
        heading: "Shop By Category, Not By Guessing",
        body:
          "Dundas West shoppers usually want a clean shortcut. Start with the category that matches the trip, then compare product names, prices, formats, and availability inside the current menu.",
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
    slug: "flower-tier-map",
    title: "Kensington Green Flower Tier Map",
    seoTitle: "Kensington Green Flower Tier Guide | Exotic Premium AAA AA Budget",
    description:
      "Compare Kensington Green flower tiers including Exotic, Premium, AAA+, AA, and Budget with practical value and bundle notes.",
    eyebrow: "Flower Guide",
    intro:
      "Kensington Green flower works best as a shelf ladder. Use the tier first, then compare the strain details, THC notes, format, and current price inside that lane.",
    banner: "/banners/exotics_banner.webp",
    cards: [
      {
        title: "Exotic",
        href: "/exotic",
        text: "Higher-shelf flower with 6g bundle math shown on the tier page.",
      },
      {
        title: "Premium",
        href: "/premium",
        text: "A quality-focused lane that can still make sense for bundle shoppers.",
      },
      {
        title: "AAA+",
        href: "/aaa",
        text: "A middle lane for strength and value before dropping into AA.",
      },
      {
        title: "AA",
        href: "/aa",
        text: "Daily-driver flower at the simpler value level.",
      },
      {
        title: "Budget",
        href: "/budget",
        text: "Start here when affordable weed is the mission.",
      },
    ],
    sections: [
      {
        heading: "Use The Tier To Narrow The Shelf",
        body:
          "Exotic, Premium, AAA+, AA, and Budget are not just labels. They are shopper shortcuts. If you already know the spend level, open that tier first instead of scrolling the whole menu.",
      },
      {
        heading: "Bundle Math Helps The Top Lanes",
        body:
          "The store data shows 6g bundle paths on the top three flower tiers: Exotic at $60 for 6g, Premium at $45 for 6g, and AAA+ at $30 for 6g. Use the live tier page before visiting to confirm the current offer and strain mix.",
        bullets: [
          "Exotic 6g bundle: $60 shown in the tier data.",
          "Premium 6g bundle: $45 shown in the tier data.",
          "AAA+ 6g bundle: $30 shown in the tier data.",
          "AA and Budget remain the direct value lanes.",
        ],
      },
    ],
  },
  {
    slug: "value-shopping-guide",
    title: "Kensington Green Value Shopping Guide",
    seoTitle: "Kensington Green Value Guide | Budget Weed Dundas West Toronto",
    description:
      "A Dundas West value guide for Kensington Green shoppers comparing Budget flower, AA flower, AAA+ bundle math, and affordable cannabis menu paths.",
    eyebrow: "Value Guide",
    intro:
      "Value shopping is not just the cheapest item on the page. At Kensington Green, it means starting with Budget and AA, then checking whether AAA+ bundle math makes the visit stronger.",
    banner: "/banners/budget_banner.webp",
    cards: [
      {
        title: "Budget Flower",
        href: "/budget",
        text: "Start with the lowest flower lane and compare current options.",
      },
      {
        title: "AA Flower",
        href: "/aa",
        text: "A clean daily-driver lane when you want simple value.",
      },
      {
        title: "AAA+ Flower",
        href: "/aaa",
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
        heading: "Start Low, Move Up Only When It Makes Sense",
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
        title: "Local Landing Page",
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
