import { Link } from 'react-router-dom'
import CTABand from '../components/sections/CTABand'
import BackgroundAtmosphere from '../components/decorative/BackgroundAtmosphere'
import { usePageMeta } from '../hooks/usePageMeta'

const experienceLayers = [
  {
    label: 'Holiday Experiences',
    desc: 'Immersive, seasonally-driven experiences built around the Jewish holiday calendar — Rosh Hashanah, Yom Kippur, Sukkot, Hanukkah, Passover, Shavuot, and more. Each holiday presented as a living editorial environment with traditions, activities, and community context.',
    accent: 'var(--color-hps-gold-rich)',
    tag: 'Seasonal',
  },
  {
    label: 'Stories & Traditions',
    desc: 'A growing library of cultural stories, historical context, and living traditions curated for families and individuals exploring Jewish identity. From ancient narratives to modern practice — organized for discovery, not just reference.',
    accent: 'var(--color-hps-teal-dark)',
    tag: 'Cultural',
  },
  {
    label: 'Family Activities',
    desc: 'Practical, engaging activities designed for families to experience traditions together. Crafts, rituals, conversations, and shared experiences that connect generations around meaningful cultural moments.',
    accent: 'var(--color-hps-green)',
    tag: 'Family',
  },
  {
    label: 'Recipes & Food Culture',
    desc: 'An editorial food culture layer built around the culinary traditions of Jewish holidays and everyday life. Recipes presented with cultural context, family memory, and seasonal connection — not just ingredient lists.',
    accent: 'var(--color-hps-coral-warm)',
    tag: 'Food',
  },
  {
    label: 'Educational Discovery',
    desc: 'Curated learning pathways for children, families, and individuals at every stage of Jewish engagement. Age-appropriate, accessible, and designed to encourage exploration rather than instruction.',
    accent: 'var(--color-hps-teal)',
    tag: 'Education',
  },
  {
    label: 'Seasonal Engagement',
    desc: 'A dynamic content rhythm tied to the Hebrew calendar. Content surfaces change with the season — ensuring the platform feels alive, relevant, and personally meaningful throughout the year.',
    accent: 'var(--color-hps-gold)',
    tag: 'Rhythm',
  },
]

const visionLayers = [
  {
    n: '01',
    label: 'Family OS',
    desc: 'A long-term vision for HPS Shalom as the operating layer for Jewish family life — a single environment that holds traditions, memories, holidays, recipes, and community connections across generations.',
  },
  {
    n: '02',
    label: 'Commerce Layer',
    desc: 'Future commerce opportunities including curated Judaica, holiday kits, family experience bundles, educational materials, and artisan partnerships — all sourced and presented with editorial intention.',
  },
  {
    n: '03',
    label: 'Community Infrastructure',
    desc: 'Tools for synagogues, Hebrew schools, Jewish community organizations, and families to use HPS Shalom as a shared engagement platform — extending community reach into everyday digital life.',
  },
  {
    n: '04',
    label: 'Creator Ecosystem',
    desc: 'A framework for Jewish artists, writers, educators, and creators to publish and distribute within the HPS Shalom environment — building a living, creator-sustained cultural catalog.',
  },
]

const techStack = [
  {
    label: 'Editorial CMS Architecture',
    desc: 'Content organized around the Hebrew calendar, cultural taxonomy, and family experience layers — not generic blog or product structures.',
    accent: 'var(--color-hps-gold-rich)',
  },
  {
    label: 'Seasonal Content Engine',
    desc: 'Dynamic surfaces that surface relevant content based on the current Jewish calendar year, upcoming holidays, and family engagement history.',
    accent: 'var(--color-hps-teal-dark)',
  },
  {
    label: 'HPS Platform Integration',
    desc: 'Connected to HPS Push for holiday reminders, HPS Socialize for community distribution, HPS AI Systems for content assistance, and HPS hosting infrastructure.',
    accent: 'var(--color-hps-green)',
  },
  {
    label: 'Commerce-Ready Foundation',
    desc: 'Platform architecture designed to support product catalogs, curated collections, and artisan partnerships when the commerce layer activates.',
    accent: 'var(--color-hps-coral-warm)',
  },
]

export default function HPSShalomPage() {
  usePageMeta({
    title: 'HPS Shalom | Editorial & Cultural Experience Platform',
    description: 'HPS Shalom is a living cultural storytelling platform centered around Jewish holidays, traditions, recipes, family experiences, and educational discovery.',
  })
  return (
    <>
      <div style={{ position: 'relative', isolation: 'isolate' }}>
      <BackgroundAtmosphere mood="citrus" intensity="whisper" density="sparse" />

      {/* ── Header ──────────────────────────────────────────────────── */}
      <section
        className="pt-32 lg:pt-40 pb-16 lg:pb-20"
        style={{ background: 'var(--color-hps-cream)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="w-8 h-px mb-6" style={{ background: 'var(--color-hps-gold-rich)' }} aria-hidden="true" />
            <p
              className="font-mono uppercase mb-4"
              style={{ fontSize: '0.65rem', letterSpacing: '0.22em', color: 'var(--color-hps-gold-rich)' }}
            >
              Editorial Ecosystem · HPS Shalom
            </p>
            <h1
              data-reveal
              className="font-display mb-6"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', color: 'var(--color-hps-ink)', lineHeight: 1.05 }}
            >
              HPS Shalom
            </h1>
            <p
              data-reveal
              data-reveal-delay="80"
              className="font-body leading-relaxed mb-3"
              style={{ fontSize: '1.125rem', color: 'var(--color-hps-smoke)', maxWidth: '40rem' }}
            >
              A living cultural storytelling platform centered around Jewish holidays, traditions, recipes, family experiences, educational discovery, seasonal engagement, and future commerce experiences.
            </p>
            <p
              data-reveal
              data-reveal-delay="160"
              className="font-body leading-relaxed"
              style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)', maxWidth: '40rem', opacity: 0.85 }}
            >
              HPS Shalom is a flagship example of the Editorial Ecosystem category — an immersive content platform built for long-term engagement, meaningful discovery, and cultural connection across generations.
            </p>

            <div data-reveal data-reveal-delay="240" className="flex flex-wrap gap-3 mt-8">
              <a
                href="https://hpsshalom.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body font-medium text-sm rounded-sm transition-all duration-200"
                style={{
                  padding: '0.7rem 1.5rem',
                  background: 'var(--color-hps-gold-rich)',
                  color: '#ffffff',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'rgba(255,255,255,0.75)' }} aria-hidden="true" />
                Visit HPS Shalom ↗
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center font-body font-medium text-sm rounded-sm transition-all duration-200"
                style={{
                  padding: '0.7rem 1.5rem',
                  background: 'transparent',
                  color: 'var(--color-hps-gold-rich)',
                  border: '1px solid rgba(200,180,154,0.55)',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-hps-gold-rich)'; e.currentTarget.style.background = 'rgba(12,20,32,0.02)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(200,180,154,0.55)'; e.currentTarget.style.background = 'transparent' }}
              >
                Free Consultation →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Platform Overview ──────────────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-parchment)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div data-reveal>
              <p className="font-mono uppercase mb-4" style={{ fontSize: '0.6rem', letterSpacing: '0.22em', color: 'var(--color-hps-gold-rich)' }}>
                Platform overview
              </p>
              <h2 className="font-display mb-5" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.08 }}>
                Culture, tradition, and family — built as a living platform.
              </h2>
              <p className="font-body leading-relaxed mb-4" style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)' }}>
                HPS Shalom is not a static reference site or a simple recipe collection. It is a dynamic, seasonally-aware content ecosystem designed to surface the right experiences at the right time — connecting families to Jewish holidays, traditions, stories, and practices in ways that feel alive and personally relevant.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)', opacity: 0.9 }}>
                Built on the same production infrastructure that powers every HPS operational system, HPS Shalom demonstrates a new category for the studio: Editorial Ecosystems — platforms built for cultural depth, family engagement, and generational continuity.
              </p>
            </div>
            <div data-reveal data-reveal-delay="80" className="flex flex-col gap-4">
              {[
                { label: 'Editorial Ecosystem', desc: 'A flagship Happy Path Studios platform in the cultural and experiential content category.', accent: 'var(--color-hps-gold-rich)' },
                { label: 'Seasonally Dynamic', desc: 'Content tied to the Hebrew calendar — the platform feels different at Passover than at Hanukkah, by design.', accent: 'var(--color-hps-teal-dark)' },
                { label: 'Family-First Architecture', desc: 'Every layer designed for family discovery and multi-generational engagement, not individual content consumption.', accent: 'var(--color-hps-green)' },
                { label: 'Commerce-Ready Foundation', desc: 'Platform architecture supports a future Judaica and curated experience commerce layer when the time is right.', accent: 'var(--color-hps-coral-warm)' },
              ].map((item, i) => (
                <div
                  key={item.label}
                  data-reveal
                  data-reveal-delay={String((i + 1) * 60)}
                  className="rounded-sm p-5"
                  style={{ background: 'var(--color-hps-cream)', border: '1px solid rgba(200,180,154,0.40)', borderLeft: `3px solid ${item.accent}` }}
                >
                  <p className="font-display mb-1.5" style={{ fontSize: '1rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}>{item.label}</p>
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-hps-smoke)' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Experience Layers ──────────────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-12">
            <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-gold-rich)' }}>
              Six experience layers
            </p>
            <h2 className="font-display mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
              What HPS Shalom contains.
            </h2>
            <p className="font-body max-w-xl leading-relaxed" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}>
              Each layer is designed to work independently and together — a visitor can enter through food, through a holiday, through a story, or through an activity, and find the rest of the ecosystem naturally.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experienceLayers.map((layer, i) => (
              <div
                key={layer.label}
                data-reveal
                data-reveal-delay={String((i % 3) * 60)}
                className="p-7 rounded-sm"
                style={{ background: 'var(--color-hps-parchment)', border: '1px solid rgba(200,180,154,0.40)', borderTop: `3px solid ${layer.accent}` }}
              >
                <p className="font-mono uppercase mb-3" style={{ fontSize: '0.58rem', letterSpacing: '0.18em', color: layer.accent }}>{layer.tag}</p>
                <h3 className="font-display mb-3" style={{ fontSize: '1.25rem', color: 'var(--color-hps-ink)', lineHeight: 1.15 }}>{layer.label}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-hps-smoke)' }}>{layer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Future Vision ──────────────────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-parchment)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-12">
            <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-gold-rich)' }}>
              Long-term vision
            </p>
            <h2 className="font-display mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
              Future Family OS and commerce opportunities.
            </h2>
            <p className="font-body max-w-xl leading-relaxed" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}>
              HPS Shalom is designed with a long arc in mind. The current platform establishes the editorial and experiential foundation. Future layers deepen the engagement and expand the utility.
            </p>
          </div>
          <div className="flex flex-col gap-0">
            {visionLayers.map((step, i, arr) => (
              <div
                key={step.n}
                data-reveal
                data-reveal-delay={String((i % 2) * 80)}
                className="flex gap-6 py-7"
                style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(200,180,154,0.40)' : 'none' }}
              >
                <span className="font-mono shrink-0 mt-0.5" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-gold-rich)', opacity: 0.75, minWidth: '2rem' }}>
                  {step.n}
                </span>
                <div>
                  <p className="font-body font-medium mb-1.5" style={{ fontSize: '1rem', color: 'var(--color-hps-ink)' }}>{step.label}</p>
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-hps-smoke)' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technology & Experience Design ─────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-10">
            <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-gold-rich)' }}>
              Technology & experience design
            </p>
            <h2 className="font-display mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
              Built on the HPS operational stack.
            </h2>
            <p className="font-body max-w-xl leading-relaxed" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}>
              HPS Shalom is not a standalone project. It is a platform property of Happy Path Studios, built on the same infrastructure that powers every HPS system — connected, managed, and designed for long-term continuity.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {techStack.map((item, i) => (
              <div
                key={item.label}
                data-reveal
                data-reveal-delay={String((i % 2) * 80)}
                className="p-7 rounded-sm"
                style={{ background: 'var(--color-hps-parchment)', border: '1px solid rgba(200,180,154,0.40)', borderLeft: `3px solid ${item.accent}` }}
              >
                <h3 className="font-display mb-3" style={{ fontSize: '1.125rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}>{item.label}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-hps-smoke)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Editorial Ecosystem Positioning ───────────────────────── */}
      <section className="py-16 lg:py-20 border-t" style={{ background: 'var(--color-hps-parchment)', borderColor: 'rgba(200,180,154,0.40)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div data-reveal>
              <p className="font-mono uppercase mb-4" style={{ fontSize: '0.6rem', letterSpacing: '0.22em', color: 'var(--color-hps-gold-rich)' }}>
                Editorial ecosystem category
              </p>
              <h2 className="font-display mb-5" style={{ fontSize: 'clamp(1.375rem, 2.5vw, 1.875rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
                HPS Shalom as a flagship editorial platform.
              </h2>
              <p className="font-body leading-relaxed mb-4" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}>
                Happy Path Studios builds across six operational categories: Operational Ecosystems, Business Ecosystems, Editorial Ecosystems, Accessibility Systems, AI Systems, and Fabrication Experiences. HPS Shalom is the flagship example of the Editorial Ecosystem category.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)', opacity: 0.9 }}>
                Editorial Ecosystems are platforms designed for sustained engagement through content, culture, and community — not transactional or utility-focused, but built for meaning and long-term discovery.
              </p>
            </div>
            <div data-reveal data-reveal-delay="80" className="flex flex-col gap-3">
              {[
                { label: 'Operational Ecosystems', note: 'Business automation, workflow systems, and connected operational infrastructure' },
                { label: 'Business Ecosystems', note: 'SaaS platforms for marketing, analytics, QR, and business operations' },
                { label: 'Editorial Ecosystems', note: 'Cultural, educational, and experiential content platforms — HPS Shalom is here', highlight: true },
                { label: 'Accessibility Systems', note: 'WCAG audit, Section 508 compliance, and ongoing remediation infrastructure' },
                { label: 'AI Systems', note: 'Claude and n8n-based workflow automation and operational intelligence' },
                { label: 'Fabrication Experiences', note: 'UV printing, laser engraving, apparel, and QR-connected physical surfaces' },
              ].map(item => (
                <div
                  key={item.label}
                  className="flex gap-3 p-4 rounded-sm"
                  style={{
                    background: item.highlight ? 'rgba(184,136,42,0.06)' : 'var(--color-hps-cream)',
                    border: item.highlight ? '1px solid rgba(184,136,42,0.30)' : '1px solid rgba(200,180,154,0.40)',
                    borderLeft: item.highlight ? '3px solid var(--color-hps-gold-rich)' : '3px solid rgba(200,180,154,0.40)',
                  }}
                >
                  <div>
                    <p className="font-body font-medium mb-0.5" style={{ fontSize: '0.875rem', color: 'var(--color-hps-ink)' }}>{item.label}</p>
                    <p className="font-mono" style={{ fontSize: '0.58rem', letterSpacing: '0.08em', color: 'var(--color-hps-smoke)', lineHeight: 1.5 }}>{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Live Platform CTA ──────────────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div
            data-reveal
            className="rounded-sm p-10 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
            style={{ background: 'var(--color-hps-parchment)', border: '1px solid rgba(200,180,154,0.40)', borderLeft: '4px solid var(--color-hps-gold-rich)' }}
          >
            <div className="max-w-xl">
              <p className="font-mono uppercase mb-3" style={{ fontSize: '0.58rem', letterSpacing: '0.2em', color: 'var(--color-hps-gold-rich)' }}>
                Platform live
              </p>
              <h2 className="font-display mb-3" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
                HPS Shalom is live.
              </h2>
              <p className="font-body leading-relaxed" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}>
                Visit hpsshalom.com to explore the current platform — holidays, stories, recipes, family activities, and cultural discovery in one living editorial environment.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href="https://hpsshalom.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body font-medium text-sm rounded-sm transition-all duration-200"
                style={{ padding: '0.75rem 1.75rem', background: 'var(--color-hps-gold-rich)', color: '#ffffff', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                Visit HPS Shalom ↗
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center font-body font-medium text-sm rounded-sm transition-all duration-200"
                style={{ padding: '0.75rem 1.75rem', background: 'transparent', color: 'var(--color-hps-gold-rich)', border: '1px solid rgba(184,136,42,0.35)', textDecoration: 'none' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-hps-gold-rich)'; e.currentTarget.style.background = 'rgba(12,20,32,0.02)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(184,136,42,0.35)'; e.currentTarget.style.background = 'transparent' }}
              >
                Editorial Platform Inquiry →
              </Link>
            </div>
          </div>
        </div>
      </section>

      </div>{/* end atmosphere wrapper */}

      <CTABand
        headline="Build something that lasts beyond the project."
        subhead="HPS Shalom is one example of what we design for long-term engagement. Let's talk about yours."
        buttonText="Free Consultation"
        showPhone
      />
    </>
  )
}
