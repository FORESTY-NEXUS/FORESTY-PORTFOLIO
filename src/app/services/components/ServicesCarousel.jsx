"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { featureIcons } from "../data/services";

export default function ServicesCarousel({ services }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const cardRef = useRef(null);
  const service = services[activeIndex];

  const goTo = useCallback(
    (index) => setActiveIndex((index + services.length) % services.length),
    [services.length]
  );

  useEffect(() => {
    if (isPaused) return undefined;
    const timer = window.setInterval(() => goTo(activeIndex + 1), 6000);
    return () => window.clearInterval(timer);
  }, [activeIndex, goTo, isPaused]);

  useEffect(() => {
    if (!cardRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.fromTo(
      cardRef.current,
      { opacity: 0.4, y: 12 },
      { opacity: 1, y: 0, duration: 0.42, ease: "power2.out", overwrite: true }
    );
  }, [activeIndex]);

  const bgPath = service.bgImage || service.image || "/services/Service-card 1.png";

  return (
    <section className="overflow-hidden px-4 py-6 sm:px-6 sm:py-12" aria-labelledby="featured-services-heading">
      <div className="mx-auto max-w-6xl">
        {/* Top Header */}
        <div className="mb-6 space-y-2 text-center sm:mb-10 sm:space-y-3">
          <span className="inline-block rounded-full border border-emerald-500/20 bg-emerald-950/40 px-3 py-1 text-[11px] font-semibold text-emerald-400 backdrop-blur-md sm:px-4 sm:text-xs">
            Our Services
          </span>
          <h2 id="featured-services-heading" className="text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            <span className="text-emerald-400">Solutions</span> That Grow Your Business
          </h2>
          <p className="mx-auto max-w-xl text-xs leading-relaxed text-zinc-400 sm:text-base">
            We provide end-to-end digital solutions to help your business streamline operations, boost growth, and achieve more.
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow Button (Desktop) */}
          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            className="absolute left-2 z-20 hidden size-10 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition hover:border-emerald-500/50 hover:bg-black/90 md:flex lg:-left-6 lg:size-12"
            aria-label="Previous service"
          >
            <ArrowLeft className="size-4 sm:size-5" />
          </button>

          {/* Banner Card */}
          <div
            ref={cardRef}
            className="relative w-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-cover bg-center p-5 shadow-2xl transition-all duration-500 sm:rounded-[2.5rem] sm:p-10 lg:p-12"
            style={{ backgroundImage: `url("${bgPath}")` }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
          >
            {/* Mobile Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 sm:hidden" aria-hidden="true" />

            {/* Card Content Column */}
            <div className="relative z-10 max-w-xl space-y-4 sm:space-y-6">
              {/* Counter Badge */}
              <span className="inline-block rounded-full border border-white/10 bg-black/40 px-2.5 py-0.5 text-[11px] font-medium text-emerald-400 backdrop-blur-md sm:px-3 sm:py-1 sm:text-xs">
                0{activeIndex + 1} / 0{services.length}
              </span>

              {/* Title & Description */}
              <h3 className="text-balance text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {service.title}
              </h3>
              <p className="max-w-lg text-xs leading-relaxed text-zinc-200 sm:text-base">
                {service.description}
              </p>

              {/* Feature Icons */}
              <div className="grid grid-cols-2 gap-2 pt-1 sm:gap-3 sm:pt-2 sm:grid-cols-4">
                {service.features.map((feature, index) => {
                  const Icon = featureIcons[index];
                  return (
                    <div key={feature} className="flex flex-col items-center text-center">
                      <div className="flex size-10 items-center justify-center rounded-xl border border-emerald-500/30 bg-black/50 text-emerald-400 backdrop-blur-sm sm:size-12">
                        {Icon && <Icon className="size-4 sm:size-5" aria-hidden="true" />}
                      </div>
                      <span className="mt-1.5 text-[11px] font-medium leading-tight text-zinc-200 sm:mt-2 sm:text-xs">
                        {feature}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Learn More Button */}
              <div className="pt-2">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 text-sm font-semibold text-black transition hover:bg-emerald-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 sm:w-auto sm:min-h-12"
                >
                  Learn More <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Arrow Button (Desktop) */}
          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            className="absolute right-2 z-20 hidden size-10 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition hover:border-emerald-500/50 hover:bg-black/90 md:flex lg:-right-6 lg:size-12"
            aria-label="Next service"
          >
            <ArrowRight className="size-4 sm:size-5" />
          </button>
        </div>

        {/* Pagination Dots & Mobile Navigation Controls */}
        <div className="mt-5 flex items-center justify-center gap-4 sm:mt-6">
          {/* Mobile Prev Button */}
          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            className="flex size-9 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white transition active:scale-95 md:hidden"
            aria-label="Previous service"
          >
            <ArrowLeft size={16} />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2" aria-label="Featured services pagination">
            {services.map((item, index) => (
              <button
                key={item.slug}
                type="button"
                aria-label={`Show ${item.title}`}
                aria-current={index === activeIndex}
                onClick={() => goTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-7 bg-emerald-400" : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* Mobile Next Button */}
          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            className="flex size-9 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white transition active:scale-95 md:hidden"
            aria-label="Next service"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}