import { Link } from 'react-router-dom'
import PageHeader from '../components/sections/PageHeader'
import CTABand from '../components/sections/CTABand'
import BackgroundAtmosphere from '../components/decorative/BackgroundAtmosphere'
import { HospitalitySystemsEnvironment } from '../components/sections/HospitalitySystemsEnvironment'
import { usePageMeta } from '../hooks/usePageMeta'

export default function HospitalityQRPage() {
  usePageMeta({
    title: 'Hospitality & QR Systems',
    description: 'Live QR menus, scan infrastructure, and connected signage for restaurants, breweries, food trucks, and hospitality venues. Printed and managed in-house.',
  })
  return (
    <>
      <div style={{ position: 'relative', isolation: 'isolate' }}>
      <BackgroundAtmosphere mood="citrus" intensity="subtle" density="sparse" />
      <PageHeader
        eyebrow="QR-Connected Surfaces for Hospitality Venues"
        title="Hospitality & QR Systems"
        description="QR-connected menus, surfaces, and systems for restaurants, food trucks, breweries, and hospitality businesses. Physical surfaces and live digital menus produced and managed in-house."
        accentColor="var(--color-hps-coral-warm)"
      />

      {/* ── Core Platform Products ─────────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-10">
            <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-coral-warm)' }}>
              QR platform systems
            </p>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
              Two connected platforms. One operational surface.
            </h2>
            <p className="font-body mt-3 max-w-xl" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)', lineHeight: 1.65 }}>
              For restaurants, food trucks, breweries, and hospitality venues of any size. Simple to start, easy to manage, and built to keep running without your attention.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            {[
              {
                name: 'HPS QR Menu',
                href: '/platforms/hps-qr-menu',
                tag: 'Restaurants & Food Trucks',
                accent: 'var(--color-hps-coral-warm)',
                desc: 'Interactive, mobile-first QR menus for restaurants, breweries, food trucks, and hospitality venues. Update your menu in real time, no reprinting, no app required for guests. Includes scan analytics, seasonal menu switching, 86 mode for instant item removal, and full custom branding.',
                features: [
                  { label: 'Real-time menu updates', note: 'Change items, prices, and availability from any device' },
                  { label: 'Mobile-optimized display', note: 'Fast load, clean layout, no app install required' },
                  { label: 'Scan analytics dashboard', note: 'See which QR surfaces get used and when' },
                  { label: '86 Mode', note: 'Instantly mark items unavailable — greyed out immediately' },
                  { label: 'Allergen & dietary tags', note: 'GF, vegan, dairy-free, spicy clearly marked per item' },
                  { label: 'Multi-menu support', note: 'Separate lunch, dinner, bar, and seasonal menus' },
                ],
              },
              {
                name: 'HPS QR Code',
                href: '/platforms/hps-qr-code',
                tag: 'Dynamic QR Systems',
                accent: 'var(--color-hps-teal-dark)',
                desc: 'Dynamic QR code generation with destination management, scan tracking, and branded code design. Change where a code points at any time without reprinting. Used for menus, product cards, table tents, signage, and any printed surface that needs to stay current through seasonal changes.',
                features: [
                  { label: 'Dynamic destination management', note: 'Update the linked URL without touching the printed code' },
                  { label: 'Scan count & location tracking', note: 'Per-surface analytics by geography and device' },
                  { label: 'Bulk code generation', note: 'Create hundreds of unique codes for tabletop and signage' },
                  { label: 'Branded QR design', note: 'Custom colors, logo embed, and frame styling' },
                  { label: 'Expiration & scheduling', note: 'Codes activate or deactivate on a defined date' },
                  { label: 'In-house fabrication integration', note: 'QR surfaces printed and cut on-site in Leesburg' },
                ],
              },
            ].map((p, i) => (
              <div
                key={p.name}
                data-reveal
                data-reveal-delay={String(i * 80)}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-10 rounded-sm"
                style={{ background: 'var(--color-hps-parchment)', border: '1px solid rgba(200,180,154,0.40)', borderTop: `3px solid ${p.accent}` }}
              >
                <div>
                  <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.18em', color: p.accent }}>
                    {p.tag}
                  </p>
                  <h2 className="font-display text-hps-ink mb-4" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: 1.1 }}>
                    {p.name}
                  </h2>
                  <p className="font-body text-sm leading-relaxed mb-5" style={{ color: 'var(--color-hps-smoke)' }}>
                    {p.desc}
                  </p>
                  <Link
                    to={p.href}
                    className="font-mono uppercase"
                    style={{ fontSize: '0.62rem', letterSpacing: '0.18em', color: p.accent, textDecoration: 'none' }}
                  >
                    Platform details →
                  </Link>
                </div>
                <ul className="flex flex-col gap-3 self-center">
                  {p.features.map(f => (
                    <li key={f.label} className="flex items-start gap-3 py-2 border-b" style={{ borderColor: 'rgba(200,180,154,0.35)' }}>
                      <span className="shrink-0 mt-[0.35rem] w-1.5 h-1.5 rounded-full" style={{ background: p.accent }} aria-hidden="true" />
                      <div>
                        <span className="font-body font-medium block" style={{ fontSize: '0.875rem', color: 'var(--color-hps-ink)' }}>{f.label}</span>
                        <span className="font-mono" style={{ fontSize: '0.58rem', letterSpacing: '0.08em', color: 'var(--color-hps-smoke)', opacity: 0.70 }}>{f.note}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Operational Continuity ─────────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-parchment)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div data-reveal>
              <p className="font-mono uppercase mb-4" style={{ fontSize: '0.6rem', letterSpacing: '0.22em', color: 'var(--color-hps-coral-warm)' }}>
                The operational reality
              </p>
              <h2 className="font-display mb-5" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.08 }}>
                A restaurant's menu is never finished.
              </h2>
              <p className="font-body leading-relaxed mb-4" style={{ fontSize: '1rem', color: 'var(--color-hps-smoke)' }}>
                Items go 86 mid-service. Prices adjust with supply costs. Seasonal specials appear and disappear. A new item needs a photo before it's ready to show. A brewery's tap list changes every two weeks. A food truck runs different items at different venues.
              </p>
              <p className="font-body leading-relaxed mb-4" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)', opacity: 0.9 }}>
                HPS QR Menu is built for this pace. Your team makes changes from any device, phone, tablet, or laptop, and guests at the table see the updated menu immediately. The QR code on the table tent stays exactly the same. You never reprint to fix a price.
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)', opacity: 0.9 }}>
                The operational rhythm is: change the dashboard, not the printed materials. That separation is what keeps physical hospitality surfaces in service for years instead of months.
              </p>
            </div>
            <div data-reveal data-reveal-delay="80" className="flex flex-col gap-4">
              {[
                { label: 'Item availability changes', time: 'Real-time', desc: 'Mark items unavailable instantly. Guests see a greyed-out item, no awkward "we\'re out of that" conversation.', accent: 'var(--color-hps-coral-warm)' },
                { label: 'Price and menu updates', time: 'Immediate', desc: 'Adjust prices, rename items, or swap descriptions from any browser. No file uploads, no reprints.', accent: 'var(--color-hps-gold-rich)' },
                { label: 'Seasonal menu rotation', time: 'Scheduled', desc: 'Set seasonal or time-based menus to activate and deactivate automatically. Happy hour, brunch, and dinner menus on a schedule.', accent: 'var(--color-hps-teal-dark)' },
                { label: 'Scan analytics review', time: 'Ongoing', desc: 'Monthly scan data shows which surfaces are getting traffic and which aren\'t. Informs placement and table tent positioning over time.', accent: 'var(--color-hps-green)' },
              ].map(item => (
                <div
                  key={item.label}
                  className="flex gap-4 p-5 rounded-sm"
                  style={{ background: 'var(--color-hps-cream)', border: '1px solid rgba(200,180,154,0.40)', borderLeft: `3px solid ${item.accent}` }}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <p className="font-body font-medium" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-ink)' }}>{item.label}</p>
                      <span className="font-mono uppercase" style={{ fontSize: '0.52rem', letterSpacing: '0.14em', color: item.accent, background: `${item.accent}15`, padding: '0.1rem 0.4rem', borderRadius: '2px' }}>{item.time}</span>
                    </div>
                    <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-hps-smoke)' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Physical Surface Production ────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--color-hps-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-12">
            <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-coral-warm)' }}>
              Physical production
            </p>
            <h2 className="font-display mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
              Printed in-house. Linked on deployment.
            </h2>
            <p className="font-body max-w-2xl leading-relaxed" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}>
              Most QR menu services provide a URL and leave the physical surface setup to you. HPS produces the printed surfaces in-house at our Leesburg fabrication lab and deploys the QR code at the same time. One engagement covers the full stack.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { label: 'Table Tents', desc: 'UV-printed or vinyl table tents sized for counter, bar, and dining room placement. QR embedded, branded to your identity.', accent: 'var(--color-hps-coral-warm)' },
              { label: 'Coasters', desc: 'Round or square coasters with QR code linking to your menu or social hub. Durable surface treatment for bar environments.', accent: 'var(--color-hps-gold-rich)' },
              { label: 'Wall & Window Panels', desc: 'Vinyl or UV-printed panels for entrance QR displays, wall menus, and ordering station signage. Large-format production available.', accent: 'var(--color-hps-teal-dark)' },
              { label: 'Branded Menu Holders', desc: 'Acrylic and dimensional holders with embedded or applied QR codes. Laser-engraved for durability, branded to your venue.', accent: 'var(--color-hps-green)' },
            ].map((item, i) => (
              <div
                key={item.label}
                data-reveal
                data-reveal-delay={String(i * 80)}
                className="p-6 rounded-sm"
                style={{ background: 'var(--color-hps-parchment)', border: '1px solid rgba(200,180,154,0.40)', borderTop: `3px solid ${item.accent}` }}
              >
                <h3 className="font-display mb-3" style={{ fontSize: '1.0625rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}>
                  {item.label}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-hps-smoke)' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div data-reveal className="mt-8 pt-8 border-t" style={{ borderColor: 'rgba(200,180,154,0.40)' }}>
            <Link
              to="/fabrication"
              className="font-mono uppercase"
              style={{ fontSize: '0.65rem', letterSpacing: '0.18em', color: 'var(--color-hps-coral-warm)', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-hps-ink)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-hps-coral-warm)')}
            >
              View the full fabrication lab →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Who It's For ──────────────────────────────────────────── */}
      <section className="py-16 lg:py-20" style={{ background: 'var(--color-hps-parchment)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-10">
            <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-coral-warm)' }}>
              Hospitality operations we work with
            </p>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
              Built for the pace of food service.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: 'Full-Service Restaurants', note: 'Dine-in menu system with table QR codes, multi-section menus, and allergen flagging' },
              { label: 'Craft Breweries & Taprooms', note: 'Rotating tap list management — update the board without printing new menus every week' },
              { label: 'Food Trucks & Pop-Ups', note: 'Single-surface QR menu that travels with the vehicle, updated remotely per location' },
              { label: 'Hotels & Resorts', note: 'Room service, poolside, and restaurant menus across a single property — managed from one dashboard' },
              { label: 'Golf Club Hospitality', note: 'Turn station, clubhouse bar, and pro shop — QR menus and sponsor surfaces in one system' },
              { label: 'Event Venues & Catering', note: 'Temporary QR menus deployed for events with time-limited activation and branded production' },
            ].map((item, i) => (
              <div
                key={item.label}
                data-reveal
                data-reveal-delay={String((i % 3) * 60)}
                className="flex items-start gap-3 p-5 rounded-sm"
                style={{ background: 'var(--color-hps-cream)', border: '1px solid rgba(200,180,154,0.40)' }}
              >
                <div className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5" style={{ background: 'var(--color-hps-coral-warm)' }} aria-hidden="true" />
                <div>
                  <p className="font-body font-medium mb-0.5" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-ink)' }}>{item.label}</p>
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-hps-smoke)' }}>{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Guest Re-engagement Lifecycle ─────────────────────────── */}
      <section className="py-14 lg:py-20" style={{ background: 'var(--color-hps-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-10">
            <p
              className="font-mono uppercase mb-3"
              style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-teal)' }}
            >
              The guest lifecycle
            </p>
            <h2
              className="font-display mb-3"
              style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.875rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}
            >
              From first scan to return visit.
            </h2>
            <p
              className="font-body max-w-xl"
              style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)', lineHeight: 1.65 }}
            >
              The QR menu is the guest's first contact point. What happens after, whether they leave a review, receive your next promotion, and come back, depends on what's connected to it.
            </p>
          </div>
          <div className="flex flex-col gap-0">
            {([
              {
                step: '01',
                label: 'Guest scans the QR menu',
                note: 'Table tent, counter card, or wall panel — HPS QR Menu loads instantly on their phone. No app. No friction. Scan analytics record which surface, which time of day, which device.',
                platform: { name: 'HPS QR Menu', href: '/platforms/hps-qr-menu' },
                accent: 'var(--color-hps-coral-warm)',
              },
              {
                step: '02',
                label: 'Surface engagement is tracked',
                note: 'HPS QR Code analytics show which placements drive engagement and which don\'t — so next season\'s table configuration is based on data, not intuition.',
                platform: { name: 'HPS QR Code', href: '/platforms/hps-qr-code' },
                accent: 'var(--color-hps-teal-dark)',
              },
              {
                step: '03',
                label: 'Guest leaves a review',
                note: 'A QR-connected exit prompt or receipt routes to your review hub. HPS SocialProof aggregates and displays those reviews in real time across your digital presence.',
                platform: { name: 'HPS SocialProof', href: '/platforms/hps-socialproof' },
                accent: 'var(--color-hps-gold-rich)',
              },
              {
                step: '04',
                label: 'Web push brings them back',
                note: 'Guests who opted in receive your next promotion directly — no email list, no algorithm dependency, no paid reach. Specials, events, and seasonal announcements land in their browser.',
                platform: { name: 'HPS Push', href: '/platforms/hps-push' },
                accent: 'var(--color-hps-teal)',
              },
            ] as { step: string; label: string; note: string; platform: { name: string; href: string }; accent: string }[]).map((item, i, arr) => (
              <div
                key={item.step}
                data-reveal
                data-reveal-delay={String(i * 60)}
                className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-3 lg:gap-10 py-6"
                style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(200,180,154,0.40)' : 'none' }}
              >
                <div className="flex items-start gap-4 lg:flex-col lg:gap-2">
                  <span
                    className="font-mono shrink-0"
                    style={{ fontSize: '1.25rem', color: item.accent, lineHeight: 1, opacity: 0.30 }}
                    aria-hidden="true"
                  >
                    {item.step}
                  </span>
                  <div>
                    <p
                      className="font-display"
                      style={{ fontSize: '1rem', color: 'var(--color-hps-ink)', lineHeight: 1.2 }}
                    >
                      {item.label}
                    </p>
                    <Link
                      to={item.platform.href}
                      className="font-mono uppercase mt-1 block transition-opacity duration-150"
                      style={{ fontSize: '0.52rem', letterSpacing: '0.14em', color: item.accent, textDecoration: 'none', opacity: 0.70 }}
                      onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                      onMouseLeave={e => (e.currentTarget.style.opacity = '0.70')}
                    >
                      {item.platform.name} →
                    </Link>
                  </div>
                </div>
                <p
                  className="font-body leading-relaxed"
                  style={{ fontSize: '0.9375rem', color: 'var(--color-hps-smoke)' }}
                >
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Physical Venue Environment ────────────────────────────── */}
      <HospitalitySystemsEnvironment />

      {/* ── Ecosystem Gateway ─────────────────────────────────────── */}
      <section className="py-14 lg:py-20 border-t" style={{ background: 'var(--color-hps-cream)', borderColor: 'rgba(200,180,154,0.40)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-reveal className="mb-8">
            <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--color-hps-coral-warm)' }}>
              Connected ecosystem
            </p>
            <h3 className="font-display" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', color: 'var(--color-hps-ink)', lineHeight: 1.1 }}>
              QR systems inside the full hospitality stack
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'HPS Push', href: '/platforms/hps-push', note: 'Direct notification channel for specials, events, and reservations', accent: 'var(--color-hps-teal)' },
              { label: 'HPS BioLinks', href: '/platforms/hps-biolinks', note: 'Social bio hub linking to menu, reservations, and ordering', accent: 'var(--color-hps-gold-rich)' },
              { label: 'Fabrication Lab', href: '/fabrication', note: 'In-house production of all printed QR surfaces and hospitality signage', accent: 'var(--color-hps-coral-warm)' },
              { label: 'Hospitality Pathway', href: '/ecosystem/hospitality-restaurants', note: 'Full industry ecosystem view for restaurants and hospitality', accent: 'var(--color-hps-green)' },
            ].map(link => (
              <Link
                key={link.href}
                to={link.href}
                className="flex flex-col p-5 rounded-sm"
                style={{ background: 'var(--color-hps-parchment)', border: '1px solid rgba(200,180,154,0.40)', borderLeft: `3px solid ${link.accent}`, textDecoration: 'none', transition: 'box-shadow 0.2s ease, transform 0.2s ease' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 4px 14px rgba(12,20,32,0.08)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <p className="font-display mb-2" style={{ fontSize: '0.9375rem', color: 'var(--color-hps-ink)' }}>{link.label}</p>
                <p className="font-body text-sm leading-relaxed flex-1 mb-3" style={{ color: 'var(--color-hps-smoke)' }}>{link.note}</p>
                <span className="font-mono uppercase" style={{ fontSize: '0.58rem', letterSpacing: '0.16em', color: link.accent }}>View →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      </div>{/* end atmosphere wrapper */}

      <CTABand
        headline="Ready to connect your printed surfaces?"
        subhead="We design, print, and link the QR system. You update the destination from your phone."
        buttonText="Start with a Free Consultation"
        showPhone
      />
    </>
  )
}
