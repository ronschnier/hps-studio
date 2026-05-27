import type { HostingExtended } from './types'

const data: HostingExtended[] = [

  {
    slug: 'best-restaurant-hosting',
    whatItSolves: [
      'Your restaurant website is on shared hosting that slows or goes down during dinner service when you cannot respond.',
      'Menu updates require a developer call because the site is not connected to your operational workflow.',
      'Your site loads slowly on mobile, which is how most of your guests find and evaluate you.',
      'Google shows wrong hours, outdated menus, or a competitor when guests search your name.',
    ],
    setupFlow: [
      { n: '01', step: 'Domain & Transfer', desc: 'Domain transfer or DNS configuration managed with zero-downtime migration from your existing host.' },
      { n: '02', step: 'WordPress Install', desc: 'Clean WordPress installation with restaurant-optimized theme and plugin stack configured.' },
      { n: '03', step: 'Content Migration', desc: 'Existing pages, menu content, and images migrated and reviewed for accuracy.' },
      { n: '04', step: 'QR Menu Integration', desc: 'HPS QR Menu connected and table QR codes configured for immediate deployment.' },
      { n: '05', step: 'Launch & Monitoring', desc: 'Site launched with uptime monitoring, automated backups, and support coverage configured.' },
    ],
  },

  {
    slug: 'best-food-truck-hosting',
    whatItSolves: [
      'Your location schedule is static on a website nobody visits — customers follow you on social because that is where you actually update.',
      'You have no way to notify customers when you are at a new location or running a limited special.',
      'Your online ordering redirects to a third-party platform that takes a significant commission on every sale.',
      'Your website looks outdated and does not reflect the brand you have built through social and word of mouth.',
    ],
    setupFlow: [
      { n: '01', step: 'Domain & Setup', desc: 'Domain configuration or transfer with mobile-first WordPress installation optimized for quick loads.' },
      { n: '02', step: 'Location System', desc: 'Schedule and location update system configured so you can update from your phone in seconds.' },
      { n: '03', step: 'Push Notification Setup', desc: 'HPS Push configured to send location and special notifications to subscribed customers.' },
      { n: '04', step: 'Digital Menu', desc: 'HPS QR Menu connected with your current menu and linked prominently from your site.' },
      { n: '05', step: 'Launch', desc: 'Site launched with a simple operational flow so you can run updates between service hours.' },
    ],
  },

  {
    slug: 'best-professional-hosting',
    whatItSolves: [
      'Your site is on the same shared plan as dozens of other businesses — performance degrades whenever traffic spikes.',
      'You have no staging environment, so every update to the live site carries real risk of breaking something.',
      'Backups are either not happening or untested — you do not actually know if they would restore correctly.',
      'SSL, security patching, and WordPress updates are manual tasks nobody is reliably performing.',
    ],
    setupFlow: [
      { n: '01', step: 'Migration Planning', desc: 'Existing site audited and migration plan created to minimize downtime and protect all content.' },
      { n: '02', step: 'Staging Deploy', desc: 'Site deployed to staging environment for review and performance testing before any live cutover.' },
      { n: '03', step: 'Optimization', desc: 'Performance audit and optimization — caching, image compression, plugin cleanup — applied on staging.' },
      { n: '04', step: 'Production Launch', desc: 'Cutover to production with DNS propagation managed and zero-downtime deployment.' },
      { n: '05', step: 'Monitoring Setup', desc: 'HPS Uptime monitoring, automated daily backups, and security scan schedule fully configured.' },
    ],
  },

  {
    slug: 'yoursiteplace',
    whatItSolves: [
      'You have been putting off having a website because it felt expensive, complicated, or too time-consuming.',
      'Your business exists only on social platforms that control your reach and can change their algorithm at any time.',
      'You need a simple, professional online presence you can own and update without depending on a developer.',
      'Hosting platforms marketed to beginners leave you with a generic-looking site that does not reflect your brand.',
    ],
    setupFlow: [
      { n: '01', step: 'Domain Selection', desc: 'Your domain registered or transferred with guidance on naming for SEO and brand clarity.' },
      { n: '02', step: 'Template & Branding', desc: 'WordPress template configured with your colors, logo, and fonts in a single working session.' },
      { n: '03', step: 'Core Pages', desc: 'Home, About, Services, and Contact pages built and populated with your content.' },
      { n: '04', step: 'Local SEO Basics', desc: 'Google Business connection, meta titles, and foundational local SEO configuration.' },
      { n: '05', step: 'Training & Launch', desc: '30-minute training session so you can manage your own content independently, then launch.' },
    ],
  },


  {
    slug: 'creator-hosting',
    whatItSolves: [
      'Portfolio sites hosted on shared plans load slowly for media-heavy pages — image carousels, video embeds, and audio players that represent the quality of the work end up degrading it',
      'Consumer website builders like Squarespace and Format lock creator content inside proprietary platforms that charge export fees, limit custom domains, and remove control over the hosting environment',
      'When a client visits a portfolio to evaluate a potential hire and the site is slow or down, the impression of the work is permanently damaged — availability is part of the brand',
      'Content updates — new credits, new work, new rates — require a developer call on most managed hosting plans because the CMS is not configured for independent editing',
    ],
    setupFlow: [
      { n: '01', step: 'Domain & Transfer', desc: 'Domain transfer or DNS configuration managed with zero-downtime cutover from your existing host or page builder.' },
      { n: '02', step: 'WordPress & Media Stack', desc: 'Clean WordPress installation with media-optimized theme, image delivery configuration, and audio/video embed setup for fast portfolio presentation.' },
      { n: '03', step: 'Portfolio Migration', desc: 'Existing portfolio content, project credits, and work samples migrated and organized into structured categories.' },
      { n: '04', step: 'BioLinks & Creator Hub', desc: 'HPS BioLinks configured and Creator Hub access provisioned; hosted site and creator tools operate from one account.' },
      { n: '05', step: 'Launch & Monitor', desc: 'Site launched with HPS Uptime monitoring active; daily backups confirmed; content editing walkthrough delivered so you can manage your portfolio independently.' },
    ],
  },
  {
    slug: 'ecommerce-hosting',
    whatItSolves: [
      'WooCommerce performance degrades under default shared hosting configurations — slow page loads and checkout latency directly increase abandoned cart rates that are never recovered',
      'Database growth on active stores is not automatically managed on standard hosting plans, causing query performance to degrade silently until checkout failures begin',
      'Store downtime during high-traffic periods — holiday sales, promotions, influencer traffic spikes — happens on shared infrastructure when no proactive capacity configuration exists',
      'Security scanning and malware remediation are reactive on most hosting plans — stores get flagged by Google Safe Browsing or card processors before anyone with hosting access knows there is a problem',
    ],
    setupFlow: [
      { n: '01', step: 'Performance Audit', desc: 'Existing WooCommerce installation audited for plugin conflicts, database bloat, and caching gaps; migration plan created to eliminate performance blockers before launch.' },
      { n: '02', step: 'Optimized Environment Deploy', desc: 'Server stack configured with WooCommerce-specific object caching, database optimization, and PHP performance tuning applied before any content migration.' },
      { n: '03', step: 'Store Migration', desc: 'Products, orders, customer records, and media migrated with full data verification; payment gateway and shipping configuration tested in staging before live cutover.' },
      { n: '04', step: 'Security & Compliance', desc: 'WAF, malware scanning, and SSL enforcement configured; checkout endpoint security reviewed against PCI compliance baseline requirements.' },
      { n: '05', step: 'Launch & Monitor', desc: 'Live cutover with HPS Uptime monitoring active on storefront and checkout endpoint; daily backups confirmed; post-launch 30-day check-in scheduled.' },
    ],
  },
]

export function getHostingExtended(slug: string): HostingExtended | undefined {
  return data.find(h => h.slug === slug)
}
