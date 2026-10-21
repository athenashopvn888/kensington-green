import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import ResourceView from "../ResourceView";
import { CIGARETTE_REDIRECT_PATH, isHiddenCigaretteHref, scrubCigaretteCopy } from "../../lib/showCigarettes";
import { getResourcePage, RESOURCE_PAGES } from "../resourceData";

type ResourceRouteProps = {
  params: Promise<{ slug?: string[] }>;
};

function routeSlug(slug?: string[]) {
  return (slug || []).join("/");
}

export function generateStaticParams() {
  return RESOURCE_PAGES.filter((page) => page.slug).map((page) => ({ slug: page.slug.split("/") }));
}

export async function generateMetadata({ params }: ResourceRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getResourcePage(routeSlug(slug));
  if (page && isHiddenCigaretteHref(`/resources/${page.slug}`)) redirect(CIGARETTE_REDIRECT_PATH);
  if (!page) return {};
  return {
    title: { absolute: scrubCigaretteCopy(page.seoTitle) },
    description: scrubCigaretteCopy(page.description),
    alternates: { canonical: "https://www.kensingtongreencannabis.com/resources/" + page.slug },
  };
}

export default async function ResourcePage({ params }: ResourceRouteProps) {
  const { slug } = await params;
  const page = getResourcePage(routeSlug(slug));
  if (page && isHiddenCigaretteHref(`/resources/${page.slug}`)) redirect(CIGARETTE_REDIRECT_PATH);
  if (!page) notFound();
  return <ResourceView page={page} />;
}
