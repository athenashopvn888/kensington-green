import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CODED_NAP, CODED_PAGES } from "../lib/fleet/config";
import { getFleetContent } from "../lib/fleetContent";
import styles from "./contact.module.css";

export const dynamic = "force-dynamic";

const CONTACT_METADATA: Metadata = {
  title: { absolute: "Contact Kensington Green | 2257 Dundas St W, Dundas West" },
  description:
    "Visit Kensington Green at 2257 Dundas St W, Toronto, ON M6R 1X6. Dundas West / Roncesvalles walk-in. Open 24 hours daily. Adults 19+.",
  alternates: {
    canonical: "https://www.kensingtongreencannabis.com/contact",
  },
  openGraph: {
    title: "Contact Kensington Green on Dundas West",
    description:
      "2257 Dundas St W, Toronto, ON M6R 1X6. Open 24 hours daily. Walk-in for adults 19+.",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const fleet = await getFleetContent();
  const description = fleet.pages.Contact?.metaDescription || "";
  if (!fleet.active || !description || description === CODED_PAGES.Contact.metaDescription) return CONTACT_METADATA;
  const title = fleet.pages.Contact.metaTitle;
  return {
    ...CONTACT_METADATA,
    description,
    title: title ? { absolute: title } : CONTACT_METADATA.title,
    openGraph: { ...CONTACT_METADATA.openGraph, description },
  };
}

export default async function ContactPage() {
  const fleet = await getFleetContent();
  const street = fleet.active && fleet.nap.street !== CODED_NAP.street ? fleet.nap.street : "2257 Dundas St W";
  const cityLine = fleet.active && fleet.nap.cityLine !== CODED_NAP.cityLine ? fleet.nap.cityLine : "Toronto, ON M6R 1X6";
  const areaLine = fleet.active && fleet.nap.areaLine !== CODED_NAP.areaLine ? fleet.nap.areaLine : "Dundas West and Roncesvalles";
  return (
    <main className={styles.main}>
      <Navbar />

      {/* Hero */}
      <section className={styles.hero} style={{ paddingTop: "calc(92px + var(--flower-bogo-strip-height))" }}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          <h1 className={styles.heroTitle}>Contact Kensington Green on Dundas West</h1>
          <img
            src="/banners/08_Contact_Us.webp"
            alt="Contact Us"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "var(--radius-lg)",
            }}
          />
        </div>
      </section>

      {/* Info Cards */}
      <section className={styles.infoSection}>
        <div className={styles.container}>
          <div className={styles.infoGrid}>
            {/* Location */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}></div>
              <h2 className={styles.infoTitle}>Location</h2>
              <p className={styles.infoText}>
                {street}
                <br />
                {cityLine}
                <br />
                <span className={styles.infoMuted}>
                  {areaLine}
                </span>
              </p>
            </div>

            {/* Hours */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}></div>
              <h2 className={styles.infoTitle}>Hours</h2>
              <div className={styles.hoursTable}>
                <div className={styles.hoursRow}>
                  <span>Monday</span>
                  <span className={styles.hoursTime}>Open 24 Hours</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Tuesday</span>
                  <span className={styles.hoursTime}>Open 24 Hours</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Wednesday</span>
                  <span className={styles.hoursTime}>Open 24 Hours</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Thursday</span>
                  <span className={styles.hoursTime}>Open 24 Hours</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Friday</span>
                  <span className={styles.hoursTime}>Open 24 Hours</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Saturday</span>
                  <span className={styles.hoursTime}>Open 24 Hours</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Sunday</span>
                  <span className={styles.hoursTime}>Open 24 Hours</span>
                </div>
              </div>
              <div className={styles.openBadge}>
                <div className={styles.openDot} />
                Open 24 Hours Daily
              </div>
            </div>

            {/* Walk-in */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}></div>
              <h2 className={styles.infoTitle}>Walk In</h2>
              <p className={styles.infoText}>
                No appointment needed.
                <br />
                Just walk in and our staff will
                <br />
                help you compare current menu details.
              </p>
              <div className={styles.featureList}>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}></span>
                  Flower tiers and menu categories
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}></span>
                  Current package details
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}></span>
                  Knowledgeable budtenders
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}></span>
                  Debit &amp; cash accepted
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className={styles.mapSection}></div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
