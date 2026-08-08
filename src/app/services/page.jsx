import Navbar from "../../components/Navbar";
import Hero from "./components/Hero";
import ServicesCarousel from "./components/ServicesCarousel";
import ServiceList from "./components/ServiceList";
import CTA from "./components/CTA";
import { featuredServices, services } from "./data/services";

export const metadata = {
  title: "Services | FORESTY",
  description: "Explore FORESTY's website development, custom software, POS, WhatsApp automation, marketing, branding, and Meta Ads services.",
  keywords: ["Foresty services", "website development", "custom software development", "POS systems", "WhatsApp automation", "digital marketing", "branding", "Meta Ads"],
  alternates: { canonical: "/services" },
  openGraph: { title: "Services | FORESTY", description: "Digital systems, campaigns, and creative work built to grow your business.", url: "/services", siteName: "Foresty", type: "website", images: ["/frontimg.png"] },
  twitter: { card: "summary_large_image", title: "Services | FORESTY", description: "Digital systems, campaigns, and creative work built to grow your business.", images: ["/frontimg.png"] },
};

export default function ServicesPage() {
  const carouselServices = featuredServices.map((service) => ({
    slug: service.slug,
    title: service.title,
    description: service.description,
    features: service.features,
    image: service.bgImage,
  }));

  return <>
    <header><Navbar /></header>
    <main className="min-h-screen overflow-hidden bg-[#090b09]"><Hero /><ServicesCarousel services={carouselServices} /><ServiceList services={services} /><CTA /></main>
    <footer className="border-t border-white/10 bg-[#090b09] px-5 py-8 pb-24 text-center text-sm text-zinc-500 md:pb-8">© {new Date().getFullYear()} FORESTY. Digital solutions that grow with you.</footer>
  </>;
}
