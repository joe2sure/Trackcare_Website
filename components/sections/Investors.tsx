import Eyebrow from "@/components/ui/Eyebrow";
import { investorMetrics, roadmap, useOfFunds } from "@/lib/mock-data";

export default function Investors() {
  return (
    <section id="investors" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <Eyebrow>For investors</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              A digital rail for 40,000+ facilities, still mostly on paper.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              We&rsquo;re building the infrastructure layer Nigerian healthcare
              runs on — starting with the facilities connectivity forgot.
              TrackCare is live, generating facility revenue, and shipping a
              new module roughly every four weeks.
            </p>
          </div>
          <a
            href="#cta"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[14px] font-semibold text-paper transition hover:opacity-90"
          >
            Request the data room →
          </a>
        </div>

        {/* Metrics */}
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {investorMetrics.map((m) => (
            <div key={m.label} className="bg-paper p-7">
              <p className="font-display text-3xl font-semibold text-ink">{m.value}</p>
              <p className="mt-2 text-[13px] font-medium text-ink">{m.label}</p>
              <p className="mt-1 text-[12px] text-ink-soft">{m.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          {/* Roadmap */}
          <div>
            <h3 className="font-display text-lg font-semibold text-ink">Platform roadmap</h3>
            <div className="mt-6 space-y-0">
              {roadmap.map((r, i) => (
                <div key={r.phase} className="relative flex gap-5 pb-8 last:pb-0">
                  <div className="flex flex-col items-center">
                    <span
                      className={`flex h-3 w-3 shrink-0 items-center justify-center rounded-full ${
                        r.status === "Shipped"
                          ? "bg-brand-green"
                          : r.status === "In progress"
                          ? "bg-signal-amber"
                          : "border-2 border-line bg-paper"
                      }`}
                    />
                    {i !== roadmap.length - 1 && <span className="mt-1 w-px flex-1 bg-line" />}
                  </div>
                  <div className="pt-[-2px]">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-[11px] text-ink-soft/60">{r.phase}</span>
                      <span
                        className={`mono-label rounded-full px-2 py-0.5 text-[9.5px] ${
                          r.status === "Shipped"
                            ? "bg-brand-green/10 text-brand-green"
                            : r.status === "In progress"
                            ? "bg-signal-amber/10 text-signal-amber"
                            : "bg-ink-soft/10 text-ink-soft"
                        }`}
                      >
                        {r.status}
                      </span>
                    </div>
                    <p className="mt-1.5 text-[14.5px] font-semibold text-ink">{r.title}</p>
                    <p className="mt-1 max-w-md text-[13px] leading-relaxed text-ink-soft">{r.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Use of funds */}
          <div className="rounded-2xl border border-line bg-paper-dim p-7">
            <h3 className="font-display text-lg font-semibold text-ink">Use of funds</h3>
            <p className="mt-1.5 text-[13px] text-ink-soft">Current seed round allocation</p>
            <div className="mt-6 space-y-5">
              {useOfFunds.map((f) => (
                <div key={f.label}>
                  <div className="flex items-center justify-between text-[12.5px]">
                    <span className="font-medium text-ink">{f.label}</span>
                    <span className="font-mono text-ink-soft">{f.pct}%</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-line">
                    <div
                      className="h-full rounded-full bg-brand-blue"
                      style={{ width: `${f.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
