import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Custom hook for GSAP scroll-triggered animations
 * @param {Object} options - Animation configuration
 * @returns {Object} - Ref to attach to animated element
 */
export const useScrollAnimation = (options = {}) => {
    const elementRef = useRef(null)

    useEffect(() => {
        if (!elementRef.current) return

        const {
            from = { opacity: 0, y: 50 },
            to = { opacity: 1, y: 0 },
            duration = 1,
            ease = 'power3.out',
            start = 'top 80%',
            end = 'bottom 20%',
            scrub = false,
            markers = false,
            ...otherOptions
        } = options

        const animation = gsap.fromTo(
            elementRef.current,
            from,
            {
                ...to,
                duration,
                ease,
                scrollTrigger: {
                    trigger: elementRef.current,
                    start,
                    end,
                    scrub,
                    markers,
                    ...otherOptions,
                },
            }
        )

        return () => {
            animation.scrollTrigger?.kill()
            animation.kill()
        }
    }, [options])

    return elementRef
}

/**
 * Hook for stagger animations on multiple children
 */
export const useStaggerAnimation = (options = {}) => {
    const containerRef = useRef(null)

    useEffect(() => {
        if (!containerRef.current) return

        const {
            selector = '.stagger-item',
            from = { opacity: 0, y: 30 },
            to = { opacity: 1, y: 0 },
            stagger = 0.1,
            duration = 0.8,
            ease = 'power3.out',
            start = 'top 80%',
        } = options

        const children = containerRef.current.querySelectorAll(selector)

        const animation = gsap.fromTo(
            children,
            from,
            {
                ...to,
                duration,
                ease,
                stagger,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start,
                },
            }
        )

        return () => {
            animation.scrollTrigger?.kill()
            animation.kill()
        }
    }, [options])

    return containerRef
}

export default useScrollAnimation
