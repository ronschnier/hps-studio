import { Link } from 'react-router-dom'
import CTABand from '../components/sections/CTABand'
import BackgroundAtmosphere from '../components/decorative/BackgroundAtmosphere'
import { usePageMeta } from '../hooks/usePageMeta'

const ACCENT_HEX = '#b8882a'

const sections = [
  {
    id: 'brand-identity',
    eyebrow: 'Brand Identity',
    title: 'Brand Identity & Visual Systems',
    desc: 'Your brand is the first thing people read before they read a word. HPS builds complete identity systems — logomarks, color systems, typography, usage guidelines, and every file format your vendors and fabricators will ever need.',
    services: [
      { label: 'Logo System Design', note: 'Primary, alternate, and icon variants' },
      { label: 'Brand Strategy & Positioning', note: 'Voice, values, competitive differentiation' },
      { label: 'Color & Typography Systems', note: 'Accessibility-verified contrast ratios' },
      { label: 'Brand Guidelines', note: 'Usage documentation across key surfaces' },
      { label: 'Print-Ready File Package', note: 'Every format your vendors will need' },
      { label: 'Digital Asset Kit', note: 'Social, email, presentation templates' },
    ],
    cta: { label: 'Brand Identity Services', href: '/services/brand-identity' },
  },
  {
    id: 'print-design',
    eyebrow: 'Marketing & Print',
    title: 'Marketing & Print Design',
    desc: 'Physical collateral that represents your brand at the same standard as your digital presence. Every file is production-ready with correct bleed, color profiles, and resolution for the specific print method it will go through.',
    services: [
      { label: 'Collateral Suite Design', note: 'Cards, letterhead, folders' },
      { label: 'Menu Design', note: 'Readable, brand-consistent, easy to update' },
      { label: 'Marketing Materials', note: 'Flyers, sell sheets, postcards, direct mail' },
      { label: 'Event Graphics', note: 'Banners, step-and-repeats, large-format' },
      { label: 'Packaging Design', note: 'Retail, food service, branded merchandise' },
      { label: 'Production Coordination', note: 'In-house UV, DTG, sublimation available' },
    ],
    cta: { label: 'Print Design Services', href: '/services/print-design' },
  },
  {
    id: 'social-content',
    eyebrow: 'Social & Content',
    title: 'Social Media & Content Strategy',
    desc: 'Consistent, branded content that builds audience and drives action — without requiring your team to become full-time content producers. HPS handles strategy, production, scheduling, and reporting.',
    services: [
      { label: 'Content Strategy', note: 'Topic clusters, editorial calendar, KPIs' },
      { label: 'Social Media Management', note: 'Instagram, Facebook, Google Business' },
      { label: 'Content Production', note: 'Branded posts, copy, and graphics' },
      { label: 'Community Management', note: 'Monitoring, response, issue escalation' },
      { label: 'Monthly Reporting', note: 'Reach, engagement, follower growth' },
      { label: 'Campaign Planning', note: 'Seasonal pushes, promotions, events' },
    ],
    cta: { label: 'Content Strategy', href: '/services/content-strategy' },
  },
  {
    id: 'photography-videography',
    eyebrow: 'Photography & Video',
    title: 'Photography & Videography',
    desc: 'Real photography and video from the people who also build your brand and website. No translation loss — the imagery is captured knowing exactly where it will live and what it needs to communicate.',
    services: [
      { label: 'Product Photography', note: 'E-commerce, menus, catalogs' },
      { label: 'Location & Brand Photography', note: 'Space, team, operations' },
      { label: 'Headshots & Team Portraits', note: 'About pages, LinkedIn, press' },
      { label: 'Social Video', note: 'Reels, TikTok, Facebook — optimized per platform' },
      { label: 'Walkthrough Video', note: 'Restaurants, retail, hospitality venues' },
      { label: 'Edited Deliverables', note: 'Color-graded photos, edited video in all formats' },
    ],
    cta: { label: 'Photography & Video Services', href: '/services/photography-videography' },
  },
]

export default function IdentityCommunicationsPage() {
  usePageMeta({
    title: 'Identity & Communications',
    description: 'Brand identity, print design, social media strategy, and photography from Happy Path Studios — unified communications built to be consistent across every surface.',
  })

  return (
    <>
      <div style={{ position: 'relative', isolation: 'isolate' }}>
        <BackgroundAtmosphere mood="citrus" intensity="whisper" density="sparse" />

        {/* ── Hero ───────────────────────────────────────────────────── */}
        <section
          className="pt-32 lg:pt-40 pb-20 lg:pb-24"
          style={{ background: 'var(--color-hps-cream)' }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="mb-4">
              <Link
                to="/services"
                className="font-mono transition-colors duration-150"
                style={{ fontSize: '0.65rem', letterSpacing: '0.18em', color: 'var(--color-hps-smoke)', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-hps-ink)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-hps-smoke)')}
              >
                ← Services
              </Link>
            </div>
            <div
              className="w-8 h-px mb-6 mt-6"
              style={{ background: ACCENT_HEX }}
              aria-hidden="true"
            />
            <p
              className="font-mono uppercase mb-4"
              style={{ fontSize: '0.65rem', letterSpacing: '0.22em', color: ACCENT_HEX }}
            >
              Brand & Media
            </p>
            <h1
              className="font-display mb-6"
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 4rem)',
                color: 'var(--color-hps-ink)',
                lineHeight: 1.02,
                letterSpacing: '-0.025em',
              }}
            >
              Identity &<br />Communications
            </h1>
            <p
              className="font-body leading-relaxed"
              style={{
                fontSize: '1.125rem',
                color: 'var(--color-hps-smoke)',
                maxWidth: '40rem',
              }}
            >
              Visual identity, print materials, social strategy, and photography — unified
              so every surface of your brand communicates the same story.
            </p>
          </div>
        </section>

        {/* ── Four Sections ──────────────────────────────────────────── */}
        {sections.map((section, i) => (
          <section
            key={section.id}
            id={section.id}
            className="py-16 lg:py-24"
            style={{
              background: i % 2 === 0
                ? 'var(--color-hps-parchment)'
                : 'var(--color-hps-cream)',
              borderTop: '1px solid rgba(200,180,154,0.30)',
            }}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">

                {/* Left: header + description */}
                <div>
                  <p
                    className="font-mono uppercase mb-4"
                    style={{ fontSize: '0.6rem', letterSpacing: '0.22em', color: ACCENT_HEX }}
                  >
                    {section.eyebrow}
                  </p>
                  <h2
                    className="font-display mb-5"
                    style={{
                      fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                      color: 'var(--color-hps-ink)',
                      lineHeight: 1.08,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {section.title}
                  </h2>
                  <p
                    className="font-body leading-relaxed mb-8"
                    style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)', maxWidth: '34rem' }}
                  >
                    {section.desc}
                  </p>
                  <Link
                    to={section.cta.href}
                    className="font-mono uppercase transition-colors duration-200"
                    style={{ fontSize: '0.65rem', letterSpacing: '0.18em', color: ACCENT_HEX, textDecoration: 'none' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-hps-ink)')}
                    onMouseLeave={e => (e.currentTarget.style.color = ACCENT_HEX)}
                  >
                    {section.cta.label} →
                  </Link>
                </div>

                {/* Right: service list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {section.services.map(svc => (
                    <div
                      key={svc.label}
                      className="p-5 rounded-sm"
                      style={{
                        background: i % 2 === 0
                          ? 'var(--color-hps-cream)'
                          : 'var(--color-hps-parchment)',
                        border: '1px solid rgba(200,180,154,0.40)',
                      }}
                    >
                      <div
                        className="w-4 h-px mb-3"
                        style={{ background: ACCENT_HEX }}
                        aria-hidden="true"
                      />
                      <p
                        className="font-body font-medium mb-1"
                        style={{ fontSize: '0.9375rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}
                      >
                        {svc.label}
                      </p>
                      <p
                        className="font-mono"
                        style={{ fontSize: '0.6rem', letterSpacing: '0.08em', color: 'var(--color-hps-smoke)', opacity: 0.65 }}
                      >
                        {svc.note}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </section>
        ))}

        {/* ── Back nav ───────────────────────────────────────────────── */}
        <section className="py-10" style={{ background: 'var(--color-hps-cream)', borderTop: '1px solid rgba(200,180,154,0.30)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <Link
              to="/services"
              className="font-mono transition-colors duration-200"
              style={{ fontSize: '0.75rem', letterSpacing: '0.12em', color: 'var(--color-hps-smoke)', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-hps-ink)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-hps-smoke)')}
            >
              ← All Services
            </Link>
          </div>
        </section>

      </div>

      <CTABand
        headline="Let's build your brand system."
        subhead="Identity, print, content, and photography — designed as one unified communications ecosystem."
        buttonText="Free Consultation"
        buttonHref="/contact"
        showPhone
      />
    </>
  )
}
