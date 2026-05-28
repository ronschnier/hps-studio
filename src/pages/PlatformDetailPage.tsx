import { useParams, Link, Navigate } from 'react-router-dom'
import { getPlatform } from '../data/platforms'
import { getPlatformExtended } from '../data/platformsExtended'
import { getStacksForPlatform } from '../data/stacks'
import CTABand from '../components/sections/CTABand'
import BackgroundAtmosphere from '../components/decorative/BackgroundAtmosphere'

const PLATFORM_LAUNCH: Record<string, { label: string; href: string; external?: boolean }> = {
  'hps-accessibility': { label: 'Launch HPS Accessibility', href: 'https://hpsaccessibility.com',           external: true },
  'hps-client-portal': { label: 'Access Client Portal',     href: 'https://happypathstudios.com/crm/login', external: true },
  'hps-golf':          { label: 'Launch HPS Golf',          href: 'https://hpsgolf.app',                    external: true },
  'hps-push':          { label: 'Launch HPS Push',          href: 'https://hpspush.com',                    external: true },
  'hps-qr-code':       { label: 'Launch HPS QR Code',       href: 'https://hpsqrcode.com',                  external: true },
  'hps-qr-menu':       { label: 'Launch HPS QR Menu',       href: 'https://hpsqrmenu.com',                  external: true },
  'hps-socialize':     { label: 'Launch HPS Socialize',     href: 'https://hpssocialize.com',               external: true },
  'hps-biolinks':      { label: 'Launch HPS BioLinks',      href: 'https://hpsbiolinks.com',                external: true },
  'hps-transfer':      { label: 'Launch HPS Transfer',      href: 'https://hpstransfer.com',                external: true },
  'hps-engagetracker': { label: 'Launch EngageTracker',     href: 'https://hpsengagetracker.com',           external: true },
  'hps-socialproof':   { label: 'Launch HPS SocialProof',   href: 'https://hpssocialproof.com',             external: true },
  'hps-uptime':        { label: 'Launch HPS Uptime',        href: 'https://hpsuptime.com',                  external: true },
  'hps-seo-audit':       { label: 'Launch SEO Audit',         href: 'https://hpsseoaudit.com',                        external: true },
  'hps-toolkit':         { label: 'Open HPS Toolkit',         href: 'https://hpstoolkit.com',                         external: true },
  'hps-ecommerce-tools': { label: 'Start Free', href: 'https://happypathstudios.com/ecommerce-tools/', external: true },
  'hps-seo-tools':       { label: 'Start Free', href: 'https://happypathstudios.com/seo-tools/',       external: true },
  'freebeats-music':   { label: 'Browse Free Beats',        href: 'https://freebeatsmusic.com',             external: true },
  'hps-web-tools':     { label: 'Open Web Tools',           href: 'https://hpswebtools.com',                 external: true },
  'hps-ai-systems':    { label: 'Explore AI Systems',       href: '/ai-systems' },
  'hps-creator-hub':   { label: 'Creator Infrastructure',   href: '/media' },
  'hps-media-studio':  { label: 'Media & Creator Systems',  href: '/media' },
}

const PLATFORM_CONTEXT: Record<string, { label: string; href: string }> = {
  'hps-golf':          { label: 'Golf & Recreation Pathway', href: '/ecosystem/golf-recreation' },
  'hps-accessibility': { label: 'Healthcare & Accessibility', href: '/ecosystem/healthcare-accessibility' },
  'hps-qr-menu':       { label: 'Hospitality Pathway', href: '/ecosystem/hospitality-restaurants' },
  'hps-qr-code':       { label: 'Fabrication Lab', href: '/fabrication' },
  'hps-uptime':        { label: 'Enterprise Pathway', href: '/ecosystem/enterprise' },
  'hps-client-portal': { label: 'Enterprise Pathway', href: '/ecosystem/enterprise' },
  'hps-ai-systems':    { label: 'Enterprise Pathway', href: '/ecosystem/enterprise' },
  'freebeats-music':   { label: 'Creators & Media Pathway', href: '/ecosystem/creators-media' },
  'hps-creator-hub':   { label: 'Creators & Media Pathway', href: '/ecosystem/creators-media' },
  'hps-transfer':      { label: 'Creators & Media Pathway', href: '/ecosystem/creators-media' },
  'hps-media-studio':  { label: 'Creators & Media Pathway', href: '/ecosystem/creators-media' },
  'hps-socialize':     { label: 'Local Business Pathway', href: '/ecosystem/local-business' },
  'hps-push':          { label: 'Hospitality Pathway', href: '/ecosystem/hospitality-restaurants' },
  'hps-biolinks':      { label: 'Creators & Media Pathway', href: '/ecosystem/creators-media' },
}

const PLATFORM_HEADER_CTA: Record<string, string> = {
  'hps-ecommerce-tools': 'Start Free',
  'hps-seo-tools':       'Start Free',
  'hps-ai-systems':      'Book a Consultation',
  'hps-creator-hub':     'Early Access',
  'hps-media-studio':    'Early Access',
}

export default function PlatformDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const platform = slug ? getPlatform(slug) : undefined
  const extended = slug ? getPlatformExtended(slug) : undefined

  if (!platform) return <Navigate to="/platforms" replace />

  const relatedPlatforms = platform.relatedPlatforms
    .map(s => getPlatform(s))
    .filter((p): p is NonNullable<typeof p> => p !== undefined)

  const platformStacks = getStacksForPlatform(platform.slug)
  const primaryStack = platformStacks[0] ?? null
  const stackSiblings = primaryStack
    ? primaryStack.platforms
        .filter(s => s !== platform.slug)
        .map(s => getPlatform(s))
        .filter((p): p is NonNullable<typeof p> => p !== undefined)
        .slice(0, 3)
    : []

  const launchCTA = PLATFORM_LAUNCH[platform.slug] ?? { label: 'Start a Free Consultation', href: '/contact' }
  const contextLink = PLATFORM_CONTEXT[platform.slug] ?? { label: 'Ecosystem Overview', href: '/ecosystems' }

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
              style={{ background: platform.accentColor }}
              aria-hidden="true"
            />
            <p
              className="font-mono uppercase mb-4"
              style={{ fontSize: '0.65rem', letterSpacing: '0.22em', color: platform.accentColor }}
            >
              {platform.eyebrow}
            </p>
            <h1
              data-reveal
              className="font-display mb-6"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', color: 'var(--color-hps-ink)', lineHeight: 1.05 }}
            >
              {platform.name}
            </h1>
            <p
              data-reveal
              data-reveal-delay="80"
              className="font-body leading-relaxed mb-3"
              style={{ fontSize: '1.125rem', color: 'var(--color-hps-smoke)', maxWidth: '38rem' }}
            >
              {platform.tagline}
            </p>
            <p
              data-reveal
              data-reveal-delay="160"
              className="font-body leading-relaxed"
              style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)', maxWidth: '38rem', opacity: 0.85 }}
            >
              {platform.positioning}
            </p>

            {/* Live platform launch buttons */}
            <div data-reveal data-reveal-delay="240" className="flex flex-wrap gap-3 mt-8">
              {platform.liveUrl ? (
                <a
                  href={platform.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body font-medium text-sm rounded-sm transition-all duration-200"
                  style={{
                    padding: '0.7rem 1.5rem',
                    background: platform.accentColor,
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
                  {platform.liveLabel ?? 'Launch Platform'} ↗
                </a>
              ) : (
                <a
                  href="/contact"
                  className="inline-flex items-center font-body font-medium text-sm rounded-sm transition-all duration-200"
                  style={{
                    padding: '0.7rem 1.5rem',
                    background: platform.accentColor,
                    color: '#ffffff',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  {PLATFORM_HEADER_CTA[platform.slug] ?? 'Early Access'} →
                </a>
              )}
              <a
                href="/contact"
                className="inline-flex items-center font-body font-medium text-sm rounded-sm transition-all duration-200"
                style={{
                  padding: '0.7rem 1.5rem',
                  background: 'transparent',
                  color: platform.accentColor,
                  border: '1px solid rgba(200,180,154,0.55)',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = platform.accentColor
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

            {/* Live status badge */}
            {platform.liveUrl && (
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
                style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: platform.accentColor }}
              >
                Who it is for
              </p>
              <p
                className="font-body leading-relaxed"
                style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)' }}
              >
                {platform.whoItIsFor}
              </p>
            </div>
            <div data-reveal data-reveal-delay="80">
              <p
                className="font-mono uppercase mb-4"
                style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: platform.accentColor }}
              >
                What it does
              </p>
              <p
                className="font-body leading-relaxed"
                style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)' }}
              >
                {platform.whatItDoes}
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
              style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: platform.accentColor }}
            >
              Core features
            </p>
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)' }}
            >
              What {platform.name} includes
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {platform.features.map((feature, i) => (
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
                  style={{ background: platform.accentColor }}
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
                style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: platform.accentColor }}
              >
                The problem it addresses
              </p>
              <h2
                className="font-display"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)' }}
              >
                What {platform.name} solves
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
                    style={{ background: platform.accentColor }}
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

      {/* ── Operational Workflow ─────────────────────────────────────── */}
      {extended?.operationalFlow && extended.operationalFlow.length > 0 && (
        <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-cream)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div data-reveal className="mb-10">
              <p
                className="font-mono uppercase mb-3"
                style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: platform.accentColor }}
              >
                How it works in practice
              </p>
              <h2
                className="font-display"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)' }}
              >
                Operational workflow
              </h2>
            </div>

            <div className="flex flex-col gap-0">
              {extended.operationalFlow.map((step, i, arr) => (
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
                      style={{ fontSize: '1.5rem', color: platform.accentColor, lineHeight: 1, opacity: 0.35 }}
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
      {platform.ecosystemLinks.length > 0 && (
        <section
          className="py-16 lg:py-20"
          style={{ background: 'var(--color-hps-parchment)' }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div data-reveal className="mb-10">
              <p
                className="font-mono uppercase mb-3"
                style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: platform.accentColor }}
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
              {platform.ecosystemLinks.map((link, i) => (
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
                    e.currentTarget.style.borderColor = platform.accentColor
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(12,20,32,0.07)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(200,180,154,0.40)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <div
                    className="w-1 self-stretch rounded-full shrink-0 mt-1"
                    style={{ background: platform.accentColor }}
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
                    style={{ fontSize: '0.75rem', color: platform.accentColor }}
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

      {/* ── Related Platforms ───────────────────────────────────────── */}
      {relatedPlatforms.length > 0 && (
        <section className="py-16 lg:py-20" style={{ background: 'var(--color-hps-parchment)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div data-reveal className="mb-10">
              <p
                className="font-mono uppercase mb-3"
                style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: platform.accentColor }}
              >
                Works well with
              </p>
              <h2
                className="font-display"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)' }}
              >
                Related platforms
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedPlatforms.map((rel, i) => (
                <Link
                  key={rel.slug}
                  to={`/platforms/${rel.slug}`}
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

      {/* ── Also in this stack ──────────────────────────────────────── */}
      {primaryStack && stackSiblings.length > 0 && (
        <section className="py-16 lg:py-20" style={{ background: 'var(--color-hps-parchment)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div data-reveal className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: primaryStack.accentColor }}
                  aria-hidden="true"
                />
                <p
                  className="font-mono uppercase"
                  style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: primaryStack.accentColor }}
                >
                  {primaryStack.eyebrow}
                </p>
              </div>
              <h2
                className="font-display"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)' }}
              >
                Also in the {primaryStack.name}
              </h2>
              <p
                className="font-body mt-3"
                style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)', maxWidth: '36rem', lineHeight: 1.65, opacity: 0.85 }}
              >
                {primaryStack.tagline}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {stackSiblings.map((rel, i) => (
                <Link
                  key={rel.slug}
                  to={`/platforms/${rel.slug}`}
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

      {/* ── Operational Continuity ──────────────────────────────────── */}
      {platform.continuityNote && (
        <section className="py-16 lg:py-20" style={{ background: 'var(--color-hps-cream)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 lg:gap-16 items-start">
              <div data-reveal>
                <p
                  className="font-mono uppercase mb-4"
                  style={{ fontSize: '0.6rem', letterSpacing: '0.22em', color: platform.accentColor }}
                >
                  Operational partnership
                </p>
                <h2
                  className="font-display mb-5"
                  style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.875rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}
                >
                  This platform over time.
                </h2>
                <p
                  className="font-body leading-relaxed"
                  style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)', maxWidth: '44rem' }}
                >
                  {platform.continuityNote}
                </p>
              </div>
              <div
                data-reveal
                data-reveal-delay="80"
                className="rounded-sm p-6"
                style={{
                  background: 'var(--color-hps-parchment)',
                  border: '1px solid rgba(200,180,154,0.40)',
                }}
              >
                <div
                  className="w-5 h-px mb-4"
                  style={{ background: platform.accentColor }}
                  aria-hidden="true"
                />
                <p
                  className="font-display mb-2"
                  style={{ fontSize: '0.9375rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}
                >
                  Ready to run this operationally?
                </p>
                <p
                  className="font-body text-sm leading-relaxed mb-5"
                  style={{ color: 'var(--color-hps-smoke)' }}
                >
                  The consultation is where we map how this platform fits what you are already running.
                </p>
                <Link
                  to="/contact"
                  className="inline-block font-body font-medium text-sm rounded-sm transition-all duration-200"
                  style={{
                    padding: '0.65rem 1.4rem',
                    background: platform.accentColor,
                    color: '#ffffff',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  Start a Free Consultation →
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Ecosystem Gateway ────────────────────────────────────────── */}
      <section
        className="py-12 lg:py-16"
        style={{ background: 'var(--color-hps-parchment)', borderTop: '1px solid rgba(200,180,154,0.35)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div
            data-reveal
            className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10"
          >
            <div className="flex-1 min-w-0">
              <p
                className="font-mono uppercase mb-2"
                style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: platform.accentColor }}
              >
                Ecosystem gateway
              </p>
              <p
                className="font-display"
                style={{ fontSize: '1.125rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}
              >
                {platform.name} as operational infrastructure.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              {launchCTA.external ? (
                <a
                  href={launchCTA.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-body font-medium text-sm rounded-sm transition-all duration-200"
                  style={{
                    padding: '0.65rem 1.4rem',
                    background: platform.accentColor,
                    color: '#ffffff',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  {launchCTA.label} ↗
                </a>
              ) : (
                <Link
                  to={launchCTA.href}
                  className="inline-flex items-center font-body font-medium text-sm rounded-sm transition-all duration-200"
                  style={{
                    padding: '0.65rem 1.4rem',
                    background: platform.accentColor,
                    color: '#ffffff',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  {launchCTA.label} →
                </Link>
              )}
              <Link
                to={contextLink.href}
                className="inline-flex items-center font-body font-medium text-sm rounded-sm transition-all duration-200"
                style={{
                  padding: '0.65rem 1.4rem',
                  background: 'transparent',
                  color: platform.accentColor,
                  border: '1px solid rgba(200,180,154,0.55)',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = platform.accentColor
                  e.currentTarget.style.background = 'rgba(12,20,32,0.02)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(200,180,154,0.55)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                {contextLink.label} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Back nav ────────────────────────────────────────────────── */}
      <section className="py-10" style={{ background: 'var(--color-hps-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Link
            to="/platforms"
            className="font-mono transition-colors duration-200"
            style={{ fontSize: '0.75rem', letterSpacing: '0.12em', color: 'var(--color-hps-smoke)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-hps-ink)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-hps-smoke)')}
          >
            ← All Platforms
          </Link>
        </div>
      </section>

      </div>{/* end atmosphere wrapper */}

      <CTABand
        headline="Ready to add this to your ecosystem?"
        subhead="Book a free consultation and we will show you how it fits into what you are already doing."
        buttonText="Free Consultation"
        buttonHref="/contact"
        showPhone
      />
    </>
  )
}
