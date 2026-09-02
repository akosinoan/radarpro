import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently in view so the navbar can show an active state.
 * Uses a top-biased rootMargin so a section counts as "current" once its heading
 * reaches the upper third of the viewport, which matches how people read.
 */
export default function useScrollSpy(ids, offset = 96) {
  const [active, setActive] = useState(null)

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: `-${offset}px 0px -60% 0px`, threshold: 0 },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [ids, offset])

  return active
}
