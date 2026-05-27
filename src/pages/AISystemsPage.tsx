import { Link } from 'react-router-dom'
import PageHeader from '../components/sections/PageHeader'
import CTABand from '../components/sections/CTABand'
import BackgroundAtmosphere from '../components/decorative/BackgroundAtmosphere'
import { usePageMeta } from '../hooks/usePageMeta'

const areas = [
  {
    name: 'Workflow Automation',
    desc: 'Repeatable business processes — order handling, content routing, follow-up sequences, data enrichment, and operational triggers — automated with n8n orchestration so your team executes the exception, not the routine.',
    tag: 'Operations',
    accent: 'var(--color-hps-teal-dark)',
  },
  {
    name: 'Content Systems',
    desc: 'Claude-powered content production pipelines for social media, SEO copy, product descriptions, and marketing assets — aligned to your brand voice and structured so outputs are consistent without constant prompting.',
    tag: 'Content',
    accent: 'var(--color-hps-gold-rich)',
  },
  {
    name: 'Operational Intelligence',
    desc: 'Data pipelines and reporting dashboards that pull from your existing tools and surface actionable insights — without requiring a data science team. Know what\'s happening in your operation without manual aggregation.',
    tag: 'Analytics',
    accent: 'var(--color-hps-green)',
  },
  {
    name: 'Custom Integrations',
    desc: 'Connecting your existing platforms, tools, and data sources into a unified operational system. CRM, CMS, booking systems, and communication tools working as one coordinated layer.',
    tag: 'Integration',
    accent: 'var(--color-hps-coral-warm)',
  },
]

const techStack = [
  {
    name: 'Claude',
    by: 'Anthropic',
    desc: 'Claude handles language tasks — content generation, summarization, research synthesis, brand voice alignment, and conversational workflow routing. Every Claude integration is configured with system prompts aligned to your specific procedures and vocabulary.',
    accent: 'var(--color-hps-teal-dark)',
  },
  {
    name: 'Olares',
    by: 'Local AI Infrastructure',
    desc: 'Privacy-sensitive operations run on local Olares infrastructure. Your data stays in your environment — not routed through third-party cloud services. Critical for healthcare, legal, and enterprise contexts where data sovereignty matters.',
    accent: 'var(--color-hps-green)',
  },
  {
    name: 'n8n',
    by: 'Automation Orchestration',
    desc: 'Open-source workflow automation that connects AI decision nodes to your CRM, CMS, and communication tools. No recurring per-task API fees. Workflows are documented, version-controlled, and extensible by your team.',
    accent: 'var(--color-hps-gold-rich)',
  },
  {
    name: 'Manus',
    by: 'Operational Agents',
    desc: 'AI agents configured for specific repeatable tasks — content review, data enrichment, workflow routing, and research synthesis. Agents run on a defined schedule or trigger on incoming data, not on manual intervention.',
    accent: 'var(--color-hps-coral-warm)',
  },
]

const implementationSteps = [
  {
    n: '01',
    label: 'Workflow Audit',
    desc: 'Map the repeatable tasks your team handles every week. Identify the highest-value automation targets — not everything, just the bottlenecks that produce the most friction or consume the most skilled time.',
  },
  {
    n: '02',
    label: 'System Configuration',
    desc: 'Build the AI configuration — Claude system prompts, n8n workflow logic, Manus agent specifications, or Olares local deployment — tailored to your actual process, not a template.',
  },
  {
    n: '03',
    label: 'Knowledge Base Integration',
    desc: 'Feed the system your product documentation, brand voice guide, pricing rules, and operational procedures. AI outputs become accurate and on-brand without manual correction at every use.',
  },
  {
    n: '04',
    label: 'Testing & Calibration',
    desc: 'Run the system against real scenarios before it touches live operations. Calibrate outputs, adjust routing logic, and verify edge cases with your team before deployment.',
  },
  {
    n: '05',
    label: 'Deployment & Documentation',
    desc: 'Live deployment with full system documentation — configuration files, prompt libraries, maintenance guides, and team training. Your team can extend and adjust the system without coming back to us.',
  },
]

export default function AISystemsPage() {
  usePageMeta({
    title: 'AI Systems & Automation',
    description: 'Claude and n8n-based workflow automation for content, data enrichment, compliance monitoring, and operational intelligence — configured for real business operations.',
  })
  return (
    <>
      <div style={{ position: 'relative', isolation: 'isolate' }}>
      <BackgroundAtmosphere mood="citrus" intensity="whisper" density="sparse" />
      <PageHeader
        eyebrow="Workflow Automation & Intelligence"
        title="AI Systems"
        description="Claude and n8n-based workflow automation, content systems, and operational data enrichment. Built for real business operations, not AI experiments."
        accentColor="var(--color-hps-teal-dark)"
      />

      {/* ── What We Build ──────────────────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-10">
            <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-teal-dark)' }}>
              Operational scope
            </p>
            <h2 className="font-display mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
              Four operational layers. One connected system.
            </h2>
            <p className="font-body max-w-xl leading-relaxed" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}>
              We don't sell AI software. We build AI-assisted systems tailored to how your business actually operates. Every engagement starts with understanding your workflow — then we build the minimum system that produces the maximum result.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {areas.map((area, i) => (
              <div
                key={area.name}
                data-reveal
                data-reveal-delay={String((i % 2) * 80)}
                className="p-8 rounded-sm"
                style={{ background: 'var(--color-hps-parchment)', border: '1px solid rgba(200,180,154,0.40)', borderTop: `3px solid ${area.accent}` }}
              >
                <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.18em', color: area.accent }}>
                  {area.tag}
                </p>
                <h3 className="font-display text-hps-ink mb-3" style={{ fontSize: '1.375rem', lineHeight: 1.2 }}>
                  {area.name}
                </h3>
                <p className="font-body text-sm text-hps-smoke leading-relaxed">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technology Stack ───────────────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-parchment)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-12">
            <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-teal-dark)' }}>
              Technology stack
            </p>
            <h2 className="font-display mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
              The tools we use. Why we use them.
            </h2>
            <p className="font-body max-w-xl leading-relaxed" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}>
              Every tool in the stack was chosen for operational reliability and client extensibility — not because it appeared in a product launch announcement. The goal is systems your team can maintain, extend, and understand.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {techStack.map((tool, i) => (
              <div
                key={tool.name}
                data-reveal
                data-reveal-delay={String((i % 2) * 80)}
                className="p-7 rounded-sm"
                style={{ background: 'var(--color-hps-cream)', border: '1px solid rgba(200,180,154,0.40)', borderLeft: `3px solid ${tool.accent}` }}
              >
                <div className="flex items-baseline gap-3 mb-4">
                  <h3 className="font-display" style={{ fontSize: '1.25rem', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
                    {tool.name}
                  </h3>
                  <span className="font-mono uppercase" style={{ fontSize: '0.52rem', letterSpacing: '0.14em', color: tool.accent, opacity: 0.80 }}>
                    {tool.by}
                  </span>
                </div>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-hps-smoke)' }}>
                  {tool.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Implementation Arc ─────────────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div data-reveal>
              <p className="font-mono uppercase mb-4" style={{ fontSize: '0.6rem', letterSpacing: '0.22em', color: 'var(--color-hps-teal-dark)' }}>
                Implementation process
              </p>
              <h2 className="font-display mb-5" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.08 }}>
                From workflow audit to running system.
              </h2>
              <p className="font-body leading-relaxed mb-5" style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)' }}>
                Most AI implementations stall because they start with the tool rather than the workflow. We audit what your team does every week before we touch a single configuration — because the right automation solves a real problem, not a theoretical one.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)', opacity: 0.9 }}>
                Every system we deliver includes full documentation — prompt libraries, workflow schematics, configuration files, and team training materials. Your team can extend the system without coming back to us every time something needs to change.
              </p>
            </div>
            <div data-reveal data-reveal-delay="80">
              <div className="flex flex-col gap-0">
                {implementationSteps.map((step, i, arr) => (
                  <div
                    key={step.n}
                    className="flex gap-5 py-5"
                    style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(200,180,154,0.40)' : 'none' }}
                  >
                    <span className="font-mono shrink-0 mt-0.5" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-teal-dark)', opacity: 0.75, minWidth: '1.75rem' }}>
                      {step.n}
                    </span>
                    <div>
                      <p className="font-body font-medium mb-1" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-ink)' }}>{step.label}</p>
                      <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-hps-smoke)' }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Operational vs. Experimental ──────────────────────────── */}
      <section className="py-16 lg:py-20 border-t" style={{ background: 'var(--color-hps-parchment)', borderColor: 'rgba(200,180,154,0.40)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div data-reveal>
              <p className="font-mono uppercase mb-4" style={{ fontSize: '0.6rem', letterSpacing: '0.22em', color: 'var(--color-hps-teal-dark)' }}>
                What we build
              </p>
              <h2 className="font-display mb-5" style={{ fontSize: 'clamp(1.375rem, 2.5vw, 1.875rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
                Operational AI. Not AI experiments.
              </h2>
              <p className="font-body leading-relaxed mb-4" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}>
                The AI landscape is full of demos that look impressive and deployments that nothing depends on. HPS builds the other kind — systems that your team uses every single day, that produce measurable time savings on tasks that were previously done manually, and that keep working after the engagement ends.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)', opacity: 0.9 }}>
                The benchmark isn't "did we add AI?" — it's "how many hours per week does this save, and does it get more useful over time?" If the answer is no, we don't deploy it.
              </p>
            </div>
            <div data-reveal data-reveal-delay="80" className="flex flex-col gap-4">
              {[
                { label: 'Content team using Claude to draft', note: 'First-draft social, SEO, and product copy aligned to brand voice — reviewed in minutes, not hours' },
                { label: 'n8n routing incoming leads', note: 'Form submissions categorized, tagged, and assigned to the right team member without manual review' },
                { label: 'Manus running daily data digest', note: 'Morning operational summary delivered to your team from 4 different tools — without logging into each one' },
                { label: 'Local Olares for client document review', note: 'Healthcare and legal documents processed on-premises — no data leaving the perimeter' },
              ].map(item => (
                <div
                  key={item.label}
                  className="flex gap-3 p-4 rounded-sm"
                  style={{ background: 'var(--color-hps-cream)', border: '1px solid rgba(200,180,154,0.40)' }}
                >
                  <div className="w-1 shrink-0 self-stretch rounded-full" style={{ background: 'var(--color-hps-teal-dark)' }} aria-hidden="true" />
                  <div>
                    <p className="font-body font-medium mb-0.5" style={{ fontSize: '0.875rem', color: 'var(--color-hps-ink)' }}>{item.label}</p>
                    <p className="font-mono" style={{ fontSize: '0.58rem', letterSpacing: '0.08em', color: 'var(--color-hps-smoke)', lineHeight: 1.5 }}>{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Ecosystem Integration ──────────────────────────────────── */}
      <section className="py-16 lg:py-20" style={{ background: 'var(--color-hps-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-10">
            <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-teal-dark)' }}>
              Ecosystem integration
            </p>
            <h2 className="font-display mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
              AI inside the full HPS operational stack.
            </h2>
            <p className="font-body max-w-2xl leading-relaxed" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}>
              AI systems don't exist in isolation — they work best when they're connected to the infrastructure your operation already depends on.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: 'HPS AI Systems Platform', href: '/platforms/hps-ai-systems', note: 'Dedicated platform with Claude workflows, Olares local AI, and n8n orchestration', accent: 'var(--color-hps-teal-dark)' },
              { label: 'HPS Client Portal', href: '/platforms/hps-client-portal', note: 'Workflow systems connected to project delivery, approval routing, and communications', accent: 'var(--color-hps-green)' },
              { label: 'HPS Media Studio', href: '/platforms/hps-media-studio', note: 'AI-assisted content production integrated into production calendars and asset workflows', accent: 'var(--color-hps-gold-rich)' },
              { label: 'Web Development', href: '/services/web-development', note: 'Custom applications with AI embedded at the architecture level — not bolted on afterward', accent: 'var(--color-hps-coral-warm)' },
              { label: 'Digital Strategy', href: '/services/digital-strategy', note: 'AI systems as part of a coordinated operational plan — not a standalone deployment', accent: 'var(--color-hps-teal)' },
              { label: 'Enterprise Pathway', href: '/ecosystem/enterprise', note: 'Full AI + operations ecosystem for larger organizations', accent: 'var(--color-hps-ink)' },
            ].map((link, i) => (
              <Link
                key={link.href}
                to={link.href}
                data-reveal
                data-reveal-delay={String((i % 3) * 60)}
                className="flex items-start gap-3 p-5 rounded-sm"
                style={{ background: 'var(--color-hps-parchment)', border: '1px solid rgba(200,180,154,0.40)', borderLeft: `3px solid ${link.accent}`, textDecoration: 'none', transition: 'box-shadow 0.2s ease, transform 0.2s ease' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 4px 14px rgba(12,20,32,0.08)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div>
                  <p className="font-body font-medium mb-0.5" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-ink)' }}>{link.label}</p>
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-hps-smoke)' }}>{link.note}</p>
                </div>
                <span className="ml-auto shrink-0 self-center font-mono" style={{ fontSize: '0.65rem', color: link.accent }} aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      </div>{/* end atmosphere wrapper */}

      <CTABand
        headline="Thinking about AI for your business?"
        subhead="Let's talk about what you're actually trying to do. We'll find the right fit — not the most impressive demo."
        buttonText="Start the Conversation"
        showPhone
      />
    </>
  )
}
