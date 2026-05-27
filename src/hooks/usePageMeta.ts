import { useEffect } from 'react'

interface PageMeta {
  title: string
  description: string
  ogImage?: string
}

const BASE_TITLE = 'Happy Path Studios'
const DEFAULT_OG_IMAGE = '/images/stack-logo3shadow.png'

export function usePageMeta({ title, description, ogImage }: PageMeta) {
  useEffect(() => {
    document.title = title.includes(BASE_TITLE) ? title : `${title} | ${BASE_TITLE}`

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name'
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.content = content
    }

    setMeta('description', description)
    setMeta('og:title', document.title, true)
    setMeta('og:description', description, true)
    setMeta('og:image', ogImage ?? DEFAULT_OG_IMAGE, true)
    setMeta('og:type', 'website', true)
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', document.title)
    setMeta('twitter:description', description)
  }, [title, description, ogImage])
}
