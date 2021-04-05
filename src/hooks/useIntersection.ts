import { useState, useEffect } from 'react'

export function useIntersection(target: React.RefObject<Element> | Element | null): boolean {
  const [intersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!target) return

    const element = target instanceof Element ? target : target.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting || entry.boundingClientRect.top > 0)
    })

    observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  })

  return intersecting
}
