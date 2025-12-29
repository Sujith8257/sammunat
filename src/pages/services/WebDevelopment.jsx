import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowRight, Code2, Zap, Shield, Users, CheckCircle, Rocket, Target } from 'lucide-react'
import SectionTitle from '../../components/ui/SectionTitle'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import '../../components/home/ServicesSection.css'

const WebDevelopmentService = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newErrors = {}
        if (!formData.name) newErrors.name = 'Name is required'
        if (!formData.email) newErrors.email = 'Email is required'
        if (!formData.message) newErrors.message = 'Message is required'
        setErrors(newErrors)
        if (Object.keys(newErrors).length === 0) {
            alert('Thank you! We will get back to you soon.')
            setFormData({ name: '', email: '', message: '' })
        }
    }

    const features = [
        { icon: Code2, title: 'Custom Development', description: 'Tailored solutions built from scratch to meet your exact requirements' },
        { icon: Zap, title: 'Fast Performance', description: 'Optimized code for lightning-fast load times and smooth user experience' },
        { icon: Shield, title: 'Secure & Reliable', description: 'Enterprise-grade security with regular updates and maintenance' },
        { icon: Users, title: 'Scalable Architecture', description: 'Built to grow with your business from startup to enterprise' },
    ]

    const capabilities = [
        { icon: CheckCircle, title: 'Responsive Design', items: ['Mobile-first approach', 'Cross-browser compatibility', 'Adaptive layouts'] },
        { icon: Rocket, title: 'Modern Technologies', items: ['React, Vue, Angular', 'Node.js, Python, PHP', 'Cloud deployment'] },
        { icon: Target, title: 'Business Focus', items: ['ROI-driven development', 'Conversion optimization', 'Analytics integration'] },
        { icon: Shield, title: 'Security First', items: ['SSL/HTTPS encryption', 'GDPR compliance', 'Regular security audits'] },
    ]

    const process = [
        { step: '01', title: 'Discovery', description: 'Understanding your goals, target audience, and requirements' },
        { step: '02', title: 'Design', description: 'Creating wireframes and visual designs for your approval' },
        { step: '03', title: 'Development', description: 'Building your website with clean, maintainable code' },
        { step: '04', title: 'Launch', description: 'Testing, deployment, and ongoing support' },
    ]

    const technologies = ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'REST APIs', 'GraphQL', 'Redis']

    return (
        <div className="service-detail-page">
            {/* Hero */}
            <section className="hero" style={{ minHeight: '70vh' }}>
                <div className="hero__background"></div>
                <div className="container">
                    <div className="hero__content" style={{ paddingTop: '120px' }}>
                        <motion.div className="hero__badge" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                            <Code2 size={16} />
                            <span>Web Development</span>
                        </motion.div>
                        <motion.h1 className="hero__headline" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                            Build Powerful <span className="text-gradient">Web Applications</span>
                        </motion.h1>
                        <motion.p className="hero__subheadline" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                            Custom web solutions that drive growth. From responsive websites to complex web applications,
                            we deliver scalable, secure, and high-performance solutions tailored to your business needs.
                        </motion.p>
                        <motion.div className="hero__cta" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                            <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right">Get Started</Button>
                            <Button variant="outline" size="lg">View Portfolio</Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="section">
                <div className="container">
                    <SectionTitle eyebrow="Why Choose Us" title="What Makes Our Web Development Stand Out" centered gradient />
                    <div className="services__grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                        {features.map((feature, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                                <Card icon={feature.icon} hover>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Capabilities */}
            <section className="section" style={{ background: '#F8FAFC' }}>
                <div className="container">
                    <SectionTitle eyebrow="Our Expertise" title="Comprehensive Web Development Capabilities" subtitle="We provide end-to-end web development services that cover every aspect of your digital presence" centered />
                    <div className="services__grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                        {capabilities.map((cap, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                                <Card icon={cap.icon} hover>
                                    <h3>{cap.title}</h3>
                                    <ul style={{ marginTop: '16px', listStyle: 'none', padding: 0 }}>
                                        {cap.items.map((item, i) => (
                                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#64748B' }}>
                                                <span style={{ color: '#6366F1' }}>●</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="section">
                <div className="container">
                    <SectionTitle eyebrow="Our Process" title="How We Work" subtitle="A proven methodology that delivers results" centered gradient />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', marginTop: '48px' }}>
                        {process.map((item, index) => (
                            <motion.div key={index} style={{ textAlign: 'center' }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                                <div style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', fontWeight: '800', color: 'white', margin: '0 auto 24px' }}>
                                    {item.step}
                                </div>
                                <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>{item.title}</h3>
                                <p style={{ color: '#64748B' }}>{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies */}
            <section className="section" style={{ background: '#F8FAFC' }}>
                <div className="container">
                    <SectionTitle eyebrow="Technology Stack" title="Modern Technologies We Use" subtitle="We work with cutting-edge technologies to build future-proof solutions" centered />
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', marginTop: '40px' }}>
                        {technologies.map((tech, index) => (
                            <motion.div key={index} style={{ padding: '12px 24px', background: 'white', borderRadius: '12px', fontWeight: '600', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)' }}>
                                {tech}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="section">
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <SectionTitle eyebrow="Get in Touch" title="Have a project in mind?" subtitle="Let's work together to bring your ideas to life. Fill out the form below or reach out via email." centered gradient />
                        <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginTop: '48px' }}>
                            <Input label="Your Name" type="text" name="name" value={formData.name} onChange={handleChange} error={errors.name} required />
                            <Input label="Your Email" type="email" name="email" value={formData.email} onChange={handleChange} error={errors.email} required />
                            <Input label="Your Message" type="textarea" name="message" value={formData.message} onChange={handleChange} error={errors.message} required />
                            <Button type="submit" variant="primary" size="lg" className="w-full">Send Message</Button>
                        </motion.form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WebDevelopmentService
