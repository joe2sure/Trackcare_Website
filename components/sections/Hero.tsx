import PulseTrace from "@/components/ui/PulseTrace";
import Eyebrow from "@/components/ui/Eyebrow";
import { heroStats, logoStrip } from "@/lib/mock-data";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy-950 text-white">
      {/* Ambient grid + glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.22), transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute top-1/3 left-[-15%] h-[420px] w-[420px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(0,114,206,0.25), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-10 lg:px-10 lg:pt-24">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div>
            <Eyebrow tone="dark">Healthcare operating system · Built for Nigeria</Eyebrow>

            <h1 className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.06] tracking-tight sm:text-6xl lg:text-[3.6rem]">
              The record follows
              <br />
              the patient — <span style={{ color: "var(--brand-green)" }}>even offline.</span>
            </h1>

            <p className="mt-6 max-w-lg text-[16.5px] leading-relaxed text-white/65">
              TrackCare connects patient identity, clinical care, pharmacy, billing
              and facility networks in one platform — with a mobile app for
              patients and an offline-first desktop app for clinics the
              internet forgets.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#cta"
                className="rounded-full bg-brand-green px-6 py-3.5 text-[14px] font-semibold text-navy-950 transition hover:brightness-110"
              >
                Request a live demo
              </a>
              <a
                href="#investors"
                className="rounded-full border border-white/20 px-6 py-3.5 text-[14px] font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
              >
                For investors →
              </a>
            </div>

            <div className="mt-8 flex items-center gap-2 text-[12.5px] text-white/40">
              <span className="mono-label">Live on</span>
              <span className="text-white/60">6 facilities across 4 states</span>
              <span className="mx-1">·</span>
              <span className="mono-label">Compliant with</span>
              <span className="text-white/60">NDPR / NDPA 2023</span>
            </div>
          </div>

          {/* Signature: vitals monitor panel */}
          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-navy-900/70 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
              <div className="flex items-center justify-between">
                <span className="mono-label text-[10.5px] text-white/45">Digital Health ID · Live Read</span>
                <span className="flex items-center gap-1.5 text-[10.5px] text-brand-green mono-label">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-green pulse-dot" />
                  synced
                </span>
              </div>

              <div className="mt-5">
                <PulseTrace className="h-24 w-full" />
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
                <div>
                  <p className="font-mono text-xl font-medium text-white">72</p>
                  <p className="mono-label mt-1 text-[10px] text-white/40">BPM</p>
                </div>
                <div>
                  <p className="font-mono text-xl font-medium text-white">98.4°</p>
                  <p className="mono-label mt-1 text-[10px] text-white/40">TEMP</p>
                </div>
                <div>
                  <p className="font-mono text-xl font-medium text-white">120/80</p>
                  <p className="mono-label mt-1 text-[10px] text-white/40">BP</p>
                </div>
              </div>
            </div>

            {/* Floating Health ID card */}
            <div
              className="float-slow absolute -bottom-8 -left-6 w-52 rounded-xl border border-white/10 bg-gradient-to-br from-brand-blue to-navy-800 p-4 shadow-xl sm:-left-10"
              style={{ ["--rot" as string]: "-6deg" }}
            >
              <div className="flex items-center justify-between">
                <span className="mono-label text-[9px] text-white/60">TRACKCARE ID</span>
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-white/70" fill="none">
                  <path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <p className="mt-4 text-[13px] font-semibold text-white">Ngozi A. Chukwu</p>
              <p className="mono-label mt-1 text-[9.5px] text-white/50">NG-HID-2847-1930</p>
              <div className="mt-3 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                <span className="text-[9.5px] text-white/60">NFC active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stat rail */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
          {heroStats.map((s) => (
            <div key={s.label} className="bg-navy-950 px-5 py-6">
              <p className="mono-label text-[10px] text-white/35">{s.mono}</p>
              <p className="mt-2 font-display text-3xl font-semibold text-white">
                {s.value}
                <span className="text-lg text-brand-green">{s.unit}</span>
              </p>
              <p className="mt-1 text-[12.5px] text-white/50">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Logo marquee */}
      <div className="relative mt-16 border-t border-white/10 py-7">
        <div className="mx-auto flex max-w-7xl items-center gap-6 px-6 lg:px-10">
          <span className="mono-label whitespace-nowrap text-[10.5px] text-white/35">
            Trusted by facilities
          </span>
          <div className="hairline-dark w-10 shrink-0" />
          <div className="relative flex-1 overflow-hidden">
            <div className="marquee-track flex w-max items-center gap-14">
              {[...logoStrip, ...logoStrip].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="whitespace-nowrap font-display text-[15px] font-medium text-white/35"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
