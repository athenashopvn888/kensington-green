/** Single source of KSC01 NAP, hours, and local-pack copy. Do not invent new hours, phones, or inventory. */

export const STORE_NAP = {
  name: "Kensington Green",
  domain: "www.kensingtongreencannabis.com",
  origin: "https://www.kensingtongreencannabis.com",
  streetAddress: "2257 Dundas St W",
  addressLocality: "Toronto",
  addressRegion: "ON",
  postalCode: "M6R 1X6",
  addressCountry: "CA",
  addressLine: "2257 Dundas St W, Toronto, ON M6R 1X6",
  phoneDisplay: "+1 (289) 514-9520",
  phoneIntl: "+12895149520",
  hoursLabel: "Open 24 Hours Daily",
  hoursOpens: "00:00",
  hoursCloses: "23:59",
  latitude: 43.6546313,
  longitude: -79.4521695,
  neighborhood: "Dundas West / Roncesvalles",
  corridor: "Dundas West, Roncesvalles, and the Parkdale edge",
  intersection: "Dundas Street West & Roncesvalles Avenue / Howard Park",
  ageLine: "Adults 19+",
  image:
    "https://www.kensingtongreencannabis.com/wp-content/uploads/2026/04/7Clmh.jpg",
  mapSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=2257+Dundas+St+W,+Toronto,+ON+M6R+1X6",
  mapEmbedUrl:
    "https://www.google.com/maps?q=2257+Dundas+St+W,+Toronto,+ON+M6R+1X6&output=embed",
} as const;

export const HOME_TITLE = "Kensington Green | Dundas West Cannabis Dispensary";
export const HOME_DESCRIPTION =
  "Walk-in cannabis dispensary at 2257 Dundas St W for Dundas West, Roncesvalles, and the Parkdale edge. Adults 19+. Open 24 Hours Daily. Call +1 (289) 514-9520.";

/** Visible homepage FAQs — FAQPage JSON-LD must stay in lockstep with these strings. */
export const HOME_FAQS = [
  {
    q: "What are the hours for Kensington Green on Dundas West?",
    a: "Kensington Green at 2257 Dundas St W is open 24 hours daily. Walk in — no appointment. Adults 19+ must bring government-issued photo ID.",
  },
  {
    q: "Where is Kensington Green relative to Roncesvalles?",
    a: "The shop is at 2257 Dundas St W, Toronto, ON M6R 1X6, on the Dundas West / Roncesvalles corridor near Howard Park. Call +1 (289) 514-9520. Evening street parking is often available; follow posted signs. How-to-reach notes live on the visit page.",
  },
  {
    q: "What can I browse before a Dundas West walk-in?",
    a: "The public menu is split into flower tiers (Exotic, Premium, AAA+, AA, Budget) plus category pages for edibles, pre-rolls, vapes, concentrates, accessories, and cigarettes. Pages are for browsing posted details, not a live stock feed. Ask at the counter or call if one exact item is the reason for the trip.",
  },
  {
    q: "Do you run city-wide Toronto cannabis delivery from this pin?",
    a: "No. Walk-in at 2257 Dundas St W is the neighbourhood job. Delivery is a separate URL with Dundas West / Roncesvalles / High Park South / Parkdale-edge scope. The dispatcher confirms whether an address is in range. Adults 19+.",
  },
] as const;

export const VISIT_FAQS = [
  {
    q: "What is the nearest intersection to Kensington Green?",
    a: "Plan around Dundas Street West and Roncesvalles Avenue / Howard Park. The door is 2257 Dundas St W, Toronto, ON M6R 1X6 — west-end Dundas, not a downtown core address.",
  },
  {
    q: "Which TTC routes are useful for a Dundas West visit?",
    a: "The 505 Dundas streetcar runs along Dundas Street West. Dundas West Station (Line 2, with GO and UP Express connections) is a walk north toward Bloor — a planning landmark, not a claim that the shop sits inside the station. The 504 King streetcar serves Roncesvalles Village a few blocks south. Check current TTC service before you travel.",
  },
  {
    q: "Where should I park?",
    a: "Evening street parking on Dundas Street West and nearby side streets is the usual pattern. Restrictions change by block and hour, so read the posted signs. At busy dinner or late-night times, loop Sorauren, Indian Road, or Howard Park rather than stopping on the streetcar tracks.",
  },
  {
    q: "What should I bring?",
    a: "Government-issued photo ID proving you are 19 or older. Debit and cash are the listed in-store payment methods. No appointment. If you need one specific product, call +1 (289) 514-9520 during listed hours first.",
  },
] as const;

export function cannabisStoreJsonLd() {
  const nap = STORE_NAP;
  return {
    "@context": "https://schema.org",
    "@type": "CannabisStore",
    "@id": `${nap.origin}/#store`,
    name: nap.name,
    description:
      "Walk-in cannabis dispensary on the Dundas West / Roncesvalles corridor at 2257 Dundas St W. Adults 19+. Open 24 Hours Daily.",
    url: nap.origin,
    telephone: nap.phoneIntl,
    image: nap.image,
    priceRange: "$3 - $12/g",
    address: {
      "@type": "PostalAddress",
      streetAddress: nap.streetAddress,
      addressLocality: nap.addressLocality,
      addressRegion: nap.addressRegion,
      postalCode: nap.postalCode,
      addressCountry: nap.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: nap.latitude,
      longitude: nap.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: nap.hoursOpens,
        closes: nap.hoursCloses,
      },
    ],
    hasMap: nap.mapSearchUrl,
    areaServed: [
      { "@type": "Place", name: "Dundas West" },
      { "@type": "Place", name: "Roncesvalles" },
      { "@type": "Place", name: "High Park South" },
    ],
  };
}

export function faqPageJsonLd(
  faqs: readonly { q: string; a: string }[] | readonly { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => {
      const name = "q" in faq ? faq.q : faq.question;
      const text = "a" in faq ? faq.a : faq.answer;
      return {
        "@type": "Question",
        name,
        acceptedAnswer: {
          "@type": "Answer",
          text,
        },
      };
    }),
  };
}
