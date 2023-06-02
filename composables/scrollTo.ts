interface ScrollToOptions {
  offset?: number
  behavior?: 'auto' | 'smooth'
}

export const useScrollTo = (container: Ref<HTMLElement | null>, options?: ScrollToOptions) => {
  const scroll = () => {
    if (!container.value) return
    const offset = options?.offset || 0
    const y = container.value.getBoundingClientRect().top + window.scrollY + offset
    window.scrollTo({ top: y })
  }

  return {
    scroll
  }
}