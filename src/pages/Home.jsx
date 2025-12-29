import HeroSection from '../components/home/HeroSection'
import ServicesSection from '../components/home/ServicesSection'
import AboutSection from '../components/home/AboutSection'
import CTASection from '../components/home/CTASection'

const Home = () => {
    return (
        <div className="home-page">
            <HeroSection />
            <ServicesSection />
            <AboutSection />
            <CTASection />
        </div>
    )
}

export default Home
