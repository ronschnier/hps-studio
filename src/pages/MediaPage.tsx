import { Link } from 'react-router-dom'
import CTABand from '../components/sections/CTABand'
import BackgroundAtmosphere from '../components/decorative/BackgroundAtmosphere'
import { usePageMeta } from '../hooks/usePageMeta'

const fbmFeatures = [
  {
    name: 'Full Streaming Platform',
    desc: 'Browse, stream, and discover music across a growing catalog of original beats, instrumentals, and full tracks — searchable by BPM, key, mood, and genre.',
  },
  {
    name: 'Free Membership',
    desc: 'Free accounts unlock streaming, download access with clear production licenses, and platform discovery tools. No credit card, no trial period, no friction.',
  },
  {
    name: 'Paid Membership',
    desc: 'Paid tiers unlock commercial licensing, exclusive catalog access, higher-quality stems and session files, and early access to new releases and artist drops.',
  },
  {
    name: 'Artist Upload & Publishing',
    desc: 'Artists submit and publish music directly to the platform. Beats, instrumentals, albums, and EPs — with metadata tagging, catalog management, and streaming distribution.',
  },
  {
    name: 'Artist Promotion Tools',
    desc: 'Artist profiles, promotion campaigns, featured placement, and visibility tools that connect emerging artists with creators actively searching for audio.',
  },
  {
    name: 'Creator Discovery',
    desc: 'Curated discovery surfaces match creators and listeners with the artists and sounds relevant to their production context, workflow, and creative direction.',
  },
  {
    name: 'Music Catalog Access',
    desc: 'Hip-hop, lo-fi, cinematic, trap, R&B, electronic, and ambient — a multi-genre catalog built for real production use, not sample packs assembled from library filler.',
  },
  {
    name: 'Licensing Infrastructure',
    desc: 'Every track ships with documented license terms. Free downloads, extended commercial rights, and sync licenses with clear terms at each tier. No rights conflicts, no retroactive claims.',
  },
  {
    name: 'Subscription Ecosystem',
    desc: 'Membership tiers, artist payout infrastructure, subscriber management, and a growing platform economy built to support independent artists and creator revenue.',
  },
]

const whoItServes = [
  {
    role: 'Listeners',
    desc: 'Discover music, beats, artists, and playlists. Build a library of production-ready audio. Support independent artists directly through membership.',
    accent: 'var(--color-hps-gold)',
  },
  {
    role: 'Artists',
    desc: 'Upload music, publish catalogs, and grow reach inside a platform built for creator discovery. Monetize through streaming, licensing, and direct fan memberships.',
    accent: 'var(--color-hps-coral-warm)',
  },
  {
    role: 'Creators',
    desc: 'Find cleared audio for cinematic video production, branded content creation, podcasting, and social media — with license documentation that holds up under Content ID and broadcast review.',
    accent: 'var(--color-hps-teal)',
  },
  {
    role: 'Brands & Studios',
    desc: 'Use music and media systems as part of cinematic campaign launches, immersive brand activations, and editorial production ecosystems. Commercial tier available for production houses and agencies.',
    accent: 'var(--color-hps-teal-dark)',
  },
]

const platformFlow = [
  { n: '01', step: 'Artist Upload',       desc: 'Artists submit tracks directly to the platform with full metadata — BPM, key, genre, mood, instrumentation, and license tier. Files processed, tagged, and staged for review.' },
  { n: '02', step: 'Catalog Publishing',  desc: 'Approved tracks enter the live catalog with full discovery indexing. Artist profiles, album pages, and genre placements configured at publish time.' },
  { n: '03', step: 'Listener Discovery',  desc: 'Listeners browse via curated surfaces, genre filters, BPM ranges, and mood categories. Search and recommendation surfaces connect creators with audio that fits their production context.' },
  { n: '04', step: 'Membership Access',   desc: 'Free members download with standard production licenses. Paid members unlock commercial rights, stems, high-resolution exports, and exclusive catalog access.' },
  { n: '05', step: 'Promotion Tools',     desc: 'Artists activate promotion campaigns, featured placement, and visibility boosts through the artist dashboard. Metrics visible per track — streams, downloads, license activations.' },
  { n: '06', step: 'Audience Growth',     desc: 'Artists build follower lists, notify subscribers of new drops, and grow a direct fan relationship — inside the platform and through integration with HPS Push and Creator Hub.' },
]

const mediaStudioLinks = [
  { label: 'HPS Socialize',    href: '/platforms/hps-socialize',   rel: 'Distribute produced content across every social channel' },
  { label: 'HPS Creator Hub',  href: '/platforms/hps-creator-hub', rel: 'Unified creator operations and audience management' },
  { label: 'HPS BioLinks',     href: '/platforms/hps-biolinks',    rel: 'Creator link hub with analytics across every destination' },
  { label: 'HPS Push',         href: '/platforms/hps-push',        rel: 'Direct notification channel to your audience' },
  { label: 'Creator Hosting',  href: '/hosting/creator-hosting',   rel: 'Portfolio and media hosting for creator infrastructure' },
  { label: 'HPS AI Systems',   href: '/platforms/hps-ai-systems',  rel: 'AI-assisted content, caption, and workflow automation' },
]

const ecosystemCards = [
  { label: 'HPS Creator Hub',    href: '/platforms/hps-creator-hub',  rel: 'Creator operations infrastructure', accent: 'var(--color-hps-coral-warm)' },
  { label: 'HPS Media Studio',   href: '/platforms/hps-media-studio', rel: 'Cinematic content production and asset workflow', accent: 'var(--color-hps-teal)' },
  { label: 'HPS Socialize',      href: '/platforms/hps-socialize',    rel: 'Multi-channel social scheduling', accent: 'var(--color-hps-teal-dark)' },
  { label: 'HPS BioLinks',       href: '/platforms/hps-biolinks',     rel: 'Branded link hub and analytics', accent: 'var(--color-hps-green)' },
  { label: 'HPS Push',           href: '/platforms/hps-push',         rel: 'Web push subscriber channel', accent: 'var(--color-hps-gold-rich)' },
  { label: 'Creator Hosting',    href: '/hosting/creator-hosting',    rel: 'Portfolio and media hosting', accent: 'var(--color-hps-coral-warm)' },
  { label: 'HPS AI Systems',     href: '/platforms/hps-ai-systems',   rel: 'AI workflow and automation layer', accent: 'var(--color-hps-teal)' },
  { label: 'HPS Transfer',       href: '/platforms/hps-transfer',     rel: 'Branded large file delivery', accent: 'var(--color-hps-gold)' },
]

export default function MediaPage() {
  usePageMeta({
    title: 'Media & Creator Tools',
    description: 'FreeBeatsMUSIC, branded file delivery, production workflow tools, and creator content infrastructure from Happy Path Studios.',
  })
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
              style={{ background: 'var(--color-hps-gold)' }}
              aria-hidden="true"
            />
            <p
              className="font-mono uppercase mb-4"
              style={{ fontSize: '0.65rem', letterSpacing: '0.22em', color: 'var(--color-hps-gold-rich)' }}
            >
              HPS Media Ecosystem
            </p>
            <h1
              data-reveal
              className="font-display mb-6"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', color: 'var(--color-hps-ink)', lineHeight: 1.03 }}
            >
              Music, cinematic production, creator systems, and media infrastructure.
            </h1>
            <p
              data-reveal
              data-reveal-delay="80"
              className="font-body leading-relaxed mb-3"
              style={{ fontSize: '1.125rem', color: 'var(--color-hps-smoke)', maxWidth: '40rem' }}
            >
              FreeBeatsMUSIC is a full streaming and creator platform with music discovery, artist uploads, paid memberships, promotion tools, and a growing catalog of audio experiences.
            </p>
            <p
              data-reveal
              data-reveal-delay="160"
              className="font-body leading-relaxed"
              style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)', maxWidth: '40rem', opacity: 0.85 }}
            >
              Backed by HPS Media Studio cinematic production infrastructure, Creator Hub, and the full HPS operational ecosystem. A platform property, not a side project.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 1: FreeBeatsMUSIC Platform ─────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-parchment)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div data-reveal className="mb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <p
                className="font-mono uppercase mb-3"
                style={{ fontSize: '0.6rem', letterSpacing: '0.22em', color: 'var(--color-hps-gold-rich)' }}
              >
                HPS Platform Property
              </p>
              <h2
                className="font-display mb-4"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: 'var(--color-hps-ink)', lineHeight: 1.05 }}
              >
                FreeBeatsMUSIC
              </h2>
              <p
                className="font-body max-w-2xl leading-relaxed"
                style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)' }}
              >
                A full music streaming and creator platform — built for listeners who want great audio, artists who want real reach, and creators who need licensed music with clear terms. Free and paid tiers. Artist publishing. Promotion infrastructure. A growing catalog spanning multiple genres and production styles.
              </p>
            </div>
            <a
              href="https://freebeatsmusic.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center justify-center font-body font-medium rounded-sm transition-all duration-200"
              style={{
                padding: '0.75rem 1.75rem',
                background: 'var(--color-hps-gold)',
                color: 'var(--color-hps-ink)',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-hps-gold-rich)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-hps-gold)')}
            >
              Explore FreeBeatsMUSIC →
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {fbmFeatures.map((feat, i) => (
              <div
                key={feat.name}
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
                  style={{ background: 'var(--color-hps-gold)' }}
                  aria-hidden="true"
                />
                <h3
                  className="font-display mb-2"
                  style={{ fontSize: '1.0625rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}
                >
                  {feat.name}
                </h3>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: 'var(--color-hps-smoke)' }}
                >
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2: Who It Serves ────────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-10">
            <p
              className="font-mono uppercase mb-3"
              style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-gold-rich)' }}
            >
              Built for every part of the creative chain
            </p>
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}
            >
              Who FreeBeatsMUSIC serves
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whoItServes.map((card, i) => (
              <div
                key={card.role}
                data-reveal
                data-reveal-delay={String((i % 2) * 80)}
                className="rounded-sm p-8"
                style={{
                  background: 'var(--color-hps-parchment)',
                  border: '1px solid rgba(200,180,154,0.40)',
                  borderTop: `3px solid ${card.accent}`,
                }}
              >
                <p
                  className="font-mono uppercase mb-3"
                  style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: card.accent }}
                >
                  {card.role}
                </p>
                <p
                  className="font-body leading-relaxed"
                  style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Platform Workflow ────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-parchment)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-12">
            <p
              className="font-mono uppercase mb-3"
              style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-gold-rich)' }}
            >
              How the platform works
            </p>
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}
            >
              Platform workflow
            </h2>
          </div>

          <div className="flex flex-col gap-0">
            {platformFlow.map((step, i, arr) => (
              <div
                key={step.n}
                data-reveal
                data-reveal-delay={String((i % 3) * 60)}
                className="grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-4 lg:gap-12 py-8"
                style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(200,180,154,0.40)' : 'none' }}
              >
                <div className="flex items-start gap-4 lg:flex-col lg:gap-2">
                  <span
                    className="font-mono shrink-0"
                    style={{ fontSize: '1.5rem', color: 'var(--color-hps-gold)', lineHeight: 1, opacity: 0.35 }}
                    aria-hidden="true"
                  >
                    {step.n}
                  </span>
                  <p
                    className="font-display"
                    style={{ fontSize: '1rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}
                  >
                    {step.step}
                  </p>
                </div>
                <p
                  className="font-body leading-relaxed"
                  style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: HPS Media Studio ─────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            <div data-reveal>
              <p
                className="font-mono uppercase mb-4"
                style={{ fontSize: '0.6rem', letterSpacing: '0.22em', color: 'var(--color-hps-teal)' }}
              >
                HPS Media Studio
              </p>
              <h2
                className="font-display mb-5"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.08 }}
              >
                The production layer behind the platform
              </h2>
              <p
                className="font-body leading-relaxed mb-4"
                style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)' }}
              >
                HPS Media Studio is the operational infrastructure that makes sustained cinematic content production possible at scale. Production calendars, campaign planning, organized asset libraries, brand voice documentation, approval workflows, and distribution checklists. Volume output stays on-brand and on-schedule without a full in-house production team.
              </p>
              <p
                className="font-body leading-relaxed mb-4"
                style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)' }}
              >
                For creators and media-forward businesses, Media Studio connects content production directly to platform promotion — planning a drop, producing the assets, scheduling the social, and activating the push campaign all from one coordinated environment.
              </p>
              <p
                className="font-body leading-relaxed"
                style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)' }}
              >
                It also supports audio/media publishing workflows — connecting directly to FreeBeatsMUSIC for asset management, to HPS Socialize for distribution, and to HPS AI Systems for content production support and automation.
              </p>
              <div className="mt-8">
                <Link
                  to="/platforms/hps-media-studio"
                  className="font-mono uppercase transition-colors duration-200"
                  style={{ fontSize: '0.68rem', letterSpacing: '0.16em', color: 'var(--color-hps-teal)', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-hps-ink)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-hps-teal)')}
                >
                  View HPS Media Studio →
                </Link>
              </div>
            </div>

            <div data-reveal data-reveal-delay="80">
              <p
                className="font-mono uppercase mb-5"
                style={{ fontSize: '0.58rem', letterSpacing: '0.18em', color: 'var(--color-hps-teal)' }}
              >
                Connects to
              </p>
              <div className="flex flex-col gap-3">
                {mediaStudioLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="group flex items-start gap-4 p-4 rounded-sm transition-all duration-200"
                    style={{
                      background: 'var(--color-hps-parchment)',
                      border: '1px solid rgba(200,180,154,0.40)',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'var(--color-hps-teal)'
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(12,20,32,0.07)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(200,180,154,0.40)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <div
                      className="w-1 shrink-0 self-stretch rounded-full mt-0.5"
                      style={{ background: 'var(--color-hps-teal)' }}
                      aria-hidden="true"
                    />
                    <div>
                      <p
                        className="font-body font-medium group-hover:underline"
                        style={{ fontSize: '0.875rem', color: 'var(--color-hps-ink)' }}
                      >
                        {link.label}
                      </p>
                      <p
                        className="font-body"
                        style={{ fontSize: '0.8125rem', color: 'var(--color-hps-smoke)' }}
                      >
                        {link.rel}
                      </p>
                    </div>
                    <span
                      className="ml-auto self-center font-mono transition-transform duration-200 group-hover:translate-x-1"
                      style={{ fontSize: '0.7rem', color: 'var(--color-hps-teal)' }}
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

      {/* ── Section 5: Connected Ecosystem ──────────────────────────── */}
      <section className="py-16 lg:py-20" style={{ background: 'var(--color-hps-parchment)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-10">
            <p
              className="font-mono uppercase mb-3"
              style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-gold-rich)' }}
            >
              HPS Ecosystem
            </p>
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}
            >
              Connected platforms & services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ecosystemCards.map((card, i) => (
              <Link
                key={card.href}
                to={card.href}
                data-reveal
                data-reveal-delay={String((i % 4) * 50)}
                className="group block rounded-sm p-5 transition-all duration-200"
                style={{
                  background: 'var(--color-hps-cream)',
                  border: '1px solid rgba(200,180,154,0.40)',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = card.accent
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(12,20,32,0.07)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(200,180,154,0.40)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div
                  className="w-5 h-px mb-3"
                  style={{ background: card.accent }}
                  aria-hidden="true"
                />
                <p
                  className="font-display mb-1 group-hover:underline"
                  style={{ fontSize: '0.9375rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}
                >
                  {card.label}
                </p>
                <p
                  className="font-body text-sm"
                  style={{ color: 'var(--color-hps-smoke)' }}
                >
                  {card.rel}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: Media + Operations ───────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            <div data-reveal>
              <p
                className="font-mono uppercase mb-4"
                style={{ fontSize: '0.6rem', letterSpacing: '0.22em', color: 'var(--color-hps-gold-rich)' }}
              >
                Media inside the HPS operational layer
              </p>
              <h2
                className="font-display mb-5"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.08 }}
              >
                Not isolated. Operational.
              </h2>
              <p
                className="font-body leading-relaxed mb-4"
                style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)' }}
              >
                The HPS media ecosystem is infrastructure, not a content hub. FreeBeatsMUSIC and HPS Media Studio don't operate in isolation — they connect to hosting, creator identity, push notification channels, AI-assisted workflows, file delivery, and social publishing to form one operating environment.
              </p>
              <p
                className="font-body leading-relaxed"
                style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)' }}
              >
                A creator running on HPS has a portfolio hosted on Creator Hosting, a bio link hub on HPS BioLinks, a push subscriber list built through HPS Push, audio sourced from FreeBeatsMUSIC, production planned through HPS Media Studio, distribution scheduled through HPS Socialize, and analytics visible across every platform through HPS EngageTracker. The media layer is one component — not the whole picture.
              </p>
            </div>

            <div data-reveal data-reveal-delay="80">
              <p
                className="font-mono uppercase mb-5"
                style={{ fontSize: '0.58rem', letterSpacing: '0.18em', color: 'var(--color-hps-gold-rich)' }}
              >
                Media infrastructure connects to
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { label: 'Creator Hosting',    href: '/hosting/creator-hosting',        note: 'Portfolio and media infrastructure' },
                  { label: 'HPS BioLinks',       href: '/platforms/hps-biolinks',         note: 'Creator identity and link hub' },
                  { label: 'HPS Push',           href: '/platforms/hps-push',             note: 'Direct audience notification' },
                  { label: 'HPS Socialize',      href: '/platforms/hps-socialize',        note: 'Social publishing and scheduling' },
                  { label: 'HPS Transfer',       href: '/platforms/hps-transfer',         note: 'Large file delivery with audit trail' },
                  { label: 'HPS AI Systems',     href: '/platforms/hps-ai-systems',       note: 'AI-assisted content workflows' },
                  { label: 'HPS EngageTracker',  href: '/platforms/hps-engagetracker',    note: 'Cross-platform analytics' },
                  { label: 'Creator Pathway',    href: '/ecosystem/creators-media',       note: 'Full industry ecosystem view' },
                ].map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="group flex items-center gap-3 p-3 rounded-sm transition-all duration-200"
                    style={{
                      background: 'var(--color-hps-parchment)',
                      border: '1px solid rgba(200,180,154,0.35)',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'var(--color-hps-gold-rich)'
                      e.currentTarget.style.background = 'var(--color-hps-cream)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(200,180,154,0.35)'
                      e.currentTarget.style.background = 'var(--color-hps-parchment)'
                    }}
                  >
                    <div
                      className="w-1 h-1 shrink-0 rounded-full"
                      style={{ background: 'var(--color-hps-gold-rich)' }}
                      aria-hidden="true"
                    />
                    <div>
                      <p
                        className="font-body font-medium group-hover:underline"
                        style={{ fontSize: '0.8125rem', color: 'var(--color-hps-ink)' }}
                      >
                        {item.label}
                      </p>
                      <p
                        className="font-body"
                        style={{ fontSize: '0.75rem', color: 'var(--color-hps-smoke)' }}
                      >
                        {item.note}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Creator Infrastructure Arc ──────────────────────────────── */}
      <section className="py-16 lg:py-24 border-t" style={{ background: 'var(--color-hps-parchment)', borderColor: 'rgba(200,180,154,0.40)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-12">
            <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-gold-rich)' }}>
              Operational growth arc
            </p>
            <h2 className="font-display mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
              Creator infrastructure that compounds.
            </h2>
            <p className="font-body max-w-2xl leading-relaxed" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}>
              Most creators start with one tool and grow from there. The HPS media ecosystem is designed so each layer connects naturally to the next — from discovering audio to running a full creator operation with a direct audience channel and automated distribution.
            </p>
          </div>
          <div className="flex flex-col gap-0">
            {[
              { n: '01', label: 'Audio Foundation', desc: 'Start with FreeBeatsMUSIC — browse a growing catalog, download cleared audio with production licensing, and source original beats for video, podcast, and social content. No account, no barrier.', accent: 'var(--color-hps-gold)' },
              { n: '02', label: 'Production Infrastructure', desc: 'Add HPS Media Studio to build a production calendar, organize assets, and establish a publishing cadence. Content stops being reactive and starts operating on a documented rhythm — with brand voice guidelines and approval workflows built in.', accent: 'var(--color-hps-coral-warm)' },
              { n: '03', label: 'Audience & Distribution', desc: 'Activate HPS Push to build a direct subscriber list that no algorithm can disrupt, and HPS Socialize to schedule multi-channel publishing from one calendar. The audience grows on two independent tracks simultaneously.', accent: 'var(--color-hps-teal)' },
              { n: '04', label: 'Identity & Analytics', desc: 'HPS BioLinks becomes the single destination link across every social bio — one URL that routes to everything, with click analytics showing exactly which platforms and content types drive real traffic. Creator Hub aggregates it all into one operational view.', accent: 'var(--color-hps-teal-dark)' },
            ].map((phase, i, arr) => (
              <div
                key={phase.n}
                data-reveal
                data-reveal-delay={String((i % 3) * 60)}
                className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-4 lg:gap-12 py-8"
                style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(200,180,154,0.40)' : 'none' }}
              >
                <div className="flex items-start gap-4 lg:flex-col lg:gap-2">
                  <span className="font-mono shrink-0" style={{ fontSize: '1.25rem', color: phase.accent, lineHeight: 1, opacity: 0.40 }} aria-hidden="true">
                    {phase.n}
                  </span>
                  <p className="font-display" style={{ fontSize: '1rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}>
                    {phase.label}
                  </p>
                </div>
                <p className="font-body leading-relaxed" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}>
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
          <div data-reveal className="mt-10 pt-8 border-t flex flex-col sm:flex-row gap-4" style={{ borderColor: 'rgba(200,180,154,0.40)' }}>
            <Link
              to="/ecosystem/creators-media"
              className="inline-block font-mono uppercase"
              style={{ fontSize: '0.65rem', letterSpacing: '0.18em', color: 'var(--color-hps-cream)', background: 'var(--color-hps-gold-rich)', padding: '0.75rem 1.5rem', borderRadius: '2px', textDecoration: 'none' }}
            >
              Creators & Media Pathway →
            </Link>
            <Link
              to="/contact"
              className="inline-block font-mono uppercase"
              style={{ fontSize: '0.65rem', letterSpacing: '0.18em', color: 'var(--color-hps-gold-rich)', border: '1px solid var(--color-hps-gold-rich)', padding: '0.75rem 1.5rem', borderRadius: '2px', textDecoration: 'none' }}
            >
              Start a Free Consultation →
            </Link>
          </div>
        </div>
      </section>

      </div>{/* end atmosphere wrapper */}

      {/* ── Live Creator Platforms ──────────────────────────────────── */}
      <section className="py-14 lg:py-20" style={{ background: 'var(--color-hps-cream)', borderTop: '1px solid rgba(200,180,154,0.35)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="font-mono uppercase mb-2" style={{ fontSize: '0.55rem', letterSpacing: '0.2em', color: 'var(--color-hps-green)' }}>
                Live Now
              </p>
              <h2 className="font-display" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
                Creator platforms operational today.
              </h2>
            </div>
            <a
              href="/platforms"
              className="font-mono uppercase shrink-0"
              style={{ fontSize: '0.6rem', letterSpacing: '0.18em', color: 'var(--color-hps-gold-rich)', textDecoration: 'none' }}
            >
              All Platforms →
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {[
              { name: 'FreeBeatsMUSIC',  tagline: 'Licensed production audio — free and paid tiers.', href: 'https://freebeatsmusic.com',  label: 'Browse Beats ↗',      accent: 'var(--color-hps-gold)' },
              { name: 'HPS Push',        tagline: 'Browser-based web push — no app required.',        href: 'https://hpspush.com',          label: 'Launch Push ↗',       accent: 'var(--color-hps-teal)' },
              { name: 'HPS Socialize',   tagline: 'Multi-channel social scheduling calendar.',         href: 'https://hpssocialize.com',     label: 'Launch Socialize ↗',  accent: 'var(--color-hps-coral-warm)' },
              { name: 'HPS BioLinks',    tagline: 'Branded link hub — one URL for every bio.',        href: 'https://hpsbiolinks.com',      label: 'Launch BioLinks ↗',   accent: 'var(--color-hps-teal-dark)' },
            ].map((plat, i) => (
              <a
                key={plat.name}
                href={plat.href}
                target="_blank"
                rel="noopener noreferrer"
                data-reveal
                data-reveal-delay={String(i * 60)}
                className="group flex flex-col gap-3 p-5 rounded-sm no-underline"
                style={{
                  background: 'var(--color-hps-parchment)',
                  border: '1px solid rgba(200,180,154,0.35)',
                  transition: 'border-color 200ms ease, box-shadow 200ms ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = plat.accent
                  ;(e.currentTarget as HTMLElement).style.boxShadow = `0 4px 20px rgba(0,0,0,0.07)`
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(200,180,154,0.35)'
                  ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--color-hps-green)' }} aria-hidden="true" />
                  <span className="font-mono uppercase" style={{ fontSize: '0.45rem', letterSpacing: '0.16em', color: 'var(--color-hps-green)' }}>Live</span>
                </div>
                <div>
                  <p className="font-display mb-1" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}>{plat.name}</p>
                  <p className="font-body" style={{ fontSize: '0.75rem', color: 'var(--color-hps-smoke)', lineHeight: 1.5 }}>{plat.tagline}</p>
                </div>
                <p className="font-mono uppercase mt-auto" style={{ fontSize: '0.55rem', letterSpacing: '0.16em', color: plat.accent }}>
                  {plat.label}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        headline="Build a connected media ecosystem."
        subhead="From streaming platforms to creator workflows, HPS connects media, hosting, promotion, and operational systems into one creative infrastructure layer."
        buttonText="Explore the HPS Ecosystem"
        buttonHref="/ecosystems"
        showPhone
      />
    </>
  )
}
