import { useEffect, useRef } from 'react'

/** Reveals a single element when it scrolls into view */
export function useReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.12) {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return ref
}

/**
 * Observes ALL elements with class 'reveal', 'reveal-left', 'reveal-right',
 * 'reveal-scale', or 'reveal-zoom' inside the given container ref.
 * Also handles stagger-children grids.
 */
export function useRevealAll<T extends HTMLElement = HTMLDivElement>(threshold = 0.1) {
  const containerRef = useRef<T>(null)
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const selectors = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-zoom'
    const elements = Array.from(container.querySelectorAll<HTMLElement>(selectors))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [threshold])

  return containerRef
}
