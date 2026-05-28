import { useState } from 'react'
import BackgroundAtmosphere from '../components/decorative/BackgroundAtmosphere'
import CTABand from '../components/sections/CTABand'
import { usePageMeta } from '../hooks/usePageMeta'

// ── Data ──────────────────────────────────────────────────────────────────────

const interests = [
  {
    id: 'web-platforms',
    label: 'Website & Platforms',
    desc: 'Web development, digital platforms, UX/UI, e-commerce, and operational systems.',
    accent: 'var(--color-hps-teal-dark)',
    accentHex: '#0d9488',
  },
  {
    id: 'accessibility',
    label: 'Accessibility & Compliance',
    desc: 'WCAG audit, Section 508, remediation, ongoing monitoring, and accessibility infrastructure.',
    accent: 'var(--color-hps-teal)',
    accentHex: '#14b8a6',
  },
  {
    id: 'fabrication',
    label: 'Fabrication & Signage',
    desc: 'UV printing, laser systems, signage, embroidery, apparel, and QR-connected surfaces.',
    accent: 'var(--color-hps-coral-warm)',
    accentHex: '#f87239',
  },
  {
    id: 'golf-hospitality',
    label: 'Golf & Hospitality',
    desc: 'Golf course systems, sponsor plaques, hospitality signage, QR menus, and operational surfaces.',
    accent: 'var(--color-hps-green)',
    accentHex: '#478c5c',
  },
  {
    id: 'media-creator',
    label: 'Media & Creator Systems',
    desc: 'FreeBeatsMUSIC, creator tools, merchandise, media production, and creator ecosystems.',
    accent: 'var(--color-hps-gold)',
    accentHex: '#e8b84b',
  },
  {
    id: 'hosting',
    label: 'Hosting & Infrastructure',
    desc: 'Managed hosting, domain management, infrastructure, uptime monitoring, and migration.',
    accent: 'var(--color-hps-gold-rich)',
    accentHex: '#b8882a',
  },
  {
    id: 'ai-systems',
    label: 'AI Systems & Automation',
    desc: 'Workflow automation, AI integration, operational AI, and connected system intelligence.',
    accent: 'var(--color-hps-teal-dark)',
    accentHex: '#0d9488',
  },
  {
    id: 'general',
    label: 'General Consultation',
    desc: 'Not sure yet — explore the ecosystem, discuss possibilities, and define what you need. Projects of any size welcome.',
    accent: 'var(--color-hps-ink)',
    accentHex: '#0c1420',
  },
] as const

type InterestId = typeof interests[number]['id']

const conditionalNeeds: Record<InterestId, Array<{ id: string; label: string }>> = {
  'web-platforms': [
    { id: 'new-website', label: 'New website or redesign' },
    { id: 'app-development', label: 'Web application development' },
    { id: 'ux-ui', label: 'UX/UI design or audit' },
    { id: 'ecommerce', label: 'E-commerce or online store' },
    { id: 'cms-migration', label: 'CMS migration' },
    { id: 'digital-strategy', label: 'Digital strategy or audit' },
  ],
  'accessibility': [
    { id: 'wcag-audit', label: 'WCAG 2.1 / 2.2 audit' },
    { id: 'section-508', label: 'Section 508 compliance' },
    { id: 'remediation', label: 'Remediation and code fixes' },
    { id: 'ongoing-monitoring', label: 'Ongoing compliance monitoring' },
    { id: 'healthcare-federal', label: 'Healthcare or federal requirements' },
    { id: 'accessibility-training', label: 'Team training and documentation' },
  ],
  'fabrication': [
    { id: 'uv-printing', label: 'UV printing and signage' },
    { id: 'laser-engraving', label: 'Laser engraving or cutting' },
    { id: 'apparel-dtg', label: 'DTG apparel printing' },
    { id: 'embroidery', label: 'Embroidery and uniforms' },
    { id: 'sublimation', label: 'Sublimation printing' },
    { id: 'qr-surfaces', label: 'QR-connected surfaces' },
    { id: 'plaques-awards', label: 'Plaques and awards' },
    { id: '3d-printing', label: '3D printing and prototyping' },
  ],
  'golf-hospitality': [
    { id: 'sponsor-signage', label: 'Sponsor signage program' },
    { id: 'golf-plaques', label: 'Golf plaques and awards' },
    { id: 'cart-signage', label: 'Cart and course signage' },
    { id: 'hospitality-signage', label: 'Restaurant or hotel signage' },
    { id: 'qr-menu', label: 'QR digital menu system' },
    { id: 'staff-apparel', label: 'Staff uniforms and apparel' },
    { id: 'tournament', label: 'Tournament or event production' },
  ],
  'media-creator': [
    { id: 'streaming', label: 'Streaming or music platform' },
    { id: 'creator-hub', label: 'Creator tools and distribution' },
    { id: 'merchandise', label: 'Merchandise and branded products' },
    { id: 'artist-branding', label: 'Artist or creator branding' },
    { id: 'media-studio', label: 'Media studio or production tools' },
    { id: 'content-strategy', label: 'Content strategy and social' },
  ],
  'hosting': [
    { id: 'new-hosting', label: 'New hosting setup' },
    { id: 'migration', label: 'Migration from another host' },
    { id: 'managed', label: 'Managed hosting and maintenance' },
    { id: 'performance', label: 'Performance and uptime improvements' },
    { id: 'ecommerce-hosting', label: 'E-commerce or restaurant hosting' },
    { id: 'infrastructure', label: 'Infrastructure planning' },
  ],
  'ai-systems': [
    { id: 'workflow-automation', label: 'Workflow automation' },
    { id: 'ai-integration', label: 'AI tool integration' },
    { id: 'operational-ai', label: 'Operational AI systems' },
    { id: 'content-ai', label: 'Content generation setup' },
    { id: 'ai-training', label: 'Team AI training' },
    { id: 'custom-ai', label: 'Custom AI workflows' },
  ],
  'general': [
    { id: 'explore', label: 'Exploring the HPS ecosystem' },
    { id: 'existing-client', label: 'Existing client inquiry' },
    { id: 'partnership', label: 'Partnership or collaboration' },
    { id: 'other', label: 'Something not listed here' },
  ],
}

// ── Field component ───────────────────────────────────────────────────────────

function Field({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required,
  helper,
  as,
  options,
}: {
  label: string
  name: string
  type?: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  required?: boolean
  helper?: string
  as?: 'textarea' | 'select'
  options?: string[]
}) {
  const baseStyle: React.CSSProperties = {
    width: '100%',
    fontFamily: 'var(--font-body)',
    fontSize: '0.9375rem',
    color: 'var(--color-hps-ink)',
    background: 'var(--color-hps-cream)',
    border: '1px solid rgba(200,180,154,0.55)',
    borderRadius: '2px',
    padding: '0.75rem 1rem',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    resize: as === 'textarea' ? 'vertical' : undefined,
    minHeight: as === 'textarea' ? '7rem' : undefined,
    appearance: as === 'select' ? 'none' : undefined,
  }

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="font-mono uppercase"
        style={{ fontSize: '0.58rem', letterSpacing: '0.18em', color: 'var(--color-hps-smoke)' }}
      >
        {label}{required && <span aria-hidden="true" style={{ color: 'var(--color-hps-coral-warm)', marginLeft: '0.25rem' }}>*</span>}
      </label>
      {helper && (
        <p className="font-body" style={{ fontSize: '0.8125rem', color: 'var(--color-hps-smoke)', opacity: 0.70, marginTop: '-0.25rem' }}>
          {helper}
        </p>
      )}
      {as === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          style={baseStyle}
          onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-hps-green)')}
          onBlur={e => (e.currentTarget.style.borderColor = 'rgba(200,180,154,0.55)')}
        />
      ) : as === 'select' ? (
        <div style={{ position: 'relative' }}>
          <select
            id={name}
            name={name}
            value={value}
            onChange={e => onChange(e.target.value)}
            required={required}
            style={{ ...baseStyle, paddingRight: '2.5rem', cursor: 'pointer' }}
            onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-hps-green)')}
            onBlur={e => (e.currentTarget.style.borderColor = 'rgba(200,180,154,0.55)')}
          >
            <option value="">Select…</option>
            {options?.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
          <span
            style={{ position: 'absolute', right: '0.875rem', top: '50%', transform: 'translateY(-50%)', fontSize: '0.7rem', color: 'var(--color-hps-smoke)', pointerEvents: 'none' }}
            aria-hidden="true"
          >▾</span>
        </div>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          style={baseStyle}
          onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-hps-green)')}
          onBlur={e => (e.currentTarget.style.borderColor = 'rgba(200,180,154,0.55)')}
        />
      )}
    </div>
  )
}

// ── Progress bar ─────────────────────────────────────────────────────────────

function StepProgress({ step, total }: { step: number; total: number }) {
  return (
    <div className="flex items-center gap-3 mb-10" aria-label={`Step ${step} of ${total}`}>
      {Array.from({ length: total }, (_, i) => (
        <div key={i} className="flex items-center gap-3">
          <div
            style={{
              width: i < step ? '2rem' : '0.5rem',
              height: '2px',
              borderRadius: '2px',
              background: i < step ? 'var(--color-hps-green)' : 'rgba(200,180,154,0.40)',
              transition: 'width 0.4s cubic-bezier(0.16,1,0.3,1), background 0.3s ease',
            }}
            aria-hidden="true"
          />
        </div>
      ))}
      <span className="font-mono" style={{ fontSize: '0.58rem', letterSpacing: '0.15em', color: 'var(--color-hps-smoke)', opacity: 0.65 }}>
        {step} / {total}
      </span>
    </div>
  )
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function ContactPage() {
  usePageMeta({
    title: 'Contact',
    description: 'Book a free consultation with Happy Path Studios. Leesburg, Florida. 352-290-7744. We respond within one business day.',
  })
  const [step, setStep] = useState(1)
  const [selectedInterest, setSelectedInterest] = useState<InterestId | ''>('')
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([])

  // Step 2 fields
  const [company, setCompany] = useState('')
  const [website, setWebsite] = useState('')
  const [industry, setIndustry] = useState('')
  const [goals, setGoals] = useState('')
  const [challenges, setChallenges] = useState('')
  const [timeline, setTimeline] = useState('')

  // Step 4 fields
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [contactMethod, setContactMethod] = useState('')
  const [notes, setNotes] = useState('')

  const activeInterest = interests.find(i => i.id === selectedInterest)
  const accentColor = activeInterest?.accent ?? 'var(--color-hps-green)'

  function toggleNeed(id: string) {
    setSelectedNeeds(prev =>
      prev.includes(id) ? prev.filter(n => n !== id) : [...prev, id]
    )
  }

  function canAdvance() {
    if (step === 1) return selectedInterest !== ''
    if (step === 2) return company.trim() !== '' && goals.trim() !== ''
    return true
  }

  const interestLabel = activeInterest?.label ?? ''
  const needsString = selectedNeeds.join(', ')

  return (
    <>
      <div style={{ position: 'relative', isolation: 'isolate' }}>
        <BackgroundAtmosphere mood="citrus" intensity="whisper" density="sparse" />

        {/* ── Page Header ────────────────────────────────────────────── */}
        <section
          className="pt-32 lg:pt-40 pb-12 lg:pb-16"
          style={{ background: 'var(--color-hps-cream)' }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-2xl">
              <div className="w-8 h-px mb-6" style={{ background: 'var(--color-hps-green)' }} aria-hidden="true" />
              <p className="font-mono uppercase mb-4" style={{ fontSize: '0.65rem', letterSpacing: '0.22em', color: 'var(--color-hps-green)' }}>
                Free Consultation
              </p>
              <h1
                data-reveal
                className="font-display mb-5"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', color: 'var(--color-hps-ink)', lineHeight: 1.03 }}
              >
                Start here.
              </h1>
              <p
                data-reveal
                data-reveal-delay="80"
                className="font-body leading-relaxed"
                style={{ fontSize: '1.125rem', color: 'var(--color-hps-smoke)', maxWidth: '36rem' }}
              >
                Tell us a little about your project and we will reach back with focused, thoughtful perspective on how HPS can help. No pitch. No pressure.
              </p>
            </div>
          </div>
        </section>

        {/* ── Wizard ─────────────────────────────────────────────────── */}
        <section
          className="pb-20 lg:pb-28"
          style={{ background: 'var(--color-hps-cream)' }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">

              <StepProgress step={step} total={4} />

              {/* ─ STEP 1 ─ Interest selection ─────────────────────── */}
              {step === 1 && (
                <div>
                  <p className="font-mono uppercase mb-2" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-green)' }}>
                    Step 1
                  </p>
                  <h2 className="font-display mb-2" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.08 }}>
                    What are you interested in?
                  </h2>
                  <p className="font-body mb-8" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}>
                    Select the area that best describes your needs. Starting something small is fine — most projects begin with one question and grow from there.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="group" aria-label="Select your area of interest">
                    {interests.map(interest => {
                      const isSelected = selectedInterest === interest.id
                      return (
                        <button
                          key={interest.id}
                          type="button"
                          onClick={() => setSelectedInterest(interest.id)}
                          aria-pressed={isSelected}
                          className="text-left rounded-sm p-5 transition-all duration-200"
                          style={{
                            background: isSelected ? `${interest.accentHex}0c` : 'var(--color-hps-parchment)',
                            border: isSelected ? `1.5px solid ${interest.accent}` : '1px solid rgba(200,180,154,0.40)',
                            cursor: 'pointer',
                          }}
                          onMouseEnter={e => {
                            if (!isSelected) e.currentTarget.style.borderColor = `${interest.accentHex}80`
                          }}
                          onMouseLeave={e => {
                            if (!isSelected) e.currentTarget.style.borderColor = 'rgba(200,180,154,0.40)'
                          }}
                        >
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <p className="font-display" style={{ fontSize: '1rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}>
                              {interest.label}
                            </p>
                            {isSelected && (
                              <span
                                className="shrink-0 font-mono"
                                style={{ fontSize: '0.65rem', color: interest.accent, marginTop: '0.15rem' }}
                                aria-hidden="true"
                              >
                                ✓
                              </span>
                            )}
                          </div>
                          <p className="font-body" style={{ fontSize: '0.8125rem', color: 'var(--color-hps-smoke)', lineHeight: 1.55 }}>
                            {interest.desc}
                          </p>
                          {isSelected && (
                            <div className="w-5 h-px mt-4" style={{ background: interest.accent }} aria-hidden="true" />
                          )}
                        </button>
                      )
                    })}
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button
                      type="button"
                      onClick={() => canAdvance() && setStep(2)}
                      disabled={!canAdvance()}
                      className="font-mono uppercase transition-all duration-200"
                      style={{
                        fontSize: '0.7rem',
                        letterSpacing: '0.2em',
                        padding: '0.875rem 2rem',
                        background: canAdvance() ? 'var(--color-hps-green)' : 'rgba(200,180,154,0.30)',
                        color: canAdvance() ? 'var(--color-hps-ivory)' : 'var(--color-hps-smoke)',
                        border: 'none',
                        borderRadius: '2px',
                        cursor: canAdvance() ? 'pointer' : 'not-allowed',
                      }}
                    >
                      Continue →
                    </button>
                  </div>
                </div>
              )}

              {/* ─ STEP 2 ─ Project details ──────────────────────────── */}
              {step === 2 && (
                <div>
                  <p className="font-mono uppercase mb-2" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: accentColor }}>
                    Step 2
                  </p>
                  <h2 className="font-display mb-2" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.08 }}>
                    Tell us about your project.
                  </h2>
                  <p className="font-body mb-8" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}>
                    A little context helps us come to the conversation prepared.
                  </p>

                  <div className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <Field label="Company Name" name="company" value={company} onChange={setCompany} placeholder="Your organization" required helper="Or your name if you work independently." />
                      <Field label="Website" name="website_current" value={website} onChange={setWebsite} placeholder="yoursite.com" helper="Leave blank if you don't have one yet." />
                    </div>
                    <Field
                      label="Industry"
                      name="industry"
                      value={industry}
                      onChange={setIndustry}
                      as="select"
                      options={[
                        'Hospitality & Food Service',
                        'Golf & Recreation',
                        'Healthcare',
                        'Retail & E-Commerce',
                        'Professional Services',
                        'Real Estate & Construction',
                        'Creator & Media',
                        'Non-Profit & Civic',
                        'Education',
                        'Manufacturing & Production',
                        'Technology',
                        'Other',
                      ]}
                    />
                    <Field
                      label="Project Goals"
                      name="goals"
                      value={goals}
                      onChange={setGoals}
                      as="textarea"
                      placeholder="What are you trying to accomplish? What does success look like?"
                      required
                      helper="Be as specific or broad as you like — this helps us understand your priorities."
                    />
                    <Field
                      label="Current Challenges"
                      name="challenges"
                      value={challenges}
                      onChange={setChallenges}
                      as="textarea"
                      placeholder="What is not working? What is holding things back?"
                      helper="Optional, but useful for understanding where we can have the most impact."
                    />
                    <Field
                      label="Estimated Timeline"
                      name="timeline"
                      value={timeline}
                      onChange={setTimeline}
                      as="select"
                      options={[
                        'As soon as possible',
                        'Within 30 days',
                        'Within 60–90 days',
                        'This quarter',
                        'Next quarter',
                        'Planning ahead',
                        'No firm timeline',
                      ]}
                    />
                  </div>

                  <div className="mt-8 flex items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="font-mono uppercase transition-colors duration-200"
                      style={{ fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--color-hps-smoke)', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem 0' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-hps-ink)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-hps-smoke)')}
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => canAdvance() && setStep(3)}
                      disabled={!canAdvance()}
                      className="font-mono uppercase transition-all duration-200"
                      style={{
                        fontSize: '0.7rem',
                        letterSpacing: '0.2em',
                        padding: '0.875rem 2rem',
                        background: canAdvance() ? 'var(--color-hps-green)' : 'rgba(200,180,154,0.30)',
                        color: canAdvance() ? 'var(--color-hps-ivory)' : 'var(--color-hps-smoke)',
                        border: 'none',
                        borderRadius: '2px',
                        cursor: canAdvance() ? 'pointer' : 'not-allowed',
                      }}
                    >
                      Continue →
                    </button>
                  </div>
                </div>
              )}

              {/* ─ STEP 3 ─ Operational needs ────────────────────────── */}
              {step === 3 && selectedInterest && (
                <div>
                  <p className="font-mono uppercase mb-2" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: accentColor }}>
                    Step 3
                  </p>
                  <h2 className="font-display mb-2" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.08 }}>
                    What do you need?
                  </h2>
                  <p className="font-body mb-8" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}>
                    Select everything that applies. This helps us understand the scope and depth of the conversation.
                  </p>

                  <div
                    className="p-5 rounded-sm mb-6"
                    style={{ background: `${activeInterest?.accentHex}0c`, border: `1px solid ${accentColor}30` }}
                  >
                    <p className="font-mono uppercase" style={{ fontSize: '0.58rem', letterSpacing: '0.15em', color: accentColor }}>
                      {interestLabel}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="group" aria-label="Select your operational needs">
                    {conditionalNeeds[selectedInterest].map(need => {
                      const isChecked = selectedNeeds.includes(need.id)
                      return (
                        <button
                          key={need.id}
                          type="button"
                          onClick={() => toggleNeed(need.id)}
                          aria-pressed={isChecked}
                          className="text-left rounded-sm px-4 py-3.5 transition-all duration-150"
                          style={{
                            background: isChecked ? `${activeInterest?.accentHex}10` : 'var(--color-hps-parchment)',
                            border: isChecked ? `1.5px solid ${accentColor}` : '1px solid rgba(200,180,154,0.40)',
                            cursor: 'pointer',
                          }}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              style={{
                                width: '14px',
                                height: '14px',
                                borderRadius: '2px',
                                border: isChecked ? `1.5px solid ${accentColor}` : '1px solid rgba(200,180,154,0.55)',
                                background: isChecked ? accentColor : 'transparent',
                                flexShrink: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                              aria-hidden="true"
                            >
                              {isChecked && (
                                <span style={{ fontSize: '8px', color: 'white', lineHeight: 1 }}>✓</span>
                              )}
                            </div>
                            <span className="font-body" style={{ fontSize: '0.9rem', color: 'var(--color-hps-ink)' }}>
                              {need.label}
                            </span>
                          </div>
                        </button>
                      )
                    })}
                  </div>

                  <p className="font-body mt-5" style={{ fontSize: '0.8125rem', color: 'var(--color-hps-smoke)', opacity: 0.70 }}>
                    No exact match? Continue anyway — the conversation will clarify the rest.
                  </p>

                  <div className="mt-8 flex items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="font-mono uppercase transition-colors duration-200"
                      style={{ fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--color-hps-smoke)', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem 0' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-hps-ink)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-hps-smoke)')}
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(4)}
                      className="font-mono uppercase transition-all duration-200"
                      style={{
                        fontSize: '0.7rem',
                        letterSpacing: '0.2em',
                        padding: '0.875rem 2rem',
                        background: 'var(--color-hps-green)',
                        color: 'var(--color-hps-ivory)',
                        border: 'none',
                        borderRadius: '2px',
                        cursor: 'pointer',
                      }}
                    >
                      Continue →
                    </button>
                  </div>
                </div>
              )}

              {/* ─ STEP 4 ─ Contact + submit ────────────────────────── */}
              {step === 4 && (
                <div>
                  <p className="font-mono uppercase mb-2" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-green)' }}>
                    Step 4
                  </p>
                  <h2 className="font-display mb-2" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.08 }}>
                    How should we reach you?
                  </h2>
                  <p className="font-body mb-8" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}>
                    We review every request personally before we reach out.
                  </p>

                  <form
                    action="/send-consultation.php"
                    method="POST"
                    className="flex flex-col gap-6"
                  >
                    {/* Hidden fields carrying data from steps 1–3 */}
                    <input type="hidden" name="interest" value={interestLabel} />
                    <input type="hidden" name="operational_needs" value={needsString} />
                    <input type="hidden" name="company" value={company} />
                    <input type="hidden" name="website_current" value={website} />
                    <input type="hidden" name="industry" value={industry} />
                    <input type="hidden" name="goals" value={goals} />
                    <input type="hidden" name="challenges" value={challenges} />
                    <input type="hidden" name="timeline" value={timeline} />
                    {/* Honeypot — must remain empty */}
                    <input type="text" name="website_url" value="" onChange={() => {}} tabIndex={-1} aria-hidden="true" style={{ display: 'none' }} />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <Field label="Your Name" name="name" value={name} onChange={setName} placeholder="First and last name" required />
                      <Field label="Email Address" name="email" type="email" value={email} onChange={setEmail} placeholder="you@yourcompany.com" required />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <Field label="Phone" name="phone" type="tel" value={phone} onChange={setPhone} placeholder="352-000-0000" helper="Optional — include if you prefer a call." />
                      <Field
                        label="Preferred Contact Method"
                        name="contact_method"
                        value={contactMethod}
                        onChange={setContactMethod}
                        as="select"
                        options={['Email', 'Phone call', 'Text message', 'No preference']}
                      />
                    </div>
                    <Field
                      label="Additional Notes"
                      name="notes"
                      value={notes}
                      onChange={setNotes}
                      as="textarea"
                      placeholder="Anything else you want us to know before we connect?"
                      helper="Optional — use this for anything the previous steps didn't cover."
                    />

                    {/* Confirmation editorial */}
                    <div
                      className="p-6 rounded-sm"
                      style={{ background: 'var(--color-hps-parchment)', border: '1px solid rgba(200,180,154,0.40)' }}
                    >
                      <p className="font-body leading-relaxed" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}>
                        We review every consultation request personally and use this information to better understand your goals, operational challenges, and ecosystem opportunities — before we schedule time together. You will hear back from us within one business day.
                      </p>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="font-mono uppercase transition-colors duration-200"
                        style={{ fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--color-hps-smoke)', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem 0' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-hps-ink)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-hps-smoke)')}
                      >
                        ← Back
                      </button>
                      <button
                        type="submit"
                        className="font-mono uppercase transition-all duration-200"
                        style={{
                          fontSize: '0.7rem',
                          letterSpacing: '0.2em',
                          padding: '0.875rem 2.25rem',
                          background: 'var(--color-hps-green)',
                          color: 'var(--color-hps-ivory)',
                          border: 'none',
                          borderRadius: '2px',
                          cursor: 'pointer',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-hps-green-dark)')}
                        onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-hps-green)')}
                      >
                        Schedule Free Consultation →
                      </button>
                    </div>
                  </form>
                </div>
              )}

            </div>
          </div>
        </section>

        {/* ── Direct contact strip ────────────────────────────────────── */}
        <section
          className="py-14 lg:py-16 border-t"
          style={{ background: 'var(--color-hps-parchment)', borderColor: 'rgba(200,180,154,0.40)' }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="font-mono uppercase mb-1" style={{ fontSize: '0.58rem', letterSpacing: '0.18em', color: 'var(--color-hps-smoke)', opacity: 0.70 }}>
                  Prefer direct contact
                </p>
                <p className="font-body" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}>
                  Call or text us at{' '}
                  <a href="tel:+13522907744" className="font-medium transition-colors duration-150" style={{ color: 'var(--color-hps-ink)', textDecoration: 'none' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-hps-green)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-hps-ink)')}
                  >352-290-7744</a>
                  {' '}· Email{' '}
                  <a href="mailto:hello@happypathstudios.com" className="font-medium transition-colors duration-150" style={{ color: 'var(--color-hps-ink)', textDecoration: 'none' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-hps-green)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-hps-ink)')}
                  >hello@happypathstudios.com</a>
                </p>
              </div>
              <div className="flex flex-wrap gap-5">
                {[
                  { label: 'Facebook',  href: 'https://www.facebook.com/happypathstudios' },
                  { label: 'X',         href: 'https://x.com/happypathstudio' },
                  { label: 'LinkedIn',  href: 'https://www.linkedin.com/company/happypathstudios/' },
                  { label: 'Instagram', href: 'https://www.instagram.com/happypathstudios' },
                ].map(s => (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono transition-colors duration-200"
                    style={{ fontSize: '0.65rem', letterSpacing: '0.12em', color: 'var(--color-hps-smoke)', opacity: 0.70, textDecoration: 'none' }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.color = 'var(--color-hps-ink)' }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = '0.70'; e.currentTarget.style.color = 'var(--color-hps-smoke)' }}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>

      <CTABand
        headline="We're in Leesburg, Florida."
        subhead="Central Florida's connected production and digital ecosystem studio. Let's build something together."
        buttonText="Start a Free Consultation"
        showPhone
      />

    </>
  )
}
