// ── OperationalSurfaceIntelligence ────────────────────────────────────────────
//
// Treats fabricated surfaces as intelligent operational touchpoints.
// Each surface carries a relationship to a QR system, analytics layer,
// and lifecycle state — not just a physical object.
//
// Components:
//   SurfaceIntelligenceCard  — single surface with full operational metadata
//   SurfaceIntelligenceGrid  — responsive grid of intelligence cards
//
// Data-driven. All surface definitions passed as props or use defaults.

import { OperationalPhoto } from './PhotographyIntegrationFramework'
import type { PhotoEnvironment, PhotoAspect } from './PhotographyIntegrationFramework'

// ── Types ──────────────────────────────────────────────────────────────────────

export type SurfaceType =
  | 'sponsor-plaque'
  | 'tee-marker'
  | 'qr-sign'
  | 'recognition-display'
  | 'informational'
  | 'cart-signage'
  | 'hospitality-surface'
  | 'accessibility-sign'

export type SurfaceLifecycle = 'design' | 'production' | 'installed' | 'active' | 'maintenance' | 'retired'

export interface SurfaceQRRelationship {
  system:       'HPS QR Code' | 'HPS QR Menu' | 'HPS Golf Systems' | 'None'
  destination?: string     // "Sponsor landing page", "Digital menu", etc.
  analytics:    boolean
  updateable:   boolean    // can destination change without reprint
}

export interface OperationalSurface {
  id:            string
  type:          SurfaceType
  label:         string
  material:      string
  equipment:     string
  environment:   PhotoEnvironment
  aspect:        PhotoAspect
  deployment:    string              // "Leesburg, FL · Golf course" etc.
  purpose:       string
  qr:            SurfaceQRRelationship
  lifecycle:     SurfaceLifecycle
  accentColor:   string
  revealDelay?:  number
}

// ── Configuration ──────────────────────────────────────────────────────────────

const SURFACE_TYPE_LABELS: Record<SurfaceType, string> = {
  'sponsor-plaque':      'Sponsor Plaque',
  'tee-marker':          'Tee Marker',
  'qr-sign':             'QR Sign',
  'recognition-display': 'Recognition Display',
  'informational':       'Informational Sign',
  'cart-signage':        'Cart Signage',
  'hospitality-surface': 'Hospitality Surface',
  'accessibility-sign':  'Accessibility Sign',
}

const LIFECYCLE_CONFIG: Record<SurfaceLifecycle, { label: string; color: string }> = {
  design:      { label: 'In Design',    color: 'rgba(184,136,42,1)'   },
  production:  { label: 'In Production', color: 'rgba(248,114,57,1)'  },
  installed:   { label: 'Installed',    color: 'rgba(13,148,136,1)'   },
  active:      { label: 'Active',       color: 'rgba(71,140,92,1)'    },
  maintenance: { label: 'Maintenance',  color: 'rgba(184,136,42,1)'   },
  retired:     { label: 'Retired',      color: 'rgba(120,115,108,0.6)'},
}

// ── Default surface definitions ────────────────────────────────────────────────

export const ECOSYSTEM_SURFACES: OperationalSurface[] = [
  {
    id: 'golf-sponsor-plaque',
    type: 'sponsor-plaque',
    label: 'Hole sponsor plaque',
    material: 'Aluminum composite · UV ink',
    equipment: 'UV flatbed · fiber laser',
    environment: 'golf',
    aspect: '4/3',
    deployment: 'On-course · Hole 1–18',
    purpose: 'Identifies hole sponsor with brand identity and QR engagement surface',
    qr: { system: 'HPS QR Code', destination: 'Sponsor landing page', analytics: true, updateable: true },
    lifecycle: 'active',
    accentColor: 'var(--color-hps-green)',
  },
  {
    id: 'golf-tee-marker',
    type: 'tee-marker',
    label: 'Tee identification marker',
    material: 'Aluminum · UV ink · laser engraved',
    equipment: 'UV flatbed · CO2 laser',
    environment: 'golf',
    aspect: '3/4',
    deployment: 'On-course · Tee complex',
    purpose: 'Dimensional hole and yardage identification at all tee positions',
    qr: { system: 'None', analytics: false, updateable: false },
    lifecycle: 'active',
    accentColor: 'var(--color-hps-green)',
  },
  {
    id: 'hosp-qr-table-tent',
    type: 'qr-sign',
    label: 'Table QR menu tent',
    material: 'UV-printed stock · coated finish',
    equipment: 'UV flatbed',
    environment: 'hospitality',
    aspect: '3/4',
    deployment: 'Table surface · Restaurant',
    purpose: 'Links guests to live digital menu — updateable destination without reprint',
    qr: { system: 'HPS QR Menu', destination: 'Live menu', analytics: true, updateable: true },
    lifecycle: 'active',
    accentColor: 'var(--color-hps-coral-warm)',
  },
  {
    id: 'hosp-acrylic-menu-holder',
    type: 'hospitality-surface',
    label: 'Acrylic menu holder',
    material: '3mm clear acrylic · laser cut',
    equipment: 'CO2 laser',
    environment: 'hospitality',
    aspect: '3/4',
    deployment: 'Clubhouse dining · Turn station',
    purpose: 'Holds QR table tent in permanent display position with branded presentation',
    qr: { system: 'HPS QR Menu', destination: 'Digital menu', analytics: true, updateable: true },
    lifecycle: 'active',
    accentColor: 'var(--color-hps-gold-rich)',
  },
  {
    id: 'cart-directional-sign',
    type: 'cart-signage',
    label: 'Cart path directional',
    material: 'Rigid substrate · UV print',
    equipment: 'UV flatbed · vinyl cutter',
    environment: 'outdoor',
    aspect: '16/9',
    deployment: 'On-course · Cart paths',
    purpose: 'Directional wayfinding integrated with sponsor exposure at cart path points',
    qr: { system: 'HPS QR Code', destination: 'Sponsor link', analytics: true, updateable: true },
    lifecycle: 'active',
    accentColor: 'var(--color-hps-green)',
  },
  {
    id: 'clubhouse-recognition',
    type: 'recognition-display',
    label: 'Clubhouse recognition panel',
    material: '3mm acrylic · UV print · laser engraved',
    equipment: 'CO2 laser · UV flatbed',
    environment: 'hospitality',
    aspect: '4/3',
    deployment: 'Clubhouse · Main entrance',
    purpose: 'Dimensional recognition display for member, donor, or sponsor acknowledgment',
    qr: { system: 'HPS QR Code', destination: 'Recognition profile', analytics: true, updateable: true },
    lifecycle: 'active',
    accentColor: 'var(--color-hps-gold-rich)',
  },
]

// ── Surface intelligence card ──────────────────────────────────────────────────

export function SurfaceIntelligenceCard({ surface }: { surface: OperationalSurface }) {
  const lifecycle = LIFECYCLE_CONFIG[surface.lifecycle]

  return (
    <div
      data-reveal
      data-reveal-delay={String(surface.revealDelay ?? 0)}
      style={{
        background: 'var(--color-hps-parchment)',
        border: '1px solid rgba(200,180,154,0.35)',
        borderTop: `3px solid ${surface.accentColor}`,
        borderRadius: '2px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Card header */}
      <div style={{
        padding: '0.6rem 0.875rem',
        borderBottom: '1px solid rgba(200,180,154,0.22)',
        background: 'rgba(200,180,154,0.05)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div>
          <span style={{
            fontFamily: 'monospace',
            fontSize: '0.46rem',
            letterSpacing: '0.12em',
            color: surface.accentColor,
            textTransform: 'uppercase',
            opacity: 0.80,
          }}>
            {SURFACE_TYPE_LABELS[surface.type]}
          </span>
        </div>
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.3rem',
          fontFamily: 'monospace',
          fontSize: '0.44rem',
          letterSpacing: '0.10em',
          color: lifecycle.color,
          textTransform: 'uppercase',
        }}>
          <span style={{ width: 4, height: 4, borderRadius: '50%', background: lifecycle.color }} />
          {lifecycle.label}
        </span>
      </div>

      {/* Image */}
      <OperationalPhoto
        environment={surface.environment}
        aspect={surface.aspect}
        accentColor={surface.accentColor}
      />

      {/* Content */}
      <div style={{ padding: '0.875rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        <div>
          <p style={{
            fontFamily: 'var(--font-display, serif)',
            fontSize: '0.9375rem',
            color: 'var(--color-hps-ink)',
            lineHeight: 1.2,
            marginBottom: '0.2rem',
          }}>
            {surface.label}
          </p>
          <p style={{
            fontFamily: 'var(--font-body, sans-serif)',
            fontSize: '0.78rem',
            color: 'var(--color-hps-smoke)',
            lineHeight: 1.5,
          }}>
            {surface.purpose}
          </p>
        </div>

        {/* Material + equipment */}
        <div style={{ borderTop: '1px solid rgba(200,180,154,0.20)', paddingTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.22rem' }}>
          {[
            { label: 'Material',  value: surface.material   },
            { label: 'Equipment', value: surface.equipment  },
            { label: 'Location',  value: surface.deployment },
          ].map(f => (
            <div key={f.label} style={{ display: 'grid', gridTemplateColumns: '70px 1fr', gap: '0.35rem', alignItems: 'baseline' }}>
              <span style={{ fontFamily: 'monospace', fontSize: '0.44rem', letterSpacing: '0.12em', color: 'var(--color-hps-smoke)', textTransform: 'uppercase', opacity: 0.52 }}>
                {f.label}
              </span>
              <span style={{ fontFamily: 'monospace', fontSize: '0.52rem', letterSpacing: '0.04em', color: 'var(--color-hps-ink)', lineHeight: 1.3 }}>
                {f.value}
              </span>
            </div>
          ))}
        </div>

        {/* QR intelligence layer */}
        {surface.qr.system !== 'None' && (
          <div style={{
            background: `${surface.accentColor}08`,
            border: `1px solid ${surface.accentColor}20`,
            borderLeft: `2px solid ${surface.accentColor}`,
            padding: '0.42rem 0.6rem',
            borderRadius: '1px',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.2rem',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: 'monospace', fontSize: '0.46rem', letterSpacing: '0.10em', color: surface.accentColor, textTransform: 'uppercase' }}>
                {surface.qr.system}
              </span>
              <div style={{ display: 'flex', gap: '0.28rem' }}>
                {surface.qr.analytics && (
                  <span style={{ fontFamily: 'monospace', fontSize: '0.42rem', letterSpacing: '0.08em', color: 'rgba(71,140,92,1)', background: 'rgba(71,140,92,0.10)', border: '1px solid rgba(71,140,92,0.22)', padding: '0.08rem 0.32rem', borderRadius: '1px' }}>
                    Analytics
                  </span>
                )}
                {surface.qr.updateable && (
                  <span style={{ fontFamily: 'monospace', fontSize: '0.42rem', letterSpacing: '0.08em', color: 'rgba(13,148,136,1)', background: 'rgba(13,148,136,0.10)', border: '1px solid rgba(13,148,136,0.22)', padding: '0.08rem 0.32rem', borderRadius: '1px' }}>
                    Updateable
                  </span>
                )}
              </div>
            </div>
            {surface.qr.destination && (
              <span style={{ fontFamily: 'monospace', fontSize: '0.46rem', letterSpacing: '0.06em', color: 'var(--color-hps-smoke)', opacity: 0.70 }}>
                → {surface.qr.destination}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

// ── Main grid component ────────────────────────────────────────────────────────

export interface SurfaceIntelligenceGridProps {
  surfaces?:    OperationalSurface[]
  headline?:    string
  context?:     string
  columns?:     2 | 3
  accentColor?: string
}

export function SurfaceIntelligenceGrid({
  surfaces = ECOSYSTEM_SURFACES,
  headline,
  context,
  columns = 3,
}: SurfaceIntelligenceGridProps) {
  return (
    <div>
      {(headline || context) && (
        <div data-reveal style={{ marginBottom: '1.75rem' }}>
          {headline && (
            <h2
              className="font-display mb-3"
              style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.875rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}
            >
              {headline}
            </h2>
          )}
          {context && (
            <p
              className="font-body max-w-2xl leading-relaxed"
              style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}
            >
              {context}
            </p>
          )}
        </div>
      )}
      <div className={`grid grid-cols-1 sm:grid-cols-2 ${columns === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-5`}>
        {surfaces.map((surface, i) => (
          <SurfaceIntelligenceCard
            key={surface.id}
            surface={{ ...surface, revealDelay: (i % columns) * 70 }}
          />
        ))}
      </div>
    </div>
  )
}

export default SurfaceIntelligenceGrid
