import { Link } from 'react-router-dom'

// Operational signals that communicate experience and discipline without bragging.
// No "trusted by" logos, no client counts, no generic testimonials.
// Just the signals of a company that operates real systems.

const OPERATIONAL_SIGNALS = [
  {
    category: 'Fabrication',
    accent: 'var(--color-hps-coral-warm)',
    accentHex: '#f87239',
    signals: [
      { label: 'In-house UV printing on rigid substrates with dimensional relief up to 5mm' },
      { label: 'Four laser platforms: CO₂, fiber, UV, and diode — system selected by material, not default' },
      { label: 'DTG production without minimum quantities; embroidery digitized in-house' },
      { label: 'Season-archived production files for repeat orders without new art preparation' },
    ],
  },
  {
    category: 'Digital Infrastructure',
    accent: 'var(--color-hps-teal-dark)',
    accentHex: '#0d9488',
    signals: [
      { label: 'Managed hosting across six products with uptime monitoring and SSL management' },
      { label: 'AI workflow automation using Claude and n8n for content, reporting, and operations' },
      { label: 'Dynamic QR destination management — redirect updates without reprinting physical surfaces' },
      { label: 'Client portal for project status, deliverable access, approvals, and invoicing' },
    ],
  },
  {
    category: 'Accessibility & Compliance',
    accent: 'var(--color-hps-teal)',
    accentHex: '#14b8a6',
    signals: [
      { label: 'WCAG 2.1 AA auditing and code remediation for web and application environments' },
      { label: 'Section 508 testing methodology for federal and healthcare digital properties' },
      { label: 'ADA-compliant physical signage: tactile Braille, raised characters, compliant mounting' },
      { label: 'Ongoing compliance monitoring and documentation rather than point-in-time audits' },
    ],
  },
  {
    category: 'Operational Discipline',
    accent: 'var(--color-hps-green)',
    accentHex: '#478c5c',
    signals: [
      { label: 'No vendor outsourcing — the team that designs it builds it, monitors it, and supports it' },
      { label: 'Physical and digital production share the same team, same workflow, same relationship' },
      { label: 'Post-launch operational support built into every engagement by default' },
      { label: 'Central Florida operation: Leesburg, FL · Lake County · 352-290-7744' },
    ],
  },
]

export default function EnterpriseOperationalTrust() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{ background: 'var(--color-hps-parchment)', borderTop: '1px solid rgba(200,180,154,0.35)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <div data-reveal className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 lg:gap-20 mb-14">
          <div>
            <p
              className="font-mono uppercase mb-4"
              style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--color-hps-green)' }}
            >
              Operational record
            </p>
            <h2
              className="font-display mb-5"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: 'var(--color-hps-ink)', lineHeight: 1.04 }}
            >
              What the work actually looks like.
            </h2>
            <p
              className="font-body leading-relaxed"
              style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)', maxWidth: '38rem' }}
            >
              The operational signals that describe how this studio actually functions across fabrication, digital infrastructure, accessibility compliance, and ongoing systems management.
            </p>
          </div>
          <div className="flex flex-col justify-end gap-3">
            <div
              className="p-5 rounded-sm"
              style={{ background: 'var(--color-hps-cream)', border: '1px solid rgba(200,180,154,0.40)' }}
            >
              <p
                className="font-mono uppercase mb-2"
                style={{ fontSize: '0.5rem', letterSpacing: '0.18em', color: 'var(--color-hps-smoke)', opacity: 0.60 }}
              >
                Central Florida operation
              </p>
              <p className="font-body" style={{ fontSize: '0.875rem', color: 'var(--color-hps-ink)' }}>
                Leesburg, FL · Lake County
              </p>
              <p className="font-mono mt-1" style={{ fontSize: '0.75rem', color: 'var(--color-hps-smoke)', opacity: 0.75 }}>
                352-290-7744
              </p>
              <div className="mt-3 w-6 h-px" style={{ background: 'var(--color-hps-green)' }} aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* Operational signal grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {OPERATIONAL_SIGNALS.map((block, i) => (
            <div
              key={block.category}
              data-reveal
              data-reveal-delay={String((i % 2) * 80)}
              className="rounded-sm overflow-hidden"
              style={{ border: '1px solid rgba(200,180,154,0.38)', background: 'var(--color-hps-cream)' }}
            >
              {/* Category header */}
              <div
                className="px-6 py-4"
                style={{
                  background: `${block.accentHex}08`,
                  borderBottom: `1px solid rgba(200,180,154,0.30)`,
                  borderLeft: `3px solid ${block.accent}`,
                }}
              >
                <p
                  className="font-mono uppercase"
                  style={{ fontSize: '0.56rem', letterSpacing: '0.2em', color: block.accent }}
                >
                  {block.category}
                </p>
              </div>

              {/* Signal list */}
              <ul className="flex flex-col px-6 py-5 gap-3">
                {block.signals.map((sig, si) => (
                  <li key={si} className="flex items-start gap-3">
                    <span
                      className="shrink-0 w-1 h-1 rounded-full mt-[0.42rem]"
                      style={{ background: block.accent, opacity: 0.65 }}
                      aria-hidden="true"
                    />
                    <p
                      className="font-body"
                      style={{ fontSize: '0.875rem', color: 'var(--color-hps-smoke)', lineHeight: 1.6 }}
                    >
                      {sig.label}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer links */}
        <div
          data-reveal
          className="mt-10 pt-8 flex flex-wrap gap-x-8 gap-y-3"
          style={{ borderTop: '1px solid rgba(200,180,154,0.38)' }}
        >
          {[
            { label: 'Fabrication capabilities', href: '/fabrication' },
            { label: 'Accessibility operations', href: '/accessibility' },
            { label: 'Hosting infrastructure', href: '/hosting' },
            { label: 'AI systems', href: '/ai-systems' },
          ].map(link => (
            <Link
              key={link.href}
              to={link.href}
              className="font-mono uppercase transition-colors duration-200"
              style={{ fontSize: '0.6rem', letterSpacing: '0.18em', color: 'var(--color-hps-green)', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-hps-ink)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-hps-green)')}
            >
              {link.label} →
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
