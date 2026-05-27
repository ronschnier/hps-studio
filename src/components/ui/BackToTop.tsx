import { useState, useEffect, useCallback } from 'react'

const SHOW_AFTER_PX = 400

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = useCallback(() => {
    if (reducedMotion) {
      window.scrollTo(0, 0)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [reducedMotion])

  const transition = reducedMotion ? 'none' : 'opacity 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.25s ease'

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      style={{
        position: 'fixed',
        bottom: 'calc(env(safe-area-inset-bottom, 0px) + 1.75rem)',
        right: '1.5rem',
        zIndex: 34,
        width: '2.5rem',
        height: '2.5rem',
        borderRadius: '50%',
        border: '1px solid rgba(200,180,154,0.45)',
        background: hovered
          ? 'var(--color-hps-gold)'
          : 'rgba(244,234,212,0.85)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        boxShadow: hovered
          ? '0 0 18px 4px rgba(232,184,75,0.30), 0 4px 16px rgba(12,20,32,0.14)'
          : '0 2px 10px rgba(12,20,32,0.10)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transform: visible
          ? hovered ? 'translateY(-2px)' : 'translateY(0)'
          : 'translateY(6px)',
        transition,
        outline: 'none',
      }}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          scrollToTop()
        }
      }}
    >
      {/* Focus ring */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: '-3px',
          borderRadius: '50%',
          border: '2px solid transparent',
          boxShadow: hovered ? `0 0 0 2px var(--color-hps-gold)` : 'none',
          transition: 'box-shadow 0.2s ease',
          pointerEvents: 'none',
        }}
      />

      {/* Arrow — shifts slightly up on hover */}
      <svg
        aria-hidden="true"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        style={{
          transform: hovered ? 'translateY(-1px)' : 'translateY(0)',
          transition: reducedMotion ? 'none' : 'transform 0.25s ease',
        }}
      >
        <path
          d="M7 11V3M7 3L3.5 6.5M7 3L10.5 6.5"
          stroke={hovered ? 'var(--color-hps-ink)' : 'var(--color-hps-smoke)'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}
