import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './AnimatedMap.css'

const AnimatedMap = () => {
    const [activeLocation, setActiveLocation] = useState(0)

    const locations = [
        { 
            id: 1,
            name: 'Missoula',
            country: 'Montana, USA',
            flag: '🇺🇸',
            x: 18, // percentage position on map
            y: 35,
            zoom: { x: 20, y: 40 }
        },
        { 
            id: 2,
            name: 'Dubai',
            country: 'UAE',
            flag: '🇦🇪',
            x: 57,
            y: 42,
            zoom: { x: 55, y: 45 }
        },
        { 
            id: 3,
            name: 'Bangalore',
            country: 'India',
            flag: '🇮🇳',
            x: 67,
            y: 50,
            zoom: { x: 65, y: 52 }
        },
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveLocation((prev) => (prev + 1) % locations.length)
        }, 4000) // Change location every 4 seconds

        return () => clearInterval(interval)
    }, [locations.length])

    const currentLocation = locations[activeLocation]

    return (
        <div className="animated-map">
            {/* Map Container */}
            <div className="animated-map__container">
                <motion.div 
                    className="animated-map__viewport"
                    animate={{
                        scale: [1, 2.5, 2.5, 1],
                        x: [0, -(currentLocation.zoom.x - 50) * 3, -(currentLocation.zoom.x - 50) * 3, 0],
                        y: [0, -(currentLocation.zoom.y - 50) * 3, -(currentLocation.zoom.y - 50) * 3, 0],
                    }}
                    transition={{
                        duration: 4,
                        ease: [0.4, 0, 0.2, 1],
                        times: [0, 0.3, 0.7, 1],
                    }}
                    key={activeLocation}
                >
                    {/* World Map SVG */}
                    <svg 
                        className="animated-map__svg" 
                        viewBox="0 0 100 60" 
                        preserveAspectRatio="xMidYMid slice"
                    >
                        {/* Grid Pattern */}
                        <defs>
                            <pattern id="grid" width="5" height="5" patternUnits="userSpaceOnUse">
                                <path d="M 5 0 L 0 0 0 5" fill="none" stroke="rgba(99, 102, 241, 0.1)" strokeWidth="0.1"/>
                            </pattern>
                            <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#1e1b4b" />
                                <stop offset="100%" stopColor="#0f172a" />
                            </linearGradient>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>
                        
                        {/* Background */}
                        <rect width="100" height="60" fill="url(#mapGradient)" />
                        <rect width="100" height="60" fill="url(#grid)" />
                        
                        {/* Simplified World Continents */}
                        <g className="animated-map__continents" fill="rgba(99, 102, 241, 0.15)" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="0.2">
                            {/* North America */}
                            <path d="M5,20 Q8,15 15,18 Q22,15 25,20 Q28,25 25,32 Q20,38 15,35 Q8,32 5,28 Q3,24 5,20" />
                            {/* South America */}
                            <path d="M18,40 Q22,38 25,42 Q27,48 24,54 Q20,58 17,54 Q14,48 16,42 Q17,40 18,40" />
                            {/* Europe */}
                            <path d="M42,18 Q48,15 52,18 Q55,22 52,26 Q48,28 44,26 Q40,24 42,18" />
                            {/* Africa */}
                            <path d="M42,30 Q48,28 52,32 Q55,40 52,50 Q48,55 44,52 Q38,45 40,35 Q41,31 42,30" />
                            {/* Asia */}
                            <path d="M55,15 Q65,12 78,18 Q88,22 90,30 Q88,38 80,42 Q70,45 62,42 Q55,38 52,30 Q50,22 55,15" />
                            {/* Australia */}
                            <path d="M75,48 Q82,46 88,50 Q90,55 86,58 Q80,60 76,56 Q72,52 75,48" />
                        </g>

                        {/* Connection Lines */}
                        <g className="animated-map__connections">
                            <motion.path
                                d={`M${locations[0].x},${locations[0].y} Q40,25 ${locations[1].x},${locations[1].y}`}
                                fill="none"
                                stroke="url(#lineGradient)"
                                strokeWidth="0.3"
                                strokeDasharray="2,1"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 0.5 }}
                                transition={{ duration: 2, delay: 0.5 }}
                            />
                            <motion.path
                                d={`M${locations[1].x},${locations[1].y} Q62,45 ${locations[2].x},${locations[2].y}`}
                                fill="none"
                                stroke="url(#lineGradient)"
                                strokeWidth="0.3"
                                strokeDasharray="2,1"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 0.5 }}
                                transition={{ duration: 2, delay: 1 }}
                            />
                            <defs>
                                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#6366F1" />
                                    <stop offset="50%" stopColor="#EC4899" />
                                    <stop offset="100%" stopColor="#8B5CF6" />
                                </linearGradient>
                            </defs>
                        </g>

                        {/* Location Markers */}
                        {locations.map((location, index) => (
                            <g key={location.id} className="animated-map__marker">
                                {/* Pulse rings */}
                                <circle
                                    cx={location.x}
                                    cy={location.y}
                                    r={activeLocation === index ? 3 : 1.5}
                                    fill="none"
                                    stroke={activeLocation === index ? "#EC4899" : "#6366F1"}
                                    strokeWidth="0.2"
                                    className={`animated-map__pulse ${activeLocation === index ? 'animated-map__pulse--active' : ''}`}
                                />
                                <circle
                                    cx={location.x}
                                    cy={location.y}
                                    r={activeLocation === index ? 2 : 1}
                                    fill="none"
                                    stroke={activeLocation === index ? "#EC4899" : "#6366F1"}
                                    strokeWidth="0.2"
                                    className={`animated-map__pulse animated-map__pulse--delay ${activeLocation === index ? 'animated-map__pulse--active' : ''}`}
                                />
                                {/* Center dot */}
                                <circle
                                    cx={location.x}
                                    cy={location.y}
                                    r={activeLocation === index ? 0.8 : 0.5}
                                    fill={activeLocation === index ? "#EC4899" : "#6366F1"}
                                    filter="url(#glow)"
                                />
                            </g>
                        ))}
                    </svg>
                </motion.div>

                {/* Vignette overlay */}
                <div className="animated-map__vignette"></div>
            </div>

            {/* Location Info Card */}
            <div className="animated-map__info">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeLocation}
                        className="animated-map__info-card"
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    >
                        <span className="animated-map__info-flag">{currentLocation.flag}</span>
                        <div className="animated-map__info-text">
                            <h4>{currentLocation.name}</h4>
                            <p>{currentLocation.country}</p>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Location Indicators */}
                <div className="animated-map__indicators">
                    {locations.map((_, index) => (
                        <button
                            key={index}
                            className={`animated-map__indicator ${activeLocation === index ? 'animated-map__indicator--active' : ''}`}
                            onClick={() => setActiveLocation(index)}
                            aria-label={`Go to location ${index + 1}`}
                        >
                            <motion.div 
                                className="animated-map__indicator-fill"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: activeLocation === index ? 1 : 0 }}
                                transition={{ duration: activeLocation === index ? 4 : 0.3, ease: "linear" }}
                            />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AnimatedMap

