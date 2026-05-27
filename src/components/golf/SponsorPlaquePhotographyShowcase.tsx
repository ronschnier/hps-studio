// ── SponsorPlaquePhotographyShowcase ─────────────────────────────────────────
//
// Sponsor plaque photography showcase for HPSGolfPage.
// Centers the physical plaque as the visual proof of the golf ecosystem —
// material detail, deployment context, and QR-connected storytelling.
//
// Photo slots wire in via src when real captures are available.
// Infrastructure is structured to receive: mounted plaque photography,
// material macro shots, deployment environments, and QR detail.

interface PlaqueShowFrame {
  id: string
  label: string
  context: string
  material: string
  process: string
  deployment: string
  analytics?: string
  src?: string
  alt: string
}

const PLAQUE_FRAMES: PlaqueShowFrame[] = [
  {
    id: 'hole-sponsor-mounted',
    label: 'Hole sponsor panel — mounted on-course',
    context: 'Deployed at hole tee complex',
    material: 'Aluminum composite · 12×18 · weather-rated',
    process: 'UV full-bleed color + fiber laser sponsor identity',
    deployment: 'Stainless hardware · weatherproof sealant · post-mount',
    analytics: 'QR scan tracking active · hole-attributed',
    alt: 'Hole sponsor panel mounted at golf course tee complex, UV-printed aluminum composite with QR code',
  },
  {
    id: 'plaque-material-detail',
    label: 'Plaque surface — UV and laser detail',
    context: 'Material quality documentation',
    material: 'Aluminum composite · UV CMYK+V · fiber engraved',
    process: 'Color layer registered to engraved zones. Varnish coat applied.',
    deployment: 'Fabricated at Leesburg lab · field-install ready',
    alt: 'Close detail of sponsor plaque surface showing UV color and fiber laser engraving registration',
  },
  {
    id: 'recognition-plaque',
    label: 'Recognition plaque — clubhouse installation',
    context: 'Clubhouse display environment',
    material: 'Acrylic mount · engraved aluminum face · dimensional',
    process: 'CO2 acrylic base + fiber laser engraved nameplate',
    deployment: 'Wall-mount hardware · flush installation',
    alt: 'Recognition plaque installed in golf clubhouse, acrylic mount with laser-engraved aluminum face',
  },
  {
    id: 'tee-marker-set',
    label: 'Tee marker system — 18-hole deployment',
    context: 'Tee complex installation set',
    material: 'Black anodized aluminum · fiber engraved · per-tee yardage plates',
    process: 'Fiber laser numbering and yardage. Set registered across 18 holes.',
    deployment: 'Installed per survey plan · 18-hole complete set',
    alt: 'Tee marker system with hole numbers and yardage plates installed at golf course tee complex',
  },
  {
    id: 'cart-signage',
    label: 'Cart path signage — sponsor and directional',
    context: 'On-course cart path installation',
    material: 'Rigid substrate · UV-printed · weather-rated laminate',
    process: 'UV full-coverage · vinyl laminate overlay for UV resistance',
    deployment: 'Post-mount on cart path · sponsor panel integrated',
    analytics: 'Optional QR surface version available',
    alt: 'Golf cart path signage with sponsor branding and directional information',
  },
  {
    id: 'qr-sponsor-detail',
    label: 'QR-connected sponsor surface — close detail',
    context: 'QR module and sponsor branding integration',
    material: 'UV-printed aluminum · 25mm QR module registration',
    process: 'QR generated and linked before fabrication. Module zone preserved in artwork.',
    deployment: 'Destination active · scan tracking enabled · dashboard-connected',
    analytics: 'Scans counted per hole · monthly report generation',
    alt: 'Close detail of QR code integrated into sponsor panel surface, showing module and surrounding sponsor branding',
  },
]

interface Props {
  headline?: string
  showAnalyticsConnection?: boolean
}

function PlaqueFrame({ frame }: { frame: PlaqueShowFrame }) {
  const hasPhoto = Boolean(frame.src)

  return (
    <div
      style={{
        border: '1px solid rgba(200,180,154,0.32)',
        borderRadius: '2px',
        overflow: 'hidden',
        background: 'var(--color-hps-cream)',
      }}
    >
      {/* Image area */}
      <div
        style={{
          aspectRatio: '4/3',
          position: 'relative',
          background: hasPhoto ? 'transparent' : 'rgba(44,90,58,0.04)',
          overflow: 'hidden',
        }}
      >
        {hasPhoto ? (
          <img
            src={frame.src}
            alt={frame.alt}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        ) : (
          <>
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                background: [
                  'repeating-linear-gradient(0deg, transparent 0px, transparent 13px, rgba(71,140,92,0.04) 13px, rgba(71,140,92,0.04) 14px)',
                  'repeating-linear-gradient(90deg, transparent 0px, transparent 13px, rgba(71,140,92,0.04) 13px, rgba(71,140,92,0.04) 14px)',
                ].join(', '),
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
              }}
            >
              <div style={{ width: '2rem', height: '2px', background: 'var(--color-hps-green)', opacity: 0.30 }} aria-hidden="true" />
              <p
                style={{
                  fontFamily: 'monospace',
                  fontSize: '0.5rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--color-hps-smoke)',
                  opacity: 0.38,
                  textAlign: 'center',
                  maxWidth: '9rem',
                  lineHeight: 1.5,
                }}
              >
                Photography pending
              </p>
            </div>
          </>
        )}

        {/* Deployment badge */}
        <div
          style={{
            position: 'absolute',
            bottom: '0.5rem',
            left: '0.5rem',
            background: 'rgba(12,20,32,0.70)',
            padding: '0.2rem 0.5rem',
            borderRadius: '1px',
          }}
          aria-hidden="true"
        >
          <span style={{ fontFamily: 'monospace', fontSize: '0.44rem', letterSpacing: '0.1em', color: 'rgba(71,140,92,0.85)' }}>
            {frame.context}
          </span>
        </div>

        {/* Analytics indicator */}
        {frame.analytics && (
          <div
            style={{
              position: 'absolute',
              top: '0.5rem',
              right: '0.5rem',
              background: 'rgba(13,148,136,0.18)',
              border: '1px solid rgba(13,148,136,0.28)',
              padding: '0.15rem 0.4rem',
              borderRadius: '1px',
            }}
            aria-hidden="true"
          >
            <span style={{ fontFamily: 'monospace', fontSize: '0.42rem', letterSpacing: '0.08em', color: 'rgba(20,184,166,0.90)' }}>
              QR
            </span>
          </div>
        )}
      </div>

      {/* Metadata */}
      <div style={{ padding: '0.875rem 1rem' }}>
        <p style={{ fontFamily: 'var(--font-body, sans-serif)', fontWeight: 500, fontSize: '0.8125rem', color: 'var(--color-hps-ink)', lineHeight: 1.3, marginBottom: '0.35rem' }}>
          {frame.label}
        </p>
        <p style={{ fontFamily: 'monospace', fontSize: '0.48rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-hps-smoke)', opacity: 0.5, marginBottom: '0.4rem' }}>
          {frame.material}
        </p>
        <p style={{ fontFamily: 'var(--font-body, sans-serif)', fontSize: '0.72rem', color: 'var(--color-hps-smoke)', lineHeight: 1.55, marginBottom: '0.3rem' }}>
          {frame.process}
        </p>
        <p style={{ fontFamily: 'monospace', fontSize: '0.44rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-hps-green)', opacity: 0.70 }}>
          {frame.deployment}
        </p>
        {frame.analytics && (
          <p style={{ fontFamily: 'monospace', fontSize: '0.44rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-hps-teal-dark)', opacity: 0.70, marginTop: '0.25rem' }}>
            {frame.analytics}
          </p>
        )}
      </div>
    </div>
  )
}

export default function SponsorPlaquePhotographyShowcase({
  headline = 'Sponsor plaques. Deployed on-course.',
  showAnalyticsConnection = true,
}: Props) {
  const analyticsFrames = PLAQUE_FRAMES.filter(f => f.analytics)

  return (
    <section
      style={{
        background: 'var(--color-hps-parchment)',
        borderTop: '1px solid rgba(200,180,154,0.30)',
        paddingTop: '4rem',
        paddingBottom: '5rem',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <div data-reveal className="mb-10 max-w-3xl">
          <p
            className="font-mono uppercase mb-3"
            style={{ fontSize: '0.6rem', letterSpacing: '0.22em', color: 'var(--color-hps-green)' }}
          >
            Sponsor signage · Physical deployment
          </p>
          <h2
            className="font-display mb-4"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.06 }}
          >
            {headline}
          </h2>
          <p
            className="font-body leading-relaxed"
            style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)', maxWidth: '38rem' }}
          >
            UV-printed, laser-engraved, and dimensionally finished at the Leesburg lab. Installed on-course with weatherproof hardware. Every QR-connected surface tied to scan analytics from the day of deployment.
          </p>
        </div>

        {/* Plaque grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {PLAQUE_FRAMES.map(frame => (
            <PlaqueFrame key={frame.id} frame={frame} />
          ))}
        </div>

        {/* Analytics connection callout */}
        {showAnalyticsConnection && analyticsFrames.length > 0 && (
          <div
            data-reveal
            className="mt-4 rounded-sm px-5 py-4 flex items-start gap-4"
            style={{ background: 'var(--color-hps-cream)', border: '1px solid rgba(200,180,154,0.32)', borderLeft: '3px solid var(--color-hps-teal-dark)' }}
          >
            <div className="flex-1 min-w-0">
              <p className="font-body font-medium mb-1" style={{ fontSize: '0.875rem', color: 'var(--color-hps-ink)' }}>
                {analyticsFrames.length} of {PLAQUE_FRAMES.length} surface types are QR-connected.
              </p>
              <p className="font-body" style={{ fontSize: '0.8125rem', color: 'var(--color-hps-smoke)', lineHeight: 1.6, maxWidth: '44rem' }}>
                QR-connected surfaces feed scan data into sponsor reporting from the day they go live. Monthly engagement reports are generated per hole, per sponsor, per quarter — backing every renewal conversation with real data.
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--color-hps-teal-dark)' }} aria-hidden="true" />
              <span className="font-mono" style={{ fontSize: '0.5rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-hps-teal-dark)', opacity: 0.8 }}>
                HPS QR Code
              </span>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}

export { PLAQUE_FRAMES }
export type { PlaqueShowFrame }
