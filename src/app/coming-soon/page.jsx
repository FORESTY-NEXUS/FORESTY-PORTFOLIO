import ComingSoon from "../../components/ComingSoon";

export const metadata = {
  title: "Coming Soon | FORESTY",
  description:
    "This part of FORESTY is currently under development. Check back soon.",
  robots: { index: false, follow: false },
};

/**
 * Example page — drop-in template for any unfinished FORESTY route.
 *
 * Usage in any future page.jsx:
 *   import ComingSoon from "@/components/ComingSoon";
 *   export default function SomeFuturePage() {
 *     return <ComingSoon />;
 *   }
 */
export default function ComingSoonPage() {
  return (
    <ComingSoon
      label="Coming Soon"
      title="Coming Soon"
      subtitle="We're building something worth the wait."
      description="This part of FORESTY is currently under development. Check back soon to explore what's coming next."
      backHref="/"
      backLabel="Back to Home"
      secondaryHref="/services"
      secondaryLabel="Explore Services"
    />
  );
}
