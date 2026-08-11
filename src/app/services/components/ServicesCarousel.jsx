"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Fan/arc layout config for each position offset (-2 to +2)
// Matches the reference image: 5 cards fanned out, center card prominent
const CARD_CONFIG = {
  "-2": { x: -520, z: -180, rotY: 28,  scale: 0.72, opacity: 0.55, zIndex: 1 },
  "-1": { x: -265, z: -80,  rotY: 14,  scale: 0.85, opacity: 0.80, zIndex: 2 },
   "0": { x: 0,    z: 20,   rotY: 0,   scale: 1.0,  opacity: 1.00, zIndex: 5 },
   "1": { x: 265,  z: -80,  rotY: -14, scale: 0.85, opacity: 0.80, zIndex: 2 },
   "2": { x: 520,  z: -180, rotY: -28, scale: 0.72, opacity: 0.55, zIndex: 1 },
};

export default function ServicesCarousel({ services }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);

  const total = services?.length || 0;

  const goTo = useCallback(
    (index) => {
      if (!total) return;
      setActiveIndex((index + total) % total);
    },
    [total]
  );

  useEffect(() => {
    if (isPaused || !total) return undefined;
    const timer = window.setInterval(() => goTo(activeIndex + 1), 4500);
    return () => window.clearInterval(timer);
  }, [activeIndex, goTo, isPaused, total]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? goTo(activeIndex + 1) : goTo(activeIndex - 1);
  };

  if (!services || services.length === 0) return null;

  return (
    <section
      className="relative w-full overflow-hidden bg-[#090b09] pt-16 px-4 sm:pt-34"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Dot-grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.07] pointer-events-none" />

      {/* Subtle corner glows */}
      <div className="absolute top-0 left-1/4 w-96 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* ── Section Heading (was Hero) ── */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-18 space-y-4">
          <div className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.25em] text-emerald-400 uppercase">
            <span className="text-emerald-500/60">+</span>
            OUR SERVICES
            <span className="text-emerald-500/60">+</span>
          </div>
    <h1 className="text-2xl sm:text-5xl lg:text-7xl w-full font-black text-white uppercase tracking-tight leading-[1.05]">
  <span className="block sm:whitespace-nowrap">We Build The Systems</span>
  <span className="block text-green-500 sm:whitespace-nowrap">Behind Your Business</span>
</h1>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed pt-1">
            From a sharp digital presence to smarter operations,{" "}
            <span className="text-green-400 font-semibold">FORESTY</span> builds the systems
            and campaigns ambitious businesses need to move forward.
          </p>
        </div>

        {/* ── 3D Fan Carousel Stage ── */}
       <div
  className="relative flex justify-center items-end h-[520px] sm:h-[700px] w-full [perspective:1400px]"
  onTouchStart={handleTouchStart}
  onTouchEnd={handleTouchEnd}
>
  {services.map((service, index) => {
    let offset = index - activeIndex;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    const absOffset = Math.abs(offset);
    if (absOffset > 2) return null;

    const cfg = CARD_CONFIG[String(offset)] ?? CARD_CONFIG["2"];
    const isActive = offset === 0;
    const formattedNum = String(index + 1).padStart(2, "0");

    return (
      <div
        key={service.slug || index}
        onClick={() => goTo(index)}
        className={`absolute bottom-0 w-[280px] sm:w-[340px] h-[460px] sm:h-[540px] rounded-[32px] p-6 sm:p-7 flex flex-col justify-between border transition-all duration-500 ease-out cursor-pointer select-none backdrop-blur-xl ${
          isActive
            ? "bg-[#0b1a10]/95 border-emerald-500/70 shadow-[0_0_70px_rgba(16,185,129,0.2),0_30px_90px_rgba(0,0,0,0.8)]"
            : "bg-[#0c0e0c]/90 border-white/8 hover:border-emerald-500/30 shadow-[0_12px_50px_rgba(0,0,0,0.7)]"
        }`}
        style={{
          transform: `translateX(${cfg.x}px) translateZ(${cfg.z}px) rotateY(${cfg.rotY}deg) scale(${cfg.scale})`,
          opacity: cfg.opacity,
          zIndex: cfg.zIndex,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Card top: number + title + description */}
        <div className="space-y-3">
          <span className="text-emerald-400 font-mono text-xs sm:text-sm font-bold tracking-widest">
            {formattedNum}
          </span>
          <h3 className="text-lg sm:text-xl font-black uppercase text-white tracking-wide leading-tight">
            {service.title}
          </h3>
          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
            {service.description}
          </p>
        </div>

        {/* Card image */}
        <div className="flex-1 flex justify-center items-center py-2 relative">
          {service.image ? (
            <img
              src={service.image}
              alt={service.title}
              className="object-contain w-[120%] sm:w-[190%] max-h-[220px] sm:max-h-[380px] filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)] mix-blend-normal transform-gpu transition-transform duration-700 hover:scale-105 pointer-events-none"
            />
          ) : (
            <div className="text-emerald-400 text-3xl font-mono">{"</>"}</div>
          )}
        </div>

        {/* Card footer: arrow CTA */}
        <div className="flex items-center justify-between pt-2 relative">
          <Link
            href={`/services/${service.slug}`}
            onClick={(e) => !isActive && e.preventDefault()}
            className={`size-11 rounded-full border flex items-center justify-center transition-all ${
              isActive
                ? "border-emerald-500/70 bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-black"
                : "border-white/10 text-zinc-600"
            }`}
            aria-label={`View ${service.title}`}
          >
            <ArrowRight size={18} />
          </Link>

          {/* Active card pedestal glow */}
          {isActive && (
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-emerald-500/25 rounded-full blur-xl" />
          )}
        </div>
      </div>
    );
  })}
</div>
        {/* ── Pagination dots ── */}
        <div className="mt-10 sm:mt-12 flex items-center justify-center gap-2">
          {/* Left tick marks */}
          <div className="flex items-center gap-1 mr-3">
            {[0, 1].map((i) => (
              <span key={i} className="block w-5 h-px bg-zinc-600" />
            ))}
          </div>

          {services.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`transition-all duration-300 rounded-full ${
                idx === activeIndex
                  ? "w-5 h-2 bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]"
                  : "size-2 bg-zinc-700 hover:bg-zinc-500"
              }`}
              aria-label={`Go to ${services[idx].title}`}
            />
          ))}

          {/* Center tree/arrow icon */}
          <div className="mx-1 text-emerald-400">
            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" aria-hidden="true">
              <path d="M7 0L9.5 5H4.5L7 0Z" fill="currentColor" opacity="0.8"/>
              <path d="M7 4L11 9H3L7 4Z" fill="currentColor"/>
              <path d="M7 8L13 14H1L7 8Z" fill="currentColor"/>
              <rect x="6" y="14" width="2" height="4" fill="currentColor" rx="1"/>
            </svg>
          </div>

          {services.map((_, idx) => (
            <button
              key={`r-${idx}`}
              onClick={() => goTo(idx)}
              className={`transition-all duration-300 rounded-full ${
                idx === activeIndex
                  ? "w-5 h-2 bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]"
                  : "size-2 bg-zinc-700 hover:bg-zinc-500"
              }`}
              aria-label={`Go to ${services[idx].title}`}
            />
          ))}

          {/* Right tick marks */}
          <div className="flex items-center gap-1 ml-3">
            {[0, 1].map((i) => (
              <span key={i} className="block w-5 h-px bg-zinc-600" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}