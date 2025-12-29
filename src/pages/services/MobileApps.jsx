import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowRight, Smartphone, Layers, Rocket, Globe, CheckCircle, Zap, Shield } from 'lucide-react'
import SectionTitle from '../../components/ui/SectionTitle'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import '../../components/home/ServicesSection.css'

const MobileAppsService = () => {
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
        { icon: Smartphone, title: 'Native & Cross-Platform', description: 'iOS, Android, or both - we build apps that feel native on every platform' },
        { icon: Layers, title: 'Seamless UX', description: 'Intuitive interfaces designed for mobile-first experiences' },
        { icon: Rocket, title: 'Fast Development', description: 'Rapid prototyping and iterative development for quick time-to-market' },
        { icon: Globe, title: 'Cloud Integration', description: 'Backend services, APIs, and cloud infrastructure included' },
    ]

    const capabilities = [
        { icon: CheckCircle, title: 'Platform Expertise', items: ['Native iOS (Swift)', 'Native Android (Kotlin)', 'Cross-platform (React Native, Flutter)'] },
        { icon: Zap, title: 'Performance Optimization', items: ['60fps animations', 'Lazy loading', 'Memory management'] },
        { icon: Shield, title: 'App Security', items: ['Secure data storage', 'API encryption', 'Biometric authentication'] },
        { icon: Globe, title: 'Backend Services', items: ['RESTful APIs', 'Push notifications', 'Real-time sync'] },
    ]

    const appFeatures = [
        'User Authentication & Authorization',
        'Push Notifications',
        'Offline Mode & Data Sync',
        'In-App Purchases',
        'Social Media Integration',
        'Maps & Geolocation',
        'Camera & Media',
        'Analytics & Tracking',
        'Deep Linking',
        'Biometric Security',
        'AR/VR Capabilities',
        'Payment Gateway Integration',
    ]

    const process = [
        { step: '01', title: 'Strategy', description: 'Define app goals, features, and user flows' },
        { step: '02', title: 'Design', description: 'Create stunning UI/UX with prototypes' },
        { step: '03', title: 'Develop', description: 'Build with React Native or native code' },
        { step: '04', title: 'Deploy', description: 'Launch to App Store and Google Play' },
    ]

    const technologies = ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'GraphQL', 'Redux', 'Expo', 'TypeScript', 'Jest', 'Fastlane', 'App Center']

    return (
        <div className="service-detail-page">
            <section className="hero" style={{ minHeight: '70vh' }}>
                <div className="hero__background"></div>
                <div className="container">
                    <div className="hero__content" style={{ paddingTop: '120px' }}>
                        <motion.div className="hero__badge" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                            <Smartphone size={16} />
                            <span>Mobile App Development</span>
                        </motion.div>
                        <motion.h1 className="hero__headline" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                            Create Amazing <span className="text-gradient">Mobile Experiences</span>
                        </motion.h1>
                        <motion.p className="hero__subheadline" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                            Native and cross-platform mobile apps that users love. We build iOS and Android applications with beautiful designs,
                            powerful functionality, and seamless performance that drives engagement and retention.
                        </motion.p>
                        <motion.div className="hero__cta" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                            <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right">Start Your App</Button>
                            <Button variant="outline" size="lg">See Our Apps</Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <SectionTitle eyebrow="Why Choose Us" title="Mobile Excellence" centered gradient />
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
                    <SectionTitle eyebrow="Core Capabilities" title="Everything Your Mobile App Needs" subtitle="We provide complete mobile app development services from concept to deployment" centered />
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
                    <SectionTitle eyebrow="Features" title="Mobile App Features We Build" subtitle="From basic functionality to advanced capabilities" centered gradient />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '48px' }}>
                        {appFeatures.map((feature, index) => (
                            <motion.div key={index} style={{ padding: '16px 20px', background: 'white', borderRadius: '12px', textAlign: 'center', fontWeight: '500', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', fontSize: '15px' }} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)' }}>
                                {feature}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: '#F8FAFC' }}>
                <div className="container">
                    <SectionTitle eyebrow="Our Process" title="From Idea to App Store" centered gradient />
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

            <section className="section">
                <div className="container">
                    <SectionTitle eyebrow="Technology Stack" title="Cutting-Edge Mobile Technologies" centered />
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', marginTop: '40px' }}>
                        {technologies.map((tech, index) => (
                            <motion.div key={index} style={{ padding: '12px 24px', background: 'white', borderRadius: '12px', fontWeight: '600', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)' }}>
                                {tech}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: '#F8FAFC' }}>
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

export default MobileAppsService
