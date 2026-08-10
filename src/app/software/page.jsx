import SoftwareHero from "./components/SoftwareHero";
import SoftwareOverview from "./components/SoftwareOverview";
import SoftwareCard from "./components/SoftwareCard";
import ComingSoonSection from "./components/ComingSoonSection";
import ComingSoonCard from "./components/ComingSoonCard";
import SoftwareCTA from "./components/SoftwareCTA";
import Navbar from "../../components/Navbar";
import { softwareProducts } from "../../data/software";

export const metadata = {
  title: "Business Management Software | FORESTY",
  description: "Powerful business management software for gyms, tech stores, and growing businesses. Explore FORESTY's software solutions and preview our products.",
  alternates: {
    canonical: "/software",
  },
  openGraph: {
    title: "Business Management Software | FORESTY",
    description: "Powerful business management software for gyms, tech stores, and growing businesses. Explore FORESTY's software solutions and preview our products.",
    type: "website",
    url: "/software",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Management Software | FORESTY",
    description: "Powerful business management software for gyms, tech stores, and growing businesses.",
  },
};

export default function SoftwarePage() {
  const availableProducts = softwareProducts.filter((p) => p.status === "available");
  const upcomingProducts = softwareProducts.filter((p) => p.status === "coming-soon");

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen bg-black font-sans text-[#f3f6ec] selection:bg-green-500 selection:text-black">
        <SoftwareHero />
      
      <SoftwareOverview>
        {availableProducts.map((product) => (
          <SoftwareCard key={product.id} product={product} />
        ))}
      </SoftwareOverview>

      <ComingSoonSection>
        {upcomingProducts.map((product) => (
          <ComingSoonCard key={product.id} product={product} />
        ))}
      </ComingSoonSection>

      <SoftwareCTA />
      </main>
    </>
  );
}
