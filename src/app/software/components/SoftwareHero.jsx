import { ShieldCheck, Zap, LineChart } from "lucide-react";
import Link from "next/link";

export default function SoftwareHero() {
  return (
    <section className="relative  overflow-hidden px-5 pb-20 lg:pt-36  pt-20 sm:pb-28">
      {/* Background styling for the hero */}
      <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(180,230,58,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(180,230,58,.06)_1px,transparent_1px)] [background-size:52px_52px]" />
      
      <div className="relative mx-auto flex flex-col max-w-7xl    items-center gap-14 lg:grid-cols-2">
        {/* Left Side: Copy */}
        <div className="flex flex-col justify-center items-center gap-6">
          <div>
            <span className="inline-block  px-3 py-1 text-xs font-bold uppercase tracking-wider text-green-400">
              
              Software
            </span>
          </div>
          <div className="flex flex-col items-center  justify-center w-screen gap-6">
          <h1 className="lg:max-w-5xl w-7xl text-2xl text-center font-semibold leading-[1.1] tracking-[-.04em] sm:text-6xl text-white">
            Business Management Software Built for <br />
            <span className="text-green-500">Real-World Operations.</span>
          </h1>
          <p className="max-w-xl lg:text-lg text-sm text-center   lg:leading-8 text-white/70">
            Powerful, easy-to-use software solutions built to help businesses manage their operations, track everything in real-time, and grow faster.
          </p>
          </div>
 <div className="relative rounded-[2rem] right-[40%] left-[0%] border border-green-500/25 bg-[#0b1109] p-3 mt-10 lg:w-[50vw] w-[90vw]  h-[50vh] shadow-[0_40px_100px_rgba(0,0,0,.45)]">
          {/* 
            If exact screenshots aren't present yet, this CSS-based mockup structurally 
            meets the prompt's visual requirements. User will replace with <img /> later if needed.
           */}
           {/* DASHBOARD */}
          <div className="rounded-[1.5rem] border border-white/10 bg-[#060a05] h-full  p-4 overflow-hidden flex flex-col gap-4 min-h-[400px]">
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs text-white/50">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-red-500"></span>
                <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              <span className="rounded-full border border-green-500/30 px-2 py-1 text-green-400">Dashboard</span>
            </div>
            
            {/* Main Content Area */}
            <div className="flex gap-4 h-full">
              {/* Sidebar */}
              <div className="hidden sm:flex flex-col gap-3 w-1/4 max-w-[120px] border-r border-white/10 pr-4">
                {['Overview', 'Customers', 'Orders', 'Products', 'Revenue'].map((item, i) => (
                  <div key={item} className={`h-6 rounded w-full flex items-center px-2 text-[10px] ${i === 0 ? 'bg-green-500/20 text-green-400' : 'text-white/40'}`}>
                    {item}
                  </div>
                ))}
              </div>
              
              {/* Dashboard Content */}
              <div className="flex-1 flex flex-col gap-4">
                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 border-b border-white/10 pb-4">
                  {[
                    { label: 'Revenue', value: '$24.5K', change: '+12%' },
                    { label: 'Customers', value: '1,204', change: '+5%' },
                    { label: 'Orders', value: '849', change: '+18%' },
                    { label: 'Profit', value: '$8.2K', change: '+10%' }
                  ].map(stat => (
                    <div key={stat.label} className="bg-white/5 rounded-lg p-2 flex flex-col gap-1">
                      <span className="text-[10px] text-white/40 uppercase">{stat.label}</span>
                      <span className="text-sm font-semibold">{stat.value}</span>
                      <span className="text-[10px] text-green-400">{stat.change}</span>
                    </div>
                  ))}
                </div>

                {/* Charts Area */}
                <div className="flex gap-4 flex-1">
                  <div className="flex-1 bg-white/5 rounded-lg p-3 flex flex-col">
                    <span className="text-[10px] text-white/40 mb-2">Activity Chart</span>
                    <div className="flex-1 relative border-b border-l border-white/10 flex items-end justify-between px-2 pb-1">
                      {[40, 70, 45, 90, 60, 80, 50].map((h, i) => (
                        <div key={i} className="w-1/12 bg-green-500/70 rounded-t-sm transition-all duration-500" style={{ height: `${h}%` }}></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Recent Activity Table */}
                <div className="bg-white/5 rounded-lg p-3">
                   <div className="text-[10px] text-white/40 mb-2">Recent Users</div>
                   <div className="flex flex-col gap-1">
                     {[1,2,3].map(i => (
                       <div key={i} className="flex justify-between items-center bg-white/5 p-1 rounded">
                         <div className="h-2 w-16 bg-white/20 rounded"></div>
                         <div className="h-2 w-8 bg-green-500/40 rounded"></div>
                       </div>
                     ))}
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          {/* Feature Highlights */}
          <div className="mt-8 grid gap-6  sm:grid-cols-3 pl-20">
            <div className="flex flex-col gap-2">
              <ShieldCheck className="h-6 w-6 text-green-500" />
              <h3 className="text-sm font-semibold text-white">Secure & Reliable</h3>
              <p className="text-xs text-white/50 leading-relaxed">Your business data is protected.</p>
            </div>
            <div className="flex flex-col gap-2">
              <Zap className="h-6 w-6 text-green-500" />
              <h3 className="text-sm font-semibold text-white">Easy to Use</h3>
              <p className="text-xs text-white/50 leading-relaxed">Simple interfaces designed for everyday business operations.</p>
            </div>
            <div className="flex flex-col gap-2">
              <LineChart className="h-6 w-6 text-green-500" />
              <h3 className="text-sm font-semibold text-white">Real-Time Insights</h3>
              <p className="text-xs text-white/50 leading-relaxed">Make better decisions using live business data.</p>
            </div>
          </div>
        </div>

 
       

      </div>
    </section>
  );
}
