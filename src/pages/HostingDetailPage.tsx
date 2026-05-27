import { useParams, Link, Navigate } from 'react-router-dom'
import { getHostingProduct } from '../data/hosting'
import { getHostingExtended } from '../data/hostingExtended'
import CTABand from '../components/sections/CTABand'
import BackgroundAtmosphere from '../components/decorative/BackgroundAtmosphere'

export default function HostingDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const product = slug ? getHostingProduct(slug) : undefined
  const extended = slug ? getHostingExtended(slug) : undefined

  if (!product) return <Navigate to="/hosting" replace />

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
              style={{ background: product.accentColor }}
              aria-hidden="true"
            />
            <p
              className="font-mono uppercase mb-4"
              style={{ fontSize: '0.65rem', letterSpacing: '0.22em', color: product.accentColor }}
            >
              {product.eyebrow}
            </p>
            <h1
              data-reveal
              className="font-display mb-6"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', color: 'var(--color-hps-ink)', lineHeight: 1.05 }}
            >
              {product.name}
            </h1>
            <p
              data-reveal
              data-reveal-delay="80"
              className="font-body leading-relaxed mb-3"
              style={{ fontSize: '1.125rem', color: 'var(--color-hps-smoke)', maxWidth: '38rem' }}
            >
              {product.tagline}
            </p>
            <p
              data-reveal
              data-reveal-delay="160"
              className="font-body leading-relaxed"
              style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)', maxWidth: '38rem', opacity: 0.85 }}
            >
              {product.positioning}
            </p>

            <div data-reveal data-reveal-delay="240" className="flex flex-wrap gap-3 mt-8">
              {product.liveUrl && (
                <a
                  href={product.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body font-medium text-sm rounded-sm transition-all duration-200"
                  style={{
                    padding: '0.7rem 1.5rem',
                    background: product.accentColor,
                    color: '#ffffff',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: 'rgba(255,255,255,0.75)' }}
                    aria-hidden="true"
                  />
                  {product.liveLabel ?? 'Start Hosting'} ↗
                </a>
              )}
              <a
                href="/contact"
                className="inline-flex items-center font-body font-medium text-sm rounded-sm transition-all duration-200"
                style={{
                  padding: '0.7rem 1.5rem',
                  background: 'transparent',
                  color: product.accentColor,
                  border: '1px solid rgba(200,180,154,0.55)',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = product.accentColor
                  e.currentTarget.style.background = 'rgba(12,20,32,0.02)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(200,180,154,0.55)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                Free Consultation →
              </a>
            </div>

            {product.liveUrl && (
              <div data-reveal data-reveal-delay="300" className="flex items-center gap-2 mt-5">
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full"
                  style={{ background: 'var(--color-hps-green)' }}
                  aria-hidden="true"
                />
                <p
                  className="font-mono uppercase"
                  style={{ fontSize: '0.55rem', letterSpacing: '0.2em', color: 'var(--color-hps-green)' }}
                >
                  Live Platform
                </p>
              </div>
            )}
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
                style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: product.accentColor }}
              >
                Who it is for
              </p>
              <p
                className="font-body leading-relaxed"
                style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)' }}
              >
                {product.whoItIsFor}
              </p>
            </div>
            <div data-reveal data-reveal-delay="80">
              <p
                className="font-mono uppercase mb-4"
                style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: product.accentColor }}
              >
                What's included
              </p>
              <p
                className="font-body leading-relaxed"
                style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)' }}
              >
                {product.whatItDoes}
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
              style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: product.accentColor }}
            >
              Plan features
            </p>
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)' }}
            >
              Everything in {product.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((feature, i) => (
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
                  style={{ background: product.accentColor }}
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
                style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: product.accentColor }}
              >
                The problem it addresses
              </p>
              <h2
                className="font-display"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)' }}
              >
                What {product.name} solves
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
                    style={{ background: product.accentColor }}
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

      {/* ── Setup Workflow ──────────────────────────────────────────── */}
      {extended?.setupFlow && extended.setupFlow.length > 0 && (
        <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-cream)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div data-reveal className="mb-10">
              <p
                className="font-mono uppercase mb-3"
                style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: product.accentColor }}
              >
                How setup works
              </p>
              <h2
                className="font-display"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)' }}
              >
                Setup workflow
              </h2>
            </div>

            <div className="flex flex-col gap-0">
              {extended.setupFlow.map((step, i, arr) => (
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
                      style={{ fontSize: '1.5rem', color: product.accentColor, lineHeight: 1, opacity: 0.35 }}
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
      {product.ecosystemLinks.length > 0 && (
        <section
          className="py-16 lg:py-20"
          style={{ background: 'var(--color-hps-parchment)' }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div data-reveal className="mb-10">
              <p
                className="font-mono uppercase mb-3"
                style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: product.accentColor }}
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
              {product.ecosystemLinks.map((link, i) => (
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
                    e.currentTarget.style.borderColor = product.accentColor
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(12,20,32,0.07)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(200,180,154,0.40)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <div
                    className="w-1 self-stretch rounded-full shrink-0 mt-1"
                    style={{ background: product.accentColor }}
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
                    style={{ fontSize: '0.75rem', color: product.accentColor }}
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

      {/* ── Vertical cross-discovery ────────────────────────────────── */}
      {(product.slug === 'best-restaurant-hosting' || product.slug === 'best-food-truck-hosting') && (
        <section className="py-14 lg:py-16" style={{ background: 'var(--color-hps-parchment)', borderTop: '1px solid rgba(200,180,154,0.35)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div data-reveal className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
              <div className="flex-1 min-w-0">
                <p className="font-mono uppercase mb-2" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: product.accentColor }}>
                  Also in hospitality
                </p>
                <p className="font-body leading-relaxed" style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)', maxWidth: '36rem' }}>
                  {product.slug === 'best-restaurant-hosting'
                    ? 'If you operate a food truck, explore hosting and QR systems built specifically for mobile food businesses.'
                    : 'Managing a restaurant or hospitality location? Explore operational hosting systems designed for restaurants and dining groups.'}
                </p>
              </div>
              <a
                href={product.slug === 'best-restaurant-hosting' ? 'https://bestfoodtruckhosting.com' : 'https://bestrestauranthosting.com'}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center font-body font-medium text-sm rounded-sm transition-all duration-200"
                style={{
                  padding: '0.65rem 1.4rem',
                  background: 'transparent',
                  color: product.accentColor,
                  border: '1px solid rgba(200,180,154,0.55)',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = product.accentColor
                  e.currentTarget.style.background = 'rgba(12,20,32,0.02)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(200,180,154,0.55)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                {product.slug === 'best-restaurant-hosting' ? 'Food Truck Hosting →' : 'Restaurant Hosting →'}
              </a>
            </div>
          </div>
        </section>
      )}

      {/* ── Back nav ────────────────────────────────────────────────── */}
      <section className="py-10" style={{ background: 'var(--color-hps-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Link
            to="/hosting"
            className="font-mono transition-colors duration-200"
            style={{ fontSize: '0.75rem', letterSpacing: '0.12em', color: 'var(--color-hps-smoke)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-hps-ink)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-hps-smoke)')}
          >
            ← All Hosting Plans
          </Link>
        </div>
      </section>

      </div>{/* end atmosphere wrapper */}

      <CTABand
        headline="Get started with managed hosting."
        subhead="No long-term contracts. Set up and launched within 48 hours."
        buttonText="Free Consultation"
        buttonHref="/contact"
        showPhone
      />
    </>
  )
}
