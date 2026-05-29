import { Link } from 'react-router-dom'

const year = new Date().getFullYear()

const footerGroups = [
  {
    label: 'Platforms',
    links: [
      { label: 'HPS Socialize',       href: '/platforms/hps-socialize' },
      { label: 'HPS BioLinks',         href: '/platforms/hps-biolinks' },
      { label: 'HPS Push',             href: '/platforms/hps-push' },
      { label: 'HPS SocialProof',      href: '/platforms/hps-socialproof' },
      { label: 'HPS EngageTracker',    href: '/platforms/hps-engagetracker' },
      { label: 'HPS SEO Audit',        href: '/platforms/hps-seo-audit' },
      { label: 'HPS Uptime',           href: '/platforms/hps-uptime' },
      { label: 'All Platforms',        href: '/platforms' },
    ],
  },
  {
    label: 'Creator & Media',
    links: [
      { label: 'Media',                href: '/media' },
      { label: 'FreeBeatsMUSIC',       href: '/platforms/freebeats-music' },
      { label: 'HPS Creator Hub',      href: '/platforms/hps-creator-hub' },
      { label: 'HPS Media Studio',     href: '/platforms/hps-media-studio' },
      { label: 'HPS Transfer',         href: '/platforms/hps-transfer' },
      { label: 'Photography & Video',  href: '/services/photography-videography' },
      { label: 'HPS Shalom',           href: '/ecosystems/hps-shalom' },
    ],
  },
  {
    label: 'Golf & Hospitality',
    links: [
      { label: 'HPS Golf',             href: '/golf' },
      { label: 'HPS QR Menu',          href: '/platforms/hps-qr-menu' },
      { label: 'HPS QR Code',          href: '/platforms/hps-qr-code' },
      { label: 'Hospitality QR',       href: '/hospitality' },
      { label: 'QR Systems',           href: '/services/qr-systems' },
      { label: 'Golf Ecosystem',       href: '/ecosystem/golf-recreation' },
    ],
  },
  {
    label: 'Accessibility & AI',
    links: [
      { label: 'HPS Accessibility',    href: 'https://hpsaccessibility.com', external: true },
      { label: 'Accessibility Services', href: '/accessibility' },
      { label: 'AI Systems',           href: '/ai-systems' },
      { label: 'HPS AI Systems',       href: '/platforms/hps-ai-systems' },
      { label: 'Client Portal',        href: '/client-portal' },
      { label: 'Healthcare Pathway',   href: '/ecosystem/healthcare-accessibility' },
    ],
  },
  {
    label: 'Hosting',
    links: [
      { label: 'Restaurant Hosting',   href: '/hosting/best-restaurant-hosting' },
      { label: 'Food Truck Hosting',   href: '/hosting/best-food-truck-hosting' },
      { label: 'Professional Hosting', href: '/hosting/best-professional-hosting' },
      { label: 'Creator Hosting',      href: '/hosting/creator-hosting' },
      { label: 'Ecommerce Hosting',    href: '/hosting/ecommerce-hosting' },
      { label: 'YourSitePlace',        href: '/hosting/yoursiteplace' },
      { label: 'All Hosting',          href: '/hosting' },
    ],
  },
  {
    label: 'Free Tools & Services',
    links: [
      { label: 'HPS Ecommerce Tools',  href: '/platforms/hps-ecommerce-tools' },
      { label: 'HPS SEO Tools',        href: '/platforms/hps-seo-tools' },
      { label: 'HPS Toolkit',          href: '/platforms/hps-toolkit' },
      { label: 'Web Development',      href: '/services/web-development' },
      { label: 'Digital Strategy',     href: '/services/digital-strategy' },
      { label: 'All Services',         href: '/services' },
    ],
  },
]

const companyLinks = [
  { label: 'Ecosystems',    href: '/ecosystems' },
  { label: 'Fabrication',   href: '/fabrication' },
  { label: 'About',         href: '/about' },
  { label: 'Contact',       href: '/contact' },
]

const social = [
  { label: 'Facebook',  href: 'https://www.facebook.com/happypathstudios' },
  { label: 'X',         href: 'https://x.com/happypathstudio' },
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/company/happypathstudios/' },
  { label: 'Instagram', href: 'https://www.instagram.com/happypathstudios' },
]

export default function Footer() {
  return (
    <footer role="contentinfo" className="bg-hps-green-dark text-hps-ivory/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10">

        {/* Brand + Company strip */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 pb-12 border-b border-white/10">
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              className="font-display text-2xl font-semibold text-hps-ivory hover:opacity-80 transition-opacity"
            >
              Happy Path Studios
            </Link>
            <p className="font-body text-sm text-hps-ivory/55 leading-relaxed max-w-[240px]">
              Creative design, printing &amp; digital platforms — all in-house in Leesburg, Florida.
            </p>
            <a
              href="tel:+13522907744"
              className="font-mono text-xs tracking-wider text-hps-gold/80 hover:text-hps-gold transition-colors"
            >
              352-290-7744
            </a>
            <div className="mt-2">
              <p className="font-mono text-[0.58rem] tracking-[0.15em] uppercase text-hps-ivory/35 mb-2.5">
                Company
              </p>
              <ul className="flex flex-wrap gap-x-4 gap-y-2" role="list">
                {companyLinks.map(item => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="font-body text-sm text-hps-ivory/55 hover:text-hps-ivory transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Ecosystem nav grid */}
          <nav aria-label="Ecosystem navigation">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8">
              {footerGroups.map(group => (
                <div key={group.label}>
                  <p className="font-mono text-[0.58rem] tracking-[0.18em] uppercase text-hps-ivory/35 mb-3">
                    {group.label}
                  </p>
                  <ul className="flex flex-col gap-2" role="list">
                    {group.links.map(link => (
                      <li key={link.label}>
                        {link.external ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-body text-sm text-hps-ivory/55 hover:text-hps-ivory transition-colors duration-200"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <Link
                            to={link.href}
                            className="font-body text-sm text-hps-ivory/55 hover:text-hps-ivory transition-colors duration-200"
                          >
                            {link.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8">

          {/* Social */}
          <div className="flex items-center gap-5" aria-label="Social media links">
            {social.map(s => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Happy Path Studios on ${s.label}`}
                className="font-mono text-[0.65rem] tracking-wider text-hps-ivory/40 hover:text-hps-ivory/80 transition-colors duration-200"
              >
                {s.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex flex-col items-start sm:items-end gap-1.5">
            <p className="font-mono text-[0.6rem] tracking-[0.16em] uppercase text-hps-ivory/35">
              &copy; {year} Happy Path Studios, LLC. All rights reserved.
            </p>
            <p className="font-mono text-[0.58rem] tracking-[0.12em] text-hps-ivory/25">
              Leesburg, Florida &nbsp;&middot;&nbsp; Lake County &nbsp;&middot;&nbsp; 28.81&deg;&thinsp;N &nbsp;81.88&deg;&thinsp;W
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
