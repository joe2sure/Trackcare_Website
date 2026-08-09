"use client";

import { useState } from "react";
import Eyebrow from "@/components/ui/Eyebrow";
import { surfaces } from "@/lib/mock-data";

function BrowserMock() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-navy-900">
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-navy-800 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-signal-red/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-signal-amber/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-brand-green/70" />
        <span className="ml-4 font-mono text-[10.5px] text-white/35">app.trackcare.ng/dashboard</span>
      </div>
      <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[130px_1fr]">
        <div className="space-y-1 border-r border-white/10 p-3">
          {["Overview", "Patients", "Pharmacy", "Billing", "Network", "Compliance"].map((item, i) => (
            <div
              key={item}
              className={`rounded-md px-2.5 py-2 text-[10.5px] ${
                i === 0 ? "bg-brand-blue/20 text-brand-blue-soft" : "text-white/40"
              }`}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="p-4">
          <div className="grid grid-cols-3 gap-2">
            {[
              { l: "Bed occupancy", v: "82%" },
              { l: "Today's visits", v: "146" },
              { l: "Revenue (MTD)", v: "₦4.2M" },
            ].map((k) => (
              <div key={k.l} className="rounded-lg border border-white/10 bg-navy-800 p-3">
                <p className="font-mono text-lg font-medium text-white">{k.v}</p>
                <p className="mt-1 text-[9.5px] text-white/40">{k.l}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-lg border border-white/10 bg-navy-800 p-3">
            <p className="text-[10px] text-white/40">Patient queue</p>
            <div className="mt-2 space-y-1.5">
              {["Ngozi A. Chukwu — Consultation", "Ibrahim S. Bello — Lab result review", "Grace O. Eze — Dispense"].map(
                (row) => (
                  <div key={row} className="flex items-center justify-between rounded bg-white/5 px-2.5 py-1.5">
                    <span className="text-[10px] text-white/60">{row}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneMock() {
  return (
    <div className="mx-auto w-[220px] rounded-[2rem] border-[6px] border-navy-800 bg-navy-900 p-1.5 shadow-2xl">
      <div className="overflow-hidden rounded-[1.5rem] bg-navy-950">
        <div className="flex items-center justify-between px-4 pt-3">
          <span className="font-mono text-[9px] text-white/40">9:41</span>
          <span className="h-1 w-8 rounded-full bg-white/20" />
        </div>
        <div className="px-4 pt-4 pb-5">
          <p className="text-[10px] text-white/40">Welcome back</p>
          <p className="text-[13px] font-semibold text-white">Ngozi Chukwu</p>

          <div className="mt-4 rounded-xl bg-gradient-to-br from-brand-blue to-navy-800 p-3">
            <p className="mono-label text-[8px] text-white/60">CARE WALLET</p>
            <p className="mt-1 font-mono text-lg font-semibold text-white">₦12,400</p>
            <div className="mt-2 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
              <span className="text-[8.5px] text-white/60">Health ID active</span>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2 text-center">
            {["Book", "Records", "Message"].map((a) => (
              <div key={a} className="rounded-lg border border-white/10 bg-white/5 py-2.5">
                <span className="text-[9px] text-white/60">{a}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3">
            <p className="text-[9px] text-white/40">Next appointment</p>
            <p className="mt-1 text-[10.5px] text-white">Dr. Fashola — Fri, 10:30am</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DesktopMock() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-navy-900">
      <div className="flex items-center justify-between border-b border-white/10 bg-navy-800 px-4 py-2.5">
        <span className="font-mono text-[10px] text-white/40">TrackCare Desktop — Lekki PHC</span>
        <span className="flex items-center gap-1.5 rounded-full bg-signal-amber/15 px-2 py-0.5 text-[9px] text-signal-amber">
          <span className="h-1.5 w-1.5 rounded-full bg-signal-amber" />
          Offline — queued
        </span>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {["Encounters", "Dispense log", "Payments", "Sync queue"].map((k, i) => (
            <div key={k} className="rounded-lg border border-white/10 bg-navy-800 p-3">
              <p className="font-mono text-base font-medium text-white">{[6, 9, 4, 3][i]}</p>
              <p className="mt-1 text-[9.5px] text-white/40">{k} pending</p>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-lg border border-white/10 bg-navy-800 p-3">
          <div className="flex items-center justify-between">
            <p className="text-[10px] text-white/40">Local sync queue</p>
            <p className="font-mono text-[9.5px] text-white/40">3 of 22 pending</p>
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[86%] rounded-full bg-brand-green" />
          </div>
          <p className="mt-2 text-[9.5px] text-white/40">
            Reconnect detected — reconciling records automatically, no data lost.
          </p>
        </div>
      </div>
    </div>
  );
}

const mocks: Record<string, React.ReactNode> = {
  web: <BrowserMock />,
  mobile: <PhoneMock />,
  desktop: <DesktopMock />,
};

export default function Surfaces() {
  const [active, setActive] = useState(surfaces[0].id);
  const current = surfaces.find((s) => s.id === active)!;

  return (
    <section id="access" className="border-b border-line-dark bg-navy-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="max-w-2xl">
          <Eyebrow tone="dark">Three surfaces, one shared record</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Built for the boardroom, the ward and the bedside.
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {surfaces.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`rounded-full px-4 py-2 text-[13px] font-medium transition ${
                active === s.id
                  ? "bg-white text-navy-950"
                  : "border border-white/15 text-white/60 hover:border-white/30 hover:text-white"
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex justify-center">{mocks[current.device === "phone" ? "mobile" : current.device === "desktop" ? "desktop" : "web"]}</div>

          <div>
            <p className="mono-label text-[11px] text-brand-green">{current.kicker}</p>
            <h3 className="mt-3 font-display text-2xl font-semibold sm:text-[1.75rem]">
              {current.headline}
            </h3>
            <p className="mt-4 text-[14.5px] leading-relaxed text-white/60">
              {current.description}
            </p>
            <ul className="mt-6 space-y-3">
              {current.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[13.5px] text-white/75">
                  <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-green/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
