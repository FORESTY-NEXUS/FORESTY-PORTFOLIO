import ServicesMatrix from "./ServicesMatrix";

export default function ServiceList({ services }) {
  return (
    <section className="py-24 sm:py-32 overflow-hidden bg-[#050906]" aria-labelledby="all-services-heading">
      <ServicesMatrix />
    </section>
  );
}