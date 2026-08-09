import Eyebrow from "@/components/ui/Eyebrow";
import { pillars, roles } from "@/lib/mock-data";

const accentMap = {
  blue: "var(--brand-blue)",
  green: "var(--brand-green)",
  teal: "var(--clinical-teal)",
  amber: "var(--signal-amber)",
} as const;

export default function Platform() {
  return (
    <section id="platform" className="border-b border-line bg-paper-dim">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <Eyebrow>One platform, eight connected modules</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Everything a facility runs on, wired together.
            </h2>
          </div>
          <p className="max-w-sm text-[14.5px] leading-relaxed text-ink-soft">
            Every module shares one patient identity and one audit trail —
            nothing here is a bolt-on integration.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div
              key={p.id}
              className="group flex flex-col rounded-2xl border border-line bg-paper p-6 transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-18px_rgba(10,20,32,0.25)]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-ink-soft/60">{p.index}</span>
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: accentMap[p.accent] }}
                />
              </div>
              <h3 className="mt-4 font-display text-[16.5px] font-semibold leading-snug text-ink">
                {p.name}
              </h3>
              <p className="mt-1.5 text-[12.5px] font-medium" style={{ color: accentMap[p.accent] }}>
                {p.tagline}
              </p>
              <p className="mt-3 text-[13.5px] leading-relaxed text-ink-soft">
                {p.description}
              </p>
              <ul className="mt-4 space-y-1.5 border-t border-line pt-4">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-[12.5px] text-ink-soft">
                    <span
                      className="mt-1.5 h-1 w-1 shrink-0 rounded-full"
                      style={{ background: accentMap[p.accent] }}
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Role access strip */}
        <div className="mt-16 rounded-2xl border border-line bg-navy-950 p-8 sm:p-10">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="mono-label text-[11px] text-brand-green">Role-based access control</p>
              <h3 className="mt-2 font-display text-xl font-semibold text-white sm:text-2xl">
                Ten roles. One system, filtered for each.
              </h3>
            </div>
            <p className="max-w-xs text-[13px] leading-relaxed text-white/50">
              Every sidebar, permission and dashboard is scoped to what a role
              actually needs to see — from a receptionist&rsquo;s queue to a
              super admin&rsquo;s network view.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-5">
            {roles.map((r) => (
              <div key={r.role} className="bg-navy-950 px-4 py-5">
                <p className="text-[13px] font-semibold text-white">{r.role}</p>
                <p className="mt-1 text-[11.5px] text-white/45">{r.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
