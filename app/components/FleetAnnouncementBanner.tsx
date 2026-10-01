"use client";

import { useEffect, useState } from "react";
import FlowerBogoStrip from "./FlowerBogoStrip";

function isThanksgivingNoticeActive(date: Date) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Toronto",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  const value = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  const dateKey = Number(`${value.year}${value.month}${value.day}`);

  return dateKey >= 20260930 && dateKey <= 20261012;
}

export default function FleetAnnouncementBanner() {
  const [showThanksgivingNotice, setShowThanksgivingNotice] = useState(false);

  useEffect(() => {
    const updateVisibility = () =>
      setShowThanksgivingNotice(isThanksgivingNoticeActive(new Date()));

    updateVisibility();
    const timer = window.setInterval(updateVisibility, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <aside
      data-fleet-homepage-announcement=""
      aria-label="Store announcements"
    >
      {showThanksgivingNotice ? (
        <p data-thanksgiving-hours-notice="">
          Thanksgiving Monday (Oct 12): We are open regular hours.
        </p>
      ) : null}
      <FlowerBogoStrip hero />
      <p data-cigarette-deal="">
        CIGARETTE DEAL ! 2 PACK $5 MIX AND MATCH
      </p>
      <p data-bb-light-deal="">
        EXCLUSIVE SPECIAL PREMIUM GRADE BB FULL &amp; BB LIGHT!
      </p>
    </aside>
  );
}
