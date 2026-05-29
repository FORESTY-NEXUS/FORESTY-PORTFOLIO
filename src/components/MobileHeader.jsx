export default function MobileHeader() {
  return (
 <header className="relative top-0 w-full bg-[#050A05] px-6 py-4 flex items-center justify-between lg:hidden">
      {/* Brand Name - Sharp, clean, and distinct */}
      <h1 className="text-2xl text-center font-bold tracking-[0.05em] text-[#22c55e]">
        FORESTY
      </h1>
       <button
          onClick={() => window.open("https://wa.me/923195403032", "_blank")}
          className="
            px-5 py-2 bg-green-500 rounded-full font-medium
            hover:bg-green-600 hover:scale-105 transition
          "
        >
          Hire Me
        </button>
      

     
    </header>
  );
}