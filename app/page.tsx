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
import { allFlowers, TIER_CONFIG, type FlowerProduct } from "./lib/products";
import {
  formatAsLowAsAfterPromos,
  formatBoardDealLine,
} from "./lib/flowerDeals";
import {
  HOME_DELIVERY_CARDS,
  HOME_DELIVERY_FAQS,
  HOME_DELIVERY_H2,
  HOME_DELIVERY_PARAGRAPHS,
} from "./lib/homeDelivery";
import { HOME_FAQS, HOME_H1, STORE_NAP, faqPageJsonLd } from "./lib/storeNap";
import Papa from "papaparse";
import { useLiveFlowers } from "./lib/useLiveMenu";
import { storeTierRange, tierRangeText } from "./lib/tierPriceRanges";

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
    key: "EXOTIC",
    name: "EXOTIC WEED",
    slug: "exotic-weed",
    price: "$10-$12/g",
    banner: "/banners/exotics_banner.webp",
    className: styles.bentoExotic,
  },
  {
    key: "PREMIUM",
    name: "PREMIUM WEED",
    slug: "premium-weed",
    price: "$7-$10/g",
    banner: "/banners/premium_banner.webp",
    className: styles.bentoPremium,
  },
  {
    key: "AAA+",
    name: "AAA+ WEED",
    slug: "aaa-weed",
    price: "$5-$6/g",
    banner: "/banners/aaa_plus_banner.webp",
    className: styles.bentoTile,
  },
  {
    key: "AA",
    name: "AA WEED",
    slug: "aa-weed",
    price: "$4/g",
    banner: "/banners/aa_banner.webp",
    className: styles.bentoTile,
  },
  {
    key: "BUDGET",
    name: "BUDGET WEED",
    slug: "budget-weed",
    price: "$3/g",
    banner: "/banners/budget_banner.webp",
    className: styles.bentoTile,
  },
  {
    key: null,
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
    name: "Nicotine Vape",
    slug: "items/vapes",
    banner: "/banners/ksc-real/category-vape-pens.webp",
  },
  {
    name: "THC Vape",
    slug: "items/vape-disposables",
    banner: "/banners/02_Vape_Disposable.webp",
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
  const __liveFlowers = useLiveFlowers();
  const feedFlowers = __liveFlowers.length > 0 ? __liveFlowers : allFlowers;
  const featuredStrains = pickFeaturedStrains(feedFlowers);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [reviewsStats, setReviewsStats] = useState<ReviewStats | null>(null);
  const [reviewsLoading, setReviewsLoading] = useState(true);
  const [welcomeBannerError, setWelcomeBannerError] = useState(false);
  const welcomeBannerSrc: string = "/banners/welcome_banner_dundas_west.webp";
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
      <JsonLd data={faqPageJsonLd([...HOME_DELIVERY_FAQS, ...HOME_FAQS])} />
      {/* -- NAVBAR — fixed under the delivery bar, flush to the top of the viewport -- */}
      <Navbar />
      <FleetAnnouncementBanner />

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
            <p className={styles.heroEyebrow}>
              <svg className={styles.heroEyebrowIcon} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path fill="currentColor" d="M3 6.5A2.5 2.5 0 0 1 5.5 4h8.2a2.5 2.5 0 0 1 2.3 1.5H20a1 1 0 0 1 1 1V16a2.5 2.5 0 0 1-2.5 2.5h-.17a3 3 0 0 1-5.66 0H10.3a3 3 0 0 1-5.66 0H4.5A2.5 2.5 0 0 1 2 16V8.5A2.5 2.5 0 0 1 3 6.5Zm2.5-.5a.5.5 0 0 0-.5.5V15h.17a3 3 0 0 1 2.66-1.5c.98 0 1.84.47 2.4 1.2L14 8.5V6h-8.5ZM16 8v3h3.2l-1.6-3H16Zm1.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-9 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
              </svg>
              Delivery & Retail in Dundas West
            </p>
            <h1 className={styles.brandTitle}>{HOME_H1}</h1>
            <p className={styles.brandSub}>
              Walk-in on Dundas West / Roncesvalles · {STORE_NAP.ageLine}
            </p>
            <p className={styles.heroLead}>
              Shop for fast, discreet local delivery in Dundas West, or visit the dispensary.
            </p>
            <div className={styles.homeMenuActions} aria-label="Choose a Kensington Green menu">
              <Link href="/exotic-weed" className={`${styles.homeMenuCta} ${styles.homeMenuPrimary}`}>STORE MENU</Link>
              <Link href="/delivery" className={`${styles.homeMenuCta} ${styles.homeDeliverySecondary}`}>Delivery</Link>
              <Link href="/weed-delivery-toronto" className={`${styles.homeMenuCta} ${styles.homeDeliveryCta}`}>Explore Weed Delivery</Link>
              <Link href="/visit" className={`${styles.homeMenuCta} ${styles.homeVisitCta}`}>How to get here</Link>
            </div>
            <div className={styles.brandBadge}>
              {STORE_NAP.hoursLabel}
            </div>
          </div>

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
                <p className={styles.welcomeBannerNap}>
                  {STORE_NAP.addressLine} ·{" "}
                  <a href={`tel:${STORE_NAP.phoneIntl}`}>{STORE_NAP.phoneDisplay}</a>{" "}
                  · {STORE_NAP.hoursLabel} · {STORE_NAP.ageLine}
                </p>
              </div>
            </section>
          )}

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

          {/* Bento Grid */}
          <p className="price-rule-notice">IN-STORE PRICES ONLY. These prices do not apply to delivery orders. Delivery has its own prices. Why? <Link href="/faq#delivery-price-rule">See the FAQ</Link></p>
          <div className={styles.bentoGrid}>
            {BENTO_TIERS.map((tier) => { const rangeLine = tier.key ? tierRangeText(storeTierRange(feedFlowers, tier.key)) : null; return (
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
                  {tier.key ? (rangeLine ? <span className={styles.bentoPrice}><span className="price-scope-label">In-store price</span>{rangeLine}</span> : null) : <span className={styles.bentoPrice}>{tier.price}</span>}
                </div>
              </Link>
            ); })}
          </div>
        </div>
      </section>

      <section
        className={styles.deliverySection}
        id="dundas-west-weed-delivery"
        aria-labelledby="home-delivery-heading"
      >
        <div className={styles.container}>
          <div className={styles.deliveryPanel}>
            <h2 id="home-delivery-heading" className={styles.deliveryTitle}>
              {HOME_DELIVERY_H2}
            </h2>
            {HOME_DELIVERY_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph} className={styles.deliveryText}>
                {paragraph}
              </p>
            ))}
            <div className={styles.deliveryCards}>
              {HOME_DELIVERY_CARDS.map((card) => (
                <Link key={card.href} href={card.href} className={styles.deliveryCard}>
                  <strong>{card.title}</strong>
                  <span>{card.text}</span>
                </Link>
              ))}
            </div>
            <h3 className={styles.deliveryFaqTitle}>Weed delivery questions</h3>
            {HOME_DELIVERY_FAQS.map((faq) => (
              <details key={faq.q} className={styles.faqItem}>
                <summary className={styles.faqQuestion}>{faq.q}</summary>
                <p className={styles.faqAnswer}>{faq.a}</p>
              </details>
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
            <div className={styles.boardDeals}>
              <p className={styles.boardDealsHook}>Flower deals same as in-store</p>
              <ul className={styles.boardDealList}>
                {(["AAA+", "PREMIUM", "EXOTIC"] as const).map((key) => {
                  const tier = TIER_CONFIG[key];
                  const deal3 = tier.deal3g;
                  const deal6 = tier.deal6g;
                  if (!deal3 || !deal6) return null;
                  return (
                    <li key={key}>
                      <Link href={`/${tier.slug}`}>
                        <strong>{tier.name}</strong>
                        <span className={styles.boardDealFloor}>
                          {formatAsLowAsAfterPromos(deal6.price, deal6.grams)}
                        </span>
                        <span>{formatBoardDealLine(deal3)}</span>
                        <span>{formatBoardDealLine(deal6)}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
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
              cash. The store is open 24 hours daily — the late
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
