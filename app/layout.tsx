import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import AgeGate from "./components/AgeGate";
import JsonLd from "./components/JsonLd";
import {
  STORE_NAP,
  HOME_TITLE,
  HOME_DESCRIPTION,
  cannabisStoreJsonLd,
} from "./lib/storeNap";

export const metadata: Metadata = {
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nap = STORE_NAP;

  return (
    <html lang="en">
      <head>
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
        <JsonLd data={cannabisStoreJsonLd()} />
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
        <Link className="deliveryAnnouncement" href="/weed-delivery-toronto">
          EXPLORE WEED DELIVERY
        </Link>
        {children}
        <AgeGate />
      </body>
    </html>
  );
}
