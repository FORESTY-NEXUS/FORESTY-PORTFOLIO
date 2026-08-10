export default function ComingSoonSection({ children }) {
  return (
    <section className="px-5 py-24 bg-[#091006]">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-green-500">
            More Coming Soon
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl text-white">
            More Software <span className="text-green-500">Coming Soon</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/50">
            We&apos;re building more tools to help businesses manage their operations from one powerful ecosystem.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {children}
        </div>
      </div>
    </section>
  );
}
