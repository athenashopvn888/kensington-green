import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const data = fs.readFileSync("app/resources/resourceData.ts", "utf8");
const view = fs.readFileSync("app/resources/ResourceView.tsx", "utf8");
const products = fs.readFileSync("app/lib/products.ts", "utf8");
const nextConfig = fs.readFileSync("next.config.ts", "utf8");
const sitemap = fs.readFileSync("app/sitemap.ts", "utf8");
const navbar = fs.readFileSync("app/components/Navbar.tsx", "utf8");
const footer = fs.readFileSync("app/components/Footer.tsx", "utf8");
const weedDiscovery = fs.readFileSync("app/lib/weedDiscovery.ts", "utf8");
const delivery = fs.readFileSync("app/weed-delivery-toronto/page.tsx", "utf8");
const deliveryCatalog = fs.readFileSync("app/delivery/DeliveryCatalog.tsx", "utf8");

test("Weed flower guide is a stable support page for the protected Weed owner", () => {
  assert.match(data, /slug: "weed-flower-guide"/);
  assert.match(data, /Weed & Cannabis Flower Guide Toronto \| Kensington Green/);
  assert.match(data, /href: "\/weed-dispensary-toronto"\/);
  for (const route of ["exotic", "premium", "aaa", "aa", "budget"]) {
    assert.match(data, new RegExp(`href: "\\/${route}-weed"`));
  }
  assert.match(view, /Weed Flower Guide FAQs/);
});

test("approved guide removes volatile price and bundle claims", () => {
  const guide = data.slice(data.indexOf('slug: "weed-flower-guide"'), data.indexOf('slug: "value-shopping-guide"'));
  assert.doesNotMatch(guide, /\$\d|6g|bundle|current price|promotion|availability/i);
});

test("all seven legacy URLs redirect one hop to a single compliant canonical", () => {
  const routeMap = {
    "/exotic": "/exotic-weed",
    "/premium": "/premium-weed",
    "/aaa": "/aaa-weed",
    "/aa": "/aa-weed",
    "/budget": "/budget-weed",
    "/delivery": "/weed-delivery-toronto",
    "/resources/flower-tier-map": "/resources/weed-flower-guide",
  };
  for (const [source, destination] of Object.entries(routeMap)) {
    assert.ok(nextConfig.includes(`source: "${source}", destination: "${destination}", permanent: true`));
    assert.match(destination, /weed|cannabis/);
  }
});

test("tier, delivery, sitemap, and customer links use only new Weed canonicals", () => {
  for (const tier of ["exotic", "premium", "aaa", "aa", "budget"]) {
    assert.match(products, new RegExp(`slug: "${tier}-weed"`));
    assert.match(navbar, new RegExp(`href: "\\/${tier}-weed"`));
    assert.match(footer, new RegExp(`href="\\/${tier}-weed"`));
  }
  assert.match(sitemap, /weed-delivery-toronto/);
  assert.match(weedDiscovery, /ownerPath: "\/weed-dispensary-toronto"/);
  assert.match(sitemap, /`\$\{BASE\}\/weed-dispensary-toronto`/);
  assert.match(footer, /href="\/weed-dispensary-toronto"/);
  assert.doesNotMatch([data, sitemap, footer, weedDiscovery].join("\\n"), /weed-dispensary-toronto\//);
  assert.match(delivery, /canonical: "https:\/\/www\.kensingtongreencannabis\.com\/weed-delivery-toronto"/);
  assert.match(navbar, /Weed Delivery/);
  assert.match(deliveryCatalog, /<h1>Weed Delivery in Toronto<\/h1>/);
  assert.doesNotMatch([data, navbar, footer].join("\n"), /href[:=] ["']\/(?:exotic|premium|aaa|aa|budget|delivery)["']/);
});
