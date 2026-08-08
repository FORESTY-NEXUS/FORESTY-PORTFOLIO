"use client";

import App from "../App";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Foresty",
    url: "https://foresty-nexus.vercel.app",
    logo: "https://foresty-nexus.vercel.app/FORESTY%20LOGO%201.png",
    description:
      "Complete digital business solutions including custom software, web development, POS systems, Meta Ads, and WhatsApp automation.",
    telephone: "+1234567890",
    address: { "@type": "PostalAddress", addressCountry: "AE" },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://foresty-nexus.vercel.app",
    name: "Foresty",
  },
];

export default function HomePage() {
  return (
    <>
      <App />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
