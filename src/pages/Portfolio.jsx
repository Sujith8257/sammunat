import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { Layers, ExternalLink, ArrowRight } from 'lucide-react'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import './Portfolio.css'

const Portfolio = () => {
    const heroRef = useRef(null)
    const [activeFilter, setActiveFilter] = useState('All')
    
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    })

    const heroY = useTransform(scrollYProgress, [0, 1], [0, 200])
    const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    const projects = [
        {
            title: 'Enterprise CRM Platform',
            category: 'Web Application',
            description: 'Custom CRM solution for managing customer relationships and sales pipelines.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
            tags: ['React', 'Node.js', 'MongoDB'],
        },
        {
            title: 'E-Commerce Mobile App',
            category: 'Mobile Development',
            description: 'Cross-platform shopping app with seamless checkout and real-time inventory.',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
            tags: ['React Native', 'Firebase', 'Stripe'],
        },
        {
            title: 'Healthcare Dashboard',
            category: 'UI/UX Design',
            description: 'Intuitive dashboard for healthcare providers to manage patient data.',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
            tags: ['Figma', 'React', 'D3.js'],
        },
        {
            title: 'FinTech Payment Gateway',
            category: 'Web Application',
            description: 'Secure payment processing platform with multi-currency support.',
            image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
            tags: ['Node.js', 'PostgreSQL', 'AWS'],
        },
        {
            title: 'Logistics Management System',
            category: 'Enterprise Software',
            description: 'End-to-end logistics platform for fleet management and delivery tracking.',
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
            tags: ['Python', 'React', 'Redis'],
        },
        {
            title: 'Real Estate Platform',
            category: 'Web Application',
            description: 'Property listing and management platform with virtual tours.',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
            tags: ['Next.js', 'Prisma', 'Vercel'],
        },
    ]

    const filters = ['All', 'Web Application', 'Mobile Development', 'UI/UX Design', 'Enterprise Software']

    const filteredProjects = activeFilter === 'All' 
        ? projects 
        : projects.filter(p => p.category === activeFilter)

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
        <div className="portfolio-page">
            {/* Hero Section */}
            <section ref={heroRef} className="portfolio-page__hero">
                <div className="portfolio-page__hero-bg">
                    <div className="portfolio-page__hero-gradient"></div>
                    <motion.div 
                        className="portfolio-page__hero-orb portfolio-page__hero-orb--1"
                        style={{ y: heroY }}
                    />
                    <motion.div 
                        className="portfolio-page__hero-orb portfolio-page__hero-orb--2"
                        style={{ y: heroY }}
                    />
                </div>

                <motion.div className="container" style={{ opacity: heroOpacity }}>
                    <div className="portfolio-page__hero-content">
                        <motion.div
                            className="portfolio-page__badge"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Layers size={16} />
                            <span>Our Work</span>
                        </motion.div>

                        <motion.h1
                            className="portfolio-page__title"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                        >
                            Our{' '}
                            <span className="portfolio-page__title-gradient">Portfolio</span>
                        </motion.h1>

                        <motion.p
                            className="portfolio-page__subtitle"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Showcasing our best work and success stories. Each project represents 
                            our commitment to excellence and innovation.
                        </motion.p>
                    </div>
                </motion.div>
            </section>

            {/* Projects Section */}
            <section className="portfolio-page__section">
                <div className="container">
                    <SectionTitle
                        eyebrow="Featured Projects"
                        title="Work That Speaks for Itself"
                        centered
                        gradient
                    />

                    {/* Filters */}
                    <motion.div 
                        className="portfolio-page__filters"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                className={`portfolio-page__filter ${activeFilter === filter ? 'portfolio-page__filter--active' : ''}`}
                                onClick={() => setActiveFilter(filter)}
                            >
                                {filter}
                            </button>
                        ))}
                    </motion.div>

                    {/* Projects Grid */}
                    <motion.div
                        className="portfolio-page__grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        key={activeFilter}
                    >
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={index}
                                className="portfolio-page__card"
                                variants={itemVariants}
                            >
                                <div className="portfolio-page__card-image">
                                    <img src={project.image} alt={project.title} />
                                    <div className="portfolio-page__card-overlay">
                                        <div className="portfolio-page__card-overlay-content">
                                            <span className="portfolio-page__card-view">
                                                <ExternalLink size={16} />
                                                View Project
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio-page__card-content">
                                    <span className="portfolio-page__card-category">{project.category}</span>
                                    <h3 className="portfolio-page__card-title">{project.title}</h3>
                                    <p className="portfolio-page__card-description">{project.description}</p>
                                    <div className="portfolio-page__card-tags">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="portfolio-page__card-tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="portfolio-page__cta">
                <div className="container">
                    <motion.div
                        className="portfolio-page__cta-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="portfolio-page__cta-title">Have a Project in Mind?</h2>
                        <p className="portfolio-page__cta-subtitle">
                            Let&apos;s work together to bring your ideas to life. We&apos;d love to hear about your next project.
                        </p>
                        <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
                            Start a Project
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Portfolio
