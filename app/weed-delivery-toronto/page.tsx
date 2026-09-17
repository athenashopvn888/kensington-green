import type { Metadata } from "next";
import DeliveryContent from "../delivery/DeliveryContent";
import menu from "../delivery/delivery-menu.json";
import { STORE_NAP } from "../lib/storeNap";

export const metadata: Metadata = {
  title: { absolute: "Dundas West Cannabis Delivery | Kensington Green" },
  description:
    "Neighbourhood-scoped cannabis delivery from Kensington Green for Dundas West, Roncesvalles, High Park South, and the Parkdale edge. Adults 19+. Walk-in directions live on /visit.",
  alternates: { canonical: `${STORE_NAP.origin}/weed-delivery-toronto` },
};

export default function WeedDeliveryTorontoPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Kensington Green Dundas West delivery menu",
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: menu.products.length,
        itemListElement: menu.products.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: product.name,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Kensington Green neighbourhood cannabis delivery",
      serviceType: "Cannabis delivery",
      areaServed: [
        { "@type": "Place", name: "Dundas West" },
        { "@type": "Place", name: "Roncesvalles" },
        { "@type": "Place", name: "High Park South" },
      ],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "10:00",
        closes: "22:00",
      },
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <DeliveryContent />
    </>
  );
}
