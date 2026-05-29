import { Link } from 'react-router-dom'
import BackgroundAtmosphere from '../components/decorative/BackgroundAtmosphere'
import { SectionBridge } from '../components/motion/CinematicTransitionSystem'
import EnterpriseOperationalTrust from '../components/sections/EnterpriseOperationalTrust'
import { usePageMeta } from '../hooks/usePageMeta'
import { OperationalPhoto } from '../components/proof/PhotographyIntegrationFramework'

export default function HomePage() {
  usePageMeta({
    title: 'Happy Path Studios | Leesburg, Florida',
    description: 'Fabrication lab, digital platforms, accessibility compliance, and AI infrastructure — one studio, one team, Leesburg, Florida.',
  })
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section
        aria-labelledby="hero-heading"
        className="relative min-h-[90vh] flex items-center overflow-hidden overflow-x-hidden"
        style={{ background: 'var(--color-hps-green-dark)' }}
      >

        {/* Background photo with ambient zoom */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/contact1.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover origin-center"
            style={{ animation: 'ambientZoom 24s ease-in-out infinite alternate' }}
          />
        </div>

        {/* Atmospheric overlays */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, rgba(44,90,58,0.95) 0%, rgba(44,90,58,0.80) 45%, transparent 100%)',
            mixBlendMode: 'multiply',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(44,90,58,0.88) 100%)',
          }}
          aria-hidden="true"
        />

        {/* Ambient warmth */}
        <div
          className="absolute pointer-events-none rounded-full"
          style={{
            top: '-2rem',
            left: '30%',
            width: '520px',
            height: '520px',
            background: 'rgba(232,184,75,0.07)',
            filter: 'blur(120px)',
            mixBlendMode: 'screen',
          }}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20 md:pt-36 md:pb-32 flex flex-col lg:flex-row items-center gap-16">

          {/* ── Left: text panel ─────────────────── */}
          <div
            className="flex-1 max-w-3xl relative px-4 py-8 sm:px-8 lg:px-10"
          >
            {/* Gold left accent bar */}
            <div
              className="absolute top-0 left-0 bottom-0 w-1"
              style={{ background: 'var(--color-hps-gold-light)' }}
              aria-hidden="true"
            />

            {/* Eyebrow */}
            <p
              data-reveal
              className="font-mono uppercase mb-5 lg:whitespace-nowrap"
              style={{
                fontSize: '0.68rem',
                letterSpacing: '0.14em',
                color: 'var(--color-hps-gold-light)',
                textShadow: '0 1px 3px rgba(0,0,0,0.4)',
              }}
            >
              Central Florida · Fabrication · Platforms · Compliance · AI
            </p>

            {/* H1 */}
            <h1
              id="hero-heading"
              data-reveal
              data-reveal-delay="80"
              className="font-display mb-6"
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.75rem)',
                color: 'var(--color-hps-cream)',
                lineHeight: 1.04,
                letterSpacing: '-0.015em',
                textShadow: '0 1px 4px rgba(0,0,0,0.20)',
              }}
            >
              Happy Path Studios
            </h1>

            {/* Body copy — block 1 */}
            <p
              data-reveal
              data-reveal-delay="160"
              className="font-body leading-relaxed mb-4"
              style={{
                fontSize: '1.0625rem',
                color: 'rgba(255,255,255,0.92)',
                maxWidth: '42rem',
                overflowWrap: 'break-word',
                textShadow: '0 1px 3px rgba(0,0,0,0.25)',
              }}
            >
              Happy Path Studios helps businesses bring ideas to life. From websites and branding to signage, hosting, printing, accessibility, and operational systems, we help businesses of all sizes build, grow, and stay connected.
            </p>

            {/* Body copy — block 2 */}
            <p
              data-reveal
              data-reveal-delay="200"
              className="font-body leading-relaxed mb-10"
              style={{
                fontSize: '1.0625rem',
                color: 'rgba(255,255,255,0.82)',
                maxWidth: '42rem',
                overflowWrap: 'break-word',
                textShadow: '0 1px 3px rgba(0,0,0,0.22)',
              }}
            >
              In software development, the "happy path" means the smooth successful path when everything works the way it should. That idea inspires everything we do: making things easier, clearer, and more connected as your business grows.
            </p>

            {/* Buttons */}
            <div data-reveal data-reveal-delay="260" className="flex flex-wrap gap-4">
              <Link
                to="/ecosystems"
                className="inline-flex items-center justify-center font-body font-semibold rounded-sm transition-colors duration-200"
                style={{
                  padding: '0.875rem 2rem',
                  background: 'var(--color-hps-gold)',
                  color: 'var(--color-hps-ink)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-hps-cream)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-hps-gold)')}
              >
                Explore the Ecosystem
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center font-body font-semibold rounded-sm transition-all duration-200"
                style={{
                  padding: '0.875rem 2rem',
                  background: 'transparent',
                  color: 'var(--color-hps-cream)',
                  border: '1px solid rgba(244,234,212,0.35)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.borderColor = 'rgba(244,234,212,0.65)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.borderColor = 'rgba(244,234,212,0.35)'
                }}
              >
                Free Consultation
              </Link>
            </div>

            {/* Contact anchor */}
            <a
              data-reveal
              data-reveal-delay="280"
              href="tel:+13522907744"
              className="font-mono block mt-6 w-fit transition-colors duration-200"
              style={{ fontSize: '0.72rem', letterSpacing: '0.12em', color: 'rgba(245,212,131,0.60)', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-hps-gold-light)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,212,131,0.60)')}
            >
              or call 352-290-7744
            </a>
          </div>

          {/* ── Right: floating stacked logo ───────────── */}
          <div
            data-reveal
            data-reveal-delay="320"
            className="flex-1 w-full flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              {/* Ambient glow behind logo */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: 'rgba(232,184,75,0.08)',
                  filter: 'blur(60px)',
                }}
                aria-hidden="true"
              />
              <img
                src="/images/stack-logo3shadow.png"
                alt="Happy Path Studios"
                className="relative w-full object-contain transition-transform duration-700 hover:scale-[1.02]"
                style={{ filter: 'drop-shadow(0 10px 28px rgba(0,0,0,0.22))' }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── Hero accent border ──────────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{ height: '4px', width: '100%', background: 'var(--color-hps-gold-light)' }}
      />

      {/* ── Content sections ─────────────────────────────────────────── */}
      <div style={{ position: 'relative', isolation: 'isolate' }}>
        <BackgroundAtmosphere mood="citrus" intensity="subtle" density="sparse" />

        {/* ── Studio Pillars ──────────────────────────────────────────── */}
        <section className="py-20 lg:py-28" style={{ background: 'var(--color-hps-parchment)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div data-reveal className="mb-12">
              <p
                className="font-mono uppercase mb-3"
                style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--color-hps-green)' }}
              >
                Leesburg, Florida · Studio operations
              </p>
              <h2
                className="font-display text-hps-ink leading-tight max-w-xl"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
              >
                Six operational systems. One integrated studio.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { label: 'Fabrication Lab',   desc: 'UV printing, laser systems, DTG apparel, embroidery, sublimation, and 3D printing. All produced in-house.',     href: '/fabrication',  accent: 'var(--color-hps-coral-warm)' },
                { label: 'Digital Platforms', desc: 'Twenty in-house SaaS tools for marketing, analytics, QR systems, and business operations.',          href: '/platforms',    accent: 'var(--color-hps-teal-dark)' },
                { label: 'Hospitality & QR',  desc: 'Live digital menus, scan infrastructure, and table operations for hospitality businesses.',           href: '/hospitality',  accent: 'var(--color-hps-gold-rich)' },
                { label: 'Accessibility',     desc: 'WCAG audit, Section 508 compliance, remediation, documentation, and ongoing monitoring.',             href: '/accessibility', accent: 'var(--color-hps-green)' },
                { label: 'Media & Creator',   desc: 'FreeBeatsMUSIC, cinematic production workflows, creator launch systems, and branded file distribution.',    href: '/media',        accent: 'var(--color-hps-gold)' },
                { label: 'AI & Automation',   desc: 'Claude and n8n-powered automation for creative workflows, content production, and operational intelligence.', href: '/ai-systems',   accent: 'var(--color-hps-teal)' },
              ].map((item, i) => (
                <Link
                  key={item.href + item.label}
                  to={item.href}
                  data-reveal
                  data-reveal-delay={String((i % 3) * 80)}
                  className="group block rounded-sm transition-all duration-300"
                  style={{ padding: '1.625rem', background: 'var(--color-hps-cream)', border: '1px solid rgba(200,180,154,0.40)', textDecoration: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 28px -4px rgba(12,20,32,0.12)'; e.currentTarget.style.borderColor = item.accent }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = ''; e.currentTarget.style.borderColor = 'rgba(200,180,154,0.40)' }}
                >
                  <div className="w-6 h-px mb-5" style={{ background: item.accent }} aria-hidden="true" />
                  <h3 className="font-display text-xl mb-2.5" style={{ color: 'var(--color-hps-ink)' }}>{item.label}</h3>
                  <p className="font-body text-sm leading-relaxed mb-5" style={{ color: 'var(--color-hps-smoke)' }}>{item.desc}</p>
                  <span className="font-mono uppercase" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', color: item.accent }}>Explore →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <SectionBridge from="var(--color-hps-parchment)" to="var(--color-hps-cream)" accent="var(--color-hps-gold)" />

        {/* ── What HPS Is ─────────────────────────────────────────────── */}
        <section className="py-20 lg:py-28" style={{ background: 'var(--color-hps-cream)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-20 items-start">
              <div data-reveal>
                <p
                  className="font-mono uppercase mb-4"
                  style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--color-hps-green)' }}
                >
                  Leesburg, Florida · Lake County
                </p>
                <h2
                  className="font-display mb-6"
                  style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.875rem)', color: 'var(--color-hps-ink)', lineHeight: 1.04 }}
                >
                  Operational infrastructure.<br />Built to run, not just delivered.
                </h2>
                <p
                  className="font-body leading-relaxed mb-5"
                  style={{ fontSize: '1.0625rem', color: 'var(--color-hps-smoke)', maxWidth: '42rem' }}
                >
                  Happy Path Studios operates from a single Leesburg, Florida location: fabrication, digital platforms, accessibility compliance, AI infrastructure, and ongoing systems management. Every capability in-house, every engagement structured as a long-term operational relationship.
                </p>
                <p
                  className="font-body leading-relaxed mb-8"
                  style={{ fontSize: '1.0625rem', color: 'var(--color-hps-smoke)', maxWidth: '42rem' }}
                >
                  The team that designs it builds it. The team that builds it monitors it. The same production relationship runs from initial concept through ongoing operational support, not just to delivery.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/ecosystems"
                    className="inline-flex items-center font-body font-medium text-sm rounded-sm transition-all duration-200"
                    style={{ padding: '0.75rem 1.5rem', background: 'var(--color-hps-green)', color: '#fff', textDecoration: 'none' }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                  >
                    Explore the full ecosystem →
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center font-body font-medium text-sm rounded-sm transition-all duration-200"
                    style={{ padding: '0.75rem 1.5rem', background: 'transparent', color: 'var(--color-hps-green)', border: '1px solid rgba(34,197,94,0.30)', textDecoration: 'none' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-hps-green)'; e.currentTarget.style.background = 'rgba(34,197,94,0.05)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.30)'; e.currentTarget.style.background = 'transparent' }}
                  >
                    Free consultation
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {[
                  {
                    label: 'Full-spectrum in-house',
                    desc: 'No vendor handoffs, no translation loss. Whether the project is a single sign or a complete ecosystem, every capability is in-house under one ongoing production relationship.',
                    accent: 'var(--color-hps-green)',
                  },
                  {
                    label: 'Operational, not transactional',
                    desc: "Whether it starts with a single sign or a full platform build, engagements grow into long-term partnerships. The work doesn't end at launch.",
                    accent: 'var(--color-hps-teal-dark)',
                  },
                  {
                    label: 'Physical and digital, one team',
                    desc: 'UV-printed signage, cinematic campaign assets, and QR-connected surfaces share the same production team as the digital platforms that power them.',
                    accent: 'var(--color-hps-coral-warm)',
                  },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    data-reveal
                    data-reveal-delay={String((i + 1) * 80)}
                    className="rounded-sm p-5"
                    style={{
                      background: 'var(--color-hps-parchment)',
                      border: '1px solid rgba(200,180,154,0.40)',
                      borderLeft: `3px solid ${item.accent}`,
                    }}
                  >
                    <p className="font-display mb-2" style={{ fontSize: '1rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}>{item.label}</p>
                    <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-hps-smoke)' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <SectionBridge from="var(--color-hps-cream)" to="var(--color-hps-parchment)" />

        {/* ── Services Overview ───────────────────────────────────────── */}
        <section className="py-20 lg:py-28" style={{ background: 'var(--color-hps-parchment)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div data-reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <p
                  className="font-mono uppercase mb-3"
                  style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--color-hps-green)' }}
                >
                  Core services
                </p>
                <h2
                  className="font-display text-hps-ink leading-tight"
                  style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
                >
                  What we build, design, and produce.
                </h2>
              </div>
              <Link
                to="/services"
                className="font-mono uppercase shrink-0 transition-colors duration-200"
                style={{ fontSize: '0.65rem', letterSpacing: '0.16em', color: 'var(--color-hps-green)', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-hps-ink)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-hps-green)')}
              >
                All services →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  eyebrow: 'Web & App Development',
                  label: 'Custom websites, web applications, and UX design built to perform and scale.',
                  href: '/services',
                  accent: 'var(--color-hps-teal-dark)',
                },
                {
                  eyebrow: 'Brand Identity & Design',
                  label: 'Logos, visual systems, print collateral, and brand identity developed from the ground up.',
                  href: '/services',
                  accent: 'var(--color-hps-gold-rich)',
                },
                {
                  eyebrow: 'Fabrication & Production',
                  label: 'UV printing, laser engraving, DTG apparel, embroidery, sublimation, vinyl, and 3D printing.',
                  href: '/fabrication',
                  accent: 'var(--color-hps-coral-warm)',
                },
                {
                  eyebrow: 'AI & Workflow Automation',
                  label: 'Claude and n8n-based automation for creative workflows, content production, and operational intelligence.',
                  href: '/ai-systems',
                  accent: 'var(--color-hps-teal)',
                },
                {
                  eyebrow: 'Accessibility & Compliance',
                  label: 'WCAG 2.1 audits, Section 508 testing, code remediation, and ongoing compliance monitoring.',
                  href: '/accessibility',
                  accent: 'var(--color-hps-green)',
                },
                {
                  eyebrow: 'Photography & Media',
                  label: 'Commercial photography, cinematic video production, motion storytelling, and creator content infrastructure.',
                  href: '/media',
                  accent: 'var(--color-hps-gold)',
                },
              ].map((item, i) => (
                <Link
                  key={item.eyebrow}
                  to={item.href}
                  data-reveal
                  data-reveal-delay={String((i % 3) * 80)}
                  className="group flex items-start gap-4 p-6 rounded-sm transition-all duration-200"
                  style={{ background: 'var(--color-hps-cream)', border: '1px solid rgba(200,180,154,0.40)', textDecoration: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = item.accent; e.currentTarget.style.boxShadow = '0 4px 18px rgba(12,20,32,0.08)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(200,180,154,0.40)'; e.currentTarget.style.boxShadow = 'none' }}
                >
                  <div className="w-1 shrink-0 self-stretch rounded-full" style={{ background: item.accent }} aria-hidden="true" />
                  <div>
                    <p className="font-mono uppercase mb-2" style={{ fontSize: '0.58rem', letterSpacing: '0.18em', color: item.accent }}>{item.eyebrow}</p>
                    <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-hps-smoke)' }}>{item.label}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <SectionBridge from="var(--color-hps-parchment)" to="var(--color-hps-cream)" />

        {/* ── Ecosystem Discovery ─────────────────────────────────────── */}
        <section className="py-20 lg:py-28" style={{ background: 'var(--color-hps-cream)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div data-reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
              <div>
                <p
                  className="font-mono uppercase mb-3"
                  style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--color-hps-green)' }}
                >
                  Explore the ecosystem
                </p>
                <h2
                  className="font-display text-hps-ink leading-tight"
                  style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
                >
                  Twenty platforms. Six industries.
                </h2>
              </div>
              <Link
                to="/ecosystems"
                className="font-mono uppercase shrink-0 transition-colors duration-200"
                style={{ fontSize: '0.65rem', letterSpacing: '0.16em', color: 'var(--color-hps-green)', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-hps-ink)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-hps-green)')}
              >
                Full ecosystem →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  eyebrow: 'Marketing & Growth',
                  label: 'Social scheduling, review aggregation, push notifications, and link-in-bio tools.',
                  accent: 'var(--color-hps-teal-dark)',
                  href: '/platforms',
                  external: false,
                },
                {
                  eyebrow: 'Creator & Media',
                  label: 'FreeBeatsMUSIC, branded file delivery, production workflow, and creator distribution.',
                  accent: 'var(--color-hps-gold)',
                  href: '/media',
                  external: false,
                },
                {
                  eyebrow: 'Golf & Hospitality',
                  label: 'Live QR menus, sponsor systems, course QR infrastructure, and guest engagement.',
                  accent: 'var(--color-hps-green)',
                  href: '/golf',
                  external: false,
                },
                {
                  eyebrow: 'AI & Automation',
                  label: 'Claude and n8n-based workflow automation for content, data, and operational intelligence.',
                  accent: 'var(--color-hps-teal)',
                  href: '/ai-systems',
                  external: false,
                },
                {
                  eyebrow: 'Accessibility & Compliance',
                  label: 'Enterprise WCAG audits, operational testing, remediation guidance, and compliance systems.',
                  accent: 'var(--color-hps-teal-dark)',
                  href: 'https://hpsaccessibility.com',
                  external: true,
                },
                {
                  eyebrow: 'Hosting & Infrastructure',
                  label: 'Six managed hosting products built for restaurants, creators, and stores.',
                  accent: 'var(--color-hps-coral-warm)',
                  href: '/hosting',
                  external: false,
                },
              ].map((item, i) => {
                const sharedStyle = {
                  background: 'var(--color-hps-parchment)',
                  border: '1px solid rgba(200,180,154,0.40)',
                  textDecoration: 'none',
                }
                const sharedEnter = (e: React.MouseEvent<HTMLElement>) => {
                  e.currentTarget.style.borderColor = item.accent
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(12,20,32,0.07)'
                }
                const sharedLeave = (e: React.MouseEvent<HTMLElement>) => {
                  e.currentTarget.style.borderColor = 'rgba(200,180,154,0.40)'
                  e.currentTarget.style.boxShadow = 'none'
                }
                const inner = (
                  <>
                    <div
                      className="w-1 shrink-0 self-stretch rounded-full mt-0.5"
                      style={{ background: item.accent }}
                      aria-hidden="true"
                    />
                    <div>
                      <p
                        className="font-mono uppercase mb-1.5"
                        style={{ fontSize: '0.58rem', letterSpacing: '0.18em', color: item.accent }}
                      >
                        {item.eyebrow}
                      </p>
                      <p
                        className="font-body text-sm leading-relaxed"
                        style={{ color: 'var(--color-hps-smoke)' }}
                      >
                        {item.label}
                      </p>
                    </div>
                  </>
                )
                return item.external ? (
                  <a
                    key={item.href + item.eyebrow}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-reveal
                    data-reveal-delay={String((i % 3) * 80)}
                    className="group flex items-start gap-4 p-5 rounded-sm transition-all duration-200"
                    style={sharedStyle}
                    onMouseEnter={sharedEnter}
                    onMouseLeave={sharedLeave}
                  >
                    {inner}
                  </a>
                ) : (
                  <Link
                    key={item.href + item.eyebrow}
                    to={item.href}
                    data-reveal
                    data-reveal-delay={String((i % 3) * 80)}
                    className="group flex items-start gap-4 p-5 rounded-sm transition-all duration-200"
                    style={sharedStyle}
                    onMouseEnter={sharedEnter}
                    onMouseLeave={sharedLeave}
                  >
                    {inner}
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        <SectionBridge from="var(--color-hps-cream)" to="var(--color-hps-parchment)" accent="var(--color-hps-coral-warm)" />

        {/* ── Physical + Digital Bridge ───────────────────────────────── */}
        <section className="py-20 lg:py-28" style={{ background: 'var(--color-hps-parchment)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-20 items-start">
              <div data-reveal>
                <p
                  className="font-mono uppercase mb-4"
                  style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--color-hps-coral-warm)' }}
                >
                  Physical + digital
                </p>
                <h2
                  className="font-display mb-6"
                  style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: 'var(--color-hps-ink)', lineHeight: 1.04 }}
                >
                  The studio where physical and digital share a production floor.
                </h2>
                <p
                  className="font-body leading-relaxed mb-5"
                  style={{ fontSize: '1.0625rem', color: 'var(--color-hps-smoke)', maxWidth: '42rem' }}
                >
                  UV-printed plaques carry embedded QR codes. Laser-engraved surfaces connect to live digital content. DTG apparel links to BioLinks pages. Physical production and digital infrastructure share the same team, the same workflow, and the same ongoing relationship.
                </p>
                <p
                  className="font-body leading-relaxed mb-8"
                  style={{ fontSize: '1.0625rem', color: 'var(--color-hps-smoke)', maxWidth: '42rem' }}
                >
                  The result is a system where a single QR code printed on a sponsor plaque today can redirect to a new destination next season — without reprinting, without a new vendor, without a project restart.
                </p>
                <Link
                  to="/fabrication"
                  className="inline-flex items-center font-body font-medium text-sm rounded-sm transition-all duration-200"
                  style={{ padding: '0.75rem 1.5rem', background: 'var(--color-hps-coral-warm)', color: '#fff', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  Explore the Fabrication Lab →
                </Link>
              </div>
              <div className="flex flex-col gap-4">
                {[
                  {
                    title: 'UV-printed sponsor plaques',
                    body: 'Dimensional UV-printed plaque installed at a golf tee box. Carries a dynamic QR code. Scan data feeds directly into sponsor renewal conversations — no manual reporting needed.',
                    from: 'Fabrication Lab',
                    to: 'HPS QR Code',
                    accent: 'var(--color-hps-green)',
                  },
                  {
                    title: 'DTG apparel + creator bio',
                    body: 'Full-color garment printed in-house and linked to a BioLinks hub page. Merch becomes a distribution channel. The physical product drives digital traffic.',
                    from: 'DTG Printing',
                    to: 'HPS BioLinks',
                    accent: 'var(--color-hps-gold)',
                  },
                  {
                    title: 'Laser-engraved QR surfaces',
                    body: 'Dimensional laser-engraved plaques, coasters, or signage embedded with QR codes pointing to live menus, reservation pages, or seasonal content — updated from a dashboard.',
                    from: 'Laser Systems',
                    to: 'QR-Connected Surfaces',
                    accent: 'var(--color-hps-coral-warm)',
                  },
                ].map((item, i) => (
                  <div
                    key={item.title}
                    data-reveal
                    data-reveal-delay={String((i + 1) * 80)}
                    className="rounded-sm p-5"
                    style={{
                      background: 'var(--color-hps-cream)',
                      border: '1px solid rgba(200,180,154,0.40)',
                    }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-mono uppercase" style={{ fontSize: '0.56rem', letterSpacing: '0.14em', color: item.accent }}>{item.from}</span>
                      <span style={{ color: 'rgba(200,180,154,0.70)', fontSize: '0.7rem' }}>→</span>
                      <span className="font-mono uppercase" style={{ fontSize: '0.56rem', letterSpacing: '0.14em', color: 'var(--color-hps-smoke)', opacity: 0.75 }}>{item.to}</span>
                    </div>
                    <p className="font-display mb-2" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}>{item.title}</p>
                    <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-hps-smoke)' }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <SectionBridge from="var(--color-hps-parchment)" to="var(--color-hps-cream)" />

        {/* ── Operational Proof Anchor ────────────────────────────────── */}
        <section
          className="py-14 lg:py-20"
          style={{ background: 'var(--color-hps-cream)' }}
          aria-label="Operational proof: in-house fabrication"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <OperationalPhoto
                src="/images/golf-plaque-final.jpg"
                alt="UV-printed sponsor plaque deployed at a golf tee box, Leesburg FL"
                environment="golf"
                aspect="4/3"
                accentColor="var(--color-hps-green)"
                caption="Deployed sponsor plaque · UV print + QR code · Tee complex installation"
                annotations={[
                  { x: 42, y: 38, label: 'UV raised surface', detail: 'Dimensional relief' },
                  { x: 72, y: 62, label: 'Dynamic QR', detail: 'Scan-tracked destination' },
                ]}
              />
              <div data-reveal>
                <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-green)' }}>
                  In-house production
                </p>
                <h3 className="font-display mb-4" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.875rem)', color: 'var(--color-hps-ink)', lineHeight: 1.06 }}>
                  Produced here. Deployed on-course.
                </h3>
                <p className="font-body leading-relaxed mb-4" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)', maxWidth: '36rem' }}>
                  Every plaque, marker, and sponsor surface in the HPS Golf ecosystem is UV-printed and finished at the Leesburg fabrication lab. The same team that produces the surface manages the QR infrastructure it carries.
                </p>
                <p className="font-body leading-relaxed" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)', maxWidth: '36rem', opacity: 0.85 }}>
                  Season over season, the physical surface stays in place. The digital destination updates from a dashboard.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Featured Platforms ──────────────────────────────────────── */}
        <section className="py-20 lg:py-28" style={{ background: 'var(--color-hps-cream)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div data-reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <p
                  className="font-mono uppercase mb-3"
                  style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--color-hps-green)' }}
                >
                  In-house software
                </p>
                <h2
                  className="font-display text-hps-ink leading-tight"
                  style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
                >
                  Built for operations, not experiments.
                </h2>
              </div>
              <Link
                to="/platforms"
                className="font-mono uppercase shrink-0 transition-colors duration-200"
                style={{ fontSize: '0.65rem', letterSpacing: '0.16em', color: 'var(--color-hps-green)', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-hps-ink)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-hps-green)')}
              >
                All 20 platforms →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: 'HPS QR Code',       tagline: 'Dynamic QR codes you can update without reprinting.',          href: '/platforms/hps-qr-code',        accent: 'var(--color-hps-ink)' },
                { name: 'HPS Accessibility', tagline: 'Section 508 compliance made actionable.',                     href: '/platforms/hps-accessibility',  accent: 'var(--color-hps-teal-dark)' },
                { name: 'HPS Push',          tagline: 'Web push notifications for real engagement.',                  href: '/platforms/hps-push',           accent: 'var(--color-hps-teal)' },
                { name: 'FreeBeatsMUSIC',    tagline: 'Free beats for creators, licensed for production use.',        href: '/platforms/freebeats-music',    accent: 'var(--color-hps-gold)' },
                { name: 'HPS Uptime',        tagline: 'Know the moment your site goes down.',                        href: '/platforms/hps-uptime',         accent: 'var(--color-hps-coral-warm)' },
                { name: 'HPS QR Menu',       tagline: 'A digital menu your guests actually enjoy using.',            href: '/platforms/hps-qr-menu',        accent: 'var(--color-hps-gold-rich)' },
                { name: 'HPS AI Systems',    tagline: 'Operational AI that fits how you actually work.',             href: '/platforms/hps-ai-systems',     accent: 'var(--color-hps-teal)' },
                { name: 'HPS Client Portal', tagline: 'Every deliverable, invoice, and project update in one place.', href: '/platforms/hps-client-portal',  accent: 'var(--color-hps-ink)' },
              ].map((item, i) => (
                <Link
                  key={item.href}
                  to={item.href}
                  data-reveal
                  data-reveal-delay={String((i % 4) * 80)}
                  className="group block rounded-sm p-5 transition-all duration-200"
                  style={{ background: 'var(--color-hps-parchment)', border: '1px solid rgba(200,180,154,0.40)', textDecoration: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = item.accent; e.currentTarget.style.boxShadow = '0 4px 16px rgba(12,20,32,0.08)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(200,180,154,0.40)'; e.currentTarget.style.boxShadow = 'none' }}
                >
                  <div className="w-5 h-px mb-3" style={{ background: item.accent }} aria-hidden="true" />
                  <p className="font-display mb-2 group-hover:underline" style={{ fontSize: '1rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}>{item.name}</p>
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-hps-smoke)' }}>{item.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <SectionBridge from="var(--color-hps-cream)" to="var(--color-hps-parchment)" />

        {/* ── Industry Pathways ───────────────────────────────────────── */}
        <section className="py-20 lg:py-28" style={{ background: 'var(--color-hps-parchment)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div data-reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <p
                  className="font-mono uppercase mb-3"
                  style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--color-hps-green)' }}
                >
                  Industry pathways
                </p>
                <h2
                  className="font-display text-hps-ink leading-tight"
                  style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
                >
                  Vertical-specific builds.
                </h2>
              </div>
              <Link
                to="/ecosystems"
                className="font-mono uppercase shrink-0 transition-colors duration-200"
                style={{ fontSize: '0.65rem', letterSpacing: '0.16em', color: 'var(--color-hps-green)', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-hps-ink)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-hps-green)')}
              >
                All pathways →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { slug: 'golf-recreation',       name: 'Golf & Recreation',            tag: 'Course Management', desc: 'Sponsor activation, QR signage, course operations, and guest engagement for modern golf operators.',       accent: 'var(--color-hps-green)' },
                { slug: 'hospitality-restaurants',name: 'Hospitality & Restaurants',   tag: 'Table Service',     desc: 'Live QR menus, review management, and push re-engagement for restaurants and hospitality venues.',       accent: 'var(--color-hps-gold-rich)' },
                { slug: 'healthcare-accessibility',name: 'Healthcare & Accessibility', tag: 'Compliance',        desc: 'WCAG 2.1 and Section 508 audit, remediation, and documentation for healthcare and federal clients.',     accent: 'var(--color-hps-teal-dark)' },
                { slug: 'enterprise',             name: 'Enterprise & Professional',   tag: 'Infrastructure',    desc: 'Uptime monitoring, accessibility compliance, SEO health, and secure operations at organizational scale.', accent: 'var(--color-hps-ink)' },
                { slug: 'local-business',         name: 'Local Business',              tag: 'Visibility',        desc: 'Review presence, QR systems, local SEO monitoring, and a direct push channel for local operators.',       accent: 'var(--color-hps-coral-warm)' },
                { slug: 'creators-media',         name: 'Creators & Media',            tag: 'Distribution',      desc: 'Bio link management, file delivery, cross-platform analytics, and audience push for independent creators.', accent: 'var(--color-hps-gold)' },
              ].map((v, i) => (
                <Link
                  key={v.slug}
                  to={`/ecosystem/${v.slug}`}
                  data-reveal
                  data-reveal-delay={String((i % 3) * 80)}
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    className="rounded-sm p-6 h-full transition-all duration-300"
                    style={{ background: 'var(--color-hps-cream)', border: '1px solid rgba(200,180,154,0.40)', borderTop: `3px solid ${v.accent}` }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 28px -6px rgba(12,20,32,0.10)' }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
                  >
                    <p className="font-mono uppercase mb-3" style={{ fontSize: '0.58rem', letterSpacing: '0.18em', color: v.accent }}>{v.tag}</p>
                    <h3 className="font-display mb-3" style={{ fontSize: '1.25rem', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>{v.name}</h3>
                    <p className="font-body text-sm leading-relaxed mb-5" style={{ color: 'var(--color-hps-smoke)' }}>{v.desc}</p>
                    <span className="font-mono uppercase" style={{ fontSize: '0.6rem', letterSpacing: '0.18em', color: v.accent }}>Explore pathway →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <SectionBridge from="var(--color-hps-parchment)" to="var(--color-hps-cream)" accent="var(--color-hps-teal)" />

        {/* ── Infrastructure & Tools ──────────────────────────────────── */}
        <section className="py-20 lg:py-28" style={{ background: 'var(--color-hps-cream)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div data-reveal className="mb-12">
              <p
                className="font-mono uppercase mb-3"
                style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--color-hps-green)' }}
              >
                Infrastructure & tools
              </p>
              <h2
                className="font-display text-hps-ink leading-tight max-w-xl"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
              >
                The operational backbone.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  eyebrow: 'Hosting & Infrastructure',
                  name: 'Managed hosting for real businesses.',
                  desc: 'Six managed hosting products purpose-built for restaurants, creators, stores, and professional services — with uptime monitoring, SSL management, and migration support.',
                  href: '/hosting',
                  accent: 'var(--color-hps-gold-rich)',
                  cta: 'View hosting plans →',
                },
                {
                  eyebrow: 'AI Systems & Automation',
                  name: 'Workflow intelligence, not AI experiments.',
                  desc: 'Claude, n8n, Olares, and Manus configured into operational workflows — content automation, compliance monitoring, reporting pipelines, and data enrichment that runs without a dedicated coordinator.',
                  href: '/ai-systems',
                  accent: 'var(--color-hps-teal)',
                  cta: 'Explore AI systems →',
                },
                {
                  eyebrow: 'Client Portal',
                  name: 'Projects, deliverables, and billing in one place.',
                  desc: 'The client-facing operations layer for every HPS engagement — project status, deliverable access, approval workflows, invoicing, and a direct support line without email threads.',
                  href: '/client-portal',
                  accent: 'var(--color-hps-ink)',
                  cta: 'Access client portal →',
                },
                {
                  eyebrow: 'Free Tools',
                  name: 'No-account utilities for everyday tasks.',
                  desc: 'Free SEO tools, ecommerce utilities, QR generators, and operational checklists available without subscriptions — for business owners who need quick answers without enterprise tooling.',
                  href: '/platforms/hps-seo-tools',
                  accent: 'var(--color-hps-green)',
                  cta: 'Try the free tools →',
                },
              ].map((item, i) => (
                <Link
                  key={item.href}
                  to={item.href}
                  data-reveal
                  data-reveal-delay={String((i % 2) * 80)}
                  className="group block rounded-sm p-7 transition-all duration-200"
                  style={{ background: 'var(--color-hps-parchment)', border: '1px solid rgba(200,180,154,0.40)', borderTop: `3px solid ${item.accent}`, textDecoration: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 24px -4px rgba(12,20,32,0.10)' }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none' }}
                >
                  <p className="font-mono uppercase mb-2" style={{ fontSize: '0.58rem', letterSpacing: '0.2em', color: item.accent }}>{item.eyebrow}</p>
                  <h3 className="font-display mb-3" style={{ fontSize: '1.25rem', color: 'var(--color-hps-ink)', lineHeight: 1.15 }}>{item.name}</h3>
                  <p className="font-body text-sm leading-relaxed mb-5" style={{ color: 'var(--color-hps-smoke)' }}>{item.desc}</p>
                  <span className="font-mono uppercase" style={{ fontSize: '0.6rem', letterSpacing: '0.16em', color: item.accent }}>{item.cta}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <SectionBridge from="var(--color-hps-cream)" to="var(--color-hps-parchment)" />

        {/* ── Not a Normal Agency ─────────────────────────────────────── */}
        <section className="py-20 lg:py-28" style={{ background: 'var(--color-hps-parchment)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div data-reveal>
                <p
                  className="font-mono uppercase mb-4"
                  style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--color-hps-green)' }}
                >
                  How we work
                </p>
                <h2
                  className="font-display mb-6"
                  style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.875rem)', color: 'var(--color-hps-ink)', lineHeight: 1.04 }}
                >
                  The work doesn't end at delivery.
                </h2>
                <p
                  className="font-body leading-relaxed mb-5"
                  style={{ fontSize: '1.0625rem', color: 'var(--color-hps-smoke)', maxWidth: '38rem' }}
                >
                  Every engagement is structured with a long-term operational arc: initial setup, then active operations, then compounding infrastructure that becomes more valuable over time.
                </p>
                <p
                  className="font-body leading-relaxed mb-8"
                  style={{ fontSize: '1.0625rem', color: 'var(--color-hps-smoke)', maxWidth: '38rem' }}
                >
                  After six months of working together, the systems we built don't feel like tools. They feel like the way your operation works.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center font-body font-medium text-sm rounded-sm transition-all duration-200"
                  style={{ padding: '0.75rem 1.75rem', background: 'var(--color-hps-green)', color: '#fff', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  Start a free consultation →
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: 'We build what we design.',    desc: 'No design-to-developer handoff. The same team takes a project from concept to deployment.',             accent: 'var(--color-hps-green)' },
                  { label: 'We monitor what we host.',    desc: 'Hosting clients get uptime monitoring, SSL management, and outage alerts at no additional cost.',        accent: 'var(--color-hps-teal-dark)' },
                  { label: 'We update what we print.',    desc: 'Dynamic QR codes let us change the destination of a printed surface without a reprint order.',           accent: 'var(--color-hps-coral-warm)' },
                  { label: 'We support what we launch.',  desc: 'Post-launch support is part of every engagement. Not a separate contract, not a per-ticket billing.',  accent: 'var(--color-hps-gold-rich)' },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    data-reveal
                    data-reveal-delay={String((i % 2) * 80)}
                    className="rounded-sm p-5"
                    style={{
                      background: 'var(--color-hps-cream)',
                      border: '1px solid rgba(200,180,154,0.40)',
                    }}
                  >
                    <div className="w-5 h-px mb-3" style={{ background: item.accent }} aria-hidden="true" />
                    <p className="font-display mb-2" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}>{item.label}</p>
                    <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-hps-smoke)' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <EnterpriseOperationalTrust />

        <SectionBridge from="var(--color-hps-parchment)" to="var(--color-hps-cream)" accent="var(--color-hps-green)" />

        {/* ── Contact Gateway ─────────────────────────────────────────── */}
        <section className="py-20 lg:py-28" style={{ background: 'var(--color-hps-cream)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div data-reveal className="mb-12 max-w-xl">
              <p
                className="font-mono uppercase mb-3"
                style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--color-hps-green)' }}
              >
                Ready to start?
              </p>
              <h2
                className="font-display text-hps-ink leading-tight"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
              >
                Three ways to connect with HPS.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <Link
                to="/contact"
                data-reveal
                className="group block rounded-sm p-7 transition-all duration-200"
                style={{ background: 'var(--color-hps-green)', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.92')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                <div className="w-5 h-px mb-4" style={{ background: 'rgba(244,234,212,0.50)' }} aria-hidden="true" />
                <p className="font-display mb-3" style={{ fontSize: '1.25rem', color: 'var(--color-hps-cream)', lineHeight: 1.2 }}>Free Consultation</p>
                <p className="font-body text-sm leading-relaxed mb-5" style={{ color: 'rgba(244,234,212,0.80)' }}>
                  Let's talk about your business, your ideas, and how we can help bring everything together.
                </p>
                <span className="font-mono uppercase" style={{ fontSize: '0.6rem', letterSpacing: '0.18em', color: 'var(--color-hps-gold-light)' }}>Start the conversation →</span>
              </Link>
              <Link
                to="/ecosystems"
                data-reveal
                data-reveal-delay="80"
                className="group block rounded-sm p-7 transition-all duration-200"
                style={{ background: 'var(--color-hps-parchment)', border: '1px solid rgba(200,180,154,0.40)', textDecoration: 'none' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-hps-green)'; e.currentTarget.style.boxShadow = '0 8px 24px -4px rgba(12,20,32,0.10)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(200,180,154,0.40)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <div className="w-5 h-px mb-4" style={{ background: 'var(--color-hps-green)' }} aria-hidden="true" />
                <p className="font-display mb-3" style={{ fontSize: '1.25rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}>Explore the Ecosystem</p>
                <p className="font-body text-sm leading-relaxed mb-5" style={{ color: 'var(--color-hps-smoke)' }}>
                  See how every platform, service, and capability connects, whether you run a restaurant, a golf course, a local shop, or a growing studio.
                </p>
                <span className="font-mono uppercase" style={{ fontSize: '0.6rem', letterSpacing: '0.18em', color: 'var(--color-hps-green)' }}>Full ecosystem →</span>
              </Link>
              <div
                data-reveal
                data-reveal-delay="160"
                className="rounded-sm p-7"
                style={{ background: 'var(--color-hps-parchment)', border: '1px solid rgba(200,180,154,0.40)' }}
              >
                <div className="w-5 h-px mb-4" style={{ background: 'var(--color-hps-gold-rich)' }} aria-hidden="true" />
                <p className="font-display mb-3" style={{ fontSize: '1.25rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}>Call or Message</p>
                <p className="font-body text-sm leading-relaxed mb-5" style={{ color: 'var(--color-hps-smoke)' }}>
                  Leesburg, Florida. We respond within one business day. Every inquiry gets a personal read before we reply.
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href="tel:+13522907744"
                    className="font-mono transition-colors duration-200"
                    style={{ fontSize: '0.875rem', letterSpacing: '0.06em', color: 'var(--color-hps-ink)', textDecoration: 'none' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-hps-green)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-hps-ink)')}
                  >
                    352-290-7744
                  </a>
                  <a
                    href="mailto:ron@happypathstudios.com"
                    className="font-body text-sm transition-colors duration-200"
                    style={{ color: 'var(--color-hps-smoke)', textDecoration: 'none' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-hps-green)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-hps-smoke)')}
                  >
                    ron@happypathstudios.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>{/* end atmosphere wrapper */}

      {/* ── CTA band ──────────────────────────────────────────────── */}
      <section style={{ background: 'var(--color-hps-green-dark)', padding: '5rem 0' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center" data-reveal>
          <h2
            className="font-display leading-tight mb-4"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: 'var(--color-hps-ivory)' }}
          >
            Build something that keeps running.
          </h2>
          <p
            className="font-body leading-relaxed mb-8 max-w-xl mx-auto"
            style={{ fontSize: '1rem', color: 'rgba(244,234,212,0.65)' }}
          >
            A 30-minute consultation, no pitch. Just a direct conversation about your operation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center font-body font-medium text-sm rounded-sm transition-colors duration-200"
              style={{ padding: '0.75rem 1.75rem', background: 'var(--color-hps-gold)', color: 'var(--color-hps-ink)' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-hps-gold-light)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-hps-gold)')}
            >
              Book a Free Consultation
            </Link>
            <a
              href="tel:+13522907744"
              className="font-mono transition-colors duration-200"
              style={{ fontSize: '0.875rem', letterSpacing: '0.1em', color: 'rgba(232,184,75,0.70)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-hps-gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(232,184,75,0.70)')}
            >
              or call 352-290-7744
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
