import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getPlatform } from '../../data/platforms'
import { getStacksForPlatform } from '../../data/stacks'

// ── Types ─────────────────────────────────────────────────────────────────────

export interface SuggestionItem {
  label: string
  desc: string
  href: string
  external?: boolean
  accent?: string
}

export interface LiveAccessItem {
  label: string
  href: string
  cta: string
  accent: string
}

type TabId = 'suggestions' | 'message'

// ── Suggestion catalogue ──────────────────────────────────────────────────────

const S: Record<string, SuggestionItem> = {
  services:           { label: 'Services Overview',        desc: 'Full catalog of HPS digital and production services.',         href: '/services',                        accent: 'var(--color-hps-coral-warm)' },
  fabrication:        { label: 'Fabrication Lab',           desc: 'UV printing, laser systems, signage, apparel, 3D.',            href: '/fabrication',                     accent: 'var(--color-hps-coral-warm)' },
  uvPrinting:         { label: 'UV Printing & Signage',     desc: 'Textured, dimensional UV on any rigid surface.',               href: '/services/uv-printing',            accent: 'var(--color-hps-coral-warm)' },
  dtgPrinting:        { label: 'DTG Apparel Printing',      desc: 'Full-color photographic garment printing.',                    href: '/services/dtg-printing',           accent: 'var(--color-hps-coral-warm)' },
  qrSurfaces:         { label: 'QR-Connected Surfaces',    desc: 'Physical surfaces linked to live digital destinations.',       href: '/services/qr-connected-surfaces',  accent: 'var(--color-hps-teal)' },
  sponsorSignage:     { label: 'Sponsor Signage Systems',   desc: 'Multi-hole sponsor programs with QR integration.',             href: '/services/sponsor-signage',        accent: 'var(--color-hps-green)' },
  golfPlaques:        { label: 'Golf Plaques & Awards',     desc: 'Dimensional plaques, acrylic, and wood engraving.',            href: '/services/golf-plaques',           accent: 'var(--color-hps-green)' },
  platforms:          { label: 'Platforms',                 desc: 'Twenty connected digital systems and automation tools.',       href: '/platforms',                       accent: 'var(--color-hps-teal)' },
  uptime:             { label: 'HPS Uptime Monitoring',     desc: 'Real-time performance and uptime monitoring.',                 href: '/platforms/hps-uptime',            accent: 'var(--color-hps-gold-rich)' },
  clientPortal:       { label: 'Client Portal',             desc: 'Projects, invoices, and deliverables — one environment.',     href: '/client-portal',                   accent: 'var(--color-hps-ink)' },
  clientPortalLogin:  { label: 'Client Portal Login',       desc: 'Log in to your active HPS client environment.',               href: 'https://happypathstudios.com/crm/login', external: true, accent: 'var(--color-hps-ink)' },
  hosting:            { label: 'Hosting & Infrastructure',  desc: 'Managed hosting, uptime monitoring, and migrations.',         href: '/hosting',                         accent: 'var(--color-hps-gold-rich)' },
  ecosystems:         { label: 'Ecosystem Overview',        desc: 'Understand how every HPS service connects.',                  href: '/ecosystems',                      accent: 'var(--color-hps-green)' },
  golf:               { label: 'HPS Golf Ecosystem',        desc: 'Sponsor signage, plaques, QR surfaces, course identity.',     href: '/golf',                            accent: 'var(--color-hps-green)' },
  hospitality:        { label: 'Hospitality & QR',          desc: 'QR menus, table systems, and hospitality signage.',           href: '/hospitality',                     accent: 'var(--color-hps-gold-rich)' },
  accessibilitySvc:   { label: 'HPS Accessibility',         desc: 'WCAG audits, remediation, and ongoing compliance.',           href: '/accessibility',                   accent: 'var(--color-hps-teal)' },
  accessibilityExt:   { label: 'hpsaccessibility.com',     desc: 'Live accessibility monitoring and compliance platform.',      href: 'https://hpsaccessibility.com',     external: true, accent: 'var(--color-hps-teal)' },
  fbeatsLive:         { label: 'FreeBeatsMUSIC',            desc: 'Live streaming platform — free and paid production tiers.',   href: 'https://freebeatsmusic.com',       external: true, accent: 'var(--color-hps-gold)' },
  qrMenuLive:         { label: 'HPS QR Menu',               desc: 'Live digital menu — update from dashboard, no reprints.',     href: 'https://hpsqrmenu.com',            external: true, accent: 'var(--color-hps-gold-rich)' },
  qrCodeLive:         { label: 'HPS QR Code',               desc: 'Live dynamic QR management — analytics and redirect control.',href: 'https://hpsqrcode.com',            external: true, accent: 'var(--color-hps-ink)' },
  pushLive:           { label: 'HPS Push',                  desc: 'Live web push platform — browser-based, no app needed.',     href: 'https://hpspush.com',              external: true, accent: 'var(--color-hps-teal)' },
  webToolsLive:       { label: 'HPS Web Tools',             desc: 'Live professional web diagnostics — health, redirects, DNS.', href: 'https://hpswebtools.com',          external: true, accent: 'var(--color-hps-teal)' },
  socializeLive:      { label: 'HPS Socialize',             desc: 'Live social scheduling — multi-platform content calendar.',   href: 'https://hpssocialize.com',         external: true, accent: 'var(--color-hps-coral-warm)' },
  media:              { label: 'HPS Media',                 desc: 'Creator tools, streaming, and distribution systems.',         href: '/media',                           accent: 'var(--color-hps-gold)' },
  aiSystems:          { label: 'AI Systems & Automation',   desc: 'Workflow automation and operational AI integration.',         href: '/ai-systems',                      accent: 'var(--color-hps-teal-dark)' },
  consultation:       { label: 'Free Consultation',         desc: 'Talk to HPS — no pitch, no pressure.',                       href: '/contact',                         accent: 'var(--color-hps-green)' },
  aboutHPS:           { label: 'About HPS Studio',          desc: 'The background, philosophy, and capabilities of HPS.',       href: '/about',                           accent: 'var(--color-hps-green)' },
  industryPathways:   { label: 'Industry Pathways',         desc: 'Six pathways for golf, hospitality, healthcare, and more.',  href: '/ecosystems',                      accent: 'var(--color-hps-teal-dark)' },
  clientPortalPage:   { label: 'Client Portal Overview',    desc: 'How the portal works and what managed clients access.',      href: '/client-portal',                   accent: 'var(--color-hps-ink)' },
  accessibility:      { label: 'Accessibility Services',    desc: 'Section 508, WCAG 2.1, and ADA compliance services.',        href: '/accessibility',                   accent: 'var(--color-hps-teal-dark)' },
}

// Live systems accessible right now — shown in side panel for direct access
const LIVE_SYSTEMS: LiveAccessItem[] = [
  {
    label: 'HPS Accessibility',
    href: 'https://hpsaccessibility.com',
    cta: 'Launch ↗',
    accent: 'var(--color-hps-teal-dark)',
  },
  {
    label: 'Client Portal',
    href: 'https://happypathstudios.com/crm/login',
    cta: 'Log In ↗',
    accent: 'var(--color-hps-ink)',
  },
  {
    label: 'FreeBeatsMUSIC',
    href: 'https://freebeatsmusic.com',
    cta: 'Listen ↗',
    accent: 'var(--color-hps-gold)',
  },
  {
    label: 'HPS QR Code',
    href: 'https://hpsqrcode.com',
    cta: 'Launch ↗',
    accent: 'var(--color-hps-coral-warm)',
  },
  {
    label: 'HPS Golf',
    href: 'https://hpsgolf.app',
    cta: 'Launch ↗',
    accent: 'var(--color-hps-green)',
  },
]

interface RouteContext {
  label: string
  suggestions: SuggestionItem[]
  tip?: string
  benefits?: SuggestionItem[]
  onboardingNote?: string
  stackInfo?: {
    stackName: string
    accentColor: string
    platforms: SuggestionItem[]
  }
}

function getRouteContext(pathname: string): RouteContext {
  if (pathname === '/')
    return {
      label: 'HPS Ecosystem',
      suggestions: [S.services, S.fabrication, S.golf, S.consultation],
      tip: 'HPS systems compound over time. Start with the layer that solves your most immediate operational problem — the rest become natural extensions as the operation grows.',
      benefits: [S.sponsorSignage, S.aiSystems, S.ecosystems],
    }
  if (pathname === '/services')
    return {
      label: 'Services',
      suggestions: [S.fabrication, S.uvPrinting, S.dtgPrinting, S.sponsorSignage],
      tip: 'Every HPS service is designed to connect into operational infrastructure, not just be delivered and handed off. Knowing which platforms will carry the output changes how the build is approached.',
      benefits: [S.platforms, S.ecosystems],
    }
  if (pathname === '/platforms')
    return {
      label: 'Platforms',
      suggestions: [S.uptime, S.clientPortal, S.aiSystems, S.consultation],
      tip: 'Platforms compound. Push analytics inform content decisions. Engagement data shapes QR placement. Uptime alerts integrate with client communication. Each layer adds signal to the next.',
      benefits: [S.ecosystems, S.consultation],
    }
  if (pathname === '/fabrication')
    return {
      label: 'Fabrication Lab',
      suggestions: [S.uvPrinting, S.dtgPrinting, S.sponsorSignage, S.qrSurfaces],
      tip: 'UV-printed QR surfaces bridge physical and digital. A code printed today can redirect to a new destination next season — no reprint needed. Scan analytics show which physical locations actually perform.',
      benefits: [S.golf, S.hospitality],
    }
  if (pathname === '/golf')
    return {
      label: 'HPS Golf Ecosystem',
      suggestions: [S.sponsorSignage, S.golfPlaques, S.hospitality, S.qrSurfaces],
      tip: 'Sponsor QR plaques generate scan data that directly supports renewal conversations. The physical asset proves its own ROI through the analytics dashboard — no manual reporting required.',
      benefits: [S.uptime, S.ecosystems],
    }
  if (pathname === '/accessibility')
    return {
      label: 'Accessibility Services',
      suggestions: [S.accessibilityExt, S.accessibilitySvc, S.services, S.consultation],
      tip: 'Compliance is continuous, not a one-time audit. New deployments and CMS updates introduce new failures. Monitoring prevents regression — and the evidence trail protects you at the next legal review.',
      benefits: [S.clientPortalLogin, S.hosting],
      onboardingNote: 'Accessibility engagements begin with a scoped audit call. We review your tech stack, compliance obligations, and current posture before any remediation work begins.',
    }
  if (pathname === '/hosting')
    return {
      label: 'Hosting & Infrastructure',
      suggestions: [S.uptime, S.webToolsLive, S.clientPortalLogin, S.consultation],
      tip: 'Managed hosting and uptime monitoring are most valuable when they share context. When HPS hosts your infrastructure, outage alerts arrive with deployment and change history — not just that something is down.',
      benefits: [S.uptime, S.clientPortal],
      onboardingNote: 'Every hosting migration begins with a site audit and staging environment before DNS cutover. New clients receive Client Portal access at the start of their hosting engagement.',
    }
  if (pathname === '/hospitality')
    return {
      label: 'Hospitality & QR Systems',
      suggestions: [S.qrMenuLive, S.qrCodeLive, S.sponsorSignage, S.fabrication],
      tip: 'QR menu systems eliminate reprint cycles — your team updates pricing, availability, and specials from a dashboard without touching a printer. Scan analytics show which table positions get the most engagement.',
      benefits: [S.hosting, S.consultation],
    }
  if (pathname === '/media')
    return {
      label: 'Media & Creator',
      suggestions: [S.fbeatsLive, S.pushLive, S.socializeLive, S.consultation],
      tip: 'Creator infrastructure becomes more efficient as the asset library and production calendar mature. After six months, the system runs mostly on its own — the creator spends time creating, not managing tools.',
      benefits: [S.hosting, S.consultation],
    }
  if (pathname === '/ai-systems')
    return {
      label: 'AI Systems',
      suggestions: [S.platforms, S.clientPortal, S.hosting, S.consultation],
      tip: 'AI workflow value compounds with use. The first automation saves hours a week. By month four, it becomes the foundation for five related workflows. Every extension is cheaper because the infrastructure is already in place.',
      benefits: [S.ecosystems, S.consultation],
      onboardingNote: 'AI engagements begin with a workflow audit — we document what your team does manually before recommending what to automate. That context is what makes the resulting system accurate.',
    }
  if (pathname === '/ecosystems')
    return {
      label: 'Ecosystem Overview',
      suggestions: [S.services, S.fabrication, S.golf, S.consultation],
      tip: 'The ecosystem is designed around operational continuity. Every system includes an ongoing management path — the work does not end at delivery.',
      benefits: [S.industryPathways, S.consultation],
    }
  if (pathname === '/client-portal')
    return {
      label: 'Client Systems',
      suggestions: [S.clientPortalLogin, S.uptime, S.hosting, S.consultation],
      tip: 'Portal access is provisioned the day an engagement begins. Existing clients log in directly — new clients receive credentials at kickoff.',
      benefits: [S.accessibility, S.platforms],
      onboardingNote: 'If you are starting a new engagement, the consultation form is step one. Portal credentials come with the kickoff confirmation.',
    }
  if (pathname === '/about')
    return {
      label: 'About HPS',
      suggestions: [S.services, S.ecosystems, S.fabrication, S.consultation],
      benefits: [S.industryPathways, S.platforms],
    }
  if (pathname === '/contact')
    return {
      label: 'Explore the Ecosystem',
      suggestions: [S.services, S.fabrication, S.golf, S.ecosystems],
      tip: 'The more specific your intake is about your current workflow and what is not working, the more useful the first conversation will be. Every request is reviewed personally before we respond.',
      onboardingNote: 'After submitting, you will receive a confirmation email. HPS reviews every request within one business day and responds with a proposed conversation time, not a sales packet.',
    }
  if (pathname === '/thank-you')
    return {
      label: 'Continue Exploring',
      suggestions: [S.services, S.fabrication, S.platforms, S.ecosystems],
      tip: 'While your request is being reviewed, exploring the ecosystem gives you context for the first conversation. The more familiar you are with the connected systems, the more productive the discussion.',
      onboardingNote: 'What happens next: your request is reviewed personally, a time is proposed, and the consultation is where we map which HPS systems fit your operation and in what order to activate them.',
    }

  if (pathname.startsWith('/services/'))
    return {
      label: 'Related Services',
      suggestions: [S.services, S.fabrication, S.golf, S.consultation],
      tip: 'Service work is designed to connect into a broader operational layer. The more context you bring about your existing platforms and tools, the cleaner the integration.',
    }
  if (pathname.startsWith('/platforms/')) {
    const slug = pathname.slice('/platforms/'.length)
    const thisPlatform = getPlatform(slug)
    const platformStacks = getStacksForPlatform(slug)
    let stackInfo: RouteContext['stackInfo'] = undefined
    if (thisPlatform && platformStacks.length > 0) {
      const primaryStack = platformStacks[0]
      const stackPlatformItems: SuggestionItem[] = primaryStack.platforms
        .filter(s => s !== slug)
        .map(s => getPlatform(s))
        .filter((p): p is NonNullable<typeof p> => p !== undefined)
        .slice(0, 4)
        .map(p => ({
          label: p.name,
          desc: p.tagline,
          href: `/platforms/${p.slug}`,
          accent: p.accentColor,
        }))
      stackInfo = {
        stackName: primaryStack.name,
        accentColor: primaryStack.accentColor,
        platforms: stackPlatformItems,
      }
    }
    return {
      label: thisPlatform?.name ?? 'Platform Ecosystem',
      suggestions: [S.accessibilityExt, S.clientPortalLogin, S.fbeatsLive, S.consultation],
      tip: 'Platform detail pages describe capabilities, not operational context. Your consultation is where we map which combination of platforms serves your specific operation — and in what order to activate them.',
      onboardingNote: 'Platform access begins with a consultation — we scope what you need, configure the platform for your workflow, and onboard your team before handing over the keys.',
      stackInfo,
    }
  }
  if (pathname.startsWith('/hosting/'))
    return {
      label: 'Hosting Plans',
      suggestions: [S.uptime, S.clientPortal, S.aiSystems, S.consultation],
      onboardingNote: 'Hosting migrations begin with a site audit. We stage, test, and verify before any DNS changes — typically a 3–5 day process from kickoff to production cutover.',
    }
  if (pathname.startsWith('/ecosystem/'))
    return {
      label: 'Industry Ecosystems',
      suggestions: [S.services, S.fabrication, S.golf, S.consultation],
      tip: 'Industry pathways show how HPS systems combine for a specific operational context. They reflect how the platforms actually get used together — not just what each one does independently.',
      benefits: [S.ecosystems, S.consultation],
    }

  return { label: 'HPS Ecosystem', suggestions: [S.services, S.fabrication, S.ecosystems, S.consultation] }
}

// ── Helpers ───────────────────────────────────────────────────────────────────

const MESSAGE_HELPERS = [
  'Tell us what you are trying to build.',
  'Share what is not working today.',
  'Mention any systems you already use.',
  'Describe your timeline or any upcoming deadlines.',
]

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  return isMobile
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return reduced
}

// ── Component ─────────────────────────────────────────────────────────────────

const PANEL_W = 340
const PANEL_ID = 'hps-ecosystem-panel'

export default function EcosystemSidePanel() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<TabId>('suggestions')
  const panelRef = useRef<HTMLDivElement>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const isMobile = useIsMobile()
  const reducedMotion = usePrefersReducedMotion()

  const { label: contextLabel, suggestions, tip, benefits, onboardingNote, stackInfo } = getRouteContext(pathname)

  const transition = reducedMotion ? 'none' : 'right 0.35s cubic-bezier(0.16,1,0.3,1)'
  const triggerRight = open ? PANEL_W : 0

  // Close on route change
  useEffect(() => { setOpen(false) }, [pathname])

  // Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape' && open) setOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  // Click outside
  useEffect(() => {
    if (!open) return
    const onOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onOutside)
    return () => document.removeEventListener('mousedown', onOutside)
  }, [open])

  // Focus + scroll reset on open
  useEffect(() => {
    if (!open) return
    if (panelRef.current) panelRef.current.scrollTop = 0
    // Defer to allow the slide-in to begin before focus shift
    const t = setTimeout(() => closeBtnRef.current?.focus(), reducedMotion ? 0 : 80)
    return () => clearTimeout(t)
  }, [open, reducedMotion])

  function openTab(tab: TabId) {
    setActiveTab(tab)
    setOpen(true)
  }

  return (
    <>
      {/* Mobile backdrop */}
      {open && isMobile && (
        <div
          onClick={() => setOpen(false)}
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(12,20,32,0.15)',
            zIndex: 58,
          }}
        />
      )}

      {/* Tab triggers — fixed to right viewport edge */}
      <div
        role="group"
        aria-label="HPS ecosystem panel controls"
        style={{
          position: 'fixed',
          right: `${triggerRight}px`,
          ...(isMobile
            ? { bottom: '5rem' }
            : { top: '50%', transform: 'translateY(-50%)' }),
          display: 'flex',
          flexDirection: 'column',
          gap: '2px',
          zIndex: 35,
          transition,
        }}
      >
        {(['suggestions', 'message'] as TabId[]).map(tab => {
          const isActive = open && activeTab === tab
          return (
            <button
              key={tab}
              type="button"
              onClick={() => (isActive ? setOpen(false) : openTab(tab))}
              aria-expanded={isActive}
              aria-controls={PANEL_ID}
              aria-label={
                isActive
                  ? `Close ${tab === 'suggestions' ? 'ecosystem suggestions' : 'help and guidance'} panel`
                  : `Open ${tab === 'suggestions' ? 'ecosystem suggestions' : 'help and guidance'} panel`
              }
              style={{
                writingMode: 'vertical-rl',
                textOrientation: 'mixed',
                transform: 'rotate(180deg)',
                padding: '0.875rem 0.5rem',
                background: isActive ? 'var(--color-hps-green)' : 'var(--color-hps-parchment)',
                color: isActive ? 'var(--color-hps-ivory)' : 'var(--color-hps-smoke)',
                border: '1px solid rgba(200,180,154,0.55)',
                borderRight: 'none',
                borderRadius: '2px 0 0 2px',
                cursor: 'pointer',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.55rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                transition: 'background 0.2s, color 0.2s',
                userSelect: 'none',
              }}
              onMouseEnter={e => {
                if (!isActive) {
                  e.currentTarget.style.background = 'var(--color-hps-cream)'
                  e.currentTarget.style.color = 'var(--color-hps-ink)'
                }
              }}
              onMouseLeave={e => {
                if (!isActive) {
                  e.currentTarget.style.background = 'var(--color-hps-parchment)'
                  e.currentTarget.style.color = 'var(--color-hps-smoke)'
                }
              }}
            >
              {tab === 'suggestions' ? 'Suggestions' : 'Message'}
            </button>
          )
        })}
      </div>

      {/* Off-canvas panel */}
      <div
        ref={panelRef}
        id={PANEL_ID}
        role="complementary"
        aria-label="HPS ecosystem guidance"
        tabIndex={-1}
        style={{
          position: 'fixed',
          top: 0,
          right: open ? 0 : `${-(PANEL_W + 4)}px`,
          width: `${PANEL_W}px`,
          maxWidth: 'calc(100vw - 2.5rem)',
          height: '100dvh',
          overflowY: 'auto',
          overflowX: 'hidden',
          background: 'var(--color-hps-cream)',
          borderLeft: '1px solid rgba(200,180,154,0.45)',
          boxShadow: open ? '-6px 0 28px rgba(12,20,32,0.08)' : 'none',
          zIndex: 60,
          transition,
          display: 'flex',
          flexDirection: 'column',
          outline: 'none',
        }}
      >
        {/* Sticky header */}
        <div
          style={{
            padding: '1.125rem 1.25rem 0.875rem',
            borderBottom: '1px solid rgba(200,180,154,0.35)',
            background: 'var(--color-hps-parchment)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
            position: 'sticky',
            top: 0,
            zIndex: 1,
          }}
        >
          {/* In-panel tab switcher */}
          <div style={{ display: 'flex', gap: '0.25rem' }} role="tablist" aria-label="Panel tabs">
            {(['suggestions', 'message'] as TabId[]).map(tab => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.58rem',
                  letterSpacing: '0.13em',
                  textTransform: 'uppercase',
                  padding: '0.375rem 0.75rem',
                  background: activeTab === tab ? 'var(--color-hps-green)' : 'transparent',
                  color: activeTab === tab ? 'var(--color-hps-ivory)' : 'var(--color-hps-smoke)',
                  border: 'none',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  transition: 'background 0.15s, color 0.15s',
                }}
              >
                {tab === 'suggestions' ? 'Suggestions' : 'Message'}
              </button>
            ))}
          </div>

          {/* Close button — receives focus on open */}
          <button
            ref={closeBtnRef}
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close ecosystem panel"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-hps-smoke)',
              fontSize: '1.35rem',
              lineHeight: 1,
              padding: '0.125rem 0.375rem',
              borderRadius: '2px',
              opacity: 0.45,
              transition: 'opacity 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '0.45')}
            onFocus={e => (e.currentTarget.style.opacity = '1')}
            onBlur={e => (e.currentTarget.style.opacity = '0.45')}
          >
            ×
          </button>
        </div>

        {/* Panel body */}
        <div style={{ padding: '1.5rem 1.25rem', flex: 1 }}>

          {/* ─ Suggestions ─ */}
          {activeTab === 'suggestions' && (
            <div>
              {contextLabel && (
                <div style={{ marginBottom: '1.25rem' }}>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-hps-green)', marginBottom: '0.3rem' }}>
                    Context
                  </p>
                  <p
                    id="hps-ecosystem-panel-heading"
                    style={{ fontFamily: 'var(--font-display)', fontSize: '0.9375rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}
                  >
                    {contextLabel}
                  </p>
                </div>
              )}

              {/* Live systems quick-access */}
              <div
                style={{
                  display: 'flex',
                  gap: '0.5rem',
                  marginBottom: '1.25rem',
                  padding: '0.75rem',
                  background: 'var(--color-hps-parchment)',
                  borderRadius: '2px',
                  border: '1px solid rgba(200,180,154,0.40)',
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-hps-smoke)', opacity: 0.60, marginBottom: '0.5rem' }}>
                    Live systems
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                    {LIVE_SYSTEMS.map(sys => (
                      <a
                        key={sys.href}
                        href={sys.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '0.5rem',
                          textDecoration: 'none',
                          padding: '0.375rem 0.5rem',
                          background: 'var(--color-hps-cream)',
                          borderRadius: '2px',
                          borderLeft: `2px solid ${sys.accent}`,
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                          <span
                            style={{
                              display: 'inline-block',
                              width: '5px',
                              height: '5px',
                              borderRadius: '50%',
                              background: sys.accent,
                              flexShrink: 0,
                            }}
                            aria-hidden="true"
                          />
                          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'var(--color-hps-ink)', fontWeight: 500, lineHeight: 1.2 }}>
                            {sys.label}
                          </p>
                        </div>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', color: sys.accent, flexShrink: 0 }}>
                          {sys.cta}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stack siblings — surfaces when browsing a platform detail page */}
              {stackInfo && stackInfo.platforms.length > 0 && (
                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', marginBottom: '0.5rem' }}>
                    <span
                      style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', background: stackInfo.accentColor, flexShrink: 0 }}
                      aria-hidden="true"
                    />
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-hps-smoke)', opacity: 0.65 }}>
                      {stackInfo.stackName}
                    </p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                    {stackInfo.platforms.map(p => (
                      <Link
                        key={p.href}
                        to={p.href}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.5rem 0.75rem',
                          background: 'var(--color-hps-parchment)',
                          borderRadius: '2px',
                          borderLeft: `2px solid ${p.accent ?? stackInfo.accentColor}`,
                          textDecoration: 'none',
                          transition: 'box-shadow 0.15s',
                        }}
                        onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 2px 8px rgba(12,20,32,0.06)')}
                        onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none')}
                      >
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}>
                          {p.label}
                        </p>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', color: p.accent ?? stackInfo.accentColor, flexShrink: 0 }}>
                          →
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {tip && (
                <div
                  style={{
                    padding: '0.875rem 1rem',
                    background: 'rgba(22,101,52,0.05)',
                    borderLeft: '2px solid var(--color-hps-green)',
                    borderRadius: '2px',
                    marginBottom: '1.25rem',
                  }}
                >
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.52rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-hps-green)', marginBottom: '0.375rem' }}>
                    Operational note
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'var(--color-hps-smoke)', lineHeight: 1.65 }}>
                    {tip}
                  </p>
                </div>
              )}

              {onboardingNote && (
                <div
                  style={{
                    padding: '0.875rem 1rem',
                    background: 'rgba(20,184,166,0.04)',
                    borderLeft: '2px solid var(--color-hps-teal)',
                    borderRadius: '2px',
                    marginBottom: '1.25rem',
                  }}
                >
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.52rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-hps-teal)', marginBottom: '0.375rem' }}>
                    Onboarding path
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'var(--color-hps-smoke)', lineHeight: 1.65 }}>
                    {onboardingNote}
                  </p>
                </div>
              )}

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {suggestions.map(s => (
                  <div
                    key={s.href}
                    style={{
                      padding: '0.875rem 1rem',
                      background: 'var(--color-hps-parchment)',
                      borderRadius: '2px',
                      borderLeft: `2px solid ${s.accent ?? 'var(--color-hps-green)'}`,
                      transition: 'box-shadow 0.15s',
                    }}
                    onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 10px rgba(12,20,32,0.06)')}
                    onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.boxShadow = 'none')}
                  >
                    {s.external ? (
                      <a href={s.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
                        <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.9375rem', color: 'var(--color-hps-ink)', marginBottom: '0.25rem', lineHeight: 1.2 }}>
                          {s.label} <span style={{ fontSize: '0.7rem', opacity: 0.55 }}>↗</span>
                        </p>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'var(--color-hps-smoke)', lineHeight: 1.55 }}>
                          {s.desc}
                        </p>
                      </a>
                    ) : (
                      <Link to={s.href} style={{ textDecoration: 'none', display: 'block' }}>
                        <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.9375rem', color: 'var(--color-hps-ink)', marginBottom: '0.25rem', lineHeight: 1.2 }}>
                          {s.label} <span style={{ fontSize: '0.7rem', opacity: 0.45 }}>→</span>
                        </p>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'var(--color-hps-smoke)', lineHeight: 1.55 }}>
                          {s.desc}
                        </p>
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {benefits && benefits.length > 0 && (
                <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid rgba(200,180,154,0.35)' }}>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.52rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-hps-smoke)', opacity: 0.60, marginBottom: '0.625rem' }}>
                    You may also benefit from
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {benefits.map(s => (
                      <div
                        key={`benefit-${s.href}`}
                        style={{
                          padding: '0.75rem 0.875rem',
                          background: 'var(--color-hps-parchment)',
                          borderRadius: '2px',
                          borderLeft: `2px solid ${s.accent ?? 'var(--color-hps-green)'}`,
                          transition: 'box-shadow 0.15s',
                        }}
                        onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 8px rgba(12,20,32,0.05)')}
                        onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.boxShadow = 'none')}
                      >
                        {s.external ? (
                          <a href={s.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
                            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'var(--color-hps-ink)', lineHeight: 1.3 }}>
                              {s.label} <span style={{ fontSize: '0.65rem', opacity: 0.50 }}>↗</span>
                            </p>
                          </a>
                        ) : (
                          <Link to={s.href} style={{ textDecoration: 'none', display: 'block' }}>
                            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'var(--color-hps-ink)', lineHeight: 1.3 }}>
                              {s.label} <span style={{ fontSize: '0.65rem', opacity: 0.40 }}>→</span>
                            </p>
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(200,180,154,0.35)' }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-hps-smoke)', opacity: 0.60, marginBottom: '0.625rem' }}>
                  Full ecosystem
                </p>
                <Link
                  to="/ecosystems"
                  style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--color-hps-green)', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-hps-green-dark)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-hps-green)')}
                >
                  Explore how HPS connects →
                </Link>
              </div>
            </div>
          )}

          {/* ─ Message ─ */}
          {activeTab === 'message' && (
            <div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', color: 'var(--color-hps-ink)', lineHeight: 1.3, marginBottom: '0.875rem' }}>
                We review every request personally.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--color-hps-smoke)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                The consultation is the beginning of an operational relationship — not a sales funnel. Everything you share helps us prepare before we connect, so your first conversation is useful, not introductory.
              </p>

              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-hps-smoke)', opacity: 0.65, marginBottom: '0.875rem' }}>
                  What helps us most
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {MESSAGE_HELPERS.map((h, i) => (
                    <div
                      key={i}
                      style={{
                        padding: '0.75rem 1rem',
                        background: 'var(--color-hps-parchment)',
                        borderRadius: '2px',
                        borderLeft: '2px solid var(--color-hps-green)',
                      }}
                    >
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--color-hps-smoke)', lineHeight: 1.55 }}>
                        {h}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  padding: '1rem',
                  background: 'var(--color-hps-parchment)',
                  borderRadius: '2px',
                  border: '1px solid rgba(200,180,154,0.40)',
                  marginBottom: '1.25rem',
                }}
              >
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-hps-green)', marginBottom: '0.5rem' }}>
                  Response time
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--color-hps-smoke)', lineHeight: 1.6 }}>
                  We respond within one business day. Leesburg, Florida.{' '}
                  <a href="tel:+13522907744" style={{ color: 'var(--color-hps-ink)', textDecoration: 'none' }}>352-290-7744</a>.
                </p>
              </div>

              <Link
                to="/contact"
                style={{
                  display: 'block',
                  padding: '0.875rem 1.25rem',
                  background: 'var(--color-hps-green)',
                  color: 'var(--color-hps-ivory)',
                  textDecoration: 'none',
                  borderRadius: '2px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-hps-green-dark)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-hps-green)')}
              >
                Start a Free Consultation →
              </Link>
            </div>
          )}

        </div>
      </div>
    </>
  )
}
