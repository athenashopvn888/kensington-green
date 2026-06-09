import type { Metadata } from "next";
import DeliveryContent from "./DeliveryContent";

export const metadata: Metadata = {
  title: "Delivery Coming Soon — Kensington Green | Toronto",
  description: "Get notified when Kensington Green launches same-day weed delivery across Toronto and surrounding areas.",
  alternates: {
    canonical: "https://kensingtongreencannabis.com/delivery",
  },
};

export default function DeliveryPage() {
  return <DeliveryContent />;
}
