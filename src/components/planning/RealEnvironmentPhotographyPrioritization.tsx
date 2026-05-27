// ── Real Environment Photography Prioritization ────────────────────────────────
//
// Operational media capture planning system for Version 1A launch readiness.
// Organizes photography into tiers by operational urgency and page dependency.
// Each entry specifies placement, framing, lighting, and metadata requirements.
//
// Usage: Internal planning reference. Can be rendered on a private admin route
// or exported as a reference document during pre-launch production planning.

const CAPTURE_TIERS = [
  {
    tier: 'Tier 1',
    label: 'Launch-Critical',
    accent: 'var(--color-hps-coral-warm)',
    accentHex: '#f87239',
    note: 'Required for credible v1A launch. Blocks full operational evidence system.',
    items: [
      {
        subject: 'UV Flatbed Printer — Wide Operational Shot',
        purpose: 'Establishes fabrication authority on FabricationLabPage hero',
        placement: 'FabricationLabPage hero / fabrication section header',
        lighting: 'Overhead or side natural + diffused studio. Show UV lamp glow if possible.',
        framing: '3/4 angle showing full bed and ink system. Operator hand optional for scale.',
        metadata: 'Location: HPS Fabrication Lab, Leesburg FL · Equipment: UV Flatbed · Date',
        priority: 'P1',
      },
      {
        subject: 'UV Texture Closeup — Dimensional Print Surface',
        purpose: 'Shows tactile relief and surface quality that differentiates UV from standard print',
        placement: 'FabricationLabPage capability detail / ServicesPage UV section',
        lighting: 'Raking sidelight to emphasize texture relief. 45° angle recommended.',
        framing: 'Macro or close telephoto. Full-bleed crop. Show depth-of-field falloff.',
        metadata: 'Material: Rigid substrate · Process: UV with dimensional relief · Texture height: ~2–5mm',
        priority: 'P1',
      },
      {
        subject: 'Laser System — Working Shot (CO₂ or Fiber)',
        purpose: 'Evidence of laser production capability for fabrication and signage pages',
        placement: 'FabricationLabPage laser section / ServicesPage laser engraving',
        lighting: 'Ambient shop light + laser glow if exposure permits. Safety-compliant capture.',
        framing: 'Show material being engraved. Sparks/smoke acceptable if visible.',
        metadata: 'System: [Specify CO₂/Fiber/UV/Diode] · Material: [specify] · Date',
        priority: 'P1',
      },
      {
        subject: 'Sponsor Plaque — Finished Product',
        purpose: 'Operational proof of finished fabrication deliverable for Golf and Fabrication pages',
        placement: 'HPSGolfPage sponsor section / FabricationLabPage deliverables',
        lighting: 'Directional light to show dimensional depth. Clean, neutral background.',
        framing: 'Flat lay or slight angle. Show QR code embed if present.',
        metadata: 'Product: Sponsor Plaque · Material: [specify] · Dimensions · QR: Yes/No',
        priority: 'P1',
      },
      {
        subject: 'Golf Course Signage In-Place',
        purpose: 'Environmental context for HPS Golf operational claims',
        placement: 'HPSGolfPage hero / GolfCourseDeploymentEnvironment section',
        lighting: 'Natural outdoor light, overcast preferred for even tone. Golden hour acceptable.',
        framing: 'Sign in natural context — tee marker, hole sponsor panel, or turn station.',
        metadata: 'Location: [Course name] · Leesburg area · Deployment: HPS sponsor system',
        priority: 'P1',
      },
      {
        subject: 'Embroidery Machine — Active Production',
        purpose: 'Evidence of apparel production capability',
        placement: 'FabricationLabPage garment section / ServicesPage embroidery',
        lighting: 'Shop ambient. Show thread detail and hoop setup.',
        framing: 'Over-shoulder or 3/4 showing full machine and active design.',
        metadata: 'System: Embroidery · Design: In-house digitized · Material: [specify garment]',
        priority: 'P1',
      },
    ],
  },
  {
    tier: 'Tier 2',
    label: 'High Value',
    accent: 'var(--color-hps-green)',
    accentHex: '#478c5c',
    note: 'Significantly improves operational credibility. Target within first 30 days post-launch.',
    items: [
      {
        subject: 'Hospitality Surface — QR Menu Table Tent In Use',
        purpose: 'Environmental proof for HospitalityQRPage and ServicesPage QR section',
        placement: 'HospitalityQRPage hero / QR surface capability showcase',
        lighting: 'Restaurant ambient — warm, low light acceptable. Show guest interaction if possible.',
        framing: 'Table-level shot. QR code and menu surface in focus. Background contextual.',
        metadata: 'Surface: Table tent · Venue type: [specify] · QR: HPS QR Menu live',
        priority: 'P2',
      },
      {
        subject: 'Golf Clubhouse — Operational Dashboard View',
        purpose: 'Shows HPS Golf platform in active operational context',
        placement: 'HPSGolfPage platform section / operational evidence',
        lighting: 'Screen and ambient. Balance screen brightness with room light.',
        framing: 'Monitor showing tee sheet, booking, or sponsor dashboard. Operator presence optional.',
        metadata: 'System: HPS Golf · View: [Tee sheet / Analytics / Sponsor] · Deployment active',
        priority: 'P2',
      },
      {
        subject: '3D Printer — Production Object Closeup',
        purpose: 'Evidence of 3D printing capability (FDM or Resin)',
        placement: 'FabricationLabPage 3D printing section',
        lighting: 'Studio or window light. Show layer detail.',
        framing: 'Finished object or printing in progress. Include scale reference.',
        metadata: 'System: [FDM/Resin] · Material: [specify] · Application: [signage / prototype]',
        priority: 'P2',
      },
      {
        subject: 'DTG Apparel — Finished Garment Detail',
        purpose: 'Shows photographic print quality on fabric for garment capability',
        placement: 'FabricationLabPage garment / ServicesPage DTG section',
        lighting: 'Flat or diffused natural. Show print saturation and fabric texture.',
        framing: 'Flat lay or styled hang. Full-color design preferred.',
        metadata: 'Process: DTG · Garment: [specify] · Resolution: Full color photographic',
        priority: 'P2',
      },
      {
        subject: 'Workstation Environment — Wide Studio Shot',
        purpose: 'Establishes physical operational context for the entire studio',
        placement: 'About page / FabricationLabPage intro',
        lighting: 'Natural + ambient. Show studio character without over-styling.',
        framing: 'Wide angle showing multiple capability areas if possible. Working environment.',
        metadata: 'Location: HPS Studio, Leesburg FL · Date · Capabilities visible: [list]',
        priority: 'P2',
      },
    ],
  },
  {
    tier: 'Tier 3',
    label: 'Depth & Atmosphere',
    accent: 'var(--color-hps-teal-dark)',
    accentHex: '#0d9488',
    note: 'Adds environmental depth and proof system population. Target within 60 days.',
    items: [
      {
        subject: 'Accessibility Audit Workflow — Screen Session',
        purpose: 'Operational proof for AccessibilityPage evidence system',
        placement: 'AccessibilityPage audit section / AccessibilityProofIntegration',
        lighting: 'Screen-dominant. Keyboard and monitor visible.',
        framing: 'Over-shoulder showing NVDA or VoiceOver testing session. WCAG report open.',
        metadata: 'Tool: NVDA / VoiceOver · Standard: WCAG 2.1 AA · Date',
        priority: 'P3',
      },
      {
        subject: 'Physical Plaque Installation — In-Place Context Shot',
        purpose: 'Shows installed fabrication product in operational environment',
        placement: 'FabricationLabPage deployed work / case study sections',
        lighting: 'Venue ambient. No flash. Show surrounding context.',
        framing: 'Medium shot with environment visible. Sign/plaque as primary subject.',
        metadata: 'Installed: [Location type] · Product: [Plaque/Panel/Signage] · Date installed',
        priority: 'P3',
      },
      {
        subject: 'QR Code Scan Interaction — Guest POV',
        purpose: 'Shows product in active use for hospitality and golf pages',
        placement: 'HospitalityQRPage / HPSGolfPage turn station section',
        lighting: 'Natural or venue ambient. Phone screen readable.',
        framing: 'Hand-held phone scanning QR surface. Menu loading on screen.',
        metadata: 'Product: HPS QR Menu · Surface: [specify] · Interaction: Scan → load',
        priority: 'P3',
      },
      {
        subject: 'Vinyl Cutter — Material in Production',
        purpose: 'Completes vinyl cutting capability evidence',
        placement: 'FabricationLabPage vinyl section',
        lighting: 'Shop ambient. Show blade detail and material.',
        framing: 'Active cutting or peeled vinyl detail.',
        metadata: 'System: Vinyl Cutter · Material: [vinyl type] · Application',
        priority: 'P3',
      },
      {
        subject: 'Environmental Detail — Atmospheric Support',
        purpose: 'Texture and surface imagery for atmospheric sections and background layers',
        placement: 'Various pages as supporting atmospheric imagery',
        lighting: 'Close-up, raking light. Material surfaces — wood, acrylic, metal, fabric.',
        framing: 'Macro or close telephoto. Emphasize material character.',
        metadata: 'Material: [specify] · Application: Atmospheric support · Neutral crop',
        priority: 'P3',
      },
    ],
  },
]

export default function RealEnvironmentPhotographyPrioritization() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{ background: 'var(--color-hps-cream)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div data-reveal className="mb-14">
          <p
            className="font-mono uppercase mb-4"
            style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--color-hps-coral-warm)' }}
          >
            Version 1A · Media capture pipeline
          </p>
          <h2
            className="font-display mb-5"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--color-hps-ink)', lineHeight: 1.05 }}
          >
            Photography capture priorities.
          </h2>
          <p
            className="font-body leading-relaxed"
            style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)', maxWidth: '38rem' }}
          >
            Tiered capture plan for populating operational proof systems with real imagery from the Leesburg fabrication lab, deployed installations, and active environments.
          </p>
        </div>

        {/* Tiers */}
        <div className="flex flex-col gap-14">
          {CAPTURE_TIERS.map((tier) => (
            <div key={tier.tier} data-reveal>
              {/* Tier header */}
              <div
                className="flex items-baseline gap-4 mb-6 pb-4"
                style={{ borderBottom: `2px solid ${tier.accentHex}22` }}
              >
                <span
                  className="font-mono uppercase"
                  style={{
                    fontSize: '0.58rem',
                    letterSpacing: '0.22em',
                    color: tier.accent,
                    background: `${tier.accentHex}10`,
                    padding: '0.2rem 0.6rem',
                    borderRadius: '2px',
                    border: `1px solid ${tier.accentHex}28`,
                  }}
                >
                  {tier.tier}
                </span>
                <span className="font-body font-medium" style={{ fontSize: '1rem', color: 'var(--color-hps-ink)' }}>
                  {tier.label}
                </span>
                <span className="font-body" style={{ fontSize: '0.8125rem', color: 'var(--color-hps-smoke)' }}>
                  {tier.note}
                </span>
              </div>

              {/* Capture items */}
              <div className="flex flex-col gap-3">
                {tier.items.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-sm"
                    style={{
                      background: 'var(--color-hps-parchment)',
                      border: '1px solid rgba(200,180,154,0.38)',
                      borderLeft: `3px solid ${tier.accentHex}60`,
                    }}
                  >
                    <div className="px-5 py-4">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <p className="font-body font-medium" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-ink)' }}>
                          {item.subject}
                        </p>
                        <span
                          className="font-mono shrink-0"
                          style={{
                            fontSize: '0.52rem',
                            letterSpacing: '0.1em',
                            color: tier.accent,
                            background: `${tier.accentHex}10`,
                            padding: '0.15rem 0.4rem',
                            borderRadius: '2px',
                            border: `1px solid ${tier.accentHex}28`,
                          }}
                        >
                          {item.priority}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mt-3">
                        {[
                          { key: 'Purpose',   val: item.purpose },
                          { key: 'Placement', val: item.placement },
                          { key: 'Lighting',  val: item.lighting },
                          { key: 'Framing',   val: item.framing },
                          { key: 'Metadata',  val: item.metadata },
                        ].map(({ key, val }) => (
                          <div key={key} className="flex gap-2">
                            <span
                              className="font-mono shrink-0"
                              style={{
                                fontSize: '0.5rem',
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                color: 'var(--color-hps-smoke)',
                                opacity: 0.5,
                                marginTop: '0.18rem',
                                minWidth: '3.5rem',
                              }}
                            >
                              {key}
                            </span>
                            <p className="font-body" style={{ fontSize: '0.75rem', color: 'var(--color-hps-smoke)', lineHeight: 1.55 }}>
                              {val}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
