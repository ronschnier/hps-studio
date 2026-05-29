import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import BackgroundAtmosphere from '../components/decorative/BackgroundAtmosphere'
import { usePageMeta } from '../hooks/usePageMeta'

export default function NotFoundPage() {
  usePageMeta({
    title: 'Page Not Found | Happy Path Studios',
    description: 'The page you are looking for does not exist. Return to Happy Path Studios.',
  })

  // Prevent indexing of 404 responses
  useEffect(() => {
    let el = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null
    const prev = el?.content ?? ''
    if (!el) {
      el = document.createElement('meta')
      el.setAttribute('name', 'robots')
      document.head.appendChild(el)
    }
    el.content = 'noindex, nofollow'
    return () => {
      if (el) el.content = prev
    }
  }, [])

  const { pathname } = useLocation()

  return (
    <>
      <div style={{ position: 'relative', isolation: 'isolate' }}>
        <BackgroundAtmosphere mood="citrus" intensity="whisper" density="sparse" />

        <section
          className="pt-32 lg:pt-40 pb-24 lg:pb-32"
          style={{ background: 'var(--color-hps-cream)', minHeight: '70vh', display: 'flex', alignItems: 'center' }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
            <div className="max-w-xl">

              <div
                className="w-8 h-px mb-6"
                style={{ background: 'var(--color-hps-gold-rich)' }}
                aria-hidden="true"
              />

              <p
                className="font-mono uppercase mb-4"
                style={{ fontSize: '0.65rem', letterSpacing: '0.22em', color: 'var(--color-hps-gold-rich)' }}
              >
                Happy Path Studios · 404
              </p>

              <h1
                className="font-display mb-5"
                style={{
                  fontSize: 'clamp(3rem, 8vw, 5.5rem)',
                  color: 'var(--color-hps-ink)',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                }}
              >
                Page not<br />found.
              </h1>

              <p
                className="font-body leading-relaxed mb-3"
                style={{ fontSize: '1.0625rem', color: 'var(--color-hps-smoke)', maxWidth: '34rem' }}
              >
                The page you're looking for isn't here. It may have moved, the URL may be incorrect, or it may never have existed.
              </p>

              {pathname !== '/' && (
                <p
                  className="font-mono mb-8"
                  style={{ fontSize: '0.72rem', letterSpacing: '0.1em', color: 'var(--color-hps-smoke)', opacity: 0.55 }}
                  aria-label={`Requested path: ${pathname}`}
                >
                  {pathname}
                </p>
              )}

              <div className="flex flex-wrap gap-3 mt-8">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center font-body font-medium rounded-sm transition-all duration-200"
                  style={{
                    padding: '0.75rem 1.75rem',
                    background: 'var(--color-hps-green)',
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontSize: '0.9375rem',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  Return Home
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center font-body font-medium rounded-sm transition-all duration-200"
                  style={{
                    padding: '0.75rem 1.75rem',
                    background: 'transparent',
                    color: 'var(--color-hps-green)',
                    border: '1px solid rgba(71,140,92,0.35)',
                    textDecoration: 'none',
                    fontSize: '0.9375rem',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-hps-green)'; e.currentTarget.style.background = 'rgba(71,140,92,0.05)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(71,140,92,0.35)'; e.currentTarget.style.background = 'transparent' }}
                >
                  Contact Us
                </Link>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  )
}
