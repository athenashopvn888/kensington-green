import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const seoPages = fs.readFileSync("app/lib/seoPages.ts", "utf8");
const seoTemplate = fs.readFileSync("app/info/[seoPage]/page.tsx", "utf8");
const discovery = fs.readFileSync("app/lib/weedDiscovery.ts", "utf8");
const sitemap = fs.readFileSync("app/sitemap.ts", "utf8");
const genericOwner = fs.readFileSync("app/weed-dispensary-toronto/page.tsx", "utf8");

test("24-hour Dundas West owner is factual and connected to all protected pillars", () => {
  assert.match(seoPages, /slug: "24-hour-weed-dispensary-dundas-west"/);
  assert.match(seoPages, /open 24 hours daily at 2257 Dundas St W/);
  for (const href of ["/visit", "/weed-delivery-toronto", "/info/native-cigarettes-dundas-west", "/info/nicotine-vapes-dundas-west", "/exotic-weed", "/premium-weed", "/aaa-weed", "/aa-weed", "/budget-weed"]) {
    assert.ok(seoPages.includes(`href: "${href}"`), `missing ${href}`);
  }
});

test("visible FAQs produce FAQPage JSON-LD", () => {
  assert.match(seoTemplate, /faqPageJsonLd/);
  assert.match(seoTemplate, /JsonLd data=/);
});

test("generic Toronto route remains demoted while the neighbourhood owner is promoted", () => {
  assert.match(genericOwner, /index: false/);
  assert.match(genericOwner, /canonical: `\$\{STORE_NAP\.origin\}\/visit`/);
  assert.match(sitemap, /weed-dispensary-toronto.*priority: 0\.2/);
  assert.match(discovery, /ownerPath: "\/weed-dispensary-toronto"/);
});
