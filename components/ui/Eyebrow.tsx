export default function Eyebrow({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={`mono-label flex items-center gap-2 text-[11px] font-medium ${
        tone === "light" ? "text-ink-soft" : "text-white/60"
      }`}
    >
      <span
        className="inline-block h-1.5 w-1.5 rounded-full pulse-dot"
        style={{ background: "var(--brand-green)" }}
      />
      {children}
    </div>
  );
}
