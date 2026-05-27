import { useParams, Link, Navigate } from 'react-router-dom'
import { getIndustry } from '../data/industries'
import { getPlatform } from '../data/platforms'
import CTABand from '../components/sections/CTABand'
import BackgroundAtmosphere from '../components/decorative/BackgroundAtmosphere'

export default function IndustryPage() {
  const { vertical } = useParams<{ vertical: string }>()
  const industry = vertical ? getIndustry(vertical) : undefined

  if (!industry) return <Navigate to="/ecosystems" replace />

  const stackPlatforms = industry.stack
    .map(slug => getPlatform(slug))
    .filter(Boolean) as NonNullable<ReturnType<typeof getPlatform>>[]

  return (
    <>
      <div style={{ position: 'relative', isolation: 'isolate' }}>
      <BackgroundAtmosphere mood="citrus" intensity="whisper" density="sparse" />
      {/* ── Header ──────────────────────────────────────────────────── */}
      <section
        className="pt-32 lg:pt-40 pb-16 lg:pb-20"
        style={{ background: 'var(--color-hps-cream)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="w-8 h-px mb-6" style={{ background: industry.accentColor }} aria-hidden="true" />
            <p
              className="font-mono uppercase mb-4"
              style={{ fontSize: '0.65rem', letterSpacing: '0.22em', color: industry.accentColor }}
            >
              {industry.eyebrow}
            </p>
            <h1
              data-reveal
              className="font-display mb-6"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', color: 'var(--color-hps-ink)', lineHeight: 1.05 }}
            >
              {industry.name}
            </h1>
            <p
              data-reveal
              data-reveal-delay="80"
              className="font-body leading-relaxed mb-3"
              style={{ fontSize: '1.125rem', color: 'var(--color-hps-smoke)', maxWidth: '38rem' }}
            >
              {industry.tagline}
            </p>
            <p
              data-reveal
              data-reveal-delay="160"
              className="font-body leading-relaxed"
              style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)', maxWidth: '38rem', opacity: 0.85 }}
            >
              {industry.description}
            </p>
          </div>
        </div>
      </section>

      {/* ── Pain Points ─────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-parchment)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-10">
            <p
              className="font-mono uppercase mb-3"
              style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: industry.accentColor }}
            >
              The common problems
            </p>
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)' }}
            >
              What gets in the way
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {industry.painPoints.map((point, i) => (
              <div
                key={i}
                data-reveal
                data-reveal-delay={String((i % 2) * 80)}
                className="flex items-start gap-4 p-5 rounded-sm"
                style={{
                  background: 'var(--color-hps-cream)',
                  border: '1px solid rgba(200,180,154,0.40)',
                }}
              >
                <div
                  className="shrink-0 w-1 self-stretch rounded-full"
                  style={{ background: industry.accentColor, opacity: 0.65 }}
                  aria-hidden="true"
                />
                <p
                  className="font-body leading-relaxed"
                  style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}
                >
                  {point}
                </p>
              </div>
            ))}
          </div>

          <div
            data-reveal
            className="mt-10 p-6 rounded-sm"
            style={{
              background: 'var(--color-hps-cream)',
              borderLeft: `4px solid ${industry.accentColor}`,
              border: '1px solid rgba(200,180,154,0.40)',
              borderLeftWidth: '4px',
            }}
          >
            <p
              className="font-body leading-relaxed"
              style={{ fontSize: '1rem', color: 'var(--color-hps-ink)' }}
            >
              {industry.solutionStatement}
            </p>
          </div>
        </div>
      </section>

      {/* ── Recommended Stack ───────────────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-10">
            <p
              className="font-mono uppercase mb-3"
              style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: industry.accentColor }}
            >
              HPS Platforms
            </p>
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)' }}
            >
              Recommended stack for {industry.name.toLowerCase()}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {stackPlatforms.map((platform, i) => (
              <Link
                key={platform.slug}
                to={`/platforms/${platform.slug}`}
                data-reveal
                data-reveal-delay={String((i % 3) * 60)}
                style={{ textDecoration: 'none' }}
              >
                <div
                  className="relative overflow-hidden rounded-sm h-full p-6 transition-all duration-300"
                  style={{
                    background: 'var(--color-hps-parchment)',
                    border: '1px solid rgba(200,180,154,0.40)',
                    borderLeft: `4px solid ${platform.accentColor}`,
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget
                    el.style.transform = 'translateY(-2px)'
                    el.style.boxShadow = '0 10px 28px -6px rgba(12,20,32,0.10)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget
                    el.style.transform = 'translateY(0)'
                    el.style.boxShadow = 'none'
                  }}
                >
                  <p
                    className="font-mono uppercase mb-1"
                    style={{ fontSize: '0.58rem', letterSpacing: '0.18em', color: platform.accentColor }}
                  >
                    {platform.eyebrow}
                  </p>
                  <h3
                    className="font-display mb-2"
                    style={{ fontSize: '1.125rem', color: 'var(--color-hps-ink)', lineHeight: 1.15 }}
                  >
                    {platform.name}
                  </h3>
                  <p
                    className="font-body text-sm leading-relaxed mb-4"
                    style={{ color: 'var(--color-hps-smoke)' }}
                  >
                    {platform.tagline}
                  </p>
                  <span
                    className="font-mono uppercase"
                    style={{ fontSize: '0.6rem', letterSpacing: '0.18em', color: platform.accentColor }}
                  >
                    View platform →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ecosystem Bridge ────────────────────────────────────────── */}
      <section className="py-14 lg:py-18 border-t" style={{ background: 'var(--color-hps-parchment)', borderColor: 'rgba(200,180,154,0.40)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">

            <div data-reveal>
              <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: industry.accentColor }}>
                How the systems connect
              </p>
              <h2 className="font-display" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
                Ecosystem integration.
              </h2>
            </div>

            <div data-reveal data-reveal-delay="80">
              <p className="font-body leading-relaxed mb-6" style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)', lineHeight: 1.75 }}>
                {industry.ecosystemBridge}
              </p>
              <div className="flex flex-wrap gap-2">
                {industry.stack.slice(0, 4).map(slug => {
                  const p = stackPlatforms.find(sp => sp.slug === slug)
                  if (!p) return null
                  return (
                    <Link
                      key={slug}
                      to={`/platforms/${slug}`}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.58rem',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        padding: '0.375rem 0.75rem',
                        background: 'var(--color-hps-cream)',
                        color: 'var(--color-hps-smoke)',
                        border: '1px solid rgba(200,180,154,0.55)',
                        borderRadius: '2px',
                        textDecoration: 'none',
                        transition: 'border-color 0.15s, color 0.15s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = industry.accentColor; e.currentTarget.style.color = 'var(--color-hps-ink)' }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(200,180,154,0.55)'; e.currentTarget.style.color = 'var(--color-hps-smoke)' }}
                    >
                      {p.name}
                    </Link>
                  )
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Workflow ─────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-parchment)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-10">
            <p
              className="font-mono uppercase mb-3"
              style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: industry.accentColor }}
            >
              How it comes together
            </p>
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)' }}
            >
              Operational pathway
            </h2>
          </div>

          <div className="flex flex-col gap-0">
            {industry.workflowSteps.map((step, i, arr) => (
              <div
                key={step.n}
                data-reveal
                data-reveal-delay={String((i % 3) * 60)}
                className="grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-4 lg:gap-12 py-8"
                style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(200,180,154,0.40)' : 'none' }}
              >
                <div className="flex items-start gap-4 lg:flex-col lg:gap-2">
                  <span
                    className="font-mono shrink-0"
                    style={{ fontSize: '1.5rem', color: industry.accentColor, lineHeight: 1, opacity: 0.35 }}
                    aria-hidden="true"
                  >
                    {step.n}
                  </span>
                  <p
                    className="font-display"
                    style={{ fontSize: '1rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}
                  >
                    {step.step}
                  </p>
                </div>
                <p
                  className="font-body leading-relaxed"
                  style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Launch Gateway ──────────────────────────────────────────── */}
      <section className="py-14 lg:py-18" style={{ background: 'var(--color-hps-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-8">
            <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: industry.accentColor }}>
              Ready to start
            </p>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
              Launch this ecosystem.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {industry.launchCTAs.map((cta, i) => (
              cta.external ? (
                <a
                  key={cta.href}
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-reveal
                  data-reveal-delay={String(i * 60)}
                  style={{
                    display: 'block',
                    padding: '1.25rem',
                    background: 'var(--color-hps-parchment)',
                    border: '1px solid rgba(200,180,154,0.40)',
                    borderTop: `3px solid ${industry.accentColor}`,
                    borderRadius: '2px',
                    textDecoration: 'none',
                    transition: 'box-shadow 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 6px 20px rgba(12,20,32,0.08)')}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
                >
                  <p className="font-display mb-1" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}>{cta.label} <span style={{ fontSize: '0.7rem', opacity: 0.55 }}>↗</span></p>
                  <p className="font-body" style={{ fontSize: '0.8125rem', color: 'var(--color-hps-smoke)', lineHeight: 1.55 }}>{cta.desc}</p>
                </a>
              ) : (
                <Link
                  key={cta.href}
                  to={cta.href}
                  data-reveal
                  data-reveal-delay={String(i * 60)}
                  style={{
                    display: 'block',
                    padding: '1.25rem',
                    background: 'var(--color-hps-parchment)',
                    border: '1px solid rgba(200,180,154,0.40)',
                    borderTop: `3px solid ${industry.accentColor}`,
                    borderRadius: '2px',
                    textDecoration: 'none',
                    transition: 'box-shadow 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 6px 20px rgba(12,20,32,0.08)')}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
                >
                  <p className="font-display mb-1" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}>{cta.label} <span style={{ fontSize: '0.7rem', opacity: 0.45 }}>→</span></p>
                  <p className="font-body" style={{ fontSize: '0.8125rem', color: 'var(--color-hps-smoke)', lineHeight: 1.55 }}>{cta.desc}</p>
                </Link>
              )
            ))}
          </div>
        </div>
      </section>

      {/* ── Back nav ────────────────────────────────────────────────── */}
      <section className="py-10" style={{ background: 'var(--color-hps-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center gap-8">
          <Link
            to="/ecosystems"
            className="font-mono transition-colors duration-200"
            style={{ fontSize: '0.75rem', letterSpacing: '0.12em', color: 'var(--color-hps-smoke)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-hps-ink)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-hps-smoke)')}
          >
            ← All Ecosystems
          </Link>
          <Link
            to="/platforms"
            className="font-mono transition-colors duration-200"
            style={{ fontSize: '0.75rem', letterSpacing: '0.12em', color: 'var(--color-hps-smoke)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-hps-ink)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-hps-smoke)')}
          >
            All Platforms →
          </Link>
        </div>
      </section>

      </div>{/* end atmosphere wrapper */}

      <CTABand
        headline={`Ready to build the ${industry.name} ecosystem?`}
        subhead="Start with a free consultation. We'll map the right platforms to your specific operation."
        buttonText="Free Consultation"
        buttonHref="/contact"
        showPhone
      />
    </>
  )
}
