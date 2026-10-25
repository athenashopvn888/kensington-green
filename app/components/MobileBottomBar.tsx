"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FULL_NAME_NAP } from "../lib/fullNameNap";
import { hideMobileBottomBar } from "../lib/mobileBottomBar";
import { STORE_NAP } from "../lib/storeNap";
import { STORE_OPENING_HOURS, storeHoursStatus } from "../lib/storeHoursStatus";
import styles from "./MobileBottomBar.module.css";

const OPENING_HOURS = [
  {
    dayOfWeek: STORE_OPENING_HOURS[0].dayOfWeek,
    opens: STORE_NAP.hoursOpens,
    closes: STORE_NAP.hoursCloses,
  },
] as const;

/**
 * Mobile-only sticky actions. Directions uses this store's Google Business Profile pin.
 * Hours copy is computed in America/Toronto from STORE_NAP opening hours.
 */
export default function MobileBottomBar() {
  const pathname = usePathname();
  const hidden = hideMobileBottomBar(pathname);
  const [status, setStatus] = useState(() => storeHoursStatus(new Date(), OPENING_HOURS));

  useEffect(() => {
    const update = () => setStatus(storeHoursStatus(new Date(), OPENING_HOURS));
    update();
    const id = window.setInterval(update, 30_000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    document.documentElement.toggleAttribute("data-hide-mobile-action-bar", hidden);
    return () => document.documentElement.removeAttribute("data-hide-mobile-action-bar");
  }, [hidden]);

  if (hidden) return null;

  return (
    <nav
      className={styles.bar}
      aria-label="Store actions"
      data-mobile-bottom-bar=""
      data-hours-kind={status.kind}
      suppressHydrationWarning
    >
      <a
        className={`${styles.action} ${styles.directions}`}
        href={FULL_NAME_NAP.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Directions
      </a>
      <Link className={`${styles.action} ${styles.hours}`} href="/hours">
        <span className={styles.srOnly}>Hours. </span>
        <span className={styles.hoursLabel} suppressHydrationWarning>
          {status.label}
        </span>
      </Link>
      <Link className={`${styles.action} ${styles.minor}`} href="/exotic-weed">
        Menu
      </Link>
      <Link className={`${styles.action} ${styles.minor}`} href="/weed-delivery-toronto">
        Delivery
      </Link>
    </nav>
  );
}
