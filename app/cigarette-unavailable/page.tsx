import type { Metadata } from "next";
import CigaretteUnavailable from "../components/CigaretteUnavailable";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: { absolute: "Cigarettes are not available right now | Kensington Green" },
  robots: { index: false, follow: false },
};

export default function CigaretteUnavailablePage() {
  return (
    <main>
      <Navbar />
      <CigaretteUnavailable />
      <Footer />
    </main>
  );
}
