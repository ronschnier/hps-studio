// ── GolfCourseDeploymentEnvironment ───────────────────────────────────────────
//
// Atmospheric section showing HPS infrastructure operating within four
// distinct golf course zones. Each zone documents what surfaces exist,
// what systems they connect to, and what the operational outcome is.
//
// Visual register: warm morning course light, premium materials, deployed reality.
// Not a product pitch — a tour of a real operational environment.

import { OperationalPhoto } from '../proof/PhotographyIntegrationFramework'

// ── Course zone definitions ────────────────────────────────────────────────────

interface CourseZone {
  id:       string
  name:     string
  context:  string
  surfaces: string[]
  systems:  string[]
  outcome:  string
  accent:   string
}

const COURSE_ZONES: CourseZone[] = [
  {
    id: 'tee-complex',
    name: 'Tee complex',
    context: 'The first point of engagement on every hole — golfer attention is highest here.',
    surfaces: [
      'Tee identification markers (all tee positions)',
      'Hole sponsor plaque',
      'Yardage and course rating plate',
      'Local rules card holder (optional)',
    ],
    systems: ['HPS QR Code', 'HPS Golf Systems'],
    outcome: 'Every golfer reads the tee marker and sees the sponsor plaque before addressing the ball. QR scan rate is highest at tee complex.',
    accent: 'var(--color-hps-green)',
  },
  {
    id: 'fairway-holes',
    name: 'Fairway & hole',
    context: 'Mid-hole markers, cart path signage, and approach yardage points with secondary sponsor exposure.',
    surfaces: [
      'Cart path directional signs (with sponsor strip)',
      '150-yard marker with optional sponsor panel',
      'Hazard identification markers',
      'Out-of-bounds stakes (branded)',
    ],
    systems: ['HPS QR Code'],
    outcome: 'Sponsor exposure at multiple points during the hole — tee, midway, and approach. Cart path signs serve both directional and revenue functions.',
    accent: 'var(--color-hps-green)',
  },
  {
    id: 'turn-station',
    name: 'Turn station',
    context: 'High-traffic rest point between holes 9 and 10 — guests stop, scan menus, and interact with sponsor surfaces.',
    surfaces: [
      'QR menu surface (HPS QR Menu)',
      'Sponsor display panels',
      'Beverage price board',
      'Promotional display (seasonal)',
    ],
    systems: ['HPS QR Menu', 'HPS QR Code', 'HPS Golf Systems'],
    outcome: 'Highest QR scan engagement point on the course. Menu updates happen in real time — no reprinting for seasonal or price changes.',
    accent: 'var(--color-hps-teal-dark)',
  },
  {
    id: 'clubhouse',
    name: 'Clubhouse',
    context: 'Member recognition, pro shop, dining, and event registration — surfaces serve operational, social, and sponsor functions.',
    surfaces: [
      'Member recognition wall (expandable panels)',
      'Tournament winner boards',
      'Pro shop informational signage',
      'Restaurant QR menu surfaces',
      'Sponsor recognition displays',
    ],
    systems: ['HPS QR Menu', 'HPS QR Code', 'HPS Golf Systems'],
    outcome: 'Clubhouse surfaces anchor the non-course sponsor inventory. High-value placement for naming sponsor and dining hospitality integration.',
    accent: 'var(--color-hps-gold-rich)',
  },
]

// ── Main export ────────────────────────────────────────────────────────────────

export function GolfCourseDeploymentEnvironment() {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--color-hps-cream)',
        borderTop: '1px solid rgba(200,180,154,0.28)',
      }}
    >
      {/* Early morning course atmosphere */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: [
            'radial-gradient(ellipse at 15% 15%, rgba(184,136,42,0.060) 0%, transparent 50%)',
            'radial-gradient(ellipse at 85% 85%, rgba(71,140,92,0.040) 0%, transparent 45%)',
            'radial-gradient(ellipse at 50% 50%, rgba(200,180,154,0.020) 0%, transparent 65%)',
          ].join(', '),
        }}
      />

      <div
        className="max-w-7xl mx-auto px-6 lg:px-10"
        style={{ position: 'relative', zIndex: 1, paddingTop: '4rem', paddingBottom: '5rem' }}
      >
        {/* Header */}
        <div data-reveal className="mb-12">
          <p
            className="font-mono uppercase mb-3"
            style={{ fontSize: '0.6rem', letterSpacing: '0.22em', color: 'var(--color-hps-green)' }}
          >
            Course environment
          </p>
          <h2
            className="font-display mb-4"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.06 }}
          >
            Four zones. Infrastructure in every one.
          </h2>
          <p
            className="font-body max-w-2xl leading-relaxed"
            style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}
          >
            A full HPS Golf deployment covers the entire course — tee to clubhouse.
            Each zone serves different operational and revenue functions. Surfaces are specified
            per-zone, produced together, and deployed in a single installation cycle.
          </p>
        </div>

        {/* Zone cards — 2×2 grid on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {COURSE_ZONES.map((zone, i) => (
            <div
              key={zone.id}
              data-reveal
              data-reveal-delay={String((i % 2) * 80)}
              style={{
                background: 'var(--color-hps-parchment)',
                border: '1px solid rgba(200,180,154,0.35)',
                borderLeft: `3px solid ${zone.accent}`,
                borderRadius: '2px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Zone image */}
              <OperationalPhoto
                environment="golf"
                aspect="16/9"
                accentColor={zone.accent}
              />

              {/* Zone content */}
              <div style={{ padding: '1rem 1.125rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <h3 style={{
                      fontFamily: 'var(--font-display, serif)',
                      fontSize: '1.0625rem',
                      color: 'var(--color-hps-ink)',
                      lineHeight: 1.2,
                    }}>
                      {zone.name}
                    </h3>
                    <span style={{
                      fontFamily: 'monospace',
                      fontSize: '0.44rem',
                      letterSpacing: '0.10em',
                      color: zone.accent,
                      textTransform: 'uppercase',
                      opacity: 0.70,
                    }}>
                      Zone {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p style={{
                    fontFamily: 'var(--font-body, sans-serif)',
                    fontSize: '0.8125rem',
                    color: 'var(--color-hps-smoke)',
                    lineHeight: 1.55,
                  }}>
                    {zone.context}
                  </p>
                </div>

                {/* Surfaces list */}
                <div style={{ borderTop: '1px solid rgba(200,180,154,0.22)', paddingTop: '0.6rem' }}>
                  <p style={{
                    fontFamily: 'monospace',
                    fontSize: '0.44rem',
                    letterSpacing: '0.14em',
                    color: 'var(--color-hps-smoke)',
                    textTransform: 'uppercase',
                    opacity: 0.52,
                    marginBottom: '0.35rem',
                  }}>
                    Surfaces in this zone
                  </p>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.22rem' }}>
                    {zone.surfaces.map(s => (
                      <li key={s} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.4rem',
                        fontFamily: 'var(--font-body, sans-serif)',
                        fontSize: '0.8125rem',
                        color: 'var(--color-hps-smoke)',
                        lineHeight: 1.4,
                      }}>
                        <span style={{ width: 4, height: 4, borderRadius: '50%', background: zone.accent, flexShrink: 0, marginTop: '0.3rem' }} aria-hidden="true" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Systems + outcome */}
                <div style={{
                  background: `${zone.accent}07`,
                  border: `1px solid ${zone.accent}18`,
                  borderLeft: `2px solid ${zone.accent}`,
                  padding: '0.5rem 0.65rem',
                  borderRadius: '1px',
                  marginTop: 'auto',
                }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.28rem', marginBottom: '0.4rem' }}>
                    {zone.systems.map(sys => (
                      <span key={sys} style={{
                        fontFamily: 'monospace',
                        fontSize: '0.44rem',
                        letterSpacing: '0.08em',
                        color: zone.accent,
                        background: `${zone.accent}10`,
                        border: `1px solid ${zone.accent}22`,
                        padding: '0.08rem 0.32rem',
                        borderRadius: '1px',
                      }}>
                        {sys}
                      </span>
                    ))}
                  </div>
                  <p style={{
                    fontFamily: 'var(--font-body, sans-serif)',
                    fontSize: '0.78rem',
                    color: 'var(--color-hps-ink)',
                    lineHeight: 1.5,
                  }}>
                    {zone.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GolfCourseDeploymentEnvironment
