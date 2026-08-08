import "../index.css";
import MobileHeader from "../components/MobileHeader";

export const metadata = {
  title: "Foresty - Complete Digital Business Solutions",
  description:
    "Foresty delivers custom software, websites, POS systems, Meta Ads, WhatsApp automation, and other digital business solutions.",
  keywords: [
    "Foresty",
    "custom software",
    "business solutions",
    "web development",
    "POS systems",
    "Meta Ads",
    "WhatsApp automation",
  ],
  authors: [{ name: "Foresty" }],
  robots: { index: true, follow: true },
  verification: { google: "googlec949c871178c6acc" },
  metadataBase: new URL("https://foresty-nexus.vercel.app"),
  alternates: { canonical: "/" },
  icons: {
    icon: "/FORESTY LOGO 1.png",
    apple: "/FORESTY LOGO 1.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Foresty - Complete Digital Business Solutions",
    description:
      "Foresty delivers the digital solutions that help businesses operate smarter, reach more customers, and grow with confidence.",
    url: "/",
    siteName: "Foresty",
    images: ["/frontimg.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Foresty - Complete Digital Business Solutions",
    description:
      "Foresty delivers the digital solutions that help businesses operate smarter, reach more customers, and grow with confidence.",
    images: ["/frontimg.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MobileHeader />
        {children}
      </body>
    </html>
  );
}
