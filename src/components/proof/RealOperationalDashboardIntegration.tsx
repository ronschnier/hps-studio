// ── Real Operational Dashboard Integration ────────────────────────────────────
//
// Integrates believable operational dashboard previews into the HPS ecosystem.
// Each preview represents a real system HPS operates or deploys for clients.
//
// Visual direction: restrained telemetry, realistic data hierarchy, no fake charts.
// These are operational summaries, not analytics walls.
//
// Usage: Import the relevant preview into the appropriate page section.
// Exports individual previews so pages can use only what applies.

// ── Sponsor Analytics Dashboard Preview ──────────────────────────────────────

interface SponsorRow {
  hole: string
  sponsor: string
  scans: number
  period: string
  status: 'active' | 'pending' | 'review'
}

const SPONSOR_ROWS: SponsorRow[] = [
  { hole: 'Hole 3',  sponsor: 'Lakeside Realty Group',    scans: 241, period: 'Spring season', status: 'active' },
  { hole: 'Hole 7',  sponsor: 'Central FL Orthopedics',   scans: 188, period: 'Spring season', status: 'active' },
  { hole: 'Hole 12', sponsor: 'Cornerstone Auto Group',   scans: 156, period: 'Spring season', status: 'active' },
  { hole: 'Hole 16', sponsor: 'Summit Wealth Advisors',   scans:  94, period: 'Spring season', status: 'pending' },
  { hole: 'Hole 18', sponsor: 'Leesburg Chamber of Comm', scans: 312, period: 'Spring season', status: 'active' },
]

const STATUS_COLORS = {
  active:  { text: 'var(--color-hps-green)',       bg: 'rgba(71,140,92,0.10)' },
  pending: { text: 'var(--color-hps-gold-rich)',   bg: 'rgba(184,136,42,0.10)' },
  review:  { text: 'var(--color-hps-coral-warm)',  bg: 'rgba(248,114,57,0.10)' },
}

export function SponsorAnalyticsDashboard() {
  return (
    <div
      className="rounded-sm overflow-hidden"
      style={{ background: 'var(--color-hps-cream)', border: '1px solid rgba(200,180,154,0.38)' }}
    >
      {/* Header bar */}
      <div
        className="px-5 py-3 flex items-center justify-between"
        style={{ background: 'var(--color-hps-parchment)', borderBottom: '1px solid rgba(200,180,154,0.28)' }}
      >
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full" style={{ background: 'var(--color-hps-green)' }} aria-hidden="true" />
          <p className="font-mono uppercase" style={{ fontSize: '0.55rem', letterSpacing: '0.18em', color: 'var(--color-hps-smoke)' }}>
            Sponsor scan analytics · Spring 2026
          </p>
        </div>
        <p className="font-mono" style={{ fontSize: '0.5rem', letterSpacing: '0.08em', color: 'var(--color-hps-smoke)', opacity: 0.55 }}>
          HPS Golf Platform · Live
        </p>
      </div>

      {/* Metrics row */}
      <div
        className="grid grid-cols-3 px-5 py-4 gap-4"
        style={{ borderBottom: '1px solid rgba(200,180,154,0.22)' }}
      >
        {[
          { label: 'Total scans',   value: '991',  note: 'Season to date' },
          { label: 'Active holes',  value: '18',   note: '18 of 18' },
          { label: 'Top placement', value: '#18',  note: '312 scans' },
        ].map(({ label, value, note }) => (
          <div key={label}>
            <p className="font-mono" style={{ fontSize: '1.125rem', color: 'var(--color-hps-ink)', fontWeight: 600, lineHeight: 1 }}>
              {value}
            </p>
            <p className="font-mono mt-1" style={{ fontSize: '0.5rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-hps-smoke)', opacity: 0.6 }}>
              {label}
            </p>
            <p className="font-mono" style={{ fontSize: '0.48rem', color: 'var(--color-hps-smoke)', opacity: 0.4 }}>
              {note}
            </p>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="px-5 py-4">
        <p className="font-mono uppercase mb-3" style={{ fontSize: '0.48rem', letterSpacing: '0.14em', color: 'var(--color-hps-smoke)', opacity: 0.5 }}>
          Hole · Sponsor · Season Scans
        </p>
        <div className="flex flex-col gap-1.5">
          {SPONSOR_ROWS.map((row) => {
            const s = STATUS_COLORS[row.status]
            return (
              <div key={row.hole} className="flex items-center justify-between gap-4 py-1.5" style={{ borderBottom: '1px solid rgba(200,180,154,0.18)' }}>
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <span className="font-mono shrink-0" style={{ fontSize: '0.52rem', letterSpacing: '0.08em', color: 'var(--color-hps-smoke)', opacity: 0.55, minWidth: '2.5rem' }}>
                    {row.hole}
                  </span>
                  <span className="font-body truncate" style={{ fontSize: '0.75rem', color: 'var(--color-hps-ink)' }}>
                    {row.sponsor}
                  </span>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--color-hps-ink)', fontWeight: 500, minWidth: '2rem', textAlign: 'right' }}>
                    {row.scans}
                  </span>
                  <span
                    className="font-mono rounded-sm"
                    style={{
                      fontSize: '0.42rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: s.text,
                      background: s.bg,
                      padding: '0.12rem 0.35rem',
                    }}
                  >
                    {row.status}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// ── QR Engagement Summary ─────────────────────────────────────────────────────

interface QRSurface {
  surface: string
  type: string
  scans: number
  lastScan: string
  destination: string
}

const QR_SURFACES: QRSurface[] = [
  { surface: 'Turn Station — Counter',  type: 'Table tent',   scans: 547, lastScan: '2h ago',  destination: 'HPS QR Menu · Live' },
  { surface: 'Clubhouse Bar',          type: 'Counter card', scans: 312, lastScan: '45m ago', destination: 'HPS QR Menu · Live' },
  { surface: 'Pro Shop Display',       type: 'Acrylic panel',scans:  88, lastScan: '6h ago',  destination: 'Merch page · Live' },
  { surface: 'Hole 3 Tee Marker',     type: 'Dimensional',  scans: 241, lastScan: '1d ago',  destination: 'Sponsor page · Live' },
]

export function QREngagementSummary() {
  const total = QR_SURFACES.reduce((sum, s) => sum + s.scans, 0)

  return (
    <div
      className="rounded-sm overflow-hidden"
      style={{ background: 'var(--color-hps-cream)', border: '1px solid rgba(200,180,154,0.38)' }}
    >
      {/* Header */}
      <div
        className="px-5 py-3 flex items-center justify-between"
        style={{ background: 'var(--color-hps-parchment)', borderBottom: '1px solid rgba(200,180,154,0.28)' }}
      >
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full" style={{ background: 'var(--color-hps-teal-dark)' }} aria-hidden="true" />
          <p className="font-mono uppercase" style={{ fontSize: '0.55rem', letterSpacing: '0.18em', color: 'var(--color-hps-smoke)' }}>
            QR surface engagement · Active deployments
          </p>
        </div>
        <p className="font-mono" style={{ fontSize: '0.5rem', color: 'var(--color-hps-teal-dark)', opacity: 0.7 }}>
          {total} total scans
        </p>
      </div>

      {/* Surfaces */}
      <div className="px-5 py-4 flex flex-col gap-2">
        {QR_SURFACES.map((s) => (
          <div
            key={s.surface}
            className="flex items-start justify-between gap-3 py-2.5"
            style={{ borderBottom: '1px solid rgba(200,180,154,0.18)' }}
          >
            <div className="flex-1 min-w-0">
              <p className="font-body" style={{ fontSize: '0.8125rem', color: 'var(--color-hps-ink)', lineHeight: 1.3 }}>
                {s.surface}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <span className="font-mono" style={{ fontSize: '0.48rem', letterSpacing: '0.1em', color: 'var(--color-hps-smoke)', opacity: 0.5 }}>
                  {s.type}
                </span>
                <span style={{ color: 'rgba(200,180,154,0.5)', fontSize: '0.5rem' }}>·</span>
                <span className="font-mono" style={{ fontSize: '0.48rem', color: 'var(--color-hps-teal-dark)', opacity: 0.75 }}>
                  {s.destination}
                </span>
              </div>
            </div>
            <div className="text-right shrink-0">
              <p className="font-mono" style={{ fontSize: '0.875rem', color: 'var(--color-hps-ink)', fontWeight: 600 }}>
                {s.scans}
              </p>
              <p className="font-mono" style={{ fontSize: '0.48rem', color: 'var(--color-hps-smoke)', opacity: 0.45 }}>
                {s.lastScan}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Accessibility Compliance Status ──────────────────────────────────────────

interface ComplianceRecord {
  property: string
  standard: string
  lastAudit: string
  issues: number
  status: 'compliant' | 'remediation' | 'monitoring'
}

const COMPLIANCE_RECORDS: ComplianceRecord[] = [
  { property: 'Healthcare portal (client)',        standard: 'WCAG 2.1 AA + §508', lastAudit: 'Mar 2026', issues: 0, status: 'compliant' },
  { property: 'Municipal services site (client)',  standard: 'WCAG 2.1 AA',        lastAudit: 'Feb 2026', issues: 2, status: 'remediation' },
  { property: 'HPS Studio (happypathstudios.com)', standard: 'WCAG 2.1 AA',        lastAudit: 'May 2026', issues: 0, status: 'monitoring' },
  { property: 'Enterprise SaaS dashboard',         standard: 'WCAG 2.1 AA + §508', lastAudit: 'Apr 2026', issues: 1, status: 'remediation' },
]

const COMPLIANCE_COLORS = {
  compliant:   { text: '#478c5c', bg: 'rgba(71,140,92,0.10)' },
  remediation: { text: '#b8882a', bg: 'rgba(184,136,42,0.10)' },
  monitoring:  { text: '#0d9488', bg: 'rgba(13,148,136,0.10)' },
}

export function AccessibilityComplianceDashboard() {
  return (
    <div
      className="rounded-sm overflow-hidden"
      style={{ background: 'var(--color-hps-cream)', border: '1px solid rgba(200,180,154,0.38)' }}
    >
      {/* Header */}
      <div
        className="px-5 py-3 flex items-center justify-between"
        style={{ background: 'var(--color-hps-parchment)', borderBottom: '1px solid rgba(200,180,154,0.28)' }}
      >
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full" style={{ background: 'var(--color-hps-teal)' }} aria-hidden="true" />
          <p className="font-mono uppercase" style={{ fontSize: '0.55rem', letterSpacing: '0.18em', color: 'var(--color-hps-smoke)' }}>
            Accessibility compliance record · Active engagements
          </p>
        </div>
      </div>

      {/* Records */}
      <div className="px-5 py-4 flex flex-col gap-2">
        {COMPLIANCE_RECORDS.map((rec) => {
          const c = COMPLIANCE_COLORS[rec.status]
          return (
            <div
              key={rec.property}
              className="flex items-start justify-between gap-4 py-2.5"
              style={{ borderBottom: '1px solid rgba(200,180,154,0.18)' }}
            >
              <div className="flex-1 min-w-0">
                <p className="font-body" style={{ fontSize: '0.8125rem', color: 'var(--color-hps-ink)', lineHeight: 1.3 }}>
                  {rec.property}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-mono" style={{ fontSize: '0.48rem', letterSpacing: '0.08em', color: 'var(--color-hps-smoke)', opacity: 0.5 }}>
                    {rec.standard}
                  </span>
                  <span style={{ color: 'rgba(200,180,154,0.5)', fontSize: '0.5rem' }}>·</span>
                  <span className="font-mono" style={{ fontSize: '0.48rem', color: 'var(--color-hps-smoke)', opacity: 0.45 }}>
                    Audited {rec.lastAudit}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                {rec.issues > 0 && (
                  <span className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--color-hps-gold-rich)' }}>
                    {rec.issues} open
                  </span>
                )}
                <span
                  className="font-mono rounded-sm"
                  style={{
                    fontSize: '0.42rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: c.text,
                    background: c.bg,
                    padding: '0.12rem 0.4rem',
                  }}
                >
                  {rec.status}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ── Fabrication Production Queue ─────────────────────────────────────────────

interface ProductionJob {
  jobId: string
  description: string
  process: string
  status: 'in-production' | 'queued' | 'complete' | 'proofing'
  client: string
}

const PRODUCTION_JOBS: ProductionJob[] = [
  { jobId: 'FAB-0241', description: 'Hole sponsor plaques (18 units)',   process: 'UV Print + Laser',  status: 'in-production', client: 'Hawthorne GC' },
  { jobId: 'FAB-0242', description: 'Restaurant table tents (24 units)', process: 'UV Flatbed',        status: 'queued',        client: 'The Landing' },
  { jobId: 'FAB-0239', description: 'Staff polo order (32 garments)',    process: 'DTG Print',         status: 'complete',      client: 'Citrus Valley' },
  { jobId: 'FAB-0240', description: 'Award plaques — tournament',        process: 'Laser Engraving',   status: 'proofing',      client: 'LPGA Am. Series' },
]

const PRODUCTION_COLORS = {
  'in-production': { text: 'var(--color-hps-coral-warm)', bg: 'rgba(248,114,57,0.10)' },
  'queued':        { text: 'var(--color-hps-gold-rich)',  bg: 'rgba(184,136,42,0.10)' },
  'complete':      { text: 'var(--color-hps-green)',      bg: 'rgba(71,140,92,0.10)' },
  'proofing':      { text: 'var(--color-hps-teal-dark)',  bg: 'rgba(13,148,136,0.10)' },
}

export function FabricationProductionQueue() {
  return (
    <div
      className="rounded-sm overflow-hidden"
      style={{ background: 'var(--color-hps-cream)', border: '1px solid rgba(200,180,154,0.38)' }}
    >
      {/* Header */}
      <div
        className="px-5 py-3 flex items-center justify-between"
        style={{ background: 'var(--color-hps-parchment)', borderBottom: '1px solid rgba(200,180,154,0.28)' }}
      >
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full" style={{ background: 'var(--color-hps-coral-warm)' }} aria-hidden="true" />
          <p className="font-mono uppercase" style={{ fontSize: '0.55rem', letterSpacing: '0.18em', color: 'var(--color-hps-smoke)' }}>
            Production queue · Leesburg fabrication lab
          </p>
        </div>
        <p className="font-mono" style={{ fontSize: '0.48rem', color: 'var(--color-hps-smoke)', opacity: 0.45 }}>
          4 active jobs
        </p>
      </div>

      {/* Jobs */}
      <div className="px-5 py-4 flex flex-col gap-2">
        {PRODUCTION_JOBS.map((job) => {
          const c = PRODUCTION_COLORS[job.status]
          return (
            <div
              key={job.jobId}
              className="flex items-start justify-between gap-4 py-2.5"
              style={{ borderBottom: '1px solid rgba(200,180,154,0.18)' }}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono shrink-0" style={{ fontSize: '0.5rem', letterSpacing: '0.08em', color: 'var(--color-hps-smoke)', opacity: 0.5 }}>
                    {job.jobId}
                  </span>
                  <p className="font-body truncate" style={{ fontSize: '0.8125rem', color: 'var(--color-hps-ink)' }}>
                    {job.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-mono" style={{ fontSize: '0.48rem', color: 'var(--color-hps-smoke)', opacity: 0.5 }}>
                    {job.process}
                  </span>
                  <span style={{ color: 'rgba(200,180,154,0.5)', fontSize: '0.5rem' }}>·</span>
                  <span className="font-mono" style={{ fontSize: '0.48rem', color: 'var(--color-hps-smoke)', opacity: 0.45 }}>
                    {job.client}
                  </span>
                </div>
              </div>
              <span
                className="font-mono shrink-0 rounded-sm"
                style={{
                  fontSize: '0.42rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: c.text,
                  background: c.bg,
                  padding: '0.12rem 0.4rem',
                  marginTop: '0.1rem',
                }}
              >
                {job.status}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
