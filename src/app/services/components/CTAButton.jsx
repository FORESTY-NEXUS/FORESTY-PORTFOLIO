import Link from "next/link";

export default function CTAButton({ href, children, variant = "primary", className = "" }) {
  const styles = variant === "primary"
    ? "bg-green-500 text-black hover:bg-green-400"
    : "border border-white/15 bg-white/[0.03] text-white hover:border-white/30 hover:bg-white/[0.08]";

  return <Link href={href} className={`inline-flex min-h-12 items-center justify-center rounded-xl px-5 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400 ${styles} ${className}`}>{children}</Link>;
}
