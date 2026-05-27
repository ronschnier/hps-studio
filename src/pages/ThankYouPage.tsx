import { Link } from 'react-router-dom'
import BackgroundAtmosphere from '../components/decorative/BackgroundAtmosphere'
import CTABand from '../components/sections/CTABand'

const nextSteps = [
  {
    step: '01',
    heading: 'We review your request',
    body: 'Every consultation submission is read personally before we respond. We use what you shared to understand your goals and operational context.',
  },
  {
    step: '02',
    heading: 'We reach back within one business day',
    body: 'You\'ll hear from Ron or Deb directly — not a template, not a scheduling bot. We\'ll suggest a time that works for a focused conversation.',
  },
  {
    step: '03',
    heading: 'We come prepared',
    body: 'Your first conversation with HPS is not introductory small talk. We\'ll already have perspective on how the ecosystem can serve your specific situation.',
  },
  {
    step: '04',
    heading: 'The relationship begins',
    body: 'HPS works as an operational partner over time, not a one-time vendor. The consultation is how we decide, together, whether this is a good fit.',
  },
]

const exploreLinks = [
  { label: 'Fabrication Lab',    href: '/fabrication',  desc: 'UV printing, laser systems, signage, apparel, 3D printing.' },
  { label: 'HPS Golf Ecosystem', href: '/golf',          desc: 'Sponsor signage, plaques, QR surfaces, and course identity.' },
  { label: 'Hosting & Infra',    href: '/hosting',       desc: 'Managed hosting, uptime monitoring, and migrations.' },
  { label: 'Platforms',          href: '/platforms',     desc: 'Digital tools and connected operational systems.' },
  { label: 'AI Systems',         href: '/ai-systems',    desc: 'Workflow automation and operational intelligence.' },
  { label: 'Ecosystems',         href: '/ecosystems',    desc: 'Understand how the full HPS ecosystem connects.' },
]

export default function ThankYouPage() {
  return (
    <>
      <div style={{ position: 'relative', isolation: 'isolate' }}>
        <BackgroundAtmosphere mood="citrus" intensity="whisper" density="sparse" />

        {/* ── Confirmation header ─────────────────────────────────── */}
        <section
          className="pt-32 lg:pt-44 pb-16 lg:pb-20"
          style={{ background: 'var(--color-hps-cream)' }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-2xl">
              <div
                className="inline-flex items-center gap-2 mb-8"
                style={{ padding: '0.5rem 1rem', background: 'var(--color-hps-parchment)', borderRadius: '2px', border: '1px solid rgba(200,180,154,0.40)' }}
              >
                <span style={{ fontSize: '0.7rem', color: 'var(--color-hps-green)' }} aria-hidden="true">✓</span>
                <span className="font-mono uppercase" style={{ fontSize: '0.58rem', letterSpacing: '0.18em', color: 'var(--color-hps-green)' }}>
                  Request received
                </span>
              </div>

              <div className="w-8 h-px mb-6" style={{ background: 'var(--color-hps-green)' }} aria-hidden="true" />

              <h1
                data-reveal
                className="font-display mb-5"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', color: 'var(--color-hps-ink)', lineHeight: 1.03 }}
              >
                You're on the path.
              </h1>
              <p
                data-reveal
                data-reveal-delay="80"
                className="font-body leading-relaxed"
                style={{ fontSize: '1.125rem', color: 'var(--color-hps-smoke)', maxWidth: '34rem' }}
              >
                Your consultation request has been received. We review every submission personally before we respond — you will hear from us within one business day.
              </p>
            </div>
          </div>
        </section>

        {/* ── What happens next ───────────────────────────────────── */}
        <section
          className="py-16 lg:py-20"
          style={{ background: 'var(--color-hps-parchment)' }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-xl mb-10">
              <p className="font-mono uppercase mb-3" style={{ fontSize: '0.62rem', letterSpacing: '0.22em', color: 'var(--color-hps-green)' }}>
                What happens next
              </p>
              <h2 className="font-display" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
                The consultation process.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {nextSteps.map((s, i) => (
                <div
                  key={s.step}
                  data-reveal
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <p
                    className="font-mono"
                    style={{ fontSize: '0.55rem', letterSpacing: '0.20em', color: 'var(--color-hps-smoke)', opacity: 0.55, marginBottom: '0.625rem' }}
                  >
                    {s.step}
                  </p>
                  <p className="font-display mb-3" style={{ fontSize: '1rem', color: 'var(--color-hps-ink)', lineHeight: 1.25 }}>
                    {s.heading}
                  </p>
                  <p className="font-body" style={{ fontSize: '0.875rem', color: 'var(--color-hps-smoke)', lineHeight: 1.65 }}>
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Operational arc ─────────────────────────────────────── */}
        <section
          className="py-14 lg:py-20"
          style={{ background: 'var(--color-hps-parchment)' }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-xl mb-10">
              <p
                className="font-mono uppercase mb-3"
                style={{ fontSize: '0.62rem', letterSpacing: '0.22em', color: 'var(--color-hps-teal-dark)' }}
              >
                After the consultation
              </p>
              <h2
                className="font-display"
                style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}
              >
                The operational arc begins.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {(
                [
                  {
                    phase: 'Consultation',
                    label: 'Scope & ecosystem mapping',
                    desc: 'We identify which HPS systems fit your operation, in what order to activate them, and what the first build phase looks like.',
                    accent: 'var(--color-hps-green)',
                  },
                  {
                    phase: 'Kickoff',
                    label: 'Portal provisioned, project initiated',
                    desc: 'You receive Client Portal access on kickoff day. The project structure, milestones, and first deliverables are visible from day one.',
                    accent: 'var(--color-hps-teal-dark)',
                  },
                  {
                    phase: 'Active Operations',
                    label: 'Systems configured and deployed',
                    desc: 'Platforms go live, hosting is established, fabrication runs on the production schedule. Every delivery is documented in the portal.',
                    accent: 'var(--color-hps-gold-rich)',
                  },
                  {
                    phase: 'Long-Term Partnership',
                    label: 'Ongoing optimization and growth',
                    desc: 'HPS remains your operational partner after launch. As your needs grow, the ecosystem grows with you — one connected system, always managed.',
                    accent: 'var(--color-hps-coral-warm)',
                  },
                ] as { phase: string; label: string; desc: string; accent: string }[]
              ).map((item, i) => (
                <div
                  key={item.phase}
                  data-reveal
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div
                    className="w-5 h-px mb-4"
                    style={{ background: item.accent }}
                    aria-hidden="true"
                  />
                  <p
                    className="font-mono uppercase mb-2"
                    style={{ fontSize: '0.52rem', letterSpacing: '0.18em', color: item.accent, opacity: 0.85 }}
                  >
                    {item.phase}
                  </p>
                  <p
                    className="font-display mb-3"
                    style={{ fontSize: '1rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}
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
            <div
              data-reveal
              className="mt-8 pt-6 border-t"
              style={{ borderColor: 'rgba(200,180,154,0.40)' }}
            >
              <Link
                to="/client-portal"
                className="font-mono uppercase transition-opacity duration-200"
                style={{ fontSize: '0.62rem', letterSpacing: '0.16em', color: 'var(--color-hps-teal-dark)', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.65')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                About the HPS Client Portal →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Relationship language ───────────────────────────────── */}
        <section
          className="py-14 lg:py-18"
          style={{ background: 'var(--color-hps-cream)' }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-2xl">
              <p className="font-mono uppercase mb-3" style={{ fontSize: '0.62rem', letterSpacing: '0.20em', color: 'var(--color-hps-smoke)', opacity: 0.70 }}>
                How HPS works
              </p>
              <p
                data-reveal
                className="font-display leading-snug mb-6"
                style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', color: 'var(--color-hps-ink)', lineHeight: 1.15 }}
              >
                This is the beginning of an operational relationship — not a transaction.
              </p>
              <p
                data-reveal
                data-reveal-delay="60"
                className="font-body leading-relaxed"
                style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)', maxWidth: '36rem', marginBottom: '1.25rem' }}
              >
                HPS clients don't get a project manager and a ticket system. They get a studio that understands their operation, thinks ahead, and integrates across fabrication, digital, hosting, and platform systems — as a single connected partner.
              </p>
              <p
                data-reveal
                data-reveal-delay="120"
                className="font-body leading-relaxed"
                style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)', maxWidth: '36rem' }}
              >
                The free consultation is where we figure out whether that's what you need. No pressure to proceed. No pitch. Just a direct conversation about what's going on in your operation and what we can build together.
              </p>
            </div>
          </div>
        </section>

        {/* ── Explore while you wait ──────────────────────────────── */}
        <section
          className="py-16 lg:py-20"
          style={{ background: 'var(--color-hps-parchment)' }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-xl mb-10">
              <p className="font-mono uppercase mb-3" style={{ fontSize: '0.62rem', letterSpacing: '0.22em', color: 'var(--color-hps-smoke)', opacity: 0.70 }}>
                In the meantime
              </p>
              <h2 className="font-display" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
                Explore the ecosystem.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {exploreLinks.map((item, i) => (
                <Link
                  key={item.href}
                  to={item.href}
                  data-reveal
                  style={{
                    display: 'block',
                    padding: '1.125rem 1.25rem',
                    background: 'var(--color-hps-cream)',
                    border: '1px solid rgba(200,180,154,0.40)',
                    borderRadius: '2px',
                    textDecoration: 'none',
                    transitionDelay: `${i * 40}ms`,
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--color-hps-green)'
                    e.currentTarget.style.boxShadow = '0 2px 12px rgba(12,20,32,0.06)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(200,180,154,0.40)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <p className="font-display mb-1.5" style={{ fontSize: '1rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}>
                    {item.label}
                  </p>
                  <p className="font-body" style={{ fontSize: '0.8125rem', color: 'var(--color-hps-smoke)', lineHeight: 1.55 }}>
                    {item.desc}
                  </p>
                </Link>
              ))}
            </div>

            <div className="mt-10">
              <Link
                to="/"
                className="font-mono uppercase transition-colors duration-200"
                style={{ fontSize: '0.65rem', letterSpacing: '0.18em', color: 'var(--color-hps-smoke)', textDecoration: 'none', opacity: 0.70 }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.color = 'var(--color-hps-ink)' }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '0.70'; e.currentTarget.style.color = 'var(--color-hps-smoke)' }}
              >
                ← Back to home
              </Link>
            </div>
          </div>
        </section>

        {/* ── Direct contact ──────────────────────────────────────── */}
        <section
          className="py-14 lg:py-16 border-t"
          style={{ background: 'var(--color-hps-cream)', borderColor: 'rgba(200,180,154,0.40)' }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <p className="font-body" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}>
                Questions before we connect?{' '}
                <a
                  href="tel:+13522907744"
                  style={{ color: 'var(--color-hps-ink)', textDecoration: 'none', fontWeight: 500 }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-hps-green)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-hps-ink)')}
                >
                  352-290-7744
                </a>
                {' '}·{' '}
                <a
                  href="mailto:hello@happypathstudios.com"
                  style={{ color: 'var(--color-hps-ink)', textDecoration: 'none', fontWeight: 500 }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-hps-green)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-hps-ink)')}
                >
                  hello@happypathstudios.com
                </a>
              </p>
              <p className="font-mono" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', color: 'var(--color-hps-smoke)', opacity: 0.60 }}>
                Leesburg, Florida · Lake County
              </p>
            </div>
          </div>
        </section>

      </div>

      <CTABand
        headline="The ecosystem is ready."
        subhead="Production. Digital. Hosting. AI. All of it connected — and all of it yours to explore."
        buttonText="Browse the Ecosystem"
        buttonHref="/ecosystems"
        showPhone={false}
      />
    </>
  )
}
