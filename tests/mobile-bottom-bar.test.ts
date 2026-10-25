import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { FULL_NAME_NAP } from "../app/lib/fullNameNap.ts";
import { hideMobileBottomBar } from "../app/lib/mobileBottomBar.ts";
import { storeHoursStatus, type OpeningHoursSpec } from "../app/lib/storeHoursStatus.ts";

const layout = fs.readFileSync("app/layout.tsx", "utf8");
const globals = fs.readFileSync("app/globals.css", "utf8");
const bar = fs.readFileSync("app/components/MobileBottomBar.tsx", "utf8");
const css = fs.readFileSync("app/components/MobileBottomBar.module.css", "utf8");
const nextConfig = fs.readFileSync("next.config.ts", "utf8");
const products = fs.readFileSync("app/lib/products.ts", "utf8");
const storeNap = fs.readFileSync("app/lib/storeNap.ts", "utf8");
const hoursSource = fs.readFileSync("app/lib/storeHoursStatus.ts", "utf8");

const WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] as const;

function daily(opens: string, closes: string, days: readonly string[] = WEEK): OpeningHoursSpec[] {
  return [{ dayOfWeek: days, opens, closes }];
}

test("this store's hours read as open 24 hours in Toronto", () => {
  const opens = /hoursOpens:\s*"([^"]+)"/.exec(storeNap)?.[1];
  const closes = /hoursCloses:\s*"([^"]+)"/.exec(storeNap)?.[1];
  assert.equal(opens, "00:00");
  assert.equal(closes, "23:59");
  assert.match(hoursSource, new RegExp(`opens:\\s*"${opens}"`));
  assert.match(hoursSource, new RegExp(`closes:\\s*"${closes}"`));
  for (const iso of ["2026-01-15T15:00:00.000Z", "2026-07-15T04:30:00.000Z", "2026-10-26T03:59:00.000Z"]) {
    const status = storeHoursStatus(new Date(iso));
    assert.equal(status.kind, "always");
    assert.equal(status.label, "Open 24 hours");
  }
});

test("limited hours say open until the close, or the next open, in Toronto", () => {
  const hours = daily("09:00", "21:00");
  const sundayEvening = storeHoursStatus(new Date("2026-10-25T22:00:00.000Z"), hours);
  assert.deepEqual(sundayEvening, { kind: "open", label: "Open now · until 9 p.m." });

  const beforeOpen = storeHoursStatus(new Date("2026-10-26T12:00:00.000Z"), hours);
  assert.deepEqual(beforeOpen, { kind: "closed", label: "Closed · opens 9 a.m." });

  const afterClose = storeHoursStatus(new Date("2026-10-26T02:30:00.000Z"), hours);
  assert.equal(afterClose.kind, "closed");
  assert.equal(afterClose.label, "Closed · opens Mon 9 a.m.");

  const winterAfternoon = storeHoursStatus(new Date("2026-01-15T20:00:00.000Z"), hours);
  assert.deepEqual(winterAfternoon, { kind: "open", label: "Open now · until 9 p.m." });
});

test("overnight windows stay open past midnight and name the next open day", () => {
  const hours = daily("10:00", "02:00", ["Friday"]);
  const fridayNight = storeHoursStatus(new Date("2026-10-24T03:00:00.000Z"), hours);
  assert.deepEqual(fridayNight, { kind: "open", label: "Open now · until 2 a.m." });

  const saturdayEarly = storeHoursStatus(new Date("2026-10-24T05:00:00.000Z"), hours);
  assert.deepEqual(saturdayEarly, { kind: "open", label: "Open now · until 2 a.m." });

  const saturdayLater = storeHoursStatus(new Date("2026-10-24T07:00:00.000Z"), hours);
  assert.deepEqual(saturdayLater, { kind: "closed", label: "Closed · opens Fri 10 a.m." });
});

test("a split day uses the window that is actually open", () => {
  const hours: OpeningHoursSpec[] = [
    { dayOfWeek: ["Monday"], opens: "09:00", closes: "12:00" },
    { dayOfWeek: ["Monday"], opens: "14:00", closes: "18:00" },
  ];
  assert.equal(storeHoursStatus(new Date("2026-10-26T15:00:00.000Z"), hours).label, "Open now · until 12 p.m.");
  assert.equal(storeHoursStatus(new Date("2026-10-26T17:00:00.000Z"), hours).label, "Closed · opens 2 p.m.");
  assert.equal(storeHoursStatus(new Date("2026-10-26T19:30:00.000Z"), hours).label, "Open now · until 6 p.m.");
});

test("the bar is mounted on every page and only pads the body on small screens", () => {
  assert.match(layout, /import MobileBottomBar from "\.\/components\/MobileBottomBar"/);
  assert.equal(layout.match(/<MobileBottomBar \/>/g)?.length, 2);
  assert.match(globals, /--mobile-action-bar-height:\s*0px/);
  assert.match(
    globals,
    /@media \(max-width:\s*768px\)\s*\{[\s\S]*--mobile-action-bar-height:\s*calc\(68px \+ env\(safe-area-inset-bottom, 0px\)\)[\s\S]*padding-bottom:\s*var\(--mobile-action-bar-height\)/,
  );
  assert.match(globals, /html\[data-hide-mobile-action-bar\] body\s*\{[^}]*padding-bottom:\s*0/);
});

test("directions, hours, menu, and delivery fit the bar and call is absent", () => {
  assert.match(bar, /opens:\s*STORE_NAP\.hoursOpens/);
  assert.match(bar, /closes:\s*STORE_NAP\.hoursCloses/);
  assert.match(bar, /href=\{FULL_NAME_NAP\.mapsUrl\}/);
  assert.equal(FULL_NAME_NAP.mapsUrl.includes("google.com/maps"), true);
  assert.match(FULL_NAME_NAP.mapsUrl, /place_id:ChIJ6WD9QIo1K4gRuj5vJFXqyGo/);
  assert.match(bar, /href="\/hours"/);
  assert.match(bar, /href="\/exotic-weed"/);
  assert.match(bar, />\s*Menu\s*</);
  assert.match(bar, /href="\/weed-delivery-toronto"/);
  assert.match(bar, />\s*Delivery\s*</);
  assert.match(bar, />\s*Directions\s*</);
  assert.doesNotMatch(bar, /Call|tel:/);
  assert.equal(fs.existsSync("app/hours/page.tsx"), true);
  assert.equal(fs.existsSync("app/weed-delivery-toronto/page.tsx"), true);
  assert.match(products, /slug:\s*"exotic-weed"/);
  assert.match(nextConfig, /source:\s*"\/delivery",\s*destination:\s*"\/weed-delivery-toronto"/);
  assert.equal(fs.existsSync("app/delivery/page.tsx"), false);
  assert.match(css, /\.bar\s*\{[^}]*display:\s*none/);
  assert.match(css, /@media \(max-width:\s*768px\)\s*\{[^}]*position:\s*fixed/);
  assert.match(css, /bottom:\s*0/);
  assert.match(css, /minmax\(0,\s*1\.25fr\)\s+minmax\(0,\s*1\.5fr\)\s+minmax\(44px,\s*0\.72fr\)\s+minmax\(44px,\s*0\.9fr\)/);
  assert.match(css, /min-height:\s*44px/);
  assert.match(css, /min-width:\s*44px/);
  assert.match(css, /max-width:\s*100%/);
  assert.match(css, /var\(--green-dark/);
  assert.match(bar, /hideMobileBottomBar\(pathname\)/);
  assert.match(css, /\.sod-web-chat:not\(\.open\)/);
  assert.match(css, /bottom:\s*calc\(var\(--mobile-action-bar-height\) \+ 10px\)/);
});

test("the bar stays off the in-store displays", () => {
  assert.equal(hideMobileBottomBar("/tv"), true);
  assert.equal(hideMobileBottomBar("/tv2"), true);
  assert.equal(hideMobileBottomBar("/tv/extra"), true);
  assert.equal(hideMobileBottomBar("/hours"), false);
  assert.equal(hideMobileBottomBar("/weed-delivery-toronto"), false);
  assert.equal(hideMobileBottomBar("/"), false);
  assert.equal(fs.existsSync("app/tv/page.tsx"), true);
  assert.equal(fs.existsSync("app/tv2/page.tsx"), true);
});
