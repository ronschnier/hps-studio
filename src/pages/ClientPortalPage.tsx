import { Link } from 'react-router-dom'
import CTABand from '../components/sections/CTABand'
import BackgroundAtmosphere from '../components/decorative/BackgroundAtmosphere'

// ── Data ──────────────────────────────────────────────────────────────────────

const portalFeatures = [
  {
    name: 'Project Management',
    desc: 'Track active engagements from brief through delivery. Milestones, task status, timeline, and responsible parties — visible in real time without chasing an email thread.',
  },
  {
    name: 'Invoices & Billing',
    desc: 'Access current and historical invoices, payment status, and billing history. Pay directly from the portal with a full record of every transaction.',
  },
  {
    name: 'Onboarding Systems',
    desc: 'Structured onboarding workflows for new engagements — intake forms, brand asset uploads, access provisioning, and kickoff scheduling organized in one place.',
  },
  {
    name: 'Deliverables & Approvals',
    desc: 'Review and approve deliverables — design files, copy drafts, digital builds — directly in the portal. Comment threads and revision requests tracked against each item.',
  },
  {
    name: 'Support & Requests',
    desc: 'Submit support requests, change orders, and service inquiries with full ticket history. Responses and resolution timelines documented for every interaction.',
  },
  {
    name: 'Hosting & System Status',
    desc: 'For managed hosting clients: domain status, SSL certificates, uptime records, and maintenance windows accessible without a support call.',
  },
  {
    name: 'Operational Communication',
    desc: 'Project notes, status updates, and team communications organized by engagement — not scattered across email chains and messaging threads.',
  },
  {
    name: 'Ecosystem Integration',
    desc: 'The portal sits inside the HPS operational ecosystem. Hosting accounts, platform subscriptions, and service engagements all visible under one authenticated login.',
  },
]

const workflowSteps = [
  { n: '01', step: 'Account Setup',      desc: 'Your portal account is provisioned when your engagement begins. You receive credentials, a brief orientation, and access to your project workspace from day one.' },
  { n: '02', step: 'Onboarding Intake',  desc: 'Complete intake forms, upload brand assets, and confirm project scope through the portal — eliminating back-and-forth emails before work begins.' },
  { n: '03', step: 'Active Project',     desc: 'Track milestone completion, review deliverables in-context, and submit feedback with comments attached directly to the work item — not to a reply chain.' },
  { n: '04', step: 'Approvals',          desc: 'Sign off on deliverables, approve change orders, and authorize billing from the portal. Every approval timestamped and documented.' },
  { n: '05', step: 'Invoicing',          desc: 'Invoices published directly to your billing tab. Pay by card or ACH with immediate confirmation. Historical invoices always accessible.' },
  { n: '06', step: 'Ongoing Access',     desc: 'Hosting clients retain portal access post-engagement for status, support requests, and service management. The relationship does not end at delivery.' },
]

const managedServices = [
  {
    name: 'Managed Hosting',
    desc: 'Monthly hosting management covers security patching, SSL renewal, uptime monitoring, database optimization, and backup verification — without a support call required to confirm anything is running.',
  },
  {
    name: 'Accessibility Monitoring',
    desc: 'Ongoing WCAG 2.1 and Section 508 compliance monitoring catches regressions introduced by new content or code deployments before they compound into legal exposure. Monthly compliance health reports delivered through the portal.',
  },
  {
    name: 'SEO Health Maintenance',
    desc: 'Scheduled technical SEO crawls flag broken links, missing schema, Core Web Vitals regressions, and indexation issues before they compound into ranking loss. Reports delivered on cadence.',
  },
  {
    name: 'Operational Support',
    desc: 'Ongoing support tier covering content updates, platform configuration changes, troubleshooting, and operational requests — prioritized by severity, tracked through resolution, documented in full.',
  },
  {
    name: 'Campaign Operations',
    desc: 'For clients with recurring digital campaigns: audience management, push notification scheduling, social content coordination, and performance reporting on a defined operational cadence.',
  },
  {
    name: 'Ecosystem Maintenance',
    desc: 'Platform account management, subscription oversight, QR destination updates, and system configuration changes across your full HPS platform footprint — handled without adding operational load to your team.',
  },
]

const relationshipPhases = [
  {
    phase: 'Onboarding',
    desc: 'Brand assets, access credentials, project scope, and kickoff documentation organized in your portal workspace before a single deliverable is produced. No chase emails, no missing files, no lost context between conversations.',
  },
  {
    phase: 'Active Delivery',
    desc: 'Work progresses through tracked milestones with deliverables reviewed directly in-context. Feedback attaches to the item, not to an email. Approvals are timestamped. Change orders are documented and authorized before work shifts.',
  },
  {
    phase: 'Launch & Handoff',
    desc: 'Launch documentation, access credentials, platform configurations, and training materials delivered through the portal at close. Everything the client needs to operate independently — or everything needed for ongoing management to begin.',
  },
  {
    phase: 'Ongoing Operations',
    desc: 'For managed service clients, the operational relationship continues post-launch. Monthly reports, support request resolution, hosting management, accessibility monitoring, and system updates — all visible in the same portal environment.',
  },
  {
    phase: 'Reporting & Review',
    desc: 'Periodic operational reviews surface what is performing, what needs attention, and what the next phase of the engagement should address. Uptime records, accessibility compliance status, SEO health, and campaign performance consolidated into one review document.',
  },
  {
    phase: 'Ecosystem Growth',
    desc: "As the operational relationship matures, additional HPS platforms and services integrate into the client's ecosystem. The portal expands to reflect new systems — without requiring a new onboarding process for each addition.",
  },
]

const connectedSystems = [
  { label: 'HPS Client Portal',    href: '/platforms/hps-client-portal',    rel: 'Platform overview and feature detail',         accent: 'var(--color-hps-ink)' },
  { label: 'HPS Uptime',           href: '/platforms/hps-uptime',            rel: 'Production uptime monitoring and SLA records',  accent: 'var(--color-hps-teal-dark)' },
  { label: 'HPS Accessibility',    href: 'https://hpsaccessibility.com',    rel: 'WCAG and Section 508 compliance infrastructure', accent: 'var(--color-hps-teal-dark)', external: true },
  { label: 'HPS Transfer',         href: '/platforms/hps-transfer',          rel: 'Branded large file and deliverable delivery',   accent: 'var(--color-hps-gold)' },
  { label: 'Hosting',              href: '/hosting',                          rel: 'Managed hosting products',                      accent: 'var(--color-hps-coral-warm)' },
  { label: 'HPS SEO Audit',        href: '/platforms/hps-seo-audit',         rel: 'Ongoing technical SEO health monitoring',       accent: 'var(--color-hps-gold-rich)' },
  { label: 'HPS Toolkit',          href: '/platforms/hps-toolkit',           rel: 'Operational utilities and internal tools',      accent: 'var(--color-hps-teal)' },
  { label: 'All Services',         href: '/services',                         rel: 'Full service engagement catalog',               accent: 'var(--color-hps-green)' },
]

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ClientPortalPage() {
  return (
    <>
      <div style={{ position: 'relative', isolation: 'isolate' }}>
      <BackgroundAtmosphere mood="citrus" intensity="whisper" density="sparse" />

      {/* ── Page Header ─────────────────────────────────────────────── */}
      <section
        className="pt-32 lg:pt-40 pb-16 lg:pb-20"
        style={{ background: 'var(--color-hps-cream)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <div
              className="w-8 h-px mb-6"
              style={{ background: 'var(--color-hps-ink)' }}
              aria-hidden="true"
            />
            <p
              className="font-mono uppercase mb-4"
              style={{ fontSize: '0.65rem', letterSpacing: '0.22em', color: 'var(--color-hps-ink)', opacity: 0.55 }}
            >
              HPS Client Infrastructure
            </p>
            <h1
              data-reveal
              className="font-display mb-6"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', color: 'var(--color-hps-ink)', lineHeight: 1.03 }}
            >
              Client Portal & Project Access
            </h1>
            <p
              data-reveal
              data-reveal-delay="80"
              className="font-body leading-relaxed mb-3"
              style={{ fontSize: '1.125rem', color: 'var(--color-hps-smoke)', maxWidth: '40rem' }}
            >
              Everything tied to your HPS engagement — projects, invoices, deliverables, support, and hosted systems — accessible in one authenticated environment built into the HPS operational ecosystem.
            </p>
            <p
              data-reveal
              data-reveal-delay="160"
              className="font-body leading-relaxed"
              style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)', maxWidth: '40rem', opacity: 0.85 }}
            >
              The same operational infrastructure HPS runs internally, extended to the client side of every engagement.
            </p>
            <div data-reveal data-reveal-delay="240" className="flex flex-wrap gap-3 mt-8">
              <a
                href="https://happypathstudios.com/crm/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-body font-medium rounded-sm transition-all duration-200"
                style={{
                  padding: '0.75rem 1.75rem',
                  background: 'var(--color-hps-ink)',
                  color: 'var(--color-hps-cream)',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-hps-green-dark)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-hps-ink)')}
              >
                Client Login
              </a>
              <a
                href="https://happypathstudios.com/crm/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-body font-medium rounded-sm transition-all duration-200"
                style={{
                  padding: '0.75rem 1.75rem',
                  background: 'transparent',
                  color: 'var(--color-hps-ink)',
                  border: '1px solid rgba(12,20,32,0.25)',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--color-hps-ink)'
                  e.currentTarget.style.background = 'rgba(12,20,32,0.05)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(12,20,32,0.25)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                Access Portal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why the Portal Matters ──────────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-parchment)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            <div data-reveal>
              <p
                className="font-mono uppercase mb-4"
                style={{ fontSize: '0.6rem', letterSpacing: '0.22em', color: 'var(--color-hps-ink)', opacity: 0.50 }}
              >
                Why it matters
              </p>
              <h2
                className="font-display mb-5"
                style={{ fontSize: 'clamp(1.375rem, 2.5vw, 2rem)', color: 'var(--color-hps-ink)', lineHeight: 1.08 }}
              >
                One operational space for communication, projects, support, and services.
              </h2>
              <p
                className="font-body leading-relaxed mb-4"
                style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)' }}
              >
                Most client relationships — at agencies, freelancers, and studios — run on scattered infrastructure. Scope lives in an email thread. The invoice is in a separate email. The latest design file is in a Dropbox link that expired. The support request went to someone's personal inbox and was never logged.
              </p>
              <p
                className="font-body leading-relaxed mb-4"
                style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)' }}
              >
                When something breaks, there's no record of what was agreed to, who approved it, or when it was last touched. When a project stalls, no one can tell where it stopped. When a client wants to add a service six months after launch, the context has to be reconstructed from memory.
              </p>
              <p
                className="font-body leading-relaxed"
                style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)' }}
              >
                The HPS Client Portal is the response to that. Every project, every invoice, every deliverable, every support request, and every service record — in one environment, under one login, accessible at any time. Communication is centralized. History is preserved. Nothing gets lost in a thread.
              </p>
            </div>

            <div data-reveal data-reveal-delay="80">
              <p
                className="font-mono uppercase mb-5"
                style={{ fontSize: '0.58rem', letterSpacing: '0.18em', color: 'var(--color-hps-ink)', opacity: 0.45 }}
              >
                What the portal replaces
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { before: 'Scattered email threads',      after: 'Centralized project communication' },
                  { before: 'Invoices in separate inboxes', after: 'Billing tab with full payment history' },
                  { before: 'Expired file sharing links',   after: 'Deliverables with permanent access' },
                  { before: 'Phone calls for status',       after: 'Real-time milestone tracking' },
                  { before: 'Informal approval by email',   after: 'Timestamped in-portal approvals' },
                  { before: 'Lost onboarding context',      after: 'Structured intake with asset archive' },
                  { before: 'Separate vendor portals',      after: 'One login across all HPS systems' },
                  { before: 'Support with no audit trail',  after: 'Ticketed support with resolution log' },
                ].map(row => (
                  <div
                    key={row.before}
                    className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 py-2.5"
                    style={{ borderBottom: '1px solid rgba(200,180,154,0.32)' }}
                  >
                    <p
                      className="font-body text-sm"
                      style={{ color: 'var(--color-hps-smoke)', opacity: 0.60, textDecoration: 'line-through' }}
                    >
                      {row.before}
                    </p>
                    <span
                      className="font-mono shrink-0"
                      style={{ fontSize: '0.65rem', color: 'var(--color-hps-ink)', opacity: 0.25 }}
                      aria-hidden="true"
                    >
                      →
                    </span>
                    <p
                      className="font-body text-sm font-medium"
                      style={{ color: 'var(--color-hps-ink)' }}
                    >
                      {row.after}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Portal Features ──────────────────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-10">
            <p
              className="font-mono uppercase mb-3"
              style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-ink)', opacity: 0.55 }}
            >
              What the portal includes
            </p>
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}
            >
              Your operational access layer
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {portalFeatures.map((feat, i) => (
              <div
                key={feat.name}
                data-reveal
                data-reveal-delay={String((i % 4) * 50)}
                className="rounded-sm p-6"
                style={{
                  background: 'var(--color-hps-parchment)',
                  border: '1px solid rgba(200,180,154,0.40)',
                }}
              >
                <div
                  className="w-5 h-px mb-4"
                  style={{ background: 'var(--color-hps-ink)', opacity: 0.35 }}
                  aria-hidden="true"
                />
                <h3
                  className="font-display mb-2"
                  style={{ fontSize: '1rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}
                >
                  {feat.name}
                </h3>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: 'var(--color-hps-smoke)' }}
                >
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-parchment)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-12">
            <p
              className="font-mono uppercase mb-3"
              style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-ink)', opacity: 0.55 }}
            >
              How it works in practice
            </p>
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}
            >
              Client workflow
            </h2>
          </div>

          <div className="flex flex-col gap-0">
            {workflowSteps.map((step, i, arr) => (
              <div
                key={step.n}
                data-reveal
                data-reveal-delay={String((i % 3) * 60)}
                className="grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-4 lg:gap-12 py-8"
                style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(200,180,154,0.40)' : 'none' }}
              >
                <div className="flex items-start gap-4 lg:flex-col lg:gap-2">
                  <span
                    className="font-mono shrink-0"
                    style={{ fontSize: '1.5rem', color: 'var(--color-hps-ink)', lineHeight: 1, opacity: 0.18 }}
                    aria-hidden="true"
                  >
                    {step.n}
                  </span>
                  <p
                    className="font-display"
                    style={{ fontSize: '1rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}
                  >
                    {step.step}
                  </p>
                </div>
                <p
                  className="font-body leading-relaxed"
                  style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Managed Services ────────────────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-12">
            <p
              className="font-mono uppercase mb-3"
              style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-ink)', opacity: 0.55 }}
            >
              Recurring service relationships
            </p>
            <h2
              className="font-display mb-4"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}
            >
              HPS is not just project delivery.
            </h2>
            <p
              className="font-body max-w-xl leading-relaxed"
              style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}
            >
              Many HPS client relationships are ongoing operational partnerships. Hosting is managed. Accessibility is monitored. SEO health is checked on cadence. Support requests are handled and documented. Campaigns run on schedule. The portal is the operational hub for all of it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {managedServices.map((svc, i) => (
              <div
                key={svc.name}
                data-reveal
                data-reveal-delay={String((i % 3) * 60)}
                className="rounded-sm p-6"
                style={{
                  background: 'var(--color-hps-parchment)',
                  border: '1px solid rgba(200,180,154,0.40)',
                  borderLeft: '3px solid var(--color-hps-ink)',
                }}
              >
                <h3
                  className="font-display mb-2"
                  style={{ fontSize: '1.0625rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}
                >
                  {svc.name}
                </h3>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: 'var(--color-hps-smoke)' }}
                >
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Accessibility Operations ─────────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-parchment)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            <div data-reveal>
              <p
                className="font-mono uppercase mb-4"
                style={{ fontSize: '0.6rem', letterSpacing: '0.22em', color: 'var(--color-hps-teal-dark)' }}
              >
                Accessibility as operational infrastructure
              </p>
              <h2
                className="font-display mb-5"
                style={{ fontSize: 'clamp(1.375rem, 2.5vw, 2rem)', color: 'var(--color-hps-ink)', lineHeight: 1.08 }}
              >
                Accessibility is not a one-time audit.
              </h2>
              <p
                className="font-body leading-relaxed mb-4"
                style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)' }}
              >
                The most common failure pattern in digital accessibility work: an organization commissions a WCAG audit, remediates the findings, and considers the matter closed. Six months later, a new developer ships a feature that reintroduces three of the same failure classes. The audit is out of date. The legal exposure is back.
              </p>
              <p
                className="font-body leading-relaxed mb-4"
                style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)' }}
              >
                HPS Accessibility treats compliance as a continuous operational process, not a project. Ongoing monitoring catches regressions before they reach production. Monthly compliance health reports are delivered through the client portal and archived for legal and procurement documentation. Remediation tracking lives alongside the project record.
              </p>
              <p
                className="font-body leading-relaxed mb-6"
                style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)' }}
              >
                For healthcare organizations, federal contractors, and enterprise clients with ongoing WCAG 2.1 and Section 508 obligations, this is what compliance operations actually look like — not a scan run once a year, but a monitored, documented, continuously maintained compliance posture.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://hpsaccessibility.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-body font-medium text-sm rounded-sm transition-all duration-200"
                  style={{
                    padding: '0.65rem 1.35rem',
                    background: 'var(--color-hps-teal-dark)',
                    color: '#ffffff',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  Explore HPS Accessibility →
                </a>
                <Link
                  to="/accessibility"
                  className="inline-flex items-center font-body font-medium text-sm rounded-sm transition-all duration-200"
                  style={{
                    padding: '0.65rem 1.35rem',
                    background: 'transparent',
                    color: 'var(--color-hps-teal-dark)',
                    border: '1px solid rgba(13,148,136,0.30)',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--color-hps-teal-dark)'
                    e.currentTarget.style.background = 'rgba(13,148,136,0.05)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(13,148,136,0.30)'
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  Accessibility Services
                </Link>
              </div>
            </div>

            <div data-reveal data-reveal-delay="80">
              <p
                className="font-mono uppercase mb-5"
                style={{ fontSize: '0.58rem', letterSpacing: '0.18em', color: 'var(--color-hps-teal-dark)' }}
              >
                Accessibility operations workflow
              </p>
              <div className="flex flex-col gap-0">
                {[
                  { n: '01', step: 'Audit',           desc: 'Full WCAG 2.1 AA/AAA automated crawl and manual assistive technology testing across critical user flows — NVDA, JAWS, VoiceOver, and keyboard-only navigation.' },
                  { n: '02', step: 'Triage',           desc: 'Findings prioritized by legal exposure, user impact, and remediation effort. Assigned to responsible parties with deadlines and tracked through the portal.' },
                  { n: '03', step: 'Remediation',      desc: 'Code-level fixes implemented and re-tested against the original failure. Components updated to prevent the same failure class recurring in future releases.' },
                  { n: '04', step: 'Documentation',    desc: 'Signed VPAT or formal audit report delivered for procurement, legal review, or ADA good-faith defense. Archived in the client portal record.' },
                  { n: '05', step: 'Monitoring',       desc: 'Continuous scanning on deployment cadence. Monthly compliance health reports delivered through the portal and archived for ongoing documentation continuity.' },
                  { n: '06', step: 'Reporting Cycle',  desc: 'Quarterly compliance review consolidates monitoring data, active remediation status, and next-cycle recommendations into a documented operational record.' },
                ].map((step, i, arr) => (
                  <div
                    key={step.n}
                    className="flex gap-5 py-4"
                    style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(200,180,154,0.35)' : 'none' }}
                  >
                    <span
                      className="font-mono shrink-0"
                      style={{ fontSize: '0.65rem', letterSpacing: '0.12em', color: 'var(--color-hps-teal-dark)', opacity: 0.50, minWidth: '1.75rem', paddingTop: '0.1rem' }}
                      aria-hidden="true"
                    >
                      {step.n}
                    </span>
                    <div>
                      <p
                        className="font-display mb-1"
                        style={{ fontSize: '0.9375rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}
                      >
                        {step.step}
                      </p>
                      <p
                        className="font-body text-sm leading-relaxed"
                        style={{ color: 'var(--color-hps-smoke)' }}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Operational Relationships ────────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-12">
            <p
              className="font-mono uppercase mb-3"
              style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-ink)', opacity: 0.55 }}
            >
              How HPS relationships evolve
            </p>
            <h2
              className="font-display mb-4"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}
            >
              HPS becomes part of your operational infrastructure.
            </h2>
            <p
              className="font-body max-w-xl leading-relaxed"
              style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}
            >
              The relationship does not end at launch. For clients with ongoing operational needs, HPS functions as an embedded infrastructure layer — handling the systems, monitoring, reporting, and maintenance that the business depends on without requiring internal headcount to manage it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {relationshipPhases.map((phase, i) => (
              <div
                key={phase.phase}
                data-reveal
                data-reveal-delay={String((i % 3) * 60)}
                className="rounded-sm p-6"
                style={{
                  background: 'var(--color-hps-parchment)',
                  border: '1px solid rgba(200,180,154,0.40)',
                }}
              >
                <div
                  className="w-5 h-px mb-4"
                  style={{ background: 'var(--color-hps-ink)', opacity: 0.30 }}
                  aria-hidden="true"
                />
                <h3
                  className="font-display mb-2"
                  style={{ fontSize: '1.0625rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}
                >
                  {phase.phase}
                </h3>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: 'var(--color-hps-smoke)' }}
                >
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ecosystem position ──────────────────────────────────────── */}
      <section className="py-16 lg:py-20" style={{ background: 'var(--color-hps-parchment)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            <div data-reveal>
              <p
                className="font-mono uppercase mb-4"
                style={{ fontSize: '0.6rem', letterSpacing: '0.22em', color: 'var(--color-hps-ink)', opacity: 0.55 }}
              >
                Inside the HPS ecosystem
              </p>
              <h2
                className="font-display mb-5"
                style={{ fontSize: 'clamp(1.375rem, 2.5vw, 2rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}
              >
                One login. Every system.
              </h2>
              <p
                className="font-body leading-relaxed mb-4"
                style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)' }}
              >
                The Client Portal is not standalone project management software — it is the client-facing layer of the same operational infrastructure HPS runs internally. When your engagement includes managed hosting, platform access, accessibility monitoring, or ongoing services, everything routes through the same authenticated environment.
              </p>
              <p
                className="font-body leading-relaxed mb-4"
                style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)' }}
              >
                Hosting accounts, active subscriptions, project timelines, billing history, support tickets, and compliance records all sit under one login. No bouncing between separate vendor portals. No support-ticket-in-one-place, invoice-in-another fragmentation. No compliance reports delivered through email threads that get buried.
              </p>
              <p
                className="font-body leading-relaxed"
                style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)' }}
              >
                For enterprise and professional services clients, the portal integrates uptime monitoring reports, accessibility compliance records, SEO health data, and deliverable audit trails — the documentation that legal, compliance, and operations teams actually need and that disconnected vendor relationships cannot produce.
              </p>
            </div>

            <div data-reveal data-reveal-delay="80">
              <p
                className="font-mono uppercase mb-5"
                style={{ fontSize: '0.58rem', letterSpacing: '0.18em', color: 'var(--color-hps-ink)', opacity: 0.55 }}
              >
                Connected systems
              </p>
              <div className="flex flex-col gap-3">
                {connectedSystems.map(sys => (
                  sys.external ? (
                    <a
                      key={sys.label}
                      href={sys.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-4 p-4 rounded-sm transition-all duration-200"
                      style={{
                        background: 'var(--color-hps-cream)',
                        border: '1px solid rgba(200,180,154,0.40)',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = sys.accent
                        e.currentTarget.style.boxShadow = '0 4px 16px rgba(12,20,32,0.07)'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = 'rgba(200,180,154,0.40)'
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                    >
                      <div className="w-1 shrink-0 self-stretch rounded-full mt-0.5" style={{ background: sys.accent }} aria-hidden="true" />
                      <div>
                        <p className="font-body font-medium group-hover:underline" style={{ fontSize: '0.875rem', color: 'var(--color-hps-ink)' }}>{sys.label}</p>
                        <p className="font-body" style={{ fontSize: '0.8125rem', color: 'var(--color-hps-smoke)' }}>{sys.rel}</p>
                      </div>
                      <span className="ml-auto self-center font-mono transition-transform duration-200 group-hover:translate-x-1" style={{ fontSize: '0.7rem', color: sys.accent }} aria-hidden="true">→</span>
                    </a>
                  ) : (
                    <Link
                      key={sys.label}
                      to={sys.href}
                      className="group flex items-start gap-4 p-4 rounded-sm transition-all duration-200"
                      style={{
                        background: 'var(--color-hps-cream)',
                        border: '1px solid rgba(200,180,154,0.40)',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = sys.accent
                        e.currentTarget.style.boxShadow = '0 4px 16px rgba(12,20,32,0.07)'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = 'rgba(200,180,154,0.40)'
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                    >
                      <div className="w-1 shrink-0 self-stretch rounded-full mt-0.5" style={{ background: sys.accent }} aria-hidden="true" />
                      <div>
                        <p className="font-body font-medium group-hover:underline" style={{ fontSize: '0.875rem', color: 'var(--color-hps-ink)' }}>{sys.label}</p>
                        <p className="font-body" style={{ fontSize: '0.8125rem', color: 'var(--color-hps-smoke)' }}>{sys.rel}</p>
                      </div>
                      <span className="ml-auto self-center font-mono transition-transform duration-200 group-hover:translate-x-1" style={{ fontSize: '0.7rem', color: sys.accent }} aria-hidden="true">→</span>
                    </Link>
                  )
                ))}
              </div>

              {/* Portal access CTA block */}
              <div
                className="mt-6 p-5 rounded-sm"
                style={{
                  background: 'var(--color-hps-cream)',
                  border: '1px solid rgba(12,20,32,0.12)',
                }}
              >
                <p
                  className="font-mono uppercase mb-3"
                  style={{ fontSize: '0.58rem', letterSpacing: '0.16em', color: 'var(--color-hps-ink)', opacity: 0.50 }}
                >
                  Portal access
                </p>
                <p
                  className="font-body text-sm leading-relaxed mb-4"
                  style={{ color: 'var(--color-hps-smoke)' }}
                >
                  Existing clients log in directly. New clients receive access credentials at the start of their engagement.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://happypathstudios.com/crm/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center font-body font-medium text-sm rounded-sm transition-all duration-200"
                    style={{
                      padding: '0.6rem 1.25rem',
                      background: 'var(--color-hps-ink)',
                      color: 'var(--color-hps-cream)',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-hps-green-dark)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-hps-ink)')}
                  >
                    Client Login
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center font-body font-medium text-sm rounded-sm transition-all duration-200"
                    style={{
                      padding: '0.6rem 1.25rem',
                      background: 'transparent',
                      color: 'var(--color-hps-ink)',
                      border: '1px solid rgba(12,20,32,0.22)',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'var(--color-hps-ink)'
                      e.currentTarget.style.background = 'rgba(12,20,32,0.04)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(12,20,32,0.22)'
                      e.currentTarget.style.background = 'transparent'
                    }}
                  >
                    Start an Engagement
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      </div>{/* end atmosphere wrapper */}

      <CTABand
        headline="Ready to start working together?"
        subhead="Every engagement begins with a free consultation. Your portal account is provisioned the day we kick off."
        buttonText="Free Consultation"
        buttonHref="/contact"
        showPhone
      />
    </>
  )
}
