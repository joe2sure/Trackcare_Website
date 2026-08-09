import Eyebrow from "@/components/ui/Eyebrow";
import { testimonials } from "@/lib/mock-data";

export default function Testimonials() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <Eyebrow>From the network</Eyebrow>
        <h2 className="mt-5 max-w-xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          What changes on the ground.
        </h2>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col justify-between rounded-2xl border border-line bg-paper-dim p-7"
            >
              <blockquote className="text-[14.5px] leading-relaxed text-ink">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-line pt-5">
                <p className="text-[13.5px] font-semibold text-ink">{t.name}</p>
                <p className="mt-0.5 text-[12.5px] text-ink-soft">
                  {t.role} · {t.facility}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
