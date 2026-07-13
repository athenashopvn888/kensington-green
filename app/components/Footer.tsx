import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Column 1 Store Description */}
          <div className={styles.col}>
            <div className={styles.brand}>KENSINGTON GREEN</div>
            <p className={styles.desc}>
              Your Local Cannabis Dispensary At 2257 Dundas St W, Toronto. Visit
              Kensington Green For Premium Flower, Edibles, Vapes &amp; More.
              Open daily: 10:00 AM - 02:00 AM.
            </p>
            <div className={styles.buttons}></div>
          </div>

          {/* Column 2 Contact Info */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Contact Info</h3>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Address:</span>
              <span>2257 Dundas St W</span>
              <span>Toronto, ON M6R 1X6</span>
              <span>Canada</span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Phone:</span>
              <span>
                <a href="tel:+14164025263" style={{ color: "inherit" }}>
                  (416) 402-5263
                </a>
              </span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Hours:</span>
              <span className={styles.highlight}>
                Open Daily: 10:00 AM - 02:00 AM
              </span>
            </div>
          </div>

          {/* Column 3 Quick Links */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Quick Links</h3>
            <nav className={styles.links}>
              <Link href="/">Home</Link>
              <Link href="/exotic">Exotic Flower</Link>
              <Link href="/premium">Premium Flower</Link>
              <Link href="/aaa">AAA+ Flower</Link>
              <Link href="/aa">AA Flower</Link>
              <Link href="/budget">Budget Flower</Link>
              <Link href="/items/edibles">Edibles</Link>
              <Link href="/items/cigarettes">Cigarettes</Link>
              <Link href="/items/vapes">Vape Pens</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/delivery">Delivery (Coming Soon)</Link>
              <Link href="/resources">Resources</Link>
              <Link href="/games">Games Arcade</Link>
              <Link href="/info/dundas-west-weed-dispensary">
                Toronto Dispensary
              </Link>
              <Link href="/info/cheap-weed-dundas-west">
                Cheap Weed Toronto
              </Link>
              <Link href="/info/native-cigarettes-dundas-west">
                Native Cigarettes
              </Link>
              <Link href="/info/weed-store-near-dundas-west">
                Dundas West Weed Store
              </Link>
              <Link href="/weed-dispensary-toronto/">
                Kensington Green Weed Dispensary in Toronto
              </Link>
              <Link href="/contact">Contact Us</Link>
              <a
                href="https://kensingtongreencannabis.com/"
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
            Please consume responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
}
