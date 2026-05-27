// ── RealityAmplificationFramework ─────────────────────────────────────────────
//
// Operational evidence system for the HPS ecosystem.
// Purpose: transform cinematic identity into deployed, believable reality.
//
// This framework treats photography and metadata as operational records —
// not portfolio assets. Every component presents proof, not presentation.
//
// Exports:
//   Types         — DeploymentStatus, DeploymentMeta, EvidenceFrame, ProcessStepDef
//   DeploymentRecord  — primary evidence card with operational metadata sidebar
//   ProcessSequence   — numbered fabrication/installation step storytelling
//   BeforeAfterPanel  — before/after operational state comparison
//   OperationalGrid   — responsive grid of deployment evidence cards
//
// Re-exports: AnnotationDef (from PhotographyIntegrationFramework)
//
// All motion respects prefers-reduced-motion.
// Designed around the emotional target: "These systems actually exist."

import { useEffect } from 'react'
import { OperationalPhoto } from './PhotographyIntegrationFramework'
import { useReducedMotion } from '../motion/CinematicTransitionSystem'
import type { AnnotationDef, PhotoEnvironment, PhotoAspect } from './PhotographyIntegrationFramework'

export type { AnnotationDef }

// ── Types ──────────────────────────────────────────────────────────────────────

export type DeploymentStatus =
  | 'deployed'
  | 'production'
  | 'in-progress'
  | 'pending'
  | 'archive'

export interface DeploymentMeta {
  serial?:    string   // "DEP-2025-001" — operational reference number
  location?:  string   // "Leesburg, FL · Lake County"
  date?:      string   // "Q1 2025" or "March 2025"
  equipment?: string   // "UV Flatbed · CO2 Laser"
  material?:  string   // "3mm Clear Acrylic · UV Ink"
  status?:    DeploymentStatus
  operator?:  string   // "HPS Fabrication Lab"
  client?:    string   // venue or client context
}

export interface EvidenceFrame {
  src?:             string
  alt?:             string
  caption?:         string
  environment?:     PhotoEnvironment
  aspect?:          PhotoAspect
  annotations?:     AnnotationDef[]
  annotationColor?: string
  meta?:            DeploymentMeta
}

export interface ProcessStepDef {
  n:          string   // "01", "02" — step number label
  label:      string   // "Material Prep"
  desc:       string   // operational description
  frame:      EvidenceFrame
  duration?:  string   // "~4 min" — optional timing context
}

// ── Keyframes ──────────────────────────────────────────────────────────────────

const RAF_KEYFRAMES = `
@keyframes raf-dot-pulse {
  0%, 100% { transform: scale(0.82); opacity: 0.70; }
  50%       { transform: scale(1.18); opacity: 1.00; }
}
@keyframes raf-status-breathe {
  0%, 100% { opacity: 0.80; }
  50%       { opacity: 1.00; }
}
`

let _rafKeyframesInjected = false
function ensureRafKeyframes() {
  if (_rafKeyframesInjected || typeof document === 'undefined') return
  const el = document.createElement('style')
  el.setAttribute('data-raf', '')
  el.textContent = RAF_KEYFRAMES
  document.head.appendChild(el)
  _rafKeyframesInjected = true
}

// ── Status configuration ───────────────────────────────────────────────────────

const STATUS_MAP: Record<DeploymentStatus, { label: string; color: string; bg: string }> = {
  'deployed':    { label: 'Deployed',    color: 'rgba(71,140,92,1)',   bg: 'rgba(71,140,92,0.10)'   },
  'production':  { label: 'Production',  color: 'rgba(248,114,57,1)',  bg: 'rgba(248,114,57,0.10)'  },
  'in-progress': { label: 'In Progress', color: 'rgba(13,148,136,1)',  bg: 'rgba(13,148,136,0.10)'  },
  'pending':     { label: 'Pending',     color: 'rgba(184,136,42,1)',  bg: 'rgba(184,136,42,0.10)'  },
  'archive':     { label: 'Archive',     color: 'rgba(120,115,108,1)', bg: 'rgba(120,115,108,0.10)' },
}

// ── Internal helpers ───────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: DeploymentStatus }) {
  const s = STATUS_MAP[status]
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.35rem',
        fontFamily: 'monospace',
        fontSize: '0.52rem',
        letterSpacing: '0.14em',
        color: s.color,
        background: s.bg,
        border: `1px solid ${s.color.replace('1)', '0.28)')}`,
        padding: '0.18rem 0.55rem',
        borderRadius: '1px',
        textTransform: 'uppercase',
      }}
    >
      <span
        style={{
          width: 5,
          height: 5,
          borderRadius: '50%',
          background: s.color,
          flexShrink: 0,
          animation: status === 'deployed' || status === 'production'
            ? 'raf-status-breathe 2.5s ease-in-out infinite'
            : 'none',
        }}
      />
      {s.label}
    </span>
  )
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        padding: '0.55rem 0',
        borderBottom: '1px solid rgba(200,180,154,0.22)',
      }}
    >
      <p style={{
        fontFamily: 'monospace',
        fontSize: '0.48rem',
        letterSpacing: '0.14em',
        color: 'var(--color-hps-smoke)',
        textTransform: 'uppercase',
        marginBottom: '0.15rem',
        opacity: 0.65,
      }}>
        {label}
      </p>
      <p style={{
        fontFamily: 'monospace',
        fontSize: '0.60rem',
        letterSpacing: '0.06em',
        color: 'var(--color-hps-ink)',
        lineHeight: 1.4,
      }}>
        {value}
      </p>
    </div>
  )
}

function RecordHeader({ serial, operator }: { serial?: string; operator?: string }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.55rem 1rem',
        borderBottom: '1px solid rgba(200,180,154,0.25)',
        background: 'rgba(200,180,154,0.06)',
      }}
    >
      <span style={{
        fontFamily: 'monospace',
        fontSize: '0.45rem',
        letterSpacing: '0.20em',
        color: 'var(--color-hps-smoke)',
        textTransform: 'uppercase',
        opacity: 0.55,
      }}>
        Operational Record · {operator ?? 'HPS'}
      </span>
      {serial && (
        <span style={{
          fontFamily: 'monospace',
          fontSize: '0.45rem',
          letterSpacing: '0.14em',
          color: 'var(--color-hps-smoke)',
          opacity: 0.45,
        }}>
          {serial}
        </span>
      )}
    </div>
  )
}

// ── DeploymentRecord ───────────────────────────────────────────────────────────
// Primary evidence card — single surface/system with full operational metadata.
// Image occupies 60% width on desktop; metadata sidebar fills the remainder.
// Compact mode collapses to a tighter presentation for grid usage.

export interface DeploymentRecordProps {
  frame:        EvidenceFrame
  headline?:    string
  context?:     string
  accentColor?: string
  compact?:     boolean
  revealDelay?: number
}

export function DeploymentRecord({
  frame,
  headline,
  context,
  accentColor = 'var(--color-hps-teal-dark)',
  compact = false,
  revealDelay = 0,
}: DeploymentRecordProps) {
  useEffect(ensureRafKeyframes, [])
  const meta = frame.meta ?? {}

  return (
    <div
      data-reveal
      data-reveal-delay={String(revealDelay)}
      style={{
        border: '1px solid rgba(200,180,154,0.38)',
        borderLeft: `3px solid ${accentColor}`,
        borderRadius: '2px',
        background: 'var(--color-hps-parchment)',
        overflow: 'hidden',
      }}
    >
      {/* Record header strip */}
      <RecordHeader serial={meta.serial} operator={meta.operator} />

      {/* Headline block */}
      {(headline || context) && (
        <div style={{ padding: compact ? '0.75rem 1rem 0.5rem' : '1rem 1.25rem 0.75rem' }}>
          {headline && (
            <p style={{
              fontFamily: 'var(--font-display, serif)',
              fontSize: compact ? '0.9375rem' : '1.0625rem',
              color: 'var(--color-hps-ink)',
              lineHeight: 1.2,
              marginBottom: context ? '0.3rem' : 0,
            }}>
              {headline}
            </p>
          )}
          {context && (
            <p style={{
              fontFamily: 'var(--font-body, sans-serif)',
              fontSize: '0.8125rem',
              color: 'var(--color-hps-smoke)',
              lineHeight: 1.55,
            }}>
              {context}
            </p>
          )}
        </div>
      )}

      {/* Image + metadata row */}
      <div
        className={compact
          ? 'grid grid-cols-1'
          : 'grid grid-cols-1 lg:grid-cols-[minmax(0,3fr)_minmax(180px,1fr)]'}
      >
        {/* Image */}
        <div>
          <OperationalPhoto
            src={frame.src}
            alt={frame.alt}
            environment={frame.environment ?? 'studio'}
            aspect={frame.aspect ?? '4/3'}
            annotations={frame.annotations}
            annotationColor={frame.annotationColor ?? accentColor}
            accentColor={accentColor}
          />
        </div>

        {/* Metadata sidebar */}
        {!compact && (
          <div style={{
            padding: '1rem',
            borderLeft: '1px solid rgba(200,180,154,0.22)',
            background: 'rgba(200,180,154,0.04)',
            display: 'flex',
            flexDirection: 'column',
            gap: 0,
          }}>
            {meta.status && (
              <div style={{ marginBottom: '0.75rem' }}>
                <StatusBadge status={meta.status} />
              </div>
            )}
            {meta.location  && <MetaRow label="Location"  value={meta.location}  />}
            {meta.date      && <MetaRow label="Date"      value={meta.date}      />}
            {meta.material  && <MetaRow label="Material"  value={meta.material}  />}
            {meta.equipment && <MetaRow label="Equipment" value={meta.equipment} />}
            {meta.client    && <MetaRow label="Venue"     value={meta.client}    />}
          </div>
        )}
      </div>

      {/* Caption strip */}
      {frame.caption && (
        <div style={{
          padding: compact ? '0.6rem 0.875rem' : '0.75rem 1.25rem',
          borderTop: '1px solid rgba(200,180,154,0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}>
          <p style={{
            fontFamily: 'var(--font-body, sans-serif)',
            fontSize: '0.8125rem',
            color: 'var(--color-hps-smoke)',
            lineHeight: 1.5,
          }}>
            {frame.caption}
          </p>
          {compact && meta.status && <StatusBadge status={meta.status} />}
        </div>
      )}
    </div>
  )
}

// ── ProcessSequence ────────────────────────────────────────────────────────────
// Numbered fabrication or installation step storytelling.
// Each step is a self-contained evidence frame: image + label + description.
// Steps are laid out in a responsive grid: 3-col desktop, 2-col tablet, 1-col mobile.

export interface ProcessSequenceProps {
  steps:        ProcessStepDef[]
  headline?:    string
  context?:     string
  accentColor?: string
}

export function ProcessSequence({
  steps,
  headline,
  context,
  accentColor = 'var(--color-hps-teal-dark)',
}: ProcessSequenceProps) {
  useEffect(ensureRafKeyframes, [])

  const cols = steps.length <= 3 ? steps.length : Math.min(steps.length, 4)

  return (
    <div>
      {(headline || context) && (
        <div style={{ marginBottom: '1.75rem' }}>
          {headline && (
            <p style={{
              fontFamily: 'var(--font-display, serif)',
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              color: 'var(--color-hps-ink)',
              lineHeight: 1.1,
              marginBottom: context ? '0.5rem' : 0,
            }}>
              {headline}
            </p>
          )}
          {context && (
            <p style={{
              fontFamily: 'var(--font-body, sans-serif)',
              fontSize: '0.9375rem',
              color: 'var(--color-hps-smoke)',
              lineHeight: 1.65,
              maxWidth: '52ch',
            }}>
              {context}
            </p>
          )}
        </div>
      )}

      <div
        style={{
          gap: '1px',
          background: 'rgba(200,180,154,0.28)',
          border: '1px solid rgba(200,180,154,0.28)',
          borderRadius: '2px',
          overflow: 'hidden',
        }}
        className={`grid grid-cols-1 sm:grid-cols-2 ${{ 1:'lg:grid-cols-1', 2:'lg:grid-cols-2', 3:'lg:grid-cols-3', 4:'lg:grid-cols-4' }[Math.min(cols, 4)] ?? 'lg:grid-cols-3'}`}
      >
        {steps.map((step, i) => (
          <div
            key={step.n}
            data-reveal
            data-reveal-delay={String(i * 70)}
            style={{
              background: 'var(--color-hps-parchment)',
              position: 'relative',
            }}
          >
            {/* Step number header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.75rem 0.875rem 0.5rem',
              borderBottom: '1px solid rgba(200,180,154,0.22)',
            }}>
              <span style={{
                fontFamily: 'monospace',
                fontSize: '0.52rem',
                letterSpacing: '0.12em',
                color: accentColor,
                background: `${accentColor}12`,
                border: `1px solid ${accentColor}30`,
                padding: '0.1rem 0.45rem',
                borderRadius: '1px',
              }}>
                {step.n}
              </span>
              <span style={{
                fontFamily: 'monospace',
                fontSize: '0.52rem',
                letterSpacing: '0.12em',
                color: 'var(--color-hps-smoke)',
                textTransform: 'uppercase',
                opacity: 0.65,
              }}>
                {step.label}
              </span>
              {step.duration && (
                <span style={{
                  marginLeft: 'auto',
                  fontFamily: 'monospace',
                  fontSize: '0.46rem',
                  letterSpacing: '0.08em',
                  color: 'var(--color-hps-smoke)',
                  opacity: 0.45,
                }}>
                  {step.duration}
                </span>
              )}
            </div>

            {/* Step image */}
            <OperationalPhoto
              src={step.frame.src}
              alt={step.frame.alt}
              environment={step.frame.environment ?? 'fabrication'}
              aspect={step.frame.aspect ?? '4/3'}
              annotations={step.frame.annotations}
              annotationColor={step.frame.annotationColor ?? accentColor}
              accentColor={accentColor}
            />

            {/* Step description */}
            <div style={{ padding: '0.75rem 0.875rem' }}>
              <p style={{
                fontFamily: 'var(--font-body, sans-serif)',
                fontSize: '0.8125rem',
                color: 'var(--color-hps-smoke)',
                lineHeight: 1.6,
              }}>
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── BeforeAfterPanel ───────────────────────────────────────────────────────────
// Operational state comparison. Shows a surface/system before and after
// a fabrication, deployment, or remediation process.
//
// Not a "look how good this is" reveal — a factual operational record
// of before and after states.

export interface BeforeAfterPanelProps {
  before:       EvidenceFrame & { stateLabel?: string }
  after:        EvidenceFrame & { stateLabel?: string }
  headline?:    string
  context?:     string
  accentColor?: string
  revealDelay?: number
}

export function BeforeAfterPanel({
  before,
  after,
  headline,
  context,
  accentColor = 'var(--color-hps-teal-dark)',
  revealDelay = 0,
}: BeforeAfterPanelProps) {
  useEffect(ensureRafKeyframes, [])

  return (
    <div data-reveal data-reveal-delay={String(revealDelay)}>
      {(headline || context) && (
        <div style={{ marginBottom: '1.25rem' }}>
          {headline && (
            <p style={{
              fontFamily: 'var(--font-display, serif)',
              fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
              color: 'var(--color-hps-ink)',
              lineHeight: 1.1,
              marginBottom: context ? '0.4rem' : 0,
            }}>
              {headline}
            </p>
          )}
          {context && (
            <p style={{
              fontFamily: 'var(--font-body, sans-serif)',
              fontSize: '0.875rem',
              color: 'var(--color-hps-smoke)',
              lineHeight: 1.6,
            }}>
              {context}
            </p>
          )}
        </div>
      )}

      <div
        className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr]"
        style={{
          gap: 0,
          border: '1px solid rgba(200,180,154,0.38)',
          borderRadius: '2px',
          overflow: 'hidden',
          background: 'var(--color-hps-parchment)',
        }}
      >
        {/* Before panel */}
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.55rem 0.875rem',
            borderBottom: '1px solid rgba(200,180,154,0.22)',
            background: 'rgba(200,180,154,0.06)',
          }}>
            <span style={{
              fontFamily: 'monospace',
              fontSize: '0.45rem',
              letterSpacing: '0.20em',
              color: 'var(--color-hps-smoke)',
              textTransform: 'uppercase',
              opacity: 0.55,
            }}>
              Before state
            </span>
            {(before as { stateLabel?: string }).stateLabel && (
              <span style={{
                fontFamily: 'monospace',
                fontSize: '0.46rem',
                letterSpacing: '0.10em',
                color: 'var(--color-hps-smoke)',
                opacity: 0.38,
              }}>
                · {(before as { stateLabel?: string }).stateLabel}
              </span>
            )}
          </div>
          <OperationalPhoto
            src={before.src}
            alt={before.alt}
            environment={before.environment ?? 'studio'}
            aspect={before.aspect ?? '4/3'}
            annotations={before.annotations}
            annotationColor={before.annotationColor ?? 'rgba(120,115,108,0.9)'}
            accentColor={accentColor}
          />
          {before.caption && (
            <p style={{
              fontFamily: 'var(--font-body, sans-serif)',
              fontSize: '0.78rem',
              color: 'var(--color-hps-smoke)',
              padding: '0.6rem 0.875rem',
              borderTop: '1px solid rgba(200,180,154,0.22)',
              lineHeight: 1.5,
            }}>
              {before.caption}
            </p>
          )}
        </div>

        {/* Divider */}
        <div style={{
          width: 1,
          background: 'rgba(200,180,154,0.30)',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
          className="hidden lg:flex"
        >
          <div style={{
            position: 'absolute',
            background: 'var(--color-hps-parchment)',
            border: '1px solid rgba(200,180,154,0.40)',
            borderRadius: '50%',
            width: 28,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{
              fontFamily: 'monospace',
              fontSize: '0.55rem',
              color: accentColor,
            }}>→</span>
          </div>
        </div>

        {/* After panel */}
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.55rem 0.875rem',
            borderBottom: '1px solid rgba(200,180,154,0.22)',
            background: `${accentColor}08`,
            borderTop: '2px solid',
            borderTopColor: accentColor,
          }}>
            <span style={{
              fontFamily: 'monospace',
              fontSize: '0.45rem',
              letterSpacing: '0.20em',
              color: accentColor,
              textTransform: 'uppercase',
            }}>
              After state
            </span>
            {(after as { stateLabel?: string }).stateLabel && (
              <span style={{
                fontFamily: 'monospace',
                fontSize: '0.46rem',
                letterSpacing: '0.10em',
                color: accentColor,
                opacity: 0.65,
              }}>
                · {(after as { stateLabel?: string }).stateLabel}
              </span>
            )}
          </div>
          <OperationalPhoto
            src={after.src}
            alt={after.alt}
            environment={after.environment ?? 'studio'}
            aspect={after.aspect ?? '4/3'}
            annotations={after.annotations}
            annotationColor={after.annotationColor ?? accentColor}
            accentColor={accentColor}
          />
          {after.caption && (
            <p style={{
              fontFamily: 'var(--font-body, sans-serif)',
              fontSize: '0.78rem',
              color: 'var(--color-hps-smoke)',
              padding: '0.6rem 0.875rem',
              borderTop: '1px solid rgba(200,180,154,0.22)',
              lineHeight: 1.5,
            }}>
              {after.caption}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

// ── OperationalGrid ────────────────────────────────────────────────────────────
// Responsive grid of deployment evidence cards.
// Compact mode: caption + status only, no sidebar metadata.
// Full mode: use DeploymentRecord's full layout.

export interface OperationalGridProps {
  frames:       EvidenceFrame[]
  columns?:     2 | 3
  headline?:    string
  context?:     string
  accentColor?: string
  compact?:     boolean
}

export function OperationalGrid({
  frames,
  columns = 3,
  headline,
  context,
  accentColor = 'var(--color-hps-teal-dark)',
  compact = true,
}: OperationalGridProps) {
  return (
    <div>
      {(headline || context) && (
        <div style={{ marginBottom: '1.5rem' }}>
          {headline && (
            <p style={{
              fontFamily: 'var(--font-display, serif)',
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              color: 'var(--color-hps-ink)',
              lineHeight: 1.1,
              marginBottom: context ? '0.5rem' : 0,
            }}>
              {headline}
            </p>
          )}
          {context && (
            <p style={{
              fontFamily: 'var(--font-body, sans-serif)',
              fontSize: '0.9375rem',
              color: 'var(--color-hps-smoke)',
              lineHeight: 1.65,
              maxWidth: '52ch',
            }}>
              {context}
            </p>
          )}
        </div>
      )}

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 ${columns === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-5`}
      >
        {frames.map((frame, i) => (
          <DeploymentRecord
            key={i}
            frame={frame}
            accentColor={accentColor}
            compact={compact}
            revealDelay={(i % columns) * 70}
          />
        ))}
      </div>
    </div>
  )
}

// ── EvidenceCallout ────────────────────────────────────────────────────────────
// Compact inline evidence statement — a single operational fact with
// an optional image thumbnail and metadata tags. Use within prose sections
// to ground a claim in a specific deployed example.

export interface EvidenceCalloutProps {
  label:        string
  detail:       string
  tags?:        string[]
  accentColor?: string
  frame?:       EvidenceFrame
  revealDelay?: number
}

export function EvidenceCallout({
  label,
  detail,
  tags,
  accentColor = 'var(--color-hps-teal-dark)',
  frame,
  revealDelay = 0,
}: EvidenceCalloutProps) {
  return (
    <div
      data-reveal
      data-reveal-delay={String(revealDelay)}
      style={{
        display: 'flex',
        gap: '1rem',
        padding: '0.875rem 1rem',
        background: 'var(--color-hps-parchment)',
        border: '1px solid rgba(200,180,154,0.35)',
        borderLeft: `3px solid ${accentColor}`,
        borderRadius: '2px',
      }}
    >
      {frame && (
        <div style={{ width: 64, flexShrink: 0 }}>
          <OperationalPhoto
            src={frame.src}
            environment={frame.environment ?? 'studio'}
            aspect="1/1"
            accentColor={accentColor}
          />
        </div>
      )}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{
          fontFamily: 'var(--font-body, sans-serif)',
          fontWeight: 500,
          fontSize: '0.9375rem',
          color: 'var(--color-hps-ink)',
          marginBottom: '0.25rem',
          lineHeight: 1.3,
        }}>
          {label}
        </p>
        <p style={{
          fontFamily: 'var(--font-body, sans-serif)',
          fontSize: '0.8125rem',
          color: 'var(--color-hps-smoke)',
          lineHeight: 1.55,
          marginBottom: tags?.length ? '0.5rem' : 0,
        }}>
          {detail}
        </p>
        {tags && tags.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
            {tags.map(tag => (
              <span
                key={tag}
                style={{
                  fontFamily: 'monospace',
                  fontSize: '0.46rem',
                  letterSpacing: '0.12em',
                  color: accentColor,
                  background: `${accentColor}10`,
                  border: `1px solid ${accentColor}28`,
                  padding: '0.1rem 0.4rem',
                  borderRadius: '1px',
                  textTransform: 'uppercase',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// ── useRafMotion ───────────────────────────────────────────────────────────────
// Convenience hook — ensures keyframes are injected and returns
// the reduced-motion flag. Import in component files that use RAF animations.

export function useRafMotion(): boolean {
  useEffect(ensureRafKeyframes, [])
  return useReducedMotion()
}
