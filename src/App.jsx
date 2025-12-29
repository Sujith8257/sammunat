import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Layout Components
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

// Pages
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Careers from './pages/Careers'

// Service Detail Pages
import WebDevelopment from './pages/services/WebDevelopment'
import MobileApps from './pages/services/MobileApps'
import CRMERP from './pages/services/CRMERP'
import UIUX from './pages/services/UIUX'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

// Scroll to top on route change
function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}

function App() {
    useEffect(() => {
        // Initialize GSAP ScrollTrigger
        ScrollTrigger.refresh()

        return () => {
            // Cleanup
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])

    return (
        <Router>
            <ScrollToTop />
            <div className="app">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/careers" element={<Careers />} />

                        {/* Service Detail Pages */}
                        <Route path="/services/web-development" element={<WebDevelopment />} />
                        <Route path="/services/mobile-apps" element={<MobileApps />} />
                        <Route path="/services/crm-erp" element={<CRMERP />} />
                        <Route path="/services/ui-ux" element={<UIUX />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    )
}

export default App
