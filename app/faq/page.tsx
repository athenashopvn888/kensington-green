import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./faq.module.css";

export const metadata: Metadata = {
  title: "FAQ Kensington Green | Toronto Dispensary Questions",
  description:
    "Frequently asked questions about Kensington Green in Toronto. Hours, location, products, pricing, bundle offers, and everything you need to know before visiting.",
  alternates: {
    canonical: "https://www.kensingtongreencannabis.com/faq",
  },
};

const FAQ_CATEGORIES = [
  {
    title: " Location & Hours",
    faqs: [
      {
        q: "Where is Kensington Green located?",
        a: "We are located at 2257 Dundas St W, Toronto, ON M6R 1X6. We're easily accessible by TTC bus routes and close to major highways like the 401.",
      },
      {
        q: "What are your hours?",
        a: "We are open daily from 10:00 AM to 02:00 AM. Walk in anytime no appointment needed.",
      },
      {
        q: "Is there parking nearby?",
        a: "Yes. Free street parking is available nearby on surrounding streets in the evenings. We're also easily accessible by local transit.",
      },
      {
        q: "How far are you from west Toronto?",
        a: "We're just 5 minutes from the highways and central transit routes. We are centrally located and easy to reach.",
      },
      {
        q: "How can I get to Kensington Green?",
        a: "We're easily accessible by car, bus, or foot. We are easily accessible by car, local transit, or bus routes. Free parking is available on surrounding streets.",
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
    title: " Pricing & Bundle Offers",
    faqs: [
      {
        q: "What is the cheapest weed you sell?",
        a: "Our Budget tier starts at $3/g with value ounces from $40. Our AA tier is $4/g. These are the most competitive prices you'll find in Toronto.",
      },
      {
        q: "What bundle pricing do you offer?",
        a: "Flower bundle pricing includes a 3g total option the 3g total is shown clearly before purchase. Our Exotic, Premium, and AAA+ tiers also offer 6g bundle pricing, with 6g total pricing.",
      },
      {
        q: "Do you have ounce deals?",
        a: "Check the relevant flower tier page for current posted ounce options and prices.",
      },
      {
        q: "How does bundle pricing work?",
        a: "The 3g bundle pricing applies to every tier automatically. The 6g bundle pricing applies to Exotic, Premium, and AAA+ tiers. These are our standard everyday bundle offers.",
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
        a: "No! Kensington Green is walk-in only. Just show up anytime we are open daily from 10:00 AM to 02:00 AM.",
      },
      {
        q: "Can I order online?",
        a: "Currently, Kensington Green is an in-store shopping experience only. You can browse the current menu online before visiting.",
      },
      {
        q: "Do you offer delivery?",
        a: "Delivery is coming soon! Visit our delivery page to sign up for email notifications when we launch our delivery service.",
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
          style={{ width: "100%", overflow: "hidden", marginTop: "92px" }}
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
            Everything you need to know about Kensington Green Toronto&apos;s
            premium dispensary at 2257 Dundas St W in Toronto.
          </p>

          {FAQ_CATEGORIES.map((cat) => (
            <div key={cat.title} className={styles.category}>
              <h2 className={styles.categoryTitle}>{cat.title}</h2>
              {cat.faqs.map((faq) => (
                <details key={faq.q} className={styles.faqItem}>
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
