import Link from "next/link";
import styles from "./Footer.module.css";
import { STORE_NAP } from "../lib/storeNap";

export default function Footer() {
  const nap = STORE_NAP;

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Column 1 Store Description */}
          <div className={styles.col}>
            <div className={styles.brand}>KENSINGTON GREEN</div>
            <p className={styles.desc}>
              Walk-in cannabis shop at {nap.addressLine}, on the Dundas West /
              Roncesvalles corridor. {nap.ageLine}. {nap.hoursLabel}.
            </p>
            <div className={styles.buttons}></div>
          </div>

          {/* Column 2 Contact Info */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Contact Info</h3>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Address:</span>
              <span>{nap.streetAddress}</span>
              <span>
                {nap.addressLocality}, {nap.addressRegion} {nap.postalCode}
              </span>
              <span>Canada</span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Phone:</span>
              <span>
                <a href={`tel:${nap.phoneIntl}`} style={{ color: "inherit" }}>
                  {nap.phoneDisplay}
                </a>
              </span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Hours:</span>
              <span className={styles.highlight}>{nap.hoursLabel}</span>
            </div>
          </div>

          {/* Column 3 Quick Links */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Quick Links</h3>
            <nav className={styles.links}>
              <Link href="/">Home</Link>
              <Link href="/visit">Visit / How to get here</Link>
              <Link href="/exotic-weed">Exotic Weed</Link>
              <Link href="/premium-weed">Premium Weed</Link>
              <Link href="/aaa-weed">AAA+ Weed</Link>
              <Link href="/aa-weed">AA Weed</Link>
              <Link href="/budget-weed">Budget Weed</Link>
              <Link href="/items/edibles">Edibles</Link>
              <Link href="/items/cigarettes">Cigarettes</Link>
              <Link href="/items/vapes">Vape Pens</Link>
              <Link href="/info/nicotine-vapes-dundas-west">Nicotine Vapes Dundas West</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/weed-delivery-toronto">Neighbourhood Delivery</Link>
              <Link href="/resources">Resources</Link>
              <Link href="/info/dundas-west-weed-dispensary">
                Dundas West Dispensary
              </Link>
              <Link href="/info/cheap-weed-dundas-west">
                Value Weed Dundas West
              </Link>
              <Link href="/info/native-cigarettes-dundas-west">
                Native Cigarettes
              </Link>
              <Link href="/info/weed-store-near-dundas-west">
                Dundas West Weed Store
              </Link>
              <Link href="/weed-dispensary-toronto">
                Kensington Green store notes
              </Link>
              <Link href="/contact">Contact Us</Link>
              <a
                href={nap.mapSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Maps
              </a>
            </nav>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            {new Date().getFullYear()} Kensington Green. Must be 19+ to enter.
            Please review posted store and menu information.
          </p>
        </div>
      </div>
    </footer>
  );
}
