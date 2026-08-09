"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FlowerCard from "./components/FlowerCard";
import { allFlowers } from "./lib/products";
import Papa from "papaparse";

/* -- Bento Mosaic Config -- */
const BENTO_TIERS = [
  {
    name: "EXOTICS",
    slug: "exotic",
    price: "$10-$12/g",
    banner: "/banners/exotics_banner.webp",
    className: styles.bentoExotic,
  },
  {
    name: "PREMIUM",
    slug: "premium",
    price: "$7-$10/g",
    banner: "/banners/premium_banner.webp",
    className: styles.bentoPremium,
  },
  {
    name: "AAA+",
    slug: "aaa",
    price: "$5-$6/g",
    banner: "/banners/aaa_plus_banner.webp",
    className: styles.bentoTile,
  },
  {
    name: "AA",
    slug: "aa",
    price: "$4/g",
    banner: "/banners/aa_banner.webp",
    className: styles.bentoTile,
  },
  {
    name: "BUDGET",
    slug: "budget",
    price: "$3/g",
    banner: "/banners/budget_banner.webp",
    className: styles.bentoTile,
  },
  {
    name: "EDIBLES - PREROLLS - MORE",
    slug: "items/edibles",
    price: "Shop Tiers",
    banner: "/banners/edibles_prerolls_more_banner.webp",
    className: styles.bentoEdibles,
  },
];

/* -- Explore Categories Config (New Banners) -- */
const EXPLORE_CATEGORIES = [
  {
    name: "Vape Pens",
    slug: "items/vapes",
    banner: "/banners/ksc-real/category-vape-pens.webp",
  },
  {
    name: "Nic Vape",
    slug: "items/vape-disposables",
    banner: "/banners/ksc-real/category-nic-vape.webp",
  },
  {
    name: "Concentrates",
    slug: "items/concentrates",
    banner: "/banners/ksc-real/category-concentrates.webp",
  },
  {
    name: "Pre-Rolls",
    slug: "items/prerolls",
    banner: "/banners/ksc-real/category-prerolls.webp",
  },
  {
    name: "Accessories",
    slug: "items/add-ons",
    banner: "/banners/ksc-real/category-accessories.webp",
  },
  {
    name: "Cigarettes",
    slug: "items/cigarettes",
    banner: "/banners/ksc-real/category-cigarettes.webp",
  },
  {
    name: "Magic Stuff",
    slug: "items/magic",
    banner: "/banners/ksc-real/category-magic.webp",
  },
  {
    name: "Games Arcade",
    slug: "games",
    banner: "/banners/ksc-real/category-games.webp",
  },
];

/* -- Local FAQs for Jane St -- */
const LOCAL_FAQS = [
  {
    q: "What are the hours for Kensington Green?",
    a: "Kensington Green at 2257 Dundas St W, Toronto is open daily from 10:00 AM to 02:00 AM. Walk in anytime - no appointment needed.",
  },
  {
    q: "What cannabis products do you carry?",
    a: "We carry five tiers of premium flower: Exotic ($10-$12/g), Premium ($7-$10/g), AAA+ ($5-$6/g), AA ($4/g), and Budget ($3/g), plus a wide variety of edibles, prerolls, vapes, and concentrates.",
  },
  {
    q: "Where is Kensington Green located?",
    a: "We are located at 2257 Dundas St W, Toronto, ON M6R 1X6. Visit us in person or call us at +1 (289) 514-9520. Free evening street parking is available.",
  },
  {
    q: "What is the cheapest weed at Kensington Green?",
    a: "Our budget flower starts at just $3/g. We also offer AA daily drivers from $4/g and AAA+ heavy hitters from $5-$6/g. View our budget menu for our latest deals.",
  },
];

interface Review {
  name: string;
  comment: string;
  date: string;
}

interface ReviewStats {
  total: number;
  avg: number;
}

export default function HomePage() {
  const [featuredStrains, setFeaturedStrains] = useState<any[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [reviewsStats, setReviewsStats] = useState<ReviewStats | null>(null);
  const [reviewsLoading, setReviewsLoading] = useState(true);
  const [welcomeBannerError, setWelcomeBannerError] = useState(false);
  const welcomeBannerSrc: string = "/banners/welcome_banner.webp";
  const hasWelcomeBanner =
    welcomeBannerSrc &&
    welcomeBannerSrc !== "/banners/" &&
    !welcomeBannerSrc.includes("HERO_BANNER") &&
    !welcomeBannerSrc.includes("WELCOME_BANNER") &&
    welcomeBannerSrc !== "";

  /* -- 1. Fetch Client-Side Google Reviews -- */
  useEffect(() => {
    const STORE_KEY = "KSC01";
    const url =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSu6iy9W3YKRzBYo_r96rXcbJsAOzlkzn5Rw9QMFnE0NbYSBgPxKX8kPRZNC9QcffZYj57155esmnqH/pub?gid=1555782756&single=true&output=csv";

    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error(`Review feed returned ${r.status}`);
        return r.text();
      })
      .then((raw) => {
        const rows = Papa.parse<Record<string, string>>(raw, {
          header: true,
          skipEmptyLines: true,
        }).data;

        const reviewsPool: Review[] = [];
        let totalVal: number | null = null;
        let avgVal: number | null = null;
        let hasStats = false;

        rows.forEach((row) => {
          if (row.StoreKey !== STORE_KEY) return;

          const rn = row.ReviewerName || "";
          if (rn === "__STATS__") {
            const parsedTotal = parseInt(row.Comment || "", 10);
            const parsedAvg = parseFloat(row.CreateTime || "");
            if (Number.isFinite(parsedTotal) && Number.isFinite(parsedAvg)) {
              totalVal = parsedTotal;
              avgVal = parsedAvg;
              hasStats = true;
            }
            return;
          }

          const comment = row.Comment || "";
          if (!comment || comment.length < 10) return;
          const name = rn || "Customer";
          const dateStr = row.CreateTime || "";
          reviewsPool.push({ name, comment, date: dateStr });
        });

        setReviews(reviewsPool.slice(0, 6));
        if (hasStats && totalVal !== null && avgVal !== null) {
          setReviewsStats({ total: totalVal, avg: avgVal });
        }
        setReviewsLoading(false);
      })
      .catch((err) => {
        console.warn("Reviews fetch failed:", err);
        setReviewsLoading(false);
      });
  }, []);

  /* -- 2. Build Featured Strains -- */
  useEffect(() => {
    const pool = [...allFlowers].filter((f) => f.image);
    // Shuffle pool securely
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    const picked: typeof pool = [];
    const tierCounts: Record<string, number> = {};

    for (const f of pool) {
      if (picked.length >= 8) break;
      const tc = tierCounts[f.tier] || 0;
      if (tc >= 2) continue; // max 2 per tier
      if (picked.some((p) => p.name === f.name)) continue; // avoid exact duplicates
      picked.push(f);
      tierCounts[f.tier] = tc + 1;
    }

    setFeaturedStrains(picked);
  }, []);

  return (
    <main className={styles.main}>
      {/* -- NAVBAR -- */}
      <Navbar />

      {/* -- WELCOME BANNER -- */}
      {hasWelcomeBanner && !welcomeBannerError && (
        <section className={styles.welcomeBannerSection}>
          <div className={styles.welcomeBannerContainer}>
            <img
              src={welcomeBannerSrc}
              alt="Welcome to Kensington Green - Premium Toronto Cannabis Dispensary"
              className={styles.welcomeBannerImg}
              onError={() => setWelcomeBannerError(true)}
            />
          </div>
        </section>
      )}

      {/* -- BENTO MOSAIC HERO -- */}
      <section className={styles.hiringCallout} aria-label="Hiring at Kensington Green" style={{ "--hire-accent": "#22c55e", "--hire-accent-soft": "rgba(34, 197, 94, 0.14)", "--hire-accent-border": "rgba(34, 197, 94, 0.32)" } as CSSProperties}>
        <div className={styles.hiringCalloutInner}>
          <div>
            <span className={styles.hiringEyebrow}>Budtenders / Managers Wanted</span>
            <h2>Join Kensington Green</h2>
            <p>Dundas West needs friendly, reliable people who can bring good energy, learn the menu, and keep customers moving with confidence. Online applications only. Please do not call the store about hiring.</p>
          </div>
          <Link href="/careers/budtender" className={styles.hiringButton}>Apply Online</Link>
        </div>
      </section>

      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroStars} />

        <div className={styles.heroContent}>
          {/* Brand branding */}
          <div className={styles.brandBlock}>
            <img
              src="/storeFavicon.webp"
              alt="Kensington Green Icon"
              style={{
                height: "60px",
                width: "60px",
                objectFit: "contain",
                borderRadius: "8px",
                marginBottom: "8px",
              }}
            />
            <h1 className={styles.brandTitle}>KENSINGTON GREEN</h1>
            <p className={styles.brandSub}>Premium Cannabis Dispensary</p>
            <div className={styles.brandBadge}>
              Open Daily: 10:00 AM - 02:00 AM
            </div>
            <div className={styles.homeMenuActions} aria-label="Choose a Kensington Green menu">
              <Link href="/exotic" className={styles.homeMenuCta}>STORE MENU</Link>
              <Link href="/delivery" className={`${styles.homeMenuCta} ${styles.homeDeliveryCta}`}>DELIVERY MENU</Link>
            </div>
          </div>

          {/* Bento Grid */}
          <div className={styles.bentoGrid}>
            {BENTO_TIERS.map((tier) => (
              <Link
                key={tier.slug}
                href={`/${tier.slug}`}
                className={`${styles.bentoTile} ${tier.className}`}
              >
                <div
                  className={styles.bentoTileBg}
                  style={{ backgroundImage: `url('${tier.banner}')` }}
                />
                <div className={styles.bentoTileOverlay} />
                <div className={styles.bentoTileContent}>
                  <span className={styles.bentoLabel}>{tier.name}</span>
                  <span className={styles.bentoPrice}>{tier.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* -- EXPLORE CATEGORIES -- */}
      <section className={styles.categoriesSection} id="menu">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Explore Categories</h2>
            <p className={styles.sectionSubtitle}>
              From custom disposable vapes and concentrates to accessories and
              cigarettes.
            </p>
          </div>

          <div className={styles.categoriesGrid}>
            {EXPLORE_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className={styles.categoryCard}
              >
                <div
                  className={styles.categoryCardBg}
                  style={{ backgroundImage: `url('${cat.banner}')` }}
                />
                <div className={styles.categoryCardOverlay} />
                <div className={styles.categoryCardContent}>
                  <h3 className={styles.categoryCardName}>{cat.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* -- FEATURED PRODUCTS -- */}
      <section className={styles.featuredSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Featured Strains</h2>
            <p className={styles.sectionSubtitle}>
              Featured menu listings from the current product source.
            </p>
          </div>

          <div className={styles.featuredScroll}>
            {featuredStrains.map((strain, i) => (
              <div key={`${strain.sku}-${i}`} className={styles.scrollItem}>
                <FlowerCard flower={strain} tierKey={strain.tier} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- SEO PANEL WRITE-UP -- */}
      <section className={styles.seoSection}>
        <div className={styles.container}>
          <div className={styles.seoPanel}>
            <h2 className={styles.seoPanelTitle}>
              Dundas West Cannabis Dispensary - Open Daily: 10:00 AM - 02:00 AM
            </h2>
            <p className={styles.seoPanelText}>
              Welcome to <strong>Kensington Green</strong>, Toronto&apos;s local
              cannabis stop at 2257 Dundas St W. We carry an electrifying
              menu with separate flower tiers and category pages for other
              product formats.
            </p>
            <p className={styles.seoPanelText}>
              Kensington Green is open daily from 10:00 AM to 02:00 AM. Our
              current menu provides separate pages for flower, pre-rolls,
              edibles, vapes, concentrates, accessories, and cigarettes. Staff
              can clarify menu details during listed store hours.
            </p>
            <p className={styles.seoPanelText}>
              Searching for a cannabis dispensary in Toronto or the surrounding
              area? Kensington Green provides store details and category
              navigation for adults planning a Dundas West visit. Compare the
              posted menu information before choosing a category.
            </p>
          </div>
        </div>
      </section>

      {/* -- CLIENT-SIDE GOOGLE REVIEWS SHOWCASE -- */}
      <section className={styles.reviewsSection}>
        <div className={styles.container}>
          <div className={styles.reviewsHeader}>
            <h2 className={styles.sectionTitle}>Customer Feedback</h2>
            {reviewsStats && (
              <div className={styles.reviewsStarsSummary}>
                <span className={styles.reviewsStars}>
                  {"\u2605\u2605\u2605\u2605\u2605"}
                </span>
                <span className={styles.reviewsAvg}>
                  {reviewsStats.avg.toFixed(1)}
                </span>
                <span className={styles.reviewsCount}>
                  ({reviewsStats.total} reviews)
                </span>
              </div>
            )}
          </div>

          <div className={styles.reviewsGrid}>
            {reviewsLoading ? (
              <div className={styles.reviewsLoading}>
                Loading customer feedback...
              </div>
            ) : reviews.length === 0 ? (
              <div className={styles.reviewsLoading}>
                Customer feedback is unavailable right now.
              </div>
            ) : (
              reviews.map((rv, idx) => (
                <div key={idx} className={styles.rvCard}>
                  <div className={styles.rvTop}>
                    <div className={styles.rvAvatar}>
                      {rv.name.charAt(0).toUpperCase()}
                    </div>
                    <div className={styles.rvMeta}>
                      <span className={styles.rvName}>{rv.name}</span>
                      {rv.date && (
                        <span className={styles.rvDate}>
                          {new Date(rv.date).toLocaleDateString("en-CA", {
                            year: "numeric",
                            month: "short",
                          })}
                        </span>
                      )}
                    </div>
                    <span className={styles.rvStars}>*****</span>
                  </div>
                  <p className={styles.rvText}>
                    {rv.comment.length > 180
                      ? `${rv.comment.substring(0, 177)}...`
                      : rv.comment}
                  </p>
                </div>
              ))
            )}
          </div>

          <div className={styles.reviewCtaRow}></div>
        </div>
      </section>

      {/* -- FAQS SECTION -- */}
      <section className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <h2
            className={styles.sectionTitle}
            style={{ textAlign: "center", marginBottom: "32px" }}
          >
            Frequently Asked Questions
          </h2>
          {LOCAL_FAQS.map((faq, i) => (
            <details key={i} className={styles.faqItem}>
              <summary className={styles.faqQuestion}>{faq.q}</summary>
              <p className={styles.faqAnswer}>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* -- STORE LOCATION GRID -- */}
      <section className={styles.storeSection} id="contact">
        <div className={styles.container}>
          <div className={styles.storeGrid}>
            <div className={styles.storeCard}>
              <h3 className={styles.storeCardTitle}>Location</h3>
              <p className={styles.storeCardText}>
                2257 Dundas St W
                <br />
                Toronto, ON M6R 1X6
                <br />
              </p>
            </div>
            <div className={styles.storeCard}>
              <h3 className={styles.storeCardTitle}>Hours</h3>
              <p className={styles.storeCardText}>
                Open 7 Days a Week
                <br />
                <span className={styles.storeHighlight}>
                  Open Daily: 10:00 AM - 02:00 AM
                </span>
              </p>
            </div>
            <div className={styles.storeCard}>
              <h3 className={styles.storeCardTitle}>Walk In</h3>
              <p className={styles.storeCardText}>
                No appointment needed
                <br />
                <span className={styles.storeHighlight}>
                  Dundas West and Roncesvalles, Toronto
                </span>
              </p>
            </div>
          </div>

          {/* Map wrapper */}
          <div className={styles.mapWrap}></div>
        </div>
      </section>

      {/* -- FOOTER -- */}
      <Footer />
    </main>
  );
}
