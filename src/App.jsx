import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import HowItWorksPage from './pages/HowItWorksPage'
import EcosystemPage from './pages/EcosystemPage'
import DocsPage from './pages/DocsPage'
import BlogPage from './pages/BlogPage'
import FixpointPage from './pages/FixpointPage'
import BanikAIPage from './pages/BanikAIPage'
import SovereignPage from './pages/SovereignPage'
import CompliancePage from './pages/CompliancePage'
import ManifestoPage from './pages/ManifestoPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    const raf = requestAnimationFrame(() => {
      window.scrollTo(0, 0)
    })
    return () => cancelAnimationFrame(raf)
  }, [pathname])
  return null
}

function App() {
  const location = useLocation()
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="sync">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/ecosystem" element={<EcosystemPage />} />
            <Route path="/docs" element={<DocsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/fixpoint" element={<FixpointPage />} />
            <Route path="/banik-ai" element={<BanikAIPage />} />
            <Route path="/sovereign" element={<SovereignPage />} />
            <Route path="/compliance" element={<CompliancePage />} />
            <Route path="/manifesto" element={<ManifestoPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default App
