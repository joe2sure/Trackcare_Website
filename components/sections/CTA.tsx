type PulseTraceProps = {
  className?: string;
  stroke?: string;
  strokeWidth?: number;
};

// A single reusable heartbeat path used as the page's signature motif —
// echoes the product's own VitalsCard readouts.
export default function PulseTrace({
  className = "",
  stroke = "var(--brand-green)",
  strokeWidth = 2,
}: PulseTraceProps) {
  return (
    <svg
      viewBox="0 0 1200 120"
      fill="none"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M0,60 L140,60 L170,60 L195,20 L220,100 L245,10 L270,90 L295,60 L330,60 L560,60 L590,60 L615,25 L640,95 L665,15 L690,85 L715,60 L750,60 L980,60 L1010,60 L1035,25 L1060,95 L1085,15 L1110,85 L1135,60 L1200,60"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1000}
        style={{
          strokeDasharray: 1000,
          strokeDashoffset: 1000,
          animation: "trace-draw 2.4s ease-out 0.2s forwards",
        }}
      />
    </svg>
  );
}
