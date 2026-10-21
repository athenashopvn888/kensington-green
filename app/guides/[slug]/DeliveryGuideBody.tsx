import Link from "next/link";
import type { ReactNode } from "react";
import type { DeliveryGuideFaq } from "../../lib/deliveryGuideRegistry";
import { SHOW_CIGARETTES, isHiddenCigaretteHref, mentionsGrabba } from "../../lib/showCigarettes";
import styles from "./guide.module.css";

function hiddenDeliveryLink(label: string, href: string): boolean {
  return !SHOW_CIGARETTES && (isHiddenCigaretteHref(href) || mentionsGrabba(label) || mentionsGrabba(href));
}

function renderInline(markdown: string): ReactNode[] {
  const tokens = markdown.split(/(\*\*\[[^\]]+\]\([^)]+\)\*\*|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  const nodes: ReactNode[] = [];
  tokens.forEach((token, index) => {
    if (!token) return;
    const strongLink = token.match(/^\*\*\[([^\]]+)\]\(([^)]+)\)\*\*$/);
    if (strongLink) {
      if (hiddenDeliveryLink(strongLink[1], strongLink[2])) return;
      nodes.push(<strong key={index}><Link href={strongLink[2]}>{strongLink[1]}</Link></strong>);
      return;
    }
    const strong = token.match(/^\*\*(.+)\*\*$/);
    if (strong) {
      nodes.push(<strong key={index}>{strong[1]}</strong>);
      return;
    }
    const link = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      if (hiddenDeliveryLink(link[1], link[2])) return;
      nodes.push(<Link key={index} href={link[2]}>{link[1]}</Link>);
      return;
    }
    nodes.push(token);
  });
  return nodes;
}

export function stripDeliveryMarkdown(markdown: string) {
  return markdown.replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/^#{1,6}\s+/gm, "").replace(/\s+/g, " ").trim();
}

export default function DeliveryGuideBody({ markdown, faqs }: { markdown: string; faqs: DeliveryGuideFaq[] }) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks: ReactNode[] = [];
  let paragraph: string[] = [];
  let bullets: string[] = [];
  const flushParagraph = () => { if (paragraph.length) { blocks.push(<p key={`p-${blocks.length}`}>{renderInline(paragraph.join(" "))}</p>); paragraph = []; } };
  const flushBullets = () => { if (bullets.length) { blocks.push(<ul key={`ul-${blocks.length}`}>{bullets.map((bullet, index) => <li key={index}>{renderInline(bullet)}</li>)}</ul>); bullets = []; } };
  lines.forEach((rawLine) => {
    const line = rawLine.trim();
    if (!line) { flushParagraph(); flushBullets(); return; }
    if (line.startsWith("### ")) { flushParagraph(); flushBullets(); blocks.push(<h3 key={`h3-${blocks.length}`}>{renderInline(line.slice(4))}</h3>); return; }
    if (line.startsWith("- ")) { flushParagraph(); bullets.push(line.slice(2)); return; }
    flushBullets(); paragraph.push(line);
  });
  flushParagraph(); flushBullets();
  return <><div className={styles.body}>{blocks}</div><div className={styles.faqs}><h2>FAQ</h2>{faqs.map((faq) => <details key={faq.question}><summary>{renderInline(faq.question)}</summary><p>{renderInline(faq.answer)}</p></details>)}</div></>;
}
