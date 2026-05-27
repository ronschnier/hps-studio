// ── Version 1A Post-Launch Roadmap ────────────────────────────────────────────
//
// Structured post-launch evolution planning for the HPS ecosystem.
// Shows that Version 1A is the beginning of an evolving operational system.
//
// Usage: Internal planning reference. Render on a private admin route.

interface RoadmapTrack {
  id: string
  track: string
  accent: string
  accentHex: string
  category: string
  horizon: string
  description: string
  milestones: {
    label: string
    trigger: string
    outcome: string
  }[]
}

const ROADMAP_TRACKS: RoadmapTrack[] = [
  {
    id: 'photography',
    track: 'Real Photography Population',
    accent: 'var(--color-hps-coral-warm)',
    accentHex: '#f87239',
    category: 'Content Infrastructure',
    horizon: '0–30 days post-launch',
    description: 'Replace infrastructure placeholders with real fabrication photography across all operational environments.',
    milestones: [
      {
        label: 'Tier 1 capture session',
        trigger: 'Week 1–2 after launch',
        outcome: 'UV printer, laser systems, plaques, golf signage, embroidery — production imagery for FabricationLabPage and HPSGolfPage',
      },
      {
        label: 'Placeholder retirement',
        trigger: 'After Tier 1 edit delivery',
        outcome: 'All PhotographyIntegrationFramework nodes replaced; shimmer placeholders removed from FabricationLabPage sections',
      },
      {
        label: 'Atmospheric imagery upgrade',
        trigger: 'Concurrent with placeholder retirement',
        outcome: 'Section header backgrounds updated across FabricationLab, Golf, and Hospitality environments with real operational imagery',
      },
      {
        label: 'Tier 2 capture session',
        trigger: 'Week 3–5 after launch',
        outcome: 'Hospitality environments, dashboard views, apparel output, QR-connected surface deployments',
      },
    ],
  },
  {
    id: 'case-studies',
    track: 'Case Study Expansion',
    accent: 'var(--color-hps-gold-rich)',
    accentHex: '#b8882a',
    category: 'Operational Proof',
    horizon: '30–60 days post-launch',
    description: 'Build real project documentation that demonstrates operational lifecycle from brief to deployed result.',
    milestones: [
      {
        label: 'First production case study',
        trigger: 'First completed post-launch project',
        outcome: 'Full lifecycle documentation: project brief, fabrication process, deployment photography, outcome metrics',
      },
      {
        label: 'Golf sponsor signage case study',
        trigger: 'After next golf course deployment',
        outcome: 'Hole sponsor installation, QR engagement data, environmental photography — wired into HPSGolfPage proof layer',
      },
      {
        label: 'Accessibility audit case study',
        trigger: 'After first external WCAG engagement',
        outcome: 'Real audit lifecycle evidence for AccessibilityPage — findings, remediation, validation, compliance outcome',
      },
      {
        label: 'Case study template system',
        trigger: 'After three case studies exist',
        outcome: 'RealFabricationWorkflowDocumentation.tsx with reusable lifecycle template for all future project documentation',
      },
    ],
  },
  {
    id: 'golf-proof',
    track: 'HPS Golf Deployment Proof',
    accent: 'var(--color-hps-green)',
    accentHex: '#478c5c',
    category: 'Operational Evidence',
    horizon: '30–90 days post-launch',
    description: 'Populate HPSGolfPage with real course deployment evidence, sponsor analytics, and QR engagement data.',
    milestones: [
      {
        label: 'Real sponsor analytics wired in',
        trigger: 'After first post-launch reporting cycle',
        outcome: 'SponsorAnalyticsDashboard populated with real hole scan data — replaces placeholder metrics in RealOperationalDashboardIntegration',
      },
      {
        label: 'QR engagement activation',
        trigger: 'After QR surfaces are live and tracked',
        outcome: 'QREngagementSummary updated with real scan volume, surface type breakdown, and seasonal engagement trend data',
      },
      {
        label: 'Course deployment documentation',
        trigger: 'After next golf course signage installation',
        outcome: 'Real installation photography, hole sponsor map, plaque specifications — wired into HPSGolfDeploymentReality component',
      },
      {
        label: 'Golf platform expansion',
        trigger: 'Second course relationship established',
        outcome: 'HPSGolfPage expands from single-course proof to multi-course operational record — referenced in ecosystem overview',
      },
    ],
  },
  {
    id: 'accessibility-reporting',
    track: 'Accessibility Reporting Systems',
    accent: 'var(--color-hps-teal-dark)',
    accentHex: '#0d9488',
    category: 'Compliance Infrastructure',
    horizon: '60–90 days post-launch',
    description: 'Evolve accessibility from internal WCAG discipline into client-facing compliance reporting and audit delivery.',
    milestones: [
      {
        label: 'First external audit delivery',
        trigger: 'First paid WCAG engagement',
        outcome: 'Real audit report delivered — findings, remediation plan, re-audit schedule — available as evidence on AccessibilityPage',
      },
      {
        label: 'Compliance tracking dashboard',
        trigger: 'After three client properties in remediation',
        outcome: 'AccessibilityComplianceDashboard populated with real per-property status — live operational record, not placeholder rows',
      },
      {
        label: 'VPAT / ACR documentation pipeline',
        trigger: 'After first federal or education-sector engagement',
        outcome: 'Voluntary Product Accessibility Template process documented and operational — supports compliance-sensitive client onboarding',
      },
      {
        label: 'hpsaccessibility.com expansion',
        trigger: 'After 60 days post-launch',
        outcome: 'Dedicated accessibility platform with public-facing compliance reports, audit request flow, and remediation case studies',
      },
    ],
  },
  {
    id: 'hospitality',
    track: 'Hospitality Operational Layers',
    accent: 'var(--color-hps-gold)',
    accentHex: '#e8b84b',
    category: 'Industry Pathway',
    horizon: '60–120 days post-launch',
    description: 'Build out HospitalityQRPage from infrastructure proof to deployed operational evidence with real venue data.',
    milestones: [
      {
        label: 'First hospitality venue deployment',
        trigger: 'Active venue QR system live',
        outcome: 'Real QR engagement metrics, menu update workflow, table surface photography — replaces placeholder operational evidence',
      },
      {
        label: 'Seasonal menu update documentation',
        trigger: 'After first real seasonal content cycle',
        outcome: 'Real-time update process documented — shows hospitality clients the operational workflow from brief to published',
      },
      {
        label: 'Venue operational case study',
        trigger: 'After 90 days of venue operation',
        outcome: 'Full deployment case study: installation, QR scan adoption curve, operational outcomes — wired into HospitalityQRPage',
      },
      {
        label: 'Hospitality industry pathway page',
        trigger: 'Version 1B roadmap',
        outcome: 'Dedicated hospitality page in IndustryPage ecosystem — own URL, own proof layer, own industry-specific CTAs',
      },
    ],
  },
  {
    id: 'ai-infrastructure',
    track: 'AI Infrastructure Expansion',
    accent: 'var(--color-hps-teal)',
    accentHex: '#14b8a6',
    category: 'Operational Systems',
    horizon: '60–120 days post-launch',
    description: 'Expand AISystemsPage from capability overview to real workflow documentation with demonstrated operational output.',
    milestones: [
      {
        label: 'Workflow documentation',
        trigger: 'After three production AI workflow cycles',
        outcome: 'Real AI-assisted production documentation: brief intake, content generation, human review, delivery — replaces generic capability descriptions',
      },
      {
        label: 'HPS Media Studio integration proof',
        trigger: 'After first editorial production cycle',
        outcome: 'Real content pipeline documentation: AI-assisted creation, human editorial layer, multi-channel distribution — wired into MediaPage',
      },
      {
        label: 'AI systems evidence section',
        trigger: 'After consistent operational use across three clients',
        outcome: 'Client-outcome-oriented evidence on AISystemsPage — operational results, not feature lists',
      },
      {
        label: 'AI + fabrication workflow proof',
        trigger: 'After first AI-to-production cycle completes',
        outcome: 'Documents the full path: AI-generated design brief → UV fabrication → deployed physical output — cross-page evidence thread',
      },
    ],
  },
  {
    id: 'fabrication-commerce',
    track: 'Fabrication Commerce Integration',
    accent: 'var(--color-hps-coral-warm)',
    accentHex: '#f87239',
    category: 'Revenue Infrastructure',
    horizon: '90–180 days post-launch',
    description: 'Build a structured order intake pathway for fabrication clients — from quote request through production tracking.',
    milestones: [
      {
        label: 'Fabrication order intake flow',
        trigger: 'After consistent inbound fabrication inquiries',
        outcome: 'Structured quote request form specific to fabrication type — UV, laser, plaques, apparel — with production timeline estimates',
      },
      {
        label: 'Production tracking interface',
        trigger: 'After client portal is operational',
        outcome: 'Client-facing production status for active fabrication jobs — wired into ClientPortalPage order management section',
      },
      {
        label: 'Fabrication capability pricing guide',
        trigger: 'After 10+ production inquiries documented',
        outcome: 'Published per-capability pricing tiers on FabricationLabPage — reduces inbound friction for repeat clients',
      },
      {
        label: 'Wholesale and trade pathway',
        trigger: 'Version 1B roadmap',
        outcome: 'Trade-specific pricing and ordering system for signage companies, event vendors, hospitality procurement teams',
      },
    ],
  },
  {
    id: 'operational-onboarding',
    track: 'Operational Onboarding Systems',
    accent: 'var(--color-hps-green)',
    accentHex: '#478c5c',
    category: 'Client Infrastructure',
    horizon: '30–60 days post-launch',
    description: 'Transition the client portal from infrastructure to active operational relationship management.',
    milestones: [
      {
        label: 'First client portal invitation',
        trigger: 'First active post-launch client relationship',
        outcome: 'Real client invited into portal — project board active, communication channel live, production queue visible',
      },
      {
        label: 'Onboarding workflow documentation',
        trigger: 'After second client onboarded',
        outcome: 'Documented onboarding sequence: intake, project setup, access grant, production start — operational process evidence for ClientPortalPage',
      },
      {
        label: 'Operational relationship record',
        trigger: 'After first 90-day client engagement',
        outcome: 'Real long-term engagement documented: project history, deliverable record, operational continuity evidence — supports retention positioning',
      },
      {
        label: 'Multi-client operational dashboard',
        trigger: 'After five active portal clients',
        outcome: 'Consolidated operational view — production queues, active campaigns, compliance status, portal logins — internal command layer',
      },
    ],
  },
]

const HORIZON_ORDER = [
  '0–30 days post-launch',
  '30–60 days post-launch',
  '30–90 days post-launch',
  '60–90 days post-launch',
  '60–120 days post-launch',
  '90–180 days post-launch',
]

function horizonIndex(h: string) {
  const idx = HORIZON_ORDER.indexOf(h)
  return idx === -1 ? 99 : idx
}

const sorted = [...ROADMAP_TRACKS].sort((a, b) => horizonIndex(a.horizon) - horizonIndex(b.horizon))

export default function Version1APostLaunchRoadmap() {
  const categories = Array.from(new Set(ROADMAP_TRACKS.map(t => t.category)))

  return (
    <section
      className="py-20 lg:py-28"
      style={{ background: 'var(--color-hps-parchment)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <p
            className="font-mono uppercase mb-4"
            style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--color-hps-teal-dark)' }}
          >
            Internal · Post-launch roadmap
          </p>
          <h2
            className="font-display mb-5"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--color-hps-ink)', lineHeight: 1.05 }}
          >
            Version 1A is the operational foundation. Not the destination.
          </h2>
          <p
            className="font-body leading-relaxed"
            style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)', maxWidth: '42rem' }}
          >
            {ROADMAP_TRACKS.length} active tracks across {categories.length} infrastructure categories. Each track evolves from placeholder infrastructure toward real operational evidence — photography, case studies, analytics, client relationships, and compounding proof of work.
          </p>
        </div>

        {/* Category summary strip */}
        <div className="flex flex-wrap gap-2 mb-14">
          {categories.map(cat => {
            const track = ROADMAP_TRACKS.find(t => t.category === cat)!
            return (
              <span
                key={cat}
                className="font-mono rounded-sm"
                style={{
                  fontSize: '0.55rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: track.accent,
                  background: `${track.accentHex}12`,
                  border: `1px solid ${track.accentHex}28`,
                  padding: '0.25rem 0.6rem',
                }}
              >
                {cat}
              </span>
            )
          })}
        </div>

        {/* Tracks */}
        <div className="flex flex-col gap-10">
          {sorted.map((track) => (
            <div
              key={track.id}
              className="rounded-sm overflow-hidden"
              style={{
                border: '1px solid rgba(200,180,154,0.38)',
                borderLeft: `3px solid ${track.accent}`,
              }}
            >
              {/* Track header */}
              <div
                className="px-5 py-4"
                style={{
                  background: `${track.accentHex}07`,
                  borderBottom: '1px solid rgba(200,180,154,0.28)',
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <span
                      className="font-mono shrink-0"
                      style={{ fontSize: '0.5rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: track.accent, opacity: 0.7 }}
                    >
                      {track.category}
                    </span>
                    <h3
                      className="font-body font-medium"
                      style={{ fontSize: '1rem', color: 'var(--color-hps-ink)' }}
                    >
                      {track.track}
                    </h3>
                  </div>
                  <span
                    className="font-mono shrink-0"
                    style={{ fontSize: '0.5rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-hps-smoke)', opacity: 0.5 }}
                  >
                    {track.horizon}
                  </span>
                </div>
                <p
                  className="font-body mt-2"
                  style={{ fontSize: '0.8125rem', color: 'var(--color-hps-smoke)', lineHeight: 1.6, maxWidth: '44rem' }}
                >
                  {track.description}
                </p>
              </div>

              {/* Milestones */}
              <div
                className="px-5 py-4"
                style={{ background: 'var(--color-hps-cream)' }}
              >
                <p
                  className="font-mono uppercase mb-3"
                  style={{ fontSize: '0.48rem', letterSpacing: '0.18em', color: 'var(--color-hps-smoke)', opacity: 0.45 }}
                >
                  Milestones
                </p>
                <div className="flex flex-col gap-3">
                  {track.milestones.map((ms, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 py-2.5 px-3 rounded-sm"
                      style={{ background: 'rgba(255,252,246,0.7)', border: '1px solid rgba(200,180,154,0.22)' }}
                    >
                      <span
                        className="font-mono shrink-0 rounded-sm"
                        style={{
                          fontSize: '0.45rem',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: track.accent,
                          background: `${track.accentHex}10`,
                          padding: '0.15rem 0.4rem',
                          marginTop: '0.1rem',
                          whiteSpace: 'nowrap',
                          minWidth: '1rem',
                          textAlign: 'center',
                        }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p
                          className="font-body font-medium mb-1"
                          style={{ fontSize: '0.8125rem', color: 'var(--color-hps-ink)', lineHeight: 1.3 }}
                        >
                          {ms.label}
                        </p>
                        <p
                          className="font-body mb-1.5"
                          style={{ fontSize: '0.7rem', color: track.accent, opacity: 0.75, fontStyle: 'italic', lineHeight: 1.4 }}
                        >
                          Trigger: {ms.trigger}
                        </p>
                        <p
                          className="font-body"
                          style={{ fontSize: '0.75rem', color: 'var(--color-hps-smoke)', lineHeight: 1.55 }}
                        >
                          {ms.outcome}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div
          className="mt-14 pt-8 flex items-start gap-3"
          style={{ borderTop: '1px solid rgba(200,180,154,0.32)' }}
        >
          <span
            className="shrink-0 w-1 h-1 rounded-full mt-[0.5rem]"
            style={{ background: 'var(--color-hps-teal-dark)', opacity: 0.55 }}
            aria-hidden="true"
          />
          <p
            className="font-body"
            style={{ fontSize: '0.8125rem', color: 'var(--color-hps-smoke)', lineHeight: 1.65, maxWidth: '44rem' }}
          >
            Milestone triggers are condition-based, not date-based. Each track advances when the operational trigger condition is met. This prevents planning theater — roadmap progress reflects real operational activity, not calendar proximity.
          </p>
        </div>

      </div>
    </section>
  )
}
