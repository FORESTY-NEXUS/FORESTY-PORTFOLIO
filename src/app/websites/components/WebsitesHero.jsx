export default function WebsitesHero() {
  return (
    <section className="px-5  pt-20 sm:pt-30" aria-labelledby="websites-title">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex rounded-full  px-3 py-1 text-xs font-semibold tracking-wide text-green-500">Our Websites</span>
        <h1 id="websites-title" className="mt-6 text-balance text-4xl font-bold scale-108 lg:font-semibold tracking-[-0.06em]  text-white sm:text-6xl lg:text-7xl">Built for Real Businesses Designed for <span className="text-green-500">Real Results.</span></h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base lg:leading-7 text-zinc-400 sm:text-lg">Explore websites and digital experiences we&apos;ve built for businesses, brands, and organizations.</p>
      </div>
    </section>
  );
}
