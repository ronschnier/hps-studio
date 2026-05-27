// EcosystemBanner — future platform continuity architecture
//
// Intended for deployment on refaced HPS platform applications
// (hpsaccessibility.com, future platform domains, etc.).
// Provides a thin top-bar that anchors standalone platform apps
// to the broader HPS ecosystem identity.
//
// Usage in a standalone platform:
//   <EcosystemBanner platformName="HPS Accessibility" accentColor="var(--color-hps-teal-dark)" />

interface EcosystemBannerProps {
  platformName?: string
  accentColor?: string
  showPlatformsLink?: boolean
}

export default function EcosystemBanner({
  platformName,
  accentColor = 'var(--color-hps-green)',
  showPlatformsLink = true,
}: EcosystemBannerProps) {
  return (
    <div
      role="banner"
      aria-label="HPS Ecosystem navigation"
      style={{
        padding: '0.5rem 1.5rem',
        background: 'var(--color-hps-ink)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        flexWrap: 'wrap',
        borderBottom: `1px solid rgba(255,255,255,0.05)`,
      }}
    >
      {/* Left: breadcrumb identity */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
        <span
          style={{
            display: 'inline-block',
            width: '5px',
            height: '5px',
            borderRadius: '50%',
            background: accentColor,
            flexShrink: 0,
          }}
          aria-hidden="true"
        />
        <a
          href="https://happypathstudios.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.52rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(244,234,212,0.50)',
            textDecoration: 'none',
            transition: 'color 0.15s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'rgba(244,234,212,0.85)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(244,234,212,0.50)')}
        >
          Happy Path Studios
        </a>
        {platformName && (
          <>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.48rem',
                color: 'rgba(244,234,212,0.20)',
              }}
              aria-hidden="true"
            >
              /
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.52rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(244,234,212,0.80)',
              }}
            >
              {platformName}
            </span>
          </>
        )}
      </div>

      {/* Right: ecosystem navigation */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
        {showPlatformsLink && (
          <a
            href="https://happypathstudios.com/platforms"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.48rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: accentColor,
              textDecoration: 'none',
              opacity: 0.75,
              transition: 'opacity 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '0.75')}
          >
            All Platforms →
          </a>
        )}
        <a
          href="https://happypathstudios.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.48rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(244,234,212,0.30)',
            textDecoration: 'none',
            transition: 'color 0.15s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'rgba(244,234,212,0.65)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(244,234,212,0.30)')}
        >
          HPS Studio ↗
        </a>
      </div>
    </div>
  )
}
