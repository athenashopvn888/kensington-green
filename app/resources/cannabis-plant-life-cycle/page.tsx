import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "./page.module.css";

const TITLE = "The Cannabis Plant Life Cycle: From Seed to Jar, Stage by Stage";
const CANONICAL = "https://www.kensingtongreencannabis.com/resources/cannabis-plant-life-cycle";
const DESCRIPTION =
  "Understanding the cannabis plant life cycle makes a lot of shop talk click.";

const BODY = `# The Cannabis Plant Life Cycle: From Seed to Jar, Stage by Stage

Last checked: October 27, 2026

That bud in the jar is the very last chapter of a long story. Before it was flower, it was a sprout. Before that, a seed or a cutting. Understanding the cannabis plant life cycle makes a lot of shop talk click: "veg," "flower week," "harvest," "cure." Kensington Green, at 2257 Dundas St W, walks adults 19+ through each stage. This is a vocabulary guide, not a grow manual, and we'll flag what each stage does and doesn't tell you.

## The cannabis plant life cycle in one table

| Stage | What's happening | Words you'll hear |
|---|---|---|
| 1. Start | A seed sprouts, or a cutting roots | Germination, "pop," clone, cut |
| 2. Seedling | First small leaves form | Seedling, cotyledons |
| 3. Vegetative | The plant builds stems, branches and leaves | "Veg," canopy |
| 4. Flowering | Buds form and fill out | "Flower," "flip," pistils, trichomes |
| 5. Harvest | The plant is cut | Chop, harvest |
| 6. Dry | Moisture leaves the plant material | Hang dry, rack dry |
| 7. Cure | Dried flower rests under controlled conditions | Cure, burp |
| 8. Package | Flower is trimmed, weighed, sealed and labelled | Packaging date |

Stages 1 to 5 happen to a living plant. Stages 6 to 8 happen to harvested material.

## Stage 1: the start

A cannabis plant begins one of two ways. It can **germinate from a seed**, with a root pushing out first. Or it can start as a **cutting** taken from another plant and coaxed to grow roots. Seed means new genetics. Cutting means a copy of the plant it came from.

## Stage 2: seedling

The first leaves to open on a seedling are simple, rounded ones called cotyledons. They're not the famous serrated leaves. Those come next, as the plant's "true" leaves start to form. This stage is fragile: a seedling is small and easily stressed.

## Stage 3: vegetative growth ("veg")

This is the building phase. The plant puts its energy into stems, branches and big fan leaves, the leaves that catch light. Growers shape the plant here so the canopy is even. No buds yet. This is growth, not flowering.

## Stage 4: flowering

Here's where the buds come in. For most cannabis, flowering is triggered by shorter days, or indoors by a change in the light schedule (growers call that "the flip"). Some plants, called autoflowers, start flowering based on age instead.

During flowering you'll see:

- **Pistils:** the hair-like strands on the flower, often white at first and changing colour as the flower matures.
- **Trichomes:** the tiny resin glands that give buds their frosty look.
- **Calyxes stacking up** into the buds people recognise.

## Stage 5: harvest

The plant is cut down. Growers decide when based on how the flowers have developed. Once cut, the plant stops growing, and the rest of the story is handling.

## Stage 6: drying

Fresh-cut plant material is full of water. Drying lets that moisture leave slowly, usually with branches hung or laid on racks. Drying too fast or too slow can affect the finished flower's texture and condition.

One exception: some harvested material skips drying entirely and is frozen right away for extraction. That's what "fresh frozen" refers to.

## Stage 7: curing

Curing is what happens after drying: the flower is stored under controlled conditions so remaining moisture evens out through each bud. "Burping" is slang for briefly opening cure containers to let air exchange. This is a production step, not something the label describes.

## Stage 8: trim, package, label

Buds are trimmed (either before or after drying), weighed and sealed. The label carries the product class, Total THC, Total CBD, net weight and the packaging date. That date is the closest the label gets to telling you where the flower is in its own timeline.

## What the life cycle does and doesn't tell you

**Does:** explain where words like veg, flower, cure and fresh frozen come from.

**Doesn't:**
- Give you THC numbers. Only Total THC and Total CBD on a legal label do that.
- Show up on the label, beyond the packaging date.
- Rank anything. A long flowering stage isn't "better" than a short one.

## Questions we hear on Dundas West

**What does "flower week" mean?** How many weeks a plant has been in its flowering stage. It's grower talk, not a label term.

**Is curing the same as drying?** No. Drying removes most of the moisture. Curing comes after, and evens out what's left.

**Can you see the life cycle in a bud?** Partly. Pistil colour and trichomes tell you a bud flowered. They don't tell you the dates.

## The bottom line

The cannabis plant life cycle runs from seed or cutting, through seedling, veg and flowering, to harvest, drying, curing and packaging. Each stage has its own vocabulary, and knowing it makes the counter conversation easier. For the facts about any product, read the label.

Planning your stop? Our [visit page](/visit) has the details, and our [Dundas West visit guide](/resources/dundas-west-visit-guide) covers the area. Kensington Green is for adults 19 and over. Bring government-issued photo ID.
`;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  robots: "index,follow",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  mainEntityOfPage: CANONICAL,
  url: CANONICAL,
  datePublished: "2026-11-03",
  dateModified: "2026-11-03",
  author: { "@type": "Organization", name: "Kensington Green" },
  publisher: { "@type": "Organization", name: "Kensington Green" },
};

type Block =
  | { type: "h"; level: number; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] };

function splitCells(line: string): string[] {
  return line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((cell) => cell.trim());
}

function isSeparator(cells: string[]): boolean {
  return cells.length > 0 && cells.every((cell) => /^:?-+:?$/.test(cell));
}

function parseBlocks(markdown: string): Block[] {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks: Block[] = [];
  let index = 0;
  while (index < lines.length) {
    const line = lines[index];
    if (!line.trim()) {
      index += 1;
      continue;
    }
    const heading = /^(#{1,4})\s+(.+)$/.exec(line);
    if (heading) {
      blocks.push({ type: "h", level: heading[1].length, text: heading[2] });
      index += 1;
      continue;
    }
    if (line.trim().startsWith("|")) {
      const tableLines: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith("|")) {
        tableLines.push(lines[index]);
        index += 1;
      }
      const parsed = tableLines.map(splitCells);
      const headers = parsed[0] ?? [];
      const rows = parsed.slice(1).filter((row) => !isSeparator(row));
      blocks.push({ type: "table", headers, rows });
      continue;
    }
    if (/^[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^[-*]\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^[-*]\s+/, ""));
        index += 1;
      }
      blocks.push({ type: "ul", items });
      continue;
    }
    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^\d+\.\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^\d+\.\s+/, ""));
        index += 1;
      }
      blocks.push({ type: "ol", items });
      continue;
    }
    blocks.push({ type: "p", text: line.trim() });
    index += 1;
  }
  return blocks;
}

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)\s]+\))/g;
  let last = 0;
  let matchIndex = 0;
  for (const match of text.matchAll(pattern)) {
    const start = match.index ?? 0;
    if (start > last) nodes.push(text.slice(last, start));
    const token = match[0];
    if (token.startsWith("**")) {
      nodes.push(<strong key={`${keyPrefix}-s-${matchIndex}`}>{token.slice(2, -2)}</strong>);
    } else {
      const link = /^\[([^\]]+)\]\(([^)\s]+)\)$/.exec(token);
      const href = link?.[2] ?? "";
      const label = link?.[1] ?? "";
      if (href.startsWith("/") && !href.startsWith("//")) {
        nodes.push(
          <Link key={`${keyPrefix}-a-${matchIndex}`} href={href}>
            {label}
          </Link>,
        );
      } else {
        nodes.push(token);
      }
    }
    last = start + token.length;
    matchIndex += 1;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

function ArticleBody({ markdown }: { markdown: string }) {
  const blocks = parseBlocks(markdown);
  return blocks.map((block, index) => {
    const key = `b-${index}`;
    if (block.type === "h") {
      const Tag = `h${block.level}` as "h1" | "h2" | "h3" | "h4";
      return <Tag key={key}>{renderInline(block.text, key)}</Tag>;
    }
    if (block.type === "ul") {
      return (
        <ul key={key}>
          {block.items.map((item, itemIndex) => (
            <li key={`${key}-${itemIndex}`}>{renderInline(item, `${key}-${itemIndex}`)}</li>
          ))}
        </ul>
      );
    }
    if (block.type === "ol") {
      return (
        <ol key={key}>
          {block.items.map((item, itemIndex) => (
            <li key={`${key}-${itemIndex}`}>{renderInline(item, `${key}-${itemIndex}`)}</li>
          ))}
        </ol>
      );
    }
    if (block.type === "table") {
      return (
        <div key={key} className={styles.tableWrap}>
          <table>
            <thead>
              <tr>
                {block.headers.map((header, headerIndex) => (
                  <th key={`${key}-h-${headerIndex}`}>{renderInline(header, `${key}-h-${headerIndex}`)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={`${key}-r-${rowIndex}`}>
                  {row.map((cell, cellIndex) => (
                    <td key={`${key}-c-${rowIndex}-${cellIndex}`}>{renderInline(cell, `${key}-c-${rowIndex}-${cellIndex}`)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    return <p key={key}>{renderInline(block.text, key)}</p>;
  });
}

const blocks = parseBlocks(BODY);
const renderedH1 = blocks.find((block): block is Extract<Block, { type: "h" }> => block.type === "h" && block.level === 1);
if (!renderedH1 || renderedH1.text !== TITLE) {
  throw new Error("Life cycle H1 does not match the title tag.");
}
if (DESCRIPTION.length > 155) {
  throw new Error("Life cycle meta description is longer than 155 characters.");
}
if (!BODY.includes("Last checked: October 27, 2026")) {
  throw new Error("Life cycle page is missing the Last checked line.");
}

export default function CannabisPlantLifeCyclePage() {
  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }}
      />
      <Navbar />
      <article className={styles.article}>
        <ArticleBody markdown={BODY} />
      </article>
      <Footer />
    </main>
  );
}
