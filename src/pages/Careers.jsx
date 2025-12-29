import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { 
    Briefcase, 
    MapPin, 
    Clock, 
    Heart, 
    DollarSign, 
    Globe, 
    BookOpen, 
    Users, 
    Coffee,
    ArrowRight,
    Mail
} from 'lucide-react'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import './Careers.css'

const Careers = () => {
    const heroRef = useRef(null)
    
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    })

    const heroY = useTransform(scrollYProgress, [0, 1], [0, 200])
    const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    const benefits = [
        {
            icon: DollarSign,
            title: 'Competitive Salary',
            description: 'Industry-leading compensation packages',
        },
        {
            icon: Globe,
            title: 'Remote Work',
            description: 'Flexible work-from-anywhere policy',
        },
        {
            icon: Heart,
            title: 'Health Insurance',
            description: 'Comprehensive health coverage',
        },
        {
            icon: BookOpen,
            title: 'Learning Budget',
            description: 'Annual professional development fund',
        },
        {
            icon: Users,
            title: 'Great Team',
            description: 'Collaborative global team culture',
        },
        {
            icon: Coffee,
            title: 'Work-Life Balance',
            description: 'Flexible hours and PTO policy',
        },
    ]

    const openings = [
        {
            title: 'Senior Full Stack Developer',
            location: 'Remote (India/UAE)',
            type: 'Full-time',
            description: 'Join our team to build scalable web applications using React, Node.js, and cloud technologies.',
            skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
            posted: '2 days ago',
        },
        {
            title: 'UI/UX Designer',
            location: 'Remote',
            type: 'Full-time',
            description: 'Create beautiful, intuitive interfaces and contribute to our design system.',
            skills: ['Figma', 'Design Systems', 'Prototyping', 'User Research'],
            posted: '1 week ago',
        },
        {
            title: 'Digital Marketing Specialist',
            location: 'Bangalore, India',
            type: 'Full-time',
            description: 'Drive digital marketing initiatives including SEO, content, and social media strategies.',
            skills: ['SEO', 'Content Strategy', 'Analytics', 'Social Media'],
            posted: '3 days ago',
        },
        {
            title: 'DevOps Engineer',
            location: 'Remote',
            type: 'Full-time',
            description: 'Build and maintain our cloud infrastructure and CI/CD pipelines.',
            skills: ['AWS', 'Kubernetes', 'Docker', 'Terraform'],
            posted: '5 days ago',
        },
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
        <div className="careers-page">
            {/* Hero Section */}
            <section ref={heroRef} className="careers-page__hero">
                <div className="careers-page__hero-bg">
                    <div className="careers-page__hero-gradient"></div>
                    <motion.div 
                        className="careers-page__hero-orb careers-page__hero-orb--1"
                        style={{ y: heroY }}
                    />
                    <motion.div 
                        className="careers-page__hero-orb careers-page__hero-orb--2"
                        style={{ y: heroY }}
                    />
                </div>

                <motion.div className="container" style={{ opacity: heroOpacity }}>
                    <div className="careers-page__hero-content">
                        <motion.div
                            className="careers-page__badge"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Briefcase size={16} />
                            <span>We&apos;re Hiring</span>
                        </motion.div>

                        <motion.h1
                            className="careers-page__title"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                        >
                            Join Our{' '}
                            <span className="careers-page__title-gradient">Team</span>
                        </motion.h1>

                        <motion.p
                            className="careers-page__subtitle"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Build your career with a global team of innovators. We&apos;re looking for 
                            talented individuals who are passionate about creating impactful solutions.
                        </motion.p>
                    </div>
                </motion.div>
            </section>

            {/* Why Join Section */}
            <section className="careers-page__why">
                <div className="container">
                    <SectionTitle
                        eyebrow="Why Sammunat"
                        title="Why Work With Us"
                        subtitle="We believe in creating an environment where talent thrives and innovation flourishes."
                        centered
                        gradient
                    />

                    <motion.div
                        className="careers-page__benefits-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                className="careers-page__benefit-card"
                                variants={itemVariants}
                            >
                                <div className="careers-page__benefit-icon">
                                    <benefit.icon />
                                </div>
                                <h3 className="careers-page__benefit-title">{benefit.title}</h3>
                                <p className="careers-page__benefit-description">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="careers-page__positions">
                <div className="container">
                    <SectionTitle
                        eyebrow="Open Positions"
                        title="Current Opportunities"
                        subtitle="Find your perfect role and help us build the future of digital solutions."
                        centered
                        gradient
                    />

                    <div className="careers-page__positions-list">
                        {openings.map((job, index) => (
                            <motion.div
                                key={index}
                                className="careers-page__position-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="careers-page__position-header">
                                    <div>
                                        <h3 className="careers-page__position-title">{job.title}</h3>
                                        <div className="careers-page__position-meta">
                                            <span className="careers-page__position-meta-item">
                                                <MapPin />
                                                {job.location}
                                            </span>
                                            <span className="careers-page__position-meta-item">
                                                <Clock />
                                                {job.type}
                                            </span>
                                        </div>
                                    </div>
                                    <span className="careers-page__position-badge">New</span>
                                </div>
                                
                                <p className="careers-page__position-description">{job.description}</p>
                                
                                <div className="careers-page__position-skills">
                                    {job.skills.map((skill, i) => (
                                        <span key={i} className="careers-page__position-skill">{skill}</span>
                                    ))}
                                </div>
                                
                                <div className="careers-page__position-footer">
                                    <span className="careers-page__position-date">Posted {job.posted}</span>
                                    <Button variant="primary" icon={ArrowRight} iconPosition="right">
                                        Apply Now
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="careers-page__cta">
                <div className="container">
                    <motion.div
                        className="careers-page__cta-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="careers-page__cta-title">Don&apos;t See the Right Role?</h2>
                        <p className="careers-page__cta-subtitle">
                            We&apos;re always looking for talented people. Send us your resume 
                            and we&apos;ll keep you in mind for future opportunities.
                        </p>
                        <a href="mailto:careers@sammunat.com" className="careers-page__cta-email">
                            <Mail size={20} />
                            careers@sammunat.com
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Careers
