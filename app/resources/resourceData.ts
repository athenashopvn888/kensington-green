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


const PINKY_KSC01_OVERRIDES: Record<string, Partial<ResourcePage>> = {
  "cannabis-dispensary-vs-weed-dispensary": {
    "title": "Cannabis Dispensary vs Weed Dispensary: Different Words, Same Kind of Stop",
    "seoTitle": "Cannabis vs Weed Dispensary in Toronto | Kensington Green",
    "description": "Learn why adults use cannabis dispensary, weed dispensary, cannabis store and dispensary near me for closely related local searches in Toronto.",
    "eyebrow": "Kensington Green Guide",
    "intro": "Toronto shoppers do not all use the same words when they are trying to find a local cannabis store. Some say cannabis dispensary. Some say weed dispensary. Some say cannabis store. Some shorten it to dispensary near me. Those phrases are not identical, but they often point toward the same practical goal: find the right local business, confirm the location, and then check the menu category that matters.",
    "banner": "/banners/homepage_hero.webp",
    "cards": [
      {
        "title": "Kensington Green in Toronto",
        "href": "/weed-dispensary-toronto",
        "text": "Continue with Kensington Green in Toronto."
      },
      {
        "title": "First Visit to Kensington Green",
        "href": "/resources/dundas-west-visit-guide",
        "text": "Continue with First Visit to Kensington Green."
      },
      {
        "title": "Cannabis 101",
        "href": "/resources/cannabis-101",
        "text": "Continue with Cannabis 101."
      },
      {
        "title": "Kensington Green Resources",
        "href": "/resources",
        "text": "Continue with Kensington Green Resources."
      }
    ],
    "sections": [
      {
        "heading": "Cannabis Is the Formal Term",
        "body": [
          "“Cannabis” is the formal word used in Canadian law, regulated product information and most health guidance.",
          "That makes it the clearest term when the topic is legal product information, labels, regulations or general education."
        ]
      },
      {
        "heading": "Weed Is Everyday Language",
        "body": [
          "“Weed” is familiar conversational language.",
          "Adults use it because it is direct and natural.",
          "A useful cannabis website does not need to avoid the word. It should use normal language while keeping the business identity and product information accurate."
        ]
      },
      {
        "heading": "Dispensary and Store Can Describe the Same Retail Destination",
        "body": [
          "In everyday conversation, “dispensary” and “cannabis store” can describe the same kind of adult-use retail stop.",
          "The important part comes after the wording.",
          "Once someone finds Kensington Green, they need accurate information such as:",
          "the exact business name;",
          "the correct address;",
          "current listed hours;",
          "contact information;",
          "the right category or guide.",
          "The protected Toronto store page remains the place for visit details. This resource simply explains the terminology."
        ]
      },
      {
        "heading": "What “Near Me” Adds",
        "body": [
          "“Near me” adds local intent.",
          "It does not create a different kind of business.",
          "Someone searching “weed dispensary near me” or “cannabis dispensary near me” is usually trying to find a nearby location quickly.",
          "For Kensington Green, the useful answer is the real Dundas St W store information, not a paragraph repeating the same phrase over and over."
        ]
      },
      {
        "heading": "One Store, Several Ways to Say It",
        "body": [
          "The same adult might use different wording on different days:",
          "weed store;",
          "cannabis store;",
          "weed dispensary;",
          "cannabis dispensary;",
          "dispensary;",
          "local cannabis shop.",
          "That flexibility is normal.",
          "The exact business identity should stay consistent.",
          "Supporting content can do the translating."
        ]
      },
      {
        "heading": "Local Information Matters More Than Vocabulary Once the Store Is Found",
        "body": [
          "After a shopper identifies Kensington Green, the questions become practical:",
          "Is this the Dundas St W location?",
          "What are the current listed hours?",
          "Which page explains the flower tiers?",
          "Which page helps with a first visit?",
          "Which live page shows current products?",
          "That is where the site should help."
        ]
      },
      {
        "heading": "Keep the Business Name Accurate",
        "body": [
          "Kensington Green should remain Kensington Green.",
          "The business name does not need to be altered to mirror every way people talk about cannabis.",
          "Natural supporting content can explain weed, cannabis, dispensary and store language without changing the identity."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Is a weed dispensary different from a cannabis dispensary?",
        "answer": "Usually the difference is wording. Cannabis is the formal term; weed is common everyday language."
      },
      {
        "question": "What does “dispensary near me” mean?",
        "answer": "It expresses local intent: the person is trying to find a nearby dispensary."
      },
      {
        "question": "Is a cannabis store the same as a cannabis dispensary?",
        "answer": "In normal retail conversation, the phrases can describe the same kind of adult-use cannabis business."
      },
      {
        "question": "Should Kensington Green change its business name to match search phrases?",
        "answer": "No. The public business identity should stay accurate."
      },
      {
        "question": "Where should I check Kensington Green visit details?",
        "answer": "Use the Kensington Green Toronto store page for current visit information."
      }
    ],
    "faqHeading": "Frequently Asked Questions"
  },
  "dundas-west-visit-guide": {
    "title": "First Visit to Kensington Green: Dundas West Guide",
    "seoTitle": "First Cannabis Store Visit on Dundas West | Kensington Green",
    "description": "Planning a first Kensington Green visit? Learn what adults 19+ can expect, what to bring and how to read the menu before heading to Dundas St W.",
    "eyebrow": "Kensington Green Guide",
    "intro": "A first cannabis-store visit does not need to feel complicated. Kensington Green is listed at 2257 Dundas St W, Toronto, ON M6R 1X6. Adults 19+ can make the visit easier by checking the current store details, choosing one menu lane and knowing a few useful terms before heading out.",
    "banner": "/banners/homepage_hero.webp",
    "cards": [
      {
        "title": "Kensington Green in Toronto",
        "href": "/weed-dispensary-toronto",
        "text": "Continue with Kensington Green in Toronto."
      },
      {
        "title": "Cannabis 101",
        "href": "/resources/cannabis-101",
        "text": "Continue with Cannabis 101."
      },
      {
        "title": "Weed & Flower Quality Guide",
        "href": "/resources/weed-flower-guide",
        "text": "Continue with Weed & Flower Quality Guide."
      },
      {
        "title": "TTC and Parking Guide",
        "href": "/resources/ttc-and-parking-guide",
        "text": "Continue with TTC and Parking Guide."
      },
      {
        "title": "Roncesvalles and Dundas West Menu Guide",
        "href": "/resources/roncesvalles-menu-guide",
        "text": "Continue with Roncesvalles and Dundas West Menu Guide."
      },
      {
        "title": "Weed Slang Explained",
        "href": "/resources/cannabis-101/weed-slang-glossary",
        "text": "Continue with Weed Slang Explained."
      }
    ],
    "sections": [
      {
        "heading": "Start With the Current Store Information",
        "body": [
          "Use the Toronto store page for the current visit details.",
          "That page should remain the practical source for:",
          "store identity;",
          "address;",
          "current listed hours;",
          "contact information;",
          "visit details.",
          "This guide explains how to approach the menu."
        ]
      },
      {
        "heading": "Bring Valid 19+ Identification",
        "body": [
          "Ontario's legal age for recreational cannabis is 19.",
          "Adults should be prepared to show valid identification."
        ]
      },
      {
        "heading": "Pick One Category Before You Arrive",
        "body": [
          "If the trip is about flower",
          "Start with one of the five Weed flower categories:",
          "Exotic Weed;",
          "Premium Weed;",
          "AAA+ Weed;",
          "AA Weed;",
          "Budget Weed.",
          "Choose the shelf first.",
          "Then compare current products.",
          "If the trip is about pre-rolls",
          "Use the pre-roll category.",
          "A prepared pre-roll is a different comparison from loose flower.",
          "If the trip is about edibles, THC vapes or concentrates",
          "Use the matching format page.",
          "Different formats require different label reading.",
          "If the trip includes cigarettes",
          "Keep commercial tobacco separate from cannabis browsing.",
          "Cigarettes and cannabis belong in different product lanes."
        ]
      },
      {
        "heading": "You Do Not Need to Memorize Strain Names",
        "body": [
          "A normal first question can be simple:",
          "“What does this tier mean?”",
          "“What should I read on this label?”",
          "“What does gas mean in this description?”",
          "“What is the difference between this format and that one?”",
          "That is enough."
        ]
      },
      {
        "heading": "The Five Weed Categories Are a Navigation Tool",
        "body": [
          "Kensington Green's five Weed flower categories make the browse easier.",
          "They are not one national grading table.",
          "Use the tier to narrow the list.",
          "Use the current product information to understand the item."
        ]
      },
      {
        "heading": "THC Is Only One Part of the Comparison",
        "body": [
          "THC matters.",
          "It should not become the entire decision.",
          "Flower can also differ in:",
          "aroma;",
          "trichome appearance;",
          "trim;",
          "structure;",
          "moisture;",
          "cure;",
          "freshness;",
          "producer;",
          "cultivar.",
          "A higher number does not answer those questions."
        ]
      },
      {
        "heading": "Translate the Slang",
        "body": [
          "If someone says:",
          "“That one is loud.”",
          "they may mean the aroma is strong.",
          "If they say:",
          "“It looks frosty.”",
          "they are likely pointing to visible trichomes.",
          "If they say:",
          "“That is top shelf.”",
          "ask what characteristic is making them say that.",
          "The slang becomes useful when it turns into something specific."
        ]
      },
      {
        "heading": "Dundas West / Roncesvalles Visit Context",
        "body": [
          "The existing site evidence positions Kensington Green for west-end shoppers moving through Dundas West, Roncesvalles, High Park, Bloor West, Parkdale, Sorauren and Lansdowne.",
          "Use the existing TTC and parking guide for route-planning context and follow current transit, street and parking conditions when travelling.",
          "Do not treat an evergreen resource as a live traffic or parking feed."
        ]
      },
      {
        "heading": "Check Current Pages for Changing Details",
        "body": [
          "Product names, prices, package formats, strains, flavours and availability can change.",
          "This first-visit guide should remain useful even when the menu changes.",
          "Current details belong on the current listing."
        ]
      }
    ],
    "faqs": [
      {
        "question": "How old do I need to be to visit Kensington Green for recreational cannabis?",
        "answer": "Adults must be 19+ in Ontario."
      },
      {
        "question": "Do I need to know which strain I want before visiting?",
        "answer": "No. Starting with format and the current menu is enough."
      },
      {
        "question": "Are the Weed tiers official grades?",
        "answer": "No. They are store browsing categories, not one universal government grading system."
      },
      {
        "question": "Should I choose the highest-THC product?",
        "answer": "Not automatically. THC matters, but it does not describe every characteristic."
      },
      {
        "question": "Where should I check current transit, parking and store details?",
        "answer": "Use the current Kensington Green store information and the existing TTC/parking guide, then follow current posted transit and parking conditions."
      }
    ],
    "faqHeading": "Frequently Asked Questions"
  },
  "weed-flower-guide": {
    "title": "Kensington Green Weed & Flower Quality Guide",
    "seoTitle": "Weed & Cannabis Flower Quality Guide Toronto | Kensington Green",
    "description": "Understand Kensington Green's Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed plus the quality language behind them.",
    "eyebrow": "Kensington Green Guide",
    "intro": "Kensington Green already has five clear Weed flower categories. This page should explain what those categories can and cannot tell an adult shopper. The five categories are: Exotic Weed; Premium Weed; AAA+ Weed; AA Weed; Budget Weed. Use the category to narrow the browse. Then use the current product information to understand the specific item.",
    "banner": "/banners/homepage_hero.webp",
    "cards": [
      {
        "title": "Exotic Weed",
        "href": "/exotic-weed",
        "text": "Continue with Exotic Weed."
      },
      {
        "title": "Premium Weed",
        "href": "/premium-weed",
        "text": "Continue with Premium Weed."
      },
      {
        "title": "AAA+ Weed",
        "href": "/aaa-weed",
        "text": "Continue with AAA+ Weed."
      },
      {
        "title": "AA Weed",
        "href": "/aa-weed",
        "text": "Continue with AA Weed."
      },
      {
        "title": "Budget Weed",
        "href": "/budget-weed",
        "text": "Continue with Budget Weed."
      },
      {
        "title": "What Does Good Weed Mean?",
        "href": "/resources/flower-guides/what-does-good-weed-mean",
        "text": "Continue with What Does Good Weed Mean?."
      },
      {
        "title": "Top Shelf, Mids & Quads",
        "href": "/resources/flower-guides/top-shelf-mids-quads",
        "text": "Continue with Top Shelf, Mids & Quads."
      },
      {
        "title": "THC vs Weed Quality",
        "href": "/resources/flower-guides/thc-vs-weed-quality",
        "text": "Continue with THC vs Weed Quality."
      },
      {
        "title": "Bag Appeal",
        "href": "/resources/flower-guides/bag-appeal",
        "text": "Continue with Bag Appeal."
      },
      {
        "title": "Frosty Weed & Trichomes",
        "href": "/resources/flower-guides/trichomes-frosty-weed",
        "text": "Continue with Frosty Weed & Trichomes."
      },
      {
        "title": "Gas, Loud & Terpy",
        "href": "/resources/flower-guides/terpenes-gas-loud-aroma",
        "text": "Continue with Gas, Loud & Terpy."
      },
      {
        "title": "Drying, Curing & Freshness",
        "href": "/resources/flower-guides/drying-curing-freshness",
        "text": "Continue with Drying, Curing & Freshness."
      },
      {
        "title": "Smalls vs Big Buds",
        "href": "/resources/flower-guides/smalls-vs-big-buds",
        "text": "Continue with Smalls vs Big Buds."
      },
      {
        "title": "BC Grown / Indoor / Hydro / Outdoor",
        "href": "/resources/flower-guides/bc-grown-indoor-hydro-outdoor",
        "text": "Continue with BC Grown / Indoor / Hydro / Outdoor."
      },
      {
        "title": "Craft vs Commercial Cannabis",
        "href": "/resources/flower-guides/craft-vs-commercial-cannabis",
        "text": "Continue with Craft vs Commercial Cannabis."
      }
    ],
    "sections": [
      {
        "heading": "Quality Is More Than the Tier Name",
        "body": [
          "Cannabis flower can be compared through several different characteristics:",
          "aroma;",
          "visible trichomes;",
          "trim;",
          "bud structure;",
          "moisture;",
          "cure;",
          "freshness;",
          "cultivar;",
          "producer;",
          "value;",
          "personal preference.",
          "That is why two products inside the same broad category can still present very differently."
        ]
      },
      {
        "heading": "Genetics and Cultivar",
        "body": [
          "Genetics shape the plant's potential.",
          "A cultivar name helps identify the product.",
          "It does not guarantee that every producer or every batch with a familiar name will be identical."
        ]
      },
      {
        "heading": "Growing Environment",
        "body": [
          "Indoor, outdoor, greenhouse and hydroponic describe different parts of cultivation.",
          "None of those words automatically guarantees one quality result.",
          "The final flower still depends on genetics, plant health, harvest timing and post-harvest handling."
        ]
      },
      {
        "heading": "Drying and Curing",
        "body": [
          "Drying reduces moisture after harvest.",
          "Curing is part of controlled post-harvest conditioning.",
          "Poor handling can change aroma, texture and storage quality even when the plant was grown well."
        ]
      },
      {
        "heading": "Trichomes",
        "body": [
          "Trichomes are resin-producing structures on the plant.",
          "Visible coverage can create the frosty look adults often notice.",
          "Frost is a clue.",
          "It is not an exact THC meter."
        ]
      },
      {
        "heading": "Trim and Bud Structure",
        "body": [
          "Shape, density and trim influence bag appeal.",
          "They can tell you something about presentation.",
          "They do not tell the full chemistry or freshness story."
        ]
      },
      {
        "heading": "Aroma",
        "body": [
          "Cannabis aroma can be described as:",
          "gas;",
          "skunk;",
          "citrus;",
          "fruit;",
          "earth;",
          "pine;",
          "sweet;",
          "floral.",
          "Those are sensory descriptions.",
          "They are not official grades."
        ]
      },
      {
        "heading": "Freshness and Storage",
        "body": [
          "Heat, light, oxygen, time and handling can influence finished flower after packaging.",
          "Good cultivation can still lose desirable characteristics through poor storage."
        ]
      },
      {
        "heading": "THC Is Not the Tier",
        "body": [
          "THC is important regulated product information.",
          "It is not a complete grading system.",
          "Kensington Green's five Weed flower categories should not be read as five THC brackets.",
          "A higher category does not guarantee one THC range.",
          "A higher THC number does not automatically move a product into a higher category."
        ]
      },
      {
        "heading": "Top Shelf, Mids and Quads Are a Different Language Layer",
        "body": [
          "Top shelf generally means premium positioning.",
          "Mids means someone considers a product middle-of-the-road.",
          "Quads is common Canadian slang for AAAA.",
          "Those terms overlap with retail grade language, but they are not one regulated national scorecard."
        ]
      },
      {
        "heading": "Budget Is a Value Category, Not a Quality Insult",
        "body": [
          "Budget Weed is a real browsing intent.",
          "The word does not automatically mean unsafe, weak, stale or poor quality.",
          "It means the section is positioned around value.",
          "The actual product still has its own label and current listing."
        ]
      },
      {
        "heading": "Use This Page as the Flower Education Hub",
        "body": []
      },
      {
        "heading": "Quality",
        "body": []
      },
      {
        "heading": "What Does Good Weed Mean?",
        "body": []
      },
      {
        "heading": "Top Shelf vs Mids vs Quads",
        "body": []
      },
      {
        "heading": "THC vs Weed Quality",
        "body": []
      },
      {
        "heading": "Appearance",
        "body": []
      },
      {
        "heading": "Bag Appeal",
        "body": []
      },
      {
        "heading": "Frosty Weed & Trichomes",
        "body": []
      },
      {
        "heading": "Smalls vs Big Buds",
        "body": [
          "Aroma and freshness"
        ]
      },
      {
        "heading": "Gas, Loud & Terpy",
        "body": []
      },
      {
        "heading": "Drying, Curing & Freshness",
        "body": [
          "Growing and genetics"
        ]
      },
      {
        "heading": "BC Grown / Indoor / Hydro / Outdoor",
        "body": []
      },
      {
        "heading": "Craft vs Commercial Cannabis",
        "body": []
      },
      {
        "heading": "Indica vs Sativa vs Hybrid",
        "body": []
      },
      {
        "heading": "Strain vs Cultivar",
        "body": []
      },
      {
        "heading": "Landrace vs Hybrid",
        "body": []
      }
    ],
    "faqs": [
      {
        "question": "Are Exotic, Premium, AAA+, AA and Budget official government grades?",
        "answer": "No. They are retail/store categories, not one universal Canadian government grading system."
      },
      {
        "question": "Does Exotic always mean higher THC?",
        "answer": "No. Exotic is retail/culture positioning and does not guarantee one THC range."
      },
      {
        "question": "What are quads?",
        "answer": "Quads is common Canadian slang for AAAA, generally implying premium positioning."
      },
      {
        "question": "Can Budget Weed still have a high THC number?",
        "answer": "Yes. Tier language and product-specific THC are different pieces of information."
      },
      {
        "question": "What should I compare besides tier?",
        "answer": "Adults may compare producer, cultivar, THC/CBD, aroma, trim, structure, trichomes, moisture, cure and freshness where information is available."
      }
    ],
    "faqHeading": "Frequently Asked Questions"
  },
  "native-smokes-prices": {
    "title": "Native Cigarettes in Ontario: Terms, Brands and What to Know",
    "seoTitle": "Native Cigarettes in Ontario | Kensington Green Guide",
    "description": "Learn what “Native cigarettes” can mean in Ontario, how brand identity differs from tax status, and how to read commercial tobacco terminology carefully.",
    "eyebrow": "Commercial Tobacco Guide",
    "intro": "“Native cigarettes” is common consumer language in Ontario. It is also broad enough to create confusion. Adults may use the phrase when talking about: cigarettes associated with First Nations manufacturers; brands commonly seen through Indigenous retail channels; cigarettes sold on reserve; tax-exempt allocation cigarettes; commercial tobacco shopping at a business carrying Native-smoke categories. Those ideas can overlap. They are not automatically the same thing.",
    "banner": "/banners/06_Cigarettes.webp",
    "cards": [],
    "sections": [
      {
        "heading": "“Native Cigarettes” Is Not One Legal Product Category",
        "body": [
          "The phrase does not by itself establish:",
          "who manufactured the product;",
          "who owns the brand;",
          "whether the manufacturer is Indigenous-owned;",
          "whether the package is tax-exempt;",
          "where the product may be sold;",
          "who may qualify for a tax-exempt purchase.",
          "Those questions need to be separated."
        ]
      },
      {
        "heading": "Traditional or Sacred Tobacco Is Different From Commercial Cigarettes",
        "body": [
          "Tobacco has cultural and ceremonial significance in many Indigenous communities.",
          "Traditional or sacred tobacco practices should not be treated as the same thing as modern commercial cigarette smoking.",
          "This guide discusses commercial tobacco terminology.",
          "It does not describe ceremonial tobacco practices."
        ]
      },
      {
        "heading": "Manufacturer Identity and Tax Status Are Separate Questions",
        "body": [
          "A cigarette can be associated with an Indigenous-owned or First Nations-connected manufacturer without every package being tax-exempt.",
          "A brand can appear in a store catalog without the catalog proving the manufacturer or ownership.",
          "A cleaner reading order is:",
          "exact brand;",
          "exact variant;",
          "manufacturer / brand-owner information from reliable sources;",
          "package markings;",
          "legal sale / tax context.",
          "Do not use one nickname to answer all of those questions."
        ]
      },
      {
        "heading": "Ontario's First Nations Cigarette Allocation System Is a Specific Framework",
        "body": [
          "Ontario has a First Nations Cigarette Allocation System under provincial tobacco-tax rules.",
          "That framework involves specific rules for allocation cigarettes, authorized distribution and eligible on-reserve sales.",
          "It is not a blanket description for every Indigenous-manufactured cigarette."
        ]
      },
      {
        "heading": "Package Markings Matter",
        "body": [
          "Ontario's allocation-cigarette framework uses a federal peach-coloured stamp for allocation cigarettes.",
          "The stamp belongs to a specific tax/distribution framework.",
          "It does not mean every cigarette connected with an Indigenous business is automatically an allocation cigarette."
        ]
      },
      {
        "heading": "Brand Names Seen in Kensington Green's Cigarette Catalog",
        "body": [
          "The current evidence packet has referenced names including:",
          "Canadian Lights;",
          "Canadian Full;",
          "Putters;",
          "Canadian Goose Full;",
          "Canadian Goose Lights;",
          "Canadian Menthol;",
          "Canadian Classics Original;",
          "Canadian Classics Silver;",
          "Rolled Gold Lights;",
          "Nexus Lights;",
          "Time Full;",
          "Backwoods;",
          "Grabba;",
          "nicotine pouch names.",
          "These are included as catalog terminology only.",
          "They are not a claim that every listed name is:",
          "Indigenous-owned;",
          "Indigenous-manufactured;",
          "tax-exempt;",
          "part of Ontario's allocation system;",
          "currently available.",
          "Do not add manufacturer or ownership statements without exact supporting evidence."
        ]
      },
      {
        "heading": "Cigarettes, Backwoods, Grabba and Nicotine Pouches Are Different Product Types",
        "body": [
          "Do not blur them together.",
          "Cigarettes are not the same thing as:",
          "cigar products;",
          "Grabba products;",
          "nicotine pouches;",
          "cannabis.",
          "Each category has its own package identity and product information."
        ]
      },
      {
        "heading": "Packs, Cartons and Current Prices Need Current Reading",
        "body": [
          "Pack and carton describe package quantity.",
          "They do not determine:",
          "manufacturer identity;",
          "Indigenous ownership;",
          "tax status;",
          "current price.",
          "This educational guide should not freeze today's tobacco pricing.",
          "Use current public product information for current price and availability."
        ]
      },
      {
        "heading": "Commercial Tobacco Has Serious Health Risks",
        "body": [
          "Commercial cigarette smoking carries serious health risks.",
          "Words such as Native, natural, traditional or premium should not be interpreted as proof that a commercial cigarette is safe.",
          "Traditional/sacred tobacco and commercial cigarette smoking should remain clearly separated."
        ]
      },
      {
        "heading": "How to Read a Commercial Cigarette Listing",
        "body": []
      },
      {
        "heading": "Brand",
        "body": [
          "What is the exact product or brand name?"
        ]
      },
      {
        "heading": "Variant",
        "body": [
          "Is it Full, Lights, Silver, Menthol or another named variant?"
        ]
      },
      {
        "heading": "Package",
        "body": [
          "Is the listing a pack, carton or another quantity?",
          "Manufacturer / brand owner",
          "Is that identity supported by reliable information for the exact brand?",
          "Tax context",
          "What do the package markings and legal sale context indicate?",
          "Current availability",
          "Is the item actually shown in the current public listing?",
          "That sequence is more reliable than treating “Native cigarettes” as a complete answer."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Are all Native cigarettes tax free?",
        "answer": "No. Brand/manufacturer identity and tax-exempt allocation status are separate questions."
      },
      {
        "question": "Does “Native cigarette” identify the manufacturer?",
        "answer": "Not reliably. It is broad consumer language. Manufacturer and ownership should be confirmed for the exact brand."
      },
      {
        "question": "What is Ontario's First Nations Cigarette Allocation System?",
        "answer": "It is a specific provincial tobacco-tax and distribution framework involving allocation cigarettes and eligible on-reserve sales."
      },
      {
        "question": "What does a peach-coloured cigarette stamp indicate?",
        "answer": "It is associated with Ontario's allocation-cigarette framework. Package and sale context still matter."
      },
      {
        "question": "Are traditional sacred tobacco and commercial cigarettes the same thing?",
        "answer": "No. Traditional or sacred tobacco practices should be distinguished from modern commercial cigarette smoking."
      },
      {
        "question": "Does this page show Kensington Green's current cigarette inventory or prices?",
        "answer": "No. This is an educational resource. Current product details belong on current public listings and packages."
      },
      {
        "question": "Exact informational internal links",
        "answer": "Kensington Green Resources → /resources"
      },
      {
        "question": "First Visit to Kensington Green → /resources/dundas-west-visit-guide",
        "answer": "Kensington Green in Toronto → /weed-dispensary-toronto"
      }
    ],
    "faqHeading": "Frequently Asked Questions"
  },
  "value-shopping-guide": {
    "title": "Kensington Green Value Shopping Guide",
    "seoTitle": "Kensington Green Weed Value Guide | Budget, AA & AAA+",
    "description": "Compare Kensington Green's Budget Weed, AA Weed and AAA+ Weed value lanes, then use current category pages for today's product and price details.",
    "eyebrow": "Kensington Green Guide",
    "intro": "Value shopping is easier when the comparison stays inside one product type. For flower, the clean starting point is: Budget Weed; AA Weed; AAA+ Weed. The current category pages carry today's products and prices. This guide explains the role of the categories without freezing deals or bundle math into evergreen copy.",
    "banner": "/banners/homepage_hero.webp",
    "cards": [
      {
        "title": "Budget Weed",
        "href": "/budget-weed",
        "text": "Continue with Budget Weed."
      },
      {
        "title": "AA Weed",
        "href": "/aa-weed",
        "text": "Continue with AA Weed."
      },
      {
        "title": "AAA+ Weed",
        "href": "/aaa-weed",
        "text": "Continue with AAA+ Weed."
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
    ],
    "sections": [
      {
        "heading": "Start With Budget Weed",
        "body": [
          "Budget Weed is the clearest value-positioned flower category.",
          "Budget should not be read as:",
          "unsafe;",
          "automatically weak;",
          "automatically stale;",
          "automatically low quality.",
          "It tells the shopper where to start when price/value is the priority."
        ]
      },
      {
        "heading": "Then Compare AA Weed",
        "body": [
          "AA Weed is a separate flower category.",
          "Its role is to provide another level of comparison.",
          "It does not guarantee one potency, aroma or quality score."
        ]
      },
      {
        "heading": "AAA+ Adds Another Comparison Point",
        "body": [
          "AAA+ Weed gives adults another flower category to compare before moving into Premium or Exotic.",
          "The current live listing should decide the actual value comparison.",
          "Do not rely on old bundle math."
        ]
      },
      {
        "heading": "Keep Value Inside the Category",
        "body": [
          "Value means something different for:",
          "flower;",
          "pre-rolls;",
          "edibles;",
          "THC vapes;",
          "concentrates;",
          "accessories;",
          "cigarettes.",
          "Start with the product type.",
          "Then compare the current listings inside that type."
        ]
      },
      {
        "heading": "Current Price, Deals and Availability Can Change",
        "body": [
          "Do not freeze:",
          "per-gram price;",
          "bundle price;",
          "special price;",
          "current product;",
          "current stock;",
          "into this evergreen guide.",
          "Use the current category/product page for changing details."
        ]
      },
      {
        "heading": "Value and Quality Are Not Opposites",
        "body": [
          "A value-oriented product can still have characteristics an adult likes.",
          "A higher-priced product is not automatically better in every way.",
          "The useful question is:",
          "What does this current product offer, and does it fit the reason for the visit?"
        ]
      }
    ],
    "faqs": [
      {
        "question": "Does Budget Weed automatically mean low quality?",
        "answer": "No. Budget is a value-positioning term, not a complete quality grade."
      },
      {
        "question": "Should this guide list current prices?",
        "answer": "No. Current prices and deals belong on current category/product pages."
      },
      {
        "question": "Is AAA+ always a better value than AA?",
        "answer": "Not automatically. Value depends on the current product, package, price and what the shopper wants."
      },
      {
        "question": "Where should I check today's Weed prices?",
        "answer": "Use the current Weed category pages."
      }
    ],
    "faqHeading": "Frequently Asked Questions"
  }
};
const PINKY_KSC01_ADDITIONS: ResourcePage[] = [
  {
    "slug": "cannabis-101",
    "title": "Cannabis 101: A Simple Way to Read the Menu",
    "seoTitle": "Cannabis 101 in Toronto | Kensington Green",
    "description": "A practical Cannabis 101 guide to formats, Weed tiers, THC, genetics, labels and everyday cannabis terms for adults 19+.",
    "eyebrow": "Kensington Green Guide",
    "intro": "A cannabis menu becomes easier once you stop trying to read the whole thing at once. At Kensington Green, start with one question: What kind of product are you actually comparing? That choice clears up most of the menu immediately.",
    "banner": "/banners/homepage_hero.webp",
    "cards": [
      {
        "title": "First Visit to Kensington Green",
        "href": "/resources/dundas-west-visit-guide",
        "text": "Continue with First Visit to Kensington Green."
      },
      {
        "title": "Kensington Green Weed & Flower Quality Guide",
        "href": "/resources/weed-flower-guide",
        "text": "Continue with Kensington Green Weed & Flower Quality Guide."
      },
      {
        "title": "Indica vs Sativa vs Hybrid",
        "href": "/resources/cannabis-101/indica-sativa-hybrid",
        "text": "Continue with Indica vs Sativa vs Hybrid."
      },
      {
        "title": "Strain vs Cultivar",
        "href": "/resources/cannabis-101/strain-vs-cultivar",
        "text": "Continue with Strain vs Cultivar."
      },
      {
        "title": "Landrace vs Hybrid",
        "href": "/resources/cannabis-101/landrace-vs-hybrid",
        "text": "Continue with Landrace vs Hybrid."
      },
      {
        "title": "Weed Slang Explained",
        "href": "/resources/cannabis-101/weed-slang-glossary",
        "text": "Continue with Weed Slang Explained."
      },
      {
        "title": "Kensington Green in Toronto",
        "href": "/weed-dispensary-toronto",
        "text": "Continue with Kensington Green in Toronto."
      }
    ],
    "sections": [
      {
        "heading": "Start With Format",
        "body": []
      },
      {
        "heading": "Flower",
        "body": [
          "Flower, bud and Weed are common ways adults describe dried cannabis flower.",
          "Kensington Green organizes flower into five clear categories:",
          "Exotic Weed;",
          "Premium Weed;",
          "AAA+ Weed;",
          "AA Weed;",
          "Budget Weed.",
          "Choose the flower category first, then read the current products inside it."
        ]
      },
      {
        "heading": "Pre-Rolls",
        "body": [
          "Pre-rolls are prepared rolls containing cannabis.",
          "They should be compared in their own lane because count, total weight and product format matter differently from loose flower."
        ]
      },
      {
        "heading": "Edibles",
        "body": [
          "Edibles are cannabis-containing food or beverage products.",
          "The package matters because dose-per-unit and total package information are part of the product."
        ]
      },
      {
        "heading": "THC Vapes",
        "body": [
          "THC vape products use a vaporizer format.",
          "Keep that category separate from nicotine-vape products."
        ]
      },
      {
        "heading": "Concentrates",
        "body": [
          "Concentrates are cannabis products in which cannabis constituents are present in a more concentrated form than dried flower.",
          "They deserve their own comparison lane because the format and label information differ from flower."
        ]
      },
      {
        "heading": "Weed, Cannabis, Bud and Flower Are Not Quality Grades",
        "body": [
          "Cannabis is the formal word.",
          "Weed is the everyday word.",
          "Bud and flower usually refer to dried cannabis flower.",
          "Nug or nugs is slang for individual pieces of flower.",
          "Those words identify what someone is talking about. They do not tell you whether the product is better, stronger or fresher."
        ]
      },
      {
        "heading": "Flower Categories Help You Navigate",
        "body": [
          "Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed are useful because they narrow the browse.",
          "They are not one universal Canadian government grading system.",
          "Think of them as shelf signs.",
          "The current product listing still carries the specific product information."
        ]
      },
      {
        "heading": "THC Matters, but It Is Not the Whole Product",
        "body": [
          "THC is important regulated information and relevant to intoxicating potency.",
          "It does not directly score:",
          "aroma;",
          "trim;",
          "cure;",
          "moisture;",
          "trichome appearance;",
          "bud structure;",
          "freshness;",
          "personal preference.",
          "A larger THC number should not automatically become the entire definition of quality."
        ]
      },
      {
        "heading": "Indica, Sativa and Hybrid Are Familiar Shortcuts",
        "body": [
          "Those labels remain common because adults recognize them quickly.",
          "Modern commercial cannabis has been crossed extensively, so the simple three-box story is imperfect.",
          "Use the label as one clue, not a guaranteed effect prediction."
        ]
      },
      {
        "heading": "Learn the Slang by Translating It",
        "body": [
          "Kensington Green can use normal Weed language without turning slang into science.",
          "Gas usually describes a fuel-like aroma.",
          "Loud means the smell is pronounced.",
          "Frosty points toward visible trichomes.",
          "Fire means someone considers the product very good.",
          "Mids means someone considers it middle-of-the-road.",
          "Quads is common Canadian slang for AAAA.",
          "Zaza is newer slang often associated with premium or exotic-positioned Weed.",
          "The useful habit is simple: turn the slang into the actual characteristic being described."
        ]
      },
      {
        "heading": "Read the Legal Product Information",
        "body": [
          "Use the actual package for product-specific regulated information.",
          "A nickname, old strain memory, product photo or flower-tier label should not replace the legal package."
        ]
      },
      {
        "heading": "Use the Resource Centre for the Deeper Questions",
        "body": [
          "From here, move into the subject that actually matters:",
          "flower quality;",
          "THC;",
          "bag appeal;",
          "trichomes;",
          "aroma;",
          "drying and curing;",
          "bud size;",
          "cultivation methods;",
          "genetics;",
          "Weed slang.",
          "That keeps Cannabis 101 simple while letting each deeper topic have its own useful page."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Is Weed the same thing as cannabis?",
        "answer": "Weed is common informal language for cannabis."
      },
      {
        "question": "Are Kensington Green's five Weed categories official government grades?",
        "answer": "No. They are store browsing categories, not one universal government grading system."
      },
      {
        "question": "Does higher THC automatically mean better flower?",
        "answer": "No. THC is one important measurement and does not describe every quality characteristic."
      },
      {
        "question": "Are Indica and Sativa guaranteed effect categories?",
        "answer": "No. They remain familiar menu labels, but modern cannabis is heavily crossed and individual response varies."
      },
      {
        "question": "Where should I check current products and prices?",
        "answer": "Use the current category and product pages. Educational resources should not be treated as current inventory or price promises."
      }
    ],
    "faqHeading": "Frequently Asked Questions"
  },
  {
    "slug": "flower-guides/what-does-good-weed-mean",
    "title": "What Does “Good Weed” Actually Mean?",
    "seoTitle": "What Does Good Weed Mean? | Kensington Green Toronto",
    "description": "Good weed is more than THC. Learn how aroma, cure, trichomes, freshness, structure and preference shape cannabis flower quality.",
    "eyebrow": "Kensington Green Guide",
    "intro": "“Good weed” sounds like one judgement. It is really a shorthand for several different things. One adult may mean: strong aroma; tidy trim; visible frost; balanced freshness; a cultivar they already like; good value; a well-finished cure. Another adult may care about something else. That is why the better question is: What makes it good to you?",
    "banner": "/banners/homepage_hero.webp",
    "cards": [
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
        "title": "Bag Appeal",
        "href": "/resources/flower-guides/bag-appeal",
        "text": "Continue with Bag Appeal."
      },
      {
        "title": "Frosty Weed & Trichomes",
        "href": "/resources/flower-guides/trichomes-frosty-weed",
        "text": "Continue with Frosty Weed & Trichomes."
      },
      {
        "title": "Drying, Curing & Freshness",
        "href": "/resources/flower-guides/drying-curing-freshness",
        "text": "Continue with Drying, Curing & Freshness."
      }
    ],
    "sections": [
      {
        "heading": "Aroma",
        "body": [
          "Aroma is one of the easiest characteristics to notice.",
          "Cannabis can be described as:",
          "gassy;",
          "fruity;",
          "skunky;",
          "citrusy;",
          "earthy;",
          "piney;",
          "sweet;",
          "floral.",
          "Those words describe smell.",
          "They do not automatically prove higher potency or better quality."
        ]
      },
      {
        "heading": "Trichomes",
        "body": [
          "Trichomes are small resin-producing structures on cannabis.",
          "Visible coverage can make flower look frosty.",
          "That can be a useful clue.",
          "It is not an exact THC reading."
        ]
      },
      {
        "heading": "Trim and Structure",
        "body": [
          "People often notice:",
          "bud shape;",
          "density;",
          "trim;",
          "colour;",
          "how intact the flower looks.",
          "Those details influence bag appeal.",
          "They do not tell you the full freshness, chemistry or cure story."
        ]
      },
      {
        "heading": "Drying and Curing",
        "body": [
          "Quality continues after harvest.",
          "Drying reduces moisture.",
          "Curing is part of controlled post-harvest conditioning.",
          "Poor handling can weaken aroma, texture and storage quality."
        ]
      },
      {
        "heading": "Freshness",
        "body": [
          "Fresh does not mean wet.",
          "Overly dry flower can become brittle.",
          "Excess moisture creates different storage concerns.",
          "The useful goal is balanced, appropriate post-harvest handling."
        ]
      },
      {
        "heading": "THC",
        "body": [
          "THC matters to intoxicating potency.",
          "It does not directly score:",
          "aroma;",
          "trim;",
          "cure;",
          "freshness;",
          "bud size;",
          "visible trichomes;",
          "personal preference.",
          "That is why the biggest THC number should not automatically be called the best flower."
        ]
      },
      {
        "heading": "Cultivar and Producer",
        "body": [
          "Cultivar names help identify products.",
          "They do not guarantee every producer's version will look, smell or handle identically.",
          "The finished product reflects genetics, cultivation and post-harvest work together."
        ]
      },
      {
        "heading": "Personal Preference",
        "body": [
          "Someone shopping for value may start with Budget Weed.",
          "Someone else may care most about aroma.",
          "Someone else may want a particular cultivar.",
          "Someone else may care about visual presentation.",
          "“Good” is more useful when it is broken into the actual characteristic that matters."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Does high THC mean good weed?",
        "answer": "Not by itself. THC is one important measurement and does not describe every quality characteristic."
      },
      {
        "question": "What does “fire weed” mean?",
        "answer": "It is slang for cannabis someone considers very good. The reason is subjective."
      },
      {
        "question": "Does frosty weed mean stronger weed?",
        "answer": "Visible frost usually points to trichomes, but appearance alone does not provide an exact potency reading."
      },
      {
        "question": "Is expensive weed always better?",
        "answer": "No. Price can reflect many factors and is not a universal quality score."
      },
      {
        "question": "What should I compare when looking at flower?",
        "answer": "Adults may compare the legal label, cultivar, producer, THC/CBD, aroma, trim, structure, trichomes, moisture, cure and freshness where information is available."
      }
    ],
    "faqHeading": "Frequently Asked Questions"
  },
  {
    "slug": "flower-guides/top-shelf-mids-quads",
    "title": "Top Shelf, Mids, Quads, AAAA and AAA: Translate the Shelf Talk",
    "seoTitle": "Top Shelf vs Mids vs Quads | Weed Grades Explained",
    "description": "Top shelf, mids, quads, AAAA, AAA and AA are common Weed terms, not one official grading system. Learn what they usually describe.",
    "eyebrow": "Kensington Green Guide",
    "intro": "Toronto cannabis culture has plenty of grade language. Top shelf. Mids. Quads. AAAA. AAA. AA. Premium. Exotic. Those words can help adults navigate a conversation. They do not come from one universal Canadian grading authority.",
    "banner": "/banners/homepage_hero.webp",
    "cards": [
      {
        "title": "Exotic Weed",
        "href": "/exotic-weed",
        "text": "Continue with Exotic Weed."
      },
      {
        "title": "Premium Weed",
        "href": "/premium-weed",
        "text": "Continue with Premium Weed."
      },
      {
        "title": "AAA+ Weed",
        "href": "/aaa-weed",
        "text": "Continue with AAA+ Weed."
      },
      {
        "title": "AA Weed",
        "href": "/aa-weed",
        "text": "Continue with AA Weed."
      },
      {
        "title": "Budget Weed",
        "href": "/budget-weed",
        "text": "Continue with Budget Weed."
      },
      {
        "title": "Kensington Green Weed & Flower Quality Guide",
        "href": "/resources/weed-flower-guide",
        "text": "Continue with Kensington Green Weed & Flower Quality Guide."
      },
      {
        "title": "Weed Slang Explained",
        "href": "/resources/cannabis-101/weed-slang-glossary",
        "text": "Continue with Weed Slang Explained."
      }
    ],
    "sections": [
      {
        "heading": "Top Shelf",
        "body": [
          "Top shelf generally means premium positioning.",
          "A person may be reacting to:",
          "aroma;",
          "appearance;",
          "trim;",
          "cure;",
          "genetics;",
          "freshness;",
          "rarity;",
          "price;",
          "overall presentation.",
          "Because the term is broad, it is better read as a signal than a technical score."
        ]
      },
      {
        "heading": "Mids",
        "body": [
          "Mids means someone considers a product middle-of-the-road.",
          "The reason can vary.",
          "Maybe the aroma is mild.",
          "Maybe the presentation is ordinary.",
          "Maybe the value sits in the middle.",
          "Ask what characteristic the person actually means."
        ]
      },
      {
        "heading": "Quads / AAAA",
        "body": [
          "Quads is common Canadian slang for AAAA.",
          "It usually signals premium positioning.",
          "It is not a government grade with one mandatory THC range, bud size or terpene number."
        ]
      },
      {
        "heading": "AAA and AAA+",
        "body": [
          "AAA is familiar retail shorthand.",
          "AAA+ suggests something positioned slightly above a basic AAA label.",
          "At Kensington Green, AAA+ Weed is its own flower category.",
          "Use the current AAA+ page for current products.",
          "Use this resource for the terminology."
        ]
      },
      {
        "heading": "AA",
        "body": [
          "AA is another familiar grade shorthand.",
          "At Kensington Green, AA Weed is its own flower category.",
          "The label helps organize the browse.",
          "It does not tell the full product story."
        ]
      },
      {
        "heading": "Premium and Exotic",
        "body": [
          "Premium is broad quality-positioning language.",
          "Exotic can suggest unusual genetics, distinctive aroma, rarity or high-end presentation.",
          "Neither is an official government grade.",
          "At Kensington Green, Premium Weed and Exotic Weed are separate flower categories."
        ]
      },
      {
        "heading": "Why People Still Use Grade Language",
        "body": [
          "Because it is quick.",
          "An adult can say:",
          "“I am comparing AA and AAA+.”",
          "and immediately narrow the conversation.",
          "The shortcut becomes a problem only when the nickname replaces the actual product information."
        ]
      },
      {
        "heading": "THC Is Not the Grade",
        "body": [
          "Higher THC does not automatically equal a higher tier.",
          "THC is one important measurement.",
          "Quality language often includes characteristics THC does not directly measure:",
          "aroma;",
          "trim;",
          "cure;",
          "freshness;",
          "structure;",
          "trichome appearance.",
          "Keep the number and the tier language separate."
        ]
      }
    ],
    "faqs": [
      {
        "question": "What are quads?",
        "answer": "Quads is common Canadian slang for AAAA, usually implying premium positioning."
      },
      {
        "question": "What does mids mean?",
        "answer": "Mids is informal language for cannabis someone considers average or middle-tier."
      },
      {
        "question": "Is top shelf the same as Exotic Weed?",
        "answer": "Not necessarily. They can overlap in premium positioning, but the terms are not identical."
      },
      {
        "question": "Does AAAA require a certain THC percentage?",
        "answer": "No universal rule ties AAAA to one THC percentage."
      },
      {
        "question": "Are Kensington Green's Weed-tier names changing?",
        "answer": "No. Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed remain the established flower categories."
      }
    ],
    "faqHeading": "Frequently Asked Questions"
  },
  {
    "slug": "flower-guides/thc-vs-weed-quality",
    "title": "Does Higher THC Mean Better Weed?",
    "seoTitle": "THC vs Weed Quality | Kensington Green",
    "description": "THC is important product information, but it is not a complete flower-quality score. Learn what else adults may compare.",
    "eyebrow": "Kensington Green Guide",
    "intro": "THC is one of the easiest cannabis numbers to compare. That makes it useful. It also makes it easy to overvalue. THC matters to intoxicating potency. It does not automatically tell you whether one flower is better than another in every other way.",
    "banner": "/banners/homepage_hero.webp",
    "cards": [
      {
        "title": "Cannabis 101",
        "href": "/resources/cannabis-101",
        "text": "Continue with Cannabis 101."
      },
      {
        "title": "Weed & Flower Quality Guide",
        "href": "/resources/weed-flower-guide",
        "text": "Continue with Weed & Flower Quality Guide."
      },
      {
        "title": "Gas, Loud & Terpy",
        "href": "/resources/flower-guides/terpenes-gas-loud-aroma",
        "text": "Continue with Gas, Loud & Terpy."
      },
      {
        "title": "Drying, Curing & Freshness",
        "href": "/resources/flower-guides/drying-curing-freshness",
        "text": "Continue with Drying, Curing & Freshness."
      }
    ],
    "sections": [
      {
        "heading": "What THC Tells You",
        "body": [
          "The legal product information tells you about THC in the specific product.",
          "That is important.",
          "It does not directly tell you:",
          "aroma;",
          "trim;",
          "moisture;",
          "cure;",
          "visible trichomes;",
          "bud structure;",
          "freshness;",
          "cultivar preference.",
          "Those are separate characteristics."
        ]
      },
      {
        "heading": "Why Bigger Numbers Get Too Much Attention",
        "body": [
          "Numbers feel objective.",
          "If one package shows a larger THC value, it is easy to assume the decision is finished.",
          "Cannabis flower is more complicated than that.",
          "Two flowers can have similar THC values and still look, smell and handle differently."
        ]
      },
      {
        "heading": "Aroma and THC Are Different",
        "body": [
          "A flower can be very aromatic without having the highest THC number on the menu.",
          "A high-THC product can be less aromatic.",
          "That simply means aroma and THC are different characteristics."
        ]
      },
      {
        "heading": "Trichomes and THC Are Different",
        "body": [
          "Visible trichomes can make flower look frosty.",
          "You still cannot look at a photo and read an exact THC percentage.",
          "Use legal product information for the number.",
          "Use the visible flower only for what can actually be seen."
        ]
      },
      {
        "heading": "Post-Harvest Handling Is Different",
        "body": [
          "Drying, curing, packaging and storage influence finished flower.",
          "A THC number cannot tell you whether the product has become brittle, lost aroma or been stored poorly."
        ]
      },
      {
        "heading": "Maximum THC Is Not Always the Best Goal",
        "body": [
          "Maximum potency should not be presented as the default best choice.",
          "Higher-potency cannabis can also increase the likelihood of unwanted effects.",
          "Adults should use the product information rather than treating the largest number as a universal score."
        ]
      },
      {
        "heading": "Tier and THC Are Different Systems",
        "body": [
          "Kensington Green's five Weed flower categories are menu categories.",
          "THC is product-specific regulated information.",
          "Do not turn the categories into THC brackets.",
          "A higher category does not guarantee one THC range.",
          "A higher THC number does not automatically determine the category."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Does higher THC mean stronger cannabis?",
        "answer": "THC is relevant to intoxicating potency, but it still does not describe every quality characteristic."
      },
      {
        "question": "Does higher THC mean a higher Weed tier?",
        "answer": "Not automatically. Retail tiers and product THC are different pieces of information."
      },
      {
        "question": "Can two products with similar THC feel different?",
        "answer": "Yes. Products can differ in other cannabinoids, terpene profiles, format and individual response."
      },
      {
        "question": "Should a beginner choose the highest THC?",
        "answer": "No. Maximum potency should not be treated as the default goal."
      },
      {
        "question": "Where should I check the actual THC amount?",
        "answer": "Use the legal product information for the specific package."
      }
    ],
    "faqHeading": "Frequently Asked Questions"
  },
  {
    "slug": "flower-guides/bag-appeal",
    "title": "Bag Appeal: What the First Look Can and Cannot Tell You",
    "seoTitle": "Cannabis Bag Appeal Explained | Kensington Green",
    "description": "Learn what bag appeal means, which visual clues people notice in Weed, and why looks alone cannot prove flower quality.",
    "eyebrow": "Kensington Green Guide",
    "intro": "Bag appeal is cannabis slang for first visual impression. Before someone thinks about THC, cure or aroma, they often notice what the flower looks like. That first look is useful. It should not be asked to answer every question.",
    "banner": "/banners/homepage_hero.webp",
    "cards": [
      {
        "title": "Frosty Weed & Trichomes",
        "href": "/resources/flower-guides/trichomes-frosty-weed",
        "text": "Continue with Frosty Weed & Trichomes."
      },
      {
        "title": "Smalls vs Big Buds",
        "href": "/resources/flower-guides/smalls-vs-big-buds",
        "text": "Continue with Smalls vs Big Buds."
      },
      {
        "title": "What Does Good Weed Mean?",
        "href": "/resources/flower-guides/what-does-good-weed-mean",
        "text": "Continue with What Does Good Weed Mean?."
      },
      {
        "title": "Drying, Curing & Freshness",
        "href": "/resources/flower-guides/drying-curing-freshness",
        "text": "Continue with Drying, Curing & Freshness."
      }
    ],
    "sections": [
      {
        "heading": "What People Notice",
        "body": [
          "Bag appeal often includes:",
          "bud shape;",
          "density;",
          "colour;",
          "visible trichomes;",
          "trim;",
          "bud size;",
          "how intact the flower looks.",
          "Large, tidy, frosty buds often make a strong first impression.",
          "That does not make every smaller or less-photogenic bud low quality."
        ]
      },
      {
        "heading": "Colour Is Not a Grade",
        "body": [
          "Cannabis can show different shades of green, purple, orange and other plant colours.",
          "Colour can reflect genetics, pigments, growing conditions and maturity.",
          "Purple does not automatically mean stronger.",
          "Bright green does not automatically mean fresher.",
          "Colour is descriptive."
        ]
      },
      {
        "heading": "Frost Can Look Different in Photos",
        "body": [
          "Visible trichomes can make flower sparkle.",
          "Close-up photography, bright lighting and sharpening can make those trichomes look more dramatic.",
          "A product photo can show presentation.",
          "It cannot replace legal product information."
        ]
      },
      {
        "heading": "Trim Changes Presentation",
        "body": [
          "A tighter trim can make flower look more defined.",
          "A looser trim can leave more small leaf material.",
          "Neither tells you the exact THC number."
        ]
      },
      {
        "heading": "Bigger Buds Are More Photogenic",
        "body": [
          "Large buds often display flower structure clearly.",
          "Smalls can come from the same plant or batch.",
          "Size can affect presentation without becoming a potency grade."
        ]
      },
      {
        "heading": "Photos Cannot Show Moisture",
        "body": [
          "A flower can look excellent and still be brittle.",
          "A picture cannot tell you the full moisture or storage history.",
          "That is why bag appeal belongs beside freshness and curing, not above them."
        ]
      }
    ],
    "faqs": [
      {
        "question": "What does bag appeal mean?",
        "answer": "It means the visual first impression of cannabis flower."
      },
      {
        "question": "Do purple buds mean better Weed?",
        "answer": "No. Colour is not a universal quality grade."
      },
      {
        "question": "Are large buds stronger than small buds?",
        "answer": "Bud size alone does not prove potency."
      },
      {
        "question": "Does more visible frost always mean higher THC?",
        "answer": "No. Visible trichomes are one clue, not an exact potency measurement."
      },
      {
        "question": "Can product photos be misleading?",
        "answer": "Lighting, magnification and editing can change how colour and trichomes appear."
      }
    ],
    "faqHeading": "Frequently Asked Questions"
  },
  {
    "slug": "flower-guides/trichomes-frosty-weed",
    "title": "Frosty Weed: What Are Those Crystals?",
    "seoTitle": "Frosty Weed & Trichomes Explained | Kensington Green",
    "description": "Learn what cannabis trichomes are, why flower can look frosty and why visible resin is only one quality clue.",
    "eyebrow": "Kensington Green Guide",
    "intro": "When adults say Weed looks frosty, they are usually talking about visible trichomes. Trichomes are tiny structures on the cannabis plant associated with resin production. Dense visible coverage can create the sparkly or crystal-like surface people notice on flower.",
    "banner": "/banners/homepage_hero.webp",
    "cards": [
      {
        "title": "Bag Appeal",
        "href": "/resources/flower-guides/bag-appeal",
        "text": "Continue with Bag Appeal."
      },
      {
        "title": "Gas, Loud & Terpy",
        "href": "/resources/flower-guides/terpenes-gas-loud-aroma",
        "text": "Continue with Gas, Loud & Terpy."
      },
      {
        "title": "Drying, Curing & Freshness",
        "href": "/resources/flower-guides/drying-curing-freshness",
        "text": "Continue with Drying, Curing & Freshness."
      },
      {
        "title": "THC vs Weed Quality",
        "href": "/resources/flower-guides/thc-vs-weed-quality",
        "text": "Continue with THC vs Weed Quality."
      }
    ],
    "sections": [
      {
        "heading": "Why Trichomes Get Attention",
        "body": [
          "They are easy to see.",
          "They photograph well.",
          "They are associated with compounds people care about in cannabis.",
          "That makes trichomes an important visual clue.",
          "The clue is still only one part of the product."
        ]
      },
      {
        "heading": "Frosty Does Not Mean Automatically Better",
        "body": [
          "A frosty bud still has:",
          "a producer;",
          "a cultivar;",
          "a cure;",
          "a moisture level;",
          "a storage history;",
          "regulated THC/CBD information.",
          "Visible frost does not replace those details."
        ]
      },
      {
        "heading": "Trichomes Can Be Damaged",
        "body": [
          "Handling and processing can damage or remove some trichomes.",
          "Two buds can begin with similar resin development and look different after different handling."
        ]
      },
      {
        "heading": "A Photo Is Not a THC Test",
        "body": [
          "Visible trichomes do not provide an exact THC number.",
          "Use the legal product information for the actual amount."
        ]
      },
      {
        "heading": "Trichomes and Aroma Connect, but They Are Not the Same",
        "body": [
          "Aromatic compounds including terpenes are associated with glandular structures on the plant.",
          "That helps explain why trichomes and aroma are often discussed together.",
          "It does not mean the frostiest-looking flower must be the loudest-smelling one."
        ]
      },
      {
        "heading": "Storage Still Matters",
        "body": [
          "Heat, light, air, dryness and handling can influence finished flower.",
          "Quality preservation continues after harvest."
        ]
      }
    ],
    "faqs": [
      {
        "question": "What are cannabis trichomes?",
        "answer": "They are small resin-producing structures on the cannabis plant."
      },
      {
        "question": "Does frosty Weed always have higher THC?",
        "answer": "No. Visible trichomes do not provide an exact THC measurement."
      },
      {
        "question": "Can trichomes be damaged?",
        "answer": "Yes. Processing and handling can damage or remove some trichomes."
      },
      {
        "question": "Do trichomes relate to aroma?",
        "answer": "Aromatic compounds including terpenes are associated with glandular structures, but aroma depends on the full product and its handling."
      },
      {
        "question": "How do I know the actual THC amount?",
        "answer": "Use the legal product information for the package."
      }
    ],
    "faqHeading": "Frequently Asked Questions"
  },
  {
    "slug": "flower-guides/terpenes-gas-loud-aroma",
    "title": "Gas, Loud, Terpy: A Plain-Language Cannabis Aroma Guide",
    "seoTitle": "Gas, Loud & Terpy Weed | Cannabis Aroma Explained",
    "description": "Learn what terpenes are and what Weed slang such as gas, loud, skunky, fruity and terpy usually means when describing aroma.",
    "eyebrow": "Kensington Green Guide",
    "intro": "Cannabis aroma has both technical terms and street language. Terpenes are part of the technical side. Gas, loud, skunky, fruity and terpy are part of the everyday side. They can describe the same flower from different angles.",
    "banner": "/banners/homepage_hero.webp",
    "cards": [
      {
        "title": "Drying, Curing & Freshness",
        "href": "/resources/flower-guides/drying-curing-freshness",
        "text": "Continue with Drying, Curing & Freshness."
      },
      {
        "title": "Frosty Weed & Trichomes",
        "href": "/resources/flower-guides/trichomes-frosty-weed",
        "text": "Continue with Frosty Weed & Trichomes."
      },
      {
        "title": "THC vs Weed Quality",
        "href": "/resources/flower-guides/thc-vs-weed-quality",
        "text": "Continue with THC vs Weed Quality."
      },
      {
        "title": "Weed Slang Explained",
        "href": "/resources/cannabis-101/weed-slang-glossary",
        "text": "Continue with Weed Slang Explained."
      }
    ],
    "sections": [
      {
        "heading": "Terpenes",
        "body": [
          "Terpenes are aromatic compounds found in many plants, including cannabis.",
          "They contribute to smell and flavour.",
          "Different products can contain different terpene profiles.",
          "If exact terpene information matters, use information actually provided for the product.",
          "Do not guess a terpene profile from the cultivar name alone."
        ]
      },
      {
        "heading": "Gas",
        "body": [
          "Gas usually describes a fuel-like, diesel-like or sharp pungent aroma.",
          "Some adults use it more broadly for any strong Weed smell.",
          "It is an aroma description, not a quality grade."
        ]
      },
      {
        "heading": "Loud",
        "body": [
          "Loud usually means the aroma is pronounced.",
          "It does not identify one specific scent family.",
          "A loud product can be:",
          "gassy;",
          "fruity;",
          "skunky;",
          "floral;",
          "earthy."
        ]
      },
      {
        "heading": "Terpy",
        "body": [
          "Terpy is slang for a noticeable aroma or flavour profile associated with terpenes.",
          "It does not identify exact terpene content unless that information is actually provided.",
          "It also should not be used as a guaranteed-effect claim."
        ]
      },
      {
        "heading": "Common Aroma Language",
        "body": []
      },
      {
        "heading": "Citrus",
        "body": [
          "Lemon, lime, orange or grapefruit-like impressions."
        ]
      },
      {
        "heading": "Fruity",
        "body": [
          "Berry, grape, tropical and other fruit-like impressions."
        ]
      },
      {
        "heading": "Skunky",
        "body": [
          "A sharp, pungent cannabis descriptor."
        ]
      },
      {
        "heading": "Earthy",
        "body": [
          "Soil-like, woody, herbal or musky impressions."
        ]
      },
      {
        "heading": "Pine",
        "body": [
          "Forest-like, resinous or needle-like impressions."
        ]
      },
      {
        "heading": "Sweet / Creamy",
        "body": [
          "Dessert-like or softer aromatic impressions.",
          "Those are sensory descriptions, not effect guarantees."
        ]
      },
      {
        "heading": "Aroma Changes Over Time",
        "body": [
          "Drying, curing, packaging, storage temperature, air and time can influence volatile aromatic compounds.",
          "Two products with the same familiar cultivar name may not smell identical."
        ]
      },
      {
        "heading": "Strong Smell Does Not Equal High THC",
        "body": [
          "A very aromatic flower does not automatically have the highest THC.",
          "A high-THC product does not automatically have the strongest aroma.",
          "Keep those characteristics separate."
        ]
      }
    ],
    "faqs": [
      {
        "question": "What does gas mean in Weed slang?",
        "answer": "Usually a fuel-like, diesel-like or strong pungent aroma impression."
      },
      {
        "question": "What does loud mean?",
        "answer": "Usually that the cannabis aroma is pronounced."
      },
      {
        "question": "What does terpy mean?",
        "answer": "Slang for a noticeable aroma or flavour profile associated with terpenes."
      },
      {
        "question": "Does strong smell mean high THC?",
        "answer": "No. Aroma intensity and THC are different characteristics."
      },
      {
        "question": "Do terpene names guarantee effects?",
        "answer": "No. This guide uses terpene language to explain aroma, not to promise effects."
      }
    ],
    "faqHeading": "Frequently Asked Questions"
  },
  {
    "slug": "flower-guides/drying-curing-freshness",
    "title": "Drying, Curing and Freshness: What Happens After the Grow",
    "seoTitle": "Drying, Curing & Cannabis Freshness | Kensington Green",
    "description": "Learn how drying, curing, moisture, packaging, storage and time can change the way cannabis flower feels and smells after harvest.",
    "eyebrow": "Kensington Green Guide",
    "intro": "Growing the plant is only one part of the flower-quality story. Once cannabis is harvested, the flower still has to be dried, conditioned, packaged and stored. Those steps can affect: moisture; texture; aroma; how intact the flower remains; how the product handles over time.",
    "banner": "/banners/homepage_hero.webp",
    "cards": [
      {
        "title": "Gas, Loud & Terpy",
        "href": "/resources/flower-guides/terpenes-gas-loud-aroma",
        "text": "Continue with Gas, Loud & Terpy."
      },
      {
        "title": "What Does Good Weed Mean?",
        "href": "/resources/flower-guides/what-does-good-weed-mean",
        "text": "Continue with What Does Good Weed Mean?."
      },
      {
        "title": "Bag Appeal",
        "href": "/resources/flower-guides/bag-appeal",
        "text": "Continue with Bag Appeal."
      },
      {
        "title": "BC Grown / Indoor / Hydro / Outdoor",
        "href": "/resources/flower-guides/bc-grown-indoor-hydro-outdoor",
        "text": "Continue with BC Grown / Indoor / Hydro / Outdoor."
      }
    ],
    "sections": [
      {
        "heading": "Drying Reduces Moisture",
        "body": [
          "Freshly harvested cannabis contains substantial moisture.",
          "Drying reduces that moisture so the flower can be handled and stored appropriately.",
          "The goal is not simply to make it dry as quickly as possible.",
          "Drying conditions matter."
        ]
      },
      {
        "heading": "Curing Is Post-Harvest Conditioning",
        "body": [
          "Curing is a broad term for controlled conditioning after initial drying.",
          "Exact methods vary.",
          "The useful point is that flower continues changing after harvest and careful handling can help preserve desirable characteristics."
        ]
      },
      {
        "heading": "Too Dry Changes the Product",
        "body": [
          "Overly dry flower can:",
          "become brittle;",
          "crumble more easily;",
          "lose aroma faster;",
          "handle differently.",
          "That does not mean every dry-feeling product is unsafe.",
          "It means moisture is a real quality characteristic."
        ]
      },
      {
        "heading": "Too Much Moisture Is Not the Goal Either",
        "body": [
          "Fresh does not mean wet.",
          "Excess moisture creates different storage concerns.",
          "Think in terms of appropriate moisture management rather than maximum moisture."
        ]
      },
      {
        "heading": "Aroma Can Fade",
        "body": [
          "Terpenes and other aromatic compounds are volatile.",
          "Heat, air, time and storage conditions can influence how much aroma remains."
        ]
      },
      {
        "heading": "Packaging and Storage Keep Matter",
        "body": [
          "Once cannabis is packaged, time still passes.",
          "Light, oxygen, heat and repeated handling can influence the flower.",
          "Adults should follow the storage guidance provided with the product and keep cannabis secured away from children and pets."
        ]
      },
      {
        "heading": "A Photo Cannot Tell You Freshness",
        "body": [
          "A photo can show:",
          "colour;",
          "trim;",
          "visible trichomes;",
          "bud structure.",
          "It cannot reliably show:",
          "moisture;",
          "brittleness;",
          "package age;",
          "complete storage history.",
          "That is why bag appeal and freshness are separate questions."
        ]
      },
      {
        "heading": "The Quality Chain",
        "body": [
          "A simple way to think about finished flower:",
          "genetics → cultivation → harvest → drying → curing → packaging → storage",
          "A weak point late in the chain can change the final product even when the early stages were strong."
        ]
      }
    ],
    "faqs": [
      {
        "question": "What is cannabis drying?",
        "answer": "It is the post-harvest process of reducing moisture in harvested cannabis."
      },
      {
        "question": "What is curing?",
        "answer": "Curing is a broad term for controlled post-drying conditioning."
      },
      {
        "question": "Can drying affect aroma?",
        "answer": "Yes. Post-harvest conditions can influence volatile aromatic compounds."
      },
      {
        "question": "Does fresh Weed mean wet Weed?",
        "answer": "No. Freshness and excessive moisture are not the same thing."
      },
      {
        "question": "Can a product photo show freshness?",
        "answer": "Not reliably. A photo cannot measure moisture or show full storage history."
      }
    ],
    "faqHeading": "Frequently Asked Questions"
  },
  {
    "slug": "flower-guides/smalls-vs-big-buds",
    "title": "Smalls vs Big Buds: Is Bigger Actually Better?",
    "seoTitle": "Smalls vs Big Buds | Does Weed Bud Size Matter?",
    "description": "Smalls and larger buds can come from the same plant or batch. Learn what bud size can tell you and what it cannot.",
    "eyebrow": "Kensington Green Guide",
    "intro": "Big buds get attention because they look impressive. Smalls are easier to underestimate because they are less dramatic. Bud size can affect presentation. It does not automatically tell you potency or overall quality.",
    "banner": "/banners/homepage_hero.webp",
    "cards": [
      {
        "title": "Bag Appeal",
        "href": "/resources/flower-guides/bag-appeal",
        "text": "Continue with Bag Appeal."
      },
      {
        "title": "Frosty Weed & Trichomes",
        "href": "/resources/flower-guides/trichomes-frosty-weed",
        "text": "Continue with Frosty Weed & Trichomes."
      },
      {
        "title": "What Does Good Weed Mean?",
        "href": "/resources/flower-guides/what-does-good-weed-mean",
        "text": "Continue with What Does Good Weed Mean?."
      },
      {
        "title": "Drying, Curing & Freshness",
        "href": "/resources/flower-guides/drying-curing-freshness",
        "text": "Continue with Drying, Curing & Freshness."
      }
    ],
    "sections": [
      {
        "heading": "Why Bud Sizes Differ",
        "body": [
          "Bud size can be influenced by:",
          "genetics;",
          "plant structure;",
          "position on the plant;",
          "light exposure;",
          "cultivation conditions;",
          "trimming;",
          "handling;",
          "packaging.",
          "A cannabis plant does not produce identical flowers in every position."
        ]
      },
      {
        "heading": "Smalls Can Come From the Same Plant or Batch",
        "body": [
          "Smaller buds can come from the same plant or batch as larger flower.",
          "That means:",
          "small = weaker",
          "is too simple.",
          "Use the actual product information for the actual product."
        ]
      },
      {
        "heading": "Why Big Buds Have More Bag Appeal",
        "body": [
          "Larger buds often show flower structure more clearly.",
          "They can make:",
          "shape;",
          "trim;",
          "colour;",
          "trichome coverage;",
          "easier to see.",
          "That visual advantage is real.",
          "It is still only a visual advantage."
        ]
      },
      {
        "heading": "Smalls Can Still Be Frosty",
        "body": [
          "Bud size and trichome coverage are separate characteristics.",
          "A small bud can show visible trichomes.",
          "A larger bud can show less dramatic frost.",
          "Neither size alone answers the chemistry question."
        ]
      },
      {
        "heading": "Big Buds Can Still Be Too Dry",
        "body": [
          "Size does not tell you moisture.",
          "A large photogenic bud can still be brittle.",
          "A smaller bud can still be well preserved."
        ]
      },
      {
        "heading": "Price Positioning Is Separate",
        "body": [
          "Some menus position smalls differently by price or package amount.",
          "Current price belongs on the current listing.",
          "This educational page should explain size, not freeze today's price."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Are small buds weaker?",
        "answer": "Bud size alone does not prove potency."
      },
      {
        "question": "Can smalls come from the same plant as larger buds?",
        "answer": "Yes. They can come from the same plant, cultivar or batch."
      },
      {
        "question": "Are big buds always Premium or Exotic?",
        "answer": "No. Large size can improve presentation, but it does not automatically determine the tier."
      },
      {
        "question": "Can small buds still be frosty?",
        "answer": "Yes. Bud size and visible trichome coverage are different characteristics."
      },
      {
        "question": "Should this guide include current smalls prices?",
        "answer": "No. Current prices and package details belong on current menu/product pages."
      }
    ],
    "faqHeading": "Frequently Asked Questions"
  },
  {
    "slug": "flower-guides/bc-grown-indoor-hydro-outdoor",
    "title": "BC Grown, Indoor, Hydro, Greenhouse and Outdoor: Different Labels, Different Questions",
    "seoTitle": "BC Grown vs Indoor, Hydro, Greenhouse & Outdoor Weed",
    "description": "BC grown describes origin; indoor, outdoor and greenhouse describe environments; hydroponic describes a growing method.",
    "eyebrow": "Kensington Green Guide",
    "intro": "Cannabis growing terms often get compared as if they all answer the same question. They do not. BC grown describes origin. Indoor, outdoor and greenhouse describe growing environments. Hydroponic describes a cultivation method. One crop can fit more than one label at the same time.",
    "banner": "/banners/homepage_hero.webp",
    "cards": [
      {
        "title": "Craft vs Commercial Cannabis",
        "href": "/resources/flower-guides/craft-vs-commercial-cannabis",
        "text": "Continue with Craft vs Commercial Cannabis."
      },
      {
        "title": "Drying, Curing & Freshness",
        "href": "/resources/flower-guides/drying-curing-freshness",
        "text": "Continue with Drying, Curing & Freshness."
      },
      {
        "title": "What Does Good Weed Mean?",
        "href": "/resources/flower-guides/what-does-good-weed-mean",
        "text": "Continue with What Does Good Weed Mean?."
      },
      {
        "title": "Kensington Green Weed & Flower Quality Guide",
        "href": "/resources/weed-flower-guide",
        "text": "Continue with Kensington Green Weed & Flower Quality Guide."
      }
    ],
    "sections": [
      {
        "heading": "BC Grown = Origin",
        "body": [
          "BC-grown cannabis means cannabis grown in British Columbia.",
          "That does not automatically tell you:",
          "indoor or outdoor;",
          "hydroponic or soil-based;",
          "small scale or large scale;",
          "THC level;",
          "Weed tier;",
          "aroma;",
          "cure.",
          "Origin is one part of the product story."
        ]
      },
      {
        "heading": "Indoor = Controlled Environment",
        "body": [
          "Indoor cultivation takes place inside a controlled building.",
          "Growers can manage:",
          "light;",
          "temperature;",
          "humidity;",
          "airflow;",
          "other environmental conditions.",
          "That control can support consistency.",
          "It does not guarantee one quality result."
        ]
      },
      {
        "heading": "Outdoor = Natural Environment",
        "body": [
          "Outdoor cultivation uses natural sunlight and outdoor conditions.",
          "Weather, season and climate play larger roles.",
          "Outdoor does not automatically mean lower quality."
        ]
      },
      {
        "heading": "Greenhouse = Protected Structure",
        "body": [
          "Greenhouse cultivation uses a protected structure and typically natural light.",
          "Some operations also use supplemental lighting or environmental controls.",
          "That makes greenhouse a broad category, not one exact recipe."
        ]
      },
      {
        "heading": "Hydroponic = Growing Method",
        "body": [
          "Hydroponic cultivation generally uses managed water/nutrient delivery rather than traditional field soil.",
          "Hydroponic systems can be used indoors or in greenhouses.",
          "That is why “BC grown vs hydro” is not a clean comparison.",
          "A BC-grown crop can also be hydroponic."
        ]
      },
      {
        "heading": "Indoor Does Not Automatically Mean Hydro",
        "body": [
          "Indoor growers can use:",
          "soil;",
          "soilless substrates;",
          "hydroponic systems;",
          "other managed media.",
          "The real cultivation setup can be more complicated than one menu word."
        ]
      },
      {
        "heading": "No Method Automatically Wins",
        "body": [
          "A well-managed outdoor crop can be excellent.",
          "A poorly handled indoor crop can disappoint.",
          "Hydro can support strong cultivation without guaranteeing final cure or freshness.",
          "The finished flower comes from the whole chain."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Is BC bud always indoor?",
        "answer": "No. BC grown describes origin, not the growing environment."
      },
      {
        "question": "Can hydroponic Weed be grown indoors?",
        "answer": "Yes. Hydroponic describes a cultivation method and can be used indoors."
      },
      {
        "question": "Is outdoor Weed automatically lower quality?",
        "answer": "No. Outdoor describes environment, not a universal quality score."
      },
      {
        "question": "Is greenhouse the same as indoor?",
        "answer": "No. Greenhouses are protected structures that usually use natural light, while indoor cultivation takes place inside controlled buildings."
      },
      {
        "question": "What matters besides growing method?",
        "answer": "Genetics, plant health, harvest timing, drying, curing, storage and actual product information all matter."
      }
    ],
    "faqHeading": "Frequently Asked Questions"
  },
  {
    "slug": "flower-guides/craft-vs-commercial-cannabis",
    "title": "Craft vs Commercial Cannabis: Look Past the Label",
    "seoTitle": "Craft vs Commercial Cannabis | Kensington Green",
    "description": "Craft and commercial can describe scale, process and branding, but neither is a universal quality grade. Learn what to compare instead.",
    "eyebrow": "Kensington Green Guide",
    "intro": "Craft sounds premium. Commercial sounds large-scale. Those impressions are common. They are not complete definitions of quality. The terms can describe: production scale; process; branding; batch size; producer identity; how hands-on an operation presents itself. Neither word guarantees the finished flower.",
    "banner": "/banners/homepage_hero.webp",
    "cards": [
      {
        "title": "BC Grown / Indoor / Hydro / Outdoor",
        "href": "/resources/flower-guides/bc-grown-indoor-hydro-outdoor",
        "text": "Continue with BC Grown / Indoor / Hydro / Outdoor."
      },
      {
        "title": "Kensington Green Weed & Flower Quality Guide",
        "href": "/resources/weed-flower-guide",
        "text": "Continue with Kensington Green Weed & Flower Quality Guide."
      },
      {
        "title": "Drying, Curing & Freshness",
        "href": "/resources/flower-guides/drying-curing-freshness",
        "text": "Continue with Drying, Curing & Freshness."
      },
      {
        "title": "What Does Good Weed Mean?",
        "href": "/resources/flower-guides/what-does-good-weed-mean",
        "text": "Continue with What Does Good Weed Mean?."
      }
    ],
    "sections": [
      {
        "heading": "What People Usually Mean by Craft",
        "body": [
          "Craft often suggests:",
          "smaller-scale production;",
          "close batch attention;",
          "hands-on cultivation;",
          "producer identity built around growing detail.",
          "The word is broad.",
          "It should not automatically be treated as one specific regulatory licence class unless that is actually confirmed for the producer."
        ]
      },
      {
        "heading": "What People Usually Mean by Commercial",
        "body": [
          "Commercial often points toward larger-scale production and distribution.",
          "Larger operations may emphasize:",
          "standardization;",
          "repeatability;",
          "process control;",
          "consistency.",
          "That does not automatically mean lower quality.",
          "Scale can create strengths and trade-offs."
        ]
      },
      {
        "heading": "Small Is Not Automatically Better",
        "body": [
          "A small producer can make excellent flower.",
          "A small producer can also produce an inconsistent batch.",
          "A large producer can make average flower.",
          "A large producer can also make carefully finished flower.",
          "Scale alone does not settle the comparison."
        ]
      },
      {
        "heading": "Craft Is Not the Same as Exotic or Premium",
        "body": [
          "Craft describes production context.",
          "Exotic and Premium are retail positioning terms.",
          "They can overlap.",
          "They are not synonyms.",
          "A craft-labelled product does not automatically belong in the Exotic Weed collection.",
          "An Exotic Weed product is not automatically craft."
        ]
      },
      {
        "heading": "Compare the Product, Not Just the Producer Label",
        "body": [
          "Adults may compare:",
          "producer;",
          "cultivar;",
          "legal THC/CBD information;",
          "aroma description where provided;",
          "trim;",
          "structure;",
          "visible trichomes;",
          "moisture/freshness clues;",
          "current category context.",
          "Those details are more specific than the broad craft/commercial label."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Does craft cannabis mean micro-licensed cannabis?",
        "answer": "Not necessarily. Craft is also used broadly in retail and marketing language."
      },
      {
        "question": "Is commercial cannabis lower quality?",
        "answer": "Not automatically. Scale is not a complete quality grade."
      },
      {
        "question": "Is craft the same as Premium or Exotic Weed?",
        "answer": "No. Craft describes production context; Premium and Exotic are retail positioning terms."
      },
      {
        "question": "What should I compare besides producer size?",
        "answer": "Use the legal product information and actual flower characteristics where available."
      },
      {
        "question": "Can large producers make consistent flower?",
        "answer": "Yes. Larger operations may use standardized processes designed for consistency."
      }
    ],
    "faqHeading": "Frequently Asked Questions"
  },
  {
    "slug": "cannabis-101/indica-sativa-hybrid",
    "title": "Indica vs Sativa vs Hybrid: Useful Menu Labels, Imperfect Predictions",
    "seoTitle": "Indica vs Sativa vs Hybrid | Kensington Green",
    "description": "Indica, Sativa and Hybrid are familiar cannabis labels, but modern genetics are heavily crossed. Learn what the terms can and cannot tell you.",
    "eyebrow": "Kensington Green Guide",
    "intro": "Indica, Sativa and Hybrid are some of the first labels adults recognize on a cannabis menu. They are useful. They are also easy to oversimplify. The familiar shortcut goes: Indica = relaxing; Sativa = energetic; Hybrid = somewhere in between. That story is easy to remember. Modern commercial cannabis is more complicated.",
    "banner": "/banners/homepage_hero.webp",
    "cards": [
      {
        "title": "Cannabis 101",
        "href": "/resources/cannabis-101",
        "text": "Continue with Cannabis 101."
      },
      {
        "title": "Strain vs Cultivar",
        "href": "/resources/cannabis-101/strain-vs-cultivar",
        "text": "Continue with Strain vs Cultivar."
      },
      {
        "title": "Landrace vs Hybrid",
        "href": "/resources/cannabis-101/landrace-vs-hybrid",
        "text": "Continue with Landrace vs Hybrid."
      },
      {
        "title": "THC vs Weed Quality",
        "href": "/resources/flower-guides/thc-vs-weed-quality",
        "text": "Continue with THC vs Weed Quality."
      }
    ],
    "sections": [
      {
        "heading": "Why the Labels Persist",
        "body": [
          "Adults recognize them quickly.",
          "They create a fast starting point.",
          "A product labelled Indica, Sativa or Hybrid communicates how the producer or retailer is classifying it.",
          "That is useful.",
          "It is not a guarantee."
        ]
      },
      {
        "heading": "Modern Cannabis Is Heavily Crossed",
        "body": [
          "Commercial cannabis has a long history of crossbreeding.",
          "Many modern products have mixed ancestry.",
          "The labels do not map cleanly to three perfectly separate modern genetic groups."
        ]
      },
      {
        "heading": "Effect Promises Are Too Strong",
        "body": [
          "Individual response varies.",
          "Products can differ in:",
          "THC;",
          "CBD;",
          "other cannabinoids;",
          "terpene profiles;",
          "dose;",
          "format;",
          "individual sensitivity.",
          "That makes statements such as:",
          "“Indica always makes you sleepy”",
          "too strong.",
          "The label can be a starting point without becoming a guaranteed effect prediction."
        ]
      },
      {
        "heading": "Hybrid Is Normal",
        "body": [
          "Hybrid is not a weak middle category.",
          "Hybrid ancestry is common in modern cannabis breeding.",
          "A Hybrid label can reflect mixed genetics or a product that does not fit a simple Indica/Sativa story."
        ]
      },
      {
        "heading": "Read More Than the Category",
        "body": [
          "When available, compare:",
          "exact product name;",
          "producer;",
          "cultivar;",
          "THC/CBD;",
          "format;",
          "any aroma/terpene information actually provided.",
          "The category label then becomes one part of a larger picture."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Are Indica and Sativa exact modern genetic categories?",
        "answer": "Not in a simple retail sense. The labels remain common, but extensive crossbreeding makes them imperfect."
      },
      {
        "question": "Is most modern cannabis hybridized?",
        "answer": "Mixed ancestry is common in modern commercial cannabis because of extensive breeding."
      },
      {
        "question": "Does Indica always mean sleepy?",
        "answer": "No. That is a common cultural association, not a guaranteed effect."
      },
      {
        "question": "Does Sativa always mean energetic?",
        "answer": "No. Product chemistry and individual response vary."
      },
      {
        "question": "What should I read besides the category label?",
        "answer": "Use the legal product information, producer, cultivar, THC/CBD and any other information actually provided."
      }
    ],
    "faqHeading": "Frequently Asked Questions"
  },
  {
    "slug": "cannabis-101/strain-vs-cultivar",
    "title": "Strain vs Cultivar: Why the Name Needs Context",
    "seoTitle": "Strain vs Cultivar | Cannabis Names Explained",
    "description": "Strain is common cannabis language; cultivar is a horticultural term. Learn why a familiar name does not guarantee identical genetics.",
    "eyebrow": "Kensington Green Guide",
    "intro": "Cannabis shoppers say strain all the time. Growers and horticulture writers may use cultivar. Both words can be useful. The bigger lesson is that a familiar product name is not a genetic certificate.",
    "banner": "/banners/homepage_hero.webp",
    "cards": [
      {
        "title": "Indica vs Sativa vs Hybrid",
        "href": "/resources/cannabis-101/indica-sativa-hybrid",
        "text": "Continue with Indica vs Sativa vs Hybrid."
      },
      {
        "title": "Landrace vs Hybrid",
        "href": "/resources/cannabis-101/landrace-vs-hybrid",
        "text": "Continue with Landrace vs Hybrid."
      },
      {
        "title": "Cannabis 101",
        "href": "/resources/cannabis-101",
        "text": "Continue with Cannabis 101."
      },
      {
        "title": "Weed Slang Explained",
        "href": "/resources/cannabis-101/weed-slang-glossary",
        "text": "Continue with Weed Slang Explained."
      }
    ],
    "sections": [
      {
        "heading": "Strain Is the Common Cannabis Word",
        "body": [
          "“Strain” is deeply established in cannabis culture.",
          "Adults understand it.",
          "There is no need to correct normal language just to sound more technical."
        ]
      },
      {
        "heading": "Cultivar Is the Horticultural Word",
        "body": [
          "Cultivar is short for “cultivated variety.”",
          "It is used in horticulture for plant lines selected and maintained for particular characteristics.",
          "In cannabis education, the term can be useful because it emphasizes the plant line rather than a promised effect."
        ]
      },
      {
        "heading": "The Same Name Does Not Guarantee the Same Product Everywhere",
        "body": [
          "Different producers may work with:",
          "different cuts;",
          "different breeding lines;",
          "different selections;",
          "different growing conditions.",
          "That means similarly named products can differ in:",
          "appearance;",
          "aroma;",
          "labelled chemistry;",
          "structure;",
          "finished quality.",
          "The name helps identify the product.",
          "It does not prove every version is identical."
        ]
      },
      {
        "heading": "Producer and Process Matter",
        "body": [
          "Finished flower is influenced by:",
          "genetics;",
          "cultivation environment;",
          "plant health;",
          "harvest timing;",
          "drying;",
          "curing;",
          "storage.",
          "The name is the beginning of the story, not the whole story."
        ]
      },
      {
        "heading": "Do Not Use the Name as an Effect Guarantee",
        "body": [
          "A familiar cultivar name does not guarantee one exact experience for every person.",
          "Use the actual product information.",
          "Avoid turning a name into a medical or effect claim."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Is strain the wrong word for cannabis?",
        "answer": "No. It is common cannabis language and widely understood."
      },
      {
        "question": "What does cultivar mean?",
        "answer": "Cultivar is a horticultural term for a cultivated plant variety."
      },
      {
        "question": "Does the same strain name mean identical genetics everywhere?",
        "answer": "Not necessarily. Commercial naming and producer lines can vary."
      },
      {
        "question": "Can two producers grow the same named cultivar differently?",
        "answer": "Yes. Growing and post-harvest conditions influence the finished product."
      },
      {
        "question": "Should a cultivar name be used to guarantee effects?",
        "answer": "No. The name alone should not be treated as an effect guarantee."
      }
    ],
    "faqHeading": "Frequently Asked Questions"
  },
  {
    "slug": "cannabis-101/landrace-vs-hybrid",
    "title": "Landrace vs Hybrid: A Simple Map of Cannabis Genetics",
    "seoTitle": "Landrace vs Hybrid Cannabis | Genetics Explained",
    "description": "Learn what landrace and hybrid mean in cannabis genetics and why modern commercial cannabis has a complicated breeding history.",
    "eyebrow": "Kensington Green Guide",
    "intro": "Cannabis genetics are often explained like a family tree. Landrace sits closer to the older regional roots of that story. Hybrid describes the crossing and selection that shaped much of modern commercial cannabis. Neither word is a quality grade.",
    "banner": "/banners/homepage_hero.webp",
    "cards": [
      {
        "title": "Indica vs Sativa vs Hybrid",
        "href": "/resources/cannabis-101/indica-sativa-hybrid",
        "text": "Continue with Indica vs Sativa vs Hybrid."
      },
      {
        "title": "Strain vs Cultivar",
        "href": "/resources/cannabis-101/strain-vs-cultivar",
        "text": "Continue with Strain vs Cultivar."
      },
      {
        "title": "BC Grown / Indoor / Hydro / Outdoor",
        "href": "/resources/flower-guides/bc-grown-indoor-hydro-outdoor",
        "text": "Continue with BC Grown / Indoor / Hydro / Outdoor."
      },
      {
        "title": "Cannabis 101",
        "href": "/resources/cannabis-101",
        "text": "Continue with Cannabis 101."
      }
    ],
    "sections": [
      {
        "heading": "Landrace",
        "body": [
          "Landrace generally refers to cannabis populations associated with long-term adaptation to a particular geographic region before modern commercial breeding mixed many lineages together.",
          "The term points toward geographic history and older regional populations.",
          "It does not mean every plant from that region is genetically identical."
        ]
      },
      {
        "heading": "Hybrid",
        "body": [
          "A hybrid is produced by crossing genetic lines.",
          "Breeders may select for traits such as:",
          "structure;",
          "flowering time;",
          "aroma;",
          "cannabinoid profile;",
          "yield;",
          "resilience;",
          "visual characteristics.",
          "The resulting line can be selected and crossed again."
        ]
      },
      {
        "heading": "Why Modern Cannabis Has Mixed Ancestry",
        "body": [
          "Commercial cannabis breeding has been active for decades.",
          "That history helps explain why modern Indica/Sativa/Hybrid labels do not fit three perfectly separate genetic boxes.",
          "Many current cultivars contain several layers of ancestry."
        ]
      },
      {
        "heading": "Landrace Does Not Mean Automatically Better",
        "body": [
          "Older regional origin can be interesting.",
          "It does not automatically mean:",
          "stronger;",
          "safer;",
          "more aromatic;",
          "more premium;",
          "better cured.",
          "Hybrid does not automatically mean diluted or lower quality.",
          "Those are value judgements, not genetic definitions."
        ]
      },
      {
        "heading": "Why This Matters on a Menu",
        "body": [
          "Genetics provide useful context.",
          "The practical shopper still needs the actual product label, producer information and current listing."
        ]
      }
    ],
    "faqs": [
      {
        "question": "What is landrace cannabis?",
        "answer": "The term generally refers to cannabis populations historically associated with long-term adaptation to particular geographic regions."
      },
      {
        "question": "Is landrace cannabis “pure”?",
        "answer": "“Pure” is too strong. Landrace refers to regional historical populations, not a guarantee of identical untouched genetics."
      },
      {
        "question": "What is a hybrid cultivar?",
        "answer": "A cultivar produced through crossing genetic lines and selection."
      },
      {
        "question": "Is hybrid cannabis lower quality?",
        "answer": "No. Hybrid describes breeding history, not quality."
      },
      {
        "question": "Why are so many modern cultivars hybrids?",
        "answer": "Decades of breeding have mixed many cannabis lineages."
      }
    ],
    "faqHeading": "Frequently Asked Questions"
  },
  {
    "slug": "cannabis-101/weed-slang-glossary",
    "title": "Weed Slang Explained: Gas, Loud, Fire, Dank, Mids, Quads and More",
    "seoTitle": "Weed Slang Glossary | Gas, Loud, Fire, Mids & Quads",
    "description": "Weed, bud, gas, loud, fire, dank, mids, quads and zaza are common cannabis slang. Learn what they usually mean and what they do not prove.",
    "eyebrow": "Kensington Green Guide",
    "intro": "Cannabis has formal label language and street language. Both show up around the same menu. Kensington Green can use normal adult Weed language without pretending slang is science. The useful move is to translate the nickname into the real characteristic.",
    "banner": "/banners/homepage_hero.webp",
    "cards": [
      {
        "title": "Cannabis 101",
        "href": "/resources/cannabis-101",
        "text": "Continue with Cannabis 101."
      },
      {
        "title": "Top Shelf, Mids & Quads",
        "href": "/resources/flower-guides/top-shelf-mids-quads",
        "text": "Continue with Top Shelf, Mids & Quads."
      },
      {
        "title": "Gas, Loud & Terpy",
        "href": "/resources/flower-guides/terpenes-gas-loud-aroma",
        "text": "Continue with Gas, Loud & Terpy."
      },
      {
        "title": "Frosty Weed & Trichomes",
        "href": "/resources/flower-guides/trichomes-frosty-weed",
        "text": "Continue with Frosty Weed & Trichomes."
      },
      {
        "title": "Exotic Weed",
        "href": "/exotic-weed",
        "text": "Continue with Exotic Weed."
      },
      {
        "title": "Premium Weed",
        "href": "/premium-weed",
        "text": "Continue with Premium Weed."
      }
    ],
    "sections": [
      {
        "heading": "Weed",
        "body": [
          "Weed is common informal language for cannabis.",
          "People often use it when they mean flower, though the word can also be used more broadly."
        ]
      },
      {
        "heading": "Bud / Flower / Nugs",
        "body": [
          "Bud and flower usually refer to dried cannabis flower.",
          "Nug or nugs is slang for individual pieces of flower."
        ]
      },
      {
        "heading": "Fire",
        "body": [
          "Fire means someone considers the cannabis very good.",
          "That is an opinion.",
          "The useful follow-up is:",
          "What makes it fire to you?"
        ]
      },
      {
        "heading": "Dank",
        "body": [
          "Dank is older cannabis slang usually used positively for strong-smelling or desirable Weed.",
          "Like fire, it is subjective."
        ]
      },
      {
        "heading": "Gas",
        "body": [
          "Gas usually describes a fuel-like, diesel-like or sharp pungent aroma.",
          "It is an aroma word.",
          "It is not a THC grade."
        ]
      },
      {
        "heading": "Loud",
        "body": [
          "Loud means the smell is pronounced.",
          "The exact scent can still be gassy, fruity, skunky, floral or earthy."
        ]
      },
      {
        "heading": "Terpy",
        "body": [
          "Terpy suggests a noticeable aroma or flavour profile associated with terpenes.",
          "It does not identify exact terpene content unless that information is actually provided."
        ]
      },
      {
        "heading": "Frosty",
        "body": [
          "Frosty points toward visible trichome coverage.",
          "It describes appearance.",
          "It does not provide an exact THC number."
        ]
      },
      {
        "heading": "Bag Appeal",
        "body": [
          "Bag appeal means visual first impression.",
          "People may be talking about:",
          "bud size;",
          "shape;",
          "trim;",
          "colour;",
          "visible trichomes;",
          "overall presentation."
        ]
      },
      {
        "heading": "Mids",
        "body": [
          "Mids means cannabis someone considers middle-of-the-road.",
          "The reason can vary.",
          "It is not an official grade."
        ]
      },
      {
        "heading": "Top Shelf",
        "body": [
          "Top shelf suggests premium positioning.",
          "It does not come with one required THC range."
        ]
      },
      {
        "heading": "Quads / AAAA",
        "body": [
          "Quads is common Canadian slang for AAAA.",
          "It usually signals premium positioning.",
          "It is not one regulated Canadian grading standard."
        ]
      },
      {
        "heading": "AAA / AAA+",
        "body": [
          "AAA is familiar informal grading language.",
          "AAA+ suggests slightly higher positioning.",
          "At Kensington Green, AAA+ Weed is a separate flower category."
        ]
      },
      {
        "heading": "AA",
        "body": [
          "AA is another familiar cannabis tier shorthand.",
          "At Kensington Green, AA Weed is a separate flower category."
        ]
      },
      {
        "heading": "Exotic",
        "body": [
          "Exotic can suggest unusual genetics, distinctive aroma, rarity or high-end presentation.",
          "At Kensington Green, Exotic Weed is a separate flower category."
        ]
      },
      {
        "heading": "Zaza / Za",
        "body": [
          "Zaza or za is newer slang often associated with premium, exotic or expensive-positioned Weed.",
          "It is not an official grade.",
          "The useful question is whether the speaker means genetics, aroma, appearance, rarity, price positioning or simply hype."
        ]
      },
      {
        "heading": "Why Slang Is Useful",
        "body": [
          "Gas quickly communicates an aroma family.",
          "Frosty points to trichomes.",
          "Bag appeal points to appearance.",
          "Quads points toward premium positioning.",
          "The mistake is not using slang.",
          "The mistake is treating slang as proof."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Is Weed the same thing as cannabis?",
        "answer": "Weed is common informal language for cannabis."
      },
      {
        "question": "What does gas mean?",
        "answer": "Usually a fuel-like, diesel-like or pungent aroma impression."
      },
      {
        "question": "What does loud mean?",
        "answer": "Usually that the aroma is pronounced."
      },
      {
        "question": "What are quads?",
        "answer": "Common Canadian slang for AAAA, generally implying premium positioning."
      },
      {
        "question": "What is zaza?",
        "answer": "Newer slang commonly associated with premium, exotic or expensive-positioned cannabis. It is not an official grade."
      }
    ],
    "faqHeading": "Frequently Asked Questions"
  }
];
RESOURCE_PAGES[0].description = "Kensington Green resource hub for Dundas West, Roncesvalles, High Park, Bloor West and Parkdale, with visit, Weed flower, menu, value and tobacco-terminology guides.";
RESOURCE_PAGES[0].sections.push({ heading: "Learn the Category, Then Check the Current Listing", body: ["Kensington Green's Resource Centre should separate stable education from changing menu details.","Use the guides to understand:","cannabis terminology;","first-visit planning;","Weed flower categories;","flower quality;","THC;","bag appeal;","trichomes;","aroma;","drying and curing;","growing methods;","genetics;","Weed slang;","commercial tobacco terminology.","Use the current category/product pages for:","current products;","current prices;","current package details;","current strains or flavours;","current stock;","current availability.","That keeps the Resource Centre useful even when the menu changes."] });
RESOURCE_PAGES[0].cards = [
  {
    "title": "Cannabis 101",
    "href": "/resources/cannabis-101",
    "text": "Continue with Cannabis 101."
  },
  {
    "title": "First Visit to Kensington Green",
    "href": "/resources/dundas-west-visit-guide",
    "text": "Continue with First Visit to Kensington Green."
  },
  {
    "title": "Cannabis Dispensary vs Weed Dispensary",
    "href": "/resources/cannabis-dispensary-vs-weed-dispensary",
    "text": "Continue with Cannabis Dispensary vs Weed Dispensary."
  },
  {
    "title": "Indica vs Sativa vs Hybrid",
    "href": "/resources/cannabis-101/indica-sativa-hybrid",
    "text": "Continue with Indica vs Sativa vs Hybrid."
  },
  {
    "title": "Strain vs Cultivar",
    "href": "/resources/cannabis-101/strain-vs-cultivar",
    "text": "Continue with Strain vs Cultivar."
  },
  {
    "title": "Landrace vs Hybrid",
    "href": "/resources/cannabis-101/landrace-vs-hybrid",
    "text": "Continue with Landrace vs Hybrid."
  },
  {
    "title": "Weed Slang Explained",
    "href": "/resources/cannabis-101/weed-slang-glossary",
    "text": "Continue with Weed Slang Explained."
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
  },
  {
    "title": "Top Shelf, Mids & Quads",
    "href": "/resources/flower-guides/top-shelf-mids-quads",
    "text": "Continue with Top Shelf, Mids & Quads."
  },
  {
    "title": "THC vs Weed Quality",
    "href": "/resources/flower-guides/thc-vs-weed-quality",
    "text": "Continue with THC vs Weed Quality."
  },
  {
    "title": "Bag Appeal",
    "href": "/resources/flower-guides/bag-appeal",
    "text": "Continue with Bag Appeal."
  },
  {
    "title": "Frosty Weed & Trichomes",
    "href": "/resources/flower-guides/trichomes-frosty-weed",
    "text": "Continue with Frosty Weed & Trichomes."
  },
  {
    "title": "Gas, Loud & Terpy",
    "href": "/resources/flower-guides/terpenes-gas-loud-aroma",
    "text": "Continue with Gas, Loud & Terpy."
  },
  {
    "title": "Drying, Curing & Freshness",
    "href": "/resources/flower-guides/drying-curing-freshness",
    "text": "Continue with Drying, Curing & Freshness."
  },
  {
    "title": "Smalls vs Big Buds",
    "href": "/resources/flower-guides/smalls-vs-big-buds",
    "text": "Continue with Smalls vs Big Buds."
  },
  {
    "title": "BC Grown / Indoor / Hydro / Outdoor",
    "href": "/resources/flower-guides/bc-grown-indoor-hydro-outdoor",
    "text": "Continue with BC Grown / Indoor / Hydro / Outdoor."
  },
  {
    "title": "Craft vs Commercial Cannabis",
    "href": "/resources/flower-guides/craft-vs-commercial-cannabis",
    "text": "Continue with Craft vs Commercial Cannabis."
  },
  {
    "title": "Roncesvalles And Dundas West Menu Guide",
    "href": "/resources/roncesvalles-menu-guide",
    "text": "Continue with Roncesvalles And Dundas West Menu Guide."
  },
  {
    "title": "Value Shopping Guide",
    "href": "/resources/value-shopping-guide",
    "text": "Continue with Value Shopping Guide."
  },
  {
    "title": "TTC And Parking Guide",
    "href": "/resources/ttc-and-parking-guide",
    "text": "Continue with TTC And Parking Guide."
  },
  {
    "title": "Native Cigarettes in Ontario",
    "href": "/resources/native-smokes-prices",
    "text": "Continue with Native Cigarettes in Ontario."
  }
];
RESOURCE_PAGES.find((page) => page.slug === "roncesvalles-menu-guide")?.cards.push(...[
  {
    "title": "Cannabis 101",
    "href": "/resources/cannabis-101",
    "text": "Continue with Cannabis 101."
  },
  {
    "title": "Weed & Flower Quality Guide",
    "href": "/resources/weed-flower-guide",
    "text": "Continue with Weed & Flower Quality Guide."
  },
  {
    "title": "First Visit to Kensington Green",
    "href": "/resources/dundas-west-visit-guide",
    "text": "Continue with First Visit to Kensington Green."
  }
]);
RESOURCE_PAGES.find((page) => page.slug === "ttc-and-parking-guide")?.cards.push(...[
  {
    "title": "First Visit to Kensington Green",
    "href": "/resources/dundas-west-visit-guide",
    "text": "Continue with First Visit to Kensington Green."
  },
  {
    "title": "Kensington Green in Toronto",
    "href": "/weed-dispensary-toronto",
    "text": "Continue with Kensington Green in Toronto."
  },
  {
    "title": "Kensington Green Resources",
    "href": "/resources",
    "text": "Continue with Kensington Green Resources."
  }
]);
for (const page of RESOURCE_PAGES) page.cards = page.cards.filter((card, index, cards) => cards.findLastIndex((candidate) => candidate.href === card.href) === index);
for (const page of RESOURCE_PAGES) Object.assign(page, PINKY_KSC01_OVERRIDES[page.slug] || {});
RESOURCE_PAGES.push(...PINKY_KSC01_ADDITIONS);

export const RESOURCE_HOME = RESOURCE_PAGES[0];

export function getResourcePage(slug: string) {
  const cleanSlug = slug.replace(/^\/+|\/+$/g, "");
  return RESOURCE_PAGES.find((page) => page.slug === cleanSlug);
}
