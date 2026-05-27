// ── Cinematic Transition System ───────────────────────────────────────────
//
// Environmental motion architecture for continuous operational flow.
// Designed around cinematic restraint: calm, intelligent, premium.
//
// Exports:
//   ScrollAtmosphere  — fixed ambient viewport layer, pure CSS drift
//   SectionBridge     — gradient dissolve + animated accent thread between sections
//   CinematicReveal   — directional entry reveal with optional light sweep
//   OperationalPulse  — subtle rhythmic grid pulse for technical sections
//
// All motion respects prefers-reduced-motion.
// No scroll event listeners — IntersectionObserver + CSS animations only.

import { useEffect, useRef, useState } from 'react'

// ── Reduced-motion detection ───────────────────────────────────────────────

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  )
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return reduced
}

// ── Keyframe injection ─────────────────────────────────────────────────────
// Single injection per session. Self-contained — no external CSS file needed.

const CINEMATIC_KEYFRAMES = `
/* Slow ambient blob drift — warm gold layer */
@keyframes cin-drift-a {
  0%   { transform: translate(0%,0%) scale(1);    opacity: 0.62; }
  45%  { transform: translate(4%,-3%) scale(1.06); opacity: 0.82; }
  100% { transform: translate(-3%,4%) scale(0.95); opacity: 0.55; }
}

/* Slow ambient blob drift — cool teal layer, opposite timing */
@keyframes cin-drift-b {
  0%   { transform: translate(0%,0%) scale(1);     opacity: 0.48; }
  55%  { transform: translate(-5%,3%) scale(1.08); opacity: 0.68; }
  100% { transform: translate(3%,-4%) scale(0.92); opacity: 0.40; }
}

/* Ambient haze breathing */
@keyframes cin-haze {
  0%   { opacity: 0.24; }
  50%  { opacity: 0.44; }
  100% { opacity: 0.22; }
}

/* SectionBridge accent thread — horizontal scan */
@keyframes cin-thread {
  0%   { background-position: -100% 0; }
  100% { background-position: 280% 0; }
}

/* CinematicReveal light sweep — one-shot on entry */
@keyframes cin-sweep {
  0%   { transform: translateX(-115%); opacity: 0; }
  15%  { opacity: 1; }
  85%  { opacity: 1; }
  100% { transform: translateX(115%); opacity: 0; }
}

/* OperationalPulse grid expand */
@keyframes cin-grid-pulse {
  0%   { opacity: 0.12; transform: scale(1); }
  50%  { opacity: 0.22; transform: scale(1.003); }
  100% { opacity: 0.10; transform: scale(1); }
}

/* OperationalPulse node glow */
@keyframes cin-node-glow {
  0%   { opacity: 0.20; r: 1.2; }
  50%  { opacity: 0.55; r: 2.0; }
  100% { opacity: 0.18; r: 1.2; }
}

/* Page-level enter */
@keyframes cin-page-enter {
  0%   { opacity: 0; transform: translateY(4px); }
  100% { opacity: 1; transform: translateY(0); }
}
`

let _keyframesInjected = false

function ensureKeyframes() {
  if (_keyframesInjected || typeof document === 'undefined') return
  const el = document.createElement('style')
  el.setAttribute('data-cinematic-system', '')
  el.textContent = CINEMATIC_KEYFRAMES
  document.head.appendChild(el)
  _keyframesInjected = true
}

// ── ScrollAtmosphere ───────────────────────────────────────────────────────
// Fixed full-viewport ambient layer.
// Three independently animated gradient blobs:
//   • Gold/warm — upper, drifts slowly, suggests studio light
//   • Teal/cool — lower-right, opposite timing, suggests operational depth
//   • Neutral haze — mid-left, just breathing, adds environmental warmth
//
// All opacities are below 8% — presence is felt, never consciously seen.
// Renders nothing when prefers-reduced-motion is active.

export function ScrollAtmosphere() {
  useEffect(ensureKeyframes, [])
  const reduced = useReducedMotion()

  if (reduced) return null

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        isolation: 'isolate',
      }}
    >
      {/* Gold warm glow — upper, drifts 20s */}
      <div
        style={{
          position: 'absolute',
          top: '-22%',
          left: '12%',
          width: '78%',
          height: '65%',
          background: 'radial-gradient(ellipse at center,rgba(232,184,75,0.060) 0%,transparent 65%)',
          animation: 'cin-drift-a 20s ease-in-out infinite alternate',
          transformOrigin: 'center',
          willChange: 'transform, opacity',
        }}
      />

      {/* Teal cool glow — lower-right, drifts 26s */}
      <div
        style={{
          position: 'absolute',
          bottom: '-18%',
          right: '3%',
          width: '62%',
          height: '58%',
          background: 'radial-gradient(ellipse at center,rgba(13,148,136,0.040) 0%,transparent 62%)',
          animation: 'cin-drift-b 26s ease-in-out infinite alternate',
          transformOrigin: 'center',
          willChange: 'transform, opacity',
        }}
      />

      {/* Neutral warm haze — mid, breathing 17s */}
      <div
        style={{
          position: 'absolute',
          top: '38%',
          left: '-8%',
          width: '52%',
          height: '48%',
          background: 'radial-gradient(ellipse at center,rgba(200,180,154,0.028) 0%,transparent 60%)',
          animation: 'cin-haze 17s ease-in-out infinite alternate',
          willChange: 'opacity',
        }}
      />
    </div>
  )
}

// ── SectionBridge ──────────────────────────────────────────────────────────
// Gradient dissolve between adjacent sections.
// Replaces the hard background-color boundary with a soft environmental blend.
//
// Place between <section> elements:
//   <SectionBridge from="var(--color-hps-parchment)" to="var(--color-hps-cream)" />
//
// The optional `accent` prop renders a 1px animated thread — a horizontal
// light-scan that reads as operational signal flow. Use sparingly.

export interface SectionBridgeProps {
  from?: string
  to?: string
  accent?: string
  height?: number
}

export function SectionBridge({
  from = 'var(--color-hps-parchment)',
  to = 'var(--color-hps-cream)',
  accent,
  height = 48,
}: SectionBridgeProps) {
  useEffect(ensureKeyframes, [])
  const reduced = useReducedMotion()

  return (
    <div
      aria-hidden="true"
      style={{ position: 'relative', height, background: to, overflow: 'hidden' }}
    >
      {/* Color dissolve from the section above */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(180deg,${from} 0%,transparent 100%)`,
          pointerEvents: 'none',
        }}
      />

      {/* Animated accent thread — operational signal, bottom-aligned */}
      {accent && !reduced && (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 1,
            backgroundImage: `linear-gradient(90deg,transparent 0%,${accent} 22%,rgba(255,255,255,0.52) 50%,${accent} 78%,transparent 100%)`,
            backgroundSize: '360% 100%',
            animation: 'cin-thread 8s linear infinite',
            opacity: 0.30,
          }}
        />
      )}
    </div>
  )
}

// ── CinematicReveal ────────────────────────────────────────────────────────
// Self-contained reveal with directional entry + optional light sweep.
// Designed for section headers, feature blocks, and editorial content.
//
// Unlike the global data-reveal system (which manages individual DOM elements),
// CinematicReveal wraps a subtree and reveals it as a unit with a more
// dimensional entry. Use for high-prominence section headers.
//
// Props:
//   delay      — ms before reveal plays after intersection
//   direction  — entry drift direction ('up' | 'left' | 'right')
//   sweep      — plays a diagonal light sweep across the reveal on entry
//   threshold  — IntersectionObserver visibility threshold (0–1)

export interface CinematicRevealProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right'
  sweep?: boolean
  threshold?: number
  className?: string
  style?: React.CSSProperties
}

export function CinematicReveal({
  children,
  delay = 0,
  direction = 'up',
  sweep = false,
  threshold = 0.12,
  className,
  style,
}: CinematicRevealProps) {
  useEffect(ensureKeyframes, [])
  const reduced = useReducedMotion()

  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [sweeping, setSweeping] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (reduced) {
      setVisible(true)
      return
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const t = setTimeout(() => {
            setVisible(true)
            if (sweep) setTimeout(() => setSweeping(true), 80)
          }, delay)
          obs.disconnect()
          return () => clearTimeout(t)
        }
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay, sweep, threshold, reduced])

  const entryOffset: Record<string, string> = {
    up:    'translateY(14px)',
    left:  'translateX(-14px)',
    right: 'translateX(14px)',
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        position: 'relative',
        overflow: sweep ? 'hidden' : undefined,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate(0,0)' : entryOffset[direction],
        transition: reduced
          ? 'none'
          : `opacity 700ms cubic-bezier(.16,1,.3,1) ${delay}ms, transform 700ms cubic-bezier(.16,1,.3,1) ${delay}ms`,
        ...style,
      }}
    >
      {children}

      {/* Light sweep — one-shot on first visibility */}
      {sweep && sweeping && !reduced && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(105deg,transparent 0%,rgba(255,248,220,0.10) 40%,rgba(255,255,255,0.05) 50%,rgba(255,248,220,0.10) 60%,transparent 100%)',
            animation: 'cin-sweep 1.4s cubic-bezier(.4,0,.6,1) forwards',
            pointerEvents: 'none',
          }}
        />
      )}
    </div>
  )
}

// ── OperationalPulse ───────────────────────────────────────────────────────
// Subtle animated coordinate grid for technical sections.
// Communicates "operational system environment" without visual noise.
//
// Renders an SVG grid with slowly breathing opacity and 3 pulse nodes.
// Use as an absolute overlay inside a position:relative section — it fills
// its container and sits behind content via z-index.
//
// Example:
//   <section style={{ position: 'relative' }}>
//     <OperationalPulse accentColor="var(--color-hps-teal-dark)" />
//     <div className="relative z-10">...section content...</div>
//   </section>

export interface OperationalPulseProps {
  accentColor?: string
  gridSpacing?: number
  opacity?: number
}

export function OperationalPulse({
  accentColor = 'var(--color-hps-teal-dark)',
  gridSpacing = 32,
  opacity = 1,
}: OperationalPulseProps) {
  useEffect(ensureKeyframes, [])
  const reduced = useReducedMotion()

  if (reduced) return null

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 0,
        opacity,
      }}
    >
      <svg
        width="100%"
        height="100%"
        style={{
          position: 'absolute',
          inset: 0,
          animation: 'cin-grid-pulse 9s ease-in-out infinite',
          willChange: 'opacity, transform',
        }}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id={`cin-grid-${gridSpacing}`}
            width={gridSpacing}
            height={gridSpacing}
            patternUnits="userSpaceOnUse"
          >
            {/* Crosshair lines */}
            <line
              x1={gridSpacing / 2}
              y1="0"
              x2={gridSpacing / 2}
              y2={gridSpacing}
              stroke="currentColor"
              strokeWidth="0.4"
              opacity="0.6"
            />
            <line
              x1="0"
              y1={gridSpacing / 2}
              x2={gridSpacing}
              y2={gridSpacing / 2}
              stroke="currentColor"
              strokeWidth="0.4"
              opacity="0.6"
            />
            {/* Corner dots */}
            <circle cx="0" cy="0" r="1" fill="currentColor" opacity="0.8" />
          </pattern>
        </defs>

        <rect
          width="100%"
          height="100%"
          fill={`url(#cin-grid-${gridSpacing})`}
          style={{ color: accentColor }}
        />

        {/* Pulse nodes — positioned at ~25%, 50%, 75% horizontally, mid-section */}
        {[25, 50, 75].map((x, i) => (
          <circle
            key={x}
            cx={`${x}%`}
            cy="50%"
            r="1.5"
            fill={accentColor}
            style={{
              animation: `cin-node-glow 4s ease-in-out infinite`,
              animationDelay: `${i * 1.3}s`,
            }}
          />
        ))}
      </svg>
    </div>
  )
}
