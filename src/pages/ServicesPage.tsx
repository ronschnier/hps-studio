import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/sections/PageHeader'
import CTABand from '../components/sections/CTABand'
import BackgroundAtmosphere from '../components/decorative/BackgroundAtmosphere'
import { usePageMeta } from '../hooks/usePageMeta'

// ── Data ──────────────────────────────────────────────────────────────────────

interface ServiceItem {
  label: string
  href?: string
}

const ecosystems = [
  {
    id: 'digital',
    eyebrow: 'Digital Systems',
    title: 'Software & Infrastructure',
    accent: '#0d9488',
    accentVar: 'var(--color-hps-teal-dark)',
    href: '/platforms',
    services: [
      { label: 'Web & Application Development',  href: '/services/web-development' },
      { label: 'UX/UI Systems & Research',        href: '/services/ux-ui-design' },
      { label: 'Accessibility & Section 508',     href: '/platforms/hps-accessibility' },
      { label: 'Hosting & Infrastructure',        href: '/hosting' },
      { label: 'AI Workflow Systems',             href: '/services/ai-integration' },
      { label: 'App & Dashboard Development',     href: '/services/app-development' },
    ] as ServiceItem[],
    tone: 'Operational, scalable, connected.',
  },
  {
    id: 'brand',
    eyebrow: 'Brand & Media',
    title: 'Identity & Communications',
    accent: '#b8882a',
    accentVar: 'var(--color-hps-gold-rich)',
    href: '/services',
    services: [
      { label: 'Identity & Visual Systems',       href: '/services/brand-identity' },
      { label: 'Marketing & Print Design',        href: '/services/print-design' },
      { label: 'Photography & Videography',       href: '/services/photography-videography' },
      { label: 'Social & Content Strategy',       href: '/services/content-strategy' },
      { label: 'Social Media Management',         href: '/services/social-media-management' },
    ] as ServiceItem[],
    tone: 'Unified visual storytelling and brand ecosystems.',
  },
  {
    id: 'fabrication',
    eyebrow: 'Fabrication & Physical',
    title: 'Manufacturing & Production',
    accent: '#f87239',
    accentVar: 'var(--color-hps-coral-warm)',
    href: '/fabrication',
    services: [
      { label: 'UV Printing & Dimensional',        href: '/services/uv-printing' },
      { label: 'Direct-to-Garment (DTG)',          href: '/services/dtg-printing' },
      { label: 'Sublimation Printing',             href: '/services/sublimation-printing' },
      { label: 'Industrial Embroidery',            href: '/services/embroidery-systems' },
      { label: 'CO₂ · Fiber · UV · Diode Laser',  href: '/fabrication' },
      { label: 'Sponsor Signage Systems',          href: '/services/sponsor-signage' },
    ] as ServiceItem[],
    tone: 'Physical production meets digital infrastructure.',
  },
  {
    id: 'connected',
    eyebrow: 'Connected Experiences',
    title: 'Ecosystems & Connected Surfaces',
    accent: '#478c5c',
    accentVar: 'var(--color-hps-green)',
    href: '/ecosystems',
    services: [
      { label: 'Golf Signage & Digital Systems',  href: '/platforms/hps-golf' },
      { label: 'Hospitality Digital Setup',       href: '/services/hospitality-digital' },
      { label: 'Interactive QR Menus',            href: '/platforms/hps-qr-menu' },
      { label: 'QR Systems Design & Production',  href: '/services/qr-systems' },
      { label: 'AI Systems Integration',          href: '/ai-systems' },
    ] as ServiceItem[],
    tone: 'Interactive environments and connected customer experiences.',
  },
]

const workflowSteps = [
  {
    n: '01',
    label: 'Design',
    desc: 'Identity, UX, strategy, and system architecture — before a single line of code or cut of material.',
    accent: '#0d9488',
  },
  {
    n: '02',
    label: 'Build',
    desc: 'Code, fabrication, content, and production — all in-house, no translation loss between teams.',
    accent: '#b8882a',
  },
  {
    n: '03',
    label: 'Connect',
    desc: 'QR systems, hosting, platforms, and physical surfaces — linked into one operational system.',
    accent: '#f87239',
  },
  {
    n: '04',
    label: 'Deploy',
    desc: 'Live systems delivered with documentation, team training, and ongoing support baked in.',
    accent: '#478c5c',
  },
]

// ── Ecosystem Connection Diagram ──────────────────────────────────────────────

const NODES = [
  { label: 'Software',    sub: 'Web & App',       x: 90,  color: '#0d9488' },
  { label: 'Brand',       sub: 'Identity & Media', x: 282, color: '#b8882a' },
  { label: 'Fabrication', sub: 'Production',       x: 476, color: '#f87239' },
  { label: 'Hosting',     sub: 'Infrastructure',   x: 670, color: '#0d9488' },
  { label: 'QR + Surfaces', sub: 'Connected',      x: 862, color: '#478c5c' },
]

// Bezier paths — alternate above/below the node line (y=50) for organic stitching feel
const PATHS = [
  { d: 'M 90,50 C 158,24 214,24 282,50',   delay: 0 },
  { d: 'M 282,50 C 350,76 408,76 476,50',  delay: 180 },
  { d: 'M 476,50 C 544,24 602,24 670,50',  delay: 360 },
  { d: 'M 670,50 C 738,76 794,76 862,50',  delay: 540 },
]

function EcosystemDiagram() {
  const ref = useRef<SVGSVGElement>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setRevealed(true) },
      { threshold: 0.35 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div className="w-full overflow-x-auto">
      <div style={{ minWidth: '600px' }}>
        <svg
          ref={ref}
          viewBox="0 0 952 130"
          preserveAspectRatio="xMidYMid meet"
          width="100%"
          aria-label="HPS ecosystem connection diagram"
          role="img"
          style={{ display: 'block' }}
        >
          {/* Connecting paths */}
          {PATHS.map((p, i) => (
            <path
              key={i}
              d={p.d}
              fill="none"
              stroke="rgba(200,180,154,0.55)"
              strokeWidth="1.5"
              strokeLinecap="round"
              pathLength={1}
              strokeDasharray={1}
              strokeDashoffset={revealed ? 0 : 1}
              style={{
                transition: revealed
                  ? `stroke-dashoffset 0.9s cubic-bezier(0.16,1,0.3,1) ${p.delay}ms`
                  : 'none',
              }}
            />
          ))}

          {/* Accent inner path — thinner, gold, slightly offset */}
          {PATHS.map((p, i) => (
            <path
              key={`accent-${i}`}
              d={p.d}
              fill="none"
              stroke="rgba(232,184,75,0.20)"
              strokeWidth="3"
              strokeLinecap="round"
              pathLength={1}
              strokeDasharray={1}
              strokeDashoffset={revealed ? 0 : 1}
              style={{
                transition: revealed
                  ? `stroke-dashoffset 1.1s cubic-bezier(0.16,1,0.3,1) ${p.delay + 100}ms`
                  : 'none',
              }}
            />
          ))}

          {/* Nodes */}
          {NODES.map((node, i) => (
            <g key={node.label}>
              {/* Outer ring */}
              <circle
                cx={node.x}
                cy={50}
                r={16}
                fill={`${node.color}18`}
                stroke={`${node.color}55`}
                strokeWidth="1"
                opacity={revealed ? 1 : 0}
                style={{
                  transition: revealed
                    ? `opacity 0.4s ease ${i * 140}ms`
                    : 'none',
                }}
              />
              {/* Inner dot */}
              <circle
                cx={node.x}
                cy={50}
                r={7}
                fill={node.color}
                opacity={revealed ? 1 : 0}
                style={{
                  transition: revealed
                    ? `opacity 0.35s ease ${i * 140 + 80}ms`
                    : 'none',
                }}
              />
              {/* Label */}
              <text
                x={node.x}
                y={85}
                textAnchor="middle"
                fontFamily="var(--font-body)"
                fontSize="11"
                fontWeight="500"
                fill="#0c1420"
                opacity={revealed ? 0.9 : 0}
                style={{
                  transition: revealed
                    ? `opacity 0.4s ease ${i * 140 + 120}ms`
                    : 'none',
                }}
              >
                {node.label}
              </text>
              {/* Sub-label */}
              <text
                x={node.x}
                y={101}
                textAnchor="middle"
                fontFamily="var(--font-mono)"
                fontSize="8.5"
                letterSpacing="0.08em"
                fill="#4a3f34"
                opacity={revealed ? 0.55 : 0}
                style={{
                  transition: revealed
                    ? `opacity 0.4s ease ${i * 140 + 180}ms`
                    : 'none',
                }}
              >
                {node.sub}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  )
}

// ── Service World Card ────────────────────────────────────────────────────────

interface EcoCardProps {
  eco: (typeof ecosystems)[number]
  index: number
}

function EcoCard({ eco, index }: EcoCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      data-reveal
      data-reveal-delay={String((index % 2) * 120)}
      className="relative overflow-hidden rounded-sm"
      style={{
        background: 'var(--color-hps-parchment)',
        border: `1px solid rgba(200,180,154,${hovered ? '0.20' : '0.40'})`,
        borderLeft: `4px solid ${eco.accent}`,
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hovered
          ? `0 16px 40px -8px ${eco.accent}35, 0 4px 16px -4px rgba(12,20,32,0.08)`
          : '0 2px 8px -2px rgba(12,20,32,0.04)',
        transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s ease, border-color 0.35s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Subtle warm glow when hovered */}
      <div
        className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${eco.accent}18 0%, transparent 70%)`,
          transform: 'translate(30%, -30%)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.4s ease',
        }}
        aria-hidden="true"
      />

      <div className="relative p-8 lg:p-10 flex flex-col h-full">

        {/* Eyebrow */}
        <p
          className="font-mono uppercase mb-3"
          style={{ fontSize: '0.6rem', letterSpacing: '0.24em', color: eco.accent }}
        >
          {eco.eyebrow}
        </p>

        {/* Title */}
        <h2
          className="font-display text-hps-ink mb-6"
          style={{
            fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
          }}
        >
          {eco.title}
        </h2>

        {/* Service list */}
        <ul className="flex flex-col gap-2.5 flex-1 mb-8">
          {eco.services.map(svc => (
            <li key={svc.label} className="flex items-start gap-3">
              <span
                className="shrink-0 mt-[0.4rem] w-1.5 h-1.5 rounded-full"
                style={{ background: eco.accent }}
                aria-hidden="true"
              />
              {svc.href ? (
                <Link
                  to={svc.href}
                  className="font-body leading-snug transition-colors duration-150"
                  style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.color = eco.accent)}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-hps-smoke)')}
                >
                  {svc.label}
                </Link>
              ) : (
                <span
                  className="font-body leading-snug"
                  style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}
                >
                  {svc.label}
                </span>
              )}
            </li>
          ))}
        </ul>

        {/* Tone + CTA row */}
        <div className="flex items-end justify-between gap-4 pt-6" style={{ borderTop: `1px solid rgba(200,180,154,0.35)` }}>
          <p
            className="font-body italic leading-snug max-w-xs"
            style={{ fontSize: '0.8125rem', color: 'var(--color-hps-smoke)', opacity: 0.70 }}
          >
            {eco.tone}
          </p>
          <Link
            to={eco.href}
            className="shrink-0 font-mono uppercase whitespace-nowrap transition-all duration-200"
            style={{
              fontSize: '0.65rem',
              letterSpacing: '0.18em',
              color: eco.accent,
              textDecoration: 'none',
              opacity: hovered ? 1 : 0.75,
            }}
          >
            Explore →
          </Link>
        </div>

      </div>
    </div>
  )
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  usePageMeta({
    title: 'Services',
    description: 'Web development, brand identity, fabrication, AI workflow automation, accessibility compliance, and photography — all from one full-service studio in Leesburg, Florida.',
  })
  return (
    <>
      {/* Atmosphere wrapper — spans all light sections, not the dark CTABand */}
      <div style={{ position: 'relative', isolation: 'isolate' }}>
      <BackgroundAtmosphere mood="mixed" intensity="subtle" density="sparse" />

      {/* 1. Page Header */}
      <PageHeader
        eyebrow="Operational Capabilities"
        title="Built for Real Operational Systems."
        description="Happy Path Studios combines software, branding, fabrication, and connected digital experiences into one unified ecosystem."
        accentColor="var(--color-hps-green)"
      />

      {/* 2. Service Worlds */}
      <section
        className="py-20 lg:py-28"
        style={{ background: 'var(--color-hps-cream)' }}
        aria-labelledby="service-worlds-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="mb-12 max-w-2xl" data-reveal>
            <h2
              id="service-worlds-heading"
              className="font-display text-hps-ink"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
            >
              Four interconnected worlds.<br />
              <span style={{ color: 'var(--color-hps-green)' }}>One studio.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {ecosystems.map((eco, i) => (
              <EcoCard key={eco.id} eco={eco} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Fabrication Production Catalog */}
      <section
        className="py-20 lg:py-28"
        style={{ background: 'var(--color-hps-parchment)' }}
        aria-labelledby="production-catalog-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="mb-14" data-reveal>
            <p
              className="font-mono uppercase mb-3"
              style={{ fontSize: '0.65rem', letterSpacing: '0.22em', color: 'var(--color-hps-coral-warm)' }}
            >
              In-house production capabilities
            </p>
            <h2
              id="production-catalog-heading"
              className="font-display text-hps-ink max-w-2xl"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', lineHeight: 1.08, letterSpacing: '-0.02em' }}
            >
              Every production system. No vendor shortcuts.
            </h2>
            <p
              className="font-body text-hps-smoke leading-relaxed mt-4 max-w-lg"
              style={{ fontSize: '0.9375rem' }}
            >
              19 production capabilities, all in-house, Leesburg, Florida. Each one its own discipline. Each one available without minimum orders or outsourcing.
            </p>
          </div>

          {/* Catalog grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Printing Systems */}
            <div data-reveal>
              <p className="font-mono uppercase mb-5" style={{ fontSize: '0.58rem', letterSpacing: '0.2em', color: 'var(--color-hps-coral-warm)', borderBottom: '1px solid rgba(200,180,154,0.40)', paddingBottom: '0.75rem' }}>
                Print Systems
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  { label: 'UV Printing',              href: '/services/uv-printing',          note: 'Flat & dimensional relief' },
                  { label: 'Dimensional Printing',     href: '/services/dimensional-printing',  note: 'Raised texture fabrication' },
                  { label: 'DTG Printing',             href: '/services/dtg-printing',          note: 'Direct-to-garment inkjet' },
                  { label: 'Sublimation Printing',     href: '/services/sublimation-printing',  note: 'All-over polyester & hardgoods' },
                  { label: 'Industrial Embroidery',    href: '/services/embroidery-systems',    note: '15-needle · in-house digitization' },
                ].map(item => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="group flex items-start justify-between gap-3 py-2.5"
                      style={{ borderBottom: '1px solid rgba(200,180,154,0.25)', textDecoration: 'none' }}
                      onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--color-hps-coral-warm)')}
                      onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(200,180,154,0.25)')}
                    >
                      <span className="font-body transition-colors duration-150" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-ink)' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-hps-coral-warm)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-hps-ink)')}
                      >{item.label}</span>
                      <span className="font-mono shrink-0" style={{ fontSize: '0.55rem', letterSpacing: '0.1em', color: 'var(--color-hps-smoke)', opacity: 0.60, marginTop: '0.2rem' }}>{item.note}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Laser Systems */}
            <div data-reveal data-reveal-delay="80">
              <p className="font-mono uppercase mb-5" style={{ fontSize: '0.58rem', letterSpacing: '0.2em', color: 'var(--color-hps-teal-dark)', borderBottom: '1px solid rgba(200,180,154,0.40)', paddingBottom: '0.75rem' }}>
                Laser Systems
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  { label: 'CO₂ Laser',          href: '/services/co2-laser',        note: 'Wood · acrylic · leather · fabric' },
                  { label: 'Fiber Laser',         href: '/services/fiber-laser',      note: 'Metals · anodized · awards' },
                  { label: 'UV Laser',            href: '/services/uv-laser',         note: 'Cold process · precision marking' },
                  { label: 'Diode Laser',         href: '/services/diode-laser',      note: 'Small batch · production runs' },
                  { label: 'Acrylic Engraving',   href: '/services/acrylic-engraving', note: 'Awards · display · backlit panels' },
                  { label: 'Wood Engraving',      href: '/services/wood-engraving',   note: 'Plaques · gifts · photo engraving' },
                  { label: 'Leather Engraving',   href: '/services/leather-engraving', note: 'Patches · tags · accessories' },
                ].map(item => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="group flex items-start justify-between gap-3 py-2.5"
                      style={{ borderBottom: '1px solid rgba(200,180,154,0.25)', textDecoration: 'none' }}
                      onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--color-hps-teal-dark)')}
                      onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(200,180,154,0.25)')}
                    >
                      <span className="font-body transition-colors duration-150" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-ink)' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-hps-teal-dark)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-hps-ink)')}
                      >{item.label}</span>
                      <span className="font-mono shrink-0" style={{ fontSize: '0.55rem', letterSpacing: '0.1em', color: 'var(--color-hps-smoke)', opacity: 0.60, marginTop: '0.2rem' }}>{item.note}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Signage, Fabrication, 3D */}
            <div data-reveal data-reveal-delay="160">
              <p className="font-mono uppercase mb-5" style={{ fontSize: '0.58rem', letterSpacing: '0.2em', color: 'var(--color-hps-green)', borderBottom: '1px solid rgba(200,180,154,0.40)', paddingBottom: '0.75rem' }}>
                Signage · Fabrication · 3D
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  { label: 'Vinyl Signage',           href: '/services/vinyl-signage',          note: 'Vehicles · windows · walls · floors' },
                  { label: 'Environmental Graphics',  href: '/services/environmental-graphics',  note: 'Murals · wayfinding · spaces' },
                  { label: 'Sponsor Signage Systems', href: '/services/sponsor-signage',         note: 'Golf · events · QR-tracked' },
                  { label: 'Hospitality Signage',     href: '/services/hospitality-signage',     note: 'Restaurants · hotels · QR menus' },
                  { label: 'Golf Plaque Fabrication', href: '/services/golf-plaques',            note: 'Awards · recognition · course ID' },
                  { label: 'QR-Connected Surfaces',   href: '/services/qr-connected-surfaces',   note: 'Dynamic QR · scan analytics' },
                  { label: 'Resin 3D Printing',       href: '/services/resin-3d-printing',       note: '20-micron · display quality' },
                  { label: 'FDM 3D Printing',         href: '/services/fdm-3d-printing',         note: 'Structural · large-format builds' },
                ].map(item => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="group flex items-start justify-between gap-3 py-2.5"
                      style={{ borderBottom: '1px solid rgba(200,180,154,0.25)', textDecoration: 'none' }}
                      onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--color-hps-green)')}
                      onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(200,180,154,0.25)')}
                    >
                      <span className="font-body transition-colors duration-150" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-ink)' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-hps-green)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-hps-ink)')}
                      >{item.label}</span>
                      <span className="font-mono shrink-0" style={{ fontSize: '0.55rem', letterSpacing: '0.1em', color: 'var(--color-hps-smoke)', opacity: 0.60, marginTop: '0.2rem' }}>{item.note}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-5" style={{ borderTop: '1px solid rgba(200,180,154,0.40)' }}>
                <Link
                  to="/fabrication"
                  className="font-mono uppercase transition-colors duration-200"
                  style={{ fontSize: '0.65rem', letterSpacing: '0.18em', color: 'var(--color-hps-coral-warm)', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-hps-ink)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-hps-coral-warm)')}
                >
                  Fabrication Lab overview →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. How It Connects */}
      <section
        className="py-20 lg:py-28 border-t border-b"
        style={{
          background: 'var(--color-hps-parchment)',
          borderColor: 'rgba(200,180,154,0.40)',
        }}
        aria-labelledby="connects-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="mb-14" data-reveal>
            <p
              className="font-mono uppercase mb-3"
              style={{ fontSize: '0.65rem', letterSpacing: '0.22em', color: 'var(--color-hps-green)' }}
            >
              Ecosystem map
            </p>
            <h2
              id="connects-heading"
              className="font-display text-hps-ink max-w-xl"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
            >
              How It Connects
            </h2>
            <p
              className="font-body text-hps-smoke leading-relaxed mt-4 max-w-lg"
              style={{ fontSize: '0.9375rem' }}
            >
              Every capability in the HPS ecosystem feeds the next.
              Software informs fabrication. Fabrication enables connected surfaces.
              Connected surfaces complete the loop back to digital.
            </p>
          </div>

          <EcosystemDiagram />

          {/* Legend */}
          <div className="flex flex-wrap gap-6 mt-10" aria-hidden="true" data-reveal>
            {NODES.map(node => (
              <div key={node.label} className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: node.color }}
                />
                <span
                  className="font-mono"
                  style={{ fontSize: '0.65rem', letterSpacing: '0.1em', color: 'var(--color-hps-smoke)', opacity: 0.70 }}
                >
                  {node.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Real Workflow */}
      <section
        className="py-20 lg:py-28"
        style={{ background: 'var(--color-hps-cream)' }}
        aria-labelledby="workflow-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="mb-14 max-w-2xl" data-reveal>
            <p
              className="font-mono uppercase mb-4"
              style={{ fontSize: '0.65rem', letterSpacing: '0.22em', color: 'var(--color-hps-green)' }}
            >
              How we work
            </p>
            <h2
              id="workflow-heading"
              className="font-display text-hps-ink"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.05, letterSpacing: '-0.025em' }}
            >
              We Design It.<br />
              Build It.<br />
              Connect It.
            </h2>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {workflowSteps.map((step, i) => (
              <div
                key={step.n}
                data-reveal
                data-reveal-delay={String(i * 80)}
                className="relative py-8 lg:py-10"
                style={{
                  paddingLeft: i === 0 ? '0' : '2rem',
                  paddingRight: i < workflowSteps.length - 1 ? '2rem' : '0',
                  borderLeft: i > 0 ? '1px solid rgba(200,180,154,0.40)' : 'none',
                }}
              >
                {/* Step number */}
                <span
                  className="font-mono block mb-5"
                  style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: step.accent, opacity: 0.80 }}
                >
                  {step.n}
                </span>

                {/* Accent rule */}
                <div
                  className="w-8 h-px mb-5"
                  style={{ background: step.accent }}
                  aria-hidden="true"
                />

                {/* Label */}
                <h3
                  className="font-display text-hps-ink mb-3"
                  style={{ fontSize: '1.75rem', lineHeight: 1.05, letterSpacing: '-0.02em' }}
                >
                  {step.label}
                </h3>

                {/* Desc */}
                <p
                  className="font-body text-hps-smoke leading-relaxed"
                  style={{ fontSize: '0.9375rem' }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Connective statement */}
          <div
            data-reveal
            className="mt-16 lg:mt-20 pt-12 border-t max-w-2xl"
            style={{ borderColor: 'rgba(200,180,154,0.40)' }}
          >
            <p
              className="font-body text-hps-smoke leading-relaxed"
              style={{ fontSize: '1.0625rem' }}
            >
              Because every phase is handled by the same team, the result isn't just a deliverable — it's a system that keeps working. Your website talks to your QR menu. Your fabricated sign links to a live digital destination. Your brand kit drives every surface we produce.
            </p>
            <div className="mt-6">
              <Link
                to="/ecosystems"
                className="font-mono uppercase transition-colors duration-200"
                style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: 'var(--color-hps-green)', textDecoration: 'none' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-hps-green-dark)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-hps-green)' }}
              >
                Explore the full ecosystem →
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 7. Industry Pathway Gateway */}
      <section
        className="py-16 lg:py-24 border-t"
        style={{ background: 'var(--color-hps-parchment)', borderColor: 'rgba(200,180,154,0.40)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-12">
            <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-green)' }}>
              Find your path
            </p>
            <h2 className="font-display mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
              Six industry pathways through the HPS ecosystem.
            </h2>
            <p className="font-body max-w-2xl leading-relaxed" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}>
              Every industry cluster uses the same HPS capabilities differently. The pathway view shows which services and platforms are most relevant to your operational context — and how they connect into a coordinated system.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { label: 'Golf & Recreation', href: '/ecosystem/golf-recreation', desc: 'Tee time booking, QR signage, sponsor systems, and digital infrastructure for golf courses and clubs.', accent: 'var(--color-hps-green)' },
              { label: 'Healthcare & Accessibility', href: '/ecosystem/healthcare-accessibility', desc: 'WCAG compliance, Section 508 audits, patient portal accessibility, and compliance operations for regulated organizations.', accent: 'var(--color-hps-teal-dark)' },
              { label: 'Hospitality & Restaurants', href: '/ecosystem/hospitality-restaurants', desc: 'QR menus, digital signage, push notifications, and connected customer experience for food service and hospitality.', accent: 'var(--color-hps-gold-rich)' },
              { label: 'Creators & Media', href: '/ecosystem/creators-media', desc: 'Audio, content production, push audiences, bio link hubs, and distribution infrastructure for independent creators.', accent: 'var(--color-hps-coral-warm)' },
              { label: 'Local Business', href: '/ecosystem/local-business', desc: 'Web presence, social scheduling, review management, and operational tools for Lake County and Central Florida businesses.', accent: 'var(--color-hps-teal)' },
              { label: 'Enterprise & Organizations', href: '/ecosystem/enterprise', desc: 'Hosting, uptime monitoring, AI workflows, client portal, and compliance operations for larger organizations.', accent: 'var(--color-hps-ink)' },
            ].map((pathway, i) => (
              <Link
                key={pathway.href}
                to={pathway.href}
                data-reveal
                data-reveal-delay={String((i % 3) * 80)}
                className="flex flex-col p-6 rounded-sm"
                style={{ background: 'var(--color-hps-cream)', border: '1px solid rgba(200,180,154,0.40)', borderLeft: `3px solid ${pathway.accent}`, textDecoration: 'none', transition: 'box-shadow 0.25s ease, transform 0.25s ease' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 20px -6px rgba(12,20,32,0.10)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <p className="font-mono uppercase mb-2" style={{ fontSize: '0.55rem', letterSpacing: '0.18em', color: pathway.accent }}>
                  Pathway
                </p>
                <h3 className="font-display mb-2" style={{ fontSize: '1.0625rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}>
                  {pathway.label}
                </h3>
                <p className="font-body text-sm leading-relaxed flex-1 mb-3" style={{ color: 'var(--color-hps-smoke)' }}>
                  {pathway.desc}
                </p>
                <span className="font-mono uppercase" style={{ fontSize: '0.6rem', letterSpacing: '0.16em', color: pathway.accent }}>
                  Explore pathway →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      </div>{/* end atmosphere wrapper */}

      {/* 7. CTA Band */}
      <CTABand
        headline="Let's Build Your Ecosystem."
        subhead="From operational platforms to physical fabrication, HPS creates connected systems built for the real world."
        buttonText="Start a Free Consultation"
      />
    </>
  )
}
