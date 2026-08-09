import Eyebrow from "@/components/ui/Eyebrow";
import { securityPoints } from "@/lib/mock-data";

export default function Security() {
  return (
    <section id="security" className="border-b border-line bg-paper-dim">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Eyebrow>Security & compliance</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Compliant with Nigeria&rsquo;s data protection law, by default.
            </h2>
            <p className="mt-4 max-w-md text-[14.5px] leading-relaxed text-ink-soft">
              Health data carries a different bar. TrackCare was built to
              NDPR/NDPA requirements from the first schema, not retrofitted
              for an audit.
            </p>

            <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-line bg-paper p-5">
              <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-brand-green/25">
                <span className="font-mono text-lg font-semibold text-brand-green">74</span>
              </div>
              <div>
                <p className="text-[13px] font-semibold text-ink">Compliance score</p>
                <p className="text-[12px] text-ink-soft">15-point NDPR/NDPA checklist, pilot network average</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {securityPoints.map((s) => (
              <div key={s.title} className="rounded-2xl border border-line bg-paper p-6">
                <h3 className="font-display text-[15px] font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
