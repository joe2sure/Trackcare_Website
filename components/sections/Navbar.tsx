import { nav } from "@/lib/mock-data";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line-dark bg-navy-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="relative flex h-7 w-7 items-center justify-center rounded-md bg-brand-green">
            <span className="absolute h-2 w-2 rounded-full bg-navy-950" />
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-navy-950" fill="none">
              <path
                d="M2 12h4l2-7 4 14 2-7h8"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="font-display text-[17px] font-semibold tracking-tight text-white">
            TrackCare
          </span>
          <span className="mono-label hidden text-[10px] text-white/40 sm:inline">NG</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13.5px] font-medium text-white/70 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#cta"
            className="hidden text-[13.5px] font-medium text-white/70 transition hover:text-white sm:inline"
          >
            Sign in
          </a>
          <a
            href="#cta"
            className="rounded-full bg-brand-green px-4 py-2 text-[13.5px] font-semibold text-navy-950 transition hover:brightness-110"
          >
            Request a demo
          </a>
        </div>
      </div>
    </header>
  );
}
