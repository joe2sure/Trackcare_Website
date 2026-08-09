import Eyebrow from "@/components/ui/Eyebrow";
import { problemStats } from "@/lib/mock-data";

export default function Problem() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="max-w-2xl">
          <Eyebrow>The gap TrackCare closes</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Nigerian healthcare doesn&rsquo;t lack effort. It lacks a system.
          </h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-ink-soft">
            Records live on paper, in WhatsApp threads and in disconnected
            spreadsheets. Facilities that do go digital often fall over the
            moment the connection does. TrackCare was built for that reality —
            not around it.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {problemStats.map((p) => (
            <div key={p.stat} className="bg-paper p-8">
              <p className="font-display text-4xl font-semibold text-brand-blue">{p.stat}</p>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">{p.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
