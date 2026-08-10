export default function SoftwareOverview({ children }) {
  return (
    <section className="border-y border-white/10 bg-black px-5 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
         
          <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl text-white">
            Software Solutions for <br className="hidden sm:block" /> 
            <span className="text-green-500">Every Business</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
            Explore our business management software designed to simplify operations and improve productivity.
          </p>
        </div>
        
        {/* Render Software Cards passed as children */}
        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {children}
        </div>
      </div>
    </section>
  );
}
