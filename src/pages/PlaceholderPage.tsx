import { Link } from 'react-router-dom'

interface PlaceholderPageProps {
  title: string
  tagline: string
  description: string
  accentColor?: string
}

export default function PlaceholderPage({
  title,
  tagline,
  description,
  accentColor = 'var(--color-hps-green)',
}: PlaceholderPageProps) {
  return (
    <section className="min-h-[80vh] flex items-center">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-32">

        <div
          className="w-12 h-1 mb-8 rounded-full"
          style={{ background: accentColor }}
          aria-hidden="true"
        />

        <p className="font-mono text-[0.65rem] tracking-[0.22em] uppercase mb-4" style={{ color: accentColor }}>
          {tagline}
        </p>

        <h1 className="font-display text-5xl lg:text-6xl text-hps-ink leading-tight mb-6 max-w-2xl">
          {title}
        </h1>

        <p className="font-body text-base lg:text-lg text-hps-smoke leading-relaxed max-w-xl mb-10">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <Link to="/contact" className="btn-primary">
            Get In Touch
          </Link>
          <Link to="/" className="btn-secondary">
            Back to Home
          </Link>
        </div>

        <div className="mt-16 p-6 rounded border border-hps-tan/40 bg-hps-parchment/40 max-w-lg">
          <p className="font-mono text-[0.65rem] tracking-[0.18em] uppercase text-hps-smoke/50 mb-2">
            Page status
          </p>
          <p className="font-body text-sm text-hps-smoke/70">
            This page is under active development. Content and features coming soon.
          </p>
        </div>
      </div>
    </section>
  )
}
