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

    // Tracked across callbacks: a callback only reports sections whose state
    // *changed*, not everything currently on screen.
    const visible = new Set()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.add(e.target)
          else visible.delete(e.target)
        }

        // A nested target (#partners sits inside #company) makes both intersect at
        // once. Prefer the most specific one, or the ancestor would always win on
        // top position and the nested link could never go active.
        const current = [...visible]
        const specific = current.filter(
          (el) => !current.some((other) => other !== el && el.contains(other)),
        )

        const topmost = specific.sort(
          (a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top,
        )[0]
        if (topmost) setActive(topmost.id)
      },
      { rootMargin: `-${offset}px 0px -60% 0px`, threshold: 0 },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [ids, offset])

  return active
}
