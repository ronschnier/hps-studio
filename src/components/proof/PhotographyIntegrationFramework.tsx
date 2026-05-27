import { useState } from 'react'

export type PhotoEnvironment =
  | 'fabrication'
  | 'golf'
  | 'hospitality'
  | 'accessibility'
  | 'outdoor'
  | 'studio'

export type PhotoAspect = '16/9' | '4/3' | '3/2' | '1/1' | '3/4'

export interface PhotoMetaItem {
  label: string
  value: string
}

export interface AnnotationDef {
  x: number        // 0–100 percentage position
  y: number        // 0–100 percentage position
  label: string
  detail?: string  // secondary line beneath label
}

export interface OperationalPhotoProps {
  src?: string
  alt?: string
  caption?: string
  environment?: PhotoEnvironment
  aspect?: PhotoAspect
  metadata?: PhotoMetaItem[]
  accentColor?: string
  annotations?: AnnotationDef[]
  annotationColor?: string
  revealDelay?: number
  className?: string
}

// ── Environment atmospheric definitions ───────────────────────────────────────

interface EnvDef {
  base: string
  overlay: string
  label: string
  labelColor: string
  cornerColor: string
}

const ENVIRONMENTS: Record<PhotoEnvironment, EnvDef> = {
  fabrication: {
    base: 'linear-gradient(165deg, #f0e5ce 0%, #e4d5b8 55%, #dcc9a8 100%)',
    overlay: [
      'radial-gradient(ellipse at 80% 15%, rgba(248,114,57,0.07) 0%, transparent 50%)',
      'repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(248,114,57,0.016) 2px, rgba(248,114,57,0.016) 3px)',
    ].join(', '),
    label: 'Fabrication · Production Photography',
    labelColor: 'rgba(248,114,57,0.45)',
    cornerColor: 'rgba(248,114,57,0.35)',
  },
  golf: {
    base: 'linear-gradient(180deg, #eff4e4 0%, #e5ecda 40%, #dde6d0 100%)',
    overlay: [
      'radial-gradient(ellipse at 50% 0%, rgba(120,160,100,0.07) 0%, transparent 55%)',
      'repeating-linear-gradient(180deg, transparent 0px, transparent 4px, rgba(120,160,100,0.018) 4px, rgba(120,160,100,0.018) 5px)',
    ].join(', '),
    label: 'Golf Operations · Course Photography',
    labelColor: 'rgba(71,140,92,0.45)',
    cornerColor: 'rgba(71,140,92,0.35)',
  },
  hospitality: {
    base: 'linear-gradient(165deg, #f2e8d4 0%, #ecd8bc 55%, #e5cba8 100%)',
    overlay: [
      'radial-gradient(ellipse at 30% 60%, rgba(184,136,42,0.09) 0%, transparent 52%)',
      'radial-gradient(ellipse at 80% 20%, rgba(248,114,57,0.04) 0%, transparent 40%)',
    ].join(', '),
    label: 'Hospitality · Environment Photography',
    labelColor: 'rgba(184,136,42,0.45)',
    cornerColor: 'rgba(184,136,42,0.35)',
  },
  accessibility: {
    base: 'linear-gradient(165deg, #f4f0ea 0%, #eeeae4 55%, #e8e2da 100%)',
    overlay: [
      'repeating-linear-gradient(0deg, rgba(13,148,136,0.022) 0px, rgba(13,148,136,0.022) 1px, transparent 1px, transparent 20px)',
      'repeating-linear-gradient(90deg, rgba(13,148,136,0.022) 0px, rgba(13,148,136,0.022) 1px, transparent 1px, transparent 20px)',
    ].join(', '),
    label: 'Accessibility · Compliance Documentation',
    labelColor: 'rgba(13,148,136,0.45)',
    cornerColor: 'rgba(13,148,136,0.35)',
  },
  outdoor: {
    base: 'linear-gradient(180deg, #f0f4f8 0%, #eaeff0 50%, #e4ebe4 100%)',
    overlay: 'radial-gradient(ellipse at 50% 0%, rgba(150,200,230,0.08) 0%, transparent 55%)',
    label: 'Outdoor · Environment Photography',
    labelColor: 'rgba(100,140,160,0.45)',
    cornerColor: 'rgba(100,140,160,0.35)',
  },
  studio: {
    base: 'linear-gradient(135deg, #f2ede4 0%, #ede5d8 55%, #e5dac8 100%)',
    overlay: 'radial-gradient(ellipse at 70% 20%, rgba(255,245,220,0.12) 0%, transparent 50%)',
    label: 'Studio · Production Photography',
    labelColor: 'rgba(140,120,90,0.45)',
    cornerColor: 'rgba(140,120,90,0.35)',
  },
}

const ASPECT_RATIOS: Record<PhotoAspect, string> = {
  '16/9': '56.25%',
  '4/3':  '75%',
  '3/2':  '66.66%',
  '1/1':  '100%',
  '3/4':  '133.33%',
}

// ── Corner registration mark ───────────────────────────────────────────────────

function CornerMark({ corner, color }: { corner: 'tl' | 'tr' | 'bl' | 'br'; color: string }) {
  const isTop   = corner === 'tl' || corner === 'tr'
  const isLeft  = corner === 'tl' || corner === 'bl'
  const SIZE = 10

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        top:    isTop   ? 8 : undefined,
        bottom: !isTop  ? 8 : undefined,
        left:   isLeft  ? 8 : undefined,
        right:  !isLeft ? 8 : undefined,
        width:  SIZE,
        height: SIZE,
        borderTop:    isTop   ? `1px solid ${color}` : 'none',
        borderBottom: !isTop  ? `1px solid ${color}` : 'none',
        borderLeft:   isLeft  ? `1px solid ${color}` : 'none',
        borderRight:  !isLeft ? `1px solid ${color}` : 'none',
      }}
    />
  )
}

// ── Main component ─────────────────────────────────────────────────────────────

export function OperationalPhoto({
  src,
  alt,
  caption,
  environment = 'studio',
  aspect = '4/3',
  metadata,
  accentColor,
  annotations,
  annotationColor,
  revealDelay = 0,
  className,
}: OperationalPhotoProps) {
  const [hovered, setHovered] = useState(false)
  const env = ENVIRONMENTS[environment]
  const paddingBottom = ASPECT_RATIOS[aspect]

  return (
    <div
      data-reveal
      data-reveal-delay={String(revealDelay)}
      className={className}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      {/* Visual frame */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          paddingBottom,
          overflow: 'hidden',
          border: `1px solid rgba(200,180,154,0.38)`,
          borderRadius: '2px',
          cursor: src ? 'default' : undefined,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {src ? (
          /* ── Real photo mode ── */
          <>
            <img
              src={src}
              alt={alt ?? ''}
              loading="lazy"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transform: hovered ? 'scale(1.04)' : 'scale(1)',
                transition: 'transform 0.65s cubic-bezier(.16,1,.3,1)',
                willChange: 'transform',
              }}
            />
            {/* Atmospheric blend: subtle environmental tint over the photo */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(180deg, transparent 55%, ${env.base.replace('linear-gradient(', 'linear-gradient(180deg,').split(',')[0]}20 100%)`,
                pointerEvents: 'none',
                transition: 'opacity 0.4s ease',
                opacity: hovered ? 0.5 : 0.75,
              }}
            />
          </>
        ) : (
          /* ── Placeholder mode ── */
          <>
            {/* Base environment layer */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                background: env.base,
              }}
            />
            {/* Atmospheric overlay */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                background: env.overlay,
                transform: hovered ? 'scale(1.03) translateY(-1%)' : 'scale(1)',
                transition: 'transform 0.65s cubic-bezier(.16,1,.3,1)',
                willChange: 'transform',
              }}
            />
          </>
        )}

        {/* Corner registration marks */}
        <CornerMark corner="tl" color={env.cornerColor} />
        <CornerMark corner="tr" color={env.cornerColor} />
        <CornerMark corner="bl" color={env.cornerColor} />
        <CornerMark corner="br" color={env.cornerColor} />

        {/* Operational annotation dots */}
        {annotations?.map((ann, i) => {
          const dotColor = annotationColor ?? accentColor ?? env.cornerColor.replace('0.35', '0.9')
          const above = ann.y > 68
          return (
            <div
              key={i}
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: `${ann.x}%`,
                top: `${ann.y}%`,
                transform: 'translate(-50%, -50%)',
                zIndex: 6,
                pointerEvents: 'none',
              }}
            >
              <div style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: dotColor,
                border: '1.5px solid rgba(255,255,255,0.88)',
                boxShadow: '0 0 0 3px rgba(0,0,0,0.14)',
              }} />
              <div style={{
                position: 'absolute',
                ...(above ? { bottom: 'calc(100% + 5px)' } : { top: 'calc(100% + 5px)' }),
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(18,14,10,0.88)',
                padding: '0.12rem 0.42rem',
                borderRadius: '1px',
                whiteSpace: 'nowrap',
                maxWidth: '120px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                borderLeft: `2px solid ${dotColor}`,
              }}>
                <span style={{
                  display: 'block',
                  fontFamily: 'monospace',
                  fontSize: '0.42rem',
                  letterSpacing: '0.12em',
                  color: 'rgba(244,234,212,0.92)',
                  textTransform: 'uppercase' as const,
                }}>{ann.label}</span>
                {ann.detail && <span style={{
                  display: 'block',
                  fontFamily: 'monospace',
                  fontSize: '0.40rem',
                  color: 'rgba(244,234,212,0.56)',
                }}>{ann.detail}</span>}
              </div>
            </div>
          )
        })}

        {/* Environment label (placeholder only) */}
        {!src && (
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: 14,
              left: 16,
              right: 16,
            }}
          >
            <span
              className="font-mono"
              style={{
                fontSize: '0.48rem',
                letterSpacing: '0.16em',
                color: env.labelColor,
                textTransform: 'uppercase',
              }}
            >
              {env.label}
            </span>
          </div>
        )}

        {/* Metadata overlay (hover reveal) */}
        {metadata && metadata.length > 0 && (
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'rgba(26,21,16,0.72)',
              padding: '0.6rem 0.875rem',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              transform: hovered ? 'translateY(0)' : 'translateY(100%)',
              transition: 'transform 0.35s cubic-bezier(.16,1,.3,1)',
            }}
            aria-hidden={!hovered}
          >
            {metadata.map(m => (
              <div key={m.label} className="flex flex-col">
                <span
                  className="font-mono"
                  style={{ fontSize: '0.46rem', letterSpacing: '0.14em', color: 'rgba(244,234,212,0.50)', textTransform: 'uppercase' }}
                >
                  {m.label}
                </span>
                <span
                  className="font-mono"
                  style={{ fontSize: '0.58rem', letterSpacing: '0.08em', color: 'rgba(244,234,212,0.88)' }}
                >
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Caption strip */}
      {caption && (
        <div
          className="px-1 pt-2.5 pb-1"
          style={{ borderBottom: `1px solid rgba(200,180,154,0.30)` }}
        >
          <p
            className="font-body"
            style={{ fontSize: '0.78125rem', color: 'var(--color-hps-smoke)', lineHeight: 1.5 }}
          >
            {caption}
          </p>
          {accentColor && (
            <div
              className="mt-1.5 w-4"
              style={{ height: 1, background: accentColor, opacity: 0.5 }}
              aria-hidden="true"
            />
          )}
        </div>
      )}
    </div>
  )
}

export default OperationalPhoto
