import type { Metadata } from "next";
import DeliveryContent from "./DeliveryContent";

export const metadata: Metadata = {
  title: "Delivery Coming Soon Kensington Green | Toronto",
  description:
    "Get notified when Kensington Green prepares delivery for Dundas West, Roncesvalles, High Park, and nearby west Toronto.",
  alternates: {
    canonical: "https://kensingtongreencannabis.com/delivery",
  },
};

export default function DeliveryPage() {
  return <DeliveryContent />;
}
