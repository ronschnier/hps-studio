import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useScrollReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(e => {
            if (e.isIntersecting) e.target.classList.add('is-revealed')
          })
        },
        { rootMargin: '0px 0px -5% 0px', threshold: 0.1 }
      )
      document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el))
      return () => observer.disconnect()
    }, 60)

    return () => clearTimeout(timer)
  }, [pathname])
}
