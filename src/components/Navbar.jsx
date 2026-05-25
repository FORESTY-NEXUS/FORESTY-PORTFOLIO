import { useState } from "react";

export default function Navbar() {
  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <nav className="
      
        hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-50
        w-[90%] lg:w-3/4 h-16 px-6 border border-gray-700
        rounded-full backdrop-blur-md bg-white/5 items-center
        justify-between text-white
      ">
        <h1 className="text-2xl font-bold text-green-500 tracking-wider">
          FORESTY
        </h1>

        <ul className="flex items-center gap-8 text-lg font-medium">
          {["Services", "Projects", "About", "Contact"].map((item) => (
            <li
              key={item}
              className="hover:text-green-500 hover:scale-110 transition cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>

        <button className="
          px-5 py-2 bg-green-500 rounded-full font-medium
          hover:bg-green-600 hover:scale-105 transition
        ">
          Hire Me
        </button>
      </nav>

      {/* ================= MOBILE BOTTOM NAV ================= */}
      <nav className="
        md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50
        w-[92%] h-16 px-4 rounded-full border border-gray-800
        bg-black/70 backdrop-blur-xl flex items-center justify-between
        text-white shadow-2xl
      ">

        {/* Home */}
        <button className="flex flex-col items-center text-xs hover:text-green-500">
          <HomeIcon />
          <span>Home</span>
        </button>

        {/* Services */}
        <button className="flex flex-col items-center text-xs hover:text-green-500">
          <BriefcaseIcon />
          <span>Services</span>
        </button>

        {/* Center Button */}
   

        {/* About */}
        <button className="flex flex-col items-center text-xs hover:text-green-500">
          <UserIcon />
          <span>About</span>
        </button>

        {/* Contact */}
        <button className="flex flex-col items-center text-xs hover:text-green-500">
          <PhoneIcon />
          <span>Contact</span>
        </button>
      </nav>
    </>
  );
}

/* ================= ICONS ================= */

function HomeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1v-10.5z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M9 6V5a3 3 0 0 1 6 0v1"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M4 7h16v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M20 21a8 8 0 0 0-16 0"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M22 16.9v3a2 2 0 0 1-2.2 2
        19.8 19.8 0 0 1-8.6-3.1
        19.5 19.5 0 0 1-6-6
        19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7
        c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.3 9.7
        a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5
        c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M4 6h16M4 12h16M4 18h16" stroke="white" strokeWidth="2" />
    </svg>
  );
}
 
