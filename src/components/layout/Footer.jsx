import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Linkedin, Instagram, Mail, MapPin, ArrowRight, Send, Heart, ExternalLink } from 'lucide-react'
import { useRef, useState } from 'react'
import logo from '../../assets/images/logo.png'
import './Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    const footerRef = useRef(null)
    const [email, setEmail] = useState('')
    const [isHovered, setIsHovered] = useState(null)

    const { scrollYProgress } = useScroll({
        target: footerRef,
        offset: ["start end", "end end"]
    })

    const opacity = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])
    const y = useTransform(scrollYProgress, [0, 1], [50, 0])

    const footerLinks = {
        company: [
            { name: 'About Us', path: '/about' },
            { name: 'Services', path: '/services' },
            { name: 'Portfolio', path: '/portfolio' },
            { name: 'Careers', path: '/careers', badge: 'Hiring' },
        ],
        services: [
            { name: 'Web Development', path: '/services#web' },
            { name: 'Mobile Apps', path: '/services#mobile' },
            { name: 'CRM/ERP Systems', path: '/services#crm' },
            { name: 'Digital Marketing', path: '/services#marketing' },
        ],
        resources: [
            { name: 'Blog', path: '/blog' },
            { name: 'Case Studies', path: '/portfolio' },
            { name: 'Contact Support', path: '/contact' },
        ],
    }

    const socialLinks = [
        { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/sammunat' },
        { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/sammunat' },
    ]

    const locations = [
        { flag: '🇺🇸', city: 'Missoula, Montana, USA' },
        { flag: '🇦🇪', city: 'Dubai, UAE' },
        { flag: '🇮🇳', city: 'Bangalore, India' },
    ]

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle newsletter subscription
        console.log('Subscribing:', email)
        setEmail('')
    }

    return (
        <footer ref={footerRef} className="footer">
            {/* Decorative Background */}
            <div className="footer__background">
                <div className="footer__gradient"></div>
                <div className="footer__mesh"></div>
                <div className="footer__grid-pattern"></div>
            </div>

            <motion.div className="container" style={{ opacity, y }}>
                {/* Newsletter Section */}
                <motion.div 
                    className="footer__newsletter"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="footer__newsletter-content">
                        <h3>Stay Updated</h3>
                        <p>Get the latest insights on digital transformation and tech trends.</p>
                    </div>
                    <form className="footer__newsletter-form" onSubmit={handleSubmit}>
                        <div className="footer__newsletter-input-wrapper">
                            <Mail className="footer__newsletter-icon" size={18} />
                            <input 
                                type="email" 
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="footer__newsletter-input"
                                required
                            />
                        </div>
                        <motion.button 
                            type="submit" 
                            className="footer__newsletter-button"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Subscribe
                            <Send size={16} />
                        </motion.button>
                    </form>
                </motion.div>

                {/* Main Footer Content */}
                <div className="footer__main">
                    {/* Brand Section */}
                    <motion.div 
                        className="footer__brand"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link to="/" className="footer__logo">
                            <img src={logo} alt="Sammunat" className="footer__logo-img" />
                        </Link>
                        <p className="footer__tagline">
                            Transforming Business with Custom Digital Solutions. We help companies build 
                            scalable software that drives growth.
                        </p>
                        <div className="footer__social">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer__social-link"
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={social.name}
                                >
                                    <social.icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Links Columns */}
                    <div className="footer__links">
                        <motion.div 
                            className="footer__link-column"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h4 className="footer__link-title">Company</h4>
                            <ul className="footer__link-list">
                                {footerLinks.company.map((link) => (
                                    <li key={link.path}>
                                        <Link 
                                            to={link.path} 
                                            className="footer__link"
                                            onMouseEnter={() => setIsHovered(link.name)}
                                            onMouseLeave={() => setIsHovered(null)}
                                        >
                                            <span>{link.name}</span>
                                            {link.badge && (
                                                <span className="footer__link-badge">{link.badge}</span>
                                            )}
                                            <ArrowRight 
                                                size={14} 
                                                className={`footer__link-arrow ${isHovered === link.name ? 'visible' : ''}`} 
                                            />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div 
                            className="footer__link-column"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h4 className="footer__link-title">Services</h4>
                            <ul className="footer__link-list">
                                {footerLinks.services.map((link) => (
                                    <li key={link.path}>
                                        <Link 
                                            to={link.path} 
                                            className="footer__link"
                                            onMouseEnter={() => setIsHovered(link.name)}
                                            onMouseLeave={() => setIsHovered(null)}
                                        >
                                            <span>{link.name}</span>
                                            <ArrowRight 
                                                size={14} 
                                                className={`footer__link-arrow ${isHovered === link.name ? 'visible' : ''}`} 
                                            />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div 
                            className="footer__link-column"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <h4 className="footer__link-title">Resources</h4>
                            <ul className="footer__link-list">
                                {footerLinks.resources.map((link) => (
                                    <li key={link.path}>
                                        <Link 
                                            to={link.path} 
                                            className="footer__link"
                                            onMouseEnter={() => setIsHovered(link.name)}
                                            onMouseLeave={() => setIsHovered(null)}
                                        >
                                            <span>{link.name}</span>
                                            <ArrowRight 
                                                size={14} 
                                                className={`footer__link-arrow ${isHovered === link.name ? 'visible' : ''}`} 
                                            />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Contact Section */}
                    <motion.div 
                        className="footer__contact"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h4 className="footer__link-title">Get in Touch</h4>
                        <a href="mailto:info@sammunat.com" className="footer__contact-email">
                            <Mail size={18} />
                            <span>info@sammunat.com</span>
                            <ExternalLink size={14} />
                        </a>
                        
                        <div className="footer__locations">
                            <h5 className="footer__locations-title">
                                <MapPin size={16} />
                                <span>Global Offices</span>
                            </h5>
                            {locations.map((location, index) => (
                                <motion.div 
                                    key={index} 
                                    className="footer__location"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                                >
                                    <span className="footer__location-flag">{location.flag}</span>
                                    <span className="footer__location-city">{location.city}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div 
                    className="footer__bottom"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <p className="footer__copyright">
                        © {currentYear} Sammunat LLC. Crafted with{' '}
                        <Heart size={14} className="footer__heart" />{' '}
                        All rights reserved.
                    </p>
                    <div className="footer__legal">
                        <Link to="/privacy" className="footer__legal-link">
                            Privacy Policy
                        </Link>
                        <span className="footer__legal-divider">•</span>
                        <Link to="/terms" className="footer__legal-link">
                            Terms of Service
                        </Link>
                    </div>
                </motion.div>
            </motion.div>
        </footer>
    )
}

export default Footer
