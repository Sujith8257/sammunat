import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Mail, Phone, Send, MessageCircle, Linkedin, Instagram } from 'lucide-react'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import AnimatedMap from '../components/ui/AnimatedMap'
import './Contact.css'

const Contact = () => {
    const heroRef = useRef(null)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
    })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    })

    const heroY = useTransform(scrollYProgress, [0, 1], [0, 200])
    const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newErrors = {}

        if (!formData.name) newErrors.name = 'Name is required'
        if (!formData.email) newErrors.email = 'Email is required'
        if (!formData.message) newErrors.message = 'Message is required'

        setErrors(newErrors)

        if (Object.keys(newErrors).length === 0) {
            setIsSubmitting(true)
            // Simulate form submission
            await new Promise(resolve => setTimeout(resolve, 1000))
            console.log('Form submitted:', formData)
            alert('Thank you! We will get back to you soon.')
            setFormData({ name: '', email: '', company: '', message: '' })
            setIsSubmitting(false)
        }
    }

    const socialLinks = [
        { icon: Linkedin, url: 'https://linkedin.com/company/sammunat', label: 'LinkedIn' },
        { icon: Instagram, url: 'https://instagram.com/sammunat', label: 'Instagram' },
    ]

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section ref={heroRef} className="contact-page__hero">
                <div className="contact-page__hero-bg">
                    <div className="contact-page__hero-gradient"></div>
                    <motion.div 
                        className="contact-page__hero-orb contact-page__hero-orb--1"
                        style={{ y: heroY }}
                    />
                    <motion.div 
                        className="contact-page__hero-orb contact-page__hero-orb--2"
                        style={{ y: heroY }}
                    />
                </div>

                <motion.div className="container" style={{ opacity: heroOpacity }}>
                    <div className="contact-page__hero-content">
                        <motion.div
                            className="contact-page__badge"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <MessageCircle size={16} />
                            <span>Get in Touch</span>
                        </motion.div>

                        <motion.h1
                            className="contact-page__title"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                        >
                            Let&apos;s{' '}
                            <span className="contact-page__title-gradient">Connect</span>
                        </motion.h1>

                        <motion.p
                            className="contact-page__subtitle"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Have a project in mind? We&apos;d love to hear from you. 
                            Let&apos;s discuss how we can help transform your business.
                        </motion.p>
                    </div>
                </motion.div>
            </section>

            {/* Main Section */}
            <section className="contact-page__section">
                <div className="container">
                    <div className="contact-page__grid">
                        {/* Contact Form */}
                        <motion.div
                            className="contact-page__form-wrapper"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="contact-page__form-title">Send us a message</h2>
                            <p className="contact-page__form-subtitle">
                                Fill out the form below and we&apos;ll get back to you within 24 hours.
                            </p>
                            
                            <form className="contact-page__form" onSubmit={handleSubmit}>
                                <div className="contact-page__form-row">
                                    <Input
                                        label="Your Name"
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        error={errors.name}
                                        required
                                    />
                                    <Input
                                        label="Email Address"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        error={errors.email}
                                        required
                                    />
                                </div>
                                <Input
                                    label="Company (Optional)"
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                />
                                <Input
                                    label="Your Message"
                                    type="textarea"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    error={errors.message}
                                    required
                                />
                                <Button 
                                    type="submit" 
                                    variant="primary" 
                                    size="lg" 
                                    className="w-full"
                                    icon={Send}
                                    iconPosition="right"
                                    isLoading={isSubmitting}
                                >
                                    Send Message
                                </Button>
                            </form>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            className="contact-page__info"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Quick Contact */}
                            <div className="contact-page__info-card">
                                <h3 className="contact-page__info-title">Contact Information</h3>
                                
                                <div className="contact-page__info-item">
                                    <div className="contact-page__info-icon">
                                        <Mail />
                                    </div>
                                    <div className="contact-page__info-content">
                                        <h4>Email</h4>
                                        <p><a href="mailto:info@sammunat.com">info@sammunat.com</a></p>
                                    </div>
                                </div>

                                <div className="contact-page__info-item">
                                    <div className="contact-page__info-icon">
                                        <Phone />
                                    </div>
                                    <div className="contact-page__info-content">
                                        <h4>Phone</h4>
                                        <p>Available upon request</p>
                                    </div>
                                </div>
                            </div>

                            {/* Animated Map */}
                            <div className="contact-page__map-wrapper">
                                <h3 className="contact-page__map-title">Our Global Offices</h3>
                                <AnimatedMap />
                            </div>

                            {/* Social Links */}
                            <div className="contact-page__social-wrapper">
                                <h4 className="contact-page__social-title">Connect With Us</h4>
                                <div className="contact-page__social">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="contact-page__social-link"
                                            aria-label={social.label}
                                        >
                                            <social.icon size={20} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
