import Badge from "./Badge";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="px-5 pb-20 pt-36 sm:pb-28 sm:pt-44" aria-labelledby="services-title">
      <Reveal><div className="mx-auto flex max-w-[700px] flex-col items-center text-center">
        <Badge>Our Services</Badge>
        <h1 id="services-title" className="mt-6 text-balance text-5xl font-semibold tracking-[-0.065em] text-white sm:text-6xl lg:text-7xl">
          Solutions That Grow Your Business
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-zinc-400 sm:text-lg">
          From a sharp digital presence to smarter operations, FORESTY builds the systems and campaigns ambitious businesses need to move forward.
        </p>
      </div></Reveal>
    </section>
  );
}
