import type { Metadata } from "next";
import "./globals.css";
import AgeGate from "./components/AgeGate";

export const metadata: Metadata = {
  metadataBase: new URL("https://kensingtongreencannabis.com"),
  title: {
    default: "Kensington Green — Premium Cannabis Dispensary, Toronto",
    template: "%s | Kensington Green",
  },
  description:
    "Shop 200+ premium cannabis strains at Kensington Green. Exotic, Premium, AAA+, AA & Budget flower from $3/g. Toronto's uplifting dispensary at 2257 Dundas St W. Open Daily: 10:00 AM - 02:00 AM.",
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
    "weed store Mississauga",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://kensingtongreencannabis.com",
    siteName: "Kensington Green",
    title: "Kensington Green — Premium Toronto Cannabis Dispensary",
    description:
      "200+ strains from $3/g. Exotic to Budget. Toronto's uplifting dispensary at 2257 Dundas St W. Open Daily: 10:00 AM - 02:00 AM.",
    images: [
      {
        url: "https://kensingtongreencannabis.com/wp-content/uploads/2026/04/46Oi5.jpg",
        width: 1200,
        height: 630,
        alt: "Kensington Green — Premium Cannabis Dispensary Toronto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kensington Green — Toronto's Uplifting Dispensary",
    description: "200+ strains from $3/g. Open Daily: 10:00 AM - 02:00 AM at 2257 Dundas St W, Toronto.",
    images: ["https://kensingtongreencannabis.com/wp-content/uploads/2026/04/46Oi5.jpg"],
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
    canonical: "https://kensingtongreencannabis.com",
  },
  verification: {
    // google: "your-google-verification-code",
  },
};

/* ── JSON-LD Structured Data ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  additionalType: "https://schema.org/Store",
  "@id": "https://kensingtongreencannabis.com",
  name: "Kensington Green",
  description: "Cannabis dispensary at 2257 Dundas St W in Toronto, ON. Shop exotic, premium, AAA+, AA, and budget flower tiers plus edibles, prerolls, and vapes. Open Daily: 10:00 AM - 02:00 AM.",
  url: "https://kensingtongreencannabis.com",
  telephone: "+14164025263",
  image: "https://kensingtongreencannabis.com/wp-content/uploads/2026/04/7Clmh.jpg",
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
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "10:00",
    "closes": "02:00"
  }
],
  sameAs: [
    "https://kensingtongreencannabis.com/",
    "https://kensingtongreencannabis.com/",
  ],
  hasMap: "https://kensingtongreencannabis.com/",
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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XFD6JN0Q3N"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XFD6JN0Q3N');
            `
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
