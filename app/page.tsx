"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import FleetAnnouncementBanner from "./components/FleetAnnouncementBanner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FlowerCard from "./components/FlowerCard";
import JsonLd from "./components/JsonLd";
import { WeedDiscoveryModule } from "./components/WeedDiscoveryModule";
import { allFlowers, type FlowerProduct } from "./lib/products";
import { HOME_FAQS, STORE_NAP, faqPageJsonLd } from "./lib/storeNap";
import Papa from "papaparse";

function pickFeaturedStrains(flowers: FlowerProduct[]) {
  const pool = flowers.filter((f) => f.image);
  const picked: FlowerProduct[] = [];
  const tierCounts: Record<string, number> = {};
  for (const f of pool) {
    if (picked.length >= 8) break;
    const tc = tierCounts[f.tier] || 0;
    if (tc >= 2) continue;
    if (picked.some((p) => p.name === f.name)) continue;
    picked.push(f);
    tierCounts[f.tier] = tc + 1;
  }
  return picked;
}

/* -- Bento Mosaic Config -- */
const BENTO_TIERS = [
  {
    name: "EXOTIC WEED",
    slug: "exotic-weed",
    price: "$10-$12/g",
    banner: "/banners/exotics_banner.webp",
    className: styles.bentoExotic,
  },
  {
    name: "PREMIUM WEED",
    slug: "premium-weed",
    price: "$7-$10/g",
    banner: "/banners/premium_banner.webp",
    className: styles.bentoPremium,
  },
  {
    name: "AAA+ WEED",
    slug: "aaa-weed",
    price: "$5-$6/g",
    banner: "/banners/aaa_plus_banner.webp",
    className: styles.bentoTile,
  },
  {
    name: "AA WEED",
    slug: "aa-weed",
    price: "$4/g",
    banner: "/banners/aa_banner.webp",
    className: styles.bentoTile,
  },
  {
    name: "BUDGET WEED",
    slug: "budget-weed",
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
    banner: "/banners/native-cigarette-offer-20260822.webp",
  },
  {
    name: "Magic Stuff",
    slug: "items/magic",
    banner: "/banners/ksc-real/category-magic.webp",
  },
];

const LOCAL_FAQS = HOME_FAQS;

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
  const featuredStrains = pickFeaturedStrains(allFlowers);
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

  /* Featured cards start from static JSON so crawlers see product names under the grid. */

  return (
    <main className={styles.main}>
      <JsonLd data={faqPageJsonLd(HOME_FAQS)} />
      <FleetAnnouncementBanner />
      {/* -- NAVBAR -- */}
      <Navbar />

      {/* -- WELCOME BANNER -- */}
      {hasWelcomeBanner && !welcomeBannerError && (
        <section className={styles.welcomeBannerSection}>
          <div className={styles.welcomeBannerContainer}>
            <img
              src={welcomeBannerSrc}
              alt="Welcome to Kensington Green on Dundas West"
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
            <h1 className={styles.brandTitle}>
              Kensington Green | Dundas West Cannabis Dispensary
            </h1>
            <p className={styles.brandSub}>
              Walk-in on Dundas West / Roncesvalles · {STORE_NAP.ageLine}
            </p>
            <div className={styles.brandBadge}>
              {STORE_NAP.hoursLabel}
            </div>
            <div className={styles.homeMenuActions} aria-label="Choose a Kensington Green menu">
              <Link href="/exotic-weed" className={styles.homeMenuCta}>STORE MENU</Link>
              <Link href="/weed-delivery-toronto" className={`${styles.homeMenuCta} ${styles.homeDeliveryCta}`}>Explore Weed Delivery</Link>
              <Link href="/visit" className={`${styles.homeMenuCta} ${styles.homeVisitCta}`}>How to get here</Link>
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

      <WeedDiscoveryModule />

      {/* -- FEATURED PRODUCTS -- */}
      <section className={styles.featuredSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Featured Strains</h2>
            <p className={styles.sectionSubtitle}>
              Featured menu listings from the current product source. Names
              below are crawlable starting points, not a live stock promise.
            </p>
          </div>

          <noscript>
            <ul>
              {featuredStrains.map((strain) => (
                <li key={strain.sku}>
                  {strain.name} — {strain.tier}
                </li>
              ))}
            </ul>
          </noscript>

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
              A Dundas West / Roncesvalles walk-in — {STORE_NAP.hoursLabel}
            </h2>
            <p className={styles.seoPanelText}>
              Kensington Green is the walk-in cannabis shop at{" "}
              <strong>{STORE_NAP.addressLine}</strong>, on the Dundas West /
              Roncesvalles pinch where High Park South leans toward the
              Parkdale edge. This is not a generic downtown counter and it is
              not a city-wide delivery warehouse. It is a late-night storefront
              for adults 19+ already moving along Dundas Street West, cutting
              over from Roncesvalles Village, or walking up from Sorauren and
              the side streets that feed the corridor.
            </p>
            <p className={styles.seoPanelText}>
              The nearest named intersection is Dundas Street West and
              Roncesvalles Avenue / Howard Park. From Roncesvalles Village you
              stay on Dundas a short stretch; from High Park you come east
              along Dundas; from the Parkdale edge you work north toward Dundas
              rather than hunting a Queen Street address. Dundas West Station
              on Line 2, with GO and UP Express connections, sits farther north
              toward Bloor — a walkable planning landmark, not a claim that the
              door is inside the station. The 505 Dundas streetcar runs the
              street itself. The 504 King car serves Roncesvalles Village a few
              blocks south. Check current TTC service before you travel. Full
              how-to-reach notes, parking caveats, and a map live on the{" "}
              <Link href="/visit">visit page</Link>.
            </p>
            <p className={styles.seoPanelText}>
              Evening street parking on Dundas West and nearby residential
              streets is the usual pattern. Signs and restrictions change by
              block and by hour, so read the post, not a screenshot. If you are
              driving at peak dinner or late-night weekend times, give yourself
              a loop around Sorauren, Indian Road, or Howard Park rather than
              idling on the streetcar tracks.
            </p>
            <p className={styles.seoPanelText}>
              Walk-ins do not need an appointment. Bring government-issued photo
              ID that proves you are 19 or older. The counter accepts debit and
              cash. Store hours are daily from 10:00 AM to 02:00 AM — the late
              close is for this Dundas West pin, not a Toronto-wide slogan. The
              public menu is split into flower tiers and format categories
              (pre-rolls, edibles, vapes, concentrates, accessories,
              cigarettes). Those pages are for browsing names and posted
              details before you visit. They are not a live inventory feed. If
              one exact item is the reason for the trip, call{" "}
              <a href={`tel:${STORE_NAP.phoneIntl}`}>{STORE_NAP.phoneDisplay}</a>{" "}
              during listed hours.
            </p>
            <p className={styles.seoPanelText}>
              Delivery, when you use it, is a{" "}
              <Link href="/weed-delivery-toronto">separate URL</Link> with its
              own neighbourhood scope. Do not treat Kensington Green as a
              stand-in for Junction, Queen West, or King West shops. This pin
              owns Dundas West and Roncesvalles.
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
                {STORE_NAP.streetAddress}
                <br />
                {STORE_NAP.addressLocality}, {STORE_NAP.addressRegion}{" "}
                {STORE_NAP.postalCode}
                <br />
                <a href={`tel:${STORE_NAP.phoneIntl}`}>{STORE_NAP.phoneDisplay}</a>
              </p>
            </div>
            <div className={styles.storeCard}>
              <h3 className={styles.storeCardTitle}>Hours</h3>
              <p className={styles.storeCardText}>
                Open 7 Days a Week
                <br />
                <span className={styles.storeHighlight}>
                  {STORE_NAP.hoursLabel}
                </span>
              </p>
            </div>
            <div className={styles.storeCard}>
              <h3 className={styles.storeCardTitle}>Walk In</h3>
              <p className={styles.storeCardText}>
                No appointment needed · {STORE_NAP.ageLine}
                <br />
                <span className={styles.storeHighlight}>
                  Dundas West and Roncesvalles
                </span>
                <br />
                <Link href="/visit">How to get here</Link>
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
