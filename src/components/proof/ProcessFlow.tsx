// Modular operational lifecycle diagram.
// Used for accessibility compliance cycles, fabrication workflows,
// onboarding sequences, and operational process documentation.

export interface ProcessStep {
  n: string
  label: string
  desc: string
  accent?: string
}

interface ProcessFlowProps {
  steps: ProcessStep[]
  accentColor: string
}

export default function ProcessFlow({ steps, accentColor }: ProcessFlowProps) {
  return (
    <div className="flex flex-col gap-0">
      {steps.map((step, i) => (
        <div
          key={step.n}
          data-reveal
          data-reveal-delay={String((i % 5) * 55)}
          className="grid grid-cols-[80px_1fr] lg:grid-cols-[110px_1fr] gap-5 lg:gap-12 py-6"
          style={{ borderBottom: i < steps.length - 1 ? '1px solid rgba(200,180,154,0.35)' : 'none' }}
        >
          <div className="flex flex-col gap-1.5 pt-0.5">
            <span
              className="font-mono"
              style={{ fontSize: '0.875rem', color: step.accent ?? accentColor, lineHeight: 1, opacity: 0.28 }}
              aria-hidden="true"
            >
              {step.n}
            </span>
            <p className="font-display" style={{ fontSize: '0.875rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}>
              {step.label}
            </p>
          </div>
          <p className="font-body leading-relaxed" style={{ fontSize: '0.875rem', color: 'var(--color-hps-smoke)' }}>
            {step.desc}
          </p>
        </div>
      ))}
    </div>
  )
}
