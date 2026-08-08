export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center  px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-green-300">
      {children}
    </span>
  );
}
