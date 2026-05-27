// ── HPSGolfPlaqueEcosystem ─────────────────────────────────────────────────────
//
// Golf plaques as operational infrastructure — not generic awards.
// Six plaque system types, each with fabrication specs, deployment context,
// QR integration, and sponsor lifecycle role.
//
// Visual atmosphere: dimensional UV texture, course ambient lighting, premium materials.
// Emotional register: "These are operational golf infrastructure surfaces."

import { OperationalPhoto } from '../proof/PhotographyIntegrationFramework'

// ── Plaque type definitions ────────────────────────────────────────────────────

interface PlaqueType {
  id:          string
  label:       string
  category:    string
  material:    string
  dimensions:  string
  purpose:     string
  qrRole:      string
  analytics:   string
  sponsorRole: string
  accent:      string
}

const PLAQUE_TYPES: PlaqueType[] = [
  {
    id: 'tee-identification',
    label: 'Tee identification markers',
    category: 'Course Operations',
    material: 'Aluminum · UV ink · laser engraved',
    dimensions: '4–8" dimensional per tee plate',
    purpose: 'Multi-tee identification system: hole number, yardage, par, and handicap. One set covers championship, mid, forward, and junior tees.',
    qrRole: 'Optional QR for hole overview or video flyover',
    analytics: 'Scan events tracked when QR present',
    sponsorRole: 'Presenting sponsor acknowledgment on tee plate footer',
    accent: 'var(--color-hps-green)',
  },
  {
    id: 'hole-sponsor-plaque',
    label: 'Hole sponsorship plaques',
    category: 'Sponsor Revenue',
    material: 'Aluminum composite · UV full-bleed · weatherproof',
    dimensions: '12" × 18" standard · custom sizes available',
    purpose: 'Primary sponsor surface for hole-by-hole sponsorship program. Full sponsor branding, QR code, and engagement destination on a single weatherproof surface.',
    qrRole: 'Primary QR engagement surface — links to sponsor destination',
    analytics: 'Per-hole scan tracking feeds monthly sponsor report',
    sponsorRole: 'Core hole sponsor identification — the primary sponsor deliverable',
    accent: 'var(--color-hps-green)',
  },
  {
    id: 'cart-path-signage',
    label: 'Cart path plaques',
    category: 'Directional + Sponsor',
    material: 'Rigid substrate · UV print · stake or post mount',
    dimensions: 'Directional: 6"×10" / Sponsor: 8"×12"',
    purpose: 'Course wayfinding combined with sponsor exposure. Directional information on front face, sponsor panel on base or reverse.',
    qrRole: 'Secondary QR surface — sponsor destination or course info',
    analytics: 'Lower scan volume; tracked for placement optimization',
    sponsorRole: 'Secondary sponsor exposure along cart path corridors',
    accent: 'var(--color-hps-green)',
  },
  {
    id: 'recognition-display',
    label: 'Recognition systems',
    category: 'Membership + Donors',
    material: '3mm acrylic · UV print · laser engraved · dimensional',
    dimensions: 'Modular — expandable panel system',
    purpose: 'Member recognition, tournament winners, donor acknowledgment, and staff recognition. Modular system expands as the recognition roster grows.',
    qrRole: 'Optional QR links to member profile, tournament history, or tribute page',
    analytics: 'Engagement tracking when QR present',
    sponsorRole: 'Major donor and naming sponsor recognition',
    accent: 'var(--color-hps-gold-rich)',
  },
  {
    id: 'event-sponsorship',
    label: 'Event sponsorship surfaces',
    category: 'Tournament + Events',
    material: 'UV-printed banners · rigid panels · acrylic stands',
    dimensions: 'Event-specific — temporary or permanent',
    purpose: 'Tournament sponsors, charity event branding, and seasonal campaign surfaces. Produced on demand, deployed before the event, QR codes activated to event-specific destinations.',
    qrRole: 'Event-specific QR destination — activated on event date',
    analytics: 'Event-period tracking for sponsor reporting',
    sponsorRole: 'Tournament naming and presenting sponsor exposure',
    accent: 'var(--color-hps-coral-warm)',
  },
  {
    id: 'clubhouse-infrastructure',
    label: 'Clubhouse surfaces',
    category: 'Facility Infrastructure',
    material: 'Acrylic · aluminum · UV print · laser',
    dimensions: 'Custom per installation point',
    purpose: 'Entrance recognition walls, dining room QR surfaces, locker room plaques, pro shop operational signage, and member communication boards.',
    qrRole: 'QR surfaces link to menu, reservations, member services, or sponsor destinations',
    analytics: 'Clubhouse engagement tracked separately from course',
    sponsorRole: 'Premium sponsor placement in high-traffic clubhouse zones',
    accent: 'var(--color-hps-gold-rich)',
  },
]

// ── Main export ────────────────────────────────────────────────────────────────

export function HPSGolfPlaqueEcosystem() {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--color-hps-parchment)',
        borderTop: '1px solid rgba(200,180,154,0.28)',
      }}
    >
      {/* Course morning atmosphere */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: [
            'radial-gradient(ellipse at 30% 20%, rgba(71,140,92,0.055) 0%, transparent 52%)',
            'radial-gradient(ellipse at 75% 70%, rgba(184,136,42,0.038) 0%, transparent 45%)',
            'repeating-linear-gradient(180deg, transparent 0px, transparent 4px, rgba(71,140,92,0.007) 4px, rgba(71,140,92,0.007) 5px)',
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
            Plaque ecosystem
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end">
            <div>
              <h2
                className="font-display mb-4"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.06 }}
              >
                Six surface systems. One operational infrastructure.
              </h2>
              <p
                className="font-body leading-relaxed"
                style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}
              >
                HPS Golf plaques are not generic awards. Each type serves a specific operational role:
                course identification, sponsor engagement, member recognition, event infrastructure,
                and clubhouse operations. Produced in-house, installed on-course, linked to live systems.
              </p>
            </div>
            {/* Stats */}
            <div data-reveal data-reveal-delay="80" className="grid grid-cols-3 gap-4">
              {[
                { value: '6',    label: 'Surface system types' },
                { value: '100%', label: 'Produced in-house'    },
                { value: '18+',  label: 'Per course deployment' },
              ].map(s => (
                <div key={s.label}>
                  <p style={{ fontFamily: 'monospace', fontSize: '1.5rem', color: 'var(--color-hps-green)', lineHeight: 1, marginBottom: '0.3rem' }}>
                    {s.value}
                  </p>
                  <p style={{ fontFamily: 'monospace', fontSize: '0.50rem', letterSpacing: '0.12em', color: 'var(--color-hps-smoke)', textTransform: 'uppercase', opacity: 0.60, lineHeight: 1.4 }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Plaque type grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PLAQUE_TYPES.map((plaque, i) => (
            <div
              key={plaque.id}
              data-reveal
              data-reveal-delay={String((i % 3) * 70)}
              style={{
                background: 'var(--color-hps-cream)',
                border: '1px solid rgba(200,180,154,0.35)',
                borderTop: `3px solid ${plaque.accent}`,
                borderRadius: '2px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Header */}
              <div style={{
                padding: '0.65rem 0.875rem',
                borderBottom: '1px solid rgba(200,180,154,0.22)',
                background: 'rgba(200,180,154,0.04)',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                  <span style={{
                    fontFamily: 'var(--font-display, serif)',
                    fontSize: '0.9375rem',
                    color: 'var(--color-hps-ink)',
                    lineHeight: 1.2,
                  }}>
                    {plaque.label}
                  </span>
                  <span style={{
                    fontFamily: 'monospace',
                    fontSize: '0.44rem',
                    letterSpacing: '0.10em',
                    color: plaque.accent,
                    textTransform: 'uppercase',
                    opacity: 0.72,
                    flexShrink: 0,
                  }}>
                    {plaque.category}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '0.46rem', letterSpacing: '0.06em', color: 'var(--color-hps-smoke)', opacity: 0.60 }}>
                    {plaque.material}
                  </span>
                </div>
              </div>

              {/* Image */}
              <OperationalPhoto
                environment="golf"
                aspect="16/9"
                accentColor={plaque.accent}
              />

              {/* Content */}
              <div style={{ padding: '0.875rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <p style={{
                  fontFamily: 'var(--font-body, sans-serif)',
                  fontSize: '0.8125rem',
                  color: 'var(--color-hps-smoke)',
                  lineHeight: 1.6,
                }}>
                  {plaque.purpose}
                </p>

                {/* Technical + system specs */}
                <div style={{ borderTop: '1px solid rgba(200,180,154,0.20)', paddingTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  {[
                    { label: 'Dimensions', value: plaque.dimensions  },
                    { label: 'QR role',    value: plaque.qrRole       },
                    { label: 'Sponsor',    value: plaque.sponsorRole  },
                  ].map(f => (
                    <div key={f.label} style={{ display: 'grid', gridTemplateColumns: '72px 1fr', gap: '0.35rem' }}>
                      <span style={{ fontFamily: 'monospace', fontSize: '0.42rem', letterSpacing: '0.12em', color: 'var(--color-hps-smoke)', textTransform: 'uppercase', opacity: 0.50, marginTop: '0.1rem' }}>
                        {f.label}
                      </span>
                      <span style={{ fontFamily: 'monospace', fontSize: '0.50rem', letterSpacing: '0.04em', color: 'var(--color-hps-ink)', lineHeight: 1.35 }}>
                        {f.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HPSGolfPlaqueEcosystem
