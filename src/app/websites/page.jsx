import Navbar from "../../components/Navbar";
import CTASection from "./components/CTASection";
import ProjectGrid from "./components/ProjectGrid";
import WebsitesHero from "./components/WebsitesHero";
import { projects } from "../../data/projects";

export const metadata = {
  title: "Websites We've Built | FORESTY",
  description: "Explore websites and digital experiences built by FORESTY for real businesses and clients.",
  alternates: { canonical: "/websites" },
  openGraph: { title: "Websites We've Built | FORESTY", description: "Explore websites and digital experiences built by FORESTY for real businesses and clients.", url: "/websites", siteName: "Foresty", type: "website", images: ["/mashab perfumes.png"] },
};

export default function WebsitesPage() { return <><header><Navbar /></header><main className="min-h-screen overflow-hidden bg-[#090b09]"><WebsitesHero /><ProjectGrid projects={projects} /><CTASection /></main><footer className="border-t border-white/10 bg-[#090b09] px-5 py-8 pb-24 text-center text-sm text-zinc-500 md:pb-8">© {new Date().getFullYear()} FORESTY. Digital solutions that grow with you.</footer></>; }
