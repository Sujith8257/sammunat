import { motion } from 'framer-motion'
import './Button.css'

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    icon: Icon,
    iconPosition = 'left',
    isLoading = false,
    disabled = false,
    className = '',
    onClick,
    type = 'button',
    ...props
}) => {
    const baseClass = 'button'
    const variantClass = `button--${variant}`
    const sizeClass = `button--${size}`
    const classes = `${baseClass} ${variantClass} ${sizeClass} ${className}`.trim()

    return (
        <motion.button
            type={type}
            className={classes}
            onClick={onClick}
            disabled={disabled || isLoading}
            whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
            whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
            transition={{ duration: 0.2 }}
            {...props}
        >
            {isLoading ? (
                <span className="spinner spinner-sm"></span>
            ) : (
                <>
                    {Icon && iconPosition === 'left' && <Icon className="button__icon button__icon--left" />}
                    <span className="button__text">{children}</span>
                    {Icon && iconPosition === 'right' && <Icon className="button__icon button__icon--right" />}
                </>
            )}
        </motion.button>
    )
}

export default Button
