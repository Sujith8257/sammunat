import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from 'framer-motion'
import { CheckCircle2, ArrowRight, Award, Users, Globe, Rocket } from 'lucide-react'
import { useRef, useEffect, useState } from 'react'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import './AboutSection.css'

// Animated Counter Component
const AnimatedCounter = ({ value, suffix = '', duration = 2 }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const [displayValue, setDisplayValue] = useState(0)

    useEffect(() => {
        if (isInView) {
            let startTime
            const animate = (currentTime) => {
                if (!startTime) startTime = currentTime
                const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
                
                // Easing function for smooth animation
                const easeOutQuart = 1 - Math.pow(1 - progress, 4)
                setDisplayValue(Math.floor(easeOutQuart * value))
                
                if (progress < 1) {
                    requestAnimationFrame(animate)
                }
            }
            requestAnimationFrame(animate)
        }
    }, [isInView, value, duration])

    return <span ref={ref}>{displayValue}{suffix}</span>
}

const AboutSection = () => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
    const y2 = useTransform(scrollYProgress, [0, 1], [50, -50])
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -30])
    const rotate = useTransform(scrollYProgress, [0, 1], [5, -5])

    const features = [
        {
            icon: Rocket,
            text: 'Proven delivery framework with agile methodology'
        },
        {
            icon: Users,
            text: 'Dedicated teams of experienced developers'
        },
        {
            icon: Award,
            text: 'Scalable and secure technologies'
        },
        {
            icon: Globe,
            text: 'End-to-end project management'
        },
    ]

    const stats = [
        { value: 100, suffix: '+', label: 'Projects Delivered', icon: Rocket },
        { value: 50, suffix: '+', label: 'Happy Clients', icon: Users },
        { value: 3, suffix: '', label: 'Global Offices', icon: Globe },
    ]

    return (
        <section ref={containerRef} className="about section">
            {/* Decorative Background */}
            <div className="about__background">
                <div className="about__bg-pattern"></div>
                <div className="about__bg-gradient"></div>
            </div>

            <div className="container">
                <div className="about__grid">
                    {/* Left Column - Text Content */}
                    <motion.div
                        className="about__content"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    >
                        <SectionTitle
                            eyebrow="About Sammunat"
                            title="Building Digital Excellence Since Day One"
                            subtitle="We're a global team of innovators, designers, and developers passionate about creating impactful digital solutions."
                            gradient={false}
                        />

                        <ul className="about__features">
                            {features.map((feature, index) => (
                                <motion.li
                                    key={index}
                                    className="about__feature-item"
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="about__feature-icon">
                                        <feature.icon size={20} />
                                    </div>
                                    <span>{feature.text}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <motion.p
                            className="about__description"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            With offices across the USA, UAE, and India, we combine global expertise with local
                            insights to deliver solutions that truly resonate with your audience and drive measurable
                            business outcomes.
                        </motion.p>

                        <motion.div
                            className="about__cta"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
                                Learn More About Us
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Visual Stats */}
                    <div className="about__visual">
                        {/* Floating Stat Cards */}
                        <motion.div 
                            className="about__visual-card about__visual-card--1"
                            style={{ y: y1 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            whileHover={{ scale: 1.05, rotate: 2 }}
                        >
                            <div className="about__card-icon">
                                <Rocket size={24} />
                            </div>
                            <div className="about__stat">
                                <span className="about__stat-value">
                                    <AnimatedCounter value={100} suffix="+" />
                                </span>
                                <span className="about__stat-label">Projects Delivered</span>
                            </div>
                            <div className="about__card-glow"></div>
                        </motion.div>

                        <motion.div 
                            className="about__visual-card about__visual-card--2"
                            style={{ y: y2, rotate }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            whileHover={{ scale: 1.05, rotate: -2 }}
                        >
                            <div className="about__card-icon about__card-icon--purple">
                                <Users size={24} />
                            </div>
                            <div className="about__stat">
                                <span className="about__stat-value">
                                    <AnimatedCounter value={50} suffix="+" />
                                </span>
                                <span className="about__stat-label">Happy Clients</span>
                            </div>
                            <div className="about__card-glow about__card-glow--purple"></div>
                        </motion.div>

                        <motion.div 
                            className="about__visual-card about__visual-card--3"
                            style={{ y: y3 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            whileHover={{ scale: 1.05, rotate: 3 }}
                        >
                            <div className="about__card-icon about__card-icon--cyan">
                                <Globe size={24} />
                            </div>
                            <div className="about__stat">
                                <span className="about__stat-value">
                                    <AnimatedCounter value={3} />
                                </span>
                                <span className="about__stat-label">Global Offices</span>
                            </div>
                            <div className="about__card-glow about__card-glow--cyan"></div>
                        </motion.div>

                        {/* Decorative Elements */}
                        <div className="about__visual-decoration">
                            <div className="about__decoration-ring about__decoration-ring--1"></div>
                            <div className="about__decoration-ring about__decoration-ring--2"></div>
                            <div className="about__decoration-dots"></div>
                        </div>

                        {/* Connection Lines */}
                        <svg className="about__connection-lines" viewBox="0 0 400 500" fill="none">
                            <motion.path
                                d="M100,100 Q200,150 150,250 Q100,350 200,400"
                                stroke="url(#gradient)"
                                strokeWidth="2"
                                strokeDasharray="8 8"
                                fill="none"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="rgba(99, 102, 241, 0.5)" />
                                    <stop offset="100%" stopColor="rgba(139, 92, 246, 0.5)" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
