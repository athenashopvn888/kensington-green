import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import {
  HOME_DELIVERY_CARDS,
  HOME_DELIVERY_FAQS,
  HOME_DELIVERY_PARAGRAPHS,
} from "../app/lib/homeDelivery.ts";
import { HOME_H1, HOME_PAGE_TITLE, HOME_SCHEMA_NAME, HOME_TITLE } from "../app/lib/storeNap.ts";

const page = fs.readFileSync("app/page.tsx", "utf8");
const home = fs.readFileSync("app/HomePageClient.tsx", "utf8");
const globals = fs.readFileSync("app/globals.css", "utf8");

test("homepage H1, title, and schema use the locked Cannabis Dispensary phrase", () => {
  const locked = "Kensington Green Cannabis Dispensary - Weed Delivery in Dundas West";
  const layout = fs.readFileSync("app/layout.tsx", "utf8");
  assert.equal(HOME_H1, locked);
  assert.equal(
    HOME_PAGE_TITLE,
    "Kensington Green Cannabis Dispensary near me | Weed Delivery | Dundas West",
  );
  assert.equal(
    HOME_TITLE,
    "Kensington Green Cannabis Dispensary Weed Delivery | Dundas West",
  );
  assert.equal(HOME_SCHEMA_NAME, "Kensington Green Cannabis Dispensary Weed Delivery");
  assert.match(page, /title:\s*\{\s*absolute:\s*HOME_PAGE_TITLE\s*\}/);
  assert.match(home, /title=\{HOME_H1\}/);
  assert.doesNotMatch(page, /Weed Delivery & Dispensary/);
  assert.doesNotMatch(page, /Cannabis Delivery & Dispensary/);
  assert.match(layout, /default:\s*HOME_TITLE/);
  assert.match(layout, /title:\s*HOME_PAGE_TITLE/);
  assert.match(layout, /name: HOME_SCHEMA_NAME/);
});

test("hero keeps gold STORE MENU and secondary Delivery without dropping URLs", () => {
  assert.match(page, /href="\/exotic-weed" className=\{`\$\{styles\.homeMenuCta\} \$\{styles\.homeMenuPrimary\}`\}>STORE MENU/);
  assert.match(page, /href="\/delivery" className=\{`\$\{styles\.homeMenuCta\} \$\{styles\.homeDeliverySecondary\}`\}>Delivery/);
  assert.match(page, /href="\/weed-delivery-toronto"/);
  assert.match(page, /href="\/visit"/);
});

test("delivery body is local, with on-page FAQs and existing-url cards", () => {
  assert.ok(HOME_DELIVERY_FAQS.length >= 5 && HOME_DELIVERY_FAQS.length <= 8);
  assert.ok(HOME_DELIVERY_CARDS.length >= 3 && HOME_DELIVERY_CARDS.length <= 6);
  const allowed = /^\/(?:weed-delivery-toronto|delivery|faq|info\/[a-z0-9-]+)$/;
  for (const card of HOME_DELIVERY_CARDS) {
    assert.match(card.href, allowed, card.href);
  }
  const copy = [
    ...HOME_DELIVERY_PARAGRAPHS,
    ...HOME_DELIVERY_FAQS.flatMap((faq) => [faq.q, faq.a]),
    ...HOME_DELIVERY_CARDS.flatMap((card) => [card.title, card.text]),
  ].join(" ");
  assert.match(copy, /Dundas West/);
  assert.match(copy, /Roncesvalles/);
  assert.match(copy, /Parkdale edge/);
  assert.match(copy, /10:00 a\.m\. to 10:00 p\.m\./);
  assert.doesNotMatch(copy, /Junction|Queen West|King West|Scarborough|Mississauga|Brampton|Etobicoke|North York|Vaughan|Markham|farm/i);
});

test("promo banners sit below a top-flush nav and do not offset the sticky header", () => {
  const navAt = page.indexOf("<Navbar />");
  const bannersAt = page.indexOf("<FleetAnnouncementBanner />");
  assert.ok(navAt > -1 && bannersAt > navAt, "promo banners must follow the navbar");
  assert.match(globals, /body\s*>\s*\.deliveryAnnouncement\s*~\s*\*\s*nav\s*\{[^}]*top:\s*var\(--delivery-announcement-height\)\s*!important;/s);
  assert.doesNotMatch(globals, /#main-nav\s*\{[^}]*fleet-homepage-announcement-height/s);
  assert.match(globals, /\[data-fleet-homepage-announcement\]\s*\{[^}]*margin-top:\s*var\(--homepage-nav-clearance\)/s);
});
