import { Link } from 'react-router-dom'
import CTABand from '../components/sections/CTABand'
import BackgroundAtmosphere from '../components/decorative/BackgroundAtmosphere'

const supportChannels = [
  {
    name: 'Active Project Support',
    desc: 'Questions, change requests, and issue reports for projects currently in delivery. Attach screenshots or URLs when relevant.',
  },
  {
    name: 'Website Updates',
    desc: 'Content edits, layout changes, copy revisions, and page-level updates to live HPS-built sites.',
  },
  {
    name: 'Hosting & DNS',
    desc: 'Questions about your hosting plan, domain configuration, SSL, email routing, or uptime incidents on HPS-managed infrastructure.',
  },
  {
    name: 'Platform Access',
    desc: 'Login issues, permission changes, and access requests for HPS platforms including dashboards and connected tools.',
  },
  {
    name: 'Production Requests',
    desc: 'Fabrication reorders, print runs, sign updates, and any in-house production work tied to an active account.',
  },
  {
    name: 'Accessibility Follow-Up',
    desc: 'Developer questions from a delivered audit report, re-test requests after remediation, and compliance monitoring check-ins.',
  },
]

export default function SupportPage() {
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
                style={{ background: 'var(--color-hps-ink)' }}
                aria-hidden="true"
              />
              <p
                className="font-mono uppercase mb-4"
                style={{ fontSize: '0.65rem', letterSpacing: '0.22em', color: 'var(--color-hps-ink)', opacity: 0.55 }}
              >
                HPS Client Infrastructure
              </p>
              <h1
                data-reveal
                className="font-display mb-6"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', color: 'var(--color-hps-ink)', lineHeight: 1.03 }}
              >
                Support &amp; Project Access
              </h1>
              <p
                data-reveal
                data-reveal-delay="80"
                className="font-body leading-relaxed mb-3"
                style={{ fontSize: '1.125rem', color: 'var(--color-hps-smoke)', maxWidth: '40rem' }}
              >
                Get help with active projects, hosted systems, production requests, accessibility follow-up, and ongoing operational support.
              </p>
              <p
                data-reveal
                data-reveal-delay="160"
                className="font-body leading-relaxed"
                style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)', maxWidth: '40rem', opacity: 0.85 }}
              >
                Include the URL or project name, a clear description of what needs to change, and any deadline worth noting.
              </p>
              <div data-reveal data-reveal-delay="240" className="flex flex-wrap gap-3 mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center font-body font-medium rounded-sm transition-all duration-200"
                  style={{
                    padding: '0.75rem 1.75rem',
                    background: 'var(--color-hps-ink)',
                    color: 'var(--color-hps-cream)',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-hps-green-dark)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-hps-ink)')}
                >
                  Request Support
                </Link>
                <Link
                  to="/client-portal"
                  className="inline-flex items-center justify-center font-body font-medium rounded-sm transition-all duration-200"
                  style={{
                    padding: '0.75rem 1.75rem',
                    background: 'transparent',
                    color: 'var(--color-hps-ink)',
                    border: '1px solid rgba(12,20,32,0.25)',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--color-hps-ink)'
                    e.currentTarget.style.background = 'rgba(12,20,32,0.05)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(12,20,32,0.25)'
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  Client Portal
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Support Channels ────────────────────────────────────────── */}
        <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-parchment)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div data-reveal className="mb-10">
              <p
                className="font-mono uppercase mb-3"
                style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-ink)', opacity: 0.55 }}
              >
                What we support
              </p>
              <h2
                className="font-display"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}
              >
                Support request types
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {supportChannels.map((ch, i) => (
                <div
                  key={ch.name}
                  data-reveal
                  data-reveal-delay={String((i % 3) * 60)}
                  className="rounded-sm p-6"
                  style={{
                    background: 'var(--color-hps-cream)',
                    border: '1px solid rgba(200,180,154,0.40)',
                  }}
                >
                  <div
                    className="w-5 h-px mb-4"
                    style={{ background: 'var(--color-hps-ink)', opacity: 0.35 }}
                    aria-hidden="true"
                  />
                  <h3
                    className="font-display mb-2"
                    style={{ fontSize: '1rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}
                  >
                    {ch.name}
                  </h3>
                  <p
                    className="font-body text-sm leading-relaxed"
                    style={{ color: 'var(--color-hps-smoke)' }}
                  >
                    {ch.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Direct Contact ───────────────────────────────────────────── */}
        <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-cream)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

              <div data-reveal>
                <p
                  className="font-mono uppercase mb-4"
                  style={{ fontSize: '0.6rem', letterSpacing: '0.22em', color: 'var(--color-hps-ink)', opacity: 0.55 }}
                >
                  How to reach us
                </p>
                <h2
                  className="font-display mb-5"
                  style={{ fontSize: 'clamp(1.375rem, 2.5vw, 2rem)', color: 'var(--color-hps-ink)', lineHeight: 1.08 }}
                >
                  Direct contact
                </h2>
                <div className="flex flex-col gap-5">
                  {[
                    { label: 'Phone', value: '352-290-7744', href: 'tel:+13522907744' },
                    { label: 'Email', value: 'hello@happypathstudios.com', href: 'mailto:hello@happypathstudios.com' },
                  ].map(item => (
                    <div key={item.label} style={{ borderBottom: '1px solid rgba(200,180,154,0.40)', paddingBottom: '1.25rem' }}>
                      <p
                        className="font-mono uppercase mb-1"
                        style={{ fontSize: '0.6rem', letterSpacing: '0.18em', color: 'var(--color-hps-ink)', opacity: 0.45 }}
                      >
                        {item.label}
                      </p>
                      <a
                        href={item.href}
                        className="font-body font-medium transition-colors duration-150"
                        style={{ fontSize: '1rem', color: 'var(--color-hps-ink)', textDecoration: 'none' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-hps-teal-dark)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-hps-ink)')}
                      >
                        {item.value}
                      </a>
                    </div>
                  ))}
                  <p
                    className="font-body text-sm leading-relaxed"
                    style={{ color: 'var(--color-hps-smoke)' }}
                  >
                    Most requests receive a response within one business day. Hosting and uptime incidents receive priority — call directly for anything time-sensitive.
                  </p>
                </div>
              </div>

              <div data-reveal data-reveal-delay="80">
                <p
                  className="font-mono uppercase mb-4"
                  style={{ fontSize: '0.6rem', letterSpacing: '0.22em', color: 'var(--color-hps-ink)', opacity: 0.55 }}
                >
                  Not sure which path to take?
                </p>
                <h2
                  className="font-display mb-5"
                  style={{ fontSize: 'clamp(1.375rem, 2.5vw, 2rem)', color: 'var(--color-hps-ink)', lineHeight: 1.08 }}
                >
                  Support vs. Client Portal
                </h2>
                <div className="flex flex-col gap-4">
                  {[
                    {
                      label: 'Support & Project Access',
                      desc: 'Use this page when you need help — a website update, a production request, a hosting question, or any operational task tied to your active engagement.',
                      href: '/support',
                      current: true,
                    },
                    {
                      label: 'Client Portal',
                      desc: 'For account records — invoices, billing history, project deliverables, approved assets, and payment management.',
                      href: '/client-portal',
                      current: false,
                    },
                  ].map(item => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="group flex items-start gap-4 p-5 rounded-sm transition-all duration-200"
                      style={{
                        background: item.current ? 'var(--color-hps-parchment)' : 'var(--color-hps-cream)',
                        border: item.current ? '1px solid rgba(200,180,154,0.60)' : '1px solid rgba(200,180,154,0.40)',
                        textDecoration: 'none',
                        borderLeft: item.current ? '3px solid var(--color-hps-ink)' : '1px solid rgba(200,180,154,0.40)',
                      }}
                    >
                      <div>
                        <p className="font-display mb-1" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}>{item.label}</p>
                        <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-hps-smoke)' }}>{item.desc}</p>
                      </div>
                      <span className="ml-auto self-center font-mono shrink-0 transition-transform duration-200 group-hover:translate-x-1" style={{ fontSize: '0.7rem', color: 'var(--color-hps-ink)', opacity: 0.35 }} aria-hidden="true">→</span>
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>

      <CTABand
        headline="Ready to start a new project?"
        subhead="Every engagement begins with a free consultation."
        buttonText="Free Consultation"
        buttonHref="/contact"
        showPhone
      />
    </>
  )
}
