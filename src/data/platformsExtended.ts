import type { PlatformExtended } from './types'

const data: PlatformExtended[] = [
  {
    slug: 'hps-golf',
    whatItSolves: [
      'Tee sheet, F&B, pro shop, and on-course operations run on disconnected systems with no unified view or reconciliation',
      'Sponsor signage is static print — expensive to produce, impossible to update between activations, and impossible to measure',
      'Guest communication relies on email blasts that most golfers ignore; no real-time channel for round-day promotions',
      'Clubhouse TV displays and leaderboards require IT infrastructure most course operators cannot staff or maintain',
    ],
    operationalFlow: [
      { n: '01', step: 'Connect Tee Sheet', desc: 'Sync your existing tee sheet system or configure the built-in HPS Golf scheduler; all reservations flow into the central operations dashboard in real time.' },
      { n: '02', step: 'Deploy QR Network', desc: 'Assign persistent QR codes to carts, tables, scorecard holders, and sponsor signage; each code routes to live digital content updated from one dashboard without reprinting.' },
      { n: '03', step: 'Configure Sponsor Campaigns', desc: 'Set up rotating sponsor campaigns with geo-triggered, time-based, or event-based display rules; sponsors measure actual engagement, not estimated impressions.' },
      { n: '04', step: 'Activate Displays', desc: 'Clubhouse TVs, tee sheet boards, leaderboards, and pace-of-play screens pull live data and render automatically — no dedicated AV team or local server required.' },
      { n: '05', step: 'Review Operations Dashboard', desc: 'Round throughput, F&B spend per golfer, cart utilization, QR engagement, and sponsor campaign performance all visible in one place; export for accounting or board reporting.' },
    ],
  },
  {
    slug: 'hps-accessibility',
    whatItSolves: [
      'WCAG 2.1 AA non-compliance creates ADA Title III litigation exposure; automated tools alone miss 60–70% of real barriers',
      'Screen reader failures, keyboard trap issues, and focus management problems only surface through manual testing with NVDA, JAWS, and VoiceOver',
      'Remediation happens in isolation without a prioritized roadmap, causing the same categories of failures to recur after each release',
      'Legal and procurement teams require signed compliance documentation — VPATs, audit reports, and remediation records — that most development workflows never produce',
    ],
    operationalFlow: [
      { n: '01', step: 'Automated Scan', desc: 'Full WCAG 2.1 AA/AAA and Section 508 automated crawl across all pages; generates machine-readable issue manifest with severity classifications and code-level references.' },
      { n: '02', step: 'Manual Testing', desc: 'Certified reviewers test with screen readers (NVDA, JAWS, VoiceOver), keyboard-only navigation, and high-contrast modes; captures what automation cannot detect.' },
      { n: '03', step: 'Issue Triage & Roadmap', desc: 'Every finding prioritized by legal exposure severity, user impact, and estimated fix effort; assigned with owner and deadline for team-level accountability tracking.' },
      { n: '04', step: 'Remediation & Verification', desc: 'Code fixes implemented and re-tested against the original failure; components flagged for design system integration to prevent the same class of issue from recurring.' },
      { n: '05', step: 'Certification & Monitoring', desc: 'Signed VPAT or audit report delivered for procurement and legal review; ongoing monitoring configured to catch regressions introduced by new releases before they reach production.' },
    ],
  },
  {
    slug: 'hps-socialize',
    whatItSolves: [
      'Managing posting schedules across Instagram, Facebook, LinkedIn, and X simultaneously consumes hours per week with no clear return visibility',
      'Inconsistent posting cadence triggers algorithm penalties and causes audience engagement to decay between active periods',
      'Content creation bottlenecks leave channels dark for days at a time; no system for repurposing existing assets across formats',
      'No unified analytics means budget and effort continue flowing to low-performing channels by default',
    ],
    operationalFlow: [
      { n: '01', step: 'Connect Accounts', desc: 'Link Instagram, Facebook, LinkedIn, X, and Google Business Profile through OAuth; all accounts visible and manageable from a single interface with per-platform permission controls.' },
      { n: '02', step: 'Build Content Calendar', desc: 'Schedule individual posts or recurring content series across all platforms; upload once and configure format variations per channel from the same source asset.' },
      { n: '03', step: 'Set Automation Rules', desc: 'Configure recurring post schedules, RSS-to-post bridges for content syndication, and engagement triggers; posts publish without manual intervention on defined cadences.' },
      { n: '04', step: 'Monitor Unified Dashboard', desc: 'Reach, engagement rate, follower growth, and link clicks tracked across all connected accounts in a single timeline view; no platform-switching required.' },
      { n: '05', step: 'Optimize by Performance', desc: 'Weekly performance digests surface highest-performing post formats and optimal publishing windows by platform; apply scheduling changes globally in a single update.' },
    ],
  },
  {
    slug: 'hps-biolinks',
    whatItSolves: [
      'Social platforms allow one link in bio — forcing brands and creators to choose between their shop, website, booking page, and content destinations',
      'Off-platform bio link tools impose their own branding, limit analytics, and don\'t support custom domains on free tiers',
      'Changing a destination URL requires updating every platform profile manually; there is no single source of truth for link management',
      'No analytics on which linked destinations actually drive clicks means content and promotion effort is allocated blindly',
    ],
    operationalFlow: [
      { n: '01', step: 'Build Your Page', desc: 'Choose from branded templates aligned to HPS design standards; add links, section headers, social icons, images, and call-to-action blocks through the visual editor.' },
      { n: '02', step: 'Map Destinations', desc: 'Assign each link a destination URL, phone action, or embedded embed block; add labels, categories, and tracking parameters for analytics segmentation.' },
      { n: '03', step: 'Publish to Your Domain', desc: 'Page goes live at a custom subdomain or fully mapped custom domain; update destinations at any time without touching the published URL or reprinting any QR codes.' },
      { n: '04', step: 'Track Every Click', desc: 'Each link tracked by click volume, device type, geographic region, and referral source; aggregate and per-link views updated in real time on the analytics dashboard.' },
      { n: '05', step: 'Connect to QR Network', desc: 'Generate a persistent QR code that routes to the bio page; combine with HPS QR Code for redirect management if the destination page ever needs to move.' },
    ],
  },
  {
    slug: 'hps-push',
    whatItSolves: [
      'Email open rates have declined to single digits for most lists; time-sensitive promotions and announcements go unread',
      'Social media reach is algorithmically throttled — businesses can no longer reliably reach their own followers without paid amplification',
      'SMS campaigns require carrier compliance overhead and cost scale linearly with list size, making them impractical at smaller volumes',
      'No channel exists to re-engage past visitors who left without subscribing or providing contact information',
    ],
    operationalFlow: [
      { n: '01', step: 'Install Beacon', desc: 'Single JavaScript snippet added to your site; visitors see a browser-native opt-in prompt after a configurable delay or interaction trigger. No email address required.' },
      { n: '02', step: 'Segment Subscribers', desc: 'Subscribers automatically segmented by page visited at opt-in, geographic region, device type, and engagement history; custom manual segments also available.' },
      { n: '03', step: 'Create Campaign', desc: 'Compose messages with title, body, icon image, and destination URL; schedule for future delivery or trigger based on behavioral events and segment conditions.' },
      { n: '04', step: 'Send & Deliver', desc: 'Notifications delivered directly to subscriber browser or PWA; delivery receipts logged in real time with per-device status visibility.' },
      { n: '05', step: 'Analyze & Retarget', desc: 'Open rate, click-through rate, and conversion path tracked per campaign; build re-engagement sequences from active subscriber segments and suppress churned users automatically.' },
    ],
  },
  {
    slug: 'hps-socialproof',
    whatItSolves: [
      'Visitors who leave without acting rarely return; visible trust signals — reviews, testimonials, ratings — measurably reduce bounce on consideration pages',
      'Embedding Google or Yelp review widgets natively creates compliance risk and can display competitor ads adjacent to your content',
      'Static testimonial blocks go stale and are universally ignored; dynamic content pulled from live review sources carries credibility weight that curated copy doesn\'t',
      'Businesses with strong offline reputations lack any mechanism to surface that credibility on their website in a structured, maintained way',
    ],
    operationalFlow: [
      { n: '01', step: 'Connect Review Sources', desc: 'Link Google Business Profile, Yelp, Facebook, TripAdvisor, or Trustpilot; upload manual testimonials with attribution details for sources not available via API.' },
      { n: '02', step: 'Configure Display Rules', desc: 'Set which reviews appear on which pages; filter by minimum star rating, keyword match, recency window, or reviewer type; suppress specific reviews without deleting them from source.' },
      { n: '03', step: 'Design Widget', desc: 'Select from inline block, floating ticker, modal popup, or embedded grid layouts; style to match brand colors and typography with no custom CSS required.' },
      { n: '04', step: 'Install Embed', desc: 'Single JavaScript snippet or React component added to any page; loads asynchronously with zero blocking impact on page speed scores.' },
      { n: '05', step: 'Monitor & Alert', desc: 'New reviews pulled automatically on configurable intervals; negative review alert triggers an immediate notification so response time stays under business hours.' },
    ],
  },
  {
    slug: 'hps-engagetracker',
    whatItSolves: [
      'Standard analytics platforms track pageviews but miss the on-page engagement signals — scroll depth, click distribution, time-in-section — that actually predict conversion',
      'Enterprise heatmap and session recording tools cost hundreds per month at modest traffic volumes, pricing out small and mid-size operations',
      'No visibility into which content blocks hold attention versus which are scrolled past makes content investment decisions arbitrary',
      'A/B testing requires developer involvement for every experiment variant, creating a backlog bottleneck that slows optimization velocity',
    ],
    operationalFlow: [
      { n: '01', step: 'Install Tracker', desc: 'Single snippet added to your site; begins recording scroll depth, click coordinates, session duration, and rage-click events immediately without configuration.' },
      { n: '02', step: 'Define Conversion Goals', desc: 'Set goal events by destination URL match, element click, form submission, or custom JavaScript trigger; goals tracked retroactively against all recorded sessions.' },
      { n: '03', step: 'View Heatmaps', desc: 'Aggregate click and scroll heatmaps generated from real visitor sessions; updated continuously as traffic flows with segment filtering by device, source, and date range.' },
      { n: '04', step: 'Run A/B Tests', desc: 'Create page variants in the dashboard without touching code; traffic split automatically on defined percentage; statistical significance reported when confidence thresholds are met.' },
      { n: '05', step: 'Export & Act', desc: 'Performance summaries exportable to PDF or CSV on demand; session recordings reviewable for qualitative insight alongside quantitative aggregate data.' },
    ],
  },
  {
    slug: 'hps-seo-audit',
    whatItSolves: [
      'SEO issues accumulate silently — broken links, missing schema, redirect chains, slow Core Web Vitals — causing ranking losses before anyone notices the traffic decline',
      'One-time audits go stale within weeks as new content is published, pages are restructured, and infrastructure changes alter crawl behavior',
      'Dev teams fix what their tools surface without addressing interconnected failures — canonical conflicts, crawl budget waste — that compound the original issue',
      'No prioritization framework means lowest-impact issues get fixed first while critical ranking factors remain unresolved for months',
    ],
    operationalFlow: [
      { n: '01', step: 'Crawl & Map', desc: 'Full site crawl on demand or on configurable schedule; maps URL structure, internal link graph, HTTP response codes, redirect chains, and JavaScript rendering behavior.' },
      { n: '02', step: 'Analyze Signals', desc: 'Crawl data cross-referenced against Core Web Vitals, structured data schema validity, meta tag completeness, canonical integrity, and mobile usability scores.' },
      { n: '03', step: 'Score & Prioritize', desc: 'Every finding scored by estimated ranking impact and remediation complexity; generates a prioritized action queue so the highest-leverage fixes happen first.' },
      { n: '04', step: 'Track Remediation', desc: 'Mark issues resolved in dashboard; re-crawls trigger automatically on affected pages to verify fixes and update health scores in real time.' },
      { n: '05', step: 'Monitor Continuously', desc: 'Scheduled crawls detect regressions introduced by new deployments; weekly digest surfaces emerging issues before they compound into ranking penalties.' },
    ],
  },
  {
    slug: 'hps-uptime',
    whatItSolves: [
      'Downtime lasts longer than it should because no one knows it happened until a customer complains — internal teams are always the last to find out',
      'Hosting provider status pages reflect infrastructure health, not actual end-user experience from your geographic market or on your specific URL paths',
      'No historical uptime record makes it impossible to evaluate hosting SLA compliance or produce documentation for contract reviews or incident post-mortems',
      'Performance degradation — slow TTFB, failed asset loads — often precedes full outages but goes undetected by any monitoring in place',
    ],
    operationalFlow: [
      { n: '01', step: 'Add Monitors', desc: 'Enter one or more URLs; configure check interval (1–60 minutes), geographic check locations, and failure threshold before alerting — HTTP, keyword match, and SSL expiration all supported.' },
      { n: '02', step: 'Configure Alerts', desc: 'Set notification channels: email, SMS, Slack webhook, or HPS Push integration; configure severity tiers so non-critical degradation and full downtime route to different recipients.' },
      { n: '03', step: 'View Status Dashboard', desc: 'Real-time board shows current uptime state, response time graph, and rolling incident history per monitor; public status page available for customer-facing communication.' },
      { n: '04', step: 'Receive & Resolve', desc: 'Instant notification on first failed check; automated recovery detection sends all-clear when site responds normally; full incident duration and downtime window recorded.' },
      { n: '05', step: 'Review Reports', desc: 'Monthly uptime percentage, mean time to recovery, and incident log generated on demand; exportable for SLA review, hosting contract evaluation, or board reporting.' },
    ],
  },
  {
    slug: 'hps-toolkit',
    whatItSolves: [
      'Small businesses pay monthly subscriptions for tools they use occasionally — QR generators, PDF utilities, password tools, file converters — that don\'t justify a dedicated account per service',
      'Consumer free tools expose business data to unknown third parties with opaque processing and retention policies',
      'No single location for common business tasks means five open browser tabs for work that should take thirty seconds',
      'Branded document generation — invoices, certificates, basic proposals — requires templates scattered across disconnected apps with no shared business information layer',
    ],
    operationalFlow: [
      { n: '01', step: 'Access Toolkit', desc: 'Single HPS login surfaces all utility modules in one interface; no per-tool accounts, no separate subscriptions, no re-entering business information across tools.' },
      { n: '02', step: 'Use Generators', desc: 'QR codes, barcodes, password generators, UUID generators, and color palette tools — each exports directly to clipboard or download without third-party routing.' },
      { n: '03', step: 'Process Files', desc: 'PDF merge, split, compress, and watermark; image format conversion; CSV parsing — all processed client-side or within the HPS infrastructure, not uploaded to external services.' },
      { n: '04', step: 'Generate Documents', desc: 'Invoice templates, basic branded PDFs, and business card layouts using your stored business profile information; export to print-ready or screen-optimized output.' },
      { n: '05', step: 'Save & Deliver', desc: 'Outputs saved to your HPS account library; accessible from any device; integrated with HPS Transfer for secure delivery to clients or vendors.' },
    ],
  },
  {
    slug: 'hps-qr-code',
    whatItSolves: [
      'Static QR codes printed on physical materials become obsolete the moment a destination URL changes — every reprint costs time and production budget',
      'Consumer QR generators use third-party redirect domains that trigger browser trust warnings, decay on domain changes, and provide no analytics',
      'Multiple QR code sources create an unmanaged inventory with no central tracking, inconsistent branding, and no way to audit what is deployed in the field',
      'No scan analytics means physical signage, menus, packaging, and fabricated products deliver no measurable return data',
    ],
    operationalFlow: [
      { n: '01', step: 'Create Code', desc: 'Generate a QR code with a custom destination URL, brand color palette, and optional embedded logo; assign to a campaign tag or physical location identifier for inventory management.' },
      { n: '02', step: 'Configure Redirect', desc: 'Each QR routes through a persistent HPS redirect URL; destination can be updated at any time from the dashboard without reprinting or replacing any physical material.' },
      { n: '03', step: 'Deploy to Physical', desc: 'Export print-ready SVG or high-resolution PNG; apply to signage, menus, packaging, or send directly to the Fabrication Lab for embedding in dimensional plaques and connected surfaces.' },
      { n: '04', step: 'Track Every Scan', desc: 'Each scan logged with timestamp, device type, operating system, and geographic region; dashboard shows daily and weekly scan volume per code, campaign, and location.' },
      { n: '05', step: 'Update Anytime', desc: 'Change destination, disable code, or redirect to a seasonal campaign from the dashboard in real time; the printed code remains valid indefinitely across all physical deployments.' },
    ],
  },
  {
    slug: 'hps-qr-menu',
    whatItSolves: [
      'Printed menus require a full reprint cycle for every price change, seasonal addition, or 86\'d item — a recurring cost that compounds across high-volume operations',
      'PDF menus are universally accessible but deliver a poor mobile experience, require a file download, and provide zero analytics on what guests actually view',
      'Hospitality operators need menu content that reflects real-time availability and pricing without requiring a developer or designer for every update',
      'QR menu solutions from POS vendors lock content inside their proprietary system, charge per-location premiums, and limit design to their templates',
    ],
    operationalFlow: [
      { n: '01', step: 'Build Menu', desc: 'Add categories, items, prices, descriptions, allergen tags, and photos through the dashboard editor; no design software required; items can be marked available or 86\'d instantly.' },
      { n: '02', step: 'Configure Display', desc: 'Select layout theme — grid, list, or card view; configure color palette and typography; set up separate menu sections for dine-in, takeout, bar, brunch, or event service.' },
      { n: '03', step: 'Generate QR Code', desc: 'Assign a persistent QR code to each menu; print directly or order fabricated table talkers, tent cards, and coasters through the Fabrication Lab with embedded QR production.' },
      { n: '04', step: 'Go Live', desc: 'Menu publishes instantly to a mobile-optimized web view; guests scan and see current menu in their browser — no app installation, no account creation required.' },
      { n: '05', step: 'Update in Real Time', desc: 'Price changes, item availability, and daily specials update across all QR codes instantly from the dashboard; no reprinting, no delay, no version confusion at the table.' },
    ],
  },
  {
    slug: 'hps-transfer',
    whatItSolves: [
      'Email attachment size limits block delivery of large design files, video exports, and print-ready production assets that define most creative project deliverables',
      'Consumer file sharing services require recipients to have accounts, navigate permission flows, or accept platform terms before accessing files they are entitled to receive',
      'No delivery audit trail means there is no record of what was sent, when it was accessed, or whether all files in a delivery were actually downloaded',
      'Generic file sharing links undercut premium client positioning — there is no reason a creative or fabrication studio should route deliverables through a consumer cloud service',
    ],
    operationalFlow: [
      { n: '01', step: 'Upload Files', desc: 'Drag and drop files up to 25GB per transfer; organize with folder structure and add item descriptions so recipients understand what they are receiving.' },
      { n: '02', step: 'Configure Delivery', desc: 'Set expiration date, download limit per recipient, optional password protection, and notification preferences for access and download events.' },
      { n: '03', step: 'Brand the Transfer', desc: 'Custom sender name, message, and logo — HPS or client brand — appears on the delivery page; recipients see a professional delivery experience, not a consumer file host.' },
      { n: '04', step: 'Send to Recipients', desc: 'Email notification with a secure download link sent to one or multiple named recipients; no account creation required on the recipient side.' },
      { n: '05', step: 'Track Access', desc: 'Dashboard shows when link was opened, when each file was downloaded, and by which recipient; re-send, extend expiration, or revoke access at any time from the transfer record.' },
    ],
  },

  // ── Creator & Media ──────────────────────────────────────────────
  {
    slug: 'freebeats-music',
    whatItSolves: [
      'Royalty-free music subscriptions charge monthly fees for libraries where track quality varies wildly and licensing terms require careful reading before every use',
      'YouTube Content ID flags copyrighted music in creator videos even when legitimate licenses exist, creating manual dispute overhead that interrupts publishing workflows',
      'Searching generic free music libraries for the right track — right tempo, right mood, right genre — takes longer than producing the content it will accompany',
      'Production-grade instrumentals with commercial licensing options are priced for agencies, not independent creators who need quality audio without enterprise cost structures',
    ],
    operationalFlow: [
      { n: '01', step: 'Browse by Mood & BPM', desc: 'Filter the library by genre, tempo range, mood, and key signature; preview full tracks directly in browser without account creation or download commitment.' },
      { n: '02', step: 'Download for Free Use', desc: 'Download WAV and MP3 versions instantly under the standard creator license — no email capture, no waiting period, no hidden terms that change after download.' },
      { n: '03', step: 'Apply to Your Content', desc: 'Use tracks as background music, intro/outro beds, or production elements in YouTube videos, podcasts, social reels, and client work under the stated license terms.' },
      { n: '04', step: 'Upgrade for Commercial Work', desc: 'Extended licenses available for client deliverables, broadcast use, or monetized content at scale — documented clearance for every commercial use case.' },
      { n: '05', step: 'Connect to Creator Hub', desc: 'HPS Creator Hub clients access FreeBeatsMUSIC directly from their creator operations dashboard — audio sourcing becomes a built-in step in the production workflow, not a separate search session.' },
    ],
  },
  {
    slug: 'hps-creator-hub',
    whatItSolves: [
      'Creator operations are scattered across five platforms with no unified view — posting calendar in one app, analytics in another, link management in a third, file delivery in a fourth',
      'Audience reach is owned by platforms, not creators — algorithmic throttling means the audience you built cannot be reliably reached when you need them to see something',
      'Large file delivery for clients, commissioned work, and digital products flows through consumer services that impose size limits, require recipient accounts, and provide no delivery audit trail',
      'No analytics consolidation across platforms makes it impossible to identify which channel is actually building the audience versus which is generating activity without real return',
    ],
    operationalFlow: [
      { n: '01', step: 'Build Your Bio Hub', desc: 'HPS BioLinks page configured with your brand identity — all destinations organized, styled, and tracked; one URL deployed to every social bio across every platform.' },
      { n: '02', step: 'Activate Push Channel', desc: 'HPS Push beacon installed on your site or portfolio; visitors opt in to browser notifications without providing an email address; you own the subscriber list with no platform intermediary.' },
      { n: '03', step: 'Set Up Delivery Infrastructure', desc: 'HPS Transfer configured for digital product delivery and client file distribution; branded delivery pages with download tracking replace consumer file sharing for every deliverable.' },
      { n: '04', step: 'Connect Audio Library', desc: 'FreeBeatsMUSIC integrated into your production workflow for background music sourcing; commercial license management handled within Creator Hub when extended licenses are needed for client work.' },
      { n: '05', step: 'Consolidate Analytics', desc: 'Bio link clicks, QR scan data, push notification performance, and content engagement aggregated into a single view; identify which channels drive real audience action versus which are noise.' },
    ],
  },
  {
    slug: 'hps-media-studio',
    whatItSolves: [
      'Businesses producing content at volume have assets scattered across Google Drive, Dropbox, phone camera rolls, and email — no single organized source of truth for the current approved version',
      'Content approval runs through informal message threads where revision history and final approval decisions are impossible to reconstruct after the fact',
      'Brand voice consistency erodes when multiple contributors create content — different tone, different vocabulary, different quality standards appearing in the same published presence',
      'Publishing deadlines slip because no system coordinates the dependency chain between photography, copy, design, and scheduling — one delayed asset blocks everything downstream',
    ],
    operationalFlow: [
      { n: '01', step: 'Set Up Production Calendar', desc: 'Map your content cadence — daily, weekly, or event-driven; assign asset types, responsible parties, and publication targets; the system surfaces what is overdue and what is at risk.' },
      { n: '02', step: 'Centralize Asset Library', desc: 'Upload and tag brand assets, photography, video, and audio files into organized collections; every contributor works from the same source instead of duplicating files across local drives.' },
      { n: '03', step: 'Configure Approval Workflow', desc: 'Set review stages for each content type; route drafts through defined approvers with comment threads and revision tracking; final approval documented with timestamp and approver identity.' },
      { n: '04', step: 'Maintain Brand Voice', desc: 'Brand voice documentation — tone examples, vocabulary standards, and style guardrails — accessible to every contributor during creation; updated and versioned as the brand evolves.' },
      { n: '05', step: 'Distribute & Track', desc: 'Published content flows to HPS Socialize for channel distribution; post-performance data feeds back into the production calendar to inform format and timing decisions on future content cycles.' },
    ],
  },

  // ── Free Tools ───────────────────────────────────────────────────
  {
    slug: 'hps-ecommerce-tools',
    whatItSolves: [
      'Product pages with thin manufacturer-supplied copy rank poorly in search and fail to communicate the actual reasons a customer would choose one product over another',
      'Product schema markup errors disqualify store pages from Google\'s rich result eligibility — a significant missed visibility opportunity that no free Shopify theme checks for by default',
      'Conversion audit best practices are documented across dozens of sources with no single prioritized checklist aligned to how small stores actually sell',
      'Bulk product import CSV files contain formatting errors that only surface after upload failures — no validator checks for common problems before the import attempt',
    ],
    operationalFlow: [
      { n: '01', step: 'Audit Your Product Pages', desc: 'Run the conversion audit checklist against your top-traffic product pages; identify specific friction points — missing trust signals, slow images, checkout gaps — by priority order.' },
      { n: '02', step: 'Fix Schema & Structured Data', desc: 'Paste your product page URL into the schema validator; review the specific markup errors preventing rich result eligibility and get code-level correction guidance.' },
      { n: '03', step: 'Optimize Product Copy', desc: 'Use the description helper to restructure manufacturer copy into benefit-first, keyword-conscious descriptions with the formatting Google and customer reading patterns prefer.' },
      { n: '04', step: 'Validate Your Images', desc: 'Run alt text generation across product images and get candidates that balance SEO relevance with accessibility requirements — review and apply in bulk.' },
      { n: '05', step: 'Upgrade to Full Audit', desc: 'Free tools surface the most common issues; HPS SEO Audit provides comprehensive technical crawl, content gap analysis, and prioritized remediation roadmap for the full store.' },
    ],
  },
  {
    slug: 'hps-seo-tools',
    whatItSolves: [
      'Enterprise SEO platforms cost hundreds per month and surface more data than a single-location business can act on — the finding-to-fixing ratio is poor at that price point for small operations',
      'Google Search Console shows what happened but doesn\'t explain what to fix — understanding a "crawl anomaly" in practical terms requires expertise most small businesses don\'t have',
      'Title tags, meta descriptions, and heading structure have high leverage for local search visibility but are rarely verified after a site is built — they drift as content is added',
      'Social sharing previews are almost never checked before publishing, resulting in truncated titles, missing images, and generic descriptions that reduce click rates from every shared link',
    ],
    operationalFlow: [
      { n: '01', step: 'Check Your Page Titles', desc: 'Enter any URL and get immediate feedback on title length, keyword placement, mobile truncation preview, and estimated click-through impact — no login, no setup.' },
      { n: '02', step: 'Review Meta Descriptions', desc: 'Analyze description length, call-to-action clarity, and keyword presence; see exactly how the description renders in a live Google snippet preview.' },
      { n: '03', step: 'Audit Heading Structure', desc: 'Map the heading hierarchy of any page and identify structural issues — missing H1, skipped levels, keyword dilution — that affect both readability and crawl efficiency.' },
      { n: '04', step: 'Validate Social Previews', desc: 'See the exact social card that appears when your page is shared on Facebook, X, and LinkedIn; identify missing or incorrect Open Graph and Twitter Card tags.' },
      { n: '05', step: 'Move to Full Audit', desc: 'Free tools address on-page visibility; HPS SEO Audit covers technical crawl health, local signals, Core Web Vitals, structured data, and content gap analysis with a prioritized remediation roadmap.' },
    ],
  },

  // ── Operations & AI ──────────────────────────────────────────────
  {
    slug: 'hps-client-portal',
    whatItSolves: [
      'Project status lives in email threads, Slack messages, and voice calls — there is no single place to see where a project stands without interrupting someone',
      'Deliverable files are sent by email, expire in Dropbox links, or sit in unnamed Google Drive folders — clients spend real time hunting for files they have already received',
      'Invoice and payment history is scattered across email receipts; there is no organized record for accounting or tax purposes without manually reconstructing months of correspondence',
      'Support requests go to personal inboxes and get lost during busy periods — no ticket system means no accountability for response time or resolution tracking',
    ],
    operationalFlow: [
      { n: '01', step: 'Client Onboarding', desc: 'New clients receive portal access during project kickoff; account pre-populated with project scope, timeline milestones, and contact information — no setup required on the client side.' },
      { n: '02', step: 'Project Progress Tracking', desc: 'Each engagement phase updates as milestones are completed; clients see current status, next milestone, and estimated delivery timeline without needing to request a status update.' },
      { n: '03', step: 'Deliverable Review & Approval', desc: 'Completed work uploaded to the portal for client review; comments, revision requests, and approvals logged with timestamps — a clear, searchable decision record for every project.' },
      { n: '04', step: 'Billing & Payment', desc: 'Invoices issued through the portal with automated reminders; payment history, receipts, and project cost summaries available for download at any time.' },
      { n: '05', step: 'Ongoing Support', desc: 'Post-launch support requests submitted through the portal are triaged by type and priority; status updates issued automatically as tickets progress through resolution.' },
    ],
  },
  {
    slug: 'hps-ai-systems',
    whatItSolves: [
      'AI experimentation stays in demo mode because there is no structured path from "interesting output" to a workflow integration that runs without someone babysitting it every session',
      'Cloud-only AI systems route business-sensitive data — customer records, financial information, proprietary procedures — through third-party infrastructure with opaque data retention policies',
      'AI tools produce outputs that don\'t match brand voice or operational procedures because they have no context beyond what you type in the prompt each time',
      'Automation systems built on consumer AI tools break when the underlying API changes pricing, deprecates a model, or alters output format — there is no stable integration layer',
    ],
    operationalFlow: [
      { n: '01', step: 'Workflow Mapping', desc: 'Audit current operations for the processes where AI saves the most time: content drafting, data enrichment, customer communication templates, research synthesis, and document analysis.' },
      { n: '02', step: 'Architecture Decision', desc: 'Determine which operations require cloud AI (Claude for nuanced reasoning and long context) and which should run locally (Olares for privacy-sensitive data); design the integration layer accordingly.' },
      { n: '03', step: 'Configure Knowledge Base', desc: 'Train AI systems on your product documentation, brand voice guide, service procedures, and operational context; outputs are accurate and on-brand without manual correction.' },
      { n: '04', step: 'Build Automation Chains', desc: 'n8n orchestration workflows connect AI decision nodes to your CRM, CMS, and communication tools; Manus agents handle specific repeatable tasks on defined triggers without manual initiation.' },
      { n: '05', step: 'Training & Handoff', desc: 'System configuration documented with maintenance guides; team trained on prompt adjustment, knowledge updates, and automation chain extension — you own what we build.' },
    ],
  },
]

export function getPlatformExtended(slug: string): PlatformExtended | undefined {
  return data.find(p => p.slug === slug)
}
