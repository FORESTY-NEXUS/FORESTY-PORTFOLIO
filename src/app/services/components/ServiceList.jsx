import ServiceCard from "./ServiceCard";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function ServiceList({ services }) {
  return (
    <section className="px-5 py-20 sm:py-28" aria-labelledby="all-services-heading">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="What we do"
          title="All Services We Provide"
          description="Focused expertise, connected around the goals that matter to your business."
        />
        <Reveal stagger>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}