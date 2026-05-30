import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/sections/PageHeader'
import CTABand from '../components/sections/CTABand'
import BackgroundAtmosphere from '../components/decorative/BackgroundAtmosphere'
import WorkSample from '../components/proof/WorkSample'
import { OperationalPhoto } from '../components/proof/PhotographyIntegrationFramework'
import { HPSGolfDeploymentReality } from '../components/golf/HPSGolfDeploymentReality'
import { SponsorSignageProofLayer } from '../components/golf/SponsorSignageProofLayer'
import { SponsorRevenueIntelligence } from '../components/golf/SponsorRevenueIntelligence'
import { HPSGolfPlaqueEcosystem } from '../components/golf/HPSGolfPlaqueEcosystem'
import { GolfCourseDeploymentEnvironment } from '../components/golf/GolfCourseDeploymentEnvironment'
import { usePageMeta } from '../hooks/usePageMeta'

// ── Operational Pillars ───────────────────────────────────────────────────────

const pillars = [
  {
    id: 'tee-sheet',
    eyebrow: 'Booking & Scheduling',
    title: 'Tee Sheet Operations',
    accent: '#478c5c',
    accentVar: 'var(--color-hps-green)',
    href: '/platforms/hps-golf',
    items: [
      'Real-time availability with group sizing controls',
      'Online booking with confirmation and calendar sync',
      'Starter dashboard with daily tee time view',
      'Tournament slot blocking and event reservations',
      'Member priority windows and handicap integration',
      'Rate categories and dynamic pricing rules',
    ],
    tone: 'The operational core of every round.',
  },
  {
    id: 'golfer',
    eyebrow: 'On-Course Technology',
    title: 'Golfer Experience',
    accent: '#e8b84b',
    accentVar: 'var(--color-hps-gold)',
    href: '/platforms/hps-golf',
    items: [
      'Mobile-first digital scorecards — no app required',
      'Hole-by-hole yardage, hazard maps, and conditions',
      'Live score posting and handicap calculation',
      'QR surfaces linking to hole information and rules',
      'Tournament leaderboard access from any device',
      'Golfer profile and round history',
    ],
    tone: 'Everything a golfer needs. Nothing they don\'t.',
  },
  {
    id: 'sponsor',
    eyebrow: 'Revenue & Visibility',
    title: 'Sponsor Surface Systems',
    accent: '#b8882a',
    accentVar: 'var(--color-hps-gold-rich)',
    href: '/fabrication',
    items: [
      'Hole sponsor panels — produced and reprinted in-house',
      'Cart path signage at every staging area and turn',
      'Sponsor appreciation plaques — laser-engraved, dimensional',
      'QR-connected sponsor signs tracking scan engagement',
      'Per-sponsor, per-hole analytics dashboard',
      'Season renewal workflow with minimal reprint lead time',
    ],
    tone: 'Sponsor inventory that pays for itself.',
  },
  {
    id: 'qr',
    eyebrow: 'Connected Physical Infrastructure',
    title: 'QR-Connected Plaques & Surfaces',
    accent: '#0d9488',
    accentVar: 'var(--color-hps-teal-dark)',
    href: '/platforms/hps-qr-code',
    items: [
      'Laser-engraved tee markers with embedded QR codes',
      'Dynamic QR — update destination without reprinting',
      'On-course rules boards, directional signs, and maps',
      'Scan analytics by surface, hole, and time of day',
      'Dimensional UV-printed plaques for recognition programs',
      'Every physical surface tied to a live digital destination',
    ],
    tone: 'Physical surfaces with a live digital backbone.',
  },
  {
    id: 'clubhouse',
    eyebrow: 'POS, F&B & Retail',
    title: 'Clubhouse & Hospitality',
    accent: '#f87239',
    accentVar: 'var(--color-hps-coral-warm)',
    href: '/hospitality',
    items: [
      'Turn station QR menus — updated in real time from dashboard',
      'Clubhouse F&B POS with table and tab management',
      'Pro shop retail transactions with inventory tracking',
      'Custom apparel — DTG and sublimation, no minimums',
      'Golfer spending analytics per round and per visit',
      '19th hole promotions and clubhouse campaign messaging',
    ],
    tone: 'From the starter to the 19th hole, connected.',
  },
  {
    id: 'intelligence',
    eyebrow: 'Reporting & Analytics',
    title: 'Operational Intelligence',
    accent: '#478c5c',
    accentVar: 'var(--color-hps-green)',
    href: '/platforms/hps-engagetracker',
    items: [
      'Tee time utilization and booking velocity trends',
      'Revenue per round, per period, per rate category',
      'QR scan engagement across all on-course surfaces',
      'Sponsor visibility reporting for renewal conversations',
      'Pace-of-play monitoring and course flow analytics',
      'Multi-course consolidated reporting dashboard',
    ],
    tone: 'Every operational data point in one view.',
  },
]

// ── Ecosystem diagram ─────────────────────────────────────────────────────────

const GOLF_NODES = [
  { label: 'Tee Sheet',   sub: 'Booking',      x: 75,  color: '#478c5c' },
  { label: 'Golfer',      sub: 'Experience',   x: 227, color: '#e8b84b' },
  { label: 'QR Surfaces', sub: 'On-Course',    x: 379, color: '#0d9488' },
  { label: 'Sponsor',     sub: 'Systems',      x: 531, color: '#b8882a' },
  { label: 'Clubhouse',   sub: 'POS & F&B',    x: 683, color: '#f87239' },
  { label: 'Analytics',   sub: 'Intelligence', x: 835, color: '#478c5c' },
]

const GOLF_PATHS = [
  { d: 'M 75,50 C 130,24 172,24 227,50',  delay: 0 },
  { d: 'M 227,50 C 282,76 324,76 379,50', delay: 160 },
  { d: 'M 379,50 C 434,24 476,24 531,50', delay: 320 },
  { d: 'M 531,50 C 586,76 628,76 683,50', delay: 480 },
  { d: 'M 683,50 C 738,24 780,24 835,50', delay: 640 },
]

function GolfDiagram() {
  const ref = useRef<SVGSVGElement>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setRevealed(true) },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div className="w-full overflow-x-auto">
      <div style={{ minWidth: '600px' }}>
        <svg
          ref={ref}
          viewBox="0 0 910 130"
          preserveAspectRatio="xMidYMid meet"
          width="100%"
          aria-label="HPS Golf ecosystem connection diagram"
          role="img"
          style={{ display: 'block' }}
        >
          {GOLF_PATHS.map((p, i) => (
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
          {GOLF_PATHS.map((p, i) => (
            <path
              key={`g-${i}`}
              d={p.d}
              fill="none"
              stroke="rgba(71,140,92,0.18)"
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
          {GOLF_NODES.map((node, i) => (
            <g key={node.label}>
              <circle
                cx={node.x} cy={50} r={16}
                fill={`${node.color}18`}
                stroke={`${node.color}55`}
                strokeWidth="1"
                opacity={revealed ? 1 : 0}
                style={{ transition: revealed ? `opacity 0.4s ease ${i * 120}ms` : 'none' }}
              />
              <circle
                cx={node.x} cy={50} r={7}
                fill={node.color}
                opacity={revealed ? 1 : 0}
                style={{ transition: revealed ? `opacity 0.35s ease ${i * 120 + 80}ms` : 'none' }}
              />
              <text x={node.x} y={85} textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fontWeight="500" fill="#0c1420" opacity={revealed ? 0.9 : 0} style={{ transition: revealed ? `opacity 0.4s ease ${i * 120 + 120}ms` : 'none' }}>
                {node.label}
              </text>
              <text x={node.x} y={100} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="8" letterSpacing="0.08em" fill="#4a3f34" opacity={revealed ? 0.55 : 0} style={{ transition: revealed ? `opacity 0.4s ease ${i * 120 + 180}ms` : 'none' }}>
                {node.sub}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  )
}

// ── Pillar Card ───────────────────────────────────────────────────────────────

function PillarCard({ pillar, index }: { pillar: typeof pillars[number]; index: number }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      data-reveal
      data-reveal-delay={String((index % 2) * 100)}
      className="relative overflow-hidden rounded-sm"
      style={{
        background: 'var(--color-hps-parchment)',
        border: `1px solid rgba(200,180,154,${hovered ? '0.20' : '0.40'})`,
        borderLeft: `4px solid ${pillar.accent}`,
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hovered
          ? `0 16px 40px -8px ${pillar.accent}30, 0 4px 16px -4px rgba(12,20,32,0.08)`
          : '0 2px 8px -2px rgba(12,20,32,0.04)',
        transition: 'transform 0.32s cubic-bezier(0.16,1,0.3,1), box-shadow 0.32s ease, border-color 0.32s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="absolute top-0 right-0 w-36 h-36 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${pillar.accent}14 0%, transparent 70%)`,
          transform: 'translate(30%,-30%)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.4s ease',
        }}
        aria-hidden="true"
      />
      <div className="relative p-7 lg:p-8 flex flex-col h-full">
        <p className="font-mono uppercase mb-2" style={{ fontSize: '0.58rem', letterSpacing: '0.22em', color: pillar.accent }}>
          {pillar.eyebrow}
        </p>
        <h3 className="font-display mb-5" style={{ fontSize: 'clamp(1.25rem, 2.2vw, 1.625rem)', color: 'var(--color-hps-ink)', lineHeight: 1.05, letterSpacing: '-0.02em' }}>
          {pillar.title}
        </h3>
        <ul className="flex flex-col gap-2 flex-1 mb-6">
          {pillar.items.map(item => (
            <li key={item} className="flex items-start gap-3">
              <span className="shrink-0 mt-[0.35rem] w-1.5 h-1.5 rounded-full" style={{ background: pillar.accent }} aria-hidden="true" />
              <span className="font-body leading-snug" style={{ fontSize: '0.875rem', color: 'var(--color-hps-smoke)' }}>{item}</span>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between pt-5 border-t" style={{ borderColor: 'rgba(200,180,154,0.35)' }}>
          <p className="font-body italic" style={{ fontSize: '0.8rem', color: 'var(--color-hps-smoke)', opacity: 0.65 }}>
            {pillar.tone}
          </p>
          <Link
            to={pillar.href}
            className="font-mono uppercase shrink-0 transition-opacity duration-200"
            style={{ fontSize: '0.6rem', letterSpacing: '0.18em', color: pillar.accent, textDecoration: 'none', opacity: hovered ? 1 : 0.65 }}
          >
            Explore →
          </Link>
        </div>
      </div>
    </div>
  )
}

// ── POS data ──────────────────────────────────────────────────────────────────

const posCards = [
  {
    tag: 'Turn Station',
    title: 'QR-Powered F&B Ordering',
    desc: 'HPS QR Menu deployed at the turn, outdoor bar, and snack stations. Golfers scan to order and pay — no wait, no ticket, no radio call to the kitchen. Orders route directly and the tab links to the golfer\'s round.',
    accent: 'var(--color-hps-gold-rich)',
  },
  {
    tag: 'Clubhouse POS',
    title: 'F&B & Bar Operations',
    desc: 'Full food and beverage point-of-sale for the clubhouse, 19th hole, and dining room. Menu items, modifiers, table assignments, tab management, and end-of-shift reporting in one system.',
    accent: 'var(--color-hps-coral-warm)',
  },
  {
    tag: 'Retail',
    title: 'Pro Shop Transactions',
    desc: 'Merchandise, apparel, equipment, and green fee payments all run through the same POS layer. Inventory tracks in real time. Seasonal apparel produced in-house through the HPS Fabrication Lab.',
    accent: 'var(--color-hps-teal-dark)',
  },
  {
    tag: 'Sponsor Integration',
    title: 'Sponsor Redemption Systems',
    desc: 'QR-connected sponsor offers trigger at the turn, pro shop, or clubhouse. Scan a sponsor\'s tee sign, receive a discount. Every redemption event is logged, attributed, and reported back to sponsors.',
    accent: 'var(--color-hps-gold)',
  },
  {
    tag: 'Analytics',
    title: 'Golfer Spending Intelligence',
    desc: 'Per-golfer spend by round, per-visit F&B averages, campaign conversion rates, and season-over-season trending. Know which sponsor offers convert, which promotions drive turn station visits.',
    accent: 'var(--color-hps-green)',
  },
  {
    tag: 'Reporting',
    title: 'Operational & Financial Reporting',
    desc: 'Daily revenue totals by category — green fees, F&B, retail, event fees. Period-over-period comparisons. Export-ready for accounting workflows. The full club financial picture without manual reconciliation.',
    accent: 'var(--color-hps-smoke)',
  },
]

// ── Display systems data ──────────────────────────────────────────────────────

const displaySystems = [
  {
    tag: 'Lobby & Starter',
    title: 'Digital Tee Sheet Display',
    desc: 'TV-mounted booking board showing today\'s tee times, current rounds on course, and staging queue. Updates in real time from the tee sheet system — no separate display software.',
  },
  {
    tag: 'Live Scoring',
    title: 'Tournament Leaderboard',
    desc: 'Real-time leaderboard displayed on clubhouse screens, updating as scores are posted from mobile scorecards or manual input. Show individual, net, and scramble formats.',
  },
  {
    tag: 'Sponsor Content',
    title: 'Sponsor Rotation Display',
    desc: 'Sponsor content managed from the dashboard, rotating automatically across clubhouse screens. Schedule sponsor appearances, show sponsor offers, and track impression counts.',
  },
  {
    tag: 'Operations',
    title: 'Pace-of-Play Board',
    desc: 'Course status display showing current pace conditions by hole range. Updated by the marshal or starter and broadcast to all clubhouse screens immediately.',
  },
  {
    tag: 'Events & Calendar',
    title: 'Event Schedule Displays',
    desc: 'Today\'s events, upcoming tournaments, member outings, and special hours posted to all displays from a single calendar update. No USB drives, no manual screen editing.',
  },
  {
    tag: 'Hospitality',
    title: 'F&B & Campaign Messaging',
    desc: '19th hole specials, turn station promotions, and campaign messages managed from the same dashboard as your tee sheet. Push a happy hour special to the bar display in seconds.',
  },
]

// ── Multi-course data ─────────────────────────────────────────────────────────

const multiCourse = [
  {
    title: 'Club Hierarchy',
    desc: 'Organize under a parent club with individual course locations below it. Each course operates independently while sharing a master analytics view and central management layer.',
    accent: 'var(--color-hps-green)',
  },
  {
    title: 'Role-Based Access',
    desc: 'Course manager, marketing coordinator, sponsor administrator, F&B manager, and starter roles each see exactly what they need — nothing more. Access scoped to course and function.',
    accent: 'var(--color-hps-teal-dark)',
  },
  {
    title: 'Centralized Reporting',
    desc: 'Consolidated revenue, booking, and engagement data across all courses in one view. Compare performance between locations, identify trends, and report to ownership without manual aggregation.',
    accent: 'var(--color-hps-gold-rich)',
  },
  {
    title: 'Branded Public Experience',
    desc: 'Each course has its own public-facing website and booking interface, branded to that property. The operational backend is shared. Golfers see a distinct, property-specific experience.',
    accent: 'var(--color-hps-coral-warm)',
  },
]

// ── Ecosystem links ───────────────────────────────────────────────────────────

const ecosystemLinks = [
  { name: 'HPS QR Menu',       href: '/platforms/hps-qr-menu',       rel: 'Turn station & clubhouse digital menus',    accent: 'var(--color-hps-gold-rich)' },
  { name: 'HPS QR Code',       href: '/platforms/hps-qr-code',       rel: 'Dynamic QR infrastructure for all surfaces', accent: 'var(--color-hps-green)' },
  { name: 'HPS Push',          href: '/platforms/hps-push',          rel: 'Member communications & event alerts',      accent: 'var(--color-hps-teal)' },
  { name: 'HPS EngageTracker', href: '/platforms/hps-engagetracker', rel: 'Visitor behavior & scan analytics',         accent: 'var(--color-hps-teal-dark)' },
  { name: 'HPS Uptime',        href: '/platforms/hps-uptime',        rel: 'Booking & system uptime monitoring',        accent: 'var(--color-hps-coral-warm)' },
  { name: 'Fabrication Lab',   href: '/fabrication',                 rel: 'All physical signage produced in-house',    accent: 'var(--color-hps-coral-warm)' },
]

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function HPSGolfPage() {
  usePageMeta({
    title: 'HPS Golf | Sponsor Signage & QR Infrastructure',
    description: 'UV-printed sponsor plaques, QR-connected course surfaces, and real engagement data for golf courses and recreation operators. Produced in-house, deployed on-course.',
  })
  return (
    <>
      <div style={{ position: 'relative', isolation: 'isolate' }}>
      <BackgroundAtmosphere mood="citrus" intensity="whisper" density="sparse" />
      <PageHeader
        eyebrow="Connected Golf Operations"
        title="The Operational Ecosystem for Modern Golf Clubs."
        description="HPS Golf connects tee sheet operations, sponsor systems, fabrication, hospitality, analytics, and golfer engagement into one unified platform, built and maintained by Happy Path Studios."
        accentColor="var(--color-hps-green)"
      />

      {/* ── Hero CTAs ──────────────────────────────────────────────── */}
      <div style={{ background: 'var(--color-hps-cream)', paddingTop: '2rem', paddingBottom: '2.5rem', borderBottom: '1px solid rgba(200,180,154,0.35)', marginTop: '-1px' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap gap-3">
            <a
              href="https://hpsgolf.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-body font-medium rounded-sm transition-all duration-200"
              style={{ padding: '0.75rem 1.75rem', background: 'var(--color-hps-green)', color: '#ffffff', textDecoration: 'none', fontSize: '0.9375rem' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Visit HPS Golf ↗
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center font-body font-medium rounded-sm transition-all duration-200"
              style={{ padding: '0.75rem 1.75rem', background: 'transparent', color: 'var(--color-hps-green)', border: '1px solid rgba(71,140,92,0.35)', textDecoration: 'none', fontSize: '0.9375rem' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-hps-green)'; e.currentTarget.style.background = 'rgba(71,140,92,0.05)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(71,140,92,0.35)'; e.currentTarget.style.background = 'transparent' }}
            >
              Schedule a Discovery Call
            </Link>
          </div>
        </div>
      </div>

      {/* ── Operational Pillars ────────────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-10">
            <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-green)' }}>
              Operational coverage
            </p>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
              Six pillars. One connected ecosystem.
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <PillarCard key={p.id} pillar={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Ecosystem connection diagram ───────────────────────────── */}
      <section
        className="py-16 lg:py-24 border-t border-b"
        style={{ background: 'var(--color-hps-parchment)', borderColor: 'rgba(200,180,154,0.40)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-12">
            <p className="font-mono uppercase mb-3" style={{ fontSize: '0.65rem', letterSpacing: '0.22em', color: 'var(--color-hps-green)' }}>
              Ecosystem map
            </p>
            <h2 className="font-display mb-4" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
              How the course connects.
            </h2>
            <p className="font-body leading-relaxed max-w-lg" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}>
              A golfer books a tee time, scans a QR surface on the 7th hole, redeems a sponsor offer at the turn, orders food at the clubhouse, and those data points feed the operational dashboard. Every touchpoint is connected.
            </p>
          </div>
          <GolfDiagram />
          <div className="flex flex-wrap gap-6 mt-10" aria-hidden="true" data-reveal>
            {GOLF_NODES.map(node => (
              <div key={node.label} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full shrink-0" style={{ background: node.color }} />
                <span className="font-mono" style={{ fontSize: '0.65rem', letterSpacing: '0.1em', color: 'var(--color-hps-smoke)', opacity: 0.70 }}>
                  {node.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Physical + Digital integration ────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-cream)', position: 'relative', overflow: 'hidden' }}>
        {/* Course environment atmosphere */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: [
          'radial-gradient(ellipse at 15% 20%, rgba(71,140,92,0.055) 0%, transparent 50%)',
          'repeating-linear-gradient(180deg, transparent 0px, transparent 4px, rgba(71,140,92,0.010) 4px, rgba(71,140,92,0.010) 5px)',
        ].join(', ') }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-10" style={{ position: 'relative', zIndex: 1 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div data-reveal>
              <p className="font-mono uppercase mb-4" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-green)' }}>
                The HPS difference
              </p>
              <h2 className="font-display mb-5" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.08 }}>
                Same team. Same building. Physical and digital, unified.
              </h2>
              <p className="font-body leading-relaxed mb-4" style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)' }}>
                Your 7th hole tee marker is laser-engraved here. The QR code embedded in it routes to a destination we control. Scan analytics feed your dashboard. When sponsors change before next season, we update the destination and reprint the sign without vendor calls or separate invoices.
              </p>
              <p className="font-body leading-relaxed mb-8" style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)' }}>
                That capability doesn't exist at a sign shop or a golf software company. It only exists when design, fabrication, and digital platform are under the same roof.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'UV Raised Texture Printing',    note: 'Dimensional sign faces' },
                  { label: 'CO₂ & Fiber Laser Engraving',  note: 'Tee plaques & awards' },
                  { label: 'DTG & Sublimation Apparel',     note: 'Club gear & tournament shirts' },
                  { label: 'Dynamic QR Infrastructure',     note: 'Update without reprinting' },
                ].map(item => (
                  <div key={item.label} className="p-4 rounded-sm" style={{ background: 'var(--color-hps-parchment)', border: '1px solid rgba(200,180,154,0.40)' }}>
                    <p className="font-body font-medium mb-1" style={{ fontSize: '0.8125rem', color: 'var(--color-hps-ink)' }}>{item.label}</p>
                    <p className="font-mono" style={{ fontSize: '0.58rem', letterSpacing: '0.1em', color: 'var(--color-hps-smoke)', opacity: 0.70 }}>{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
            <div data-reveal data-reveal-delay="80">
              <p className="font-mono uppercase mb-5" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-smoke)', opacity: 0.70 }}>
                Production to deployment
              </p>
              <div className="flex flex-col">
                {[
                  { n: '01', label: 'Design',    desc: 'Course branding, hole layout, sponsor placement, and QR content architecture.' },
                  { n: '02', label: 'Fabricate', desc: 'UV print, laser engrave, or vinyl-cut the physical surface in-house.' },
                  { n: '03', label: 'Embed',     desc: 'Dynamic QR codes tied to live destinations — updatable without reprinting.' },
                  { n: '04', label: 'Deploy',    desc: 'Installed or shipped with placement documentation and system walkthrough.' },
                  { n: '05', label: 'Monitor',   desc: 'HPS Uptime and scan analytics watch all digital touchpoints continuously.' },
                ].map((step, i, arr) => (
                  <div key={step.n} className="flex items-start gap-5 py-4" style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(200,180,154,0.40)' : 'none' }}>
                    <span className="font-mono shrink-0 mt-0.5" style={{ fontSize: '0.6rem', letterSpacing: '0.16em', color: 'var(--color-hps-green)', opacity: 0.70 }}>{step.n}</span>
                    <div>
                      <p className="font-body font-medium mb-0.5" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-ink)' }}>{step.label}</p>
                      <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-hps-smoke)' }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── POS & Clubhouse Operations ─────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-parchment)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-10">
            <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-coral-warm)' }}>
              POS & Clubhouse Operations
            </p>
            <h2 className="font-display mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
              From tee sheet to 19th hole.
            </h2>
            <p className="font-body max-w-lg leading-relaxed" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}>
              HPS Golf extends beyond booking into full club operations — connecting F&B, retail, sponsor redemption, and spending analytics into the same operational layer that runs the tee sheet.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {posCards.map((card, i) => (
              <div
                key={card.title}
                data-reveal
                data-reveal-delay={String((i % 3) * 80)}
                className="rounded-sm p-6"
                style={{ background: 'var(--color-hps-cream)', border: '1px solid rgba(200,180,154,0.40)', borderLeft: `3px solid ${card.accent}` }}
              >
                <p className="font-mono uppercase mb-2" style={{ fontSize: '0.55rem', letterSpacing: '0.18em', color: card.accent }}>
                  {card.tag}
                </p>
                <h3 className="font-display mb-3" style={{ fontSize: '1.0625rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}>
                  {card.title}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-hps-smoke)' }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clubhouse Display Systems ──────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-10">
            <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-teal-dark)' }}>
              Clubhouse Display Systems
            </p>
            <h2 className="font-display mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
              A connected communication layer for the whole club.
            </h2>
            <p className="font-body max-w-lg leading-relaxed" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}>
              Every clubhouse screen becomes a managed communication surface — fed by the same platform running your tee sheet, menus, and sponsor systems. One dashboard update propagates everywhere.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {displaySystems.map((sys, i) => (
              <div
                key={sys.title}
                data-reveal
                data-reveal-delay={String((i % 3) * 80)}
                className="rounded-sm p-6"
                style={{ background: 'var(--color-hps-parchment)', border: '1px solid rgba(200,180,154,0.40)' }}
              >
                <p className="font-mono uppercase mb-2" style={{ fontSize: '0.55rem', letterSpacing: '0.18em', color: 'var(--color-hps-teal-dark)' }}>
                  {sys.tag}
                </p>
                <h3 className="font-display mb-3" style={{ fontSize: '1.0625rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}>
                  {sys.title}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-hps-smoke)' }}>
                  {sys.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Multi-Course & Club Management ────────────────────────── */}
      <section className="py-16 lg:py-20" style={{ background: 'var(--color-hps-parchment)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-10">
            <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-green)' }}>
              Scale & Management
            </p>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
              Built for golf organizations, not just single courses.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {multiCourse.map((item, i) => (
              <div
                key={item.title}
                data-reveal
                data-reveal-delay={String((i % 2) * 80)}
                className="rounded-sm p-7"
                style={{ background: 'var(--color-hps-cream)', border: '1px solid rgba(200,180,154,0.40)', borderTop: `4px solid ${item.accent}` }}
              >
                <h3 className="font-display mb-3" style={{ fontSize: '1.125rem', color: 'var(--color-hps-ink)' }}>{item.title}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-hps-smoke)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sponsor Season Operations ─────────────────────────────── */}
      <section className="py-16 lg:py-24 border-t" style={{ background: 'var(--color-hps-parchment)', borderColor: 'rgba(200,180,154,0.40)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-12">
            <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-gold-rich)' }}>
              Sponsor season cycle
            </p>
            <h2 className="font-display mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
              The only vendor that handles the whole cycle.
            </h2>
            <p className="font-body max-w-2xl leading-relaxed" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}>
              Most courses deal with a sign shop for the physical panels and a different vendor — or nobody — for analytics. The renewal conversation happens without real data. HPS handles fabrication and analytics in the same system, so every renewal conversation is backed by actual scan engagement per sponsor, per hole, per quarter.
            </p>
          </div>
          <div className="flex flex-col gap-0">
            {[
              {
                phase: 'Pre-Season',
                label: 'Design, Fabricate & Deploy',
                desc: 'Sponsor panels designed to spec — hole number, sponsor branding, QR code embedded and linked to a destination the sponsor controls or we configure. UV-printed, laser-engraved, or dimensionally finished in-house. Installed or shipped with placement documentation.',
                accent: 'var(--color-hps-green)',
              },
              {
                phase: 'In-Season',
                label: 'Live Scan Analytics',
                desc: 'Every QR-connected surface tracks scan volume, time of day, device type, and geographic location. Hole 4 sponsor sign at the tee box gets measured the same way a digital ad would — impressions, engagement rate, and click-through behavior. Destination redirects update without reprinting if a sponsor wants to run a campaign mid-season.',
                accent: 'var(--color-hps-teal-dark)',
              },
              {
                phase: 'End of Season',
                label: 'Sponsor Performance Report',
                desc: 'Per-sponsor summary: total scans, peak engagement periods, redemption conversions if tied to offers, and comparative performance across all holes and locations. Delivered before the renewal conversation — not assembled afterward.',
                accent: 'var(--color-hps-gold-rich)',
              },
              {
                phase: 'Renewal',
                label: 'Data-Backed Negotiation',
                desc: 'A sponsor who generated 400 scans with a 23% redemption rate at the turn station has documented ROI. A sponsor who underperformed on hole 14 knows their placement needs to move. Renewal pricing reflects real engagement, not estimated visibility.',
                accent: 'var(--color-hps-coral-warm)',
              },
            ].map((step, i, arr) => (
              <div
                key={step.phase}
                data-reveal
                data-reveal-delay={String((i % 3) * 60)}
                className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-4 lg:gap-12 py-8"
                style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(200,180,154,0.40)' : 'none' }}
              >
                <div className="flex items-start gap-4 lg:flex-col lg:gap-2">
                  <span className="font-mono shrink-0" style={{ fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: step.accent, opacity: 0.9 }}>
                    {step.phase}
                  </span>
                  <p className="font-display" style={{ fontSize: '1rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}>
                    {step.label}
                  </p>
                </div>
                <p className="font-body leading-relaxed" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ecosystem connections ──────────────────────────────────── */}
      <section className="py-16 lg:py-20" style={{ background: 'var(--color-hps-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-8">
            <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-green)' }}>
              HPS Ecosystem
            </p>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)' }}>
              Connected platforms in the HPS Golf stack
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ecosystemLinks.map((link, i) => (
              <Link
                key={link.href}
                to={link.href}
                data-reveal
                data-reveal-delay={String((i % 3) * 60)}
                className="group flex items-start gap-4 p-5 rounded-sm transition-all duration-200"
                style={{ background: 'var(--color-hps-parchment)', border: '1px solid rgba(200,180,154,0.40)', textDecoration: 'none' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = link.accent; e.currentTarget.style.boxShadow = '0 4px 16px rgba(12,20,32,0.07)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(200,180,154,0.40)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <div className="w-1 self-stretch rounded-full shrink-0" style={{ background: link.accent }} aria-hidden="true" />
                <div>
                  <p className="font-body font-medium mb-0.5" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-ink)' }}>{link.name}</p>
                  <p className="font-body text-sm" style={{ color: 'var(--color-hps-smoke)' }}>{link.rel}</p>
                </div>
                <span className="ml-auto self-center font-mono transition-transform duration-200 group-hover:translate-x-1" style={{ fontSize: '0.7rem', color: link.accent }} aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
          <div data-reveal className="mt-8 pt-8 border-t" style={{ borderColor: 'rgba(200,180,154,0.40)' }}>
            <Link
              to="/platforms/hps-golf"
              className="font-mono uppercase transition-colors duration-200"
              style={{ fontSize: '0.68rem', letterSpacing: '0.18em', color: 'var(--color-hps-green)', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-hps-green-dark)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-hps-green)')}
            >
              View the HPS Golf platform detail →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Physical Production Proof ───────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-10">
            <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-green)' }}>
              Physical + digital production
            </p>
            <h2 className="font-display mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
              Every surface fabricated in-house.
            </h2>
            <p className="font-body max-w-2xl leading-relaxed" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}>
              Sponsor panels, tee markers, plaques, and QR-connected surfaces are all produced at the HPS fabrication lab in Leesburg, FL. UV printing, laser engraving, and dimensional finishing at the same location. When the physical piece and the digital destination come from the same operation, nothing gets lost in translation.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 mb-6">
            <WorkSample
              caption="Hole sponsor panel — UV print with embedded QR, weather-rated substrate"
              equipment="UV Raised Texture System"
              category="Sponsor Signage"
              accentColor="var(--color-hps-green)"
              surface="matte"
              aspectRatio="4/3"
              revealDelay={0}
            />
            <WorkSample
              caption="Tee box marker — dimensional CO₂ engraved on natural wood substrate"
              equipment="CO₂ Laser System"
              category="Tee Markers"
              accentColor="var(--color-hps-green)"
              surface="wood"
              aspectRatio="4/3"
              revealDelay={60}
            />
            <WorkSample
              caption="Recognition plaque — UV texture print combined with fiber laser engraving"
              equipment="UV + Fiber Laser Combined"
              category="Award Plaques"
              accentColor="var(--color-hps-gold-rich)"
              surface="brushedMetal"
              aspectRatio="4/3"
              revealDelay={120}
            />
            <WorkSample
              caption="QR-connected surface — scan-to-content, live destination managed through HPS QR Code"
              equipment="Connected Surface System"
              category="QR Systems"
              accentColor="var(--color-hps-teal-dark)"
              surface="blueprint"
              aspectRatio="4/3"
              revealDelay={0}
            />
            <WorkSample
              caption="Cart signage — UV print on weather-rated panel, sponsor branding"
              equipment="UV Raised Texture System"
              category="Cart & Wayfinding"
              accentColor="var(--color-hps-coral-warm)"
              surface="matte"
              aspectRatio="4/3"
              revealDelay={60}
            />
            <WorkSample
              caption="Sponsor performance report — seasonal scan engagement per hole and placement"
              equipment="HPS Golf Analytics"
              category="Reporting"
              accentColor="var(--color-hps-ink)"
              surface="blueprint"
              aspectRatio="4/3"
              revealDelay={120}
            />
          </div>
          <div data-reveal className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              to="/fabrication"
              className="inline-block font-mono uppercase"
              style={{ fontSize: '0.65rem', letterSpacing: '0.18em', color: 'var(--color-hps-cream)', background: 'var(--color-hps-green)', padding: '0.75rem 1.5rem', borderRadius: '2px', textDecoration: 'none' }}
            >
              Fabrication Lab →
            </Link>
            <Link
              to="/services/sponsor-signage"
              className="inline-block font-mono uppercase"
              style={{ fontSize: '0.65rem', letterSpacing: '0.18em', color: 'var(--color-hps-green)', border: '1px solid var(--color-hps-green)', padding: '0.75rem 1.5rem', borderRadius: '2px', textDecoration: 'none' }}
            >
              Sponsor Signage Systems →
            </Link>
          </div>
        </div>
      </section>

      {/* ── On-Course Physical Infrastructure ────────────────────── */}
      <section
        className="py-16 lg:py-24"
        style={{ background: 'var(--color-hps-parchment)', position: 'relative', overflow: 'hidden' }}
      >
        {/* Morning course light atmosphere */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: [
          'radial-gradient(ellipse at 90% 10%, rgba(232,184,75,0.06) 0%, transparent 55%)',
          'radial-gradient(ellipse at 10% 80%, rgba(71,140,92,0.045) 0%, transparent 50%)',
        ].join(', ') }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-10" style={{ position: 'relative', zIndex: 1 }}>
          <div data-reveal className="mb-10">
            <p
              className="font-mono uppercase mb-3"
              style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-green)' }}
            >
              On-course installation
            </p>
            <h2
              className="font-display mb-4"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}
            >
              What the infrastructure looks like in the field.
            </h2>
            <p
              className="font-body max-w-2xl leading-relaxed"
              style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}
            >
              Each surface category below represents a deployed position on a real course installation — from tee box markers through sponsor panels, cart path signage, and clubhouse environments. Photography documents work as it ships.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
            <OperationalPhoto
              src="/images/golf-tee-marker.jpg"
              alt="CO₂ laser engraved tee box marker at golf course hole"
              environment="golf"
              aspect="4/3"
              caption="Tee box marker — CO₂ laser engraved on natural wood substrate"
              metadata={[
                { label: 'Process', value: 'CO₂ Laser' },
                { label: 'Position', value: 'Tee Box' },
                { label: 'QR', value: 'Embedded' },
              ]}
              accentColor="var(--color-hps-green)"
              revealDelay={0}
            />
            <OperationalPhoto
              src="/images/golf-sponsor-panel.jpg"
              alt="UV-printed hole sponsor panel with dynamic QR code at base"
              environment="golf"
              aspect="4/3"
              caption="Hole sponsor panel — UV print with spot-gloss logo, dynamic QR at base"
              metadata={[
                { label: 'Process', value: 'UV + QR' },
                { label: 'Substrate', value: 'ACM Panel' },
                { label: 'Season', value: 'Reprinted annually' },
              ]}
              accentColor="var(--color-hps-gold-rich)"
              revealDelay={60}
            />
            <OperationalPhoto
              src="/images/golf-cart-signage.jpg"
              alt="Cart path directional and sponsor signage panels"
              environment="outdoor"
              aspect="4/3"
              caption="Cart path signage — directional and sponsor panels along the cart corridor"
              metadata={[
                { label: 'Process', value: 'UV Print' },
                { label: 'Position', value: 'Cart Path' },
                { label: 'Substrate', value: 'Weather-rated' },
              ]}
              accentColor="var(--color-hps-coral-warm)"
              revealDelay={120}
            />
            <OperationalPhoto
              src="/images/plaque-recognition.jpg"
              alt="UV texture printed recognition plaque with fiber laser engraving"
              environment="fabrication"
              aspect="4/3"
              caption="Recognition plaque — UV texture print with fiber laser engraving, combined finish"
              metadata={[
                { label: 'Process', value: 'UV + Fiber Laser' },
                { label: 'Type', value: 'Award Plaque' },
                { label: 'Substrate', value: 'PVC or Hardwood' },
              ]}
              accentColor="var(--color-hps-gold-rich)"
              revealDelay={0}
            />
            <OperationalPhoto
              src="/images/golf-qr-surface.jpg"
              alt="QR-connected on-course surface with active scan tracking"
              environment="golf"
              aspect="4/3"
              caption="QR surface scan engagement — on-course surface with live scan analytics"
              metadata={[
                { label: 'Platform', value: 'HPS QR Code' },
                { label: 'Analytics', value: 'Per-surface' },
                { label: 'Update', value: 'No reprint' },
              ]}
              accentColor="var(--color-hps-teal-dark)"
              revealDelay={60}
            />
            <OperationalPhoto
              src="/images/golf-clubhouse-display.jpg"
              alt="Clubhouse sponsor display and tee sheet environment"
              environment="hospitality"
              aspect="4/3"
              caption="Clubhouse display environment — sponsor content and tee sheet on managed screens"
              metadata={[
                { label: 'Platform', value: 'HPS Golf' },
                { label: 'Content', value: 'Dashboard-managed' },
                { label: 'Updates', value: 'Real-time' },
              ]}
              accentColor="var(--color-hps-coral-warm)"
              revealDelay={120}
            />
          </div>

          {/* Deployment scale */}
          <div
            data-reveal
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8"
            style={{ borderTop: '1px solid rgba(200,180,154,0.38)' }}
          >
            {[
              { value: '18+',    label: 'Tee markers per course' },
              { value: '18+',    label: 'Sponsor surfaces per season' },
              { value: '0',      label: 'Vendor handoffs' },
              { value: '∞',      label: 'QR destination updates' },
            ].map(stat => (
              <div
                key={stat.label}
                className="p-5 rounded-sm text-center"
                style={{ background: 'var(--color-hps-cream)', border: '1px solid rgba(200,180,154,0.38)' }}
              >
                <p
                  className="font-display mb-1"
                  style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: 'var(--color-hps-green)', lineHeight: 1 }}
                >
                  {stat.value}
                </p>
                <p
                  className="font-mono"
                  style={{ fontSize: '0.52rem', letterSpacing: '0.12em', color: 'var(--color-hps-smoke)', opacity: 0.65, textTransform: 'uppercase' }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      </div>{/* end atmosphere wrapper */}

      {/* ── Golf Course Deployment Environment ──────────────────────── */}
      <GolfCourseDeploymentEnvironment />

      {/* ── Plaque Ecosystem ────────────────────────────────────────── */}
      <HPSGolfPlaqueEcosystem />

      {/* ── Sponsor Revenue Intelligence ────────────────────────────── */}
      <SponsorRevenueIntelligence />

      {/* ── Sponsor Signage Proof ────────────────────────────────────── */}
      <SponsorSignageProofLayer />

      {/* ── Golf Deployment Reality ──────────────────────────────────── */}
      <HPSGolfDeploymentReality />

      {/* ── Bottom Conversion Section ────────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-parchment)', borderTop: '1px solid rgba(200,180,154,0.40)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div
            data-reveal
            className="rounded-sm p-10 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
            style={{ background: 'var(--color-hps-cream)', border: '1px solid rgba(200,180,154,0.40)', borderLeft: '4px solid var(--color-hps-green)' }}
          >
            <div className="max-w-xl">
              <p className="font-mono uppercase mb-3" style={{ fontSize: '0.58rem', letterSpacing: '0.2em', color: 'var(--color-hps-green)' }}>
                Ready to see it in action
              </p>
              <h2 className="font-display mb-4" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
                Ready to See HPS Golf in Action?
              </h2>
              <p className="font-body leading-relaxed" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}>
                HPS Golf combines tee sheets, golfer engagement, sponsor surfaces, QR experiences, analytics, operational intelligence, and club management into a single platform.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href="https://hpsgolf.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-body font-medium rounded-sm transition-all duration-200"
                style={{ padding: '0.75rem 1.75rem', background: 'var(--color-hps-green)', color: '#ffffff', textDecoration: 'none', fontSize: '0.9375rem' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                Visit HPS Golf ↗
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center font-body font-medium rounded-sm transition-all duration-200"
                style={{ padding: '0.75rem 1.75rem', background: 'transparent', color: 'var(--color-hps-green)', border: '1px solid rgba(71,140,92,0.35)', textDecoration: 'none', fontSize: '0.9375rem' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-hps-green)'; e.currentTarget.style.background = 'rgba(71,140,92,0.05)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(71,140,92,0.35)'; e.currentTarget.style.background = 'transparent' }}
              >
                Schedule a Discovery Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        headline="Build a Connected Golf Ecosystem."
        subhead="Operations, fabrication, sponsorships, analytics, and golfer engagement in one connected platform."
        buttonText="Start a Conversation"
        showPhone
      />
    </>
  )
}
