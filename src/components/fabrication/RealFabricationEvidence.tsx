// ── RealFabricationEvidence ────────────────────────────────────────────────────
//
// Operational production evidence for the FabricationLabPage.
// Shows the seven active stations with output examples, material callouts,
// and production metadata — not a photo gallery, an operational record.
//
// Sections:
//   FabricationStatusStrip  — live station status row (visual telemetry)
//   RealFabricationEvidence — full evidence section with station output grid
//
// All data is placeholder-ready: real photos swap in via the `src` field
// on each EvidenceFrame without changing component structure.

import {
  OperationalGrid,
  ProcessSequence,
  type EvidenceFrame,
  type ProcessStepDef,
} from '../proof/RealityAmplificationFramework'

// ── Station status telemetry ───────────────────────────────────────────────────

interface StationStatus {
  id:     string
  label:  string
  status: 'active' | 'running' | 'queued' | 'cutting' | 'idle'
  note:   string
}

const STATION_STATUS: StationStatus[] = [
  { id: 'uv',        label: 'UV Flatbed',    status: 'active',  note: '4-up sponsor panels · 18×24'         },
  { id: 'laser',     label: 'Laser Array',   status: 'running', note: 'Anodized aluminum · sponsor batch'   },
  { id: 'dtg',       label: 'DTG System',    status: 'active',  note: '12-pc polo · pre-treated'            },
  { id: 'emb',       label: 'Embroidery',    status: 'queued',  note: 'Cap · polo logo · jacket back'       },
  { id: 'qr',        label: 'QR Surface',    status: 'active',  note: 'Restaurant batch · 24 table tents'  },
  { id: 'acrylic',   label: 'Acrylic',       status: 'cutting', note: '3mm clear · menu stand blanks'      },
  { id: 'plaque',    label: 'Plaque System', status: 'running', note: '18-hole golf package · UV+laser'     },
]

const STATUS_COLORS: Record<StationStatus['status'], string> = {
  active:  'rgba(71,140,92,1)',
  running: 'rgba(13,148,136,1)',
  queued:  'rgba(184,136,42,1)',
  cutting: 'rgba(248,114,57,1)',
  idle:    'rgba(120,115,108,0.5)',
}

export function FabricationStatusStrip() {
  return (
    <div
      aria-hidden="true"
      style={{
        background: 'rgba(26,21,16,0.03)',
        border: '1px solid rgba(200,180,154,0.30)',
        borderRadius: '2px',
        padding: '0.875rem 1.25rem',
        marginBottom: '2rem',
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '0.75rem',
      }}>
        <span style={{
          fontFamily: 'monospace',
          fontSize: '0.48rem',
          letterSpacing: '0.22em',
          color: 'var(--color-hps-smoke)',
          textTransform: 'uppercase',
          opacity: 0.55,
        }}>
          Fabrication Lab · Leesburg, FL · Station Monitor
        </span>
        <span style={{
          fontFamily: 'monospace',
          fontSize: '0.46rem',
          letterSpacing: '0.10em',
          color: 'rgba(71,140,92,0.70)',
        }}>
          7 stations operational
        </span>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {STATION_STATUS.map(s => (
          <div
            key={s.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.28rem 0.65rem',
              background: `${STATUS_COLORS[s.status].replace('1)', '0.08)')}`,
              border: `1px solid ${STATUS_COLORS[s.status].replace('1)', '0.22)')}`,
              borderRadius: '1px',
            }}
          >
            <div style={{
              width: 5,
              height: 5,
              borderRadius: '50%',
              background: STATUS_COLORS[s.status],
              flexShrink: 0,
            }} />
            <span style={{
              fontFamily: 'monospace',
              fontSize: '0.50rem',
              letterSpacing: '0.10em',
              color: 'var(--color-hps-ink)',
              textTransform: 'uppercase',
            }}>
              {s.label}
            </span>
            <span style={{
              fontFamily: 'monospace',
              fontSize: '0.46rem',
              color: 'var(--color-hps-smoke)',
              opacity: 0.55,
            }}>
              · {s.note}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Station output evidence frames ─────────────────────────────────────────────

export const STATION_OUTPUT_FRAMES: EvidenceFrame[] = [
  {
    environment: 'fabrication',
    aspect: '4/3',
    caption: 'UV flatbed output — 18×24 sponsor panel, full-bleed on aluminum composite',
    annotations: [
      { x: 22, y: 28, label: 'Registration corner', detail: '±0.5mm to substrate edge' },
      { x: 68, y: 55, label: 'Varnish pass', detail: 'Tactile gloss over CMYK base' },
    ],
    meta: {
      serial:    'STN-UV-01',
      location:  'Leesburg, FL · UV Flatbed',
      material:  'Aluminum composite · 3mm · UV CMYK+W+V',
      equipment: 'UV flatbed printer',
      status:    'production',
      operator:  'HPS Fabrication Lab',
    },
  },
  {
    environment: 'fabrication',
    aspect: '4/3',
    caption: 'Fiber laser engraving — sponsor text on black anodized aluminum, 0.8mm',
    annotations: [
      { x: 38, y: 32, label: 'Vector path', detail: 'DXF aligned to substrate corner' },
      { x: 72, y: 60, label: 'Oxidation cleared', detail: 'Wiped between passes' },
    ],
    meta: {
      serial:    'STN-LAS-02',
      location:  'Leesburg, FL · Laser Array',
      material:  'Anodized aluminum · 0.8mm · black finish',
      equipment: 'Fiber laser · CO2 laser',
      status:    'deployed',
      operator:  'HPS Fabrication Lab',
    },
  },
  {
    environment: 'fabrication',
    aspect: '4/3',
    caption: 'DTG output — front chest print on 100% cotton polo, pre-treated',
    annotations: [
      { x: 30, y: 38, label: 'Platen alignment', detail: 'Chest centered, collar square' },
      { x: 66, y: 22, label: 'Pretreat layer', detail: 'Pressed 30s at 330°F before print' },
    ],
    meta: {
      serial:    'STN-DTG-03',
      location:  'Leesburg, FL · DTG Station',
      material:  'Cotton polo · 220gsm · pretreated',
      equipment: 'Direct-to-garment system · heat press',
      status:    'production',
      operator:  'HPS Fabrication Lab',
    },
  },
  {
    environment: 'fabrication',
    aspect: '4/3',
    caption: 'Embroidery output — satin-stitch logo on structured front panel, cap',
    annotations: [
      { x: 48, y: 38, label: 'Thread tension', detail: 'Adjusted per cap fabric weight' },
      { x: 18, y: 64, label: 'Backing removed', detail: 'Tear-away after hoop release' },
    ],
    meta: {
      serial:    'STN-EMB-04',
      location:  'Leesburg, FL · Embroidery Station',
      material:  'Structured cap · polyester thread · tear-away',
      equipment: 'Multi-head embroidery system',
      status:    'production',
      operator:  'HPS Fabrication Lab',
    },
  },
  {
    environment: 'fabrication',
    aspect: '4/3',
    caption: 'QR surface — double-sided table tent, UV-printed, destination active on output',
    annotations: [
      { x: 50, y: 32, label: 'QR registration', detail: 'Printed to spec · 25mm module' },
      { x: 20, y: 66, label: 'Destination linked', detail: 'HPS QR Code · activated at print' },
    ],
    meta: {
      serial:    'STN-QR-05',
      location:  'Leesburg, FL · QR Surface Station',
      material:  'UV-coated 16pt card · vinyl laminate',
      equipment: 'UV flatbed · scoring die',
      status:    'deployed',
      operator:  'HPS Fabrication Lab',
    },
  },
  {
    environment: 'fabrication',
    aspect: '4/3',
    caption: 'Acrylic cut — 3mm clear menu stand blank, fire-polished edge',
    annotations: [
      { x: 34, y: 28, label: 'Cut path', detail: '±0.1mm CO2 vector tolerance' },
      { x: 66, y: 58, label: 'Edge finish', detail: 'Fire-polished · no secondary grinding' },
    ],
    meta: {
      serial:    'STN-ACR-06',
      location:  'Leesburg, FL · Acrylic Station',
      material:  '3mm cast clear acrylic',
      equipment: 'CO2 laser cutter',
      status:    'production',
      operator:  'HPS Fabrication Lab',
    },
  },
  {
    environment: 'fabrication',
    aspect: '4/3',
    caption: 'Sponsor plaque — UV-printed + fiber-laser engraved, golf course installation set',
    annotations: [
      { x: 38, y: 28, label: 'UV+laser registered', detail: 'Color layer + engraved type aligned' },
      { x: 72, y: 66, label: 'Mounting prep', detail: 'Holes drilled · hardware packaged per hole' },
    ],
    meta: {
      serial:    'STN-PLQ-07',
      location:  'Leesburg, FL · Plaque Station',
      material:  'Aluminum composite · UV ink · fiber engraved',
      equipment: 'UV flatbed · fiber laser · drill press',
      status:    'deployed',
      operator:  'HPS Fabrication Lab',
    },
  },
]

// ── UV process sequence ────────────────────────────────────────────────────────
// Step-by-step production sequence for the UV flatbed station.

export const UV_PROCESS_STEPS: ProcessStepDef[] = [
  {
    n: '01',
    label: 'Substrate prep',
    desc: 'Substrate cut to final net size on the scoring table. Corners aligned in registration jig. Surface wiped with IPA to remove handling oils before bed placement.',
    duration: '~5 min',
    frame: {
      environment: 'fabrication',
      aspect: '4/3',
      annotations: [
        { x: 44, y: 38, label: 'Registration jig', detail: 'Corner-aligned to bed origin' },
        { x: 72, y: 62, label: 'Surface prep', detail: 'IPA wipe before print' },
      ],
    },
  },
  {
    n: '02',
    label: 'CMYK color pass',
    desc: 'Full-bleed color layer at 1440 dpi. Head gap set per substrate thickness. UV lamps cure each pass in-line. White base layer applied first for non-white substrates.',
    duration: '~8 min per panel',
    frame: {
      environment: 'fabrication',
      aspect: '4/3',
      annotations: [
        { x: 28, y: 44, label: 'Head gap', detail: 'Set to substrate height + 2mm' },
        { x: 66, y: 28, label: 'UV cure lamp', detail: 'In-line · cures each pass' },
      ],
    },
  },
  {
    n: '03',
    label: 'Varnish + texture coat',
    desc: 'Gloss varnish or tactile texture coat applied over color layer in a second pass. Dimensional texture adds weather resistance and surface grip. Cool-down period before handling.',
    duration: '~6 min per panel',
    frame: {
      environment: 'fabrication',
      aspect: '4/3',
      annotations: [
        { x: 50, y: 46, label: 'Texture zone', detail: 'Raised 0.3mm over color' },
        { x: 24, y: 70, label: 'Cool-down', detail: '3 min before stack' },
      ],
    },
  },
  {
    n: '04',
    label: 'QA inspection',
    desc: 'Color density checked against spec proof. Registration verified at all four corners. Edge integrity inspected for delamination or ink pull. Non-conforming panels pulled before fulfillment.',
    duration: '~3 min per panel',
    frame: {
      environment: 'fabrication',
      aspect: '4/3',
      annotations: [
        { x: 40, y: 35, label: 'Corner registration', detail: 'Measured against spec proof' },
        { x: 68, y: 60, label: 'Edge inspection', detail: 'Delamination check before stack' },
      ],
    },
  },
]

// ── Main section component ─────────────────────────────────────────────────────

export function RealFabricationEvidence() {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--color-hps-cream)',
        borderTop: '1px solid rgba(200,180,154,0.30)',
      }}
    >
      {/* Fabrication atmosphere */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: [
            'radial-gradient(ellipse at 85% 10%, rgba(248,114,57,0.045) 0%, transparent 48%)',
            'radial-gradient(ellipse at 10% 80%, rgba(248,114,57,0.030) 0%, transparent 40%)',
            'repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(248,114,57,0.010) 2px, rgba(248,114,57,0.010) 3px)',
          ].join(', '),
        }}
      />

      <div
        className="max-w-7xl mx-auto px-6 lg:px-10"
        style={{ position: 'relative', zIndex: 1, paddingTop: '4rem', paddingBottom: '5rem' }}
      >
        {/* Section header */}
        <div data-reveal className="mb-8">
          <p
            className="font-mono uppercase mb-3"
            style={{ fontSize: '0.6rem', letterSpacing: '0.22em', color: 'var(--color-hps-coral-warm)' }}
          >
            Production evidence
          </p>
          <h2
            className="font-display mb-4"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.06 }}
          >
            Seven stations. One facility.
          </h2>
          <p
            className="font-body max-w-2xl leading-relaxed"
            style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}
          >
            UV printing, laser systems, DTG, embroidery, acrylic fabrication, QR surface production,
            and sponsor plaque systems — all running out of the same Leesburg shop. When your project
            needs multiple processes, they run on a shared production schedule without handoffs.
          </p>
        </div>

        {/* Station telemetry strip */}
        <FabricationStatusStrip />

        {/* Station output evidence grid */}
        <OperationalGrid
          frames={STATION_OUTPUT_FRAMES}
          columns={3}
          accentColor="var(--color-hps-coral-warm)"
          compact={false}
        />

        {/* UV process sequence */}
        <div
          data-reveal
          className="mt-16 pt-12"
          style={{ borderTop: '1px solid rgba(200,180,154,0.30)' }}
        >
          <p
            className="font-mono uppercase mb-3"
            style={{ fontSize: '0.6rem', letterSpacing: '0.22em', color: 'var(--color-hps-coral-warm)' }}
          >
            Process detail
          </p>
          <ProcessSequence
            steps={UV_PROCESS_STEPS}
            headline="UV surface production — four-step sequence."
            context="From substrate prep to quality inspection. Each step is a discrete production stage tracked against a build spec."
            accentColor="var(--color-hps-coral-warm)"
          />
        </div>
      </div>
    </section>
  )
}

export default RealFabricationEvidence
