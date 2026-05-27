// ── SponsorSignageProofLayer ───────────────────────────────────────────────────
//
// Sponsor signage as a managed revenue system, not a print job.
// Shows the full operational loop from sponsor intake to renewal — with
// fabrication, installation, QR engagement, and analytics at each stage.
//
// Use within HPSGolfPage to demonstrate sponsor system depth.
// Data-driven: all phase definitions live in SPONSOR_LIFECYCLE.

import { OperationalPhoto } from '../proof/PhotographyIntegrationFramework'
import type { PhotoEnvironment } from '../proof/PhotographyIntegrationFramework'

// ── Lifecycle phase definitions ────────────────────────────────────────────────

interface SponsorPhase {
  n:        string
  label:    string
  tag:      string
  desc:     string
  delivers: string[]
  env:      PhotoEnvironment
  accent:   string
}

const SPONSOR_LIFECYCLE: SponsorPhase[] = [
  {
    n: '01',
    label: 'Sponsor intake',
    tag: 'Discovery',
    desc: 'Sponsor details documented: logo assets, preferred hole, business category, primary URL, contract term, and optional QR destination. Design brief generated from this intake.',
    delivers: ['Sponsor design brief', 'Hole assignment record', 'Asset intake checklist'],
    env: 'hospitality',
    accent: 'var(--color-hps-gold-rich)',
  },
  {
    n: '02',
    label: 'Design & proof',
    tag: 'Fabrication prep',
    desc: 'Sponsor artwork adapted to the physical surface specification: plaque dimensions, font hierarchy, logo placement, QR position, and material finish. Proof delivered for sign-off before production begins.',
    delivers: ['Surface proof PDF', 'QR placement spec', 'Material finish selection'],
    env: 'fabrication',
    accent: 'var(--color-hps-coral-warm)',
  },
  {
    n: '03',
    label: 'Fabrication',
    tag: 'Production',
    desc: 'Sponsor plaque produced in-house: UV-printed identity layer, fiber or CO₂ laser engraving where specified, UV varnish seal coat applied, QR code printed at final output pass. Production batch timed to course installation date.',
    delivers: ['Completed sponsor plaque', 'QR code applied at output', 'UV varnish sealed'],
    env: 'fabrication',
    accent: 'var(--color-hps-coral-warm)',
  },
  {
    n: '04',
    label: 'Physical installation',
    tag: 'On-course',
    desc: 'Sponsor plaque mounted at the specified hole location using stainless hardware rated for outdoor exposure. Tee box, fairway marker, cart path, or clubhouse placement. Level and alignment checked per-hole before sign-off.',
    delivers: ['Installed surface', 'Per-hole photo documentation', 'Stainless hardware spec'],
    env: 'golf',
    accent: 'var(--color-hps-green)',
  },
  {
    n: '05',
    label: 'QR engagement live',
    tag: 'Activation',
    desc: 'QR destination activated in HPS QR Code. Scan tracking begins from first interaction. Every scan is timestamped, attributed to the specific hole and surface, and logged to the sponsor\'s report.',
    delivers: ['Live QR destination', 'Scan tracking active', 'Sponsor dashboard entry'],
    env: 'golf',
    accent: 'var(--color-hps-teal-dark)',
  },
  {
    n: '06',
    label: 'Reporting & renewal',
    tag: 'Intelligence',
    desc: 'Monthly engagement report delivered to the course. Scan volume, peak times, device breakdown, and trend data per hole. Renewal decision informed by actual performance — not estimated impressions.',
    delivers: ['Monthly engagement report', 'Per-hole scan data', 'Renewal recommendation'],
    env: 'hospitality',
    accent: 'var(--color-hps-gold-rich)',
  },
]

// ── Lifecycle state indicators ─────────────────────────────────────────────────

const LIFECYCLE_STATES = [
  { state: 'Prospect',    color: 'rgba(184,136,42,1)' },
  { state: 'Production',  color: 'rgba(248,114,57,1)' },
  { state: 'Installed',   color: 'rgba(13,148,136,1)' },
  { state: 'Active',      color: 'rgba(71,140,92,1)'  },
  { state: 'Reporting',   color: 'rgba(71,140,92,1)'  },
  { state: 'Renewal',     color: 'rgba(184,136,42,1)' },
]

// ── Main export ────────────────────────────────────────────────────────────────

export function SponsorSignageProofLayer() {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--color-hps-parchment)',
        borderTop: '1px solid rgba(200,180,154,0.28)',
      }}
    >
      {/* Atmosphere: warm gold course morning */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: [
            'radial-gradient(ellipse at 25% 15%, rgba(184,136,42,0.06) 0%, transparent 50%)',
            'radial-gradient(ellipse at 80% 80%, rgba(71,140,92,0.04) 0%, transparent 45%)',
          ].join(', '),
        }}
      />

      <div
        className="max-w-7xl mx-auto px-6 lg:px-10"
        style={{ position: 'relative', zIndex: 1, paddingTop: '4rem', paddingBottom: '5rem' }}
      >
        {/* Section header */}
        <div data-reveal className="mb-3">
          <p
            className="font-mono uppercase mb-3"
            style={{ fontSize: '0.6rem', letterSpacing: '0.22em', color: 'var(--color-hps-gold-rich)' }}
          >
            Sponsor revenue system
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-10">
            <div>
              <h2
                className="font-display mb-4"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.06 }}
              >
                Sponsor signage is not a print job.
              </h2>
              <p
                className="font-body leading-relaxed"
                style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}
              >
                A hole sponsorship with HPS is a managed engagement loop. The physical surface is fabricated
                and installed. The QR code is linked to a live destination. Scan data comes in. Monthly reports
                go out. The sponsor sees real numbers — not estimated eyeballs.
              </p>
            </div>
            {/* Lifecycle state strip */}
            <div>
              <p
                className="font-mono uppercase mb-3"
                style={{ fontSize: '0.50rem', letterSpacing: '0.18em', color: 'var(--color-hps-smoke)', opacity: 0.55 }}
              >
                Sponsor surface lifecycle states
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                {LIFECYCLE_STATES.map((ls, i) => (
                  <div
                    key={ls.state}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: '0.22rem 0.55rem',
                      border: `1px solid ${ls.color.replace('1)', '0.25)')}`,
                      background: ls.color.replace('1)', '0.07)'),
                      borderRadius: '1px',
                    }}
                  >
                    <div style={{ width: 5, height: 5, borderRadius: '50%', background: ls.color }} />
                    <span style={{
                      fontFamily: 'monospace',
                      fontSize: '0.50rem',
                      letterSpacing: '0.10em',
                      color: 'var(--color-hps-ink)',
                      textTransform: 'uppercase',
                    }}>
                      {i + 1}. {ls.state}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Lifecycle phases grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          style={{ marginBottom: '3rem' }}
        >
          {SPONSOR_LIFECYCLE.map((phase, i) => (
            <div
              key={phase.n}
              data-reveal
              data-reveal-delay={String((i % 3) * 70)}
              style={{
                background: 'var(--color-hps-cream)',
                border: '1px solid rgba(200,180,154,0.35)',
                borderTop: `3px solid ${phase.accent}`,
                borderRadius: '2px',
                overflow: 'hidden',
              }}
            >
              {/* Phase header */}
              <div style={{
                padding: '0.75rem 1rem 0.6rem',
                borderBottom: '1px solid rgba(200,180,154,0.22)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{
                    fontFamily: 'monospace',
                    fontSize: '0.50rem',
                    letterSpacing: '0.12em',
                    color: phase.accent,
                    background: `${phase.accent}12`,
                    border: `1px solid ${phase.accent}28`,
                    padding: '0.1rem 0.42rem',
                    borderRadius: '1px',
                  }}>
                    {phase.n}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-display, serif)',
                    fontSize: '0.9375rem',
                    color: 'var(--color-hps-ink)',
                    lineHeight: 1.2,
                  }}>
                    {phase.label}
                  </span>
                </div>
                <span style={{
                  fontFamily: 'monospace',
                  fontSize: '0.46rem',
                  letterSpacing: '0.10em',
                  color: 'var(--color-hps-smoke)',
                  opacity: 0.50,
                  textTransform: 'uppercase',
                }}>
                  {phase.tag}
                </span>
              </div>

              {/* Phase image placeholder */}
              <OperationalPhoto
                environment={phase.env}
                aspect="16/9"
                accentColor={phase.accent}
              />

              {/* Phase content */}
              <div style={{ padding: '0.875rem 1rem' }}>
                <p style={{
                  fontFamily: 'var(--font-body, sans-serif)',
                  fontSize: '0.8125rem',
                  color: 'var(--color-hps-smoke)',
                  lineHeight: 1.6,
                  marginBottom: '0.75rem',
                }}>
                  {phase.desc}
                </p>

                {/* Deliverables */}
                <div style={{ borderTop: '1px solid rgba(200,180,154,0.22)', paddingTop: '0.6rem' }}>
                  <p style={{
                    fontFamily: 'monospace',
                    fontSize: '0.46rem',
                    letterSpacing: '0.14em',
                    color: 'var(--color-hps-smoke)',
                    textTransform: 'uppercase',
                    opacity: 0.55,
                    marginBottom: '0.4rem',
                  }}>
                    Delivered at this phase
                  </p>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                    {phase.delivers.map(d => (
                      <li
                        key={d}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.4rem',
                          fontFamily: 'var(--font-body, sans-serif)',
                          fontSize: '0.78rem',
                          color: 'var(--color-hps-smoke)',
                          lineHeight: 1.4,
                        }}
                      >
                        <span
                          style={{
                            width: 4,
                            height: 4,
                            borderRadius: '50%',
                            background: phase.accent,
                            flexShrink: 0,
                            marginTop: '0.3rem',
                          }}
                          aria-hidden="true"
                        />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom operational summary */}
        <div
          data-reveal
          className="flex flex-col sm:flex-row gap-4"
        >
          {[
            { value: '18+', label: 'Sponsor surfaces per full-course deployment' },
            { value: '6',   label: 'Operational phases per sponsor engagement' },
            { value: '1',   label: 'Report per month per deployed course'       },
          ].map(s => (
            <div
              key={s.label}
              style={{
                flex: 1,
                padding: '1rem 1.25rem',
                background: 'rgba(184,136,42,0.06)',
                border: '1px solid rgba(184,136,42,0.20)',
                borderRadius: '2px',
              }}
            >
              <p style={{
                fontFamily: 'monospace',
                fontSize: '1.5rem',
                color: 'var(--color-hps-gold-rich)',
                lineHeight: 1,
                marginBottom: '0.3rem',
              }}>
                {s.value}
              </p>
              <p style={{
                fontFamily: 'monospace',
                fontSize: '0.55rem',
                letterSpacing: '0.12em',
                color: 'var(--color-hps-smoke)',
                textTransform: 'uppercase',
                lineHeight: 1.4,
                opacity: 0.72,
              }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SponsorSignageProofLayer
