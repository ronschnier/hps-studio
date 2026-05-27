// ── HPS Ecosystem Stacks ──────────────────────────────────────────────────────
// Future bundle readiness architecture.
// Each stack groups platforms by operational function for future package activation.
// DO NOT use this for aggressive marketing yet — structure is quietly prepared here.

export interface EcosystemStack {
  id: string
  name: string
  tagline: string
  eyebrow: string
  accentColor: string
  desc: string
  platforms: string[]          // platform slugs
  services: string[]           // service slugs (optional, for context)
  onboardingPath: string        // where to send prospects
  operationalNote: string       // what makes this stack compound
}

export const stacks: EcosystemStack[] = [
  {
    id: 'growth',
    name: 'Growth Stack',
    tagline: 'Visibility, audience, and re-engagement infrastructure.',
    eyebrow: 'Marketing & Growth',
    accentColor: 'var(--color-hps-teal-dark)',
    desc: 'The four platforms that build and maintain audience momentum: scheduled social presence, a direct push notification channel, review aggregation for conversion, and a branded bio link hub that owns the first click from every social profile.',
    platforms: ['hps-socialize', 'hps-push', 'hps-socialproof', 'hps-biolinks'],
    services: ['digital-strategy', 'social-media-management', 'content-strategy'],
    onboardingPath: '/contact',
    operationalNote: 'Each platform in the Growth Stack feeds data to the others. Push analytics inform scheduling cadence. Review widgets increase on-site time for organic signals. BioLinks click data shows which channels convert — so the whole stack gets sharper with use.',
  },
  {
    id: 'analytics',
    name: 'Analytics Stack',
    tagline: 'Behavioral data, search health, and availability monitoring.',
    eyebrow: 'Measurement & Observability',
    accentColor: 'var(--color-hps-gold-rich)',
    desc: 'Three measurement platforms that tell you what is actually happening — behavioral engagement on your pages, the technical signals that affect search visibility, and availability monitoring that alerts before customers notice.',
    platforms: ['hps-engagetracker', 'hps-seo-audit', 'hps-uptime'],
    services: ['digital-strategy', 'web-development'],
    onboardingPath: '/contact',
    operationalNote: 'Measurement compounds when it runs continuously. Six months of engagement data shows content patterns. Uptime history builds the reliability record enterprise clients require. SEO audit data tracks regressions introduced by each code deploy.',
  },
  {
    id: 'creator',
    name: 'Creator Stack',
    tagline: 'Production, distribution, and audience infrastructure for independent creators.',
    eyebrow: 'Creator & Media',
    accentColor: 'var(--color-hps-gold)',
    desc: 'The full creator operations layer: licensed audio for video production, a workflow hub for managing the production calendar, large file delivery for client assets, and branded link management at the center of every social profile.',
    platforms: ['freebeats-music', 'hps-creator-hub', 'hps-media-studio', 'hps-transfer'],
    services: ['photography-videography', 'content-strategy', 'brand-identity'],
    onboardingPath: '/media',
    operationalNote: 'Creator infrastructure becomes more efficient as the asset library grows and the production calendar establishes its rhythm. After six months, the system runs mostly on its own — the creator spends time creating, not managing tools.',
  },
  {
    id: 'hospitality',
    name: 'Hospitality Stack',
    tagline: 'Live menus, persistent QR infrastructure, and guest re-engagement.',
    eyebrow: 'Hospitality & QR Systems',
    accentColor: 'var(--color-hps-gold-rich)',
    desc: 'The physical-to-digital layer for restaurants, bars, hotels, and food service operators: live digital menus accessible by QR, persistent QR infrastructure for every guest-facing surface, and re-engagement via web push to bring guests back.',
    platforms: ['hps-qr-menu', 'hps-qr-code', 'hps-push', 'hps-socialproof'],
    services: ['fabrication-signage', 'brand-identity', 'web-development'],
    onboardingPath: '/hospitality',
    operationalNote: 'Menu updates happen in real time — no reprint cycles, no stale information at the table. QR scan analytics show which surfaces generate the most engagement. The push channel converts first-time guests into returning regulars without paid advertising.',
  },
  {
    id: 'compliance',
    name: 'Compliance & Accessibility Stack',
    tagline: 'Audit, remediation, monitoring, and documentation infrastructure.',
    eyebrow: 'Accessibility & Compliance',
    accentColor: 'var(--color-hps-teal-dark)',
    desc: 'The full accessibility compliance pipeline for organizations with WCAG 2.1, Section 508, and ADA Title III obligations — audit findings tracked through the client portal, remediation managed against deployment cycles, and monitoring that prevents regression.',
    platforms: ['hps-accessibility', 'hps-seo-audit', 'hps-uptime', 'hps-client-portal'],
    services: ['web-development', 'digital-strategy'],
    onboardingPath: '/accessibility',
    operationalNote: 'Compliance is continuous, not a point-in-time event. Monitoring catches regressions before they become liability. The client portal archives every audit report, VPAT, and remediation record — so the next legal review has a complete dated evidence trail without a scramble.',
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure Stack',
    tagline: 'Client operations, file delivery, and platform utilities under one login.',
    eyebrow: 'Client Infrastructure',
    accentColor: 'var(--color-hps-ink)',
    desc: 'The operational backbone connecting HPS to its clients: project tracking and deliverable access through the portal, branded large file delivery, and a growing utility layer covering link management, QR generation, and operational tools.',
    platforms: ['hps-client-portal', 'hps-transfer', 'hps-toolkit', 'hps-web-tools', 'hps-uptime'],
    services: ['web-development', 'digital-strategy'],
    onboardingPath: '/client-portal',
    operationalNote: 'The infrastructure stack becomes invisible in the best way — after six months, the portal is just how the relationship works. Deliverables are there when needed. Invoices arrive where they are expected. Support is documented. Nothing falls through the cracks.',
  },
  {
    id: 'ai',
    name: 'AI & Automation Stack',
    tagline: 'Workflow intelligence for operational teams.',
    eyebrow: 'AI & Automation',
    accentColor: 'var(--color-hps-teal)',
    desc: 'Claude, n8n, Olares, and Manus configured into running operational workflows — content automation, compliance monitoring triggers, reporting pipelines, and data enrichment that handles the repeatable work without a dedicated coordinator.',
    platforms: ['hps-ai-systems', 'hps-engagetracker', 'hps-client-portal'],
    services: ['ai-integration', 'digital-strategy', 'app-development'],
    onboardingPath: '/ai-systems',
    operationalNote: 'AI systems improve as your team uses them. The first workflow saves three hours a week. By month four, it is the foundation for five related automations. Every extension is cheaper than the one before it because the infrastructure is already in place.',
  },
  {
    id: 'golf',
    name: 'Golf Operations Stack',
    tagline: 'Course management, sponsor activation, and guest engagement infrastructure.',
    eyebrow: 'Golf & Recreation',
    accentColor: 'var(--color-hps-green)',
    desc: 'The complete digital operations layer for modern golf courses: tee sheet and course management, sponsor QR plaque infrastructure, guest engagement through push and live display systems, and in-house fabrication for every physical surface.',
    platforms: ['hps-golf', 'hps-qr-code', 'hps-push', 'hps-socialproof'],
    services: ['fabrication-signage', 'sponsor-signage', 'golf-plaques'],
    onboardingPath: '/golf',
    operationalNote: 'The golf stack runs annually. Pre-season: sponsor plaques fabricated and deployed with live QR codes. In-season: scan analytics visible to sponsor teams, live display and push active. End of season: sponsor performance report generated from scan data. Renewal: data backs the next season\'s rate card.',
  },
]

export function getStack(id: string): EcosystemStack | undefined {
  return stacks.find(s => s.id === id)
}

export function getStacksForPlatform(platformSlug: string): EcosystemStack[] {
  return stacks.filter(s => s.platforms.includes(platformSlug))
}
