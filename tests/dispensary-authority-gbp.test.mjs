import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const data = fs.readFileSync("app/resources/resourceData.ts", "utf8");
const view = fs.readFileSync("app/resources/ResourceView.tsx", "utf8");
const sitemap = fs.readFileSync("app/sitemap.ts", "utf8");

const slug = "cannabis-dispensary-vs-weed-dispensary";
const title = "Dispensary vs Weed Dispensary | Kensington Green Toronto";
const h1 = "Why People Search “Cannabis Dispensary” and “Weed Dispensary”";
const localOwner = "/weed-dispensary-toronto";

test("KSC01 publishes one informational dispensary authority resource", () => {
  assert.match(data, new RegExp(`slug: "${slug}"`));
  assert.match(data, new RegExp(title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  assert.match(data, new RegExp(h1.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  assert.match(data, /Frequently Asked Questions/);
  assert.match(data, /cannabis dispensary near me/);
  assert.match(data, /weed dispensary near me/);
  assert.match(data, /cannabis store near me/);
});

test("resource supports but does not replace the established local owner", () => {
  const start = data.indexOf(`slug: "${slug}"`);
  const end = data.indexOf('slug: "weed-flower-guide"', start);
  const resource = data.slice(start, end);
  assert.match(resource, new RegExp(`href: "${localOwner}"`));
  assert.doesNotMatch(resource, /canonical local\/store page|visit-intent owner|SEO workflow|SEO page/i);
  assert.doesNotMatch(resource, /price|deal|stock|availability|order now|buy now/i);
  assert.equal(data.split(`href: "/resources/${slug}"`).length - 1, 1, "exactly one contextual resource backlink is required");
});

test("dynamic metadata and sitemap emit the preferred www canonical", () => {
  assert.match(view, /page\.faqHeading \|\| "Weed Flower Guide FAQs"/);
  assert.match(sitemap, /RESOURCE_PAGES\.map/);
  assert.match(sitemap, /https:\/\/www\.kensingtongreencannabis\.com/);
});
