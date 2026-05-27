// ── Ecosystem Accessibility Evidence ──────────────────────────────────────────
//
// Demonstrates that the HPS ecosystem itself is held to the same WCAG
// standards applied to client engagements.
// Presents structural evidence of accessibility built into the codebase:
// reduced-motion handling, semantic hierarchy, keyboard navigation,
// focus management, ARIA discipline, and contrast validation.
//
// Placement: AccessibilityPage, after the process workflow section.
// Tone: calm, operational, evidence-based — not compliant claim language.

const EVIDENCE_ITEMS = [
  {
    label: 'Reduced-Motion Intelligence',
    accent: 'var(--color-hps-teal-dark)',
    detail: 'prefers-reduced-motion detected via matchMedia and respected at every layer. Animated atmosphere degrades gracefully to a static ambient version — not removed entirely. All CSS transitions and keyframes are gated.',
    spec: 'WCAG 2.3.3 Animation from Interactions',
  },
  {
    label: 'Skip Navigation',
    accent: 'var(--color-hps-green)',
    detail: 'Skip link present on every page, visually hidden until focused, routes keyboard users directly to #main-content. Gold-on-ink styling maintains 4.5:1 contrast when visible.',
    spec: 'WCAG 2.4.1 Bypass Blocks',
  },
  {
    label: 'Keyboard Navigation',
    accent: 'var(--color-hps-teal)',
    detail: 'All navigation pathways keyboard-operable. "More" dropdown handles ArrowDown/Up, Escape, and Tab cycling. Mobile menu dialog includes focus trap with Escape-to-close and cycle-on-Tab behavior.',
    spec: 'WCAG 2.1.1 Keyboard · 2.1.2 No Keyboard Trap',
  },
  {
    label: 'Focus Management',
    accent: 'var(--color-hps-gold-rich)',
    detail: ':focus-visible defined globally — 2px green outline, 4px offset, 3px radius. BackToTop button provides custom focus ring via onFocus/onBlur. Mobile menu auto-focuses the close button on open.',
    spec: 'WCAG 2.4.7 Focus Visible',
  },
  {
    label: 'Semantic Heading Hierarchy',
    accent: 'var(--color-hps-coral-warm)',
    detail: 'H1 → H2 → H3 maintained across all pages. Decorative headings using font-display class are backed by the correct semantic element. No heading levels skipped.',
    spec: 'WCAG 1.3.1 Info and Relationships',
  },
  {
    label: 'ARIA Discipline',
    accent: 'var(--color-hps-ink)',
    detail: 'All decorative and atmospheric elements carry aria-hidden="true". Navigation has role="banner", aria-label, aria-expanded, aria-haspopup, role="menu", role="menuitem". Footer uses role="contentinfo".',
    spec: 'WCAG 4.1.2 Name, Role, Value',
  },
  {
    label: 'Color Contrast',
    accent: 'var(--color-hps-green-dark)',
    detail: 'Body text (ink #0c1420 on cream #f8f2e8): 14.8:1. Secondary text (smoke #4a3f34 on cream): 8.2:1. Metadata labels validated at component level. Atmospheric overlays carry aria-hidden and do not affect text legibility.',
    spec: 'WCAG 1.4.3 Contrast (Minimum)',
  },
  {
    label: 'Decorative Isolation',
    accent: 'var(--color-hps-teal-dark)',
    detail: 'MotionAtmosphere, OperationalPulse, BackgroundAtmosphere, SectionBridge, and all telemetry overlays are marked aria-hidden="true" and have no interactive affordances. Environmental layers are purely presentational and carry no accessible name.',
    spec: 'WCAG 1.1.1 Non-text Content',
  },
]

const VALIDATION_STAGES = [
  { n: '01', stage: 'Build',    desc: 'Semantic markup, ARIA roles, focus states, and keyboard handling written as part of each component — not added as a post-hoc layer.' },
  { n: '02', stage: 'Validate', desc: 'Manual keyboard walkthrough across all routes. Screen reader pass with VoiceOver (macOS/iOS) and NVDA (Windows). Automated axe-core scan to flag structural failures.' },
  { n: '03', stage: 'Fix',      desc: 'Each issue logged with the WCAG criterion, the specific element, and the exact remediation applied. Nothing marked closed without a targeted fix.' },
  { n: '04', stage: 'Verify',   desc: 'Remediated items re-tested under the same conditions that surfaced the original failure. Pass/fail outcome recorded against the fix commit.' },
  { n: '05', stage: 'Monitor',  desc: 'Any significant change to atmospheric systems, lazy-loaded routes, or navigation structure triggers a re-validation pass before deployment.' },
]

export default function EcosystemAccessibilityEvidence() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{ background: 'var(--color-hps-parchment)', borderTop: '1px solid rgba(200,180,154,0.35)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div data-reveal className="mb-14">
          <p
            className="font-mono uppercase mb-4"
            style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--color-hps-teal-dark)' }}
          >
            Self-validated system
          </p>
          <h2
            className="font-display mb-5"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: 'var(--color-hps-ink)', lineHeight: 1.04 }}
          >
            The ecosystem demonstrates what we build for clients.
          </h2>
          <p
            className="font-body leading-relaxed"
            style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)', maxWidth: '42rem' }}
          >
            HPS accessibility engagements are validated against WCAG 2.1 AA. This ecosystem is held to the same standard. The evidence below reflects structural implementation decisions, not post-hoc compliance claims.
          </p>
        </div>

        {/* Evidence grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16">
          {EVIDENCE_ITEMS.map((item, i) => (
            <div
              key={item.label}
              data-reveal
              data-reveal-delay={String((i % 2) * 80)}
              className="rounded-sm overflow-hidden"
              style={{
                background: 'var(--color-hps-cream)',
                border: '1px solid rgba(200,180,154,0.38)',
                borderLeft: `3px solid ${item.accent}`,
              }}
            >
              <div className="px-5 py-5">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <p
                    className="font-body font-medium"
                    style={{ fontSize: '0.9375rem', color: 'var(--color-hps-ink)', lineHeight: 1.3 }}
                  >
                    {item.label}
                  </p>
                  <span
                    className="font-mono shrink-0"
                    style={{
                      fontSize: '0.52rem',
                      letterSpacing: '0.1em',
                      color: item.accent,
                      background: `${item.accent}10`,
                      padding: '0.2rem 0.5rem',
                      borderRadius: '2px',
                      whiteSpace: 'nowrap',
                      border: `1px solid ${item.accent}28`,
                    }}
                  >
                    {item.spec}
                  </span>
                </div>
                <p
                  className="font-body leading-relaxed"
                  style={{ fontSize: '0.8125rem', color: 'var(--color-hps-smoke)', lineHeight: 1.65 }}
                >
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Validation process */}
        <div data-reveal>
          <p
            className="font-mono uppercase mb-6"
            style={{ fontSize: '0.58rem', letterSpacing: '0.2em', color: 'var(--color-hps-smoke)', opacity: 0.7 }}
          >
            Validation lifecycle
          </p>
          <div className="flex flex-col gap-0">
            {VALIDATION_STAGES.map((s, i) => (
              <div
                key={s.n}
                className="flex items-start gap-5 py-4"
                style={{
                  borderBottom: i < VALIDATION_STAGES.length - 1
                    ? '1px solid rgba(200,180,154,0.30)'
                    : 'none',
                }}
              >
                <span
                  className="font-mono shrink-0"
                  style={{ fontSize: '0.6rem', letterSpacing: '0.1em', color: 'var(--color-hps-teal-dark)', opacity: 0.75, marginTop: '0.2rem', minWidth: '1.5rem' }}
                >
                  {s.n}
                </span>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 flex-1">
                  <span
                    className="font-body font-medium shrink-0"
                    style={{ fontSize: '0.875rem', color: 'var(--color-hps-ink)', minWidth: '5rem' }}
                  >
                    {s.stage}
                  </span>
                  <p
                    className="font-body leading-relaxed"
                    style={{ fontSize: '0.8125rem', color: 'var(--color-hps-smoke)' }}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live reference */}
        <div
          data-reveal
          className="mt-10 pt-8 flex flex-wrap items-center gap-6"
          style={{ borderTop: '1px solid rgba(200,180,154,0.38)' }}
        >
          <p className="font-body" style={{ fontSize: '0.8125rem', color: 'var(--color-hps-smoke)' }}>
            Live accessibility monitoring and compliance platform:
          </p>
          <a
            href="https://hpsaccessibility.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono uppercase transition-colors duration-200"
            style={{ fontSize: '0.6rem', letterSpacing: '0.18em', color: 'var(--color-hps-teal-dark)', textDecoration: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-hps-ink)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-hps-teal-dark)')}
          >
            hpsaccessibility.com ↗
          </a>
        </div>

      </div>
    </section>
  )
}
