import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, MessageCircle, Calendar, Sparkles } from 'lucide-react'
import { useRef, useEffect, useState } from 'react'
import Button from '../ui/Button'
import './CTASection.css'

const CTASection = () => {
    const containerRef = useRef(null)
    const [particles, setParticles] = useState([])

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [50, -50])
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8])

    // Generate floating particles
    useEffect(() => {
        const generateParticles = () => {
            return Array.from({ length: 30 }, (_, i) => ({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 4 + 2,
                duration: Math.random() * 10 + 10,
                delay: Math.random() * 5
            }))
        }
        setParticles(generateParticles())
    }, [])

    return (
        <section ref={containerRef} className="cta-section">
            {/* Animated Background */}
            <div className="cta-section__background">
                {/* Gradient Base */}
                <div className="cta-section__gradient"></div>
                
                {/* Animated Mesh */}
                <div className="cta-section__mesh"></div>
                
                {/* Noise Texture */}
                <div className="cta-section__noise"></div>

                {/* Floating Orbs */}
                <motion.div className="cta-section__orbs" style={{ y }}>
                    <div className="cta-section__orb cta-section__orb--1"></div>
                    <div className="cta-section__orb cta-section__orb--2"></div>
                    <div className="cta-section__orb cta-section__orb--3"></div>
                </motion.div>

                {/* Floating Particles */}
                <div className="cta-section__particles">
                    {particles.map((particle) => (
                        <div
                            key={particle.id}
                            className="cta-section__particle"
                            style={{
                                left: `${particle.x}%`,
                                top: `${particle.y}%`,
                                width: `${particle.size}px`,
                                height: `${particle.size}px`,
                                animationDuration: `${particle.duration}s`,
                                animationDelay: `${particle.delay}s`
                            }}
                        />
                    ))}
                </div>

                {/* Wave Animation */}
                <div className="cta-section__waves">
                    <svg className="cta-section__wave cta-section__wave--1" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path fill="rgba(255,255,255,0.1)" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,229.3C960,213,1056,171,1152,165.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                    <svg className="cta-section__wave cta-section__wave--2" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path fill="rgba(255,255,255,0.05)" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>

                {/* Grid Pattern */}
                <div className="cta-section__grid"></div>
            </div>

            <motion.div className="container" style={{ opacity }}>
                <div className="cta-section__content">
                    {/* Floating Badge */}
                    <motion.div
                        className="cta-section__badge"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Sparkles size={16} />
                        <span>Free Consultation</span>
                    </motion.div>

                    <motion.h2
                        className="cta-section__title"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Ready to Transform
                        <span className="cta-section__title-gradient"> Your Business?</span>
                    </motion.h2>

                    <motion.p
                        className="cta-section__subtitle"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Let's discuss how we can help you achieve your digital goals.
                        Schedule a free consultation with our experts today.
                    </motion.p>

                    <motion.div
                        className="cta-section__buttons"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <Button 
                            variant="outline" 
                            size="lg" 
                            icon={Calendar} 
                            iconPosition="left"
                            className="cta-section__button-primary"
                        >
                            Schedule a Call
                        </Button>
                        <Button 
                            variant="ghost" 
                            size="lg"
                            icon={MessageCircle}
                            iconPosition="left"
                            className="cta-section__button-secondary"
                        >
                            Send a Message
                        </Button>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        className="cta-section__trust"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <div className="cta-section__trust-item">
                            <span className="cta-section__trust-icon">⚡</span>
                            <span>24h Response Time</span>
                        </div>
                        <div className="cta-section__trust-item">
                            <span className="cta-section__trust-icon">🔒</span>
                            <span>NDA Protected</span>
                        </div>
                        <div className="cta-section__trust-item">
                            <span className="cta-section__trust-icon">💬</span>
                            <span>Free Consultation</span>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default CTASection
