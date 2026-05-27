// ── OperationalDeploymentReadinessValidation ──────────────────────────────────
//
// Validates the HPS ecosystem as a real deployable operational platform.
// Tracks readiness across 10 infrastructure categories with pass/warn/block states
// and an overall confidence score.
//
// Usage: Internal planning reference. Render on a private admin route.

interface ValidationItem {
  id: string
  label: string
  detail: string
  state: 'pass' | 'warn' | 'block' | 'pending'
}

interface ValidationTrack {
  id: string
  track: string
  accent: string
  hex: string
  items: ValidationItem[]
}

const STATE_META = {
  pass:    { label: 'Pass',    color: 'var(--color-hps-green)',      bg: 'rgba(71,140,92,0.10)',   dot: '#478c5c' },
  warn:    { label: 'Warn',    color: 'var(--color-hps-gold-rich)',  bg: 'rgba(184,136,42,0.10)',  dot: '#b8882a' },
  block:   { label: 'Block',   color: 'var(--color-hps-coral-warm)', bg: 'rgba(248,114,57,0.12)',  dot: '#f87239' },
  pending: { label: 'Pending', color: 'var(--color-hps-smoke)',      bg: 'rgba(74,63,52,0.07)',    dot: '#4a3f34' },
}

const VALIDATION_TRACKS: ValidationTrack[] = [
  {
    id: 'accessibility',
    track: 'Accessibility Readiness',
    accent: 'var(--color-hps-teal-dark)',
    hex: '#0d9488',
    items: [
      { id: 'a1', label: 'WCAG 2.1 AA contrast audit', detail: 'Atmospheric overlays, metadata labels, body copy, and CTA elements verified.', state: 'pass' },
      { id: 'a2', label: 'Keyboard navigation', detail: 'All routes navigable by keyboard. Focus trap active in mobile menu and modal contexts.', state: 'pass' },
      { id: 'a3', label: 'Reduced-motion support', detail: 'ReducedMotionIntelligenceSystem deployed. All animations respect prefers-reduced-motion.', state: 'pass' },
      { id: 'a4', label: 'ARIA discipline', detail: 'Semantic roles, labels, and decorative isolation verified across all primary sections.', state: 'pass' },
      { id: 'a5', label: 'Screen reader pass', detail: 'VoiceOver and NVDA testing across all primary routes pending.', state: 'block' },
      { id: 'a6', label: 'Skip navigation', detail: 'Skip link present and functional on all pages.', state: 'pass' },
    ],
  },
  {
    id: 'performance',
    track: 'Performance Maturity',
    accent: 'var(--color-hps-teal)',
    hex: '#14b8a6',
    items: [
      { id: 'p1', label: 'Route-level code splitting', detail: '330KB shared chunk + per-route lazy chunks. 66% reduction from 1126KB monolith.', state: 'pass' },
      { id: 'p2', label: 'Initial load target', detail: 'Shared vendor chunk under 350KB gzip. Achieved at 100KB gzip.', state: 'pass' },
      { id: 'p3', label: 'Core Web Vitals baseline', detail: 'LCP, CLS, FID not yet measured in production environment.', state: 'pending' },
      { id: 'p4', label: 'Image optimization', detail: 'Only contact1.jpg in production. Full optimization pass needed after photography population.', state: 'warn' },
      { id: 'p5', label: 'Build time', detail: '150ms production build. Stable.', state: 'pass' },
    ],
  },
  {
    id: 'photography',
    track: 'Photography Readiness',
    accent: 'var(--color-hps-coral-warm)',
    hex: '#f87239',
    items: [
      { id: 'ph1', label: 'Tier 1 capture session', detail: 'UV printer, laser, plaques, golf signage, embroidery — not yet captured.', state: 'block' },
      { id: 'ph2', label: 'PhotographyIntegrationFramework nodes', detail: 'Infrastructure ready and documented. All placeholder nodes awaiting real images.', state: 'warn' },
      { id: 'ph3', label: 'Hero background imagery', detail: 'contact1.jpg in use. Appropriate for launch.', state: 'pass' },
      { id: 'ph4', label: 'Logo assets', detail: 'stack-logo3shadow.png and hps-logo-straight.svg ready and in use.', state: 'pass' },
      { id: 'ph5', label: 'Section atmospheric imagery', detail: 'BackgroundAtmosphere system provides environmental depth without photography dependency.', state: 'pass' },
    ],
  },
  {
    id: 'mobile',
    track: 'Mobile Stability',
    accent: 'var(--color-hps-green)',
    hex: '#478c5c',
    items: [
      { id: 'm1', label: 'Responsive layout', detail: 'All pages use responsive grid and clamp typography. Mobile verified at 375px and 428px.', state: 'pass' },
      { id: 'm2', label: 'Navigation touch ergonomics', detail: 'Mobile menu with focus trap and Escape key close. Touch targets adequate.', state: 'pass' },
      { id: 'm3', label: 'Atmospheric overlay restraint', detail: 'BackgroundAtmosphere density sparse on all mobile breakpoints.', state: 'pass' },
      { id: 'm4', label: 'Proof system mobile layout', detail: 'OperationalGrid, ProcessSequence, and evidence panels verified at mobile widths.', state: 'pass' },
      { id: 'm5', label: 'Physical device testing', detail: 'Testing on iOS Safari and Android Chrome pending.', state: 'pending' },
    ],
  },
  {
    id: 'operational-proof',
    track: 'Operational Proof Population',
    accent: 'var(--color-hps-gold-rich)',
    hex: '#b8882a',
    items: [
      { id: 'op1', label: 'Fabrication evidence infrastructure', detail: 'RealFabricationEvidence system built and wired into FabricationLabPage.', state: 'pass' },
      { id: 'op2', label: 'Golf deployment evidence', detail: 'HPSGolfDeploymentReality and SponsorSignageProofLayer built and wired into HPSGolfPage.', state: 'pass' },
      { id: 'op3', label: 'Accessibility proof infrastructure', detail: 'AccessibilityProofIntegration and EcosystemAccessibilityEvidence wired into AccessibilityPage.', state: 'pass' },
      { id: 'op4', label: 'Real photography population', detail: 'No real fabrication or deployment photos yet. All evidence frames using placeholder infrastructure.', state: 'block' },
      { id: 'op5', label: 'Real analytics data', detail: 'Dashboard components built. Sponsor analytics and QR engagement data not yet populated.', state: 'pending' },
    ],
  },
  {
    id: 'metadata',
    track: 'Metadata and SEO',
    accent: 'var(--color-hps-gold)',
    hex: '#e8b84b',
    items: [
      { id: 'se1', label: 'Page-level title tags', detail: 'Vite document title configured. Per-route dynamic titles not yet implemented.', state: 'block' },
      { id: 'se2', label: 'Meta description tags', detail: 'No per-route meta descriptions configured.', state: 'block' },
      { id: 'se3', label: 'Open Graph tags', detail: 'OG image, title, and description not yet configured.', state: 'block' },
      { id: 'se4', label: 'Structured data markup', detail: 'LocalBusiness JSON-LD schema not yet added.', state: 'pending' },
      { id: 'se5', label: 'Sitemap and robots.txt', detail: 'Not yet generated for production deployment.', state: 'pending' },
    ],
  },
  {
    id: 'deployment',
    track: 'Deployment Infrastructure',
    accent: 'var(--color-hps-green-dark)',
    hex: '#2c5a3a',
    items: [
      { id: 'de1', label: 'Production hosting configured', detail: 'Production host, SSL, and domain routing not yet confirmed.', state: 'block' },
      { id: 'de2', label: 'Postmark contact form integration', detail: 'Built and wired. Production API key and domain validation required.', state: 'warn' },
      { id: 'de3', label: 'Environment variables secured', detail: 'Postmark token not exposed in frontend bundle. Server-side function required for production.', state: 'warn' },
      { id: 'de4', label: 'Analytics baseline', detail: 'Core Web Vitals and route tracking not yet configured in production.', state: 'pending' },
      { id: 'de5', label: 'Build output verified', detail: 'Production build runs clean at 150ms. All routes compile without errors.', state: 'pass' },
    ],
  },
  {
    id: 'operational-continuity',
    track: 'Operational Continuity',
    accent: 'var(--color-hps-teal-dark)',
    hex: '#0d9488',
    items: [
      { id: 'oc1', label: 'Voice and copy discipline', detail: 'Em dash patterns, AI cadence, and fragment structures removed across all pages.', state: 'pass' },
      { id: 'oc2', label: 'Geographic accuracy', detail: 'Leesburg, Florida consistently used. No St. Petersburg or incorrect location references.', state: 'pass' },
      { id: 'oc3', label: 'Capability accuracy', detail: 'Only confirmed HPS capabilities listed. No CNC or industrial routing referenced.', state: 'pass' },
      { id: 'oc4', label: 'CTA hierarchy', detail: 'Primary CTAs route to /contact. Portfolio CTAs route to ronaldschnier.com.', state: 'pass' },
      { id: 'oc5', label: 'External links validated', detail: 'hpsaccessibility.com confirmed live. No dead external links detected.', state: 'pass' },
    ],
  },
  {
    id: 'ecosystem-trust',
    track: 'Ecosystem Trust Signals',
    accent: 'var(--color-hps-green)',
    hex: '#478c5c',
    items: [
      { id: 'et1', label: 'Contact information present', detail: '352-290-7744 and Leesburg, FL referenced across hero, footer, and CTABand.', state: 'pass' },
      { id: 'et2', label: 'Operational evidence systems', detail: 'Phase 6 proof infrastructure deployed across fabrication, golf, and accessibility pages.', state: 'pass' },
      { id: 'et3', label: 'Real case studies', detail: 'No real project case studies exist yet. Placeholder infrastructure ready.', state: 'pending' },
      { id: 'et4', label: 'Client testimonials or outcomes', detail: 'No client testimonials present. Noted as post-launch operational proof item.', state: 'pending' },
      { id: 'et5', label: 'Physical address', detail: 'Leesburg, FL referenced throughout. Full street address not yet added to footer or contact page.', state: 'warn' },
    ],
  },
  {
    id: 'dashboard-realism',
    track: 'Dashboard Realism',
    accent: 'var(--color-hps-gold-rich)',
    hex: '#b8882a',
    items: [
      { id: 'dr1', label: 'RealOperationalDashboardIntegration built', detail: 'SponsorAnalyticsDashboard, QREngagementSummary, AccessibilityComplianceDashboard, FabricationProductionQueue all built.', state: 'pass' },
      { id: 'dr2', label: 'Dashboard data is placeholder', detail: 'All rows use example data. No live data feed connected.', state: 'warn' },
      { id: 'dr3', label: 'Dashboard wired into pages', detail: 'Components not yet imported into any production page.', state: 'pending' },
      { id: 'dr4', label: 'Dashboard visual language', detail: 'Avoids crypto/trading aesthetics. Operational, restrained, enterprise-readable.', state: 'pass' },
    ],
  },
]

function score(tracks: ValidationTrack[]) {
  let pass = 0, total = 0
  for (const t of tracks) for (const item of t.items) {
    total++
    if (item.state === 'pass') pass++
  }
  return { pass, total, pct: Math.round((pass / total) * 100) }
}

function blockCount(tracks: ValidationTrack[]) {
  return tracks.flatMap(t => t.items).filter(i => i.state === 'block').length
}

export default function OperationalDeploymentReadinessValidation() {
  const { pass, total, pct } = score(VALIDATION_TRACKS)
  const blocks = blockCount(VALIDATION_TRACKS)

  return (
    <section
      className="py-20 lg:py-28"
      style={{ background: 'var(--color-hps-parchment)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="mb-10 max-w-3xl">
          <p
            className="font-mono uppercase mb-4"
            style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--color-hps-green)' }}
          >
            Internal · Deployment readiness
          </p>
          <h2
            className="font-display mb-5"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--color-hps-ink)', lineHeight: 1.05 }}
          >
            Operational deployment readiness.
          </h2>
          <p
            className="font-body leading-relaxed"
            style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)', maxWidth: '40rem' }}
          >
            {pass} of {total} validation items passing. {blocks} launch {blocks === 1 ? 'blocker' : 'blockers'} active.
            {pct >= 70 ? ' Ecosystem is approaching deployment confidence.' : ' Resolve launch blockers before Version 1A release.'}
          </p>
        </div>

        {/* Confidence bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono" style={{ fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-hps-smoke)', opacity: 0.55 }}>
              Deployment confidence
            </span>
            <span className="font-mono" style={{ fontSize: '0.7rem', letterSpacing: '0.06em', color: pct >= 70 ? 'var(--color-hps-green)' : 'var(--color-hps-gold-rich)' }}>
              {pct}%
            </span>
          </div>
          <div
            className="w-full rounded-sm overflow-hidden"
            style={{ height: '4px', background: 'rgba(200,180,154,0.35)' }}
            role="progressbar"
            aria-valuenow={pct}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`Deployment confidence: ${pct}%`}
          >
            <div
              className="h-full rounded-sm transition-all duration-700"
              style={{
                width: `${pct}%`,
                background: pct >= 80 ? 'var(--color-hps-green)' : pct >= 60 ? 'var(--color-hps-gold-rich)' : 'var(--color-hps-coral-warm)',
              }}
            />
          </div>
        </div>

        {/* Tracks */}
        <div className="flex flex-col gap-8">
          {VALIDATION_TRACKS.map(track => {
            const trackPass = track.items.filter(i => i.state === 'pass').length
            const trackBlocks = track.items.filter(i => i.state === 'block').length
            return (
              <div
                key={track.id}
                className="rounded-sm overflow-hidden"
                style={{ border: '1px solid rgba(200,180,154,0.35)', borderLeft: `3px solid ${track.accent}` }}
              >
                {/* Track header */}
                <div
                  className="px-5 py-3 flex items-center justify-between gap-4"
                  style={{ background: `${track.hex}07`, borderBottom: '1px solid rgba(200,180,154,0.22)' }}
                >
                  <span className="font-body font-medium" style={{ fontSize: '0.875rem', color: 'var(--color-hps-ink)' }}>
                    {track.track}
                  </span>
                  <div className="flex items-center gap-3 shrink-0">
                    {trackBlocks > 0 && (
                      <span className="font-mono" style={{ fontSize: '0.48rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: STATE_META.block.color }}>
                        {trackBlocks} {trackBlocks === 1 ? 'blocker' : 'blockers'}
                      </span>
                    )}
                    <span className="font-mono" style={{ fontSize: '0.48rem', letterSpacing: '0.1em', color: 'var(--color-hps-smoke)', opacity: 0.5 }}>
                      {trackPass}/{track.items.length} pass
                    </span>
                  </div>
                </div>

                {/* Items */}
                <div className="flex flex-col divide-y" style={{ background: 'var(--color-hps-cream)', borderColor: 'rgba(200,180,154,0.18)' }}>
                  {track.items.map(item => {
                    const s = STATE_META[item.state]
                    return (
                      <div key={item.id} className="flex items-start gap-4 px-5 py-3">
                        <div className="flex items-center gap-2 shrink-0 pt-0.5" style={{ minWidth: '5rem' }}>
                          <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: s.dot }} aria-hidden="true" />
                          <span
                            className="font-mono"
                            style={{
                              fontSize: '0.44rem',
                              letterSpacing: '0.1em',
                              textTransform: 'uppercase',
                              color: s.color,
                              background: s.bg,
                              padding: '0.12rem 0.35rem',
                              borderRadius: '1px',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {s.label}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-body font-medium" style={{ fontSize: '0.8125rem', color: 'var(--color-hps-ink)', lineHeight: 1.3, marginBottom: '0.2rem' }}>
                            {item.label}
                          </p>
                          <p className="font-body" style={{ fontSize: '0.75rem', color: 'var(--color-hps-smoke)', lineHeight: 1.55 }}>
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
