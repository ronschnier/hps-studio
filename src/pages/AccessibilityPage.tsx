import { Link } from 'react-router-dom'
import CTABand from '../components/sections/CTABand'
import BackgroundAtmosphere from '../components/decorative/BackgroundAtmosphere'
import EcosystemBanner from '../components/layout/EcosystemBanner'
import ProcessFlow from '../components/proof/ProcessFlow'
import { AccessibilityProofIntegration } from '../components/sections/AccessibilityProofIntegration'
import EcosystemAccessibilityEvidence from '../components/sections/EcosystemAccessibilityEvidence'
import { usePageMeta } from '../hooks/usePageMeta'

// ── Standards ─────────────────────────────────────────────────────────────────

const standards = [
  { name: 'WCAG 2.1 AA',      desc: 'Web Content Accessibility Guidelines — the primary international standard for web accessibility.' },
  { name: 'WCAG 2.1 AAA',     desc: 'Enhanced conformance level for organizations requiring the highest degree of compliance.' },
  { name: 'WCAG 2.2',         desc: 'Current published version of WCAG with updated success criteria, including mobile and low-vision improvements.' },
  { name: 'Section 508',       desc: 'Federal accessibility requirements for electronic and information technology under the Rehabilitation Act.' },
  { name: 'ADA Title II',      desc: 'Americans with Disabilities Act requirements covering state and local government digital services.' },
  { name: 'EN 301 549',        desc: 'European standard for accessibility requirements for ICT products and services, aligned with WCAG 2.1.' },
  { name: 'PDF/UA',            desc: 'ISO standard for accessible PDF documents — required for federally distributed documents.' },
  { name: 'ARIA 1.2',         desc: 'WAI-ARIA authoring practices for accessible dynamic content, widgets, and single-page applications.' },
]

// ── Testing methodology ───────────────────────────────────────────────────────

const automated = [
  { tool: 'axe-core',      role: 'Primary automated scanning engine — integrated into CI/CD for regression testing.' },
  { tool: 'WAVE',          role: 'Visual overlay testing for in-context issue identification during manual review.' },
  { tool: 'Lighthouse',    role: 'Google accessibility audit layer for performance-accessibility correlation.' },
  { tool: 'SiteImprove',   role: 'Enterprise crawl platform for large site inventories and compliance dashboards.' },
  { tool: 'Pa11y CI',      role: 'Headless CLI testing integrated with deployment pipelines.' },
  { tool: 'IBM Equal Access', role: 'IBM accessibility checker for WCAG 2.1 and IBM Design Language compliance.' },
]

const manual = [
  { method: 'NVDA + Chrome',         role: 'Primary Windows screen reader test environment for DOM and ARIA validation.' },
  { method: 'JAWS + Chrome/Edge',    role: 'Enterprise-grade Windows screen reader — required for federal and enterprise clients.' },
  { method: 'VoiceOver + Safari',    role: 'macOS and iOS screen reader testing for Apple device coverage.' },
  { method: 'TalkBack + Android',    role: 'Android screen reader validation for mobile web applications.' },
  { method: 'Keyboard-only navigation', role: 'Full site traversal with no mouse input — focus order, trap detection, shortcut conflicts.' },
  { method: 'High contrast modes',   role: 'Windows High Contrast and forced-colors validation for color-independent rendering.' },
  { method: 'Zoom to 400%',          role: 'Browser zoom reflow testing against WCAG 1.4.10 for responsive accessibility.' },
  { method: 'Cognitive & plain language review', role: 'Content assessment for reading level, clear instructions, and error prevention.' },
]

// ── Audit workflow ────────────────────────────────────────────────────────────

const auditSteps = [
  {
    n: '01',
    label: 'Intake & Scoping',
    desc: 'Define the scope: which URLs, which user flows, which document types, which standards apply. Establish baseline accessibility posture before testing begins.',
  },
  {
    n: '02',
    label: 'Automated Crawl',
    desc: 'Full-site automated scan using axe-core and supplementary tools. Produces an initial issue inventory with severity classification and affected URL list.',
  },
  {
    n: '03',
    label: 'Manual Expert Review',
    desc: 'Screen reader testing (NVDA/JAWS/VoiceOver), keyboard navigation audit, visual contrast verification, focus management review, and ARIA pattern validation.',
  },
  {
    n: '04',
    label: 'Issue Report Delivery',
    desc: 'Structured report with every issue classified by WCAG criterion, severity (critical/serious/moderate/minor), affected component, and recommended remediation approach.',
  },
  {
    n: '05',
    label: 'Remediation Support',
    desc: 'Code-level fix implementation or developer-ready specifications. We can remediate directly, provide a detailed ticket-ready specification set, or work alongside your team.',
  },
  {
    n: '06',
    label: 'Verification Testing',
    desc: 'Re-test of all previously identified issues to confirm resolution. No issue is closed without screen reader and keyboard verification.',
  },
  {
    n: '07',
    label: 'Certification & VPAT',
    desc: 'Accessibility statement, dated certification document, and Voluntary Product Accessibility Template (VPAT) for procurement and contract requirements.',
  },
  {
    n: '08',
    label: 'Ongoing Monitoring',
    desc: 'Continuous automated scanning after deployment. New content and code changes are monitored for regression. Monthly compliance health reports on request.',
  },
]

// ── Industries ────────────────────────────────────────────────────────────────

const industries = [
  { label: 'Federal Contractors',      note: 'Section 508 compliance for web and document assets' },
  { label: 'State & Local Government', note: 'ADA Title II digital services compliance' },
  { label: 'Healthcare Providers',     note: 'Patient portal, telehealth, and clinical web applications' },
  { label: 'Universities & Community Colleges', note: 'Academic web properties, LMS, and student services' },
  { label: 'Nonprofit Organizations',  note: 'Accessibility equity across public-facing digital presence' },
  { label: 'Legal Services',           note: 'Client portal and document accessibility for private practice' },
  { label: 'Financial Services',       note: 'Application and document compliance for regulated industries' },
  { label: 'SaaS & Product Companies', note: 'Accessible product design and ongoing compliance operations' },
]

export default function AccessibilityPage() {
  usePageMeta({
    title: 'Accessibility & Compliance',
    description: 'WCAG 2.1 AA and Section 508 auditing, code remediation, assistive technology testing, and ongoing accessibility compliance for web and application environments.',
  })
  return (
    <>
      <EcosystemBanner platformName="HPS Accessibility" accentColor="var(--color-hps-teal-dark)" />
      <div style={{ position: 'relative', isolation: 'isolate' }}>
      <BackgroundAtmosphere mood="citrus" intensity="whisper" density="sparse" />
      {/* ── Header ──────────────────────────────────────────────────── */}
      <section
        className="pt-32 lg:pt-40 pb-16 lg:pb-20"
        style={{ background: 'var(--color-hps-cream)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="w-8 h-px mb-6" style={{ background: 'var(--color-hps-gold-rich)' }} aria-hidden="true" />
            <p className="font-mono uppercase mb-4" style={{ fontSize: '0.65rem', letterSpacing: '0.22em', color: 'var(--color-hps-gold-rich)' }}>
              Section 508 & WCAG Compliance
            </p>
            <h1
              data-reveal
              className="font-display mb-6"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', color: 'var(--color-hps-ink)', lineHeight: 1.05 }}
            >
              Accessibility Services
            </h1>
            <p
              data-reveal
              data-reveal-delay="80"
              className="font-body leading-relaxed mb-3"
              style={{ fontSize: '1.125rem', color: 'var(--color-hps-smoke)', maxWidth: '38rem' }}
            >
              Structured accessibility audits, WCAG remediation, Section 508 testing, and compliance certification for organizations that need operational rigor — not checkbox exercises.
            </p>
            <p
              data-reveal
              data-reveal-delay="160"
              className="font-body leading-relaxed"
              style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)', maxWidth: '38rem', opacity: 0.85 }}
            >
              We test with real screen readers against real user workflows. Our reports specify the exact issue, the exact WCAG criterion, and the exact fix — not a summary that leaves your developers guessing.
            </p>
          </div>
        </div>
      </section>

      {/* ── Standards coverage ──────────────────────────────────────── */}
      <section className="py-16 lg:py-20" style={{ background: 'var(--color-hps-parchment)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-8">
            <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-gold-rich)' }}>
              Standards coverage
            </p>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
              Every standard your contract requires
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {standards.map((std, i) => (
              <div
                key={std.name}
                data-reveal
                data-reveal-delay={String((i % 4) * 60)}
                className="p-5 rounded-sm"
                style={{ background: 'var(--color-hps-cream)', border: '1px solid rgba(200,180,154,0.40)' }}
              >
                <p
                  className="font-mono mb-2"
                  style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-hps-gold-rich)', letterSpacing: '0.02em' }}
                >
                  {std.name}
                </p>
                <p className="font-body text-xs leading-relaxed" style={{ color: 'var(--color-hps-smoke)' }}>
                  {std.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testing methodology ─────────────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-10">
            <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-gold-rich)' }}>
              Testing methodology
            </p>
            <h2 className="font-display mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
              Automated tools catch 30% of issues. Manual testing catches the rest.
            </h2>
            <p className="font-body max-w-xl leading-relaxed" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}>
              Automated scanners are a starting point, not a finish line. Every audit includes expert manual review with assistive technologies in real browser environments — not synthetic test runners.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* Automated */}
            <div data-reveal>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b" style={{ borderColor: 'rgba(200,180,154,0.40)' }}>
                <div className="w-5 h-px" style={{ background: 'var(--color-hps-gold-rich)' }} aria-hidden="true" />
                <p className="font-mono uppercase" style={{ fontSize: '0.6rem', letterSpacing: '0.18em', color: 'var(--color-hps-gold-rich)' }}>
                  Automated tools
                </p>
              </div>
              <div className="flex flex-col gap-4">
                {automated.map(item => (
                  <div key={item.tool} className="flex items-start gap-4">
                    <span className="font-mono shrink-0 mt-0.5" style={{ fontSize: '0.8125rem', fontWeight: 500, color: 'var(--color-hps-ink)', minWidth: '7rem' }}>
                      {item.tool}
                    </span>
                    <span className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-hps-smoke)' }}>
                      {item.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Manual */}
            <div data-reveal data-reveal-delay="80">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b" style={{ borderColor: 'rgba(200,180,154,0.40)' }}>
                <div className="w-5 h-px" style={{ background: 'var(--color-hps-teal-dark)' }} aria-hidden="true" />
                <p className="font-mono uppercase" style={{ fontSize: '0.6rem', letterSpacing: '0.18em', color: 'var(--color-hps-teal-dark)' }}>
                  Manual expert review
                </p>
              </div>
              <div className="flex flex-col gap-4">
                {manual.map(item => (
                  <div key={item.method} className="flex items-start gap-4">
                    <span className="font-body shrink-0 mt-0.5 font-medium" style={{ fontSize: '0.8125rem', color: 'var(--color-hps-ink)', minWidth: '10rem', lineHeight: 1.3 }}>
                      {item.method}
                    </span>
                    <span className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-hps-smoke)' }}>
                      {item.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Audit workflow ──────────────────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-parchment)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-12">
            <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-gold-rich)' }}>
              How an audit works
            </p>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
              From intake to certification
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {auditSteps.map((step, i) => (
              <div
                key={step.n}
                data-reveal
                data-reveal-delay={String((i % 4) * 60)}
                className="py-8 lg:py-10 pr-6"
                style={{
                  paddingLeft: i % 2 === 0 ? '0' : '1.5rem',
                  borderLeft: i % 2 !== 0 ? '1px solid rgba(200,180,154,0.40)' : 'none',
                  borderTop: i >= 4 ? '1px solid rgba(200,180,154,0.40)' : 'none',
                }}
              >
                <span className="font-mono block mb-4" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-gold-rich)', opacity: 0.80 }}>
                  {step.n}
                </span>
                <div className="w-6 h-px mb-3" style={{ background: 'var(--color-hps-gold-rich)' }} aria-hidden="true" />
                <h3 className="font-display mb-2" style={{ fontSize: '1rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}>
                  {step.label}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-hps-smoke)' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Operational Audit Evidence ──────────────────────────────── */}
      <AccessibilityProofIntegration />

      {/* ── Ecosystem Self-Validation Evidence ──────────────────────── */}
      <EcosystemAccessibilityEvidence />

      {/* ── Who we work with ────────────────────────────────────────── */}
      <section className="py-16 lg:py-20" style={{ background: 'var(--color-hps-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            <div data-reveal>
              <p className="font-mono uppercase mb-4" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-gold-rich)' }}>
                Who we work with
              </p>
              <h2 className="font-display mb-5" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.08 }}>
                Organizations where compliance isn't optional.
              </h2>
              <p className="font-body leading-relaxed mb-6" style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)' }}>
                We work with organizations subject to federal and state accessibility law, and with private companies that understand accessible design as a quality and liability issue — not just a compliance checkbox.
              </p>
              <div className="flex flex-col gap-0">
                {industries.map((item, i, arr) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-baseline py-3"
                    style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(200,180,154,0.40)' : 'none' }}
                  >
                    <span className="font-body font-medium" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-ink)' }}>
                      {item.label}
                    </span>
                    <span className="font-body text-sm text-right" style={{ color: 'var(--color-hps-smoke)', maxWidth: '50%' }}>
                      {item.note}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div data-reveal data-reveal-delay="80">
              <p className="font-mono uppercase mb-4" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-teal-dark)' }}>
                Connected ecosystem
              </p>
              <h3 className="font-display mb-5" style={{ fontSize: '1.5rem', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
                Accessibility built in, not bolted on.
              </h3>
              <p className="font-body leading-relaxed mb-6" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}>
                When HPS builds a website, accessibility is baked into the architecture — semantic HTML, proper ARIA patterns, keyboard navigation, and contrast ratios designed from the start. An audit after launch should be a verification, not a surprise.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { name: 'HPS Accessibility Platform', href: '/platforms/hps-accessibility', note: 'Ongoing monitoring & compliance dashboard' },
                  { name: 'Web Development',            href: '/services/web-development',    note: 'Accessible builds from first commit' },
                  { name: 'HPS SEO Audit',              href: '/platforms/hps-seo-audit',     note: 'Accessibility improvements lift SEO signals' },
                ].map(link => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="group flex items-start gap-4 p-4 rounded-sm transition-all duration-200"
                    style={{ background: 'var(--color-hps-parchment)', border: '1px solid rgba(200,180,154,0.40)', textDecoration: 'none' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-hps-gold-rich)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(12,20,32,0.06)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(200,180,154,0.40)'; e.currentTarget.style.boxShadow = 'none' }}
                  >
                    <div className="w-1 self-stretch rounded-full shrink-0" style={{ background: 'var(--color-hps-gold-rich)' }} aria-hidden="true" />
                    <div>
                      <p className="font-body font-medium mb-0.5" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-ink)' }}>{link.name}</p>
                      <p className="font-body text-sm" style={{ color: 'var(--color-hps-smoke)' }}>{link.note}</p>
                    </div>
                    <span className="ml-auto self-center font-mono transition-transform duration-200 group-hover:translate-x-1" style={{ fontSize: '0.7rem', color: 'var(--color-hps-gold-rich)' }} aria-hidden="true">→</span>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Compliance Operations ──────────────────────────────── */}
      <section className="py-16 lg:py-24 border-t" style={{ background: 'var(--color-hps-parchment)', borderColor: 'rgba(200,180,154,0.40)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-12">
            <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-gold-rich)' }}>
              Operational accessibility
            </p>
            <h2 className="font-display mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
              Compliance doesn't end at certification.
            </h2>
            <p className="font-body max-w-2xl leading-relaxed" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}>
              A one-time audit documents a point in time. Every new feature, every content update, and every CMS user who doesn't know the WCAG rules is an opportunity for regression. Operational accessibility is a recurring function — not a project with a close date.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { n: '01', label: 'Continuous Monitoring', desc: 'Automated scanning integrated into your deployment pipeline flags new accessibility failures before they reach production. Regression alerts surface within hours — not at the next annual audit cycle.', accent: 'var(--color-hps-gold-rich)' },
              { n: '02', label: 'Annual Re-Certification', desc: 'Full manual and automated re-audit on a defined schedule. Your VPAT and accessibility statement stay current with the version of the product your users actually interact with today.', accent: 'var(--color-hps-teal-dark)' },
              { n: '03', label: 'New Feature Coverage', desc: 'When your product ships new UI, new forms, or new document types, accessibility testing is scoped into the release cycle — not deferred until the next full audit engagement.', accent: 'var(--color-hps-green)' },
            ].map((item, i) => (
              <div
                key={item.n}
                data-reveal
                data-reveal-delay={String(i * 80)}
                className="p-7 rounded-sm"
                style={{ background: 'var(--color-hps-cream)', border: '1px solid rgba(200,180,154,0.40)', borderTop: `3px solid ${item.accent}` }}
              >
                <span className="font-mono block mb-4" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: item.accent, opacity: 0.8 }}>
                  {item.n}
                </span>
                <h3 className="font-display mb-3" style={{ fontSize: '1.0625rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}>
                  {item.label}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-hps-smoke)' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Compliance Stack ────────────────────────────────────── */}
      <section className="py-14 lg:py-20" style={{ background: 'var(--color-hps-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-8">
            <p
              className="font-mono uppercase mb-3"
              style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-teal-dark)' }}
            >
              Compliance infrastructure
            </p>
            <h2
              className="font-display mb-3"
              style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.875rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}
            >
              Four platforms. One compliance operation.
            </h2>
            <p
              className="font-body max-w-2xl"
              style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)', lineHeight: 1.65 }}
            >
              Audit findings flow into the client portal. Monitoring prevents regression between audit cycles. SEO audit data tracks accessibility regressions introduced by each code deploy. These platforms work together because compliance is a continuous operation — not a project with a close date.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {([
              {
                name: 'HPS Accessibility',
                href: '/platforms/hps-accessibility',
                note: 'Continuous automated scanning, compliance dashboards, and certification management.',
                accent: 'var(--color-hps-gold-rich)',
                live: true,
              },
              {
                name: 'HPS Client Portal',
                href: '/platforms/hps-client-portal',
                note: 'Audit reports, VPATs, and remediation records archived and accessible at any time.',
                accent: 'var(--color-hps-ink)',
              },
              {
                name: 'HPS SEO Audit',
                href: '/platforms/hps-seo-audit',
                note: 'Accessibility improvements tracked for regression after each code deploy.',
                accent: 'var(--color-hps-teal-dark)',
              },
              {
                name: 'HPS Uptime',
                href: '/platforms/hps-uptime',
                note: 'Availability monitoring that alerts before a compliance-critical service goes dark.',
                accent: 'var(--color-hps-gold-rich)',
              },
            ] as { name: string; href: string; note: string; accent: string; live?: boolean }[]).map((item, i) => (
              <Link
                key={item.href}
                to={item.href}
                data-reveal
                data-reveal-delay={String((i % 2) * 60)}
                className="group flex items-start gap-4 p-5 rounded-sm transition-all duration-200"
                style={{
                  background: 'var(--color-hps-parchment)',
                  border: '1px solid rgba(200,180,154,0.40)',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = item.accent
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(12,20,32,0.06)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(200,180,154,0.40)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div
                  className="w-1 self-stretch rounded-full shrink-0"
                  style={{ background: item.accent }}
                  aria-hidden="true"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p
                      className="font-body font-medium"
                      style={{ fontSize: '0.9375rem', color: 'var(--color-hps-ink)' }}
                    >
                      {item.name}
                    </p>
                    {item.live && (
                      <>
                        <span
                          className="inline-block w-1.5 h-1.5 rounded-full"
                          style={{ background: 'var(--color-hps-green)' }}
                          aria-hidden="true"
                        />
                        <span
                          className="font-mono uppercase"
                          style={{ fontSize: '0.45rem', letterSpacing: '0.18em', color: 'var(--color-hps-green)' }}
                        >
                          Live
                        </span>
                      </>
                    )}
                  </div>
                  <p
                    className="font-body text-sm leading-relaxed"
                    style={{ color: 'var(--color-hps-smoke)' }}
                  >
                    {item.note}
                  </p>
                </div>
                <span
                  className="ml-auto self-center font-mono transition-transform duration-200 group-hover:translate-x-1"
                  style={{ fontSize: '0.7rem', color: item.accent }}
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ecosystem Gateway ───────────────────────────────────── */}
      <section className="py-14 lg:py-20" style={{ background: 'var(--color-hps-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div
            data-reveal
            className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16 pb-10 mb-10 border-b"
            style={{ borderColor: 'rgba(200,180,154,0.40)' }}
          >
            <div className="flex-1">
              <p className="font-mono uppercase mb-3" style={{ fontSize: '0.55rem', letterSpacing: '0.18em', color: 'var(--color-hps-gold-rich)' }}>
                Ecosystem gateway
              </p>
              <h3 className="font-display mb-3" style={{ fontSize: '1.5rem', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
                HPS Accessibility Platform — live access
              </h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-hps-smoke)', maxWidth: '40rem' }}>
                The HPS Accessibility monitoring and compliance platform is live at hpsaccessibility.com. Organizations using the platform get continuous automated scanning, compliance health dashboards, and certification management from a single operational interface.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="https://hpsaccessibility.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-mono uppercase"
                style={{ fontSize: '0.65rem', letterSpacing: '0.18em', color: 'var(--color-hps-cream)', background: 'var(--color-hps-gold-rich)', padding: '0.75rem 1.5rem', borderRadius: '2px', textDecoration: 'none' }}
              >
                Access Platform ↗
              </a>
              <Link
                to="/platforms/hps-accessibility"
                className="inline-block font-mono uppercase"
                style={{ fontSize: '0.65rem', letterSpacing: '0.18em', color: 'var(--color-hps-gold-rich)', background: 'transparent', padding: '0.75rem 1.5rem', borderRadius: '2px', border: '1px solid var(--color-hps-gold-rich)', textDecoration: 'none' }}
              >
                Platform Details →
              </Link>
            </div>
          </div>
          <div data-reveal data-reveal-delay="80" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'Web Development', note: 'Accessible builds from first commit', href: '/services/web-development' },
              { label: 'HPS SEO Audit', note: 'Accessibility improvements compound SEO signals', href: '/platforms/hps-seo-audit' },
              { label: 'HPS Client Portal', note: 'Audit reports, VPATs, and certification documents in one organized environment', href: '/platforms/hps-client-portal' },
              { label: 'Healthcare & Accessibility Pathway', note: 'Full ecosystem for compliance-bound organizations', href: '/ecosystem/healthcare-accessibility' },
            ].map(link => (
              <Link
                key={link.href}
                to={link.href}
                className="flex items-center gap-3 p-4 rounded-sm"
                style={{ background: 'var(--color-hps-parchment)', border: '1px solid rgba(200,180,154,0.40)', textDecoration: 'none', transition: 'border-color 0.2s ease, box-shadow 0.2s ease' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-hps-gold-rich)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(12,20,32,0.06)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(200,180,154,0.40)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <div className="flex-1">
                  <p className="font-body font-medium" style={{ fontSize: '0.875rem', color: 'var(--color-hps-ink)' }}>{link.label}</p>
                  <p className="font-body" style={{ fontSize: '0.75rem', color: 'var(--color-hps-smoke)' }}>{link.note}</p>
                </div>
                <span className="font-mono shrink-0" style={{ fontSize: '0.65rem', color: 'var(--color-hps-gold-rich)' }} aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Compliance Lifecycle ───────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-parchment)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-12">
            <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-teal-dark)' }}>
              Operational compliance lifecycle
            </p>
            <h2 className="font-display mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
              How a compliance engagement actually works.
            </h2>
            <p className="font-body max-w-2xl leading-relaxed" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}>
              Every engagement follows the same operational sequence — from intake through continuous monitoring. Each phase produces a documented output that feeds the next. The compliance record grows with every cycle.
            </p>
          </div>
          <ProcessFlow
            accentColor="var(--color-hps-teal-dark)"
            steps={[
              {
                n: '01',
                label: 'Intake & Scoping',
                desc: 'Requirements documented. Platform inventory captured. Compliance standard selected — WCAG 2.1 AA, Section 508, ADA Title III, or combined. Engagement scope and timeline confirmed before any testing begins.',
              },
              {
                n: '02',
                label: 'Automated Baseline Audit',
                desc: 'axe-core, WAVE, Lighthouse, and Pa11y CI run across all page templates, URL patterns, and identified user flows. Issues classified by WCAG criterion, severity level, and remediation complexity. Automated scanning catches structure-level failures fast.',
              },
              {
                n: '03',
                label: 'Manual Testing',
                desc: 'Keyboard navigation tested against every interactive element. Screen reader testing conducted across NVDA, JAWS, VoiceOver, and TalkBack. Cognitive load, focus order, motion sensitivity, and color contrast reviewed by a human tester. Automated scans miss 30–40% of real accessibility failures — manual testing is not optional.',
              },
              {
                n: '04',
                label: 'VPAT & Issue Documentation',
                desc: 'Voluntary Product Accessibility Template drafted or updated to reflect current conformance status. Accessibility statement versioned. Full issue register delivered: each finding includes the WCAG criterion, severity, affected component, and recommended remediation approach.',
              },
              {
                n: '05',
                label: 'Remediation',
                desc: 'Findings scoped into development tasks with prioritization by severity and user impact. We work alongside your engineering team or own remediation directly — depending on engagement scope. Each fix verified before the issue is closed.',
              },
              {
                n: '06',
                label: 'Verification Testing',
                desc: 'Every remediated issue re-tested against its original WCAG criterion. Pass/fail documented against the issue register. VPAT updated to reflect current conformance. No issues closed on assumption — each one is verified.',
              },
              {
                n: '07',
                label: 'Continuous Monitoring',
                desc: 'HPS Accessibility platform integrated for automated regression detection between manual audit cycles. New UI, new content types, and CMS updates monitored for regressions. Regression alerts surface within hours — not at the next annual audit.',
              },
              {
                n: '08',
                label: 'Re-Certification',
                desc: 'Annual or release-triggered full re-audit. VPAT versioned and updated. Accessibility statement refreshed. The compliance record grows with every cycle — so the next legal review has a complete dated evidence trail without a scramble.',
              },
            ]}
          />
        </div>
      </section>

      {/* ── Enterprise Sector Authority ─────────────────────────── */}
      <section className="py-16 lg:py-20" style={{ background: 'var(--color-hps-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-10">
            <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-gold-rich)' }}>
              Compliance-bound sectors
            </p>
            <h2 className="font-display mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
              Organizations with real compliance obligations.
            </h2>
            <p className="font-body max-w-2xl leading-relaxed" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}>
              Accessibility compliance is not the same across industries. Healthcare organizations face different audit triggers than state agencies. HPS scopes each engagement against the actual regulatory context — not a generic WCAG checklist.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {([
              {
                sector: 'Healthcare & Patient Systems',
                standards: 'WCAG 2.1 AA · Section 508 · ADA Title III',
                desc: 'Patient portals, scheduling systems, intake forms, and telehealth platforms face both ADA and Section 508 obligations — particularly for organizations receiving federal funding. Accessible patient-facing digital tools are increasingly part of standard of care documentation.',
                accent: 'var(--color-hps-teal-dark)',
              },
              {
                sector: 'State & Local Government',
                standards: 'ADA Title II · Section 508 · DOJ Compliance',
                desc: 'Government websites and digital services are subject to ADA Title II obligations. The Department of Justice has issued final rules establishing WCAG 2.1 AA as the standard. Organizations under DOJ compliance timelines need both remediation plans and continuous monitoring.',
                accent: 'var(--color-hps-gold-rich)',
              },
              {
                sector: 'Higher Education',
                standards: 'Section 504 · Section 508 · WCAG 2.1 AA',
                desc: 'Student-facing platforms, course management systems, institutional websites, and financial aid portals carry Section 504 obligations for institutions receiving federal financial assistance. Institutional accessibility plans require ongoing documentation and audit records.',
                accent: 'var(--color-hps-green)',
              },
              {
                sector: 'Enterprise & Commercial Products',
                standards: 'ADA Title III · CVAA · WCAG 2.1 AA',
                desc: 'Commercial organizations with public-facing digital products face ADA Title III exposure — particularly for e-commerce, HR systems, and customer portals. A current VPAT and accessibility statement represent the clearest legal defense in demand-letter situations.',
                accent: 'var(--color-hps-coral-warm)',
              },
            ] as { sector: string; standards: string; desc: string; accent: string }[]).map((item, i) => (
              <div
                key={item.sector}
                data-reveal
                data-reveal-delay={String((i % 2) * 80)}
                className="p-7 rounded-sm"
                style={{ background: 'var(--color-hps-parchment)', border: '1px solid rgba(200,180,154,0.40)', borderLeft: `3px solid ${item.accent}` }}
              >
                <p className="font-mono uppercase mb-1.5" style={{ fontSize: '0.48rem', letterSpacing: '0.18em', color: item.accent }}>
                  {item.standards}
                </p>
                <h3 className="font-display mb-3" style={{ fontSize: '1.0625rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}>
                  {item.sector}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-hps-smoke)' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div data-reveal className="mt-8 pt-8 border-t flex flex-col sm:flex-row gap-3" style={{ borderColor: 'rgba(200,180,154,0.40)' }}>
            <a
              href="https://hpsaccessibility.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-mono uppercase"
              style={{ fontSize: '0.65rem', letterSpacing: '0.18em', color: 'var(--color-hps-cream)', background: 'var(--color-hps-teal-dark)', padding: '0.75rem 1.5rem', borderRadius: '2px', textDecoration: 'none' }}
            >
              Access Compliance Platform ↗
            </a>
            <Link
              to="/contact"
              className="inline-block font-mono uppercase"
              style={{ fontSize: '0.65rem', letterSpacing: '0.18em', color: 'var(--color-hps-teal-dark)', border: '1px solid var(--color-hps-teal-dark)', padding: '0.75rem 1.5rem', borderRadius: '2px', textDecoration: 'none' }}
            >
              Start a Compliance Conversation →
            </Link>
          </div>
        </div>
      </section>

      </div>{/* end atmosphere wrapper */}

      <CTABand
        headline="Need an accessibility audit?"
        subhead="We'll assess your site, identify issues, and deliver a remediation plan with a clear scope, severity classification, and timeline."
        buttonText="Request an Audit"
        showPhone
      />
    </>
  )
}
