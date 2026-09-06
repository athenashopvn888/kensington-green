import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./resources.module.css";
import type { ResourcePage } from "./resourceData";

type ResourceViewProps = {
  page: ResourcePage;
};

export default function ResourceView({ page }: ResourceViewProps) {
  const canonical = `https://www.kensingtongreencannabis.com${page.slug ? `/resources/${page.slug}` : "/resources"}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": page.slug ? "Article" : "CollectionPage",
        "@id": `${canonical}#page`,
        url: canonical,
        headline: page.title,
        description: page.description,
        isPartOf: { "@id": "https://www.kensingtongreencannabis.com/#website" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.kensingtongreencannabis.com" },
          { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.kensingtongreencannabis.com/resources" },
          ...(page.slug ? [{ "@type": "ListItem", position: 3, name: page.title, item: canonical }] : []),
        ],
      },
      ...(page.faqs && page.faqs.length > 0
        ? [{
            "@type": "FAQPage",
            "@id": `${canonical}#faq`,
            mainEntity: page.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }]
        : []),
    ],
  };

  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p className={styles.intro}>{page.intro}</p>
          {page.ownerLink && (
            <Link href={page.ownerLink.href} className={styles.ownerLink}>
              {page.ownerLink.title}
            </Link>
          )}
          <div className={styles.bannerFrame}>
            <img src={page.banner} alt={`${page.title} resource banner`} className={styles.bannerImg} />
          </div>
        </div>
      </section>

      {page.cards.length > 0 && (
        <section className={styles.cardsSection} aria-label="Resource shortcuts">
          <div className={styles.grid}>
            {page.cards.map((card) => (
              <Link key={card.href} href={card.href} className={styles.card}>
                <span>{card.title}</span>
                <p>{card.text}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className={styles.body}>
        {page.sections.map((section) => (
          <article key={section.heading} className={styles.section}>
            <h2>{section.heading}</h2>
            {(Array.isArray(section.body) ? section.body : [section.body]).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.bullets && (
              <ul>
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            {section.afterBullets?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.link && (
              <Link href={section.link.href} className={styles.sectionLink}>
                {section.link.title}
              </Link>
            )}
          </article>
        ))}
        {page.faqs && page.faqs.length > 0 && (
          <article className={styles.section}>
            <h2>{page.faqHeading || "Weed Flower Guide FAQs"}</h2>
            <div className={styles.faqList}>
              {page.faqs.map((faq) => (
                <section key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </section>
              ))}
            </div>
          </article>
        )}
      </section>
      <Footer />
    </main>
  );
}
