import { lazy, Suspense, useEffect, Component } from 'react'
import type { ReactNode, ErrorInfo } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import EcosystemSidePanel from './components/layout/EcosystemSidePanel'
import BackToTop from './components/ui/BackToTop'
import { MotionAtmosphere } from './components/motion/ReducedMotionIntelligenceSystem'

class RouteErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  constructor(props: { children: ReactNode }) {
    super(props)
    this.state = { error: null }
  }
  static getDerivedStateFromError(error: Error) {
    return { error }
  }
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[RouteErrorBoundary]', error, info.componentStack)
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: '3rem 2rem', fontFamily: 'monospace', fontSize: '0.85rem', color: '#c44', background: '#fff9f9', minHeight: '60vh' }}>
          <strong>Page render error</strong>
          <pre style={{ marginTop: '1rem', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{this.state.error.message}</pre>
          <pre style={{ marginTop: '0.5rem', opacity: 0.6, fontSize: '0.75rem', whiteSpace: 'pre-wrap' }}>{this.state.error.stack}</pre>
        </div>
      )
    }
    return this.props.children
  }
}

const HomePage           = lazy(() => import('./pages/HomePage'))
const EcosystemsPage     = lazy(() => import('./pages/EcosystemsPage'))
const ServicesPage       = lazy(() => import('./pages/ServicesPage'))
const PlatformsPage      = lazy(() => import('./pages/PlatformsPage'))
const FabricationLabPage = lazy(() => import('./pages/FabricationLabPage'))
const HPSGolfPage        = lazy(() => import('./pages/HPSGolfPage'))
const AccessibilityPage  = lazy(() => import('./pages/AccessibilityPage'))
const HostingPage        = lazy(() => import('./pages/HostingPage'))
const HospitalityQRPage  = lazy(() => import('./pages/HospitalityQRPage'))
const AISystemsPage      = lazy(() => import('./pages/AISystemsPage'))
const AboutPage          = lazy(() => import('./pages/AboutPage'))
const ContactPage        = lazy(() => import('./pages/ContactPage'))
const PlatformDetailPage = lazy(() => import('./pages/PlatformDetailPage'))
const ServiceDetailPage              = lazy(() => import('./pages/ServiceDetailPage'))
const IdentityCommunicationsPage     = lazy(() => import('./pages/IdentityCommunicationsPage'))
const HostingDetailPage  = lazy(() => import('./pages/HostingDetailPage'))
const IndustryPage       = lazy(() => import('./pages/IndustryPage'))
const MediaPage          = lazy(() => import('./pages/MediaPage'))
const ClientPortalPage   = lazy(() => import('./pages/ClientPortalPage'))
const SupportPage        = lazy(() => import('./pages/SupportPage'))
const ThankYouPage       = lazy(() => import('./pages/ThankYouPage'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}


function PageRoutes() {
  const { pathname } = useLocation()
  return (
    <RouteErrorBoundary>
    <Suspense fallback={<div style={{ minHeight: '100vh', background: 'var(--color-hps-cream)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'monospace', fontSize: '0.75rem', color: 'var(--color-hps-smoke)', letterSpacing: '0.1em' }}>Loading…</div>}>
      <div key={pathname} className="page-enter">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ecosystems" element={<EcosystemsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/platforms" element={<PlatformsPage />} />
          <Route path="/fabrication" element={<FabricationLabPage />} />
          <Route path="/golf" element={<HPSGolfPage />} />
          <Route path="/accessibility" element={<AccessibilityPage />} />
          <Route path="/hosting" element={<HostingPage />} />
          <Route path="/hospitality" element={<HospitalityQRPage />} />
          <Route path="/ai-systems" element={<AISystemsPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/client-portal" element={<ClientPortalPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/platforms/:slug" element={<PlatformDetailPage />} />
          <Route path="/ecosystem/:vertical" element={<IndustryPage />} />
          <Route path="/services/identity-communications" element={<IdentityCommunicationsPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/hosting/:slug" element={<HostingDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </div>
    </Suspense>
    </RouteErrorBoundary>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navigation />
      <main id="main-content" tabIndex={-1}>
        <PageRoutes />
      </main>
      <Footer />
      <EcosystemSidePanel />
      <BackToTop />
      <MotionAtmosphere />
    </BrowserRouter>
  )
}
