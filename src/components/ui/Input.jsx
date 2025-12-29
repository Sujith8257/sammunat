import { useState } from 'react'
import { motion } from 'framer-motion'
import './Input.css'

const Input = ({
    label,
    type = 'text',
    name,
    value,
    onChange,
    error,
    placeholder,
    required = false,
    disabled = false,
    className = '',
    ...props
}) => {
    const [isFocused, setIsFocused] = useState(false)
    const hasValue = value && value.length > 0

    const wrapperClass = `input-wrapper ${isFocused ? 'input-wrapper--focused' : ''} ${error ? 'input-wrapper--error' : ''} ${className}`.trim()

    const InputElement = type === 'textarea' ? 'textarea' : 'input'

    return (
        <div className={wrapperClass}>
            {label && (
                <label
                    htmlFor={name}
                    className={`input-label ${(isFocused || hasValue) ? 'input-label--active' : ''}`}
                >
                    {label} {required && <span className="input-required">*</span>}
                </label>
            )}

            <InputElement
                id={name}
                name={name}
                type={type !== 'textarea' ? type : undefined}
                value={value}
                onChange={onChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                disabled={disabled}
                placeholder={placeholder}
                className="input-field"
                rows={type === 'textarea' ? 5 : undefined}
                {...props}
            />

            {error && (
                <motion.p
                    className="input-error"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {error}
                </motion.p>
            )}
        </div>
    )
}

export default Input
