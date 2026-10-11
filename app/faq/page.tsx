import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { TIER_CONFIG } from "../lib/products";
import {
  BOGO_BUY_2_GET_1,
  BOGO_BUY_3_GET_3,
  formatAsLowAsAfterPromos,
  formatBoardDealLine,
  formatDollars,
  formatPayEquals,
  formatPerGram,
} from "../lib/flowerDeals";
import styles from "./faq.module.css";

export const metadata: Metadata = {
  title: { absolute: "FAQ | Dundas West & Roncesvalles — Kensington Green" },
  description:
    "Hours, parking, TTC, 19+ ID, and walk-in questions for Kensington Green at 2257 Dundas St W. Adults 19+. Open 24 Hours Daily.",
  alternates: {
    canonical: "https://www.kensingtongreencannabis.com/faq",
  },
};

function boardTierSentence(key: "AAA+" | "PREMIUM" | "EXOTIC"): string {
  const tier = TIER_CONFIG[key];
  const deal3 = tier.deal3g;
  const deal6 = tier.deal6g;
  if (!deal3 || !deal6) return "";
  const shortName = tier.name.replace(/ Weed$/, "");
  return `${shortName} lists at ${formatDollars(tier.unitPrice)}/g. ${formatBoardDealLine(deal3)} (${formatPerGram(deal3.price, deal3.grams)}). ${formatBoardDealLine(deal6)} (${formatPerGram(deal6.price, deal6.grams)}). ${formatAsLowAsAfterPromos(deal6.price, deal6.grams)}.`;
}

const BOARD_DEAL_ANSWER = [
  "Exotic, Premium, and AAA+ match the in-store board. AA does not include these deals. Budget keeps a separate $10 / 3g Special.",
  boardTierSentence("AAA+"),
  boardTierSentence("PREMIUM"),
  boardTierSentence("EXOTIC"),
  "Board notation is 2g=3g and 3g=6g.",
].join(" ");

const aaaDeals = TIER_CONFIG["AAA+"];
const BOARD_DEAL_HOW = [
  `${BOGO_BUY_2_GET_1} means you pay for 2g and receive 3g.`,
  aaaDeals.deal3g
    ? `On AAA+ that is ${formatPayEquals(aaaDeals.deal3g.price, aaaDeals.deal3g.grams)}.`
    : "",
  `${BOGO_BUY_3_GET_3} means you pay for 3g and receive 6g.`,
  aaaDeals.deal6g
    ? `On AAA+ that is ${formatPayEquals(aaaDeals.deal6g.price, aaaDeals.deal6g.grams)}.`
    : "",
  "Premium and Exotic use the same FREE lines with their own paid totals.",
  "The 6g total is on Exotic, Premium, and AAA+ only.",
  "AA has neither board deal.",
  "These are everyday in-store offers. The gram is included in the paid total.",
].filter(Boolean).join(" ");

const FAQ_CATEGORIES = [
  {
    title: " Location & Hours",
    faqs: [
      {
        q: "Where is Kensington Green located?",
        a: "Kensington Green is at 2257 Dundas St W, Toronto, ON M6R 1X6, on the Dundas West / Roncesvalles corridor near Howard Park. It is a walk-in pin for this stretch of Dundas — not a downtown core shop.",
      },
      {
        q: "What are your hours?",
        a: "We are open 24 hours daily. Walk in anytime — no appointment needed. Adults 19+ with government-issued photo ID.",
      },
      {
        q: "Is there parking nearby?",
        a: "Evening street parking is often available on Dundas Street West and nearby side streets. Follow posted signs; restrictions change by block and hour. The visit page has the parking loop notes.",
      },
      {
        q: "How far are you from Roncesvalles Village?",
        a: "The shop sits on Dundas at the Roncesvalles / High Park South pinch. From the village you come up to Dundas rather than riding all the way downtown. How-to-reach detail is on /visit.",
      },
      {
        q: "How can I get to Kensington Green?",
        a: "Use the 505 Dundas streetcar along Dundas Street West, walk from Roncesvalles Village, or treat Dundas West Station as a Line 2 / GO / UP Express transfer landmark farther north toward Bloor. Full transit and parking notes are on the visit page.",
      },
    ],
  },
  {
    title: " Products & Menu",
    faqs: [
      {
        q: "What products do you carry?",
        a: "We carry over 200 strains of cannabis flower across 5 quality tiers (Exotic, Premium, AAA+, AA, Budget), plus edibles (gummies, chocolates, baked goods), vape pens, disposable vapes, concentrates (shatter, wax, hash, diamonds, live resin), pre-rolled joints, native cigarettes, and accessories.",
      },
      {
        q: "Do you have a current menu?",
        a: "Yes. Use the online menu to review current product names, categories, weights, and posted prices before visiting.",
      },
      {
        q: "What are your flower tiers?",
        a: "The menu separates flower into Exotic, Premium, AAA+, AA, and Budget tiers. Open each tier page to compare its current listings and posted prices.",
      },
      {
        q: "Do you sell edibles?",
        a: "Yes! We carry a variety of edibles including gummies, chocolates, baked goods, and more. THC content varies. Check our current menu for current menu details.",
      },
      {
        q: "Do you sell vapes?",
        a: "The vape category pages organize disposable and cartridge formats. Review the current menu for product details.",
      },
      {
        q: "Do you sell native cigarettes?",
        a: "Yes! We carry native cigarette options in Toronto, including premium and value brands in multiple varieties.",
      },
    ],
  },
  {
    title: " Pricing & Flower Deals",
    faqs: [
      {
        q: "Can I get the store price on a delivery order?",
        a: "No. In-store prices are for purchases made in the store. Delivery orders always use delivery prices.",
      },
      {
        q: "What is the cheapest weed you sell?",
        a: "Our Budget tier starts at $3/g with value ounces from $40. Our AA tier is $4/g. These are the most competitive prices you'll find in Toronto.",
      },
      {
        q: "What flower deals match the in-store board?",
        a: BOARD_DEAL_ANSWER,
      },
      {
        q: "Do you have ounce deals?",
        a: "Check the relevant flower tier page for current posted ounce options and prices.",
      },
      {
        q: "How do Buy 2g Get 1g FREE and Buy 3g Get 3g FREE work?",
        a: BOARD_DEAL_HOW,
      },
      {
        q: "How does the tier pricing work?",
        a: "Each flower listing appears in one of five menu tiers. Use the tier page to compare the posted weight and price details.",
      },
    ],
  },
  {
    title: " Shopping & Experience",
    faqs: [
      {
        q: "Do I need an appointment?",
        a: "No! Kensington Green is walk-in only. Just show up anytime — we are open 24 hours daily.",
      },
      {
        q: "Can I order online?",
        a: "Currently, Kensington Green is an in-store shopping experience only. You can browse the current menu online before visiting.",
      },
      {
        q: "Do you offer delivery?",
        a: "Delivery is a separate neighbourhood-scoped service, not city-wide Toronto coverage. Use the delivery URL for Dundas West / Roncesvalles / High Park South / Parkdale-edge range. The dispatcher confirms whether an address is in range. Walk-in remains at 2257 Dundas St W.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept cash and debit. No credit cards at this time.",
      },
      {
        q: "Can your staff help me choose a strain?",
        a: "Staff can help compare current menu categories, formats, package details, and posted prices.",
      },
      {
        q: "Is there a minimum purchase?",
        a: "No minimum purchase required. You can buy as little as 1 gram.",
      },
    ],
  },
];

export default function FAQPage() {
  // JSON-LD for FAQ page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_CATEGORIES.flatMap((cat) =>
      cat.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className={styles.main}>
        <Navbar />

        {/* FAQ Banner */}
        <section
          style={{ width: "100%", overflow: "hidden", marginTop: "calc(92px + var(--flower-bogo-strip-height))" }}
        >
          <img
            src="/banners/07_FAQ.webp"
            alt="Kensington Green FAQ Your Questions Answered"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              objectFit: "contain",
            }}
          />
        </section>

        <div className={styles.content}>
          <h1 className={styles.pageTitle}>Frequently Asked Questions</h1>
          <p className={styles.pageSubtitle}>
            Walk-in questions for Kensington Green at 2257 Dundas St W on
            Dundas West / Roncesvalles. Adults 19+.
          </p>

          {FAQ_CATEGORIES.map((cat) => (
            <div key={cat.title} className={styles.category}>
              <h2 className={styles.categoryTitle}>{cat.title}</h2>
              {cat.faqs.map((faq) => (
                <details key={faq.q} id={faq.q === "Can I get the store price on a delivery order?" ? "delivery-price-rule" : undefined} className={styles.faqItem}>
                  <summary className={styles.faqQuestion}>{faq.q}</summary>
                  <p className={styles.faqAnswer}>{faq.a}</p>
                </details>
              ))}
            </div>
          ))}

          <div className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Still have questions?</h2>
            <p className={styles.ctaText}>
              Call us at <strong>+1 (289) 514-9520</strong> or visit us at 2257
              Dundas St W, Toronto.
            </p>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
