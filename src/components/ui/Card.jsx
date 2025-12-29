import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'
import './Card.css'

const Card = ({
    children,
    glass = false,
    hover = true,
    gradient = false,
    glow = false,
    tilt = false,
    icon: Icon,
    className = '',
    ...props
}) => {
    const ref = useRef(null)
    const [isHovered, setIsHovered] = useState(false)
    
    // Mouse position for tilt effect
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    
    // Smooth spring animation
    const springConfig = { damping: 25, stiffness: 300 }
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), springConfig)
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), springConfig)
    
    // Glare effect position
    const glareX = useSpring(useTransform(x, [-0.5, 0.5], [0, 100]), springConfig)
    const glareY = useSpring(useTransform(y, [-0.5, 0.5], [0, 100]), springConfig)

    const handleMouseMove = (e) => {
        if (!tilt || !ref.current) return
        
        const rect = ref.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        
        x.set((e.clientX - centerX) / rect.width)
        y.set((e.clientY - centerY) / rect.height)
    }

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
        x.set(0)
        y.set(0)
    }

    const baseClass = 'card'
    const glassClass = glass ? 'card--glass' : ''
    const hoverClass = hover ? 'card--hover' : ''
    const gradientClass = gradient ? 'card--gradient' : ''
    const glowClass = glow ? 'card--glow' : ''
    const tiltClass = tilt ? 'card--tilt' : ''
    const classes = `${baseClass} ${glassClass} ${hoverClass} ${gradientClass} ${glowClass} ${tiltClass} ${className}`.trim()

    return (
        <motion.div
            ref={ref}
            className={classes}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            style={tilt ? {
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
            } : {}}
            {...props}
        >
            {/* Gradient border effect */}
            {gradient && <div className="card__gradient-border" />}
            
            {/* Glow effect */}
            {glow && isHovered && (
                <motion.div 
                    className="card__glow-effect"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                />
            )}
            
            {/* Glare effect for tilt */}
            {tilt && isHovered && (
                <motion.div 
                    className="card__glare"
                    style={{
                        background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.3) 0%, transparent 60%)`
                    }}
                />
            )}

            {/* Shimmer effect on hover */}
            {hover && (
                <div className="card__shimmer" />
            )}
            
            {Icon && (
                <motion.div 
                    className="card__icon-wrapper"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                    style={tilt ? { transform: 'translateZ(30px)' } : {}}
                >
                    <Icon className="card__icon" />
                    <div className="card__icon-glow" />
                </motion.div>
            )}
            <div 
                className="card__content"
                style={tilt ? { transform: 'translateZ(20px)' } : {}}
            >
                {children}
            </div>
        </motion.div>
    )
}

export default Card
