import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles, Play, ChevronDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import Button from '../ui/Button'
import './HeroSection.css'

const HeroSection = () => {
    const containerRef = useRef(null)
    const meshRef = useRef(null)
    const textRef = useRef(null)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [0, 300])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])

    useEffect(() => {
        // Animated gradient mesh background
        if (meshRef.current) {
            gsap.to(meshRef.current, {
                backgroundPosition: '100% 50%',
                duration: 20,
                repeat: -1,
                yoyo: true,
                ease: 'none',
            })
        }

        // Floating animation for decorative orbs
        gsap.to('.hero__orb', {
            y: -30,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
            stagger: {
                each: 0.5,
                from: 'random'
            }
        })

        // Particle animation
        gsap.to('.hero__particle', {
            y: 'random(-50, 50)',
            x: 'random(-30, 30)',
            opacity: 'random(0.3, 0.8)',
            duration: 'random(3, 6)',
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
            stagger: {
                each: 0.2,
                from: 'random'
            }
        })

        // Text reveal animation
        if (textRef.current) {
            gsap.fromTo(textRef.current.querySelectorAll('.hero__word'),
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.1,
                    ease: 'power3.out',
                    delay: 0.5
                }
            )
        }
    }, [])

    // Mouse parallax effect
    const handleMouseMove = (e) => {
        const rect = containerRef.current?.getBoundingClientRect()
        if (rect) {
            setMousePosition({
                x: (e.clientX - rect.left - rect.width / 2) / 50,
                y: (e.clientY - rect.top - rect.height / 2) / 50
            })
        }
    }

    const particles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        size: Math.random() * 6 + 2,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 2
    }))

    return (
        <section 
            ref={containerRef} 
            className="hero"
            onMouseMove={handleMouseMove}
        >
            {/* Animated Mesh Background */}
            <div ref={meshRef} className="hero__background">
                <div className="hero__noise"></div>
                <div className="hero__gradient-overlay"></div>
            </div>

            {/* Grid Pattern */}
            <div className="hero__grid-pattern"></div>

            {/* Floating Orbs */}
            <motion.div 
                className="hero__orbs"
                style={{ y, opacity }}
            >
                <div 
                    className="hero__orb hero__orb--1"
                    style={{ 
                        transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)` 
                    }}
                ></div>
                <div 
                    className="hero__orb hero__orb--2"
                    style={{ 
                        transform: `translate(${mousePosition.x * -1.5}px, ${mousePosition.y * -1.5}px)` 
                    }}
                ></div>
                <div 
                    className="hero__orb hero__orb--3"
                    style={{ 
                        transform: `translate(${mousePosition.x * 1}px, ${mousePosition.y * 1}px)` 
                    }}
                ></div>
                <div 
                    className="hero__orb hero__orb--4"
                    style={{ 
                        transform: `translate(${mousePosition.x * -2}px, ${mousePosition.y * 2}px)` 
                    }}
                ></div>
            </motion.div>

            {/* Floating Particles */}
            <div className="hero__particles">
                {particles.map((particle) => (
                    <div
                        key={particle.id}
                        className="hero__particle"
                        style={{
                            width: particle.size,
                            height: particle.size,
                            left: `${particle.left}%`,
                            top: `${particle.top}%`,
                            animationDelay: `${particle.delay}s`
                        }}
                    />
                ))}
            </div>

            {/* Animated Lines */}
            <div className="hero__lines">
                <div className="hero__line hero__line--1"></div>
                <div className="hero__line hero__line--2"></div>
                <div className="hero__line hero__line--3"></div>
            </div>

            <motion.div 
                className="container"
                style={{ scale }}
            >
                <div className="hero__content" ref={textRef}>
                    {/* Badge */}
                    <motion.div
                        className="hero__badge"
                        initial={{ opacity: 0, y: -30, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    >
                        <span className="hero__badge-dot"></span>
                        <Sparkles size={14} />
                        <span>Enterprise Digital Solutions</span>
                        <ArrowRight size={14} className="hero__badge-arrow" />
                    </motion.div>

                    {/* Main Headline with Word Animation */}
                    <h1 className="hero__headline">
                        <span className="hero__headline-line">
                            <span className="hero__word">Transforming</span>{' '}
                            <span className="hero__word">Business</span>{' '}
                            <span className="hero__word">with</span>
                        </span>
                        <span className="hero__headline-line hero__headline-gradient">
                            <span className="hero__word text-gradient-animated">Custom</span>{' '}
                            <span className="hero__word text-gradient-animated">Digital</span>{' '}
                            <span className="hero__word text-gradient-animated">Solutions</span>
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <motion.p
                        className="hero__subheadline"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
                    >
                        We build scalable, secure digital platforms that drive growth for SMEs and Enterprises.
                        From rapid MVP builds to enterprise CRM/ERP solutions and custom integrations.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="hero__cta"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    >
                        <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right" className="hero__cta-primary">
                            Start Your Project
                        </Button>
                        <Button variant="outline" size="lg" icon={Play} iconPosition="left" className="hero__cta-secondary">
                            Watch Demo
                        </Button>
                    </motion.div>

                    {/* Stats Row */}
                    <motion.div
                        className="hero__stats"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1, ease: [0.23, 1, 0.32, 1] }}
                    >
                        <div className="hero__stat">
                            <span className="hero__stat-value">100+</span>
                            <span className="hero__stat-label">Projects Delivered</span>
                        </div>
                        <div className="hero__stat-divider"></div>
                        <div className="hero__stat">
                            <span className="hero__stat-value">50+</span>
                            <span className="hero__stat-label">Happy Clients</span>
                        </div>
                        <div className="hero__stat-divider"></div>
                        <div className="hero__stat">
                            <span className="hero__stat-value">3</span>
                            <span className="hero__stat-label">Global Offices</span>
                        </div>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        className="hero__trust"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                    >
                        <span className="hero__trust-text">Trusted by businesses in</span>
                        <div className="hero__trust-locations">
                            <span className="hero__trust-location">🇺🇸 USA</span>
                            <span className="hero__trust-location">🇦🇪 UAE</span>
                            <span className="hero__trust-location">🇮🇳 India</span>
                        </div>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div 
                        className="hero__scroll-indicator"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                    >
                        <span>Scroll to explore</span>
                        <div className="hero__scroll-mouse">
                            <div className="hero__scroll-wheel"></div>
                        </div>
                        <ChevronDown className="hero__scroll-chevron" />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default HeroSection
