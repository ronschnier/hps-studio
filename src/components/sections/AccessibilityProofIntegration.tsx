// ── AccessibilityProofIntegration ──────────────────────────────────────────────
//
// Accessibility work as a serious operational process, not a consulting pitch.
// Shows the methodology: intake through monitoring — with real process stages
// and concrete deliverables at each step.
//
// Tone: professional, procedural, enterprise-ready.
// Not: scare tactics, legal alarm, or vague compliance consulting.
//
// Primary use: HPSAccessibilityPage or a dedicated proof section.

// ── Process stages ─────────────────────────────────────────────────────────────

interface AuditStage {
  n:          string
  label:      string
  tag:        string
  desc:       string
  methods:    string[]
  output:     string
  accent:     string
}

const AUDIT_STAGES: AuditStage[] = [
  {
    n: '01',
    label: 'Intake & scoping',
    tag: 'Discovery',
    desc: 'Site inventory: page count, template types, framework stack, media assets, form interactions, and existing ARIA implementation. Scope set before any testing begins.',
    methods: ['Site crawl', 'Template audit', 'Interaction inventory', 'Existing remediation review'],
    output: 'Scoping document + testing priority matrix',
    accent: 'var(--color-hps-teal-dark)',
  },
  {
    n: '02',
    label: 'Automated scan',
    tag: 'Tool-assisted',
    desc: 'axe-core and Lighthouse accessibility audits run across key pages and templates. Results categorized by WCAG 2.2 success criterion, severity, and affected element count.',
    methods: ['axe-core audit', 'Lighthouse A11y', 'HTML validation', 'Color contrast check'],
    output: 'Automated scan report with WCAG criterion mapping',
    accent: 'var(--color-hps-teal-dark)',
  },
  {
    n: '03',
    label: 'Manual review',
    tag: 'Human testing',
    desc: 'Keyboard navigation, focus order, modal behavior, skip links, form labels, error messages, and reading order reviewed manually. Automated tools miss approximately 30–40% of real issues.',
    methods: ['Keyboard-only navigation', 'Focus management review', 'Form interaction testing', 'Heading hierarchy check'],
    output: 'Manual review findings with reproduction steps',
    accent: 'var(--color-hps-teal)',
  },
  {
    n: '04',
    label: 'Assistive tech testing',
    tag: 'AT verification',
    desc: 'VoiceOver, NVDA, and TalkBack testing across primary user flows. Screen reader announcement behavior, landmark navigation, and dynamic content updates verified against expected AT output.',
    methods: ['VoiceOver (macOS/iOS)', 'NVDA (Windows)', 'TalkBack (Android)', 'JAWS spot-check'],
    output: 'Screen reader audit with announcement transcripts',
    accent: 'var(--color-hps-teal)',
  },
  {
    n: '05',
    label: 'Remediation guidance',
    tag: 'Fix specification',
    desc: 'Each issue documented with: element reference, WCAG criterion, severity rating, specific fix recommendation, and code example where applicable. Organized by developer priority — not just issue count.',
    methods: ['Per-issue fix specification', 'Code examples', 'Priority queue by impact', 'Developer-ready descriptions'],
    output: 'Remediation specification document',
    accent: 'var(--color-hps-coral-warm)',
  },
  {
    n: '06',
    label: 'Verification & monitoring',
    tag: 'Ongoing',
    desc: 'Post-remediation verification confirms fixes resolve the documented issues without introducing regressions. Ongoing monitoring available for sites with active development cycles.',
    methods: ['Fix verification testing', 'Regression check', 'Monitoring setup', 'VPAT documentation support'],
    output: 'Verification report + optional monitoring schedule',
    accent: 'var(--color-hps-green)',
  },
]

// ── WCAG coverage indicators ───────────────────────────────────────────────────

const WCAG_CRITERIA = [
  { id: '1.1', label: 'Text alternatives', level: 'A'  },
  { id: '1.3', label: 'Adaptable content', level: 'A'  },
  { id: '1.4', label: 'Distinguishable',   level: 'AA' },
  { id: '2.1', label: 'Keyboard accessible', level: 'A' },
  { id: '2.4', label: 'Navigable',         level: 'AA' },
  { id: '2.5', label: 'Input modalities',  level: 'AA' },
  { id: '3.1', label: 'Readable',          level: 'A'  },
  { id: '3.2', label: 'Predictable',       level: 'A'  },
  { id: '3.3', label: 'Input assistance',  level: 'A'  },
  { id: '4.1', label: 'Compatible',        level: 'A'  },
]

// ── Evidence samples ───────────────────────────────────────────────────────────
// Represent the type of deliverable each phase produces.

const DELIVERABLE_SAMPLES = [
  {
    title: 'Audit finding record',
    type: 'Automated + manual',
    fields: [
      { label: 'WCAG Criterion', value: '1.4.3 Contrast (Minimum)' },
      { label: 'Level',          value: 'AA'                        },
      { label: 'Severity',       value: 'High'                      },
      { label: 'Element',        value: '.nav-link on hover state'  },
      { label: 'Contrast ratio', value: '3.1:1 (required: 4.5:1)'  },
      { label: 'Fix',            value: 'Darken foreground to #1A1510 on hover' },
    ],
    accent: 'var(--color-hps-teal-dark)',
  },
  {
    title: 'Keyboard navigation finding',
    type: 'Manual review',
    fields: [
      { label: 'WCAG Criterion', value: '2.1.1 Keyboard'              },
      { label: 'Level',          value: 'A'                           },
      { label: 'Severity',       value: 'Critical'                    },
      { label: 'Issue',          value: 'Modal dialog traps focus outside container' },
      { label: 'Affected flow',  value: 'Contact form submission'     },
      { label: 'Fix',            value: 'Implement focus trap within modal root, restore on close' },
    ],
    accent: 'var(--color-hps-coral-warm)',
  },
]

// ── Main export ────────────────────────────────────────────────────────────────

export function AccessibilityProofIntegration() {
  return (
    <>
      {/* Process methodology section */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'var(--color-hps-cream)',
          borderTop: '1px solid rgba(200,180,154,0.28)',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background: [
              'radial-gradient(ellipse at 15% 25%, rgba(13,148,136,0.048) 0%, transparent 50%)',
              'radial-gradient(ellipse at 80% 70%, rgba(13,148,136,0.028) 0%, transparent 42%)',
              'repeating-linear-gradient(0deg, rgba(13,148,136,0.008) 0px, rgba(13,148,136,0.008) 1px, transparent 1px, transparent 20px)',
              'repeating-linear-gradient(90deg, rgba(13,148,136,0.008) 0px, rgba(13,148,136,0.008) 1px, transparent 1px, transparent 20px)',
            ].join(', '),
          }}
        />

        <div
          className="max-w-7xl mx-auto px-6 lg:px-10"
          style={{ position: 'relative', zIndex: 1, paddingTop: '4rem', paddingBottom: '4.5rem' }}
        >
          <div data-reveal className="mb-10">
            <p
              className="font-mono uppercase mb-3"
              style={{ fontSize: '0.6rem', letterSpacing: '0.22em', color: 'var(--color-hps-teal-dark)' }}
            >
              Audit process
            </p>
            <h2
              className="font-display mb-4"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.06 }}
            >
              Six stages. Each produces a concrete deliverable.
            </h2>
            <p
              className="font-body max-w-2xl leading-relaxed"
              style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}
            >
              Accessibility work at HPS follows a structured process — not a checklist you fill out once.
              Each stage builds on the previous: automated scans catch the broad issues, manual review
              catches what tools miss, assistive tech testing confirms real user behavior.
            </p>
          </div>

          {/* Stage grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {AUDIT_STAGES.map((stage, i) => (
              <div
                key={stage.n}
                data-reveal
                data-reveal-delay={String((i % 3) * 70)}
                style={{
                  background: 'var(--color-hps-parchment)',
                  border: '1px solid rgba(200,180,154,0.35)',
                  borderTop: `3px solid ${stage.accent}`,
                  borderRadius: '2px',
                  padding: '1rem 1.125rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                {/* Stage header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{
                      fontFamily: 'monospace',
                      fontSize: '0.50rem',
                      letterSpacing: '0.12em',
                      color: stage.accent,
                      background: `${stage.accent}12`,
                      border: `1px solid ${stage.accent}28`,
                      padding: '0.1rem 0.42rem',
                      borderRadius: '1px',
                    }}>
                      {stage.n}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-display, serif)',
                      fontSize: '0.9375rem',
                      color: 'var(--color-hps-ink)',
                    }}>
                      {stage.label}
                    </span>
                  </div>
                  <span style={{
                    fontFamily: 'monospace',
                    fontSize: '0.45rem',
                    letterSpacing: '0.10em',
                    color: 'var(--color-hps-smoke)',
                    opacity: 0.50,
                    textTransform: 'uppercase',
                    flexShrink: 0,
                  }}>
                    {stage.tag}
                  </span>
                </div>

                <p style={{
                  fontFamily: 'var(--font-body, sans-serif)',
                  fontSize: '0.8125rem',
                  color: 'var(--color-hps-smoke)',
                  lineHeight: 1.6,
                }}>
                  {stage.desc}
                </p>

                {/* Methods */}
                <div style={{ borderTop: '1px solid rgba(200,180,154,0.22)', paddingTop: '0.6rem' }}>
                  <p style={{
                    fontFamily: 'monospace',
                    fontSize: '0.44rem',
                    letterSpacing: '0.14em',
                    color: 'var(--color-hps-smoke)',
                    textTransform: 'uppercase',
                    opacity: 0.55,
                    marginBottom: '0.35rem',
                  }}>
                    Methods
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                    {stage.methods.map(m => (
                      <span
                        key={m}
                        style={{
                          fontFamily: 'monospace',
                          fontSize: '0.46rem',
                          letterSpacing: '0.08em',
                          color: stage.accent,
                          background: `${stage.accent}0E`,
                          border: `1px solid ${stage.accent}22`,
                          padding: '0.1rem 0.38rem',
                          borderRadius: '1px',
                        }}
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Output */}
                <div style={{
                  background: `${stage.accent}08`,
                  border: `1px solid ${stage.accent}20`,
                  borderLeft: `2px solid ${stage.accent}`,
                  padding: '0.4rem 0.6rem',
                  borderRadius: '1px',
                }}>
                  <p style={{
                    fontFamily: 'monospace',
                    fontSize: '0.46rem',
                    letterSpacing: '0.10em',
                    color: 'var(--color-hps-smoke)',
                    textTransform: 'uppercase',
                    opacity: 0.55,
                    marginBottom: '0.15rem',
                  }}>
                    Output
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-body, sans-serif)',
                    fontSize: '0.78rem',
                    color: 'var(--color-hps-ink)',
                    lineHeight: 1.4,
                  }}>
                    {stage.output}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evidence samples + WCAG coverage */}
      <section
        style={{
          background: 'var(--color-hps-parchment)',
          borderTop: '1px solid rgba(200,180,154,0.28)',
        }}
      >
        <div
          className="max-w-7xl mx-auto px-6 lg:px-10"
          style={{ paddingTop: '3.5rem', paddingBottom: '4rem' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Sample deliverables */}
            <div>
              <div data-reveal className="mb-6">
                <p
                  className="font-mono uppercase mb-2"
                  style={{ fontSize: '0.6rem', letterSpacing: '0.22em', color: 'var(--color-hps-teal-dark)' }}
                >
                  Sample audit records
                </p>
                <h3
                  className="font-display"
                  style={{ fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}
                >
                  This is what a finding looks like.
                </h3>
              </div>
              <div data-reveal className="flex flex-col gap-4">
                {DELIVERABLE_SAMPLES.map((sample, i) => (
                  <div
                    key={i}
                    style={{
                      background: 'var(--color-hps-cream)',
                      border: '1px solid rgba(200,180,154,0.35)',
                      borderLeft: `3px solid ${sample.accent}`,
                      borderRadius: '2px',
                      overflow: 'hidden',
                    }}
                  >
                    <div style={{
                      padding: '0.5rem 0.875rem',
                      borderBottom: '1px solid rgba(200,180,154,0.22)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      background: 'rgba(200,180,154,0.05)',
                    }}>
                      <span style={{
                        fontFamily: 'var(--font-display, serif)',
                        fontSize: '0.875rem',
                        color: 'var(--color-hps-ink)',
                      }}>
                        {sample.title}
                      </span>
                      <span style={{
                        fontFamily: 'monospace',
                        fontSize: '0.46rem',
                        letterSpacing: '0.10em',
                        color: sample.accent,
                        textTransform: 'uppercase',
                        opacity: 0.75,
                      }}>
                        {sample.type}
                      </span>
                    </div>
                    <div style={{ padding: '0.625rem 0.875rem' }}>
                      {sample.fields.map(f => (
                        <div
                          key={f.label}
                          style={{
                            display: 'grid',
                            gridTemplateColumns: 'minmax(80px, 120px) 1fr',
                            gap: '0.5rem',
                            padding: '0.28rem 0',
                            borderBottom: '1px solid rgba(200,180,154,0.18)',
                            alignItems: 'baseline',
                          }}
                        >
                          <span style={{
                            fontFamily: 'monospace',
                            fontSize: '0.46rem',
                            letterSpacing: '0.10em',
                            color: 'var(--color-hps-smoke)',
                            textTransform: 'uppercase',
                            opacity: 0.60,
                          }}>
                            {f.label}
                          </span>
                          <span style={{
                            fontFamily: 'monospace',
                            fontSize: '0.55rem',
                            letterSpacing: '0.06em',
                            color: 'var(--color-hps-ink)',
                          }}>
                            {f.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WCAG coverage + links */}
            <div>
              <div data-reveal className="mb-6">
                <p
                  className="font-mono uppercase mb-2"
                  style={{ fontSize: '0.6rem', letterSpacing: '0.22em', color: 'var(--color-hps-teal-dark)' }}
                >
                  WCAG 2.2 coverage
                </p>
                <h3
                  className="font-display"
                  style={{ fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}
                >
                  Level A and AA success criteria.
                </h3>
              </div>
              <div data-reveal className="flex flex-col gap-1 mb-8">
                {WCAG_CRITERIA.map(c => (
                  <div
                    key={c.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.45rem 0',
                      borderBottom: '1px solid rgba(200,180,154,0.22)',
                    }}
                  >
                    <span style={{
                      fontFamily: 'monospace',
                      fontSize: '0.52rem',
                      letterSpacing: '0.08em',
                      color: 'var(--color-hps-smoke)',
                      width: '2.5rem',
                      flexShrink: 0,
                      opacity: 0.65,
                    }}>
                      {c.id}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-body, sans-serif)',
                      fontSize: '0.875rem',
                      color: 'var(--color-hps-ink)',
                      flex: 1,
                    }}>
                      {c.label}
                    </span>
                    <span style={{
                      fontFamily: 'monospace',
                      fontSize: '0.46rem',
                      letterSpacing: '0.12em',
                      color: c.level === 'A' ? 'var(--color-hps-teal-dark)' : 'var(--color-hps-green)',
                      background: c.level === 'A' ? 'rgba(13,148,136,0.09)' : 'rgba(71,140,92,0.09)',
                      border: c.level === 'A' ? '1px solid rgba(13,148,136,0.22)' : '1px solid rgba(71,140,92,0.22)',
                      padding: '0.1rem 0.38rem',
                      borderRadius: '1px',
                      flexShrink: 0,
                    }}>
                      {c.level}
                    </span>
                  </div>
                ))}
              </div>

              {/* Live service link */}
              <div
                data-reveal
                style={{
                  padding: '1rem 1.125rem',
                  background: 'rgba(13,148,136,0.06)',
                  border: '1px solid rgba(13,148,136,0.20)',
                  borderLeft: '3px solid var(--color-hps-teal-dark)',
                  borderRadius: '2px',
                }}
              >
                <p
                  className="font-body font-medium mb-1"
                  style={{ fontSize: '0.9375rem', color: 'var(--color-hps-ink)' }}
                >
                  HPS Accessibility is live at hpsaccessibility.com.
                </p>
                <p
                  className="font-body mb-3"
                  style={{ fontSize: '0.8125rem', color: 'var(--color-hps-smoke)', lineHeight: 1.55 }}
                >
                  WCAG 2.2 A/AA audits, remediation guidance, and ongoing monitoring for web properties across all HPS-served industries.
                </p>
                <a
                  href="https://hpsaccessibility.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono uppercase"
                  style={{ fontSize: '0.62rem', letterSpacing: '0.18em', color: 'var(--color-hps-teal-dark)', textDecoration: 'none' }}
                >
                  Visit hpsaccessibility.com →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AccessibilityProofIntegration
