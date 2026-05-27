// ── Version 1A Launch Readiness Dashboard ─────────────────────────────────────
//
// Central operational readiness tracker for HPS ecosystem v1A deployment.
// Each category reflects a real deployment dependency.
// Status values: 'complete' | 'in-progress' | 'pending' | 'blocked'
//
// Usage: Internal planning reference. Render on a private admin route.
// Update status values as work progresses toward deployment.

type ReadinessStatus = 'complete' | 'in-progress' | 'pending' | 'blocked'

interface ReadinessItem {
  label: string
  status: ReadinessStatus
  note?: string
}

interface ReadinessCategory {
  category: string
  accent: string
  accentHex: string
  items: ReadinessItem[]
}

const STATUS_CONFIG: Record<ReadinessStatus, { label: string; color: string; bg: string }> = {
  'complete':    { label: 'Complete',    color: '#478c5c', bg: 'rgba(71,140,92,0.10)' },
  'in-progress': { label: 'In Progress', color: '#0d9488', bg: 'rgba(13,148,136,0.10)' },
  'pending':     { label: 'Pending',     color: '#b8882a', bg: 'rgba(184,136,42,0.10)' },
  'blocked':     { label: 'Blocked',     color: '#f87239', bg: 'rgba(248,114,57,0.10)' },
}

const READINESS_CATEGORIES: ReadinessCategory[] = [
  {
    category: 'Accessibility Validation',
    accent: 'var(--color-hps-teal-dark)',
    accentHex: '#0d9488',
    items: [
      { label: 'WCAG 2.1 AA contrast audit complete',           status: 'in-progress' },
      { label: 'Keyboard navigation across all pages',          status: 'complete' },
      { label: 'Reduced-motion intelligence system deployed',   status: 'complete' },
      { label: 'Focus management — mobile menu, dropdowns',     status: 'complete' },
      { label: 'Skip link and semantic structure verified',     status: 'complete' },
      { label: 'Screen reader pass (NVDA + VoiceOver)',         status: 'pending' },
      { label: 'ARIA audit across all components',              status: 'in-progress' },
    ],
  },
  {
    category: 'Performance Optimization',
    accent: 'var(--color-hps-green)',
    accentHex: '#478c5c',
    items: [
      { label: 'Route-level code splitting implemented',        status: 'complete' },
      { label: 'Initial bundle reduced to 330KB shared chunk',  status: 'complete' },
      { label: 'Lazy loading for all 19 page routes',           status: 'complete' },
      { label: 'Image optimization pipeline in place',          status: 'pending', note: 'Awaiting photography capture' },
      { label: 'Core Web Vitals baseline measured',             status: 'pending' },
      { label: 'Lighthouse audit (all routes)',                  status: 'pending' },
    ],
  },
  {
    category: 'Photography Integration',
    accent: 'var(--color-hps-coral-warm)',
    accentHex: '#f87239',
    items: [
      { label: 'Tier 1 capture plan documented',               status: 'complete' },
      { label: 'Fabrication lab equipment shots',              status: 'pending', note: 'Scheduled capture' },
      { label: 'Sponsor plaque and golf signage shots',        status: 'pending', note: 'Scheduled capture' },
      { label: 'UV texture and surface detail closeups',       status: 'pending' },
      { label: 'Hospitality venue QR surface shots',          status: 'pending' },
      { label: 'PhotographyIntegrationFramework populated',   status: 'pending' },
    ],
  },
  {
    category: 'Operational Proof Systems',
    accent: 'var(--color-hps-gold-rich)',
    accentHex: '#b8882a',
    items: [
      { label: 'AccessibilityProofIntegration integrated',     status: 'complete' },
      { label: 'FabricationStatusStrip wired to FabPage',     status: 'complete' },
      { label: 'HPSGolfDeploymentReality integrated',         status: 'complete' },
      { label: 'RealFabricationWorkflowDocumentation built',  status: 'pending' },
      { label: 'EcosystemAccessibilityEvidence section built', status: 'complete' },
      { label: 'Case study template populated with real data', status: 'pending' },
    ],
  },
  {
    category: 'Voice and Copy',
    accent: 'var(--color-hps-smoke)',
    accentHex: '#4a3f34',
    items: [
      { label: 'Human Operational Voice Lock pass complete',   status: 'complete' },
      { label: 'Em dash / AI cadence patterns removed',       status: 'complete' },
      { label: 'Homepage hero voice normalization',           status: 'pending' },
      { label: 'Ecosystem stabilization pass complete',       status: 'complete' },
      { label: 'Final Version 1A cohesion pass',             status: 'pending' },
    ],
  },
  {
    category: 'Mobile and Responsive',
    accent: 'var(--color-hps-teal)',
    accentHex: '#14b8a6',
    items: [
      { label: 'Phase 6 mobile pass complete',                status: 'complete' },
      { label: 'Mobile menu focus trap and keyboard nav',     status: 'complete' },
      { label: 'Atmospheric overlay mobile continuity',       status: 'complete' },
      { label: 'Touch target sizing audit (44px min)',        status: 'pending' },
      { label: 'Cross-device visual QA',                     status: 'pending' },
    ],
  },
  {
    category: 'SEO and Metadata',
    accent: 'var(--color-hps-green-dark)',
    accentHex: '#2c5a3a',
    items: [
      { label: 'Page-level <title> and meta description set', status: 'pending' },
      { label: 'Open Graph tags for all routes',             status: 'pending' },
      { label: 'Canonical URLs configured',                  status: 'pending' },
      { label: 'Structured data (Organization, LocalBusiness)', status: 'pending' },
      { label: 'Sitemap generated',                         status: 'pending' },
      { label: 'robots.txt configured',                     status: 'pending' },
    ],
  },
  {
    category: 'Deployment and Infrastructure',
    accent: 'var(--color-hps-ink)',
    accentHex: '#0c1420',
    items: [
      { label: 'Production build verified (0 errors)',        status: 'complete' },
      { label: 'Hosting environment provisioned',            status: 'pending' },
      { label: 'DNS and SSL configured',                     status: 'pending' },
      { label: 'Contact form Postmark integration tested',   status: 'pending' },
      { label: 'Analytics baseline established',             status: 'pending' },
      { label: 'Deployment pipeline tested (build → deploy)', status: 'pending' },
    ],
  },
]

function completionRate(items: ReadinessItem[]): number {
  return Math.round(items.filter(i => i.status === 'complete').length / items.length * 100)
}

export default function Version1ALaunchReadinessDashboard() {
  const allItems = READINESS_CATEGORIES.flatMap(c => c.items)
  const overall = completionRate(allItems)
  const complete = allItems.filter(i => i.status === 'complete').length
  const inProgress = allItems.filter(i => i.status === 'in-progress').length
  const pending = allItems.filter(i => i.status === 'pending').length
  const blocked = allItems.filter(i => i.status === 'blocked').length

  return (
    <section
      className="py-20 lg:py-28"
      style={{ background: 'var(--color-hps-cream)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="mb-12">
          <p
            className="font-mono uppercase mb-4"
            style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--color-hps-green)' }}
          >
            Version 1A · Launch readiness
          </p>
          <h2
            className="font-display mb-5"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--color-hps-ink)', lineHeight: 1.05 }}
          >
            Deployment readiness dashboard.
          </h2>

          {/* Overall summary bar */}
          <div
            className="mt-8 p-5 rounded-sm"
            style={{ background: 'var(--color-hps-parchment)', border: '1px solid rgba(200,180,154,0.40)' }}
          >
            <div className="flex flex-wrap gap-6 mb-4">
              {[
                { n: complete,    label: 'Complete',    color: STATUS_CONFIG.complete.color },
                { n: inProgress,  label: 'In Progress', color: STATUS_CONFIG['in-progress'].color },
                { n: pending,     label: 'Pending',     color: STATUS_CONFIG.pending.color },
                { n: blocked,     label: 'Blocked',     color: STATUS_CONFIG.blocked.color },
              ].map(({ n, label, color }) => (
                <div key={label}>
                  <p className="font-mono" style={{ fontSize: '1.25rem', color, fontWeight: 600 }}>{n}</p>
                  <p className="font-mono" style={{ fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-hps-smoke)', opacity: 0.65 }}>{label}</p>
                </div>
              ))}
              <div className="ml-auto text-right">
                <p className="font-mono" style={{ fontSize: '1.75rem', color: 'var(--color-hps-ink)', fontWeight: 600 }}>{overall}%</p>
                <p className="font-mono" style={{ fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-hps-smoke)', opacity: 0.65 }}>Overall</p>
              </div>
            </div>
            {/* Progress bar */}
            <div
              style={{
                height: 4,
                background: 'rgba(200,180,154,0.35)',
                borderRadius: 2,
                overflow: 'hidden',
              }}
              role="progressbar"
              aria-valuenow={overall}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${overall}% launch readiness`}
            >
              <div
                style={{
                  height: '100%',
                  width: `${overall}%`,
                  background: 'var(--color-hps-green)',
                  borderRadius: 2,
                  transition: 'width 1s ease',
                }}
              />
            </div>
          </div>
        </div>

        {/* Category grids */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {READINESS_CATEGORIES.map((cat) => {
            const rate = completionRate(cat.items)
            return (
              <div
                key={cat.category}
                className="rounded-sm overflow-hidden"
                style={{ border: '1px solid rgba(200,180,154,0.38)', background: 'var(--color-hps-parchment)' }}
              >
                {/* Category header */}
                <div
                  className="px-5 py-3 flex items-center justify-between"
                  style={{
                    background: `${cat.accentHex}07`,
                    borderBottom: '1px solid rgba(200,180,154,0.28)',
                    borderLeft: `3px solid ${cat.accent}`,
                  }}
                >
                  <p className="font-mono uppercase" style={{ fontSize: '0.56rem', letterSpacing: '0.2em', color: cat.accent }}>
                    {cat.category}
                  </p>
                  <p className="font-mono" style={{ fontSize: '0.65rem', color: cat.accent, opacity: 0.8 }}>
                    {rate}%
                  </p>
                </div>

                {/* Items */}
                <ul className="flex flex-col px-4 py-3 gap-1">
                  {cat.items.map((item, i) => {
                    const s = STATUS_CONFIG[item.status]
                    return (
                      <li key={i} className="flex items-start gap-3 py-1.5">
                        <span
                          className="shrink-0 font-mono rounded-sm"
                          style={{
                            fontSize: '0.48rem',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: s.color,
                            background: s.bg,
                            padding: '0.15rem 0.4rem',
                            marginTop: '0.15rem',
                            whiteSpace: 'nowrap',
                            minWidth: '4.5rem',
                            textAlign: 'center',
                          }}
                        >
                          {s.label}
                        </span>
                        <div>
                          <p className="font-body" style={{ fontSize: '0.8125rem', color: 'var(--color-hps-ink)', lineHeight: 1.4 }}>
                            {item.label}
                          </p>
                          {item.note && (
                            <p className="font-mono" style={{ fontSize: '0.55rem', letterSpacing: '0.05em', color: 'var(--color-hps-smoke)', opacity: 0.55, marginTop: '0.15rem' }}>
                              {item.note}
                            </p>
                          )}
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
