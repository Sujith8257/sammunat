import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowRight, Database, BarChart3, Users2, Settings, CheckCircle, Shield, Zap } from 'lucide-react'
import SectionTitle from '../../components/ui/SectionTitle'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import '../../components/home/ServicesSection.css'

const CRMERPService = () => {
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
        { icon: Database, title: 'Centralized Data', description: 'All your business data in one secure, accessible location' },
        { icon: BarChart3, title: 'Real-time Analytics', description: 'Make data-driven decisions with powerful reporting and insights' },
        { icon: Users2, title: 'Team Collaboration', description: 'Streamlined workflows that connect your entire organization' },
        { icon: Settings, title: 'Custom Workflows', description: 'Tailored to match your unique business processes' },
    ]

    const capabilities = [
        { icon: CheckCircle, title: 'Customer Management', items: ['360° customer view', 'Lead tracking & scoring', 'Customer service tools'] },
        { icon: Shield, title: 'Data Security', items: ['Role-based access', 'Data encryption', 'Audit trails'] },
        { icon: Zap, title: 'Automation', items: ['Workflow automation', 'Email marketing', 'Task management'] },
        { icon: BarChart3, title: 'Business Intelligence', items: ['Custom dashboards', 'Advanced reporting', 'Predictive analytics'] },
    ]

    const modules = [
        'Customer Relationship Management (CRM)',
        'Sales & Order Management',
        'Inventory & Warehouse Management',
        'Financial Management & Accounting',
        'Human Resources & Payroll',
        'Procurement & Supply Chain',
        'Project Management',
        'Reporting & Analytics',
        'Marketing Automation',
        'Customer Support Portal',
        'Document Management',
        'Multi-Currency Support',
    ]

    const benefits = [
        { title: 'Increased Efficiency', description: 'Automate routine tasks and streamline operations' },
        { title: 'Better Decision Making', description: 'Real-time data and insights at your fingertips' },
        { title: 'Improved Collaboration', description: 'Connect teams and departments seamlessly' },
        { title: 'Scalability', description: 'Grow your system as your business expands' },
        { title: 'Cost Reduction', description: 'Eliminate redundancies and optimize resources' },
        { title: 'Enhanced Customer Service', description: 'Deliver better experiences with complete customer data' },
    ]

    return (
        <div className="service-detail-page">
            <section className="hero" style={{ minHeight: '70vh' }}>
                <div className="hero__background"></div>
                <div className="container">
                    <div className="hero__content" style={{ paddingTop: '120px' }}>
                        <motion.div className="hero__badge" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                            <Database size={16} />
                            <span>CRM & ERP Systems</span>
                        </motion.div>
                        <motion.h1 className="hero__headline" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                            Streamline Your <span className="text-gradient">Business Operations</span>
                        </motion.h1>
                        <motion.p className="hero__subheadline" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                            Enterprise-grade CRM and ERP solutions that centralize your data, automate workflows, and drive efficiency across your organization.
                            Transform how you manage customers, inventory, finances, and teams with our custom-built systems.
                        </motion.p>
                        <motion.div className="hero__cta" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                            <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right">Request Demo</Button>
                            <Button variant="outline" size="lg">See Case Studies</Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <SectionTitle eyebrow="Why Choose Us" title="Transform Your Business Operations" centered gradient />
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
                    <SectionTitle eyebrow="Core Capabilities" title="Comprehensive CRM & ERP Features" subtitle="Everything you need to manage your entire business in one platform" centered />
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
                    <SectionTitle eyebrow="Modules" title="Comprehensive Business Modules" subtitle="Modular architecture that grows with your needs" centered gradient />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '48px' }}>
                        {modules.map((module, index) => (
                            <motion.div key={index} style={{ padding: '20px', background: 'white', borderRadius: '12px', textAlign: 'center', fontWeight: '600', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)' }}>
                                {module}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: '#F8FAFC' }}>
                <div className="container">
                    <SectionTitle eyebrow="Benefits" title="Why Invest in CRM & ERP?" centered />
                    <div className="services__grid">
                        {benefits.map((benefit, index) => (
                            <motion.div key={index} style={{ background: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ transform: 'translateY(-4px)', boxShadow: '0 8px 16px rgba(0,0,0,0.1)' }}>
                                <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: '#1E293B' }}>{benefit.title}</h3>
                                <p style={{ color: '#64748B', lineHeight: '1.6' }}>{benefit.description}</p>
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

export default CRMERPService
