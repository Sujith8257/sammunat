import { motion } from 'framer-motion'
import './SectionTitle.css'

const SectionTitle = ({
    eyebrow,
    title,
    subtitle,
    gradient = true,
    centered = false,
    className = ''
}) => {
    const wrapperClass = `section-title ${centered ? 'section-title--centered' : ''} ${className}`.trim()

    return (
        <div className={wrapperClass}>
            {eyebrow && (
                <motion.div
                    className="section-title__eyebrow-wrapper"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="section-title__eyebrow-line section-title__eyebrow-line--left"></span>
                    <p className="section-title__eyebrow">{eyebrow}</p>
                    <span className="section-title__eyebrow-line section-title__eyebrow-line--right"></span>
                </motion.div>
            )}

            <motion.h2
                className={`section-title__heading ${gradient ? 'section-title__heading--gradient' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            >
                {title}
            </motion.h2>

            {subtitle && (
                <motion.p
                    className="section-title__subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
                >
                    {subtitle}
                </motion.p>
            )}

            {centered && (
                <motion.div
                    className="section-title__underline"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
                />
            )}
        </div>
    )
}

export default SectionTitle
