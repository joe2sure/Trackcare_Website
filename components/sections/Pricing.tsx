import Eyebrow from "@/components/ui/Eyebrow";
import { pricingTiers } from "@/lib/mock-data";

export default function Pricing() {
  return (
    <section id="pricing" className="border-b border-line bg-paper-dim">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="max-w-xl">
          <Eyebrow>Pricing</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Priced for the facility you run today.
          </h2>
          <p className="mt-4 text-[14.5px] leading-relaxed text-ink-soft">
            Every tier includes the offline desktop app and the patient mobile
            app at no extra cost.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-2xl p-7 ${
                tier.highlighted
                  ? "border-2 border-brand-blue bg-paper shadow-[0_20px_45px_-25px_rgba(0,114,206,0.45)]"
                  : "border border-line bg-paper"
              }`}
            >
              {tier.highlighted && (
                <span className="mono-label mb-4 inline-flex w-fit rounded-full bg-brand-blue/10 px-2.5 py-1 text-[9.5px] text-brand-blue">
                  Most chosen
                </span>
              )}
              <h3 className="font-display text-lg font-semibold text-ink">{tier.name}</h3>
              <p className="mt-1.5 text-[13px] text-ink-soft">{tier.description}</p>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="font-display text-3xl font-semibold text-ink">{tier.price}</span>
                <span className="text-[13px] text-ink-soft">{tier.period}</span>
              </div>
              <ul className="mt-6 flex-1 space-y-2.5 border-t border-line pt-6">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13px] text-ink-soft">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-green" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`mt-7 rounded-full px-5 py-3 text-center text-[13.5px] font-semibold transition ${
                  tier.highlighted
                    ? "bg-brand-blue text-white hover:brightness-110"
                    : "border border-line text-ink hover:border-ink/30"
                }`}
              >
                {tier.name === "Enterprise" ? "Talk to sales" : "Start onboarding"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
