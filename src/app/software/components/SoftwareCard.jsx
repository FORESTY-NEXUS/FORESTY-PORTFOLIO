import { ArrowRight, CheckCircle2, Dumbbell, Store } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Helper to choose the right icon based on the product
const getIcon = (id) => {
  if (id === "gym-management") return <Dumbbell className="h-8 w-8 text-green-500" />;
  if (id === "tech-store-management") return <Store className="h-8 w-8 text-green-500" />;
  return <CheckCircle2 className="h-8 w-8 text-green-500" />;
};

export default function SoftwareCard({ product }) {
  const { id, name, shortDescription, description, image, features, demoUrl } = product;

  return (
    <div className="group relative flex   rounded-[2rem] border border-white/10 bg-[#0b1109] transition-all duration-300 hover:-translate-y-2 hover:border-green-500/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
      <div className="p-8  sm:p-10 flex-1 flex flex-col ">
        {/* Icon & Title */}
        <div className="mb-8 flex gap-4  justify-center items-center">
          <div className=" inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:border-green-500/30 transition-colors">
            {getIcon(id)}
          </div>
         
          <h3 className="text-3xl  uppercase  font-semibold tracking-tight text-white">{name}</h3>
   
        
        </div>
          <div className=" flex flex-col justtify-center items-center mb-4 6 ">
       <p className="mt-2 text-sm font-medium text-green-400">{shortDescription}</p>
          <p className="mt-4 text-base leading-relaxed text-center text-white/60">{description}</p>
      </div>    

        {/* Screenshot / Mockup Placeholder */}
        <div className="relative mb-10 overflow-hidden rounded-2xl border border-white/10 bg-[#060a05] aspect-[16/10] group-hover:border-white/20 transition-all transition-transform duration-500">
          {image ? (
            <Image 
              src={image} 
              alt={`${name} Dashboard Screenshot`} 
              fill 
              className="object-cover object-top transition-transform duration-700 group-hover:-translate-y-2 group-hover:scale-[1.02]" 
            />
          ) : (
             <div className="absolute inset-0 flex items-center justify-center flex-col gap-3 text-white/20 transition-transform duration-700 group-hover:-translate-y-2">
               <span className="text-xs uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full">Dashboard UI</span>
               <span className="text-[10px] text-center max-w-[200px]">Actual UI Mockup goes here. Configure image in data/software.js</span>
             </div>
          )}
        </div>

        {/* Features */}
        <div className="mb-10 flex-1 ">
          <div className="grid lg:grid-cols-4  grid-cols-2 gap-x-6 gap-y-6  ">
            {features.map((feature, idx) => (
              
              <div key={idx} className="flex items-start  gap-3 ">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-green-500/70 mt-0.5" />
                <span className="text-sm text-start  font-medium text-white/80">{feature}</span>
              </div>
        
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-auto">
          {/* We use <a> tag or Link for demo. A placeholder "#" is used if none provided */}
          <Link 
            href={demoUrl || "#"} 
            className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 py-4 text-sm font-semibold text-white transition hover:bg-green-500 hover:text-black hover:border-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-500"
          >
            Preview Demo 
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
