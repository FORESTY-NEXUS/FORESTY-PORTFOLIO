import { ArrowUpRight, BarChart3, Check, CircleDollarSign, MousePointer2, Send, ShoppingBag } from "lucide-react";

const labels = {
  website: "Growth website", software: "Operations hub", pos: "Business overview", automation: "Customer flow", marketing: "Campaign growth", branding: "Brand system", ads: "Ad performance",
};
const chartHeights = ["h-[35%]", "h-[48%]", "h-[38%]", "h-[65%]", "h-[55%]", "h-[82%]", "h-[72%]"];

export default function ServiceIllustration({ type }) {
  const isSales = type === "pos" || type === "ads" || type === "marketing";
  const isChat = type === "automation";
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[430px] items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-[#101411] p-5 sm:p-8" aria-label={`${labels[type] || "Service"} dashboard preview`}>
      <div className="absolute inset-x-0 top-0 h-24 bg-green-500/[0.06]" />
      <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#161a17] shadow-2xl shadow-black/30">
        <div className="flex h-11 items-center gap-2 border-b border-white/10 px-4"><span className="h-2 w-2 rounded-full bg-green-400" /><span className="h-2 w-2 rounded-full bg-white/20" /><span className="h-2 w-2 rounded-full bg-white/20" /><span className="ml-2 text-[10px] font-medium text-zinc-500">{labels[type] || "FORESTY"}</span></div>
        {isChat ? <div className="space-y-3 p-5"><div className="w-3/4 rounded-xl rounded-tl-sm bg-white/10 p-3 text-xs text-zinc-300">Hi, how can we help?</div><div className="ml-auto w-2/3 rounded-xl rounded-tr-sm bg-green-500 p-3 text-right text-xs font-medium text-black">I&apos;d like to know more</div><div className="w-4/5 rounded-xl rounded-tl-sm bg-white/10 p-3 text-xs text-zinc-300">Let&apos;s find the right solution.</div><div className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-[10px] text-zinc-500"><Send size={12} /> Type your message</div></div> : <div className="p-5"><div className="flex items-start justify-between"><div><p className="text-[10px] text-zinc-500">This month</p><p className="mt-1 text-xl font-semibold text-white">{isSales ? "$24,860" : "8,430"}</p></div><div className="rounded-lg bg-green-500/15 p-2 text-green-400">{isSales ? <CircleDollarSign size={16} /> : <ShoppingBag size={16} />}</div></div><div className="mt-6 flex h-20 items-end gap-2">{chartHeights.map((height, index) => <span key={index} className={`flex-1 rounded-t-sm bg-green-500/25 ${height}`} />)}</div><div className="mt-5 grid grid-cols-2 gap-3"><div className="rounded-xl border border-white/10 p-3"><BarChart3 className="text-green-400" size={15} /><p className="mt-2 text-xs font-medium text-white">+28.4%</p><p className="text-[10px] text-zinc-500">Performance</p></div><div className="rounded-xl border border-white/10 p-3"><MousePointer2 className="text-green-400" size={15} /><p className="mt-2 text-xs font-medium text-white">3.2x</p><p className="text-[10px] text-zinc-500">Growth rate</p></div></div></div>}
      </div>
      <div className="absolute bottom-5 right-5 flex items-center gap-1 rounded-full border border-green-400/20 bg-[#161a17] px-3 py-2 text-[10px] font-medium text-green-300"><Check size={12} /> Live <ArrowUpRight size={12} /></div>
    </div>
  );
}
