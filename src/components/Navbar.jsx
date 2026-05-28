import { BriefcaseIcon, HomeIcon, PhoneIcon, UserIcon } from "lucide-react";

export default function Navbar() {
  const scrollToSection = (id) => {
    let targetId = id;
    if (id === "services" && window.innerWidth >= 1024) {
      targetId = "services-anchor";
    }
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <nav className="
        hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-50
        w-[90%] lg:w-3/4 h-16 px-6 border border-gray-700
        rounded-full backdrop-blur-md bg-white/5 items-center
        justify-between text-white
      ">
        <h1
          onClick={() => scrollToSection("home")}
          className="text-2xl font-bold text-green-500 tracking-wider cursor-pointer"
        >
          FORESTY
        </h1>

        <ul className="flex items-center gap-8 text-lg font-medium">
          <li onClick={() => scrollToSection("services")} className="hover:text-green-500 cursor-pointer transition">
            Services
          </li>
          <li onClick={() => scrollToSection("projects")} className="hover:text-green-500 cursor-pointer transition">
            Projects
          </li>
          <li onClick={() => scrollToSection("about")} className="hover:text-green-500 cursor-pointer transition">
            About
          </li>
          <li onClick={() => scrollToSection("contact")} className="hover:text-green-500 cursor-pointer transition">
            Contact
          </li>
        </ul>

        <button
          onClick={() => window.open("https://wa.me/923195403032", "_blank")}
          className="
            px-5 py-2 bg-green-500 rounded-full font-medium
            hover:bg-green-600 hover:scale-105 transition
          "
        >
          Hire Me
        </button>
      </nav>

      {/* ================= MOBILE BOTTOM NAV ================= */}
     <nav className="
  md:hidden fixed bottom-8  z-50 w-screen
  h-16 rounded-full border border-gray-800
  bg-black/70 backdrop-blur-xl flex items-center justify-around
  text-white shadow-2xl
">

        <button onClick={() => scrollToSection("home")} className="flex flex-col items-center text-xs hover:text-green-500">
          <HomeIcon />
          <span>Home</span>
        </button>

        <button onClick={() => scrollToSection("services")} className="flex flex-col items-center text-xs hover:text-green-500">
          <BriefcaseIcon />
          <span>Services</span>
        </button>

        <button onClick={() => scrollToSection("about")} className="flex flex-col items-center text-xs hover:text-green-500">
          <UserIcon />
          <span>About</span>
        </button>

        <button onClick={() => scrollToSection("contact")} className="flex flex-col items-center text-xs hover:text-green-500">
          <PhoneIcon />
          <span>Contact</span>
        </button>
      </nav>
    </>
  );
}
