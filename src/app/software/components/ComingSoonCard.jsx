import { Lock, Utensils, GraduationCap, Scissors, Pill } from "lucide-react";

const getIcon = (id) => {
  if (id === "restaurant-management") return <Utensils className="h-6 w-6 text-white/20" />;
  if (id === "school-management") return <GraduationCap className="h-6 w-6 text-white/20" />;
  if (id === "salon-management") return <Scissors className="h-6 w-6 text-white/20" />;
  if (id === "pharmacy-management") return <Pill className="h-6 w-6 text-white/20" />;
  return <Lock className="h-6 w-6 text-white/20" />;
};

export default function ComingSoonCard({ product }) {
  const { id, name } = product;

  return (
    <div className="relative flex flex-col rounded-2xl border border-white/5 bg-[#0b1109]/50 p-6 sm:p-8 transition-colors hover:border-white/10 hover:bg-[#0b1109]">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/5 mb-6">
        {getIcon(id)}
      </div>
      
      <h3 className="text-lg font-semibold tracking-tight text-white/70 mb-1">{name}</h3>
      
      <div className="mt-auto pt-6">
         <span className="inline-block rounded border border-white/5 bg-white/5 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-white/30">
            Coming Soon
         </span>
      </div>

      {/* Lock Icon Overlay in top right */}
      <div className="absolute top-6 right-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/40 border border-white/5">
          <Lock className="h-3.5 w-3.5 text-white/30" />
        </div>
      </div>
    </div>
  );
}
