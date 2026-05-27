// ── HospitalitySystemsEnvironment ─────────────────────────────────────────────
//
// Physical venue surface section for HospitalityQRPage.
// Shows the fabricated objects that exist in real hospitality environments —
// the printed surfaces HPS produces and the QR systems they carry.
//
// Atmosphere: warm amber interior glow suggesting a live hospitality venue.
// Visual register: operational, grounded, fabrication-aware.

import { OperationalPhoto } from '../proof/PhotographyIntegrationFramework'
import { EnvironmentalPulse } from '../motion/EnvironmentalSoundVisualizationLayer'
import type { PhotoEnvironment, PhotoAspect, PhotoMetaItem } from '../proof/PhotographyIntegrationFramework'

interface VenueSurface {
  caption: string
  environment: PhotoEnvironment
  aspect: PhotoAspect
  metadata: PhotoMetaItem[]
  revealDelay: number
}

const VENUE_SURFACES: VenueSurface[] = [
  {
    caption: 'Counter tent — restaurant table service',
    environment: 'hospitality',
    aspect: '4/3',
    metadata: [
      { label: 'Surface', value: 'UV table tent' },
      { label: 'System', value: 'HPS QR Menu' },
      { label: 'Origin', value: 'Leesburg fabrication' },
    ],
    revealDelay: 0,
  },
  {
    caption: 'Tap list panel — craft brewery taproom',
    environment: 'hospitality',
    aspect: '4/3',
    metadata: [
      { label: 'Surface', value: 'UV wall panel' },
      { label: 'System', value: 'HPS QR Code' },
      { label: 'Update cycle', value: 'Weekly rotation' },
    ],
    revealDelay: 80,
  },
  {
    caption: 'Bar coaster — branded QR surface',
    environment: 'hospitality',
    aspect: '1/1',
    metadata: [
      { label: 'Surface', value: 'UV round coaster' },
      { label: 'System', value: 'HPS QR Menu' },
      { label: 'Qty', value: 'Per-venue bulk run' },
    ],
    revealDelay: 160,
  },
  {
    caption: 'Entrance panel — food truck venue signage',
    environment: 'hospitality',
    aspect: '4/3',
    metadata: [
      { label: 'Surface', value: 'Vinyl panel' },
      { label: 'System', value: 'HPS QR Menu' },
      { label: 'Mobility', value: 'Travels with vehicle' },
    ],
    revealDelay: 0,
  },
  {
    caption: 'Acrylic holder — clubhouse dining room',
    environment: 'hospitality',
    aspect: '4/3',
    metadata: [
      { label: 'Surface', value: 'Laser-cut acrylic' },
      { label: 'System', value: 'HPS QR Menu' },
      { label: 'Finish', value: 'Engraved + branded' },
    ],
    revealDelay: 80,
  },
  {
    caption: 'Event signage — temporary QR deployment',
    environment: 'hospitality',
    aspect: '16/9',
    metadata: [
      { label: 'Surface', value: 'UV panel' },
      { label: 'System', value: 'HPS QR Code' },
      { label: 'Lifecycle', value: 'Scheduled activation' },
    ],
    revealDelay: 160,
  },
]

const VENUE_TYPES = [
  'Full-service restaurants',
  'Craft breweries',
  'Food trucks',
  'Golf clubhouses',
  'Hotels & resorts',
  'Event venues',
]

const SCALE_STATS = [
  { value: '6+', label: 'Surface types produced in-house' },
  { value: '1', label: 'Vendor handles print & digital' },
  { value: '0', label: 'Reprints to update a QR destination' },
]

export function HospitalitySystemsEnvironment() {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--color-hps-parchment)',
        borderTop: '1px solid rgba(200,180,154,0.30)',
        borderBottom: '1px solid rgba(200,180,154,0.30)',
      }}
    >
      {/* ── Atmospheric warmth layer ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: [
            'radial-gradient(ellipse at 20% 30%, rgba(184,136,42,0.065) 0%, transparent 52%)',
            'radial-gradient(ellipse at 80% 70%, rgba(248,114,57,0.040) 0%, transparent 45%)',
            'radial-gradient(ellipse at 50% 100%, rgba(184,136,42,0.030) 0%, transparent 40%)',
            'repeating-linear-gradient(0deg, transparent 0px, transparent 3px, rgba(184,136,42,0.008) 3px, rgba(184,136,42,0.008) 4px)',
          ].join(', '),
        }}
      />

      {/* ── Environmental pulse — hospitality rhythm ── */}
      <EnvironmentalPulse environment="hospitality" opacity={0.40} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10" style={{ position: 'relative', zIndex: 1 }}>

        {/* ── Header + narrative ── */}
        <div className="pt-16 pb-12 lg:pt-20 lg:pb-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end">
          <div data-reveal>
            <p
              className="font-mono uppercase mb-4"
              style={{ fontSize: '0.6rem', letterSpacing: '0.22em', color: 'var(--color-hps-coral-warm)' }}
            >
              Physical operational environments
            </p>
            <h2
              className="font-display mb-5"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.06 }}
            >
              The surface your guests touch is built here.
            </h2>
            <p
              className="font-body leading-relaxed mb-4"
              style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)' }}
            >
              Every QR surface HPS deploys is designed, printed, and cut at our Leesburg fabrication lab. Table tents, coasters, wall panels, acrylic menu holders — they come out of the same facility that manages the QR systems they carry. When the printed object needs to change, we produce it. When the digital destination needs updating, you do it yourself.
            </p>
            <p
              className="font-body leading-relaxed"
              style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)', opacity: 0.88 }}
            >
              That's one engagement instead of two vendors — and physical surfaces that stay in service longer because the underlying system is never stale.
            </p>
          </div>

          <div data-reveal data-reveal-delay="80">
            {/* Scale stats */}
            <div
              className="grid grid-cols-3 gap-4 mb-7"
              style={{ borderBottom: '1px solid rgba(200,180,154,0.35)', paddingBottom: '1.5rem' }}
            >
              {SCALE_STATS.map(s => (
                <div key={s.label}>
                  <p
                    className="font-mono"
                    style={{ fontSize: '1.75rem', color: 'var(--color-hps-gold-rich)', lineHeight: 1, marginBottom: '0.3rem' }}
                  >
                    {s.value}
                  </p>
                  <p
                    className="font-mono"
                    style={{ fontSize: '0.55rem', letterSpacing: '0.12em', color: 'var(--color-hps-smoke)', textTransform: 'uppercase', lineHeight: 1.4 }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Venue type tags */}
            <div>
              <p
                className="font-mono uppercase mb-3"
                style={{ fontSize: '0.55rem', letterSpacing: '0.18em', color: 'var(--color-hps-smoke)', opacity: 0.60 }}
              >
                Venue environments
              </p>
              <div className="flex flex-wrap gap-2">
                {VENUE_TYPES.map(v => (
                  <span
                    key={v}
                    className="font-mono"
                    style={{
                      fontSize: '0.58rem',
                      letterSpacing: '0.10em',
                      color: 'var(--color-hps-ink)',
                      background: 'rgba(184,136,42,0.09)',
                      border: '1px solid rgba(184,136,42,0.22)',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '2px',
                    }}
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Photo grid ── */}
        <div className="pb-16 lg:pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VENUE_SURFACES.map((surface, i) => (
              <OperationalPhoto
                key={i}
                caption={surface.caption}
                environment={surface.environment}
                aspect={surface.aspect}
                metadata={surface.metadata}
                revealDelay={surface.revealDelay}
                accentColor="var(--color-hps-gold-rich)"
              />
            ))}
          </div>

          {/* ── Production origin callout ── */}
          <div
            data-reveal
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 rounded-sm"
            style={{
              background: 'rgba(184,136,42,0.05)',
              border: '1px solid rgba(184,136,42,0.18)',
              borderLeft: '3px solid var(--color-hps-gold-rich)',
            }}
          >
            <div className="flex-1">
              <p
                className="font-body font-medium mb-1"
                style={{ fontSize: '0.9375rem', color: 'var(--color-hps-ink)' }}
              >
                All physical surfaces produced in Leesburg, Florida.
              </p>
              <p
                className="font-body"
                style={{ fontSize: '0.875rem', color: 'var(--color-hps-smoke)', lineHeight: 1.6 }}
              >
                UV printing, laser cutting, vinyl fabrication, and acrylic work — all in-house at the HPS fabrication lab, Lake County. No third-party print vendor, no shipping intermediary.
              </p>
            </div>
            <a
              href="/fabrication"
              className="font-mono uppercase shrink-0"
              style={{
                fontSize: '0.62rem',
                letterSpacing: '0.18em',
                color: 'var(--color-hps-gold-rich)',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              View fabrication lab →
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default HospitalitySystemsEnvironment
