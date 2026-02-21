import { useState, useEffect, useRef } from 'react'

/**
 * Returns true when the element is in the viewport (with optional threshold).
 * @param {Object} options - { threshold: number (0-1), rootMargin: string }
 */
export function useInView(options = {}) {
  const { threshold = 0.1, rootMargin = '0px 0px -40px 0px' } = options
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold, rootMargin }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return [ref, inView]
}
