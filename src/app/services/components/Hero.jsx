import Badge from "./Badge";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="px-5  pt-36 pb-20  sm:pt-35" aria-labelledby="services-title">
      <Reveal>
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <Badge>Our Services</Badge>
          <h1 
            id="services-title" 
            className="mt-6 whitespace-nowrap text-3xl font-semibold tracking-[-0.065em] text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Solutions That <span className="text-green-500">Grow  Your Business</span>
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-zinc-400 sm:text-lg">
            From a sharp digital presence to smarter operations, FORESTY builds the systems and campaigns ambitious businesses need to move forward.
          </p>
        </div>
      </Reveal>
    </section>
  );
}