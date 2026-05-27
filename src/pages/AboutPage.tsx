import { Link } from 'react-router-dom'
import CTABand from '../components/sections/CTABand'
import BackgroundAtmosphere from '../components/decorative/BackgroundAtmosphere'
import { usePageMeta } from '../hooks/usePageMeta'

// ── Timeline of evolution ─────────────────────────────────────────────────────

const evolution = [
  {
    era: 'The Foundation',
    period: 'Early career',
    accent: 'var(--color-hps-gold)',
    story: 'Started with drawing. Formal art training built the foundational discipline — observation, composition, proportion, the patient attention to visual relationships that you can\'t shortcut. That foundation never left.',
    details: 'Early work spanned garment design, music production, and video — different crafts, same underlying principle: medium matters, execution is everything, and the gap between a good idea and a good result is craft.',
  },
  {
    era: 'UX & Systems',
    period: 'Interface era',
    accent: 'var(--color-hps-teal-dark)',
    story: 'The transition into UX design wasn\'t a departure from making things — it was applying the same visual discipline to systems. How information is organized, how users navigate, how a workflow feels under the hands.',
    details: 'Worked across enterprise interfaces, consumer applications, and service design. The shift from "making something beautiful" to "making something work beautifully" changed the frame. Both still matter. Neither is enough alone.',
  },
  {
    era: 'Accessibility',
    period: 'Compliance & inclusion',
    accent: 'var(--color-hps-gold-rich)',
    story: 'Accessibility expertise developed through direct engagement with federal, healthcare, and enterprise clients where non-compliance wasn\'t an option. Screen reader testing, Section 508 audits, WCAG remediation — operational rigor applied to inclusive design.',
    details: 'The discipline of accessibility sharpened both design instincts and technical skills. If a component works correctly for a screen reader, it\'s well-structured HTML. Accessibility and quality are the same thing, measured differently.',
  },
  {
    era: 'Fabrication Lab',
    period: 'Physical production',
    accent: 'var(--color-hps-coral-warm)',
    story: 'Built the fabrication lab to close the gap between digital and physical. UV printers, laser systems, embroidery machines, 3D printers — the logic of in-house production is the same as in-house software: control, quality, and speed.',
    details: 'A laser-engraved plaque with an embedded QR code that routes to a live digital destination is not a sign shop product or a software product. It\'s both. That\'s the case for keeping fabrication and digital within the same operation.',
  },
  {
    era: 'Ecosystem Philosophy',
    period: 'HPS Studio',
    accent: 'var(--color-hps-green)',
    story: 'Happy Path Studios is the synthesis: design, software, fabrication, and connected digital platforms working as one operational system. Every piece is designed to work with every other piece.',
    details: 'The name says what it means. A Happy Path is the scenario where everything goes according to plan. That\'s the goal: remove the friction points from the way a business connects its identity to its customers, its physical presence to its digital one.',
  },
]

// ── Industries ────────────────────────────────────────────────────────────────

const industries = [
  'Federal agencies & government contractors',
  'Healthcare organizations & patient portals',
  'Universities & educational institutions',
  'Golf courses & recreational facilities',
  'Restaurants, bars & food service operations',
  'Hospitality & hotel properties',
  'Retail & e-commerce businesses',
  'Nonprofits & community organizations',
  'Professional services & legal firms',
  'Manufacturing & fabrication operations',
  'Creative agencies & production companies',
  'Event organizers & venue operators',
]

// ── Studio facts ──────────────────────────────────────────────────────────────

const facts = [
  { label: 'Location',     value: 'Leesburg, Florida' },
  { label: 'County',       value: 'Lake County' },
  { label: 'Coordinates',  value: '28.81° N  ·  81.88° W' },
  { label: 'Phone',        value: '352-290-7744', href: 'tel:+13522907744' },
  { label: 'Service area', value: 'Central Florida & beyond' },
  { label: 'Twitter / X',  value: '@happypathstudio', href: 'https://x.com/happypathstudio' },
  { label: 'Email',        value: 'ron@happypathstudios.com', href: 'mailto:ron@happypathstudios.com' },
]

export default function AboutPage() {
  usePageMeta({
    title: 'About Happy Path Studios',
    description: 'Happy Path Studios is a fabrication lab, digital platform ecosystem, and operational services studio based in Leesburg, Florida. One team. Every capability.',
  })
  return (
    <>
      <div style={{ position: 'relative', isolation: 'isolate' }}>
      <BackgroundAtmosphere mood="citrus" intensity="subtle" density="sparse" />
      {/* ── Header ──────────────────────────────────────────────────── */}
      <section
        className="pt-32 lg:pt-40 pb-16 lg:pb-20"
        style={{ background: 'var(--color-hps-cream)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="w-8 h-px mb-6" style={{ background: 'var(--color-hps-green)' }} aria-hidden="true" />
            <p className="font-mono uppercase mb-4" style={{ fontSize: '0.65rem', letterSpacing: '0.22em', color: 'var(--color-hps-green)' }}>
              Leesburg, Florida
            </p>
            <h1
              data-reveal
              className="font-display mb-6"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', color: 'var(--color-hps-ink)', lineHeight: 1.05 }}
            >
              About Happy Path Studios
            </h1>
            <p
              data-reveal
              data-reveal-delay="80"
              className="font-body leading-relaxed"
              style={{ fontSize: '1.125rem', color: 'var(--color-hps-smoke)', maxWidth: '38rem' }}
            >
              An in-house creative, fabrication, and technology studio built by someone who started with art and ended up building ecosystems.
            </p>
          </div>
        </div>
      </section>

      {/* ── What is a Happy Path ────────────────────────────────────── */}
      <section className="py-16 lg:py-20" style={{ background: 'var(--color-hps-parchment)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div data-reveal>
              <p className="font-mono uppercase mb-4" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-green)' }}>
                The philosophy
              </p>
              <h2 className="font-display mb-5" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: 'var(--color-hps-ink)', lineHeight: 1.05 }}>
                What is a Happy Path?
              </h2>
              <div className="flex flex-col gap-4 font-body leading-relaxed" style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)' }}>
                <p>
                  In software design, the Happy Path is the scenario where everything goes according to plan — the user does exactly what was intended, no errors, no friction, no detours. Maximum happiness. That's the target.
                </p>
                <p>
                  That principle extends to every project here. We remove the friction from how a business builds its presence — design, digital infrastructure, and physical production handled by the same team, with no handoffs, no translation loss, and no surprises.
                </p>
                <p>
                  We're small enough to care about every detail and capable enough to handle every piece of the system. That combination is what the name means.
                </p>
              </div>
            </div>
            <div data-reveal data-reveal-delay="80">
              <p className="font-mono uppercase mb-5" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-smoke)', opacity: 0.70 }}>
                Studio information
              </p>
              <dl className="flex flex-col">
                {facts.map((f, i, arr) => (
                  <div
                    key={f.label}
                    className="flex justify-between items-baseline py-3.5"
                    style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(200,180,154,0.40)' : 'none' }}
                  >
                    <dt className="font-mono" style={{ fontSize: '0.7rem', letterSpacing: '0.12em', color: 'var(--color-hps-smoke)', opacity: 0.70 }}>
                      {f.label}
                    </dt>
                    <dd className="font-body text-sm font-medium text-right" style={{ color: 'var(--color-hps-ink)' }}>
                      {f.href
                        ? (
                          <a
                            href={f.href}
                            style={{ color: 'var(--color-hps-ink)', textDecoration: 'none' }}
                            onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-hps-green)')}
                            onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-hps-ink)')}
                          >
                            {f.value}
                          </a>
                        )
                        : f.value
                      }
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8">
                <Link to="/contact" className="btn-primary">
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Evolution narrative ─────────────────────────────────────── */}
      <section className="py-16 lg:py-28" style={{ background: 'var(--color-hps-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-12">
            <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-green)' }}>
              From artist to systems builder
            </p>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
              The background that built this studio
            </h2>
          </div>
          <div className="flex flex-col gap-0">
            {evolution.map((phase, i, arr) => (
              <div
                key={phase.era}
                data-reveal
                data-reveal-delay={String((i % 3) * 60)}
                className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6 lg:gap-12 py-10"
                style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(200,180,154,0.40)' : 'none' }}
              >
                <div>
                  <div className="w-6 h-px mb-3" style={{ background: phase.accent }} aria-hidden="true" />
                  <p className="font-display mb-1" style={{ fontSize: '1.125rem', color: 'var(--color-hps-ink)' }}>
                    {phase.era}
                  </p>
                  <p className="font-mono" style={{ fontSize: '0.6rem', letterSpacing: '0.14em', color: phase.accent, opacity: 0.75 }}>
                    {phase.period}
                  </p>
                </div>
                <div>
                  <p className="font-body leading-relaxed mb-3" style={{ fontSize: '1rem', color: 'var(--color-hps-ink)' }}>
                    {phase.story}
                  </p>
                  <p className="font-body leading-relaxed" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}>
                    {phase.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Studio Capabilities ─────────────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-parchment)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-10">
            <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-green)' }}>
              What we build
            </p>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
              Four disciplines. One production relationship.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                label: 'Digital Systems',
                accent: 'var(--color-hps-teal-dark)',
                tag: 'Engineering',
                desc: 'Web development and UX design for organizations where the website is operational infrastructure. Accessibility compliance — WCAG 2.1, Section 508, ADA Title III — for healthcare, federal, and enterprise clients who carry real documentation requirements.',
                detail: 'Technologies: custom web builds, React, Astro, WordPress, accessibility audits, assistive technology testing, VPAT documentation, SEO infrastructure, Core Web Vitals.',
                href: '/services',
              },
              {
                label: 'Physical Production',
                accent: 'var(--color-hps-coral-warm)',
                tag: 'Fabrication',
                desc: 'In-house fabrication covering UV textured printing, fiber and CO₂ laser engraving, DTG apparel printing, sublimation printing, embroidery, vinyl cutting, and FDM and resin 3D printing. The same shop that designs the signage produces it.',
                detail: 'Output: sponsor signage, dimensional plaques, branded apparel, promotional materials, QR-connected physical surfaces, course and venue signage, custom awards.',
                href: '/fabrication',
              },
              {
                label: 'SaaS Platforms',
                accent: 'var(--color-hps-gold-rich)',
                tag: 'Software',
                desc: 'Twenty in-house platforms covering social scheduling, web push notifications, behavioral analytics, QR infrastructure, review aggregation, AI workflow systems, accessibility monitoring, client portal infrastructure, and creator tools.',
                detail: 'Designed for operational continuity, not feature checklists. Each platform is built to become more valuable the longer it runs, and to connect naturally with the others in the ecosystem.',
                href: '/platforms',
              },
              {
                label: 'Connected Infrastructure',
                accent: 'var(--color-hps-green)',
                tag: 'Integration',
                desc: 'QR-connected physical surfaces that update from a dashboard without reprinting. Managed hosting environments built for specific business types. AI and n8n workflow automation that runs behind content, communication, and reporting systems.',
                detail: 'The physical-to-digital connection layer: a laser-engraved plaque with a live QR destination is not a sign shop product or a software product. It requires both disciplines working as one.',
                href: '/ecosystems',
              },
            ].map((cap, i) => (
              <Link
                key={cap.label}
                to={cap.href}
                data-reveal
                data-reveal-delay={String((i % 2) * 80)}
                className="group block rounded-sm p-7 transition-all duration-300"
                style={{ background: 'var(--color-hps-cream)', border: '1px solid rgba(200,180,154,0.40)', borderTop: `3px solid ${cap.accent}`, textDecoration: 'none' }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 8px 24px -4px rgba(12,20,32,0.09)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <p className="font-mono uppercase mb-3" style={{ fontSize: '0.58rem', letterSpacing: '0.18em', color: cap.accent }}>
                  {cap.tag}
                </p>
                <h3 className="font-display mb-3" style={{ fontSize: '1.375rem', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
                  {cap.label}
                </h3>
                <p className="font-body text-sm leading-relaxed mb-4" style={{ color: 'var(--color-hps-smoke)' }}>
                  {cap.desc}
                </p>
                <p className="font-body text-sm leading-relaxed mb-5" style={{ color: 'var(--color-hps-smoke)', opacity: 0.75 }}>
                  {cap.detail}
                </p>
                <span className="font-mono uppercase" style={{ fontSize: '0.6rem', letterSpacing: '0.16em', color: cap.accent }}>
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Selected industries ─────────────────────────────────────── */}
      <section className="py-16 lg:py-20" style={{ background: 'var(--color-hps-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div data-reveal>
              <p className="font-mono uppercase mb-4" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-green)' }}>
                Selected industries & organizations
              </p>
              <h2 className="font-display mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
                Who we work with
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {industries.map(ind => (
                  <div key={ind} className="flex items-start gap-3">
                    <span
                      className="shrink-0 mt-[0.4rem] w-1.5 h-1.5 rounded-full"
                      style={{ background: 'var(--color-hps-green)' }}
                      aria-hidden="true"
                    />
                    <span className="font-body text-sm leading-snug" style={{ color: 'var(--color-hps-smoke)' }}>
                      {ind}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div data-reveal data-reveal-delay="80">
              <p className="font-mono uppercase mb-4" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-smoke)', opacity: 0.70 }}>
                Portfolio & work
              </p>
              <h3 className="font-display mb-4" style={{ fontSize: '1.5rem', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
                Case studies and selected work.
              </h3>
              <p className="font-body leading-relaxed mb-8" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}>
                Deep case studies covering enterprise UX systems, Section 508 remediation programs, restaurant identities, golf ecosystem deployments, and physical fabrication projects are available at the founder portfolio.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://ronaldschnier.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ display: 'inline-flex', alignSelf: 'flex-start' }}
                >
                  View Portfolio
                </a>
                <a
                  href="tel:+13522907744"
                  className="font-mono transition-colors duration-200"
                  style={{ fontSize: '0.8rem', letterSpacing: '0.16em', color: 'var(--color-hps-gold-rich)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-hps-smoke)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-hps-gold-rich)')}
                >
                  352-290-7744
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ecosystem Discovery Gateway ─────────────────────────────── */}
      <section className="py-16 lg:py-20" style={{ background: 'var(--color-hps-parchment)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">

            <div data-reveal>
              <p className="font-mono uppercase mb-4" style={{ fontSize: '0.6rem', letterSpacing: '0.22em', color: 'var(--color-hps-green)' }}>
                Explore the ecosystem
              </p>
              <h2 className="font-display mb-4" style={{ fontSize: 'clamp(1.375rem, 2.5vw, 2rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
                Every capability is part of one system.
              </h2>
              <p className="font-body leading-relaxed mb-6" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}>
                The disciplines connect. A fabrication project with embedded QR codes, managed through a platform dashboard, hosted on HPS infrastructure, with compliance monitoring through the client portal. That is what an ecosystem engagement looks like in practice.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center font-body font-medium text-sm rounded-sm transition-all duration-200"
                style={{ padding: '0.65rem 1.4rem', background: 'var(--color-hps-green)', color: '#ffffff', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                Start a consultation →
              </Link>
            </div>

            <div data-reveal data-reveal-delay="80">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    label: 'Services',
                    rel: 'Web development, accessibility, fabrication, QR systems, and strategy',
                    href: '/services',
                    accent: 'var(--color-hps-teal-dark)',
                  },
                  {
                    label: 'Platforms',
                    rel: 'Twenty in-house platforms for marketing, analytics, operations, and AI',
                    href: '/platforms',
                    accent: 'var(--color-hps-gold-rich)',
                  },
                  {
                    label: 'Ecosystems',
                    rel: 'Industry pathways, operational flows, and how the systems connect',
                    href: '/ecosystems',
                    accent: 'var(--color-hps-green)',
                  },
                  {
                    label: 'Fabrication Lab',
                    rel: 'UV printing, laser systems, DTG apparel, sublimation, and 3D printing',
                    href: '/fabrication',
                    accent: 'var(--color-hps-coral-warm)',
                  },
                  {
                    label: 'Hosting',
                    rel: 'Managed hosting for restaurants, creators, professionals, and ecommerce',
                    href: '/hosting',
                    accent: 'var(--color-hps-teal)',
                  },
                  {
                    label: 'AI Systems',
                    rel: 'Workflow automation, content operations, and operational intelligence',
                    href: '/ai-systems',
                    accent: 'var(--color-hps-teal-dark)',
                  },
                ].map(item => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="group flex items-start gap-4 p-4 rounded-sm transition-all duration-200"
                    style={{ background: 'var(--color-hps-cream)', border: '1px solid rgba(200,180,154,0.40)', textDecoration: 'none' }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = item.accent
                      e.currentTarget.style.boxShadow = '0 4px 14px rgba(12,20,32,0.07)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(200,180,154,0.40)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <div className="w-1 shrink-0 self-stretch rounded-full" style={{ background: item.accent }} aria-hidden="true" />
                    <div className="flex-1 min-w-0">
                      <p className="font-body font-medium mb-0.5" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-ink)' }}>{item.label}</p>
                      <p className="font-body text-sm leading-snug" style={{ color: 'var(--color-hps-smoke)' }}>{item.rel}</p>
                    </div>
                    <span className="ml-auto self-center font-mono shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" style={{ fontSize: '0.65rem', color: item.accent }} aria-hidden="true">→</span>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      </div>{/* end atmosphere wrapper */}

      <CTABand
        headline="Ready to start a project?"
        subhead="Every engagement starts with a direct conversation about your operation and what needs to change."
        buttonText="Get In Touch"
        showPhone
      />
    </>
  )
}
