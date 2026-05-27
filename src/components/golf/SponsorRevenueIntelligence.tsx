// ── SponsorRevenueIntelligence ─────────────────────────────────────────────────
//
// Shows how physical golf signage connects to measurable sponsor intelligence.
// The operational flow: physical sign → QR scan → analytics → report → renewal.
//
// Visual register: premium golf operations, calm analytics, physical realism.
// Not a dashboard product pitch — an operational intelligence explanation.

// ── Flow visualization ─────────────────────────────────────────────────────────

const INTELLIGENCE_FLOW = [
  {
    n:     '01',
    label: 'Physical surface',
    desc:  'Sponsor plaque installed at the designated hole. UV-printed aluminum, weatherproof, QR code embedded in the surface design.',
    tag:   'On-course',
    color: 'var(--color-hps-green)',
  },
  {
    n:     '02',
    label: 'Golfer interaction',
    desc:  'Golfer scans the QR code during play. The destination — sponsor landing page, promotion, or digital experience — loads on their device.',
    tag:   'Engagement',
    color: 'var(--color-hps-teal)',
  },
  {
    n:     '03',
    label: 'Scan attribution',
    desc:  'HPS QR Code records the scan: timestamp, device type, hole location, and geographic context. Each surface is tracked independently.',
    tag:   'Analytics',
    color: 'var(--color-hps-teal-dark)',
  },
  {
    n:     '04',
    label: 'Monthly report',
    desc:  'The course receives a monthly sponsor engagement report. Per-hole scan volume, peak times, device breakdown, and trend comparison.',
    tag:   'Reporting',
    color: 'var(--color-hps-gold-rich)',
  },
  {
    n:     '05',
    label: 'Renewal decision',
    desc:  'Sponsor renewal is informed by actual engagement data — not estimated reach. High-performing holes command premium. Underperforming surfaces get repositioned.',
    tag:   'Intelligence',
    color: 'var(--color-hps-coral-warm)',
  },
]

// ── Sample report data ─────────────────────────────────────────────────────────
// Represents the kind of data a monthly sponsor report communicates.

const SAMPLE_REPORT_FIELDS = [
  { label: 'Reporting period',  value: 'Q1 2025 · Jan–Mar'             },
  { label: 'Total surfaces',    value: '18 holes · 24 sponsor plaques' },
  { label: 'Total scan events', value: 'Tracked via HPS QR Code'       },
  { label: 'Top-performing',    value: 'Hole 1, Hole 9, Hole 18'       },
  { label: 'Device breakdown',  value: 'iOS · Android · Web'           },
  { label: 'Destinations live', value: 'All 18 sponsor destinations'   },
  { label: 'Report format',     value: 'PDF + dashboard access'        },
]

// ── Main export ────────────────────────────────────────────────────────────────

export function SponsorRevenueIntelligence() {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--color-hps-cream)',
        borderTop: '1px solid rgba(200,180,154,0.28)',
      }}
    >
      {/* Golf morning atmosphere */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: [
            'radial-gradient(ellipse at 20% 20%, rgba(71,140,92,0.048) 0%, transparent 48%)',
            'radial-gradient(ellipse at 80% 75%, rgba(184,136,42,0.035) 0%, transparent 42%)',
          ].join(', '),
        }}
      />

      <div
        className="max-w-7xl mx-auto px-6 lg:px-10"
        style={{ position: 'relative', zIndex: 1, paddingTop: '4rem', paddingBottom: '5rem' }}
      >
        {/* Header */}
        <div data-reveal className="mb-12">
          <p
            className="font-mono uppercase mb-3"
            style={{ fontSize: '0.6rem', letterSpacing: '0.22em', color: 'var(--color-hps-gold-rich)' }}
          >
            Sponsor intelligence
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end">
            <div>
              <h2
                className="font-display mb-4"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.06 }}
              >
                Golf sponsorship becomes measurable infrastructure.
              </h2>
              <p
                className="font-body leading-relaxed"
                style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}
              >
                Every HPS Golf sponsor surface generates real engagement data. When a golfer scans the QR code
                on a hole sponsor plaque, that interaction is recorded and attributed to that specific surface.
                Monthly reports go to the course. Sponsors see actual engagement, not estimated impressions.
              </p>
            </div>
            {/* Sample report card */}
            <div data-reveal data-reveal-delay="80">
              <div
                style={{
                  background: 'var(--color-hps-parchment)',
                  border: '1px solid rgba(200,180,154,0.38)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                }}
              >
                <div style={{
                  padding: '0.55rem 0.875rem',
                  borderBottom: '1px solid rgba(200,180,154,0.22)',
                  background: 'rgba(200,180,154,0.06)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '0.46rem', letterSpacing: '0.18em', color: 'var(--color-hps-smoke)', textTransform: 'uppercase', opacity: 0.55 }}>
                    Sponsor Engagement Report · Sample Format
                  </span>
                  <span style={{ fontFamily: 'monospace', fontSize: '0.46rem', letterSpacing: '0.10em', color: 'rgba(71,140,92,0.80)' }}>
                    HPS Golf Systems
                  </span>
                </div>
                <div style={{ padding: '0.75rem 0.875rem' }}>
                  {SAMPLE_REPORT_FIELDS.map(f => (
                    <div
                      key={f.label}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '130px 1fr',
                        gap: '0.5rem',
                        padding: '0.3rem 0',
                        borderBottom: '1px solid rgba(200,180,154,0.18)',
                        alignItems: 'baseline',
                      }}
                    >
                      <span style={{ fontFamily: 'monospace', fontSize: '0.44rem', letterSpacing: '0.10em', color: 'var(--color-hps-smoke)', textTransform: 'uppercase', opacity: 0.55 }}>
                        {f.label}
                      </span>
                      <span style={{ fontFamily: 'monospace', fontSize: '0.52rem', letterSpacing: '0.04em', color: 'var(--color-hps-ink)' }}>
                        {f.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Intelligence flow */}
        <div>
          <p
            className="font-mono uppercase mb-6"
            style={{ fontSize: '0.55rem', letterSpacing: '0.20em', color: 'var(--color-hps-smoke)', opacity: 0.55 }}
          >
            Operational intelligence flow
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {INTELLIGENCE_FLOW.map((step, i) => (
              <div
                key={step.n}
                data-reveal
                data-reveal-delay={String(i * 60)}
                style={{
                  background: 'var(--color-hps-parchment)',
                  border: '1px solid rgba(200,180,154,0.32)',
                  borderTop: `3px solid ${step.color}`,
                  borderRadius: '2px',
                  padding: '0.875rem',
                  position: 'relative',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.6rem' }}>
                  <span style={{
                    fontFamily: 'monospace',
                    fontSize: '0.48rem',
                    letterSpacing: '0.12em',
                    color: step.color,
                    background: `${step.color}12`,
                    border: `1px solid ${step.color}28`,
                    padding: '0.08rem 0.38rem',
                    borderRadius: '1px',
                  }}>
                    {step.n}
                  </span>
                  <span style={{
                    fontFamily: 'monospace',
                    fontSize: '0.44rem',
                    letterSpacing: '0.10em',
                    color: step.color,
                    textTransform: 'uppercase',
                    opacity: 0.72,
                  }}>
                    {step.tag}
                  </span>
                </div>
                <p style={{
                  fontFamily: 'var(--font-display, serif)',
                  fontSize: '0.875rem',
                  color: 'var(--color-hps-ink)',
                  lineHeight: 1.2,
                  marginBottom: '0.45rem',
                }}>
                  {step.label}
                </p>
                <p style={{
                  fontFamily: 'var(--font-body, sans-serif)',
                  fontSize: '0.75rem',
                  color: 'var(--color-hps-smoke)',
                  lineHeight: 1.55,
                }}>
                  {step.desc}
                </p>
                {/* Flow arrow (not last item) */}
                {i < INTELLIGENCE_FLOW.length - 1 && (
                  <div
                    className="hidden sm:block"
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      top: '50%',
                      right: '-0.875rem',
                      transform: 'translateY(-50%)',
                      fontFamily: 'monospace',
                      fontSize: '0.55rem',
                      color: 'rgba(200,180,154,0.60)',
                      zIndex: 2,
                    }}
                  >
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SponsorRevenueIntelligence
