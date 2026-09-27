import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kensington Green In-Store Flower Display",
  description: "Operational in-store flower menu display for Kensington Green.",
  robots: { index: false, follow: false },
};

export default function TvLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
