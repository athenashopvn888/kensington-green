import type { Metadata } from "next";
import "./globals.css";
import AgeGate from "./components/AgeGate";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kensingtongreencannabis.com"),
  title: {
    default: "Kensington Green Cannabis | Toronto Dispensary",
    template: "%s | Kensington Green",
  },
  description:
    "Kensington Green is a Toronto cannabis dispensary on Dundas St W with adult 19+ store info and category browsing for flower, pre-rolls, vapes, edibles, concentrates, and accessories. Open Daily: 10:00 AM - 02:00 AM.",
  keywords: [
    "cannabis dispensary Toronto",
    "weed store Toronto",
    "exotic flower Toronto",
    "premium cannabis",
    "Kensington Green",
    "cheap weed Toronto",
    "dispensary near me",
    "THC flower",
    "indica sativa hybrid",
    "edibles Toronto",
    "vapes",
    "pre-rolls",
    "native cigarettes Toronto",
    "weed store west Toronto",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://www.kensingtongreencannabis.com",
    siteName: "Kensington Green",
    title: "Kensington Green Premium Toronto Cannabis Dispensary",
    description:
      "Browse flower tiers and menu categories for Kensington Green at 2257 Dundas St W. Open Daily: 10:00 AM - 02:00 AM.",
    images: [
      {
        url: "https://www.kensingtongreencannabis.com/wp-content/uploads/2026/04/46Oi5.jpg",
        width: 1200,
        height: 630,
        alt: "Kensington Green Premium Cannabis Dispensary Toronto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kensington Green Toronto's Uplifting Dispensary",
    description:
      "Browse current menu categories. Open Daily: 10:00 AM - 02:00 AM at 2257 Dundas St W, Toronto.",
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
    canonical: "https://www.kensingtongreencannabis.com",
  },
  verification: {
    // google: "your-google-verification-code",
  },
};

/* JSON-LD Structured Data */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  additionalType: "https://schema.org/Store",
  "@id": "https://www.kensingtongreencannabis.com",
  name: "Kensington Green",
  description:
    "Cannabis dispensary at 2257 Dundas St W in Toronto, ON. Shop exotic, premium, AAA+, AA, and budget flower tiers plus edibles, prerolls, and vapes. Open Daily: 10:00 AM - 02:00 AM.",
  url: "https://www.kensingtongreencannabis.com",
  telephone: "+14164025263",
  image:
    "https://www.kensingtongreencannabis.com/wp-content/uploads/2026/04/7Clmh.jpg",
  priceRange: "$3 - $12/g",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2257 Dundas St W",
    addressLocality: "Toronto",
    addressRegion: "ON",
    postalCode: "M6R 1X6",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.6546313,
    longitude: -79.4521695,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "02:00",
    },
  ],
  sameAs: [
    "https://www.kensingtongreencannabis.com/",
    "https://www.kensingtongreencannabis.com/",
  ],
  hasMap: "https://www.kensingtongreencannabis.com/",
  areaServed: {
    "@type": "City",
    name: "Toronto",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Toronto" />
        <meta name="geo.position" content="43.6546313;-79.4521695" />
        <meta name="ICBM" content="43.6546313, -79.4521695" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
        {children}
        <AgeGate />
      </body>
    </html>
  );
}
