// ── Operational Evidence Population Preparation ───────────────────────────────
//
// Tracks all proof types needed to evolve the ecosystem from placeholder
// infrastructure to real operational evidence. Covers photography, analytics,
// case studies, compliance records, and deployment documentation.
//
// Usage: Internal planning reference. Render on a private admin route.

interface EvidenceItem {
  id: string
  label: string
  type: 'photography' | 'analytics' | 'case-study' | 'compliance' | 'deployment'
  status: 'not-started' | 'scheduled' | 'in-progress' | 'captured' | 'wired-in'
  targetPage: string
  targetComponent: string
  captureNotes: string
  priority: 'launch-critical' | 'high' | 'standard'
}

const TYPE_META: Record<EvidenceItem['type'], { label: string; accent: string; hex: string }> = {
  photography:  { label: 'Photography',    accent: 'var(--color-hps-coral-warm)', hex: '#f87239' },
  analytics:    { label: 'Analytics',      accent: 'var(--color-hps-teal-dark)',  hex: '#0d9488' },
  'case-study': { label: 'Case Study',     accent: 'var(--color-hps-gold-rich)',  hex: '#b8882a' },
  compliance:   { label: 'Compliance',     accent: 'var(--color-hps-teal)',       hex: '#14b8a6' },
  deployment:   { label: 'Deployment Doc', accent: 'var(--color-hps-green)',      hex: '#478c5c' },
}

const STATUS_META: Record<EvidenceItem['status'], { label: string; accent: string; hex: string }> = {
  'not-started': { label: 'Not started',  accent: 'var(--color-hps-smoke)',      hex: '#4a3f34' },
  'scheduled':   { label: 'Scheduled',    accent: 'var(--color-hps-gold)',       hex: '#e8b84b' },
  'in-progress': { label: 'In progress',  accent: 'var(--color-hps-teal-dark)',  hex: '#0d9488' },
  'captured':    { label: 'Captured',     accent: 'var(--color-hps-coral-warm)', hex: '#f87239' },
  'wired-in':    { label: 'Wired in',     accent: 'var(--color-hps-green)',      hex: '#478c5c' },
}

const EVIDENCE_ITEMS: EvidenceItem[] = [
  // ── Photography ────────────────────────────────────────────────────────────
  {
    id: 'ph-uv-printer',
    label: 'UV flatbed printer in operation',
    type: 'photography',
    status: 'not-started',
    targetPage: 'FabricationLabPage',
    targetComponent: 'PhotographyIntegrationFramework (UV_PRINTER_NODE)',
    captureNotes: 'Active print run in progress. Wide shot showing substrate on bed + head pass. Warm overhead lighting, no harsh flash. Portrait orientation preferred for section card.',
    priority: 'launch-critical',
  },
  {
    id: 'ph-laser-engraving',
    label: 'Laser engraving process — plaque substrate',
    type: 'photography',
    status: 'not-started',
    targetPage: 'FabricationLabPage',
    targetComponent: 'PhotographyIntegrationFramework (LASER_NODE)',
    captureNotes: 'Engraving in progress on aluminum or acrylic. Capture laser trace if possible. Low ambient light, engraving glow as primary source. Tight crop showing detail.',
    priority: 'launch-critical',
  },
  {
    id: 'ph-finished-plaque',
    label: 'Finished dimensional plaque — close detail',
    type: 'photography',
    status: 'not-started',
    targetPage: 'HPSGolfPage, FabricationLabPage',
    targetComponent: 'HPSGolfDeploymentReality, FabricationLabPage hero',
    captureNotes: 'Clean flat lay on neutral surface. Capture embossed or engraved texture. Macro detail showing precision of finish. Natural or warm studio light, no reflections.',
    priority: 'launch-critical',
  },
  {
    id: 'ph-golf-hole-sign',
    label: 'Golf hole sponsor sign installed on course',
    type: 'photography',
    status: 'not-started',
    targetPage: 'HPSGolfPage',
    targetComponent: 'HPSGolfDeploymentReality, SponsorSignageProofLayer',
    captureNotes: 'Sign installed at hole tee marker position. Natural light, mid-morning preferred. Include fairway/green in background for environmental context. Landscape orientation.',
    priority: 'launch-critical',
  },
  {
    id: 'ph-embroidery-output',
    label: 'Embroidery output — polo or cap',
    type: 'photography',
    status: 'not-started',
    targetPage: 'FabricationLabPage',
    targetComponent: 'PhotographyIntegrationFramework (EMBROIDERY_NODE)',
    captureNotes: 'Finished embroidered garment. Close detail showing thread quality and logo precision. Neutral background. Both flat lay and on-form acceptable.',
    priority: 'high',
  },
  {
    id: 'ph-qr-surface-hospitality',
    label: 'QR-connected surface in hospitality setting',
    type: 'photography',
    status: 'not-started',
    targetPage: 'HospitalityQRPage',
    targetComponent: 'HospitalityQRPage hero, operational evidence section',
    captureNotes: 'QR table card or display in active restaurant or bar setting. Natural light preferred. Capture the environmental context — table setting, ambient warmth.',
    priority: 'high',
  },
  {
    id: 'ph-fabrication-workspace',
    label: 'Fabrication workspace — full environment',
    type: 'photography',
    status: 'not-started',
    targetPage: 'FabricationLabPage, AboutPage',
    targetComponent: 'FabricationLabPage atmospheric header, AboutPage environment section',
    captureNotes: 'Wide shot of the production floor showing multiple machines. Organized, operational, purposeful. Warm overhead light. Avoid clutter visible in frame.',
    priority: 'high',
  },
  {
    id: 'ph-dtg-apparel',
    label: 'DTG printed apparel output',
    type: 'photography',
    status: 'not-started',
    targetPage: 'FabricationLabPage',
    targetComponent: 'PhotographyIntegrationFramework (DTG_NODE)',
    captureNotes: 'Finished DTG-printed t-shirt or jersey. Vibrant print detail on fabric. Natural or softbox light. Both flat lay and hanging acceptable.',
    priority: 'standard',
  },
  {
    id: 'ph-3d-print-output',
    label: '3D printed object — detail shot',
    type: 'photography',
    status: 'not-started',
    targetPage: 'FabricationLabPage',
    targetComponent: 'PhotographyIntegrationFramework (3D_NODE)',
    captureNotes: 'FDM or resin output showing layer resolution or surface quality. Close detail preferred. Neutral surface, soft directional light to show depth.',
    priority: 'standard',
  },

  // ── Analytics ──────────────────────────────────────────────────────────────
  {
    id: 'an-sponsor-scans',
    label: 'Hole sponsor QR scan data — reporting cycle',
    type: 'analytics',
    status: 'not-started',
    targetPage: 'HPSGolfPage',
    targetComponent: 'SponsorAnalyticsDashboard (RealOperationalDashboardIntegration)',
    captureNotes: 'Export from QR tracking system: scans per hole, sponsor name, date range, device type breakdown. Replace placeholder rows in SponsorAnalyticsDashboard.',
    priority: 'high',
  },
  {
    id: 'an-qr-engagement',
    label: 'QR surface engagement summary — all active deployments',
    type: 'analytics',
    status: 'not-started',
    targetPage: 'HPSGolfPage, HospitalityQRPage',
    targetComponent: 'QREngagementSummary (RealOperationalDashboardIntegration)',
    captureNotes: 'Total scans per surface, surface type, deployment location, date range. Replace placeholder data in QREngagementSummary rows.',
    priority: 'high',
  },
  {
    id: 'an-web-vitals',
    label: 'Core Web Vitals baseline — post-launch measurement',
    type: 'analytics',
    status: 'not-started',
    targetPage: 'AccessibilityPage, Version1ALaunchReadinessDashboard',
    targetComponent: 'EcosystemAccessibilityEvidence performance section',
    captureNotes: 'Capture LCP, CLS, FID from Google Search Console or PageSpeed Insights after production deployment. Baseline for ongoing performance tracking.',
    priority: 'launch-critical',
  },

  // ── Case Studies ───────────────────────────────────────────────────────────
  {
    id: 'cs-first-project',
    label: 'First completed post-launch project documentation',
    type: 'case-study',
    status: 'not-started',
    targetPage: 'ServicesPage, HomePage',
    targetComponent: 'EnterpriseOperationalTrust, case study template (future)',
    captureNotes: 'Document from brief to delivery: project type, timeline, fabrication or platform work, outcome delivered. Photograph deliverable if physical.',
    priority: 'high',
  },
  {
    id: 'cs-golf-installation',
    label: 'Golf signage installation — lifecycle documentation',
    type: 'case-study',
    status: 'not-started',
    targetPage: 'HPSGolfPage',
    targetComponent: 'HPSGolfDeploymentReality, SponsorSignageProofLayer',
    captureNotes: 'Pre-install: design files, substrate specs. During install: course condition, installation method. Post-install: final position, sponsor verification, QR activation.',
    priority: 'high',
  },
  {
    id: 'cs-accessibility-audit',
    label: 'First external WCAG audit delivery documentation',
    type: 'case-study',
    status: 'not-started',
    targetPage: 'AccessibilityPage',
    targetComponent: 'AccessibilityProofIntegration, EcosystemAccessibilityEvidence',
    captureNotes: 'Sanitized client audit report: findings summary, remediation plan, re-audit timeline. Remove PII, preserve operational methodology.',
    priority: 'standard',
  },

  // ── Compliance ─────────────────────────────────────────────────────────────
  {
    id: 'co-wcag-self-validation',
    label: 'HPS ecosystem WCAG self-validation record',
    type: 'compliance',
    status: 'in-progress',
    targetPage: 'AccessibilityPage',
    targetComponent: 'AccessibilityProofIntegration, EcosystemAccessibilityEvidence',
    captureNotes: 'Validation lifecycle stage data: audit → remediation → validation → monitoring. Document real findings and fixes from WCAG operational pass.',
    priority: 'launch-critical',
  },
  {
    id: 'co-screen-reader-pass',
    label: 'Screen reader validation pass — NVDA + VoiceOver',
    type: 'compliance',
    status: 'not-started',
    targetPage: 'AccessibilityPage',
    targetComponent: 'EcosystemAccessibilityEvidence validation lifecycle',
    captureNotes: 'Run VoiceOver (macOS/iOS) on all primary routes. Note any announcement failures, reading order issues, or skipped content. Document findings and fix pass.',
    priority: 'launch-critical',
  },
  {
    id: 'co-property-status',
    label: 'Per-property accessibility compliance status',
    type: 'compliance',
    status: 'not-started',
    targetPage: 'AccessibilityPage',
    targetComponent: 'AccessibilityComplianceDashboard (RealOperationalDashboardIntegration)',
    captureNotes: 'Real compliance status per HPS property: hpsaccessibility.com, happypathstudios.com, any active client sites. Replace placeholder rows.',
    priority: 'high',
  },

  // ── Deployment Documentation ────────────────────────────────────────────────
  {
    id: 'dd-fabrication-workflow',
    label: 'Fabrication workflow documentation — plaque lifecycle',
    type: 'deployment',
    status: 'not-started',
    targetPage: 'FabricationLabPage',
    targetComponent: 'RealFabricationWorkflowDocumentation (future)',
    captureNotes: 'Step-by-step: design file handoff → substrate selection → UV or laser process → finishing → QA → packaging → delivery. Include real timing per stage.',
    priority: 'high',
  },
  {
    id: 'dd-qr-deployment',
    label: 'QR deployment workflow — from asset to live surface',
    type: 'deployment',
    status: 'not-started',
    targetPage: 'HospitalityQRPage, HPSGolfPage',
    targetComponent: 'HospitalityQRPage operational evidence, HPSGolfPage proof layer',
    captureNotes: 'QR creation → asset generation → surface fabrication → physical installation → tracking activation → first scan confirmation. Real end-to-end timeline.',
    priority: 'standard',
  },
  {
    id: 'dd-client-onboarding',
    label: 'Client portal onboarding sequence documentation',
    type: 'deployment',
    status: 'not-started',
    targetPage: 'ClientPortalPage',
    targetComponent: 'ClientPortalPage operational evidence section',
    captureNotes: 'First client invited. Document: intake form → project setup → portal access → first update cycle. Screenshot or screencap acceptable for internal record.',
    priority: 'standard',
  },
]

const PRIORITY_ORDER: Record<EvidenceItem['priority'], number> = {
  'launch-critical': 0,
  'high': 1,
  'standard': 2,
}

const PRIORITY_META = {
  'launch-critical': { label: 'Launch critical', accent: 'var(--color-hps-coral-warm)', hex: '#f87239' },
  'high': { label: 'High priority', accent: 'var(--color-hps-gold-rich)', hex: '#b8882a' },
  'standard': { label: 'Standard', accent: 'var(--color-hps-smoke)', hex: '#4a3f34' },
}

export default function OperationalEvidencePopulationPreparation() {
  const sorted = [...EVIDENCE_ITEMS].sort(
    (a, b) => PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority]
  )

  const byType = EVIDENCE_ITEMS.reduce<Record<string, number>>((acc, item) => {
    acc[item.type] = (acc[item.type] ?? 0) + 1
    return acc
  }, {})

  const wiredIn = EVIDENCE_ITEMS.filter(i => i.status === 'wired-in').length
  const launchCritical = EVIDENCE_ITEMS.filter(i => i.priority === 'launch-critical').length
  const launchCriticalDone = EVIDENCE_ITEMS.filter(i => i.priority === 'launch-critical' && i.status === 'wired-in').length

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
            style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--color-hps-coral-warm)' }}
          >
            Internal · Evidence population
          </p>
          <h2
            className="font-display mb-5"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--color-hps-ink)', lineHeight: 1.05 }}
          >
            Operational evidence population tracker.
          </h2>
          <p
            className="font-body leading-relaxed"
            style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)', maxWidth: '42rem' }}
          >
            {EVIDENCE_ITEMS.length} evidence items across {Object.keys(byType).length} proof types. {wiredIn} wired in. {launchCriticalDone} of {launchCritical} launch-critical items complete.
          </p>
        </div>

        {/* Type summary */}
        <div className="flex flex-wrap gap-2 mb-12">
          {Object.entries(byType).map(([type, count]) => {
            const meta = TYPE_META[type as EvidenceItem['type']]
            return (
              <span
                key={type}
                className="font-mono rounded-sm"
                style={{
                  fontSize: '0.55rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: meta.accent,
                  background: `${meta.hex}12`,
                  border: `1px solid ${meta.hex}28`,
                  padding: '0.25rem 0.65rem',
                }}
              >
                {meta.label} · {count}
              </span>
            )
          })}
        </div>

        {/* Evidence list */}
        <div className="flex flex-col gap-3">
          {sorted.map(item => {
            const typeMeta = TYPE_META[item.type]
            const statusMeta = STATUS_META[item.status]
            const priorityMeta = PRIORITY_META[item.priority]
            return (
              <div
                key={item.id}
                className="rounded-sm"
                style={{
                  border: '1px solid rgba(200,180,154,0.32)',
                  borderLeft: `3px solid ${typeMeta.hex}`,
                  background: 'var(--color-hps-cream)',
                }}
              >
                {/* Row header */}
                <div className="flex flex-wrap items-start gap-3 px-4 py-3">
                  {/* Type badge */}
                  <span
                    className="font-mono shrink-0 rounded-sm"
                    style={{
                      fontSize: '0.45rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: typeMeta.accent,
                      background: `${typeMeta.hex}12`,
                      padding: '0.15rem 0.45rem',
                      marginTop: '0.15rem',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {typeMeta.label}
                  </span>

                  {/* Label */}
                  <p
                    className="font-body font-medium flex-1 min-w-0"
                    style={{ fontSize: '0.875rem', color: 'var(--color-hps-ink)', lineHeight: 1.3 }}
                  >
                    {item.label}
                  </p>

                  {/* Priority + status */}
                  <div className="flex items-center gap-2 shrink-0">
                    <span
                      className="font-mono rounded-sm"
                      style={{
                        fontSize: '0.45rem',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: priorityMeta.accent,
                        background: `${priorityMeta.hex}10`,
                        padding: '0.15rem 0.4rem',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {priorityMeta.label}
                    </span>
                    <span
                      className="font-mono rounded-sm"
                      style={{
                        fontSize: '0.45rem',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: statusMeta.accent,
                        background: `${statusMeta.hex}10`,
                        padding: '0.15rem 0.4rem',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {statusMeta.label}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div
                  className="px-4 pb-3 flex flex-col sm:flex-row sm:items-start gap-4"
                  style={{ borderTop: '1px solid rgba(200,180,154,0.18)' }}
                >
                  <div className="flex-1 min-w-0 pt-2.5">
                    <p
                      className="font-body"
                      style={{ fontSize: '0.75rem', color: 'var(--color-hps-smoke)', lineHeight: 1.6 }}
                    >
                      {item.captureNotes}
                    </p>
                  </div>
                  <div className="shrink-0 pt-2.5 flex flex-col gap-1" style={{ minWidth: '14rem' }}>
                    <p className="font-mono" style={{ fontSize: '0.48rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-hps-smoke)', opacity: 0.45 }}>
                      Target page
                    </p>
                    <p className="font-body" style={{ fontSize: '0.75rem', color: 'var(--color-hps-ink)', lineHeight: 1.4 }}>
                      {item.targetPage}
                    </p>
                    <p className="font-mono mt-1" style={{ fontSize: '0.48rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-hps-smoke)', opacity: 0.45 }}>
                      Target component
                    </p>
                    <p className="font-body" style={{ fontSize: '0.7rem', color: 'var(--color-hps-smoke)', lineHeight: 1.4 }}>
                      {item.targetComponent}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
