import { useParams, Link, Navigate } from 'react-router-dom'
import { getService } from '../data/services'
import { getServiceExtended } from '../data/servicesExtended'
import CTABand from '../components/sections/CTABand'
import BackgroundAtmosphere from '../components/decorative/BackgroundAtmosphere'
import type { Service } from '../data/types'

const categoryLabels: Record<string, string> = {
  digital: 'Digital',
  'brand-media': 'Brand & Media',
  fabrication: 'Fabrication',
  connected: 'Connected Systems',
}

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? getService(slug) : undefined
  const extended = slug ? getServiceExtended(slug) : undefined

  if (!service) return <Navigate to="/services" replace />

  const relatedServices: Service[] = service.relatedServices
    .map(s => getService(s))
    .filter((s): s is Service => s !== undefined)

  return (
    <>
      <div style={{ position: 'relative', isolation: 'isolate' }}>
      <BackgroundAtmosphere mood="citrus" intensity="whisper" density="sparse" />
      {/* ── Page Header ─────────────────────────────────────────────── */}
      <section
        className="pt-32 lg:pt-40 pb-16 lg:pb-20"
        style={{ background: 'var(--color-hps-cream)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <div
              className="w-8 h-px mb-6"
              style={{ background: service.accentColor }}
              aria-hidden="true"
            />
            <p
              className="font-mono uppercase mb-4"
              style={{ fontSize: '0.65rem', letterSpacing: '0.22em', color: service.accentColor }}
            >
              {service.eyebrow} · {categoryLabels[service.category]}
            </p>
            <h1
              data-reveal
              className="font-display mb-6"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', color: 'var(--color-hps-ink)', lineHeight: 1.05 }}
            >
              {service.name}
            </h1>
            <p
              data-reveal
              data-reveal-delay="80"
              className="font-body leading-relaxed mb-3"
              style={{ fontSize: '1.125rem', color: 'var(--color-hps-smoke)', maxWidth: '38rem' }}
            >
              {service.tagline}
            </p>
            <p
              data-reveal
              data-reveal-delay="160"
              className="font-body leading-relaxed"
              style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)', maxWidth: '38rem', opacity: 0.85 }}
            >
              {service.positioning}
            </p>
          </div>
        </div>
      </section>

      {/* ── Who It Is For + What It Does ────────────────────────────── */}
      <section
        className="py-16 lg:py-24"
        style={{ background: 'var(--color-hps-parchment)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div data-reveal>
              <p
                className="font-mono uppercase mb-4"
                style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: service.accentColor }}
              >
                Who it is for
              </p>
              <p
                className="font-body leading-relaxed"
                style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)' }}
              >
                {service.whoItIsFor}
              </p>
            </div>
            <div data-reveal data-reveal-delay="80">
              <p
                className="font-mono uppercase mb-4"
                style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: service.accentColor }}
              >
                What we do
              </p>
              <p
                className="font-body leading-relaxed"
                style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)' }}
              >
                {service.whatItDoes}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-10">
            <p
              className="font-mono uppercase mb-3"
              style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: service.accentColor }}
            >
              What's included
            </p>
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)' }}
            >
              {service.name} deliverables
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, i) => (
              <div
                key={feature.name}
                data-reveal
                data-reveal-delay={String((i % 3) * 80)}
                className="rounded-sm p-6"
                style={{
                  background: 'var(--color-hps-parchment)',
                  border: '1px solid rgba(200,180,154,0.40)',
                }}
              >
                <div
                  className="w-5 h-px mb-4"
                  style={{ background: service.accentColor }}
                  aria-hidden="true"
                />
                <h3
                  className="font-display mb-2"
                  style={{ fontSize: '1.125rem', color: 'var(--color-hps-ink)' }}
                >
                  {feature.name}
                </h3>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: 'var(--color-hps-smoke)' }}
                >
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What It Solves ──────────────────────────────────────────── */}
      {extended?.whatItSolves && extended.whatItSolves.length > 0 && (
        <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-parchment)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div data-reveal className="mb-10">
              <p
                className="font-mono uppercase mb-3"
                style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: service.accentColor }}
              >
                The problem it addresses
              </p>
              <h2
                className="font-display"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)' }}
              >
                What {service.name} solves
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {extended.whatItSolves.map((point, i) => (
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
                    className="shrink-0 w-1 self-stretch rounded-full mt-1"
                    style={{ background: service.accentColor }}
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
          </div>
        </section>
      )}

      {/* ── Delivery Workflow ───────────────────────────────────────── */}
      {extended?.deliveryFlow && extended.deliveryFlow.length > 0 && (
        <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-cream)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div data-reveal className="mb-10">
              <p
                className="font-mono uppercase mb-3"
                style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: service.accentColor }}
              >
                How we deliver it
              </p>
              <h2
                className="font-display"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)' }}
              >
                Delivery workflow
              </h2>
            </div>

            <div className="flex flex-col gap-0">
              {extended.deliveryFlow.map((step, i, arr) => (
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
                      style={{ fontSize: '1.5rem', color: service.accentColor, lineHeight: 1, opacity: 0.35 }}
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
      )}

      {/* ── Connected Ecosystem ─────────────────────────────────────── */}
      {service.ecosystemLinks.length > 0 && (
        <section
          className="py-16 lg:py-20"
          style={{ background: 'var(--color-hps-parchment)' }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div data-reveal className="mb-10">
              <p
                className="font-mono uppercase mb-3"
                style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: service.accentColor }}
              >
                HPS Ecosystem
              </p>
              <h2
                className="font-display"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)' }}
              >
                Connected platforms & services
              </h2>
            </div>

            <div className="flex flex-col gap-3 max-w-2xl">
              {service.ecosystemLinks.map((link, i) => (
                <Link
                  key={link.href}
                  to={link.href}
                  data-reveal
                  data-reveal-delay={String(i * 60)}
                  className="group flex items-start gap-5 p-5 rounded-sm transition-all duration-200"
                  style={{
                    background: 'var(--color-hps-cream)',
                    border: '1px solid rgba(200,180,154,0.40)',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = service.accentColor
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(12,20,32,0.07)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(200,180,154,0.40)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <div
                    className="w-1 self-stretch rounded-full shrink-0 mt-1"
                    style={{ background: service.accentColor }}
                    aria-hidden="true"
                  />
                  <div>
                    <p
                      className="font-body font-medium mb-0.5"
                      style={{ fontSize: '0.9375rem', color: 'var(--color-hps-ink)' }}
                    >
                      {link.label}
                    </p>
                    <p
                      className="font-body text-sm"
                      style={{ color: 'var(--color-hps-smoke)' }}
                    >
                      {link.rel}
                    </p>
                  </div>
                  <span
                    className="ml-auto self-center font-mono transition-transform duration-200 group-hover:translate-x-1"
                    style={{ fontSize: '0.75rem', color: service.accentColor }}
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Related Services ────────────────────────────────────────── */}
      {relatedServices.length > 0 && (
        <section className="py-16 lg:py-20" style={{ background: 'var(--color-hps-parchment)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div data-reveal className="mb-10">
              <p
                className="font-mono uppercase mb-3"
                style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: service.accentColor }}
              >
                Often paired with
              </p>
              <h2
                className="font-display"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)' }}
              >
                Related services
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedServices.map((rel, i) => (
                <Link
                  key={rel.slug}
                  to={`/services/${rel.slug}`}
                  data-reveal
                  data-reveal-delay={String((i % 3) * 60)}
                  className="group rounded-sm p-5 transition-all duration-200"
                  style={{
                    background: 'var(--color-hps-cream)',
                    border: '1px solid rgba(200,180,154,0.40)',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = rel.accentColor
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(12,20,32,0.07)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(200,180,154,0.40)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <div
                    className="w-5 h-px mb-3"
                    style={{ background: rel.accentColor }}
                    aria-hidden="true"
                  />
                  <p
                    className="font-display mb-1.5 group-hover:underline"
                    style={{ fontSize: '1rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}
                  >
                    {rel.name}
                  </p>
                  <p
                    className="font-body text-sm leading-relaxed"
                    style={{ color: 'var(--color-hps-smoke)' }}
                  >
                    {rel.tagline}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Back nav ────────────────────────────────────────────────── */}
      <section className="py-10" style={{ background: 'var(--color-hps-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Link
            to="/services"
            className="font-mono transition-colors duration-200"
            style={{ fontSize: '0.75rem', letterSpacing: '0.12em', color: 'var(--color-hps-smoke)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-hps-ink)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-hps-smoke)')}
          >
            ← All Services
          </Link>
        </div>
      </section>

      </div>{/* end atmosphere wrapper */}

      <CTABand
        headline="Let's talk about your project."
        subhead="Every engagement starts with a free consultation — no commitment, no pressure."
        buttonText="Free Consultation"
        buttonHref="/contact"
        showPhone
      />
    </>
  )
}
