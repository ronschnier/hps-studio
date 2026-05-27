/**
 * BackgroundAtmosphere — HPS Environmental Storytelling Layer
 *
 * Dimensional old-Florida collage rendered as photorealistic SVG.
 * Each section opts in explicitly. Defaults are extremely restrained.
 *
 * Usage:
 *   <BackgroundAtmosphere mood="citrus" intensity="whisper" density="sparse" />
 */

import { useEffect, useRef } from 'react'
import type { CSSProperties, FC } from 'react'

// ── Types ─────────────────────────────────────────────────────────────────────

export type Mood      = 'citrus' | 'palm' | 'mixed'
export type Intensity = 'whisper' | 'subtle' | 'medium'
export type Density   = 'sparse'  | 'normal'
type Depth            = 'far' | 'mid' | 'near'
type Anim             = 'atm-rise' | 'atm-float' | 'atm-drift' | 'atm-sway'

interface AtmEl {
  id:      string
  C:       FC<{ size: number; uid: string }>
  pool:    'citrus' | 'palm'
  depth:   Depth
  x:       number   // % from left (can be negative to crop off-screen)
  y:       number   // % from top
  size:    number   // px width
  opacity: number   // base — multiplied by intensity scale
  rot:     number   // static initial rotation °
  anim:    Anim
  dur:     number   // base duration s — multiplied by intensity scale
  del:     number   // negative: starts mid-cycle for natural variation
}

// ── Intensity & density scales ────────────────────────────────────────────────

const OPACITY_SCALE: Record<Intensity, number> = {
  whisper: 0.42,
  subtle:  0.70,
  medium:  1.00,
}

const DUR_SCALE: Record<Intensity, number> = {
  whisper: 1.45,  // slower = more background
  subtle:  1.20,
  medium:  1.00,
}

// ── SVG Objects ───────────────────────────────────────────────────────────────
// Each object uses gradients + filters for dimensionality.
// uid ensures SVG def IDs remain unique per instance.

function OrangeSlice({ size, uid }: { size: number; uid: string }) {
  const p = `os-${uid}`
  const segs = Array.from({ length: 10 }, (_, i) => {
    const a = (i * 2 * Math.PI) / 10
    return { x: 100 + 72 * Math.cos(a), y: 100 + 72 * Math.sin(a) }
  })
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id={`${p}-peel`} cx="38%" cy="34%" r="70%">
          <stop offset="0%"   stopColor="#FF9628" />
          <stop offset="32%"  stopColor="#E87212" />
          <stop offset="68%"  stopColor="#C85800" />
          <stop offset="100%" stopColor="#8A3800" />
        </radialGradient>
        <radialGradient id={`${p}-pith`} cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#FFFCE8" />
          <stop offset="100%" stopColor="#F0D88A" />
        </radialGradient>
        <radialGradient id={`${p}-flesh`} cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#FFCB48" />
          <stop offset="48%"  stopColor="#F5A018" />
          <stop offset="100%" stopColor="#D87608" />
        </radialGradient>
        <radialGradient id={`${p}-spec`} cx="32%" cy="27%" r="55%">
          <stop offset="0%"   stopColor="rgba(255,255,255,0.44)" />
          <stop offset="65%"  stopColor="rgba(255,255,255,0.07)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
        <filter id={`${p}-sh`} x="-18%" y="-12%" width="136%" height="136%">
          <feDropShadow dx="2" dy="4" stdDeviation="6" floodColor="#5A2800" floodOpacity="0.26" />
        </filter>
      </defs>

      {/* Drop shadow */}
      <circle cx="100" cy="100" r="95" filter={`url(#${p}-sh)`} fill="#B05000" opacity="0.55" />
      {/* Peel */}
      <circle cx="100" cy="100" r="95" fill={`url(#${p}-peel)`} />
      {/* Peel inner edge */}
      <circle cx="100" cy="100" r="84" fill="rgba(100,38,0,0.48)" />
      {/* Pith */}
      <circle cx="100" cy="100" r="82" fill={`url(#${p}-pith)`} />
      {/* Flesh */}
      <circle cx="100" cy="100" r="74" fill={`url(#${p}-flesh)`} />
      {/* Segment membranes */}
      {segs.map((s, i) => (
        <line key={i} x1="100" y1="100" x2={s.x} y2={s.y}
          stroke="rgba(255,246,204,0.78)" strokeWidth="1.3" strokeLinecap="round" />
      ))}
      {/* Navel — concentric rings */}
      <circle cx="100" cy="100" r="12" fill="#DD7A08" />
      <circle cx="100" cy="100" r="7"  fill="#C06000" />
      <circle cx="100" cy="100" r="3"  fill="#983E00" />
      {/* Specular overlay */}
      <circle cx="100" cy="100" r="95" fill={`url(#${p}-spec)`} />
      {/* Peel sheen spot */}
      <ellipse cx="74" cy="65" rx="15" ry="9"
        fill="rgba(255,255,255,0.20)" transform="rotate(-28,74,65)" />
    </svg>
  )
}


function CitrusLeaf({ size, uid }: { size: number; uid: string }) {
  const p = `cl-${uid}`
  return (
    <svg width={size} height={Math.round(size * 1.65)} viewBox="0 0 90 148" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={`${p}-body`} x1="15%" y1="0%" x2="85%" y2="100%">
          <stop offset="0%"   stopColor="#507C32" />
          <stop offset="45%"  stopColor="#3E6424" />
          <stop offset="100%" stopColor="#2A4A18" />
        </linearGradient>
        <radialGradient id={`${p}-gloss`} cx="40%" cy="26%" r="56%">
          <stop offset="0%"   stopColor="rgba(215,238,170,0.52)" />
          <stop offset="58%"  stopColor="rgba(180,220,130,0.12)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
        <filter id={`${p}-sh`} x="-12%" y="-6%" width="124%" height="118%">
          <feDropShadow dx="1" dy="3" stdDeviation="3" floodColor="#1A3208" floodOpacity="0.32" />
        </filter>
      </defs>
      <path
        d="M 45,144 C 13,116 5,78 17,43 C 24,22 39,5 45,4 C 51,5 66,22 73,43 C 85,78 77,116 45,144 Z"
        fill={`url(#${p}-body)`} filter={`url(#${p}-sh)`}
      />
      {/* Midrib */}
      <path d="M 45,8 C 44,52 44,92 45,140"
        stroke="#1C3A10" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.65" />
      {/* Left veins */}
      <path d="M 45,38 C 31,45 20,49 14,51"  stroke="#1C3A10" strokeWidth="0.85" strokeLinecap="round" strokeOpacity="0.52" />
      <path d="M 45,60 C 30,67 19,71 13,73"  stroke="#1C3A10" strokeWidth="0.85" strokeLinecap="round" strokeOpacity="0.52" />
      <path d="M 45,82 C 32,89 22,93 17,95"  stroke="#1C3A10" strokeWidth="0.75" strokeLinecap="round" strokeOpacity="0.45" />
      <path d="M 45,104 C 34,110 26,113 22,115" stroke="#1C3A10" strokeWidth="0.70" strokeLinecap="round" strokeOpacity="0.38" />
      {/* Right veins */}
      <path d="M 45,38 C 59,45 70,49 76,51"  stroke="#1C3A10" strokeWidth="0.85" strokeLinecap="round" strokeOpacity="0.52" />
      <path d="M 45,60 C 60,67 71,71 77,73"  stroke="#1C3A10" strokeWidth="0.85" strokeLinecap="round" strokeOpacity="0.52" />
      <path d="M 45,82 C 58,89 68,93 73,95"  stroke="#1C3A10" strokeWidth="0.75" strokeLinecap="round" strokeOpacity="0.45" />
      <path d="M 45,104 C 56,110 64,113 68,115" stroke="#1C3A10" strokeWidth="0.70" strokeLinecap="round" strokeOpacity="0.38" />
      {/* Gloss overlay */}
      <path
        d="M 45,144 C 13,116 5,78 17,43 C 24,22 39,5 45,4 C 51,5 66,22 73,43 C 85,78 77,116 45,144 Z"
        fill={`url(#${p}-gloss)`}
      />
    </svg>
  )
}

function PalmShadow({ size, uid }: { size: number; uid: string }) {
  const p = `sh-${uid}`
  return (
    <svg width={size} height={Math.round(size * 1.3)} viewBox="0 0 200 260" fill="none" aria-hidden="true">
      <defs>
        <filter id={`${p}-blur`} x="-45%" y="-35%" width="190%" height="170%">
          <feGaussianBlur stdDeviation="20" />
        </filter>
      </defs>
      <g filter={`url(#${p}-blur)`} opacity="0.85">
        {/* Central frond trunk */}
        <path d="M 100,255 C 96,202 105,152 88,88"
          stroke="#243818" strokeWidth="30" strokeLinecap="round" />
        {/* Left blades */}
        <path d="M 91,205 C 62,174 36,162 16,145"
          stroke="#243818" strokeWidth="22" strokeLinecap="round" />
        <path d="M 89,165 C 58,136 34,122 18,104"
          stroke="#243818" strokeWidth="17" strokeLinecap="round" />
        <path d="M 88,126 C 60,100 40,86 28,68"
          stroke="#243818" strokeWidth="13" strokeLinecap="round" />
        {/* Right blades */}
        <path d="M 96,198 C 126,166 152,152 172,134"
          stroke="#243818" strokeWidth="22" strokeLinecap="round" />
        <path d="M 94,158 C 122,128 146,113 164,96"
          stroke="#243818" strokeWidth="17" strokeLinecap="round" />
        <path d="M 92,118 C 118,92 140,78 156,62"
          stroke="#243818" strokeWidth="13" strokeLinecap="round" />
        {/* Frond tip */}
        <path d="M 88,88 C 84,58 80,32 78,8"
          stroke="#243818" strokeWidth="16" strokeLinecap="round" />
      </g>
    </svg>
  )
}

// ── Element Pool ──────────────────────────────────────────────────────────────
// Each element tagged to a pool. Spread across far/mid/near depth layers.
// y positions create rhythm across the full section height (0–95%).

const ELEMENT_POOL: AtmEl[] = [
  // ── CITRUS pool ──────────────────────────────────────────────────
  { id:'c-f1', C:OrangeSlice, pool:'citrus', depth:'far', x:89,  y:4,  size:125, opacity:0.12, rot:18,  anim:'atm-rise',  dur:32, del:-10 },
  { id:'c-f2', C:OrangeSlice, pool:'citrus', depth:'far', x:-5,  y:26, size:88,  opacity:0.11, rot:-14, anim:'atm-rise',  dur:28, del:-18 },
  { id:'c-f3', C:CitrusLeaf,  pool:'citrus', depth:'far', x:90,  y:52, size:82,  opacity:0.12, rot:22,  anim:'atm-rise',  dur:30, del:-22 },
  { id:'c-f4', C:OrangeSlice, pool:'citrus', depth:'far', x:-4,  y:74, size:102, opacity:0.11, rot:-9,  anim:'atm-float', dur:26, del:-14 },
  { id:'c-f5', C:OrangeSlice, pool:'citrus', depth:'far', x:88,  y:90, size:72,  opacity:0.10, rot:34,  anim:'atm-rise',  dur:34, del:-5  },

  { id:'c-m1', C:OrangeSlice, pool:'citrus', depth:'mid', x:-7,  y:8,  size:155, opacity:0.14, rot:24,  anim:'atm-drift', dur:22, del:-8  },
  { id:'c-m2', C:CitrusLeaf,  pool:'citrus', depth:'mid', x:91,  y:25, size:98,  opacity:0.15, rot:-30, anim:'atm-sway',  dur:20, del:-4  },
  { id:'c-m3', C:OrangeSlice, pool:'citrus', depth:'mid', x:-5,  y:45, size:118, opacity:0.14, rot:38,  anim:'atm-drift', dur:24, del:-16 },
  { id:'c-m4', C:OrangeSlice, pool:'citrus', depth:'mid', x:90,  y:65, size:132, opacity:0.13, rot:-17, anim:'atm-drift', dur:21, del:-11 },
  { id:'c-m5', C:CitrusLeaf,  pool:'citrus', depth:'mid', x:-3,  y:86, size:86,  opacity:0.14, rot:19,  anim:'atm-sway',  dur:19, del:-6  },

  { id:'c-n1', C:CitrusLeaf,  pool:'citrus', depth:'near', x:91, y:3,  size:110, opacity:0.16, rot:-34, anim:'atm-sway',  dur:17, del:-7  },
  { id:'c-n2', C:OrangeSlice, pool:'citrus', depth:'near', x:-9, y:32, size:178, opacity:0.15, rot:21,  anim:'atm-drift', dur:18, del:-3  },
  { id:'c-n3', C:OrangeSlice, pool:'citrus', depth:'near', x:89, y:62, size:138, opacity:0.14, rot:-9,  anim:'atm-float', dur:20, del:-15 },

  // ── PALM pool ────────────────────────────────────────────────────
  { id:'l-f1', C:PalmShadow,  pool:'palm', depth:'far', x:84,  y:6,  size:220, opacity:0.07, rot:-10, anim:'atm-rise',  dur:36, del:-15 },
  { id:'l-f2', C:PalmShadow,  pool:'palm', depth:'far', x:-9,  y:44, size:200, opacity:0.07, rot:14,  anim:'atm-float', dur:40, del:-25 },
  { id:'l-f3', C:CitrusLeaf,  pool:'palm', depth:'far', x:90,  y:74, size:90,  opacity:0.12, rot:22,  anim:'atm-rise',  dur:28, del:-10 },

  { id:'l-m1', C:PalmShadow,  pool:'palm', depth:'mid', x:88,  y:26, size:245, opacity:0.09, rot:-18, anim:'atm-sway',  dur:28, del:-8  },
  { id:'l-m2', C:CitrusLeaf,  pool:'palm', depth:'mid', x:-5,  y:56, size:105, opacity:0.15, rot:20,  anim:'atm-sway',  dur:18, del:-4  },
  { id:'l-m3', C:PalmShadow,  pool:'palm', depth:'mid', x:-8,  y:82, size:205, opacity:0.08, rot:6,   anim:'atm-float', dur:32, del:-18 },

  { id:'l-n1', C:CitrusLeaf,  pool:'palm', depth:'near', x:91, y:10, size:115, opacity:0.17, rot:-32, anim:'atm-sway',  dur:16, del:-5  },
  { id:'l-n2', C:PalmShadow,  pool:'palm', depth:'near', x:-6, y:65, size:262, opacity:0.10, rot:5,   anim:'atm-rise',  dur:26, del:-22 },
]

// ── Element selection ─────────────────────────────────────────────────────────

function selectElements(mood: Mood, density: Density): { far: AtmEl[]; mid: AtmEl[]; near: AtmEl[] } {
  const filtered = mood === 'mixed'
    ? ELEMENT_POOL
    : ELEMENT_POOL.filter(el => {
        if (mood === 'citrus') return el.pool === 'citrus'
        if (mood === 'palm')   return el.pool === 'palm'
        return true
      })

  const thinned = density === 'sparse'
    ? filtered.filter((_, i) => i % 2 === 0)
    : filtered

  return {
    far:  thinned.filter(el => el.depth === 'far'),
    mid:  thinned.filter(el => el.depth === 'mid'),
    near: thinned.filter(el => el.depth === 'near'),
  }
}

// ── Parallax factors per depth ────────────────────────────────────────────────
// Positive translateY counteracts upward scroll → elements move slower = appear further.
const PARALLAX = { far: 0.018, mid: 0.040, near: 0.066 }

// ── Component ─────────────────────────────────────────────────────────────────

interface Props {
  mood?:      Mood
  intensity?: Intensity
  density?:   Density
}

export default function BackgroundAtmosphere({
  mood      = 'citrus',
  intensity = 'whisper',
  density   = 'sparse',
}: Props) {
  const farRef  = useRef<HTMLDivElement>(null)
  const midRef  = useRef<HTMLDivElement>(null)
  const nearRef = useRef<HTMLDivElement>(null)
  const raf     = useRef(0)

  // Scroll-based parallax — direct DOM updates, no React state
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const onScroll = () => {
      cancelAnimationFrame(raf.current)
      raf.current = requestAnimationFrame(() => {
        const y = window.scrollY
        if (farRef.current)  farRef.current.style.transform  = `translateY(${y * PARALLAX.far}px)`
        if (midRef.current)  midRef.current.style.transform  = `translateY(${y * PARALLAX.mid}px)`
        if (nearRef.current) nearRef.current.style.transform = `translateY(${y * PARALLAX.near}px)`
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  const opScale  = OPACITY_SCALE[intensity]
  const durScale = DUR_SCALE[intensity]
  const layers   = selectElements(mood, density)

  const renderLayer = (
    els: AtmEl[],
    ref: React.RefObject<HTMLDivElement | null>,
  ) => (
    <div
      ref={ref}
      style={{ position: 'absolute', inset: 0, willChange: 'transform' }}
    >
      {els.map(el => {
        const El = el.C
        const s: CSSProperties = {
          position: 'absolute',
          left: `${el.x}%`,
          top:  `${el.y}%`,
          opacity: el.opacity * opScale,
          animationName: el.anim,
          animationDuration: `${el.dur * durScale}s`,
          animationDelay: `${el.del * durScale}s`,
          animationTimingFunction: 'ease-in-out',
          animationIterationCount: 'infinite',
          animationFillMode: 'both',
          willChange: 'transform',
        }
        return (
          <div key={el.id} style={s}>
            <div style={{ transform: `rotate(${el.rot}deg)` }}>
              <El size={el.size} uid={el.id} />
            </div>
          </div>
        )
      })}
    </div>
  )

  return (
    <div
      aria-hidden="true"
      className="hidden lg:block"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        userSelect: 'none',
        zIndex: 2,
      }}
    >
      {renderLayer(layers.far,  farRef)}
      {renderLayer(layers.mid,  midRef)}
      {renderLayer(layers.near, nearRef)}
    </div>
  )
}
