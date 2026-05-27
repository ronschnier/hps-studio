export interface EcosystemLink {
  label: string
  href: string
  rel: string
}

export interface Feature {
  name: string
  desc: string
}

export interface Platform {
  continuityNote?: string
  liveUrl?: string
  liveLabel?: string
  stackGroup?: string
  slug: string
  name: string
  tagline: string
  eyebrow: string
  positioning: string
  whoItIsFor: string
  whatItDoes: string
  features: Feature[]
  ecosystemLinks: EcosystemLink[]
  relatedPlatforms: string[]
  relatedServices: string[]
  accentColor: string
}

export interface Service {
  slug: string
  name: string
  category: 'digital' | 'brand-media' | 'fabrication' | 'connected'
  tagline: string
  eyebrow: string
  positioning: string
  whoItIsFor: string
  whatItDoes: string
  features: Feature[]
  ecosystemLinks: EcosystemLink[]
  relatedServices: string[]
  relatedPlatforms: string[]
  accentColor: string
}

export interface HostingProduct {
  slug: string
  liveUrl?: string
  liveLabel?: string
  name: string
  tagline: string
  eyebrow: string
  positioning: string
  whoItIsFor: string
  whatItDoes: string
  features: Feature[]
  ecosystemLinks: EcosystemLink[]
  relatedServices: string[]
  accentColor: string
}

export interface ServiceExtended {
  slug: string
  whatItSolves: string[]
  deliveryFlow: Array<{ n: string; step: string; desc: string }>
}

export interface HostingExtended {
  slug: string
  whatItSolves: string[]
  setupFlow: Array<{ n: string; step: string; desc: string }>
}

export interface PlatformExtended {
  slug: string
  whatItSolves: string[]
  operationalFlow: Array<{ n: string; step: string; desc: string }>
}

export interface IndustryWorkflowStep {
  n: string
  step: string
  desc: string
}

export interface Industry {
  slug: string
  name: string
  eyebrow: string
  tagline: string
  description: string
  accentColor: string
  painPoints: string[]
  solutionStatement: string
  stack: string[]
  workflowSteps: IndustryWorkflowStep[]
  relatedServices: string[]
  ecosystemBridge: string
  launchCTAs: Array<{ label: string; href: string; desc: string; external?: boolean }>
}
