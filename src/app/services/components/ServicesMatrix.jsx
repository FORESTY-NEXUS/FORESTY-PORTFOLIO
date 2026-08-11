"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const matrixData = [
  {
    id: "01",
    category: "DIGITAL PRESENCE",
    description:
      "We build digital experiences and brands that create impact and drive real results.",
    items: [
      { name: "Website Development", slug: "website-development" },
      { name: "Branding & Identity", slug: "branding-identity" },
      { name: "Content / Design", slug: "content-design" }
    ]
  },
  {
    id: "02",
    category: "BUSINESS SYSTEMS",
    description:
      "Custom-built systems that streamline operations and empower your business to scale.",
    items: [
      { name: "Custom Software Development", slug: "custom-software-development" },
      { name: "POS & Management Systems", slug: "pos-management-systems" },
      { name: "WhatsApp Automation", slug: "whatsapp-automation" }
    ]
  },
  {
    id: "03",
    category: "GROWTH",
    description:
      "Data-driven strategies that attract the right audience, build your brand, and accelerate growth.",
    items: [
      { name: "Digital Marketing", slug: "digital-marketing" },
      { name: "Meta Ads Management", slug: "meta-ads-management" },
      { name: "Lead Generation", slug: "lead-generation" }
    ]
  }
];

export default function ServicesMatrix() {
  const [activeTab, setActiveTab] = useState(0);

  // Correct initialization:
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: "power3.out" }
      });

      tl.fromTo(
        ".sm-eyebrow",
        { autoAlpha: 0, y: 15 },
        { autoAlpha: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          ".sm-heading",
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.7 },
          "-=0.4"
        )
        .fromTo(
          ".sm-desc",
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.7 },
          "-=0.5"
        )
        .fromTo(
          ".sm-tabs",
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          ".matrix-card",
          { autoAlpha: 0, y: 40 },
          { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.15 },
          "-=0.3"
        );

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            tl.play();
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(el);
      return () => observer.disconnect();
    }, el);

    return () => context.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-black py-20 px-4 sm:px-6 lg:px-8 text-white min-h-screen flex flex-col justify-center">
      {/* Header Section */}
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center mb-10">
        <span className="sm-eyebrow opacity-0 mb-3 text-xs font-medium text-[#10b981] tracking-widest uppercase">
          WHAT WE DO
        </span>
        <h2 className="sm-heading opacity-0 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          All Services We Provide
        </h2>
        <p className="sm-desc opacity-0 mt-4 text-sm text-zinc-400 sm:text-base max-w-md">
          Focused expertise, connected around the goals that matter to your business.
        </p>
      </div>

      {/* Top Category Nav Filter */}
      <div className="sm-tabs opacity-0 flex items-center justify-center gap-3 mb-12 flex-wrap">
        {matrixData.map((card, idx) => (
          <button
            key={card.id}
            onClick={() => setActiveTab(idx)}
            className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 border ${
              activeTab === idx
                ? "bg-[#10b981]/10 border-[#10b981] text-white shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                : "bg-transparent border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
            }`}
          >
            {card.category}
          </button>
        ))}
      </div>

      {/* 3-Column Grid Layout */}
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {matrixData.map((card, idx) => (
          <div
            key={card.id}
            className={`matrix-card opacity-0 bg-[#0a0c0b] border rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
              activeTab === idx
                ? "border-[#10b981]/40 shadow-[0_0_20px_rgba(16,185,129,0.08)]"
                : "border-white/[0.08]"
            }`}
          >
            {/* Top Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[#10b981] font-mono text-xl font-medium">
                  {card.id}
                </span>
                <div className="h-[1px] w-8 bg-zinc-800" />
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-white mb-4 leading-tight">
                {card.category}
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed mb-8">
                {card.description}
              </p>
            </div>

            {/* Bullet Services List */}
            <div className="border-t border-white/[0.08] pt-2">
              <ul className="flex flex-col">
                {card.items.map((item, j) => {
                  const isClickable = Boolean(item.slug);
                  const ItemWrapper = isClickable ? Link : "div";
                  const wrapperProps = isClickable ? { href: `/services/${item.slug}` } : {};

                  return (
                    <li key={j}>
                      <ItemWrapper
                        {...wrapperProps}
                        className="group flex items-center justify-between py-3.5 transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                          <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
                            {item.name}
                          </span>
                        </div>
                        <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:border-[#10b981] group-hover:text-[#10b981] transition-all duration-300">
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </ItemWrapper>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}