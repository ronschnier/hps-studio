interface PageHeaderProps {
  eyebrow: string
  title: string
  description?: string
  accentColor?: string
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  accentColor = 'var(--color-hps-green)',
}: PageHeaderProps) {
  return (
    <section
      className="pt-32 pb-16 lg:pt-40 lg:pb-20 border-b"
      style={{
        background: 'var(--color-hps-cream)',
        borderColor: 'rgba(200,180,154,0.35)',
      }}
      aria-label="Page header"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Accent line */}
        <div
          className="w-10 h-0.5 mb-6 rounded-full"
          style={{ background: accentColor }}
          aria-hidden="true"
        />

        {/* Eyebrow */}
        <p
          className="font-mono uppercase mb-4"
          style={{
            fontSize: '0.65rem',
            letterSpacing: '0.22em',
            color: accentColor,
          }}
        >
          {eyebrow}
        </p>

        {/* Title */}
        <h1
          className="font-display text-hps-ink leading-tight max-w-3xl"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p
            className="font-body text-hps-smoke leading-relaxed mt-6 max-w-xl"
            style={{ fontSize: '1.0625rem' }}
          >
            {description}
          </p>
        )}

      </div>
    </section>
  )
}
