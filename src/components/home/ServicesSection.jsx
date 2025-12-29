import { motion, useScroll, useTransform } from 'framer-motion'
import { Code, Smartphone, Database, TrendingUp, Palette, Cloud, ArrowRight } from 'lucide-react'
import { useRef } from 'react'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'
import Button from '../ui/Button'
import './ServicesSection.css'

const ServicesSection = () => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100])

    const services = [
        {
            icon: Code,
            title: 'Software Development',
            description: 'Custom software solutions tailored to your business needs. From concept to deployment, we build scalable applications.',
            color: 'primary',
            features: ['Custom Solutions', 'Scalable Architecture', 'Agile Development']
        },
        {
            icon: Smartphone,
            title: 'Web & Mobile Apps',
            description: 'Responsive web applications and native mobile apps that deliver exceptional user experiences across all devices.',
            color: 'purple',
            features: ['Cross-Platform', 'Native Performance', 'Modern UI/UX']
        },
        {
            icon: Database,
            title: 'CRM/ERP Systems',
            description: 'Enterprise-grade CRM and ERP solutions to streamline your operations and boost productivity.',
            color: 'cyan',
            features: ['Workflow Automation', 'Analytics Dashboard', 'Integrations']
        },
        {
            icon: TrendingUp,
            title: 'Digital Marketing',
            description: 'Data-driven digital marketing strategies that drive growth, engagement, and measurable results.',
            color: 'orange',
            features: ['SEO Optimization', 'Social Media', 'Performance Tracking']
        },
        {
            icon: Palette,
            title: 'UI/UX Design',
            description: 'Beautiful, intuitive interfaces designed with your users in mind. We create experiences people love.',
            color: 'pink',
            features: ['User Research', 'Prototyping', 'Design Systems']
        },
        {
            icon: Cloud,
            title: 'Cloud Solutions',
            description: 'Secure, scalable cloud infrastructure and migration services to power your digital transformation.',
            color: 'emerald',
            features: ['AWS/GCP/Azure', 'DevOps', 'Security']
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

    const itemVariants = {
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
        <section ref={containerRef} className="services section">
            {/* Animated Background Elements */}
            <motion.div 
                className="services__background"
                style={{ y: backgroundY }}
            >
                <div className="services__bg-orb services__bg-orb--1"></div>
                <div className="services__bg-orb services__bg-orb--2"></div>
            </motion.div>

            <div className="container">
                <SectionTitle
                    eyebrow="Our Services"
                    title="Comprehensive Digital Solutions"
                    subtitle="From startups to enterprises, we deliver cutting-edge technology solutions that drive business growth."
                    centered
                    gradient
                />

                <motion.div 
                    className="services__grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="services__item"
                            variants={itemVariants}
                        >
                            <Card 
                                icon={service.icon} 
                                hover 
                                gradient 
                                glow
                                tilt
                                className={`services__card services__card--${service.color}`}
                            >
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                
                                {/* Feature Tags */}
                                <div className="services__features">
                                    {service.features.map((feature, idx) => (
                                        <span key={idx} className="services__feature-tag">
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                {/* Learn More Link */}
                                <motion.a 
                                    href="#" 
                                    className="services__card-link"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    Learn More
                                    <ArrowRight size={16} />
                                </motion.a>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="services__cta"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
                        View All Services
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}

export default ServicesSection
