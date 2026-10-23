import CigaretteStateProvider from "./components/CigaretteStateProvider";
import FleetContentProvider from "./components/FleetContentProvider";
import FullNameNap from "./components/FullNameNap";
import type { Metadata } from "next";
import "./globals.css";
import PinnedNavClearance from "./components/PinnedNavClearance";
import DeliveryAnnouncement from "./components/DeliveryAnnouncement";
import JsonLd from "./components/JsonLd";
import { getCigaretteSnapshot, toPublicCigaretteState } from "./lib/cigaretteFeed";
import { getFleetContent } from "./lib/fleetContent";
import { SHOW_CIGARETTES } from "./lib/showCigarettes";
import {
  STORE_NAP,
  HOME_TITLE,
  HOME_DESCRIPTION,
  HOME_SCHEMA_NAME,
  HOME_SCHEMA_NAME_PREVIOUS,
  cannabisStoreJsonLd,
} from "./lib/storeNap";

const ROOT_METADATA: Metadata = {
  metadataBase: new URL(STORE_NAP.origin),
  title: {
    default: HOME_TITLE,
    // Child titles that already include the brand must use resolveDocumentTitle()
    // so this template does not append "Kensington Green" a second time.
    template: "%s | Kensington Green",
  },
  description: HOME_DESCRIPTION,
  keywords: [
    "Dundas West dispensary",
    "Roncesvalles cannabis",
    "Kensington Green",
    "weed near High Park South",
    "2257 Dundas walk-in",
    "Dundas West cannabis",
    "Roncesvalles weed store",
    "Parkdale edge dispensary",
    "adults 19+",
    "cannabis delivery Dundas West",
    "Dundas West cannabis dispensary",
    "Dundas West weed delivery",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: STORE_NAP.origin,
    siteName: "Kensington Green",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [
      {
        url: "https://www.kensingtongreencannabis.com/wp-content/uploads/2026/04/46Oi5.jpg",
        width: 1200,
        height: 630,
        alt: "Kensington Green Dundas West cannabis dispensary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [
      "https://www.kensingtongreencannabis.com/wp-content/uploads/2026/04/46Oi5.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: STORE_NAP.origin,
  },
  verification: {
    // google: "your-google-verification-code",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const fleet = await getFleetContent();
  if (!fleet.active) return ROOT_METADATA;
  const description = fleet.pages.Home?.metaDescription || "";
  if (!description || description === ROOT_METADATA.description) return ROOT_METADATA;
  return {
    ...ROOT_METADATA,
    description,
    openGraph: { ...ROOT_METADATA.openGraph, description },
    twitter: { ...ROOT_METADATA.twitter, description },
  };
}

function homepageStoreJsonLd() {
  const base = cannabisStoreJsonLd();
  return {
    ...base,
    additionalType: [
      "https://schema.org/CannabisStore",
      "https://schema.org/LocalBusiness",
      "https://schema.org/Organization",
    ],
    name: HOME_SCHEMA_NAME,
    alternateName: [STORE_NAP.name, HOME_SCHEMA_NAME_PREVIOUS],
    description: HOME_DESCRIPTION,
    areaServed: [
      ...base.areaServed,
      { "@type": "Place", name: "Parkdale" },
    ],
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nap = STORE_NAP;
  const [fleet, cigaretteSnapshot] = await Promise.all([getFleetContent(), getCigaretteSnapshot()]);
  const published = toPublicCigaretteState(cigaretteSnapshot);
  const cigarettes = {
    web: SHOW_CIGARETTES ? published.web : false,
    tv: published.tv,
    wording: published.wording,
  };

  return (
    <html lang="en">
      <head>
        <meta name="fleet-content-version" content={fleet.version} />
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Dundas West, Toronto" />
        <meta name="geo.position" content={`${nap.latitude};${nap.longitude}`} />
        <meta name="ICBM" content={`${nap.latitude}, ${nap.longitude}`} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <JsonLd data={homepageStoreJsonLd()} />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XFD6JN0Q3N"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
 window.dataLayer = window.dataLayer || [];
 function gtag(){dataLayer.push(arguments);}
 gtag('js', new Date());
 gtag('config', 'G-XFD6JN0Q3N');
 `,
          }}
        />
      </head>
      <body>
        <noscript>
          Kensington Green · {nap.addressLine} · {nap.phoneDisplay} ·{" "}
          {nap.hoursLabel} · {nap.ageLine}
        </noscript>
        {fleet.active ? (
          <FleetContentProvider value={{ active: fleet.active, version: fleet.version, nap: fleet.nap }}>
            <CigaretteStateProvider value={cigarettes}>
              <DeliveryAnnouncement />
              {children}
              <FullNameNap />
              <PinnedNavClearance />
            </CigaretteStateProvider>
          </FleetContentProvider>
        ) : (
          <CigaretteStateProvider value={cigarettes}>
            <DeliveryAnnouncement />
            {children}
            <FullNameNap />
            <PinnedNavClearance />
          </CigaretteStateProvider>
        )}
      </body>
    </html>
  );
}
