import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowRight, Palette, Figma, Layout, Eye, CheckCircle, Users, Zap } from 'lucide-react'
import SectionTitle from '../../components/ui/SectionTitle'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import '../../components/home/ServicesSection.css'

const UIUXService = () => {
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
        { icon: Eye, title: 'User-Centered Design', description: 'Research-driven designs focused on user needs and behaviors' },
        { icon: Layout, title: 'Wireframing & Prototyping', description: 'Interactive prototypes to validate ideas before development' },
        { icon: Figma, title: 'Design Systems', description: 'Scalable component libraries for consistent experiences' },
        { icon: Palette, title: 'Visual Design', description: 'Beautiful interfaces that align with your brand identity' },
    ]

    const capabilities = [
        { icon: Users, title: 'User Research', items: ['User interviews', 'Persona development', 'Journey mapping'] },
        { icon: Layout, title: 'UX Design', items: ['Information architecture', 'Wireframes & flowcharts', 'Usability testing'] },
        { icon: Palette, title: 'Visual Design', items: ['UI mockups', 'Brand guidelines', 'Icon & illustration'] },
        { icon: Zap, title: 'Interaction Design', items: ['Micro-interactions', 'Animation design', 'Prototyping'] },
    ]

    const designServices = [
        'User Experience (UX) Design',
        'User Interface (UI) Design',
        'Mobile App Design',
        'Web Application Design',
        'Design System Development',
        'Brand Identity Design',
        'Responsive Design',
        'Accessibility Design (WCAG)',
        'Usability Testing',
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Design Audits',
    ]

    const designPrinciples = [
        { title: 'User-Centric', description: 'Every design decision is based on user needs and behaviors' },
        { title: 'Simplicity', description: 'Clear, intuitive interfaces that reduce cognitive load' },
        { title: 'Consistency', description: 'Unified design language across all touchpoints' },
        { title: 'Accessibility', description: 'Inclusive designs that work for everyone' },
        { title: 'Data-Driven', description: 'Design decisions backed by research and analytics' },
        { title: 'Iterative', description: 'Continuous improvement based on user feedback' },
    ]

    const process = [
        { step: '01', title: 'Research', description: 'Understanding users and business goals' },
        { step: '02', title: 'Wireframe', description: 'Mapping user flows and layouts' },
        { step: '03', title: 'Design', description: 'Creating high-fidelity mockups' },
        { step: '04', title: 'Prototype', description: 'Interactive prototypes for testing' },
    ]

    const tools = ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Miro', 'Principle', 'Framer', 'Zeplin', 'Photoshop', 'Illustrator', 'After Effects', 'Maze']

    return (
        <div className="service-detail-page">
            <section className="hero" style={{ minHeight: '70vh' }}>
                <div className="hero__background"></div>
                <div className="container">
                    <div className="hero__content" style={{ paddingTop: '120px' }}>
                        <motion.div className="hero__badge" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                            <Palette size={16} />
                            <span>UI/UX Design</span>
                        </motion.div>
                        <motion.h1 className="hero__headline" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                            Design <span className="text-gradient">Exceptional Experiences</span>
                        </motion.h1>
                        <motion.p className="hero__subheadline" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                            User-centered design that combines beauty with functionality. We create intuitive interfaces that users love and businesses need.
                            From research to final designs, we deliver experiences that drive engagement and conversion.
                        </motion.p>
                        <motion.div className="hero__cta" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                            <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right">Start Designing</Button>
                            <Button variant="outline" size="lg">View Design Work</Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <SectionTitle eyebrow="Our Approach" title="Design That Drives Results" centered gradient />
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

            <section className="section" style={{ background: '#F8FAFC' }}>
                <div className="container">
                    <SectionTitle eyebrow="Design Capabilities" title="Complete Design Services" subtitle="From research to pixel-perfect designs and prototypes" centered />
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

            <section className="section">
                <div className="container">
                    <SectionTitle eyebrow="Services" title="Design Services We Offer" subtitle="Comprehensive UI/UX solutions for all platforms" centered gradient />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '48px' }}>
                        {designServices.map((service, index) => (
                            <motion.div key={index} style={{ padding: '20px', background: 'white', borderRadius: '12px', textAlign: 'center', fontWeight: '600', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)' }}>
                                {service}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: '#F8FAFC' }}>
                <div className="container">
                    <SectionTitle eyebrow="Design Principles" title="Our Design Philosophy" centered />
                    <div className="services__grid">
                        {designPrinciples.map((principle, index) => (
                            <motion.div key={index} style={{ background: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ transform: 'translateY(-4px)', boxShadow: '0 8px 16px rgba(0,0,0,0.1)' }}>
                                <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: '#1E293B' }}>{principle.title}</h3>
                                <p style={{ color: '#64748B', lineHeight: '1.6' }}>{principle.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <SectionTitle eyebrow="Design Process" title="From Concept to Perfect Design" centered gradient />
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

            <section className="section" style={{ background: '#F8FAFC' }}>
                <div className="container">
                    <SectionTitle eyebrow="Tools" title="Professional Design Tools" centered />
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', marginTop: '40px' }}>
                        {tools.map((tool, index) => (
                            <motion.div key={index} style={{ padding: '12px 24px', background: 'white', borderRadius: '12px', fontWeight: '600', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)' }}>
                                {tool}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <SectionTitle eyebrow="Get in Touch" title="Have a project in mind?" subtitle="Let's work together to bring your ideas to life. Fill out the form below or reach out via email." centered gradient />
                        <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginTop: '48px' }}>
                            <Input label="Your Name" type="text" name="name" value={formData.name} onChange={handleChange} error={errors.name} required />
                            <Input label="Your Email" type="email" name="email" value={formData.email} onChange={handleChange} error={errors.error} required />
                            <Input label="Your Message" type="textarea" name="message" value={formData.message} onChange={handleChange} error={errors.message} required />
                            <Button type="submit" variant="primary" size="lg" className="w-full">Send Message</Button>
                        </motion.form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default UIUXService
