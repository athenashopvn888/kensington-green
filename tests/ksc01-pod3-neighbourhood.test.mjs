import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const layout = fs.readFileSync("app/layout.tsx", "utf8");
const nap = fs.readFileSync("app/lib/storeNap.ts", "utf8");
const home = fs.readFileSync("app/page.tsx", "utf8");
const visit = fs.readFileSync("app/visit/page.tsx", "utf8");
const navbar = fs.readFileSync("app/components/Navbar.tsx", "utf8");
const footer = fs.readFileSync("app/components/Footer.tsx", "utf8");
const ownerPage = fs.readFileSync("app/weed-dispensary-toronto/page.tsx", "utf8");
const deliveryPage = fs.readFileSync("app/weed-delivery-toronto/page.tsx", "utf8");
const deliveryCatalog = fs.readFileSync("app/delivery/DeliveryCatalog.tsx", "utf8");
const sitemap = fs.readFileSync("app/sitemap.ts", "utf8");
const nextConfig = fs.readFileSync("next.config.ts", "utf8");
const faq = fs.readFileSync("app/faq/page.tsx", "utf8");

test("CannabisStore schema uses the FMD NAP and www host", () => {
  assert.match(layout, /cannabisStoreJsonLd/);
  assert.match(nap, /"@type": "CannabisStore"/);
  assert.match(nap, /telephone: nap\.phoneIntl/);
  assert.match(nap, /phoneIntl: "\+12895149520"/);
  assert.match(nap, /streetAddress: "2257 Dundas St W"/);
  assert.match(nap, /postalCode: "M6R 1X6"/);
  assert.match(nap, /origin: "https:\/\/www\.kensingtongreencannabis\.com"/);
  assert.match(nap, /hoursOpens: "10:00"/);
  assert.match(nap, /hoursCloses: "02:00"/);
  assert.doesNotMatch(nap, /additionalType/);
});

test("homepage FAQPage JSON-LD mirrors visible FAQs and corridor copy", () => {
  assert.match(home, /faqPageJsonLd\(HOME_FAQS\)/);
  assert.match(nap, /What are the hours for Kensington Green on Dundas West\?/);
  assert.match(home, /LOCAL_FAQS = HOME_FAQS/);
  assert.match(home, /Kensington Green \| Dundas West Cannabis Dispensary/);
  assert.doesNotMatch(home, /electrifying menu|Toronto's local cannabis stop/i);
  assert.doesNotMatch(home, /416-402-5263|4164025263/);
  assert.match(home, /welcome_banner_dundas_west/);
  assert.match(home, /pickFeaturedStrains/);
});

test("/visit is a how-to-reach page with transit, parking, and full NAP", () => {
  assert.match(visit, /How to Get to Kensington Green on Dundas West/);
  assert.match(visit, /505 Dundas/);
  assert.match(visit, /Evening street parking/);
  assert.match(visit, /2257 Dundas St W/);
  assert.match(visit, /M6R 1X6/);
  assert.match(visit, /\+1 \(289\) 514-9520/);
  assert.match(visit, /Adults 19\+/);
  assert.match(visit, /mapEmbedUrl/);
  assert.match(visit, /faqPageJsonLd\(VISIT_FAQS\)/);
  assert.match(navbar, /href: "\/visit"/);
  assert.match(footer, /href="\/visit"/);
});

test("/location aliases to /visit", () => {
  assert.match(nextConfig, /source: "\/location", destination: "\/visit", permanent: true/);
});

test("city owner and delivery URLs are demoted or neighbourhood-scoped", () => {
  assert.match(ownerPage, /index: false/);
  assert.match(ownerPage, /canonical: `\$\{STORE_NAP\.origin\}\/visit`/);
  assert.match(sitemap, /\$\{BASE\}\/visit/);
  assert.match(sitemap, /priority: 0\.2/);
  assert.match(deliveryPage, /Dundas West Cannabis Delivery/);
  assert.match(deliveryCatalog, /Cannabis Delivery for Dundas West/);
  assert.match(deliveryCatalog, /Parkdale edge/);
  assert.doesNotMatch(deliveryCatalog, /<h1>Weed Delivery in Toronto<\/h1>/);
  assert.match(deliveryCatalog, /<noscript>/);
});

test("header, footer, and schema share the same phone and address", () => {
  assert.match(navbar, /STORE_NAP\.streetAddress/);
  assert.match(navbar, /STORE_NAP\.phoneIntl/);
  assert.match(footer, /nap\.streetAddress/);
  assert.match(footer, /nap\.phoneDisplay/);
  assert.match(layout, /nap\.phoneDisplay/);
});

test("adults 19+ and no medical claims in the new catch-up surfaces", () => {
  assert.match(visit, /Adults 19\+/);
  assert.match(home, /adults 19\+/i);
  assert.doesNotMatch([visit, home, faq].join("\n"), /treats anxiety|medical marijuana|prescrib/i);
});
