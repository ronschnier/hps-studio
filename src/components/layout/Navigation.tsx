import { useState, useEffect, useRef } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'

const primaryNav = [
  { label: 'Home',       href: '/' },
  { label: 'Ecosystems', href: '/ecosystems' },
  { label: 'Services',   href: '/services' },
  { label: 'Platforms',  href: '/platforms' },
  { label: 'Media',      href: '/media' },
  { label: 'About',      href: '/about' },
]

const moreNav = [
  { label: 'Fabrication Lab',   href: '/fabrication' },
  { label: 'Hosting',           href: '/hosting' },
  { label: 'Hospitality & QR',  href: '/hospitality' },
  { label: 'HPS Golf',          href: '/golf' },
  { label: 'Accessibility',     href: '/accessibility' },
  { label: 'AI Systems',        href: '/ai-systems' },
  { label: 'HPS Shalom',        href: '/ecosystems/hps-shalom' },
]

const freeToolsNav = [
  { label: 'HPS SEO Tools',        href: '/platforms/hps-seo-tools' },
  { label: 'HPS Ecommerce Tools',  href: '/platforms/hps-ecommerce-tools' },
]

const clientSystemsNav = [
  { label: 'Client Portal',         href: '/client-portal' },
  { label: 'Support & Project Access', href: '/support' },
]

const allMobileNav = [
  { label: 'Home',                    href: '/' },
  { label: 'Ecosystems',              href: '/ecosystems' },
  { label: 'Services',                href: '/services' },
  { label: 'Platforms',               href: '/platforms' },
  { label: 'Media',                   href: '/media' },
  { label: 'Fabrication Lab',         href: '/fabrication' },
  { label: 'Hosting',                 href: '/hosting' },
  { label: 'Hospitality & QR',        href: '/hospitality' },
  { label: 'HPS Golf',                href: '/golf' },
  { label: 'Accessibility',           href: '/accessibility' },
  { label: 'AI Systems',              href: '/ai-systems' },
  { label: 'HPS Shalom',              href: '/ecosystems/hps-shalom' },
  { label: 'HPS SEO Tools',           href: '/platforms/hps-seo-tools' },
  { label: 'HPS Ecommerce Tools',     href: '/platforms/hps-ecommerce-tools' },
  { label: 'Client Portal',           href: '/client-portal' },
  { label: 'About',                   href: '/about' },
  { label: 'Contact',                 href: '/contact' },
]

// Token aliases — light text on hero, dark text on scrolled cream nav
const T = {
  linkIdle:    (active: boolean) => active ? 'rgba(74,63,52,0.85)'   : 'rgba(244,234,212,0.80)',
  linkHover:   (active: boolean) => active ? '#0c1420'               : '#ffffff',
  linkCurrent: (active: boolean) => active ? '#478c5c'               : '#e8b84b',
}

export default function Navigation() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [moreOpen, setMoreOpen]   = useState(false)
  const moreRef        = useRef<HTMLDivElement>(null)
  const moreButtonRef  = useRef<HTMLButtonElement>(null)
  const moreDropRef    = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()

  // Cream-glass state: always active on interior pages, scroll-driven on home
  const isHome   = pathname === '/'
  const navActive = !isHome || scrolled

  const moreIsActive = moreNav.some(item => item.href === pathname)

  useEffect(() => {
    setMenuOpen(false)
    setMoreOpen(false)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Focus trap for mobile menu dialog
  useEffect(() => {
    if (!menuOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setMenuOpen(false); return }
      if (e.key !== 'Tab') return
      const dialog = document.querySelector('[aria-label="Navigation menu"]') as HTMLElement | null
      if (!dialog) return
      const focusable = Array.from(
        dialog.querySelectorAll('a[href], button:not([disabled])')
      ) as HTMLElement[]
      if (!focusable.length) return
      const first = focusable[0]
      const last  = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus()
      }
    }
    // Focus close button on open
    const dialog = document.querySelector('[aria-label="Navigation menu"]') as HTMLElement | null
    const closeBtn = dialog?.querySelector('button[aria-label="Close menu"]') as HTMLElement | null
    setTimeout(() => closeBtn?.focus(), 40)
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  return (
    <>
      {/* ── Header ──────────────────────────────────────────── */}
      <header
        className={`hps-top-nav fixed top-0 left-0 right-0 z-50 nav-base ${navActive ? 'nav-active' : ''}`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-[70px] gap-8">

            {/* ── Logo ──────────────────────────────────────── */}
            <Link
              to="/"
              className="nav-logo-group shrink-0 flex items-center"
              aria-label="Happy Path Studios — home"
            >
              <img
                src="/images/hps-logo-straight.svg"
                alt="Happy Path Studios"
                className="nav-logo-img h-7 lg:h-8 w-auto"
              />

              {/* Geo-coordinate tooltip — reveals after 1.4s hover */}
              <span
                className="nav-geo-tooltip absolute top-full left-0 mt-3 px-3 py-1.5 rounded whitespace-nowrap z-50"
                style={{
                  background: 'rgba(16,32,64,0.88)',
                  border: '1px solid rgba(30,53,80,0.5)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.14em',
                  color: 'rgba(232,184,75,0.85)',
                  backdropFilter: 'blur(8px)',
                }}
                aria-hidden="true"
              >
                28.81°&thinsp;N &nbsp;·&nbsp; 81.88°&thinsp;W &nbsp;·&nbsp; Leesburg, FL
              </span>
            </Link>

            {/* ── Desktop nav ───────────────────────────────── */}
            <nav
              aria-label="Main navigation"
              className="hidden lg:flex items-center gap-7 flex-1"
            >
              {primaryNav.map(item => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  end={item.href === '/'}
                  style={({ isActive }) => ({
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    fontWeight: isActive ? 500 : 400,
                    color: isActive
                      ? T.linkCurrent(navActive)
                      : T.linkIdle(navActive),
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    transition: 'color 0.2s ease',
                  })}
                  onMouseEnter={e => {
                    if (!(e.currentTarget.getAttribute('aria-current'))) {
                      e.currentTarget.style.color = T.linkHover(navActive)
                    }
                  }}
                  onMouseLeave={e => {
                    if (!(e.currentTarget.getAttribute('aria-current'))) {
                      e.currentTarget.style.color = T.linkIdle(navActive)
                    }
                  }}
                >
                  {item.label}
                </NavLink>
              ))}

              {/* ── "More" dropdown ──────────────────────── */}
              <div className="relative" ref={moreRef}>
                <button
                  type="button"
                  ref={moreButtonRef}
                  onClick={() => setMoreOpen(v => !v)}
                  aria-expanded={moreOpen}
                  aria-haspopup="true"
                  className="flex items-center gap-1.5"
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') { setMoreOpen(false) }
                    else if ((e.key === 'ArrowDown') && !moreOpen) {
                      e.preventDefault()
                      setMoreOpen(true)
                      requestAnimationFrame(() => {
                        const first = moreDropRef.current?.querySelector('[role="menuitem"]') as HTMLElement | null
                        first?.focus()
                      })
                    }
                  }}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    fontWeight: moreIsActive ? 500 : 400,
                    color: moreIsActive
                      ? T.linkCurrent(navActive)
                      : T.linkIdle(navActive),
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    if (!moreIsActive) e.currentTarget.style.color = T.linkHover(navActive)
                  }}
                  onMouseLeave={e => {
                    if (!moreIsActive) e.currentTarget.style.color = T.linkIdle(navActive)
                  }}
                >
                  More
                  <svg
                    width="9" height="9" viewBox="0 0 9 9" fill="none"
                    aria-hidden="true"
                    style={{
                      transition: 'transform 0.22s ease',
                      transform: moreOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    <path d="M1.5 3L4.5 6L7.5 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                {/* Dropdown panel */}
                {moreOpen && (
                  <div
                    ref={moreDropRef}
                    className="absolute top-full left-0 mt-2.5 w-56 z-50 overflow-hidden"
                    style={{
                      background: 'rgba(248,242,232,0.97)',
                      border: '1px solid rgba(200,180,154,0.45)',
                      borderRadius: '4px',
                      boxShadow: '0 12px 32px -6px rgba(12,20,32,0.14), 0 2px 8px -2px rgba(12,20,32,0.08)',
                      backdropFilter: 'blur(16px)',
                    }}
                    role="menu"
                    onKeyDown={(e) => {
                      if (e.key === 'Escape') {
                        setMoreOpen(false)
                        moreButtonRef.current?.focus()
                        return
                      }
                      if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return
                      e.preventDefault()
                      const items = Array.from(
                        moreDropRef.current?.querySelectorAll('[role="menuitem"]') ?? []
                      ) as HTMLElement[]
                      const idx = items.indexOf(document.activeElement as HTMLElement)
                      if (e.key === 'ArrowDown') items[(idx + 1) % items.length]?.focus()
                      else items[idx <= 0 ? items.length - 1 : idx - 1]?.focus()
                    }}
                  >
                    {moreNav.map((item) => (
                      <NavLink
                        key={item.href}
                        to={item.href}
                        role="menuitem"
                        style={({ isActive }) => ({
                          display: 'block',
                          padding: '0.625rem 1rem',
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.8125rem',
                          fontWeight: isActive ? 500 : 400,
                          color: isActive ? 'var(--color-hps-green)' : 'var(--color-hps-smoke)',
                          textDecoration: 'none',
                          borderBottom: '1px solid rgba(200,180,154,0.28)',
                          background: isActive ? 'rgba(71,140,92,0.07)' : 'transparent',
                          transition: 'background 0.15s ease, color 0.15s ease',
                        })}
                        onMouseEnter={e => {
                          e.currentTarget.style.background = 'rgba(200,180,154,0.20)'
                          e.currentTarget.style.color = 'var(--color-hps-ink)'
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.background = pathname === item.href ? 'rgba(71,140,92,0.07)' : 'transparent'
                          e.currentTarget.style.color = pathname === item.href ? 'var(--color-hps-green)' : 'var(--color-hps-smoke)'
                        }}
                      >
                        {item.label}
                      </NavLink>
                    ))}
                    {/* Free Tools group */}
                    <div
                      style={{
                        padding: '0.5rem 1rem 0.3rem',
                        borderBottom: '1px solid rgba(200,180,154,0.28)',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.52rem',
                          letterSpacing: '0.18em',
                          textTransform: 'uppercase',
                          color: 'var(--color-hps-gold-rich)',
                          opacity: 0.75,
                        }}
                      >
                        Free Tools
                      </span>
                    </div>
                    {freeToolsNav.map((item) => (
                      <NavLink
                        key={item.href}
                        to={item.href}
                        role="menuitem"
                        style={({ isActive }) => ({
                          display: 'block',
                          padding: '0.5rem 1rem 0.5rem 1.25rem',
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.8125rem',
                          fontWeight: isActive ? 500 : 400,
                          color: isActive ? 'var(--color-hps-green)' : 'var(--color-hps-smoke)',
                          textDecoration: 'none',
                          borderBottom: 'none',
                          background: isActive ? 'rgba(71,140,92,0.07)' : 'transparent',
                          transition: 'background 0.15s ease, color 0.15s ease',
                        })}
                        onMouseEnter={e => {
                          e.currentTarget.style.background = 'rgba(200,180,154,0.20)'
                          e.currentTarget.style.color = 'var(--color-hps-ink)'
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.background = pathname === item.href ? 'rgba(71,140,92,0.07)' : 'transparent'
                          e.currentTarget.style.color = pathname === item.href ? 'var(--color-hps-green)' : 'var(--color-hps-smoke)'
                        }}
                      >
                        {item.label}
                      </NavLink>
                    ))}
                    {/* Client Systems group */}
                    <div
                      style={{
                        padding: '0.5rem 1rem 0.3rem',
                        borderTop: '1px solid rgba(200,180,154,0.28)',
                        borderBottom: '1px solid rgba(200,180,154,0.28)',
                        marginTop: '0.25rem',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.52rem',
                          letterSpacing: '0.18em',
                          textTransform: 'uppercase',
                          color: 'var(--color-hps-ink)',
                          opacity: 0.45,
                        }}
                      >
                        Client Systems
                      </span>
                    </div>
                    {clientSystemsNav.map((item) => (
                      <NavLink
                        key={item.label}
                        to={item.href}
                        role="menuitem"
                        style={({ isActive }) => ({
                          display: 'block',
                          padding: '0.5rem 1rem 0.5rem 1.25rem',
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.8125rem',
                          fontWeight: isActive ? 500 : 400,
                          color: isActive ? 'var(--color-hps-green)' : 'var(--color-hps-smoke)',
                          textDecoration: 'none',
                          borderBottom: 'none',
                          background: isActive ? 'rgba(71,140,92,0.07)' : 'transparent',
                          transition: 'background 0.15s ease, color 0.15s ease',
                        })}
                        onMouseEnter={e => {
                          e.currentTarget.style.background = 'rgba(200,180,154,0.20)'
                          e.currentTarget.style.color = 'var(--color-hps-ink)'
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.background = pathname === item.href ? 'rgba(71,140,92,0.07)' : 'transparent'
                          e.currentTarget.style.color = pathname === item.href ? 'var(--color-hps-green)' : 'var(--color-hps-smoke)'
                        }}
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* ── CTA + login + hamburger ───────────────────── */}
            <div className="flex items-center gap-3 shrink-0">

              {/* Client Login — restrained, secondary to CTA */}
              <a
                href="https://happypathstudios.com/crm/login"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center justify-center font-mono rounded-sm whitespace-nowrap transition-all duration-200"
                style={{
                  fontSize: '0.7rem',
                  letterSpacing: '0.1em',
                  padding: '0.4rem 0.85rem',
                  ...(navActive
                    ? {
                        background: 'transparent',
                        color: 'var(--color-hps-smoke)',
                        border: '1px solid rgba(140,120,90,0.35)',
                      }
                    : {
                        background: 'transparent',
                        color: 'rgba(244,234,212,0.55)',
                        border: '1px solid rgba(244,234,212,0.18)',
                      }
                  ),
                }}
                onMouseEnter={e => {
                  if (navActive) {
                    e.currentTarget.style.color = 'var(--color-hps-ink)'
                    e.currentTarget.style.borderColor = 'rgba(140,120,90,0.65)'
                  } else {
                    e.currentTarget.style.color = 'rgba(244,234,212,0.85)'
                    e.currentTarget.style.borderColor = 'rgba(244,234,212,0.38)'
                  }
                }}
                onMouseLeave={e => {
                  if (navActive) {
                    e.currentTarget.style.color = 'var(--color-hps-smoke)'
                    e.currentTarget.style.borderColor = 'rgba(140,120,90,0.35)'
                  } else {
                    e.currentTarget.style.color = 'rgba(244,234,212,0.55)'
                    e.currentTarget.style.borderColor = 'rgba(244,234,212,0.18)'
                  }
                }}
              >
                Client Login
              </a>

              {/* CTA — ghost over hero, solid on cream */}
              <Link
                to="/contact"
                className="hidden lg:inline-flex items-center justify-center font-body font-medium rounded-sm whitespace-nowrap transition-all duration-200"
                style={{
                  fontSize: '0.8125rem',
                  padding: '0.45rem 1.1rem',
                  ...(navActive
                    ? {
                        background: 'var(--color-hps-green)',
                        color: '#ffffff',
                        border: '1px solid transparent',
                      }
                    : {
                        background: 'transparent',
                        color: 'rgba(244,234,212,0.90)',
                        border: '1px solid rgba(244,234,212,0.30)',
                      }
                  ),
                }}
                onMouseEnter={e => {
                  if (navActive) {
                    e.currentTarget.style.background = 'var(--color-hps-green-dark)'
                  } else {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.10)'
                    e.currentTarget.style.borderColor = 'rgba(244,234,212,0.55)'
                  }
                }}
                onMouseLeave={e => {
                  if (navActive) {
                    e.currentTarget.style.background = 'var(--color-hps-green)'
                  } else {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.borderColor = 'rgba(244,234,212,0.30)'
                  }
                }}
              >
                Free Consultation
              </Link>

              {/* Hamburger */}
              <button
                type="button"
                className={`lg:hidden flex flex-col justify-center gap-[6px] w-8 h-8 p-1 ${menuOpen ? 'ham-open' : ''}`}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(v => !v)}
              >
                <span
                  className="ham-bar ham-top"
                  style={{ background: navActive ? 'rgba(74,63,52,0.75)' : 'rgba(244,234,212,0.85)' }}
                />
                <span
                  className="ham-bar ham-mid"
                  style={{
                    width: '75%',
                    background: navActive ? 'rgba(74,63,52,0.75)' : 'rgba(244,234,212,0.85)',
                  }}
                />
                <span
                  className="ham-bar ham-bot"
                  style={{ background: navActive ? 'rgba(74,63,52,0.75)' : 'rgba(244,234,212,0.85)' }}
                />
              </button>

            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile overlay ──────────────────────────────────── */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col lg:hidden"
          style={{
            background: 'rgba(248,242,232,0.98)',
            backdropFilter: 'blur(12px)',
          }}
          role="dialog"
          aria-label="Navigation menu"
          aria-modal="true"
        >
          {/* Logo watermark at top */}
          <div className="absolute top-5 left-6 right-6 flex items-center justify-between">
            <img
              src="/images/hps-logo-straight.svg"
              alt=""
              aria-hidden="true"
              className="nav-logo-img h-7 w-auto opacity-35"
            />
            <button
              type="button"
              className="p-2 flex flex-col justify-center gap-[6px] w-8 h-8 ham-open"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <span className="ham-bar ham-top" style={{ background: 'rgba(74,63,52,0.65)' }}/>
              <span className="ham-bar ham-mid opacity-0" style={{ background: 'rgba(74,63,52,0.65)' }}/>
              <span className="ham-bar ham-bot" style={{ background: 'rgba(74,63,52,0.65)' }}/>
            </button>
          </div>

          {/* Nav links */}
          <nav
            className="flex flex-col px-8 pt-24 pb-6 overflow-y-auto flex-1"
            aria-label="Mobile navigation"
          >
            {allMobileNav.map((item, i) => (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === '/'}
                onClick={() => setMenuOpen(false)}
                className="py-4 border-b"
                style={({ isActive }) => ({
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.375rem, 4vw, 1.75rem)',
                  fontWeight: isActive ? 500 : 400,
                  color: isActive ? 'var(--color-hps-green)' : 'var(--color-hps-ink)',
                  textDecoration: 'none',
                  borderColor: 'rgba(200,180,154,0.35)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                  animationDelay: `${i * 30}ms`,
                })}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile CTA block */}
          <div className="px-8 pb-8 flex flex-col gap-3 border-t" style={{ borderColor: 'rgba(200,180,154,0.35)' }}>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn-primary justify-center mt-6"
              style={{ fontSize: '1rem', padding: '0.85rem 1.5rem' }}
            >
              Free Consultation
            </Link>
            <a
              href="https://happypathstudios.com/crm/login"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center font-mono tracking-wider transition-colors rounded-sm"
              style={{
                fontSize: '0.78rem',
                letterSpacing: '0.12em',
                color: 'var(--color-hps-smoke)',
                padding: '0.65rem 1rem',
                border: '1px solid rgba(140,120,90,0.30)',
              }}
            >
              Client Login
            </a>
            <a
              href="tel:+13522907744"
              className="block text-center font-mono tracking-wider transition-colors"
              style={{ fontSize: '0.8rem', letterSpacing: '0.16em', color: 'var(--color-hps-gold-rich)' }}
            >
              352-290-7744
            </a>
          </div>

          {/* Geographic watermark */}
          <p
            className="pb-5 text-center font-mono"
            style={{ fontSize: '0.55rem', letterSpacing: '0.24em', color: 'rgba(74,63,52,0.35)' }}
            aria-hidden="true"
          >
            HAPPY PATH STUDIOS &nbsp;·&nbsp; LEESBURG, FLORIDA
          </p>
        </div>
      )}
    </>
  )
}
