import { useState } from 'react'
import { Link } from 'react-router-dom'
import { platforms } from '../data/platforms'
import { stacks } from '../data/stacks'
import type { Platform } from '../data/types'
import PageHeader from '../components/sections/PageHeader'
import CTABand from '../components/sections/CTABand'
import BackgroundAtmosphere from '../components/decorative/BackgroundAtmosphere'
import { usePageMeta } from '../hooks/usePageMeta'

// ── Platform ecosystem groups ─────────────────────────────────────────────────

const groups = [
  {
    label: 'Marketing & Growth Systems',
    eyebrow: 'Visibility · Engagement · Distribution · Social',
    desc: 'The audience-facing layer of the ecosystem. These platforms build visibility, drive engagement, and create owned re-engagement channels — so past customers come back without depending on paid advertising or algorithmic reach.',
    accent: 'var(--color-hps-teal-dark)',
    slugs: ['hps-socialize', 'hps-biolinks', 'hps-push', 'hps-socialproof'],
  },
  {
    label: 'Analytics & Optimization',
    eyebrow: 'Measurement · Insight · Performance · Health',
    desc: 'Know what is actually happening across your digital properties. These platforms surface behavioral data, search health signals, and availability metrics so every optimization decision is evidence-based rather than intuition-based.',
    accent: 'var(--color-hps-gold-rich)',
    slugs: ['hps-engagetracker', 'hps-seo-audit', 'hps-uptime'],
  },
  {
    label: 'Creator & Media Systems',
    eyebrow: 'Audio · Content Production · Distribution · Audience',
    desc: 'Infrastructure for creators and media-forward businesses. A free beat library for content production, a unified creator operations hub, and a production workflow platform for organizations publishing content at volume.',
    accent: 'var(--color-hps-gold)',
    slugs: ['freebeats-music', 'hps-creator-hub', 'hps-media-studio'],
  },
  {
    label: 'AI & Operational Intelligence',
    eyebrow: 'Claude · Olares · n8n · Manus · Local + Cloud',
    desc: 'Hybrid local and cloud AI configured for real operational workflows. Not demonstrations — running automation systems built on Claude, Olares, n8n, and Manus that save measurable hours on repeatable content, data, and process tasks.',
    accent: 'var(--color-hps-teal-dark)',
    slugs: ['hps-ai-systems'],
  },
  {
    label: 'Client Infrastructure',
    eyebrow: 'Portal · File Delivery · Utilities',
    desc: 'The operational backbone connecting HPS to its clients. Project status, deliverable access, invoicing, support, large file delivery, and business utility tools — coordinated under one account so nothing requires a second login.',
    accent: 'var(--color-hps-ink)',
    slugs: ['hps-client-portal', 'hps-transfer', 'hps-toolkit'],
  },
  {
    label: 'Hospitality & QR Systems',
    eyebrow: 'Digital Menus · Connected Surfaces · Dynamic Codes',
    desc: 'The physical-to-digital connection layer. Dynamic QR codes that update without reprinting, digital menus reflecting real-time availability, and connected surfaces for restaurants, hotels, event venues, and retail environments.',
    accent: 'var(--color-hps-gold-rich)',
    slugs: ['hps-qr-menu', 'hps-qr-code'],
  },
  {
    label: 'Golf & Recreation',
    eyebrow: 'Course Management · Sponsors · Guest Experience',
    desc: 'Purpose-built digital operations for golf courses, driving ranges, and club environments. Tee sheet integration, sponsor campaign management, live digital displays, and QR-connected course infrastructure in one coordinated system.',
    accent: 'var(--color-hps-green)',
    slugs: ['hps-golf'],
  },
  {
    label: 'Accessibility & Compliance',
    eyebrow: 'WCAG 2.1 · Section 508 · ADA Title III · Enterprise Compliance',
    desc: 'A full audit-to-remediation-to-monitoring compliance pipeline built for healthcare organizations, federal contractors, universities, and enterprise clients. Manual testing with assistive technology, legal-grade documentation, and ongoing monitoring — not a scan widget. HPS Accessibility is a dedicated operational property at hpsaccessibility.com.',
    accent: 'var(--color-hps-teal-dark)',
    slugs: ['hps-accessibility'],
    externalCta: { label: 'Explore HPS Accessibility', href: 'https://hpsaccessibility.com' },
  },
  {
    label: 'Free Resource Ecosystems',
    eyebrow: 'No Account · No Paywall · Operational Utility',
    desc: 'Free operational tools for ecommerce operators and small business owners. Schema validators, SEO page checks, meta description analysis, and conversion audit checklists — accessible immediately, no subscription required.',
    accent: 'var(--color-hps-green)',
    slugs: ['hps-ecommerce-tools', 'hps-seo-tools'],
  },
]

// ── Ecosystem connection paths ────────────────────────────────────────────────

const ecosystemPaths = [
  {
    label: 'Golf Operations',
    desc: 'Course-to-digital from tee sheet to sponsor activation',
    accent: 'var(--color-hps-green)',
    nodes: [
      { name: 'HPS Golf', href: '/platforms/hps-golf' },
      { name: 'HPS QR Menu', href: '/platforms/hps-qr-menu' },
      { name: 'HPS QR Code', href: '/platforms/hps-qr-code' },
      { name: 'Fabrication Lab', href: '/fabrication' },
    ],
  },
  {
    label: 'Hospitality Loop',
    desc: 'Live menu → reviews → re-engagement → analytics',
    accent: 'var(--color-hps-gold-rich)',
    nodes: [
      { name: 'HPS QR Menu', href: '/platforms/hps-qr-menu' },
      { name: 'HPS SocialProof', href: '/platforms/hps-socialproof' },
      { name: 'HPS Push', href: '/platforms/hps-push' },
      { name: 'HPS EngageTracker', href: '/platforms/hps-engagetracker' },
    ],
  },
  {
    label: 'Creator Workflow',
    desc: 'Bio hub → push channel → delivery → audio',
    accent: 'var(--color-hps-gold)',
    nodes: [
      { name: 'HPS Creator Hub', href: '/platforms/hps-creator-hub' },
      { name: 'HPS BioLinks', href: '/platforms/hps-biolinks' },
      { name: 'HPS Push', href: '/platforms/hps-push' },
      { name: 'FreeBeatsMUSIC', href: '/platforms/freebeats-music' },
    ],
  },
  {
    label: 'Compliance Stack',
    desc: 'Audit → remediation → monitoring → documentation',
    accent: 'var(--color-hps-teal-dark)',
    nodes: [
      { name: 'HPS Accessibility', href: '/platforms/hps-accessibility' },
      { name: 'HPS SEO Audit', href: '/platforms/hps-seo-audit' },
      { name: 'HPS Uptime', href: '/platforms/hps-uptime' },
      { name: 'HPS Client Portal', href: '/platforms/hps-client-portal' },
    ],
  },
  {
    label: 'AI Operations',
    desc: 'Workflow audit → AI config → automation chains → handoff',
    accent: 'var(--color-hps-teal)',
    nodes: [
      { name: 'HPS AI Systems', href: '/platforms/hps-ai-systems' },
      { name: 'HPS EngageTracker', href: '/platforms/hps-engagetracker' },
      { name: 'HPS Client Portal', href: '/platforms/hps-client-portal' },
    ],
  },
  {
    label: 'Local Business Stack',
    desc: 'Reviews → QR → SEO health → push → analytics',
    accent: 'var(--color-hps-coral-warm)',
    nodes: [
      { name: 'HPS SocialProof', href: '/platforms/hps-socialproof' },
      { name: 'HPS QR Code', href: '/platforms/hps-qr-code' },
      { name: 'HPS SEO Audit', href: '/platforms/hps-seo-audit' },
      { name: 'HPS Push', href: '/platforms/hps-push' },
    ],
  },
]

// ── Platform Card ─────────────────────────────────────────────────────────────

function PlatformCard({ platform }: { platform: Platform }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      to={`/platforms/${platform.slug}`}
      style={{ textDecoration: 'none' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative overflow-hidden rounded-sm h-full"
        style={{
          background: 'var(--color-hps-cream)',
          border: '1px solid rgba(200,180,154,0.40)',
          borderLeft: `4px solid ${platform.accentColor}`,
          transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
          boxShadow: hovered
            ? `0 12px 32px -8px rgba(12,20,32,0.10), 0 2px 8px -2px rgba(12,20,32,0.06)`
            : '0 1px 4px rgba(12,20,32,0.04)',
          transition: 'transform 0.28s cubic-bezier(0.16,1,0.3,1), box-shadow 0.28s ease',
        }}
      >
        <div
          className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${platform.accentColor}14 0%, transparent 70%)`,
            transform: 'translate(25%, -25%)',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.35s ease',
          }}
          aria-hidden="true"
        />

        <div className="relative p-6 flex flex-col h-full">
          <h3
            className="font-display mb-2"
            style={{ fontSize: '1.125rem', color: 'var(--color-hps-ink)', lineHeight: 1.15 }}
          >
            {platform.name}
          </h3>
          <p
            className="font-body text-sm leading-relaxed flex-1 mb-5"
            style={{ color: 'var(--color-hps-smoke)' }}
          >
            {platform.tagline}
          </p>
          <div className="flex items-center justify-between">
            {platform.liveUrl ? (
              <div className="flex items-center gap-1.5">
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: 'var(--color-hps-green)' }}
                  aria-hidden="true"
                />
                <span
                  className="font-mono uppercase"
                  style={{ fontSize: '0.48rem', letterSpacing: '0.16em', color: 'var(--color-hps-green)' }}
                >
                  Live
                </span>
              </div>
            ) : (
              <div />
            )}
            <span
              className="font-mono uppercase"
              style={{
                fontSize: '0.6rem',
                letterSpacing: '0.18em',
                color: platform.accentColor,
                opacity: hovered ? 1 : 0.65,
                transition: 'opacity 0.2s ease',
              }}
            >
              View platform →
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

// ── Ecosystem Path Block ──────────────────────────────────────────────────────

function EcosystemPath({ path, index }: { path: typeof ecosystemPaths[number]; index: number }) {
  return (
    <div
      data-reveal
      data-reveal-delay={String(index * 80)}
      className="rounded-sm p-6"
      style={{
        background: 'var(--color-hps-cream)',
        border: '1px solid rgba(200,180,154,0.40)',
      }}
    >
      <p
        className="font-mono uppercase mb-1.5"
        style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: path.accent }}
      >
        {path.label}
      </p>
      <p
        className="font-body mb-4"
        style={{ fontSize: '0.8125rem', color: 'var(--color-hps-smoke)', opacity: 0.80 }}
      >
        {path.desc}
      </p>
      <div className="flex flex-wrap items-center gap-2">
        {path.nodes.map((node, ni) => (
          <div key={node.href} className="flex items-center gap-2">
            <Link
              to={node.href}
              className="font-body transition-colors duration-150"
              style={{ fontSize: '0.875rem', color: 'var(--color-hps-ink)', textDecoration: 'none', fontWeight: 500 }}
              onMouseEnter={e => (e.currentTarget.style.color = path.accent)}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-hps-ink)')}
            >
              {node.name}
            </Link>
            {ni < path.nodes.length - 1 && (
              <span
                className="font-mono"
                style={{ fontSize: '0.65rem', color: path.accent, opacity: 0.55 }}
                aria-hidden="true"
              >
                →
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function PlatformsPage() {
  usePageMeta({
    title: 'Digital Platforms',
    description: 'Twenty in-house SaaS platforms for marketing, analytics, QR systems, accessibility compliance, and business operations — built and maintained by Happy Path Studios.',
  })
  return (
    <>
      <div style={{ position: 'relative', isolation: 'isolate' }}>
      <BackgroundAtmosphere mood="citrus" intensity="whisper" density="sparse" />
      <PageHeader
        eyebrow="Twenty In-House Platforms"
        title="HPS Platforms"
        description="An integrated platform ecosystem covering marketing, analytics, creator tools, AI systems, QR infrastructure, accessibility compliance, and operational utilities — all built and maintained by Happy Path Studios."
        accentColor="var(--color-hps-teal-dark)"
      />

      {/* ── Platform groups ────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ background: 'var(--color-hps-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col gap-16">
          {groups.map((group, gi) => {
            const groupPlatforms = group.slugs
              .map(slug => platforms.find(p => p.slug === slug))
              .filter((p): p is Platform => p !== undefined)

            return (
              <div key={group.label} data-reveal data-reveal-delay={String(gi * 40)}>
                {/* Group header */}
                <div
                  className="mb-6 pb-5 border-b"
                  style={{ borderColor: 'rgba(200,180,154,0.40)' }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-end gap-1.5 sm:gap-4 mb-3">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-6 h-px rounded-full shrink-0"
                        style={{ background: group.accent }}
                        aria-hidden="true"
                      />
                      <h2
                        className="font-display"
                        style={{ fontSize: '1.375rem', color: 'var(--color-hps-ink)' }}
                      >
                        {group.label}
                      </h2>
                    </div>
                    <p
                      className="font-mono sm:ml-10"
                      style={{ fontSize: '0.58rem', letterSpacing: '0.16em', color: group.accent, opacity: 0.70 }}
                    >
                      {group.eyebrow}
                    </p>
                  </div>
                  <p
                    className="font-body leading-relaxed sm:ml-10"
                    style={{ fontSize: '0.875rem', color: 'var(--color-hps-smoke)', maxWidth: '52rem' }}
                  >
                    {group.desc}
                  </p>
                </div>

                {/* Platform cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {groupPlatforms.map(platform => (
                    <PlatformCard key={platform.slug} platform={platform} />
                  ))}
                </div>

                {/* Optional external CTA */}
                {group.externalCta && (
                  <div className="mt-5 flex items-center gap-4">
                    <a
                      href={group.externalCta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center font-body font-medium text-sm rounded-sm transition-all duration-200"
                      style={{
                        padding: '0.6rem 1.35rem',
                        background: group.accent,
                        color: '#ffffff',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
                      onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                    >
                      {group.externalCta.label} →
                    </a>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* ── Hosting Ecosystems callout ─────────────────────────────── */}
      <section
        className="py-16 lg:py-20 border-t"
        style={{ background: 'var(--color-hps-parchment)', borderColor: 'rgba(200,180,154,0.40)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div data-reveal>
              <div
                className="w-6 h-px mb-5"
                style={{ background: 'var(--color-hps-teal-dark)' }}
                aria-hidden="true"
              />
              <p
                className="font-mono uppercase mb-3"
                style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-teal-dark)' }}
              >
                Hosting Ecosystems
              </p>
              <h2
                className="font-display mb-4"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.05 }}
              >
                Managed hosting for every operational context.
              </h2>
              <p
                className="font-body leading-relaxed mb-8"
                style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}
              >
                Restaurant, food truck, professional services, creator portfolio, and ecommerce hosting — each environment configured for the specific performance, security, and workflow requirements of that operation. No generic shared plans.
              </p>
              <Link
                to="/hosting"
                className="btn-primary"
                style={{ display: 'inline-flex', alignSelf: 'flex-start' }}
              >
                View Hosting Plans
              </Link>
            </div>
            <div data-reveal data-reveal-delay="80">
              <div className="flex flex-col gap-3">
                {[
                  { name: 'Best Restaurant Hosting', desc: 'Managed hosting for restaurant and hospitality websites', href: '/hosting/best-restaurant-hosting', accent: 'var(--color-hps-gold-rich)' },
                  { name: 'Best Food Truck Hosting', desc: 'Lightweight managed hosting with location schedule management', href: '/hosting/best-food-truck-hosting', accent: 'var(--color-hps-coral-warm)' },
                  { name: 'Best Professional Hosting', desc: 'SLA-backed hosting for law firms, healthcare, and professional services', href: '/hosting/best-professional-hosting', accent: 'var(--color-hps-teal-dark)' },
                  { name: 'Creator Hosting', desc: 'Media-optimized hosting for portfolio sites and beat stores', href: '/hosting/creator-hosting', accent: 'var(--color-hps-gold)' },
                  { name: 'Ecommerce Hosting', desc: 'WooCommerce-optimized hosting with checkout performance tuning', href: '/hosting/ecommerce-hosting', accent: 'var(--color-hps-teal-dark)' },
                  { name: 'YourSitePlace', desc: 'All-in-one starter package for new businesses going online', href: '/hosting/yoursiteplace', accent: 'var(--color-hps-green)' },
                ].map((item, i) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    data-reveal
                    data-reveal-delay={String(i * 50)}
                    className="group flex items-start gap-4 p-4 rounded-sm transition-all duration-200"
                    style={{
                      background: 'var(--color-hps-cream)',
                      border: '1px solid rgba(200,180,154,0.40)',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = item.accent
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(12,20,32,0.07)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(200,180,154,0.40)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <div
                      className="shrink-0 w-1 self-stretch rounded-full"
                      style={{ background: item.accent }}
                      aria-hidden="true"
                    />
                    <div className="flex-1">
                      <p
                        className="font-display mb-0.5"
                        style={{ fontSize: '0.9375rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}
                      >
                        {item.name}
                      </p>
                      <p
                        className="font-body text-sm"
                        style={{ color: 'var(--color-hps-smoke)' }}
                      >
                        {item.desc}
                      </p>
                    </div>
                    <span
                      className="ml-auto self-center font-mono group-hover:translate-x-0.5 transition-transform duration-200"
                      style={{ fontSize: '0.7rem', color: item.accent }}
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ecosystem connection paths ─────────────────────────────── */}
      <section
        className="py-16 lg:py-24"
        style={{ background: 'var(--color-hps-cream)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-10">
            <p
              className="font-mono uppercase mb-3"
              style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-green)' }}
            >
              Connected systems
            </p>
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}
            >
              Platforms that work together
            </h2>
            <p
              className="font-body mt-3 max-w-lg"
              style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)', lineHeight: 1.65 }}
            >
              Each platform stands alone — but the compounding value comes from connecting them. These are six common operational paths through the ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {ecosystemPaths.map((path, i) => (
              <EcosystemPath key={path.label} path={path} index={i} />
            ))}
          </div>

          <div data-reveal className="mt-10 pt-8 border-t" style={{ borderColor: 'rgba(200,180,154,0.35)' }}>
            <Link
              to="/ecosystems"
              className="font-mono uppercase transition-colors duration-200"
              style={{ fontSize: '0.68rem', letterSpacing: '0.2em', color: 'var(--color-hps-green)', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.70')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Explore the full HPS ecosystem →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Operational Stacks ────────────────────────────────────── */}
      <section
        className="py-16 lg:py-24"
        style={{ background: 'var(--color-hps-parchment)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-10">
            <p
              className="font-mono uppercase mb-3"
              style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-green)' }}
            >
              Operational stacks
            </p>
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}
            >
              Platforms organized by function.
            </h2>
            <p
              className="font-body mt-3 max-w-lg"
              style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)', lineHeight: 1.65 }}
            >
              These groupings reflect how HPS platforms are commonly activated together — by operational context, not just category.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {stacks.map((stack, i) => {
              const stackPlatforms = stack.platforms
                .map(slug => platforms.find(p => p.slug === slug))
                .filter((p): p is Platform => p !== undefined)
              return (
                <div
                  key={stack.id}
                  data-reveal
                  data-reveal-delay={String((i % 3) * 60)}
                  className="rounded-sm p-5"
                  style={{
                    background: 'var(--color-hps-cream)',
                    border: '1px solid rgba(200,180,154,0.40)',
                    borderTop: `2px solid ${stack.accentColor}`,
                  }}
                >
                  <p
                    className="font-mono uppercase mb-2"
                    style={{ fontSize: '0.52rem', letterSpacing: '0.16em', color: stack.accentColor, opacity: 0.85 }}
                  >
                    {stack.eyebrow}
                  </p>
                  <p
                    className="font-display mb-2"
                    style={{ fontSize: '1rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}
                  >
                    {stack.name}
                  </p>
                  <p
                    className="font-body mb-4"
                    style={{ fontSize: '0.8125rem', color: 'var(--color-hps-smoke)', lineHeight: 1.6, opacity: 0.85 }}
                  >
                    {stack.tagline}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {stackPlatforms.map(p => (
                      <Link
                        key={p.slug}
                        to={`/platforms/${p.slug}`}
                        className="font-mono transition-colors duration-150"
                        style={{
                          fontSize: '0.55rem',
                          letterSpacing: '0.1em',
                          color: 'var(--color-hps-smoke)',
                          textDecoration: 'none',
                          opacity: 0.65,
                          padding: '0.25rem 0.5rem',
                          background: 'var(--color-hps-parchment)',
                          borderRadius: '1px',
                          border: '1px solid rgba(200,180,154,0.40)',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.color = stack.accentColor
                          e.currentTarget.style.opacity = '1'
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.color = 'var(--color-hps-smoke)'
                          e.currentTarget.style.opacity = '0.65'
                        }}
                      >
                        {p.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Live Now ─────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-10">
            <div className="flex items-center gap-2.5 mb-3">
              <span
                className="inline-block w-2 h-2 rounded-full shrink-0"
                style={{ background: 'var(--color-hps-green)' }}
                aria-hidden="true"
              />
              <p
                className="font-mono uppercase"
                style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-green)' }}
              >
                Live now
              </p>
            </div>
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)' }}
            >
              Operational platforms.
            </h2>
            <p
              className="font-body mt-3 max-w-lg"
              style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)', lineHeight: 1.65 }}
            >
              These platforms are live and accepting users. Launch directly — no consultation required to get started.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {platforms.filter(p => p.liveUrl).map((p, i) => (
              <a
                key={p.slug}
                href={p.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-reveal
                data-reveal-delay={String((i % 4) * 45)}
                className="group flex flex-col rounded-sm p-4 transition-all duration-200"
                style={{
                  background: 'var(--color-hps-parchment)',
                  border: '1px solid rgba(200,180,154,0.40)',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = p.accentColor
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(12,20,32,0.07)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(200,180,154,0.40)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div className="flex items-center gap-1.5 mb-2.5">
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: 'var(--color-hps-green)' }}
                    aria-hidden="true"
                  />
                  <span
                    className="font-mono uppercase"
                    style={{ fontSize: '0.44rem', letterSpacing: '0.14em', color: 'var(--color-hps-green)' }}
                  >
                    Live
                  </span>
                </div>
                <p
                  className="font-display mb-1.5"
                  style={{ fontSize: '0.9375rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}
                >
                  {p.name}
                </p>
                <p
                  className="font-body text-xs leading-relaxed flex-1 mb-3"
                  style={{ color: 'var(--color-hps-smoke)', opacity: 0.8 }}
                >
                  {p.tagline}
                </p>
                <span
                  className="font-mono uppercase"
                  style={{ fontSize: '0.5rem', letterSpacing: '0.14em', color: p.accentColor }}
                >
                  {p.liveLabel} ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      </div>{/* end atmosphere wrapper */}

      <CTABand
        headline="Ready to explore a platform?"
        subhead="Start with a consultation and we'll match you with the right tools for your operation."
        showPhone
      />
    </>
  )
}
