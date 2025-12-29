import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import { useIsMobile } from '../../hooks/useMediaQuery'
import Button from '../ui/Button'
import logo from '../../assets/images/logo.png'
import './Header.css'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isHidden, setIsHidden] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0)
    const isMobile = useIsMobile()
    const location = useLocation()

    const { scrollYProgress } = useScroll()
    const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            
            // Show/hide header based on scroll direction
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsHidden(true)
            } else {
                setIsHidden(false)
            }
            
            setIsScrolled(currentScrollY > 20)
            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false)
    }, [location])

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isMobileMenuOpen])

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About', path: '/about' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
        { name: 'Careers', path: '/careers' },
    ]

    const menuVariants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3,
                ease: [0.23, 1, 0.32, 1],
                when: "afterChildren",
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        },
        open: {
            opacity: 1,
            height: 'auto',
            transition: {
                duration: 0.4,
                ease: [0.23, 1, 0.32, 1],
                when: "beforeChildren",
                staggerChildren: 0.07,
                delayChildren: 0.1
            }
        }
    }

    const menuItemVariants = {
        closed: {
            opacity: 0,
            x: -20,
            transition: { duration: 0.2 }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] }
        }
    }

    return (
        <>
            <motion.header 
                className={`header ${isScrolled ? 'header--scrolled' : ''} ${isHidden ? 'header--hidden' : ''}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            >
                {/* Progress Bar */}
                <motion.div 
                    className="header__progress-bar"
                    style={{ width: progressWidth }}
                />

                <div className="container">
                    <div className="header__content">
                        {/* Logo */}
                        <Link to="/" className="header__logo">
                            <motion.img 
                                src={logo} 
                                alt="Sammunat" 
                                className="header__logo-img"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        {!isMobile && (
                            <nav className="header__nav">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.path}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 + 0.2 }}
                                    >
                                        <Link
                                            to={link.path}
                                            className={`header__nav-link ${location.pathname === link.path ? 'header__nav-link--active' : ''}`}
                                        >
                                            <span>{link.name}</span>
                                            <span className="header__nav-link-indicator"></span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>
                        )}

                        {/* CTA Button (Desktop) */}
                        {!isMobile && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <Button variant="primary" size="md" icon={ArrowRight} iconPosition="right">
                                    Get Started
                                </Button>
                            </motion.div>
                        )}

                        {/* Mobile Menu Button */}
                        {isMobile && (
                            <motion.button
                                className={`header__menu-button ${isMobileMenuOpen ? 'header__menu-button--active' : ''}`}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                whileTap={{ scale: 0.95 }}
                                aria-label="Toggle menu"
                            >
                                <span className="header__menu-icon">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                            </motion.button>
                        )}
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobile && isMobileMenuOpen && (
                        <motion.div
                            className="header__mobile-menu"
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                        >
                            <div className="header__mobile-menu-bg"></div>
                            <nav className="header__mobile-nav">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.path}
                                        variants={menuItemVariants}
                                    >
                                        <Link
                                            to={link.path}
                                            className={`header__mobile-nav-link ${location.pathname === link.path ? 'header__mobile-nav-link--active' : ''}`}
                                        >
                                            <span className="header__mobile-nav-number">0{index + 1}</span>
                                            <span className="header__mobile-nav-text">{link.name}</span>
                                            <ArrowRight className="header__mobile-nav-arrow" />
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    variants={menuItemVariants}
                                    className="header__mobile-cta"
                                >
                                    <Button variant="primary" size="lg" className="w-full" icon={ArrowRight} iconPosition="right">
                                        Get Started
                                    </Button>
                                </motion.div>

                                {/* Mobile Menu Footer */}
                                <motion.div 
                                    className="header__mobile-footer"
                                    variants={menuItemVariants}
                                >
                                    <p>Ready to transform your business?</p>
                                    <a href="mailto:info@sammunat.com">info@sammunat.com</a>
                                </motion.div>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobile && isMobileMenuOpen && (
                    <motion.div
                        className="header__overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                )}
            </AnimatePresence>
        </>
    )
}

export default Header
