import { Link } from 'react-router-dom'
import PageHeader from '../components/sections/PageHeader'
import CTABand from '../components/sections/CTABand'
import BackgroundAtmosphere from '../components/decorative/BackgroundAtmosphere'
import { usePageMeta } from '../hooks/usePageMeta'

const pillars = [
  {
    label: 'Digital Systems',
    desc: 'Web development, UX design, accessibility compliance, AI workflow, and automation.',
    href: '/services',
    accent: 'var(--color-hps-teal-dark)',
    tag: 'Engineering',
  },
  {
    label: 'SaaS Platforms',
    desc: 'Twenty in-house platforms for marketing, analytics, QR systems, and business infrastructure.',
    href: '/platforms',
    accent: 'var(--color-hps-gold-rich)',
    tag: 'Software',
  },
  {
    label: 'Fabrication Lab',
    desc: 'UV printing, laser systems, DTG, sublimation, embroidery, vinyl, and 3D printing.',
    href: '/fabrication',
    accent: 'var(--color-hps-coral-warm)',
    tag: 'Manufacturing',
  },
  {
    label: 'Connected Surfaces',
    desc: 'QR-connected physical products that bridge printed material with live digital content.',
    href: '/hospitality',
    accent: 'var(--color-hps-green)',
    tag: 'Integration',
  },
]

const clusters = [
  {
    eyebrow: 'Marketing & Growth',
    label: 'Social, reviews, and audience systems',
    desc: 'The platforms that build discoverability, drive traffic, and convert attention into measurable engagement across every channel.',
    accent: 'var(--color-hps-teal-dark)',
    links: [
      { label: 'HPS Socialize',     href: '/platforms/hps-socialize',    rel: 'Multi-channel social scheduling' },
      { label: 'HPS BioLinks',       href: '/platforms/hps-biolinks',     rel: 'Branded link hub for social bios' },
      { label: 'HPS Push',           href: '/platforms/hps-push',         rel: 'Web push notification channel' },
      { label: 'HPS SocialProof',    href: '/platforms/hps-socialproof',  rel: 'Review aggregation and display' },
    ],
  },
  {
    eyebrow: 'Analytics & Observability',
    label: 'Behavioral data, SEO health, and uptime infrastructure',
    desc: 'Behavioral analytics, technical SEO health, and uptime monitoring — the operational layer that tells you what is working and what is failing before customers notice.',
    accent: 'var(--color-hps-gold-rich)',
    links: [
      { label: 'HPS EngageTracker',  href: '/platforms/hps-engagetracker', rel: 'Session, heatmap, and funnel analytics' },
      { label: 'HPS SEO Audit',      href: '/platforms/hps-seo-audit',     rel: 'Scheduled technical SEO crawls' },
      { label: 'HPS Uptime',         href: '/platforms/hps-uptime',        rel: 'Multi-location uptime monitoring' },
    ],
  },
  {
    eyebrow: 'Creator & Media',
    label: 'Production, distribution, and audio infrastructure',
    desc: 'The stack that runs independent creator operations: licensed music, production workflow, large file delivery, and a direct push channel to your audience that no platform can throttle.',
    accent: 'var(--color-hps-gold)',
    links: [
      { label: 'FreeBeatsMUSIC',     href: '/platforms/freebeats-music',  rel: 'Free licensed background music' },
      { label: 'HPS Creator Hub',    href: '/platforms/hps-creator-hub',  rel: 'Creator workflow and asset management' },
      { label: 'HPS Media Studio',   href: '/platforms/hps-media-studio', rel: 'Content calendar and production ops' },
      { label: 'HPS Transfer',       href: '/platforms/hps-transfer',     rel: 'Branded large file delivery' },
    ],
  },
  {
    eyebrow: 'AI & Operational Intelligence',
    label: 'Workflow automation and operational data systems',
    desc: 'Claude and n8n-based workflow automation for content, data enrichment, and operational intelligence. Built to reduce the manual work that compounds across a growing operation.',
    accent: 'var(--color-hps-teal)',
    links: [
      { label: 'HPS AI Systems',     href: '/platforms/hps-ai-systems',   rel: 'Workflow automation and AI integration' },
      { label: 'AI Systems page',    href: '/ai-systems',                  rel: 'AI services overview and use cases' },
      { label: 'Digital Strategy',   href: '/services/digital-strategy',  rel: 'Data-informed growth strategy' },
      { label: 'AI Integration',     href: '/services/ai-integration',    rel: 'AI workflow development services' },
    ],
  },
  {
    eyebrow: 'Hospitality & QR Systems',
    label: 'Live menus, scan infrastructure, and table operations',
    desc: 'Persistent QR infrastructure that eliminates reprint cycles, connects physical touchpoints to live digital content, and gives hospitality operators real-time control over every guest-facing surface.',
    accent: 'var(--color-hps-green)',
    links: [
      { label: 'HPS QR Menu',        href: '/platforms/hps-qr-menu',      rel: 'Live digital menus for hospitality' },
      { label: 'HPS QR Code',        href: '/platforms/hps-qr-code',      rel: 'Persistent QR infrastructure system' },
      { label: 'Hospitality QR',     href: '/hospitality',                 rel: 'Full hospitality QR overview' },
      { label: 'QR Systems',         href: '/services/qr-systems',        rel: 'QR implementation services' },
    ],
  },
  {
    eyebrow: 'Golf & Recreation',
    label: 'Course operations, sponsor systems, and guest engagement',
    desc: 'HPS Golf connects tee sheet data, sponsor QR infrastructure, clubhouse display systems, and push notification channels into one managed operational layer for modern course operators.',
    accent: 'var(--color-hps-green)',
    links: [
      { label: 'HPS Golf',           href: '/golf',                        rel: 'Complete golf operations platform' },
      { label: 'HPS Push',           href: '/platforms/hps-push',         rel: 'Round-day golfer notifications' },
      { label: 'HPS QR Code',        href: '/platforms/hps-qr-code',      rel: 'Cart and sponsor QR systems' },
      { label: 'Golf Ecosystem',     href: '/ecosystem/golf-recreation',  rel: 'Full industry pathway' },
    ],
  },
  {
    eyebrow: 'Client Infrastructure',
    label: 'Portal, file delivery, and client-facing systems',
    desc: 'The operational layer that handles how work is delivered, tracked, and accessed. Branded portals, audit-trailed file transfers, and the toolkit that runs the engagement from kickoff to handoff.',
    accent: 'var(--color-hps-ink)',
    links: [
      { label: 'HPS Client Portal',  href: '/platforms/hps-client-portal', rel: 'Project tracking and client access' },
      { label: 'HPS Transfer',       href: '/platforms/hps-transfer',      rel: 'Branded large file delivery' },
      { label: 'HPS Toolkit',        href: '/platforms/hps-toolkit',       rel: 'Internal and client-facing utilities' },
      { label: 'Enterprise Pathway', href: '/ecosystem/enterprise',        rel: 'Infrastructure for organizations' },
    ],
  },
  {
    eyebrow: 'Free Tools & Hosting',
    label: 'Entry points and owned infrastructure',
    desc: 'Free tools that solve real problems without a subscription gate — and hosting products that give businesses a production environment they actually own, at a scale that makes sense for how they operate.',
    accent: 'var(--color-hps-coral-warm)',
    links: [
      { label: 'HPS Ecommerce Tools', href: '/platforms/hps-ecommerce-tools', rel: 'Free WooCommerce utilities' },
      { label: 'HPS SEO Tools',       href: '/platforms/hps-seo-tools',       rel: 'Free on-demand SEO checks' },
      { label: 'All Hosting',         href: '/hosting',                        rel: 'Six managed hosting products' },
      { label: 'YourSitePlace',       href: '/hosting/yoursiteplace',          rel: 'First website for new businesses' },
    ],
  },
]

const connections = [
  {
    from: 'Golf Operations',
    to: 'Fabrication Lab',
    accent: 'var(--color-hps-green)',
    headline: 'Physical signage that updates digitally.',
    body: 'UV-printed sponsor plaques carry embedded QR codes managed through HPS QR Code. Destination and campaign content update from the dashboard without reprinting. Scan analytics feed directly into sponsor renewal conversations.',
    links: [{ label: 'HPS Golf', href: '/golf' }, { label: 'Fabrication Lab', href: '/fabrication' }],
  },
  {
    from: 'Accessibility',
    to: 'Client Portal + Hosting',
    accent: 'var(--color-hps-teal-dark)',
    headline: 'Compliance as continuous infrastructure.',
    body: 'Audit findings tracked through the Client Portal. Remediation managed on HPS-hosted environments. Documentation maintained through each release cycle — so the next legal review has a complete, dated evidence trail without a scramble.',
    links: [{ label: 'HPS Accessibility', href: '/accessibility' }, { label: 'Client Portal', href: '/client-portal' }],
  },
  {
    from: 'Media Systems',
    to: 'Creator Hub + Hosting',
    accent: 'var(--color-hps-gold)',
    headline: 'Content production through audience delivery, one workflow.',
    body: 'Assets created in HPS Media Studio. Delivered through Transfer. Hosted on HPS infrastructure. Audience reached through Push. Analytics consolidated in EngageTracker. One operational pipeline — no vendor chain, no translation loss.',
    links: [{ label: 'HPS Media', href: '/media' }, { label: 'Hosting', href: '/hosting' }],
  },
  {
    from: 'AI Systems',
    to: 'Operational Workflow',
    accent: 'var(--color-hps-teal)',
    headline: 'Automation at the workflow level, not the feature level.',
    body: 'Claude and n8n-based workflows operate behind content systems, reporting pipelines, and client communication flows. AI here is connective tissue between systems — not a product feature bolted onto the front of a page.',
    links: [{ label: 'AI Systems', href: '/ai-systems' }, { label: 'Platforms', href: '/platforms' }],
  },
]

const operationalFlows = [
  {
    label: 'Accessibility Pipeline',
    accent: 'var(--color-hps-teal-dark)',
    steps: [
      { n: '01', step: 'WCAG Audit',           desc: 'Automated + manual scan' },
      { n: '02', step: 'Issue Triage',          desc: 'Priority by legal exposure' },
      { n: '03', step: 'Code Remediation',      desc: 'Fix + re-verify each issue' },
      { n: '04', step: 'VPAT Documentation',    desc: 'Signed compliance record' },
      { n: '05', step: 'Ongoing Monitoring',    desc: 'Regression prevention' },
    ],
  },
  {
    label: 'Golf Operations',
    accent: 'var(--color-hps-green)',
    steps: [
      { n: '01', step: 'Sponsor Setup',         desc: 'Campaign + hole assignment' },
      { n: '02', step: 'Surface Production',    desc: 'UV plaques + QR printed' },
      { n: '03', step: 'Cart Deployment',       desc: 'QR infrastructure live' },
      { n: '04', step: 'Guest Engagement',      desc: 'Push + menu + display' },
      { n: '05', step: 'Revenue Analytics',     desc: 'Scan data → sponsor renewals' },
    ],
  },
  {
    label: 'Creator Infrastructure',
    accent: 'var(--color-hps-gold)',
    steps: [
      { n: '01', step: 'Asset Production',      desc: 'Content + audio sourcing' },
      { n: '02', step: 'Media Studio Workflow', desc: 'Calendar + approvals' },
      { n: '03', step: 'Transfer Delivery',     desc: 'Branded file distribution' },
      { n: '04', step: 'Push Distribution',     desc: 'Direct audience channel' },
      { n: '05', step: 'Cross-Platform Analytics', desc: 'Unified performance view' },
    ],
  },
  {
    label: 'Fabrication Pipeline',
    accent: 'var(--color-hps-coral-warm)',
    steps: [
      { n: '01', step: 'Concept & Brief',       desc: 'Substrate + method selected' },
      { n: '02', step: 'Production',            desc: 'UV, laser, DTG, or 3D' },
      { n: '03', step: 'QR Integration',        desc: 'Digital destination embedded' },
      { n: '04', step: 'Quality Review',        desc: 'Dimensional + color check' },
      { n: '05', step: 'Installation',          desc: 'In-field or direct ship' },
    ],
  },
]

const launchPathways = [
  {
    label: 'Course & Recreation Operations',
    accent: 'var(--color-hps-green)',
    desc: 'Signage, sponsor activation, QR infrastructure, clubhouse display, and guest engagement — connected and measurable.',
    ctAs: [
      { label: 'HPS Golf Ecosystem',         href: '/golf' },
      { label: 'Fabrication Lab',            href: '/fabrication' },
      { label: 'Sponsor Signage Systems',    href: '/services/sponsor-signage' },
      { label: 'Golf & Recreation Pathway',  href: '/ecosystem/golf-recreation' },
    ],
  },
  {
    label: 'Creator & Media Infrastructure',
    accent: 'var(--color-hps-gold)',
    desc: 'Link management, file delivery, licensed audio, audience push, and cross-platform analytics — without platform dependency.',
    ctAs: [
      { label: 'HPS Media',                  href: '/media' },
      { label: 'Platforms',                  href: '/platforms' },
      { label: 'Hosting & Infrastructure',   href: '/hosting' },
      { label: 'Creators & Media Pathway',   href: '/ecosystem/creators-media' },
    ],
  },
  {
    label: 'Compliance & Accessibility',
    accent: 'var(--color-hps-teal-dark)',
    desc: 'WCAG audit, Section 508 testing, remediation, compliance documentation, and continuous monitoring — the full pipeline.',
    ctAs: [
      { label: 'HPS Accessibility',          href: '/accessibility' },
      { label: 'Enterprise Pathway',         href: '/ecosystem/enterprise' },
      { label: 'Client Portal',              href: '/client-portal' },
      { label: 'hpsaccessibility.com ↗',     href: 'https://hpsaccessibility.com', external: true },
    ],
  },
  {
    label: 'Production & Fabrication',
    accent: 'var(--color-hps-coral-warm)',
    desc: 'UV printing, laser engraving, DTG apparel, sublimation, embroidery, signage, and QR-connected physical surfaces.',
    ctAs: [
      { label: 'Fabrication Lab',            href: '/fabrication' },
      { label: 'Services Overview',          href: '/services' },
      { label: 'UV Printing & Signage',      href: '/services/uv-printing' },
      { label: 'QR-Connected Surfaces',      href: '/services/qr-connected-surfaces' },
    ],
  },
]

const verticals = [
  {
    slug: 'golf-recreation',
    name: 'Golf & Recreation',
    desc: 'Course operations, sponsor activation, display systems, and QR infrastructure for modern golf courses.',
    accent: 'var(--color-hps-green)',
    tag: 'Course Management',
  },
  {
    slug: 'hospitality-restaurants',
    name: 'Hospitality & Restaurants',
    desc: 'Live QR menus, review management, and push notification re-engagement for hospitality operators.',
    accent: 'var(--color-hps-gold-rich)',
    tag: 'Table Service',
  },
  {
    slug: 'healthcare-accessibility',
    name: 'Healthcare & Accessibility',
    desc: 'WCAG 2.1 and Section 508 audit, remediation, and compliance documentation for healthcare and federal clients.',
    accent: 'var(--color-hps-teal-dark)',
    tag: 'Compliance',
  },
  {
    slug: 'enterprise',
    name: 'Enterprise & Professional Services',
    desc: 'Uptime monitoring, accessibility compliance, SEO health, analytics, and secure file delivery at organizational scale.',
    accent: 'var(--color-hps-ink)',
    tag: 'Infrastructure',
  },
  {
    slug: 'local-business',
    name: 'Local Business',
    desc: 'Review presence, QR systems, local SEO monitoring, and push channel for single-location operations.',
    accent: 'var(--color-hps-coral-warm)',
    tag: 'Visibility',
  },
  {
    slug: 'creators-media',
    name: 'Creators & Media',
    desc: 'Bio link management, large file delivery, cross-platform analytics, and audience push for independent creators.',
    accent: 'var(--color-hps-gold)',
    tag: 'Distribution',
  },
]

export default function EcosystemsPage() {
  usePageMeta({
    title: 'The Ecosystem',
    description: 'Twenty platforms, six industries, and every production capability from one Leesburg, Florida studio. Explore the full HPS ecosystem.',
  })
  return (
    <>
      <div style={{ position: 'relative', isolation: 'isolate' }}>
      <BackgroundAtmosphere mood="citrus" intensity="whisper" density="sparse" />
      <PageHeader
        eyebrow="All Systems, One Studio"
        title="The HPS Ecosystem"
        description="Digital infrastructure, physical fabrication, and connected surfaces produced and managed by the same team, from the same location."
        accentColor="var(--color-hps-green)"
      />

      {/* ── Four Pillars ────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ background: 'var(--color-hps-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {pillars.map((p, i) => (
              <Link
                key={p.href}
                to={p.href}
                data-reveal
                data-reveal-delay={String(i * 80)}
                className="group block rounded-sm p-8 lg:p-10 transition-all duration-300"
                style={{
                  background: 'var(--color-hps-parchment)',
                  border: '1px solid rgba(200,180,154,0.40)',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = p.accent
                  e.currentTarget.style.boxShadow = '0 8px 24px -4px rgba(12,20,32,0.10)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(200,180,154,0.40)'
                  e.currentTarget.style.boxShadow = ''
                }}
              >
                <p
                  className="font-mono uppercase mb-3"
                  style={{ fontSize: '0.6rem', letterSpacing: '0.22em', color: p.accent }}
                >
                  {p.tag}
                </p>
                <h2
                  className="font-display text-hps-ink mb-3 transition-colors duration-200"
                  style={{ fontSize: '1.75rem', lineHeight: 1.1 }}
                >
                  {p.label}
                </h2>
                <p className="font-body text-sm text-hps-smoke leading-relaxed mb-5">
                  {p.desc}
                </p>
                <span
                  className="font-mono uppercase"
                  style={{ fontSize: '0.65rem', letterSpacing: '0.14em', color: p.accent }}
                >
                  Explore →
                </span>
              </Link>
            ))}
          </div>

          {/* Ecosystem connection narratives */}
          <div
            data-reveal
            className="mt-16 lg:mt-20 pt-12 border-t"
            style={{ borderColor: 'rgba(200,180,154,0.40)' }}
          >
            <div className="max-w-xl mb-10">
              <p className="font-mono uppercase mb-3" style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--color-hps-green)' }}>
                How the systems connect
              </p>
              <h3 className="font-display text-hps-ink" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', lineHeight: 1.1 }}>
                Operational relationships.
              </h3>
              <p className="font-body text-hps-smoke leading-relaxed mt-3" style={{ fontSize: '0.9375rem' }}>
                Digital infrastructure, physical fabrication, and connected surfaces are produced within the same operational relationship, by the same team. The physical and digital sides never separate, and nothing gets lost in translation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {connections.map((c, i) => (
                <div
                  key={c.from}
                  data-reveal
                  data-reveal-delay={String((i % 2) * 80)}
                  className="rounded-sm p-6"
                  style={{
                    background: 'var(--color-hps-parchment)',
                    border: '1px solid rgba(200,180,154,0.40)',
                    borderLeft: `3px solid ${c.accent}`,
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono" style={{ fontSize: '0.58rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: c.accent }}>{c.from}</span>
                    <span style={{ color: 'rgba(200,180,154,0.70)', fontSize: '0.7rem' }}>→</span>
                    <span className="font-mono" style={{ fontSize: '0.58rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-hps-smoke)', opacity: 0.75 }}>{c.to}</span>
                  </div>
                  <p className="font-display mb-2" style={{ fontSize: '1rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}>{c.headline}</p>
                  <p className="font-body mb-4" style={{ fontSize: '0.875rem', color: 'var(--color-hps-smoke)', lineHeight: 1.65 }}>{c.body}</p>
                  <div className="flex gap-4">
                    {c.links.map(l => (
                      <Link key={l.href} to={l.href} className="font-mono transition-colors duration-200" style={{ fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: c.accent, textDecoration: 'none' }}
                        onMouseEnter={e => (e.currentTarget.style.opacity = '0.70')}
                        onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                      >
                        {l.label} →
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Ecosystem Clusters ──────────────────────────────────────── */}
      <section
        className="py-16 lg:py-24 border-t"
        style={{ background: 'var(--color-hps-parchment)', borderColor: 'rgba(200,180,154,0.40)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-14">
            <p
              className="font-mono uppercase mb-3"
              style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-green)' }}
            >
              Platform clusters
            </p>
            <h2
              className="font-display mb-4"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}
            >
              How the platforms group
            </h2>
            <p
              className="font-body max-w-xl"
              style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)', lineHeight: 1.65 }}
            >
              Twenty platforms organized by operational function. Each cluster solves a specific layer of the problem — and they're built to be combined.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {clusters.map((cluster, i) => (
              <div
                key={cluster.label}
                data-reveal
                data-reveal-delay={String((i % 2) * 80)}
                className="rounded-sm p-8"
                style={{
                  background: 'var(--color-hps-cream)',
                  border: '1px solid rgba(200,180,154,0.40)',
                  borderTop: `3px solid ${cluster.accent}`,
                }}
              >
                <p
                  className="font-mono uppercase mb-2"
                  style={{ fontSize: '0.58rem', letterSpacing: '0.2em', color: cluster.accent }}
                >
                  {cluster.eyebrow}
                </p>
                <h3
                  className="font-display mb-3"
                  style={{ fontSize: '1.25rem', color: 'var(--color-hps-ink)', lineHeight: 1.15 }}
                >
                  {cluster.label}
                </h3>
                <p
                  className="font-body text-sm leading-relaxed mb-6"
                  style={{ color: 'var(--color-hps-smoke)' }}
                >
                  {cluster.desc}
                </p>
                <div className="flex flex-col gap-2.5">
                  {cluster.links.map(link => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="group flex items-start gap-3 transition-colors duration-200"
                      style={{ textDecoration: 'none' }}
                    >
                      <div
                        className="shrink-0 w-1 h-1 rounded-full mt-1.5"
                        style={{ background: cluster.accent }}
                        aria-hidden="true"
                      />
                      <div>
                        <span
                          className="font-body font-medium block group-hover:underline"
                          style={{ fontSize: '0.875rem', color: 'var(--color-hps-ink)' }}
                        >
                          {link.label}
                        </span>
                        <span
                          className="font-body block"
                          style={{ fontSize: '0.8125rem', color: 'var(--color-hps-smoke)' }}
                        >
                          {link.rel}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Accessibility & Compliance Authority ───────────────────── */}
      <section
        className="py-16 lg:py-24 border-t"
        style={{ background: 'var(--color-hps-cream)', borderColor: 'rgba(200,180,154,0.40)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            <div data-reveal>
              <p
                className="font-mono uppercase mb-4"
                style={{ fontSize: '0.6rem', letterSpacing: '0.22em', color: 'var(--color-hps-teal-dark)' }}
              >
                Accessibility & Compliance Systems
              </p>
              <h2
                className="font-display mb-5"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.08 }}
              >
                Enterprise accessibility infrastructure.
              </h2>
              <p
                className="font-body leading-relaxed mb-4"
                style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)' }}
              >
                HPS Accessibility delivers a structured, documented audit-to-remediation-to-monitoring pipeline built around WCAG 2.1 AA/AAA, Section 508, and ADA Title III requirements. This is a compliance methodology, not an automated scan tool. Testing is manual: NVDA, JAWS, VoiceOver, and keyboard-only navigation across every critical user flow.
              </p>
              <p
                className="font-body leading-relaxed mb-6"
                style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)' }}
              >
                Healthcare organizations, federal contractors, universities, and enterprise clients rely on HPS Accessibility for the certification documentation that legal review and procurement teams actually require — VPATs, formal audit reports, and ongoing compliance monitoring records.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://hpsaccessibility.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-body font-medium text-sm rounded-sm transition-all duration-200"
                  style={{
                    padding: '0.65rem 1.4rem',
                    background: 'var(--color-hps-teal-dark)',
                    color: '#ffffff',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  Explore HPS Accessibility →
                </a>
                <a
                  href="/accessibility"
                  className="inline-flex items-center font-body font-medium text-sm rounded-sm transition-all duration-200"
                  style={{
                    padding: '0.65rem 1.4rem',
                    background: 'transparent',
                    color: 'var(--color-hps-teal-dark)',
                    border: '1px solid rgba(13,148,136,0.30)',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--color-hps-teal-dark)'
                    e.currentTarget.style.background = 'rgba(13,148,136,0.05)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(13,148,136,0.30)'
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  Accessibility Services
                </a>
              </div>
            </div>

            <div data-reveal data-reveal-delay="80">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    label: 'WCAG Audit',
                    desc: 'Full WCAG 2.1 AA and AAA automated crawl plus manual testing across critical user flows. Findings mapped to criterion, impact severity, and remediation priority.',
                  },
                  {
                    label: 'Section 508 Testing',
                    desc: 'Manual verification with NVDA, JAWS, VoiceOver, and keyboard-only navigation. The testing protocols that federal procurement and legal review actually require.',
                  },
                  {
                    label: 'Remediation Workflows',
                    desc: 'Prioritized issue roadmap with code-level fix guidance, assigned to responsible teams, tracked through resolution — not a spreadsheet dropped and forgotten.',
                  },
                  {
                    label: 'Compliance Documentation',
                    desc: 'Signed VPATs, formal audit reports, and remediation records ready for legal review, contract compliance, and ADA good-faith defense.',
                  },
                  {
                    label: 'Ongoing Monitoring',
                    desc: 'Continuous scanning catches regressions introduced by new releases before they reach production. Monthly compliance health reports for documentation continuity.',
                  },
                  {
                    label: 'Healthcare & Federal',
                    desc: 'Patient portal accessibility, Section 508 federal compliance, and ADA Title III obligations — with the documented evidence trail that healthcare and government clients require.',
                  },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    data-reveal
                    data-reveal-delay={String((i % 2) * 60)}
                    className="rounded-sm p-5"
                    style={{
                      background: 'var(--color-hps-parchment)',
                      border: '1px solid rgba(200,180,154,0.40)',
                    }}
                  >
                    <div
                      className="w-4 h-px mb-3"
                      style={{ background: 'var(--color-hps-teal-dark)' }}
                      aria-hidden="true"
                    />
                    <p
                      className="font-display mb-1.5"
                      style={{ fontSize: '0.9375rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="font-body text-sm leading-relaxed"
                      style={{ color: 'var(--color-hps-smoke)' }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Industry Pathways ──────────────────────────────────────── */}
      <section
        className="py-16 lg:py-24 border-t"
        style={{ background: 'var(--color-hps-parchment)', borderColor: 'rgba(200,180,154,0.40)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-10">
            <p
              className="font-mono uppercase mb-3"
              style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-green)' }}
            >
              Industry pathways
            </p>
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}
            >
              Built for your vertical
            </h2>
            <p
              className="font-body mt-3 max-w-lg"
              style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)', lineHeight: 1.65 }}
            >
              Each industry has a different set of operational problems. These pathways show how HPS platforms combine for your specific context.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {verticals.map((v, i) => (
              <Link
                key={v.slug}
                to={`/ecosystem/${v.slug}`}
                data-reveal
                data-reveal-delay={String((i % 3) * 60)}
                style={{ textDecoration: 'none' }}
              >
                <div
                  className="relative rounded-sm p-6 h-full transition-all duration-300"
                  style={{
                    background: 'var(--color-hps-parchment)',
                    border: '1px solid rgba(200,180,154,0.40)',
                    borderTop: `3px solid ${v.accent}`,
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
                    className="font-mono uppercase mb-3"
                    style={{ fontSize: '0.58rem', letterSpacing: '0.18em', color: v.accent }}
                  >
                    {v.tag}
                  </p>
                  <h3
                    className="font-display mb-3"
                    style={{ fontSize: '1.25rem', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}
                  >
                    {v.name}
                  </h3>
                  <p
                    className="font-body text-sm leading-relaxed mb-5"
                    style={{ color: 'var(--color-hps-smoke)' }}
                  >
                    {v.desc}
                  </p>
                  <span
                    className="font-mono uppercase"
                    style={{ fontSize: '0.6rem', letterSpacing: '0.18em', color: v.accent }}
                  >
                    Explore pathway →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Operational Flow Pipelines ────────────────────────────── */}
      <section
        className="py-16 lg:py-24 border-t"
        style={{ background: 'var(--color-hps-cream)', borderColor: 'rgba(200,180,154,0.40)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-12">
            <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-green)' }}>
              Follow the work
            </p>
            <h2 className="font-display mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
              Operational flow pipelines.
            </h2>
            <p className="font-body max-w-xl" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)', lineHeight: 1.65 }}>
              Every HPS service category has a defined production pathway — from first contact to recurring operational continuity. These are the flows, not the features.
            </p>
          </div>

          <div className="flex flex-col gap-10">
            {operationalFlows.map((flow, fi) => (
              <div key={flow.label} data-reveal data-reveal-delay={String(fi * 60)}>
                <p className="font-mono uppercase mb-4" style={{ fontSize: '0.58rem', letterSpacing: '0.18em', color: flow.accent }}>
                  {flow.label}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-0">
                  {flow.steps.flatMap((step, i, arr) => {
                    const items = [
                      <div
                        key={step.n}
                        className="sm:flex-1 rounded-sm p-4"
                        style={{ background: 'var(--color-hps-parchment)', border: '1px solid rgba(200,180,154,0.40)', minWidth: 0 }}
                      >
                        <p className="font-mono mb-1" style={{ fontSize: '0.55rem', letterSpacing: '0.15em', color: flow.accent, opacity: 0.70 }}>{step.n}</p>
                        <p className="font-display mb-1" style={{ fontSize: '0.875rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}>{step.step}</p>
                        <p className="font-body" style={{ fontSize: '0.75rem', color: 'var(--color-hps-smoke)', lineHeight: 1.5 }}>{step.desc}</p>
                      </div>,
                    ]
                    if (i < arr.length - 1) {
                      items.push(
                        <div key={`arr-${fi}-${i}`} className="hidden sm:flex items-center justify-center px-1 shrink-0" aria-hidden="true" style={{ color: flow.accent, opacity: 0.45, fontSize: '0.75rem', paddingTop: '1.25rem' }}>→</div>
                      )
                    }
                    return items
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI as Operational Infrastructure ──────────────────────── */}
      <section
        className="py-16 lg:py-24 border-t"
        style={{ background: 'var(--color-hps-parchment)', borderColor: 'rgba(200,180,154,0.40)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            <div data-reveal>
              <p className="font-mono uppercase mb-4" style={{ fontSize: '0.6rem', letterSpacing: '0.22em', color: 'var(--color-hps-teal)' }}>
                AI & Operational Intelligence
              </p>
              <h2 className="font-display mb-5" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.08 }}>
                AI as infrastructure, not hype.
              </h2>
              <p className="font-body leading-relaxed mb-4" style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)' }}>
                n8n-based workflow orchestration and Claude integration runs behind content systems, client communication pipelines, reporting automation, and operational data enrichment at HPS. This is production infrastructure, not an experiment.
              </p>
              <p className="font-body leading-relaxed mb-6" style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)' }}>
                The value is in the compounding: each workflow that runs without manual intervention is capacity returned to higher-leverage work. After 90 days of operational AI, it isn't a capability — it's the baseline.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/ai-systems" style={{ display: 'inline-block', padding: '0.65rem 1.4rem', background: 'var(--color-hps-teal)', color: '#ffffff', borderRadius: '2px', textDecoration: 'none', fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 500 }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  AI Systems Overview →
                </Link>
                <Link to="/platforms" style={{ display: 'inline-block', padding: '0.65rem 1.4rem', background: 'transparent', color: 'var(--color-hps-teal)', border: '1px solid rgba(20,184,166,0.35)', borderRadius: '2px', textDecoration: 'none', fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-hps-teal)'; e.currentTarget.style.background = 'rgba(20,184,166,0.05)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(20,184,166,0.35)'; e.currentTarget.style.background = 'transparent' }}
                >
                  All Platforms
                </Link>
              </div>
            </div>

            <div data-reveal data-reveal-delay="80">
              <div className="flex flex-col gap-4">
                {[
                  {
                    label: 'Content & Publishing Workflows',
                    desc: 'Brief → Claude-assisted draft → editorial review → scheduling → distribution. AI accelerates the process; the editor controls the output. No hallucinations shipped unchecked.',
                  },
                  {
                    label: 'Client Operations Automation',
                    desc: 'Project status → auto-update → client notification → portal sync → reporting export. The handoffs that fall through the cracks in every busy studio — automated and documented.',
                  },
                  {
                    label: 'Compliance & Monitoring Triggers',
                    desc: 'Accessibility scan schedules, SEO audit triggers, uptime alert routing, and compliance report generation — operational cadence without a dedicated coordinator.',
                  },
                  {
                    label: 'Data Enrichment & Reporting',
                    desc: 'Analytics → insight extraction → structured summary → decision input. Numbers without interpretation are expensive noise. AI converts measurement into operational signal.',
                  },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    data-reveal
                    data-reveal-delay={String(i * 60)}
                    className="rounded-sm p-5"
                    style={{ background: 'var(--color-hps-cream)', border: '1px solid rgba(200,180,154,0.40)', borderLeft: '3px solid var(--color-hps-teal)' }}
                  >
                    <p className="font-display mb-1.5" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}>{item.label}</p>
                    <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-hps-smoke)' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Ecosystem Launch Pathways ──────────────────────────────── */}
      <section
        className="py-16 lg:py-24 border-t"
        style={{ background: 'var(--color-hps-cream)', borderColor: 'rgba(200,180,154,0.40)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-12">
            <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-green)' }}>
              Ecosystem activation
            </p>
            <h2 className="font-display mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
              Launch your ecosystem.
            </h2>
            <p className="font-body max-w-xl" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)', lineHeight: 1.65 }}>
              Four operational entry points into the HPS ecosystem. Each pathway combines the platforms, services, and production capabilities that serve your specific context.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {launchPathways.map((pathway, i) => (
              <div
                key={pathway.label}
                data-reveal
                data-reveal-delay={String((i % 2) * 80)}
                className="rounded-sm p-7"
                style={{
                  background: 'var(--color-hps-parchment)',
                  border: '1px solid rgba(200,180,154,0.40)',
                  borderTop: `3px solid ${pathway.accent}`,
                }}
              >
                <p className="font-display mb-2" style={{ fontSize: '1.125rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}>{pathway.label}</p>
                <p className="font-body mb-5" style={{ fontSize: '0.875rem', color: 'var(--color-hps-smoke)', lineHeight: 1.65 }}>{pathway.desc}</p>
                <div className="flex flex-col gap-2.5">
                  {pathway.ctAs.map(cta => (
                    cta.external ? (
                      <a
                        key={cta.href}
                        href={cta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 transition-colors duration-200"
                        style={{ textDecoration: 'none' }}
                      >
                        <div className="shrink-0 w-1 h-1 rounded-full" style={{ background: pathway.accent }} aria-hidden="true" />
                        <span className="font-body font-medium" style={{ fontSize: '0.875rem', color: 'var(--color-hps-ink)' }}>{cta.label}</span>
                      </a>
                    ) : (
                      <Link
                        key={cta.href}
                        to={cta.href}
                        className="flex items-center gap-2 transition-colors duration-200"
                        style={{ textDecoration: 'none' }}
                      >
                        <div className="shrink-0 w-1 h-1 rounded-full" style={{ background: pathway.accent }} aria-hidden="true" />
                        <span className="font-body font-medium" style={{ fontSize: '0.875rem', color: 'var(--color-hps-ink)' }}
                          onMouseEnter={e => (e.currentTarget.style.color = pathway.accent)}
                          onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-hps-ink)')}
                        >{cta.label}</span>
                      </Link>
                    )
                  ))}
                </div>
                <div className="mt-5 pt-4" style={{ borderTop: '1px solid rgba(200,180,154,0.35)' }}>
                  <Link
                    to="/contact"
                    className="font-mono uppercase transition-colors duration-200"
                    style={{ fontSize: '0.6rem', letterSpacing: '0.16em', color: pathway.accent, textDecoration: 'none' }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.70')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                  >
                    Start a consultation →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Operational Partnership Arc ──────────────────────────── */}
      <section
        className="py-16 lg:py-24 border-t"
        style={{ background: 'var(--color-hps-parchment)', borderColor: 'rgba(200,180,154,0.40)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-12">
            <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-green)' }}>
              Long-term operational arc
            </p>
            <h2 className="font-display mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
              From first consultation to running infrastructure.
            </h2>
            <p className="font-body max-w-xl" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)', lineHeight: 1.65 }}>
              Every HPS engagement is designed with a long-term operational arc in mind — not just delivery, but continuity. Here is how that typically develops.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                n: '01',
                label: 'Setup & Integration',
                timeframe: 'Month 1',
                desc: 'Platforms configured, integrations mapped, team onboarding complete. Every system is aligned to your existing workflow before anything goes live.',
                accent: 'var(--color-hps-green)',
              },
              {
                n: '02',
                label: 'Active Operations',
                timeframe: 'Months 1–3',
                desc: 'Monitoring running, workflows active, analytics collecting. The systems handle the repeatable work your team previously did manually.',
                accent: 'var(--color-hps-teal)',
              },
              {
                n: '03',
                label: 'Compounding Infrastructure',
                timeframe: 'Months 3–6',
                desc: 'Analytics inform content decisions. QR scan data validates signage placement. Uptime history documents reliability. Systems connect and add signal to each other.',
                accent: 'var(--color-hps-teal-dark)',
              },
              {
                n: '04',
                label: 'Operational Continuity',
                timeframe: 'Ongoing',
                desc: "After six months, it isn't a set of tools — it's the operational baseline. New capabilities extend naturally from what is already running.",
                accent: 'var(--color-hps-ink)',
              },
            ].map((phase, i) => (
              <div
                key={phase.n}
                data-reveal
                data-reveal-delay={String(i * 80)}
                className="rounded-sm p-6"
                style={{
                  background: 'var(--color-hps-cream)',
                  border: '1px solid rgba(200,180,154,0.40)',
                  borderTop: `3px solid ${phase.accent}`,
                }}
              >
                <div className="flex items-baseline gap-2 mb-3">
                  <span
                    className="font-mono"
                    style={{ fontSize: '1rem', color: phase.accent, opacity: 0.35, lineHeight: 1 }}
                    aria-hidden="true"
                  >
                    {phase.n}
                  </span>
                  <span className="font-mono uppercase" style={{ fontSize: '0.55rem', letterSpacing: '0.14em', color: 'var(--color-hps-smoke)', opacity: 0.65 }}>
                    {phase.timeframe}
                  </span>
                </div>
                <p className="font-display mb-3" style={{ fontSize: '1rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}>
                  {phase.label}
                </p>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-hps-smoke)' }}>
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>

          <div
            data-reveal
            className="mt-10 pt-8"
            style={{ borderTop: '1px solid rgba(200,180,154,0.35)' }}
          >
            <p className="font-body mb-5 max-w-2xl" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)', lineHeight: 1.65 }}>
              This arc is built into how every engagement is scoped and handed off. The first phase is faster when you bring operational context to the consultation — what you are running, what is not working, and what the next six months need to produce.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center font-body font-medium text-sm rounded-sm transition-all duration-200"
              style={{ padding: '0.65rem 1.4rem', background: 'var(--color-hps-green)', color: '#ffffff', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Start the first phase →
            </Link>
          </div>
        </div>
      </section>

      </div>{/* end atmosphere wrapper */}

      <CTABand />
    </>
  )
}
