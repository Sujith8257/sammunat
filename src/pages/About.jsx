import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Users, Target, Award, Globe, Heart, Sparkles } from 'lucide-react'
import SectionTitle from '../components/ui/SectionTitle'
import './About.css'

const About = () => {
    const heroRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    })

    const heroY = useTransform(scrollYProgress, [0, 1], [0, 200])
    const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    const values = [
        {
            icon: Target,
            title: 'Mission-Driven',
            description: 'Empowering businesses through innovative digital solutions that drive real results.',
            color: 'mission',
        },
        {
            icon: Users,
            title: 'Client-Focused',
            description: 'Your success is our success. We build lasting partnerships based on trust and transparency.',
            color: 'client',
        },
        {
            icon: Award,
            title: 'Excellence',
            description: 'Committed to delivering high-quality work that exceeds expectations every time.',
            color: 'excellence',
        },
        {
            icon: Globe,
            title: 'Global Reach',
            description: 'Local expertise with global capabilities across USA, UAE, and India.',
            color: 'global',
        },
    ]

    const locations = [
        { flag: '🇺🇸', city: 'Missoula', country: 'Montana, USA' },
        { flag: '🇦🇪', city: 'Dubai', country: 'United Arab Emirates' },
        { flag: '🇮🇳', city: 'Bangalore', country: 'India' },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
        }
    }

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section ref={heroRef} className="about-page__hero">
                <div className="about-page__hero-bg">
                    <div className="about-page__hero-gradient"></div>
                    <motion.div 
                        className="about-page__hero-orb about-page__hero-orb--1"
                        style={{ y: heroY }}
                    />
                    <motion.div 
                        className="about-page__hero-orb about-page__hero-orb--2"
                        style={{ y: heroY }}
                    />
                </div>

                <motion.div className="container" style={{ opacity: heroOpacity }}>
                    <div className="about-page__hero-content">
                        <motion.div
                            className="about-page__badge"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Heart size={16} />
                            <span>Who We Are</span>
                        </motion.div>

                        <motion.h1
                            className="about-page__title"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                        >
                            About{' '}
                            <span className="about-page__title-gradient">Sammunat</span>
                        </motion.h1>

                        <motion.p
                            className="about-page__subtitle"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Building digital excellence since day one. We&apos;re a global team of 
                            innovators, designers, and developers passionate about creating impactful solutions.
                        </motion.p>
                    </div>
                </motion.div>
            </section>

            {/* Story Section */}
            <section className="about-page__story">
                <div className="container">
                    <div className="about-page__story-content">
                        <SectionTitle
                            eyebrow="Our Story"
                            title="Transforming Ideas into Reality"
                            centered
                            gradient
                        />

                        <div className="about-page__story-grid">
                            <motion.div
                                className="about-page__story-text"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <p>
                                    Sammunat LLC is a multinational IT and digital services company with a passion for innovation.
                                    Headquartered in Missoula, Montana, with operations spanning across the UAE and India, we bring
                                    together a global team of talented professionals dedicated to solving complex business challenges.
                                </p>
                                <p>
                                    We specialize in custom software development, enterprise systems, and digital transformation
                                    initiatives. Our approach combines technical expertise with a deep understanding of business
                                    needs to deliver solutions that drive measurable outcomes.
                                </p>
                            </motion.div>

                            <motion.div
                                className="about-page__story-visual"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="about-page__story-image">
                                    <div className="about-page__story-image-content">
                                        <div className="about-page__story-image-year">2024</div>
                                        <div className="about-page__story-image-label">Established</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div 
                            className="about-page__story-stats"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="about-page__story-stat">
                                <div className="about-page__story-stat-value">100+</div>
                                <div className="about-page__story-stat-label">Projects Delivered</div>
                            </div>
                            <div className="about-page__story-stat">
                                <div className="about-page__story-stat-value">50+</div>
                                <div className="about-page__story-stat-label">Happy Clients</div>
                            </div>
                            <div className="about-page__story-stat">
                                <div className="about-page__story-stat-value">3</div>
                                <div className="about-page__story-stat-label">Global Offices</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="about-page__values">
                <div className="container">
                    <SectionTitle
                        eyebrow="Our Values"
                        title="What Drives Us Forward"
                        centered
                        gradient
                    />

                    <motion.div
                        className="about-page__values-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                className="about-page__value-card"
                                variants={itemVariants}
                            >
                                <div className={`about-page__value-icon about-page__value-icon--${value.color}`}>
                                    <value.icon />
                                </div>
                                <h3 className="about-page__value-title">{value.title}</h3>
                                <p className="about-page__value-description">{value.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Locations Section */}
            <section className="about-page__locations">
                <div className="container">
                    <SectionTitle
                        eyebrow="Global Presence"
                        title="Our Offices Around the World"
                        subtitle="With teams across three continents, we provide round-the-clock support and local expertise."
                        centered
                    />

                    <motion.div
                        className="about-page__locations-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {locations.map((location, index) => (
                            <motion.div
                                key={index}
                                className="about-page__location-card"
                                variants={itemVariants}
                            >
                                <div className="about-page__location-flag">{location.flag}</div>
                                <h3 className="about-page__location-city">{location.city}</h3>
                                <p className="about-page__location-country">{location.country}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default About
