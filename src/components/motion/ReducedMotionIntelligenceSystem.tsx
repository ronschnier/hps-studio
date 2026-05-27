// ── Reduced Motion Intelligence System ────────────────────────────────────────
//
// Provides a premium reduced-motion experience for the HPS ecosystem.
// When prefers-reduced-motion is active, atmospheric components receive
// a static but visually rich alternative rather than being removed entirely.
//
// The reduced-motion experience preserves:
//   environmental warmth  — static gradient blobs, same colors
//   operational depth     — static grid patterns, no movement
//   cinematic presence    — background tints, no animation
//
// Exports:
//   useReducedMotion       — motion preference hook (re-exported)
//   StaticAtmosphere       — non-animated ambient gradient layer
//   MotionAtmosphere       — smart: animated or static by preference
//   StaticOperationalPulse — non-animated coordinate grid
//   MotionSafe             — renders full or still variant
//   useMotionValue         — pick a value based on motion preference

export { useReducedMotion } from './CinematicTransitionSystem'
import { useReducedMotion, ScrollAtmosphere, OperationalPulse } from './CinematicTransitionSystem'
import type { OperationalPulseProps } from './CinematicTransitionSystem'

// ── StaticAtmosphere ──────────────────────────────────────────────────────────
// Non-animated version of ScrollAtmosphere.
// Same gradient presence, zero movement.
export function StaticAtmosphere() {
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
      {/* Gold warm — upper */}
      <div style={{
        position: 'absolute', top: '-22%', left: '12%', width: '78%', height: '65%',
        background: 'radial-gradient(ellipse at center,rgba(232,184,75,0.048) 0%,transparent 65%)',
      }} />
      {/* Teal cool — lower-right */}
      <div style={{
        position: 'absolute', bottom: '-18%', right: '3%', width: '62%', height: '58%',
        background: 'radial-gradient(ellipse at center,rgba(13,148,136,0.032) 0%,transparent 62%)',
      }} />
      {/* Neutral haze — mid-left */}
      <div style={{
        position: 'absolute', top: '38%', left: '-8%', width: '52%', height: '48%',
        background: 'radial-gradient(ellipse at center,rgba(200,180,154,0.022) 0%,transparent 60%)',
      }} />
    </div>
  )
}

// ── MotionAtmosphere ──────────────────────────────────────────────────────────
// Drop-in replacement for ScrollAtmosphere.
// Renders the full animated atmosphere or a static alternative based on preference.
// Replace <ScrollAtmosphere /> with <MotionAtmosphere /> in App.tsx.
export function MotionAtmosphere() {
  const reduced = useReducedMotion()
  return reduced ? <StaticAtmosphere /> : <ScrollAtmosphere />
}

// ── StaticOperationalPulse ────────────────────────────────────────────────────
// Non-animated coordinate grid for reduced-motion users.
// Structural visual presence without movement.
export function StaticOperationalPulse({
  accentColor = 'var(--color-hps-teal-dark)',
  gridSpacing = 32,
  opacity = 1,
}: OperationalPulseProps) {
  const id = `static-grid-${gridSpacing}-${accentColor.replace(/[^a-z0-9]/gi, '')}`
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 0,
        opacity: opacity * 0.12,
      }}
    >
      <svg
        width="100%"
        height="100%"
        style={{ position: 'absolute', inset: 0 }}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id={id} width={gridSpacing} height={gridSpacing} patternUnits="userSpaceOnUse">
            <line x1={gridSpacing / 2} y1="0" x2={gridSpacing / 2} y2={gridSpacing}
              stroke="currentColor" strokeWidth="0.4" opacity="0.6" />
            <line x1="0" y1={gridSpacing / 2} x2={gridSpacing} y2={gridSpacing / 2}
              stroke="currentColor" strokeWidth="0.4" opacity="0.6" />
            <circle cx="0" cy="0" r="1" fill="currentColor" opacity="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} style={{ color: accentColor }} />
      </svg>
    </div>
  )
}

// ── MotionSafePulse ───────────────────────────────────────────────────────────
// Renders OperationalPulse normally, StaticOperationalPulse when reduced.
export function MotionSafePulse(props: OperationalPulseProps) {
  const reduced = useReducedMotion()
  return reduced ? <StaticOperationalPulse {...props} /> : <OperationalPulse {...props} />
}

// ── MotionSafe ────────────────────────────────────────────────────────────────
// Generic utility: renders `full` when motion is OK, `still` when reduced.
interface MotionSafeProps {
  full: React.ReactNode
  still: React.ReactNode
}
export function MotionSafe({ full, still }: MotionSafeProps) {
  const reduced = useReducedMotion()
  return <>{reduced ? still : full}</>
}

// ── useMotionValue ────────────────────────────────────────────────────────────
// Return one of two values depending on motion preference.
// Useful for inline styles: duration, easing, opacity levels.
export function useMotionValue<T>(full: T, reduced: T): T {
  return useReducedMotion() ? reduced : full
}
