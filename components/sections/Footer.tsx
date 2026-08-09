import { footerLinks } from "@/lib/mock-data";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand-green">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-navy-950" fill="none">
                  <path d="M2 12h4l2-7 4 14 2-7h8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="font-display text-[15px] font-semibold text-white">TrackCare</span>
            </div>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-white/45">
              The offline-first healthcare operating system for Nigeria — one
              patient record across web, mobile and desktop.
            </p>
          </div>

          <div>
            <p className="mono-label text-[10.5px] text-white/35">Product</p>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.product.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[13px] text-white/60 transition hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mono-label text-[10.5px] text-white/35">Company</p>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.company.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[13px] text-white/60 transition hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hairline-dark mt-12" />

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-white/35">
            © 2026 TrackCare Health Technologies Ltd. All rights reserved.
          </p>
          <p className="mono-label text-[10px] text-white/30">NDPR / NDPA 2023 compliant</p>
        </div>
      </div>
    </footer>
  );
}
