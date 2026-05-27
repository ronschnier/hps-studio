// ── HPSGolfDeploymentReality ───────────────────────────────────────────────────
//
// Deployed operational evidence for HPSGolfPage.
// Shows the full lifecycle: fabrication → field installation → QR activation →
// analytics intelligence — as an operational record, not a product pitch.
//
// Sections:
//   GolfInstallationSequence — 5-step deployment story: survey to live data
//   GolfDeploymentEvidence   — field deployment records with course metadata
//   HPSGolfDeploymentReality — full section, ready to insert into HPSGolfPage

import {
  ProcessSequence,
  OperationalGrid,
  EvidenceCallout,
  type EvidenceFrame,
  type ProcessStepDef,
} from '../proof/RealityAmplificationFramework'

// ── Installation sequence ──────────────────────────────────────────────────────
// Five operational phases from site survey to live analytics.

const INSTALLATION_STEPS: ProcessStepDef[] = [
  {
    n: '01',
    label: 'Site survey',
    desc: 'Full 18-hole walkthrough with club operations manager. Existing tee marker dimensions photographed and measured. Sponsor location preferences recorded per hole. Cart path mounting conditions noted — post type, surface material, existing hardware.',
    duration: 'Day 1',
    frame: {
      src: '/images/golf-monument-before.jpg',
      environment: 'golf',
      aspect: '4/3',
      annotations: [
        { x: 34, y: 38, label: 'Existing monument', detail: 'Dimensions photographed on-site' },
        { x: 68, y: 58, label: 'Mount condition', detail: 'Hardware + surface spec recorded' },
      ],
    },
  },
  {
    n: '02',
    label: 'Design and specification',
    desc: 'Sponsor artwork formatted to panel dimensions per hole. Tee markers numbered 1–18 with per-tee yardage plates. QR placement zones specified on each sponsor surface. Proof set reviewed and signed off by club before production begins.',
    duration: 'Days 2–4',
    frame: {
      src: '/images/golf-plaque-concept.jpg',
      environment: 'fabrication',
      aspect: '4/3',
      annotations: [
        { x: 50, y: 32, label: 'Concept layout', detail: 'Sponsor artwork · QR zone positioned' },
        { x: 24, y: 62, label: 'Club identity', detail: 'Brand-matched to monument' },
      ],
    },
  },
  {
    n: '03',
    label: 'In-house fabrication',
    desc: 'All 18-hole surfaces run as a single production batch at the Leesburg lab. Sponsor panels UV-printed on aluminum composite. Tee markers fiber-laser engraved. Acrylic holders CO2 cut. Cart signage UV-printed on weather-rated substrate. QR codes generated and linked in HPS QR Code before leaving the shop.',
    duration: 'Days 5–8',
    frame: {
      environment: 'fabrication',
      aspect: '4/3',
      annotations: [
        { x: 28, y: 42, label: 'Sponsor panels', detail: 'UV-printed · aluminum composite' },
        { x: 68, y: 28, label: 'Tee markers', detail: 'Fiber laser · numbered 1–18' },
      ],
    },
  },
  {
    n: '04',
    label: 'Field installation',
    desc: 'Surfaces installed hole-by-hole using the surveyed mounting plan. Stainless hardware used throughout. Weatherproof sealant applied at post mounts. Each hole signed off before moving to the next — tee marker centered, sponsor panel at correct cart path position, QR surface orientation verified.',
    duration: 'Days 9–10',
    frame: {
      environment: 'golf',
      aspect: '4/3',
      annotations: [
        { x: 44, y: 46, label: 'Stainless mount', detail: 'Weather-sealed at post' },
        { x: 70, y: 28, label: 'QR orientation', detail: 'Verified scanner-accessible angle' },
      ],
    },
  },
  {
    n: '05',
    label: 'QR activation and first scan',
    desc: 'Each QR surface destination confirmed live in HPS QR Code before leaving the hole. Scan tracking active from the first guest interaction. Analytics data populates within minutes. Club receives dashboard access on installation day.',
    duration: 'Day 10',
    frame: {
      environment: 'golf',
      aspect: '4/3',
      annotations: [
        { x: 52, y: 32, label: 'Destination confirmed', detail: 'Live scan verified on-hole' },
        { x: 26, y: 66, label: 'Analytics active', detail: 'Dashboard access sent to club' },
      ],
    },
  },
]

// ── Deployed surface evidence ──────────────────────────────────────────────────
// Six representative surfaces from a full-course deployment.

const DEPLOYED_SURFACES: EvidenceFrame[] = [
  {
    environment: 'golf',
    aspect: '4/3',
    caption: 'Tee marker installation — UV-engraved aluminum, holes 1–18',
    annotations: [
      { x: 40, y: 35, label: 'Hole number', detail: 'Engraved + UV fill' },
      { x: 70, y: 60, label: 'Yardage plate', detail: 'Multiple tee plates' },
    ],
    meta: {
      serial:    'GOLF-TEE-01',
      location:  'On-course · Tee complex',
      material:  'Aluminum · UV ink',
      equipment: 'UV flatbed · fiber laser',
      status:    'deployed',
      operator:  'HPS Fabrication Lab',
    },
  },
  {
    src: '/images/golf-plaque-final.jpg',
    environment: 'golf',
    aspect: '4/3',
    caption: 'Sponsor panel — hole sponsorship plaque with QR engagement surface',
    annotations: [
      { x: 35, y: 30, label: 'Layered UV artwork', detail: 'Sponsor branding · spot-gloss' },
      { x: 65, y: 65, label: 'QR engagement', detail: 'Dynamic scan destination' },
    ],
    meta: {
      serial:    'GOLF-SPO-02',
      location:  'On-course · Hole markers',
      material:  'Aluminum composite · UV',
      equipment: 'UV flatbed',
      status:    'deployed',
      operator:  'HPS Fabrication Lab',
    },
  },
  {
    environment: 'outdoor',
    aspect: '4/3',
    caption: 'Cart path signage — directional with sponsor integration',
    annotations: [
      { x: 30, y: 40, label: 'Directional info', detail: 'Per-hole routing' },
      { x: 68, y: 25, label: 'Sponsor strip', detail: 'Logo placement zone' },
    ],
    meta: {
      serial:    'GOLF-CRT-03',
      location:  'On-course · Cart paths',
      material:  'Rigid substrate · UV',
      equipment: 'UV flatbed · vinyl cutter',
      status:    'deployed',
      operator:  'HPS Fabrication Lab',
    },
  },
  {
    environment: 'hospitality',
    aspect: '4/3',
    caption: 'Turn station QR — halfway house menu and sponsor surface',
    annotations: [
      { x: 50, y: 35, label: 'QR menu code', detail: 'HPS QR Menu linked' },
      { x: 25, y: 62, label: 'Sponsor panel', detail: 'Integrated branding' },
    ],
    meta: {
      serial:    'GOLF-TRN-04',
      location:  'Turn station · Clubhouse',
      material:  'Acrylic · UV print',
      equipment: 'UV flatbed · CO2 laser',
      status:    'deployed',
      operator:  'HPS Fabrication Lab',
    },
  },
  {
    environment: 'hospitality',
    aspect: '4/3',
    caption: 'Clubhouse recognition wall — member and sponsor display system',
    annotations: [
      { x: 40, y: 40, label: 'Recognition panel', detail: 'Dimensional acrylic' },
      { x: 70, y: 30, label: 'Sponsor tier', detail: 'UV printed identity' },
    ],
    meta: {
      serial:    'GOLF-CLB-05',
      location:  'Clubhouse · Main entrance',
      material:  '3mm acrylic · UV print',
      equipment: 'CO2 laser · UV flatbed',
      status:    'deployed',
      operator:  'HPS Fabrication Lab',
    },
  },
  {
    environment: 'golf',
    aspect: '4/3',
    caption: 'Sponsor plaque system — 18-hole sponsor identification deployment',
    annotations: [
      { x: 35, y: 45, label: 'Per-hole sponsor', detail: 'Hole 1–18 coverage' },
      { x: 68, y: 35, label: 'QR engagement', detail: 'Scan-to-sponsor link' },
    ],
    meta: {
      serial:    'GOLF-PLQ-06',
      location:  'On-course · All holes',
      material:  'Aluminum · UV · laser',
      equipment: 'Full fabrication suite',
      status:    'deployed',
      operator:  'HPS Fabrication Lab',
    },
  },
]

// ── Operational intelligence callouts ─────────────────────────────────────────

const INTELLIGENCE_CALLOUTS = [
  {
    label: 'QR scan data feeds sponsor reports.',
    detail: 'Every QR interaction on a sponsor surface is counted, timestamped, and attributed to its specific hole. Monthly sponsor reports are generated from actual engagement data, not estimated impressions.',
    tags: ['HPS QR Code', 'Sponsor Analytics', 'Deployed'],
    accentColor: 'var(--color-hps-green)',
  },
  {
    label: 'Destination updates require no site visit.',
    detail: 'When a sponsor URL changes, a promotion ends, or the club wants to redirect a QR surface to a different page, that update happens from a browser. No reprinting, no field crew, no downtime.',
    tags: ['Dynamic QR', 'HPS QR Code', 'Zero Reprint'],
    accentColor: 'var(--color-hps-teal-dark)',
  },
  {
    label: 'Renewal season runs on actual engagement data.',
    detail: 'When the club brings sponsors back for the next season, every renewal conversation is backed by real scan volume per hole, per sponsor, per quarter. The data lives in the same dashboard the club already uses.',
    tags: ['Sponsor Intelligence', 'Season Renewal', 'HPS QR Code'],
    accentColor: 'var(--color-hps-gold-rich)',
  },
]

// ── Main export ────────────────────────────────────────────────────────────────

export function HPSGolfDeploymentReality() {
  return (
    <>
      {/* Installation sequence section */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'var(--color-hps-parchment)',
          borderTop: '1px solid rgba(200,180,154,0.28)',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background: [
              'radial-gradient(ellipse at 15% 20%, rgba(71,140,92,0.050) 0%, transparent 50%)',
              'radial-gradient(ellipse at 85% 75%, rgba(71,140,92,0.035) 0%, transparent 42%)',
              'repeating-linear-gradient(180deg, transparent 0px, transparent 4px, rgba(71,140,92,0.008) 4px, rgba(71,140,92,0.008) 5px)',
            ].join(', '),
          }}
        />

        <div
          className="max-w-7xl mx-auto px-6 lg:px-10"
          style={{ position: 'relative', zIndex: 1, paddingTop: '4rem', paddingBottom: '4.5rem' }}
        >
          <div data-reveal className="mb-10">
            <p
              className="font-mono uppercase mb-3"
              style={{ fontSize: '0.6rem', letterSpacing: '0.22em', color: 'var(--color-hps-green)' }}
            >
              Deployment lifecycle
            </p>
            <h2
              className="font-display mb-4"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.06 }}
            >
              Survey to live analytics in 10 days.
            </h2>
            <p
              className="font-body max-w-2xl leading-relaxed"
              style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}
            >
              A full course deployment — tee markers, sponsor plaques, cart signage, and clubhouse surfaces —
              runs from initial site survey through fabrication to live QR analytics on a 10-day cycle.
              Design, production, installation, and digital activation are managed as a single engagement.
            </p>
          </div>

          <ProcessSequence
            steps={INSTALLATION_STEPS}
            accentColor="var(--color-hps-green)"
          />
        </div>
      </section>

      {/* Deployed surface evidence */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'var(--color-hps-cream)',
          borderTop: '1px solid rgba(200,180,154,0.28)',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background: [
              'radial-gradient(ellipse at 70% 15%, rgba(71,140,92,0.040) 0%, transparent 45%)',
              'radial-gradient(ellipse at 20% 80%, rgba(184,136,42,0.025) 0%, transparent 38%)',
            ].join(', '),
          }}
        />

        <div
          className="max-w-7xl mx-auto px-6 lg:px-10"
          style={{ position: 'relative', zIndex: 1, paddingTop: '4rem', paddingBottom: '4.5rem' }}
        >
          <div data-reveal className="mb-10">
            <p
              className="font-mono uppercase mb-3"
              style={{ fontSize: '0.6rem', letterSpacing: '0.22em', color: 'var(--color-hps-green)' }}
            >
              Field deployment records
            </p>
            <h2
              className="font-display mb-4"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.06 }}
            >
              Surfaces on-course and in operation.
            </h2>
            <p
              className="font-body max-w-2xl leading-relaxed"
              style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}
            >
              Each record below represents a surface type deployed in a real golf environment —
              with the material, equipment, and operational status documented.
            </p>
          </div>

          <OperationalGrid
            frames={DEPLOYED_SURFACES}
            columns={3}
            accentColor="var(--color-hps-green)"
            compact={false}
          />

          {/* Operational intelligence callouts */}
          <div
            data-reveal
            className="mt-10 flex flex-col gap-4"
          >
            {INTELLIGENCE_CALLOUTS.map((c, i) => (
              <EvidenceCallout
                key={i}
                label={c.label}
                detail={c.detail}
                tags={c.tags}
                accentColor={c.accentColor}
                revealDelay={i * 80}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default HPSGolfDeploymentReality
