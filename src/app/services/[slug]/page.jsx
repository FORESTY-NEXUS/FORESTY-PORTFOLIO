import { services } from "../data/services";
import ComingSoon from "../../../components/ComingSoon";

// Tell Next.js which slugs exist so it can statically generate them.
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

// Generate per-service metadata — params is a Promise in Next.js 16.
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  const title = service ? service.title : "Service";

  return {
    title: `${title} | FORESTY`,
    description: service
      ? service.description
      : "This FORESTY service is currently being detailed. Check back soon.",
    robots: { index: false, follow: false },
  };
}

// params is a Promise in Next.js 16 — must be awaited.
export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  const title = service?.title ?? "Coming Soon";

  return (
    <ComingSoon
      label="Services"
      title={title}
      subtitle="We're building something worth the wait."
      description="This service page is currently under development. In the meantime, reach out to us directly and we'll walk you through everything."
      backHref="/services"
      backLabel="Back to Services"
      secondaryHref="https://wa.me/923195403032"
      secondaryLabel="Talk to Us"
    />
  );
}
