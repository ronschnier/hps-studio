// ── EnvironmentalSoundVisualizationLayer ──────────────────────────────────────
//
// Visual simulation of operational environment presence.
// Not audio. Visual suggestion of living systems beneath the surface.
//
// Five environment presets, each with distinct pulse character:
//   fabrication   — horizontal scan lines with machine-rhythm stagger
//   accessibility — structured vertical ticks, organized cadence
//   golf          — gentle sine-wave drift suggesting open terrain
//   ai            — staggered node opacity suggesting data activity
//   hospitality   — expanding concentric rings suggesting guest flow
//
// All motion respects prefers-reduced-motion.
// Absolute-positioned, pointer-events:none, z-index:0.
// viewBox="0 0 100 100" + preserveAspectRatio="none" → fills container.

import { useEffect } from 'react'
import { useReducedMotion } from './CinematicTransitionSystem'

export type PulseEnvironment = 'fabrication' | 'accessibility' | 'golf' | 'ai' | 'hospitality'

export interface EnvironmentalPulseProps {
  environment?: PulseEnvironment
  opacity?: number
}

// ── Keyframes ─────────────────────────────────────────────────────────────────

const ENV_KEYFRAMES = `
@keyframes env-scan {
  0%   { transform: scaleX(0.85); opacity: 0.07; }
  50%  { transform: scaleX(1.00); opacity: 0.18; }
  100% { transform: scaleX(0.88); opacity: 0.06; }
}
@keyframes env-tick {
  0%   { transform: scaleY(0.6); opacity: 0.06; }
  50%  { transform: scaleY(1.0); opacity: 0.15; }
  100% { transform: scaleY(0.7); opacity: 0.05; }
}
@keyframes env-node {
  0%   { opacity: 0.07; }
  50%  { opacity: 0.20; }
  100% { opacity: 0.06; }
}
@keyframes env-ring {
  0%   { transform: scale(0.6); opacity: 0.16; }
  100% { transform: scale(2.2); opacity: 0.00; }
}
`

let _envKeyframesInjected = false
function ensureEnvKeyframes() {
  if (_envKeyframesInjected || typeof document === 'undefined') return
  const el = document.createElement('style')
  el.setAttribute('data-env-pulse', '')
  el.textContent = ENV_KEYFRAMES
  document.head.appendChild(el)
  _envKeyframesInjected = true
}

// ── Fabrication: horizontal scan lines ────────────────────────────────────────
// Lines span full width, at 5 vertical positions, staggered timing.

function FabricationPulse({ color }: { color: string }) {
  return (
    <>
      {[18, 33, 50, 65, 80].map((y, i) => (
        <rect
          key={y}
          x={3}
          y={y - 0.3}
          width={94}
          height={0.6}
          fill={color}
          style={{
            animation: `env-scan ${7 + i * 1.2}s ease-in-out infinite alternate`,
            animationDelay: `${i * 0.9}s`,
            transformOrigin: `50 ${y}`,
          }}
        />
      ))}
    </>
  )
}

// ── Accessibility: structured vertical ticks ──────────────────────────────────
// Organized grid of short vertical marks, regular cadence.

function AccessibilityPulse({ color }: { color: string }) {
  const COLS = 12
  const ROWS = 4
  return (
    <>
      {Array.from({ length: COLS }).map((_, ci) =>
        Array.from({ length: ROWS }).map((_, ri) => {
          const x = (ci / (COLS - 1)) * 88 + 6
          const y = (ri / (ROWS - 1)) * 70 + 15
          return (
            <rect
              key={`${ci}-${ri}`}
              x={x - 0.3}
              y={y}
              width={0.6}
              height={5}
              fill={color}
              style={{
                animation: `env-tick ${5 + (ci % 3) * 1.5}s ease-in-out infinite`,
                animationDelay: `${(ci * 0.18 + ri * 0.28).toFixed(2)}s`,
                transformOrigin: `${x} ${y + 5}`,
              }}
            />
          )
        })
      )}
    </>
  )
}

// ── Golf: gentle wave paths ────────────────────────────────────────────────────
// Three slow sine waves at different vertical positions.

function GolfPulse({ color }: { color: string }) {
  return (
    <>
      {[38, 52, 68].map((yBase, i) => (
        <path
          key={yBase}
          d={`M 0,${yBase} Q 25,${yBase - 5} 50,${yBase} Q 75,${yBase + 5} 100,${yBase}`}
          fill="none"
          stroke={color}
          strokeWidth="0.8"
          style={{
            animation: `env-scan ${9 + i * 3}s ease-in-out infinite alternate`,
            animationDelay: `${i * 1.8}s`,
          }}
        />
      ))}
    </>
  )
}

// ── AI: staggered node pulse ───────────────────────────────────────────────────
// Nodes pulse independently with faint connection lines.

const AI_NODES = [
  { x: 12, y: 28 }, { x: 28, y: 55 }, { x: 42, y: 22 }, { x: 58, y: 62 },
  { x: 72, y: 33 }, { x: 85, y: 52 }, { x: 18, y: 72 }, { x: 52, y: 44 },
  { x: 65, y: 72 }, { x: 88, y: 24 }, { x: 35, y: 82 }, { x: 78, y: 78 },
]

const AI_EDGES = [[0,1],[1,2],[2,3],[3,4],[4,5],[6,7],[7,8],[9,10],[10,11]]

function AIPulse({ color }: { color: string }) {
  return (
    <>
      {AI_EDGES.map(([a, b], i) => (
        <line
          key={i}
          x1={AI_NODES[a].x}
          y1={AI_NODES[a].y}
          x2={AI_NODES[b].x}
          y2={AI_NODES[b].y}
          stroke={color}
          strokeWidth="0.4"
          opacity="0.10"
        />
      ))}
      {AI_NODES.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={1.2}
          fill={color}
          style={{
            animation: `env-node ${3.5 + (i % 4) * 0.8}s ease-in-out infinite`,
            animationDelay: `${i * 0.35}s`,
          }}
        />
      ))}
    </>
  )
}

// ── Hospitality: expanding concentric rings ────────────────────────────────────
// Three origin points emit slow expanding rings.

const HOSP_ORIGINS = [{ cx: 24, cy: 45 }, { cx: 55, cy: 35 }, { cx: 78, cy: 60 }]

function HospitalityPulse({ color }: { color: string }) {
  return (
    <>
      {HOSP_ORIGINS.map((o, oi) =>
        [0, 1, 2].map(ring => (
          <circle
            key={`${oi}-${ring}`}
            cx={o.cx}
            cy={o.cy}
            r={4 + ring * 3}
            fill="none"
            stroke={color}
            strokeWidth="0.6"
            style={{
              animation: `env-ring ${4.5 + ring * 1.2}s ease-out infinite`,
              animationDelay: `${oi * 1.5 + ring * 0.8}s`,
              transformOrigin: `${o.cx}px ${o.cy}px`,
            }}
          />
        ))
      )}
    </>
  )
}

// ── Color per environment ──────────────────────────────────────────────────────

const ENV_COLORS: Record<PulseEnvironment, string> = {
  fabrication:  'rgba(248,114,57,1)',
  accessibility:'rgba(13,148,136,1)',
  golf:         'rgba(71,140,92,1)',
  ai:           'rgba(20,184,166,1)',
  hospitality:  'rgba(184,136,42,1)',
}

// ── Main component ─────────────────────────────────────────────────────────────

export function EnvironmentalPulse({
  environment = 'fabrication',
  opacity = 1,
}: EnvironmentalPulseProps) {
  useEffect(ensureEnvKeyframes, [])
  const reduced = useReducedMotion()

  if (reduced) return null

  const color = ENV_COLORS[environment]

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
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ position: 'absolute', inset: 0, display: 'block' }}
      >
        {environment === 'fabrication'   && <FabricationPulse   color={color} />}
        {environment === 'accessibility' && <AccessibilityPulse color={color} />}
        {environment === 'golf'          && <GolfPulse          color={color} />}
        {environment === 'ai'            && <AIPulse            color={color} />}
        {environment === 'hospitality'   && <HospitalityPulse   color={color} />}
      </svg>
    </div>
  )
}

export default EnvironmentalPulse
