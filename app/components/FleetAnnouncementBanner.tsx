"use client";

import { useEffect, useState } from "react";
import FlowerBogoStrip from "./FlowerBogoStrip";

const barStyle = {
  margin: 0,
  width: "100%",
  boxSizing: "border-box" as const,
  textAlign: "center" as const,
  textTransform: "uppercase" as const,
  lineHeight: 1.15,
};

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
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "auto",
        minHeight: 0,
        position: "relative",
        zIndex: 50,
      }}
    >
      {showThanksgivingNotice ? (
        <p
          data-thanksgiving-hours-notice=""
          style={{
            ...barStyle,
            padding: "5px 12px",
            background: "#166534",
            color: "#ecfdf5",
            fontSize: "clamp(12px, 2.2vw, 15px)",
            fontWeight: 700,
            letterSpacing: "0.02em",
          }}
        >
          Thanksgiving Monday (Oct 12): We are open regular hours.
        </p>
      ) : null}
      <FlowerBogoStrip hero />
      <p
        data-cigarette-deal=""
        style={{
          ...barStyle,
          padding: "12px 16px",
          background: "#facc15",
          color: "#1c1917",
          fontSize: "clamp(16px, 3.2vw, 28px)",
          fontWeight: 900,
          letterSpacing: "0.02em",
        }}
      >
        CIGARETTE DEAL ! 2 PACK $5 MIX AND MATCH
      </p>
      <p
        data-bb-light-deal=""
        style={{
          ...barStyle,
          padding: "7px 14px",
          background: "#1c1917",
          color: "#facc15",
          fontSize: "clamp(13px, 2.4vw, 20px)",
          fontWeight: 800,
          letterSpacing: "0.03em",
        }}
      >
        EXCLUSIVE SPECIAL PREMIUM GRADE BB FULL &amp; BB LIGHT!
      </p>
    </aside>
  );
}
