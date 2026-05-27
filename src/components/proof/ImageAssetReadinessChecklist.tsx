// ── ImageAssetReadinessChecklist ───────────────────────────────────────────────
//
// Internal media capture planning system for Phase 6 population.
// Defines every photography/screenshot asset needed across the HPS ecosystem —
// what to shoot, how, and where it appears on the site.
//
// Use in an admin/reference page or as a working guide during photography sessions.
// Priority: HIGH = blocks Phase 6 launch, MEDIUM = enhances reality, LOW = future.

// ── Types ──────────────────────────────────────────────────────────────────────

export type AssetCategory =
  | 'fabrication-process'
  | 'fabrication-output'
  | 'golf-course'
  | 'golf-signage'
  | 'hospitality'
  | 'accessibility'
  | 'team-environment'
  | 'dashboard-screenshots'

export type AssetPriority = 'high' | 'medium' | 'low'
export type AssetStatus   = 'needed' | 'in-progress' | 'acquired' | 'approved'

export interface AssetSpec {
  id:           string
  category:     AssetCategory
  title:        string
  purpose:      string
  orientation:  'landscape' | 'portrait' | 'square' | 'any'
  aspect:       string           // "16/9", "4/3", "1/1"
  cropGuide:    string
  lightingNote: string
  metadataNeeded: string[]
  appearsOn:    string[]         // page/component names
  priority:     AssetPriority
  status:       AssetStatus
  notes?:       string
}

// ── Asset catalog ──────────────────────────────────────────────────────────────

export const ASSET_CATALOG: AssetSpec[] = [
  // ── Fabrication: Process ──────────────────────────────────────────────────
  {
    id: 'fab-uv-print-run',
    category: 'fabrication-process',
    title: 'UV flatbed printer in operation',
    purpose: 'Show the UV printer actively running a job — not staged, mid-production',
    orientation: 'landscape',
    aspect: '16/9',
    cropGuide: 'Printer head visible, substrate on bed, glow of UV curing lamp if possible',
    lightingNote: 'UV lamp provides natural blue-white ambient. Shoot in lower ambient to let UV light dominate',
    metadataNeeded: ['Substrate type', 'Job description', 'Station ID'],
    appearsOn: ['FabricationLabPage — UV station ProcessSequence', 'RealFabricationEvidence — UV output'],
    priority: 'high',
    status: 'needed',
  },
  {
    id: 'fab-laser-engraving',
    category: 'fabrication-process',
    title: 'Laser engraving in progress',
    purpose: 'Capture the laser actively engraving — smoke, laser path, or heat glow visible',
    orientation: 'landscape',
    aspect: '4/3',
    cropGuide: 'Focus on laser head path with material in frame. Capture laser light/smoke for realism',
    lightingNote: 'Natural dark environment lets laser glow read. Don\'t over-light — the laser is the light source',
    metadataNeeded: ['Material type', 'Laser type (CO2/fiber)', 'Job type'],
    appearsOn: ['FabricationLabPage — Laser Systems ProcessBand', 'RealFabricationEvidence — laser station'],
    priority: 'high',
    status: 'needed',
  },
  {
    id: 'fab-material-macro',
    category: 'fabrication-process',
    title: 'Material macro — substrate surface detail',
    purpose: 'Close-up of UV-printed surface showing texture, ink depth, and material character',
    orientation: 'any',
    aspect: '1/1',
    cropGuide: 'Fill frame with surface detail. Show texture coat, color depth, substrate grain',
    lightingNote: 'Raking sidelight at 20–30 degrees to reveal surface texture. Avoid flat frontal light',
    metadataNeeded: ['Material name', 'Finish type', 'Ink type'],
    appearsOn: ['RealFabricationEvidence — annotation overlays', 'ProcessBand station cards'],
    priority: 'medium',
    status: 'needed',
  },
  {
    id: 'fab-acrylic-cut',
    category: 'fabrication-output',
    title: 'Laser-cut acrylic pieces — post-production',
    purpose: 'Show completed acrylic cuts, edge finish quality, and dimensional precision',
    orientation: 'portrait',
    aspect: '3/4',
    cropGuide: 'Acrylic pieces arranged to show edge clarity. Clean background, edge lighting for glow',
    lightingNote: 'Backlit or edge-lit acrylic shows cut quality. White seamless background preferred',
    metadataNeeded: ['Thickness', 'Project type', 'Laser type used'],
    appearsOn: ['FabricationLabPage — Acrylic Production station', 'RealFabricationEvidence'],
    priority: 'high',
    status: 'needed',
  },

  // ── Fabrication: Output ───────────────────────────────────────────────────
  {
    id: 'fab-sponsor-plaque-complete',
    category: 'fabrication-output',
    title: 'Completed sponsor plaque — flat lay',
    purpose: 'Show finished plaque before installation — full face with sponsor branding visible',
    orientation: 'landscape',
    aspect: '4/3',
    cropGuide: 'Plaque centered, slight angle (15 degrees) to show depth. Clean neutral background',
    lightingNote: 'Soft box from left, fill from right. Avoid glare on UV surface',
    metadataNeeded: ['Plaque dimensions', 'Material', 'Finish type'],
    appearsOn: ['SponsorSignageProofLayer — fabrication phase', 'RealFabricationEvidence — plaque station'],
    priority: 'high',
    status: 'needed',
  },
  {
    id: 'fab-dtg-garment',
    category: 'fabrication-output',
    title: 'DTG-printed garment — logo area detail',
    purpose: 'Show print quality, fabric interaction, and color fidelity on finished garment',
    orientation: 'any',
    aspect: '4/3',
    cropGuide: 'Logo area fills 60–70% of frame. Show fabric texture and print registration',
    lightingNote: 'Natural window light or diffused overhead. Avoid harsh shadows on fabric',
    metadataNeeded: ['Garment type', 'Ink type', 'Resolution'],
    appearsOn: ['FabricationLabPage — DTG station', 'RealFabricationEvidence — DTG output'],
    priority: 'medium',
    status: 'needed',
  },

  // ── Golf: Course ──────────────────────────────────────────────────────────
  {
    id: 'golf-tee-marker-installed',
    category: 'golf-course',
    title: 'Tee marker installed on-course',
    purpose: 'Show HPS tee marker in its actual installed position on a tee complex',
    orientation: 'landscape',
    aspect: '4/3',
    cropGuide: 'Marker in lower-third, course visible in background with soft focus. Golden hour preferred',
    lightingNote: 'Early morning or late afternoon. Warm course light, long shadows show depth',
    metadataNeeded: ['Hole number', 'Course name (optional)', 'Material', 'Installation date'],
    appearsOn: ['HPSGolfPage — deployment evidence', 'HPSGolfDeploymentReality', 'SponsorSignageProofLayer'],
    priority: 'high',
    status: 'needed',
  },
  {
    id: 'golf-sponsor-plaque-onsite',
    category: 'golf-signage',
    title: 'Sponsor plaque at hole — installed context',
    purpose: 'Show sponsor plaque as it appears on-course to a golfer',
    orientation: 'landscape',
    aspect: '4/3',
    cropGuide: 'Plaque in frame with course environment visible. Show installation context — post, bracket, or ground mount',
    lightingNote: 'Natural course light. Morning preferred for warm tone. Avoid midday flat overhead',
    metadataNeeded: ['Hole number', 'Sponsor category', 'Material', 'QR visible: yes/no'],
    appearsOn: ['HPSGolfDeploymentReality — deployed surfaces', 'SponsorSignageProofLayer — installation phase'],
    priority: 'high',
    status: 'needed',
  },
  {
    id: 'golf-cart-signage',
    category: 'golf-course',
    title: 'Cart path signage — directional context',
    purpose: 'Show signage panel on or near a cart path showing directional + sponsor information',
    orientation: 'landscape',
    aspect: '16/9',
    cropGuide: 'Wide shot showing cart path, panel, and course environment. HPS signage in middle-ground',
    lightingNote: 'Natural light. Overcast preferred for even exposure on both sign and background',
    metadataNeeded: ['Sign type', 'Location description', 'Material'],
    appearsOn: ['HPSGolfDeploymentReality — cart path record', 'GolfCourseDeploymentEnvironment'],
    priority: 'medium',
    status: 'needed',
  },

  // ── Hospitality ───────────────────────────────────────────────────────────
  {
    id: 'hosp-table-tent-context',
    category: 'hospitality',
    title: 'QR table tent on restaurant table',
    purpose: 'Show table tent in an actual table setting — with dining context visible',
    orientation: 'portrait',
    aspect: '3/4',
    cropGuide: 'Table tent in focus, table environment soft-focused behind. QR code legible in frame',
    lightingNote: 'Warm restaurant ambient. Window light preferred. Avoid harsh overhead',
    metadataNeeded: ['Venue type', 'Surface material', 'QR system linked'],
    appearsOn: ['HospitalityQRPage — HospitalitySystemsEnvironment', 'HospitalityQRPage physical section'],
    priority: 'high',
    status: 'needed',
  },
  {
    id: 'hosp-menu-qr-scan',
    category: 'hospitality',
    title: 'Guest scanning QR menu on phone',
    purpose: 'Show the guest experience — phone over table tent, menu loading on screen',
    orientation: 'landscape',
    aspect: '16/9',
    cropGuide: 'Phone and table tent in frame. Menu UI partially visible on phone screen. Hands natural',
    lightingNote: 'Warm restaurant ambient. Phone screen adds fill light naturally',
    metadataNeeded: ['Venue type', 'Platform shown'],
    appearsOn: ['HospitalityQRPage — operational reality section', 'HomePage — featured image'],
    priority: 'high',
    status: 'needed',
  },

  // ── Accessibility ─────────────────────────────────────────────────────────
  {
    id: 'a11y-audit-screenshot',
    category: 'accessibility',
    title: 'Accessibility audit tool screenshot',
    purpose: 'Capture axe-core or Lighthouse accessibility results showing real audit output',
    orientation: 'landscape',
    aspect: '16/9',
    cropGuide: 'Browser DevTools panel with axe/Lighthouse results. Real results from an actual audit',
    lightingNote: 'Screen capture — use dark or light theme consistently across all screenshots',
    metadataNeeded: ['Tool used', 'Page type audited', 'Issue count', 'WCAG level'],
    appearsOn: ['AccessibilityProofIntegration — audit stage cards', 'HPSAccessibilityPage'],
    priority: 'medium',
    status: 'needed',
    notes: 'Can be from a real client audit (anonymized) or a public-domain site for demo purposes',
  },

  // ── Team + Environment ────────────────────────────────────────────────────
  {
    id: 'team-workstation-wide',
    category: 'team-environment',
    title: 'Fabrication workstation — wide environment shot',
    purpose: 'Show the actual lab environment — operational, not staged',
    orientation: 'landscape',
    aspect: '16/9',
    cropGuide: 'Wide shot of lab with equipment visible. Operational state — mid-production, not empty',
    lightingNote: 'Use available lab lighting. UV lamp ambient acceptable. Avoid flash',
    metadataNeeded: ['Location', 'Equipment visible'],
    appearsOn: ['FabricationLabPage — hero or header', 'EnterpriseOperationalTrust'],
    priority: 'high',
    status: 'needed',
  },
  {
    id: 'team-person-working',
    category: 'team-environment',
    title: 'Operator working at machine',
    purpose: 'Human presence in the lab — shows real operation, not empty equipment',
    orientation: 'landscape',
    aspect: '4/3',
    cropGuide: 'Operator in frame with machine. Focus on work, not portrait. Activity is the subject',
    lightingNote: 'Available light, supplemented with soft fill if needed. Avoid harsh shadows on face',
    metadataNeeded: ['Station', 'Activity description'],
    appearsOn: ['FabricationLabPage — ProcessBand sections', 'HomePage — operational trust section'],
    priority: 'medium',
    status: 'needed',
  },

  // ── Dashboard Screenshots ─────────────────────────────────────────────────
  {
    id: 'dashboard-qr-analytics',
    category: 'dashboard-screenshots',
    title: 'HPS QR Code analytics dashboard',
    purpose: 'Show the analytics interface — scan data, trends, surface breakdown',
    orientation: 'landscape',
    aspect: '16/9',
    cropGuide: 'Dashboard at full viewport. Use real or demo data. No identifying client info',
    lightingNote: 'Screen capture. Use consistent light/dark theme across all dashboard shots',
    metadataNeeded: ['Platform', 'Data type shown', 'Date range'],
    appearsOn: ['SponsorRevenueIntelligence', 'HPSGolfPage — analytics section'],
    priority: 'medium',
    status: 'needed',
    notes: 'Use demo data or a golf course test account',
  },
]

// ── Category metadata ──────────────────────────────────────────────────────────

const CATEGORY_CONFIG: Record<AssetCategory, { label: string; accent: string }> = {
  'fabrication-process':  { label: 'Fabrication Process',    accent: 'var(--color-hps-coral-warm)' },
  'fabrication-output':   { label: 'Fabrication Output',     accent: 'var(--color-hps-coral-warm)' },
  'golf-course':          { label: 'Golf Course',            accent: 'var(--color-hps-green)'      },
  'golf-signage':         { label: 'Golf Signage',           accent: 'var(--color-hps-green)'      },
  'hospitality':          { label: 'Hospitality',            accent: 'var(--color-hps-gold-rich)'  },
  'accessibility':        { label: 'Accessibility',          accent: 'var(--color-hps-teal-dark)'  },
  'team-environment':     { label: 'Team & Environment',     accent: 'var(--color-hps-ink)'        },
  'dashboard-screenshots':{ label: 'Dashboard Screenshots',  accent: 'var(--color-hps-teal)'       },
}

const PRIORITY_CONFIG: Record<AssetPriority, { label: string; color: string }> = {
  high:   { label: 'High',   color: 'rgba(248,114,57,1)'   },
  medium: { label: 'Medium', color: 'rgba(184,136,42,1)'   },
  low:    { label: 'Low',    color: 'rgba(120,115,108,0.7)' },
}

const STATUS_CONFIG: Record<AssetStatus, { label: string; color: string }> = {
  needed:      { label: 'Needed',      color: 'rgba(248,114,57,1)'   },
  'in-progress': { label: 'In Progress', color: 'rgba(184,136,42,1)'   },
  acquired:    { label: 'Acquired',    color: 'rgba(13,148,136,1)'   },
  approved:    { label: 'Approved',    color: 'rgba(71,140,92,1)'    },
}

// ── Grouped view ───────────────────────────────────────────────────────────────

function groupByCategory(assets: AssetSpec[]): Record<AssetCategory, AssetSpec[]> {
  return assets.reduce((acc, asset) => {
    if (!acc[asset.category]) acc[asset.category] = []
    acc[asset.category].push(asset)
    return acc
  }, {} as Record<AssetCategory, AssetSpec[]>)
}

// ── Summary stats ──────────────────────────────────────────────────────────────

function ChecklistSummary({ assets }: { assets: AssetSpec[] }) {
  const high   = assets.filter(a => a.priority === 'high').length
  const needed = assets.filter(a => a.status === 'needed').length
  const total  = assets.length

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem',
        marginBottom: '2rem',
        padding: '1.25rem',
        background: 'rgba(200,180,154,0.06)',
        border: '1px solid rgba(200,180,154,0.30)',
        borderRadius: '2px',
      }}
    >
      {[
        { value: String(total),  label: 'Total assets defined',       color: 'var(--color-hps-teal-dark)' },
        { value: String(high),   label: 'High-priority assets',       color: 'var(--color-hps-coral-warm)' },
        { value: String(needed), label: 'Assets still needed',        color: 'rgba(248,114,57,1)'          },
      ].map(s => (
        <div key={s.label}>
          <p style={{ fontFamily: 'monospace', fontSize: '1.5rem', color: s.color, lineHeight: 1, marginBottom: '0.3rem' }}>
            {s.value}
          </p>
          <p style={{ fontFamily: 'monospace', fontSize: '0.50rem', letterSpacing: '0.12em', color: 'var(--color-hps-smoke)', textTransform: 'uppercase', opacity: 0.65 }}>
            {s.label}
          </p>
        </div>
      ))}
    </div>
  )
}

// ── Asset card ─────────────────────────────────────────────────────────────────

function AssetCard({ asset, accent }: { asset: AssetSpec; accent: string }) {
  const priority = PRIORITY_CONFIG[asset.priority]
  const status   = STATUS_CONFIG[asset.status]

  return (
    <div
      style={{
        background: 'var(--color-hps-cream)',
        border: '1px solid rgba(200,180,154,0.32)',
        borderLeft: `3px solid ${accent}`,
        borderRadius: '2px',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div style={{
        padding: '0.6rem 0.875rem',
        borderBottom: '1px solid rgba(200,180,154,0.22)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '0.5rem',
      }}>
        <p style={{
          fontFamily: 'var(--font-display, serif)',
          fontSize: '0.9375rem',
          color: 'var(--color-hps-ink)',
          lineHeight: 1.2,
        }}>
          {asset.title}
        </p>
        <div style={{ display: 'flex', gap: '0.3rem', flexShrink: 0 }}>
          <span style={{
            fontFamily: 'monospace',
            fontSize: '0.44rem',
            letterSpacing: '0.10em',
            color: priority.color,
            background: `${priority.color.replace('1)', '0.10)')}`,
            border: `1px solid ${priority.color.replace('1)', '0.22)')}`,
            padding: '0.1rem 0.38rem',
            borderRadius: '1px',
            textTransform: 'uppercase',
          }}>
            {priority.label}
          </span>
          <span style={{
            fontFamily: 'monospace',
            fontSize: '0.44rem',
            letterSpacing: '0.10em',
            color: status.color,
            background: `${status.color.replace('1)', '0.10)')}`,
            border: `1px solid ${status.color.replace('1)', '0.22)')}`,
            padding: '0.1rem 0.38rem',
            borderRadius: '1px',
            textTransform: 'uppercase',
          }}>
            {status.label}
          </span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '0.75rem 0.875rem', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
        <p style={{ fontFamily: 'var(--font-body, sans-serif)', fontSize: '0.8125rem', color: 'var(--color-hps-smoke)', lineHeight: 1.55 }}>
          {asset.purpose}
        </p>

        {/* Specs row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
          {[
            { label: 'Orientation', value: asset.orientation },
            { label: 'Aspect',      value: asset.aspect      },
          ].map(f => (
            <span key={f.label} style={{
              fontFamily: 'monospace',
              fontSize: '0.46rem',
              letterSpacing: '0.08em',
              color: 'var(--color-hps-smoke)',
              background: 'rgba(200,180,154,0.14)',
              border: '1px solid rgba(200,180,154,0.28)',
              padding: '0.1rem 0.38rem',
              borderRadius: '1px',
            }}>
              {f.label}: {f.value}
            </span>
          ))}
        </div>

        {/* Appears on */}
        <div style={{ borderTop: '1px solid rgba(200,180,154,0.18)', paddingTop: '0.5rem' }}>
          <p style={{ fontFamily: 'monospace', fontSize: '0.44rem', letterSpacing: '0.12em', color: 'var(--color-hps-smoke)', textTransform: 'uppercase', opacity: 0.50, marginBottom: '0.25rem' }}>
            Appears on
          </p>
          {asset.appearsOn.map(loc => (
            <p key={loc} style={{ fontFamily: 'monospace', fontSize: '0.48rem', letterSpacing: '0.06em', color: accent, opacity: 0.80, lineHeight: 1.4 }}>
              · {loc}
            </p>
          ))}
        </div>

        {/* Lighting + crop notes */}
        <div style={{ background: 'rgba(200,180,154,0.06)', padding: '0.5rem 0.625rem', borderRadius: '1px' }}>
          <p style={{ fontFamily: 'monospace', fontSize: '0.44rem', letterSpacing: '0.12em', color: 'var(--color-hps-smoke)', textTransform: 'uppercase', opacity: 0.50, marginBottom: '0.2rem' }}>
            Shot guidance
          </p>
          <p style={{ fontFamily: 'var(--font-body, sans-serif)', fontSize: '0.78rem', color: 'var(--color-hps-smoke)', lineHeight: 1.5, marginBottom: '0.25rem' }}>
            {asset.cropGuide}
          </p>
          <p style={{ fontFamily: 'var(--font-body, sans-serif)', fontSize: '0.75rem', color: 'var(--color-hps-smoke)', lineHeight: 1.4, opacity: 0.80 }}>
            Light: {asset.lightingNote}
          </p>
        </div>

        {asset.notes && (
          <p style={{ fontFamily: 'var(--font-body, sans-serif)', fontSize: '0.75rem', color: 'var(--color-hps-smoke)', lineHeight: 1.4, opacity: 0.70, fontStyle: 'italic' }}>
            Note: {asset.notes}
          </p>
        )}
      </div>
    </div>
  )
}

// ── Main export ────────────────────────────────────────────────────────────────

export interface ImageAssetReadinessChecklistProps {
  assets?: AssetSpec[]
  filterPriority?: AssetPriority
}

export function ImageAssetReadinessChecklist({
  assets = ASSET_CATALOG,
  filterPriority,
}: ImageAssetReadinessChecklistProps) {
  const filtered = filterPriority
    ? assets.filter(a => a.priority === filterPriority)
    : assets

  const grouped = groupByCategory(filtered)
  const categories = Object.keys(grouped) as AssetCategory[]

  return (
    <div>
      {/* Summary */}
      <ChecklistSummary assets={filtered} />

      {/* Category groups */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        {categories.map(cat => {
          const cfg   = CATEGORY_CONFIG[cat]
          const items = grouped[cat]
          return (
            <div key={cat}>
              {/* Category header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1rem',
                paddingBottom: '0.5rem',
                borderBottom: `2px solid ${cfg.accent}30`,
              }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: cfg.accent, flexShrink: 0 }} />
                <h3 style={{
                  fontFamily: 'var(--font-display, serif)',
                  fontSize: '1rem',
                  color: 'var(--color-hps-ink)',
                  lineHeight: 1,
                }}>
                  {cfg.label}
                </h3>
                <span style={{
                  fontFamily: 'monospace',
                  fontSize: '0.46rem',
                  letterSpacing: '0.12em',
                  color: cfg.accent,
                  opacity: 0.60,
                }}>
                  {items.length} asset{items.length !== 1 ? 's' : ''}
                </span>
              </div>

              {/* Asset cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {items.map(asset => (
                  <AssetCard key={asset.id} asset={asset} accent={cfg.accent} />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ImageAssetReadinessChecklist
