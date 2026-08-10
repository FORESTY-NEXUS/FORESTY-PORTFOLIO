"use client";

import Link from "next/link";
import { BriefcaseIcon, HomeIcon, MonitorIcon, Layers, Info, Mail } from "lucide-react";
import { usePathname } from "next/navigation";

const navigationItems = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/services", label: "Services", icon: BriefcaseIcon },
  { href: "/software", label: "Software", icon: Layers },
  { href: "/websites", label: "Websites", icon: MonitorIcon }
  // { href: "/about", label: "About", icon: Info },
  // { href: "/contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (href) => pathname === href;

  return <>
    <nav className="fixed not-lg:hidden top-5 left-1/2 z-50 flex h-16 w-[90%] -translate-x-1/2 items-center justify-between rounded-full border border-gray-700 bg-white/5 px-6 text-white backdrop-blur-md lg:w-3/4" aria-label="Primary navigation">
      <Link href="/" className="text-2xl font-bold tracking-wider text-green-500 transition hover:text-green-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-400">FORESTY</Link>
      <ul className="hidden items-center gap-8 text-lg font-medium md:flex">
        {navigationItems.map((item) => <li key={item.href}><Link href={item.href} aria-current={isActive(item.href) ? "page" : undefined} className={`relative py-2 transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-400 ${isActive(item.href) ? "text-green-400" : "hover:text-green-500"}`}>{item.label}{isActive(item.href) && <span className="absolute inset-x-0 -bottom-0.5 mx-auto h-0.5 w-5 rounded-full bg-green-400" aria-hidden="true" />}</Link></li>)}
      </ul>
      <a href="https://wa.me/923195403032" target="_blank" rel="noreferrer" className="hidden rounded-full bg-green-500 px-5 py-2 font-medium text-black transition hover:scale-105 hover:bg-green-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400 sm:inline-flex">Let&apos;s Grow</a>
    </nav>
   <nav 
  className="fixed bottom-0 left-0 right-0 z-[999] flex h-16 w-full items-center justify-around border-t border-emerald-950/40 bg-zinc-950/95 px-2 pb-[env(safe-area-inset-bottom)] text-white shadow-[0_-4px_20px_rgba(0,0,0,0.5)] backdrop-blur-md md:hidden" 
  aria-label="Mobile navigation"
>
  {navigationItems.map((item) => { 
    const Icon = item.icon; 
    const active = isActive(item.href); 
    
    return (
      <Link 
        key={item.href} 
        href={item.href} 
        aria-current={active ? "page" : undefined} 
        className="group relative flex min-h-[48px] flex-1 flex-col items-center justify-center py-1 transition-transform active:scale-95 focus-visible:outline-none"
      >
        {/* Material 3 Active Indicator Pill */}
        <div 
          className={`flex h-8 w-16 items-center justify-center rounded-full transition-all duration-200 ${
            active ? "bg-emerald-500/20 text-emerald-400" : "text-zinc-400 group-active:text-zinc-200"
          }`}
        >
          <Icon size={22} aria-hidden="true" className={active ? "stroke-[2.5]" : "stroke-[1.75]"} />
        </div>

        {/* Label with Material 3 Typography Weight */}
        <span 
          className={`mt-1 text-[11px] tracking-wide transition-colors duration-200 ${
            active ? "font-semibold text-emerald-400" : "font-medium text-zinc-400"
          }`}
        >
          {item.label}
        </span>
      </Link>
    ); 
  })}
</nav>
  </>;
}
