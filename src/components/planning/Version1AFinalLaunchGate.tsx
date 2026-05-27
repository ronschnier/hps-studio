// ── Version 1A Final Launch Gate ──────────────────────────────────────────────
//
// The pre-release checkpoint before Version 1A goes live.
// Binary pass/fail states. Explicit launch blockers.
// No deployment until all BLOCK items resolve.
//
// Usage: Internal planning reference. Render on a private admin route.

interface GateItem {
  id: string
  label: string
  state: 'pass' | 'block' | 'warn'
  detail: string
  owner?: string
}

interface GateCategory {
  id: string
  label: string
  accent: string
  hex: string
  items: GateItem[]
}

const GATE: GateCategory[] = [
  {
    id: 'must-pass',
    label: 'Must-Pass Items',
    accent: 'var(--color-hps-green)',
    hex: '#478c5c',
    items: [
      {
        id: 'mp1',
        label: 'Screen reader validation — VoiceOver (macOS)',
        state: 'block',
        detail: 'Run VoiceOver on all primary routes. Heading order, landmark navigation, and interactive element announcements must be correct.',
        owner: 'Accessibility',
      },
      {
        id: 'mp2',
        label: 'Screen reader validation — NVDA (Windows)',
        state: 'block',
        detail: 'NVDA pass across homepage, fabrication, golf, and contact pages minimum.',
        owner: 'Accessibility',
      },
      {
        id: 'mp3',
        label: 'Production hosting and SSL configured',
        state: 'block',
        detail: 'Hosting provider confirmed, domain routed, SSL certificate provisioned and tested.',
        owner: 'Deployment',
      },
      {
        id: 'mp4',
        label: 'Postmark contact form verified in production',
        state: 'block',
        detail: 'Form submission tested end-to-end in production: sends to ron@happypathstudios.com and deb@happypathstudios.com, reply-to set from submitted email.',
        owner: 'Deployment',
      },
      {
        id: 'mp5',
        label: 'Per-route page titles configured',
        state: 'block',
        detail: 'Each route must have a meaningful document.title. "Happy Path Studios | Fabrication Lab" pattern minimum.',
        owner: 'SEO',
      },
      {
        id: 'mp6',
        label: 'Meta descriptions on all primary routes',
        state: 'block',
        detail: 'homepage, fabrication, golf, accessibility, platforms, services, about, contact — all need meta description tags.',
        owner: 'SEO',
      },
      {
        id: 'mp7',
        label: 'No broken links or 404 routes',
        state: 'pass',
        detail: 'All internal navigation paths verified. No dead links in footer, navigation, or CTAs.',
        owner: 'QA',
      },
      {
        id: 'mp8',
        label: 'Contact information accurate throughout',
        state: 'pass',
        detail: '352-290-7744 and ron@happypathstudios.com verified across all contact surfaces.',
        owner: 'Content',
      },
      {
        id: 'mp9',
        label: 'No capability exaggerations',
        state: 'pass',
        detail: 'All fabrication capabilities reflect actual HPS equipment only. No CNC or industrial routing listed.',
        owner: 'Content',
      },
      {
        id: 'mp10',
        label: 'Geographic accuracy',
        state: 'pass',
        detail: 'Leesburg, Florida used consistently throughout. No St. Petersburg references.',
        owner: 'Content',
      },
    ],
  },
  {
    id: 'performance',
    label: 'Performance Gate',
    accent: 'var(--color-hps-teal)',
    hex: '#14b8a6',
    items: [
      {
        id: 'perf1',
        label: 'LCP under 2.5s in production',
        state: 'block',
        detail: 'Largest Contentful Paint measured in production environment. Target: under 2.5s on 4G connection.',
        owner: 'Performance',
      },
      {
        id: 'perf2',
        label: 'CLS under 0.1',
        state: 'block',
        detail: 'Cumulative Layout Shift measured. All fonts and images must have explicit dimensions to prevent layout shifts.',
        owner: 'Performance',
      },
      {
        id: 'perf3',
        label: 'Route code splitting active',
        state: 'pass',
        detail: '330KB shared chunk + per-route lazy loading confirmed in build output.',
        owner: 'Performance',
      },
      {
        id: 'perf4',
        label: 'No console errors in production build',
        state: 'pass',
        detail: 'Production build verified clean at 150ms with no TypeScript errors.',
        owner: 'Engineering',
      },
    ],
  },
  {
    id: 'accessibility-gate',
    label: 'Accessibility Gate',
    accent: 'var(--color-hps-teal-dark)',
    hex: '#0d9488',
    items: [
      {
        id: 'ac1',
        label: 'WCAG 2.1 AA contrast on all text',
        state: 'pass',
        detail: 'Contrast audit completed. CTABand, overlays, atmospheric labels, metadata text all verified.',
        owner: 'Accessibility',
      },
      {
        id: 'ac2',
        label: 'Keyboard navigation all routes',
        state: 'pass',
        detail: 'Full keyboard path through navigation, all CTAs, forms, and evidence systems verified.',
        owner: 'Accessibility',
      },
      {
        id: 'ac3',
        label: 'Reduced-motion intelligence active',
        state: 'pass',
        detail: 'MotionAtmosphere and MotionSafePulse deployed. CSS reduced-motion block complete in globals.css.',
        owner: 'Accessibility',
      },
      {
        id: 'ac4',
        label: 'Focus management — mobile menu',
        state: 'pass',
        detail: 'Focus trap active on mobile menu open. Escape key closes. First element receives focus on open.',
        owner: 'Accessibility',
      },
      {
        id: 'ac5',
        label: 'All decorative elements hidden from AT',
        state: 'pass',
        detail: 'aria-hidden="true" on all atmospheric blobs, grids, pulse systems, and decorative dividers.',
        owner: 'Accessibility',
      },
    ],
  },
  {
    id: 'content-gate',
    label: 'Content Integrity Gate',
    accent: 'var(--color-hps-gold-rich)',
    hex: '#b8882a',
    items: [
      {
        id: 'cg1',
        label: 'Voice normalized — no em dash patterns',
        state: 'pass',
        detail: 'Dramatic em dash structures, Not X/Not Y fragments, and AI-cadence patterns removed across all pages.',
        owner: 'Content',
      },
      {
        id: 'cg2',
        label: 'No under-one-roof or Most-agencies patterns',
        state: 'pass',
        detail: 'Cliché operational framing removed and replaced with specific, location-grounded language.',
        owner: 'Content',
      },
      {
        id: 'cg3',
        label: 'CTABand copy finalized',
        state: 'pass',
        detail: '"Get On Your Happy Path Today" — approved headline. Subhead and buttons finalized.',
        owner: 'Content',
      },
      {
        id: 'cg4',
        label: 'Hero copy finalized',
        state: 'pass',
        detail: 'Hero voice normalized: calm, operational, established. Italic phone span removed from H1.',
        owner: 'Content',
      },
      {
        id: 'cg5',
        label: 'Open Graph image and description',
        state: 'block',
        detail: 'OG tags required for social sharing. Image and description not yet configured.',
        owner: 'SEO',
      },
    ],
  },
  {
    id: 'deployment-gate',
    label: 'Deployment Readiness Gate',
    accent: 'var(--color-hps-coral-warm)',
    hex: '#f87239',
    items: [
      {
        id: 'dg1',
        label: 'Environment variables in production',
        state: 'block',
        detail: 'Postmark API key must be in a server-side environment, not frontend bundle. Server function required.',
        owner: 'Deployment',
      },
      {
        id: 'dg2',
        label: 'robots.txt and sitemap.xml',
        state: 'warn',
        detail: 'Not blocking launch but should be present. Sitemap improves indexing timeline.',
        owner: 'SEO',
      },
      {
        id: 'dg3',
        label: 'Analytics configured',
        state: 'warn',
        detail: 'No analytics tracking configured. Core Web Vitals and route traffic data will be unavailable post-launch.',
        owner: 'Deployment',
      },
      {
        id: 'dg4',
        label: 'Uptime monitoring',
        state: 'warn',
        detail: 'No uptime monitor configured. Should be active before launch to detect outages.',
        owner: 'Deployment',
      },
      {
        id: 'dg5',
        label: 'Physical device testing',
        state: 'warn',
        detail: 'iOS Safari and Android Chrome testing pending. Browser rendering verified in dev only.',
        owner: 'QA',
      },
    ],
  },
]

const BLOCK_LABEL_COLOR = 'var(--color-hps-coral-warm)'
const PASS_COLOR = 'var(--color-hps-green)'
const WARN_COLOR = 'var(--color-hps-gold-rich)'

function gateSummary(gate: GateCategory[]) {
  const all = gate.flatMap(g => g.items)
  const pass = all.filter(i => i.state === 'pass').length
  const block = all.filter(i => i.state === 'block').length
  const warn = all.filter(i => i.state === 'warn').length
  const total = all.length
  return { pass, block, warn, total }
}

export default function Version1AFinalLaunchGate() {
  const { pass, block, warn, total } = gateSummary(GATE)
  const canLaunch = block === 0

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
            style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: canLaunch ? 'var(--color-hps-green)' : 'var(--color-hps-coral-warm)' }}
          >
            Internal · Version 1A launch gate
          </p>
          <h2
            className="font-display mb-5"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--color-hps-ink)', lineHeight: 1.05 }}
          >
            {canLaunch ? 'Version 1A is cleared for launch.' : `${block} items blocking Version 1A launch.`}
          </h2>
          <p
            className="font-body leading-relaxed"
            style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)', maxWidth: '40rem' }}
          >
            {pass} of {total} items passing. {block > 0 ? `${block} blocking — resolve before deployment.` : ''} {warn > 0 ? `${warn} advisory items do not block launch.` : ''}
          </p>
        </div>

        {/* Gate status summary */}
        <div className="flex flex-wrap gap-3 mb-12">
          {[
            { label: `${pass} passing`, color: PASS_COLOR, bg: 'rgba(71,140,92,0.10)', border: 'rgba(71,140,92,0.22)' },
            { label: `${block} blocking`, color: BLOCK_LABEL_COLOR, bg: 'rgba(248,114,57,0.10)', border: 'rgba(248,114,57,0.22)' },
            { label: `${warn} advisory`, color: WARN_COLOR, bg: 'rgba(184,136,42,0.10)', border: 'rgba(184,136,42,0.22)' },
          ].map(s => (
            <span
              key={s.label}
              className="font-mono rounded-sm"
              style={{ fontSize: '0.6rem', letterSpacing: '0.1em', color: s.color, background: s.bg, border: `1px solid ${s.border}`, padding: '0.3rem 0.7rem' }}
            >
              {s.label}
            </span>
          ))}
        </div>

        {/* Gate categories */}
        <div className="flex flex-col gap-8">
          {GATE.map(category => {
            const catBlock = category.items.filter(i => i.state === 'block').length
            return (
              <div
                key={category.id}
                className="rounded-sm overflow-hidden"
                style={{ border: '1px solid rgba(200,180,154,0.35)', borderLeft: `3px solid ${category.accent}` }}
              >
                {/* Category header */}
                <div
                  className="px-5 py-3 flex items-center justify-between gap-4"
                  style={{ background: `${category.hex}07`, borderBottom: '1px solid rgba(200,180,154,0.22)' }}
                >
                  <span className="font-body font-medium" style={{ fontSize: '0.875rem', color: 'var(--color-hps-ink)' }}>
                    {category.label}
                  </span>
                  {catBlock > 0 && (
                    <span
                      className="font-mono rounded-sm shrink-0"
                      style={{ fontSize: '0.48rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: BLOCK_LABEL_COLOR, background: 'rgba(248,114,57,0.10)', padding: '0.15rem 0.45rem' }}
                    >
                      {catBlock} {catBlock === 1 ? 'blocker' : 'blockers'}
                    </span>
                  )}
                </div>

                {/* Items */}
                <div className="flex flex-col divide-y" style={{ background: 'var(--color-hps-cream)', borderColor: 'rgba(200,180,154,0.18)' }}>
                  {category.items.map(item => (
                    <div key={item.id} className="flex items-start gap-4 px-5 py-3">
                      {/* State indicator */}
                      <div className="shrink-0 pt-0.5">
                        <span
                          className="font-mono rounded-sm block"
                          style={{
                            fontSize: '0.44rem',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: item.state === 'pass' ? PASS_COLOR : item.state === 'block' ? BLOCK_LABEL_COLOR : WARN_COLOR,
                            background: item.state === 'pass' ? 'rgba(71,140,92,0.10)' : item.state === 'block' ? 'rgba(248,114,57,0.10)' : 'rgba(184,136,42,0.10)',
                            padding: '0.15rem 0.4rem',
                            whiteSpace: 'nowrap',
                            minWidth: '3.5rem',
                            textAlign: 'center',
                          }}
                        >
                          {item.state === 'pass' ? 'Pass' : item.state === 'block' ? 'Block' : 'Warn'}
                        </span>
                        {item.owner && (
                          <span
                            className="font-mono block mt-1"
                            style={{ fontSize: '0.40rem', letterSpacing: '0.06em', color: 'var(--color-hps-smoke)', opacity: 0.45, textAlign: 'center' }}
                          >
                            {item.owner}
                          </span>
                        )}
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
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom launch status */}
        <div
          className="mt-14 pt-8 flex items-start gap-4"
          style={{ borderTop: '1px solid rgba(200,180,154,0.32)' }}
        >
          <div
            className="shrink-0 rounded-sm"
            style={{
              width: '0.25rem',
              height: '2.5rem',
              background: canLaunch ? 'var(--color-hps-green)' : 'var(--color-hps-coral-warm)',
              marginTop: '0.1rem',
            }}
            aria-hidden="true"
          />
          <p
            className="font-body"
            style={{ fontSize: '0.875rem', color: 'var(--color-hps-smoke)', lineHeight: 1.65, maxWidth: '44rem' }}
          >
            {canLaunch
              ? 'All blocking items resolved. Version 1A is cleared for production deployment. Advisory items can be addressed post-launch without blocking operational stability.'
              : `${block} blocking ${block === 1 ? 'item remains' : 'items remain'} before Version 1A can deploy. Screen reader validation, production hosting, contact form verification, per-route SEO metadata, and Open Graph configuration are the critical path.`
            }
          </p>
        </div>

      </div>
    </section>
  )
}
