"use client";

import Link from "next/link";
import { BriefcaseIcon, HomeIcon, MonitorIcon } from "lucide-react";
import { usePathname } from "next/navigation";

const navigationItems = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/services", label: "Services", icon: BriefcaseIcon },
  { href: "/websites", label: "Websites", icon: MonitorIcon },
];

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (href) => pathname === href;

  return <>
    <nav className="fixed top-4 left-1/2 z-50 flex h-16 w-[90%] -translate-x-1/2 items-center justify-between rounded-full border border-gray-700 bg-white/5 px-6 text-white backdrop-blur-md lg:w-3/4" aria-label="Primary navigation">
      <Link href="/" className="text-2xl font-bold tracking-wider text-green-500 transition hover:text-green-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-400">FORESTY</Link>
      <ul className="hidden items-center gap-8 text-lg font-medium md:flex">
        {navigationItems.map((item) => <li key={item.href}><Link href={item.href} aria-current={isActive(item.href) ? "page" : undefined} className={`relative py-2 transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-400 ${isActive(item.href) ? "text-green-400" : "hover:text-green-500"}`}>{item.label}{isActive(item.href) && <span className="absolute inset-x-0 -bottom-0.5 mx-auto h-0.5 w-5 rounded-full bg-green-400" aria-hidden="true" />}</Link></li>)}
      </ul>
      <a href="https://wa.me/923195403032" target="_blank" rel="noreferrer" className="hidden rounded-full bg-green-500 px-5 py-2 font-medium text-black transition hover:scale-105 hover:bg-green-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400 sm:inline-flex">Let&apos;s Grow</a>
    </nav>
    <nav className="fixed bottom-0 left-[5%] z-[999] flex h-16 w-[90%] items-center justify-around rounded-full border border-gray-800 bg-black/70 text-white shadow-2xl shadow-black/30 backdrop-blur-xl md:hidden" aria-label="Mobile navigation">
      {navigationItems.map((item) => { const Icon = item.icon; const active = isActive(item.href); return <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={`flex min-w-20 flex-col items-center rounded-lg px-3 py-1 text-xs transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400 ${active ? "text-green-400" : "hover:text-green-500"}`}><Icon size={19} aria-hidden="true" /><span className="mt-0.5">{item.label}</span></Link>; })}
    </nav>
  </>;
}
