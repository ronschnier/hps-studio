interface ProcessStep {
  n: string
  label: string
  desc: string
}

interface KeyStat {
  value: string
  label: string
}

interface AtmosphereDef {
  base: string
  glow: string
  texture: string
  shimmer?: string
}

export interface ProcessBandData {
  id: string
  stationNumber: string
  eyebrow: string
  name: string
  tagline: string
  accent: string
  accentHex: string
  atmosphere: AtmosphereDef
  materialNote: string
  keyStats: KeyStat[]
  steps: ProcessStep[]
  annotations: string[]
}

export const PROCESS_BANDS: ProcessBandData[] = [
  {
    id: 'uvprint',
    stationNumber: '01',
    eyebrow: 'UV · Raised Texture · Multi-Pass Build',
    name: 'UV Printing',
    tagline: 'Dimensional ink cured pass-by-pass on rigid substrate — gloss, matte, spot-gloss, and textured relief in a single production run.',
    accent: 'var(--color-hps-coral-warm)',
    accentHex: '#f87239',
    atmosphere: {
      base: 'var(--color-hps-cream)',
      glow: 'radial-gradient(ellipse at 82% 14%, rgba(248,114,57,0.07) 0%, transparent 52%)',
      texture: 'repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(248,114,57,0.018) 2px, rgba(248,114,57,0.018) 3px)',
      shimmer: 'linear-gradient(112deg, transparent 35%, rgba(255,255,255,0.048) 48%, rgba(255,248,230,0.036) 52%, transparent 65%)',
    },
    materialNote: 'Primary substrates: 3mm PVC, aluminum composite (ACM), foam board, hardwood panels, and rigid acrylic. UV ink bonds to non-porous and porous surfaces via adhesion primer. Dimensional relief built in sequential cure passes at 0.5–5mm Z-height.',
    keyStats: [
      { value: '0.5–5mm', label: 'Texture relief' },
      { value: '1440 dpi', label: 'Resolution' },
      { value: '395nm', label: 'Cure wavelength' },
    ],
    steps: [
      { n: '01', label: 'Material Intake',     desc: 'Substrate verified against spec sheet: thickness, surface coating classification, indoor/outdoor rating, and UV-resistance grade.' },
      { n: '02', label: 'Surface Preparation', desc: 'Substrate cleaned and degassed; adhesion promoter applied to non-porous materials; flatness verified across the print bed.' },
      { n: '03', label: 'Color Profiling',      desc: 'ICC profile loaded for substrate type; spot-gloss and white-channel layers designated; registration marks positioned.' },
      { n: '04', label: 'Test Print & Cure',    desc: 'Adhesion and cure test on scrap substrate; color match confirmed against physical proof; dimensional pass height set.' },
      { n: '05', label: 'Production Run',       desc: 'Full print pass with UV cure between color and gloss layers; white base applied where opacity requires it.' },
      { n: '06', label: 'Dimensional Build',    desc: 'Additional passes for raised-texture zones; each build layer fully UV-cured before the next pass begins.' },
      { n: '07', label: 'Quality & Packaging',  desc: 'Surface inspected for adhesion, coverage, and edge definition; packaged flat with interleaving to prevent contact damage.' },
    ],
    annotations: [
      'UV cure: 395nm LED',
      'Ink build: 4–8 passes',
      'Texture relief: 0.5–5mm Z',
      'Resolution: up to 1440 dpi',
      'Media: PVC · ACM · Wood · Foam · Acrylic',
    ],
  },
  {
    id: 'laser',
    stationNumber: '02',
    eyebrow: 'CO₂ · Fiber · UV · Diode — Four Laser Platforms',
    name: 'Laser Systems',
    tagline: 'Four wavelengths. Four material families. System selected by material absorption profile — not by default availability.',
    accent: 'var(--color-hps-teal-dark)',
    accentHex: '#0d9488',
    atmosphere: {
      base: 'var(--color-hps-parchment)',
      glow: [
        'radial-gradient(ellipse at 50% 48%, rgba(13,148,136,0.055) 0%, transparent 48%)',
        'radial-gradient(circle at 62% 38%, rgba(248,114,57,0.030) 0%, transparent 28%)',
      ].join(', '),
      texture: [
        'repeating-linear-gradient(0deg, rgba(13,148,136,0.020) 0px, rgba(13,148,136,0.020) 1px, transparent 1px, transparent 32px)',
        'repeating-linear-gradient(90deg, rgba(13,148,136,0.020) 0px, rgba(13,148,136,0.020) 1px, transparent 1px, transparent 32px)',
      ].join(', '),
    },
    materialNote: 'CO₂ (10,600nm): wood, acrylic, leather, fabric, rubber. Fiber (1,064nm): metals, anodized aluminum, coated surfaces. UV laser: cold-process precision marking, glass, coated electronics. Diode: small-batch wood, cork, and dark materials.',
    keyStats: [
      { value: '4 systems', label: 'Laser platforms' },
      { value: '±0.05mm', label: 'Focus tolerance' },
      { value: '0.15mm', label: 'Beam diameter' },
    ],
    steps: [
      { n: '01', label: 'Material Assessment',    desc: 'Substrate type, thickness, and coating confirmed; laser system selected by material absorption profile — not by default preference.' },
      { n: '02', label: 'File Preparation',        desc: 'Vector artwork converted to machine-native format; fill, power, speed, and pass-count parameters assigned per engraving zone.' },
      { n: '03', label: 'Focus Calibration',       desc: 'Z-height zeroed to material surface; test engraving on material edge verifies depth, contrast, and edge quality.' },
      { n: '04', label: 'Alignment Registration',  desc: 'Material registered to bed; fiducial marks used for multi-pass operations and combined UV+laser production jobs.' },
      { n: '05', label: 'Laser Production',        desc: 'Engraving or cutting pass executed; exhaust system active; operator monitors for material movement or overrun.' },
      { n: '06', label: 'Surface Finishing',       desc: 'Residue cleared; engraved field evaluated under raking light for depth uniformity and edge quality.' },
      { n: '07', label: 'Quality & Deployment',    desc: 'Measured against spec; protective coating applied where required; flagged for QR integration if applicable.' },
    ],
    annotations: [
      'CO₂: 10,600nm · Wood · Acrylic · Leather',
      'Fiber: 1,064nm · Metals · Anodized Al',
      'UV laser: cold-process · Glass · Coated',
      'Focus tolerance: ±0.05mm',
      'Beam diameter: 0.15–0.3mm',
    ],
  },
  {
    id: 'dtg',
    stationNumber: '03',
    eyebrow: 'Direct-to-Garment · Photographic Print Quality',
    name: 'DTG Production',
    tagline: 'CMYK inkjet directly onto garment fabric — photographic full-color without screen separation, plate setup, or minimum quantities.',
    accent: 'var(--color-hps-gold)',
    accentHex: '#e8b84b',
    atmosphere: {
      base: 'var(--color-hps-cream)',
      glow: 'radial-gradient(ellipse at 28% 52%, rgba(184,136,42,0.055) 0%, transparent 55%)',
      texture: 'repeating-linear-gradient(180deg, transparent 0px, transparent 3px, rgba(200,180,154,0.055) 3px, rgba(200,180,154,0.055) 4px)',
    },
    materialNote: 'Cotton and cotton-blend fabrics with ≥50% natural fiber content. Pre-treat application calculated by fabric weight, not estimated. Jobs requiring ≤50% cotton route to sublimation. No minimum quantity.',
    keyStats: [
      { value: '1200 dpi', label: 'Print resolution' },
      { value: '1 unit', label: 'Minimum quantity' },
      { value: '160°C', label: 'Cure temperature' },
    ],
    steps: [
      { n: '01', label: 'Garment Intake',     desc: 'Fabric content verified; garment pre-treated based on blend percentage — pretreat weight calculated by surface area.' },
      { n: '02', label: 'Pre-Treatment',       desc: 'Pretreat solution applied by measured weight; distribution verified across print field; dried to correct moisture level before printing.' },
      { n: '03', label: 'Platen Registration', desc: 'Garment loaded to correct platen size; positioned against alignment guides; tension verified even across the print area.' },
      { n: '04', label: 'Test Print',          desc: 'First garment printed and inspected; color verified against approved digital proof; density adjusted before the run.' },
      { n: '05', label: 'Production Run',      desc: 'Full batch printed in sequence; platen rotation consistent; each piece exits the print pass before moving to cure.' },
      { n: '06', label: 'Heat Cure',           desc: 'Each garment pressed at calibrated temperature, pressure, and dwell time; cure verified by press contact against indicator.' },
      { n: '07', label: 'Quality & Packaging', desc: 'Coverage, registration, and color accuracy inspected per piece; wash-fastness sample retained from each run; bagged and labeled.' },
    ],
    annotations: [
      'Print resolution: 1200 dpi',
      'Fabric: ≥50% cotton',
      'Pretreat: 15–25g/m²',
      'Cure temp: 160°C · Dwell: 60s',
      'Minimum: 1 unit',
    ],
  },
  {
    id: 'embroidery',
    stationNumber: '04',
    eyebrow: 'Multi-Needle · In-House Digitization · Structured Relief',
    name: 'Embroidery',
    tagline: 'Commercial embroidery with thread paths digitized in-house — underlay, pull compensation, and color sequence programmed per fabric type.',
    accent: 'var(--color-hps-gold-rich)',
    accentHex: '#b8882a',
    atmosphere: {
      base: 'var(--color-hps-parchment)',
      glow: 'radial-gradient(ellipse at 22% 62%, rgba(184,136,42,0.08) 0%, transparent 52%)',
      texture: [
        'repeating-linear-gradient(45deg, rgba(184,136,42,0.026) 0px, rgba(184,136,42,0.026) 1px, transparent 1px, transparent 10px)',
        'repeating-linear-gradient(-45deg, rgba(184,136,42,0.016) 0px, rgba(184,136,42,0.016) 1px, transparent 1px, transparent 10px)',
      ].join(', '),
    },
    materialNote: 'Polos, caps, jackets, bags, and uniforms. Flat, 3D foam-backed, and appliqué styles available. Digitization is done in-house — not auto-converted — to ensure accurate thread matching, correct underlay, and consistent registration across every repeat order.',
    keyStats: [
      { value: 'In-house', label: 'Digitization' },
      { value: '3D foam', label: 'Relief option' },
      { value: '40wt', label: 'Thread weight' },
    ],
    steps: [
      { n: '01', label: 'Digitization',         desc: 'Vector logo converted to embroidery DST/PES format; stitch types, density, underlay structure, and pull compensation programmed.' },
      { n: '02', label: 'Thread Selection',      desc: 'Thread colors matched against brand palette using physical swatch board; Madeira commercial thread confirmed before production.' },
      { n: '03', label: 'Backing & Hooping',     desc: 'Correct stabilizer weight selected for garment type; piece hooped with even tension; position verified against registration reference.' },
      { n: '04', label: 'Test Run',              desc: 'Single stitch-out on matching scrap fabric; evaluated for underlay adequacy, thread density, and color accuracy against proof.' },
      { n: '05', label: 'Production Run',        desc: 'Garments loaded in sequence; each piece inspected at completion before re-hooping — registration checked throughout the run.' },
      { n: '06', label: 'Trimming & Finishing',  desc: 'Jump threads trimmed; backing removed to edge; embroidered surface brushed for consistent lay and thread density.' },
      { n: '07', label: 'Quality & Delivery',    desc: 'Stitch count, density, and registration measured against approved proof; digitized file archived for future repeat orders.' },
    ],
    annotations: [
      'Stitch density: 4.0–6.0 pt',
      'Thread weight: 40wt commercial',
      'Pull compensation: 15–20%',
      'Underlay: run stitch + zigzag',
      'Styles: flat · 3D foam · appliqué',
    ],
  },
  {
    id: 'qrsurface',
    stationNumber: '05',
    eyebrow: 'Dynamic QR · Physical Surface · Live Digital Backbone',
    name: 'QR Surface Fabrication',
    tagline: 'Any fabricated surface can carry a live dynamic QR code — the physical piece never changes when the content does.',
    accent: 'var(--color-hps-green)',
    accentHex: '#478c5c',
    atmosphere: {
      base: 'var(--color-hps-cream)',
      glow: 'radial-gradient(ellipse at 72% 28%, rgba(71,140,92,0.07) 0%, transparent 50%)',
      texture: [
        'repeating-linear-gradient(0deg, rgba(71,140,92,0.024) 0px, rgba(71,140,92,0.024) 1px, transparent 1px, transparent 22px)',
        'repeating-linear-gradient(90deg, rgba(71,140,92,0.024) 0px, rgba(71,140,92,0.024) 1px, transparent 1px, transparent 22px)',
      ].join(', '),
    },
    materialNote: 'QR integration is available on any substrate in production: UV-printed PVC, laser-marked metal, embossed acrylic, or vinyl-applied surfaces. Destination management runs through HPS QR Code — redirect updates never require reprinting.',
    keyStats: [
      { value: 'Dynamic', label: 'QR destination' },
      { value: '2.5mm', label: 'Min module size' },
      { value: 'Any', label: 'Substrate' },
    ],
    steps: [
      { n: '01', label: 'Code Generation',        desc: 'QR destination URL configured in HPS QR Code; dynamic redirect created; version and error-correction level assigned.' },
      { n: '02', label: 'Module Sizing',           desc: 'Minimum module size calculated for substrate dimensions and expected scan distance; quiet zone boundary specified.' },
      { n: '03', label: 'Substrate Integration',   desc: 'QR data embedded into production file; print or engraving method selected based on substrate and finish requirements.' },
      { n: '04', label: 'Test Fabrication',        desc: 'QR code produced on substrate sample; scan-tested from production distance with reference scanner before full run.' },
      { n: '05', label: 'Production Fabrication',  desc: 'Full surface fabricated with QR zone; code size and placement match approved production spec; registration verified.' },
      { n: '06', label: 'Scan Verification',       desc: 'Each QR-bearing piece scan-tested before release; destination URL confirmed live; initial scan baseline recorded.' },
      { n: '07', label: 'Destination Assignment',  desc: 'Code registered in HPS QR Code dashboard; analytics baseline established; owner briefed on redirect management.' },
    ],
    annotations: [
      'QR version: 3–10',
      'Error correction: M-level (15%)',
      'Min module: 2.5mm',
      'Quiet zone: 4 modules',
      'Scan range: 20–150cm',
    ],
  },
  {
    id: 'acrylic',
    stationNumber: '06',
    eyebrow: 'CO₂ Laser Cut · Optically Clear · Flame-Polished Edge',
    name: 'Acrylic Production',
    tagline: 'Cast acrylic cut and engraved to tolerance — reverse-engraved interior detail, polished edges, and clear finishes for display and signage.',
    accent: 'var(--color-hps-teal)',
    accentHex: '#14b8a6',
    atmosphere: {
      base: 'var(--color-hps-parchment)',
      glow: 'radial-gradient(ellipse at 88% 10%, rgba(100,200,220,0.055) 0%, transparent 50%)',
      texture: 'repeating-linear-gradient(108deg, transparent 0px, transparent 20px, rgba(100,200,220,0.020) 20px, rgba(100,200,220,0.020) 21px)',
      shimmer: 'linear-gradient(108deg, transparent 28%, rgba(255,255,255,0.040) 44%, rgba(200,240,255,0.028) 50%, rgba(255,255,255,0.040) 56%, transparent 72%)',
    },
    materialNote: 'Cast acrylic preferred over extruded for optical clarity and dimensional stability in precision work. Available clear, frosted, tinted, and mirrored. Thickness range 3–25mm. CO₂ laser cutting at calibrated kerf with flame-polish or machine-buff edge finish options.',
    keyStats: [
      { value: 'Cast', label: 'Material grade' },
      { value: '3–25mm', label: 'Thickness range' },
      { value: 'Polished', label: 'Edge finish' },
    ],
    steps: [
      { n: '01', label: 'Sheet Selection',       desc: 'Acrylic grade confirmed: cast vs extruded, clear vs frosted, coating type; thickness verified against structural and optical spec.' },
      { n: '02', label: 'Digital Layout',         desc: 'Cut paths and engraving zones laid out in vector; kerf compensation applied for CO₂ cutting; protective film status planned.' },
      { n: '03', label: 'Film Management',        desc: 'Factory film managed strategically: protected through cutting, removed for engraving zones to prevent residue contamination.' },
      { n: '04', label: 'Laser Cutting',          desc: 'CO₂ laser cuts at calibrated power and speed; multiple passes for thick stock; edge quality verified at first piece.' },
      { n: '05', label: 'Engraving & Marking',    desc: 'Interior engraving executed in reverse for back-lit applications; depth and width verified against spec at first piece.' },
      { n: '06', label: 'Edge Finishing',         desc: 'Cut edges flame-polished or machine-buffed where optically clear finish is required; corners radius-matched to spec.' },
      { n: '07', label: 'Assembly & Delivery',    desc: 'Hardware installed where applicable; protective film removed; wrapped for transit to prevent contact marks during shipping.' },
    ],
    annotations: [
      'Material: cast acrylic preferred',
      'Thickness: 3–25mm',
      'Kerf compensation: 0.15mm',
      'Edge finish: polished or satin',
      'Clear · Frosted · Tinted · Mirrored',
    ],
  },
  {
    id: 'sponsorplaque',
    stationNumber: '07',
    eyebrow: 'UV Print + Laser Combined · Season Archive · QR Integration',
    name: 'Sponsor Plaque Systems',
    tagline: 'Production programs for golf courses, event venues, and recognition environments — UV printed surfaces, fiber laser engraving, and season-cycle reprints managed in-house.',
    accent: 'var(--color-hps-gold-rich)',
    accentHex: '#b8882a',
    atmosphere: {
      base: 'var(--color-hps-cream)',
      glow: 'radial-gradient(ellipse at 42% 42%, rgba(232,184,75,0.08) 0%, transparent 54%)',
      texture: 'repeating-linear-gradient(0deg, rgba(232,184,75,0.020) 0px, rgba(232,184,75,0.020) 1px, transparent 1px, transparent 28px)',
      shimmer: 'linear-gradient(100deg, transparent 30%, rgba(255,248,230,0.048) 48%, rgba(255,255,255,0.036) 52%, transparent 70%)',
    },
    materialNote: 'Sponsor programs combine UV raised-texture printing with fiber laser or CO₂ engraving on a single substrate. Substrate options: 3mm PVC, aluminum composite (ACM), or premium hardwood. Production files archived by season — repeat orders require no new art preparation.',
    keyStats: [
      { value: 'Archived', label: 'Season files' },
      { value: 'UV + Laser', label: 'Combined method' },
      { value: 'QR-ready', label: 'Integration' },
    ],
    steps: [
      { n: '01', label: 'Asset Intake',           desc: 'Sponsor logo package reviewed: vector format, brand guidelines, and approved color values; multi-sponsor assets organized by plaque type and position.' },
      { n: '02', label: 'Substrate Selection',    desc: 'Substrate selected by installation environment: interior PVC, outdoor ACM, or premium hardwood for recognition wall applications.' },
      { n: '03', label: 'Production File Build',  desc: 'UV print layer, laser engraving zones, and QR integration laid out on single production template; material-specific parameters applied.' },
      { n: '04', label: 'UV Print Pass',          desc: 'Primary surface produced: sponsor identity, color fields, and raised-texture logo; gloss or matte clear coat applied per spec.' },
      { n: '05', label: 'Laser Integration',      desc: 'Fiber or CO₂ engraving applied over UV print where dimensional contrast is specified; registration verified against UV base layer.' },
      { n: '06', label: 'QR Embedding',           desc: 'QR code sized and positioned; printed or engraved to substrate; scan-verified against live destination before packaging.' },
      { n: '07', label: 'Season Archive',         desc: 'Production file archived with substrate spec, QR destination, and install dimensions; season reprints pulled without new art prep.' },
    ],
    annotations: [
      'Substrate: PVC · ACM · Hardwood',
      'UV + fiber laser combined',
      'QR integration: optional',
      'Season archive: standard',
      'Reprint: same-spec pull',
    ],
  },
]

export function ProcessBand({ band }: { band: ProcessBandData }) {
  const atmosphereLayers = [
    band.atmosphere.texture,
    band.atmosphere.glow,
    ...(band.atmosphere.shimmer ? [band.atmosphere.shimmer] : []),
  ].join(', ')

  return (
    <section
      aria-label={`${band.name} process station`}
      style={{ position: 'relative', overflow: 'hidden', background: band.atmosphere.base }}
    >
      {/* Atmospheric overlay — stacked gradients: texture, directional glow, optional shimmer */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: atmosphereLayers,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        className="max-w-7xl mx-auto px-6 lg:px-10 py-14 lg:py-20"
        style={{ position: 'relative', zIndex: 1 }}
      >
        {/* Station header */}
        <div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 pb-8"
          style={{ borderBottom: `1px solid ${band.accentHex}28` }}
        >
          <div>
            <p
              className="font-mono uppercase mb-2"
              style={{ fontSize: '0.52rem', letterSpacing: '0.24em', color: band.accent }}
            >
              {band.eyebrow}
            </p>
            <h3
              data-reveal
              className="font-display"
              style={{ fontSize: 'clamp(1.375rem, 2.8vw, 2rem)', color: 'var(--color-hps-ink)', lineHeight: 1.08 }}
            >
              {band.name}
            </h3>
            <p
              data-reveal
              data-reveal-delay="60"
              className="font-body mt-2 max-w-2xl"
              style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)', lineHeight: 1.6 }}
            >
              {band.tagline}
            </p>
          </div>
          <span
            className="font-display shrink-0"
            style={{
              fontSize: 'clamp(3rem,7vw,5.5rem)',
              color: band.accentHex,
              opacity: 0.09,
              lineHeight: 1,
              fontVariantNumeric: 'tabular-nums',
            } as React.CSSProperties}
            aria-hidden="true"
          >
            {band.stationNumber}
          </span>
        </div>

        {/* Body: identity panel + process flow */}
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 lg:gap-16 pt-8">
          {/* Left: material identity + key stats */}
          <div data-reveal className="flex flex-col gap-6">
            <div>
              <p
                className="font-mono uppercase mb-2"
                style={{ fontSize: '0.5rem', letterSpacing: '0.2em', color: band.accent, opacity: 0.70 }}
              >
                Material / Substrate
              </p>
              <p
                className="font-body leading-relaxed"
                style={{ fontSize: '0.875rem', color: 'var(--color-hps-smoke)' }}
              >
                {band.materialNote}
              </p>
            </div>
            <div
              className="grid grid-cols-3 gap-3 pt-5"
              style={{ borderTop: `1px solid ${band.accentHex}20` }}
            >
              {band.keyStats.map(s => (
                <div key={s.label} className="flex flex-col">
                  <span
                    className="font-display"
                    style={{ fontSize: '0.9375rem', color: band.accent, lineHeight: 1.1, letterSpacing: '-0.01em' }}
                  >
                    {s.value}
                  </span>
                  <span
                    className="font-mono mt-1"
                    style={{
                      fontSize: '0.48rem',
                      letterSpacing: '0.1em',
                      color: 'var(--color-hps-smoke)',
                      opacity: 0.58,
                      lineHeight: 1.4,
                      textTransform: 'uppercase',
                    } as React.CSSProperties}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: 7-step operational sequence */}
          <div className="flex flex-col">
            {band.steps.map((step, i) => (
              <div
                key={step.n}
                data-reveal
                data-reveal-delay={String(i * 40)}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '2rem 1fr',
                  gap: '1.25rem',
                  paddingTop: '1rem',
                  paddingBottom: '1rem',
                  borderBottom: i < band.steps.length - 1 ? `1px solid ${band.accentHex}16` : 'none',
                }}
              >
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.55rem',
                    letterSpacing: '0.12em',
                    color: band.accent,
                    opacity: 0.52,
                    paddingTop: '0.15rem',
                  }}
                >
                  {step.n}
                </span>
                <div>
                  <p
                    className="font-mono uppercase mb-1"
                    style={{ fontSize: '0.55rem', letterSpacing: '0.16em', color: 'var(--color-hps-ink)' }}
                  >
                    {step.label}
                  </p>
                  <p
                    className="font-body"
                    style={{ fontSize: '0.875rem', color: 'var(--color-hps-smoke)', lineHeight: 1.65 }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom annotation strip — production metadata footer */}
      <div style={{ borderTop: `1px solid ${band.accentHex}18`, background: `${band.accentHex}06` }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-2.5 flex flex-wrap items-center gap-x-6 gap-y-1">
          {band.annotations.map(ann => (
            <span
              key={ann}
              className="font-mono"
              style={{ fontSize: '0.5rem', letterSpacing: '0.12em', color: 'var(--color-hps-smoke)', opacity: 0.42 }}
            >
              {ann}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessBand
