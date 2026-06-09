import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Cannabis Blog & Guides — Kensington Green | Toronto",
  description: "Read the latest strain reviews, dosing guides, and cannabis news from Kensington Green in Toronto.",
  alternates: {
    canonical: "https://kensingtongreencannabis.com/blog",
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
