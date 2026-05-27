import { Link } from 'react-router-dom'

interface CTABandProps {
  headline?: string
  subhead?: string
  buttonText?: string
  buttonHref?: string
  showPhone?: boolean
}

export default function CTABand({
  headline = 'Get On Your Happy Path Today',
  subhead = 'Book a free consultation and see what Happy Path Studios can do for your business.',
  buttonText = 'Book Your Free Consultation',
  buttonHref = '/contact',
  showPhone = true,
}: CTABandProps) {
  return (
    <section
      className="py-20 lg:py-24"
      style={{ background: 'var(--color-hps-green-dark)' }}
      aria-label="Call to action"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center" data-reveal>

        <h2
          className="font-display leading-tight mb-4"
          style={{
            fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
            color: 'var(--color-hps-ivory)',
          }}
        >
          {headline}
        </h2>

        <p
          className="font-body leading-relaxed mb-8 max-w-xl mx-auto"
          style={{ fontSize: '1rem', color: 'rgba(244,234,212,0.88)' }}
        >
          {subhead}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={buttonHref}
            className="inline-flex items-center justify-center font-body font-medium text-sm rounded-sm transition-colors duration-200"
            style={{ padding: '0.75rem 1.75rem', background: 'var(--color-hps-gold)', color: 'var(--color-hps-ink)' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-hps-gold-light)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-hps-gold)')}
          >
            {buttonText}
          </Link>

          {showPhone && (
            <a
              href="tel:+13522907744"
              className="font-mono transition-colors duration-200"
              style={{ fontSize: '0.875rem', letterSpacing: '0.1em', color: 'var(--color-hps-gold-light)' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-hps-gold-light)')}
            >
              or call 352-290-7744
            </a>
          )}
        </div>

      </div>
    </section>
  )
}
