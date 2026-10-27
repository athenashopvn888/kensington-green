import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "./page.module.css";

const TITLE = "Cannabis Curing, Decoded: Burping, Hang Dry, Slow Cure and Other Jar Talk";
const CANONICAL = "https://www.kensingtongreencannabis.com/resources/cannabis-curing-terms-glossary";
const DESCRIPTION =
  "Menus love phrases like slow cured and hang dried, and this glossary explains what those cannabis curing words mean.";

const BODY = `# Cannabis Curing, Decoded: Burping, Hang Dry, Slow Cure and Other Jar Talk

Last checked: October 25, 2026

"Slow cured." "Hang dried." "Hand trimmed." Menus love these phrases, and most people nod along without knowing what they mean. Kensington Green, at 2257 Dundas St W, wrote this glossary for adults 19+ so the words on a card mean something. Keeping it careful: **cannabis curing** words describe process, not outcomes.

## Drying vs cannabis curing: not the same step

This is the most common mix-up.

- **Drying** removes most of the water from freshly harvested plants. It usually takes days.
- **Curing** comes after drying. The flower rests in sealed containers so remaining moisture evens out slowly. It usually takes weeks.

Drying is about getting water out. Cannabis curing is about patience after that.

## The glossary

**Hang dry**: whole branches or plants hung upside down in a controlled room. This is a drying method, not a cure.

**Rack dry**: trimmed buds laid on mesh racks. Also a drying method.

**Wet trim / dry trim**: whether leaves are trimmed before drying (wet) or after (dry). A trimming choice, not a grade.

**Hand trimmed / machine trimmed**: who or what did the trimming. Describes labour, not quality on its own.

**Burping**: opening curing jars briefly to let built-up moisture and air escape, then closing them again. Common in small-batch curing.

**Slow cure**: a longer curing period. It's a process description. How long "slow" is varies by producer.

**Cold cure**: curing at cooler temperatures. Again, a method label.

**Humidity packs**: small two-way packs some people store with flower to hold a set humidity. An accessory, not a cure method.

## What cannabis curing words do and don't tell you

**They do tell you:** something about how the producer handled the flower after harvest.

**They don't tell you:**
- Total THC or Total CBD (that's on the label)
- Anything about effects
- How the flower compares to another jar

A "slow cured" sticker is a story about process. The legal label gives you the facts: class, net weight, Total THC and Total CBD, lot number and packaging date.

## Why the packaging date still matters

Curing happens before packaging. After that, time and storage take over. Check the packaging date, then keep flower sealed, cool, dark and away from kids and pets.

## Cannabis curing words you'll see on a menu card

Some phrases show up again and again. Here's what each one claims, and what it doesn't.

| Phrase | What it claims | What it doesn't |
|---|---|---|
| "Slow cured" | A longer curing period | A specific number of weeks |
| "Hang dried" | Whole branches dried hanging | Anything about the cure |
| "Hand trimmed" | Trimmed by people | A grade |
| "Small batch" | A limited production run | A quality standard |
| "Jar cured" | Cured in sealed containers | Freshness today |

None of these are defined by law. They're producer language. That's not a reason to ignore them, just a reason to read them as process notes.

## Why the step order matters

Think of it as a timeline:

1. **Harvest**: plants are cut.
2. **Trim**: wet or dry, depending on the method.
3. **Dry**: most water leaves the flower.
4. **Cure**: flower rests in sealed containers.
5. **Package**: the packaging date gets printed.
6. **Storage**: everything after that is up to time and conditions.

Steps 1 to 4 happen before you ever see the product. Step 5 is on the label. Step 6 is on you.

## This is curing, not storage

People sometimes say they're "curing" flower at home by keeping it in a jar. That's really storage. Curing is a post-harvest production step. Once flower is packaged and labelled, the goal is simply to keep it the way it arrived: sealed, cool, dark and dry.

## What cannabis curing language doesn't replace

Even the most detailed curing story doesn't replace the required label lines: class, net weight, Total THC and Total CBD, lot number, packaging date, storage conditions and the health warning. If a curing claim and a label line ever seem to disagree, the label is the regulated document.

## Questions we hear

**Does "slow cured" mean a set number of weeks?** No. There's no legal definition.

**Is hang drying better than rack drying?** They're different methods. We don't rank them.

**Can I tell how flower was cured by looking at it?** Not reliably. Ask, and read the label.

## Keep reading

Planning a stop? See our [visit page](/visit), and store details are on our [Toronto weed dispensary](/weed-dispensary-toronto) page.

Cannabis curing in one line: drying removes water, curing rests the flower, and the glossary words describe how, not how good. Kensington Green is for adults 19 and over. Staff ask for ID from anyone who looks under 25.
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
  datePublished: "2026-10-27",
  dateModified: "2026-10-27",
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
  throw new Error("Glossary H1 does not match the title tag.");
}

export default function CannabisCuringTermsGlossaryPage() {
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
