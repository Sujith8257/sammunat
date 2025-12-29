import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { 
    Code, 
    Smartphone, 
    Database, 
    TrendingUp, 
    Palette, 
    Cloud, 
    ArrowRight, 
    Check, 
    Sparkles,
    MessageCircle
} from 'lucide-react'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import './Services.css'

const Services = () => {
    const heroRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    })

    const heroY = useTransform(scrollYProgress, [0, 1], [0, 200])
    const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    const services = [
        {
            icon: Code,
            title: 'Software Development',
            description: 'Custom software solutions built with cutting-edge technologies. We transform your ideas into robust, scalable applications.',
            features: ['Full-stack development', 'API integration', 'Legacy system modernization'],
            link: '/services/web-development',
            color: 'primary',
        },
        {
            icon: Smartphone,
            title: 'Web & Mobile Apps',
            description: 'Responsive web applications and native mobile apps for iOS and Android that deliver seamless experiences.',
            features: ['React & React Native', 'Progressive Web Apps', 'Cross-platform solutions'],
            link: '/services/mobile-apps',
            color: 'purple',
        },
        {
            icon: Database,
            title: 'CRM/ERP Systems',
            description: 'Enterprise resource planning and customer relationship management systems tailored to your workflows.',
            features: ['Custom CRM development', 'ERP implementation', 'Process automation'],
            link: '/services/crm-erp',
            color: 'cyan',
        },
        {
            icon: TrendingUp,
            title: 'Digital Marketing',
            description: 'Data-driven marketing strategies including SEO, content marketing, and social media management.',
            features: ['SEO optimization', 'Content strategy', 'Analytics & reporting'],
            link: '/services',
            color: 'orange',
        },
        {
            icon: Palette,
            title: 'UI/UX Design',
            description: 'User-centered design that combines aesthetics with functionality for exceptional user experiences.',
            features: ['User research', 'Wireframing & prototyping', 'Design systems'],
            link: '/services/ui-ux',
            color: 'pink',
        },
        {
            icon: Cloud,
            title: 'Cloud Solutions',
            description: 'Scalable cloud infrastructure, migration services, and ongoing cloud management.',
            features: ['AWS & Azure', 'Cloud migration', 'DevOps & CI/CD'],
            link: '/services',
            color: 'emerald',
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.23, 1, 0.32, 1]
            }
        }
    }

    return (
        <div className="services-page">
            {/* Hero Section */}
            <section ref={heroRef} className="services-page__hero">
                <div className="services-page__hero-bg">
                    <div className="services-page__hero-gradient"></div>
                    <div className="services-page__hero-grid"></div>
                    <motion.div 
                        className="services-page__hero-orb services-page__hero-orb--1"
                        style={{ y: heroY }}
                    />
                    <motion.div 
                        className="services-page__hero-orb services-page__hero-orb--2"
                        style={{ y: heroY }}
                    />
                </div>

                <motion.div 
                    className="container"
                    style={{ opacity: heroOpacity }}
                >
                    <div className="services-page__hero-content">
                        <motion.div
                            className="services-page__badge"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Sparkles size={16} />
                            <span>What We Offer</span>
                        </motion.div>

                        <motion.h1
                            className="services-page__title"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                        >
                            Our{' '}
                            <span className="services-page__title-gradient">Services</span>
                        </motion.h1>

                        <motion.p
                            className="services-page__subtitle"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Comprehensive digital solutions designed to accelerate your business growth. 
                            From concept to deployment, we&apos;ve got you covered.
                        </motion.p>

                        <motion.div
                            className="services-page__hero-stats"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <div className="services-page__hero-stat">
                                <span className="services-page__hero-stat-value">6+</span>
                                <span className="services-page__hero-stat-label">Core Services</span>
                            </div>
                            <div className="services-page__hero-stat">
                                <span className="services-page__hero-stat-value">100+</span>
                                <span className="services-page__hero-stat-label">Projects Delivered</span>
                            </div>
                            <div className="services-page__hero-stat">
                                <span className="services-page__hero-stat-value">24/7</span>
                                <span className="services-page__hero-stat-label">Support Available</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Services Grid */}
            <section className="services-page__section">
                <div className="services-page__section-bg"></div>
                <div className="container">
                    <SectionTitle
                        eyebrow="Explore Our Services"
                        title="Everything You Need to Succeed"
                        subtitle="We offer end-to-end digital solutions tailored to your unique business needs."
                        centered
                        gradient
                    />

                    <motion.div 
                        className="services-page__grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                            >
                                <Link 
                                    to={service.link} 
                                    className="services-page__card-link"
                                >
                                    <div className="services-page__card">
                                        <div className={`services-page__card-icon services-page__card-icon--${service.color}`}>
                                            <service.icon />
                                        </div>
                                        
                                        <h3 className="services-page__card-title">
                                            {service.title}
                                        </h3>
                                        
                                        <p className="services-page__card-description">
                                            {service.description}
                                        </p>
                                        
                                        <ul className="services-page__card-features">
                                            {service.features.map((feature, i) => (
                                                <li key={i} className="services-page__card-feature">
                                                    <span className="services-page__card-feature-icon">
                                                        <Check />
                                                    </span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        
                                        <div className="services-page__card-cta">
                                            <span>Learn more</span>
                                            <ArrowRight />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="services-page__cta">
                <div className="container">
                    <motion.div
                        className="services-page__cta-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="services-page__cta-title">
                            Ready to Get Started?
                        </h2>
                        <p className="services-page__cta-subtitle">
                            Let&apos;s discuss how our services can help transform your business. 
                            Schedule a free consultation with our experts.
                        </p>
                        <div className="services-page__cta-buttons">
                            <Button 
                                variant="primary" 
                                size="lg" 
                                icon={ArrowRight} 
                                iconPosition="right"
                            >
                                Start Your Project
                            </Button>
                            <Button 
                                variant="outline" 
                                size="lg"
                                icon={MessageCircle}
                                iconPosition="left"
                            >
                                Contact Us
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Services
