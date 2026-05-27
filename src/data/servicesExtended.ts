import type { ServiceExtended } from './types'

const data: ServiceExtended[] = [

  // ── Digital ───────────────────────────────────────────────────────────────

  {
    slug: 'web-development',
    whatItSolves: [
      'Your current site was built with a page builder and performs poorly on mobile, in search, and under real user behavior.',
      'Design changes require a developer call or risk breaking something — your team cannot own the content.',
      'The site does not reflect the quality of your actual product, service, or operation.',
      'Accessibility violations are silently blocking users and creating compliance exposure.',
    ],
    deliveryFlow: [
      { n: '01', step: 'Discovery', desc: 'Goals, audience, technical requirements, and content inventory established before any design begins.' },
      { n: '02', step: 'Design', desc: 'Wireframes and visual layouts aligned to your brand system and conversion goals, reviewed before development starts.' },
      { n: '03', step: 'Development', desc: 'Code written to performance and accessibility standards, with clean markup and organized file structure.' },
      { n: '04', step: 'QA & Review', desc: 'Testing across devices, browsers, and assistive technology with structured issue documentation.' },
      { n: '05', step: 'Launch & Handoff', desc: 'Production deployment with documentation, team training, and optional ongoing maintenance plan.' },
    ],
  },

  {
    slug: 'ux-ui-design',
    whatItSolves: [
      'Your application or interface loses users at key moments because the design does not match how they think.',
      'Design decisions are made by gut feel or stakeholder preference rather than evidence from actual user behavior.',
      'Your product has accumulated inconsistent patterns that slow development and confuse users.',
      'No design system exists, so every new feature requires reinventing the visual language from scratch.',
    ],
    deliveryFlow: [
      { n: '01', step: 'Research', desc: 'User interviews, task analysis, and existing interface audit to establish a behavioral baseline.' },
      { n: '02', step: 'Architecture', desc: 'Information architecture and navigation structure mapped to real user mental models.' },
      { n: '03', step: 'Wireframes', desc: 'Low-fidelity layouts for rapid iteration and stakeholder alignment before visual investment.' },
      { n: '04', step: 'High-Fidelity Design', desc: 'Complete UI design with interactive prototype for user testing and developer handoff.' },
      { n: '05', step: 'Design System', desc: 'Component library with usage documentation delivered alongside final design files.' },
    ],
  },

  {
    slug: 'app-development',
    whatItSolves: [
      'No existing software tool covers your specific workflow — every option requires you to change how you operate.',
      'Your current system is a combination of spreadsheets, manual steps, and disconnected tools that creates recurring errors.',
      'You have no visibility into what your application is actually doing — no analytics, no error tracking, no audit trail.',
      'Every new feature is expensive and slow because the original foundation was not designed to be extended.',
    ],
    deliveryFlow: [
      { n: '01', step: 'Architecture', desc: 'System design, data model, and API structure planned before any code is written.' },
      { n: '02', step: 'Foundation Build', desc: 'Core application infrastructure, authentication, and database schema established.' },
      { n: '03', step: 'Feature Development', desc: 'Business logic and interfaces built in prioritized iterations with regular review checkpoints.' },
      { n: '04', step: 'Testing & QA', desc: 'Automated test coverage, manual QA, and performance testing before each deployment.' },
      { n: '05', step: 'Deploy & Monitor', desc: 'Production deployment with CI/CD pipeline, monitoring setup, and full documentation handoff.' },
    ],
  },

  {
    slug: 'digital-strategy',
    whatItSolves: [
      'You are spending on digital channels but cannot connect that activity to business outcomes or customer acquisition.',
      'Your web, social, paid, and email efforts all feel disconnected from each other.',
      'You do not know which channels are working, which are wasting budget, and which you have not tried.',
      'Strategy has been handed off to vendors who optimize for their own metrics, not yours.',
    ],
    deliveryFlow: [
      { n: '01', step: 'Digital Audit', desc: 'Full review of existing web, social, analytics, and paid channels with performance scoring.' },
      { n: '02', step: 'Audience Definition', desc: 'Define customer segments and map the information each needs to convert.' },
      { n: '03', step: 'Channel Strategy', desc: 'Investment priorities identified and channels to cut determined based on your audience and data.' },
      { n: '04', step: 'Roadmap Build', desc: '90-day execution calendar with owner assignments, KPIs, and decision checkpoints.' },
      { n: '05', step: 'Framework Handoff', desc: 'Strategy document, KPI dashboard setup, and working session to align your team on execution.' },
    ],
  },

  {
    slug: 'e-commerce',
    whatItSolves: [
      'Your storefront uses a default template that looks like every other online shop in your category.',
      'Checkout abandonment is high because the purchase flow creates unnecessary friction at key steps.',
      'Your product catalog is unstructured — customers cannot find what they are looking for.',
      'Online sales and physical inventory are tracked separately, creating constant reconciliation work.',
    ],
    deliveryFlow: [
      { n: '01', step: 'Platform Selection', desc: 'Match your products, order volume, and team to the right e-commerce platform before any design begins.' },
      { n: '02', step: 'Catalog Architecture', desc: 'Product taxonomy, variant structure, and collection organization planned for both UX and SEO.' },
      { n: '03', step: 'Storefront Design', desc: 'Custom branded layouts, product pages, and checkout flow designed for conversion.' },
      { n: '04', step: 'Integration & Configuration', desc: 'Payment, shipping, tax, and inventory systems connected and tested end-to-end.' },
      { n: '05', step: 'Launch & Training', desc: 'Store launched with team training on product management, order processing, and reporting.' },
    ],
  },

  // ── Brand & Media ─────────────────────────────────────────────────────────

  {
    slug: 'brand-identity',
    whatItSolves: [
      'Your current brand was built as a quick fix and has outgrown your business, creating inconsistency across every application.',
      'Your visual identity does not communicate the quality, price point, or professionalism of what you actually offer.',
      'Different vendors produce materials that look like they belong to three different businesses.',
      'You have a logo but no system — no type standards, no color guidance, no usage rules.',
    ],
    deliveryFlow: [
      { n: '01', step: 'Brand Strategy', desc: 'Positioning, voice, competitive landscape, and strategic differentiation defined before visual design begins.' },
      { n: '02', step: 'Identity Design', desc: 'Logo system, color palette, and typography designed and presented in context applications.' },
      { n: '03', step: 'Refinement', desc: 'Revisions based on structured feedback against strategic criteria, not aesthetic preference.' },
      { n: '04', step: 'System Documentation', desc: 'Brand guidelines documenting all correct and incorrect applications across key surfaces.' },
      { n: '05', step: 'File Delivery', desc: 'Complete file package in every format — print, digital, embroidery, screen printing, fabrication.' },
    ],
  },

  {
    slug: 'print-design',
    whatItSolves: [
      'Materials come back from the printer looking nothing like they did on screen because files were not set up correctly.',
      'Your print materials are inconsistent across vendors — different colors, different proportions, different quality.',
      'You design with web tools but print has entirely different technical requirements that are not being accounted for.',
      'Simple updates require a designer every time because files were not built to be maintained.',
    ],
    deliveryFlow: [
      { n: '01', step: 'Brief & Specifications', desc: 'Define the piece, quantity, print method, and vendor specs before any design begins.' },
      { n: '02', step: 'Layout Design', desc: 'Design developed with correct dimensions, bleed, safe zones, and color mode for the production method.' },
      { n: '03', step: 'Proof Review', desc: 'Client approval of color, content, and layout before production files are generated.' },
      { n: '04', step: 'Print-Ready Files', desc: 'Final files prepared in the correct format, color profile, and resolution for the specific vendor and process.' },
      { n: '05', step: 'Production Coordination', desc: 'File delivery with vendor specifications and optional production monitoring through completion.' },
    ],
  },

  {
    slug: 'content-strategy',
    whatItSolves: [
      'You publish content regularly but it is not generating meaningful traffic, leads, or business outcomes.',
      'Every piece of content is a one-off decision — there is no editorial system connecting topics to business goals.',
      'You do not know what your target audience is actually searching for or what would make them engage.',
      'Content is duplicated across your site and social channels without a clear hierarchy or ownership structure.',
    ],
    deliveryFlow: [
      { n: '01', step: 'Content Audit', desc: 'Inventory of existing content with performance scoring, gap identification, and competitive benchmarking.' },
      { n: '02', step: 'Audience Research', desc: 'Search intent analysis, audience segment mapping, and topic cluster architecture.' },
      { n: '03', step: 'Editorial Framework', desc: 'Content types, formats, ownership model, and quality standards defined.' },
      { n: '04', step: 'Calendar Build', desc: '90-day publishing schedule with topic assignments, format guidance, and distribution plan per channel.' },
      { n: '05', step: 'Handoff & Training', desc: 'Strategy document, calendar tooling, and working session so your team can execute independently.' },
    ],
  },

  {
    slug: 'social-media-management',
    whatItSolves: [
      'You know you should be active on social media, but inconsistent posting is worse than no presence at all.',
      'Your accounts have outdated content, mismatched branding, and sporadic activity that damages credibility.',
      'The time required to do social media well is time your team simply does not have.',
      'You are posting content but have no visibility into what is performing or why.',
    ],
    deliveryFlow: [
      { n: '01', step: 'Account Audit', desc: 'Review all existing accounts for completeness, brand consistency, and baseline performance.' },
      { n: '02', step: 'Strategy Alignment', desc: 'Monthly content themes and posting calendar aligned to your business calendar and seasonal moments.' },
      { n: '03', step: 'Content Production', desc: 'Post copy, graphics, and video content created and approved before scheduling.' },
      { n: '04', step: 'Publishing & Monitoring', desc: 'Scheduled posts published on time with community monitoring and timely response.' },
      { n: '05', step: 'Monthly Reporting', desc: 'Performance report covering reach, engagement, follower growth, and content highlights.' },
    ],
  },

  {
    slug: 'photography-videography',
    whatItSolves: [
      'Your website and social channels rely on stock photography or phone snapshots that do not represent your actual business.',
      'You have had professional photography done before but received files in formats that did not work for your web and print needs.',
      'Inconsistent visual quality across your materials — some polished, some clearly ad-hoc — undermines trust.',
      'You have video ideas but no production process to turn them into usable content.',
    ],
    deliveryFlow: [
      { n: '01', step: 'Pre-Production', desc: 'Shot list, location scouting, styling guidance, and schedule aligned to your specific use cases.' },
      { n: '02', step: 'Production', desc: 'Shoot day with professional lighting, composition, and subject direction.' },
      { n: '03', step: 'Editing', desc: 'Color grading, retouching, and video editing to production-quality standards.' },
      { n: '04', step: 'Format Delivery', desc: 'Final files delivered in every required format, resolution, and aspect ratio for each application.' },
      { n: '05', step: 'Asset Organization', desc: 'Organized file library with naming convention and usage notes for your team.' },
    ],
  },

  // ── Fabrication ───────────────────────────────────────────────────────────

  {
    slug: 'fabrication-apparel',
    whatItSolves: [
      'Your current apparel vendor requires large minimums that do not work for small runs or testing new designs.',
      'Files go to an external vendor and come back wrong — wrong colors, wrong placement, lower quality than expected.',
      'You need staff uniforms, event shirts, and branded merchandise from one source instead of coordinating multiple vendors.',
      'Long lead times from external vendors make last-minute orders or event-driven production impossible.',
    ],
    deliveryFlow: [
      { n: '01', step: 'Art Preparation', desc: 'Your design files prepared and optimized for the specific production method — DTG, embroidery, or sublimation.' },
      { n: '02', step: 'Method Selection', desc: 'Production method matched to garment type, design complexity, and order quantity.' },
      { n: '03', step: 'Proof Approval', desc: 'Physical sample or digital proof reviewed and approved before full production run.' },
      { n: '04', step: 'Production', desc: 'In-house production run completed on approved garments and design files.' },
      { n: '05', step: 'QC & Delivery', desc: 'Quality inspection against specifications before order fulfillment.' },
    ],
  },

  {
    slug: 'fabrication-signage',
    whatItSolves: [
      'Signage ordered from print vendors comes back generic — no texture, no dimension, just flat printed material.',
      'Your current signs do not hold up in outdoor or high-traffic environments over time.',
      'Coordinating design, fabrication, and installation across multiple vendors adds weeks and creates errors.',
      'You need QR codes embedded in signage but have no system to manage the dynamic destinations afterward.',
    ],
    deliveryFlow: [
      { n: '01', step: 'Design & Specification', desc: 'Signage design developed with production method, substrate, and installation environment in mind.' },
      { n: '02', step: 'Method & Material Selection', desc: 'UV print, laser, vinyl, or dimensional approach selected for each sign based on specific use case.' },
      { n: '03', step: 'Proof Approval', desc: 'Digital or physical proof reviewed and approved before production begins.' },
      { n: '04', step: 'In-House Production', desc: 'Signs produced in our Leesburg fabrication facility using the approved method and materials.' },
      { n: '05', step: 'QR Integration & Delivery', desc: 'Dynamic QR codes embedded and configured, signs quality-checked and packaged for delivery.' },
    ],
  },

  {
    slug: 'fabrication-3d',
    whatItSolves: [
      'Sending files to an external 3D printing service means lead times of days or weeks with no ability to iterate quickly.',
      'Off-the-shelf hardware or display components do not fit your specific installation or dimensional requirements.',
      'You have a design concept but no 3D model — and no clear path from sketch to physical prototype.',
      'Consumer resin printers do not meet display or presentation quality standards for client-facing work.',
    ],
    deliveryFlow: [
      { n: '01', step: 'Model Review', desc: 'Your files reviewed for printability — wall thickness, overhangs, support requirements — before production.' },
      { n: '02', step: 'Print Method Selection', desc: 'FDM or resin selected based on detail requirements, structural needs, and finish expectations.' },
      { n: '03', step: 'First Print', desc: 'Initial print produced and reviewed for dimensional accuracy and surface quality.' },
      { n: '04', step: 'Post-Processing', desc: 'Sanding, priming, and painting as required for production-quality surface finish.' },
      { n: '05', step: 'Delivery', desc: 'Finished piece delivered with any iterative feedback incorporated before production runs.' },
    ],
  },

  // ── Connected Systems ────────────────────────────────────────────────────

  {
    slug: 'qr-systems',
    whatItSolves: [
      'QR codes deployed at your venue link to static URLs — when destinations change, you have to reprint everything.',
      'Your QR deployment has no analytics — you do not know which codes are being scanned, where, or on what devices.',
      'QR codes look inconsistent, unbranded, or poorly placed — damaging the experience rather than enhancing it.',
      'You are using QR codes but have no architecture connecting physical touchpoints to digital actions at scale.',
    ],
    deliveryFlow: [
      { n: '01', step: 'System Mapping', desc: 'Every QR touchpoint in your environment mapped with the intended digital experience defined for each.' },
      { n: '02', step: 'Platform Setup', desc: 'HPS QR Code platform configured with dynamic codes, tracking parameters, and destination management.' },
      { n: '03', step: 'Physical Production', desc: 'QR-embedded surfaces fabricated — table tents, coasters, signs, panels — in-house.' },
      { n: '04', step: 'Deployment', desc: 'Codes placed, tested on multiple devices, and confirmed to track correctly across all locations.' },
      { n: '05', step: 'Ongoing Management', desc: 'Destination updates, analytics review, and code rotation managed through the platform dashboard.' },
    ],
  },

  {
    slug: 'hospitality-digital',
    whatItSolves: [
      'Your digital presence was built in pieces over time — website, Google profile, social accounts, and menus do not feel like one system.',
      'Guests have trouble finding your hours, menu, or booking information because it lives in different places and is often outdated.',
      'Your digital menu is a PDF that has not been updated in months and is impossible to navigate on a phone.',
      'You are missing reviews that should be generating new customers because no system is actively collecting them.',
    ],
    deliveryFlow: [
      { n: '01', step: 'Digital Audit', desc: 'Full review of website, Google Business, social accounts, menu, and booking systems for accuracy and gaps.' },
      { n: '02', step: 'Priority Remediation', desc: 'Fix what is broken first — outdated hours, missing photos, broken links, inconsistent branding.' },
      { n: '03', step: 'QR Menu Deployment', desc: 'Digital menu built in HPS QR Menu and deployed with table QR codes produced in-house.' },
      { n: '04', step: 'Review System Setup', desc: 'HPS SocialProof configured to collect reviews and surface them across key touchpoints.' },
      { n: '05', step: 'Foundation Handoff', desc: 'Complete system documented with update guides so your team can maintain it independently.' },
    ],
  },

  {
    slug: 'ai-integration',
    whatItSolves: [
      'You have experimented with AI tools but have not found a way to apply them consistently to your actual workflows.',
      'Repetitive tasks that AI could handle are still done manually because no integration exists between the tools.',
      'AI tools produce generic output because they have not been configured with your brand voice, data, or context.',
      'Your team is curious about AI but has no structured way to evaluate, adopt, or train on new tools.',
    ],
    deliveryFlow: [
      { n: '01', step: 'Workflow Audit', desc: 'Map your current processes to identify where AI can save the most time with the least disruption.' },
      { n: '02', step: 'Tool Selection', desc: 'Evaluate and select AI tools specifically matched to your use cases — no overpromising on capability.' },
      { n: '03', step: 'Integration Build', desc: 'Connect selected AI tools to your existing systems — CRM, CMS, communications, operations.' },
      { n: '04', step: 'Configuration & Training', desc: 'AI tools configured with your brand data and voice. Team training sessions conducted.' },
      { n: '05', step: 'Monitoring & Iteration', desc: 'Usage tracked and workflows refined in the first 30 days to confirm tools are being used effectively.' },
    ],
  },

  // ── New Fabrication Services ──────────────────────────────────────────────

  {
    slug: 'uv-printing',
    whatItSolves: [
      'Flat print from an external vendor comes back looking generic — no texture, no dimension, nothing that communicates premium quality at close range.',
      'You need a sign or plaque that reads as high-end but cannot afford the tooling costs of traditional embossing or stamping.',
      'Long lead times from print vendors make fast-turnaround production for events, seasonal reprints, and sponsor updates impossible.',
      'You have QR codes embedded in signage but no system to update the destination without reprinting the physical piece.',
    ],
    deliveryFlow: [
      { n: '01', step: 'Art Preparation', desc: 'Files prepared for UV output — vector artwork, color profile conversion, dimensional layer separation, and substrate-appropriate resolution.' },
      { n: '02', step: 'Substrate Selection', desc: 'Substrate matched to application: PVC for indoor signage, dibond for outdoor, acrylic for display quality, wood panel for premium surfaces.' },
      { n: '03', step: 'First Print Review', desc: 'Production proof reviewed for color fidelity, dimensional build height, and gloss/matte contrast before full run.' },
      { n: '04', step: 'Production Run', desc: 'In-house UV production on approved substrate with QR integration configured through HPS QR Code where specified.' },
      { n: '05', step: 'Quality Check & Delivery', desc: 'Physical inspection of dimensional accuracy, color, and edge quality before packaging and delivery or installation.' },
    ],
  },
  {
    slug: 'dimensional-printing',
    whatItSolves: [
      'Your signage looks exactly like everyone else because it is flat print — no surface quality, no tactile impression, nothing that communicates craft.',
      'Traditional embossing and foiling require tooling investment and minimum quantities that make premium finishes cost-prohibitive for small runs.',
      'Award faces and recognition plaques feel ordinary because the production method cannot deliver dimensional branding without expensive casting.',
      'You want texture and depth on a surface but have no production path between flat print and traditional fabrication.',
    ],
    deliveryFlow: [
      { n: '01', step: 'Design Review', desc: 'Artwork reviewed for dimensional suitability — which elements should be raised, what depth serves the design, and how gloss/matte contrast will work.' },
      { n: '02', step: 'Layer Separation', desc: 'File prepared with separate layers for base print, dimensional build zones, and finish layers — each controlled independently in production.' },
      { n: '03', step: 'Dimensional Proof', desc: 'Test piece produced to verify relief height, texture quality, and contrast finish before full production.' },
      { n: '04', step: 'Production', desc: 'Dimensional print run on approved substrate with stacked UV passes building relief to specified depth.' },
      { n: '05', step: 'Finishing & Delivery', desc: 'Pieces inspected for dimensional consistency and surface quality, packaged, and delivered or handed off for installation.' },
    ],
  },
  {
    slug: 'dtg-printing',
    whatItSolves: [
      'Your current apparel vendor requires screen setup fees that make small runs and single items prohibitively expensive.',
      'Designs with gradients, photographic elements, or many colors cannot be executed correctly with screen printing.',
      'You need staff shirts, event apparel, and branded merchandise from one source on short timelines without minimum commitments.',
      'External vendors return garments with wrong colors, placement, or quality — and there is no way to verify output before the run arrives.',
    ],
    deliveryFlow: [
      { n: '01', step: 'Art Preparation', desc: 'File prepared for DTG — resolution verified, color profile set, bleed and placement confirmed against garment spec.' },
      { n: '02', step: 'Pre-Treatment', desc: 'Garments pre-treated where required for the fabric type — dark garments require application calibrated to cotton composition.' },
      { n: '03', step: 'Print', desc: 'CMYK print pass at full resolution. First garment reviewed before full run proceeds.' },
      { n: '04', step: 'Heat Cure', desc: 'Post-print heat cure at calibrated temperature and dwell time for permanent ink bonding.' },
      { n: '05', step: 'QC & Delivery', desc: 'Each garment inspected for color fidelity, placement accuracy, and wash stability before fulfillment.' },
    ],
  },
  {
    slug: 'sublimation-printing',
    whatItSolves: [
      'You need all-over-print garments but screen printing and DTG cannot achieve full seamless coverage across the entire garment.',
      'Printed graphics on garments are cracking, peeling, or fading after washing because the ink is on the surface rather than in the fiber.',
      'Performance apparel with technical properties cannot accept DTG or screen print without compromising the fabric function.',
      'You need branded hardgoods — mugs, panels, coasters — with full-color permanent graphics that will not chip or wear.',
    ],
    deliveryFlow: [
      { n: '01', step: 'Transfer Print', desc: 'Design printed onto sublimation transfer paper at full color and resolution with bleed for seamless edge-to-edge coverage.' },
      { n: '02', step: 'Material Verification', desc: 'Substrate confirmed as polyester fabric or polymer-coated hard surface — sublimation only works on compatible materials.' },
      { n: '03', step: 'Heat Transfer', desc: 'Transfer paper applied to substrate under heat press at calibrated temperature, pressure, and time for full dye conversion.' },
      { n: '04', step: 'First Piece Review', desc: 'Initial piece inspected for color saturation, coverage, and registration before full production run.' },
      { n: '05', step: 'QC & Delivery', desc: 'Finished pieces inspected for color fidelity and coverage uniformity before packaging and fulfillment.' },
    ],
  },
  {
    slug: 'embroidery-systems',
    whatItSolves: [
      'Embroidery ordered from an outside vendor comes back with wrong thread colors, inconsistent registration, and no stored file for reprints.',
      'Your current embroidery source requires minimums that make single-piece production for samples and replacements impossible.',
      'The digitization of your logo was done incorrectly — underlay is missing, thread density is wrong, and the mark pulls the fabric.',
      'You are producing multiple apparel types — polos, hats, jackets — and each vendor handles them differently, producing inconsistent results.',
    ],
    deliveryFlow: [
      { n: '01', step: 'Digitization', desc: 'Vector artwork converted to embroidery stitch path in-house — underlay, pull compensation, density, and color sequence programmed correctly.' },
      { n: '02', step: 'Thread Color Selection', desc: 'Thread matched to brand standard using physical Madeira and Isacord swatches against the approved color specification.' },
      { n: '03', step: 'Sew-Out Proof', desc: 'Physical production sample sewn and reviewed for placement, density, color, and registration before full run approval.' },
      { n: '04', step: 'Production Run', desc: 'Full run executed on approved garments with registration checked at the first piece of each new garment type.' },
      { n: '05', step: 'QC & Storage', desc: 'Finished pieces inspected and digitization file stored permanently for future repeat orders without new art prep.' },
    ],
  },
  {
    slug: 'co2-laser',
    whatItSolves: [
      'Custom cuts and shapes in acrylic, wood, or leather require expensive die tooling when outsourced — prohibitive for small runs and custom items.',
      'Engraving from external vendors lacks depth control, variable contrast, and the ability to iterate quickly on artwork before production.',
      'You need laser-engraved plaques, awards, and custom items produced on short lead times that external service bureaus cannot meet.',
      'Your current supplier cannot handle wood, acrylic, and leather engraving from the same order without involving multiple vendors.',
    ],
    deliveryFlow: [
      { n: '01', step: 'Artwork Preparation', desc: 'Vector files prepared for laser output — converted to correct format, line weights set for cut vs. engrave, power zones defined.' },
      { n: '02', step: 'Material Setup', desc: 'Material staged and laser parameters tuned to the specific material, thickness, and desired engraving depth or cut quality.' },
      { n: '03', step: 'Test Run', desc: 'Test piece produced on scrap material to confirm power settings, depth, and edge quality before production material is used.' },
      { n: '04', step: 'Production', desc: 'Full production run with first-piece inspection against spec. Personalization programs run with variable data.' },
      { n: '05', step: 'Post-Processing & Delivery', desc: 'Pieces cleaned, masked material removed, and finished pieces inspected before packaging and delivery.' },
    ],
  },
  {
    slug: 'fiber-laser',
    whatItSolves: [
      'Metal marking from external vendors uses ink or paint fills that scratch off, fade, or require reapplication over time.',
      'Trophy and award plates engraved by outside vendors have inconsistent depth, line weight, and cannot handle fine text at small sizes.',
      'You need permanent serial numbers, asset marks, or barcodes on metal components that cannot be removed or altered.',
      'QR codes and identification marks on metal surfaces require a production method that is as durable as the base material.',
    ],
    deliveryFlow: [
      { n: '01', step: 'Artwork Preparation', desc: 'Files prepared for fiber laser — text converted to outlines, fine detail checked for minimum feature size, variable data set up for sequential marking.' },
      { n: '02', step: 'Material & Parameter Setup', desc: 'Laser parameters tuned to the specific metal type and finish — anodized aluminum, stainless, brass, chrome — for optimal contrast and depth.' },
      { n: '03', step: 'First-Piece Proof', desc: 'Initial mark produced and inspected for contrast, depth, edge definition, and line weight before full run.' },
      { n: '04', step: 'Production', desc: 'Full production run with QC checks at regular intervals. Sequential numbering programs run with variable data files.' },
      { n: '05', step: 'Inspection & Delivery', desc: 'Finished pieces inspected for mark quality and packaging for delivery or integration into larger assemblies.' },
    ],
  },
  {
    slug: 'uv-laser',
    whatItSolves: [
      'Standard CO₂ laser processing on premium leather or sensitive coatings produces visible charring and heat-affected zones that damage the material.',
      'You need fine detail marks on glass, ceramics, or heat-sensitive substrates where thermal distortion from standard laser processing is unacceptable.',
      'Cork and organic material goods from external vendors come back with burn discoloration around the marked area that compromises the finished product.',
      'Surface coating ablation for identification or design requires precision that standard laser wavelengths cannot achieve without thermal spread.',
    ],
    deliveryFlow: [
      { n: '01', step: 'Material Assessment', desc: 'Material assessed for UV laser suitability — heat sensitivity, coating type, finish condition, and required mark quality.' },
      { n: '02', step: 'Parameter Setup', desc: 'UV laser parameters configured for cold-process operation — power, frequency, and scan speed tuned to material without heat generation.' },
      { n: '03', step: 'Test Mark', desc: 'Test mark produced and inspected for contrast, edge definition, and absence of heat-affected zone before production.' },
      { n: '04', step: 'Production', desc: 'Full production run with material handling procedures appropriate for heat-sensitive substrates.' },
      { n: '05', step: 'Quality Inspection', desc: 'Finished pieces inspected for mark quality and material integrity around the marked area before delivery.' },
    ],
  },
  {
    slug: 'diode-laser',
    whatItSolves: [
      'Small-batch personalized items require the CO₂ system to be dedicated to low-volume work, creating capacity conflicts with larger production jobs.',
      'Production runs of personalized keychains, ornaments, and small wood goods from external vendors have long lead times that do not suit event and gifting timelines.',
      'Fine text at small point sizes does not reproduce cleanly on wood with higher-power systems that were optimized for larger-area work.',
      'Running personalization programs sequentially on a single system creates bottlenecks when multiple job types need concurrent production.',
    ],
    deliveryFlow: [
      { n: '01', step: 'Job Setup', desc: 'Multiple items nested in the work area for batch processing — variable data files set up for sequential personalization programs.' },
      { n: '02', step: 'Material Staging', desc: 'Items staged in production order with registration fixtures where required for consistent placement across the batch.' },
      { n: '03', step: 'First-Piece Check', desc: 'First item in each batch inspected for quality before the full run proceeds.' },
      { n: '04', step: 'Batch Production', desc: 'Full batch run with periodic quality checks. Concurrent jobs running on other systems managed without workflow conflict.' },
      { n: '05', step: 'QC & Fulfillment', desc: 'Finished items inspected, personalization verified against order, and items packaged for delivery.' },
    ],
  },
  {
    slug: 'vinyl-signage',
    whatItSolves: [
      'Vehicle graphics ordered from outside vendors have color inconsistencies across the fleet because each vendor profiles color differently.',
      'Window lettering applied by a sign company does not match your brand standards and has no documentation for future replacements.',
      'Floor graphics from generic suppliers fade, curl at edges, and create safety concerns in high-traffic areas.',
      'You need full-color print-and-cut vinyl shapes that a standard cutter-only vendor cannot produce.',
    ],
    deliveryFlow: [
      { n: '01', step: 'Design & Material Selection', desc: 'Vinyl type selected for application: cast for vehicles, calendered for walls, laminated print-and-cut for graphics, non-slip for floors.' },
      { n: '02', step: 'Cut or Print-and-Cut', desc: 'Files cut on precision plotter or printed and contour-cut for full-color custom shapes.' },
      { n: '03', step: 'Proof Review', desc: 'Cut or printed proof reviewed against spec before large production runs or vehicle application.' },
      { n: '04', step: 'Application Preparation', desc: 'Pieces weeded, transferred, and staged for application with surface preparation guidelines where installation is included.' },
      { n: '05', step: 'Delivery or Install', desc: 'Graphics delivered for self-application with instructions, or installed on-site with surface preparation and application documentation.' },
    ],
  },
  {
    slug: 'environmental-graphics',
    whatItSolves: [
      'Your interior space looks generic because the walls and windows carry no brand communication — every competitor looks the same.',
      'Wayfinding is inconsistent or absent, creating navigation friction for customers in multi-space or multi-floor environments.',
      'Environmental graphics ordered from multiple vendors never look like one coordinated system — type, color, and scale all differ.',
      'You have rebranded but the physical environment still reflects the old identity, creating a disconnect between digital and physical brand experience.',
    ],
    deliveryFlow: [
      { n: '01', step: 'Space Assessment', desc: 'Physical environment documented — wall surfaces, dimensions, lighting, substrate conditions — before design begins.' },
      { n: '02', step: 'System Design', desc: 'Environmental graphic system designed as a coordinated whole — scale, color, typography, and material selections unified.' },
      { n: '03', step: 'Material Specification', desc: 'Materials matched to each surface and condition: wallpaper, direct vinyl, rigid panels, floor graphics, window treatments.' },
      { n: '04', step: 'Production', desc: 'All system components produced in-house with consistent color calibration across all elements.' },
      { n: '05', step: 'Installation', desc: 'System installed with placement documentation, surface preparation, and post-installation inspection against design spec.' },
    ],
  },
  {
    slug: 'sponsor-signage',
    whatItSolves: [
      'Sponsor panels ordered from print vendors are flat, generic, and do not communicate the value of a sponsorship relationship.',
      'Reprinting sponsor signage each season requires starting the artwork process from scratch because no production documentation was retained.',
      'You have no way to show sponsors quantitative scan data proving their signage is being seen and engaged with.',
      'Multiple vendors produce different elements of the sponsor program with inconsistent materials, sizes, and color quality.',
    ],
    deliveryFlow: [
      { n: '01', step: 'Program Specification', desc: 'Full sponsor program mapped — panel types, locations, quantities, size standards, and QR integration requirements.' },
      { n: '02', step: 'Art Preparation', desc: 'Sponsor artwork files normalized to production standard — brand guidelines applied, UV print and laser engraving layers separated.' },
      { n: '03', step: 'Prototype Review', desc: 'First panels from each panel type produced and reviewed before full program run.' },
      { n: '04', step: 'Full Program Production', desc: 'Complete program produced in-house with QR codes configured and tested against live destinations before delivery.' },
      { n: '05', step: 'Season Management', desc: 'Program specifications stored for annual reprints. QR destinations updated through platform dashboard without reprinting.' },
    ],
  },
  {
    slug: 'hospitality-signage',
    whatItSolves: [
      'Your restaurant signage was produced by three different vendors and does not read as one coordinated brand environment.',
      'Table surface elements — coasters, table tents, tent cards — are generic and do not carry your brand or QR menu integration.',
      'Staff uniforms and signage are not produced from the same brand system, creating visual inconsistency across every customer touchpoint.',
      'Multi-location operators produce signage independently at each location, resulting in inconsistent brand standards across the group.',
    ],
    deliveryFlow: [
      { n: '01', step: 'Environment Audit', desc: 'Existing signage and surfaces documented for replacement or addition. Brand files collected and organized.' },
      { n: '02', step: 'System Design', desc: 'Signage system designed as a coordinated set — materials, finishes, typography, and format standards established.' },
      { n: '03', step: 'Production', desc: 'All signage elements produced in-house with consistent brand calibration across UV print, laser, and vinyl production methods.' },
      { n: '04', step: 'QR Integration', desc: 'Table QR elements configured through HPS QR Menu. Dynamic destinations tested before deployment.' },
      { n: '05', step: 'Delivery & Coordination', desc: 'System delivered with installation instructions, brand documentation, and reorder specifications for future consistency.' },
    ],
  },
  {
    slug: 'golf-plaques',
    whatItSolves: [
      'Trophy and plaque production from generic award vendors lacks the material quality and design standards appropriate for a premium golf operation.',
      'Hole-in-one plaques are ordered one at a time with no stored production template — each one is a new art prep and setup process.',
      'Donor recognition walls look inconsistent because pieces were added over time from different vendors with no cohesive production standard.',
      'Hole identification systems mix old and new panels with different materials, sizes, and production quality, creating a visually fragmented course environment.',
    ],
    deliveryFlow: [
      { n: '01', step: 'Program Design', desc: 'Plaque system designed with consistent format standards — size, material, production method, and mounting hardware specifications.' },
      { n: '02', step: 'Template Production', desc: 'Master templates produced for each plaque type and approved before individualized production runs begin.' },
      { n: '03', step: 'Personalization', desc: 'Variable data applied — names, dates, scores, and recognition details engraved from approved templates.' },
      { n: '04', step: 'QR Integration', desc: 'QR codes configured and tested for connected plaque programs. Dynamic destinations managed through HPS QR Code.' },
      { n: '05', step: 'Delivery & Documentation', desc: 'Plaques delivered with mounting hardware. Production specs stored for future additions and annual reprints.' },
    ],
  },
  {
    slug: 'qr-connected-surfaces',
    whatItSolves: [
      'QR codes on physical surfaces point to static URLs — when the destination changes, the sign has to be reprinted.',
      'QR deployments across multiple physical locations have no centralized management or analytics reporting.',
      'QR codes applied to finished signs look like afterthoughts — generic black squares that do not integrate with the design.',
      'You have no way to demonstrate QR engagement to sponsors, management, or clients because there is no tracking infrastructure.',
    ],
    deliveryFlow: [
      { n: '01', step: 'System Architecture', desc: 'All QR touchpoints mapped — each location, destination, tracking requirement, and physical production method documented.' },
      { n: '02', step: 'Platform Configuration', desc: 'HPS QR Code configured with dynamic codes for every touchpoint. Analytics parameters set per location and campaign.' },
      { n: '03', step: 'Physical Production', desc: 'QR-embedded surfaces produced with codes integrated into the design — UV print, laser engraving, or embedded print method per substrate.' },
      { n: '04', step: 'Testing & Deployment', desc: 'Every code scanned against live destination before deployment. Multi-device testing confirmed.' },
      { n: '05', step: 'Ongoing Management', desc: 'Destination updates, analytics review, and code rotation managed through platform dashboard without physical reprinting.' },
    ],
  },
  {
    slug: 'acrylic-engraving',
    whatItSolves: [
      'Acrylic awards and display pieces from external vendors have inconsistent edge quality, imprecise engraving depth, and slow turnaround times.',
      'Custom acrylic shapes require expensive die tooling from conventional fabricators — prohibitive for small runs and iterative design work.',
      'Reverse engraving effects and backlit panel production are capabilities most sign shops cannot offer without significant lead time.',
      'Award programs with sequential personalization — names, dates, scores — cannot be produced cost-effectively with external vendors requiring minimums.',
    ],
    deliveryFlow: [
      { n: '01', step: 'Design Review', desc: 'Artwork reviewed for acrylic-specific requirements — reverse engrave vs. surface engrave, cut shapes, edge finish spec.' },
      { n: '02', step: 'Material Selection', desc: 'Acrylic type, color, and thickness selected for the application — clear, colored, mirrored, or specialty formulations.' },
      { n: '03', step: 'First Piece', desc: 'Initial piece produced and reviewed for engraving contrast, edge quality, and dimensional accuracy before production run.' },
      { n: '04', step: 'Production', desc: 'Full run completed with personalization programs processed from variable data files where applicable.' },
      { n: '05', step: 'Finishing & Delivery', desc: 'Protective masking removed, edges inspected, and pieces packaged appropriately for delivery.' },
    ],
  },
  {
    slug: 'wood-engraving',
    whatItSolves: [
      'Wood plaques and awards from external vendors use low-resolution engraving that cannot reproduce fine detail, small text, or photographic halftones.',
      'Photo engraving on wood — portraits, team photos, commemorative imagery — is a specialized capability most local vendors do not offer.',
      'Personalization programs for gifting and award production require small quantities with variable data that external vendors will not run economically.',
      'Species selection, grain orientation, and surface preparation — details that affect engraved output quality — are decisions external vendors make without consultation.',
    ],
    deliveryFlow: [
      { n: '01', step: 'Art Preparation', desc: 'Files prepared for wood engraving — halftone conversion for photos, vector optimization for logos, variable data set up for personalization programs.' },
      { n: '02', step: 'Material Selection', desc: 'Wood species selected for the application — maple for high contrast, walnut for rich tone, cherry for warm warmth, MDF for economy.' },
      { n: '03', step: 'Test Engrave', desc: 'Test mark on scrap of same material confirms power settings, depth, and resolution before production material is used.' },
      { n: '04', step: 'Production', desc: 'Full production run with first-piece inspection. Photo halftones reviewed for tonal accuracy.' },
      { n: '05', step: 'Finishing & Delivery', desc: 'Engraved surfaces cleaned of residue, optional finish applied where specified, and pieces packaged for delivery.' },
    ],
  },
  {
    slug: 'leather-engraving',
    whatItSolves: [
      'Leather goods from external engraving vendors come back with heat discoloration around the marked area from incorrect laser parameter settings.',
      'Branded leather patches and tags ordered as one-offs from traditional leather vendors require tooling investment and large minimum quantities.',
      'Golf bag tags, journal covers, and premium accessories need precision personalization that generic award engravers cannot execute correctly on leather.',
      'Creator merchandise programs need leather goods in small quantities with consistent quality — a combination most vendors will not accommodate.',
    ],
    deliveryFlow: [
      { n: '01', step: 'Material Assessment', desc: 'Leather type, finish, and hide condition assessed. Laser system selected — CO₂ for standard surface leather, UV for premium finished hides.' },
      { n: '02', step: 'Parameter Calibration', desc: 'Laser parameters calibrated to the specific hide — power, speed, and frequency tuned for correct mark depth without heat spread.' },
      { n: '03', step: 'Test Mark', desc: 'Test mark produced on a scrap of the same leather. Reviewed for tonal quality, edge definition, and absence of heat distortion.' },
      { n: '04', step: 'Production', desc: 'Full production run with cutting or engraving as specified. Registration fixtures used for batch personalization programs.' },
      { n: '05', step: 'Finishing & Delivery', desc: 'Finished pieces inspected for mark quality, cut edge condition, and any post-process finishing before delivery.' },
    ],
  },
  {
    slug: 'resin-3d-printing',
    whatItSolves: [
      'Service bureau resin printing has multi-day lead times that make design iteration slow and physical review of prototypes difficult.',
      'FDM layer lines are visible on finished display parts — acceptable for structural prototypes but not for client-facing presentation quality.',
      'Jewelry casting masters from external services are expensive, require minimum orders, and have quality inconsistencies between batches.',
      'Architectural model components require detail resolution and surface finish that FDM printing cannot deliver regardless of post-processing effort.',
    ],
    deliveryFlow: [
      { n: '01', step: 'Model Review', desc: 'STL or step files reviewed for printability — wall thickness, overhangs, minimum feature size, and support requirements.' },
      { n: '02', step: 'Resin Selection', desc: 'Resin formulation matched to application — standard for prototypes, ABS-like for durability, flexible, or castable for jewelry masters.' },
      { n: '03', step: 'Print & Support Removal', desc: 'Part printed, supports removed, and initial quality check for dimensional accuracy and surface condition.' },
      { n: '04', step: 'Post-Cure & Finishing', desc: 'UV post-cure for final mechanical properties. Hand sanding, priming, and painting for display-quality finish where required.' },
      { n: '05', step: 'Delivery', desc: 'Finished part inspected, dimensional accuracy confirmed against specification, and packaged for delivery.' },
    ],
  },
  {
    slug: 'fdm-3d-printing',
    whatItSolves: [
      'Custom enclosures, mounting fixtures, and structural hardware require expensive machining or injection tooling when they need to be produced in low quantities.',
      'External 3D printing services have unpredictable lead times and do not consult on material selection — parts come back in the wrong material for the application.',
      'Large display objects and architectural model bases exceed the build volume of most service bureau printers, requiring assembly from multiple pieces.',
      'Outdoor or UV-exposed installation hardware produced in standard PLA degrades quickly — UV-stable material options are not consistently available from external vendors.',
    ],
    deliveryFlow: [
      { n: '01', step: 'File Review', desc: 'Model reviewed for print orientation, wall thickness, overhang angles, and support strategy before slicing.' },
      { n: '02', step: 'Material Selection', desc: 'Material selected for the application — PLA or PETG for standard parts, ASA for outdoor, carbon fiber composite for structural, TPU for flexible.' },
      { n: '03', step: 'Print', desc: 'Part printed at specified layer height and infill density. In-progress monitoring for large or multi-day prints.' },
      { n: '04', step: 'Post-Processing', desc: 'Support removal, sanding, priming, and painting for display-quality parts. Inspection for dimensional accuracy.' },
      { n: '05', step: 'Assembly & Delivery', desc: 'Multi-piece assemblies joined and finished. Final parts inspected against specification and delivered.' },
    ],
  },
]

export function getServiceExtended(slug: string): ServiceExtended | undefined {
  return data.find(s => s.slug === slug)
}
