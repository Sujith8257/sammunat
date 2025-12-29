import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import { Clock } from 'lucide-react'
import './AnimatedMap.css'

const AnimatedMap = () => {
    const [activeLocation, setActiveLocation] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const mapRef = useRef(null)
    
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    
    const springConfig = { damping: 25, stiffness: 700 }
    const x = useSpring(mouseX, springConfig)
    const y = useSpring(mouseY, springConfig)

    const locations = [
        { 
            id: 1,
            name: 'Missoula',
            country: 'Montana, USA',
            flag: '🇺🇸',
            timezone: 'MST (UTC-7)',
            x: 18,
            y: 35,
            zoom: { x: 20, y: 40 },
            color: '#6366F1'
        },
        { 
            id: 2,
            name: 'Dubai',
            country: 'UAE',
            flag: '🇦🇪',
            timezone: 'GST (UTC+4)',
            x: 57,
            y: 42,
            zoom: { x: 55, y: 45 },
            color: '#EC4899'
        },
        { 
            id: 3,
            name: 'Bangalore',
            country: 'India',
            flag: '🇮🇳',
            timezone: 'IST (UTC+5:30)',
            x: 67,
            y: 50,
            zoom: { x: 65, y: 52 },
            color: '#10B981'
        },
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHovered) {
                setActiveLocation((prev) => (prev + 1) % locations.length)
            }
        }, 5000) // Increased to 5 seconds for better viewing

        return () => clearInterval(interval)
    }, [locations.length, isHovered])

    const handleMouseMove = (e) => {
        if (!mapRef.current) return
        const rect = mapRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        
        mouseX.set((e.clientX - centerX) / 20)
        mouseY.set((e.clientY - centerY) / 20)
    }

    const handleMouseLeave = () => {
        mouseX.set(0)
        mouseY.set(0)
    }

    const currentLocation = locations[activeLocation]

    return (
        <div 
            className="animated-map"
            ref={mapRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={(e) => {
                handleMouseLeave(e)
                setIsHovered(false)
            }}
        >
            {/* Floating Particles */}
            <div className="animated-map__particles">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="animated-map__particle"
                        initial={{
                            x: Math.random() * 100 + '%',
                            y: Math.random() * 100 + '%',
                        }}
                        animate={{
                            y: [null, Math.random() * 100 + '%'],
                            x: [null, Math.random() * 100 + '%'],
                            opacity: [0.3, 0.7, 0.3],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 5,
                        }}
                    />
                ))}
            </div>

            {/* Map Container */}
            <div className="animated-map__container">
                <motion.div 
                    className="animated-map__viewport"
                    style={{ x, y }}
                    animate={{
                        scale: [1, 3, 3, 1],
                        x: [0, -(currentLocation.zoom.x - 50) * 4, -(currentLocation.zoom.x - 50) * 4, 0],
                        y: [0, -(currentLocation.zoom.y - 50) * 4, -(currentLocation.zoom.y - 50) * 4, 0],
                    }}
                    transition={{
                        duration: 5,
                        ease: [0.4, 0, 0.2, 1],
                        times: [0, 0.25, 0.75, 1],
                    }}
                    key={activeLocation}
                >
                    {/* World Map SVG */}
                    <svg 
                        className="animated-map__svg" 
                        viewBox="0 0 100 60" 
                        preserveAspectRatio="xMidYMid slice"
                    >
                        <defs>
                            {/* Grid Pattern */}
                            <pattern id="grid" width="5" height="5" patternUnits="userSpaceOnUse">
                                <path d="M 5 0 L 0 0 0 5" fill="none" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="0.1"/>
                            </pattern>
                            
                            {/* Map Gradient */}
                            <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#1e1b4b" />
                                <stop offset="50%" stopColor="#312e81" />
                                <stop offset="100%" stopColor="#0f172a" />
                            </linearGradient>
                            
                            {/* Glow Filter */}
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="0.8" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                            
                            {/* Stronger Glow for Active */}
                            <filter id="glowStrong">
                                <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                            
                            {/* Line Gradient */}
                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#6366F1" stopOpacity="0.8" />
                                <stop offset="50%" stopColor="#EC4899" stopOpacity="0.6" />
                                <stop offset="100%" stopColor="#10B981" stopOpacity="0.8" />
                            </linearGradient>
                            
                            {/* Radial Gradient for Active Marker */}
                            <radialGradient id="markerGradient">
                                <stop offset="0%" stopColor="#EC4899" stopOpacity="1" />
                                <stop offset="50%" stopColor="#EC4899" stopOpacity="0.6" />
                                <stop offset="100%" stopColor="#EC4899" stopOpacity="0" />
                            </radialGradient>
                        </defs>
                        
                        {/* Background */}
                        <rect width="100" height="60" fill="url(#mapGradient)" />
                        <rect width="100" height="60" fill="url(#grid)" />
                        
                        {/* Enhanced World Continents */}
                        <g className="animated-map__continents" fill="rgba(99, 102, 241, 0.2)" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="0.25">
                            {/* North America - More detailed */}
                            <path d="M5,18 Q8,12 12,15 Q18,10 22,15 Q26,18 28,22 Q30,28 27,32 Q24,36 20,35 Q15,38 10,34 Q6,30 5,25 Q4,20 5,18" />
                            <path d="M8,32 Q12,30 15,33 Q18,36 15,40 Q12,42 8,40 Q5,38 6,35 Q7,33 8,32" />
                            
                            {/* South America */}
                            <path d="M18,38 Q22,36 25,40 Q27,45 25,50 Q22,55 19,58 Q16,58 15,54 Q14,48 16,43 Q17,40 18,38" />
                            
                            {/* Europe */}
                            <path d="M40,16 Q45,13 50,16 Q54,19 52,23 Q50,26 46,27 Q42,26 40,22 Q39,19 40,16" />
                            <path d="M48,20 Q52,18 55,21 Q56,24 54,26 Q51,27 48,25 Q46,23 48,20" />
                            
                            {/* Africa */}
                            <path d="M42,28 Q48,26 52,30 Q55,36 53,42 Q50,48 46,52 Q42,54 40,50 Q38,42 39,35 Q40,30 42,28" />
                            
                            {/* Asia - More detailed */}
                            <path d="M52,14 Q60,10 70,14 Q80,18 88,22 Q92,28 90,34 Q88,40 82,42 Q75,44 68,42 Q60,40 55,35 Q52,28 52,22 Q52,18 52,14" />
                            <path d="M65,20 Q72,18 78,22 Q80,26 78,30 Q75,32 70,30 Q65,28 63,24 Q64,21 65,20" />
                            
                            {/* Australia */}
                            <path d="M74,46 Q80,44 86,48 Q88,52 85,56 Q80,58 76,56 Q72,52 74,48 Q74,47 74,46" />
                            
                            {/* Japan */}
                            <path d="M88,28 Q90,26 92,28 Q92,30 90,31 Q88,30 88,28" />
                            
                            {/* UK */}
                            <path d="M44,18 Q46,17 47,19 Q46,21 44,20 Q43,19 44,18" />
                        </g>

                        {/* Animated Connection Lines */}
                        <g className="animated-map__connections">
                            <motion.path
                                d={`M${locations[0].x},${locations[0].y} Q35,28 ${locations[1].x},${locations[1].y}`}
                                fill="none"
                                stroke="url(#lineGradient)"
                                strokeWidth="0.4"
                                strokeDasharray="3,2"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ 
                                    pathLength: 1, 
                                    opacity: [0.3, 0.7, 0.3],
                                }}
                                transition={{ 
                                    pathLength: { duration: 2, delay: 0.5 },
                                    opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                                }}
                            />
                            <motion.path
                                d={`M${locations[1].x},${locations[1].y} Q62,46 ${locations[2].x},${locations[2].y}`}
                                fill="none"
                                stroke="url(#lineGradient)"
                                strokeWidth="0.4"
                                strokeDasharray="3,2"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ 
                                    pathLength: 1, 
                                    opacity: [0.3, 0.7, 0.3],
                                }}
                                transition={{ 
                                    pathLength: { duration: 2, delay: 1 },
                                    opacity: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                                }}
                            />
                            <motion.path
                                d={`M${locations[2].x},${locations[2].y} Q42,42 ${locations[0].x},${locations[0].y}`}
                                fill="none"
                                stroke="url(#lineGradient)"
                                strokeWidth="0.4"
                                strokeDasharray="3,2"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ 
                                    pathLength: 1, 
                                    opacity: [0.3, 0.7, 0.3],
                                }}
                                transition={{ 
                                    pathLength: { duration: 2, delay: 1.5 },
                                    opacity: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }
                                }}
                            />
                        </g>

                        {/* Location Markers with Enhanced Effects */}
                        {locations.map((location, index) => {
                            const isActive = activeLocation === index
                            return (
                                <g key={location.id} className="animated-map__marker">
                                    {/* Outer glow ring */}
                                    {isActive && (
                                        <circle
                                            cx={location.x}
                                            cy={location.y}
                                            r={5}
                                            fill="url(#markerGradient)"
                                            opacity="0.3"
                                        />
                                    )}
                                    
                                    {/* Pulse rings */}
                                    <motion.circle
                                        cx={location.x}
                                        cy={location.y}
                                        r={isActive ? 3.5 : 2}
                                        fill="none"
                                        stroke={isActive ? location.color : "#6366F1"}
                                        strokeWidth="0.3"
                                        className={`animated-map__pulse ${isActive ? 'animated-map__pulse--active' : ''}`}
                                        animate={isActive ? {
                                            r: [3.5, 6, 3.5],
                                            opacity: [1, 0, 1],
                                        } : {}}
                                        transition={isActive ? {
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeOut"
                                        } : {}}
                                    />
                                    <motion.circle
                                        cx={location.x}
                                        cy={location.y}
                                        r={isActive ? 2.5 : 1.5}
                                        fill="none"
                                        stroke={isActive ? location.color : "#6366F1"}
                                        strokeWidth="0.3"
                                        className={`animated-map__pulse animated-map__pulse--delay ${isActive ? 'animated-map__pulse--active' : ''}`}
                                        animate={isActive ? {
                                            r: [2.5, 5, 2.5],
                                            opacity: [1, 0, 1],
                                        } : {}}
                                        transition={isActive ? {
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeOut",
                                            delay: 0.5
                                        } : {}}
                                    />
                                    
                                    {/* Center dot with glow */}
                                    <circle
                                        cx={location.x}
                                        cy={location.y}
                                        r={isActive ? 1.2 : 0.7}
                                        fill={isActive ? location.color : "#6366F1"}
                                        filter={isActive ? "url(#glowStrong)" : "url(#glow)"}
                                    />
                                    
                                    {/* Pin icon shadow */}
                                    {isActive && (
                                        <motion.g
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <circle
                                                cx={location.x}
                                                cy={location.y + 1.5}
                                                r={0.8}
                                                fill="rgba(0, 0, 0, 0.3)"
                                                filter="url(#glow)"
                                            />
                                        </motion.g>
                                    )}
                                </g>
                            )
                        })}
                    </svg>
                </motion.div>

                {/* Enhanced Vignette */}
                <div className="animated-map__vignette"></div>
                
                {/* Gradient Overlay */}
                <div className="animated-map__gradient-overlay"></div>
            </div>

            {/* Enhanced Location Info Card */}
            <div className="animated-map__info">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeLocation}
                        className="animated-map__info-card"
                        initial={{ opacity: 0, y: 20, scale: 0.95, rotateX: -15 }}
                        animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95, rotateX: 15 }}
                        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                        style={{
                            background: `linear-gradient(135deg, ${currentLocation.color}15, ${currentLocation.color}05)`,
                            borderColor: `${currentLocation.color}40`,
                        }}
                    >
                        <div className="animated-map__info-flag-wrapper">
                            <motion.span 
                                className="animated-map__info-flag"
                                animate={{ 
                                    scale: [1, 1.1, 1],
                                    rotate: [0, 5, -5, 0]
                                }}
                                transition={{ 
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                {currentLocation.flag}
                            </motion.span>
                        </div>
                        <div className="animated-map__info-text">
                            <h4>{currentLocation.name}</h4>
                            <p>{currentLocation.country}</p>
                            <div className="animated-map__info-meta">
                                <span className="animated-map__info-timezone">
                                    <Clock size={12} />
                                    {currentLocation.timezone}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Enhanced Location Indicators */}
                <div className="animated-map__indicators">
                    {locations.map((location, index) => (
                        <button
                            key={index}
                            className={`animated-map__indicator ${activeLocation === index ? 'animated-map__indicator--active' : ''}`}
                            onClick={() => setActiveLocation(index)}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            aria-label={`Go to ${location.name}`}
                            style={{
                                '--indicator-color': location.color
                            }}
                        >
                            <motion.div 
                                className="animated-map__indicator-fill"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: activeLocation === index ? 1 : 0 }}
                                transition={{ duration: activeLocation === index ? 5 : 0.3, ease: "linear" }}
                            />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AnimatedMap
