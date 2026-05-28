import { useState } from 'react'
import { Link } from 'react-router-dom'
import { hostingProducts } from '../data/hosting'
import PageHeader from '../components/sections/PageHeader'
import CTABand from '../components/sections/CTABand'
import BackgroundAtmosphere from '../components/decorative/BackgroundAtmosphere'
import { usePageMeta } from '../hooks/usePageMeta'

function HostingCard({ product, index }: { product: typeof hostingProducts[number]; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      to={`/hosting/${product.slug}`}
      style={{ textDecoration: 'none' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        data-reveal
        data-reveal-delay={String((index % 2) * 80)}
        className="relative overflow-hidden rounded-sm h-full"
        style={{
          background: 'var(--color-hps-parchment)',
          border: '1px solid rgba(200,180,154,0.40)',
          borderTop: `4px solid ${product.accentColor}`,
          transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
          boxShadow: hovered
            ? `0 16px 36px -8px rgba(12,20,32,0.10), 0 4px 12px -4px rgba(12,20,32,0.07)`
            : '0 2px 6px rgba(12,20,32,0.04)',
          transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s ease',
        }}
      >
        {/* Glow */}
        <div
          className="absolute bottom-0 right-0 w-48 h-48 rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${product.accentColor}12 0%, transparent 70%)`,
            transform: 'translate(30%, 30%)',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.4s ease',
          }}
          aria-hidden="true"
        />

        <div className="relative p-8 lg:p-10 flex flex-col h-full">
          <p
            className="font-mono uppercase mb-3"
            style={{ fontSize: '0.58rem', letterSpacing: '0.2em', color: product.accentColor }}
          >
            {product.eyebrow}
          </p>
          <h2
            className="font-display mb-3"
            style={{ fontSize: '1.5rem', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}
          >
            {product.name}
          </h2>
          <p
            className="font-body text-sm leading-relaxed flex-1 mb-6"
            style={{ color: 'var(--color-hps-smoke)' }}
          >
            {product.tagline}
          </p>

          {/* Ecosystem hooks — show first 2 */}
          <div className="flex flex-col gap-2 mb-6">
            {product.ecosystemLinks.slice(0, 2).map(link => (
              <div key={link.href} className="flex items-center gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: product.accentColor, opacity: 0.6 }}
                  aria-hidden="true"
                />
                <span
                  className="font-body text-xs"
                  style={{ color: 'var(--color-hps-smoke)', opacity: 0.75 }}
                >
                  Includes {link.label}
                </span>
              </div>
            ))}
          </div>

          <div
            className="flex items-center justify-between pt-5 border-t"
            style={{ borderColor: 'rgba(200,180,154,0.35)' }}
          >
            {product.liveUrl ? (
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
                color: product.accentColor,
                opacity: hovered ? 1 : 0.65,
                transition: 'opacity 0.2s ease',
              }}
            >
              View plan →
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function HostingPage() {
  usePageMeta({
    title: 'Managed Hosting',
    description: 'Six managed hosting products for restaurants, creators, stores, and professional services — with uptime monitoring, SSL management, and migration support.',
  })
  return (
    <>
      <div style={{ position: 'relative', isolation: 'isolate' }}>
      <BackgroundAtmosphere mood="citrus" intensity="whisper" density="sparse" />
      <PageHeader
        eyebrow="Managed Web Hosting"
        title="HPS Hosting"
        description="Purpose-built hosting products for restaurants, local businesses, creators, and growing operations — each optimized for a specific business type, all managed, all connected to the HPS platform ecosystem. Some clients start simple and add more over time."
        accentColor="var(--color-hps-teal-dark)"
      />

      {/* ── Product grid ──────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ background: 'var(--color-hps-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {hostingProducts.map((product, i) => (
              <HostingCard key={product.slug} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── What managed means ────────────────────────────────────── */}
      <section
        className="py-16 lg:py-20 border-t"
        style={{ background: 'var(--color-hps-parchment)', borderColor: 'rgba(200,180,154,0.40)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                label: 'Managed means hands-off',
                desc: 'Server updates, security patches, SSL renewals, and backups run automatically. You never need to log into a server panel.',
                accent: 'var(--color-hps-teal-dark)',
              },
              {
                label: 'Ecosystem-connected',
                desc: 'Every hosting plan is pre-configured to work with HPS Uptime, HPS QR Menu, and the rest of the HPS platform stack.',
                accent: 'var(--color-hps-green)',
              },
              {
                label: 'One call for everything',
                desc: 'Your hosting, your website, and your platforms are all with us. One conversation solves any infrastructure issue.',
                accent: 'var(--color-hps-gold-rich)',
              },
            ].map((item, i) => (
              <div key={item.label} data-reveal data-reveal-delay={String(i * 80)}>
                <div
                  className="w-6 h-px mb-5"
                  style={{ background: item.accent }}
                  aria-hidden="true"
                />
                <h3
                  className="font-display mb-3"
                  style={{ fontSize: '1.125rem', color: 'var(--color-hps-ink)' }}
                >
                  {item.label}
                </h3>
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
      </section>

      {/* ── Operational Narrative ───────────────────────────────── */}
      <section className="py-16 lg:py-24 border-t" style={{ background: 'var(--color-hps-cream)', borderColor: 'rgba(200,180,154,0.40)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div data-reveal>
              <p className="font-mono uppercase mb-4" style={{ fontSize: '0.6rem', letterSpacing: '0.22em', color: 'var(--color-hps-teal-dark)' }}>
                Hosting philosophy
              </p>
              <h2 className="font-display mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.08 }}>
                Built for businesses that run on their websites.
              </h2>
              <p className="font-body leading-relaxed mb-5" style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)' }}>
                Generic hosting is built for volume. HPS Hosting is built for continuity. Whether it's a food truck's first website or a golf course running sponsor campaigns, the operational standard is the same — your site is an active layer of your business, not a brochure. It needs to stay up, stay fast, and stay connected.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)', opacity: 0.9 }}>
                Every HPS hosting plan is pre-configured, actively monitored, and connected to the platforms your operation depends on. When something needs attention, we handle it — you don't open a ticket and wait three business days.
              </p>
            </div>
            <div data-reveal data-reveal-delay="80" className="flex flex-col gap-4">
              {[
                { label: 'Managed SSL lifecycle', desc: 'Certificate provisioning, renewal automation, and HSTS configuration — zero manual intervention and zero expired certificates.', accent: 'var(--color-hps-teal-dark)' },
                { label: 'Automated daily backups', desc: 'Full-site snapshots with off-site redundancy and point-in-time restore. Retention keeps history available when you need it most.', accent: 'var(--color-hps-green)' },
                { label: 'Security patch management', desc: 'Core, plugin, and theme updates tested and deployed on a managed schedule — not left pending until something breaks.', accent: 'var(--color-hps-gold-rich)' },
                { label: 'Ecosystem pre-configuration', desc: 'Every plan arrives ready to connect with HPS Uptime, QR systems, and the platform stack — no custom integration setup required.', accent: 'var(--color-hps-coral-warm)' },
              ].map(item => (
                <div
                  key={item.label}
                  className="flex gap-4 p-5 rounded-sm"
                  style={{ background: 'var(--color-hps-parchment)', border: '1px solid rgba(200,180,154,0.40)', borderLeft: `3px solid ${item.accent}` }}
                >
                  <div>
                    <p className="font-body font-medium mb-1" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-ink)' }}>{item.label}</p>
                    <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-hps-smoke)' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Infrastructure Continuity ────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-parchment)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-12">
            <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-teal-dark)' }}>
              Infrastructure operations
            </p>
            <h2 className="font-display mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
              What's running behind every plan.
            </h2>
            <p className="font-body max-w-xl leading-relaxed" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}>
              Infrastructure continuity isn't something you notice when it's working — only when it isn't. Every HPS plan includes active management of the systems that keep your operation running without interruption.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: '01', label: 'SSL/TLS Lifecycle', desc: 'Certificate provisioning, renewal automation, HSTS headers, and mixed-content resolution. Zero expired certificates, zero browser security warnings.', accent: 'var(--color-hps-teal-dark)' },
              { n: '02', label: 'Daily Backup System', desc: 'Automated full-site snapshots with off-site redundancy. Point-in-time restore available for content, database, and file system independently.', accent: 'var(--color-hps-green)' },
              { n: '03', label: 'Security Management', desc: 'Malware scanning, firewall rules, brute-force protection, and managed update pipelines — reviewed before deployment, not pushed live blindly.', accent: 'var(--color-hps-gold-rich)' },
              { n: '04', label: 'Performance Monitoring', desc: 'Server response time, cache hit rates, and load performance tracked continuously. Anomalies surface before your visitors notice them.', accent: 'var(--color-hps-coral-warm)' },
            ].map((item, i) => (
              <div
                key={item.n}
                data-reveal
                data-reveal-delay={String(i * 80)}
                className="p-6 rounded-sm"
                style={{ background: 'var(--color-hps-cream)', border: '1px solid rgba(200,180,154,0.40)', borderTop: `3px solid ${item.accent}` }}
              >
                <span className="font-mono block mb-4" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: item.accent, opacity: 0.8 }}>
                  {item.n}
                </span>
                <h3 className="font-display mb-3" style={{ fontSize: '1.0625rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}>
                  {item.label}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-hps-smoke)' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ecosystem Integration ────────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-12">
            <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-green)' }}>
              Platform integration
            </p>
            <h2 className="font-display mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
              Hosting that connects to the full ecosystem.
            </h2>
            <p className="font-body max-w-2xl leading-relaxed" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}>
              When your hosting lives inside the HPS stack, infrastructure stops being a standalone concern. Uptime monitoring, client access, AI automation, and QR systems share the same operational layer — no third-party integrations to maintain, no separate credential sets.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { label: 'HPS Uptime', href: '/platforms/hps-uptime', eyebrow: 'Reliability layer', desc: 'Real-time uptime monitoring, incident alerts, and status page infrastructure connected directly to your hosting environment. Incidents surface to your team before clients notice.', accent: 'var(--color-hps-teal-dark)' },
              { label: 'HPS Client Portal', href: '/platforms/hps-client-portal', eyebrow: 'Client access layer', desc: 'Client authentication, project assets, and document delivery running on the same infrastructure as your main site. One secure perimeter — not two systems to maintain.', accent: 'var(--color-hps-green)' },
              { label: 'HPS AI Systems', href: '/platforms/hps-ai-systems', eyebrow: 'Automation layer', desc: 'n8n and Claude-based workflow automation and content systems run more reliably when the hosting environment is pre-configured for the workload from day one.', accent: 'var(--color-hps-gold-rich)' },
            ].map((card, i) => (
              <Link
                key={card.label}
                to={card.href}
                data-reveal
                data-reveal-delay={String(i * 80)}
                className="flex flex-col p-7 rounded-sm"
                style={{ background: 'var(--color-hps-parchment)', border: '1px solid rgba(200,180,154,0.40)', borderLeft: `3px solid ${card.accent}`, textDecoration: 'none', transition: 'box-shadow 0.25s ease, transform 0.25s ease' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 24px -6px rgba(12,20,32,0.10)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <p className="font-mono uppercase mb-3" style={{ fontSize: '0.55rem', letterSpacing: '0.18em', color: card.accent }}>
                  {card.eyebrow}
                </p>
                <h3 className="font-display mb-3 flex-1" style={{ fontSize: '1.1875rem', color: 'var(--color-hps-ink)', lineHeight: 1.15 }}>
                  {card.label}
                </h3>
                <p className="font-body text-sm leading-relaxed mb-5" style={{ color: 'var(--color-hps-smoke)' }}>
                  {card.desc}
                </p>
                <span className="font-mono uppercase" style={{ fontSize: '0.6rem', letterSpacing: '0.18em', color: card.accent }}>
                  View platform →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Migration & Onboarding ───────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-parchment)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div data-reveal>
              <p className="font-mono uppercase mb-4" style={{ fontSize: '0.6rem', letterSpacing: '0.22em', color: 'var(--color-hps-teal-dark)' }}>
                Migration & onboarding
              </p>
              <h2 className="font-display mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.08 }}>
                Migration without the migration anxiety.
              </h2>
              <p className="font-body leading-relaxed mb-5" style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)' }}>
                Moving hosting sounds simple and occasionally goes sideways in production. We've done enough migrations to know where the edge cases live — DNS propagation gaps, email deliverability disruptions, content that wasn't properly backed up, database character encoding that breaks silently on the new server.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)', opacity: 0.9 }}>
                Our onboarding process is documented, phased, and built around zero-downtime deployment. Most migrations complete within 48–72 hours from intake to live DNS switchover.
              </p>
            </div>
            <div data-reveal data-reveal-delay="80">
              <div className="flex flex-col gap-0">
                {[
                  { n: '01', label: 'Site Audit & Discovery', desc: 'Document all assets, email configurations, DNS records, third-party integrations, and platform dependencies before anything moves.' },
                  { n: '02', label: 'Staging Environment', desc: 'Full site cloned to staging. Performance benchmarks, plugin compatibility, and integration tests run before any DNS records are touched.' },
                  { n: '03', label: 'Ecosystem Pre-Configuration', desc: 'HPS platform connections — Uptime monitoring, QR systems, Client Portal — configured and verified in staging before go-live.' },
                  { n: '04', label: 'DNS Cutover', desc: 'Low-TTL pre-staging, coordinated cutover, and parallel monitoring during propagation. Both environments active until DNS is fully stable.' },
                  { n: '05', label: 'Post-Launch Monitoring', desc: '72-hour post-launch monitoring window. Any edge cases that surface after go-live are resolved before the engagement closes.' },
                ].map((step, i, arr) => (
                  <div
                    key={step.n}
                    className="flex gap-5 py-5"
                    style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(200,180,154,0.40)' : 'none' }}
                  >
                    <span className="font-mono shrink-0 mt-0.5" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-teal-dark)', opacity: 0.75, minWidth: '1.75rem' }}>
                      {step.n}
                    </span>
                    <div>
                      <p className="font-body font-medium mb-1" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-ink)' }}>{step.label}</p>
                      <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-hps-smoke)' }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Operational Partnership ──────────────────────────────── */}
      <section className="py-16 lg:py-20 border-t" style={{ background: 'var(--color-hps-cream)', borderColor: 'rgba(200,180,154,0.40)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            <div data-reveal className="lg:col-span-3">
              <p className="font-mono uppercase mb-4" style={{ fontSize: '0.6rem', letterSpacing: '0.22em', color: 'var(--color-hps-teal-dark)' }}>
                Ongoing operations
              </p>
              <h2 className="font-display mb-5" style={{ fontSize: 'clamp(1.375rem, 2.5vw, 1.875rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
                Hosting isn't set-and-forget. It's an ongoing operational layer.
              </h2>
              <p className="font-body leading-relaxed mb-4" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}>
                The relationship doesn't end at go-live. As your operation grows — new platforms, new team members, seasonal traffic spikes — your hosting environment evolves with it. Capacity adjustments, new integrations, performance tuning, and security hardening happen inside a continuing conversation, not as reactive support tickets after something breaks.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)', opacity: 0.85 }}>
                HPS hosting clients are operational partners. You have a direct line to the people managing your infrastructure — not a support queue with a five-business-day response window.
              </p>
            </div>
            <div data-reveal data-reveal-delay="80" className="lg:col-span-2">
              <div
                className="p-7 rounded-sm"
                style={{ background: 'var(--color-hps-parchment)', border: '1px solid rgba(200,180,154,0.40)', borderTop: '3px solid var(--color-hps-teal-dark)' }}
              >
                <p className="font-mono uppercase mb-3" style={{ fontSize: '0.55rem', letterSpacing: '0.18em', color: 'var(--color-hps-teal-dark)' }}>
                  Start with hosting
                </p>
                <h3 className="font-display mb-3" style={{ fontSize: '1.25rem', color: 'var(--color-hps-ink)', lineHeight: 1.15 }}>
                  Ready to move to managed infrastructure?
                </h3>
                <p className="font-body text-sm leading-relaxed mb-5" style={{ color: 'var(--color-hps-smoke)' }}>
                  We'll assess your current setup, recommend the right plan, and have you running on HPS infrastructure within 48 hours.
                </p>
                <Link
                  to="/contact"
                  className="inline-block font-mono uppercase"
                  style={{ fontSize: '0.65rem', letterSpacing: '0.18em', color: 'var(--color-hps-cream)', background: 'var(--color-hps-teal-dark)', padding: '0.75rem 1.5rem', borderRadius: '2px', textDecoration: 'none' }}
                >
                  Start a Hosting Conversation →
                </Link>
                <div className="mt-5 pt-5 border-t" style={{ borderColor: 'rgba(200,180,154,0.40)' }}>
                  <p className="font-body text-xs" style={{ color: 'var(--color-hps-smoke)', opacity: 0.7 }}>
                    Leesburg, Florida · Lake County · (352) 290-7744
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      </div>{/* end atmosphere wrapper */}

      <CTABand
        headline="Looking for the right hosting plan?"
        subhead="We'll match you with the right product and get your site set up within 48 hours."
        buttonText="Get Hosting Help"
        showPhone
      />
    </>
  )
}
