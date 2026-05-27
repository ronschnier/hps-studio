// ── ProductionCaseStudyTemplate ────────────────────────────────────────────────
//
// Structured case study format for HPS ecosystem work.
// Each case study combines physical production, digital systems, and outcomes
// into one editorial-but-operational proof document.
//
// Not a generic agency case study — each section is grounded in
// specific operational context, materials, and measurable outcome.
//
// Props: CaseStudyData — all content is data-driven for reuse.
// Use: pass this component a CaseStudy object and it renders a full layout.

import { OperationalPhoto } from './PhotographyIntegrationFramework'
import {
  BeforeAfterPanel,
  EvidenceCallout,
  type EvidenceFrame,
} from './RealityAmplificationFramework'
import type { PhotoEnvironment, PhotoAspect } from './PhotographyIntegrationFramework'

// ── Types ──────────────────────────────────────────────────────────────────────

export type CaseStudyCategory =
  | 'fabrication'
  | 'golf-signage'
  | 'accessibility'
  | 'hospitality'
  | 'platform'
  | 'ai-workflow'
  | 'sponsor-system'

export interface CaseStudyPhotoSlot {
  purpose:     string
  environment: PhotoEnvironment
  aspect:      PhotoAspect
  src?:        string
  alt?:        string
  caption?:    string
}

export interface CaseStudyData {
  id:          string
  category:    CaseStudyCategory
  title:       string
  client:      string           // "Golf course, Lake County, FL" — context, not name
  overview:    string
  challenge:   string
  approach:    string
  systems:     string[]
  materials?:  string[]
  process?:    string[]         // 3–5 key process steps as short phrases
  outcome:     string
  metrics?:    { value: string; label: string }[]
  accessibility?: string       // only if relevant
  heroPhoto?:  CaseStudyPhotoSlot
  midPhoto?:   CaseStudyPhotoSlot
  beforeAfter?: { before: EvidenceFrame; after: EvidenceFrame; context?: string }
  callouts?:   { label: string; detail: string; tags?: string[] }[]
  accentColor: string
  relatedPaths?: { label: string; href: string }[]
}

// ── Category labels ────────────────────────────────────────────────────────────

const CATEGORY_LABELS: Record<CaseStudyCategory, string> = {
  'fabrication':    'Fabrication',
  'golf-signage':   'Golf Signage',
  'accessibility':  'Accessibility',
  'hospitality':    'Hospitality',
  'platform':       'Platform',
  'ai-workflow':    'AI Workflow',
  'sponsor-system': 'Sponsor System',
}

// ── Section header ─────────────────────────────────────────────────────────────

function SectionLabel({ label, accent }: { label: string; accent: string }) {
  return (
    <p
      className="font-mono uppercase mb-3"
      style={{ fontSize: '0.55rem', letterSpacing: '0.22em', color: accent, opacity: 0.85 }}
    >
      {label}
    </p>
  )
}

// ── Main component ─────────────────────────────────────────────────────────────

export function ProductionCaseStudy({ study }: { study: CaseStudyData }) {
  const { accentColor } = study

  return (
    <article>
      {/* ── Case study header ── */}
      <header
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'var(--color-hps-parchment)',
          borderBottom: '1px solid rgba(200,180,154,0.28)',
          paddingBottom: '3rem',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background: [
              `radial-gradient(ellipse at 80% 20%, ${accentColor.replace('var(--color-hps-', 'rgba(').replace(')', ',0.055)')} 0%, transparent 50%)`,
              'radial-gradient(ellipse at 10% 80%, rgba(200,180,154,0.03) 0%, transparent 40%)',
            ].join(', '),
          }}
        />
        <div
          className="max-w-7xl mx-auto px-6 lg:px-10"
          style={{ position: 'relative', zIndex: 1, paddingTop: '3.5rem' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <div data-reveal>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <span style={{
                    fontFamily: 'monospace',
                    fontSize: '0.50rem',
                    letterSpacing: '0.14em',
                    color: accentColor,
                    background: `${accentColor}12`,
                    border: `1px solid ${accentColor}28`,
                    padding: '0.12rem 0.5rem',
                    borderRadius: '1px',
                    textTransform: 'uppercase',
                  }}>
                    {CATEGORY_LABELS[study.category]}
                  </span>
                  <span style={{
                    fontFamily: 'monospace',
                    fontSize: '0.46rem',
                    letterSpacing: '0.10em',
                    color: 'var(--color-hps-smoke)',
                    opacity: 0.55,
                  }}>
                    {study.client}
                  </span>
                </div>
                <h1
                  className="font-display mb-5"
                  style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: 'var(--color-hps-ink)', lineHeight: 1.04 }}
                >
                  {study.title}
                </h1>
                <p
                  className="font-body leading-relaxed"
                  style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)', maxWidth: '50ch' }}
                >
                  {study.overview}
                </p>
              </div>

              {/* Metrics */}
              {study.metrics && study.metrics.length > 0 && (
                <div
                  data-reveal
                  data-reveal-delay="80"
                  className="grid grid-cols-3 sm:grid-cols-3 gap-4 mt-8 pt-8"
                  style={{ borderTop: '1px solid rgba(200,180,154,0.30)' }}
                >
                  {study.metrics.map(m => (
                    <div key={m.label}>
                      <p style={{
                        fontFamily: 'monospace',
                        fontSize: '1.5rem',
                        color: accentColor,
                        lineHeight: 1,
                        marginBottom: '0.3rem',
                      }}>
                        {m.value}
                      </p>
                      <p style={{
                        fontFamily: 'monospace',
                        fontSize: '0.52rem',
                        letterSpacing: '0.12em',
                        color: 'var(--color-hps-smoke)',
                        textTransform: 'uppercase',
                        lineHeight: 1.4,
                        opacity: 0.65,
                      }}>
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Hero photo */}
            {study.heroPhoto && (
              <div data-reveal data-reveal-delay="60">
                <OperationalPhoto
                  src={study.heroPhoto.src}
                  alt={study.heroPhoto.alt}
                  environment={study.heroPhoto.environment}
                  aspect={study.heroPhoto.aspect}
                  caption={study.heroPhoto.caption}
                  accentColor={accentColor}
                />
              </div>
            )}
          </div>
        </div>
      </header>

      {/* ── Challenge + Approach ── */}
      <section style={{ background: 'var(--color-hps-cream)', borderBottom: '1px solid rgba(200,180,154,0.28)' }}>
        <div
          className="max-w-7xl mx-auto px-6 lg:px-10"
          style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div data-reveal>
              <SectionLabel label="The challenge" accent={accentColor} />
              <p
                className="font-body leading-relaxed"
                style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}
              >
                {study.challenge}
              </p>
            </div>
            <div data-reveal data-reveal-delay="60">
              <SectionLabel label="The approach" accent={accentColor} />
              <p
                className="font-body leading-relaxed mb-4"
                style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}
              >
                {study.approach}
              </p>
              {/* Process steps */}
              {study.process && study.process.length > 0 && (
                <ol style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {study.process.map((step, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        fontFamily: 'var(--font-body, sans-serif)',
                        fontSize: '0.875rem',
                        color: 'var(--color-hps-smoke)',
                        lineHeight: 1.5,
                      }}
                    >
                      <span style={{
                        fontFamily: 'monospace',
                        fontSize: '0.50rem',
                        letterSpacing: '0.12em',
                        color: accentColor,
                        background: `${accentColor}12`,
                        border: `1px solid ${accentColor}28`,
                        padding: '0.1rem 0.4rem',
                        borderRadius: '1px',
                        flexShrink: 0,
                        marginTop: '0.2rem',
                      }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Systems + materials ── */}
      <section style={{ background: 'var(--color-hps-parchment)', borderBottom: '1px solid rgba(200,180,154,0.28)' }}>
        <div
          className="max-w-7xl mx-auto px-6 lg:px-10"
          style={{ paddingTop: '3rem', paddingBottom: '3rem' }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div data-reveal>
              <SectionLabel label="Systems used" accent={accentColor} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {study.systems.map(s => (
                  <div
                    key={s}
                    style={{
                      padding: '0.5rem 0.75rem',
                      borderLeft: `2px solid ${accentColor}`,
                      background: `${accentColor}06`,
                    }}
                  >
                    <span style={{ fontFamily: 'var(--font-body, sans-serif)', fontSize: '0.875rem', color: 'var(--color-hps-ink)' }}>
                      {s}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {study.materials && study.materials.length > 0 && (
              <div data-reveal data-reveal-delay="60">
                <SectionLabel label="Materials used" accent={accentColor} />
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {study.materials.map(m => (
                    <span
                      key={m}
                      style={{
                        fontFamily: 'monospace',
                        fontSize: '0.52rem',
                        letterSpacing: '0.10em',
                        color: 'var(--color-hps-smoke)',
                        background: 'rgba(200,180,154,0.14)',
                        border: '1px solid rgba(200,180,154,0.32)',
                        padding: '0.18rem 0.5rem',
                        borderRadius: '1px',
                      }}
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Mid-project photo ── */}
      {study.midPhoto && (
        <div data-reveal>
          <OperationalPhoto
            src={study.midPhoto.src}
            alt={study.midPhoto.alt}
            environment={study.midPhoto.environment}
            aspect={study.midPhoto.aspect}
            caption={study.midPhoto.caption}
            accentColor={accentColor}
          />
        </div>
      )}

      {/* ── Before/After ── */}
      {study.beforeAfter && (
        <section style={{ background: 'var(--color-hps-cream)', borderBottom: '1px solid rgba(200,180,154,0.28)' }}>
          <div
            className="max-w-7xl mx-auto px-6 lg:px-10"
            style={{ paddingTop: '3rem', paddingBottom: '3rem' }}
          >
            <BeforeAfterPanel
              before={study.beforeAfter.before}
              after={study.beforeAfter.after}
              headline="Before and after deployment."
              context={study.beforeAfter.context}
              accentColor={accentColor}
            />
          </div>
        </section>
      )}

      {/* ── Outcome ── */}
      <section style={{ background: 'var(--color-hps-parchment)', borderBottom: '1px solid rgba(200,180,154,0.28)' }}>
        <div
          className="max-w-7xl mx-auto px-6 lg:px-10"
          style={{ paddingTop: '3rem', paddingBottom: '3rem' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div data-reveal>
              <SectionLabel label="Operational outcome" accent={accentColor} />
              <p
                className="font-body leading-relaxed"
                style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}
              >
                {study.outcome}
              </p>
              {study.accessibility && (
                <p
                  className="font-body leading-relaxed mt-4"
                  style={{ fontSize: '0.875rem', color: 'var(--color-hps-smoke)', opacity: 0.85 }}
                >
                  {study.accessibility}
                </p>
              )}
            </div>
            {/* Evidence callouts */}
            {study.callouts && study.callouts.length > 0 && (
              <div data-reveal data-reveal-delay="60" className="flex flex-col gap-3">
                {study.callouts.map((c, i) => (
                  <EvidenceCallout
                    key={i}
                    label={c.label}
                    detail={c.detail}
                    tags={c.tags}
                    accentColor={accentColor}
                    revealDelay={i * 60}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Related paths ── */}
      {study.relatedPaths && study.relatedPaths.length > 0 && (
        <section style={{ background: 'var(--color-hps-cream)' }}>
          <div
            className="max-w-7xl mx-auto px-6 lg:px-10"
            style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem' }}
          >
            <div data-reveal className="flex flex-wrap gap-3">
              {study.relatedPaths.map(p => (
                <a
                  key={p.href}
                  href={p.href}
                  className="font-mono uppercase"
                  style={{
                    fontSize: '0.60rem',
                    letterSpacing: '0.18em',
                    color: accentColor,
                    textDecoration: 'none',
                    border: `1px solid ${accentColor}30`,
                    padding: '0.4rem 0.8rem',
                    borderRadius: '1px',
                  }}
                >
                  {p.label} →
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  )
}

export default ProductionCaseStudy
