import { ShieldCheck, Zap, LineChart } from "lucide-react";
import Link from "next/link";

export default function SoftwareHero() {
  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      {/* Background styling for the hero */}
      <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(180,230,58,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(180,230,58,.06)_1px,transparent_1px)] [background-size:52px_52px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Main Content Column */}
        <div className="flex flex-col items-center justify-center text-center">
          {/* Category Badge */}
          <span className="inline-block rounded-full bg-green-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-green-400">
            Software
          </span>

          {/* Heading */}
          <h1 className="mt-6 max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Business Management Software Built for{" "}
            <span className="text-green-500">Real-World Operations.</span>
          </h1>

          {/* Subheading */}
          <p className="mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
            Powerful, easy-to-use software solutions built to help businesses manage their operations, track everything in real-time, and grow faster.
          </p>

          {/* CSS Mockup Container */}
          <div className="mt-10 w-full max-w-4xl rounded-[1.5rem] sm:rounded-[2rem] border border-green-500/25 bg-[#0b1109] p-2 sm:p-4 shadow-[0_40px_100px_rgba(0,0,0,.45)]">
            <div className="flex min-h-[350px] sm:min-h-[420px] flex-col gap-4 rounded-[1rem] sm:rounded-[1.5rem] border border-white/10 bg-[#060a05] p-3 sm:p-5 text-left overflow-hidden">
              {/* Top Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs text-white/50">
                <span className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>
                </span>
                <span className="rounded-full border border-green-500/30 px-2.5 py-0.5 text-[11px] text-green-400">
                  Dashboard
                </span>
              </div>

              {/* Main Content Area */}
              <div className="flex flex-1 gap-4 overflow-x-auto">
                {/* Sidebar */}
                <div className="hidden sm:flex flex-col gap-2.5 w-1/4 max-w-[120px] border-r border-white/10 pr-3">
                  {['Overview', 'Customers', 'Orders', 'Products', 'Revenue'].map((item, i) => (
                    <div
                      key={item}
                      className={`h-7 rounded-md w-full flex items-center px-2.5 text-[11px] ${
                        i === 0 ? 'bg-green-500/20 text-green-400 font-medium' : 'text-white/40'
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* Dashboard Inner Content */}
                <div className="flex-1 flex flex-col gap-3 min-w-[260px]">
                  {/* Stats Row */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 border-b border-white/10 pb-3">
                    {[
                      { label: 'Revenue', value: '$24.5K', change: '+12%' },
                      { label: 'Customers', value: '1,204', change: '+5%' },
                      { label: 'Orders', value: '849', change: '+18%' },
                      { label: 'Profit', value: '$8.2K', change: '+10%' }
                    ].map(stat => (
                      <div key={stat.label} className="bg-white/5 rounded-lg p-2 flex flex-col gap-0.5">
                        <span className="text-[9px] text-white/40 uppercase tracking-wider">{stat.label}</span>
                        <span className="text-xs sm:text-sm font-semibold text-white">{stat.value}</span>
                        <span className="text-[9px] text-green-400">{stat.change}</span>
                      </div>
                    ))}
                  </div>

                  {/* Charts Area */}
                  <div className="flex-1 bg-white/5 rounded-lg p-3 flex flex-col min-h-[100px]">
                    <span className="text-[10px] text-white/40 mb-2">Activity Chart</span>
                    <div className="flex-1 relative border-b border-l border-white/10 flex items-end justify-between px-2 pb-1 gap-1">
                      {[40, 70, 45, 90, 60, 80, 50].map((h, i) => (
                        <div
                          key={i}
                          className="w-full bg-green-500/70 rounded-t-sm transition-all duration-500"
                          style={{ height: `${h}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="bg-white/5 rounded-lg p-2.5">
                    <div className="text-[10px] text-white/40 mb-1.5">Recent Users</div>
                    <div className="flex flex-col gap-1.5">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="flex justify-between items-center bg-white/5 px-2 py-1 rounded">
                          <div className="h-1.5 w-16 bg-white/20 rounded"></div>
                          <div className="h-1.5 w-8 bg-green-500/40 rounded"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-8 text-left sm:grid-cols-3 max-w-4xl w-full">
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
              <ShieldCheck className="h-6 w-6 text-green-500" />
              <h3 className="text-sm font-semibold text-white">Secure & Reliable</h3>
              <p className="text-xs text-white/50 leading-relaxed">
                Your business data is protected with enterprise-grade security.
              </p>
            </div>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
              <Zap className="h-6 w-6 text-green-500" />
              <h3 className="text-sm font-semibold text-white">Easy to Use</h3>
              <p className="text-xs text-white/50 leading-relaxed">
                Simple interfaces designed for everyday business operations.
              </p>
            </div>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
              <LineChart className="h-6 w-6 text-green-500" />
              <h3 className="text-sm font-semibold text-white">Real-Time Insights</h3>
              <p className="text-xs text-white/50 leading-relaxed">
                Make better decisions using live business data and analytics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}