export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-green-400/25 bg-green-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-green-300">
      {children}
    </span>
  );
}
