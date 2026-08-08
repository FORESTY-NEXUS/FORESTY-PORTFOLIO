export default function SectionHeading({ eyebrow, title, description, align = "center" }) {
  const alignment = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div className={`mx-auto flex max-w-2xl flex-col ${alignment}`}>
      {eyebrow && <span className="mb-4 text-sm font-semibold text-green-400">{eyebrow}</span>}
      <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-pretty text-base leading-7 text-zinc-400 sm:text-lg">{description}</p>}
    </div>
  );
}
