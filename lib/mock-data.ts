// Mock data layer — simulates a real content/CMS + metrics backend for the
// TrackCare marketing site. Mirrors the shape of data the product itself
// (patients, facilities, roles) is built on, adapted for a public-facing page.

export const nav = {
  links: [
    { label: "Platform", href: "#platform" },
    { label: "Mobile & Desktop", href: "#access" },
    { label: "Investors", href: "#investors" },
    { label: "Security", href: "#security" },
    { label: "Pricing", href: "#pricing" },
  ],
};

export const heroStats = [
  { value: "10", unit: "", label: "Role-based workspaces", mono: "ROLES" },
  { value: "6", unit: "", label: "Facilities live on network", mono: "SITES" },
  { value: "99.9", unit: "%", label: "Sync reliability, incl. offline", mono: "UPTIME" },
  { value: "<80", unit: "ms", label: "Median record lookup", mono: "LATENCY" },
];

export const logoStrip = [
  "Lagos General Hospital",
  "Ikeja Community Clinic",
  "Lekki Primary Health Centre",
  "Abuja Metro Health",
  "Kano Central Hospital",
  "Port Harcourt Wellness",
];

export const problemStats = [
  {
    stat: "1 in 3",
    label: "patient visits in under-resourced facilities happen without any prior medical history on hand.",
  },
  {
    stat: "48hrs+",
    label: "typical delay to move a lab result or referral letter between two facilities on paper.",
  },
  {
    stat: "~40%",
    label: "of frontline clinics report connectivity drop-outs that stall digital record systems daily.",
  },
];

export type Pillar = {
  id: string;
  index: string;
  name: string;
  tagline: string;
  description: string;
  bullets: string[];
  accent: "blue" | "green" | "teal" | "amber";
};

export const pillars: Pillar[] = [
  {
    id: "identity",
    index: "01",
    name: "Patient Identity & Digital Health ID",
    tagline: "One card. One record. Every facility.",
    description:
      "Every patient is registered once with an NFC-backed Digital Health ID that travels with them — demographics, history, insurance and next-of-kin resolve instantly at the point of care.",
    bullets: ["5-step guided registration", "NFC + QR smart card issuance", "Cross-facility record match"],
    accent: "blue",
  },
  {
    id: "clinical",
    index: "02",
    name: "Clinical EMR & Laboratory",
    tagline: "SOAP notes, ICD-10 and lab results in one timeline.",
    description:
      "Clinicians chart encounters against ICD-10 codes, order labs across ten test families, and see critical values flagged the moment results land — no separate lab system to reconcile.",
    bullets: ["Structured SOAP documentation", "Critical value flagging", "Full encounter timeline"],
    accent: "teal",
  },
  {
    id: "pharmacy",
    index: "03",
    name: "Pharmacy, Inventory & POS",
    tagline: "From prescription to dispense, without the paper trail.",
    description:
      "Prescriptions route straight to the pharmacy counter with controlled-substance double-verification, live stock levels, reorder alerts and an integrated point of sale.",
    bullets: ["Controlled substance register", "Automatic reorder alerts", "Point-of-sale checkout"],
    accent: "green",
  },
  {
    id: "billing",
    index: "04",
    name: "Billing & Digital Wallet",
    tagline: "NHIS, cards, USSD and cash — reconciled in one ledger.",
    description:
      "Patients hold a digital wallet they can top up by card, transfer or USSD; facilities bill against NHIS or private cover and every transaction settles into one auditable ledger.",
    bullets: ["NHIS-aware billing", "USSD + card top-up", "Automatic reconciliation"],
    accent: "amber",
  },
  {
    id: "smartcard",
    index: "05",
    name: "NFC SmartCard & Offline Sync",
    tagline: "The clinic doesn't stop when the connection does.",
    description:
      "Every workstation keeps working through outages, queueing encounters locally and reconciling automatically the moment connectivity returns — with a no-PIN emergency override for critical cases.",
    bullets: ["Local-first data queue", "Conflict-safe auto sync", "Emergency access override"],
    accent: "blue",
  },
  {
    id: "network",
    index: "06",
    name: "Multi-Facility Network",
    tagline: "Run one clinic, or run a network of hundreds.",
    description:
      "Super admins see live bed capacity, licensing status and referral flow across every facility on the network, with inter-facility transfers tracked end-to-end.",
    bullets: ["Live capacity across sites", "Inter-facility transfers", "Facility licensing alerts"],
    accent: "teal",
  },
  {
    id: "analytics",
    index: "07",
    name: "Analytics, Reports & Audit",
    tagline: "Every decision, and every access, on the record.",
    description:
      "Executive dashboards surface revenue, disease burden and utilisation trends, while a tamper-evident audit log tracks every record access for compliance review.",
    bullets: ["Executive KPI dashboards", "Scheduled report generation", "Tamper-evident audit trail"],
    accent: "green",
  },
  {
    id: "compliance",
    index: "08",
    name: "Security, Consent & NDPR/NDPA",
    tagline: "Built to the letter of Nigeria's data protection law.",
    description:
      "Consent capture, data-subject request tracking and a live NDPR/NDPA compliance checklist keep facilities audit-ready, backed by role-based access and enforced MFA.",
    bullets: ["NDPR/NDPA checklist & scoring", "Data subject request tracker", "Enforced multi-factor auth"],
    accent: "amber",
  },
];

export type Role = {
  role: string;
  focus: string;
};

export const roles: Role[] = [
  { role: "Super Admin", focus: "Network-wide oversight" },
  { role: "Hospital Admin", focus: "Facility operations" },
  { role: "Doctor", focus: "Diagnosis & prescribing" },
  { role: "Nurse", focus: "Ward & vitals care" },
  { role: "Pharmacist", focus: "Dispense & inventory" },
  { role: "Lab Technician", focus: "Orders & results" },
  { role: "Receptionist", focus: "Registration & scheduling" },
  { role: "Finance Officer", focus: "Billing & wallets" },
  { role: "Facility Manager", focus: "Beds & staffing" },
  { role: "Patient", focus: "Self-service care" },
];

export const surfaces = [
  {
    id: "web",
    kicker: "FOR FACILITY STAFF",
    name: "TrackCare Web",
    headline: "The full clinical & administrative command centre.",
    description:
      "The complete ERP — patient registration, EMR, pharmacy, billing, network oversight and compliance — built for admins, clinicians and finance teams running a facility day to day.",
    points: [
      "Role-scoped dashboards for all 10 staff roles",
      "Full multi-facility network administration",
      "Executive analytics, reporting & audit trail",
    ],
    device: "browser",
  },
  {
    id: "mobile",
    kicker: "FOR PATIENTS & THE PUBLIC",
    name: "TrackCare Mobile",
    headline: "A patient's health record, in their pocket.",
    description:
      "Built for the general public — book appointments, tap in with a Digital Health ID, top up a care wallet, message a clinician and view lab results the moment they're ready.",
    points: [
      "NFC tap-in with the Digital Health ID card",
      "Appointment booking & wallet top-up on the go",
      "Lab results and prescriptions, pushed in real time",
    ],
    device: "phone",
  },
  {
    id: "desktop",
    kicker: "FOR LOW-CONNECTIVITY CLINICS",
    name: "TrackCare Desktop",
    headline: "The offline-first alternative that never stalls care.",
    description:
      "A local-installed counterpart to the web app for clinics with unreliable connectivity — every encounter, dispense and payment queues locally and syncs the moment a link is available.",
    points: [
      "Full offline encounter, pharmacy & billing flows",
      "Automatic, conflict-safe sync on reconnect",
      "NFC smart card reader support, no browser required",
    ],
    device: "desktop",
  },
];

export const investorMetrics = [
  { label: "Addressable facilities in Nigeria", value: "40,000+", note: "registered public & private health facilities" },
  { label: "Facilities on the network today", value: "6", note: "spanning 3 tiers, 4 states" },
  { label: "Platform modules shipped", value: "12", note: "phases, 42 production routes" },
  { label: "Compliance score, pilot network", value: "74/100", note: "NDPR/NDPA checklist, improving monthly" },
];

export const roadmap = [
  {
    phase: "Phase 01–04",
    status: "Shipped",
    title: "Core clinical & financial rails",
    detail: "Identity, RBAC, patient management, billing and digital wallet across the first pilot facilities.",
  },
  {
    phase: "Phase 05–08",
    status: "Shipped",
    title: "Pharmacy, labs, offline & messaging",
    detail: "Full EMR, pharmacy POS, NFC smart card issuance, offline sync and clinical messaging went live.",
  },
  {
    phase: "Phase 09–12",
    status: "Shipped",
    title: "Network, analytics & NDPR compliance",
    detail: "Multi-facility network administration, executive analytics and the NDPR/NDPA compliance suite shipped.",
  },
  {
    phase: "Phase 13",
    status: "In progress",
    title: "NHIS & payment rail integration",
    detail: "Direct NHIS claims submission and live Korapay/USSD settlement replacing mocked payment flows.",
  },
  {
    phase: "Phase 14",
    status: "Planned",
    title: "State-level network rollout",
    detail: "Onboarding cohorts of primary health centres state by state, starting with Lagos and Kano.",
  },
];

export const useOfFunds = [
  { label: "Facility onboarding & field support", pct: 40 },
  { label: "Engineering & platform hardening", pct: 30 },
  { label: "Regulatory, NDPR & security audits", pct: 15 },
  { label: "Working capital & operations", pct: 15 },
];

export const securityPoints = [
  { title: "NDPR / NDPA aligned", detail: "15-point compliance checklist with live scoring and a data-subject request tracker with 30-day countdowns." },
  { title: "Tamper-evident audit log", detail: "Every record access is logged and retained for 7 years, with anomaly detection on unusual access patterns." },
  { title: "Enforced multi-factor auth", detail: "TOTP, SMS or email MFA tracked per user, with facility-wide enforcement for clinical roles." },
  { title: "Hardened by default", detail: "Strict CSP, frame-denial and referrer policy headers ship on every deployment, no configuration required." },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  facility: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Losing a patient's history at the door used to be routine. Now a nurse taps the card and the whole chart is there before the patient sits down.",
    name: "Dr. A. Fashola",
    role: "Medical Director",
    facility: "Lagos General Hospital",
  },
  {
    quote:
      "Our link drops for hours some afternoons. The desktop app doesn't care — we keep dispensing, keep billing, and it all reconciles once we're back online.",
    name: "T. Musa",
    role: "Lead Pharmacist",
    facility: "Kano Central Hospital",
  },
  {
    quote:
      "For the first time our board can see bed occupancy and revenue across every site on one screen, instead of six spreadsheets that never agree.",
    name: "C. Obi",
    role: "Facility Manager",
    facility: "Ikeja Community Clinic",
  },
];

export const pricingTiers = [
  {
    name: "Clinic",
    price: "₦85,000",
    period: "/ month",
    description: "For a single primary health centre finding its feet on digital records.",
    features: ["Up to 5 staff seats", "Patient identity & EMR", "Pharmacy & billing", "Offline desktop app"],
    highlighted: false,
  },
  {
    name: "Hospital Network",
    price: "₦420,000",
    period: "/ month",
    description: "For a hospital or small network coordinating care across several sites.",
    features: ["Up to 60 staff seats", "Everything in Clinic", "Multi-facility network view", "NDPR compliance suite", "Priority support"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For state health ministries and large private networks operating at scale.",
    features: ["Unlimited staff seats", "Everything in Hospital Network", "Dedicated compliance review", "Custom NHIS/insurer integration", "Onboarding & field support team"],
    highlighted: false,
  },
];

export const footerLinks = {
  product: [
    { label: "Platform overview", href: "#platform" },
    { label: "Mobile app", href: "#access" },
    { label: "Desktop app", href: "#access" },
    { label: "Security & compliance", href: "#security" },
  ],
  company: [
    { label: "For investors", href: "#investors" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact sales", href: "#cta" },
  ],
};
