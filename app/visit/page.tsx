import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import {
  STORE_NAP,
  VISIT_FAQS,
  faqPageJsonLd,
} from "../lib/storeNap";
import styles from "./visit.module.css";

export const metadata: Metadata = {
  title: { absolute: "How to Get to Kensington Green | Dundas West & Roncesvalles" },
  description:
    "Walk-in directions for Kensington Green at 2257 Dundas St W: TTC, parking, landmarks, and 19+ ID notes for Dundas West, Roncesvalles, and the Parkdale edge. Open Daily: 10:00 AM - 02:00 AM.",
  alternates: {
    canonical: `${STORE_NAP.origin}/visit`,
  },
  openGraph: {
    title: "How to Get to Kensington Green on Dundas West",
    description:
      "Reach the walk-in shop at 2257 Dundas St W from Roncesvalles, High Park South, and the Parkdale edge. Adults 19+.",
    url: `${STORE_NAP.origin}/visit`,
  },
};

export default function VisitPage() {
  const nap = STORE_NAP;

  return (
    <main className={styles.main}>
      <JsonLd data={faqPageJsonLd(VISIT_FAQS)} />
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>
            {nap.neighborhood} · {nap.ageLine} · Walk-in
          </p>
          <h1 className={styles.heroTitle}>
            How to Get to Kensington Green on Dundas West
          </h1>
          <p className={styles.heroLead}>
            This is the walk-in reach guide for the shop at {nap.addressLine}.
            It is written for people already on the Dundas West / Roncesvalles
            spine — not for a city-wide Toronto delivery search. Hours stay{" "}
            {nap.hoursLabel}. Bring ID. Menu pages do not confirm live stock.
          </p>
          <div className={styles.napCard}>
            <strong>Address, phone, hours</strong>
            <p>
              Kensington Green
              <br />
              2257 Dundas St W
              <br />
              Toronto, ON M6R 1X6
            </p>
            <p>
              Phone:{" "}
              <a href={`tel:${nap.phoneIntl}`}>+1 (289) 514-9520</a>
            </p>
            <p>Open Daily: 10:00 AM - 02:00 AM</p>
            <p>
              Nearest intersection: {nap.intersection}. {nap.ageLine}.
            </p>
          </div>
        </div>
      </section>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2>Transit: streetcar, subway, and the walk from Roncesvalles</h2>
          <p>
            Dundas Street West is the spine. The 505 Dundas streetcar travels
            the same street as the shop, which is the most literal transit
            answer if you are already on Dundas. From Roncesvalles Village,
            you can also walk north to Dundas and turn toward 2257 — a short
            corridor hop rather than a crosstown trip.
          </p>
          <p>
            Dundas West Station on Line 2 (Bloor–Danforth), with GO Transit and
            UP Express connections, sits farther north toward Bloor. Treat it
            as a useful transfer landmark, not as the storefront. After you
            leave the station you still need the Dundas street stretch; follow
            Dundas south/east toward the Roncesvalles / Howard Park pinch
            instead of drifting onto Bloor West shops.
          </p>
          <p>
            The 504 King streetcar is the Roncesvalles Village workhorse. If
            you ride 504 to the village, finish on foot up to Dundas rather
            than assuming the King car drops you at the door. Always check
            current TTC service, construction, and night-time substitutions
            before you travel — this page is a planning sketch, not a live
            vehicle feed.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Parking on Dundas West</h2>
          <p>
            Evening street parking on Dundas Street West and the residential
            laterals is the pattern locals already use. Signs rotate by block
            and by hour. Read the post when you stop. Do not park on streetcar
            tracks or in rush-hour clearways just because a previous visit was
            easy.
          </p>
          <p>
            When the corridor is busy — dinner, weekend late night, High Park
            event spill — loop Sorauren Avenue, Indian Road, or Howard Park
            rather than circling the same Dundas frontage. There is no
            dedicated lot claimed on this page. If an exact stall matters,
            allow extra time or come by streetcar.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Landmarks on the Dundas West / Roncesvalles pinch</h2>
          <p>
            Think of the pin as the seam between Roncesvalles Village, High
            Park South, and the Parkdale edge — not as a Junction shop and not
            as a Queen West counter. Useful mental markers:
          </p>
          <ul>
            <li>Roncesvalles Avenue meeting Dundas / Howard Park</li>
            <li>High Park to the west if you are coming along Dundas</li>
            <li>Sorauren Avenue and Sorauren Park to the south</li>
            <li>The walk north toward Dundas West Station / Bloor</li>
            <li>Parkdale toward Queen, used only as an edge — this storefront faces Dundas</li>
          </ul>
          <p>
            Independent Roncesvalles storefronts and the High Park canopy sit
            close enough that a combined errand is normal. This page does not
            list sister shops and does not send you to another West End pin.
          </p>
        </section>

        <section className={styles.section}>
          <h2>What to bring (adults 19+)</h2>
          <p>
            Government-issued photo ID proving you are 19 or older is required.
            Walk-in only — no appointment. Listed in-store payments are debit
            and cash. If one exact product is the whole reason for the trip,
            call {nap.phoneDisplay} during listed hours instead of treating a
            category page as a reservation.
          </p>
          <p>
            Delivery is a different URL with its own neighbourhood radius. Use{" "}
            <Link href="/weed-delivery-toronto">the delivery page</Link> when
            you want an order brought to an address in range. Use this visit
            page when you are coming to 2257 Dundas St W yourself.
          </p>
          <div className={styles.ctaRow}>
            <Link href="/exotic-weed" className={`${styles.cta} ${styles.ctaPrimary}`}>
              Browse the walk-in menu
            </Link>
            <a
              href={`tel:${nap.phoneIntl}`}
              className={`${styles.cta} ${styles.ctaSecondary}`}
            >
              Call {nap.phoneDisplay}
            </a>
          </div>
          <p className={styles.ageNote}>{nap.ageLine}. No medical claims. Selection varies.</p>
        </section>

        <section className={styles.section}>
          <h2>Map</h2>
          <p>
            Search {nap.addressLine}. The embed below uses that same NAP
            string.
          </p>
          <div className={styles.mapWrap}>
            <iframe
              title="Map of Kensington Green at 2257 Dundas St W"
              src={nap.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2>Visit FAQs</h2>
          {VISIT_FAQS.map((faq) => (
            <details key={faq.q} className={styles.faqItem}>
              <summary className={styles.faqQuestion}>{faq.q}</summary>
              <p className={styles.faqAnswer}>{faq.a}</p>
            </details>
          ))}
        </section>
      </div>

      <Footer />
    </main>
  );
}
