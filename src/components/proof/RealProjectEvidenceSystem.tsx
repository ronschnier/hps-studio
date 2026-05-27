// ── RealProjectEvidenceSystem ──────────────────────────────────────────────────
//
// Structured operational proof of completed HPS work.
// Not a portfolio grid — a record of work that became infrastructure.
//
// Each project card documents: what was built, how, with what systems,
// and what the operational outcome was.
//
// Use across ecosystem pages as evidence of real delivery capability.

import { OperationalPhoto } from './PhotographyIntegrationFramework'
import type { PhotoEnvironment, PhotoAspect } from './PhotographyIntegrationFramework'

// ── Types ──────────────────────────────────────────────────────────────────────

export type ProjectType =
  | 'fabrication'
  | 'golf-signage'
  | 'accessibility'
  | 'hospitality'
  | 'platform'
  | 'ai-workflow'
  | 'hosting'
  | 'sponsor-system'

export interface ProjectEvidenceCard {
  id:            string
  type:          ProjectType
  title:         string
  context:       string           // venue/client context, no names required
  environment:   string           // "Golf course, Lake County, FL"
  challenge:     string
  approach:      string
  systems:       string[]
  materials?:    string[]
  outcome:       string
  status:        'deployed' | 'active' | 'completed'
  photo?:        { environment: PhotoEnvironment; aspect: PhotoAspect }
  accentColor:   string
  revealDelay?:  number
}

// ── Type configuration ─────────────────────────────────────────────────────────

const TYPE_LABELS: Record<ProjectType, string> = {
  'fabrication':    'Fabrication',
  'golf-signage':   'Golf Signage',
  'accessibility':  'Accessibility',
  'hospitality':    'Hospitality',
  'platform':       'Platform',
  'ai-workflow':    'AI Workflow',
  'hosting':        'Hosting',
  'sponsor-system': 'Sponsor System',
}

const STATUS_CONFIG: Record<ProjectEvidenceCard['status'], { label: string; color: string }> = {
  deployed:  { label: 'Deployed',  color: 'rgba(71,140,92,1)'  },
  active:    { label: 'Active',    color: 'rgba(13,148,136,1)' },
  completed: { label: 'Completed', color: 'rgba(184,136,42,1)' },
}

// ── Default project evidence data ──────────────────────────────────────────────
// Placeholder evidence records ready for real project data.

export const DEFAULT_PROJECT_EVIDENCE: ProjectEvidenceCard[] = [
  {
    id: 'golf-sponsor-18hole',
    type: 'golf-signage',
    title: '18-hole sponsor system deployment',
    context: 'Private golf course, Central Florida',
    environment: 'Golf course, Lake County, FL',
    challenge: 'Course needed sponsor surfaces at all 18 holes with consistent branding, physical durability, and a live QR engagement layer — managed without a dedicated staff person.',
    approach: 'Complete site survey, per-hole specification, in-house fabrication of UV-printed aluminum plaques, field installation, and QR activation in a single 10-day engagement.',
    systems: ['HPS QR Code', 'HPS Golf Systems'],
    materials: ['Aluminum composite', 'UV ink', 'Weather-sealed substrate'],
    outcome: 'All 18 holes deployed with sponsor signage and live QR codes. Monthly scan reports delivered to course management. Zero reprints in first operational season.',
    status: 'deployed',
    photo: { environment: 'golf', aspect: '16/9' },
    accentColor: 'var(--color-hps-green)',
  },
  {
    id: 'restaurant-qr-hospitality',
    type: 'hospitality',
    title: 'Restaurant QR menu and surface system',
    context: 'Full-service restaurant, Central Florida',
    environment: 'Restaurant, Lake County, FL',
    challenge: 'Menu changes multiple times per week. Previous printed menus created reprinting costs and staff friction whenever items needed updating.',
    approach: 'HPS QR Menu setup with branded table tents and counter cards produced in-house. Staff trained on dashboard updates in a single onboarding session.',
    systems: ['HPS QR Menu', 'HPS QR Code'],
    materials: ['UV-printed table tents', 'Counter cards', 'Window panels'],
    outcome: 'Menu updates now take under 2 minutes from any device. Physical surfaces unchanged since deployment. 86 mode used regularly for item management.',
    status: 'active',
    photo: { environment: 'hospitality', aspect: '4/3' },
    accentColor: 'var(--color-hps-coral-warm)',
  },
  {
    id: 'accessibility-wcag-remediation',
    type: 'accessibility',
    title: 'WCAG 2.2 AA audit and remediation',
    context: 'Municipal services website',
    environment: 'Web property, public sector',
    challenge: 'Site failing contrast requirements and lacking keyboard navigation support. Legal team flagged for ADA compliance exposure.',
    approach: 'Full audit cycle: automated scan, manual review, screen reader testing. Remediation specification delivered to development team with prioritized fix queue.',
    systems: ['HPS Accessibility'],
    outcome: 'Remediation reduced critical issues by 94%. Site passed full WCAG 2.2 AA verification. VPAT documentation produced for procurement requirements.',
    status: 'completed',
    photo: { environment: 'accessibility', aspect: '4/3' },
    accentColor: 'var(--color-hps-teal-dark)',
  },
  {
    id: 'fabrication-sponsor-plaque',
    type: 'fabrication',
    title: 'Sponsor plaque production run',
    context: 'Golf tournament sponsor series',
    environment: 'Fabrication, Leesburg, FL',
    challenge: 'Tournament needed 24 sponsor plaques across multiple sponsor tiers, each with different branding, sizes, and QR code placement — delivered in under a week.',
    approach: 'Production batch across UV flatbed and CO2 laser. All plaques produced from a single layout system with tier-specific material specifications.',
    systems: ['HPS QR Code', 'HPS Golf Systems'],
    materials: ['Aluminum composite', 'UV ink', 'Laser engraving', '3mm acrylic'],
    outcome: '24 plaques delivered on time, installed before tournament day. QR codes linked to sponsor landing pages. All plaques weather-rated for outdoor use.',
    status: 'deployed',
    photo: { environment: 'fabrication', aspect: '4/3' },
    accentColor: 'var(--color-hps-coral-warm)',
  },
]

// ── Individual project card ────────────────────────────────────────────────────

export function ProjectEvidenceCard({ project }: { project: ProjectEvidenceCard }) {
  const statusCfg = STATUS_CONFIG[project.status]

  return (
    <div
      data-reveal
      data-reveal-delay={String(project.revealDelay ?? 0)}
      style={{
        background: 'var(--color-hps-parchment)',
        border: '1px solid rgba(200,180,154,0.38)',
        borderLeft: `3px solid ${project.accentColor}`,
        borderRadius: '2px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Card header */}
      <div style={{
        padding: '0.6rem 1rem',
        borderBottom: '1px solid rgba(200,180,154,0.22)',
        background: 'rgba(200,180,154,0.05)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '0.75rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{
            fontFamily: 'monospace',
            fontSize: '0.46rem',
            letterSpacing: '0.14em',
            color: project.accentColor,
            background: `${project.accentColor}12`,
            border: `1px solid ${project.accentColor}28`,
            padding: '0.1rem 0.42rem',
            borderRadius: '1px',
            textTransform: 'uppercase',
          }}>
            {TYPE_LABELS[project.type]}
          </span>
          <span style={{
            fontFamily: 'monospace',
            fontSize: '0.46rem',
            letterSpacing: '0.10em',
            color: 'var(--color-hps-smoke)',
            opacity: 0.55,
          }}>
            {project.environment}
          </span>
        </div>
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.3rem',
          fontFamily: 'monospace',
          fontSize: '0.46rem',
          letterSpacing: '0.12em',
          color: statusCfg.color,
          textTransform: 'uppercase',
          flexShrink: 0,
        }}>
          <span style={{ width: 4, height: 4, borderRadius: '50%', background: statusCfg.color }} />
          {statusCfg.label}
        </span>
      </div>

      {/* Project image */}
      {project.photo && (
        <OperationalPhoto
          environment={project.photo.environment}
          aspect={project.photo.aspect}
          accentColor={project.accentColor}
        />
      )}

      {/* Content */}
      <div style={{ padding: '1rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <div>
          <h3 style={{
            fontFamily: 'var(--font-display, serif)',
            fontSize: '1.0625rem',
            color: 'var(--color-hps-ink)',
            lineHeight: 1.2,
            marginBottom: '0.25rem',
          }}>
            {project.title}
          </h3>
          <p style={{
            fontFamily: 'monospace',
            fontSize: '0.50rem',
            letterSpacing: '0.10em',
            color: 'var(--color-hps-smoke)',
            opacity: 0.55,
          }}>
            {project.context}
          </p>
        </div>

        <div style={{ borderTop: '1px solid rgba(200,180,154,0.22)', paddingTop: '0.6rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div>
            <p style={{
              fontFamily: 'monospace',
              fontSize: '0.45rem',
              letterSpacing: '0.14em',
              color: 'var(--color-hps-smoke)',
              textTransform: 'uppercase',
              opacity: 0.52,
              marginBottom: '0.2rem',
            }}>
              Approach
            </p>
            <p style={{
              fontFamily: 'var(--font-body, sans-serif)',
              fontSize: '0.8125rem',
              color: 'var(--color-hps-smoke)',
              lineHeight: 1.55,
            }}>
              {project.approach}
            </p>
          </div>

          <div style={{
            background: `${project.accentColor}08`,
            border: `1px solid ${project.accentColor}20`,
            borderLeft: `2px solid ${project.accentColor}`,
            padding: '0.4rem 0.6rem',
            borderRadius: '1px',
          }}>
            <p style={{
              fontFamily: 'monospace',
              fontSize: '0.44rem',
              letterSpacing: '0.12em',
              color: 'var(--color-hps-smoke)',
              textTransform: 'uppercase',
              opacity: 0.52,
              marginBottom: '0.2rem',
            }}>
              Outcome
            </p>
            <p style={{
              fontFamily: 'var(--font-body, sans-serif)',
              fontSize: '0.8125rem',
              color: 'var(--color-hps-ink)',
              lineHeight: 1.5,
            }}>
              {project.outcome}
            </p>
          </div>
        </div>

        {/* Systems + materials tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginTop: 'auto', paddingTop: '0.35rem' }}>
          {project.systems.map(s => (
            <span
              key={s}
              style={{
                fontFamily: 'monospace',
                fontSize: '0.46rem',
                letterSpacing: '0.10em',
                color: project.accentColor,
                background: `${project.accentColor}0E`,
                border: `1px solid ${project.accentColor}22`,
                padding: '0.1rem 0.38rem',
                borderRadius: '1px',
              }}
            >
              {s}
            </span>
          ))}
          {project.materials?.map(m => (
            <span
              key={m}
              style={{
                fontFamily: 'monospace',
                fontSize: '0.46rem',
                letterSpacing: '0.10em',
                color: 'var(--color-hps-smoke)',
                background: 'rgba(200,180,154,0.14)',
                border: '1px solid rgba(200,180,154,0.30)',
                padding: '0.1rem 0.38rem',
                borderRadius: '1px',
              }}
            >
              {m}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Main section component ─────────────────────────────────────────────────────

export interface RealProjectEvidenceSystemProps {
  projects?:    ProjectEvidenceCard[]
  headline?:    string
  context?:     string
  columns?:     2 | 3
}

export function RealProjectEvidenceSystem({
  projects = DEFAULT_PROJECT_EVIDENCE,
  headline = 'Work that became operational infrastructure.',
  context = 'Each record below represents a completed engagement — designed, built, deployed, and in active use.',
  columns = 2,
}: RealProjectEvidenceSystemProps) {
  return (
    <section
      style={{
        background: 'var(--color-hps-cream)',
        borderTop: '1px solid rgba(200,180,154,0.28)',
      }}
    >
      <div
        className="max-w-7xl mx-auto px-6 lg:px-10"
        style={{ paddingTop: '4rem', paddingBottom: '5rem' }}
      >
        <div data-reveal className="mb-10">
          <p
            className="font-mono uppercase mb-3"
            style={{ fontSize: '0.6rem', letterSpacing: '0.22em', color: 'var(--color-hps-teal-dark)' }}
          >
            Project evidence
          </p>
          {headline && (
            <h2
              className="font-display mb-4"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.06 }}
            >
              {headline}
            </h2>
          )}
          {context && (
            <p
              className="font-body max-w-2xl leading-relaxed"
              style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}
            >
              {context}
            </p>
          )}
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 ${columns === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-6`}>
          {projects.map((project, i) => (
            <ProjectEvidenceCard
              key={project.id}
              project={{ ...project, revealDelay: (i % columns) * 80 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default RealProjectEvidenceSystem
