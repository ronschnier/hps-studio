// Photo slot component for operational proof sections.
// Renders real imagery when src is provided; renders a material-surfaced
// production environment when no src — communicating operational specificity
// before photography is available.

import { useState } from 'react'

export type MaterialSurface = 'matte' | 'wood' | 'brushedMetal' | 'acrylic' | 'blueprint'

interface SurfaceDef {
  bg: string
  light: string
  textColor: string
  equipOpacity: number
  borderBase: string
  hoverShadow: string
  labelColor: string
}

const SURFACES: Record<MaterialSurface, SurfaceDef> = {
  matte: {
    bg: 'linear-gradient(165deg,#f0e5ce 0%,#e8d9bc 55%,#e2d0af 100%)',
    light: 'radial-gradient(ellipse at 78% 8%,rgba(255,248,230,.26) 0%,transparent 52%)',
    textColor: '#1a1510',
    equipOpacity: 0.40,
    borderBase: 'rgba(200,180,154,.40)',
    hoverShadow: '0 8px 28px rgba(12,20,32,.10),0 2px 8px rgba(12,20,32,.07)',
    labelColor: 'rgba(140,120,90,.22)',
  },
  wood: {
    bg: [
      'repeating-linear-gradient(87deg,rgba(140,100,55,.07) 0,rgba(110,75,30,.04) 2px,transparent 2px,transparent 9px)',
      'repeating-linear-gradient(180deg,rgba(160,115,60,.04) 0,rgba(130,90,40,.03) 1px,transparent 1px,transparent 14px)',
      'linear-gradient(170deg,#f2e3c8 0%,#e8d5b0 60%,#dfc99a 100%)',
    ].join(','),
    light: 'radial-gradient(ellipse at 80% 8%,rgba(255,245,215,.32) 0%,transparent 55%)',
    textColor: '#1a1208',
    equipOpacity: 0.34,
    borderBase: 'rgba(160,120,60,.32)',
    hoverShadow: '0 8px 28px rgba(12,20,32,.10),0 2px 8px rgba(12,20,32,.07)',
    labelColor: 'rgba(130,100,50,.22)',
  },
  brushedMetal: {
    bg: [
      'repeating-linear-gradient(91deg,rgba(210,215,225,.16) 0,rgba(190,195,205,.10) 1px,transparent 1px,transparent 3px)',
      'repeating-linear-gradient(181deg,rgba(220,222,228,.06) 0,rgba(200,202,210,.04) 1px,transparent 1px,transparent 18px)',
      'linear-gradient(155deg,#e4e7ec 0%,#d8dce4 50%,#cdd2da 100%)',
    ].join(','),
    light: 'radial-gradient(ellipse at 75% 5%,rgba(255,255,255,.40) 0%,transparent 46%)',
    textColor: '#1a2030',
    equipOpacity: 0.28,
    borderBase: 'rgba(180,185,200,.45)',
    hoverShadow: '0 8px 28px rgba(12,20,32,.12),0 2px 8px rgba(12,20,32,.08),0 0 0 1px rgba(210,215,225,.40)',
    labelColor: 'rgba(160,165,180,.25)',
  },
  acrylic: {
    bg: 'linear-gradient(135deg,rgba(235,248,255,.97) 0%,rgba(215,235,252,.88) 40%,rgba(228,242,255,.93) 70%,rgba(240,250,255,.97) 100%)',
    light: [
      'radial-gradient(ellipse at 70% 10%,rgba(255,255,255,.50) 0%,transparent 42%)',
      'radial-gradient(ellipse at 18% 88%,rgba(180,220,255,.18) 0%,transparent 38%)',
    ].join(','),
    textColor: '#0d1a2a',
    equipOpacity: 0.26,
    borderBase: 'rgba(170,210,240,.55)',
    hoverShadow: '0 8px 28px rgba(30,100,200,.09),0 2px 8px rgba(30,100,200,.06),0 0 0 1px rgba(170,210,240,.40)',
    labelColor: 'rgba(100,160,220,.22)',
  },
  blueprint: {
    bg: [
      'repeating-linear-gradient(0deg,rgba(100,165,255,.09) 0,rgba(100,165,255,.09) 1px,transparent 1px,transparent 22px)',
      'repeating-linear-gradient(90deg,rgba(100,165,255,.09) 0,rgba(100,165,255,.09) 1px,transparent 1px,transparent 22px)',
      'linear-gradient(170deg,#0b1828 0%,#0e2040 100%)',
    ].join(','),
    light: 'radial-gradient(ellipse at 85% 12%,rgba(80,160,255,.14) 0%,transparent 48%)',
    textColor: 'rgba(180,210,255,.88)',
    equipOpacity: 0.50,
    borderBase: 'rgba(60,120,220,.38)',
    hoverShadow: '0 8px 28px rgba(8,20,40,.32),0 2px 8px rgba(8,20,40,.20),0 0 0 1px rgba(60,120,220,.35)',
    labelColor: 'rgba(100,165,255,.20)',
  },
}

// SVG L-shaped corner registration mark — standard print production mark
function CornerMark({ corner, accentColor }: { corner: 'tl' | 'tr' | 'bl' | 'br'; accentColor: string }) {
  const S = 11
  const pos: Record<string, React.CSSProperties> = {
    tl: { top: 7, left: 7 },
    tr: { top: 7, right: 7 },
    bl: { bottom: 7, left: 7 },
    br: { bottom: 7, right: 7 },
  }
  const path = {
    tl: `M ${S},0 L 0,0 L 0,${S}`,
    tr: `M 0,0 L ${S},0 L ${S},${S}`,
    bl: `M 0,0 L 0,${S} L ${S},${S}`,
    br: `M 0,${S} L ${S},${S} L ${S},0`,
  }[corner]

  return (
    <svg
      aria-hidden="true"
      width={S}
      height={S}
      style={{ position: 'absolute', ...pos[corner], opacity: 0.28, overflow: 'visible', color: accentColor }}
    >
      <path d={path} fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
    </svg>
  )
}

// Ruler tick marks along the bottom edge
function MeasurementTicks({ accentColor }: { accentColor: string }) {
  return (
    <div aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: 16, right: 16, height: 10 }}>
      <svg
        width="100%"
        height="10"
        style={{ display: 'block', color: accentColor, opacity: 0.18 }}
        preserveAspectRatio="none"
      >
        {Array.from({ length: 13 }).map((_, j) => {
          const pct = (j / 12) * 100
          const h = j % 6 === 0 ? 8 : j % 3 === 0 ? 5 : 3
          return (
            <line
              key={j}
              x1={`${pct}%`}
              y1="10"
              x2={`${pct}%`}
              y2={10 - h}
              stroke="currentColor"
              strokeWidth="0.8"
            />
          )
        })}
      </svg>
    </div>
  )
}

export interface WorkSampleProps {
  src?: string
  alt?: string
  caption: string
  equipment?: string
  category: string
  accentColor?: string
  aspectRatio?: '4/3' | '1/1' | '3/2'
  revealDelay?: number
  surface?: MaterialSurface
  showMeasurements?: boolean
  showRegistration?: boolean
}

export default function WorkSample({
  src,
  alt,
  caption,
  equipment,
  category,
  accentColor = 'var(--color-hps-coral-warm)',
  aspectRatio = '4/3',
  revealDelay,
  surface = 'matte',
  showMeasurements = true,
  showRegistration = true,
}: WorkSampleProps) {
  const [hovered, setHovered] = useState(false)
  const pad = aspectRatio === '1/1' ? '100%' : aspectRatio === '3/2' ? '66.67%' : '75%'
  const def = SURFACES[surface]

  return (
    <div
      data-reveal
      data-reveal-delay={revealDelay !== undefined ? String(revealDelay) : undefined}
      className="rounded-sm overflow-hidden"
      style={{
        border: `1px solid ${hovered ? accentColor : def.borderBase}`,
        transform: hovered ? 'translateY(-3px) scale(1.008)' : 'translateY(0) scale(1)',
        transition: 'transform 220ms cubic-bezier(.2,.6,.3,1),border-color 200ms ease,box-shadow 220ms ease',
        boxShadow: hovered ? def.hoverShadow : '0 1px 4px rgba(12,20,32,.05)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Image / Placeholder ────────────────────────────────── */}
      <div className="relative w-full" style={{ paddingBottom: pad }}>
        {src ? (
          <img
            src={src}
            alt={alt ?? caption}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">

            {/* Surface texture */}
            <div className="absolute inset-0" style={{ background: def.bg }} />

            {/* Atmospheric lighting overlay */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: def.light }} />

            {/* Hover shimmer — top edge sweep */}
            <div
              className="absolute inset-x-0 top-0"
              style={{
                height: 1,
                background: `linear-gradient(90deg,transparent 0%,${accentColor} 30%,rgba(255,255,255,.70) 50%,${accentColor} 70%,transparent 100%)`,
                opacity: hovered ? 0.65 : 0.16,
                transition: 'opacity 220ms ease',
              }}
            />

            {/* Left edge accent line */}
            <div
              className="absolute top-0 bottom-0 left-0"
              style={{
                width: 2,
                background: `linear-gradient(180deg,${accentColor} 0%,transparent 100%)`,
                opacity: hovered ? 0.35 : 0.12,
                transition: 'opacity 220ms ease',
              }}
            />

            {/* Registration marks */}
            {showRegistration && (
              <>
                <CornerMark corner="tl" accentColor={accentColor} />
                <CornerMark corner="tr" accentColor={accentColor} />
                <CornerMark corner="bl" accentColor={accentColor} />
                <CornerMark corner="br" accentColor={accentColor} />
              </>
            )}

            {/* Measurement ticks */}
            {showMeasurements && <MeasurementTicks accentColor={accentColor} />}

            {/* Category label — top left */}
            <p
              className="absolute font-mono uppercase"
              style={{
                top: 11,
                left: 12,
                fontSize: '0.42rem',
                letterSpacing: '0.22em',
                color: accentColor,
                opacity: 0.82,
              }}
            >
              {category}
            </p>

            {/* Equipment name — vertical center */}
            {equipment && (
              <p
                className="absolute font-display text-center"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%,-50%)',
                  fontSize: '0.78rem',
                  color: def.textColor,
                  lineHeight: 1.35,
                  opacity: def.equipOpacity,
                  maxWidth: '72%',
                  letterSpacing: surface === 'brushedMetal' ? '0.06em' : '0',
                  textTransform: surface === 'brushedMetal' ? 'uppercase' : 'none',
                  fontFamily: surface === 'blueprint' ? 'monospace' : 'inherit',
                }}
              >
                {equipment}
              </p>
            )}

            {/* "Photo" watermark — bottom right */}
            <p
              className="absolute font-mono"
              style={{
                bottom: 14,
                right: 11,
                fontSize: '0.37rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: def.labelColor,
              }}
            >
              Photo
            </p>
          </div>
        )}
      </div>

      {/* ── Caption ────────────────────────────────────────────── */}
      <div
        className="px-3 py-2.5"
        style={{
          background: hovered ? 'var(--color-hps-parchment)' : 'var(--color-hps-cream)',
          borderTop: `1px solid ${hovered ? accentColor + '28' : 'transparent'}`,
          transition: 'background 200ms ease,border-color 200ms ease',
        }}
      >
        <p className="font-body" style={{ fontSize: '0.72rem', color: 'var(--color-hps-ink)', lineHeight: 1.4 }}>
          {caption}
        </p>
      </div>
    </div>
  )
}
