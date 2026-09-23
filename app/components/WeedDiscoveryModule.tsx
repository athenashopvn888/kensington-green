import Link from "next/link";
import styles from "./WeedDiscoveryModule.module.css";
import { weedOwner as store } from "../lib/weedDiscovery";

export function WeedDiscoveryModule() {
  const cards = [
    { href: "/info/dundas-west-weed-dispensary", title: "Dundas West Weed Dispensary", text: "Store-focused guidance for the Dundas West and Roncesvalles corridor." },
    { href: "/info/24-hour-weed-dispensary-dundas-west", title: "Open 24 Hours", text: "Plan a late-night or early-morning walk-in at the Dundas West storefront." },
    { href: "/weed-delivery-toronto", title: "Weed Delivery", text: "Review the separate neighbourhood delivery guide and its current service details." },
    { href: "/info/native-cigarettes-dundas-west", title: "Native Cigarettes", text: "Read the Dundas West cigarette guide, then check the current menu before visiting." },
    { href: "/info/nicotine-vapes-dundas-west", title: "Nicotine Vapes", text: "Compare adult nicotine-vape formats and confirm current details in the category." },
    { href: "/visit", title: "Visit Kensington Green", text: "Find the address, phone, transit notes and parking guidance in one place." },
  ];
  return (
    <section className={styles.section} aria-labelledby="weed-discovery-title">
      <div className={styles.inner}>
        <p className={styles.kicker}>{store.hoursLabel ? `${store.hoursLabel} · Adults 19+` : "Adults 19+"}</p>
        <h2 id="weed-discovery-title">{store.home.title}</h2>
        <p>{store.home.text}</p>
        <div className={styles.cardGrid}>
          {cards.map((card) => (
            <Link href={card.href} className={styles.card} key={card.href}>
              <strong>{card.title}</strong>
              <span>{card.text}</span>
            </Link>
          ))}
        </div>
        <div className={styles.actions}>
          <Link href="/visit" className={styles.primary}>{store.home.primaryLabel}</Link>
          <Link href={store.home.secondaryHref} className={styles.secondary}>{store.home.secondaryLabel}</Link>
        </div>
      </div>
    </section>
  );
}
