import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Kensington Green Cannabis Blog | Cannabis Menu Guides",
  description: "Read Kensington Green Cannabis cannabis menu guides, flower tier notes, and local store checks for Toronto shoppers.",
  alternates: {
    canonical: "https://www.kensingtongreencannabis.com/blog",
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
