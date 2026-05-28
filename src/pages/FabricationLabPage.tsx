import { useState } from 'react'
import { Link } from 'react-router-dom'
import CTABand from '../components/sections/CTABand'
import BackgroundAtmosphere from '../components/decorative/BackgroundAtmosphere'
import WorkSample from '../components/proof/WorkSample'
import { ProcessBand, PROCESS_BANDS } from '../components/fabrication/ProcessBand'
import { RealFabricationEvidence } from '../components/fabrication/RealFabricationEvidence'
import { usePageMeta } from '../hooks/usePageMeta'
import { OperationalPhoto } from '../components/proof/PhotographyIntegrationFramework'

// ── Equipment Categories ──────────────────────────────────────────────────────

const categories = [
  {
    id: 'digital-print',
    label: 'Digital Print Systems',
    eyebrow: 'UV · DTG · Sublimation',
    accent: 'var(--color-hps-coral-warm)',
    accentHex: '#f87239',
    summary: 'Three distinct print processes covering rigid substrates, soft goods, and hard-surface panels — all in-house, no vendor lead times.',
    systems: [
      {
        name: 'UV Raised Texture Printing',
        spec: 'Up to 5mm dimensional relief',
        desc: 'UV ink cured in stacked passes to build tactile surface relief on rigid substrates — wood, acrylic, aluminum, foam board, PVC. Produces gloss, matte, spot-gloss, and textured contrast in a single production pass. Primary system for premium signage, dimensional plaques, and award faces.',
        tags: ['Rigid substrates', 'Dimensional finish', 'Indoor & outdoor', 'Award programs'],
      },
      {
        name: 'Direct-to-Garment (DTG)',
        spec: 'Cotton, cotton blends, natural fibers',
        desc: 'CMYK inkjet printing directly onto garment fabric for photographic-quality full-color designs. No screen separation, no plate setup, no minimum quantities. Pre-treat and cure process produces durable, wash-stable results on cotton and most natural fiber blends.',
        tags: ['No minimums', 'Photographic quality', 'Cotton & blends', 'Single units to runs'],
      },
      {
        name: 'Dye-Sublimation Printing',
        spec: 'Polyester fabrics & hard-surface panels',
        desc: 'Heat-transfer sublimation process where ink becomes permanently embedded in the material at a molecular level — no surface coating, no cracking, no fading, wash-permanent. Full all-over garment coverage and custom performance wear. Also used for ceramic tiles, metal panels, and rigid substrates with polyester coating.',
        tags: ['All-over print', 'Polyester fabrics', 'Hard panels', 'Performance wear'],
      },
    ],
  },
  {
    id: 'laser',
    label: 'Laser Systems',
    eyebrow: 'CO₂ · UV · Fiber · Diode',
    accent: 'var(--color-hps-teal-dark)',
    accentHex: '#0d9488',
    summary: 'Four laser platforms with distinct wavelengths, power ranges, and material affinities — covering the complete range of marking, engraving, cutting, and ablation applications.',
    systems: [
      {
        name: 'CO₂ Laser Engraving & Cutting',
        spec: 'Wood, acrylic, leather, fabric, rubber',
        desc: 'High-power CO₂ laser operating at 10,600nm wavelength — optimized for organic materials, acrylic, and soft substrates. Primary system for deep engraving on wood plaques, precision cutting of acrylic shapes, fabric cutting, and leather detailing. Produces clean, beveled edges and variable-depth engraving.',
        tags: ['Wood & organic', 'Acrylic cutting', 'Deep engraving', 'Leather & fabric'],
      },
      {
        name: 'UV Laser Systems',
        spec: 'Cold processing · precision marking · ablation',
        desc: 'Short-wavelength UV laser for cold-process marking on sensitive materials without thermal distortion or heat-affected zones. Ideal for precision surface ablation on coated parts, marking on electronics, glass etching, and fine-detail identification marks on materials where heat damage is unacceptable.',
        tags: ['Cold processing', 'Coated surfaces', 'Glass & ceramics', 'Fine detail marks'],
      },
      {
        name: 'Fiber Laser Systems',
        spec: 'Metals, anodized aluminum, coated surfaces',
        desc: '1,064nm fiber laser for permanent, high-contrast marking on metals and metal-coated surfaces. Anodized aluminum, stainless steel, titanium, carbide, chrome — fiber laser marks without consumables, without inks, with no maintenance between production runs. Used for serial marking, trophy engraving, industrial ID, and branded metal goods.',
        tags: ['Metals & alloys', 'Anodized aluminum', 'Permanent marking', 'Award engraving'],
      },
      {
        name: 'Diode Laser Systems',
        spec: 'Small batch · detail engraving · low per-unit cost',
        desc: 'High-resolution diode laser for production runs of engraved items where per-unit economics matter. Exceptional detail on wood, dark leather, cork, and dark-toned acrylic. Runs concurrent small-batch jobs efficiently. Best for keychains, ornaments, personalized items, and detail production without occupying the CO₂ system.',
        tags: ['Small batch', 'Production runs', 'Detail work', 'Wood & cork'],
      },
    ],
  },
  {
    id: 'textile',
    label: 'Textile & Garment Production',
    eyebrow: 'Embroidery · Vinyl',
    accent: 'var(--color-hps-gold-rich)',
    accentHex: '#b8882a',
    summary: 'Structured logo embroidery for uniforms and branded apparel, plus precision vinyl cutting for vehicle graphics, window lettering, and specialty surface applications.',
    systems: [
      {
        name: 'Commercial Embroidery Systems',
        spec: 'Multi-needle · apparel, accessories, uniforms',
        desc: 'Commercial multi-needle embroidery for structured, dimensional logo placement on polos, caps, jackets, bags, and uniforms. Designs digitized in-house for accurate thread color matching, proper underlay, and registration across production runs from single units to thousands. Available in flat, 3D foam-backed, and appliqué styles.',
        tags: ['Multi-needle', 'Digitized in-house', '3D foam option', 'Single unit to volume'],
      },
      {
        name: 'Vinyl Cutting & Application',
        spec: 'Vehicle wraps · window · wall · floor graphics',
        desc: 'Precision contour-cut vinyl for vehicle graphics and wraps, window lettering, wall decals, floor graphics, and cut-vinyl signage. Works with standard, reflective, chrome, brushed-metal, matte, and specialty vinyl including heat-transfer vinyl for garment applications.',
        tags: ['Vehicle graphics', 'Contour cutting', 'Reflective & chrome', 'Floor graphics'],
      },
    ],
  },
  {
    id: 'three-d',
    label: '3D Production Systems',
    eyebrow: 'FDM · Resin',
    accent: 'var(--color-hps-ghost)',
    accentHex: '#4c6a80',
    summary: 'FDM for structural components and large-format builds. Resin for high-detail, display-quality models and casting work — from engineering prototypes to architectural presentation pieces.',
    systems: [
      {
        name: 'FDM 3D Printing',
        spec: 'Structural · prototyping · large format · multiple materials',
        desc: 'Fused deposition modeling for functional parts, structural components, enclosures, mounts, tooling fixtures, and large display objects. Build volume to 300mm × 300mm × 400mm. Materials include PLA, PETG, ABS, ASA (UV-stable outdoor), TPU flexible, carbon fiber composite, and specialty filaments. Post-processing with sanding, priming, and painting available.',
        tags: ['Structural parts', 'Multiple materials', 'Large volume', 'Carbon fiber'],
      },
      {
        name: 'Resin 3D Printing',
        spec: 'High-resolution · display quality · 20 micron layers',
        desc: 'MSLA resin printing for precision detail work where layer resolution and surface smoothness matter. Architectural models, jewelry and ring masters, dental models, display prototypes, and fine-detail components. Layer resolution to 20 microns. Standard, ABS-like, flexible, and castable resins. Post-cure and optional hand-finishing for production-ready surfaces.',
        tags: ['20 micron layers', 'Casting resins', 'Architectural models', 'Jewelry masters'],
      },
    ],
  },
  {
    id: 'connected',
    label: 'Connected & Dimensional Systems',
    eyebrow: 'QR Surfaces · Connected Plaques · Sponsor Systems',
    accent: 'var(--color-hps-green)',
    accentHex: '#478c5c',
    summary: 'Physical production with a live digital backbone. Fabricated surfaces carry dynamic QR codes, campaign visuals, and cinematic brand assets — all managed and updated without touching the physical piece.',
    systems: [
      {
        name: 'Dimensional Plaques & Signage',
        spec: 'UV + laser combined · interior & exterior',
        desc: 'Premium plaques combining UV raised texture printing with laser-engraved detail — tactile surfaces, high contrast, and permanent identification on a single piece. Used for office identification, award programs, recognition walls, campus wayfinding, and lobby feature pieces.',
        tags: ['UV + laser combined', 'Interior & exterior', 'Award programs', 'Wayfinding'],
      },
      {
        name: 'QR-Connected Physical Surfaces',
        spec: 'Dynamic QR · any substrate · update without reprint',
        desc: 'Any fabricated surface — sign, plaque, card, packaging — can carry a dynamic QR code managed through HPS QR Code. The destination is a live URL we control on your behalf. Update the menu, change the sponsor content, or redirect to a new event page without touching the physical piece.',
        tags: ['Dynamic redirect', 'Update without reprint', 'Scan analytics', 'Any substrate'],
      },
      {
        name: 'QR-Linked Plaque Systems',
        spec: 'Scan-to-content · multimedia · hospitality & golf',
        desc: 'Dimensional plaques with embedded QR codes linked to multimedia content: video introductions, award histories, product specifications, or live web destinations. Used in hospitality lobbies, golf courses, corporate environments, and museum and exhibit installations.',
        tags: ['Video & multimedia', 'Golf & hospitality', 'Corporate lobbies', 'Exhibit systems'],
      },
      {
        name: 'Sponsor Surface Systems',
        spec: 'Golf & event venues · season reprints · scan analytics',
        desc: 'Comprehensive production programs for sponsor sign systems at golf courses, event venues, and sports facilities. UV-printed hole sponsor panels, dimensional recognition plaques, cart signage, and QR-tracked exposure measurement. Season-over-season reprint workflow with in-house control over timeline.',
        tags: ['Golf courses', 'Season reprints', 'Sponsor analytics', 'QR exposure tracking'],
      },
    ],
  },
]

// ── Production Pipeline ───────────────────────────────────────────────────────

const pipeline = [
  { n: '01', label: 'Design & Art Prep',   desc: 'Brand alignment, campaign asset prep, material-appropriate file prep, color profiling, and pre-production verification before any machine runs.' },
  { n: '02', label: 'Material Selection',  desc: 'Substrate and consumable selection matched to application, finish spec, indoor vs outdoor requirement, and production method.' },
  { n: '03', label: 'Production',          desc: 'In-house fabrication on the appropriate system. No vendor outsourcing. Timeline is ours to control.' },
  { n: '04', label: 'QR Integration',      desc: 'For connected surfaces: QR codes configured, tested against live destination, and scan-verified before leaving the lab.' },
  { n: '05', label: 'Quality Review',      desc: 'Physical inspection against spec. Dimensional accuracy, color fidelity, and edge quality checked against the original proof.' },
  { n: '06', label: 'Delivery or Install', desc: 'Packaged for pickup or shipping, or installed on-site with placement documentation for every system deployment.' },
]

// ── Category Section ──────────────────────────────────────────────────────────

function CategorySection({ cat, index }: { cat: typeof categories[number]; index: number }) {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <div
      data-reveal
      data-reveal-delay={String((index % 2) * 60)}
      className="rounded-sm overflow-hidden"
      style={{ border: '1px solid rgba(200,180,154,0.40)', background: 'var(--color-hps-cream)' }}
    >
      {/* Category header */}
      <div
        className="px-7 py-6 border-b"
        style={{ borderColor: 'rgba(200,180,154,0.40)', borderLeft: `4px solid ${cat.accent}` }}
      >
        <p className="font-mono uppercase mb-1" style={{ fontSize: '0.55rem', letterSpacing: '0.2em', color: cat.accent }}>
          {cat.eyebrow}
        </p>
        <h3 className="font-display mb-2" style={{ fontSize: '1.375rem', color: 'var(--color-hps-ink)' }}>
          {cat.label}
        </h3>
        <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-hps-smoke)' }}>
          {cat.summary}
        </p>
      </div>

      {/* Systems list */}
      <div className="flex flex-col">
        {cat.systems.map((sys, i) => (
          <div
            key={sys.name}
            className="px-7 py-5 cursor-pointer"
            style={{ borderBottom: i < cat.systems.length - 1 ? '1px solid rgba(200,180,154,0.30)' : 'none' }}
            onClick={() => setExpanded(expanded === i ? null : i)}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-baseline gap-3 mb-1">
                  <h4 className="font-body font-medium" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-ink)' }}>
                    {sys.name}
                  </h4>
                  <span className="font-mono" style={{ fontSize: '0.58rem', letterSpacing: '0.1em', color: cat.accent, opacity: 0.75 }}>
                    {sys.spec}
                  </span>
                </div>
                {expanded === i && (
                  <>
                    <p className="font-body text-sm leading-relaxed mt-2 mb-3" style={{ color: 'var(--color-hps-smoke)' }}>
                      {sys.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {sys.tags.map(tag => (
                        <span
                          key={tag}
                          className="font-mono"
                          style={{
                            fontSize: '0.55rem',
                            letterSpacing: '0.12em',
                            padding: '0.2rem 0.6rem',
                            background: `${cat.accentHex}14`,
                            color: cat.accent,
                            borderRadius: '2px',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>
              <span
                className="font-mono shrink-0 transition-transform duration-200"
                style={{
                  fontSize: '0.7rem',
                  color: cat.accent,
                  opacity: 0.65,
                  transform: expanded === i ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
                aria-hidden="true"
              >
                ↓
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function FabricationLabPage() {
  usePageMeta({
    title: 'Fabrication Lab',
    description: '19 in-house fabrication capabilities: UV printing, laser engraving, DTG apparel, embroidery, sublimation, 3D printing, and QR-connected surfaces — Leesburg, Florida.',
  })
  return (
    <>
      <div style={{ position: 'relative', isolation: 'isolate' }}>
      <BackgroundAtmosphere mood="citrus" intensity="whisper" density="sparse" />
      {/* ── Header ──────────────────────────────────────────────────── */}
      <section
        className="pt-32 lg:pt-40 pb-16 lg:pb-20"
        style={{ background: 'var(--color-hps-cream)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="w-8 h-px mb-6" style={{ background: 'var(--color-hps-coral-warm)' }} aria-hidden="true" />
            <p className="font-mono uppercase mb-4" style={{ fontSize: '0.65rem', letterSpacing: '0.22em', color: 'var(--color-hps-coral-warm)' }}>
              In-House Manufacturing
            </p>
            <h1
              data-reveal
              className="font-display mb-6"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', color: 'var(--color-hps-ink)', lineHeight: 1.05 }}
            >
              Fabrication Lab
            </h1>
            <p
              data-reveal
              data-reveal-delay="80"
              className="font-body leading-relaxed mb-3"
              style={{ fontSize: '1.125rem', color: 'var(--color-hps-smoke)', maxWidth: '38rem' }}
            >
              19 production capabilities. All in-house, Leesburg, Florida.
            </p>
            <p
              data-reveal
              data-reveal-delay="160"
              className="font-body leading-relaxed"
              style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)', maxWidth: '38rem', opacity: 0.85 }}
            >
              UV printing, laser systems, garment production, 3D printing, campaign visuals, and QR-connected surfaces — designed and produced in Leesburg, Florida. No vendor handoffs, no outsourced production, no translation loss between the digital file and the finished piece.
            </p>
          </div>
        </div>
      </section>

      {/* ── Equipment Categories ────────────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-parchment)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-10">
            <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-coral-warm)' }}>
              Five production categories
            </p>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
              Equipment & capabilities
            </h2>
            <p className="font-body mt-3 max-w-lg" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)', lineHeight: 1.65 }}>
              Expand each category to view system specifications. Every system in the lab is operated in-house — no subcontracted production.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            {categories.map((cat, i) => (
              <CategorySection key={cat.id} cat={cat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Stations intro ──────────────────────────────────── */}
      <section
        className="pt-14 pb-8 lg:pt-20 lg:pb-10"
        style={{ background: 'var(--color-hps-cream)', borderBottom: '1px solid rgba(200,180,154,0.35)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal>
            <p
              className="font-mono uppercase mb-3"
              style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-coral-warm)' }}
            >
              Seven production stations
            </p>
            <h2
              className="font-display mb-4"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}
            >
              How each process runs.
            </h2>
            <p
              className="font-body max-w-2xl"
              style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)', lineHeight: 1.65 }}
            >
              Real operational sequences from material intake through quality review and deployment. Each station runs on its own workflow, material system, and production logic.
            </p>
          </div>
        </div>
      </section>

      {/* ── Process Stations ─────────────────────────────────────────── */}
      {PROCESS_BANDS.map(band => (
        <ProcessBand key={band.id} band={band} />
      ))}

      {/* ── Real Fabrication Evidence ───────────────────────────────── */}
      <RealFabricationEvidence />

      {/* ── Production Pipeline ─────────────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-12">
            <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-coral-warm)' }}>
              How production works
            </p>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
              From file to finished piece
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
            {pipeline.map((step, i) => (
              <div
                key={step.n}
                data-reveal
                data-reveal-delay={String((i % 3) * 80)}
                className="py-8 lg:py-10"
                style={{
                  paddingLeft: i % 3 === 0 ? '0' : '2rem',
                  paddingRight: (i + 1) % 3 === 0 ? '0' : '2rem',
                  borderLeft: i % 3 !== 0 ? '1px solid rgba(200,180,154,0.40)' : 'none',
                  borderTop: i >= 3 ? '1px solid rgba(200,180,154,0.40)' : 'none',
                }}
              >
                <span className="font-mono block mb-4" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-coral-warm)', opacity: 0.80 }}>
                  {step.n}
                </span>
                <div className="w-8 h-px mb-4" style={{ background: 'var(--color-hps-coral-warm)' }} aria-hidden="true" />
                <h3 className="font-display mb-2" style={{ fontSize: '1.25rem', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
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

      {/* ── How a real job runs ─────────────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-parchment)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-12">
            <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-coral-warm)' }}>
              Real production scenarios
            </p>
            <h2 className="font-display mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
              How a job moves through the lab
            </h2>
            <p className="font-body max-w-lg" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)', lineHeight: 1.65 }}>
              Three common production types. Each shows the actual workflow from brief to delivery — the decisions that get made, the systems that run, and what makes in-house control different.
            </p>

            <div className="mt-10">
              <OperationalPhoto
                src="/images/golf-monument-measured.jpg"
                alt="On-site field measurement of golf monument for custom plaque production spec"
                environment="fabrication"
                aspect="16/9"
                accentColor="var(--color-hps-coral-warm)"
                caption="Pre-production intake · Monument dimensions recorded on-site · Custom plaque spec confirmed before fabrication begins"
                annotations={[
                  { x: 38, y: 42, label: 'Monument surface', detail: 'Dimensions recorded' },
                  { x: 68, y: 30, label: 'Fit confirmation', detail: 'Production spec locked' },
                ]}
              />
            </div>
          </div>

          <div className="flex flex-col gap-0">
            {[
              {
                title: 'Golf course sponsor signage program',
                eyebrow: 'UV print + QR integration · season-cycle production',
                narrative: [
                  'A new sponsor agreement arrives in January. The sales team commits 18 hole signs, 4 cart panel positions, and a recognition plaque near the pro shop entrance — all due before the season opens.',
                  'We receive the sponsor asset package: logos, brand guidelines, and placement specs for each position. Art prep normalizes the files across the UV print and laser engraving workflows — different systems need different color profiles and vector treatments.',
                  'Hole signs are UV printed on 3mm PVC panels with raised-texture logo treatment. Each panel carries a persistent QR code configured through HPS QR Code — pointing to the sponsor\'s campaign destination for the season. Cart panels are produced the same day on rigid substrate stock already staged in the lab.',
                  'The recognition plaque goes through a parallel track: UV texture print on the face combined with fiber laser engraving for the sponsor name. The combination produces a surface that reads as premium at any distance.',
                  'Before delivery, each QR code is scan-tested against its live destination. Season-over-season, only the print changes — the QR destination is updated in the dashboard without touching the physical piece. When the sponsor renews, we pull the previous panel specs and run reprints in the same session.',
                ],
                accent: 'var(--color-hps-green)',
              },
              {
                title: 'Apparel program for a restaurant group',
                eyebrow: 'DTG + embroidery · mixed-method production',
                narrative: [
                  'A hospitality group orders staff uniforms across three locations: polos with embroidered chest logo, T-shirts with full-back DTG print, and aprons with a simple woven logo.',
                  'Embroidery requires digitization — converting the vector logo into a thread-path program that handles underlay, pull compensation, and color sequence. That file becomes the production master for the run and every future repeat order.',
                  'Polos are staged by size and shirt count. The embroidery system runs the chest position on each polo in sequence. Registration is checked at the first piece before the full run. Thread colors are matched to the brand palette using physical swatch confirmation, not screen approximation.',
                  'The T-shirts go through the DTG workflow: pre-treat application calibrated to the fabric blend, print pass with full-color back design at full resolution, then heat cure. No screens, no minimums, no setup charge per color.',
                  'Aprons are run through the embroidery system with the woven logo. The woven look on apron fabric requires a different tension and underlay approach than the polo — same system, different parameters.',
                  'Final pieces are reviewed for color fidelity, registration, and embroidery density before packaging. The digitized files are stored permanently so repeat orders don\'t require new art prep.',
                ],
                accent: 'var(--color-hps-gold-rich)',
              },
              {
                title: 'Architectural model for a development presentation',
                eyebrow: 'Resin + FDM · mixed-material build',
                narrative: [
                  'A developer needs a scale presentation model of a mixed-use property for a board meeting. The site spans approximately 800 square meters — too large for resin in a single build, but too detailed for FDM alone.',
                  'The structural base and building volumes go to FDM: PETG for the main building forms, white PLA for massing elements, printed at 0.2mm layer height and lightly sanded. This gives accurate scale volume with clean geometric surfaces.',
                  'The detail elements — site furniture, landscape features, balcony railings, entrance canopies — go to the resin printer at 20 micron resolution. These pieces assemble onto the FDM base and carry the presentation-quality detail that makes the model legible at close inspection.',
                  'Post-processing: FDM bodies are primed and spray-finished in neutral white. Resin components are UV-cured, trimmed, and attached to the base assembly with appropriate adhesive for the material combination.',
                  'The assembled model ships in a custom foam case sized to the footprint. The client presents it two days later. No outsourcing, no vendor lead time, no minimum order.',
                ],
                accent: 'var(--color-hps-ghost)',
              },
            ].map((scenario, i, arr) => (
              <div
                key={scenario.title}
                data-reveal
                data-reveal-delay={String((i % 2) * 60)}
                className="py-10"
                style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(200,180,154,0.40)' : 'none' }}
              >
                <p
                  className="font-mono uppercase mb-2"
                  style={{ fontSize: '0.58rem', letterSpacing: '0.18em', color: scenario.accent }}
                >
                  {scenario.eyebrow}
                </p>
                <h3
                  className="font-display mb-6"
                  style={{ fontSize: '1.375rem', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}
                >
                  {scenario.title}
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-6 lg:gap-16">
                  <div
                    className="w-1 lg:w-full rounded-full lg:rounded-none"
                    style={{ background: scenario.accent, height: '2px', alignSelf: 'start', marginTop: '0.6rem' }}
                    aria-hidden="true"
                  />
                  <div className="flex flex-col gap-4">
                    {scenario.narrative.map((para, pi) => (
                      <p
                        key={pi}
                        className="font-body leading-relaxed"
                        style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industry Ecosystems ─────────────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-parchment)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-14">
            <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-coral-warm)' }}>
              Production by vertical
            </p>
            <h2 className="font-display mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.08 }}>
              What gets made, and for whom.
            </h2>
            <p className="font-body max-w-lg" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)', lineHeight: 1.65 }}>
              The same fabrication infrastructure serves very different industries. This is what that looks like in practice.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                industry: 'Golf & Recreation',
                accent: 'var(--color-hps-green)',
                accentHex: '#478c5c',
                intro: "Golf courses are one of the densest fabrication environments in operation. Every hole, every tee box, every cart path position, and every inch of the pro shop is an opportunity for branded infrastructure that also carries operational information.",
                items: [
                  { label: 'Hole Sponsor Panels', note: 'UV print on aluminum composite with dimensional logo and embedded QR code for campaign analytics' },
                  { label: 'Cart Signage Programs', note: 'Standardized cart panel production across the fleet — consistent size, consistent production quality' },
                  { label: 'Hole-in-One Award Plaques', note: 'Dimensional UV print + fiber laser engraving with personalized player data' },
                  { label: 'Donor Recognition Walls', note: 'Multi-panel coordinated recognition systems for capital campaigns and course improvements' },
                  { label: 'Hole Identification Systems', note: 'Par, yardage, and tee identification plaques with sponsor integration' },
                  { label: 'Tournament Signage Programs', note: 'Full tournament production: leaderboards, event banners, sponsor surfaces, step-and-repeat' },
                  { label: 'Golf Bag Tags', note: 'Laser-engraved leather tags with player personalization for pro shop retail and gift programs' },
                  { label: 'QR-Connected Course Surfaces', note: 'Scan-to-content plaques linking to course history, membership info, and sponsor destinations' },
                ],
                cta: { label: 'HPS Golf Platform', href: '/golf' },
              },
              {
                industry: 'Hospitality & Food Service',
                accent: 'var(--color-hps-gold-rich)',
                accentHex: '#b8882a',
                intro: "Restaurants, hotels, food trucks, and bars produce a surprising volume of fabricated material. Staff uniforms, menus, signs, promotional surfaces, and environmental graphics all need to look like one brand — and they rarely do when ordered from different vendors.",
                items: [
                  { label: 'Staff Uniform Programs', note: 'Embroidered polos, DTG event shirts, sublimated performance apparel — all from one brand file' },
                  { label: 'Interior Menu Boards', note: 'UV print on rigid substrate with QR code integration for digital menu linking' },
                  { label: 'Table Surface Elements', note: 'Coasters, table tents, QR holders — sublimated or UV printed in branded designs' },
                  { label: 'Entrance & Identity Signage', note: 'Dimensional plaques for primary identification and brand statement at entry points' },
                  { label: 'Branded Coasters & Hardgoods', note: 'Sublimated coasters, mugs, and promotional items for retail and guest gifting programs' },
                  { label: 'Environmental Feature Walls', note: 'Large-format vinyl and print systems for branded restaurant interior environments' },
                  { label: 'Promotional Surfaces', note: 'Seasonal vinyl graphics, floor markers, and event-specific materials on operational timeline' },
                  { label: 'QR Menu Infrastructure', note: 'Physical QR surfaces for digital menu linking with dynamic destination management' },
                ],
                cta: { label: 'Hospitality Ecosystem', href: '/hospitality' },
              },
              {
                industry: 'Creator & Media',
                accent: 'var(--color-hps-teal)',
                accentHex: '#14b8a6',
                intro: "Creators, artists, and media brands are running merchandise programs, promotional campaigns, and branded environments that increasingly need physical production infrastructure — not just digital assets.",
                items: [
                  { label: 'Creator Merchandise Programs', note: 'DTG and sublimation merch from single units to production runs — no minimums, event-ready timelines' },
                  { label: 'Artist Promotional Apparel', note: 'Full-color DTG for album art, tour graphics, and fan merchandise at any quantity' },
                  { label: 'Branded Accessories', note: 'Laser-engraved leather patches, wood items, and custom goods for creator storefronts' },
                  { label: 'Event & Show Signage', note: 'Pop-up event banners, vinyl backdrops, and promotional surface systems for live and in-person events' },
                  { label: 'Personalization Products', note: 'Custom engraved items, personalized merch, and branded gift programs for audience engagement' },
                  { label: 'Media Environment Graphics', note: 'Branded wall systems, vinyl surfaces, and environmental graphics for studios and content spaces' },
                  { label: 'Packaging & Label Production', note: 'Vinyl labels, packaging graphics, and product branding for creator product lines' },
                  { label: 'QR-Connected Merch', note: 'Embedded QR codes in merchandise linking to streaming, membership, or exclusive content' },
                ],
                cta: { label: 'HPS Media Ecosystem', href: '/media' },
              },
              {
                industry: 'Healthcare & Accessibility',
                accent: 'var(--color-hps-teal-dark)',
                accentHex: '#0d9488',
                intro: "Healthcare facilities, accessible public environments, and compliance-driven organizations require signage and communication systems held to higher standards than standard commercial production. ADA compliance, tactile elements, and accessible design are production requirements — not options.",
                items: [
                  { label: 'ADA-Compliant Room Identification', note: 'Tactile Braille signage, raised characters, and compliant mounting specifications for room and wayfinding signs' },
                  { label: 'Accessible Wayfinding Systems', note: 'Interior directional systems designed to WCAG and ADA standards for visual and tactile navigation' },
                  { label: 'Compliant Communication Surfaces', note: 'High-contrast signage with accessible typography, color ratios, and information hierarchy for all users' },
                  { label: 'Environmental Graphics for Healthcare', note: 'Calming, brand-consistent interior environments that do not create sensory barriers for patients and visitors' },
                  { label: 'Safety & Operational Signage', note: 'Floor graphics, directional markers, and safety communication elements for healthcare facility operations' },
                  { label: 'QR-Accessible Information Systems', note: 'QR-connected surfaces linking to accessible digital content, facility guides, and multilingual resources' },
                  { label: 'Staff Identification & Apparel', note: 'Embroidered and DTG staff identification apparel designed for recognition and professional presentation' },
                  { label: 'Multi-Modal Communication', note: 'Signage systems that communicate through visual, tactile, and digital channels simultaneously' },
                ],
                cta: { label: 'HPS Accessibility', href: 'https://hpsaccessibility.com' },
              },
            ].map((sector, i) => (
              <div
                key={sector.industry}
                data-reveal
                data-reveal-delay={String((i % 2) * 80)}
                className="rounded-sm p-8 lg:p-10"
                style={{
                  background: 'var(--color-hps-cream)',
                  border: '1px solid rgba(200,180,154,0.40)',
                  borderTop: `3px solid ${sector.accent}`,
                }}
              >
                <p className="font-mono uppercase mb-3" style={{ fontSize: '0.58rem', letterSpacing: '0.2em', color: sector.accent }}>
                  {sector.industry}
                </p>
                <p className="font-body leading-relaxed mb-7" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}>
                  {sector.intro}
                </p>
                <ul className="flex flex-col gap-3 mb-7">
                  {sector.items.map(item => (
                    <li key={item.label} className="flex items-start gap-3">
                      <span className="shrink-0 w-1.5 h-1.5 rounded-full mt-[0.45rem]" style={{ background: sector.accent }} aria-hidden="true" />
                      <div>
                        <span className="font-body font-medium" style={{ fontSize: '0.875rem', color: 'var(--color-hps-ink)' }}>{item.label}</span>
                        <span className="font-body" style={{ fontSize: '0.8125rem', color: 'var(--color-hps-smoke)', opacity: 0.75 }}> — {item.note}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                {sector.cta.href.startsWith('http') ? (
                  <a
                    href={sector.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono uppercase transition-colors duration-200"
                    style={{ fontSize: '0.65rem', letterSpacing: '0.18em', color: sector.accent, textDecoration: 'none' }}
                  >
                    {sector.cta.label} →
                  </a>
                ) : (
                  <Link
                    to={sector.cta.href}
                    className="font-mono uppercase transition-colors duration-200"
                    style={{ fontSize: '0.65rem', letterSpacing: '0.18em', color: sector.accent, textDecoration: 'none' }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.70')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                  >
                    {sector.cta.label} →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Material & Production Decision Storytelling ──────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
            <div data-reveal>
              <p className="font-mono uppercase mb-4" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-coral-warm)' }}>
                How production decisions get made
              </p>
              <h2 className="font-display mb-5" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.08 }}>
                Material selection is not a menu. It is a production decision.
              </h2>
            </div>
            <div data-reveal data-reveal-delay="80">
              <div className="flex flex-col gap-6">
                {[
                  {
                    q: 'The substrate determines everything.',
                    a: "Before any machine runs, we ask: where does this live? Outdoor UV-exposed environments rule out certain substrates entirely. Food service environments require surfaces that withstand sanitizer chemistry. Golf course installations need UV resistance and mounting hardware matched to post or panel. These decisions happen before art prep begins — not as an afterthought when production is already in motion.",
                  },
                  {
                    q: 'The production method follows the material, not the other way around.',
                    a: "A logo on leather requires a fundamentally different approach than the same logo on aluminum. One uses a CO₂ laser tuned to the exact hide thickness. The other uses a fiber laser operating at a wavelength that metal absorbs efficiently. A shop with one laser system applies one solution regardless of the material. We select the system that is correct for the specific combination of material, application, and finish requirement.",
                  },
                  {
                    q: 'QR integration is a production decision, not a design decision.',
                    a: "When a QR code is embedded in a fabricated surface, it has to be readable at the right distance and size from the substrate it lives on. A UV-printed QR code on a PVC panel, a fiber-laser-marked code on anodized aluminum, and a CO₂-engraved code on wood all have different minimum module sizes for reliable scanning. We configure codes at production size, test them against the substrate before delivery, and connect the destination to HPS QR Code before the physical piece leaves the lab.",
                  },
                ].map((point, i) => (
                  <div
                    key={i}
                    className="py-6"
                    style={{ borderTop: i > 0 ? '1px solid rgba(200,180,154,0.40)' : 'none' }}
                  >
                    <p className="font-display mb-3" style={{ fontSize: '1.0625rem', color: 'var(--color-hps-ink)', lineHeight: 1.15 }}>
                      {point.q}
                    </p>
                    <p className="font-body leading-relaxed" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}>
                      {point.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Connected Systems ────────────────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-parchment)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-12">
            <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-green)' }}>
              Fabrication + digital
            </p>
            <h2 className="font-display mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.08 }}>
              What the physical connects to.
            </h2>
            <p className="font-body max-w-lg" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)', lineHeight: 1.65 }}>
              Every fabricated piece exists inside a larger digital ecosystem. The physical surface is the entry point — what it connects to is what makes it infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                name: 'HPS Golf',
                href: '/golf',
                rel: 'Sponsor systems, course plaques, and QR-connected golf surfaces managed from one operational platform.',
                accent: 'var(--color-hps-green)',
              },
              {
                name: 'HPS QR Code',
                href: '/platforms/hps-qr-code',
                rel: 'Dynamic QR destination management behind every QR-embedded physical surface we produce.',
                accent: 'var(--color-hps-gold)',
              },
              {
                name: 'Hospitality & QR',
                href: '/hospitality',
                rel: 'Restaurant signage, table QR systems, and hospitality branded environments in one operational system.',
                accent: 'var(--color-hps-gold-rich)',
              },
              {
                name: 'HPS QR Menu',
                href: '/platforms/hps-qr-menu',
                rel: 'Digital menu destination for every table QR surface and menu board QR code we produce in-house.',
                accent: 'var(--color-hps-gold-rich)',
              },
              {
                name: 'HPS Accessibility',
                href: 'https://hpsaccessibility.com',
                rel: 'ADA signage, accessible wayfinding, and compliant communication systems backed by WCAG expertise.',
                accent: 'var(--color-hps-teal-dark)',
                external: true,
              },
              {
                name: 'HPS Media',
                href: '/media',
                rel: 'Creator merchandise, artist promotional systems, and branded apparel connected to the media ecosystem.',
                accent: 'var(--color-hps-teal)',
              },
            ].map((link, i) => (
              link.external ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-reveal
                  data-reveal-delay={String((i % 3) * 60)}
                  className="group flex flex-col gap-3 p-6 rounded-sm transition-all duration-200"
                  style={{
                    background: 'var(--color-hps-cream)',
                    border: '1px solid rgba(200,180,154,0.40)',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = link.accent
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(12,20,32,0.07)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(200,180,154,0.40)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-display" style={{ fontSize: '1rem', color: 'var(--color-hps-ink)' }}>{link.name}</p>
                    <span className="font-mono transition-transform duration-200 group-hover:translate-x-1" style={{ fontSize: '0.7rem', color: link.accent }} aria-hidden="true">→</span>
                  </div>
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-hps-smoke)' }}>{link.rel}</p>
                  <div className="w-5 h-px mt-auto" style={{ background: link.accent }} aria-hidden="true" />
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  data-reveal
                  data-reveal-delay={String((i % 3) * 60)}
                  className="group flex flex-col gap-3 p-6 rounded-sm transition-all duration-200"
                  style={{
                    background: 'var(--color-hps-cream)',
                    border: '1px solid rgba(200,180,154,0.40)',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = link.accent
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(12,20,32,0.07)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(200,180,154,0.40)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-display" style={{ fontSize: '1rem', color: 'var(--color-hps-ink)' }}>{link.name}</p>
                    <span className="font-mono transition-transform duration-200 group-hover:translate-x-1" style={{ fontSize: '0.7rem', color: link.accent }} aria-hidden="true">→</span>
                  </div>
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-hps-smoke)' }}>{link.rel}</p>
                  <div className="w-5 h-px mt-auto" style={{ background: link.accent }} aria-hidden="true" />
                </Link>
              )
            ))}
          </div>
        </div>
      </section>

      {/* ── Future Production Gallery ────────────────────────────────── */}
      {/* ── Production Environments ──────────────────────────────── */}
      <section className="py-16 lg:py-20" style={{ background: 'var(--color-hps-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-10">
            <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-coral-warm)' }}>
              Production environments
            </p>
            <h2 className="font-display mb-3" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
              In-house. Real equipment. No vendor handoffs.
            </h2>
            <p className="font-body max-w-xl" style={{ fontSize: '0.875rem', color: 'var(--color-hps-smoke)', lineHeight: 1.65, opacity: 0.85 }}>
              All fabrication is produced in-house in Leesburg, FL. Production photography documents work as it ships — these slots reflect the actual output categories and substrates in daily production.
            </p>
          </div>

          {/* UV & Digital Print */}
          <div data-reveal className="mb-3 pb-3 border-b" style={{ borderColor: 'rgba(200,180,154,0.35)' }}>
            <p className="font-mono uppercase" style={{ fontSize: '0.5rem', letterSpacing: '0.18em', color: 'var(--color-hps-coral-warm)' }}>
              UV Print · DTG · Sublimation
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
            <WorkSample
              caption="UV raised texture — dimensional surface detail on rigid substrate"
              equipment="UV Raised Texture System"
              category="UV Print"
              accentColor="var(--color-hps-coral-warm)"
              surface="matte"
              revealDelay={0}
            />
            <WorkSample
              caption="Dimensional sponsor panel — UV print with spot-gloss logo layer"
              equipment="UV Raised Texture System"
              category="UV Print"
              accentColor="var(--color-hps-coral-warm)"
              surface="matte"
              revealDelay={50}
            />
            <WorkSample
              caption="DTG production run — multi-garment batch on cotton polo"
              equipment="Direct-to-Garment System"
              category="DTG"
              accentColor="var(--color-hps-coral-warm)"
              surface="matte"
              revealDelay={100}
            />
            <WorkSample
              caption="Sublimation hard panel — all-over coverage, polyester substrate"
              equipment="Dye-Sublimation System"
              category="Sublimation"
              accentColor="var(--color-hps-coral-warm)"
              surface="matte"
              revealDelay={150}
            />
          </div>

          {/* Laser Systems */}
          <div data-reveal className="mb-3 pb-3 border-b" style={{ borderColor: 'rgba(200,180,154,0.35)' }}>
            <p className="font-mono uppercase" style={{ fontSize: '0.5rem', letterSpacing: '0.18em', color: 'var(--color-hps-teal-dark)' }}>
              CO₂ · Fiber · UV · Diode Laser
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
            <WorkSample
              caption="CO₂ wood engraving — fine halftone on natural grain substrate"
              equipment="CO₂ Laser System"
              category="Laser · CO₂"
              accentColor="var(--color-hps-teal-dark)"
              surface="wood"
              revealDelay={0}
            />
            <WorkSample
              caption="Fiber laser on anodized aluminum — permanent marking, award plaque face"
              equipment="Fiber Laser System"
              category="Laser · Fiber"
              accentColor="var(--color-hps-teal-dark)"
              surface="brushedMetal"
              revealDelay={50}
            />
            <WorkSample
              caption="Reverse-engraved acrylic — CO₂ cut display trophy with backlit detail"
              equipment="CO₂ Laser System"
              category="Laser · Acrylic"
              accentColor="var(--color-hps-teal-dark)"
              surface="acrylic"
              revealDelay={100}
            />
            <WorkSample
              caption="UV laser leather detail — cold-process marking, premium hide"
              equipment="UV Laser System"
              category="Laser · UV"
              accentColor="var(--color-hps-teal-dark)"
              surface="wood"
              revealDelay={150}
            />
          </div>

          {/* Textile & QR */}
          <div data-reveal className="mb-3 pb-3 border-b" style={{ borderColor: 'rgba(200,180,154,0.35)' }}>
            <p className="font-mono uppercase" style={{ fontSize: '0.5rem', letterSpacing: '0.18em', color: 'var(--color-hps-gold-rich)' }}>
              Embroidery · Vinyl · QR Systems
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <WorkSample
              caption="3D foam-backed embroidery — structured logo on uniform polo"
              equipment="Commercial Embroidery System"
              category="Embroidery"
              accentColor="var(--color-hps-gold-rich)"
              surface="matte"
              revealDelay={0}
            />
            <WorkSample
              caption="Contour-cut vinyl application — vehicle fleet graphic, reflective finish"
              equipment="Vinyl Cutting System"
              category="Vinyl"
              accentColor="var(--color-hps-gold-rich)"
              surface="brushedMetal"
              revealDelay={50}
            />
            <WorkSample
              caption="QR-connected golf plaque — UV print, fiber laser, dynamic QR embedded"
              equipment="Connected Surface System"
              category="QR · Connected"
              accentColor="var(--color-hps-green)"
              surface="matte"
              revealDelay={100}
            />
            <WorkSample
              caption="Hospitality QR panel — table surface with live menu destination"
              equipment="Connected Surface System"
              category="QR · Hospitality"
              accentColor="var(--color-hps-green)"
              surface="blueprint"
              revealDelay={150}
            />
          </div>
        </div>
      </section>

      {/* ── Physical meets digital ──────────────────────────────────── */}
      <section className="py-16 lg:py-20" style={{ background: 'var(--color-hps-parchment)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div data-reveal>
              <p className="font-mono uppercase mb-4" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-green)' }}>
                Built and produced in Central Florida
              </p>
              <h2 className="font-display mb-5" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.08 }}>
                Where software meets physical production.
              </h2>
              <p className="font-body leading-relaxed mb-4" style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)' }}>
                We write the code, design the identity, and manufacture the final product. Zero vendor handoffs means your digital QR link and your printed plaque are built by the same people, tested together, and delivered as a complete system.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)' }}>
                Update a sponsor, change a menu, redirect a QR code — the physical surface doesn't change, but everything it points to does. That's the architecture other fabricators can't offer.
              </p>
            </div>
            <div data-reveal data-reveal-delay="80">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: '19',  note: 'In-house capabilities' },
                  { label: '5',   note: 'Production categories' },
                  { label: '0',   note: 'Vendor outsourcing' },
                  { label: '∞',   note: 'QR destination updates' },
                ].map(stat => (
                  <div
                    key={stat.label}
                    className="p-6 rounded-sm text-center"
                    style={{ background: 'var(--color-hps-cream)', border: '1px solid rgba(200,180,154,0.40)' }}
                  >
                    <p className="font-display mb-1" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-hps-green)', lineHeight: 1 }}>
                      {stat.label}
                    </p>
                    <p className="font-mono" style={{ fontSize: '0.58rem', letterSpacing: '0.14em', color: 'var(--color-hps-smoke)', opacity: 0.70 }}>
                      {stat.note}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-5">
                <Link
                  to="/services/fabrication-signage"
                  className="font-mono uppercase transition-colors duration-200"
                  style={{ fontSize: '0.68rem', letterSpacing: '0.18em', color: 'var(--color-hps-green)', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-hps-green-dark)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-hps-green)')}
                >
                  View fabrication services →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QR + Physical Integration Gateway ───────────────────── */}
      <section className="py-14 lg:py-20 border-t" style={{ background: 'var(--color-hps-cream)', borderColor: 'rgba(200,180,154,0.40)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-8">
            <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-coral-warm)' }}>
              Connected surfaces
            </p>
            <h3 className="font-display" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
              Every fabricated surface can be a live digital endpoint.
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'HPS QR Code', href: '/platforms/hps-qr-code', note: 'Dynamic QR management — update destinations without reprinting', accent: 'var(--color-hps-ink)' },
              { label: 'HPS QR Menu', href: '/platforms/hps-qr-menu', note: 'Real-time restaurant and hospitality menus linked to fabricated surfaces', accent: 'var(--color-hps-gold-rich)' },
              { label: 'HPS Golf', href: '/golf', note: 'Laser-engraved tee markers, sponsor panels, and QR-connected course surfaces', accent: 'var(--color-hps-green)' },
              { label: 'Hospitality & QR Systems', href: '/hospitality', note: 'Table tents, coasters, and signage paired with live QR menus', accent: 'var(--color-hps-coral-warm)' },
            ].map(link => (
              <Link
                key={link.href}
                to={link.href}
                className="flex flex-col p-5 rounded-sm"
                style={{ background: 'var(--color-hps-parchment)', border: '1px solid rgba(200,180,154,0.40)', borderLeft: `3px solid ${link.accent}`, textDecoration: 'none', transition: 'box-shadow 0.2s ease, transform 0.2s ease' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 4px 14px rgba(12,20,32,0.08)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <p className="font-display mb-1.5" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-ink)' }}>{link.label}</p>
                <p className="font-body text-sm leading-relaxed flex-1 mb-3" style={{ color: 'var(--color-hps-smoke)' }}>{link.note}</p>
                <span className="font-mono uppercase" style={{ fontSize: '0.58rem', letterSpacing: '0.16em', color: link.accent }}>View →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      </div>{/* end atmosphere wrapper */}

      <CTABand
        headline="Ready to build something physical?"
        subhead="Tell us what you need. We'll design it, build it, and deliver it — in-house, in Leesburg, FL."
        showPhone
      />
    </>
  )
}
