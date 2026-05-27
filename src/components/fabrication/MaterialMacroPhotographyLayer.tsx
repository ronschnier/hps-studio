// ── MaterialMacroPhotographyLayer ─────────────────────────────────────────────
//
// Close-up material photography infrastructure for fabrication realism.
// Each slot is a photo-ready frame with material metadata and fabrication context.
// Images wire in via src prop when real macro photography is available.
//
// Usage:
//   <MaterialMacroPhotographyLayer />        — default 6-frame grid
//   <MaterialMacroPhotographyLayer compact /> — 3-frame highlight row

interface MaterialFrame {
  id: string
  material: string
  process: string
  detail: string
  station: string
  src?: string
  alt: string
}

const MATERIAL_FRAMES: MaterialFrame[] = [
  {
    id: 'uv-raised',
    material: 'UV raised surface',
    process: 'UV flatbed · varnish pass',
    detail: 'Tactile texture layer over CMYK base. 0.3mm raised zone against flat color field.',
    station: 'UV Flatbed · Leesburg, FL',
    alt: 'Close-up of UV raised surface texture on aluminum composite panel',
  },
  {
    id: 'laser-engraved-aluminum',
    material: 'Fiber laser engraving — anodized aluminum',
    process: 'Fiber laser · single pass',
    detail: 'Clean edge definition. Oxidation cleared after pass. Substrate: 0.8mm black anodized.',
    station: 'Laser Array · Leesburg, FL',
    alt: 'Close-up of fiber laser engraving on black anodized aluminum',
  },
  {
    id: 'acrylic-edge',
    material: 'Acrylic edge — fire-polished',
    process: 'CO2 laser cut · no secondary polish',
    detail: '3mm cast clear acrylic. Flame polish from CO2 energy. Edge clarity without grinding.',
    station: 'Acrylic Station · Leesburg, FL',
    alt: 'Close-up of fire-polished edge on 3mm clear acrylic laser cut',
  },
  {
    id: 'embroidery-thread',
    material: 'Embroidery thread — satin stitch',
    process: 'Multi-head embroidery system',
    detail: 'Tight satin-stitch fill on structured cap front panel. Tear-away backing removed.',
    station: 'Embroidery Station · Leesburg, FL',
    alt: 'Close-up of satin stitch embroidery on structured cap front panel',
  },
  {
    id: 'dtg-fabric',
    material: 'DTG print — cotton fabric surface',
    process: 'Direct-to-garment · pretreated',
    detail: 'Ink absorption into fabric weave post-pretreatment. Color fidelity at fiber level.',
    station: 'DTG Station · Leesburg, FL',
    alt: 'Close-up of DTG print on cotton fabric showing ink absorption into weave',
  },
  {
    id: 'qr-surface',
    material: 'QR surface — printed module detail',
    process: 'UV flatbed · 25mm QR module',
    detail: 'Module registration and quiet zone on UV-coated stock. Active destination linked at output.',
    station: 'QR Surface Station · Leesburg, FL',
    alt: 'Close-up of QR code modules on UV-coated printed surface',
  },
]

interface Props {
  compact?: boolean
  accentColor?: string
}

function PlaceholderFrame({ frame, accentColor }: { frame: MaterialFrame; accentColor: string }) {
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
          background: hasPhoto ? 'transparent' : 'rgba(26,21,16,0.04)',
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
            {/* Placeholder shimmer grid */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                background: [
                  'repeating-linear-gradient(0deg, transparent 0px, transparent 11px, rgba(248,114,57,0.04) 11px, rgba(248,114,57,0.04) 12px)',
                  'repeating-linear-gradient(90deg, transparent 0px, transparent 11px, rgba(248,114,57,0.04) 11px, rgba(248,114,57,0.04) 12px)',
                ].join(', '),
              }}
            />
            {/* Material label overlay */}
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
              <div
                style={{
                  width: '2rem',
                  height: '2px',
                  background: accentColor,
                  opacity: 0.35,
                }}
                aria-hidden="true"
              />
              <p
                style={{
                  fontFamily: 'monospace',
                  fontSize: '0.5rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--color-hps-smoke)',
                  opacity: 0.4,
                  textAlign: 'center',
                  maxWidth: '8rem',
                  lineHeight: 1.5,
                }}
              >
                Photo pending capture
              </p>
            </div>
          </>
        )}

        {/* Process badge */}
        <div
          style={{
            position: 'absolute',
            top: '0.5rem',
            left: '0.5rem',
            background: 'rgba(12,20,32,0.72)',
            padding: '0.2rem 0.5rem',
            borderRadius: '1px',
          }}
          aria-hidden="true"
        >
          <span style={{ fontFamily: 'monospace', fontSize: '0.44rem', letterSpacing: '0.1em', color: 'rgba(245,212,131,0.75)' }}>
            {frame.process}
          </span>
        </div>
      </div>

      {/* Metadata */}
      <div style={{ padding: '0.75rem 1rem' }}>
        <p style={{ fontFamily: 'var(--font-body, sans-serif)', fontWeight: 500, fontSize: '0.8125rem', color: 'var(--color-hps-ink)', lineHeight: 1.3, marginBottom: '0.3rem' }}>
          {frame.material}
        </p>
        <p style={{ fontFamily: 'var(--font-body, sans-serif)', fontSize: '0.72rem', color: 'var(--color-hps-smoke)', lineHeight: 1.55, marginBottom: '0.4rem' }}>
          {frame.detail}
        </p>
        <p style={{ fontFamily: 'monospace', fontSize: '0.46rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: accentColor, opacity: 0.65 }}>
          {frame.station}
        </p>
      </div>
    </div>
  )
}

export default function MaterialMacroPhotographyLayer({ compact = false, accentColor = 'var(--color-hps-coral-warm)' }: Props) {
  const frames = compact ? MATERIAL_FRAMES.slice(0, 3) : MATERIAL_FRAMES

  return (
    <section
      style={{
        background: 'var(--color-hps-parchment)',
        borderTop: '1px solid rgba(200,180,154,0.30)',
        paddingTop: compact ? '3rem' : '4rem',
        paddingBottom: compact ? '3rem' : '5rem',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div data-reveal className="mb-8">
          <p
            className="font-mono uppercase mb-3"
            style={{ fontSize: '0.6rem', letterSpacing: '0.22em', color: accentColor }}
          >
            Material detail
          </p>
          <h2
            className="font-display mb-4"
            style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.875rem)', color: 'var(--color-hps-ink)', lineHeight: 1.08 }}
          >
            {compact ? 'Material closeups.' : 'Six materials. Macro detail.'}
          </h2>
          {!compact && (
            <p
              className="font-body max-w-xl leading-relaxed"
              style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}
            >
              Close-range photography showing material texture, process quality, and production finish across fabrication stations.
            </p>
          )}
        </div>

        <div
          className={`grid gap-4 ${compact ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}
        >
          {frames.map(frame => (
            <PlaceholderFrame
              key={frame.id}
              frame={frame}
              accentColor={accentColor}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export { MATERIAL_FRAMES }
export type { MaterialFrame }
